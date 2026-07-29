// Services shown on /services and used for the Service structured data.
// Only list work the shop actually does — this feeds Google's understanding
// of what KGN offers, so nothing aspirational belongs here.

export type ServiceIconId =
  | "mixer"
  | "jars"
  | "stove"
  | "pipeline"
  | "microwave"
  | "fan"
  | "iron"
  | "purifier"
  | "geyser"
  | "maintenance"

export interface ServiceItem {
  id: string
  icon: ServiceIconId
  nameEn: string
  nameHi: string
  descEn: string
  descHi: string
  /** Search terms this service should rank for. */
  keywords: string[]
  /** Shown as small bullet points on the service card. */
  pointsEn: string[]
  pointsHi: string[]
}

export const services: ServiceItem[] = [
  {
    id: "mixer-grinder-repair",
    icon: "mixer",
    nameEn: "Mixer Grinder Repair & Service",
    nameHi: "मिक्सर ग्राइंडर रिपेयर और सर्विस",
    descEn:
      "Motor, carbon brush, coupler, switch and speed regulator work on mixer grinders of all major brands — whether or not you bought the machine from us.",
    descHi:
      "सभी बड़े ब्रांड के मिक्सर ग्राइंडर की मोटर, कार्बन ब्रश, कपलर, स्विच और स्पीड रेगुलेटर का काम — चाहे मशीन हमसे खरीदी हो या नहीं।",
    keywords: ["mixer grinder repair Bhilai", "mixer grinder service near me", "mixer motor repair"],
    pointsEn: ["Motor & winding work", "Carbon brush and coupler replacement", "Switch & speed regulator repair"],
    pointsHi: ["मोटर और वाइंडिंग का काम", "कार्बन ब्रश और कपलर बदलना", "स्विच और स्पीड रेगुलेटर रिपेयर"],
  },
  {
    id: "mixer-jars-blades",
    icon: "jars",
    nameEn: "Mixer Grinder Jars & Blades",
    nameHi: "मिक्सर ग्राइंडर जार और ब्लेड",
    descEn:
      "Genuine replacement jars, blades, gaskets and couplers kept in stock, so a broken jar never means buying a whole new mixer.",
    descHi:
      "असली जार, ब्लेड, गैस्केट और कपलर दुकान पर उपलब्ध, ताकि टूटे जार का मतलब कभी पूरा नया मिक्सर खरीदना न हो।",
    keywords: ["mixer grinder jar Bhilai", "mixer blade replacement", "mixer jar coupler"],
    pointsEn: ["Wet, dry and chutney jars", "Stainless steel blades", "Jar gaskets & couplers"],
    pointsHi: ["वेट, ड्राई और चटनी जार", "स्टेनलेस स्टील ब्लेड", "जार गैस्केट और कपलर"],
  },
  {
    id: "gas-stove-repair",
    icon: "stove",
    nameEn: "Gas Stove Repair & Service",
    nameHi: "गैस चूल्हा रिपेयर और सर्विस",
    descEn:
      "Burner cleaning and replacement, knob and valve repair, igniter fitting and full stove servicing — done at the shop or at your home.",
    descHi:
      "बर्नर की सफाई और बदलाव, नॉब व वाल्व रिपेयर, इग्नाइटर फिटिंग और पूरी चूल्हा सर्विस — दुकान पर या आपके घर पर।",
    keywords: ["gas stove repair Bhilai", "gas burner replacement", "gas stove servicing"],
    pointsEn: ["Brass burner cleaning & replacement", "Knob, valve and igniter repair", "Flame and leak check"],
    pointsHi: ["पीतल बर्नर की सफाई और बदलाव", "नॉब, वाल्व और इग्नाइटर रिपेयर", "लौ और लीक की जाँच"],
  },
  {
    id: "gas-pipeline-work",
    icon: "pipeline",
    nameEn: "Gas Pipeline Fitting & Repair",
    nameHi: "गैस पाइपलाइन फिटिंग और रिपेयर",
    descEn:
      "LPG pipeline fitting, re-routing and leak repair at your home across Bhilai and Durg, using ISI-marked pipes, clamps, regulators and safety valves.",
    descHi:
      "भिलाई और दुर्ग में आपके घर पर LPG पाइपलाइन फिटिंग, दोबारा लगाना और लीक रिपेयर — ISI मार्क पाइप, क्लैंप, रेगुलेटर और सेफ्टी वाल्व के साथ।",
    keywords: ["gas pipeline fitting Bhilai", "gas pipeline work Durg", "LPG pipe fitting at home"],
    pointsEn: ["ISI-marked pipes & fittings", "Leak testing before handover", "Stove connection & demo"],
    pointsHi: ["ISI मार्क पाइप और फिटिंग", "काम पूरा होने से पहले लीक जाँच", "चूल्हा कनेक्शन और डेमो"],
  },
  {
    id: "oven-microwave-repair",
    icon: "microwave",
    nameEn: "Oven & Microwave Repair",
    nameHi: "ओवन और माइक्रोवेव रिपेयर",
    descEn: "Heating, timer, door and control panel faults diagnosed and repaired for ovens and microwaves.",
    descHi: "ओवन और माइक्रोवेव की हीटिंग, टाइमर, दरवाज़े और कंट्रोल पैनल की दिक्कतों की जाँच और रिपेयर।",
    keywords: ["microwave repair Bhilai", "oven repair near me", "microwave not heating"],
    pointsEn: ["Heating & timer faults", "Door and latch repair", "Control panel diagnosis"],
    pointsHi: ["हीटिंग और टाइमर की दिक्कत", "दरवाज़ा और लैच रिपेयर", "कंट्रोल पैनल की जाँच"],
  },
  {
    id: "fan-repair",
    icon: "fan",
    nameEn: "Fan Repair & Service",
    nameHi: "पंखा रिपेयर और सर्विस",
    descEn:
      "Ceiling, pedestal, table and exhaust fan repair — winding, bearing, capacitor and regulator work, plus full servicing.",
    descHi:
      "सीलिंग, पेडेस्टल, टेबल और एग्ज़ॉस्ट फैन की रिपेयर — वाइंडिंग, बेयरिंग, कैपेसिटर और रेगुलेटर का काम, साथ में पूरी सर्विसिंग।",
    keywords: ["fan repair Bhilai", "ceiling fan winding", "fan capacitor replacement"],
    pointsEn: ["Winding & bearing work", "Capacitor and regulator replacement", "Blade balancing & cleaning"],
    pointsHi: ["वाइंडिंग और बेयरिंग का काम", "कैपेसिटर और रेगुलेटर बदलना", "ब्लेड बैलेंसिंग और सफाई"],
  },
  {
    id: "iron-repair",
    icon: "iron",
    nameEn: "Iron Repair",
    nameHi: "इस्त्री रिपेयर",
    descEn: "Element, thermostat and cord faults on dry and steam irons, repaired with genuine spare parts.",
    descHi: "ड्राई और स्टीम इस्त्री की एलिमेंट, थर्मोस्टेट और तार की दिक्कतें, असली स्पेयर पार्ट्स से ठीक की जाती हैं।",
    keywords: ["iron repair Bhilai", "steam iron not heating", "iron thermostat repair"],
    pointsEn: ["Element replacement", "Thermostat repair", "Cord & plug replacement"],
    pointsHi: ["एलिमेंट बदलना", "थर्मोस्टेट रिपेयर", "तार और प्लग बदलना"],
  },
  {
    id: "water-purifier-service",
    icon: "purifier",
    nameEn: "Water Purifier Installation & Filter Service",
    nameHi: "वॉटर प्यूरीफायर इंस्टॉलेशन और फिल्टर सर्विस",
    descEn:
      "Free installation in Bhilai on purifiers bought from us, plus sediment, carbon and membrane replacement when the filters are due.",
    descHi:
      "हमसे खरीदे गए प्यूरीफायर पर भिलाई में मुफ्त इंस्टॉलेशन, साथ ही समय आने पर सेडिमेंट, कार्बन और मेम्ब्रेन बदलने की सेवा।",
    keywords: ["water purifier service Bhilai", "RO filter replacement", "RO installation Bhilai"],
    pointsEn: ["Free installation in Bhilai", "Sediment & carbon filter change", "Membrane replacement"],
    pointsHi: ["भिलाई में मुफ्त इंस्टॉलेशन", "सेडिमेंट और कार्बन फिल्टर बदलना", "मेम्ब्रेन बदलना"],
  },
  {
    id: "geyser-installation",
    icon: "geyser",
    nameEn: "Geyser Installation & Service",
    nameHi: "गीज़र इंस्टॉलेशन और सर्विस",
    descEn:
      "Wall fitting, connection and safety-valve check for storage and instant water heaters, plus servicing for hard-water scaling.",
    descHi:
      "स्टोरेज और इंस्टेंट वॉटर हीटर की दीवार पर फिटिंग, कनेक्शन और सेफ्टी वाल्व की जाँच, साथ ही कठोर पानी की परत के लिए सर्विसिंग।",
    keywords: ["geyser installation Bhilai", "geyser service", "water heater repair Bhilai"],
    pointsEn: ["Wall mounting & connection", "Safety valve check", "Tank flushing for hard water"],
    pointsHi: ["दीवार पर फिटिंग और कनेक्शन", "सेफ्टी वाल्व की जाँच", "कठोर पानी के लिए टैंक फ्लशिंग"],
  },
  {
    id: "general-maintenance",
    icon: "maintenance",
    nameEn: "General Appliance Maintenance",
    nameHi: "सामान्य अप्लायंस रखरखाव",
    descEn:
      "Routine checks and servicing for the everyday appliances in your home, so small faults get caught before they become replacements.",
    descHi:
      "घर के रोज़मर्रा के अप्लायंसेज की नियमित जाँच और सर्विसिंग, ताकि छोटी खराबी नया सामान खरीदने की नौबत बनने से पहले पकड़ी जाए।",
    keywords: ["appliance maintenance Bhilai", "home appliance servicing", "appliance service near me"],
    pointsEn: ["Preventive checks", "Genuine spare parts", "Doorstep service in Bhilai & Durg"],
    pointsHi: ["एहतियाती जाँच", "असली स्पेयर पार्ट्स", "भिलाई और दुर्ग में घर पर सेवा"],
  },
]

/** Areas the shop actually serves — used in copy and in the areaServed schema. */
export const serviceAreas = ["Bhilai", "Durg", "Junwani", "Smriti Nagar", "Nehru Nagar", "Supela", "Kohka", "Risali"]
