// Product catalog for KGN Home Appliances
// To add a product: copy one of the blocks below and change the details.
// To show a real photo: put the image in /public/products/ and set image: "/products/your-file.jpg"
// Note: prices are intentionally NOT listed — customers call or WhatsApp for the latest price.

export type CategoryId =
  | "mixer-grinders"
  | "gas-stoves"
  | "kitchen-accessories"
  | "pressure-cookers"
  | "kitchenware"
  | "bottles-tiffins"
  | "cleaning-tools"
  | "hardware-locks"
  | "water-purifiers"
  | "water-heaters"
  | "fans-coolers"
  | "other"

export interface Product {
  id: string
  nameEn: string
  nameHi: string
  category: CategoryId
  /** Manufacturer, when the item is a branded model. Unbranded/generic stock omits this. */
  brand?: BrandId
  image?: string
  badgeEn?: string
  badgeHi?: string
  featured?: boolean
}

// Only brands we actually stock products from — the homepage strip lists a few
// more the shop deals in, but a brand needs products to justify its own page.
export type BrandId =
  | "Bajaj"
  | "Prestige"
  | "Havells"
  | "Philips"
  | "Preethi"
  | "Sujata"
  | "Butterfly"
  | "Maharaja"
  | "Panasonic"
  | "Inalsa"
  | "Hawkins"
  | "Crompton"
  | "Symphony"
  | "Usha"
  | "Link"

export const categories: { id: CategoryId; nameEn: string; nameHi: string }[] = [
  { id: "mixer-grinders", nameEn: "Mixer Grinders", nameHi: "मिक्सर ग्राइंडर" },
  { id: "gas-stoves", nameEn: "Gas Stoves", nameHi: "गैस चूल्हा" },
  { id: "kitchen-accessories", nameEn: "Kitchen Accessories", nameHi: "किचन एक्सेसरीज़" },
  { id: "pressure-cookers", nameEn: "Pressure Cookers", nameHi: "प्रेशर कुकर" },
  { id: "kitchenware", nameEn: "Kitchenware & Cookware", nameHi: "बर्तन और कुकवेयर" },
  { id: "bottles-tiffins", nameEn: "Water Bottles & Tiffins", nameHi: "पानी की बोतलें और टिफिन" },
  { id: "cleaning-tools", nameEn: "Cleaning Tools", nameHi: "सफाई के सामान" },
  { id: "hardware-locks", nameEn: "Hardware & Locks", nameHi: "हार्डवेयर और ताले" },
  { id: "water-purifiers", nameEn: "Water Purifiers", nameHi: "वॉटर प्यूरीफायर" },
  { id: "water-heaters", nameEn: "Geysers & Water Heaters", nameHi: "गीज़र और वॉटर हीटर" },
  { id: "fans-coolers", nameEn: "Fans & Coolers", nameHi: "पंखे और कूलर" },
  { id: "other", nameEn: "Other Appliances", nameHi: "अन्य अप्लायंसेज" },
]

// Brand landing pages. `slug` drives /products/brand/<slug>.
export const brands: {
  id: BrandId
  slug: string
  nameHi: string
  introEn: string
  introHi: string
}[] = [
  {
    id: "Bajaj",
    slug: "bajaj",
    nameHi: "बजाज",
    introEn:
      "Buy Bajaj mixer grinders, pedestal fans, storage geysers and room heaters at KGN Home Appliance & Services, Junwani Road, Bhilai. Every Bajaj product carries the official brand warranty, and spare parts are available in-store.",
    introHi:
      "जुनवानी रोड, भिलाई स्थित KGN होम अप्लायंस एंड सर्विसेज पर बजाज मिक्सर ग्राइंडर, पेडेस्टल फैन, स्टोरेज गीज़र और रूम हीटर खरीदें। हर बजाज प्रोडक्ट पर आधिकारिक ब्रांड वारंटी और स्पेयर पार्ट्स दुकान पर उपलब्ध।",
  },
  {
    id: "Prestige",
    slug: "prestige",
    nameHi: "प्रेस्टीज",
    introEn:
      "Shop Prestige gas stoves and pressure cookers in Bhilai. All models are ISI-marked with manufacturer warranty, and we stock genuine Prestige gaskets and spare parts. Gas stove installation and pipeline fitting available at your home.",
    introHi:
      "भिलाई में प्रेस्टीज गैस चूल्हा और प्रेशर कुकर खरीदें। सभी मॉडल ISI मार्क और निर्माता वारंटी के साथ, और असली प्रेस्टीज गैस्केट व स्पेयर पार्ट्स दुकान पर उपलब्ध। घर पर गैस चूल्हा इंस्टॉलेशन और पाइपलाइन फिटिंग सेवा भी।",
  },
  {
    id: "Havells",
    slug: "havells",
    nameHi: "हैवेल्स",
    introEn:
      "Havells mixer grinders at KGN Home Appliance & Services, Bhilai — powerful motors built for daily Indian kitchen use, with official brand warranty. Genuine jars and spare parts available in-store.",
    introHi:
      "KGN होम अप्लायंस एंड सर्विसेज, भिलाई पर हैवेल्स मिक्सर ग्राइंडर — रोज़ के भारतीय किचन उपयोग के लिए दमदार मोटर, आधिकारिक ब्रांड वारंटी के साथ। असली जार और स्पेयर पार्ट्स दुकान पर उपलब्ध।",
  },
  {
    id: "Philips",
    slug: "philips",
    nameHi: "फिलिप्स",
    introEn:
      "Philips mixer grinders and pressure cookers in Bhilai, with official brand warranty and genuine spare parts. Visit our Junwani Road store for a demo before you buy.",
    introHi:
      "भिलाई में फिलिप्स मिक्सर ग्राइंडर और प्रेशर कुकर, आधिकारिक ब्रांड वारंटी और असली स्पेयर पार्ट्स के साथ। खरीदने से पहले डेमो के लिए हमारी जुनवानी रोड दुकान पर आएं।",
  },
  {
    id: "Preethi",
    slug: "preethi",
    nameHi: "प्रीति",
    introEn:
      "Preethi mixer grinders at our Bhilai store — a long-trusted name for South Indian style wet and dry grinding, with official warranty and jars available in-store.",
    introHi:
      "हमारी भिलाई दुकान पर प्रीति मिक्सर ग्राइंडर — गीली और सूखी ग्राइंडिंग के लिए लंबे समय से भरोसेमंद नाम, आधिकारिक वारंटी और जार दुकान पर उपलब्ध।",
  },
  {
    id: "Sujata",
    slug: "sujata",
    nameHi: "सुजाता",
    introEn:
      "Sujata mixer grinders and juicer mixers in Bhilai — known for high-wattage motors built for heavy daily use. Official warranty, with genuine jars and blades available in-store.",
    introHi:
      "भिलाई में सुजाता मिक्सर ग्राइंडर और जूसर मिक्सर — भारी रोज़ाना उपयोग के लिए हाई-वॉटेज मोटर के लिए जाने जाते हैं। आधिकारिक वारंटी, असली जार और ब्लेड दुकान पर उपलब्ध।",
  },
  {
    id: "Butterfly",
    slug: "butterfly",
    nameHi: "बटरफ्लाई",
    introEn:
      "Butterfly mixer grinders and gas stoves at KGN Home Appliance & Services, Bhilai. ISI-marked stoves with manufacturer warranty, plus genuine mixer jars and spare parts in-store.",
    introHi:
      "KGN होम अप्लायंस एंड सर्विसेज, भिलाई पर बटरफ्लाई मिक्सर ग्राइंडर और गैस चूल्हे। ISI मार्क चूल्हे निर्माता वारंटी के साथ, साथ ही असली मिक्सर जार और स्पेयर पार्ट्स दुकान पर।",
  },
  {
    id: "Maharaja",
    slug: "maharaja",
    nameHi: "महाराजा",
    introEn:
      "Maharaja Whiteline mixer grinders in Bhilai — practical, value-for-money models for everyday kitchen use, with official brand warranty.",
    introHi:
      "भिलाई में महाराजा व्हाइटलाइन मिक्सर ग्राइंडर — रोज़ के किचन उपयोग के लिए व्यावहारिक, किफ़ायती मॉडल, आधिकारिक ब्रांड वारंटी के साथ।",
  },
  {
    id: "Panasonic",
    slug: "panasonic",
    nameHi: "पैनासोनिक",
    introEn:
      "Panasonic mixer grinders at our Junwani Road store in Bhilai, with official brand warranty and genuine spare parts available.",
    introHi:
      "भिलाई के जुनवानी रोड स्थित हमारी दुकान पर पैनासोनिक मिक्सर ग्राइंडर, आधिकारिक ब्रांड वारंटी और असली स्पेयर पार्ट्स उपलब्ध।",
  },
  {
    id: "Inalsa",
    slug: "inalsa",
    nameHi: "इनाल्सा",
    introEn:
      "Inalsa mixer grinders in Bhilai — dependable everyday models with official brand warranty. Visit us on Junwani Road for the latest price.",
    introHi:
      "भिलाई में इनाल्सा मिक्सर ग्राइंडर — भरोसेमंद रोज़ाना उपयोग के मॉडल, आधिकारिक ब्रांड वारंटी के साथ। लेटेस्ट कीमत के लिए जुनवानी रोड पर आएं।",
  },
  {
    id: "Hawkins",
    slug: "hawkins",
    nameHi: "हॉकिन्स",
    introEn:
      "Hawkins pressure cookers in Bhilai — ISI-marked, built to last, with manufacturer warranty. Genuine Hawkins gaskets, safety valves and handles available in-store.",
    introHi:
      "भिलाई में हॉकिन्स प्रेशर कुकर — ISI मार्क, टिकाऊ बनावट, निर्माता वारंटी के साथ। असली हॉकिन्स गैस्केट, सेफ्टी वाल्व और हैंडल दुकान पर उपलब्ध।",
  },
  {
    id: "Crompton",
    slug: "crompton",
    nameHi: "क्रॉम्पटन",
    introEn:
      "Crompton ceiling fans and water pumps at KGN Home Appliance & Services, Bhilai — high air delivery, low noise, with manufacturer warranty and free delivery in Bhilai.",
    introHi:
      "KGN होम अप्लायंस एंड सर्विसेज, भिलाई पर क्रॉम्पटन सीलिंग फैन और वॉटर पंप — तेज़ हवा, कम आवाज़, निर्माता वारंटी और भिलाई में मुफ्त डिलीवरी के साथ।",
  },
  {
    id: "Symphony",
    slug: "symphony",
    nameHi: "सिम्फनी",
    introEn:
      "Symphony air coolers in Bhilai — built for Chhattisgarh summers, with manufacturer warranty and free delivery across Bhilai.",
    introHi:
      "भिलाई में सिम्फनी एयर कूलर — छत्तीसगढ़ की गर्मी के लिए बने, निर्माता वारंटी और भिलाई में मुफ्त डिलीवरी के साथ।",
  },
  {
    id: "Usha",
    slug: "usha",
    nameHi: "उषा",
    introEn:
      "Usha irons at our Bhilai store — a trusted name for everyday home use, with official brand warranty and after-sales repair support.",
    introHi:
      "हमारी भिलाई दुकान पर उषा इस्त्री — रोज़ के घरेलू उपयोग के लिए भरोसेमंद नाम, आधिकारिक ब्रांड वारंटी और बिक्री के बाद रिपेयर सपोर्ट के साथ।",
  },
  {
    id: "Link",
    slug: "link",
    nameHi: "लिंक",
    introEn:
      "Link padlocks in Bhilai — heavy-duty, genuine locks for home and shop security. Available at KGN Home Appliance & Services on Junwani Road.",
    introHi:
      "भिलाई में लिंक ताले — घर और दुकान की सुरक्षा के लिए हैवी-ड्यूटी, असली ताले। जुनवानी रोड स्थित KGN होम अप्लायंस एंड सर्विसेज पर उपलब्ध।",
  },
]

export function getBrand(slug: string) {
  return brands.find((b) => b.slug === slug)
}

export function getBrandProducts(id: BrandId): Product[] {
  return products.filter((p) => p.brand === id)
}

export const products: Product[] = [
  // Mixer Grinders — all major brands
  { id: "havells-mixer-750", nameEn: "Havells Mixer Grinder 750W", nameHi: "हैवेल्स मिक्सर ग्राइंडर 750W", brand: "Havells", category: "mixer-grinders", badgeEn: "Best Seller", badgeHi: "बेस्टसेलर", featured: true },
  { id: "bajaj-mixer-500", nameEn: "Bajaj Mixer Grinder 500W", nameHi: "बजाज मिक्सर ग्राइंडर 500W", brand: "Bajaj", category: "mixer-grinders" },
  { id: "philips-mixer-750", nameEn: "Philips Mixer Grinder 750W", nameHi: "फिलिप्स मिक्सर ग्राइंडर 750W", brand: "Philips", category: "mixer-grinders", featured: true },
  { id: "preethi-mixer-750", nameEn: "Preethi Mixer Grinder 750W", nameHi: "प्रीति मिक्सर ग्राइंडर 750W", brand: "Preethi", category: "mixer-grinders" },
  { id: "sujata-mixer-900", nameEn: "Sujata Dynamix Mixer Grinder 900W", nameHi: "सुजाता डायनामिक्स मिक्सर ग्राइंडर 900W", brand: "Sujata", category: "mixer-grinders" },
  { id: "butterfly-mixer-750", nameEn: "Butterfly Matchless Mixer Grinder 750W", nameHi: "बटरफ्लाई मैचलेस मिक्सर ग्राइंडर 750W", brand: "Butterfly", category: "mixer-grinders" },
  { id: "maharaja-mixer-500", nameEn: "Maharaja Whiteline Mixer Grinder 500W", nameHi: "महाराजा व्हाइटलाइन मिक्सर ग्राइंडर 500W", brand: "Maharaja", category: "mixer-grinders" },
  { id: "panasonic-mixer-550", nameEn: "Panasonic Mixer Grinder 550W", nameHi: "पैनासोनिक मिक्सर ग्राइंडर 550W", brand: "Panasonic", category: "mixer-grinders" },
  { id: "inalsa-mixer-750", nameEn: "Inalsa Mixer Grinder 750W", nameHi: "इनाल्सा मिक्सर ग्राइंडर 750W", brand: "Inalsa", category: "mixer-grinders" },

  // Gas Stoves
  { id: "prestige-stove-3b", nameEn: "Prestige Glass Top 3 Burner", nameHi: "प्रेस्टीज ग्लास टॉप 3 बर्नर", brand: "Prestige", category: "gas-stoves", badgeEn: "Best Seller", badgeHi: "बेस्टसेलर", featured: true },
  { id: "butterfly-stove-2b", nameEn: "Butterfly 2 Burner Gas Stove", nameHi: "बटरफ्लाई 2 बर्नर गैस चूल्हा", brand: "Butterfly", category: "gas-stoves" },
  { id: "glass-stove-4b", nameEn: "Glass Top 4 Burner Gas Stove", nameHi: "ग्लास टॉप 4 बर्नर गैस चूल्हा", category: "gas-stoves", featured: true },

  // Kitchen Accessories — gas pipeline & stove repair materials + everyday kitchen tools
  { id: "lpg-gas-pipe", nameEn: "LPG Gas Pipe (ISI Marked)", nameHi: "LPG गैस पाइप (ISI मार्क)", category: "kitchen-accessories", featured: true },
  { id: "gas-regulator", nameEn: "LPG Gas Regulator", nameHi: "LPG गैस रेगुलेटर", category: "kitchen-accessories" },
  { id: "stove-burner-brass", nameEn: "Brass Stove Burner (Spare Part)", nameHi: "पीतल स्टोव बर्नर (स्पेयर पार्ट)", category: "kitchen-accessories" },
  { id: "gas-lighter", nameEn: "Gas Lighter / Igniter", nameHi: "गैस लाइटर / इग्नाइटर", category: "kitchen-accessories" },
  { id: "gas-safety-valve", nameEn: "Gas Safety Valve", nameHi: "गैस सेफ्टी वाल्व", category: "kitchen-accessories" },
  { id: "kitchen-tool-set", nameEn: "Kitchen Tool Set (Tongs, Ladles & More)", nameHi: "किचन टूल सेट (चिमटा, कलछी और अधिक)", category: "kitchen-accessories" },
  { id: "chopping-board", nameEn: "Wooden Chopping Board", nameHi: "लकड़ी का चॉपिंग बोर्ड", category: "kitchen-accessories" },

  // Pressure Cookers
  { id: "philips-cooker-5", nameEn: "Philips Pressure Cooker 5L", nameHi: "फिलिप्स प्रेशर कुकर 5L", brand: "Philips", category: "pressure-cookers", featured: true },
  { id: "prestige-cooker-3", nameEn: "Prestige Cooker 3L", nameHi: "प्रेस्टीज कुकर 3L", brand: "Prestige", category: "pressure-cookers" },
  { id: "hawkins-cooker-5", nameEn: "Hawkins Steel Cooker 5L", nameHi: "हॉकिन्स स्टील कुकर 5L", brand: "Hawkins", category: "pressure-cookers" },

  // Kitchenware & Cookware
  { id: "steel-utensil-set", nameEn: "Stainless Steel Utensil Set", nameHi: "स्टेनलेस स्टील बर्तन सेट", category: "kitchenware" },
  { id: "casserole-set", nameEn: "Insulated Casserole Set", nameHi: "इंसुलेटेड कैसरोल सेट", category: "kitchenware" },
  { id: "nonstick-cookware-set", nameEn: "Non-Stick Cookware Set", nameHi: "नॉन-स्टिक कुकवेयर सेट", category: "kitchenware" },
  { id: "steel-kadai", nameEn: "Stainless Steel Kadai", nameHi: "स्टेनलेस स्टील कढ़ाई", category: "kitchenware" },

  // Water Bottles & Tiffins
  { id: "steel-tiffin-set", nameEn: "Steel Tiffin Box Set", nameHi: "स्टील टिफिन बॉक्स सेट", category: "bottles-tiffins" },
  { id: "thermos-flask-1l", nameEn: "Thermos Flask 1L", nameHi: "थर्मस फ्लास्क 1L", category: "bottles-tiffins" },
  { id: "steel-water-bottle-1l", nameEn: "Stainless Steel Water Bottle 1L", nameHi: "स्टेनलेस स्टील पानी की बोतल 1L", category: "bottles-tiffins", featured: true },
  { id: "kids-tiffin-box", nameEn: "Kids Insulated Tiffin Box", nameHi: "किड्स इंसुलेटेड टिफिन बॉक्स", category: "bottles-tiffins" },
  { id: "office-tiffin-3tier", nameEn: "3-Tier Steel Tiffin Carrier", nameHi: "3-टियर स्टील टिफिन कैरियर", category: "bottles-tiffins" },

  // Cleaning Tools
  { id: "floor-mop-spin", nameEn: "Spin Mop with Bucket", nameHi: "स्पिन मॉप विद बकेट", category: "cleaning-tools" },
  { id: "floor-wiper", nameEn: "Floor Wiper / Squeegee", nameHi: "फ्लोर वाइपर / स्क्वीजी", category: "cleaning-tools" },
  { id: "cleaning-bucket", nameEn: "Plastic Cleaning Bucket with Wringer", nameHi: "प्लास्टिक क्लीनिंग बकेट विद रिंगर", category: "cleaning-tools" },
  { id: "broom-set", nameEn: "Broom & Brush Set", nameHi: "झाड़ू और ब्रश सेट", category: "cleaning-tools" },
  { id: "scrub-brush", nameEn: "Multi-Surface Scrub Brush", nameHi: "मल्टी-सरफेस स्क्रब ब्रश", category: "cleaning-tools" },

  // Hardware & Locks
  { id: "link-padlock", nameEn: "Link Pad Lock (Heavy Duty)", nameHi: "लिंक ताला (हैवी ड्यूटी)", brand: "Link", category: "hardware-locks" },
  { id: "door-lock-mortise", nameEn: "Mortise Door Lock", nameHi: "मोर्टिस डोर लॉक", category: "hardware-locks" },
  { id: "kitchen-knife-set", nameEn: "Stainless Steel Kitchen Knife Set", nameHi: "स्टेनलेस स्टील किचन नाइफ सेट", category: "hardware-locks" },
  { id: "steel-door-hinges", nameEn: "Steel Door Hinges (Pack of 4)", nameHi: "स्टील डोर हिंज (4 का पैक)", category: "hardware-locks" },

  // Water Purifiers
  { id: "ro-purifier-10l", nameEn: "RO Water Purifier 10L", nameHi: "RO वॉटर प्यूरीफायर 10L", category: "water-purifiers", featured: true },
  { id: "uv-purifier", nameEn: "UV + UF Water Purifier", nameHi: "UV + UF वॉटर प्यूरीफायर", category: "water-purifiers" },

  // Geysers & Water Heaters
  { id: "bajaj-geyser-15l", nameEn: "Bajaj Storage Geyser 15L", nameHi: "बजाज स्टोरेज गीज़र 15L", brand: "Bajaj", category: "water-heaters", featured: true },
  { id: "instant-geyser-3l", nameEn: "Instant Water Heater 3L", nameHi: "इंस्टेंट वॉटर हीटर 3L", category: "water-heaters" },
  { id: "immersion-rod-1500", nameEn: "Immersion Rod 1500W", nameHi: "इमर्शन रॉड 1500W", category: "water-heaters" },

  // Fans & Coolers
  { id: "bajaj-fan-400", nameEn: "Bajaj Pedestal Fan 400mm", nameHi: "बजाज पेडेस्टल फैन 400mm", brand: "Bajaj", category: "fans-coolers", featured: true },
  { id: "crompton-ceiling", nameEn: "Crompton Ceiling Fan 1200mm", nameHi: "क्रॉम्पटन सीलिंग फैन 1200mm", brand: "Crompton", category: "fans-coolers" },
  { id: "symphony-cooler-45", nameEn: "Symphony Air Cooler 45L", nameHi: "सिम्फनी एयर कूलर 45L", brand: "Symphony", category: "fans-coolers" },

  // Other
  { id: "usha-iron-1100", nameEn: "Usha Iron 1100W", nameHi: "उषा इस्त्री 1100W", brand: "Usha", category: "other" },
  { id: "bajaj-heater-2000", nameEn: "Bajaj Room Heater 2000W", nameHi: "बजाज रूम हीटर 2000W", brand: "Bajaj", category: "other" },
  { id: "crompton-pump-1hp", nameEn: "Crompton Water Pump 1HP", nameHi: "क्रॉम्पटन वॉटर पंप 1HP", brand: "Crompton", category: "other" },
]

// Generic, honest selling points per category (store-level claims, no invented specs)
export const categoryFeatures: Record<CategoryId, { en: string[]; hi: string[] }> = {
  "mixer-grinders": {
    en: ["Powerful motor for daily use", "1-year official brand warranty", "Genuine product from authorized distributor", "Jars & spare parts available in-store"],
    hi: ["रोज़ के उपयोग के लिए दमदार मोटर", "1 साल की आधिकारिक ब्रांड वारंटी", "अधिकृत डिस्ट्रीब्यूटर से असली प्रोडक्ट", "जार और स्पेयर पार्ट्स दुकान पर उपलब्ध"],
  },
  "gas-stoves": {
    en: ["ISI-marked, safe build", "Manufacturer warranty included", "Gas pipeline fitting service available", "Installation & demo at your home"],
    hi: ["ISI मार्क, सुरक्षित बनावट", "निर्माता वारंटी शामिल", "गैस पाइपलाइन फिटिंग सेवा उपलब्ध", "घर पर इंस्टॉलेशन और डेमो"],
  },
  "kitchen-accessories": {
    en: ["Genuine gas pipeline & stove spare parts", "ISI-marked safety items", "Fitting & repair service available", "Everyday kitchen tools at best rates"],
    hi: ["असली गैस पाइपलाइन और स्टोव स्पेयर पार्ट्स", "ISI मार्क सुरक्षा सामान", "फिटिंग और रिपेयर सेवा उपलब्ध", "रोज़मर्रा के किचन टूल्स बेस्ट रेट पर"],
  },
  "pressure-cookers": {
    en: ["Safe, ISI-marked build", "Manufacturer warranty included", "Genuine product from authorized distributor", "Spare gaskets & parts available in-store"],
    hi: ["सुरक्षित, ISI मार्क वाली बनावट", "निर्माता वारंटी शामिल", "अधिकृत डिस्ट्रीब्यूटर से असली प्रोडक्ट", "गैस्केट और पार्ट्स दुकान पर उपलब्ध"],
  },
  kitchenware: {
    en: ["Food-grade stainless steel", "Durable, long-lasting quality", "Huge variety available in-store", "Best rates in Junwani Road market"],
    hi: ["फूड-ग्रेड स्टेनलेस स्टील", "टिकाऊ, लंबे समय चलने वाली क्वालिटी", "दुकान पर भारी वैरायटी उपलब्ध", "जुनवानी रोड मार्केट में बेस्ट रेट"],
  },
  "bottles-tiffins": {
    en: ["Food-grade, leak-proof build", "Keeps food & drinks hot/cold longer", "Great for office, school & travel", "Huge variety of sizes in-store"],
    hi: ["फूड-ग्रेड, लीक-प्रूफ बनावट", "खाना और पानी लंबे समय तक गर्म/ठंडा रखे", "ऑफिस, स्कूल और सफर के लिए बढ़िया", "दुकान पर कई साइज़ उपलब्ध"],
  },
  "cleaning-tools": {
    en: ["Durable, everyday-use quality", "Easy to use, saves time", "Great for home & commercial cleaning", "Best rates in Junwani Road market"],
    hi: ["टिकाऊ, रोज़ाना उपयोग की क्वालिटी", "उपयोग में आसान, समय की बचत", "घर और कमर्शियल सफाई के लिए बढ़िया", "जुनवानी रोड मार्केट में बेस्ट रेट"],
  },
  "hardware-locks": {
    en: ["Heavy-duty, secure build", "Trusted brands only", "Genuine steel quality", "Fitting service available"],
    hi: ["हैवी-ड्यूटी, सुरक्षित बनावट", "सिर्फ भरोसेमंद ब्रांड", "असली स्टील क्वालिटी", "फिटिंग सेवा उपलब्ध"],
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
  other: {
    en: ["Trusted brands only", "Manufacturer warranty included", "Genuine product from authorized distributor", "After-sales service & repair support"],
    hi: ["सिर्फ भरोसेमंद ब्रांड", "निर्माता वारंटी शामिल", "अधिकृत डिस्ट्रीब्यूटर से असली प्रोडक्ट", "बिक्री के बाद सर्विस और रिपेयर सपोर्ट"],
  },
}

// Non-branded search keywords per category, sourced from keyword research —
// only for the categories we actually stock and sell.
export const categoryKeywords: Partial<Record<CategoryId, string[]>> = {
  "mixer-grinders": ["mixer grinder", "mixer grinder price", "best mixer grinder", "juicer mixer grinder", "wet grinder"],
  "gas-stoves": ["gas stove", "gas stove price", "burner gas stove", "gas chulha"],
  "pressure-cookers": ["pressure cooker", "pressure cooker price", "cooker set"],
  kitchenware: ["casserole set", "casserole set price", "cookware set", "hot pot casserole", "stainless steel utensils", "utensil set", "utensil set price", "kitchenware"],
  "bottles-tiffins": ["tiffin box", "tiffin set", "tiffin set price", "lunch box", "water bottle", "flask", "flask price", "vacuum flask"],
  "hardware-locks": ["door lock", "padlock", "padlock price"],
  "water-purifiers": ["water purifier", "water purifier price", "ro water purifier", "uv water purifier", "best water purifier"],
  "water-heaters": ["geyser", "geyser price", "instant geyser", "storage geyser", "water heater", "water heater price", "immersion rod", "immersion rod price", "immersion heater", "best geyser"],
  "fans-coolers": ["fan", "ceiling fan", "ceiling fan price", "pedestal fan", "table fan", "exhaust fan", "air cooler", "air cooler price", "best air cooler", "desert cooler", "personal cooler"],
  other: ["iron", "dry iron", "steam iron", "steam iron price", "room heater", "room heater price", "oil heater", "electric heater", "water pump", "water pump price", "submersible pump", "motor pump"],
}

// Longer, keyword-focused intro copy for each dedicated category page (SEO content block).
// Written for real local search terms (e.g. "mixer grinder shop Bhilai") — no invented claims.
export const categoryIntro: Record<CategoryId, { en: string; hi: string }> = {
  "mixer-grinders": {
    en: "Shop mixer grinders from all major brands — Bajaj, Havells, Philips, Preethi, Sujata, Butterfly, Maharaja Whiteline, Panasonic and Inalsa — at KGN Home Appliance & Services on Junwani Road, Bhilai. Every mixer grinder comes with the official brand warranty, and genuine jars and spare parts are available in-store. Call or WhatsApp us for today's best price on any model.",
    hi: "बजाज, हैवेल्स, फिलिप्स, प्रीति, सुजाता, बटरफ्लाई, महाराजा व्हाइटलाइन, पैनासोनिक और इनाल्सा — जुनवानी रोड, भिलाई स्थित KGN होम अप्लायंस एंड सर्विसेज पर सभी बड़े ब्रांड्स के मिक्सर ग्राइंडर उपलब्ध हैं। हर मिक्सर ग्राइंडर पर आधिकारिक ब्रांड वारंटी और असली जार व स्पेयर पार्ट्स दुकान पर मिलते हैं। आज की बेस्ट कीमत के लिए कॉल या WhatsApp करें।",
  },
  "gas-stoves": {
    en: "Buy glass-top and stainless steel gas stoves from trusted brands like Prestige and Butterfly at our Junwani Road store in Bhilai. Every stove is ISI-marked for safety, and we also handle gas pipeline fitting and stove installation at your home across Bhilai and Durg.",
    hi: "भिलाई के जुनवानी रोड स्थित हमारी दुकान पर प्रेस्टीज और बटरफ्लाई जैसे भरोसेमंद ब्रांड्स के ग्लास टॉप और स्टेनलेस स्टील गैस चूल्हे उपलब्ध हैं। हर चूल्हा सुरक्षा के लिए ISI मार्क है, और हम भिलाई व दुर्ग में आपके घर पर गैस पाइपलाइन फिटिंग और चूल्हा इंस्टॉलेशन भी करते हैं।",
  },
  "kitchen-accessories": {
    en: "Find genuine LPG gas pipes, regulators, burners, safety valves and everyday kitchen tools at KGN Home Appliance & Services, Bhilai. All gas-fitting parts are ISI-marked, and our team also provides gas pipeline repair and fitting service at your home in Bhilai and Durg.",
    hi: "KGN होम अप्लायंस एंड सर्विसेज, भिलाई पर असली LPG गैस पाइप, रेगुलेटर, बर्नर, सेफ्टी वाल्व और रोज़मर्रा के किचन टूल्स उपलब्ध हैं। सभी गैस-फिटिंग पार्ट्स ISI मार्क हैं, और हमारी टीम भिलाई व दुर्ग में घर पर गैस पाइपलाइन रिपेयर और फिटिंग सेवा भी देती है।",
  },
  "pressure-cookers": {
    en: "Shop ISI-marked pressure cookers from Prestige, Hawkins and Philips at our Junwani Road store in Bhilai. Spare gaskets, whistles and handles are available in-store, along with manufacturer warranty on every cooker.",
    hi: "भिलाई के जुनवानी रोड स्थित हमारी दुकान पर प्रेस्टीज, हॉकिन्स और फिलिप्स के ISI मार्क प्रेशर कुकर उपलब्ध हैं। दुकान पर गैस्केट, सीटी और हैंडल जैसे स्पेयर पार्ट्स भी मिलते हैं, साथ ही हर कुकर पर निर्माता वारंटी।",
  },
  kitchenware: {
    en: "Browse stainless steel utensils, cookware, kadai and casserole sets at KGN Home Appliance & Services in Bhilai. Food-grade steel, durable everyday quality and the best rates in the Junwani Road market.",
    hi: "भिलाई स्थित KGN होम अप्लायंस एंड सर्विसेज पर स्टेनलेस स्टील बर्तन, कुकवेयर, कढ़ाई और कैसरोल सेट देखें। फूड-ग्रेड स्टील, टिकाऊ रोज़ाना क्वालिटी और जुनवानी रोड मार्केट में बेस्ट रेट।",
  },
  "bottles-tiffins": {
    en: "Shop steel tiffin boxes, insulated flasks and water bottles for school, office and travel at our Bhilai store. Leak-proof, food-grade quality that keeps food and drinks hot or cold for hours.",
    hi: "स्कूल, ऑफिस और सफर के लिए स्टील टिफिन बॉक्स, इंसुलेटेड फ्लास्क और पानी की बोतलें हमारी भिलाई की दुकान पर उपलब्ध हैं। लीक-प्रूफ, फूड-ग्रेड क्वालिटी जो खाना और पानी घंटों तक गर्म या ठंडा रखे।",
  },
  "cleaning-tools": {
    en: "Find spin mops, floor wipers, cleaning buckets, brooms and scrub brushes at KGN Home Appliance & Services, Junwani Road, Bhilai. Durable, everyday-use quality for home and commercial cleaning at the best rates.",
    hi: "जुनवानी रोड, भिलाई स्थित KGN होम अप्लायंस एंड सर्विसेज पर स्पिन मॉप, फ्लोर वाइपर, क्लीनिंग बकेट, झाड़ू और स्क्रब ब्रश उपलब्ध हैं। घर और कमर्शियल सफाई के लिए टिकाऊ, रोज़ाना उपयोग की क्वालिटी बेस्ट रेट पर।",
  },
  "hardware-locks": {
    en: "Shop heavy-duty locks, kitchen knives and steel hardware essentials at our Bhilai store. Trusted brands, genuine steel quality, and fitting service available for door locks and hinges.",
    hi: "हमारी भिलाई की दुकान पर हैवी-ड्यूटी ताले, किचन नाइफ और स्टील हार्डवेयर सामान उपलब्ध हैं। भरोसेमंद ब्रांड, असली स्टील क्वालिटी, और डोर लॉक व हिंज के लिए फिटिंग सेवा भी।",
  },
  "water-purifiers": {
    en: "Buy RO, UV and UF water purifiers at KGN Home Appliance & Services, Bhilai — with free installation and filter replacement service. Manufacturer warranty included on every purifier.",
    hi: "KGN होम अप्लायंस एंड सर्विसेज, भिलाई पर RO, UV और UF वॉटर प्यूरीफायर खरीदें — मुफ्त इंस्टॉलेशन और फिल्टर बदलने की सेवा के साथ। हर प्यूरीफायर पर निर्माता वारंटी शामिल।",
  },
  "water-heaters": {
    en: "Shop geysers, instant water heaters and immersion rods from trusted brands at our Junwani Road store in Bhilai. Fast heating, power-saving models with installation service available.",
    hi: "भिलाई के जुनवानी रोड स्थित हमारी दुकान पर भरोसेमंद ब्रांड्स के गीज़र, इंस्टेंट वॉटर हीटर और इमर्शन रॉड उपलब्ध हैं। तेज़ हीटिंग, बिजली बचाने वाले मॉडल इंस्टॉलेशन सेवा के साथ।",
  },
  "fans-coolers": {
    en: "Browse ceiling fans, pedestal fans and air coolers at KGN Home Appliance & Services, Bhilai. High air delivery, low noise, and free delivery across Bhilai.",
    hi: "भिलाई स्थित KGN होम अप्लायंस एंड सर्विसेज पर सीलिंग फैन, पेडेस्टल फैन और एयर कूलर देखें। तेज़ हवा, कम आवाज़ और भिलाई में मुफ्त डिलीवरी।",
  },
  other: {
    en: "Find irons, room heaters, water pumps and more everyday appliances at our Junwani Road store in Bhilai. Trusted brands with manufacturer warranty and after-sales repair support.",
    hi: "भिलाई के जुनवानी रोड स्थित हमारी दुकान पर इस्त्री, रूम हीटर, वॉटर पंप और अन्य रोज़मर्रा के अप्लायंसेज उपलब्ध हैं। निर्माता वारंटी और बिक्री के बाद रिपेयर सपोर्ट के साथ भरोसेमंद ब्रांड।",
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
