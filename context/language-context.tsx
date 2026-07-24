"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { Language, getTranslation } from "@/config/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, fallback?: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Always renders the provider — the server and first client render both use "en",
// then the saved language loads after mount. Never conditionally unwrap children
// here: doing so desyncs hydration and can duplicate the whole page DOM.
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null
    if (saved === "en" || saved === "hi") {
      // localStorage doesn't exist during SSR, so this can only be read post-mount —
      // the resulting extra render is the intended hydration-safe tradeoff (see comment above).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  // Keep <html lang> in sync so screen readers and search engines
  // know which language the page is showing
  useEffect(() => {
    document.documentElement.lang = language === "hi" ? "hi" : "en"
  }, [language])

  const t = (key: string, fallback = "") => {
    return getTranslation(language, key, fallback)
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    // Default English values for components rendered outside the provider (SSR safety)
    return {
      language: "en" as Language,
      setLanguage: () => {},
      t: (key: string, fallback = "") => getTranslation("en", key, fallback),
    }
  }
  return context
}
