// Dedicated landing pages for the highest-value local search terms
// ("mixer grinder repair Bhilai", "gas stove repair Bhilai"…). Each entry
// becomes a page at /services/<slug> with its own metadata, FAQ schema and
// internal links. Content must describe work the shop actually does — the
// same rule as config/services.ts.

export interface ServicePageFaq {
  qEn: string
  aEn: string
  qHi: string
  aHi: string
}

export interface ServiceLandingPage {
  /** URL segment under /services/ — keep keyword + location in the slug. */
  slug: string
  /** id of the matching entry in config/services.ts (icon + card points come from there). */
  serviceId: string
  h1En: string
  h1Hi: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  /** Intro paragraphs rendered under the H1. */
  introEn: string[]
  introHi: string[]
  /** Specific jobs handled — richer than the card bullet points. */
  workEn: string[]
  workHi: string[]
  faqs: ServicePageFaq[]
  /** Slugs from config/blog.ts shown as "helpful guides". */
  relatedBlogSlugs: string[]
  /** Optional category id from config/products.ts for a "shop new" cross-link. */
  relatedCategoryId?: string
}

export const servicePages: ServiceLandingPage[] = [
  {
    slug: "mixer-grinder-repair-bhilai",
    serviceId: "mixer-grinder-repair",
    h1En: "Mixer Grinder Repair in Bhilai",
    h1Hi: "भिलाई में मिक्सर ग्राइंडर रिपेयर",
    metaTitle: "Mixer Grinder Repair in Bhilai | Motor, Jar & Switch Work",
    metaDescription:
      "Mixer grinder repair on Junwani Road, Bhilai — motor and winding work, carbon brush, coupler, switch and speed regulator, plus genuine jars and blades in stock. All major brands. Call 91099 18786.",
    keywords: [
      "mixer grinder repair Bhilai",
      "mixer grinder repair near me",
      "mixer motor repair Bhilai",
      "mixer grinder service Bhilai",
      "mixer jar repair Bhilai",
      "mixer grinder repair Smriti Nagar",
      "मिक्सर ग्राइंडर रिपेयर भिलाई",
    ],
    introEn: [
      "A mixer grinder that trips the switch, smells of burning or simply refuses to start usually needs a small, inexpensive fix — not a replacement. At our shop on Junwani Road we repair mixer grinders of all major brands, including Sujata, Bajaj, Prestige, Usha and Butterfly, whether or not the machine was bought from us.",
      "Most common faults — worn carbon brushes, a broken coupler, a faulty switch or speed regulator — are diagnosed while you wait, and we keep genuine jars, blades, gaskets and couplers in stock so a broken jar never means buying a whole new mixer. Customers come to us from across Bhilai: Smriti Nagar, Junwani, Nehru Nagar, Supela, Kohka, Risali and Durg.",
    ],
    introHi: [
      "मिक्सर ग्राइंडर अगर स्विच ट्रिप कर रहा है, जलने की गंध आ रही है या चालू ही नहीं हो रहा, तो अक्सर छोटी और सस्ती मरम्मत से ठीक हो जाता है — नया खरीदने की ज़रूरत नहीं। जुनवानी रोड पर हमारी दुकान में सुजाता, बजाज, प्रेस्टीज, उषा और बटरफ्लाई समेत सभी बड़े ब्रांड के मिक्सर ग्राइंडर की रिपेयर होती है — चाहे मशीन हमसे खरीदी हो या नहीं।",
      "ज़्यादातर आम खराबियाँ — घिसे कार्बन ब्रश, टूटा कपलर, खराब स्विच या स्पीड रेगुलेटर — आपके सामने ही जाँच ली जाती हैं, और असली जार, ब्लेड, गैस्केट और कपलर दुकान पर ही उपलब्ध हैं। स्मृति नगर, जुनवानी, नेहरू नगर, सुपेला, कोहका, रिसाली और दुर्ग से ग्राहक हमारे पास आते हैं।",
    ],
    workEn: [
      "Motor and winding repair",
      "Carbon brush replacement",
      "Coupler (jar and body) replacement",
      "Switch and speed regulator repair",
      "Wet, dry and chutney jar replacement",
      "Blade, gasket and lid replacement",
      "Overload protector and wiring faults",
      "Full servicing and cleaning",
    ],
    workHi: [
      "मोटर और वाइंडिंग रिपेयर",
      "कार्बन ब्रश बदलना",
      "कपलर (जार और बॉडी) बदलना",
      "स्विच और स्पीड रेगुलेटर रिपेयर",
      "वेट, ड्राई और चटनी जार बदलना",
      "ब्लेड, गैस्केट और ढक्कन बदलना",
      "ओवरलोड प्रोटेक्टर और वायरिंग की खराबी",
      "पूरी सर्विसिंग और सफाई",
    ],
    faqs: [
      {
        qEn: "How much does mixer grinder repair cost in Bhilai?",
        aEn: "It depends on the fault — small jobs like a carbon brush or coupler cost far less than motor rewinding. Bring the mixer to the shop or send a photo on WhatsApp (96916 53698) and we'll tell you the estimate before any work starts.",
        qHi: "भिलाई में मिक्सर ग्राइंडर रिपेयर का खर्च कितना आता है?",
        aHi: "खर्च खराबी पर निर्भर करता है — कार्बन ब्रश या कपलर जैसे छोटे काम मोटर रिवाइंडिंग से काफी सस्ते होते हैं। मिक्सर दुकान पर लाएँ या WhatsApp (96916 53698) पर फोटो भेजें — काम शुरू करने से पहले हम अनुमानित खर्च बता देते हैं।",
      },
      {
        qEn: "Which mixer grinder brands do you repair?",
        aEn: "All major brands — Sujata, Bajaj, Prestige, Usha, Butterfly, Havells and more. You don't need to have bought the mixer from our shop.",
        qHi: "आप किन ब्रांड के मिक्सर ग्राइंडर रिपेयर करते हैं?",
        aHi: "सभी बड़े ब्रांड — सुजाता, बजाज, प्रेस्टीज, उषा, बटरफ्लाई, हैवेल्स और अन्य। मिक्सर हमारी दुकान से खरीदा होना ज़रूरी नहीं है।",
      },
      {
        qEn: "Do you have mixer jars and blades in stock?",
        aEn: "Yes — genuine wet, dry and chutney jars, stainless steel blades, gaskets and couplers are kept in stock at the shop, so most jar problems are solved the same day.",
        qHi: "क्या मिक्सर के जार और ब्लेड स्टॉक में रहते हैं?",
        aHi: "हाँ — असली वेट, ड्राई और चटनी जार, स्टेनलेस स्टील ब्लेड, गैस्केट और कपलर दुकान पर स्टॉक में रहते हैं, इसलिए जार की ज़्यादातर दिक्कतें उसी दिन हल हो जाती हैं।",
      },
      {
        qEn: "Where do I bring my mixer grinder for repair?",
        aEn: "KGN Home Appliance & Services, in front of Shikhar Complex, near Surya Mall, Junwani Road, Bhilai. Open every day — Mon–Fri 9 AM to 8 PM, Sat till 9 PM, Sun 10 AM to 6 PM.",
        qHi: "मिक्सर ग्राइंडर रिपेयर के लिए कहाँ लाना होगा?",
        aHi: "KGN होम अप्लायंस एंड सर्विसेज, शिखर कॉम्प्लेक्स के सामने, सूर्या मॉल के पास, जुनवानी रोड, भिलाई। दुकान रोज़ खुली रहती है — सोम–शुक्र सुबह 9 से रात 8, शनिवार रात 9 तक, रविवार सुबह 10 से शाम 6 बजे तक।",
      },
    ],
    relatedBlogSlugs: ["mixer-grinder-problems-and-repair", "how-to-choose-a-mixer-grinder"],
    relatedCategoryId: "mixer-grinders",
  },
  {
    slug: "gas-stove-repair-bhilai",
    serviceId: "gas-stove-repair",
    h1En: "Gas Stove Repair in Bhilai",
    h1Hi: "भिलाई में गैस चूल्हा रिपेयर",
    metaTitle: "Gas Stove Repair in Bhilai | Burner, Knob & Valve Service",
    metaDescription:
      "Gas stove repair in Bhilai — burner cleaning and replacement, knob and valve repair, igniter fitting, flame and leak checks. At the shop on Junwani Road or at your home. Call 91099 18786.",
    keywords: [
      "gas stove repair Bhilai",
      "gas stove service Bhilai",
      "gas burner cleaning Bhilai",
      "gas burner replacement Bhilai",
      "gas stove repair near me",
      "gas stove repair Junwani",
      "गैस चूल्हा रिपेयर भिलाई",
    ],
    introEn: [
      "A yellow or uneven flame, a knob that turns loosely, a burner that won't light — these are the gas stove problems we fix every day. We repair 2, 3 and 4 burner stoves of all brands, both glass top and stainless steel, at our Junwani Road shop or at your home anywhere in Bhilai and Durg.",
      "Every repair ends with a flame and leak check, and we use genuine brass burners, valves, knobs and igniters. If a stove is beyond sensible repair we'll say so honestly — and you can compare new models at the same counter.",
    ],
    introHi: [
      "पीली या असमान लौ, ढीला घूमता नॉब, न जलने वाला बर्नर — यही गैस चूल्हे की दिक्कतें हम रोज़ ठीक करते हैं। हम सभी ब्रांड के 2, 3 और 4 बर्नर चूल्हे — ग्लास टॉप और स्टेनलेस स्टील दोनों — जुनवानी रोड की दुकान पर या भिलाई-दुर्ग में आपके घर पर रिपेयर करते हैं।",
      "हर रिपेयर के बाद लौ और लीक की जाँच होती है, और हम असली पीतल बर्नर, वाल्व, नॉब और इग्नाइटर इस्तेमाल करते हैं। अगर चूल्हा ठीक कराने लायक नहीं है तो हम साफ-साफ बता देते हैं — और उसी काउंटर पर नए मॉडल भी देख सकते हैं।",
    ],
    workEn: [
      "Brass burner cleaning and replacement",
      "Knob and gas valve repair",
      "Igniter and battery lighter fitting",
      "Gas pipe and nozzle replacement",
      "Yellow / low flame correction",
      "Leak testing after every repair",
      "Glass top and frame repair",
      "Full stove servicing",
    ],
    workHi: [
      "पीतल बर्नर की सफाई और बदलाव",
      "नॉब और गैस वाल्व रिपेयर",
      "इग्नाइटर और बैटरी लाइटर फिटिंग",
      "गैस पाइप और नोज़ल बदलना",
      "पीली / धीमी लौ ठीक करना",
      "हर रिपेयर के बाद लीक टेस्ट",
      "ग्लास टॉप और फ्रेम रिपेयर",
      "पूरी चूल्हा सर्विसिंग",
    ],
    faqs: [
      {
        qEn: "Why is my gas stove flame yellow instead of blue?",
        aEn: "A yellow flame usually means the burner is clogged or the air shutter needs adjustment. It wastes gas and blackens utensils. Burner cleaning or replacement fixes it — bring the stove in or book a home visit.",
        qHi: "मेरे गैस चूल्हे की लौ नीली की जगह पीली क्यों है?",
        aHi: "पीली लौ का मतलब आमतौर पर बर्नर जाम है या एयर शटर को एडजस्ट करना है। इससे गैस बर्बाद होती है और बर्तन काले पड़ते हैं। बर्नर की सफाई या बदलाव से यह ठीक हो जाता है — चूल्हा दुकान लाएँ या होम विज़िट बुक करें।",
      },
      {
        qEn: "Do you repair gas stoves at home in Bhilai?",
        aEn: "Yes — doorstep gas stove repair is available across Bhilai and Durg, including Smriti Nagar, Junwani, Supela, Nehru Nagar, Kohka and Risali. Call 91099 18786 to book a visit.",
        qHi: "क्या आप भिलाई में घर आकर गैस चूल्हा रिपेयर करते हैं?",
        aHi: "हाँ — स्मृति नगर, जुनवानी, सुपेला, नेहरू नगर, कोहका और रिसाली समेत पूरे भिलाई और दुर्ग में घर पर गैस चूल्हा रिपेयर उपलब्ध है। विज़िट बुक करने के लिए 91099 18786 पर कॉल करें।",
      },
      {
        qEn: "How often should a gas stove be serviced?",
        aEn: "Once a year is a good rule for a stove in daily use — burners are cleaned, valves checked and the pipe inspected for cracks. It keeps the flame blue and the kitchen safe.",
        qHi: "गैस चूल्हे की सर्विस कितने समय में करानी चाहिए?",
        aHi: "रोज़ इस्तेमाल होने वाले चूल्हे के लिए साल में एक बार सर्विस अच्छा नियम है — बर्नर की सफाई, वाल्व की जाँच और पाइप में दरार की जाँच होती है। इससे लौ नीली और रसोई सुरक्षित रहती है।",
      },
      {
        qEn: "Do you check for gas leaks?",
        aEn: "Yes — every stove repair ends with a leak check, and we also do LPG pipeline fitting and leak repair at home with ISI-marked parts.",
        qHi: "क्या आप गैस लीक की जाँच करते हैं?",
        aHi: "हाँ — हर चूल्हा रिपेयर के बाद लीक की जाँच होती है, और हम ISI मार्क पार्ट्स के साथ घर पर LPG पाइपलाइन फिटिंग और लीक रिपेयर भी करते हैं।",
      },
    ],
    relatedBlogSlugs: ["glass-top-vs-stainless-steel-gas-stove", "lpg-gas-pipeline-safety-checklist"],
    relatedCategoryId: "gas-stoves",
  },
  {
    slug: "pressure-cooker-repair-bhilai",
    serviceId: "pressure-cooker-repair",
    h1En: "Pressure Cooker Repair in Bhilai",
    h1Hi: "भिलाई में प्रेशर कुकर रिपेयर",
    metaTitle: "Pressure Cooker Repair in Bhilai | Gasket, Whistle & Valve",
    metaDescription:
      "Pressure cooker repair on Junwani Road, Bhilai — gasket and sealing ring replacement, whistle and safety valve work, handle and lid repair. Genuine Hawkins and Prestige spares. Call 91099 18786.",
    keywords: [
      "pressure cooker repair Bhilai",
      "cooker gasket replacement Bhilai",
      "cooker whistle repair Bhilai",
      "pressure cooker safety valve Bhilai",
      "Prestige cooker repair Bhilai",
      "Hawkins cooker repair Bhilai",
      "प्रेशर कुकर रिपेयर भिलाई",
    ],
    introEn: [
      "A cooker that leaks steam from the lid, whistles weakly or has a hardened gasket doesn't need replacing — it needs a few genuine parts. At our Junwani Road shop we repair pressure cookers of all major brands, with original Hawkins and Prestige gaskets, whistles, safety valves and handles kept in stock.",
      "Most cooker jobs are done at the counter while you wait. A word of caution from experience: never run a cooker with a blocked vent or a fused safety valve — those two parts are exactly what we check first on every cooker that comes in from Bhilai, Smriti Nagar, Junwani, Supela, Risali or Durg.",
    ],
    introHi: [
      "ढक्कन से भाप निकालता, कमज़ोर सीटी वाला या सख्त हो चुकी गैस्केट वाला कुकर बदलने की नहीं, बस कुछ असली पार्ट्स की ज़रूरत रखता है। जुनवानी रोड की हमारी दुकान पर सभी बड़े ब्रांड के प्रेशर कुकर की रिपेयर होती है — हॉकिन्स और प्रेस्टीज की असली गैस्केट, सीटी, सेफ्टी वाल्व और हैंडल स्टॉक में रहते हैं।",
      "कुकर के ज़्यादातर काम काउंटर पर आपके सामने ही हो जाते हैं। अनुभव से एक सावधानी: बंद वेंट या फ्यूज़ हुए सेफ्टी वाल्व के साथ कुकर कभी न चलाएँ — भिलाई, स्मृति नगर, जुनवानी, सुपेला, रिसाली या दुर्ग से आने वाले हर कुकर में हम सबसे पहले यही दो चीज़ें जाँचते हैं।",
    ],
    workEn: [
      "Gasket / sealing ring replacement",
      "Whistle (vent weight) replacement",
      "Safety valve replacement",
      "Handle and knob replacement",
      "Lid alignment and steam leak fix",
      "Vent tube cleaning",
      "Genuine Hawkins & Prestige spares",
      "Pre-repair safety check",
    ],
    workHi: [
      "गैस्केट / सीलिंग रिंग बदलना",
      "सीटी (वेंट वेट) बदलना",
      "सेफ्टी वाल्व बदलना",
      "हैंडल और नॉब बदलना",
      "ढक्कन की सेटिंग और भाप लीक ठीक करना",
      "वेंट ट्यूब की सफाई",
      "हॉकिन्स और प्रेस्टीज के असली स्पेयर",
      "रिपेयर से पहले सुरक्षा जाँच",
    ],
    faqs: [
      {
        qEn: "My cooker's whistle doesn't come — what's wrong?",
        aEn: "Usually a blocked vent tube, a worn whistle or a hardened gasket letting steam escape. All three are quick, inexpensive fixes at the counter — bring the cooker in and we'll check it while you wait.",
        qHi: "मेरे कुकर की सीटी नहीं आती — क्या खराबी है?",
        aHi: "आमतौर पर बंद वेंट ट्यूब, घिसी सीटी या सख्त हो चुकी गैस्केट से भाप निकलना इसकी वजह होती है। तीनों काम काउंटर पर जल्दी और सस्ते में हो जाते हैं — कुकर लाएँ, आपके सामने ही जाँच लेंगे।",
      },
      {
        qEn: "Do you repair Prestige and Hawkins cookers?",
        aEn: "Yes — genuine Prestige and Hawkins gaskets, whistles, safety valves and handles are kept in stock, and we repair other brands too when parts are available.",
        qHi: "क्या आप प्रेस्टीज और हॉकिन्स के कुकर रिपेयर करते हैं?",
        aHi: "हाँ — प्रेस्टीज और हॉकिन्स की असली गैस्केट, सीटी, सेफ्टी वाल्व और हैंडल स्टॉक में रहते हैं, और पार्ट्स उपलब्ध होने पर दूसरे ब्रांड भी रिपेयर करते हैं।",
      },
      {
        qEn: "How often should the cooker gasket be changed?",
        aEn: "When it hardens, cracks or the lid starts leaking steam — for a daily-use cooker that's typically once a year. A fresh gasket also brings the whistle timing back to normal.",
        qHi: "कुकर की गैस्केट कितने समय में बदलनी चाहिए?",
        aHi: "जब वह सख्त हो जाए, चटक जाए या ढक्कन से भाप निकलने लगे — रोज़ इस्तेमाल होने वाले कुकर में आमतौर पर साल में एक बार। नई गैस्केट से सीटी का समय भी सामान्य हो जाता है।",
      },
      {
        qEn: "Is it safe to keep using a cooker whose safety valve has fused?",
        aEn: "No — the safety valve is the cooker's emergency release and must be replaced before the cooker is used again. It's a small part we replace on the spot.",
        qHi: "जिस कुकर का सेफ्टी वाल्व फ्यूज़ हो गया हो उसे इस्तेमाल करना ठीक है?",
        aHi: "नहीं — सेफ्टी वाल्व कुकर का इमरजेंसी रिलीज़ है और दोबारा इस्तेमाल से पहले उसे बदलना ज़रूरी है। यह छोटा पार्ट है जो हम तुरंत बदल देते हैं।",
      },
    ],
    relatedBlogSlugs: ["pressure-cooker-safety-and-care"],
    relatedCategoryId: "pressure-cookers",
  },
  {
    slug: "gas-pipeline-fitting-bhilai",
    serviceId: "gas-pipeline-work",
    h1En: "Gas Pipeline Fitting & Repair in Bhilai",
    h1Hi: "भिलाई में गैस पाइपलाइन फिटिंग और रिपेयर",
    metaTitle: "Gas Pipeline Fitting in Bhilai | LPG Pipe Work at Home",
    metaDescription:
      "LPG gas pipeline fitting, re-routing and leak repair at your home in Bhilai and Durg. ISI-marked pipes, clamps, regulators and safety valves, with leak testing before handover. Call 91099 18786.",
    keywords: [
      "gas pipeline fitting Bhilai",
      "gas pipeline work Bhilai",
      "LPG pipe fitting at home",
      "gas leak repair Bhilai",
      "gas pipeline work Durg",
      "kitchen gas line fitting Bhilai",
      "गैस पाइपलाइन फिटिंग भिलाई",
    ],
    introEn: [
      "Whether you're shifting into a new kitchen, moving the cylinder outside, or worried about an old rubber pipe, we do complete LPG pipeline work at your home across Bhilai and Durg — new fitting, re-routing and leak repair.",
      "Only ISI-marked pipes, clamps, regulators and safety valves are used, every joint is leak-tested before handover, and the stove is connected and demonstrated before we leave. This is home-kitchen LPG work — for commercial kitchens, call and describe the job first.",
    ],
    introHi: [
      "नई रसोई में शिफ्ट होना हो, सिलेंडर बाहर रखवाना हो, या पुराने रबर पाइप की चिंता हो — हम पूरे भिलाई और दुर्ग में आपके घर पर LPG पाइपलाइन का पूरा काम करते हैं: नई फिटिंग, दोबारा रूटिंग और लीक रिपेयर।",
      "सिर्फ ISI मार्क पाइप, क्लैंप, रेगुलेटर और सेफ्टी वाल्व इस्तेमाल होते हैं, हर जोड़ की लीक जाँच काम सौंपने से पहले होती है, और जाने से पहले चूल्हा जोड़कर चलाकर दिखाया जाता है। यह घरेलू रसोई का LPG काम है — कमर्शियल किचन के लिए पहले कॉल करके काम बताएँ।",
    ],
    workEn: [
      "New LPG pipeline fitting in the kitchen",
      "Cylinder-outside (balcony/utility) piping",
      "Re-routing during kitchen renovation",
      "Leak detection and repair",
      "Regulator and safety valve fitting",
      "Rubber pipe to braided/copper upgrade",
      "Stove connection and demo",
      "Leak testing before handover",
    ],
    workHi: [
      "रसोई में नई LPG पाइपलाइन फिटिंग",
      "सिलेंडर बाहर (बालकनी/यूटिलिटी) रखने की पाइपिंग",
      "किचन रिनोवेशन में पाइपलाइन की दोबारा रूटिंग",
      "लीक की जाँच और मरम्मत",
      "रेगुलेटर और सेफ्टी वाल्व फिटिंग",
      "रबर पाइप की जगह ब्रेडेड/कॉपर अपग्रेड",
      "चूल्हा कनेक्शन और डेमो",
      "काम सौंपने से पहले लीक टेस्ट",
    ],
    faqs: [
      {
        qEn: "Can you fit a gas pipeline so the cylinder stays outside the kitchen?",
        aEn: "Yes — that's the most common job we do. The cylinder sits in a balcony or utility area and an ISI-marked pipe runs to the stove, with a safety valve and leak test before handover.",
        qHi: "क्या सिलेंडर रसोई के बाहर रखकर पाइपलाइन लग सकती है?",
        aHi: "हाँ — यही हमारा सबसे आम काम है। सिलेंडर बालकनी या यूटिलिटी एरिया में रहता है और ISI मार्क पाइप चूल्हे तक जाती है, सेफ्टी वाल्व और लीक टेस्ट के साथ।",
      },
      {
        qEn: "I smell gas at home — what should I do?",
        aEn: "Turn off the regulator, open windows, and don't switch anything electrical on or off. Then call us on 91099 18786 — leak repair visits are treated as urgent across Bhilai and Durg.",
        qHi: "घर में गैस की गंध आ रही है — क्या करूँ?",
        aHi: "रेगुलेटर बंद करें, खिड़कियाँ खोलें, और कोई भी बिजली का स्विच चालू-बंद न करें। फिर 91099 18786 पर कॉल करें — भिलाई और दुर्ग में लीक रिपेयर विज़िट को हम अर्जेंट मानते हैं।",
      },
      {
        qEn: "What does gas pipeline fitting cost?",
        aEn: "It depends on the pipe length and fittings needed. Call or WhatsApp a photo of your kitchen layout and we'll give an estimate before the visit.",
        qHi: "गैस पाइपलाइन फिटिंग का खर्च कितना आता है?",
        aHi: "खर्च पाइप की लंबाई और फिटिंग पर निर्भर करता है। कॉल करें या रसोई के लेआउट की फोटो WhatsApp करें — विज़िट से पहले हम अनुमानित खर्च बता देंगे।",
      },
      {
        qEn: "Which areas do you cover for pipeline work?",
        aEn: "All of Bhilai — Junwani, Smriti Nagar, Nehru Nagar, Supela, Kohka, Risali — and Durg. Home visits are scheduled by phone: 91099 18786.",
        qHi: "पाइपलाइन के काम के लिए आप किन इलाकों में आते हैं?",
        aHi: "पूरा भिलाई — जुनवानी, स्मृति नगर, नेहरू नगर, सुपेला, कोहका, रिसाली — और दुर्ग। होम विज़िट फोन से बुक होती है: 91099 18786।",
      },
    ],
    relatedBlogSlugs: ["lpg-gas-pipeline-safety-checklist", "glass-top-vs-stainless-steel-gas-stove"],
    relatedCategoryId: "gas-stoves",
  },
  {
    slug: "water-purifier-service-bhilai",
    serviceId: "water-purifier-service",
    h1En: "Water Purifier Installation & Service in Bhilai",
    h1Hi: "भिलाई में वॉटर प्यूरीफायर इंस्टॉलेशन और सर्विस",
    metaTitle: "Water Purifier Service in Bhilai | RO Installation & Filters",
    metaDescription:
      "RO water purifier installation and filter service in Bhilai — sediment, carbon and membrane replacement, free installation on purifiers bought from our Junwani Road shop. Call 91099 18786.",
    keywords: [
      "water purifier service Bhilai",
      "RO service Bhilai",
      "RO installation Bhilai",
      "RO filter replacement Bhilai",
      "water purifier repair Bhilai",
      "RO membrane change Bhilai",
      "वॉटर प्यूरीफायर सर्विस भिलाई",
    ],
    introEn: [
      "Purifier water tasting odd, flowing slowly, or the machine beeping? Filters have a fixed life — sediment and carbon filters typically need a change every 6–12 months and the RO membrane roughly every 1–2 years, depending on your water. We install and service water purifiers at homes across Bhilai and Durg.",
      "Installation is free in Bhilai on purifiers bought from our shop, and we service machines bought elsewhere too. We'll tell you which filters are actually due — not push the full set every time.",
    ],
    introHi: [
      "प्यूरीफायर के पानी का स्वाद अजीब है, पानी धीरे आ रहा है, या मशीन बीप कर रही है? फिल्टर की उम्र तय होती है — सेडिमेंट और कार्बन फिल्टर आमतौर पर 6–12 महीने में और RO मेम्ब्रेन करीब 1–2 साल में बदलना पड़ता है, आपके पानी के हिसाब से। हम पूरे भिलाई और दुर्ग में घरों पर वॉटर प्यूरीफायर इंस्टॉल और सर्विस करते हैं।",
      "हमारी दुकान से खरीदे प्यूरीफायर पर भिलाई में इंस्टॉलेशन मुफ्त है, और कहीं और से खरीदी मशीन की भी सर्विस करते हैं। जो फिल्टर सच में बदलने लायक हैं वही बताएँगे — हर बार पूरा सेट नहीं थोपेंगे।",
    ],
    workEn: [
      "New purifier installation (free in Bhilai on purifiers bought from us)",
      "Sediment and carbon filter replacement",
      "RO membrane replacement",
      "Low flow / no water diagnosis",
      "Leakage and float valve repair",
      "Pump and adapter faults",
      "TDS check and taste issues",
      "Shifting and re-installation",
    ],
    workHi: [
      "नए प्यूरीफायर का इंस्टॉलेशन (हमसे खरीदने पर भिलाई में मुफ्त)",
      "सेडिमेंट और कार्बन फिल्टर बदलना",
      "RO मेम्ब्रेन बदलना",
      "धीमे / बंद पानी की जाँच",
      "लीकेज और फ्लोट वाल्व रिपेयर",
      "पंप और अडैप्टर की खराबी",
      "TDS जाँच और स्वाद की दिक्कत",
      "शिफ्टिंग और दोबारा इंस्टॉलेशन",
    ],
    faqs: [
      {
        qEn: "How often should RO filters be changed?",
        aEn: "As a rule of thumb: sediment and carbon filters every 6–12 months, the RO membrane every 1–2 years. It depends on your water quality and usage — we check before recommending a change.",
        qHi: "RO के फिल्टर कितने समय में बदलने चाहिए?",
        aHi: "मोटा नियम: सेडिमेंट और कार्बन फिल्टर 6–12 महीने में, RO मेम्ब्रेन 1–2 साल में। यह पानी की गुणवत्ता और इस्तेमाल पर निर्भर करता है — बदलने की सलाह देने से पहले हम जाँच करते हैं।",
      },
      {
        qEn: "Do you service purifiers not bought from your shop?",
        aEn: "Yes — filter changes and repairs are done for purifiers bought anywhere. Free installation applies to purifiers bought from us.",
        qHi: "क्या आप दूसरी जगह से खरीदे प्यूरीफायर की सर्विस करते हैं?",
        aHi: "हाँ — कहीं से भी खरीदे प्यूरीफायर के फिल्टर बदलना और रिपेयर होती है। मुफ्त इंस्टॉलेशन हमसे खरीदे प्यूरीफायर पर लागू होता है।",
      },
      {
        qEn: "Do you do home visits for purifier service in Bhilai?",
        aEn: "Yes — installation and filter service happen at your home across Bhilai and Durg. Call 91099 18786 or WhatsApp 96916 53698 to book.",
        qHi: "क्या प्यूरीफायर सर्विस के लिए घर पर आते हैं?",
        aHi: "हाँ — इंस्टॉलेशन और फिल्टर सर्विस पूरे भिलाई और दुर्ग में आपके घर पर होती है। बुक करने के लिए 91099 18786 पर कॉल या 96916 53698 पर WhatsApp करें।",
      },
    ],
    relatedBlogSlugs: ["ro-uv-uf-water-purifier-guide"],
    relatedCategoryId: "water-purifiers",
  },
  {
    slug: "geyser-installation-bhilai",
    serviceId: "geyser-installation",
    h1En: "Geyser Installation & Service in Bhilai",
    h1Hi: "भिलाई में गीज़र इंस्टॉलेशन और सर्विस",
    metaTitle: "Geyser Installation in Bhilai | Water Heater Fitting & Service",
    metaDescription:
      "Geyser installation and service in Bhilai — wall mounting, connections, safety valve checks and tank flushing for hard-water scaling, for storage and instant water heaters. Call 91099 18786.",
    keywords: [
      "geyser installation Bhilai",
      "geyser service Bhilai",
      "water heater repair Bhilai",
      "geyser fitting Bhilai",
      "geyser tank cleaning Bhilai",
      "गीज़र इंस्टॉलेशन भिलाई",
    ],
    introEn: [
      "A geyser is one appliance where correct installation matters as much as the machine — wall anchoring, water connections, and above all the safety valve. We install storage and instant water heaters at homes across Bhilai and Durg, and service them when hard-water scaling starts eating into heating performance.",
      "If your geyser takes longer to heat than it used to, trips the MCB, or drips from the safety valve, book a visit — flushing the tank and checking the element usually restores it before winter arrives.",
    ],
    introHi: [
      "गीज़र एक ऐसा अप्लायंस है जिसमें सही इंस्टॉलेशन मशीन जितना ही मायने रखता है — दीवार पर मजबूत फिटिंग, पानी के कनेक्शन, और सबसे ऊपर सेफ्टी वाल्व। हम पूरे भिलाई और दुर्ग में स्टोरेज और इंस्टेंट वॉटर हीटर इंस्टॉल करते हैं, और कठोर पानी की परत हीटिंग बिगाड़ने लगे तो सर्विस भी।",
      "अगर गीज़र पहले से ज़्यादा समय ले रहा है, MCB ट्रिप कर रहा है, या सेफ्टी वाल्व से टपक रहा है — विज़िट बुक करें। टैंक की फ्लशिंग और एलिमेंट की जाँच से ठंड आने से पहले ही यह आमतौर पर ठीक हो जाता है।",
    ],
    workEn: [
      "Wall mounting and secure anchoring",
      "Inlet/outlet connection and fittings",
      "Safety valve check and replacement",
      "Tank flushing for hard-water scaling",
      "Heating element and thermostat faults",
      "MCB tripping diagnosis",
      "Shifting and re-installation",
    ],
    workHi: [
      "दीवार पर मजबूत फिटिंग",
      "इनलेट/आउटलेट कनेक्शन और फिटिंग्स",
      "सेफ्टी वाल्व की जाँच और बदलाव",
      "कठोर पानी की परत के लिए टैंक फ्लशिंग",
      "हीटिंग एलिमेंट और थर्मोस्टेट की खराबी",
      "MCB ट्रिपिंग की जाँच",
      "शिफ्टिंग और दोबारा इंस्टॉलेशन",
    ],
    faqs: [
      {
        qEn: "Do you install geysers bought from other shops or online?",
        aEn: "Yes — we install geysers bought anywhere, including online. Call with the model details and we'll bring the right fittings.",
        qHi: "क्या आप ऑनलाइन या दूसरी दुकान से खरीदा गीज़र लगाते हैं?",
        aHi: "हाँ — कहीं से भी खरीदा गीज़र, ऑनलाइन समेत, हम इंस्टॉल करते हैं। मॉडल की जानकारी के साथ कॉल करें, हम सही फिटिंग्स लेकर आएँगे।",
      },
      {
        qEn: "Why does my geyser heat slowly now?",
        aEn: "In this region it's usually hard-water scale on the element and tank. Flushing the tank and descaling or replacing the element restores heating speed and cuts the electricity bill.",
        qHi: "मेरा गीज़र अब धीरे गर्म क्यों करता है?",
        aHi: "इस इलाके में इसकी वजह आमतौर पर एलिमेंट और टैंक पर जमी कठोर पानी की परत होती है। टैंक फ्लशिंग और एलिमेंट की सफाई या बदलाव से हीटिंग स्पीड लौट आती है और बिजली का बिल भी घटता है।",
      },
      {
        qEn: "Which areas do you cover for geyser installation?",
        aEn: "All of Bhilai — Junwani, Smriti Nagar, Nehru Nagar, Supela, Kohka, Risali — and Durg. Call 91099 18786 to schedule.",
        qHi: "गीज़र इंस्टॉलेशन के लिए किन इलाकों में आते हैं?",
        aHi: "पूरा भिलाई — जुनवानी, स्मृति नगर, नेहरू नगर, सुपेला, कोहका, रिसाली — और दुर्ग। समय तय करने के लिए 91099 18786 पर कॉल करें।",
      },
    ],
    relatedBlogSlugs: ["instant-vs-storage-geyser"],
    relatedCategoryId: "water-heaters",
  },
  {
    slug: "fan-repair-bhilai",
    serviceId: "fan-repair",
    h1En: "Fan Repair & Service in Bhilai",
    h1Hi: "भिलाई में पंखा रिपेयर और सर्विस",
    metaTitle: "Fan Repair in Bhilai | Ceiling, Table & Exhaust Fan Service",
    metaDescription:
      "Ceiling, pedestal, table and exhaust fan repair in Bhilai — winding, bearing, capacitor and regulator work, blade balancing and full servicing. Junwani Road shop. Call 91099 18786.",
    keywords: [
      "fan repair Bhilai",
      "ceiling fan repair Bhilai",
      "fan winding Bhilai",
      "fan capacitor replacement Bhilai",
      "cooler fan repair Bhilai",
      "exhaust fan repair Bhilai",
      "पंखा रिपेयर भिलाई",
    ],
    introEn: [
      "A slow fan is usually a tired capacitor; a humming fan that won't spin is often the winding or bearings. Both are routine jobs at our Junwani Road shop, where we repair ceiling, pedestal, table and exhaust fans of every brand — and cooler fans and pumps in season.",
      "Bring smaller fans to the counter, or book a visit for ceiling fans across Bhilai and Durg. A Chhattisgarh summer is a bad time to discover a dead fan — a pre-season service catches worn bearings and capacitors early.",
    ],
    introHi: [
      "धीमा पंखा आमतौर पर थके कैपेसिटर की निशानी है; भिनभिनाता लेकिन न घूमता पंखा अक्सर वाइंडिंग या बेयरिंग की। दोनों जुनवानी रोड की हमारी दुकान के रोज़मर्रा के काम हैं — हम हर ब्रांड के सीलिंग, पेडेस्टल, टेबल और एग्ज़ॉस्ट फैन रिपेयर करते हैं, और सीज़न में कूलर के पंखे और पंप भी।",
      "छोटे पंखे काउंटर पर लाएँ, सीलिंग फैन के लिए भिलाई-दुर्ग में विज़िट बुक करें। छत्तीसगढ़ की गर्मी में पंखा खराब मिलना बुरा अनुभव है — सीज़न से पहले सर्विस कराने पर घिसे बेयरिंग और कैपेसिटर पहले ही पकड़ में आ जाते हैं।",
    ],
    workEn: [
      "Motor winding repair",
      "Bearing replacement",
      "Capacitor replacement (slow fan fix)",
      "Speed regulator repair",
      "Blade balancing and wobble fix",
      "Exhaust fan cleaning and repair",
      "Cooler fan and pump repair",
      "Pre-summer full servicing",
    ],
    workHi: [
      "मोटर वाइंडिंग रिपेयर",
      "बेयरिंग बदलना",
      "कैपेसिटर बदलना (धीमे पंखे का इलाज)",
      "स्पीड रेगुलेटर रिपेयर",
      "ब्लेड बैलेंसिंग और डगमगाहट ठीक करना",
      "एग्ज़ॉस्ट फैन की सफाई और रिपेयर",
      "कूलर फैन और पंप रिपेयर",
      "गर्मी से पहले पूरी सर्विसिंग",
    ],
    faqs: [
      {
        qEn: "My ceiling fan runs slow even at full speed — what's wrong?",
        aEn: "Nine times out of ten it's the capacitor, a small and inexpensive part. If a new capacitor doesn't fix it, the winding or bearings need attention — we check both.",
        qHi: "फुल स्पीड पर भी सीलिंग फैन धीरे चलता है — क्या खराबी है?",
        aHi: "दस में से नौ बार वजह कैपेसिटर होता है — छोटा और सस्ता पार्ट। नया कैपेसिटर लगाने पर भी ठीक न हो तो वाइंडिंग या बेयरिंग देखनी पड़ती है — हम दोनों जाँचते हैं।",
      },
      {
        qEn: "Do you repair coolers too?",
        aEn: "Yes — cooler fan motors, pumps and regulators are repaired in season, and we sell cooler parts and new coolers at the shop.",
        qHi: "क्या आप कूलर भी रिपेयर करते हैं?",
        aHi: "हाँ — सीज़न में कूलर की फैन मोटर, पंप और रेगुलेटर रिपेयर होते हैं, और दुकान पर कूलर के पार्ट्स और नए कूलर भी मिलते हैं।",
      },
      {
        qEn: "Can someone come home for ceiling fan repair?",
        aEn: "Yes — home visits for ceiling and exhaust fans are available across Bhilai and Durg. Call 91099 18786 to book a time.",
        qHi: "क्या सीलिंग फैन रिपेयर के लिए कोई घर आ सकता है?",
        aHi: "हाँ — सीलिंग और एग्ज़ॉस्ट फैन के लिए होम विज़िट पूरे भिलाई और दुर्ग में उपलब्ध है। समय बुक करने के लिए 91099 18786 पर कॉल करें।",
      },
    ],
    relatedBlogSlugs: ["fans-and-coolers-for-chhattisgarh-summer"],
    relatedCategoryId: "fans-coolers",
  },
]

export function getServicePage(slug: string): ServiceLandingPage | undefined {
  return servicePages.find((p) => p.slug === slug)
}

/** Landing page for a given services.ts entry, if one exists — used to link service cards. */
export function getServicePageByServiceId(serviceId: string): ServiceLandingPage | undefined {
  return servicePages.find((p) => p.serviceId === serviceId)
}
