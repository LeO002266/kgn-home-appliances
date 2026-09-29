"use client"

import Link from "next/link"
import {
  Phone,
  CheckCircle2,
  ChevronRight,
  Truck,
  ShieldCheck,
  BadgeCheck,
  ArrowRight,
  Tag,
  MapPin,
  Clock,
} from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { ProductCard } from "@/components/product-card"
import { ProductImage } from "@/components/product-image"
import { useLanguage } from "@/context/language-context"
import { businessConfig, getWhatsAppUrl } from "@/config/business"
import {
  getProduct,
  getRelatedProducts,
  categories,
  categoryFeatures,
  categoryUrl,
  brands,
} from "@/config/products"

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
  const brand = product.brand ? brands.find((b) => b.id === product.brand) : undefined

  const enquiryUrl = getWhatsAppUrl(
    `${businessConfig.whatsappMessages.priceEnquiry} ${product.nameEn}. ${
      hi
        ? "कृपया आज की बेस्ट कीमत और डिलीवरी समय बताएं।"
        : "Please share today's best price and delivery time."
    }`,
  )

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-muted-foreground"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              {t("nav.home")}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/products" className="hover:text-primary transition-colors">
              {t("catalog.title")}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href={categoryUrl(product.category)}
              className="hover:text-primary transition-colors"
            >
              {categoryName}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-xs">
              {name}
            </span>
          </nav>

          <div className="mt-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column (5 cols): Product Photo & Authorized Dealer Guarantee */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-white shadow-sm flex items-center justify-center p-6">
                {badge && (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-[#fbc02d] px-3.5 py-1 text-xs font-bold text-[#2a1362]">
                    {badge}
                  </span>
                )}
                <ProductImage product={product} alt={name} iconSize="h-44 w-44" />
              </div>

              {/* Authorized Dealer & In-Store Notice */}
              <div className="rounded-xl border border-border bg-secondary/40 p-4 text-xs sm:text-sm text-muted-foreground space-y-2">
                <div className="flex items-center gap-2 font-medium text-foreground">
                  <BadgeCheck className="h-4.5 w-4.5 text-primary shrink-0" />
                  <span>
                    {hi
                      ? "100% असली प्रोडक्ट — अधिकृत डीलर एवं ब्रांड वारंटी"
                      : "100% Genuine Appliance — Authorized Dealer with Brand Warranty"}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs">
                  <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  <span>
                    {hi
                      ? "दुकान: शिखर कॉम्प्लेक्स के सामने, जुनवानी रोड, भिलाई"
                      : "Available at: In front of Shikhar Complex, Junwani Road, Bhilai"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): Information, Pricing & Order Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <Link
                    href={categoryUrl(product.category)}
                    className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Tag className="h-3 w-3" />
                    {categoryName}
                  </Link>
                  {brand && (
                    <Link
                      href={`/products/brand/${brand.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                      {hi ? brand.nameHi : brand.id}
                    </Link>
                  )}
                </div>

                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight text-balance">
                  {name}
                </h1>

                {hi && product.nameEn !== product.nameHi && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {product.nameEn}
                  </p>
                )}
              </div>

              {/* Price & Action Section */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    {hi ? "कीमत" : "Price"}
                  </span>
                  <p className="text-2xl sm:text-3xl font-bold text-primary">
                    {t("products.price_on_request")}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground pt-1">
                    {hi
                      ? "आज की सबसे किफायती कीमत, सीज़नल डिस्काउंट और एक्सचेंज ऑफर जानने के लिए हमारे शोरूम पर संपर्क करें।"
                      : "Contact our showroom counter for today's best discounted price, festive offers, and local delivery in Bhilai & Durg."}
                  </p>
                </div>

                {/* Primary Action Buttons */}
                <div className="mt-5 grid sm:grid-cols-2 gap-3">
                  <a
                    href={enquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm sm:text-base font-semibold text-white hover:bg-[#1ebe5b] transition-colors active:scale-[0.99]"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    {t("product.enquire_now")}
                  </a>
                  <a
                    href={`tel:${businessConfig.contact.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm sm:text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors active:scale-[0.99]"
                  >
                    <Phone className="h-5 w-5" />
                    {t("product.call_to_order")}
                  </a>
                </div>

                {/* Direct Phone & Delivery Line */}
                <div className="mt-4 pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-primary" />
                      <span className="font-medium text-foreground">{businessConfig.contact.phoneDisplay}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
                      <span className="font-medium text-foreground">{businessConfig.contact.whatsappDisplay}</span>
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-foreground font-medium">
                    <Truck className="h-3.5 w-3.5 text-primary" />
                    {hi ? "भिलाई-दुर्ग में होम डिलीवरी" : "Home Delivery in Bhilai & Durg"}
                  </span>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
                  {hi ? "मुख्य विशेषताएं" : "Key Features"}
                </h2>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {features.map((f) => (
                    <div
                      key={f}
                      className="flex items-start gap-2.5 rounded-xl border border-border/80 bg-secondary/30 px-3.5 py-3"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-foreground leading-snug font-medium">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clean Specifications Table */}
              <div className="space-y-3">
                <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
                  {hi ? "स्पेसिफिकेशन्स" : "Specifications"}
                </h2>
                <div className="rounded-xl border border-border overflow-hidden text-xs sm:text-sm">
                  <div className="divide-y divide-border">
                    <div className="grid grid-cols-3 p-3 bg-secondary/20">
                      <span className="text-muted-foreground">{hi ? "ब्रांड" : "Brand"}</span>
                      <span className="col-span-2 font-medium text-foreground">
                        {brand ? (hi ? brand.nameHi : brand.id) : (hi ? "ओरिजिनल ब्रांड" : "Original Brand")}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 p-3">
                      <span className="text-muted-foreground">{hi ? "कैटेगरी" : "Category"}</span>
                      <span className="col-span-2 font-medium text-foreground">{categoryName}</span>
                    </div>
                    <div className="grid grid-cols-3 p-3 bg-secondary/20">
                      <span className="text-muted-foreground">{hi ? "वारंटी" : "Warranty"}</span>
                      <span className="col-span-2 font-medium text-foreground">
                        {hi ? "आधिकारिक ब्रांड वारंटी" : "Official Manufacturer Warranty"}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 p-3">
                      <span className="text-muted-foreground">{hi ? "स्पेयर व रिपेयर" : "Spares & Service"}</span>
                      <span className="col-span-2 font-medium text-foreground">
                        {hi ? "दुकान पर असली पार्ट्स एवं रिपेयर सुविधा" : "Genuine Spare Parts & Repair Available In-Store"}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 p-3 bg-secondary/20">
                      <span className="text-muted-foreground">{hi ? "उपलब्धता" : "Availability"}</span>
                      <span className="col-span-2 font-medium text-foreground">
                        {hi ? "शोरूम में उपलब्ध / सेम-डे डिलीवरी" : "In Stock at Showroom / Same-Day Delivery"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Showroom Benefits Summary */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { Icon: ShieldCheck, label: t("hero.warranty") },
                  { Icon: Truck, label: t("hero.free_delivery") },
                  { Icon: BadgeCheck, label: hi ? "100% असली उत्पाद" : "100% Genuine" },
                ].map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-border bg-secondary/30 p-3 text-center"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium text-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <div className="mt-16 sm:mt-20 pt-10 border-t border-border">
              <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                    {t("product.related")}
                  </h2>
                </div>
                <Link
                  href={categoryUrl(product.category)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  {t("products.view_all")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
