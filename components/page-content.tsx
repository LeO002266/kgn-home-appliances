"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { BrandsStrip } from "@/components/brands-strip"
import { SpecialtyHighlight } from "@/components/specialty-highlight"
import { CategoriesSection } from "@/components/categories-section"
import { FeaturedProducts } from "@/components/featured-products"
import { RepairServices } from "@/components/repair-services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ReviewsSection } from "@/components/reviews-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileCtaBar } from "@/components/mobile-cta-bar"

export function PageContent() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <BrandsStrip />
        <SpecialtyHighlight />
        <CategoriesSection />
        <FeaturedProducts />
        <RepairServices />
        <WhyChooseUs />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
        <MobileCtaBar />
      </main>
    </>
  )
}
