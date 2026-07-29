import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Fraunces } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { businessConfig } from "@/config/business"
import "./globals.css"

// Optional — set in .env.local / Vercel env vars. Both are no-ops when unset.
const gaId = process.env.NEXT_PUBLIC_GA_ID
const searchConsoleId = process.env.NEXT_PUBLIC_GSC_VERIFICATION

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
})

export const metadata: Metadata = {
  metadataBase: new URL(businessConfig.siteUrl),
  title: {
    default: "KGN Home Appliance & Services | Appliance Shop & Repair in Bhilai, Junwani Road",
    template: "%s | KGN Home Appliance & Services, Bhilai",
  },
  description:
    "Home appliance shop on Junwani Road, Bhilai — mixer grinders, gas stoves, water purifiers, geysers, fans, kitchenware, cleaning tools & hardware. Appliance repair, servicing & gas pipeline work. Call 91099-18786 for best price.",
  keywords: [
    "home appliance shop Bhilai",
    "appliance repair Bhilai",
    "appliance store Junwani Road",
    "gas pipeline work Bhilai",
    "gas stove repair Bhilai",
    "water purifier Bhilai",
    "geyser Bhilai",
    "mixer grinder Bhilai",
    "fan cooler shop Bhilai",
    "pressure cooker shop Bhilai",
    "kitchenware shop Bhilai",
    "cleaning tools shop Bhilai",
    "hardware and locks shop Bhilai",
    "kitchen essentials Bhilai",
    "household products Bhilai",
    "home utility products Bhilai",
    "home appliances online Bhilai",
    "kitchen appliances online Bhilai",
    "बर्तन दुकान भिलाई",
    "होम अप्लायंस भिलाई",
    "अप्लायंस रिपेयर भिलाई",
    "Bhilai",
    "Durg",
    "Chhattisgarh",
  ],
  authors: [{ name: "KGN Home Appliances" }],
  creator: "KGN Home Appliances",
  publisher: "KGN Home Appliances",
  openGraph: {
    title: "KGN Home Appliance & Services | Appliance Shop & Repair in Bhilai",
    description:
      "Home appliances, repair services & gas pipeline work on Junwani Road, Bhilai. Genuine products with warranty. Call or WhatsApp for best price.",
    url: businessConfig.siteUrl,
    siteName: "KGN Home Appliance & Services",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/storefront.jpg",
        width: 1200,
        height: 1242,
        alt: "KGN Home Appliance & Services store on Junwani Road, Bhilai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KGN Home Appliance & Services | Bhilai",
    description: "Appliance shop, repair services & gas pipeline work on Junwani Road, Bhilai",
    images: ["/storefront.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Search Console HTML-tag verification — only rendered once the env var is set.
  ...(searchConsoleId ? { verification: { google: searchConsoleId } } : {}),
  category: "Home Appliances",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#5b21b6",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Sitewide identity graph. Page-level schema (Store, Product, BlogPosting,
  // Service) references the same business; this gives Google one stable
  // Organization node and a WebSite node to attach everything to.
  const siteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${businessConfig.siteUrl}/#organization`,
        name: businessConfig.name,
        url: businessConfig.siteUrl,
        logo: { "@type": "ImageObject", url: `${businessConfig.siteUrl}/icon-512.png` },
        image: `${businessConfig.siteUrl}/storefront.jpg`,
        telephone: businessConfig.contact.phone,
        email: businessConfig.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "In front of Shikhar Complex, Near Surya Mall, Junwani Road",
          addressLocality: "Bhilai",
          addressRegion: "Chhattisgarh",
          addressCountry: "IN",
        },
        sameAs: [businessConfig.social.instagram, businessConfig.social.facebook],
      },
      {
        "@type": "WebSite",
        "@id": `${businessConfig.siteUrl}/#website`,
        url: businessConfig.siteUrl,
        name: businessConfig.name,
        inLanguage: ["en-IN", "hi-IN"],
        publisher: { "@id": `${businessConfig.siteUrl}/#organization` },
      },
    ],
  }

  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
        {children}
        <Analytics />
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
