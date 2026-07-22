"use client"

import { BadgeCheck } from "lucide-react"
import { useLanguage } from "@/context/language-context"

// Brands the shop actually deals in (from the signboard)
const brands = [
  "Bajaj",
  "Prestige",
  "Usha",
  "Sujata",
  "Hawkins",
  "Butterfly",
  "Havells",
  "Crompton",
  "Symphony",
  "United",
  "Link",
  "Vidyut",
]

export function BrandsStrip() {
  const { language } = useLanguage()
  const hi = language === "hi"

  const items = [...brands, ...brands] // duplicated for a seamless marquee loop

  return (
    <section aria-label="Brands we deal in" className="border-y border-border bg-secondary/50 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="flex items-center justify-center gap-2 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <BadgeCheck className="h-4 w-4 text-primary" />
          {hi ? "इन भरोसेमंद ब्रांड्स के अधिकृत विक्रेता" : "Authorized dealer of trusted brands"}
        </p>
      </div>
      <div className="relative mt-4">
        <div className="flex w-max animate-marquee gap-3 motion-reduce:animate-none motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
          {items.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="whitespace-nowrap rounded-full border border-border bg-card px-5 py-2 font-serif text-base font-semibold text-foreground/80"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
