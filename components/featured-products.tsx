"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Blend, Fan, Droplets, Sparkles, ShoppingBag } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { ProductCard } from "@/components/product-card"
import { products, type CategoryId } from "@/config/products"

type FilterTab = "all" | "kitchen" | "cooling" | "water" | "essentials"

const tabCategoryMap: Record<Exclude<FilterTab, "all">, CategoryId[]> = {
  kitchen: ["mixer-grinders", "gas-stoves", "kitchen-accessories", "pressure-cookers", "other"],
  cooling: ["fans-coolers"],
  water: ["water-purifiers", "water-heaters"],
  essentials: ["bottles-tiffins", "cleaning-tools", "hardware-locks", "kitchenware"],
}

export function FeaturedProducts() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<FilterTab>("all")

  const allFeatured = products.filter((p) => p.featured)

  const filteredProducts = activeTab === "all"
    ? allFeatured
    : allFeatured.filter((p) => tabCategoryMap[activeTab].includes(p.category))

  const tabs: { id: FilterTab; label: string; icon: typeof ShoppingBag; count: number }[] = [
    { id: "all", label: t("products.tab_all"), icon: ShoppingBag, count: allFeatured.length },
    {
      id: "kitchen",
      label: t("products.tab_kitchen"),
      icon: Blend,
      count: allFeatured.filter((p) => tabCategoryMap.kitchen.includes(p.category)).length,
    },
    {
      id: "cooling",
      label: t("products.tab_cooling"),
      icon: Fan,
      count: allFeatured.filter((p) => tabCategoryMap.cooling.includes(p.category)).length,
    },
    {
      id: "water",
      label: t("products.tab_water"),
      icon: Droplets,
      count: allFeatured.filter((p) => tabCategoryMap.water.includes(p.category)).length,
    },
    {
      id: "essentials",
      label: t("products.tab_essentials"),
      icon: Sparkles,
      count: allFeatured.filter((p) => tabCategoryMap.essentials.includes(p.category)).length,
    },
  ]

  return (
    <section id="featured" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div className="max-w-xl">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary">
              {t("products.title")}
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance text-foreground">
              {t("products.subtitle")}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground sm:text-right sm:max-w-xs">
            {t("products.description")}
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-start gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs sm:text-sm font-medium transition-all active:scale-[0.97] cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "border border-border/80 bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-16 text-center text-muted-foreground">
            <p className="text-base">{t("products.filtered_empty")}</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg transition-all"
          >
            {t("products.view_all")}
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

