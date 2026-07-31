import type { Metadata } from "next"
import { PageContent } from "@/components/page-content"
import { LanguageProvider } from "@/context/language-context"
import { faqs } from "@/config/faqs"
import { businessConfig } from "@/config/business"
import { categories, categoryUrl } from "@/config/products"
import { services } from "@/config/services"

export const metadata: Metadata = {
  alternates: { canonical: businessConfig.siteUrl },
}

export default function Home() {
  const base = businessConfig.siteUrl

  // LocalBusiness details, kept in step with config/business.ts so the hours and
  // phone number on the page and in the schema can never disagree.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Store", "HomeAndConstructionBusiness"],
    "@id": `${base}/#localbusiness`,
    name: businessConfig.name,
    description:
      "Home appliance shop on Junwani Road, Bhilai — sales of mixer grinders, gas stoves, water purifiers, geysers, fans, kitchenware, cleaning tools and hardware, plus appliance repair, servicing and gas pipeline work.",
    url: base,
    telephone: businessConfig.contact.phone,
    email: businessConfig.contact.email,
    image: `${base}/storefront.jpg`,
    logo: `${base}/icon-512.png`,
    parentOrganization: { "@id": `${base}/#organization` },
    address: {
      "@type": "PostalAddress",
      streetAddress: "In front of Shikhar Complex, Near Surya Mall, Junwani Road",
      addressLocality: "Bhilai",
      addressRegion: "Chhattisgarh",
      addressCountry: "IN",
    },
    areaServed: ["Bhilai", "Durg", "Chhattisgarh"].map((name) => ({ "@type": "Place", name })),
    hasMap: businessConfig.googleMaps.url,
    sameAs: [businessConfig.social.instagram, businessConfig.social.facebook],
    currenciesAccepted: "INR",
    // Hours mirror businessConfig.businessHours — update both together.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "21:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "18:00" },
    ],
    knowsLanguage: ["en-IN", "hi-IN"],
    department: { "@type": "LocalBusiness", name: "Appliance Repair & Gas Pipeline Services", url: `${base}/services` },
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.nameEn, description: s.descEn },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Appliances & Kitchen Essentials",
      itemListElement: categories.map((c) => ({
        "@type": "OfferCatalog",
        name: c.nameEn,
        url: `${base}${categoryUrl(c.id)}`,
      })),
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.qEn,
      acceptedAnswer: { "@type": "Answer", text: f.aEn },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <LanguageProvider>
        <PageContent />
      </LanguageProvider>
    </>
  )
}
