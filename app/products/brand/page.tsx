import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, BadgeCheck, ArrowRight, ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { brands, getBrandProducts } from "@/config/products"
import { businessConfig } from "@/config/business"

const title = "Appliance Brands Stocked in Bhilai"
const description =
  "Explore genuine home appliances from top brands at KGN Home Appliance & Services, Junwani Road, Bhilai — Bajaj, Prestige, Havells, Philips, Preethi, Sujata, Butterfly, Hawkins, Crompton, Symphony, Usha and more."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "appliance brands Bhilai",
    "Bajaj dealer Bhilai",
    "Prestige dealer Bhilai",
    "Havells appliances Bhilai",
    "Philips appliances Bhilai",
    "Sujata mixer Bhilai",
    "Hawkins cooker Bhilai",
    "Crompton fan Bhilai",
    "Symphony cooler Bhilai",
  ],
  alternates: { canonical: `${businessConfig.siteUrl}/products/brand` },
  openGraph: {
    title: `${title} | ${businessConfig.name}`,
    description,
    url: `${businessConfig.siteUrl}/products/brand`,
    type: "website",
  },
}

export default function BrandsIndexPage() {
  const base = businessConfig.siteUrl

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Products", item: `${base}/products` },
      { "@type": "ListItem", position: 3, name: "Brands", item: `${base}/products/brand` },
    ],
  }

  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />

      <section className="pt-28 md:pt-36 pb-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">Brands</span>
          </nav>

          <Link
            href="/products"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Products
          </Link>

          <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Appliance Brands We Stock
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed">
            Every branded appliance sold at KGN Home Appliance & Services carries the official manufacturer warranty. 
            We also stock genuine replacement parts and accessories for each brand.
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => {
              const count = getBrandProducts(brand.id).length
              return (
                <article
                  key={brand.slug}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        Authorized
                      </span>
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground/70">
                        {count} {count === 1 ? "Product" : "Products"}
                      </span>
                    </div>

                    <h2 className="mt-4 font-serif text-2xl font-semibold text-foreground">
                      <Link href={`/products/brand/${brand.slug}`} className="transition-colors group-hover:text-primary">
                        {brand.id} <span className="text-base font-normal text-muted-foreground font-sans">({brand.nameHi})</span>
                      </Link>
                    </h2>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {brand.introEn}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground">Genuine Warranty</span>
                    <Link
                      href={`/products/brand/${brand.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2 transition-all"
                    >
                      Browse {brand.id}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileCtaBar />
    </main>
  )
}
