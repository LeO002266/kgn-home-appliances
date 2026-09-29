"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowLeft, Phone, Search, X, SlidersHorizontal, RotateCcw } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/context/language-context"
import { businessConfig, getWhatsAppUrl } from "@/config/business"
import { products, categories, brands, type CategoryId, type BrandId } from "@/config/products"

export function ProductsPageContent() {
  const { t, language } = useLanguage()
  const hi = language === "hi"

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | "all">("all")
  const [selectedBrand, setSelectedBrand] = useState<BrandId | "all">("all")
  const [sortBy, setSortBy] = useState<"featured" | "name-asc" | "name-desc">("featured")

  const hasActiveFilters = searchQuery.trim() !== "" || selectedCategory !== "all" || selectedBrand !== "all" || sortBy !== "featured"

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSelectedBrand("all")
    setSortBy("featured")
  }

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()

    return products
      .filter((p) => {
        // Category filter
        if (selectedCategory !== "all" && p.category !== selectedCategory) {
          return false
        }
        // Brand filter
        if (selectedBrand !== "all" && p.brand !== selectedBrand) {
          return false
        }
        // Search filter
        if (q) {
          const matchEn = p.nameEn.toLowerCase().includes(q)
          const matchHi = p.nameHi.toLowerCase().includes(q)
          const matchBrand = p.brand ? p.brand.toLowerCase().includes(q) : false
          const cat = categories.find((c) => c.id === p.category)
          const matchCat = cat ? cat.nameEn.toLowerCase().includes(q) || cat.nameHi.toLowerCase().includes(q) : false
          return matchEn || matchHi || matchBrand || matchCat
        }
        return true
      })
      .sort((a, b) => {
        if (sortBy === "name-asc") {
          return a.nameEn.localeCompare(b.nameEn)
        }
        if (sortBy === "name-desc") {
          return b.nameEn.localeCompare(a.nameEn)
        }
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return 0
      })
  }, [searchQuery, selectedCategory, selectedBrand, sortBy])

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 md:pt-36 pb-6 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("catalog.back_home")}
          </Link>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            {t("catalog.title")}
          </h1>
          <p className="mt-2.5 max-w-2xl text-base sm:text-lg text-muted-foreground text-pretty">
            {t("catalog.description")}
          </p>

          {/* Search Bar */}
          <div className="mt-6 max-w-2xl">
            <div className="relative flex items-center">
              <Search className="absolute left-4 h-5 w-5 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("catalog.search_placeholder")}
                className="w-full rounded-2xl border border-border bg-card py-3.5 pl-12 pr-10 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Bars */}
          <div className="mt-6 space-y-4">
            {/* Category Filter Pills */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {hi ? "कैटेगरी" : "Categories"}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className={`rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                    selectedCategory === "all"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {t("catalog.all")} ({products.length})
                </button>
                {categories.map((cat) => {
                  const count = products.filter((p) => p.category === cat.id).length
                  const isSelected = selectedCategory === cat.id
                  return (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => setSelectedCategory(isSelected ? "all" : cat.id)}
                      className={`rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all ${
                        isSelected
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      {hi ? cat.nameHi : cat.nameEn} ({count})
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Brand Filter Pills */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {hi ? "ब्रांड" : "Brands"}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedBrand("all")}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                    selectedBrand === "all"
                      ? "bg-foreground text-background"
                      : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {t("catalog.all_brands")}
                </button>
                {brands.map((b) => {
                  const count = products.filter((p) => p.brand === b.id).length
                  const isSelected = selectedBrand === b.id
                  return (
                    <button
                      type="button"
                      key={b.id}
                      onClick={() => setSelectedBrand(isSelected ? "all" : b.id)}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                        isSelected
                          ? "bg-foreground text-background"
                          : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      {hi ? b.nameHi : b.id} ({count})
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Controls Bar: Count, Sort, Clear */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>
                  {t("catalog.showing")} <strong className="text-foreground">{filteredProducts.length}</strong> {t("catalog.of")}{" "}
                  {products.length} {t("catalog.products")}
                </span>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline ml-2"
                  >
                    <RotateCcw className="h-3 w-3" />
                    {t("catalog.clear_filters")}
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 text-sm">
                <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{t("catalog.sort_label")}</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "featured" | "name-asc" | "name-desc")}
                  className="rounded-lg border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground focus:border-primary focus:outline-none"
                >
                  <option value="featured">{t("catalog.sort_featured")}</option>
                  <option value="name-asc">{t("catalog.sort_name_asc")}</option>
                  <option value="name-desc">{t("catalog.sort_name_desc")}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 md:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-border bg-card/60 p-8 md:p-12 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-foreground">
                {t("catalog.no_match_title")}
              </h3>
              <p className="mt-2 max-w-md mx-auto text-sm text-muted-foreground leading-relaxed">
                {t("catalog.no_match_desc")}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary/80 transition-colors"
                >
                  <RotateCcw className="h-4 w-4" />
                  {t("catalog.clear_filters")}
                </button>
                <a
                  href={getWhatsAppUrl(
                    `Hello KGN Home Appliance & Services, is "${searchQuery || "this appliance"}" available in stock?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1ebe5b] transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {t("products.whatsapp")}
                </a>
                <a
                  href={`tel:${businessConfig.contact.phone}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {t("contact.call_now")}
                </a>
              </div>
            </div>
          )}

          {/* Not finding it? Footer helper */}
          {filteredProducts.length > 0 && (
            <div className="mt-14 rounded-2xl border border-border bg-secondary/30 p-8 text-center">
              <h2 className="font-serif text-2xl font-semibold text-foreground">{t("catalog.not_found_title")}</h2>
              <p className="mt-2 text-muted-foreground">{t("catalog.not_found_desc")}</p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <a
                  href={`tel:${businessConfig.contact.phone}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {t("contact.call_now")}
                </a>
                <a
                  href={getWhatsAppUrl(businessConfig.whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-semibold text-foreground hover:border-primary/50 transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  {t("products.whatsapp")}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileCtaBar />
    </main>
  )
}
