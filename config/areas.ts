// Service-area landing pages (/service-areas/<slug>) for the localities the
// shop actually serves — the same list as serviceAreas in config/services.ts.
// Each page targets "<service> in <area>" searches and links back to the
// service landing pages. Keep the copy honest: doorstep repair and pipeline
// work is real, but the shop itself is on Junwani Road.

export interface AreaFaq {
  qEn: string
  aEn: string
  qHi: string
  aHi: string
}

export interface ServiceAreaPage {
  /** URL segment under /service-areas/ */
  slug: string
  nameEn: string
  nameHi: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  introEn: string[]
  introHi: string[]
  faqs: AreaFaq[]
}

export const serviceAreaPages: ServiceAreaPage[] = [
  {
    slug: "smriti-nagar",
    nameEn: "Smriti Nagar",
    nameHi: "स्मृति नगर",
    metaTitle: "Appliance Repair in Smriti Nagar, Bhilai | Doorstep Service",
    metaDescription:
      "Mixer grinder, gas stove, fan and geyser repair plus gas pipeline fitting in Smriti Nagar, Bhilai. Doorstep service from our Junwani Road shop nearby. Call 91099 18786.",
    keywords: [
      "appliance repair Smriti Nagar",
      "mixer grinder repair Smriti Nagar",
      "gas stove repair Smriti Nagar",
      "gas pipeline fitting Smriti Nagar",
      "geyser installation Smriti Nagar",
    ],
    introEn: [
      "Smriti Nagar is one of the areas we serve most — our shop on Junwani Road is only a short ride away, which means quick doorstep visits and easy drop-offs at the counter.",
      "We repair mixer grinders, gas stoves, fans, irons, geysers and water purifiers for Smriti Nagar homes, and do LPG gas pipeline fitting and leak repair on site. Smaller appliances can also be dropped at the shop and picked up once ready.",
    ],
    introHi: [
      "स्मृति नगर उन इलाकों में है जहाँ हम सबसे ज़्यादा सेवा देते हैं — जुनवानी रोड की हमारी दुकान यहाँ से बस थोड़ी दूरी पर है, इसलिए होम विज़िट जल्दी हो जाती है और काउंटर पर सामान देना भी आसान है।",
      "स्मृति नगर के घरों के लिए हम मिक्सर ग्राइंडर, गैस चूल्हा, पंखे, इस्त्री, गीज़र और वॉटर प्यूरीफायर की रिपेयर करते हैं, और LPG गैस पाइपलाइन फिटिंग व लीक रिपेयर घर पर ही होती है। छोटे अप्लायंस दुकान पर देकर तैयार होने पर ले भी सकते हैं।",
    ],
    faqs: [
      {
        qEn: "Do you provide doorstep appliance repair in Smriti Nagar?",
        aEn: "Yes — gas stove, geyser, ceiling fan, water purifier and gas pipeline work is done at your home in Smriti Nagar. Call 91099 18786 to book a visit.",
        qHi: "क्या स्मृति नगर में घर पर अप्लायंस रिपेयर मिलती है?",
        aHi: "हाँ — गैस चूल्हा, गीज़र, सीलिंग फैन, वॉटर प्यूरीफायर और गैस पाइपलाइन का काम स्मृति नगर में आपके घर पर होता है। विज़िट बुक करने के लिए 91099 18786 पर कॉल करें।",
      },
      {
        qEn: "How far is your shop from Smriti Nagar?",
        aEn: "We're on Junwani Road, in front of Shikhar Complex near Surya Mall — a short ride from Smriti Nagar. You can drop off smaller appliances like mixers and irons at the counter.",
        qHi: "आपकी दुकान स्मृति नगर से कितनी दूर है?",
        aHi: "हम जुनवानी रोड पर, शिखर कॉम्प्लेक्स के सामने, सूर्या मॉल के पास हैं — स्मृति नगर से थोड़ी ही दूरी पर। मिक्सर, इस्त्री जैसे छोटे अप्लायंस काउंटर पर दे सकते हैं।",
      },
    ],
  },
  {
    slug: "junwani",
    nameEn: "Junwani",
    nameHi: "जुनवानी",
    metaTitle: "Appliance Repair in Junwani, Bhilai | Shop on Junwani Road",
    metaDescription:
      "Home appliance shop and repair in Junwani, Bhilai — the KGN shop is on Junwani Road itself. Mixer, gas stove, fan, geyser repair and gas pipeline fitting. Call 91099 18786.",
    keywords: [
      "appliance repair Junwani",
      "appliance shop Junwani Road",
      "mixer grinder repair Junwani",
      "gas stove repair Junwani",
      "gas pipeline fitting Junwani",
    ],
    introEn: [
      "Junwani is home ground — the KGN shop stands on Junwani Road itself, in front of Shikhar Complex near Surya Mall. For Junwani residents that means walking distance for repairs, spare parts and new appliances alike.",
      "Bring a mixer, iron or stove straight to the counter, or book a home visit for geysers, ceiling fans, water purifiers and gas pipeline work. Free delivery in the area on products bought from the store.",
    ],
    introHi: [
      "जुनवानी हमारा अपना इलाका है — KGN की दुकान जुनवानी रोड पर ही है, शिखर कॉम्प्लेक्स के सामने, सूर्या मॉल के पास। जुनवानी के लोगों के लिए रिपेयर, स्पेयर पार्ट्स और नए अप्लायंस — सब पैदल दूरी पर।",
      "मिक्सर, इस्त्री या चूल्हा सीधे काउंटर पर लाएँ, या गीज़र, सीलिंग फैन, वॉटर प्यूरीफायर और गैस पाइपलाइन के काम के लिए होम विज़िट बुक करें। दुकान से खरीदे सामान की इलाके में मुफ्त डिलीवरी।",
    ],
    faqs: [
      {
        qEn: "Where exactly is the shop on Junwani Road?",
        aEn: "In front of Shikhar Complex, near Surya Mall, Junwani Road, Bhilai. Open Mon–Fri 9 AM–8 PM, Sat till 9 PM, Sun 10 AM–6 PM.",
        qHi: "जुनवानी रोड पर दुकान ठीक कहाँ है?",
        aHi: "शिखर कॉम्प्लेक्स के सामने, सूर्या मॉल के पास, जुनवानी रोड, भिलाई। सोम–शुक्र सुबह 9–रात 8, शनिवार रात 9 तक, रविवार सुबह 10–शाम 6।",
      },
      {
        qEn: "Can I get same-day repair in Junwani?",
        aEn: "Small jobs like mixer carbon brushes, jar couplers or iron elements are often done the same day when the part is in stock — bring the appliance in and we'll tell you on the spot.",
        qHi: "क्या जुनवानी में उसी दिन रिपेयर मिल सकती है?",
        aHi: "मिक्सर के कार्बन ब्रश, जार कपलर या इस्त्री के एलिमेंट जैसे छोटे काम पार्ट स्टॉक में होने पर अक्सर उसी दिन हो जाते हैं — अप्लायंस लाएँ, हम तुरंत बता देंगे।",
      },
    ],
  },
  {
    slug: "supela",
    nameEn: "Supela",
    nameHi: "सुपेला",
    metaTitle: "Appliance Repair in Supela, Bhilai | Doorstep Service",
    metaDescription:
      "Mixer grinder, gas stove, fan and geyser repair plus LPG gas pipeline fitting for homes in Supela, Bhilai. Doorstep visits from Junwani Road. Call 91099 18786.",
    keywords: [
      "appliance repair Supela",
      "mixer grinder repair Supela",
      "gas stove repair Supela",
      "geyser service Supela",
      "gas pipeline fitting Supela",
    ],
    introEn: [
      "Supela's market has no shortage of shops selling appliances — what's harder to find is someone who repairs them honestly afterwards. That's the gap we fill: sales and repair at the same counter, with doorstep service for Supela homes.",
      "We repair mixer grinders, gas stoves, fans, irons, geysers and water purifiers, and do LPG gas pipeline fitting and leak repair at your home. Our shop on Junwani Road is a short trip from Supela Chowk if you'd rather bring an appliance in.",
    ],
    introHi: [
      "सुपेला के बाज़ार में अप्लायंस बेचने वाली दुकानों की कमी नहीं — कमी है खरीदने के बाद ईमानदारी से रिपेयर करने वाले की। यही कमी हम पूरी करते हैं: बिक्री और रिपेयर एक ही काउंटर पर, और सुपेला के घरों के लिए डोरस्टेप सर्विस।",
      "हम मिक्सर ग्राइंडर, गैस चूल्हा, पंखे, इस्त्री, गीज़र और वॉटर प्यूरीफायर रिपेयर करते हैं, और LPG गैस पाइपलाइन फिटिंग व लीक रिपेयर आपके घर पर होती है। सामान लाना चाहें तो जुनवानी रोड की दुकान सुपेला चौक से थोड़ी ही दूरी पर है।",
    ],
    faqs: [
      {
        qEn: "Do you do home visits in Supela?",
        aEn: "Yes — gas stove, geyser, fan, purifier and pipeline work is done at your home in Supela. Call 91099 18786 and we'll fix a time.",
        qHi: "क्या सुपेला में होम विज़िट होती है?",
        aHi: "हाँ — गैस चूल्हा, गीज़र, पंखा, प्यूरीफायर और पाइपलाइन का काम सुपेला में आपके घर पर होता है। 91099 18786 पर कॉल करें, समय तय कर लेंगे।",
      },
      {
        qEn: "I bought my appliance elsewhere — will you still repair it?",
        aEn: "Of course. Most of the appliances we repair weren't bought from us. Brand and model don't matter as long as parts are available.",
        qHi: "मैंने अप्लायंस कहीं और से खरीदा है — क्या फिर भी रिपेयर करेंगे?",
        aHi: "बिल्कुल। हम जो अप्लायंस रिपेयर करते हैं उनमें से ज़्यादातर हमसे खरीदे नहीं गए होते। पार्ट्स उपलब्ध हों तो ब्रांड और मॉडल मायने नहीं रखता।",
      },
    ],
  },
  {
    slug: "nehru-nagar",
    nameEn: "Nehru Nagar",
    nameHi: "नेहरू नगर",
    metaTitle: "Appliance Repair in Nehru Nagar, Bhilai | Doorstep Service",
    metaDescription:
      "Doorstep appliance repair in Nehru Nagar, Bhilai — mixer grinders, gas stoves, fans, geysers, water purifiers and LPG gas pipeline fitting. Call 91099 18786.",
    keywords: [
      "appliance repair Nehru Nagar Bhilai",
      "mixer grinder repair Nehru Nagar",
      "gas stove repair Nehru Nagar",
      "geyser installation Nehru Nagar",
      "gas pipeline fitting Nehru Nagar",
    ],
    introEn: [
      "From Nehru Nagar Chowk our Junwani Road shop is an easy ride, and our repair team makes regular doorstep visits to Nehru Nagar homes for gas stoves, geysers, ceiling fans, water purifiers and LPG pipeline work.",
      "For mixer grinders, irons and other portable appliances, dropping them at the counter is usually fastest — faults are diagnosed while you wait and genuine spares are in stock.",
    ],
    introHi: [
      "नेहरू नगर चौक से जुनवानी रोड की हमारी दुकान आसान दूरी पर है, और हमारी रिपेयर टीम गैस चूल्हा, गीज़र, सीलिंग फैन, वॉटर प्यूरीफायर और LPG पाइपलाइन के काम के लिए नेहरू नगर के घरों में नियमित विज़िट करती है।",
      "मिक्सर ग्राइंडर, इस्त्री जैसे उठाकर लाने लायक अप्लायंस काउंटर पर देना आमतौर पर सबसे तेज़ रहता है — खराबी आपके सामने जाँची जाती है और असली स्पेयर स्टॉक में रहते हैं।",
    ],
    faqs: [
      {
        qEn: "Do you serve Nehru Nagar for gas pipeline fitting?",
        aEn: "Yes — new LPG pipeline fitting, re-routing and leak repair are done at homes across Nehru Nagar with ISI-marked pipes and a leak test before handover.",
        qHi: "क्या नेहरू नगर में गैस पाइपलाइन फिटिंग करते हैं?",
        aHi: "हाँ — नेहरू नगर के घरों में नई LPG पाइपलाइन फिटिंग, दोबारा रूटिंग और लीक रिपेयर होती है — ISI मार्क पाइप और काम सौंपने से पहले लीक टेस्ट के साथ।",
      },
      {
        qEn: "How do I book a repair visit for Nehru Nagar?",
        aEn: "Call 91099 18786 or WhatsApp 96916 53698 with the appliance and the problem — we'll confirm a visit time.",
        qHi: "नेहरू नगर के लिए रिपेयर विज़िट कैसे बुक करूँ?",
        aHi: "91099 18786 पर कॉल करें या 96916 53698 पर WhatsApp करें — अप्लायंस और दिक्कत बताएँ, हम विज़िट का समय पक्का कर देंगे।",
      },
    ],
  },
  {
    slug: "kohka",
    nameEn: "Kohka",
    nameHi: "कोहका",
    metaTitle: "Appliance Repair in Kohka, Bhilai | Doorstep Service",
    metaDescription:
      "Appliance repair for Kohka, Bhilai — mixer grinders, gas stoves, fans, geysers and water purifiers, plus LPG gas pipeline fitting. Shop nearby on Junwani Road. Call 91099 18786.",
    keywords: [
      "appliance repair Kohka",
      "mixer grinder repair Kohka",
      "gas stove repair Kohka",
      "fan repair Kohka",
      "gas pipeline fitting Kohka",
    ],
    introEn: [
      "Kohka sits right next to Junwani, so our shop is effectively the neighbourhood repair counter — most Kohka customers simply bring their mixer, iron or stove across and collect it once it's ready.",
      "For work that has to happen at home — geysers, ceiling fans, water purifiers, LPG pipeline fitting and leak repair — we schedule doorstep visits across Kohka, usually within a day or two of your call.",
    ],
    introHi: [
      "कोहका जुनवानी से बिल्कुल सटा है, इसलिए हमारी दुकान एक तरह से मोहल्ले का रिपेयर काउंटर है — कोहका के ज़्यादातर ग्राहक मिक्सर, इस्त्री या चूल्हा खुद लाकर देते हैं और तैयार होने पर ले जाते हैं।",
      "जो काम घर पर ही होना है — गीज़र, सीलिंग फैन, वॉटर प्यूरीफायर, LPG पाइपलाइन फिटिंग और लीक रिपेयर — उसके लिए पूरे कोहका में होम विज़िट होती है, आमतौर पर कॉल के एक-दो दिन के भीतर।",
    ],
    faqs: [
      {
        qEn: "Is there an appliance repair shop near Kohka?",
        aEn: "Yes — KGN Home Appliance & Services on Junwani Road, in front of Shikhar Complex near Surya Mall, right next to Kohka. Sales, repair and spare parts at one counter.",
        qHi: "कोहका के पास अप्लायंस रिपेयर की दुकान है?",
        aHi: "हाँ — KGN होम अप्लायंस एंड सर्विसेज, जुनवानी रोड पर, शिखर कॉम्प्लेक्स के सामने, सूर्या मॉल के पास — कोहका से बिल्कुल सटी हुई। बिक्री, रिपेयर और स्पेयर पार्ट्स एक ही काउंटर पर।",
      },
      {
        qEn: "Do you install geysers and purifiers in Kohka?",
        aEn: "Yes — installation and servicing for geysers and water purifiers happens at your home in Kohka. Installation is free on purifiers bought from our shop.",
        qHi: "क्या कोहका में गीज़र और प्यूरीफायर इंस्टॉल करते हैं?",
        aHi: "हाँ — गीज़र और वॉटर प्यूरीफायर का इंस्टॉलेशन और सर्विसिंग कोहका में आपके घर पर होती है। हमारी दुकान से खरीदे प्यूरीफायर पर इंस्टॉलेशन मुफ्त है।",
      },
    ],
  },
  {
    slug: "risali",
    nameEn: "Risali",
    nameHi: "रिसाली",
    metaTitle: "Appliance Repair in Risali, Bhilai | Doorstep Service",
    metaDescription:
      "Doorstep appliance repair in Risali, Bhilai — gas stoves, geysers, fans, water purifiers and LPG gas pipeline fitting, plus counter repair for mixers and irons. Call 91099 18786.",
    keywords: [
      "appliance repair Risali",
      "gas stove repair Risali",
      "mixer grinder repair Risali",
      "geyser service Risali",
      "gas pipeline fitting Risali",
    ],
    introEn: [
      "Risali homes are firmly inside our service area — our repair team takes doorstep bookings for gas stoves, geysers, ceiling fans, water purifiers and LPG pipeline fitting across Risali and the neighbouring sectors.",
      "Portable appliances — mixer grinders, irons, table fans — can be dropped at our Junwani Road shop, where genuine spares for all major brands are kept in stock.",
    ],
    introHi: [
      "रिसाली के घर हमारे सेवा क्षेत्र में पूरी तरह शामिल हैं — हमारी रिपेयर टीम रिसाली और आसपास के सेक्टरों में गैस चूल्हा, गीज़र, सीलिंग फैन, वॉटर प्यूरीफायर और LPG पाइपलाइन फिटिंग की डोरस्टेप बुकिंग लेती है।",
      "उठाकर लाने लायक अप्लायंस — मिक्सर ग्राइंडर, इस्त्री, टेबल फैन — जुनवानी रोड की दुकान पर दे सकते हैं, जहाँ सभी बड़े ब्रांड के असली स्पेयर स्टॉक में रहते हैं।",
    ],
    faqs: [
      {
        qEn: "Do you charge extra for visiting Risali?",
        aEn: "Visit details and any charges are told upfront on the phone before we come — no surprises at the door. Call 91099 18786 with your locality and the problem.",
        qHi: "रिसाली आने का अलग से चार्ज लगता है?",
        aHi: "विज़िट की जानकारी और कोई भी चार्ज फोन पर पहले ही बता दिया जाता है — दरवाज़े पर कोई सरप्राइज़ नहीं। अपना इलाका और दिक्कत बताकर 91099 18786 पर कॉल करें।",
      },
      {
        qEn: "Which appliances do you repair at home in Risali?",
        aEn: "Gas stoves, geysers, ceiling and exhaust fans, water purifiers — plus LPG pipeline fitting and leak repair. Mixers and irons are quicker at the shop counter.",
        qHi: "रिसाली में घर पर कौन से अप्लायंस रिपेयर होते हैं?",
        aHi: "गैस चूल्हा, गीज़र, सीलिंग और एग्ज़ॉस्ट फैन, वॉटर प्यूरीफायर — साथ में LPG पाइपलाइन फिटिंग और लीक रिपेयर। मिक्सर और इस्त्री दुकान के काउंटर पर जल्दी हो जाते हैं।",
      },
    ],
  },
  {
    slug: "durg",
    nameEn: "Durg",
    nameHi: "दुर्ग",
    metaTitle: "Appliance Repair in Durg | Doorstep Service from Bhilai",
    metaDescription:
      "Doorstep appliance repair and gas pipeline fitting in Durg — gas stoves, geysers, fans and water purifiers, from KGN Home Appliance & Services, Junwani Road, Bhilai. Call 91099 18786.",
    keywords: [
      "appliance repair Durg",
      "gas stove repair Durg",
      "gas pipeline work Durg",
      "geyser installation Durg",
      "water purifier service Durg",
    ],
    introEn: [
      "Bhilai and Durg run into each other, and so does our service area — doorstep repair visits and LPG gas pipeline work cover Durg city alongside Bhilai.",
      "Gas stoves, geysers, ceiling fans and water purifiers are handled at your home in Durg; mixer grinders and other small appliances can be dropped at our Junwani Road shop in Bhilai, where most small repairs are turned around quickly.",
    ],
    introHi: [
      "भिलाई और दुर्ग आपस में मिले हुए हैं, और हमारा सेवा क्षेत्र भी — डोरस्टेप रिपेयर विज़िट और LPG गैस पाइपलाइन का काम भिलाई के साथ दुर्ग शहर में भी होता है।",
      "गैस चूल्हा, गीज़र, सीलिंग फैन और वॉटर प्यूरीफायर दुर्ग में आपके घर पर ठीक होते हैं; मिक्सर ग्राइंडर और दूसरे छोटे अप्लायंस भिलाई में जुनवानी रोड की हमारी दुकान पर दे सकते हैं, जहाँ ज़्यादातर छोटी रिपेयर जल्दी हो जाती है।",
    ],
    faqs: [
      {
        qEn: "Do you really come to Durg for repairs?",
        aEn: "Yes — Durg is part of our regular service area for doorstep repair and gas pipeline work. Tell us your locality when you call 91099 18786 and we'll schedule the visit.",
        qHi: "क्या आप सच में रिपेयर के लिए दुर्ग आते हैं?",
        aHi: "हाँ — डोरस्टेप रिपेयर और गैस पाइपलाइन के काम के लिए दुर्ग हमारे नियमित सेवा क्षेत्र में है। 91099 18786 पर कॉल करते समय अपना इलाका बताएँ, हम विज़िट तय कर देंगे।",
      },
      {
        qEn: "Is delivery available to Durg on new appliances?",
        aEn: "Yes — call or WhatsApp for the product you want and we'll confirm price and delivery to your Durg address.",
        qHi: "क्या नए अप्लायंस की डिलीवरी दुर्ग में होती है?",
        aHi: "हाँ — जो प्रोडक्ट चाहिए उसके लिए कॉल या WhatsApp करें, हम कीमत और दुर्ग के पते पर डिलीवरी की पुष्टि कर देंगे।",
      },
    ],
  },
]

export function getAreaPage(slug: string): ServiceAreaPage | undefined {
  return serviceAreaPages.find((a) => a.slug === slug)
}
