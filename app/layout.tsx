import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { businessConfig } from "@/config/business"
import "./globals.css"

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
  },
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
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
