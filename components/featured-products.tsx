"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { ProductCard } from "@/components/product-card"
import { products } from "@/config/products"

export function FeaturedProducts() {
  const { t } = useLanguage()
  const featured = products.filter((p) => p.featured)

  return (
    <section id="featured" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">{t("products.title")}</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance text-foreground">
              {t("products.subtitle")}
            </h2>
          </div>
          <p className="text-muted-foreground sm:text-right sm:max-w-xs">{t("products.description")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {t("products.view_all")}
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
