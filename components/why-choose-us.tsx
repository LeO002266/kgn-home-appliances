"use client"

import { ShieldCheck, Wrench, IndianRupee, Phone } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { brands, products } from "@/config/products"

const featuresEn = [
  {
    icon: ShieldCheck,
    title: "Genuine Products",
    desc: "100% authentic appliances from authorized distributors with official warranty.",
  },
  {
    icon: Wrench,
    title: "Expert Technicians",
    desc: "Skilled and trained service technicians with years of experience.",
  },
  {
    icon: IndianRupee,
    title: "Fair Pricing",
    desc: "Competitive prices and transparent pricing with no hidden charges.",
  },
  {
    icon: Phone,
    title: "Quick Service",
    desc: "Fast delivery and same-day repair service in most cases.",
  },
]

const featuresHi = [
  {
    icon: ShieldCheck,
    title: "असली उत्पाद",
    desc: "100% असली अप्लायंसेज अधिकृत डिस्ट्रीब्यूटरों से आधिकारिक वारंटी के साथ।",
  },
  {
    icon: Wrench,
    title: "विशेषज्ञ तकनीशियन",
    desc: "कुशल और प्रशिक्षित सेवा तकनीशियन वर्षों के अनुभव के साथ।",
  },
  {
    icon: IndianRupee,
    title: "सही कीमत",
    desc: "प्रतिस्पर्धी कीमतें और पारदर्शी मूल्य निर्धारण बिना कोई छिपी लागत के।",
  },
  {
    icon: Phone,
    title: "तेज़ सेवा",
    desc: "तेज़ डिलीवरी और ज्यादातर मामलों में एक ही दिन की रिपेयर सेवा।",
  },
]

export function WhyChooseUs() {
  const { language } = useLanguage()
  const features = language === "hi" ? featuresHi : featuresEn

  return (
    <section id="why-us" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {language === "hi" ? "हमें क्यों चुनें" : "Why Choose Us"}
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance text-foreground">
            {language === "hi"
              ? "आपका विश्वसनीय होम अप्लायंस पार्टनर"
              : "Your Trusted Home Appliances Partner"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border bg-card p-6 text-center sm:text-left transition-all hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-md shadow-primary/20 transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 md:p-10 shadow-lg">
          {/* Only countable, verifiable facts here — no invented customer numbers. */}
          {[
            { stat: `${brands.length}`, label: language === "hi" ? "ब्रांड उपलब्ध" : "Brands stocked" },
            { stat: `${products.length}+`, label: language === "hi" ? "प्रोडक्ट" : "Products listed" },
            { stat: "2", label: language === "hi" ? "शहरों में सेवा" : "Cities served" },
            { stat: "7", label: language === "hi" ? "दिन खुला" : "Days open" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-semibold text-accent">{item.stat}</p>
              <p className="mt-1 text-sm text-primary-foreground/80">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
