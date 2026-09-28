"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, MessageCircle, Phone, Sparkles, MapPin, ChevronRight, Blend, Droplets, Store, Flame } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { businessConfig, getWhatsAppUrl } from "@/config/business"

interface ShowcaseItem {
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
  TabIcon: typeof Blend
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: "peacock-stove",
    titleEn: "Peacock 3-Burner Glass Stove",
    titleHi: "पीकॉक 3 बर्नर ग्लास चूल्हा",
    categoryEn: "Gas Stoves & Pipeline",
    categoryHi: "गैस चूल्हा और पाइपलाइन",
    specsEn: "Toughened Glass • Heavy Brass Burners • Pipeline Ready",
    specsHi: "टफन्ड ग्लास • हैवी ब्रास बर्नर • पाइपलाइन रेडी",
    badgeEn: "Best Seller",
    badgeHi: "बेस्टसेलर",
    image: "/products/peacock-glass-stove-3b.jpg",
    link: "/products/peacock-glass-stove-3b",
    TabIcon: Flame,
  },
  {
    id: "starx-ro",
    titleEn: "StarX Royal Plus RO+UV+UF",
    titleHi: "स्टार X रॉयल प्लस RO+UV+UF",
    categoryEn: "Water Purifiers & Service",
    categoryHi: "वॉटर प्यूरीफायर और सर्विस",
    specsEn: "Copper+Zinc+Alkaline • 12L • Free Service",
    specsHi: "कॉपर+जिंक+एल्कलाइन • 12L • फ्री सर्विस",
    badgeEn: "Top Rated",
    badgeHi: "टॉप रेटेड",
    image: "/products/starx-royal-ro-purifier.jpg",
    link: "/products/starx-royal-ro-purifier",
    TabIcon: Droplets,
  },
  {
    id: "havells-mixer",
    titleEn: "Havells Mixer Grinder 750W",
    titleHi: "हैवेल्स मिक्सर ग्राइंडर 750W",
    categoryEn: "Mixer Grinders & Spares",
    categoryHi: "मिक्सर ग्राइंडर और पार्ट्स",
    specsEn: "750W Copper Motor • 4 Jars • Spares In-Store",
    specsHi: "750W कॉपर मोटर • 4 जार • पार्ट्स उपलब्ध",
    badgeEn: "Power Pick",
    badgeHi: "पावर पिक",
    image: "/products/havells-mixer-750.jpg",
    link: "/products/havells-mixer-750",
    TabIcon: Blend,
  },
  {
    id: "storefront",
    titleEn: "KGN Junwani Road Showroom",
    titleHi: "KGN जुनवानी रोड शोरूम",
    categoryEn: "Visit Us in Bhilai",
    categoryHi: "हमारी दुकान पर आएं",
    specsEn: "Opp. Shikhar Complex, Near Surya Mall",
    specsHi: "शिखर कॉम्प्लेक्स के सामने, सूर्या मॉल के पास",
    badgeEn: "Our Store",
    badgeHi: "हमारी दुकान",
    image: "/storefront.jpg",
    isStore: true,
    TabIcon: Store,
  },
]

export function HeroVisual() {
  const { language } = useLanguage()
  const hi = language === "hi"
  const [activeIdx, setActiveIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const current = showcaseItems[activeIdx]

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % showcaseItems.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [isPaused])

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
    >
      {/* Ambient glow */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/25 via-accent/20 to-primary/10 blur-2xl opacity-70" aria-hidden="true" />

      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-card shadow-2xl">

        {/* ── Tab Bar ── compact on mobile: icon only, full label on sm+ */}
        <div className="flex items-center border-b border-border/60 bg-secondary/50">
          {showcaseItems.map((item, idx) => {
            const Icon = item.TabIcon
            const isActive = activeIdx === idx
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                aria-label={hi ? item.badgeHi : item.badgeEn}
                className={`flex flex-1 flex-col sm:flex-row items-center justify-center gap-1 px-1.5 py-2.5 sm:px-3 sm:py-3 text-[11px] sm:text-xs font-semibold transition-all cursor-pointer border-b-2 ${
                  isActive
                    ? "border-primary text-primary bg-card"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-card/60"
                }`}
              >
                <Icon className={`h-4 w-4 sm:h-3.5 sm:w-3.5 shrink-0 ${isActive ? "text-primary" : ""}`} />
                <span className="hidden sm:inline leading-tight text-center">{hi ? item.badgeHi : item.badgeEn}</span>
              </button>
            )
          })}
        </div>

        {/* ── Product Image Stage ── */}
        <div className="relative w-full bg-white" style={{ height: "220px" }}>
          {/* Product image */}
          <Image
            src={current.image}
            alt={hi ? current.titleHi : current.titleEn}
            fill
            priority
            className={`${current.isStore ? "object-cover" : "object-contain"} p-3 transition-all duration-500`}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Badge top-left */}
          <div className="absolute top-2 left-2 z-10 flex items-center gap-1 rounded-full bg-gradient-to-r from-[#ffd54d] via-[#fbc02d] to-[#f0a500] px-2.5 py-1 text-[11px] font-bold text-[#2a1362] shadow">
            <Sparkles className="h-2.5 w-2.5 fill-[#2a1362]" />
            {hi ? current.badgeHi : current.badgeEn}
          </div>

          {/* Warranty badge top-right */}
          <div className="absolute top-2 right-2 z-10 flex items-center gap-1 rounded-full border border-border/70 bg-card/95 px-2 py-0.5 text-[11px] font-semibold text-foreground shadow backdrop-blur-sm">
            <ShieldCheck className="h-3 w-3 text-primary" />
            {hi ? "वारंटी" : "Warranty"}
          </div>
        </div>

        {/* ── Info & CTA ── */}
        <div className="border-t border-border/60 bg-card p-3 sm:p-4">
          {/* Category + location row */}
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary leading-none">
              {hi ? current.categoryHi : current.categoryEn}
            </span>
            <span className="inline-flex items-center gap-0.5 text-[11px] text-muted-foreground">
              <MapPin className="h-2.5 w-2.5 text-primary" />
              {hi ? "जुनवानी रोड" : "Junwani Road"}
            </span>
          </div>

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
          </div>
        </div>

        {/* ── Progress Dots ── */}
        <div className="flex items-center justify-center gap-1.5 py-2 bg-secondary/30 border-t border-border/50">
          {showcaseItems.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIdx(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIdx === idx
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
