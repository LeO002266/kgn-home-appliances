import type { Product } from "@/config/products"

export type SortOption = "featured" | "rating"

export function sortProducts(items: Product[], sort: SortOption): Product[] {
  const list = [...items]

  switch (sort) {
    case "rating":
      return list.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
    case "featured":
    default:
      return list.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
  }
}

export function filterProducts(items: Product[], query: string, language: "en" | "hi"): Product[] {
  const q = query.trim().toLowerCase()
  if (!q) return items

  return items.filter((product) => {
    const haystack = [product.nameEn, product.nameHi, product.id, product.category].join(" ").toLowerCase()
    return haystack.includes(q) || (language === "hi" && product.nameHi.includes(query.trim()))
  })
}
