"use client"

import { useEffect, useState } from "react"

export function useScrollSpy(sectionIds: string[], offset = 120) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (sections.length === 0) return

    const onScroll = () => {
      const scrollY = window.scrollY + offset
      let current: string | null = null

      for (const section of sections) {
        if (section.offsetTop <= scrollY) {
          current = section.id
        }
      }

      setActiveId(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [sectionIds, offset])

  return activeId
}
