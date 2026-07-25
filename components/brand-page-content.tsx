"use client"

import Link from "next/link"
import { ArrowLeft, ChevronRight, Phone, BadgeCheck } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/context/language-context"
import { businessConfig } from "@/config/business"
import { brands, categories, getBrand, getBrandProducts } from "@/config/products"

export function BrandPageContent({ slug }: { slug: string }) {
  const { t, language } = useLanguage()
  const hi = language === "hi"

  const brand = getBrand(slug)
  if (!brand) return null

  const brandName = hi ? brand.nameHi : brand.id
  const intro = hi ? brand.introHi : brand.introEn
  const brandProducts = getBrandProducts(brand.id)
  const otherBrands = brands.filter((b) => b.slug !== slug)

  // Which categories this brand actually spans — each links to the category page,
  // so brand and category pages cross-link both ways.
  const brandCategories = categories.filter((c) => brandProducts.some((p) => p.category === c.id))

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 md:pt-36 pb-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              {t("nav.home")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-primary transition-colors">
              {t("catalog.title")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{brandName}</span>
          </nav>

          <Link
            href="/products"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("catalog.title")}
          </Link>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
              <BadgeCheck className="h-3.5 w-3.5" />
              {t("brand.authorized")}
            </span>
          </div>

          <h1 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            {brandName}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed">{intro}</p>

          {/* Categories this brand covers — internal linking to category pages */}
          {brandCategories.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">{t("brand.available_in")}</span>
              {brandCategories.map((c) => (
                <Link
                  key={c.id}
                  href={`/products/category/${c.id}`}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
                >
                  {hi ? c.nameHi : c.nameEn}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="pb-16 md:pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brandProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-secondary/40 p-8 text-center">
            <h2 className="font-serif text-2xl font-semibold text-foreground">{t("catalog.not_found_title")}</h2>
            <p className="mt-2 text-muted-foreground">{t("brand.more_models")}</p>
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

      {/* Internal linking — every brand page links to every other brand */}
      <section className="pb-20 md:pb-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground">{t("brand.other_brands")}</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {otherBrands.map((b) => (
              <Link
                key={b.slug}
                href={`/products/brand/${b.slug}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
              >
                {hi ? b.nameHi : b.id}
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
