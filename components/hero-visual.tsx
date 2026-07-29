"use client"

import { useState } from "react"
import {
  Flame,
  GlassWater,
  Lock,
  CookingPot,
  Blend,
  Fan,
  Home,
  ShieldCheck,
  Phone,
} from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"
import { businessConfig } from "@/config/business"

const applianceIcons = [
  { Icon: Flame, className: "top-[8%] left-[10%] rotate-[-8deg]" },
  { Icon: GlassWater, className: "top-[12%] right-[12%] rotate-[6deg]" },
  { Icon: Lock, className: "top-[42%] left-[6%] rotate-[4deg]" },
  { Icon: CookingPot, className: "bottom-[18%] left-[14%] rotate-[-4deg]" },
  { Icon: Blend, className: "bottom-[22%] right-[10%] rotate-[8deg]" },
  { Icon: Fan, className: "top-[38%] right-[8%] rotate-[-6deg]" },
  { Icon: Home, className: "bottom-[8%] right-[28%] rotate-[3deg]" },
]

// The real storefront photo lives at /public/storefront.jpg.
// If it's missing we fall back to the kitchen render, then to the icon grid.
const imageSources = ["/storefront.jpg", "/products/hero-kitchen.png"]

export function HeroVisual() {
  const { t } = useLanguage()
  const [imageIndex, setImageIndex] = useState(0)

  const imageFailed = imageIndex >= imageSources.length

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary via-card to-accent/10 shadow-xl">
        {!imageFailed ? (
          <Image
            src={imageSources[imageIndex]}
            alt="KGN Home Appliance & Services store on Junwani Road, Bhilai"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            onError={() => setImageIndex((i) => i + 1)}
          />
        ) : (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.45_0.19_295/0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,oklch(0.8_0.14_85/0.2),transparent_45%)]" />
            {applianceIcons.map(({ Icon, className }, i) => (
              <span
                key={i}
                className={`absolute flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-border/60 bg-card/90 text-primary shadow-md backdrop-blur-sm animate-float ${className}`}
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.5} />
              </span>
            ))}
          </div>
        )}
      </div>

      <a
        href={`tel:${businessConfig.contact.phone}`}
        className="absolute -bottom-4 left-4 sm:-bottom-5 sm:left-8 flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 sm:px-5 sm:py-4 shadow-lg backdrop-blur-sm max-w-[calc(100%-2rem)] transition-colors hover:border-primary/50"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Phone className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-lg sm:text-xl font-bold text-primary leading-tight">
            {businessConfig.contact.phoneDisplay}
          </span>
          <span className="block text-xs sm:text-sm text-muted-foreground">{t("hero.call_for_price")}</span>
        </span>
      </a>

      {/* Factual badge — no invented rating. */}
      <div className="absolute -top-3 right-4 sm:-top-4 sm:right-8 flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 shadow-md">
        <ShieldCheck className="h-4 w-4 text-primary" />
        <span className="text-sm font-semibold text-foreground">{t("hero.warranty_badge")}</span>
      </div>
    </div>
  )
}
