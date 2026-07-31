import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LanguageProvider } from "@/context/language-context"
import { AreaPageContent } from "@/components/area-page-content"
import { serviceAreaPages, getAreaPage } from "@/config/areas"
import { businessConfig } from "@/config/business"

// Pre-build a page for every locality in config/areas.ts
export function generateStaticParams() {
  return serviceAreaPages.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const area = getAreaPage(slug)
  if (!area) return { title: "Area not found" }

  const url = `${businessConfig.siteUrl}/service-areas/${area.slug}`

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    keywords: area.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${area.metaTitle} | ${businessConfig.name}`,
      description: area.metaDescription,
      url,
      type: "website",
    },
  }
}

export default async function ServiceAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = getAreaPage(slug)
  if (!area) notFound()

  const base = businessConfig.siteUrl
  const url = `${base}/service-areas/${area.slug}`

  // Service scoped to this locality, provided by the same LocalBusiness node
  // the homepage declares — one business, many served places.
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Home Appliance Repair in ${area.nameEn}`,
    description: area.metaDescription,
    serviceType: "Home appliance repair and gas pipeline services",
    url,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${base}/#localbusiness`,
      name: businessConfig.name,
      telephone: businessConfig.contact.phone,
      url: base,
      address: {
        "@type": "PostalAddress",
        streetAddress: "In front of Shikhar Complex, Near Surya Mall, Junwani Road",
        addressLocality: "Bhilai",
        addressRegion: "Chhattisgarh",
        addressCountry: "IN",
      },
    },
    areaServed: { "@type": "Place", name: `${area.nameEn}, Bhilai` },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: businessConfig.contact.phone,
      serviceUrl: url,
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map((f) => ({
      "@type": "Question",
      name: f.qEn,
      acceptedAnswer: { "@type": "Answer", text: f.aEn },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Services", item: `${base}/services` },
      { "@type": "ListItem", position: 3, name: area.nameEn, item: url },
    ],
  }

  return (
    <LanguageProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AreaPageContent slug={area.slug} />
    </LanguageProvider>
  )
}
