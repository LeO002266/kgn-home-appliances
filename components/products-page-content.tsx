"use client"

import { Suspense } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { ProductCard } from "@/components/product-card"
import { useLanguage } from "@/context/language-context"
import { businessConfig } from "@/config/business"
import { products, categories, type CategoryId } from "@/config/products"

function Catalog() {
  const { t, language } = useLanguage()
  const hi = language === "hi"
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const activeCat = searchParams.get("category") as CategoryId | null
  const filtered = activeCat ? products.filter((p) => p.category === activeCat) : products

  const setCategory = (cat: CategoryId | null) => {
    router.replace(cat ? `${pathname}?category=${cat}` : pathname, { scroll: false })
  }

  return (
    <>
      <section className="pt-28 md:pt-36 pb-8 bg-background">
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
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground text-pretty">{t("catalog.description")}</p>

          {/* Category filter */}
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              onClick={() => setCategory(null)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                !activeCat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {t("catalog.all")} ({products.length})
            </button>
            {categories.map((cat) => {
              const count = products.filter((p) => p.category === cat.id).length
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeCat === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {hi ? cat.nameHi : cat.nameEn} ({count})
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

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
    </>
  )
}

export function ProductsPageContent() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Suspense fallback={<div className="pt-36 pb-20 text-center text-muted-foreground">…</div>}>
        <Catalog />
      </Suspense>
      <Footer />
      <WhatsAppButton />
      <MobileCtaBar />
    </main>
  )
}
