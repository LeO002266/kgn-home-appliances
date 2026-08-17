"use client"

import Link from "next/link"
import {
  ChevronRight,
  Blend,
  Package,
  Flame,
  CookingPot,
  Wrench,
  Microwave,
  Fan,
  Zap,
  Droplets,
  ShowerHead,
  Settings,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  Wind,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { useLanguage } from "@/context/language-context"
import { businessConfig, getWhatsAppUrl } from "@/config/business"
import { services, serviceAreas, type ServiceIconId } from "@/config/services"
import { getServicePageByServiceId } from "@/config/service-pages"
import { serviceAreaPages } from "@/config/areas"

const icons: Record<ServiceIconId, typeof Blend> = {
  mixer: Blend,
  jars: Package,
  stove: Flame,
  cooker: CookingPot,
  pipeline: Wrench,
  microwave: Microwave,
  fan: Fan,
  iron: Zap,
  purifier: Droplets,
  geyser: ShowerHead,
  maintenance: Settings,
  chimney: Wind,
}

export function ServicesPageContent() {
  const { t, language } = useLanguage()
  const hi = language === "hi"

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 md:pt-36 pb-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              {t("nav.home")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{t("services.title")}</span>
          </nav>

          <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance text-foreground">
            {t("services.heading")}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed">
            {t("services.description")}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${businessConfig.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {businessConfig.contact.phoneDisplay}
            </a>
            <a
              href={getWhatsAppUrl(businessConfig.whatsappMessages.repair)}
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

      <section className="pb-16 md:pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = icons[service.icon]
              const points = hi ? service.pointsHi : service.pointsEn
              const landingPage = getServicePageByServiceId(service.id)

              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 scroll-mt-24"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 font-serif text-xl font-semibold leading-snug text-foreground">
                    {hi ? service.nameHi : service.nameEn}
                  </h2>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {hi ? service.descHi : service.descEn}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-border pt-4">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {landingPage && (
                    <Link
                      href={`/services/${landingPage.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                    >
                      {t("svc.view_details")}
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Local SEO block — service areas, address and hours as crawlable text */}
      <section className="pb-20 md:pb-28 bg-secondary/30 pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                {t("services.areas_title")}
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{t("services.areas_desc")}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {serviceAreas.map((area) => {
                  const areaPage = serviceAreaPages.find((a) => a.nameEn === area)
                  return areaPage ? (
                    <Link
                      key={area}
                      href={`/service-areas/${areaPage.slug}`}
                      className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {hi ? areaPage.nameHi : areaPage.nameEn}
                    </Link>
                  ) : (
                    <span
                      key={area}
                      className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground"
                    >
                      {area}
                    </span>
                  )
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
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
                    href={getWhatsAppUrl(businessConfig.whatsappMessages.repair)}
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
