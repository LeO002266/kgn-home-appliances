"use client"

import Link from "next/link"
import {
  ChevronRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  BookOpen,
  ShoppingBag,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { useLanguage } from "@/context/language-context"
import { businessConfig, getWhatsAppUrl } from "@/config/business"
import { services, serviceAreas } from "@/config/services"
import { servicePages, getServicePage, getComboSlug } from "@/config/service-pages"
import { serviceAreaPages } from "@/config/areas"
import { getBlogPost } from "@/config/blog"
import { categories, categoryUrl } from "@/config/products"

export function ServiceLandingContent({ slug }: { slug: string }) {
  const { t, language } = useLanguage()
  const hi = language === "hi"

  const page = getServicePage(slug)
  if (!page) return null

  const service = services.find((s) => s.id === page.serviceId)
  const category = page.relatedCategoryId ? categories.find((c) => c.id === page.relatedCategoryId) : undefined
  const guides = page.relatedBlogSlugs.flatMap((s) => {
    const post = getBlogPost(s)
    return post ? [post] : []
  })
  const otherPages = servicePages.filter((p) => p.slug !== page.slug)

  const whatsappMessage = `${businessConfig.whatsappMessages.repair} (${service?.nameEn ?? page.h1En})`

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
            <span className="text-foreground font-medium">{hi ? page.h1Hi : page.h1En}</span>
          </nav>

          <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-balance text-foreground">
            {hi ? page.h1Hi : page.h1En}
          </h1>
          <div className="mt-4 max-w-3xl space-y-4">
            {(hi ? page.introHi : page.introEn).map((para) => (
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

      {/* What we handle */}
      <section className="pb-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            {t("svc.what_we_handle")}
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {(hi ? page.workHi : page.workEn).map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-2xl border border-border bg-card p-4 text-sm text-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-14 bg-secondary/30 pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            {t("svc.faq_title")}
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {page.faqs.map((faq) => (
              <div key={faq.qEn} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground leading-snug">{hi ? faq.qHi : faq.qEn}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{hi ? faq.aHi : faq.aEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides + shop cross-links */}
      {(guides.length > 0 || category) && (
        <section className="pb-14 pt-14 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-2">
            {guides.length > 0 && (
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground">{t("svc.guides_title")}</h2>
                <ul className="mt-4 space-y-3">
                  {guides.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-start gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {hi ? post.titleHi : post.titleEn}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {category && (
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground">{t("svc.browse_new")}</h2>
                <Link
                  href={categoryUrl(category.id)}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/50 transition-colors"
                >
                  <ShoppingBag className="h-4 w-4 text-primary" />
                  {hi ? category.nameHi : category.nameEn}
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Areas + contact card */}
      <section className="pb-20 md:pb-28 bg-secondary/30 pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                {t("services.areas_title")}
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{t("services.areas_desc")}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {/* Each locality chip links to this service's page for that locality. */}
                {serviceAreas.map((area) => {
                  const areaPage = serviceAreaPages.find((a) => a.nameEn === area)
                  const slug = areaPage ? getComboSlug(page.serviceId, areaPage.slug) : undefined
                  return slug ? (
                    <Link
                      key={area}
                      href={`/services/${slug}`}
                      className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {hi && areaPage ? areaPage.nameHi : area}
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

              <h2 className="mt-10 font-serif text-xl font-semibold text-foreground">{t("svc.other_services")}</h2>
              <ul className="mt-4 space-y-2.5">
                {otherPages.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/services/${p.slug}`}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {hi ? p.h1Hi : p.h1En}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="text-sm font-medium text-primary hover:underline">
                    {t("svc.all_services")}
                  </Link>
                </li>
              </ul>
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
