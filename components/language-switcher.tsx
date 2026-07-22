"use client"

import { useLanguage } from "@/context/language-context"

// Compact segmented toggle. No flag emojis — Windows renders them as
// plain letters ("GB"/"IN"), which looks broken.
export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const btn = (active: boolean) =>
    `rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
      active ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
    }`

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-border bg-secondary/60 p-0.5">
      <button onClick={() => setLanguage("en")} className={btn(language === "en")} aria-label="Switch to English">
        EN
      </button>
      <button onClick={() => setLanguage("hi")} className={btn(language === "hi")} aria-label="हिंदी में देखें">
        हिंदी
      </button>
    </div>
  )
}
