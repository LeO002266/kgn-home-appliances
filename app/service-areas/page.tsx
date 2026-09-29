import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, MapPin, Phone, ArrowRight, Wrench, ShieldCheck, Clock } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { serviceAreaPages } from "@/config/areas"
import { businessConfig, getWhatsAppUrl } from "@/config/business"

const title = "Service Areas in Bhilai & Durg"
const description =
  "Doorstep home appliance repair and LPG gas pipeline fitting across Bhilai and Durg, Chhattisgarh — Smriti Nagar, Junwani, Supela, Nehru Nagar, Kohka, Risali and Durg. Call 91099 18786."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "appliance repair Bhilai",
    "appliance repair Durg",
    "doorstep appliance service Bhilai",
    "service areas Bhilai",
    "appliance repair Smriti Nagar",
    "appliance repair Supela",
    "appliance repair Nehru Nagar",
    "appliance repair Kohka",
    "appliance repair Risali",
    "gas pipeline fitting Bhilai",
  ],
  alternates: { canonical: `${businessConfig.siteUrl}/service-areas` },
  openGraph: {
    title: `${title} | ${businessConfig.name}`,
    description,
    url: `${businessConfig.siteUrl}/service-areas`,
    type: "website",
  },
}

export default function ServiceAreasIndexPage() {
  const base = businessConfig.siteUrl

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `${base}/service-areas` },
    ],
  }

  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />

      {/* Hero Header */}
      <section className="pt-28 md:pt-36 pb-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">Service Areas</span>
          </nav>

          <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Service Areas in Bhilai & Durg
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed">
            We provide fast, reliable doorstep appliance repair and LPG gas pipeline fitting across Bhilai and Durg. 
            Select your locality below to see available services and estimated response times.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${businessConfig.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call {businessConfig.contact.phoneDisplay}
            </a>
            <a
              href={getWhatsAppUrl(businessConfig.whatsappMessages.repair)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/50 transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="pb-16 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreaPages.map((area) => (
              <article
                key={area.slug}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground/70">
                    Doorstep Available
                  </span>
                </div>

                <h2 className="mt-4 font-serif text-xl font-semibold text-foreground">
                  <Link href={`/service-areas/${area.slug}`} className="transition-colors group-hover:text-primary">
                    {area.nameEn} <span className="text-sm font-normal text-muted-foreground font-sans">({area.nameHi})</span>
                  </Link>
                </h2>

                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {area.metaDescription}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                    <Wrench className="h-3.5 w-3.5 text-primary" />
                    Repairs & Pipeline
                  </span>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                  >
                    View Area
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Service Guarantee Banner */}
          <div className="mt-14 grid sm:grid-cols-3 gap-4 rounded-2xl border border-border bg-secondary/30 p-6 md:p-8">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">Fast Doorstep Visits</h3>
                <p className="mt-1 text-xs text-muted-foreground">Most local calls serviced within 2–4 hours or same day.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">Genuine Spares</h3>
                <p className="mt-1 text-xs text-muted-foreground">Authentic parts with warranty directly from our shop.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">Shop on Junwani Road</h3>
                <p className="mt-1 text-xs text-muted-foreground">Drop-offs also welcome anytime during store hours.</p>
              </div>
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
