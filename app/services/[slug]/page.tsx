import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LanguageProvider } from "@/context/language-context"
import { ServiceLandingContent } from "@/components/service-landing-content"
import { servicePages, getServicePage } from "@/config/service-pages"
import { serviceAreas } from "@/config/services"
import { businessConfig } from "@/config/business"

// Pre-build a landing page for every entry in config/service-pages.ts
export function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = getServicePage(slug)
  if (!page) return { title: "Service not found" }

  const url = `${businessConfig.siteUrl}/services/${page.slug}`

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${page.metaTitle} | ${businessConfig.name}`,
      description: page.metaDescription,
      url,
      type: "website",
    },
  }
}

export default async function ServiceLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getServicePage(slug)
  if (!page) notFound()

  const base = businessConfig.siteUrl
  const url = `${base}/services/${page.slug}`

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: page.h1En,
    description: page.metaDescription,
    serviceType: page.h1En,
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
    areaServed: serviceAreas.map((a) => ({ "@type": "Place", name: a })),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: businessConfig.contact.phone,
      serviceUrl: url,
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
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
      { "@type": "ListItem", position: 3, name: page.h1En, item: url },
    ],
  }

  return (
    <LanguageProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceLandingContent slug={page.slug} />
    </LanguageProvider>
  )
}
