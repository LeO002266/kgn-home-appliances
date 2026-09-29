// Product catalog for KGN Home Appliances
// To add a product: copy one of the blocks below and change the details.
// To show a real photo: put the image in /public/products/ and set image: "/products/your-file.jpg"
// Note: prices are intentionally NOT listed — customers call or WhatsApp for the latest price.

// Which photos actually exist in /public/products — regenerated on every
// build by next.config.mjs, so dropping a photo in still "just works".
import productImageManifest from "./product-image-manifest.json"

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
  | "Surya"
  | "Orient"

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
  {
    id: "Surya",
    slug: "surya",
    nameHi: "सूर्या",
    introEn:
      "Buy Surya gas stoves, induction cooktops, and heavy dry irons at KGN Home Appliance & Services on Junwani Road, Bhilai. Durable, ISI-standard appliances with official warranty.",
    introHi:
      "जुनवानी रोड, भिलाई स्थित KGN होम अप्लायंस एंड सर्विसेज पर सूर्या गैस चूल्हा, इंडक्शन कुकटॉप और हैवी ड्राई आयरन खरीदें। टिकाऊ बनावट और आधिकारिक वारंटी के साथ।",
  },
  {
    id: "Orient",
    slug: "orient",
    nameHi: "ओरिएंट",
    introEn:
      "Shop Orient Electric ceiling fans in Bhilai. High-speed, 100% copper motors with official brand warranty and doorstep delivery across Bhilai and Durg.",
    introHi:
      "भिलाई में ओरिएंट इलेक्ट्रिक सीलिंग फैन खरीदें। हाई-स्पीड, 100% कॉपर मोटर आधिकारिक ब्रांड वारंटी और भिलाई-दुर्ग में घर तक डिलीवरी के साथ।",
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
  { id: "prestige-stove-3b", nameEn: "Prestige Glass Top 3 Burner", nameHi: "प्रेस्टीज ग्लास टॉप 3 बर्नर", brand: "Prestige", category: "gas-stoves", badgeEn: "Best Seller", badgeHi: "बेस्टसेलर", featured: true },
  { id: "surya-glass-stove-2b", nameEn: "Surya 2 Burner Toughened Glass Stove", nameHi: "सूर्या 2 बर्नर टफन्ड ग्लास चूल्हा", brand: "Surya", category: "gas-stoves", badgeEn: "New Arrival", badgeHi: "नया आगमन", featured: true },
  { id: "peacock-glass-stove-3b", nameEn: "Peacock Designer 3 Burner Glass Stove", nameHi: "पीकॉक डिज़ाइनर 3 बर्नर ग्लास चूल्हा", category: "gas-stoves", badgeEn: "Designer", badgeHi: "डिज़ाइनर", featured: true },
  { id: "butterfly-stove-2b", nameEn: "Butterfly 2 Burner Gas Stove", nameHi: "बटरफ्लाई 2 बर्नर गैस चूल्हा", brand: "Butterfly", category: "gas-stoves" },
  { id: "glass-stove-4b", nameEn: "Glass Top 4 Burner Gas Stove", nameHi: "ग्लास टॉप 4 बर्नर गैस चूल्हा", category: "gas-stoves", featured: true },
  { id: "portable-camping-mini-stove", nameEn: "Portable Camping Folding Mini Gas Stove", nameHi: "पोर्टेबल कैंपिंग फोल्डिंग मिनी गैस चूल्हा", category: "gas-stoves", badgeEn: "Piezo Ignition", badgeHi: "पीज़ो इग्निशन", featured: true },

  // Kitchen Accessories — gas pipeline & stove repair materials + everyday kitchen tools
  { id: "lpg-gas-pipe", nameEn: "LPG Gas Pipe (ISI Marked)", nameHi: "LPG गैस पाइप (ISI मार्क)", category: "kitchen-accessories", featured: true },
  { id: "gas-regulator", nameEn: "LPG Gas Regulator", nameHi: "LPG गैस रेगुलेटर", category: "kitchen-accessories" },
  { id: "stove-burner-brass", nameEn: "Brass Stove Burner (Spare Part)", nameHi: "पीतल स्टोव बर्नर (स्पेयर पार्ट)", category: "kitchen-accessories" },
  { id: "gas-lighter", nameEn: "Gas Lighter / Igniter", nameHi: "गैस लाइटर / इग्नाइटर", category: "kitchen-accessories" },
  { id: "ritu-electronic-gas-lighter", nameEn: "Ritu Electronic Waterproof Gas Lighter", nameHi: "रितु इलेक्ट्रॉनिक वाटरप्रूफ गैस लाइटर", category: "kitchen-accessories", badgeEn: "Waterproof", badgeHi: "वाटरप्रूफ" },
  { id: "ez-flame-refillable-gas-lighter", nameEn: "EZ Flame Refillable Kitchen Gas Lighter", nameHi: "EZ फ्लेम रिफिलेबल किचन गैस लाइटर", category: "kitchen-accessories", badgeEn: "Refillable", badgeHi: "रिफिलेबल" },
  { id: "mr-cook-piezo-gas-lighter", nameEn: "Mr. Cook German Piezo Spark Gas Lighter", nameHi: "मिस्टर कुक जर्मन पीज़ो स्पार्क गैस लाइटर", category: "kitchen-accessories", badgeEn: "German Piezo", badgeHi: "जर्मन पीज़ो" },
  { id: "qwik-fire-steel-lighter", nameEn: "Qwik-Fire Stainless Steel Kitchen Gas Lighter", nameHi: "क्विक-फायर स्टेनलेस स्टील किचन गैस लाइटर", category: "kitchen-accessories", badgeEn: "Stainless Steel", badgeHi: "स्टेनलेस स्टील" },
  { id: "ritu-regular-smooth-gas-lighter", nameEn: "Ritu Regular Smooth-Touch Gas Lighter", nameHi: "रितु रेगुलर स्मूथ-टच गैस लाइटर", category: "kitchen-accessories", badgeEn: "Soft Grip", badgeHi: "सॉफ्ट ग्रिप" },
  { id: "lpg-laboratory-bunsen-burner", nameEn: "ISI-Marked Heavy LPG Laboratory Burner", nameHi: "ISI-मार्क हैवी LPG लैबोरेटरी बर्नर", category: "kitchen-accessories", badgeEn: "ISI Marked", badgeHi: "ISI मार्क" },
  { id: "butane-fuel-can", nameEn: "Butane Fuel Can", nameHi: "ब्यूटेन फ्यूल कैन", category: "kitchen-accessories", badgeEn: "Threaded Valve", badgeHi: "थ्रेडेड वाल्व" },
  { id: "gas-safety-valve", nameEn: "Gas Safety Valve", nameHi: "गैस सेफ्टी वाल्व", category: "kitchen-accessories" },
  { id: "kitchen-tool-set", nameEn: "Kitchen Tool Set (Tongs, Ladles & More)", nameHi: "किचन टूल सेट (चिमटा, कलछी और अधिक)", category: "kitchen-accessories" },
  { id: "chopping-board", nameEn: "Wooden Chopping Board", nameHi: "लकड़ी का चॉपिंग बोर्ड", category: "kitchen-accessories" },

  // Pressure Cookers
  { id: "philips-cooker-5", nameEn: "Philips Pressure Cooker 5L", nameHi: "फिलिप्स प्रेशर कुकर 5L", brand: "Philips", category: "pressure-cookers", featured: true },
  { id: "prestige-cooker-3", nameEn: "Prestige Cooker 3L", nameHi: "प्रेस्टीज कुकर 3L", brand: "Prestige", category: "pressure-cookers" },
  { id: "hawkins-cooker-5", nameEn: "Hawkins Steel Cooker 5L", nameHi: "हॉकिन्स स्टील कुकर 5L", brand: "Hawkins", category: "pressure-cookers" },
  { id: "united-commercial-cooker-22l", nameEn: "United Commercial Aluminium Cooker 22L", nameHi: "यूनाइटेड कमर्शियल एल्युमिनियम कुकर 22L", category: "pressure-cookers", badgeEn: "22 Litres", badgeHi: "22 लीटर", featured: true },
  { id: "power-cook-black-pearl-cooker", nameEn: "Power Cook Black Pearl Hard Anodised Cooker", nameHi: "पावर कुक ब्लैक पर्ल हार्ड एनोडाइज्ड कुकर", category: "pressure-cookers", badgeEn: "Hard Anodised", badgeHi: "हार्ड एनोडाइज्ड", featured: true },

  // Kitchenware & Cookware
  { id: "floral-opalware-dinner-set", nameEn: "Floral Opalware Dinner Set", nameHi: "फ्लोरल ओपलवेयर डिनर सेट", category: "kitchenware", badgeEn: "Scratch Resistant", badgeHi: "स्क्रैच रेसिस्टेंट", featured: true },
  { id: "guneet-brass-lota-kalash-set", nameEn: "Guneet Traditional Brass Lota / Kalash Set of 3", nameHi: "गुनीत पारंपरिक पीतल लोटा / कलश 3 का सेट", category: "kitchenware", badgeEn: "Pure Brass", badgeHi: "शुद्ध पीतल", featured: true },
  { id: "classic-export-handi-degchi", nameEn: "Classic Export Aluminium Handi / Degchi Pot No. 2", nameHi: "क्लासिक एक्सपोर्ट एल्युमिनियम हांडी / देगची पॉट नं. 2", category: "kitchenware", badgeEn: "Heavy Gauge", badgeHi: "हैवी गेज" },
  { id: "steel-utensil-set", nameEn: "Stainless Steel Utensil Set", nameHi: "स्टेनलेस स्टील बर्तन सेट", category: "kitchenware" },
  { id: "casserole-set", nameEn: "Insulated Casserole Set", nameHi: "इंसुलेटेड कैसरोल सेट", category: "kitchenware" },
  { id: "insulated-hotpot", nameEn: "Insulated Hotpot", nameHi: "इंसुलेटेड हॉटपॉट", category: "kitchenware", badgeEn: "Food Grade", badgeHi: "फूड ग्रेड" },
  { id: "nonstick-cookware-set", nameEn: "Non-Stick Cookware Set", nameHi: "नॉन-स्टिक कुकवेयर सेट", category: "kitchenware" },
  { id: "steel-kadai", nameEn: "Stainless Steel Kadai", nameHi: "स्टेनलेस स्टील कढ़ाई", category: "kitchenware" },

  // Water Bottles & Tiffins
  { id: "copper-water-bottle-1l", nameEn: "Copper Water Bottle 1L", nameHi: "तांबे की पानी की बोतल 1L", category: "bottles-tiffins", badgeEn: "Pure Copper", badgeHi: "शुद्ध तांबा", featured: true },
  { id: "steel-tiffin-set", nameEn: "Steel Tiffin Box Set", nameHi: "स्टील टिफिन बॉक्स सेट", category: "bottles-tiffins" },
  { id: "thermos-flask-1l", nameEn: "Thermos Flask 1L", nameHi: "थर्मस फ्लास्क 1L", category: "bottles-tiffins" },
  { id: "steel-water-bottle-1l", nameEn: "Stainless Steel Water Bottle 1L", nameHi: "स्टेनलेस स्टील पानी की बोतल 1L", category: "bottles-tiffins", featured: true },
  { id: "kids-tiffin-box", nameEn: "Kids Insulated Tiffin Box", nameHi: "किड्स इंसुलेटेड टिफिन बॉक्स", category: "bottles-tiffins" },
  { id: "office-tiffin-3tier", nameEn: "3-Tier Steel Tiffin Carrier", nameHi: "3-टियर स्टील टिफिन कैरियर", category: "bottles-tiffins" },

  // Cleaning Tools
  { id: "floor-mop-spin", nameEn: "Spin Mop with Bucket", nameHi: "स्पिन मॉप विद बकेट", category: "cleaning-tools" },
  { id: "galaxy-cotton-floor-mop", nameEn: "Galaxy Spot Clean Heavy Cotton Floor Mop", nameHi: "गैलेक्सी स्पॉट क्लीन हैवी कॉटन फ्लोर मॉप", category: "cleaning-tools", badgeEn: "100% Cotton", badgeHi: "100% कॉटन" },
  { id: "cloth-drying-stand", nameEn: "Stainless Steel Folding Cloth Drying Stand", nameHi: "स्टेनलेस स्टील फोल्डिंग कपड़ा सुखाने का स्टैंड", category: "cleaning-tools", badgeEn: "Heavy Duty", badgeHi: "हैवी ड्यूटी", featured: true },
  { id: "floor-wiper", nameEn: "Floor Wiper / Squeegee", nameHi: "फ्लोर वाइपर / स्क्वीजी", category: "cleaning-tools" },
  { id: "cleaning-bucket", nameEn: "Plastic Cleaning Bucket with Wringer", nameHi: "प्लास्टिक क्लीनिंग बकेट विद रिंगर", category: "cleaning-tools" },
  { id: "broom-set", nameEn: "Broom & Brush Set", nameHi: "झाड़ू और ब्रश सेट", category: "cleaning-tools" },
  { id: "scrub-brush", nameEn: "Multi-Surface Scrub Brush", nameHi: "मल्टी-सरफेस स्क्रब ब्रश", category: "cleaning-tools" },

  // Hardware & Locks
  { id: "heavy-shutter-padlock-set", nameEn: "Heavy-Duty Brass & Steel Shutter Padlocks", nameHi: "हैवी ड्यूटी पीतल और स्टील शटर ताले", category: "hardware-locks", badgeEn: "Hardened Steel", badgeHi: "हार्डन्ड स्टील", featured: true },
  { id: "round-shutter-disc-lock", nameEn: "Heavy Round Shutter Disc Padlock (70mm SS)", nameHi: "हैवी राउंड शटर डिस्क पैडलॉक (70mm SS)", category: "hardware-locks", badgeEn: "Disc Lock", badgeHi: "डिस्क लॉक" },
  { id: "link-padlock", nameEn: "Link Pad Lock (Heavy Duty)", nameHi: "लिंक ताला (हैवी ड्यूटी)", brand: "Link", category: "hardware-locks" },
  { id: "aluminum-step-ladder", nameEn: "6-Step Heavy Duty Aluminum Ladder", nameHi: "6-स्टेप हैवी ड्यूटी एल्युमिनियम सीढ़ी", category: "hardware-locks", badgeEn: "Anti-Skid", badgeHi: "एंटी-स्किड", featured: true },
  { id: "door-lock-mortise", nameEn: "Mortise Door Lock", nameHi: "मोर्टिस डोर लॉक", category: "hardware-locks" },
  { id: "kitchen-knife-set", nameEn: "Stainless Steel Kitchen Knife Set", nameHi: "स्टेनलेस स्टील किचन नाइफ सेट", category: "hardware-locks" },
  { id: "steel-door-hinges", nameEn: "Steel Door Hinges (Pack of 4)", nameHi: "स्टील डोर हिंज (4 का पैक)", category: "hardware-locks" },

  // Water Purifiers
  { id: "purlex-copper-alkaline-purifier", nameEn: "Purlex Zinc Copper Alkaline Luxury RO Purifier", nameHi: "प्योर्लेक्स ज़िंक कॉपर एल्कलाइन लग्ज़री RO प्यूरीफायर", category: "water-purifiers", badgeEn: "Zinc + Copper", badgeHi: "ज़िंक + कॉपर", featured: true },
  { id: "aqua-x-audi-purity-purifier", nameEn: "Aqua X Audi Purity Drop RO Water Purifier", nameHi: "एक्वा X ऑडी प्यूरिटी ड्रॉप RO वॉटर प्यूरीफायर", category: "water-purifiers", badgeEn: "12L Tank", badgeHi: "12L टैंक", featured: true },
  { id: "ai-qua-smart-led-ro-purifier", nameEn: "Ai Qua Smart LED RO+UV+UF+Alkaline Purifier", nameHi: "ऐ क्वा स्मार्ट LED RO+UV+UF+एल्कलाइन प्यूरीफायर", category: "water-purifiers", badgeEn: "Smart LED", badgeHi: "स्मार्ट LED", featured: true },
  { id: "purlex-ss-commercial-purifier", nameEn: "Purlex Stainless Steel Body RO Purifier", nameHi: "प्योर्लेक्स स्टेनलेस स्टील बॉडी RO प्यूरीफायर", category: "water-purifiers", badgeEn: "SS Body", badgeHi: "SS बॉडी", featured: true },
  { id: "rt-aqua-commercial-ro-50lph", nameEn: "R&T Aqua Commercial RO Plant 50 LPH (SS Skid)", nameHi: "R&T एक्वा कमर्शियल RO प्लांट 50 LPH (SS स्किड)", category: "water-purifiers", badgeEn: "50 LPH SS", badgeHi: "50 LPH SS", featured: true },
  { id: "rt-aqua-commercial-ro-100lph", nameEn: "R&T Aqua Commercial RO Plant 100 LPH (Dual Membrane)", nameHi: "R&T एक्वा कमर्शियल RO प्लांट 100 LPH (ड्यूल मेम्ब्रेन)", category: "water-purifiers", badgeEn: "100 LPH Dual", badgeHi: "100 LPH ड्यूल", featured: true },
  { id: "right-aqua-commercial-ro-25lph", nameEn: "Right Aqua Commercial RO Plant 25 LPH (SS Skid)", nameHi: "राइट एक्वा कमर्शियल RO प्लांट 25 LPH (SS स्किड)", category: "water-purifiers", badgeEn: "25 LPH SS", badgeHi: "25 LPH SS" },
  { id: "starx-royal-ro-purifier", nameEn: "Star X Royal Plus RO+UV+UF Purifier", nameHi: "स्टार X रॉयल प्लस RO+UV+UF प्यूरीफायर", category: "water-purifiers", badgeEn: "Copper+Zinc", badgeHi: "कॉपर+ज़िंक", featured: true },
  { id: "sky-purolex-gold-purifier", nameEn: "Sky Purolex Gold RO Purifier", nameHi: "स्काई प्योरोलेक्स गोल्ड RO प्यूरीफायर", category: "water-purifiers", badgeEn: "Premium", badgeHi: "प्रीमियम", featured: true },
  { id: "starx-black-ro-purifier", nameEn: "Star X Black & Gold RO Purifier", nameHi: "स्टार X ब्लैक एंड गोल्ड RO प्यूरीफायर", category: "water-purifiers", badgeEn: "Popular", badgeHi: "लोकप्रिय" },
  { id: "ro-purifier-10l", nameEn: "RO Water Purifier 10L", nameHi: "RO वॉटर प्यूरीफायर 10L", category: "water-purifiers" },
  { id: "uv-purifier", nameEn: "UV + UF Water Purifier", nameHi: "UV + UF वॉटर प्यूरीफायर", category: "water-purifiers" },
  { id: "aqua-spun-filter-candle", nameEn: "Aqua 10\" PP Spun Filter Candle (5 Micron)", nameHi: "एक्वा 10\" PP स्पन फिल्टर कैंडल (5 माइक्रोन)", category: "water-purifiers" },
  { id: "wellproo-spun-filter-candle", nameEn: "Wellproo 10\" PP Spun Filter Candle (5 Micron)", nameHi: "वेलप्रू 10\" PP स्पन फिल्टर कैंडल (5 माइक्रोन)", category: "water-purifiers", badgeEn: "5 Micron", badgeHi: "5 माइक्रोन" },
  { id: "redspread-spun-filter-candle", nameEn: "RedSpread AceZom PP Spun Filter Candle", nameHi: "रेडस्प्रेड AceZom PP स्पन फिल्टर कैंडल", category: "water-purifiers", badgeEn: "High Density", badgeHi: "हाई डेंसिटी" },
  { id: "bluetrue-spun-filter-candle", nameEn: "BlueTrue AceZom PP Spun Filter Candle (Heavy)", nameHi: "ब्लूट्रू AceZom PP स्पन फिल्टर कैंडल (हैवी)", category: "water-purifiers", badgeEn: "Heavy Spun", badgeHi: "हैवी स्पन" },
  { id: "bioplus-platinum-carbon-filter", nameEn: "Bio+ Platinum 1100 IV Granular Carbon Filter", nameHi: "बायो+ प्लेटिनम 1100 IV ग्रैन्युलर कार्बन फिल्टर", category: "water-purifiers", badgeEn: "1100 IV Carbon", badgeHi: "1100 IV कार्बन" },
  { id: "purosis-inline-filters", nameEn: "Purosis 8\" In-Line Filter Set (Sediment+Carbon)", nameHi: "प्योरोसिस 8\" इन-लाइन फिल्टर सेट (सेडिमेंट+कार्बन)", category: "water-purifiers" },
  { id: "lucent-ro-control-panel", nameEn: "Lucent Intelligent RO Control Panel 1:1", nameHi: "लूसेंट इंटेलिजेंट RO कंट्रोल पैनल 1:1", category: "water-purifiers" },

  // Geysers & Water Heaters
  { id: "bajaj-geyser-15l", nameEn: "Bajaj Storage Geyser 15L", nameHi: "बजाज स्टोरेज गीज़र 15L", brand: "Bajaj", category: "water-heaters", featured: true },
  { id: "instant-geyser-3l", nameEn: "Instant Water Heater 3L", nameHi: "इंस्टेंट वॉटर हीटर 3L", category: "water-heaters" },
  { id: "immersion-rod-1500", nameEn: "Immersion Rod 1500W", nameHi: "इमर्शन रॉड 1500W", category: "water-heaters" },

  // Fans & Coolers
  { id: "orient-fan-1200", nameEn: "Orient Rapid Air Deco Ceiling Fan 1200mm", nameHi: "ओरिएंट रैपिड एयर डेको सीलिंग फैन 1200mm", brand: "Orient", category: "fans-coolers", badgeEn: "100% Copper", badgeHi: "100% कॉपर", featured: true },
  { id: "bajaj-fan-400", nameEn: "Bajaj Pedestal Fan 400mm", nameHi: "बजाज पेडेस्टल फैन 400mm", brand: "Bajaj", category: "fans-coolers", featured: true },
  { id: "crompton-ceiling", nameEn: "Crompton Ceiling Fan 1200mm", nameHi: "क्रॉम्पटन सीलिंग फैन 1200mm", brand: "Crompton", category: "fans-coolers" },
  { id: "symphony-cooler-45", nameEn: "Symphony Air Cooler 45L", nameHi: "सिम्फनी एयर कूलर 45L", brand: "Symphony", category: "fans-coolers" },

  // Other
  { id: "induction-cooktop", nameEn: "Surya Gold Plus Induction Cooktop", nameHi: "सूर्या गोल्ड प्लस इंडक्शन कुकटॉप", brand: "Surya", category: "other", badgeEn: "Touch Panel", badgeHi: "टच पैनल", featured: true },
  { id: "surya-macho-iron-1000", nameEn: "Surya Macho Plus Dry Iron 1000W", nameHi: "सूर्या माचो प्लस ड्राई आयरन 1000W", brand: "Surya", category: "other", badgeEn: "Heavy Weight", badgeHi: "हैवी वेट" },
  { id: "led-torch-lamp", nameEn: "Wipro Lifelite LED Rechargeable Torch", nameHi: "विप्रो लाइफलाइट LED रिचार्जेबल टॉर्च", category: "other", badgeEn: "Rechargeable", badgeHi: "रिचार्जेबल" },
  { id: "usha-iron-1100", nameEn: "Usha Iron 1100W", nameHi: "उषा इस्त्री 1100W", brand: "Usha", category: "other" },
  { id: "bajaj-heater-2000", nameEn: "Bajaj Room Heater 2000W", nameHi: "बजाज रूम हीटर 2000W", brand: "Bajaj", category: "other" },
  { id: "room-heater-parts", nameEn: "Room Heater Spare Parts", nameHi: "रूम हीटर स्पेयर पार्ट्स", category: "other", badgeEn: "Genuine Spares", badgeHi: "असली स्पेयर" },
  { id: "crompton-pump-1hp", nameEn: "Crompton Water Pump 1HP", nameHi: "क्रॉम्पटन वॉटर पंप 1HP", brand: "Crompton", category: "other" },
  { id: "kitchen-chimney", nameEn: "Kitchen Chimney", nameHi: "किचन चिमनी", category: "other", badgeEn: "Touch Panel", badgeHi: "टच पैनल", featured: true },
  { id: "otg-oven", nameEn: "OTG Oven", nameHi: "OTG ओवन", category: "other", badgeEn: "Multi-Function", badgeHi: "मल्टी-फंक्शन", featured: true },
  { id: "electric-rice-cooker", nameEn: "Electric Rice Cooker", nameHi: "इलेक्ट्रिक राइस कुकर", category: "other", badgeEn: "Auto Warm", badgeHi: "ऑटो वार्म", featured: true },
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
  "mixer-grinders": ["mixer grinder", "mixer grinder price", "mixer grinder shop", "best mixer grinder", "juicer mixer grinder", "wet grinder", "mixer shop"],
  "gas-stoves": ["gas stove", "gas stove price", "gas stove shop", "burner gas stove", "gas chulha", "gas chulha shop"],
  "kitchen-accessories": ["kitchen accessories", "kitchen accessories shop", "gas pipe", "gas regulator", "gas lighter", "gas stove spare parts", "kitchen items shop"],
  "pressure-cookers": ["pressure cooker", "pressure cooker price", "pressure cooker shop", "cooker set", "cooker shop"],
  kitchenware: ["casserole set", "casserole set price", "cookware set", "hot pot casserole", "stainless steel utensils", "utensil set", "utensil set price", "kitchenware", "kitchenware shop", "bartan shop", "steel bartan shop"],
  "bottles-tiffins": ["tiffin box", "tiffin set", "tiffin set price", "lunch box", "water bottle", "flask", "flask price", "vacuum flask", "tiffin shop", "water bottle shop"],
  "cleaning-tools": ["cleaning tools", "cleaning items shop", "spin mop", "floor wiper", "broom", "jhadu", "cleaning bucket", "pocha"],
  "hardware-locks": ["door lock", "padlock", "padlock price", "hardware shop", "lock shop", "door lock shop"],
  "water-purifiers": ["water purifier", "water purifier price", "water purifier shop", "ro water purifier", "uv water purifier", "best water purifier", "ro shop"],
  "water-heaters": ["geyser", "geyser price", "geyser shop", "instant geyser", "storage geyser", "water heater", "water heater price", "immersion rod", "immersion rod price", "immersion heater", "best geyser"],
  "fans-coolers": ["fan", "fan shop", "ceiling fan", "ceiling fan price", "pedestal fan", "table fan", "exhaust fan", "air cooler", "air cooler price", "air cooler shop", "best air cooler", "desert cooler", "personal cooler", "cooler shop"],
  other: ["iron", "dry iron", "steam iron", "steam iron price", "room heater", "room heater price", "oil heater", "electric heater", "water pump", "water pump price", "submersible pump", "motor pump", "electric iron shop"],
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

// Public URLs for categories and products carry an "-in-bhilai-near-me"
// suffix so the location keywords sit in the URL itself. Internal ids stay
// clean — only these helpers know about the suffix, and the routes redirect
// legacy URL forms permanently to the current ones.
export const LOCAL_URL_SUFFIX = "-in-bhilai-near-me"

/** Resolves an id out of legacy URL forms: bare id or the old "-in-bhilai" slug. */
export function legacyIdFromSlug(slug: string): string {
  return slug.endsWith("-in-bhilai") ? slug.slice(0, -"-in-bhilai".length) : slug
}

export function categoryUrl(id: CategoryId | string): string {
  return `/products/category/${id}${LOCAL_URL_SUFFIX}`
}

export function productUrl(id: string): string {
  return `/products/${id}${LOCAL_URL_SUFFIX}`
}

/** Strips the -in-bhilai suffix; returns undefined when the slug doesn't carry it. */
export function idFromLocalSlug(slug: string): string | undefined {
  return slug.endsWith(LOCAL_URL_SUFFIX) ? slug.slice(0, -LOCAL_URL_SUFFIX.length) : undefined
}

// Convention: a product's photo lives at /public/products/<product-id>.jpg
// Drop a file with that name and it appears automatically — no code change needed.
export function getProductImage(p: Product): string {
  return p.image ?? `/products/${p.id}.jpg`
}

// True only when the photo file really exists — pages use this so they never
// emit an <img>, OG tag or schema URL that would 404.
export function hasProductPhoto(p: Product): boolean {
  if (p.image) return true
  return (productImageManifest as string[]).includes(`${p.id}.jpg`)
}

/** Same check for a raw "/products/<file>" path (e.g. hand-picked tile images). */
export function productImageFileExists(src: string): boolean {
  return (productImageManifest as string[]).includes(src.replace(/^\/products\//, ""))
}

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(p: Product, limit = 4): Product[] {
  const sameCat = products.filter((x) => x.category === p.category && x.id !== p.id)
  const others = products.filter((x) => x.category !== p.category && x.id !== p.id)
  return [...sameCat, ...others].slice(0, limit)
}
