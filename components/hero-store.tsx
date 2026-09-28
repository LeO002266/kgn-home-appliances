"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Navigation2, MessageCircle, Phone, MapPin, Star, ShieldCheck, Truck, Wrench } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { businessConfig, getWhatsAppUrl } from "@/config/business"
import { AnimatedSection } from "@/components/animated-section"

// ── Change this to "A", "B", or "C" to preview each variant ──
// A = Full-width store photo as background with overlay
// B = Store photo right, text left (2-column)
// C = Store photo magazine cover, headline below
const VARIANT: "A" | "B" | "C" = "C"

export function HeroStore() {
  const { t, language } = useLanguage()
  const hi = language === "hi"

  const waUrl = getWhatsAppUrl(
    hi
      ? "नमस्ते! मैं KGN शोरूम आना चाहता हूँ, क्या आप समय और दिशा बता सकते हैं?"
      : "Hello! I'd like to visit the KGN showroom. Can you share directions and timing?"
  )

  const trustItems = [
    { Icon: MapPin,      text: hi ? "जुनवानी रोड, भिलाई का लैंडमार्क स्टोर"   : "Landmark store on Junwani Road, Bhilai" },
    { Icon: ShieldCheck, text: hi ? "असली ब्रांड वारंटी गारंटी"                 : "Genuine brand warranty guaranteed" },
    { Icon: Truck,       text: hi ? "भिलाई में मुफ्त होम डिलीवरी"               : "Free home delivery across Bhilai" },
    { Icon: Wrench,      text: hi ? "घर पर रिपेयर सेवा उपलब्ध"                  : "Doorstep repair service available" },
  ]

  // ────────────────────────────────────────────────────────
  // VARIANT A — Full-width background photo with dark overlay
  // ────────────────────────────────────────────────────────
  if (VARIANT === "A") {
    return (
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-end pt-24 overflow-hidden">
        {/* Background store photo */}
        <Image
          src="/storefront.jpg"
          alt="KGN Home Appliance & Services showroom on Junwani Road, Bhilai"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient overlay — heavier at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20">
          <div className="max-w-2xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-white mb-5">
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              {hi ? "भिलाई का भरोसेमंद होम अप्लायंस स्टोर" : "Bhilai's Trusted Home Appliance Store"}
            </span>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              {hi ? "KGN होम अप्लायंस" : "KGN Home Appliances"}
              <span className="block text-yellow-400 mt-1">
                {hi ? "जुनवानी रोड, भिलाई" : "Junwani Road, Bhilai"}
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              {hi
                ? "मिक्सर ग्राइंडर, गैस चूल्हा, RO प्यूरीफायर, गीज़र, पंखे और किचन का सभी सामान — सभी बड़े ब्रांड एक ही दुकान पर। रिपेयर सेवा भी उपलब्ध।"
                : "Mixer grinders, gas stoves, RO purifiers, geysers, fans and all kitchen essentials — all major brands under one roof. Repair services available too."}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={businessConfig.googleMaps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-gray-900 shadow-lg hover:bg-gray-100 transition-all active:scale-[0.98]"
              >
                <Navigation2 className="h-4 w-4" />
                {hi ? "रास्ता देखें" : "Get Directions"}
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#1ebe5b] transition-all active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" />
                {hi ? "WhatsApp करें" : "WhatsApp Us"}
              </a>
              <a
                href={`tel:${businessConfig.contact.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-5 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all active:scale-[0.98]"
              >
                <Phone className="h-4 w-4" />
                {businessConfig.contact.phoneDisplay}
              </a>
            </div>

            {/* Address strip */}
            <p className="mt-6 flex items-center gap-2 text-sm text-white/60">
              <MapPin className="h-4 w-4 shrink-0 text-yellow-400" />
              {hi ? "शिखर कॉम्प्लेक्स के सामने, सूर्या मॉल के पास, जुनवानी रोड, भिलाई (C.G.)"
                   : "Opp. Shikhar Complex, Near Surya Mall, Junwani Road, Bhilai (C.G.)"}
            </p>
          </div>
        </div>
      </section>
    )
  }

  // ────────────────────────────────────────────────────────
  // VARIANT B — 2-column: text left, store photo right
  // ────────────────────────────────────────────────────────
  if (VARIANT === "B") {
    return (
      <AnimatedSection className="relative overflow-hidden bg-gradient-to-b from-secondary/60 to-background pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: text */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/90 px-4 py-1.5 text-xs sm:text-sm font-medium text-muted-foreground shadow-sm backdrop-blur-sm">
                <Star className="h-4 w-4 fill-accent text-accent" />
                {hi ? "भिलाई का भरोसेमंद होम अप्लायंस स्टोर" : "Bhilai's Trusted Home Appliance Store"}
              </span>

              <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
                {hi ? "KGN होम अप्लायंस" : "KGN Home Appliances"}
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-1">
                  {hi ? "जुनवानी रोड, भिलाई" : "Junwani Road, Bhilai"}
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                {hi
                  ? "मिक्सर ग्राइंडर, गैस चूल्हा, RO प्यूरीफायर, गीज़र, पंखे और किचन का सभी सामान — सभी बड़े ब्रांड एक ही दुकान पर।"
                  : "Mixer grinders, gas stoves, RO purifiers, geysers, fans and all kitchen essentials — all major brands under one roof."}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href={businessConfig.googleMaps.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition-all active:scale-[0.98]"
                >
                  <Navigation2 className="h-4 w-4" />
                  {hi ? "रास्ता देखें" : "Get Directions"}
                </a>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#1ebe5b] transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" />
                  {hi ? "WhatsApp करें" : "WhatsApp Us"}
                </a>
              </div>

              {/* Trust grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl mx-auto lg:mx-0">
                {trustItems.map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-card/80 px-3.5 py-2.5 text-xs text-foreground/80 shadow-xs backdrop-blur-sm">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: store photo in a premium frame */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/60 aspect-[4/3]">
                <Image
                  src="/storefront.jpg"
                  alt="KGN Home Appliance showroom Bhilai"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Location badge overlay */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-xl bg-black/60 backdrop-blur-sm px-3 py-2 text-xs text-white">
                  <MapPin className="h-3.5 w-3.5 text-yellow-400" />
                  {hi ? "जुनवानी रोड, भिलाई" : "Junwani Road, Bhilai"}
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-bold text-white shadow">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  {hi ? "खुला है" : "Open Now"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    )
  }

  // ────────────────────────────────────────────────────────
  // VARIANT C — Magazine cover: store photo top, text below
  // ────────────────────────────────────────────────────────
  return (
    <section className="relative overflow-hidden">
      {/* Full-width tall photo */}
      <div className="relative w-full" style={{ height: "70vh", maxHeight: "560px", paddingTop: "80px" }}>
        <Image
          src="/storefront.jpg"
          alt="KGN Home Appliance & Services showroom Bhilai"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* Subtle bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />

        {/* "Open Now" pill */}
        <div className="absolute top-24 right-4 flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-bold text-white shadow">
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          {hi ? "खुला है" : "Open Now"}
        </div>
      </div>

      {/* Text panel below */}
      <div className="bg-background px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/90 px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm mb-5">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            {hi ? "भिलाई का भरोसेमंद होम अप्लायंस स्टोर" : "Bhilai's Trusted Home Appliance Store"}
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            {hi ? "KGN होम अप्लायंस" : "KGN Home Appliances"}
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-2">
              {hi ? "जुनवानी रोड, भिलाई" : "Junwani Road, Bhilai"}
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {hi
              ? "मिक्सर ग्राइंडर, गैस चूल्हा, RO प्यूरीफायर, गीज़र, पंखे — सभी बड़े ब्रांड एक ही दुकान पर। रिपेयर सेवा भी।"
              : "Mixer grinders, gas stoves, RO purifiers, geysers, fans — all major brands under one roof. Repair services too."}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={businessConfig.googleMaps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition-all active:scale-[0.98]"
            >
              <Navigation2 className="h-4 w-4" />
              {hi ? "रास्ता देखें" : "Get Directions"}
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#1ebe5b] transition-all active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" />
              {hi ? "WhatsApp करें" : "WhatsApp Us"}
            </a>
            <a
              href={`tel:${businessConfig.contact.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-5 py-3.5 text-sm font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-all active:scale-[0.98]"
            >
              <Phone className="h-4 w-4 text-primary" />
              {businessConfig.contact.phoneDisplay}
            </a>
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0 text-primary" />
            {hi ? "शिखर कॉम्प्लेक्स के सामने, सूर्या मॉल के पास, जुनवानी रोड, भिलाई"
                 : "Opp. Shikhar Complex, Near Surya Mall, Junwani Road, Bhilai"}
          </p>
        </div>
      </div>
    </section>
  )
}
