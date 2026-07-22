import { PageContent } from "@/components/page-content"
import { LanguageProvider } from "@/context/language-context"
import { faqs } from "@/config/faqs"
import { businessConfig } from "@/config/business"

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Store", "HomeAndConstructionBusiness"],
    name: "KGN Home Appliance & Services",
    description:
      "Home appliance shop on Junwani Road, Bhilai — sales of refrigerators, washing machines, gas stoves, water purifiers, geysers, mixer grinders, fans and kitchenware, plus appliance repair, servicing and gas pipeline work.",
    url: businessConfig.siteUrl,
    telephone: "+919109918786",
    image: `${businessConfig.siteUrl}/storefront.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "In front of Shikhar Complex, Near Surya Mall, Junwani Road",
      addressLocality: "Bhilai",
      addressRegion: "Chhattisgarh",
      addressCountry: "IN",
    },
    areaServed: ["Bhilai", "Durg", "Chhattisgarh"],
    hasMap: "https://www.google.com/maps/search/?api=1&query=KGN+Home+Appliance+%26+Services+Junwani+Road+Bhilai",
    sameAs: [
      "https://www.instagram.com/kgnhomeappliances",
      "https://www.facebook.com/kgnhomeappliances",
    ],
    openingHours: "Mo-Su 09:00-20:00",
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home appliance repair & servicing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gas pipeline fitting work" } },
    ],
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
