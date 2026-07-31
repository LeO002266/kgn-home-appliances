"use client"

import Link from "next/link"
import { ChevronRight, Phone, MessageCircle, MapPin, Clock, Wrench } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { useLanguage } from "@/context/language-context"
import { businessConfig, getWhatsAppUrl } from "@/config/business"
import { servicePages } from "@/config/service-pages"
import { serviceAreaPages, getAreaPage } from "@/config/areas"

export function AreaPageContent({ slug }: { slug: string }) {
  const { t, language } = useLanguage()
  const hi = language === "hi"

  const area = getAreaPage(slug)
  if (!area) return null

  const heading = hi ? `${area.nameHi} में अप्लायंस रिपेयर` : `Appliance Repair in ${area.nameEn}`
  const otherAreas = serviceAreaPages.filter((a) => a.slug !== area.slug)
  const whatsappMessage = `${businessConfig.whatsappMessages.repair} (${area.nameEn})`

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              {t("nav.home")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/services" className="hover:text-primary transition-colors">
              {t("services.title")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{hi ? area.nameHi : area.nameEn}</span>
          </nav>

          <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance text-foreground">
            {heading}
          </h1>
          <div className="mt-4 max-w-3xl space-y-4">
            {(hi ? area.introHi : area.introEn).map((para) => (
              <p key={para.slice(0, 40)} className="text-lg text-muted-foreground text-pretty leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${businessConfig.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {businessConfig.contact.phoneDisplay}
            </a>
            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/50 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              {t("repair.whatsapp")}
            </a>
          </div>
        </div>
      </section>

      {/* Popular services in this area */}
      <section className="pb-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            {t("areas.services_here")}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((p) => (
              <Link
                key={p.slug}
                href={`/services/${p.slug}`}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Wrench className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold leading-snug text-foreground">{hi ? p.h1Hi : p.h1En}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-14 bg-secondary/30 pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            {t("svc.faq_title")}
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {area.faqs.map((faq) => (
              <div key={faq.qEn} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground leading-snug">{hi ? faq.qHi : faq.qEn}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{hi ? faq.aHi : faq.aEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other areas + contact card */}
      <section className="pb-20 md:pb-28 bg-background pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                {t("areas.other_areas")}
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {otherAreas.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/service-areas/${a.slug}`}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {hi ? a.nameHi : a.nameEn}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 md:p-8 h-fit">
              <h2 className="font-serif text-xl font-semibold text-foreground">{t("contact.visit")}</h2>
              <div className="mt-5 grid gap-4 text-sm">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground leading-relaxed">{businessConfig.contact.address}</span>
                </div>
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-primary" />
                  <div className="text-muted-foreground leading-relaxed">
                    <p>Mon – Fri: {businessConfig.businessHours.weekdays}</p>
                    <p>Sat: {businessConfig.businessHours.saturday}</p>
                    <p>Sun: {businessConfig.businessHours.sunday}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <a
                    href={`tel:${businessConfig.contact.phone}`}
                    className="font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {businessConfig.contact.phoneDisplay}
                  </a>
                </div>
                <div className="flex gap-3">
                  <MessageCircle className="h-5 w-5 shrink-0 text-[#25D366]" />
                  <a
                    href={getWhatsAppUrl(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {businessConfig.contact.whatsappDisplay}
                  </a>
                </div>
              </div>
              <Link
                href="/#repairs"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {t("repair.book_cta")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileCtaBar />
    </main>
  )
}
