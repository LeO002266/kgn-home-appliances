"use client"

import { useState } from "react"
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
  Store,
  Navigation2,
  Wrench,
  PackageCheck,
  HelpCircle,
  Award,
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

  const [activeFaq, setActiveFaq] = useState<number | null>(null)

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

  const faqs = [
    {
      qEn: "How do I get the latest price or discount for this appliance?",
      qHi: "इस अप्लायंस की आज की ताजा कीमत या डिस्काउंट कैसे पता करें?",
      aEn:
        "Call us directly or click 'Ask Price on WhatsApp'. We provide today's best competitive price, seasonal store discounts, and combo bundle offers.",
      aHi:
        "आप हमें सीधे कॉल कर सकते हैं या 'WhatsApp पर कीमत पूछें' पर क्लिक करें। हम आपको आज की सबसे किफायती कीमत, सीज़नल डिस्काउंट और कॉम्बो ऑफर तुरंत बताएंगे।",
    },
    {
      qEn: "Can I inspect and test this appliance before buying?",
      qHi: "क्या मैं खरीदने से पहले इस अप्लायंस को चलाकर टेस्ट कर सकता हूँ?",
      aEn:
        "Yes! Visit our Junwani Road showroom in Bhilai for a live demo. You can check the motor noise, build quality, and accessories in person.",
      aHi:
        "हाँ! भिलाई स्थित हमारे जुनवानी रोड शोरूम पर आकर आप लाइव डेमो देख सकते हैं, मोटर की आवाज़, क्वालिटी और जार/एक्सेसरीज़ खुद चेक कर सकते हैं।",
    },
    {
      qEn: "Are spare parts and after-sales repair available for this product?",
      qHi: "क्या इसके स्पेयर पार्ट्स और रिपेयर सेवा आपकी दुकान पर उपलब्ध है?",
      aEn:
        "Yes. We stock 100% genuine spare parts (jars, blades, couplers, burners, filters) and provide fast repair services at our store counter and at your doorstep.",
      aHi:
        "हाँ। हमारे पास सभी प्रमुख ब्रांड्स के 100% असली स्पेयर पार्ट्स (जार, ब्लेड, कपलर, बर्नर, फिल्टर) काउंटर पर उपलब्ध हैं और हम दुकान व घर दोनों जगह रिपेयर सुविधा देते हैं।",
    },
  ]

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
              className="hover:text-primary transition-colors font-medium"
            >
              {categoryName}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-semibold truncate max-w-[200px] sm:max-w-xs">
              {name}
            </span>
          </nav>

          {/* Main 2-Column Product Showcase */}
          <div className="mt-6 md:mt-8 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column (5 cols): Product Visuals & Store Badges */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
              <div className="group relative aspect-square w-full overflow-hidden rounded-3xl border border-border/80 bg-white shadow-xl">
                {badge && (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-gradient-to-r from-[#ffd54d] via-[#fbc02d] to-[#f0a500] px-3.5 py-1 text-xs sm:text-sm font-bold text-[#2a1362] shadow-md">
                    {badge}
                  </span>
                )}

                {/* Live in-store badge overlay */}
                <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur-md border border-border/80 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{hi ? "शोरूम में उपलब्ध" : "In Stock in Bhilai"}</span>
                </div>

                <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-105">
                  <ProductImage product={product} alt={name} iconSize="h-36 w-36" />
                </div>
              </div>

              {/* Showroom Live Demo & Pickup Bar */}
              <div className="rounded-2xl border border-border/80 bg-card/80 p-4 backdrop-blur-sm shadow-xs space-y-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Store className="h-5 w-5" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-foreground">
                      {hi ? "लाइव डेमो व तत्काल पिकअप" : "Live Demo & Counter Pickup"}
                    </p>
                    <p className="text-[11px] text-muted-foreground truncate">
                      {businessConfig.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border/60 text-xs">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    {hi ? "रोज़ खुला: सुबह 9:00 - रात 9:00" : "Open Daily: 9:00 AM – 9:00 PM"}
                  </span>
                  <a
                    href={businessConfig.googleMaps.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                  >
                    <Navigation2 className="h-3 w-3" />
                    {hi ? "रास्ता देखें" : "Map"}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): Details, Action Hub, Specs & Assurance */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category, Brand & Stock Status */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Link
                    href={categoryUrl(product.category)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary hover:bg-primary/15 transition-colors"
                  >
                    <Tag className="h-3 w-3" />
                    {categoryName}
                  </Link>

                  {brand && (
                    <Link
                      href={`/products/brand/${brand.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-secondary border border-border px-3 py-1 text-xs font-semibold text-foreground/80 hover:text-primary transition-colors"
                    >
                      <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                      {hi ? brand.nameHi : brand.id}
                    </Link>
                  )}

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {hi ? "भिलाई शोरूम में तैयार" : "Verified In Stock"}
                  </span>
                </div>

                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight text-balance">
                  {name}
                </h1>

                {hi && product.nameEn !== product.nameHi && (
                  <p className="mt-1 text-sm text-muted-foreground font-medium">
                    {product.nameEn}
                  </p>
                )}
              </div>

              {/* Action & Pricing Hub Card */}
              <div className="overflow-hidden rounded-3xl border border-primary/25 bg-card shadow-lg">
                <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-emerald-500" />
                <div className="p-5 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {hi ? "कीमत व उपलब्धता" : "Pricing & Stock"}
                      </span>
                      <p className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                        {t("products.price_on_request")}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary self-start sm:self-auto">
                      <Award className="h-3.5 w-3.5" />
                      {hi ? "सर्वश्रेष्ठ भिलाई मूल्य" : "Best Price in Bhilai"}
                    </span>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {hi
                      ? "कीमतें नवीनतम ब्रांड ऑफर, कैशबैक और सीजनल डिस्काउंट के अनुसार बदलती हैं। आज का सबसे सस्ता रेट और कॉम्बो ऑफर तुरंत जानने के लिए WhatsApp या कॉल करें।"
                      : "Prices reflect the latest official brand deals, cashback, and festive combo discounts. Call or WhatsApp our showroom counter for today's best instant quote."}
                  </p>

                  {/* Primary CTA Buttons */}
                  <div className="mt-5 grid sm:grid-cols-2 gap-3">
                    <a
                      href={enquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-md hover:bg-[#1ebe5b] hover:shadow-lg transition-all active:scale-[0.98]"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      {hi ? "WhatsApp पर कीमत पूछें" : "Ask Price on WhatsApp"}
                    </a>
                    <a
                      href={`tel:${businessConfig.contact.phone}`}
                      className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-primary px-6 py-3.5 text-sm sm:text-base font-bold text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg transition-all active:scale-[0.98]"
                    >
                      <Phone className="h-5 w-5" />
                      {hi ? "दुकान पर कॉल करें" : "Call Showroom"}
                    </a>
                  </div>

                  {/* Direct Contact Bar */}
                  <div className="mt-4 pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs font-medium text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-primary" />
                      <strong className="text-foreground">{businessConfig.contact.phoneDisplay}</strong>
                    </span>
                    <span className="flex items-center gap-2">
                      <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
                      <strong className="text-foreground">{businessConfig.contact.whatsappDisplay}</strong>
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                      <Truck className="h-3.5 w-3.5" />
                      {hi ? "भिलाई-दुर्ग में होम डिलीवरी" : "Home Delivery Available"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Structured Specifications & Highlights */}
              <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-xs">
                <h2 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                  <PackageCheck className="h-5 w-5 text-primary" />
                  {hi ? "प्रोडक्ट की मुख्य विशेषताएं" : "Key Product Highlights"}
                </h2>

                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {features.map((f) => (
                    <div
                      key={f}
                      className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-secondary/30 p-3"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-foreground font-medium leading-snug">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Specs Table */}
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  {hi ? "अतिरिक्त विवरण" : "Product Specifications"}
                </h3>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-sm border-t border-border/60 pt-3">
                  <div className="flex justify-between py-1 border-b border-border/40">
                    <dt className="text-muted-foreground">{hi ? "ब्रांड" : "Brand"}</dt>
                    <dd className="font-semibold text-foreground">
                      {brand ? brand.id : hi ? "मानक ब्रांड" : "Standard / Certified"}
                    </dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/40">
                    <dt className="text-muted-foreground">{hi ? "श्रेणी" : "Category"}</dt>
                    <dd className="font-semibold text-foreground">{categoryName}</dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/40">
                    <dt className="text-muted-foreground">{hi ? "वारंटी" : "Warranty"}</dt>
                    <dd className="font-semibold text-foreground">
                      {hi ? "आधिकारिक ब्रांड वारंटी" : "Official Brand Warranty"}
                    </dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/40">
                    <dt className="text-muted-foreground">{hi ? "डिलीवरी" : "Delivery"}</dt>
                    <dd className="font-semibold text-foreground">
                      {hi ? "भिलाई-दुर्ग में उपलब्ध" : "Bhilai & Durg Delivery"}
                    </dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/40">
                    <dt className="text-muted-foreground">{hi ? "स्पेयर पार्ट्स" : "Spare Parts"}</dt>
                    <dd className="font-semibold text-foreground">
                      {hi ? "दुकान पर उपलब्ध" : "In-Store & At Doorstep"}
                    </dd>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/40">
                    <dt className="text-muted-foreground">{hi ? "स्थिति" : "Condition"}</dt>
                    <dd className="font-semibold text-foreground">
                      {hi ? "100% नया, सीलबंद" : "100% Brand New, Sealed"}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* 4 Trust Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  {
                    Icon: ShieldCheck,
                    title: hi ? "असली वारंटी" : "Brand Warranty",
                    desc: hi ? "100% ओरिजिनल" : "Original Parts",
                  },
                  {
                    Icon: Truck,
                    title: hi ? "होम डिलीवरी" : "Home Delivery",
                    desc: hi ? "भिलाई-दुर्ग में" : "Across Bhilai",
                  },
                  {
                    Icon: Store,
                    title: hi ? "लाइव डेमो" : "Showroom Demo",
                    desc: hi ? "जुनवानी रोड पर" : "Junwani Road",
                  },
                  {
                    Icon: Wrench,
                    title: hi ? "रिपेयर सपोर्ट" : "Repair & Spares",
                    desc: hi ? "तुरंत सेवा" : "On-Counter",
                  },
                ].map(({ Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex flex-col items-center justify-center rounded-2xl border border-border/70 bg-card p-3.5 text-center shadow-xs"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary mb-2">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-xs font-bold text-foreground leading-tight">{title}</span>
                    <span className="text-[11px] text-muted-foreground mt-0.5">{desc}</span>
                  </div>
                ))}
              </div>

              {/* Shopping & Showroom FAQs Accordion */}
              <div className="rounded-2xl border border-border/80 bg-card p-5 shadow-xs">
                <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary" />
                  {hi ? "अक्सर पूछे जाने वाले सवाल" : "Frequently Asked Questions"}
                </h3>

                <div className="space-y-2">
                  {faqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx
                    return (
                      <div
                        key={faq.qEn}
                        className="rounded-xl border border-border/60 bg-secondary/20 overflow-hidden transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => setActiveFaq(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between p-3.5 text-left text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
                        >
                          <span>{hi ? faq.qHi : faq.qEn}</span>
                          <ChevronRight
                            className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                              isOpen ? "rotate-90 text-primary" : "text-muted-foreground"
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-3.5 pb-3.5 text-xs text-muted-foreground leading-relaxed border-t border-border/40 pt-2.5">
                            {hi ? faq.aHi : faq.aEn}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          {related.length > 0 && (
            <div className="mt-20 sm:mt-24 pt-12 border-t border-border/80">
              <div className="flex flex-wrap items-end justify-between gap-3 mb-8">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {hi ? "संबंधित अप्लायंसेज" : "Recommended for You"}
                  </span>
                  <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-foreground">
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
