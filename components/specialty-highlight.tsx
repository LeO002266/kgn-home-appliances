"use client"

import Link from "next/link"
import { Blend, Flame, ArrowRight, Sparkles, Star, Store, Wrench } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { products, categoryUrl } from "@/config/products"

export function SpecialtyHighlight() {
  const { t } = useLanguage()

  const mixerCount = products.filter((p) => p.category === "mixer-grinders").length
  const gasCount = products.filter((p) => p.category === "gas-stoves").length

  const cards = [
    {
      Icon: Blend,
      href: categoryUrl("mixer-grinders"),
      title: t("specialty.mixer_title"),
      desc: t("specialty.mixer_desc"),
      count: mixerCount,
      gradient: "from-[#3a1a7d] via-[#4c2296] to-[#6a35c4]",
    },
    {
      Icon: Flame,
      href: categoryUrl("gas-stoves"),
      title: t("specialty.gas_title"),
      desc: t("specialty.gas_desc"),
      count: gasCount,
      gradient: "from-[#8a4a12] via-[#a85a18] to-[#d4801f]",
    },
  ]

  const capabilities = [
    {
      Icon: Store,
      title: t("specialty.cap_sales_title"),
      desc: t("specialty.cap_sales_desc"),
    },
    {
      Icon: Wrench,
      title: t("specialty.cap_spares_title"),
      desc: t("specialty.cap_spares_desc"),
    },
    {
      Icon: Flame,
      title: t("specialty.cap_pipeline_title"),
      desc: t("specialty.cap_pipeline_desc"),
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ffd54d]/15 px-3.5 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#b8860b] dark:text-[#ffd54d]">
            <Sparkles className="h-3.5 w-3.5" />
            {t("specialty.badge")}
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance text-foreground">
            {t("specialty.title")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground text-pretty">{t("specialty.description")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${card.gradient} p-8 md:p-10 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
            >
              <div
                className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm shadow-inner">
                    <card.Icon className="h-7 w-7" strokeWidth={1.75} />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wide backdrop-blur-sm shadow-xs">
                    <Star className="h-3.5 w-3.5 fill-[#ffd54d] text-[#ffd54d]" />
                    {card.count}+ {t("catalog.title")}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-2xl md:text-3xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-white/85 leading-relaxed max-w-md text-sm sm:text-base">{card.desc}</p>

                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold text-[#ffd54d]">
                  {t("specialty.cta")}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* 3-Pillar Capabilities Matrix */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {capabilities.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-2xl border border-border/80 bg-card/60 p-5 sm:p-6 shadow-xs backdrop-blur-xs transition-colors hover:border-primary/30 hover:bg-card"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h4 className="text-base font-semibold text-foreground">{title}</h4>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
