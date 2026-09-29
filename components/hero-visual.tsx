"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ShieldCheck,
  MessageCircle,
  Phone,
  MapPin,
  ChevronRight,
  Store,
  Navigation2,
} from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { businessConfig, getWhatsAppUrl } from "@/config/business"
import {
  products,
  categories,
  hasProductPhoto,
  getProductImage,
  productUrl,
} from "@/config/products"

// ─── Types ────────────────────────────────────────────────────────────────────
interface SlideItem {
  id: string
  titleEn: string
  titleHi: string
  categoryEn: string
  categoryHi: string
  specsEn: string
  specsHi: string
  badgeEn: string
  badgeHi: string
  image: string
  link?: string
  isStore?: boolean
}

// ─── Storefront slide (always first) ─────────────────────────────────────────
const STORE_SLIDE: SlideItem = {
  id: "storefront",
  titleEn: "KGN Junwani Road Showroom",
  titleHi: "KGN जुनवानी रोड शोरूम",
  categoryEn: "Visit Our Store in Bhilai",
  categoryHi: "हमारी दुकान पर आएं — भिलाई",
  specsEn: "Opp. Shikhar Complex • Near Surya Mall • Open Daily",
  specsHi: "शिखर कॉम्प्लेक्स के सामने • सूर्या मॉल के पास • रोज़ खुला",
  badgeEn: "Our Store",
  badgeHi: "हमारी दुकान",
  image: "/storefront.jpg",
  isStore: true,
}

// ─── Build product slides from the full catalog ───────────────────────────────
/** Pick up to `max` featured products that have a real photo. */
function buildProductSlides(max = 6): SlideItem[] {
  const catMap = Object.fromEntries(
    categories.map((c) => [c.id, { en: c.nameEn, hi: c.nameHi }]),
  )

  return products
    .filter((p) => p.featured && hasProductPhoto(p))
    .map<SlideItem>((p) => ({
      id: p.id,
      titleEn: p.nameEn,
      titleHi: p.nameHi,
      categoryEn: catMap[p.category]?.en ?? p.category,
      categoryHi: catMap[p.category]?.hi ?? p.category,
      specsEn: [
        p.brand ? `${p.brand}` : "",
        catMap[p.category]?.en ?? "",
        "Genuine · Warranty Included",
      ]
        .filter(Boolean)
        .join(" • "),
      specsHi: [
        p.brand ? `${p.brand}` : "",
        catMap[p.category]?.hi ?? "",
        "असली · वारंटी शामिल",
      ]
        .filter(Boolean)
        .join(" • "),
      badgeEn: p.badgeEn ?? "In Stock",
      badgeHi: p.badgeHi ?? "उपलब्ध",
      image: getProductImage(p),
      link: productUrl(p.id),
    }))
    .slice(0, max)
}

/** Fisher-Yates shuffle (in-place). */
function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// ─── Component ────────────────────────────────────────────────────────────────
export function HeroVisual() {
  const { language } = useLanguage()
  const hi = language === "hi"

  // Build slides once on client mount (shuffle product slides so they're different per visit)
  const [slides, setSlides] = useState<SlideItem[]>([STORE_SLIDE])
  const [activeIdx, setActiveIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  useEffect(() => {
    const productSlides = shuffle(buildProductSlides(8))
    setSlides([STORE_SLIDE, ...productSlides])
  }, [])

  const total = slides.length
  const current = slides[activeIdx]

  // Auto-cycle
  useEffect(() => {
    if (isPaused || total <= 1) return
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % total)
    }, 4500)
    return () => clearInterval(timer)
  }, [isPaused, total])

  const goNext = () => setActiveIdx((prev) => (prev + 1) % total)
  const goPrev = () => setActiveIdx((prev) => (prev - 1 + total) % total)

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    setIsPaused(true)
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) goNext()
      else goPrev()
    }
    touchStartX.current = null
    touchStartY.current = null
    setIsPaused(false)
  }

  const enquiryUrl = getWhatsAppUrl(
    `${businessConfig.whatsappMessages.priceEnquiry} ${current.titleEn}. ${
      hi ? "कृपया कीमत और उपलब्धता बताएं।" : "Please share price and availability."
    }`,
  )

  return (
    <div
      className="relative w-full max-w-xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Ambient glow */}
      <div
        className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/25 via-accent/20 to-primary/10 blur-2xl opacity-70"
        aria-hidden="true"
      />

      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-card shadow-2xl">

        {/* ── Top bar: slide counter + nav arrows ── */}
        <div className="flex items-center justify-between gap-2 border-b border-border/60 bg-secondary/50 px-3 py-2">
          <div className="flex items-center gap-1.5">
            {current.isStore ? (
              <Store className="h-3.5 w-3.5 text-primary" />
            ) : (
              <span className="h-2 w-2 rounded-full bg-primary" />
            )}
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary leading-none">
              {current.isStore
                ? (hi ? "हमारा शोरूम" : "Our Showroom")
                : (hi ? current.categoryHi : current.categoryEn)}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[11px] text-muted-foreground tabular-nums">
              {activeIdx + 1}/{total}
            </span>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous"
              className="h-6 w-6 rounded-full border border-border/60 bg-card flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronRight className="h-3 w-3 rotate-180 text-foreground" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next"
              className="h-6 w-6 rounded-full border border-border/60 bg-card flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronRight className="h-3 w-3 text-foreground" />
            </button>
          </div>
        </div>

        {/* ── Product Image Stage ── */}
        <div className="relative w-full bg-white" style={{ height: "220px" }}>
          <Image
            key={current.id}
            src={current.image}
            alt={hi ? current.titleHi : current.titleEn}
            fill
            priority={activeIdx === 0}
            className={`${current.isStore ? "object-cover" : "object-contain"} p-3 transition-opacity duration-500`}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Badge top-left */}
          <div className="absolute top-2 left-2 z-10 flex items-center rounded-md bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground shadow-xs">
            {hi ? current.badgeHi : current.badgeEn}
          </div>

          {/* Top-right badge */}
          {current.isStore ? (
            <div className="absolute top-2 right-2 z-10 flex items-center gap-1 rounded-full border border-border/70 bg-card/95 px-2 py-0.5 text-[11px] font-semibold text-foreground shadow backdrop-blur-sm">
              <MapPin className="h-3 w-3 text-primary" />
              {hi ? "जुनवानी रोड" : "Junwani Rd"}
            </div>
          ) : (
            <div className="absolute top-2 right-2 z-10 flex items-center gap-1 rounded-full border border-border/70 bg-card/95 px-2 py-0.5 text-[11px] font-semibold text-foreground shadow backdrop-blur-sm">
              <ShieldCheck className="h-3 w-3 text-primary" />
              {hi ? "वारंटी" : "Warranty"}
            </div>
          )}

          {/* Swipe hint (only on touch devices, first slide, fades after) */}
          {activeIdx === 0 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[10px] text-white sm:hidden animate-fade-out">
              ← {hi ? "स्वाइप करें" : "Swipe"} →
            </div>
          )}
        </div>

        {/* ── Info & CTA ── */}
        <div className="border-t border-border/60 bg-card p-3 sm:p-4">
          {/* Title */}
          <h3 className="text-sm sm:text-base font-bold text-foreground leading-snug">
            {hi ? current.titleHi : current.titleEn}
          </h3>

          {/* Specs */}
          <p className="mt-0.5 text-[11px] sm:text-xs text-muted-foreground line-clamp-1">
            {hi ? current.specsHi : current.specsEn}
          </p>

          {/* Action buttons */}
          <div className="mt-3 flex items-center gap-2">
            {current.isStore ? (
              <>
                <a
                  href={businessConfig.googleMaps.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-3 py-2.5 text-xs font-bold text-primary-foreground shadow-sm transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  <Navigation2 className="h-3.5 w-3.5" />
                  {hi ? "रास्ता देखें" : "Get Directions"}
                </a>
                <a
                  href={`tel:${businessConfig.contact.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-1 rounded-xl border border-border/80 bg-secondary/60 px-3 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-secondary active:scale-[0.98]"
                  aria-label="Call store"
                >
                  <Phone className="h-3.5 w-3.5 text-primary" />
                  {hi ? "कॉल करें" : "Call Store"}
                </a>
              </>
            ) : (
              <>
                <a
                  href={enquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#1ebe5b] active:scale-[0.98]"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  {hi ? "बेस्ट कीमत पूछें" : "WhatsApp for Price"}
                </a>
                <a
                  href={`tel:${businessConfig.contact.phone}`}
                  className="inline-flex items-center justify-center gap-1 rounded-xl border border-border/80 bg-secondary/60 px-3 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-secondary active:scale-[0.98]"
                  aria-label="Call store"
                >
                  <Phone className="h-3.5 w-3.5 text-primary" />
                  <span className="sm:hidden">{businessConfig.contact.phoneDisplay}</span>
                  <span className="hidden sm:inline">{hi ? "कॉल करें" : "Call"}</span>
                </a>
                {current.link && (
                  <Link
                    href={current.link}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border/80 bg-secondary/40 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                    aria-label="View product details"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                )}
              </>
            )}
          </div>
        </div>

        {/* ── Progress Dots ── */}
        <div className="flex items-center justify-center gap-1 py-2 bg-secondary/30 border-t border-border/50 overflow-x-auto px-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIdx(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 shrink-0 rounded-full transition-all duration-300 cursor-pointer ${
                activeIdx === idx
                  ? "w-5 bg-primary"
                  : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
