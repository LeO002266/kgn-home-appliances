"use client"

import Link from "next/link"
import { ArrowLeft, ChevronRight, Phone, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/context/language-context"
import { businessConfig } from "@/config/business"
import { products, categories, categoryFeatures, categoryIntro, type CategoryId } from "@/config/products"

export function CategoryPageContent({ categoryId }: { categoryId: CategoryId }) {
  const { t, language } = useLanguage()
  const hi = language === "hi"

  const cat = categories.find((c) => c.id === categoryId)
  if (!cat) return null

  const categoryName = hi ? cat.nameHi : cat.nameEn
  const intro = categoryIntro[categoryId][hi ? "hi" : "en"]
  const features = categoryFeatures[categoryId][hi ? "hi" : "en"]
  const categoryProducts = products.filter((p) => p.category === categoryId)
  const otherCategories = categories.filter((c) => c.id !== categoryId)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 md:pt-36 pb-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb — also doubles as internal linking back to the catalog */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              {t("nav.home")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-primary transition-colors">
              {t("catalog.title")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{categoryName}</span>
          </nav>

          <Link
            href="/products"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("catalog.title")}
          </Link>

          <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            {categoryName}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed">{intro}</p>

          {/* Keyword-focused selling points for this category */}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-2.5 rounded-xl border border-border bg-card px-3.5 py-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground leading-snug">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-secondary/40 p-8 text-center">
              <p className="text-muted-foreground">{t("catalog.not_found_desc")}</p>
            </div>
          )}

          {/* Not finding it? */}
          <div className="mt-14 rounded-2xl border border-border bg-secondary/40 p-8 text-center">
            <h2 className="font-serif text-2xl font-semibold text-foreground">{t("catalog.not_found_title")}</h2>
            <p className="mt-2 text-muted-foreground">{t("catalog.not_found_desc")}</p>
            <a
              href={`tel:${businessConfig.contact.phone}`}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {t("contact.call_now")}
            </a>
          </div>
        </div>
      </section>

      {/* Internal linking — every category page links to every other category */}
      <section className="pb-20 md:pb-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
            {t("categories.title")}
          </h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {otherCategories.map((c) => (
              <Link
                key={c.id}
                href={`/products/category/${c.id}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
              >
                {hi ? c.nameHi : c.nameEn}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileCtaBar />
    </main>
  )
}
