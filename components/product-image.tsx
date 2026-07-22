"use client"

import { useState } from "react"
import {
  Refrigerator,
  Waves,
  Microwave,
  CookingPot,
  Blend,
  Fan,
  Home,
  Flame,
  Droplets,
  ShowerHead,
  UtensilsCrossed,
} from "lucide-react"
import type { Product, CategoryId } from "@/config/products"
import { getProductImage } from "@/config/products"

const categoryIcons: Record<CategoryId, typeof Refrigerator> = {
  refrigerators: Refrigerator,
  "washing-machines": Waves,
  microwaves: Microwave,
  "pressure-cookers": CookingPot,
  "mixer-grinders": Blend,
  "gas-stoves": Flame,
  "water-purifiers": Droplets,
  "water-heaters": ShowerHead,
  "fans-coolers": Fan,
  kitchenware: UtensilsCrossed,
  other: Home,
}

const categoryGradients: Record<CategoryId, string> = {
  refrigerators: "from-sky-100/80 via-card to-blue-50/60",
  "washing-machines": "from-cyan-100/80 via-card to-teal-50/60",
  microwaves: "from-amber-100/80 via-card to-orange-50/60",
  "pressure-cookers": "from-rose-100/80 via-card to-red-50/60",
  "mixer-grinders": "from-violet-100/80 via-card to-purple-50/60",
  "gas-stoves": "from-orange-100/80 via-card to-amber-50/60",
  "water-purifiers": "from-blue-100/80 via-card to-sky-50/60",
  "water-heaters": "from-red-100/80 via-card to-rose-50/60",
  "fans-coolers": "from-emerald-100/80 via-card to-green-50/60",
  kitchenware: "from-slate-100/80 via-card to-zinc-50/60",
  other: "from-stone-200/80 via-card to-neutral-100/60",
}

export function ProductImage({
  product,
  alt,
  iconSize = "h-24 w-24",
}: {
  product: Product
  alt: string
  iconSize?: string
}) {
  const [failed, setFailed] = useState(false)
  const Icon = categoryIcons[product.category]
  const gradient = categoryGradients[product.category]

  if (failed) {
    return (
      <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient}`}>
        <div className="flex flex-col items-center gap-2">
          <Icon
            className={`${iconSize} text-primary/40 transition-all duration-500 group-hover:scale-110 group-hover:text-primary/60`}
            strokeWidth={1.25}
          />
        </div>
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={getProductImage(product)}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setFailed(true)}
      loading="lazy"
    />
  )
}
