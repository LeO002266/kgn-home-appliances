"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function ScrollToTop() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t("common.back_to_top")}
      className="fixed bottom-24 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105 md:bottom-28 md:right-8"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
