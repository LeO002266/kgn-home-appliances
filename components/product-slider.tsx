"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, ChevronLeft, ChevronRight, Sparkles, ShieldCheck } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { businessConfig, getWhatsAppUrl } from "@/config/business"
import {
  products,
  categories,
  hasProductPhoto,
  getProductImage,
  productUrl,
} from "@/config/products"
import { AnimatedSection } from "@/components/animated-section"

// Pick featured products that have photos
function getFeaturedSlides() {
  const catMap = Object.fromEntries(
    categories.map((c) => [c.id, { en: c.nameEn, hi: c.nameHi }]),
  )
  return products
    .filter((p) => p.featured && hasProductPhoto(p))
    .map((p) => ({
      id: p.id,
      nameEn: p.nameEn,
      nameHi: p.nameHi,
      categoryEn: catMap[p.category]?.en ?? "",
      categoryHi: catMap[p.category]?.hi ?? "",
      badgeEn: p.badgeEn ?? "In Stock",
      badgeHi: p.badgeHi ?? "उपलब्ध",
      image: getProductImage(p),
      link: productUrl(p.id),
    }))
}

const SLIDES = getFeaturedSlides()

export function ProductSlider() {
  const { language } = useLanguage()
  const hi = language === "hi"
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector("a")?.offsetWidth ?? 240
    el.scrollBy({ left: dir === "right" ? cardWidth + 12 : -(cardWidth + 12), behavior: "smooth" })
  }

  if (SLIDES.length === 0) return null

  return (
    <AnimatedSection className="py-10 sm:py-14 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              {hi ? "हमारे फीचर्ड प्रोडक्ट्स" : "Featured Products"}
            </h2>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {hi ? "WhatsApp करें और बेस्ट कीमत पाएं" : "WhatsApp us for the best price"}
            </p>
          </div>
          {/* Desktop nav arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="h-9 w-9 rounded-full border border-border/80 bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors shadow-sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="h-9 w-9 rounded-full border border-border/80 bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors shadow-sm"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable card row */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {SLIDES.map((slide) => {
            const waUrl = getWhatsAppUrl(
              `${businessConfig.whatsappMessages.priceEnquiry} ${slide.nameEn}. ${
                hi ? "कृपया कीमत और उपलब्धता बताएं।" : "Please share price and availability."
              }`
            )

            return (
              <a
                key={slide.id}
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group snap-start shrink-0 w-[200px] sm:w-[220px] rounded-2xl border border-border/70 bg-card shadow-sm hover:shadow-md hover:border-primary/30 transition-all overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative bg-white" style={{ height: "160px" }}>
                  <Image
                    src={slide.image}
                    alt={hi ? slide.nameHi : slide.nameEn}
                    fill
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                    sizes="220px"
                  />
                  {/* Badge */}
                  <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#ffd54d] to-[#f0a500] px-2 py-0.5 text-[10px] font-bold text-[#2a1362] shadow">
                    <Sparkles className="h-2 w-2 fill-[#2a1362]" />
                    {hi ? slide.badgeHi : slide.badgeEn}
                  </span>
                  {/* Warranty */}
                  <span className="absolute top-2 right-2 inline-flex items-center gap-0.5 rounded-full border border-border/60 bg-card/90 px-1.5 py-0.5 text-[10px] font-semibold text-foreground backdrop-blur-sm">
                    <ShieldCheck className="h-2.5 w-2.5 text-primary" />
                    {hi ? "वारंटी" : "Warranty"}
                  </span>
                </div>

                {/* Info */}
                <div className="p-3 flex flex-col flex-1 gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary leading-none">
                    {hi ? slide.categoryHi : slide.categoryEn}
                  </span>
                  <p className="text-xs font-semibold text-foreground leading-snug line-clamp-2 flex-1">
                    {hi ? slide.nameHi : slide.nameEn}
                  </p>
                  {/* WhatsApp CTA */}
                  <div className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] px-2.5 py-2 text-[11px] font-bold text-white group-hover:bg-[#1ebe5b] transition-colors">
                    <MessageCircle className="h-3 w-3" />
                    {hi ? "कीमत पूछें" : "Ask Price"}
                  </div>
                </div>
              </a>
            )
          })}

          {/* "View all" card */}
          <Link
            href="/products"
            className="snap-start shrink-0 w-[160px] sm:w-[180px] rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 flex flex-col items-center justify-center gap-3 p-4 hover:border-primary/60 hover:bg-primary/10 transition-all group"
          >
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <ChevronRight className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-bold text-primary text-center leading-tight">
              {hi ? "सभी प्रोडक्ट्स देखें" : "View All Products"}
            </span>
          </Link>
        </div>

        {/* Mobile swipe hint */}
        <p className="mt-2 text-center text-[11px] text-muted-foreground sm:hidden">
          ← {hi ? "स्वाइप करें" : "Swipe to explore"} →
        </p>
      </div>
    </AnimatedSection>
  )
}
