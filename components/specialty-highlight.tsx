"use client"

import Image from "next/image"
import Link from "next/link"
import { Blend, Flame, ArrowRight, Store, Wrench, ShieldCheck, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { products, categoryUrl } from "@/config/products"

export function SpecialtyHighlight() {
  const { language } = useLanguage()
  const hi = language === "hi"

  const mixerCount = products.filter((p) => p.category === "mixer-grinders").length
  const gasCount = products.filter((p) => p.category === "gas-stoves").length

  const mixerBrands = ["Sujata", "Havells", "Philips", "Bajaj", "Preethi", "Butterfly"]
  const gasBrands = ["Surya", "Prestige", "Butterfly", "Peacock"]

  const capabilities = [
    {
      Icon: Store,
      tagEn: "Live In-Store",
      tagHi: "दुकान पर डेमो",
      titleEn: "Showroom Demo & Side-by-Side Comparison",
      titleHi: "शोरूम डेमो और ब्रांड्स की तुलना",
      descEn: "Test motor noise, jar locking, and speed control in person before buying at our Junwani Road showroom.",
      descHi: "खरीदने से पहले हमारे जुनवानी रोड शोरूम पर मोटर की आवाज़, जार लॉकिंग और स्पीड कंट्रोल खुद टेस्ट करें।",
      accent: "from-blue-500/20 to-indigo-500/10 text-blue-500 border-blue-500/20",
    },
    {
      Icon: Wrench,
      tagEn: "Off The Shelf",
      tagHi: "तुरंत उपलब्ध",
      titleEn: "100% Genuine Spare Parts Ready in Stock",
      titleHi: "100% असली स्पेयर पार्ट्स हमेशा स्टॉक में",
      descEn: "Jars, blades, rubber gaskets, couplers, knobs, brass burners and spark plugs available across all major brands.",
      descHi: "सभी प्रमुख ब्रांड्स के जार, ब्लेड, रबर गैस्केट, कपलर, नॉब, पीतल बर्नर और स्पार्क प्लग काउंटर पर तुरंत उपलब्ध।",
      accent: "from-purple-500/20 to-violet-500/10 text-purple-500 border-purple-500/20",
    },
    {
      Icon: Flame,
      tagEn: "At Your Home",
      tagHi: "घर पर सेवा",
      titleEn: "Doorstep Pipeline Fitting & Leak Testing",
      titleHi: "घर पर गैस पाइपलाइन फिटिंग व रिपेयर",
      descEn: "Certified steel LPG copper/rubber pipeline installation, pressure leak testing, and doorstep technician support.",
      descHi: "सर्टिफाइड LPG गैस पाइपलाइन फिटिंग, प्रेशर लीक टेस्टिंग और भिलाई-दुर्ग में घर बैठे कुशल मैकेनिक की सेवा।",
      accent: "from-amber-500/20 to-orange-500/10 text-amber-500 border-amber-500/20",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-muted/80 border border-border px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {hi ? "हमारी प्रमुख विशेषता" : "Store Specialties"}
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {hi ? (
              <>
                मिक्सर ग्राइंडर और गैस चूल्हा — <span className="text-primary">बिक्री और रिपेयर एक साथ</span>
              </>
            ) : (
              <>
                Mixer Grinders & Gas Stoves — <span className="text-primary">Sales, Spares & Service</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {hi
              ? "भिलाई में सबसे भरोसेमंद ब्रांड्स की विस्तृत रेंज, लाइव डेमो, असली स्पेयर पार्ट्स और उसी काउंटर पर त्वरित रिपेयर सुविधा।"
              : "Bhilai's trusted showroom for leading appliance brands with live demonstration, genuine spare parts in-stock, and instant on-counter servicing."}
          </p>
        </div>

        {/* 2 Flagship Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Mixer Grinders */}
          <Link
            href={categoryUrl("mixer-grinders")}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f0a1c] via-[#160d2b] to-[#241342] border border-white/10 p-7 sm:p-9 md:p-10 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-2xl"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-violet-600/15 blur-3xl group-hover:bg-violet-600/25 transition-colors duration-500" />

            <div className="relative z-10">
              {/* Header row */}
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/15 backdrop-blur-md shadow-inner text-violet-200">
                  <Blend className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur-md text-white/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {mixerCount}+ {hi ? "मॉडल उपलब्ध" : "Models in Stock"}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="mt-6 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-violet-200 transition-colors">
                {hi ? "मिक्सर ग्राइंडर" : "Mixer Grinders"}
              </h3>
              <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed">
                {hi
                  ? "500W रोज़मर्रा के इस्तेमाल से लेकर 900W हैवी कमर्शियल मोटर तक। स्टेनलेस स्टील जार, मजबूत कपलर और 100% कॉपर वाइंडिंग के साथ।"
                  : "From everyday 500W compact grinders to heavy-duty 900W commercial motors. Built with food-grade SS jars and durable couplers."}
              </p>

              {/* Brand Pills */}
              <div className="mt-5 flex flex-wrap items-center gap-1.5 sm:gap-2">
                {mixerBrands.map((b) => (
                  <span
                    key={b}
                    className="rounded-md bg-white/10 border border-white/10 px-2.5 py-1 text-xs font-medium text-white/90"
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* Key Features Bullet points */}
              <div className="mt-6 space-y-2.5 border-t border-white/10 pt-5 text-xs sm:text-sm text-white/85">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{hi ? "100% कॉपर मोटर व आधिकारिक ब्रांड वारंटी" : "100% Copper motors with official brand warranty"}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{hi ? "जार, ब्लेड और कपलर रिपेयर काउंटर पर उपलब्ध" : "Jars, blades & coupler repair directly on counter"}</span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Product Photo Preview & CTA Button */}
            <div className="relative z-10 mt-8 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              {/* Product preview cutout */}
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-xl bg-white p-2 shadow-lg border border-white/20 overflow-hidden">
                  <Image
                    src="/products/sujata-mixer-900.jpg"
                    alt="Sujata Dynamix 900W Mixer Grinder"
                    fill
                    className="object-contain p-1"
                    sizes="96px"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                    {hi ? "लोकप्रिय मॉडल" : "Featured Model"}
                  </span>
                  <p className="text-sm font-semibold text-white">Sujata Dynamix 900W</p>
                  <p className="text-xs text-white/70">{hi ? "3 स्टेनलेस स्टील जार सहित" : "With 3 SS heavy jars"}</p>
                </div>
              </div>

              {/* Styled Action Button */}
              <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-6 py-2.5 text-sm font-semibold shadow hover:bg-slate-100 transition-colors">
                {hi ? "मिक्सर ग्राइंडर देखें" : "View Mixer Grinders"}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>

          {/* Card 2: Gas Stoves */}
          <Link
            href={categoryUrl("gas-stoves")}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#170a02] via-[#241004] to-[#3a1906] border border-white/10 p-7 sm:p-9 md:p-10 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-2xl"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-amber-600/15 blur-3xl group-hover:bg-amber-600/25 transition-colors duration-500" />

            <div className="relative z-10">
              {/* Header row */}
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/15 backdrop-blur-md shadow-inner text-amber-200">
                  <Flame className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur-md text-white/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  {gasCount}+ {hi ? "मॉडल उपलब्ध" : "Models in Stock"}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="mt-6 font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">
                {hi ? "गैस चूल्हा" : "Gas Stoves"}
              </h3>
              <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed">
                {hi
                  ? "2, 3 और 4 बर्नर टफन्ड ग्लास और स्टेनलेस स्टील मॉडल। भारी पीतल बर्नर, स्पिल-प्रूफ ट्रे और घर पर LPG पाइपलाइन फिटिंग सुविधा।"
                  : "2, 3 & 4 burner toughened glass top and stainless steel bodies. Heavy brass tri-pin burners, spill-proof trays, and doorstep gas pipeline fitting."}
              </p>

              {/* Brand Pills */}
              <div className="mt-5 flex flex-wrap items-center gap-1.5 sm:gap-2">
                {gasBrands.map((b) => (
                  <span
                    key={b}
                    className="rounded-md bg-white/10 border border-white/10 px-2.5 py-1 text-xs font-medium text-white/90"
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* Key Features Bullet points */}
              <div className="mt-6 space-y-2.5 border-t border-white/10 pt-5 text-xs sm:text-sm text-white/85">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>{hi ? "ISI मार्क, टफन्ड ग्लास व 100% ब्रास बर्नर" : "ISI marked, shatter-resistant glass & brass burners"}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>{hi ? "घर पर पाइपलाइन फिटिंग और रिपेयर सेवा उपलब्ध" : "Doorstep gas pipeline fitting & burner servicing"}</span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Product Photo Preview & CTA Button */}
            <div className="relative z-10 mt-8 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              {/* Product preview cutout */}
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-28 sm:h-24 sm:w-32 shrink-0 rounded-xl bg-white p-2 shadow-lg border border-white/20 overflow-hidden">
                  <Image
                    src="/products/peacock-glass-stove-3b.jpg"
                    alt="Peacock Designer 3 Burner Glass Stove"
                    fill
                    className="object-contain p-1"
                    sizes="128px"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block">
                    {hi ? "3-बर्नर मॉडल" : "3-Burner Model"}
                  </span>
                  <p className="text-sm font-semibold text-white">Peacock 3B Glass Top</p>
                  <p className="text-xs text-white/70">{hi ? "टफन्ड ग्लास + ब्रास बर्नर" : "Toughened glass & brass"}</p>
                </div>
              </div>

              {/* Styled Action Button */}
              <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-6 py-2.5 text-sm font-semibold shadow hover:bg-slate-100 transition-colors">
                {hi ? "गैस चूल्हा देखें" : "View Gas Stoves"}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>
        </div>

        {/* 3-Pillar Capabilities Matrix */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {capabilities.map(({ Icon, tagEn, tagHi, titleEn, titleHi, descEn, descHi, accent }) => (
            <div
              key={titleEn}
              className="group relative flex flex-col justify-between rounded-xl border border-border/80 bg-card/80 p-6 sm:p-7 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-md hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${accent} border shadow-xs`}>
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                    {hi ? tagHi : tagEn}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {hi ? titleHi : titleEn}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {hi ? descHi : descEn}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-border/60 flex items-center gap-1.5 text-xs font-semibold text-primary">
                <ShieldCheck className="h-4 w-4" />
                <span>{hi ? "भिलाई और दुर्ग में विश्वसनीय सेवा" : "Trusted across Bhilai & Durg"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
