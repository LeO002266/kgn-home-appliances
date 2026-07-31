import type { Metadata } from "next"
import { LanguageProvider } from "@/context/language-context"
import { ServicesPageContent } from "@/components/services-page-content"
import { services, serviceAreas } from "@/config/services"
import { businessConfig } from "@/config/business"

const title = "Home Appliance Repair Services in Bhilai"
const description =
  "Doorstep appliance repair in Bhilai & Durg — mixer grinders, gas stoves, ovens, fans, irons and geysers — plus LPG gas pipeline fitting with ISI-marked parts. Call 91099 18786."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "appliance repair Bhilai",
    "gas pipeline fitting Bhilai",
    "mixer grinder repair Bhilai",
    "gas stove repair Bhilai",
    "fan repair Bhilai",
    "geyser installation Bhilai",
    "water purifier service Bhilai",
    "appliance service Durg",
    "doorstep appliance repair Bhilai",
    "अप्लायंस रिपेयर भिलाई",
  ],
  alternates: { canonical: `${businessConfig.siteUrl}/services` },
  openGraph: {
    title: `${title} | ${businessConfig.name}`,
    description,
    url: `${businessConfig.siteUrl}/services`,
    type: "website",
  },
}

export default function ServicesPage() {
  const base = businessConfig.siteUrl

  const provider = {
    "@type": "LocalBusiness",
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
  }

  // One Service node per offering, all pointing back at the same local provider.
  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": services.map((s) => ({
      "@type": "Service",
      "@id": `${base}/services#${s.id}`,
      name: s.nameEn,
      description: s.descEn,
      serviceType: s.nameEn,
      provider,
      areaServed: serviceAreas.map((a) => ({ "@type": "Place", name: a })),
      availableChannel: {
        "@type": "ServiceChannel",
        servicePhone: businessConfig.contact.phone,
        serviceUrl: `${base}/services`,
      },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "Services", item: `${base}/services` },
    ],
  }

  return (
    <LanguageProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicesPageContent />
    </LanguageProvider>
  )
}
