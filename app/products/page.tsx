import type { Metadata } from "next"
import { LanguageProvider } from "@/context/language-context"
import { ProductsPageContent } from "@/components/products-page-content"

export const metadata: Metadata = {
  title: "All Products",
  description:
    "Browse the full range of home appliances at KGN Home Appliances, Bhilai — mixer grinders, gas stoves, pressure cookers, kitchenware, cleaning tools, hardware, fans, coolers and more.",
}

export default function ProductsPage() {
  return (
    <LanguageProvider>
      <ProductsPageContent />
    </LanguageProvider>
  )
}
