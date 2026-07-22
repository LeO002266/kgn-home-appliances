"use client"

import { HelpCircle, ChevronDown } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { businessConfig } from "@/config/business"
import { faqs } from "@/config/faqs"

export function FaqSection() {
  const { language } = useLanguage()
  const hi = language === "hi"

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {hi ? "सामान्य प्रश्न" : "FAQ"}
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance text-foreground">
            {hi ? "अक्सर पूछे जाने वाले सवाल" : "Frequently asked questions"}
          </h2>
        </div>

        <div className="grid gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.qEn}
              className="group rounded-2xl border border-border bg-card px-5 transition-colors open:border-primary/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-base font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                <span className="inline-flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  {hi ? faq.qHi : faq.qEn}
                </span>
                <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-5 pl-8 text-sm text-muted-foreground leading-relaxed">{hi ? faq.aHi : faq.aEn}</p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          {hi ? "कोई और सवाल है? " : "Have another question? "}
          <a href={`tel:${businessConfig.contact.phone}`} className="font-semibold text-primary hover:underline">
            {businessConfig.contact.phoneDisplay}
          </a>
          {hi ? " पर कॉल करें" : ""}
        </p>
      </div>
    </section>
  )
}
