// Blog content for KGN Home Appliance & Services.
//
// To add a post: copy one of the blocks below, give it a new `slug`, set
// `publishedAt` to the day you publish it, and write the body in `blocks`.
// The post then appears on /blog, in sitemap.xml and in llms.txt automatically.
//
// Every post is bilingual: `en` is shown in English mode, `hi` in Hindi mode.
// Only write about what the shop actually sells and services.

import type { CategoryId } from "@/config/products"

export type BlogBlock =
  | { type: "p"; en: string; hi: string }
  | { type: "h2"; en: string; hi: string }
  | { type: "h3"; en: string; hi: string }
  | { type: "ul"; en: string[]; hi: string[] }
  | { type: "ol"; en: string[]; hi: string[] }
  | { type: "callout"; en: string; hi: string }

export interface BlogPost {
  slug: string
  titleEn: string
  titleHi: string
  /** Used as the <title> tag — keep under ~60 characters. */
  metaTitleEn: string
  /** Used as the meta description — keep between 120 and 160 characters. */
  metaDescriptionEn: string
  excerptEn: string
  excerptHi: string
  topicEn: string
  topicHi: string
  keywords: string[]
  /** ISO date (YYYY-MM-DD) — drives Article schema and the sitemap. */
  publishedAt: string
  updatedAt: string
  readMinutes: number
  /** Product category this post should send readers to. */
  relatedCategory?: CategoryId
  blocks: BlogBlock[]
  faqs?: { qEn: string; aEn: string; qHi: string; aHi: string }[]
}

const SHOP = "KGN Home Appliance & Services"

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-a-mixer-grinder",
    titleEn: "How to Choose a Mixer Grinder for an Indian Kitchen",
    titleHi: "भारतीय किचन के लिए मिक्सर ग्राइंडर कैसे चुनें",
    metaTitleEn: "How to Choose a Mixer Grinder (Buying Guide)",
    metaDescriptionEn:
      "Wattage, jars, motor and warranty explained — a practical mixer grinder buying guide from an appliance shop on Junwani Road, Bhilai. Call for today's price.",
    excerptEn:
      "500W, 750W or 900W? Which jars actually get used? A plain-language buying guide based on what customers in Bhilai ask us across the counter every day.",
    excerptHi:
      "500W, 750W या 900W? कौन से जार असल में काम आते हैं? भिलाई के ग्राहक रोज़ जो सवाल पूछते हैं, उन्हीं के आधार पर आसान भाषा में गाइड।",
    topicEn: "Buying Guide",
    topicHi: "खरीद गाइड",
    keywords: [
      "how to choose a mixer grinder",
      "best mixer grinder for Indian kitchen",
      "mixer grinder wattage guide",
      "mixer grinder shop Bhilai",
      "mixer grinder price Bhilai",
      "750W vs 500W mixer grinder",
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
    readMinutes: 6,
    relatedCategory: "mixer-grinders",
    blocks: [
      {
        type: "p",
        en: "A mixer grinder is the appliance an Indian kitchen uses most — chutney in the morning, masala in the afternoon, batter at night. Spend five minutes understanding four things (wattage, jars, motor build and warranty) and you will pick a machine that lasts years instead of months.",
        hi: "मिक्सर ग्राइंडर वह अप्लायंस है जिसका भारतीय किचन में सबसे ज़्यादा उपयोग होता है — सुबह चटनी, दोपहर में मसाला, रात में बैटर। बस चार बातें (वॉटेज, जार, मोटर की बनावट और वारंटी) समझ लीजिए, फिर आप ऐसी मशीन चुनेंगे जो महीनों नहीं, सालों चले।",
      },
      { type: "h2", en: "1. Pick the wattage by what you grind", hi: "1. वॉटेज उसी हिसाब से चुनें जो आप पीसते हैं" },
      {
        type: "p",
        en: "Wattage is the single number people compare, but higher is not automatically better — it only matters relative to the work you give the machine.",
        hi: "लोग सबसे ज़्यादा वॉटेज की तुलना करते हैं, लेकिन ज़्यादा वॉटेज अपने आप बेहतर नहीं होता — यह इस पर निर्भर करता है कि आप मशीन से कितना काम लेते हैं।",
      },
      {
        type: "ul",
        en: [
          "500W – 550W: right for a couple or a small family. Chutney, soft masala, milkshakes, occasional batter.",
          "750W: the safest all-round choice for a family of four to six. Handles dry spices like turmeric and coriander, idli/dosa batter, and wet grinding without straining.",
          "900W and above: worth it if you grind large batches daily, run a tiffin service, or regularly grind hard dry spices and grain.",
        ],
        hi: [
          "500W – 550W: कपल या छोटे परिवार के लिए सही। चटनी, नरम मसाला, मिल्कशेक और कभी-कभार बैटर।",
          "750W: चार से छह लोगों के परिवार के लिए सबसे सुरक्षित ऑल-राउंड विकल्प। हल्दी-धनिया जैसे सूखे मसाले, इडली/डोसा बैटर और गीली पिसाई बिना ज़ोर लगाए कर लेता है।",
          "900W और उससे ऊपर: अगर आप रोज़ बड़ी मात्रा में पीसते हैं, टिफिन सर्विस चलाते हैं, या नियमित रूप से सख्त सूखे मसाले और अनाज पीसते हैं तो लेना सही है।",
        ],
      },
      {
        type: "callout",
        en: "Rule of thumb: for most homes in Bhilai, 750W is the sweet spot. Buying 500W and then grinding turmeric in it every week is the fastest way to burn a motor.",
        hi: "आसान नियम: भिलाई के ज़्यादातर घरों के लिए 750W सबसे सही है। 500W लेकर हर हफ्ते उसमें हल्दी पीसना — मोटर जलाने का सबसे तेज़ तरीका यही है।",
      },
      { type: "h2", en: "2. Count the jars you will actually use", hi: "2. वही जार गिनें जो आप असल में उपयोग करेंगे" },
      {
        type: "p",
        en: "Most models ship with three or four jars. A fourth jar looks like better value on the box, but an unused jar is just cupboard space. Check what each one is for:",
        hi: "ज़्यादातर मॉडल तीन या चार जार के साथ आते हैं। डिब्बे पर चौथा जार ज़्यादा फ़ायदे जैसा लगता है, लेकिन जो जार उपयोग न हो वह सिर्फ़ अलमारी की जगह घेरता है। देखिए हर जार किस काम का है:",
      },
      {
        type: "ul",
        en: [
          "Wet jar (1.2L – 1.5L): batter, gravies, large chutney batches.",
          "Dry jar (0.8L – 1L): turmeric, coriander, rice flour, coffee.",
          "Chutney jar (0.3L – 0.4L): small quantities — the jar that gets used daily.",
          "Juicer jar: useful only if you actually juice. Otherwise skip it and save money.",
        ],
        hi: [
          "वेट जार (1.2L – 1.5L): बैटर, ग्रेवी, बड़ी मात्रा में चटनी।",
          "ड्राई जार (0.8L – 1L): हल्दी, धनिया, चावल का आटा, कॉफ़ी।",
          "चटनी जार (0.3L – 0.4L): थोड़ी मात्रा के लिए — यही जार रोज़ काम आता है।",
          "जूसर जार: तभी उपयोगी है जब आप वाकई जूस निकालते हों। वरना छोड़िए और पैसे बचाइए।",
        ],
      },
      {
        type: "p",
        en: "Also ask one question before you pay: are replacement jars and blades available locally? A jar that has to be ordered from another city means weeks without your mixer. We keep genuine jars and blades in stock for the brands we sell.",
        hi: "पैसे देने से पहले एक सवाल ज़रूर पूछें: क्या बदलने वाले जार और ब्लेड यहीं मिल जाते हैं? जिस जार को दूसरे शहर से मंगाना पड़े, उसका मतलब है हफ्तों तक मिक्सर बंद। हम जो ब्रांड बेचते हैं, उनके असली जार और ब्लेड दुकान पर रखते हैं।",
      },
      { type: "h2", en: "3. Look at the motor and the body, not the colour", hi: "3. रंग नहीं, मोटर और बॉडी देखिए" },
      {
        type: "ul",
        en: [
          "Overload protector: a small cut-off that stops the motor before it burns. Non-negotiable.",
          "Ventilation slots: a motor that breathes runs cooler and lasts longer.",
          "Jar coupling: the rubber/plastic joint between jar and base wears out first. Confirm it is a replaceable part.",
          "Stable base with grip feet: heavy grinding makes light machines walk across the platform.",
          "Stainless steel blades: check they are riveted firmly, not loose in the jar.",
        ],
        hi: [
          "ओवरलोड प्रोटेक्टर: छोटा सा कट-ऑफ जो मोटर जलने से पहले उसे बंद कर देता है। यह होना ही चाहिए।",
          "वेंटिलेशन स्लॉट: जिस मोटर को हवा मिलती है वह ठंडी रहती है और ज़्यादा चलती है।",
          "जार कपलिंग: जार और बेस के बीच का रबर/प्लास्टिक जोड़ सबसे पहले घिसता है। पक्का करें कि यह बदला जा सकता है।",
          "मज़बूत बेस और ग्रिप वाले पैर: भारी पिसाई में हल्की मशीन प्लेटफॉर्म पर सरकने लगती है।",
          "स्टेनलेस स्टील ब्लेड: देखें कि वे जार में ढीले न होकर मज़बूती से कसे हों।",
        ],
      },
      { type: "h2", en: "4. Warranty is only as good as the service behind it", hi: "4. वारंटी उतनी ही अच्छी है जितनी उसके पीछे की सर्विस" },
      {
        type: "p",
        en: `Every branded mixer grinder carries a manufacturer warranty, usually one year on the product and longer on the motor. What matters more is who honours it. Buying from a local shop that also repairs mixer grinders means the same counter handles your purchase, your jar replacement and your motor problem three years later. That is exactly why ${SHOP} on Junwani Road stocks Bajaj, Havells, Philips, Preethi, Sujata, Butterfly, Maharaja Whiteline, Panasonic and Inalsa, and services them in-house.`,
        hi: `हर ब्रांडेड मिक्सर ग्राइंडर पर निर्माता वारंटी होती है — आमतौर पर प्रोडक्ट पर एक साल और मोटर पर उससे ज़्यादा। ज़्यादा अहम यह है कि उसे निभाता कौन है। ऐसी लोकल दुकान से खरीदने पर जो मिक्सर ग्राइंडर की रिपेयर भी करती है, आपकी खरीद, जार बदलना और तीन साल बाद की मोटर की दिक्कत — सब एक ही काउंटर पर हल होते हैं। इसीलिए जुनवानी रोड स्थित KGN होम अप्लायंस एंड सर्विसेज पर बजाज, हैवेल्स, फिलिप्स, प्रीति, सुजाता, बटरफ्लाई, महाराजा व्हाइटलाइन, पैनासोनिक और इनाल्सा उपलब्ध हैं, और उनकी सर्विस भी यहीं होती है।`,
      },
      { type: "h2", en: "5. Habits that double the life of your mixer", hi: "5. वे आदतें जो मिक्सर की उम्र दोगुनी कर देती हैं" },
      {
        type: "ol",
        en: [
          "Run the machine in bursts of 30–40 seconds, not one long stretch.",
          "Give the motor a two-minute rest between heavy jars.",
          "Never fill a jar past two-thirds — the blade needs room to throw the contents.",
          "Add a splash of water when grinding hard spices; a fully dry load strains the motor.",
          "Wash the jar, dry the coupling, and never let water sit around the base.",
        ],
        hi: [
          "मशीन को एक बार में लंबे समय तक नहीं, 30–40 सेकंड के अंतराल में चलाएं।",
          "भारी जार के बीच मोटर को दो मिनट आराम दें।",
          "जार को दो-तिहाई से ज़्यादा कभी न भरें — ब्लेड को सामान घुमाने के लिए जगह चाहिए।",
          "सख्त मसाले पीसते समय थोड़ा पानी डालें; पूरी तरह सूखा लोड मोटर पर ज़ोर डालता है।",
          "जार धोएं, कपलिंग सुखाएं, और बेस के आसपास पानी कभी जमा न होने दें।",
        ],
      },
      {
        type: "p",
        en: "Still deciding between two models? Bring your usage — how many people, how much dry grinding — to the shop and we will match you to the right wattage, then quote today's best price on the spot.",
        hi: "अभी भी दो मॉडलों के बीच उलझन है? अपनी ज़रूरत बताइए — कितने लोग, कितनी सूखी पिसाई — दुकान पर आइए, हम सही वॉटेज बताएंगे और वहीं आज की बेस्ट कीमत देंगे।",
      },
    ],
    faqs: [
      {
        qEn: "Is 750W enough for grinding dry masala at home?",
        aEn: "Yes. For a normal household, a 750W mixer grinder handles turmeric, coriander and other dry spices comfortably when you grind in short bursts and let the motor rest between jars.",
        qHi: "क्या घर पर सूखा मसाला पीसने के लिए 750W काफी है?",
        aHi: "हाँ। सामान्य घर के लिए 750W मिक्सर ग्राइंडर हल्दी, धनिया और दूसरे सूखे मसाले आराम से पीस लेता है, बशर्ते आप थोड़े-थोड़े अंतराल में पीसें और बीच में मोटर को आराम दें।",
      },
      {
        qEn: "Can I buy just a jar or blade instead of a new mixer?",
        aEn: "Usually yes. Genuine jars, blades and couplings for the brands we sell are available in-store, so a broken jar does not mean buying a whole new machine.",
        qHi: "क्या मैं नया मिक्सर लेने के बजाय सिर्फ जार या ब्लेड खरीद सकता हूँ?",
        aHi: "आमतौर पर हाँ। हम जो ब्रांड बेचते हैं उनके असली जार, ब्लेड और कपलिंग दुकान पर उपलब्ध हैं, इसलिए जार टूटने का मतलब पूरी नई मशीन खरीदना नहीं है।",
      },
    ],
  },

  {
    slug: "mixer-grinder-problems-and-repair",
    titleEn: "7 Common Mixer Grinder Problems (and When Repair Is Worth It)",
    titleHi: "मिक्सर ग्राइंडर की 7 आम दिक्कतें (और कब रिपेयर कराना सही है)",
    metaTitleEn: "7 Common Mixer Grinder Problems & Repairs",
    metaDescriptionEn:
      "Mixer grinder not starting, leaking or smelling of burning? What each symptom means, what it usually costs to fix, and when to replace instead. Bhilai doorstep service.",
    excerptEn:
      "Burning smell, leaking jar, blade that spins but does not grind — here is what each symptom actually means, and the honest answer on repair versus replacement.",
    excerptHi:
      "जलने की गंध, लीक होता जार, घूमता लेकिन पीसता नहीं ब्लेड — हर लक्षण का असली मतलब क्या है, और रिपेयर बनाम नया लेने का सीधा जवाब।",
    topicEn: "Repair & Care",
    topicHi: "रिपेयर और देखभाल",
    keywords: [
      "mixer grinder repair",
      "mixer grinder not working",
      "mixer grinder repair Bhilai",
      "mixer grinder burning smell",
      "mixer grinder jar leaking",
      "mixer grinder service near me",
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
    readMinutes: 6,
    relatedCategory: "mixer-grinders",
    blocks: [
      {
        type: "p",
        en: "Most mixer grinders that reach our counter are not dead — they have one worn part. Knowing which symptom points to which part saves you money and tells you quickly whether a repair is worth it.",
        hi: "हमारे काउंटर पर आने वाले ज़्यादातर मिक्सर ग्राइंडर खराब नहीं होते — उनका सिर्फ एक पुर्ज़ा घिसा होता है। कौन सा लक्षण किस पुर्ज़े की तरफ इशारा करता है, यह जान लेने से पैसे भी बचते हैं और तुरंत पता चल जाता है कि रिपेयर कराना सही है या नहीं।",
      },
      { type: "h2", en: "1. The mixer does not start at all", hi: "1. मिक्सर बिल्कुल चालू नहीं होता" },
      {
        type: "p",
        en: "Check the easy things first: the socket, the plug pins, and whether the jar is seated properly — most machines have a safety interlock that refuses to run if the jar is not locked in. If all three are fine, the usual culprits are a broken switch, a loose internal wire, or worn carbon brushes. All three are inexpensive, standard repairs.",
        hi: "पहले आसान चीज़ें देखें: सॉकेट, प्लग के पिन, और यह कि जार ठीक से बैठा है या नहीं — ज़्यादातर मशीनों में सेफ्टी इंटरलॉक होता है जो जार लॉक न होने पर चलने ही नहीं देता। ये तीनों ठीक हैं तो आमतौर पर वजह होती है टूटा स्विच, अंदर का ढीला तार, या घिसे कार्बन ब्रश। तीनों सस्ती और सामान्य रिपेयर हैं।",
      },
      { type: "h2", en: "2. Burning smell while grinding", hi: "2. पीसते समय जलने की गंध" },
      {
        type: "callout",
        en: "Switch it off immediately and unplug it. A burning smell is the motor winding overheating — running it for another minute can turn a small repair into a new machine.",
        hi: "तुरंत बंद करें और प्लग निकालें। जलने की गंध का मतलब है मोटर की वाइंडिंग ज़्यादा गर्म हो रही है — एक मिनट और चलाना छोटी रिपेयर को नई मशीन में बदल सकता है।",
      },
      {
        type: "p",
        en: "The usual causes are overfilling the jar, grinding hard dry spices without a break, or worn brushes making the motor work harder. Caught early, a brush change or winding service fixes it.",
        hi: "आम वजहें हैं — जार ज़रूरत से ज़्यादा भरना, बिना रुके सख्त सूखे मसाले पीसना, या घिसे ब्रश जिनकी वजह से मोटर पर ज़्यादा ज़ोर पड़ता है। समय रहते पकड़ लें तो ब्रश बदलने या वाइंडिंग सर्विस से काम बन जाता है।",
      },
      { type: "h2", en: "3. Jar leaks from the bottom", hi: "3. जार नीचे से लीक होता है" },
      {
        type: "p",
        en: "This is a worn blade gasket or a loosened blade assembly, not a motor problem. It is one of the cheapest repairs there is — and one you should not delay, because liquid seeping into the coupling reaches the motor next.",
        hi: "यह घिसे ब्लेड गैस्केट या ढीली ब्लेड असेंबली की वजह से होता है, मोटर की दिक्कत नहीं। यह सबसे सस्ती रिपेयर में से एक है — और इसे टालना नहीं चाहिए, क्योंकि कपलिंग में रिसता तरल अगले चरण में मोटर तक पहुँचता है।",
      },
      { type: "h2", en: "4. Motor runs but the blade does not turn", hi: "4. मोटर चलती है पर ब्लेड नहीं घूमता" },
      {
        type: "p",
        en: "The coupler — the small rubber or plastic connector between the motor shaft and the jar — has stripped. It is designed to wear out first so that the motor survives. A five-minute replacement.",
        hi: "कपलर — मोटर शाफ्ट और जार के बीच का छोटा रबर या प्लास्टिक जोड़ — घिस गया है। इसे बनाया ही इसलिए जाता है कि यह पहले घिसे और मोटर बची रहे। पाँच मिनट में बदल जाता है।",
      },
      { type: "h2", en: "5. Loud rattling or grinding noise", hi: "5. तेज़ खड़खड़ाहट या घर्षण की आवाज़" },
      {
        type: "p",
        en: "Usually a loose blade nut, a chipped blade, or a dry bearing. Never keep running a mixer that has turned noisy — a chipped blade can crack the jar base.",
        hi: "आमतौर पर ढीला ब्लेड नट, टूटा ब्लेड, या सूखा बेयरिंग। आवाज़ करने लगे मिक्सर को लगातार चलाते न रहें — टूटा ब्लेड जार का बेस चटका सकता है।",
      },
      { type: "h2", en: "6. Speed knob works only on one setting", hi: "6. स्पीड नॉब सिर्फ एक सेटिंग पर काम करता है" },
      {
        type: "p",
        en: "A worn speed regulator or a burnt contact inside the switch assembly. Straightforward to replace, and worth doing — running everything on high speed shortens motor life.",
        hi: "घिसा स्पीड रेगुलेटर या स्विच असेंबली के अंदर जला हुआ कॉन्टैक्ट। बदलना आसान है और कराना चाहिए — सब कुछ तेज़ स्पीड पर चलाने से मोटर की उम्र घटती है।",
      },
      { type: "h2", en: "7. Machine trips the house MCB", hi: "7. मशीन चलाते ही घर का MCB गिर जाता है" },
      {
        type: "p",
        en: "This points to a short in the winding or damaged insulation — the one symptom on this list you should never troubleshoot yourself. Unplug it and bring it in.",
        hi: "यह वाइंडिंग में शॉर्ट या खराब इंसुलेशन की तरफ इशारा करता है — इस सूची में यही एक लक्षण है जिसे खुद ठीक करने की कोशिश कभी न करें। प्लग निकालें और दुकान पर लाएँ।",
      },
      { type: "h2", en: "Repair or replace? The honest test", hi: "रिपेयर या नया? सीधा पैमाना" },
      {
        type: "ul",
        en: [
          "Repair: coupler, gasket, jar, blade, switch, speed knob, carbon brushes — all normal wear parts on an otherwise healthy machine.",
          "Think hard: a full motor rewind on a machine that is already six or seven years old, especially a low-wattage one you have outgrown.",
          "Replace: cracked body, repeated winding failures, or a model whose jars and spares are no longer made.",
        ],
        hi: [
          "रिपेयर कराएँ: कपलर, गैस्केट, जार, ब्लेड, स्विच, स्पीड नॉब, कार्बन ब्रश — ठीक-ठाक मशीन के ये सब सामान्य घिसने वाले पुर्ज़े हैं।",
          "सोच-समझकर तय करें: छह-सात साल पुरानी मशीन की पूरी मोटर वाइंडिंग, खासकर कम वॉटेज वाली मशीन जो अब आपकी ज़रूरत से छोटी पड़ रही हो।",
          "नया लें: बॉडी चटक गई हो, बार-बार वाइंडिंग खराब हो रही हो, या उस मॉडल के जार और स्पेयर अब बनते ही न हों।",
        ],
      },
      {
        type: "p",
        en: `We repair and service mixer grinders — including jars and blades — at ${SHOP}, Junwani Road, Bhilai, with doorstep service across Bhilai and Durg. Send us the symptom on WhatsApp and we will tell you whether it is worth bringing in.`,
        hi: `हम KGN होम अप्लायंस एंड सर्विसेज, जुनवानी रोड, भिलाई पर मिक्सर ग्राइंडर की रिपेयर और सर्विस करते हैं — जार और ब्लेड सहित — और भिलाई व दुर्ग में घर पर सर्विस भी देते हैं। WhatsApp पर दिक्कत बताइए, हम बता देंगे कि लाना फायदेमंद है या नहीं।`,
      },
    ],
    faqs: [
      {
        qEn: "Do you repair mixer grinders of brands not bought from your shop?",
        aEn: "Yes. We service mixer grinders of all major brands regardless of where they were purchased, and we stock common spare parts such as couplers, gaskets, blades and jars.",
        qHi: "क्या आप उन ब्रांड के मिक्सर ग्राइंडर भी रिपेयर करते हैं जो आपकी दुकान से नहीं लिए?",
        aHi: "हाँ। हम सभी बड़े ब्रांड के मिक्सर ग्राइंडर की सर्विस करते हैं, चाहे वे कहीं से भी खरीदे गए हों, और कपलर, गैस्केट, ब्लेड व जार जैसे आम स्पेयर पार्ट्स दुकान पर रखते हैं।",
      },
      {
        qEn: "Is doorstep repair available in Bhilai?",
        aEn: "Yes, doorstep service is available across Bhilai and Durg. Call 91099 18786 or send the problem on WhatsApp to book a visit.",
        qHi: "क्या भिलाई में घर पर रिपेयर की सुविधा है?",
        aHi: "हाँ, भिलाई और दुर्ग में घर पर सर्विस उपलब्ध है। विज़िट बुक करने के लिए 91099 18786 पर कॉल करें या WhatsApp पर दिक्कत भेजें।",
      },
    ],
  },

  {
    slug: "glass-top-vs-stainless-steel-gas-stove",
    titleEn: "Glass Top vs Stainless Steel Gas Stove: Which Should You Buy?",
    titleHi: "ग्लास टॉप बनाम स्टेनलेस स्टील गैस चूल्हा: कौन सा लें?",
    metaTitleEn: "Glass Top vs Steel Gas Stove: Which to Buy",
    metaDescriptionEn:
      "Toughened glass or stainless steel gas stove? Burner count, brass vs alloy burners, ISI marking and cleaning compared — from a Bhilai gas stove shop.",
    excerptEn:
      "Two burners or four? Brass or alloy? Toughened glass or steel? A side-by-side comparison that answers the questions people actually ask before buying a gas stove.",
    excerptHi:
      "दो बर्नर या चार? पीतल या मिश्र धातु? टफन्ड ग्लास या स्टील? गैस चूल्हा खरीदने से पहले लोग जो सवाल पूछते हैं, उन्हीं की सीधी तुलना।",
    topicEn: "Buying Guide",
    topicHi: "खरीद गाइड",
    keywords: [
      "glass top vs stainless steel gas stove",
      "gas stove buying guide",
      "gas stove shop Bhilai",
      "3 burner gas stove",
      "brass burner gas stove",
      "ISI marked gas stove",
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
    readMinutes: 5,
    relatedCategory: "gas-stoves",
    blocks: [
      {
        type: "p",
        en: "A gas stove is a ten-year purchase in most Indian homes, so the choice is worth ten minutes of thought. Three decisions matter: the top material, the burner count, and the burner metal. Everything else is finish.",
        hi: "भारतीय घरों में गैस चूल्हा दस साल के लिए खरीदा जाता है, इसलिए दस मिनट सोचना बनता है। तीन बातें अहम हैं: टॉप का मटीरियल, बर्नर की संख्या, और बर्नर की धातु। बाकी सब सिर्फ फिनिश है।",
      },
      { type: "h2", en: "Toughened glass top", hi: "टफन्ड ग्लास टॉप" },
      {
        type: "ul",
        en: [
          "Wipes clean in seconds — spills sit on the surface instead of running into seams.",
          "Looks better for longer in a modular kitchen; no water stains or scratch marks around the burners.",
          "Toughened glass is heat-resistant, but it is still glass: a heavy steel kadai dropped on the edge can crack it.",
          "Slightly higher price than a comparable steel model.",
        ],
        hi: [
          "सेकंडों में साफ हो जाता है — गिरा हुआ सामान जोड़ों में जाने के बजाय ऊपर ही रहता है।",
          "मॉड्यूलर किचन में लंबे समय तक अच्छा दिखता है; बर्नर के आसपास पानी के दाग या खरोंच नहीं पड़ते।",
          "टफन्ड ग्लास गर्मी सहता है, लेकिन है तो काँच ही: किनारे पर भारी स्टील की कढ़ाई गिरने से चटक सकता है।",
          "उसी स्तर के स्टील मॉडल से कीमत थोड़ी ज़्यादा।",
        ],
      },
      { type: "h2", en: "Stainless steel top", hi: "स्टेनलेस स्टील टॉप" },
      {
        type: "ul",
        en: [
          "Takes rough daily use — heavy vessels, hard scrubbing, a busy kitchen.",
          "Cannot crack, so it is the safer choice in a home with children or a joint family kitchen.",
          "Needs more cleaning effort; oil settles around the burner rims and shows water marks.",
          "Generally the value pick at the same burner count.",
        ],
        hi: [
          "रोज़ की सख्त उपयोग सह लेता है — भारी बर्तन, ज़ोर से रगड़ना, व्यस्त किचन।",
          "चटक नहीं सकता, इसलिए बच्चों वाले घर या संयुक्त परिवार के किचन के लिए ज़्यादा सुरक्षित।",
          "साफ करने में ज़्यादा मेहनत; बर्नर के किनारों पर तेल जमता है और पानी के निशान दिखते हैं।",
          "एक ही बर्नर संख्या पर आमतौर पर ज़्यादा किफ़ायती विकल्प।",
        ],
      },
      {
        type: "callout",
        en: "Short answer: glass top if cleaning time and looks matter most; stainless steel if the kitchen is busy, heavy-duty, or shared by many hands.",
        hi: "छोटा जवाब: अगर सफाई का समय और लुक सबसे अहम है तो ग्लास टॉप; अगर किचन व्यस्त, भारी उपयोग वाला या कई लोगों का साझा है तो स्टेनलेस स्टील।",
      },
      { type: "h2", en: "How many burners?", hi: "कितने बर्नर?" },
      {
        type: "ul",
        en: [
          "2 burners: couples, small kitchens, or a second stove for the utility area.",
          "3 burners: the most common choice for a family of four — one large burner for the kadai, two small ones for dal and tea.",
          "4 burners: joint families, frequent guests, or a kitchen platform wide enough to take it without crowding.",
        ],
        hi: [
          "2 बर्नर: कपल, छोटे किचन, या यूटिलिटी एरिया के लिए दूसरा चूल्हा।",
          "3 बर्नर: चार लोगों के परिवार के लिए सबसे आम विकल्प — एक बड़ा बर्नर कढ़ाई के लिए, दो छोटे दाल और चाय के लिए।",
          "4 बर्नर: संयुक्त परिवार, बार-बार मेहमान, या इतना चौड़ा किचन प्लेटफॉर्म जिस पर यह भीड़ न लगे।",
        ],
      },
      {
        type: "p",
        en: "Measure the platform before you decide on four burners. A stove that leaves no space on either side makes cooking harder every single day.",
        hi: "चार बर्नर तय करने से पहले प्लेटफॉर्म नाप लें। जिस चूल्हे के दोनों तरफ जगह ही न बचे, वह रोज़ खाना बनाना मुश्किल कर देता है।",
      },
      { type: "h2", en: "Brass burners are worth the difference", hi: "पीतल के बर्नर की कीमत वसूल है" },
      {
        type: "p",
        en: "Brass burners hold heat evenly and survive years of flame better than aluminium alloy. They cost a little more and need occasional cleaning to keep the ports clear, but they are the part that decides how your stove performs in year five. Look for solid brass, not brass-coated.",
        hi: "पीतल के बर्नर गर्मी को समान रूप से बनाए रखते हैं और एल्युमिनियम मिश्र धातु के मुकाबले सालों की आँच बेहतर झेलते हैं। कीमत थोड़ी ज़्यादा होती है और पोर्ट साफ रखने के लिए बीच-बीच में सफाई चाहिए, लेकिन पाँचवें साल में चूल्हे का प्रदर्शन यही पुर्ज़ा तय करता है। ठोस पीतल देखें, सिर्फ पीतल की परत चढ़ा हुआ नहीं।",
      },
      { type: "h2", en: "Check these before you pay", hi: "पैसे देने से पहले ये देखें" },
      {
        type: "ol",
        en: [
          "ISI mark on the stove — this is a safety certification, not a sticker to ignore.",
          "Pan supports sit flat and take a heavy kadai without wobbling.",
          "Knobs turn smoothly and the flame holds a steady blue at low setting.",
          "The gas pipe, regulator and clamp are ISI-marked too — a good stove on an old cracked pipe is still unsafe.",
          "Ask who installs it. A stove connected without a proper pipeline check is a risk, not a saving.",
        ],
        hi: [
          "चूल्हे पर ISI मार्क — यह सुरक्षा प्रमाणन है, नज़रअंदाज़ करने वाला स्टिकर नहीं।",
          "पैन सपोर्ट सीधे बैठें और भारी कढ़ाई बिना हिले संभालें।",
          "नॉब आसानी से घूमें और धीमी आँच पर लौ स्थिर नीली रहे।",
          "गैस पाइप, रेगुलेटर और क्लैंप भी ISI मार्क हों — पुरानी चटकी पाइप पर अच्छा चूल्हा भी असुरक्षित है।",
          "पूछें कि इंस्टॉल कौन करेगा। बिना पाइपलाइन जाँच के जोड़ा गया चूल्हा बचत नहीं, जोखिम है।",
        ],
      },
      {
        type: "p",
        en: `We stock ISI-marked glass top and stainless steel gas stoves from brands like Prestige and Butterfly at our Junwani Road store, and we handle gas pipeline fitting, burner repair and installation at your home across Bhilai and Durg.`,
        hi: `हमारी जुनवानी रोड की दुकान पर प्रेस्टीज और बटरफ्लाई जैसे ब्रांड्स के ISI मार्क ग्लास टॉप और स्टेनलेस स्टील गैस चूल्हे उपलब्ध हैं, और हम भिलाई व दुर्ग में आपके घर पर गैस पाइपलाइन फिटिंग, बर्नर रिपेयर और इंस्टॉलेशन करते हैं।`,
      },
    ],
    faqs: [
      {
        qEn: "Does a glass top gas stove break easily?",
        aEn: "Toughened glass tops are built to take normal cooking heat and daily use. They crack mainly from impact — a heavy vessel dropped on the edge — rather than from heat.",
        qHi: "क्या ग्लास टॉप गैस चूल्हा जल्दी टूट जाता है?",
        aHi: "टफन्ड ग्लास टॉप सामान्य खाना पकाने की गर्मी और रोज़ के उपयोग के लिए बने होते हैं। वे गर्मी से नहीं, ज़्यादातर टक्कर से चटकते हैं — जैसे किनारे पर भारी बर्तन गिरना।",
      },
      {
        qEn: "Do you install the gas stove at home?",
        aEn: "Yes. Stove installation, demo and gas pipeline fitting are done at your home across Bhilai and Durg. Call 91099 18786 to book a visit.",
        qHi: "क्या आप घर पर गैस चूल्हा इंस्टॉल करते हैं?",
        aHi: "हाँ। चूल्हा इंस्टॉलेशन, डेमो और गैस पाइपलाइन फिटिंग भिलाई व दुर्ग में आपके घर पर की जाती है। विज़िट बुक करने के लिए 91099 18786 पर कॉल करें।",
      },
    ],
  },

  {
    slug: "lpg-gas-pipeline-safety-checklist",
    titleEn: "LPG Gas Pipeline Safety: A Home Checklist You Should Run Every Month",
    titleHi: "LPG गैस पाइपलाइन सुरक्षा: हर महीने करने वाली घरेलू जाँच सूची",
    metaTitleEn: "LPG Gas Pipeline Safety Checklist for Homes",
    metaDescriptionEn:
      "How to check your LPG pipe, regulator and burner for leaks, when to replace the pipe, and what to do if you smell gas. Gas pipeline fitting in Bhilai and Durg.",
    excerptEn:
      "The gas pipe behind your stove has an expiry date, and most homes never check it. A five-minute monthly routine, plus exactly what to do if you smell gas.",
    excerptHi:
      "आपके चूल्हे के पीछे लगी गैस पाइप की एक एक्सपायरी होती है, और ज़्यादातर घरों में उसे कभी देखा ही नहीं जाता। पाँच मिनट की मासिक जाँच, और गैस की गंध आने पर क्या करें।",
    topicEn: "Safety",
    topicHi: "सुरक्षा",
    keywords: [
      "LPG gas pipeline safety",
      "gas pipeline fitting Bhilai",
      "gas leak checking",
      "LPG pipe replacement",
      "gas regulator safety",
      "gas pipeline work Durg",
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
    readMinutes: 6,
    relatedCategory: "kitchen-accessories",
    blocks: [
      {
        type: "p",
        en: "Almost every gas accident at home traces back to a part that was quietly past its life — a hardened pipe, a loose clamp, a regulator nobody had checked in years. None of that is expensive to fix. It just needs someone to look.",
        hi: "घर में होने वाली लगभग हर गैस दुर्घटना की जड़ में कोई ऐसा पुर्ज़ा होता है जिसकी उम्र चुपचाप निकल चुकी थी — सख्त हो चुकी पाइप, ढीला क्लैंप, या सालों से बिना जाँचा रेगुलेटर। इनमें से कुछ भी ठीक कराना महँगा नहीं है। बस किसी को देखना होता है।",
      },
      { type: "h2", en: "The five-minute monthly check", hi: "पाँच मिनट की मासिक जाँच" },
      {
        type: "ol",
        en: [
          "Look at the pipe end to end. Cracks, cuts, stiffness, sticky patches or rat bite marks all mean replace, not repair.",
          "Read the expiry date printed on the ISI-marked pipe. Suraksha-type LPG hoses carry a life of a few years — an out-of-date pipe is unsafe even if it looks fine.",
          "Check both clamps. The pipe should be tight at the regulator end and at the stove nozzle, with no play when you tug gently.",
          "Look at the regulator seal and body. Any cracking, or a knob that turns loosely, means it goes back to the distributor.",
          "Do the soap test: brush thick soapy water on the joints with the cylinder on and the stove off. Bubbles forming anywhere means a leak.",
          "Check the burner flame. A steady blue flame is correct. A yellow, orange or flickering flame usually means blocked burner ports and needs cleaning.",
        ],
        hi: [
          "पाइप को एक सिरे से दूसरे सिरे तक देखें। दरार, कट, सख्ती, चिपचिपे धब्बे या चूहे के काटने के निशान — इनका मतलब है बदलना, रिपेयर नहीं।",
          "ISI मार्क पाइप पर छपी एक्सपायरी तारीख पढ़ें। सुरक्षा-प्रकार की LPG होज़ की उम्र कुछ ही साल होती है — तारीख निकल चुकी पाइप देखने में ठीक लगे तब भी असुरक्षित है।",
          "दोनों क्लैंप जाँचें। पाइप रेगुलेटर वाले सिरे और चूल्हे की नोज़ल — दोनों जगह कसी होनी चाहिए, हल्का खींचने पर ढीलापन न लगे।",
          "रेगुलेटर की सील और बॉडी देखें। कहीं दरार हो या नॉब ढीला घूमे तो उसे डिस्ट्रीब्यूटर को वापस करें।",
          "साबुन वाली जाँच करें: सिलेंडर चालू और चूल्हा बंद रखकर जोड़ों पर गाढ़ा साबुन का पानी लगाएँ। कहीं भी बुलबुले बनें तो लीक है।",
          "बर्नर की लौ देखें। स्थिर नीली लौ सही है। पीली, नारंगी या फड़फड़ाती लौ का मतलब आमतौर पर बर्नर के पोर्ट बंद हैं और सफाई चाहिए।",
        ],
      },
      {
        type: "callout",
        en: "Never test for a leak with a lighter, a matchstick or a burning agarbatti. Soapy water is the only safe test.",
        hi: "लीक की जाँच लाइटर, माचिस या जलती अगरबत्ती से कभी न करें। साबुन का पानी ही एकमात्र सुरक्षित तरीका है।",
      },
      { type: "h2", en: "If you smell gas, in this order", hi: "गैस की गंध आए तो इसी क्रम में करें" },
      {
        type: "ol",
        en: [
          "Do not touch any electrical switch — not the light, not the exhaust fan, not the chimney. A spark is the danger, not the switch position.",
          "Turn the regulator knob off and close the cylinder valve.",
          "Open all windows and doors so the gas disperses.",
          "Put out every flame — stove, lamp, incense.",
          "Leave the kitchen and call your LPG distributor's emergency number from outside the house.",
          "Do not use the connection again until a technician has checked the pipe, regulator and burner.",
        ],
        hi: [
          "किसी भी बिजली के स्विच को न छुएँ — न लाइट, न एग्ज़ॉस्ट फैन, न चिमनी। खतरा चिंगारी से है, स्विच की स्थिति से नहीं।",
          "रेगुलेटर का नॉब बंद करें और सिलेंडर का वाल्व बंद कर दें।",
          "सभी खिड़कियाँ-दरवाज़े खोल दें ताकि गैस निकल जाए।",
          "हर लौ बुझा दें — चूल्हा, दीया, अगरबत्ती।",
          "किचन से बाहर निकलें और घर के बाहर से अपने LPG डिस्ट्रीब्यूटर के इमरजेंसी नंबर पर कॉल करें।",
          "जब तक टेक्नीशियन पाइप, रेगुलेटर और बर्नर जाँच न ले, कनेक्शन दोबारा उपयोग न करें।",
        ],
      },
      { type: "h2", en: "Habits that keep a kitchen safe", hi: "वे आदतें जो किचन को सुरक्षित रखती हैं" },
      {
        type: "ul",
        en: [
          "Close the regulator knob every night and whenever you leave home for a day or more.",
          "Keep the cylinder upright, on the floor, never inside a closed cabinet.",
          "Keep the pipe away from the flame path and from the hot back of the stove.",
          "Do not run the pipe behind or under heavy vessels and storage where it gets pinched.",
          "Keep a window or ventilator that can actually open — LPG is heavier than air and settles low.",
          "Replace the pipe on its expiry date even if it looks new, and use only ISI-marked pipes, clamps and regulators.",
        ],
        hi: [
          "हर रात और जब भी एक दिन या ज़्यादा के लिए घर से बाहर जाएँ, रेगुलेटर का नॉब बंद करें।",
          "सिलेंडर सीधा, ज़मीन पर रखें — बंद कैबिनेट के अंदर कभी नहीं।",
          "पाइप को लौ के रास्ते और चूल्हे के गर्म पिछले हिस्से से दूर रखें।",
          "पाइप को भारी बर्तनों या सामान के पीछे-नीचे से न ले जाएँ जहाँ वह दब जाए।",
          "ऐसी खिड़की या रोशनदान रखें जो सच में खुल सके — LPG हवा से भारी होती है और नीचे जमा होती है।",
          "पाइप को एक्सपायरी तारीख पर बदलें भले वह नई दिखे, और सिर्फ ISI मार्क पाइप, क्लैंप और रेगुलेटर उपयोग करें।",
        ],
      },
      { type: "h2", en: "When to call a technician", hi: "टेक्नीशियन को कब बुलाएँ" },
      {
        type: "p",
        en: `Call for a visit if the soap test bubbles anywhere, the flame will not hold blue after burner cleaning, the regulator hisses, or you are moving the stove to a new position and need the pipeline re-routed. ${SHOP} does gas pipeline fitting and repair at your home across Bhilai and Durg, and keeps ISI-marked pipes, regulators, brass burners, safety valves and lighters in stock. Call 91099 18786.`,
        hi: `विज़िट के लिए कॉल करें अगर साबुन वाली जाँच में कहीं बुलबुले बनें, बर्नर साफ करने के बाद भी लौ नीली न रहे, रेगुलेटर से आवाज़ आए, या आप चूल्हे की जगह बदलवा रहे हों और पाइपलाइन दोबारा लगवानी हो। KGN होम अप्लायंस एंड सर्विसेज भिलाई और दुर्ग में आपके घर पर गैस पाइपलाइन फिटिंग और रिपेयर करता है, और ISI मार्क पाइप, रेगुलेटर, पीतल के बर्नर, सेफ्टी वाल्व व लाइटर दुकान पर रखता है। कॉल करें 91099 18786।`,
      },
    ],
    faqs: [
      {
        qEn: "How often should an LPG gas pipe be replaced?",
        aEn: "Replace it on the expiry date printed on the ISI-marked hose, or immediately if you see cracks, stiffness, cuts or rat bite marks — whichever comes first.",
        qHi: "LPG गैस पाइप कितने समय में बदलनी चाहिए?",
        aHi: "ISI मार्क होज़ पर छपी एक्सपायरी तारीख पर बदलें, या अगर उससे पहले दरार, सख्ती, कट या चूहे के काटने के निशान दिखें तो तुरंत बदलें।",
      },
      {
        qEn: "Do you do gas pipeline fitting at home in Bhilai?",
        aEn: "Yes — gas pipeline fitting and repair work is done at your home across Bhilai and Durg. Call 91099 18786 to book a visit.",
        qHi: "क्या आप भिलाई में घर पर गैस पाइपलाइन फिटिंग करते हैं?",
        aHi: "हाँ — भिलाई और दुर्ग में आपके घर आकर गैस पाइपलाइन की फिटिंग और रिपेयर का काम किया जाता है। विज़िट बुक करने के लिए 91099 18786 पर कॉल करें।",
      },
    ],
  },

  {
    slug: "ro-uv-uf-water-purifier-guide",
    titleEn: "RO, UV or UF: Which Water Purifier Does Your Home Actually Need?",
    titleHi: "RO, UV या UF: आपके घर के लिए असल में कौन सा वॉटर प्यूरीफायर सही है?",
    metaTitleEn: "RO vs UV vs UF Water Purifier: Which to Buy",
    metaDescriptionEn:
      "RO, UV and UF purifiers explained in plain language — which suits borewell water, which suits municipal supply, and what filter servicing really involves.",
    excerptEn:
      "Three letters decide whether you buy the right purifier or the wrong one. Here is what RO, UV and UF each remove, and how your water source should make the choice for you.",
    excerptHi:
      "तीन अक्षर तय करते हैं कि आप सही प्यूरीफायर लेंगे या गलत। RO, UV और UF क्या-क्या हटाते हैं, और आपके पानी का स्रोत यह चुनाव कैसे तय करे।",
    topicEn: "Buying Guide",
    topicHi: "खरीद गाइड",
    keywords: [
      "RO vs UV vs UF water purifier",
      "water purifier buying guide",
      "water purifier Bhilai",
      "RO water purifier price",
      "borewell water purifier",
      "water purifier service Bhilai",
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
    readMinutes: 6,
    relatedCategory: "water-purifiers",
    blocks: [
      {
        type: "p",
        en: "Every purifier showroom throws the same three letters at you — RO, UV, UF — and most buyers end up choosing by price instead of by water. That is backwards. Your water source decides the technology; the budget only decides the model.",
        hi: "हर प्यूरीफायर की दुकान वही तीन अक्षर सामने रखती है — RO, UV, UF — और ज़्यादातर लोग पानी के बजाय कीमत देखकर चुन लेते हैं। यह उल्टा है। तकनीक आपका पानी तय करता है; बजट सिर्फ मॉडल तय करता है।",
      },
      { type: "h2", en: "What each one actually does", hi: "हर तकनीक असल में करती क्या है" },
      {
        type: "ul",
        en: [
          "RO (Reverse Osmosis): pushes water through a fine membrane and removes dissolved salts, hardness and heavy metals. This is the one that lowers TDS. It needs electricity and wastes some water.",
          "UV (Ultraviolet): a lamp kills bacteria and viruses but changes nothing else — dissolved salts, hardness and taste stay exactly as they were. Needs electricity.",
          "UF (Ultra Filtration): a physical membrane that blocks bacteria, cysts and visible dirt. Works without electricity, but does not touch dissolved salts.",
        ],
        hi: [
          "RO (रिवर्स ऑस्मोसिस): पानी को महीन झिल्ली से गुज़ारकर घुले हुए लवण, कठोरता और भारी धातुएँ हटाता है। TDS यही घटाता है। इसे बिजली चाहिए और कुछ पानी बर्बाद होता है।",
          "UV (अल्ट्रावायलेट): लैंप बैक्टीरिया और वायरस मारता है, बाकी कुछ नहीं बदलता — घुले लवण, कठोरता और स्वाद जस के तस रहते हैं। बिजली चाहिए।",
          "UF (अल्ट्रा फिल्ट्रेशन): भौतिक झिल्ली जो बैक्टीरिया, सिस्ट और दिखने वाली गंदगी रोकती है। बिजली के बिना चलती है, पर घुले लवणों पर असर नहीं करती।",
        ],
      },
      { type: "h2", en: "Let your water source choose", hi: "चुनाव अपने पानी के स्रोत से कराइए" },
      {
        type: "ul",
        en: [
          "Borewell or hard water, where vessels scale up and soap does not lather: you need RO. UV alone will give you germ-free hard water.",
          "Municipal supply that is soft but not always clean: RO+UV or UV+UF is usually plenty.",
          "Water that is visibly muddy in the monsoon: put a sediment pre-filter ahead of whatever you buy, or the main filters clog within weeks.",
          "Frequent power cuts and reasonably soft water: a UF purifier keeps working when the electricity does not.",
        ],
        hi: [
          "बोरवेल या कठोर पानी, जिसमें बर्तनों पर परत जमे और साबुन झाग न दे: आपको RO चाहिए। अकेला UV आपको सिर्फ कीटाणु-रहित कठोर पानी देगा।",
          "नगरपालिका की सप्लाई जो नरम है पर हमेशा साफ नहीं: RO+UV या UV+UF आमतौर पर काफी है।",
          "बारिश में जो पानी साफ़ तौर पर गंदला आता है: जो भी लें, उसके आगे सेडिमेंट प्री-फिल्टर लगवाएँ, वरना मुख्य फिल्टर हफ्तों में जाम हो जाएँगे।",
          "बार-बार बिजली जाती हो और पानी ठीक-ठाक नरम हो: UF प्यूरीफायर तब भी काम करता रहेगा जब बिजली नहीं होगी।",
        ],
      },
      {
        type: "callout",
        en: "Get your water's TDS checked before buying. It is a two-minute test and it settles the RO question one way or the other — no guesswork, no over-buying.",
        hi: "खरीदने से पहले अपने पानी का TDS जाँच कराएँ। यह दो मिनट की जाँच है और RO का सवाल एक बार में तय कर देती है — न अंदाज़ा, न ज़रूरत से ज़्यादा खर्च।",
      },
      { type: "h2", en: "Storage tank size", hi: "स्टोरेज टैंक का आकार" },
      {
        type: "p",
        en: "Between six and eight litres suits a family of four in a home with a steady supply. Go bigger — ten litres or more — if power cuts are frequent, the household is larger, or you fill bottles for the whole family in the morning. A bigger tank costs little extra and saves you waiting.",
        hi: "जहाँ सप्लाई नियमित है, वहाँ चार लोगों के परिवार के लिए छह से आठ लीटर सही रहता है। बड़ा — दस लीटर या ज़्यादा — तब लें जब बिजली बार-बार जाती हो, परिवार बड़ा हो, या सुबह सबके लिए बोतलें भरनी हों। बड़ा टैंक थोड़ा ही महँगा पड़ता है और इंतज़ार बचाता है।",
      },
      { type: "h2", en: "The part people forget: servicing", hi: "जो हिस्सा लोग भूल जाते हैं: सर्विसिंग" },
      {
        type: "p",
        en: "A purifier is not a one-time purchase; it is a filter subscription with a machine attached. Sediment and carbon filters are typically changed every six to twelve months, and the RO membrane runs longer but not forever — how long depends entirely on your input water. A purifier whose filters are never changed eventually delivers worse water than the tap.",
        hi: "प्यूरीफायर एक बार की खरीद नहीं है; यह मशीन के साथ जुड़ी फिल्टर की ज़िम्मेदारी है। सेडिमेंट और कार्बन फिल्टर आमतौर पर छह से बारह महीने में बदलते हैं, और RO मेम्ब्रेन ज़्यादा चलती है पर हमेशा नहीं — कितनी चलेगी, यह पूरी तरह आपके पानी पर निर्भर है। जिस प्यूरीफायर के फिल्टर कभी नहीं बदले जाते, वह आखिरकार नल से भी खराब पानी देने लगता है।",
      },
      {
        type: "ul",
        en: [
          "Ask what the filter set costs before you buy the machine, not after.",
          "Confirm that filters and membranes are available locally.",
          "Note the installation date somewhere you will see it, so the first service does not slip by.",
          "Slower flow, a change in taste, or a purifier that runs constantly are all signs that a filter is due.",
        ],
        hi: [
          "मशीन खरीदने से पहले पूछें कि फिल्टर सेट कितने का पड़ेगा, बाद में नहीं।",
          "पक्का करें कि फिल्टर और मेम्ब्रेन यहीं मिल जाते हैं।",
          "इंस्टॉलेशन की तारीख ऐसी जगह लिख लें जहाँ नज़र पड़ती रहे, ताकि पहली सर्विस छूट न जाए।",
          "धीमा बहाव, स्वाद में बदलाव, या लगातार चलता प्यूरीफायर — ये सब बताते हैं कि फिल्टर बदलने का समय आ गया है।",
        ],
      },
      {
        type: "p",
        en: `We stock RO, UV and UF water purifiers at ${SHOP} on Junwani Road, Bhilai, with free installation in Bhilai, manufacturer warranty on every unit, and filter replacement service afterwards. Tell us your water source on WhatsApp and we will tell you which type you need.`,
        hi: `जुनवानी रोड, भिलाई स्थित KGN होम अप्लायंस एंड सर्विसेज पर RO, UV और UF वॉटर प्यूरीफायर उपलब्ध हैं — भिलाई में मुफ्त इंस्टॉलेशन, हर यूनिट पर निर्माता वारंटी, और बाद में फिल्टर बदलने की सेवा के साथ। WhatsApp पर अपने पानी का स्रोत बताइए, हम बता देंगे कि आपको कौन सा प्रकार चाहिए।`,
      },
    ],
    faqs: [
      {
        qEn: "Do I need an RO purifier if my water is already soft?",
        aEn: "Not necessarily. If the TDS is low and the water is soft, a UV or UV+UF purifier removes germs without stripping minerals or wasting water. Get the TDS checked before deciding.",
        qHi: "अगर मेरा पानी पहले से नरम है तो क्या मुझे RO चाहिए?",
        aHi: "ज़रूरी नहीं। अगर TDS कम है और पानी नरम है, तो UV या UV+UF प्यूरीफायर कीटाणु हटा देता है, बिना खनिज घटाए और बिना पानी बर्बाद किए। तय करने से पहले TDS जँचवा लें।",
      },
      {
        qEn: "Do you install water purifiers and change filters?",
        aEn: "Yes. Installation is free in Bhilai and filter replacement service is available afterwards for the purifiers we sell.",
        qHi: "क्या आप वॉटर प्यूरीफायर इंस्टॉल करते हैं और फिल्टर बदलते हैं?",
        aHi: "हाँ। भिलाई में इंस्टॉलेशन मुफ्त है और हमारे बेचे गए प्यूरीफायर के लिए बाद में फिल्टर बदलने की सेवा उपलब्ध है।",
      },
    ],
  },

  {
    slug: "instant-vs-storage-geyser",
    titleEn: "Instant vs Storage Geyser: Picking the Right Water Heater",
    titleHi: "इंस्टेंट बनाम स्टोरेज गीज़र: सही वॉटर हीटर कैसे चुनें",
    metaTitleEn: "Instant vs Storage Geyser: Which Size to Buy",
    metaDescriptionEn:
      "Which geyser suits a bucket bath, a shower or a kitchen sink? Litres, star rating, safety valve and installation explained — geyser shop in Bhilai.",
    excerptEn:
      "A 3-litre instant heater and a 25-litre storage geyser solve completely different problems. Match the type to how your family actually bathes, and the bill stays small.",
    excerptHi:
      "3 लीटर का इंस्टेंट हीटर और 25 लीटर का स्टोरेज गीज़र बिल्कुल अलग ज़रूरतें पूरी करते हैं। जिस तरह आपका परिवार नहाता है उसी हिसाब से चुनिए, बिल भी कम रहेगा।",
    topicEn: "Buying Guide",
    topicHi: "खरीद गाइड",
    keywords: [
      "instant vs storage geyser",
      "geyser buying guide",
      "geyser shop Bhilai",
      "water heater price Bhilai",
      "15 litre geyser",
      "geyser installation Bhilai",
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
    readMinutes: 5,
    relatedCategory: "water-heaters",
    blocks: [
      {
        type: "p",
        en: "Winters in Chhattisgarh are short but sharp, and a wrongly sized geyser shows up on the electricity bill for years. The choice is simpler than the showroom makes it sound.",
        hi: "छत्तीसगढ़ की सर्दी छोटी पर तेज़ होती है, और गलत साइज़ का गीज़र सालों तक बिजली के बिल में दिखता रहता है। यह चुनाव उतना उलझा नहीं है जितना दुकान में लगता है।",
      },
      { type: "h2", en: "Instant water heater (3L – 6L)", hi: "इंस्टेंट वॉटर हीटर (3L – 6L)" },
      {
        type: "ul",
        en: [
          "Heats water on demand within seconds — no waiting, no stored tank.",
          "Best for a kitchen sink, a wash basin, or a bucket bath in a small bathroom.",
          "Compact, cheaper to buy, and fine for one or two people.",
          "Not suited to a shower: it cannot keep up with a continuous hot flow.",
        ],
        hi: [
          "ज़रूरत पड़ते ही सेकंडों में पानी गर्म करता है — न इंतज़ार, न स्टोर टैंक।",
          "किचन सिंक, वॉश बेसिन, या छोटे बाथरूम में बाल्टी से नहाने के लिए सबसे सही।",
          "छोटा, खरीदने में सस्ता, और एक-दो लोगों के लिए पर्याप्त।",
          "शॉवर के लिए ठीक नहीं: लगातार गर्म पानी की ज़रूरत यह पूरी नहीं कर पाता।",
        ],
      },
      { type: "h2", en: "Storage geyser (10L – 25L)", hi: "स्टोरेज गीज़र (10L – 25L)" },
      {
        type: "ul",
        en: [
          "Heats a tankful and keeps it hot, so several people can bathe one after another.",
          "The right choice for showers and for families.",
          "Takes wall space and a few minutes to heat up the first time each morning.",
          "Better insulation means less reheating — this is where the star rating earns its money.",
        ],
        hi: [
          "पूरा टैंक गर्म करके गर्म रखता है, इसलिए कई लोग एक के बाद एक नहा सकते हैं।",
          "शॉवर और परिवारों के लिए सही विकल्प।",
          "दीवार पर जगह लेता है और हर सुबह पहली बार गर्म होने में कुछ मिनट लगते हैं।",
          "बेहतर इंसुलेशन यानी बार-बार गर्म करने की ज़रूरत कम — स्टार रेटिंग की कीमत यहीं वसूल होती है।",
        ],
      },
      { type: "h2", en: "What size for your bathroom", hi: "आपके बाथरूम के लिए कितने लीटर" },
      {
        type: "ul",
        en: [
          "3L instant: kitchen sink or basin, single user, bucket only.",
          "10L – 15L storage: the standard for a family of three or four taking bucket baths.",
          "15L: also the practical minimum if anyone uses a shower.",
          "25L: large families, back-to-back showers, or a bathtub.",
        ],
        hi: [
          "3L इंस्टेंट: किचन सिंक या बेसिन, एक व्यक्ति, सिर्फ बाल्टी।",
          "10L – 15L स्टोरेज: तीन-चार लोगों के परिवार के बाल्टी से नहाने के लिए मानक।",
          "15L: अगर कोई शॉवर उपयोग करता है तो व्यावहारिक न्यूनतम भी यही है।",
          "25L: बड़े परिवार, एक के बाद एक शॉवर, या बाथटब।",
        ],
      },
      { type: "h2", en: "Safety features you should insist on", hi: "सुरक्षा सुविधाएँ जिन पर अड़ जाना चाहिए" },
      {
        type: "ol",
        en: [
          "Multi-function safety valve that releases excess pressure — this is the part that matters most.",
          "Thermostat and a separate thermal cut-out so the element switches off at the set temperature.",
          "ISI mark and a proper earthing connection at the point where it is installed.",
          "Glass-lined or otherwise coated tank plus a magnesium anode rod, which protects the tank from hard water. Ask whether the anode is replaceable.",
        ],
        hi: [
          "मल्टी-फंक्शन सेफ्टी वाल्व जो ज़्यादा दबाव निकाल दे — सबसे अहम पुर्ज़ा यही है।",
          "थर्मोस्टेट और अलग थर्मल कट-आउट, ताकि तय तापमान पर एलिमेंट बंद हो जाए।",
          "ISI मार्क और जहाँ लगे वहाँ सही अर्थिंग कनेक्शन।",
          "ग्लास-लाइन्ड या किसी कोटिंग वाला टैंक और मैग्नीशियम एनोड रॉड, जो कठोर पानी से टैंक बचाती है। पूछें कि एनोड बदली जा सकती है या नहीं।",
        ],
      },
      {
        type: "callout",
        en: "Hard water is the main reason geysers fail early here. If your supply is hard, treat the anode rod as a service item, not a permanent part.",
        hi: "यहाँ गीज़र जल्दी खराब होने की मुख्य वजह कठोर पानी है। अगर आपकी सप्लाई कठोर है तो एनोड रॉड को स्थायी पुर्ज़ा नहीं, सर्विस का सामान मानिए।",
      },
      { type: "h2", en: "Running it without a shock on the bill", hi: "बिल में झटका दिए बिना चलाना" },
      {
        type: "ul",
        en: [
          "Switch on 15–20 minutes before the bath, not at dawn for the whole morning.",
          "Set the thermostat to a medium setting instead of maximum — hotter water only means more cold water mixed in later.",
          "Turn it off after use. Leaving a storage geyser on all day is the single biggest waste.",
          "Get the tank flushed periodically if your water is hard; sediment at the bottom makes the element work harder every day.",
          "Do not ignore a dripping safety valve — it is telling you something.",
        ],
        hi: [
          "नहाने से 15–20 मिनट पहले चालू करें, सुबह-सुबह पूरे समय के लिए नहीं।",
          "थर्मोस्टेट अधिकतम के बजाय मध्यम पर रखें — ज़्यादा गर्म पानी का मतलब सिर्फ बाद में ज़्यादा ठंडा पानी मिलाना है।",
          "उपयोग के बाद बंद कर दें। स्टोरेज गीज़र को दिन भर चालू रखना सबसे बड़ी बर्बादी है।",
          "पानी कठोर है तो टैंक समय-समय पर फ्लश कराएँ; तली में जमा तलछट एलिमेंट पर रोज़ ज़ोर डालती है।",
          "टपकते सेफ्टी वाल्व को नज़रअंदाज़ न करें — वह कुछ बता रहा है।",
        ],
      },
      {
        type: "p",
        en: `Storage geysers, instant water heaters and immersion rods are in stock at our Junwani Road store, with manufacturer warranty and installation service available. Tell us your bathroom setup and family size and we will size it for you.`,
        hi: `हमारी जुनवानी रोड की दुकान पर स्टोरेज गीज़र, इंस्टेंट वॉटर हीटर और इमर्शन रॉड उपलब्ध हैं — निर्माता वारंटी और इंस्टॉलेशन सेवा के साथ। अपने बाथरूम की स्थिति और परिवार का आकार बताइए, हम सही साइज़ चुन देंगे।`,
      },
    ],
    faqs: [
      {
        qEn: "Is a 15 litre geyser enough for a family of four?",
        aEn: "For bucket baths taken one after another, yes — 15 litres is the usual choice for a family of four. If two people take showers back to back, consider 25 litres.",
        qHi: "क्या चार लोगों के परिवार के लिए 15 लीटर का गीज़र काफी है?",
        aHi: "एक के बाद एक बाल्टी से नहाने के लिए हाँ — चार लोगों के परिवार के लिए आमतौर पर 15 लीटर चुना जाता है। अगर दो लोग लगातार शॉवर लेते हैं तो 25 लीटर पर विचार करें।",
      },
      {
        qEn: "Do you install geysers at home?",
        aEn: "Yes, installation service is available for the geysers we sell. Call 91099 18786 to book a fitting after purchase.",
        qHi: "क्या आप घर पर गीज़र लगाते हैं?",
        aHi: "हाँ, हमारे बेचे गए गीज़र के लिए इंस्टॉलेशन सेवा उपलब्ध है। खरीद के बाद फिटिंग बुक करने के लिए 91099 18786 पर कॉल करें।",
      },
    ],
  },

  {
    slug: "pressure-cooker-safety-and-care",
    titleEn: "Pressure Cooker Care: Gaskets, Whistles and the Safety Valve",
    titleHi: "प्रेशर कुकर की देखभाल: गैस्केट, सीटी और सेफ्टी वाल्व",
    metaTitleEn: "Pressure Cooker Care, Safety & Spare Parts",
    metaDescriptionEn:
      "Why your cooker leaks steam, when to change the gasket, what the safety valve does, and how to pick the right size. Genuine cooker spares in Bhilai.",
    excerptEn:
      "Steam escaping from the rim, a whistle that will not blow, a lid that fights you — almost every cooker complaint comes down to three small parts that cost very little to replace.",
    excerptHi:
      "किनारे से भाप निकलना, सीटी न बजना, ढक्कन का अड़ जाना — कुकर की लगभग हर शिकायत तीन छोटे पुर्ज़ों तक जाती है, जिन्हें बदलना बहुत सस्ता है।",
    topicEn: "Repair & Care",
    topicHi: "रिपेयर और देखभाल",
    keywords: [
      "pressure cooker gasket",
      "pressure cooker safety valve",
      "pressure cooker not whistling",
      "pressure cooker spare parts Bhilai",
      "pressure cooker size guide",
      "cooker repair Bhilai",
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
    readMinutes: 5,
    relatedCategory: "pressure-cookers",
    blocks: [
      {
        type: "p",
        en: "A pressure cooker is the most used and least maintained vessel in an Indian kitchen. Three small parts — the gasket, the vent weight and the safety valve — do all the work that keeps it safe, and all three are consumables.",
        hi: "प्रेशर कुकर भारतीय किचन का सबसे ज़्यादा उपयोग होने वाला और सबसे कम देखभाल पाने वाला बर्तन है। तीन छोटे पुर्ज़े — गैस्केट, सीटी का वज़न और सेफ्टी वाल्व — वह सारा काम करते हैं जो इसे सुरक्षित रखता है, और तीनों समय के साथ बदलने वाले हैं।",
      },
      { type: "h2", en: "Steam escaping from the rim", hi: "किनारे से भाप निकलना" },
      {
        type: "p",
        en: "This is the gasket, almost always. Over months the rubber hardens, flattens or develops a nick, and it can no longer seal. A hardened gasket also makes the lid difficult to close and open. It is a small, cheap part — change it rather than fighting the cooker.",
        hi: "यह लगभग हमेशा गैस्केट की वजह से होता है। महीनों में रबर सख्त हो जाता है, चपटा पड़ जाता है या उसमें कट आ जाता है, और वह सील नहीं कर पाता। सख्त गैस्केट से ढक्कन बंद करना और खोलना भी मुश्किल हो जाता है। यह छोटा और सस्ता पुर्ज़ा है — कुकर से जूझने के बजाय इसे बदल दीजिए।",
      },
      {
        type: "callout",
        en: "Buy the gasket for your exact make and size. A slightly-wrong gasket that 'fits' is the most common cause of a cooker that never seals properly again.",
        hi: "गैस्केट अपने कुकर के ठीक उसी मेक और साइज़ का लें। थोड़ा गलत गैस्केट जो 'फिट हो जाता है' — कुकर के दोबारा कभी ठीक से सील न होने की सबसे आम वजह यही है।",
      },
      { type: "h2", en: "No whistle, or a weak one", hi: "सीटी नहीं बजती, या कमज़ोर बजती है" },
      {
        type: "p",
        en: "Usually the vent pipe under the weight is blocked with dried dal or rice starch. Remove the weight after the cooker has fully cooled and depressurised, and check that you can see light through the vent. Clean it with a pin or a thin brush every few weeks — this is the single most important cleaning step on a cooker.",
        hi: "आमतौर पर वज़न के नीचे की वेंट पाइप में सूखी दाल या चावल का माँड़ जम जाता है। कुकर पूरी तरह ठंडा और दबाव-मुक्त होने के बाद वज़न हटाएँ और देखें कि वेंट के आर-पार रोशनी दिखती है या नहीं। हर कुछ हफ्तों में इसे पिन या पतले ब्रश से साफ करें — कुकर की सफाई का सबसे अहम काम यही है।",
      },
      { type: "h2", en: "What the safety valve is for", hi: "सेफ्टी वाल्व किसलिए होता है" },
      {
        type: "p",
        en: "If the vent ever blocks completely, the safety valve — the small fusible plug or spring valve on the lid — releases the pressure instead of letting it build. It is a one-time-use protection on many models: once it blows, it must be replaced with the correct part for that cooker. Never plug it, tape it, or swap in something that merely fits the hole.",
        hi: "अगर वेंट कभी पूरी तरह जाम हो जाए, तो सेफ्टी वाल्व — ढक्कन पर लगा छोटा फ्यूज़िबल प्लग या स्प्रिंग वाल्व — दबाव बढ़ने देने के बजाय उसे निकाल देता है। कई मॉडलों में यह एक बार काम आने वाली सुरक्षा है: एक बार उड़ जाने पर उसे उसी कुकर के सही पुर्ज़े से बदलना ज़रूरी है। इसे कभी बंद न करें, टेप न लगाएँ, और ऐसा कुछ न लगाएँ जो बस छेद में फिट हो जाए।",
      },
      { type: "h2", en: "Rules that keep it safe", hi: "वे नियम जो इसे सुरक्षित रखते हैं" },
      {
        type: "ol",
        en: [
          "Never fill past two-thirds, and never past half for dal, rice and anything that froths.",
          "Always cook with liquid inside — a cooker run dry is dangerous and warps the base.",
          "Never force the lid. If it will not open, pressure is still inside; let it cool or release the weight carefully.",
          "Check the gasket, vent and safety valve before every festival-season heavy cooking run.",
          "Wash the lid by hand, dry it fully, and store the cooker with the lid inverted so the gasket does not stay compressed.",
        ],
        hi: [
          "दो-तिहाई से ज़्यादा कभी न भरें, और दाल, चावल व झाग बनाने वाली चीज़ों के लिए आधे से ज़्यादा नहीं।",
          "अंदर तरल रखकर ही पकाएँ — खाली चलाया कुकर खतरनाक है और तली टेढ़ी कर देता है।",
          "ढक्कन ज़बरदस्ती न खोलें। न खुले तो अंदर दबाव बाकी है; ठंडा होने दें या वज़न सावधानी से हटाएँ।",
          "त्योहारों के भारी काम से पहले हर बार गैस्केट, वेंट और सेफ्टी वाल्व जाँच लें।",
          "ढक्कन हाथ से धोएँ, पूरी तरह सुखाएँ, और कुकर को ढक्कन उल्टा रखकर संभालें ताकि गैस्केट दबा न रहे।",
        ],
      },
      { type: "h2", en: "Which size to buy", hi: "कौन सा साइज़ लें" },
      {
        type: "ul",
        en: [
          "3L: one or two people, or a second cooker for dal alone.",
          "5L: the standard family size — the one most homes buy first.",
          "7.5L and above: joint families, or cooking for guests.",
          "Outer-lid models take a whistle and are easy to clean; inner-lid models seal from inside and are considered safer under pressure. Both are fine when the parts are maintained.",
        ],
        hi: [
          "3L: एक-दो लोग, या सिर्फ दाल के लिए दूसरा कुकर।",
          "5L: मानक पारिवारिक साइज़ — ज़्यादातर घर पहले यही लेते हैं।",
          "7.5L और उससे बड़ा: संयुक्त परिवार, या मेहमानों के लिए खाना।",
          "आउटर-लिड मॉडल में सीटी लगती है और सफाई आसान होती है; इनर-लिड मॉडल अंदर से सील होते हैं और दबाव में ज़्यादा सुरक्षित माने जाते हैं। पुर्ज़ों की देखभाल हो तो दोनों ठीक हैं।",
        ],
      },
      {
        type: "p",
        en: `We stock ISI-marked pressure cookers from Prestige, Hawkins and Philips at ${SHOP}, Junwani Road, Bhilai, and keep genuine gaskets, whistles, safety valves and handles in-store — so a worn part never means a new cooker.`,
        hi: `KGN होम अप्लायंस एंड सर्विसेज, जुनवानी रोड, भिलाई पर प्रेस्टीज, हॉकिन्स और फिलिप्स के ISI मार्क प्रेशर कुकर उपलब्ध हैं, और असली गैस्केट, सीटी, सेफ्टी वाल्व व हैंडल दुकान पर रहते हैं — ताकि घिसे पुर्ज़े का मतलब कभी नया कुकर न हो।`,
      },
    ],
    faqs: [
      {
        qEn: "How often should a pressure cooker gasket be replaced?",
        aEn: "Replace it as soon as it hardens, flattens, cracks or starts letting steam escape from the rim. With daily use that is commonly around once a year, but go by the condition, not the calendar.",
        qHi: "प्रेशर कुकर का गैस्केट कितने समय में बदलना चाहिए?",
        aHi: "जैसे ही वह सख्त हो जाए, चपटा पड़ जाए, चटक जाए या किनारे से भाप निकलने लगे, तभी बदल दें। रोज़ उपयोग में यह आमतौर पर साल में एक बार होता है, पर कैलेंडर नहीं, हालत देखिए।",
      },
      {
        qEn: "Do you sell cooker spare parts separately?",
        aEn: "Yes. Genuine gaskets, whistles, safety valves and handles for the brands we sell are available in-store — bring the cooker or its model details along.",
        qHi: "क्या आप कुकर के स्पेयर पार्ट्स अलग से बेचते हैं?",
        aHi: "हाँ। हम जो ब्रांड बेचते हैं उनके असली गैस्केट, सीटी, सेफ्टी वाल्व और हैंडल दुकान पर उपलब्ध हैं — कुकर या उसका मॉडल विवरण साथ लाएँ।",
      },
    ],
  },

  {
    slug: "fans-and-coolers-for-chhattisgarh-summer",
    titleEn: "Fans and Air Coolers: Getting Through a Chhattisgarh Summer",
    titleHi: "पंखे और एयर कूलर: छत्तीसगढ़ की गर्मी से निपटने का तरीका",
    metaTitleEn: "Fans & Air Coolers for a Chhattisgarh Summer",
    metaDescriptionEn:
      "Ceiling fan sweep size, pedestal vs table fan, desert vs personal cooler, and honest cooler care tips for Bhilai's dry heat and humid monsoon.",
    excerptEn:
      "Sweep size, air delivery, desert versus personal coolers — how to choose for dry April heat and sticky July, and the maintenance that keeps a cooler working all season.",
    excerptHi:
      "स्वीप साइज़, एयर डिलीवरी, डेज़र्ट बनाम पर्सनल कूलर — अप्रैल की सूखी गर्मी और जुलाई की उमस के लिए कैसे चुनें, और वह देखभाल जो कूलर को पूरे सीज़न चलाए रखे।",
    topicEn: "Buying Guide",
    topicHi: "खरीद गाइड",
    keywords: [
      "ceiling fan buying guide",
      "air cooler for summer",
      "desert cooler vs personal cooler",
      "fan shop Bhilai",
      "air cooler price Bhilai",
      "ceiling fan sweep size",
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
    readMinutes: 5,
    relatedCategory: "fans-coolers",
    blocks: [
      {
        type: "p",
        en: "Bhilai gives you two very different summers: bone-dry heat through April and May, then a humid stretch once the monsoon arrives. The equipment that handles the first is not automatically right for the second.",
        hi: "भिलाई में दो बिल्कुल अलग गर्मियाँ आती हैं: अप्रैल-मई की सूखी तपिश, और मानसून आते ही उमस भरा दौर। जो सामान पहली के लिए सही है, वह अपने आप दूसरी के लिए सही नहीं होता।",
      },
      { type: "h2", en: "Ceiling fans: sweep size and air delivery", hi: "सीलिंग फैन: स्वीप साइज़ और एयर डिलीवरी" },
      {
        type: "ul",
        en: [
          "900mm: small rooms up to roughly 8x8 feet.",
          "1200mm: the standard for most bedrooms and living rooms — this is what the majority of homes need.",
          "1400mm: large halls, or rooms with high ceilings.",
          "Air delivery (measured in cubic metres per minute) tells you more than blade count. Compare it between models before you compare looks.",
          "Higher-rated motors draw less power for the same air — worth it on a fan that runs eight months a year.",
        ],
        hi: [
          "900mm: लगभग 8x8 फीट तक के छोटे कमरे।",
          "1200mm: ज़्यादातर बेडरूम और लिविंग रूम के लिए मानक — अधिकांश घरों को यही चाहिए।",
          "1400mm: बड़े हॉल, या ऊँची छत वाले कमरे।",
          "एयर डिलीवरी (क्यूबिक मीटर प्रति मिनट में) ब्लेड की संख्या से ज़्यादा बताती है। लुक की तुलना से पहले मॉडलों की यह संख्या देखें।",
          "बेहतर रेटिंग वाली मोटर उतनी ही हवा के लिए कम बिजली लेती है — साल में आठ महीने चलने वाले पंखे पर यह फायदे का सौदा है।",
        ],
      },
      { type: "h2", en: "Pedestal, table or wall fan?", hi: "पेडेस्टल, टेबल या वॉल फैन?" },
      {
        type: "ul",
        en: [
          "Pedestal fan: height-adjustable and moves around — best as a second fan where people sit, or for a room with no ceiling point.",
          "Table fan: study table, kitchen counter, or directed airflow for one person.",
          "Wall fan: shops, kitchens and small rooms where the floor cannot spare the space.",
          "Exhaust fan: the one people skip and then regret — a kitchen without one holds heat, smoke and cooking smell all evening.",
        ],
        hi: [
          "पेडेस्टल फैन: ऊँचाई घटाई-बढ़ाई जा सकती है और इधर-उधर ले जा सकते हैं — जहाँ लोग बैठते हैं वहाँ दूसरे पंखे के रूप में, या जिस कमरे में छत का पॉइंट न हो वहाँ सबसे अच्छा।",
          "टेबल फैन: पढ़ने की मेज़, किचन काउंटर, या एक व्यक्ति के लिए सीधी हवा।",
          "वॉल फैन: दुकानें, किचन और छोटे कमरे जहाँ ज़मीन पर जगह नहीं बचती।",
          "एग्ज़ॉस्ट फैन: यही लोग छोड़ देते हैं और बाद में पछताते हैं — इसके बिना किचन पूरी शाम गर्मी, धुआँ और खाने की गंध पकड़े रहता है।",
        ],
      },
      { type: "h2", en: "Air coolers: the honest version", hi: "एयर कूलर: असली बात" },
      {
        type: "p",
        en: "An evaporative cooler works by passing air through wet pads, so it cools best when the air is dry. In April and May in Chhattisgarh that is exactly the case and a cooler performs beautifully. Once the monsoon humidity sets in, the same machine cools much less — it is physics, not a defect. Cross-ventilation matters: a cooler needs an open window or door to push warm air out, otherwise the room simply gets damp.",
        hi: "इवैपोरेटिव कूलर हवा को गीले पैड से गुज़ारकर ठंडक देता है, इसलिए यह तभी सबसे अच्छा काम करता है जब हवा सूखी हो। छत्तीसगढ़ में अप्रैल-मई में स्थिति ठीक यही होती है और कूलर बढ़िया चलता है। मानसून की उमस आते ही वही मशीन बहुत कम ठंडक देती है — यह भौतिकी है, खराबी नहीं। क्रॉस-वेंटिलेशन ज़रूरी है: कूलर को गर्म हवा बाहर धकेलने के लिए खुली खिड़की या दरवाज़ा चाहिए, वरना कमरा बस सीलन भरा हो जाता है।",
      },
      {
        type: "ul",
        en: [
          "Desert cooler (45L and above): large rooms and halls, placed at a window so it draws outside air.",
          "Personal / tower cooler (20L – 35L): bedrooms and small rooms, easy to move between rooms.",
          "Honeycomb pads cool better and last longer than wood wool; wood wool is cheaper to replace.",
          "Check that the water tank is easy to fill and drain — you will do it daily all season.",
        ],
        hi: [
          "डेज़र्ट कूलर (45L और ऊपर): बड़े कमरे और हॉल, खिड़की पर रखें ताकि बाहर की हवा खींचे।",
          "पर्सनल / टावर कूलर (20L – 35L): बेडरूम और छोटे कमरे, एक कमरे से दूसरे में ले जाना आसान।",
          "हनीकॉम्ब पैड लकड़ी की छीलन से बेहतर ठंडक देते हैं और ज़्यादा चलते हैं; लकड़ी की छीलन बदलने में सस्ती पड़ती है।",
          "देखें कि पानी का टैंक भरना और खाली करना आसान हो — पूरे सीज़न यह रोज़ करना है।",
        ],
      },
      { type: "h2", en: "Season-start and season-end care", hi: "सीज़न की शुरुआत और अंत की देखभाल" },
      {
        type: "ol",
        en: [
          "Before summer: wash or replace the cooling pads, clean the tank, and check the water pump actually lifts water to the top.",
          "During summer: drain the tank once a week so it does not turn stagnant, and never leave standing water sitting for days.",
          "Oil the fan bearings if the model asks for it, and tighten the blade screws on pedestal fans.",
          "At season end: drain fully, dry the pads, and cover the cooler — pads left wet in storage are what smell next April.",
          "Clean ceiling fan blades every few weeks; a dust layer measurably cuts air delivery.",
        ],
        hi: [
          "गर्मी से पहले: कूलिंग पैड धोएँ या बदलें, टैंक साफ करें, और जाँचें कि पंप वाकई ऊपर तक पानी चढ़ा रहा है।",
          "गर्मी के दौरान: हफ्ते में एक बार टैंक खाली करें ताकि पानी सड़े नहीं, और दिनों तक भरा पानी कभी न छोड़ें।",
          "अगर मॉडल में ज़रूरी हो तो पंखे के बेयरिंग में तेल डालें, और पेडेस्टल फैन के ब्लेड के पेंच कसें।",
          "सीज़न के अंत में: पूरा पानी निकालें, पैड सुखाएँ, और कूलर ढक दें — रखे-रखे गीले रह गए पैड ही अगले अप्रैल में बदबू देते हैं।",
          "सीलिंग फैन के ब्लेड हर कुछ हफ्तों में साफ करें; धूल की परत हवा साफ़ तौर पर घटा देती है।",
        ],
      },
      {
        type: "p",
        en: `Ceiling fans, pedestal fans and air coolers from Crompton, Bajaj and Symphony are available at our Junwani Road store, with manufacturer warranty and free delivery in Bhilai. We also repair and service fans — including motor and bearing work.`,
        hi: `हमारी जुनवानी रोड की दुकान पर क्रॉम्पटन, बजाज और सिम्फनी के सीलिंग फैन, पेडेस्टल फैन और एयर कूलर उपलब्ध हैं — निर्माता वारंटी और भिलाई में मुफ्त डिलीवरी के साथ। हम पंखों की रिपेयर और सर्विस भी करते हैं — मोटर और बेयरिंग का काम भी।`,
      },
    ],
    faqs: [
      {
        qEn: "Which ceiling fan size is right for a normal bedroom?",
        aEn: "A 1200mm sweep fan suits most bedrooms and living rooms. Go to 1400mm for large halls and 900mm for very small rooms.",
        qHi: "सामान्य बेडरूम के लिए कौन सा सीलिंग फैन साइज़ सही है?",
        aHi: "1200mm स्वीप का पंखा ज़्यादातर बेडरूम और लिविंग रूम के लिए सही रहता है। बड़े हॉल के लिए 1400mm और बहुत छोटे कमरे के लिए 900mm लें।",
      },
      {
        qEn: "Why does my cooler stop cooling in the monsoon?",
        aEn: "Evaporative coolers cool by evaporating water into the air, so they work best in dry heat. In humid monsoon air the same cooler gives much less cooling — it is normal, not a fault.",
        qHi: "मानसून में मेरा कूलर ठंडक देना क्यों बंद कर देता है?",
        aHi: "इवैपोरेटिव कूलर पानी को हवा में उड़ाकर ठंडक देते हैं, इसलिए सूखी गर्मी में सबसे अच्छा काम करते हैं। उमस भरी मानसूनी हवा में वही कूलर बहुत कम ठंडक देता है — यह सामान्य है, खराबी नहीं।",
      },
    ],
  },

  {
    slug: "home-appliance-shopping-junwani-road-bhilai",
    titleEn: "Buying Home Appliances in Bhilai: A Junwani Road Shopping Guide",
    titleHi: "भिलाई में होम अप्लायंस खरीदना: जुनवानी रोड शॉपिंग गाइड",
    metaTitleEn: "Home Appliance Shopping Guide, Junwani Road Bhilai",
    metaDescriptionEn:
      "What to check before buying appliances in Bhilai — warranty, spare parts, installation and after-sales repair. Visit KGN on Junwani Road, near Surya Mall.",
    excerptEn:
      "Buying local only pays off if the shop is still there when something breaks. Here is what to ask before you pay, and how to find us on Junwani Road.",
    excerptHi:
      "लोकल खरीदने का फायदा तभी है जब कुछ खराब होने पर दुकान वहीं मिले। पैसे देने से पहले क्या पूछें, और जुनवानी रोड पर हमें कैसे ढूंढें।",
    topicEn: "Local Guide",
    topicHi: "लोकल गाइड",
    keywords: [
      "home appliance shop Bhilai",
      "appliance store Junwani Road",
      "appliance shop near Surya Mall",
      "home appliances Bhilai Durg",
      "appliance repair Bhilai",
      "kitchen appliances Bhilai",
    ],
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
    readMinutes: 5,
    blocks: [
      {
        type: "p",
        en: "Any appliance can be ordered online. What cannot be ordered is the person who fits your gas pipeline, opens your mixer when the coupler strips, or hands you the right gasket for your cooker across a counter. That is the actual difference between buying local and buying cheap.",
        hi: "कोई भी अप्लायंस ऑनलाइन मँगाया जा सकता है। जो नहीं मँगाया जा सकता, वह है वह व्यक्ति जो आपकी गैस पाइपलाइन फिट करता है, कपलर घिसने पर आपका मिक्सर खोलता है, या काउंटर पर आपके कुकर का सही गैस्केट थमा देता है। लोकल खरीदने और सस्ता खरीदने में असली फर्क यही है।",
      },
      { type: "h2", en: "Six questions worth asking before you pay", hi: "पैसे देने से पहले पूछने लायक छह सवाल" },
      {
        type: "ol",
        en: [
          "Is this the manufacturer's warranty, and who do I bring it to if there is a problem?",
          "Are spare parts — jars, blades, gaskets, burners, filters — available here, or do they have to be ordered from outside?",
          "Who installs it, and is installation included?",
          "Is it ISI-marked, where the category requires it — gas stoves, cookers, gas pipes and geysers especially?",
          "If it needs servicing after two years, do you do that here?",
          "What is today's price, all-inclusive?",
        ],
        hi: [
          "क्या यह निर्माता की वारंटी है, और दिक्कत होने पर मैं किसके पास आऊँ?",
          "स्पेयर पार्ट्स — जार, ब्लेड, गैस्केट, बर्नर, फिल्टर — यहीं मिलते हैं, या बाहर से मँगाने पड़ते हैं?",
          "इंस्टॉल कौन करेगा, और क्या इंस्टॉलेशन शामिल है?",
          "जिन श्रेणियों में ज़रूरी है — खासकर गैस चूल्हा, कुकर, गैस पाइप और गीज़र — क्या यह ISI मार्क है?",
          "दो साल बाद सर्विसिंग चाहिए तो क्या वह यहीं होती है?",
          "आज की कीमत, सब मिलाकर, क्या है?",
        ],
      },
      {
        type: "callout",
        en: "If a shop cannot answer question 2 and question 5, the low price on question 6 is not really a low price.",
        hi: "अगर कोई दुकान दूसरे और पाँचवें सवाल का जवाब नहीं दे पाती, तो छठे सवाल की कम कीमत असल में कम कीमत नहीं है।",
      },
      { type: "h2", en: "What you will find at our counter", hi: "हमारे काउंटर पर आपको क्या मिलेगा" },
      {
        type: "ul",
        en: [
          "Mixer grinders from Bajaj, Havells, Philips, Preethi, Sujata, Butterfly, Maharaja Whiteline, Panasonic and Inalsa — plus jars, blades and couplers.",
          "ISI-marked gas stoves from Prestige and Butterfly, with brass burners, regulators, gas pipes, lighters and safety valves.",
          "Pressure cookers from Prestige, Hawkins and Philips, with genuine gaskets, whistles and handles.",
          "RO, UV and UF water purifiers, geysers, instant heaters and immersion rods.",
          "Ceiling, pedestal and table fans, air coolers, irons, room heaters and water pumps.",
          "Steel utensils, cookware, casseroles, tiffins, flasks, bottles, cleaning tools, locks and hardware.",
        ],
        hi: [
          "बजाज, हैवेल्स, फिलिप्स, प्रीति, सुजाता, बटरफ्लाई, महाराजा व्हाइटलाइन, पैनासोनिक और इनाल्सा के मिक्सर ग्राइंडर — साथ में जार, ब्लेड और कपलर।",
          "प्रेस्टीज और बटरफ्लाई के ISI मार्क गैस चूल्हे, पीतल के बर्नर, रेगुलेटर, गैस पाइप, लाइटर और सेफ्टी वाल्व के साथ।",
          "प्रेस्टीज, हॉकिन्स और फिलिप्स के प्रेशर कुकर, असली गैस्केट, सीटी और हैंडल के साथ।",
          "RO, UV और UF वॉटर प्यूरीफायर, गीज़र, इंस्टेंट हीटर और इमर्शन रॉड।",
          "सीलिंग, पेडेस्टल और टेबल फैन, एयर कूलर, इस्त्री, रूम हीटर और वॉटर पंप।",
          "स्टील के बर्तन, कुकवेयर, कैसरोल, टिफिन, फ्लास्क, बोतलें, सफाई का सामान, ताले और हार्डवेयर।",
        ],
      },
      { type: "h2", en: "Sales and repairs at the same counter", hi: "बिक्री और रिपेयर एक ही काउंटर पर" },
      {
        type: "p",
        en: "We repair and service mixer grinders (including jars and blades), gas stoves, ovens and microwaves, fans, coolers, irons and geysers, and we do gas pipeline fitting and repair work at your home across Bhilai and Durg. Doorstep service means you do not have to carry a heavy appliance anywhere to find out what is wrong with it.",
        hi: "हम मिक्सर ग्राइंडर (जार और ब्लेड सहित), गैस चूल्हा, ओवन और माइक्रोवेव, पंखे, कूलर, इस्त्री और गीज़र की रिपेयर व सर्विस करते हैं, और भिलाई व दुर्ग में आपके घर पर गैस पाइपलाइन फिटिंग और रिपेयर का काम करते हैं। घर पर सर्विस का मतलब है कि खराबी जानने के लिए आपको भारी अप्लायंस कहीं ढोकर नहीं ले जाना पड़ेगा।",
      },
      { type: "h2", en: "Why we do not print prices", hi: "हम कीमतें क्यों नहीं छापते" },
      {
        type: "p",
        en: "Appliance rates move with brand offers, stock and season. Instead of showing a stale figure, we quote today's actual best price when you call or message — for the exact model you are asking about, with no obligation to buy.",
        hi: "अप्लायंस के रेट ब्रांड ऑफर, स्टॉक और सीज़न के साथ बदलते रहते हैं। पुरानी कीमत दिखाने के बजाय, आप कॉल या मैसेज करें तो हम आज की असली बेस्ट कीमत बताते हैं — ठीक उसी मॉडल की जो आप पूछ रहे हैं, और खरीदने की कोई बाध्यता नहीं।",
      },
      { type: "h2", en: "Finding us", hi: "हम तक पहुँचना" },
      {
        type: "ul",
        en: [
          "KGN Home Appliance & Services, in front of Shikhar Complex, near Surya Mall, Junwani Road, Bhilai (C.G.).",
          "Call 91099 18786 or WhatsApp 96916 53698.",
          "Open Monday to Friday 9 AM – 8 PM, Saturday 9 AM – 9 PM, Sunday 10 AM – 6 PM.",
          "Free delivery in Bhilai, and doorstep repair service across Bhilai and Durg.",
        ],
        hi: [
          "KGN होम अप्लायंस एंड सर्विसेज, शिखर कॉम्प्लेक्स के सामने, सूर्या मॉल के पास, जुनवानी रोड, भिलाई (छ.ग.)।",
          "कॉल करें 91099 18786 या WhatsApp करें 96916 53698।",
          "सोमवार से शुक्रवार सुबह 9 – रात 8, शनिवार सुबह 9 – रात 9, रविवार सुबह 10 – शाम 6 तक खुला।",
          "भिलाई में मुफ्त डिलीवरी, और भिलाई व दुर्ग में घर पर रिपेयर सेवा।",
        ],
      },
    ],
    faqs: [
      {
        qEn: "Where exactly is KGN Home Appliance & Services in Bhilai?",
        aEn: "In front of Shikhar Complex, near Surya Mall, Junwani Road, Bhilai (C.G.). Call 91099 18786 if you need directions.",
        qHi: "KGN होम अप्लायंस एंड सर्विसेज भिलाई में ठीक कहाँ है?",
        aHi: "शिखर कॉम्प्लेक्स के सामने, सूर्या मॉल के पास, जुनवानी रोड, भिलाई (छ.ग.)। रास्ता जानने के लिए 91099 18786 पर कॉल करें।",
      },
      {
        qEn: "Do you deliver in Bhilai and serve Durg?",
        aEn: "Yes — free delivery within Bhilai, and doorstep repair and gas pipeline service across Bhilai and Durg.",
        qHi: "क्या आप भिलाई में डिलीवरी करते हैं और दुर्ग में सेवा देते हैं?",
        aHi: "हाँ — भिलाई में मुफ्त डिलीवरी, और भिलाई व दुर्ग में घर पर रिपेयर तथा गैस पाइपलाइन सेवा।",
      },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

/** Newest first — drives the /blog listing. */
export function getSortedPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  return getSortedPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, limit)
}

/** Plain-text version of a post body — used for the Article description and word count. */
export function postPlainText(post: BlogPost, lang: "en" | "hi" = "en"): string {
  return post.blocks
    .map((b) => {
      const value = b[lang]
      return Array.isArray(value) ? value.join(" ") : value
    })
    .join(" ")
}

