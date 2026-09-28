"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, MessageCircle, Phone, Sparkles, MapPin, ChevronRight } from "lucide-react"
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
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: "peacock-stove",
    titleEn: "Peacock Designer 3-Burner Glass Stove",
    titleHi: "पीकॉक डिज़ाइनर 3 बर्नर ग्लास चूल्हा",
    categoryEn: "Gas Stoves & Pipeline",
    categoryHi: "गैस चूल्हा और पाइपलाइन",
    specsEn: "Toughened Glass • Heavy Brass Burners • Pipeline Ready",
    specsHi: "टफन्ड ग्लास • हैवी ब्रास बर्नर • पाइपलाइन रेडी",
    badgeEn: "Best Seller",
    badgeHi: "बेस्टसेलर",
    image: "/products/peacock-glass-stove-3b.jpg",
    link: "/products/peacock-glass-stove-3b",
  },
  {
    id: "starx-ro",
    titleEn: "StarX Royal Plus RO+UV+UF Purifier",
    titleHi: "स्टार X रॉयल प्लस RO+UV+UF प्यूरीफायर",
    categoryEn: "Water Purifiers & Service",
    categoryHi: "वॉटर प्यूरीफायर और सर्विस",
    specsEn: "Copper + Zinc + Alkaline • 12L Storage • Free Service",
    specsHi: "कॉपर + जिंक + एल्कलाइन • 12L स्टोरेज • फ्री सर्विस",
    badgeEn: "Top Rated",
    badgeHi: "टॉप रेटेड",
    image: "/products/starx-royal-ro-purifier.jpg",
    link: "/products/starx-royal-ro-purifier",
  },
  {
    id: "havells-mixer",
    titleEn: "Havells Heavy Mixer Grinder 750W",
    titleHi: "हैवेल्स हैवी मिक्सर ग्राइंडर 750W",
    categoryEn: "Mixer Grinders & Spares",
    categoryHi: "मिक्सर ग्राइंडर और पार्ट्स",
    specsEn: "750W Copper Motor • 4 Heavy Jars • Spares In-Store",
    specsHi: "750W कॉपर मोटर • 4 हैवी जार • पार्ट्स उपलब्ध",
    badgeEn: "Power Grind",
    badgeHi: "पावर ग्राइंड",
    image: "/products/havells-mixer-750.jpg",
    link: "/products/havells-mixer-750",
  },
  {
    id: "storefront",
    titleEn: "KGN Junwani Road Showroom",
    titleHi: "KGN जुनवानी रोड शोरूम",
    categoryEn: "Visit Us in Bhilai",
    categoryHi: "हमारी दुकान पर आएं",
    specsEn: "Opp. Shikhar Complex, Near Surya Mall, Junwani Rd",
    specsHi: "शिखर कॉम्प्लेक्स के सामने, सूर्या मॉल के पास, भिलाई",
    badgeEn: "Physical Store",
    badgeHi: "दुकान पर आएं",
    image: "/storefront.jpg",
    isStore: true,
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
      {/* Background ambient light */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/25 via-accent/20 to-primary/10 blur-2xl opacity-70" aria-hidden="true" />

      {/* Main Showcase Container */}
      <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-2xl transition-all duration-300">
        {/* Showcase Header Controls */}
        <div className="flex items-center justify-between border-b border-border/70 bg-secondary/60 px-4 py-2.5 backdrop-blur-sm">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
            {showcaseItems.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-all cursor-pointer ${
                  activeIdx === idx
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "text-muted-foreground hover:bg-card hover:text-foreground"
                }`}
              >
                {hi ? item.badgeHi : item.badgeEn}
              </button>
            ))}
          </div>

          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-primary">
            <Sparkles className="h-3 w-3" />
            {hi ? "इन-स्टोर स्टॉक" : "In-Store Stock"}
          </span>
        </div>

        {/* Visual Stage */}
        <div className="relative aspect-[4/3] sm:aspect-square w-full bg-gradient-to-b from-white via-white to-secondary/30 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
          {/* Active Product Image */}
          <div className="relative h-full w-full transition-all duration-500 ease-out">
            <Image
              src={current.image}
              alt={hi ? current.titleHi : current.titleEn}
              fill
              priority
              className={`${current.isStore ? "object-cover rounded-2xl" : "object-contain"} transition-transform duration-500 hover:scale-105`}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Top Badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#ffd54d] via-[#fbc02d] to-[#f0a500] px-3 py-1 text-xs font-bold text-[#2a1362] shadow-sm">
            <Sparkles className="h-3 w-3 fill-[#2a1362]" />
            {hi ? current.badgeHi : current.badgeEn}
          </div>

          {/* Top Right Guarantee */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex items-center gap-1 rounded-full border border-border/70 bg-card/90 px-2.5 py-1 text-[11px] font-semibold text-foreground backdrop-blur-md shadow-xs">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            <span>{hi ? "असली वारंटी" : "Brand Warranty"}</span>
          </div>

          {/* Bottom Overlay Info Card */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 rounded-2xl border border-border/80 bg-card/95 p-3 sm:p-4 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                {hi ? current.categoryHi : current.categoryEn}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                <MapPin className="h-3 w-3 text-primary" />
                {hi ? "जुनवानी रोड" : "Junwani Road"}
              </span>
            </div>

            <h3 className="mt-0.5 text-sm sm:text-base font-bold text-foreground leading-snug line-clamp-1">
              {hi ? current.titleHi : current.titleEn}
            </h3>

            <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
              {hi ? current.specsHi : current.specsEn}
            </p>

            {/* Quick Inquiry CTA strip */}
            <div className="mt-3 flex items-center gap-2 pt-2 border-t border-border/60">
              <a
                href={enquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2 text-xs font-bold text-white shadow-xs transition-all hover:bg-[#1ebe5b] active:scale-[0.98]"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                {hi ? "बेस्ट कीमत पूछें" : "WhatsApp for Best Price"}
              </a>

              <a
                href={`tel:${businessConfig.contact.phone}`}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border/80 bg-secondary/60 px-3 py-2 text-xs font-bold text-foreground transition-all hover:border-primary/50 hover:bg-secondary active:scale-[0.98]"
                aria-label="Call store"
              >
                <Phone className="h-3.5 w-3.5 text-primary" />
                <span className="hidden sm:inline">{hi ? "कॉल करें" : "Call Store"}</span>
              </a>

              {current.link && (
                <Link
                  href={current.link}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-border/80 bg-secondary/40 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                  aria-label="View product"
                >
                  <ChevronRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center justify-center gap-1.5 py-2.5 bg-card border-t border-border/60">
          {showcaseItems.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIdx(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIdx === idx ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
