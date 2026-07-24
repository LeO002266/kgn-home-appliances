"use client"

import Link from "next/link"
import { Star, MessageCircle, Phone, CheckCircle2, ChevronRight, Truck, ShieldCheck, BadgeCheck, ArrowRight, Tag } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { ProductCard } from "@/components/product-card"
import { ProductImage } from "@/components/product-image"
import { useLanguage } from "@/context/language-context"
import { businessConfig, getWhatsAppUrl } from "@/config/business"
import { getProduct, getRelatedProducts, categories, categoryFeatures } from "@/config/products"

export function ProductDetailContent({ productId }: { productId: string }) {
  const { t, language } = useLanguage()
  const hi = language === "hi"

  const product = getProduct(productId)
  if (!product) return null

  const name = hi ? product.nameHi : product.nameEn
  const badge = hi ? product.badgeHi : product.badgeEn
  const cat = categories.find((c) => c.id === product.category)
  const categoryName = cat ? (hi ? cat.nameHi : cat.nameEn) : ""
  const features = categoryFeatures[product.category][hi ? "hi" : "en"]
  const related = getRelatedProducts(product)

  const enquiryUrl = getWhatsAppUrl(
    `${businessConfig.whatsappMessages.priceEnquiry} ${product.nameEn}. ${
      hi ? "कृपया कीमत बताएं। क्या यह स्टॉक में उपलब्ध है?" : "Please share the price. Is this available in stock?"
    }`,
  )

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              {t("nav.home")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-primary transition-colors">
              {t("catalog.title")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href={`/products/category/${product.category}`} className="hover:text-primary transition-colors">
              {categoryName}
            </Link>
          </nav>

          <div className="mt-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image */}
            <div>
              <div className="group relative aspect-square w-full overflow-hidden rounded-3xl border border-border bg-white shadow-lg">
                {badge && (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-gradient-to-b from-[#ffd54d] to-[#f0a500] px-4 py-1.5 text-sm font-bold text-[#2a1362] shadow-sm">
                    {badge}
                  </span>
                )}
                <ProductImage product={product} alt={name} iconSize="h-40 w-40" />
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-sm font-medium text-foreground/80">
                <BadgeCheck className="h-4.5 w-4.5 text-primary shrink-0" />
                {hi
                  ? "100% असली प्रोडक्ट — अधिकृत डीलर से, वारंटी के साथ"
                  : "100% genuine product — from an authorized dealer, with warranty"}
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href={`/products/category/${product.category}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary hover:bg-primary/15 transition-colors"
                >
                  <Tag className="h-3.5 w-3.5" />
                  {categoryName}
                </Link>
              </div>
              <h1 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground text-balance">
                {name}
              </h1>

              <div className="mt-4 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.round(product.rating) ? "fill-amber-400 text-amber-400" : "text-border"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium text-foreground">{product.rating}</span>
                <span className="text-muted-foreground">
                  ({product.reviews} {t("product.reviews_label")})
                </span>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-2.5">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 rounded-xl border border-border bg-card px-3.5 py-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-snug">{f}</span>
                  </div>
                ))}
              </div>

              {/* Enquiry card — the one action block on the page */}
              <div className="mt-6 overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-lg">
                <div className="h-1.5 bg-gradient-to-r from-primary via-primary/70 to-[#f0a500]" aria-hidden="true" />
                <div className="p-5 sm:p-6">
                  <p className="text-2xl font-bold text-primary">{t("products.price_on_request")}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t("product.price_note")}</p>

                  <div className="mt-5 grid sm:grid-cols-2 gap-3">
                    <a
                      href={enquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-bold text-white shadow-md hover:bg-[#1ebe5b] transition-colors active:scale-[0.98]"
                    >
                      <MessageCircle className="h-5 w-5" />
                      {t("product.enquire_now")}
                    </a>
                    <a
                      href={`tel:${businessConfig.contact.phone}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition-colors active:scale-[0.98]"
                    >
                      <Phone className="h-5 w-5" />
                      {t("product.call_to_order")}
                    </a>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1.5 text-sm font-medium text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      {businessConfig.contact.phoneDisplay}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-[#25D366]" />
                      {businessConfig.contact.whatsappDisplay}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2.5">
                {[
                  { Icon: Truck, label: t("hero.free_delivery") },
                  { Icon: ShieldCheck, label: t("hero.warranty") },
                  { Icon: BadgeCheck, label: hi ? "असली प्रोडक्ट" : "Genuine product" },
                ].map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-secondary/40 px-2 py-3 text-center"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-xs font-medium text-foreground/80 leading-snug">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div className="mt-20">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                  {t("product.related")}
                </h2>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  {t("products.view_all")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
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
