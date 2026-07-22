// Product catalog for KGN Home Appliances
// To add a product: copy one of the blocks below and change the details.
// To show a real photo: put the image in /public/products/ and set image: "/products/your-file.jpg"
// Note: prices are intentionally NOT listed — customers call or WhatsApp for the latest price.

export type CategoryId =
  | "refrigerators"
  | "washing-machines"
  | "microwaves"
  | "pressure-cookers"
  | "mixer-grinders"
  | "gas-stoves"
  | "water-purifiers"
  | "water-heaters"
  | "fans-coolers"
  | "kitchenware"
  | "other"

export interface Product {
  id: string
  nameEn: string
  nameHi: string
  category: CategoryId
  rating: number
  reviews: number
  image?: string
  badgeEn?: string
  badgeHi?: string
  featured?: boolean
}

export const categories: { id: CategoryId; nameEn: string; nameHi: string }[] = [
  { id: "refrigerators", nameEn: "Refrigerators", nameHi: "रेफ्रिजरेटर" },
  { id: "washing-machines", nameEn: "Washing Machines", nameHi: "वाशिंग मशीन" },
  { id: "microwaves", nameEn: "Microwave Ovens", nameHi: "माइक्रोवेव ओवन" },
  { id: "pressure-cookers", nameEn: "Pressure Cookers", nameHi: "प्रेशर कुकर" },
  { id: "mixer-grinders", nameEn: "Mixer Grinders", nameHi: "मिक्सर ग्राइंडर" },
  { id: "gas-stoves", nameEn: "Gas Stoves", nameHi: "गैस चूल्हा" },
  { id: "water-purifiers", nameEn: "Water Purifiers", nameHi: "वॉटर प्यूरीफायर" },
  { id: "water-heaters", nameEn: "Geysers & Water Heaters", nameHi: "गीज़र और वॉटर हीटर" },
  { id: "fans-coolers", nameEn: "Fans & Coolers", nameHi: "पंखे और कूलर" },
  { id: "kitchenware", nameEn: "Kitchenware & Utensils", nameHi: "बर्तन और किचनवेयर" },
  { id: "other", nameEn: "Other Appliances", nameHi: "अन्य अप्लायंसेज" },
]

export const products: Product[] = [
  // Refrigerators
  { id: "lg-fridge-340", nameEn: "LG Refrigerator 340L", nameHi: "LG रेफ्रिजरेटर 340L", category: "refrigerators", rating: 4.9, reviews: 342, badgeEn: "Best Seller", badgeHi: "बेस्टसेलर", featured: true },
  { id: "samsung-fridge-253", nameEn: "Samsung Refrigerator 253L", nameHi: "सैमसंग रेफ्रिजरेटर 253L", category: "refrigerators", rating: 4.7, reviews: 218 },
  { id: "whirlpool-fridge-190", nameEn: "Whirlpool Single Door 190L", nameHi: "व्हर्लपूल सिंगल डोर 190L", category: "refrigerators", rating: 4.6, reviews: 187 },

  // Washing Machines
  { id: "ifb-wm-65", nameEn: "IFB Washing Machine 6.5kg", nameHi: "IFB वाशिंग मशीन 6.5kg", category: "washing-machines", rating: 4.8, reviews: 511, featured: true },
  { id: "lg-wm-7", nameEn: "LG Top Load 7kg", nameHi: "LG टॉप लोड 7kg", category: "washing-machines", rating: 4.7, reviews: 356 },
  { id: "samsung-wm-6", nameEn: "Samsung Semi-Automatic 6kg", nameHi: "सैमसंग सेमी-ऑटोमैटिक 6kg", category: "washing-machines", rating: 4.5, reviews: 264 },

  // Microwaves
  { id: "mw-25", nameEn: "Microwave Oven 25L", nameHi: "माइक्रोवेव ओवन 25L", category: "microwaves", rating: 4.9, reviews: 203 },
  { id: "ifb-mw-20", nameEn: "IFB Convection Microwave 20L", nameHi: "IFB कन्वेक्शन माइक्रोवेव 20L", category: "microwaves", rating: 4.6, reviews: 142 },

  // Pressure Cookers
  { id: "philips-cooker-5", nameEn: "Philips Pressure Cooker 5L", nameHi: "फिलिप्स प्रेशर कुकर 5L", category: "pressure-cookers", rating: 4.7, reviews: 388, featured: true },
  { id: "prestige-cooker-3", nameEn: "Prestige Cooker 3L", nameHi: "प्रेस्टीज कुकर 3L", category: "pressure-cookers", rating: 4.8, reviews: 472 },
  { id: "hawkins-cooker-5", nameEn: "Hawkins Steel Cooker 5L", nameHi: "हॉकिन्स स्टील कुकर 5L", category: "pressure-cookers", rating: 4.7, reviews: 315 },

  // Mixer Grinders
  { id: "havells-mixer-750", nameEn: "Havells Mixer Grinder 750W", nameHi: "हैवेल्स मिक्सर ग्राइंडर 750W", category: "mixer-grinders", rating: 4.8, reviews: 654, featured: true },
  { id: "bajaj-mixer-500", nameEn: "Bajaj Mixer Grinder 500W", nameHi: "बजाज मिक्सर ग्राइंडर 500W", category: "mixer-grinders", rating: 4.6, reviews: 402 },

  // Gas Stoves
  { id: "prestige-stove-3b", nameEn: "Prestige Glass Top 3 Burner", nameHi: "प्रेस्टीज ग्लास टॉप 3 बर्नर", category: "gas-stoves", rating: 4.8, reviews: 421, badgeEn: "Best Seller", badgeHi: "बेस्टसेलर", featured: true },
  { id: "butterfly-stove-2b", nameEn: "Butterfly 2 Burner Gas Stove", nameHi: "बटरफ्लाई 2 बर्नर गैस चूल्हा", category: "gas-stoves", rating: 4.6, reviews: 318 },
  { id: "glass-stove-4b", nameEn: "Glass Top 4 Burner Gas Stove", nameHi: "ग्लास टॉप 4 बर्नर गैस चूल्हा", category: "gas-stoves", rating: 4.7, reviews: 205 },

  // Water Purifiers
  { id: "ro-purifier-10l", nameEn: "RO Water Purifier 10L", nameHi: "RO वॉटर प्यूरीफायर 10L", category: "water-purifiers", rating: 4.7, reviews: 264, featured: true },
  { id: "uv-purifier", nameEn: "UV + UF Water Purifier", nameHi: "UV + UF वॉटर प्यूरीफायर", category: "water-purifiers", rating: 4.6, reviews: 158 },

  // Geysers & Water Heaters
  { id: "bajaj-geyser-15l", nameEn: "Bajaj Storage Geyser 15L", nameHi: "बजाज स्टोरेज गीज़र 15L", category: "water-heaters", rating: 4.7, reviews: 231, featured: true },
  { id: "instant-geyser-3l", nameEn: "Instant Water Heater 3L", nameHi: "इंस्टेंट वॉटर हीटर 3L", category: "water-heaters", rating: 4.5, reviews: 176 },
  { id: "immersion-rod-1500", nameEn: "Immersion Rod 1500W", nameHi: "इमर्शन रॉड 1500W", category: "water-heaters", rating: 4.4, reviews: 342 },

  // Fans & Coolers
  { id: "bajaj-fan-400", nameEn: "Bajaj Pedestal Fan 400mm", nameHi: "बजाज पेडेस्टल फैन 400mm", category: "fans-coolers", rating: 4.9, reviews: 297, featured: true },
  { id: "crompton-ceiling", nameEn: "Crompton Ceiling Fan 1200mm", nameHi: "क्रॉम्पटन सीलिंग फैन 1200mm", category: "fans-coolers", rating: 4.7, reviews: 528 },
  { id: "symphony-cooler-45", nameEn: "Symphony Air Cooler 45L", nameHi: "सिम्फनी एयर कूलर 45L", category: "fans-coolers", rating: 4.5, reviews: 236 },

  // Kitchenware & Utensils
  { id: "steel-tiffin-set", nameEn: "Steel Tiffin Box Set", nameHi: "स्टील टिफिन बॉक्स सेट", category: "kitchenware", rating: 4.7, reviews: 289 },
  { id: "casserole-set", nameEn: "Insulated Casserole Set", nameHi: "इंसुलेटेड कैसरोल सेट", category: "kitchenware", rating: 4.6, reviews: 194 },
  { id: "thermos-flask-1l", nameEn: "Thermos Flask 1L", nameHi: "थर्मस फ्लास्क 1L", category: "kitchenware", rating: 4.5, reviews: 226 },
  { id: "steel-utensil-set", nameEn: "Stainless Steel Utensil Set", nameHi: "स्टेनलेस स्टील बर्तन सेट", category: "kitchenware", rating: 4.8, reviews: 351 },

  // Other
  { id: "usha-iron-1100", nameEn: "Usha Iron 1100W", nameHi: "उषा इस्त्री 1100W", category: "other", rating: 4.6, reviews: 174 },
  { id: "bajaj-heater-2000", nameEn: "Bajaj Room Heater 2000W", nameHi: "बजाज रूम हीटर 2000W", category: "other", rating: 4.5, reviews: 163 },
  { id: "crompton-pump-1hp", nameEn: "Crompton Water Pump 1HP", nameHi: "क्रॉम्पटन वॉटर पंप 1HP", category: "other", rating: 4.7, reviews: 128 },
  { id: "link-padlock", nameEn: "Link Pad Lock (Heavy Duty)", nameHi: "लिंक ताला (हैवी ड्यूटी)", category: "other", rating: 4.6, reviews: 142 },
]

// Generic, honest selling points per category (store-level claims, no invented specs)
export const categoryFeatures: Record<CategoryId, { en: string[]; hi: string[] }> = {
  refrigerators: {
    en: ["Energy-efficient cooling", "1-year official brand warranty", "Genuine product from authorized distributor", "Free delivery & installation in Bhilai"],
    hi: ["बिजली की बचत वाली कूलिंग", "1 साल की आधिकारिक ब्रांड वारंटी", "अधिकृत डिस्ट्रीब्यूटर से असली प्रोडक्ट", "भिलाई में मुफ्त डिलीवरी और इंस्टॉलेशन"],
  },
  "washing-machines": {
    en: ["Gentle yet powerful wash", "1-year official brand warranty", "Genuine product from authorized distributor", "Free delivery & installation in Bhilai"],
    hi: ["कपड़ों के लिए सुरक्षित, दमदार धुलाई", "1 साल की आधिकारिक ब्रांड वारंटी", "अधिकृत डिस्ट्रीब्यूटर से असली प्रोडक्ट", "भिलाई में मुफ्त डिलीवरी और इंस्टॉलेशन"],
  },
  microwaves: {
    en: ["Easy controls, even heating", "1-year official brand warranty", "Genuine product from authorized distributor", "Demo & usage guidance at the store"],
    hi: ["आसान कंट्रोल, एक-सा हीटिंग", "1 साल की आधिकारिक ब्रांड वारंटी", "अधिकृत डिस्ट्रीब्यूटर से असली प्रोडक्ट", "दुकान पर डेमो और उपयोग की जानकारी"],
  },
  "pressure-cookers": {
    en: ["Safe, ISI-marked build", "Manufacturer warranty included", "Genuine product from authorized distributor", "Spare gaskets & parts available in-store"],
    hi: ["सुरक्षित, ISI मार्क वाली बनावट", "निर्माता वारंटी शामिल", "अधिकृत डिस्ट्रीब्यूटर से असली प्रोडक्ट", "गैस्केट और पार्ट्स दुकान पर उपलब्ध"],
  },
  "mixer-grinders": {
    en: ["Powerful motor for daily use", "1-year official brand warranty", "Genuine product from authorized distributor", "Jars & spare parts available in-store"],
    hi: ["रोज़ के उपयोग के लिए दमदार मोटर", "1 साल की आधिकारिक ब्रांड वारंटी", "अधिकृत डिस्ट्रीब्यूटर से असली प्रोडक्ट", "जार और स्पेयर पार्ट्स दुकान पर उपलब्ध"],
  },
  "gas-stoves": {
    en: ["ISI-marked, safe build", "Manufacturer warranty included", "Gas pipeline fitting service available", "Installation & demo at your home"],
    hi: ["ISI मार्क, सुरक्षित बनावट", "निर्माता वारंटी शामिल", "गैस पाइपलाइन फिटिंग सेवा उपलब्ध", "घर पर इंस्टॉलेशन और डेमो"],
  },
  "water-purifiers": {
    en: ["Clean, safe drinking water", "Manufacturer warranty included", "Filter replacement service available", "Free installation in Bhilai"],
    hi: ["साफ, सुरक्षित पीने का पानी", "निर्माता वारंटी शामिल", "फिल्टर बदलने की सेवा उपलब्ध", "भिलाई में मुफ्त इंस्टॉलेशन"],
  },
  "water-heaters": {
    en: ["Fast heating, power saving", "Manufacturer warranty included", "Genuine product from authorized distributor", "Installation service available"],
    hi: ["तेज़ हीटिंग, बिजली की बचत", "निर्माता वारंटी शामिल", "अधिकृत डिस्ट्रीब्यूटर से असली प्रोडक्ट", "इंस्टॉलेशन सेवा उपलब्ध"],
  },
  "fans-coolers": {
    en: ["High air delivery, low noise", "Manufacturer warranty included", "Genuine product from authorized distributor", "Free delivery in Bhilai"],
    hi: ["तेज़ हवा, कम आवाज़", "निर्माता वारंटी शामिल", "अधिकृत डिस्ट्रीब्यूटर से असली प्रोडक्ट", "भिलाई में मुफ्त डिलीवरी"],
  },
  kitchenware: {
    en: ["Food-grade stainless steel", "Durable, long-lasting quality", "Huge variety available in-store", "Best rates in Junwani Road market"],
    hi: ["फूड-ग्रेड स्टेनलेस स्टील", "टिकाऊ, लंबे समय चलने वाली क्वालिटी", "दुकान पर भारी वैरायटी उपलब्ध", "जुनवानी रोड मार्केट में बेस्ट रेट"],
  },
  other: {
    en: ["Trusted brands only", "Manufacturer warranty included", "Genuine product from authorized distributor", "After-sales service & repair support"],
    hi: ["सिर्फ भरोसेमंद ब्रांड", "निर्माता वारंटी शामिल", "अधिकृत डिस्ट्रीब्यूटर से असली प्रोडक्ट", "बिक्री के बाद सर्विस और रिपेयर सपोर्ट"],
  },
}

// Convention: a product's photo lives at /public/products/<product-id>.jpg
// Drop a file with that name and it appears automatically — no code change needed.
export function getProductImage(p: Product): string {
  return p.image ?? `/products/${p.id}.jpg`
}

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(p: Product, limit = 4): Product[] {
  const sameCat = products.filter((x) => x.category === p.category && x.id !== p.id)
  const others = products.filter((x) => x.category !== p.category && x.id !== p.id)
  return [...sameCat, ...others].slice(0, limit)
}
