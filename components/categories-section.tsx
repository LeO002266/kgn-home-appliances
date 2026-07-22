"use client"

import Link from "next/link"
import { ArrowRight, Refrigerator, Waves, Microwave, CookingPot, Blend, Fan, Home, Flame, Droplets, ShowerHead, UtensilsCrossed } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { categories, products, type CategoryId } from "@/config/products"

const categoryIcons: Record<CategoryId, typeof Refrigerator> = {
  refrigerators: Refrigerator,
  "washing-machines": Waves,
  microwaves: Microwave,
  "pressure-cookers": CookingPot,
  "mixer-grinders": Blend,
  "gas-stoves": Flame,
  "water-purifiers": Droplets,
  "water-heaters": ShowerHead,
  "fans-coolers": Fan,
  kitchenware: UtensilsCrossed,
  other: Home,
}

// A representative product photo for each category (from /public/products/)
const categoryImages: Record<CategoryId, string> = {
  refrigerators: "/products/lg-fridge-340.jpg",
  "washing-machines": "/products/ifb-wm-65.jpg",
  microwaves: "/products/ifb-mw-20.jpg",
  "pressure-cookers": "/products/prestige-cooker-3.jpg",
  "mixer-grinders": "/products/havells-mixer-750.jpg",
  "gas-stoves": "/products/prestige-stove-3b.jpg",
  "water-purifiers": "/products/ro-purifier-10l.jpg",
  "water-heaters": "/products/bajaj-geyser-15l.jpg",
  "fans-coolers": "/products/symphony-cooler-45.jpg",
  kitchenware: "/products/steel-tiffin-set.jpg",
  other: "/products/usha-iron-1100.jpg",
}

const descriptionsEn: Record<CategoryId, string> = {
  refrigerators: "Premium fridges with modern technology",
  "washing-machines": "Front load and top load models",
  microwaves: "Convection & solo microwave ovens",
  "pressure-cookers": "Electric and stainless steel cookers",
  "mixer-grinders": "Powerful grinders for everyday use",
  "gas-stoves": "Glass top & steel stoves, pipeline work",
  "water-purifiers": "RO, UV & UF purifiers with service",
  "water-heaters": "Geysers, instant heaters & rods",
  "fans-coolers": "Ceiling & pedestal fans, air coolers",
  kitchenware: "Steel utensils, tiffins, flasks & more",
  other: "Irons, heaters, locks, pumps & more",
}

const descriptionsHi: Record<CategoryId, string> = {
  refrigerators: "आधुनिक तकनीक के साथ प्रीमियम फ्रिज",
  "washing-machines": "फ्रंट लोड और टॉप लोड मॉडल",
  microwaves: "कन्वेक्शन और सोलो माइक्रोवेव",
  "pressure-cookers": "इलेक्ट्रिक और स्टेनलेस स्टील कुकर",
  "mixer-grinders": "रोज़मर्रा के उपयोग के लिए शक्तिशाली",
  "gas-stoves": "ग्लास टॉप और स्टील चूल्हे, पाइपलाइन काम",
  "water-purifiers": "RO, UV और UF प्यूरीफायर सर्विस के साथ",
  "water-heaters": "गीज़र, इंस्टेंट हीटर और रॉड",
  "fans-coolers": "छत और पेडेस्टल पंखे, एयर कूलर",
  kitchenware: "स्टील बर्तन, टिफिन, फ्लास्क और अधिक",
  other: "इस्त्री, हीटर, ताले, पंप और अधिक",
}

export function CategoriesSection() {
  const { t, language } = useLanguage()
  const hi = language === "hi"

  return (
    <section id="categories" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">{t("categories.title")}</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance text-foreground">
            {t("categories.subtitle")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">{t("categories.description")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat.id]
            const count = products.filter((p) => p.category === cat.id).length
            return (
              <Link
                key={cat.id}
                href={`/products?category=${cat.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={categoryImages[cat.id]}
                    alt={hi ? cat.nameHi : cat.nameEn}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-card/90 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                    {count}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4 md:p-5">
                  <h3 className="text-base md:text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {hi ? cat.nameHi : cat.nameEn}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {hi ? descriptionsHi[cat.id] : descriptionsEn[cat.id]}
                  </p>
                </div>
              </Link>
            )
          })}

          <Link
            href="/products"
            className="group relative flex flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br from-[#2a1362] via-[#42219b] to-[#5f2db8] p-5 md:p-6 text-white transition-all hover:shadow-lg hover:-translate-y-0.5 min-h-44"
          >
            <div
              className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:22px_22px]"
              aria-hidden="true"
            />
            <div className="relative">
              <h3 className="text-lg md:text-xl font-semibold">{t("categories.view_all")}</h3>
              <p className="mt-1 text-sm text-white/70">{t("categories.explore")}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#ffd54d]">
                {t("nav.shop_now")}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
