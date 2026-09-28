"use client"

import Link from "next/link"
import { ArrowRight, Truck, ShieldCheck, Star, Wrench, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { businessConfig } from "@/config/business"
import { HeroVisual } from "@/components/hero-visual"
import { AnimatedSection } from "@/components/animated-section"

export function Hero() {
  const { t } = useLanguage()

  const trustItems = [
    { Icon: MapPin, label: t("hero.trust_landmark") },
    { Icon: Truck, label: t("hero.trust_free_del") },
    { Icon: ShieldCheck, label: t("hero.trust_warranty") },
    { Icon: Wrench, label: t("hero.trust_repair") },
  ]

  return (
    <AnimatedSection className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="absolute -top-24 -right-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-primary/8 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/90 px-4 py-1.5 text-xs sm:text-sm font-medium text-muted-foreground shadow-sm backdrop-blur-sm">
              <Star className="h-4 w-4 fill-accent text-accent" />
              {t("hero.badge")}
            </span>

            <h1 className="mt-6 font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-balance text-foreground">
              {t("hero.title_line1")}{" "}
              <span className="block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                {t("hero.title_line2")}
              </span>
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              {t("hero.description")}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/#featured"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 sm:py-4 text-base font-semibold text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg transition-all active:scale-[0.98]"
              >
                {t("hero.cta_shop")}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#repairs"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-border/80 bg-card px-7 py-3.5 sm:py-4 text-base font-semibold text-foreground hover:border-primary/50 hover:text-primary hover:shadow-sm transition-all active:scale-[0.98]"
              >
                <Wrench className="h-4 w-4 text-primary" />
                {t("hero.cta_repair")}
              </Link>
              <a
                href={`tel:${businessConfig.contact.phone}`}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-border/80 bg-card px-6 py-3.5 sm:py-4 text-base font-semibold text-foreground hover:border-primary/50 hover:text-primary hover:shadow-sm transition-all active:scale-[0.98] lg:hidden xl:inline-flex"
              >
                <Phone className="h-4 w-4 text-primary" />
                {businessConfig.contact.phoneDisplay}
              </a>
            </div>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl mx-auto lg:mx-0">
              {trustItems.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-card/80 px-3.5 py-2.5 text-xs sm:text-sm text-foreground/80 shadow-xs backdrop-blur-sm transition-colors hover:border-primary/30"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <HeroVisual />
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
