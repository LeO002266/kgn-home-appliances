import type { Metadata } from "next"
import { LanguageProvider } from "@/context/language-context"
import { ProductsPageContent } from "@/components/products-page-content"

export const metadata: Metadata = {
  title: "All Products",
  description:
    "Browse the full range of home appliances at KGN Home Appliances, Bhilai — refrigerators, washing machines, microwaves, pressure cookers, mixer grinders, fans, coolers and more.",
}

export default function ProductsPage() {
  return (
    <LanguageProvider>
      <ProductsPageContent />
    </LanguageProvider>
  )
}
