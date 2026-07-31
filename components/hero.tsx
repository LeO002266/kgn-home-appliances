"use client"

import Link from "next/link"
import { ArrowRight, Truck, ShieldCheck, Star, Wrench, Flame, Phone, Store } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { businessConfig } from "@/config/business"
import { HeroVisual } from "@/components/hero-visual"
import { AnimatedSection } from "@/components/animated-section"

export function Hero() {
  const { t } = useLanguage()

  const trustItems = [
    { Icon: Store, label: t("hero.one_counter") },
    { Icon: Truck, label: t("hero.free_delivery") },
    { Icon: ShieldCheck, label: t("hero.warranty") },
    { Icon: Flame, label: t("hero.gas_pipeline") },
  ]

  return (
    <AnimatedSection className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="absolute -top-24 -right-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-primary/8 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-24 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm">
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
                href="/products"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 sm:py-4 text-base font-semibold text-primary-foreground shadow-md hover:bg-primary/90 transition-all active:scale-[0.98]"
              >
                {t("hero.cta_shop")}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#repairs"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 sm:py-4 text-base font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-colors active:scale-[0.98]"
              >
                <Wrench className="h-4 w-4" />
                {t("hero.cta_repair")}
              </Link>
              <a
                href={`tel:${businessConfig.contact.phone}`}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 sm:py-4 text-base font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-colors active:scale-[0.98] lg:hidden xl:inline-flex"
              >
                <Phone className="h-4 w-4" />
                {businessConfig.contact.phoneDisplay}
              </a>
            </div>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl mx-auto lg:mx-0">
              {trustItems.map(({ Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-border/70 bg-card/70 px-4 py-2.5 text-sm text-muted-foreground backdrop-blur-sm"
                >
                  <Icon className="h-4.5 w-4.5 h-[18px] w-[18px] text-primary shrink-0" />
                  {label}
                </span>
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
