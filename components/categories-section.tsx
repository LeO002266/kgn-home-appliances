"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Blend, Flame, Wrench, CookingPot, UtensilsCrossed, GlassWater, SprayCan, Lock, Droplets, ShowerHead, Fan, Home, Star } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { categories, products, type CategoryId } from "@/config/products"

// Our two specialty categories get a small ribbon in the grid
const specialtyCategories = new Set<CategoryId>(["mixer-grinders", "gas-stoves"])

const categoryIcons: Record<CategoryId, typeof Blend> = {
  "mixer-grinders": Blend,
  "gas-stoves": Flame,
  "kitchen-accessories": Wrench,
  "pressure-cookers": CookingPot,
  kitchenware: UtensilsCrossed,
  "bottles-tiffins": GlassWater,
  "cleaning-tools": SprayCan,
  "hardware-locks": Lock,
  "water-purifiers": Droplets,
  "water-heaters": ShowerHead,
  "fans-coolers": Fan,
  other: Home,
}

// A representative product photo for each category (from /public/products/)
const categoryImages: Record<CategoryId, string> = {
  "mixer-grinders": "/products/havells-mixer-750.jpg",
  "gas-stoves": "/products/prestige-stove-3b.jpg",
  "kitchen-accessories": "/products/lpg-gas-pipe.jpg",
  "pressure-cookers": "/products/prestige-cooker-3.jpg",
  kitchenware: "/products/steel-utensil-set.jpg",
  "bottles-tiffins": "/products/steel-tiffin-set.jpg",
  "cleaning-tools": "/products/floor-mop-spin.jpg",
  "hardware-locks": "/products/link-padlock.jpg",
  "water-purifiers": "/products/ro-purifier-10l.jpg",
  "water-heaters": "/products/bajaj-geyser-15l.jpg",
  "fans-coolers": "/products/symphony-cooler-45.jpg",
  other: "/products/usha-iron-1100.jpg",
}

const descriptionsEn: Record<CategoryId, string> = {
  "mixer-grinders": "Powerful grinders for everyday use, all brands",
  "gas-stoves": "Glass top & steel stoves, pipeline work",
  "kitchen-accessories": "Gas pipe, regulator, burner & kitchen tools",
  "pressure-cookers": "Electric and stainless steel cookers",
  kitchenware: "Steel utensils, cookware & kadai",
  "bottles-tiffins": "Steel bottles, tiffins & flasks for daily use",
  "cleaning-tools": "Mops, wipers, brooms & floor cleaning tools",
  "hardware-locks": "Locks, knives & steel hardware essentials",
  "water-purifiers": "RO, UV & UF purifiers with service",
  "water-heaters": "Geysers, instant heaters & rods",
  "fans-coolers": "Ceiling & pedestal fans, air coolers",
  other: "Irons, heaters, pumps & more",
}

// Gradient fallback shown if a category's representative photo is missing or fails to load
const categoryGradients: Record<CategoryId, string> = {
  "mixer-grinders": "from-violet-100 via-white to-purple-50",
  "gas-stoves": "from-orange-100 via-white to-amber-50",
  "kitchen-accessories": "from-yellow-100 via-white to-amber-50",
  "pressure-cookers": "from-rose-100 via-white to-red-50",
  kitchenware: "from-slate-100 via-white to-zinc-50",
  "bottles-tiffins": "from-teal-100 via-white to-cyan-50",
  "cleaning-tools": "from-lime-100 via-white to-green-50",
  "hardware-locks": "from-gray-200 via-white to-slate-100",
  "water-purifiers": "from-blue-100 via-white to-sky-50",
  "water-heaters": "from-red-100 via-white to-rose-50",
  "fans-coolers": "from-emerald-100 via-white to-green-50",
  other: "from-stone-200 via-white to-neutral-100",
}

function CategoryTileImage({ catId, alt }: { catId: CategoryId; alt: string }) {
  const [failed, setFailed] = useState(false)
  const Icon = categoryIcons[catId]

  if (failed) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${categoryGradients[catId]}`}
      >
        <Icon className="h-16 w-16 text-primary/30" strokeWidth={1.25} />
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={categoryImages[catId]}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  )
}

const descriptionsHi: Record<CategoryId, string> = {
  "mixer-grinders": "रोज़मर्रा के उपयोग के लिए शक्तिशाली, सभी ब्रांड",
  "gas-stoves": "ग्लास टॉप और स्टील चूल्हे, पाइपलाइन काम",
  "kitchen-accessories": "गैस पाइप, रेगुलेटर, बर्नर और किचन टूल्स",
  "pressure-cookers": "इलेक्ट्रिक और स्टेनलेस स्टील कुकर",
  kitchenware: "स्टील बर्तन, कुकवेयर और कढ़ाई",
  "bottles-tiffins": "रोज़ाना उपयोग के लिए स्टील बोतलें, टिफिन और फ्लास्क",
  "cleaning-tools": "मॉप, वाइपर, झाड़ू और सफाई के सामान",
  "hardware-locks": "ताले, चाकू और स्टील हार्डवेयर सामान",
  "water-purifiers": "RO, UV और UF प्यूरीफायर सर्विस के साथ",
  "water-heaters": "गीज़र, इंस्टेंट हीटर और रॉड",
  "fans-coolers": "छत और पेडेस्टल पंखे, एयर कूलर",
  other: "इस्त्री, हीटर, पंप और अधिक",
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
                href={`/products/category/${cat.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <CategoryTileImage catId={cat.id} alt={hi ? cat.nameHi : cat.nameEn} />
                  <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-card/90 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                    {count}
                  </span>
                  {specialtyCategories.has(cat.id) && (
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-b from-[#ffd54d] to-[#f0a500] px-2.5 py-1 text-[11px] font-bold text-[#2a1362] shadow-sm">
                      <Star className="h-3 w-3 fill-[#2a1362]" />
                      {t("specialty.badge")}
                    </span>
                  )}
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
