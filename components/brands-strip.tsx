"use client"

import Link from "next/link"
import { BadgeCheck } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { brands as brandPages } from "@/config/products"

// Brands the shop actually deals in (from the signboard). Those we stock
// products from get their own page; the rest stay as plain labels.
const signboardBrands = [
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

const chipClass =
  "whitespace-nowrap rounded-full border border-border bg-card px-5 py-2 font-serif text-base font-semibold text-foreground/80"

export function BrandsStrip() {
  const { language } = useLanguage()
  const hi = language === "hi"

  const slugFor = (name: string) => brandPages.find((b) => b.id === name)?.slug
  const items = [...signboardBrands, ...signboardBrands] // duplicated for a seamless marquee loop

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
          {items.map((brand, i) => {
            const slug = slugFor(brand)
            const isClone = i >= signboardBrands.length
            return slug ? (
              <Link
                key={`${brand}-${i}`}
                href={`/products/brand/${slug}`}
                // Clones exist only for the visual loop — hide them from a11y and crawlers
                aria-hidden={isClone || undefined}
                tabIndex={isClone ? -1 : undefined}
                className={`${chipClass} transition-colors hover:border-primary/50 hover:text-foreground`}
              >
                {brand}
              </Link>
            ) : (
              <span key={`${brand}-${i}`} aria-hidden={isClone || undefined} className={chipClass}>
                {brand}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
