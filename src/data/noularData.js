// NOULAR — Official Centralized Data Layer
// Source of truth: noular.com & Master Build Specification 2026
// Multilingual: Arabic (العربية), French (Français), English

export const BRAND = {
  name: 'NOULAR',
  nameAr: 'نولار',
  tagline: {
    ar: 'بيتٌ أكثر هدوءاً.',
    fr: 'Une maison plus calme.',
    en: 'A calmer kind of home.'
  },
  subtagline: {
    ar: 'قطع فنية صُنعت لتضفي السكينة والدفء على المكان.',
    fr: 'Des objets faits pour adoucir l’espace.',
    en: 'Objects made to soften the space.'
  },
  story: {
    ar: 'ديكور وإضاءة نحتية مغربية تُصنع لأجلك. مصابيح وقطع تصميم فنية، تُشطب يدوياً في ورشتنا بالمغرب. توصيل مجاني لجميع مدن المغرب ابتداءً من 700 درهم.',
    fr: 'Décoration marocaine faite pour vous. Luminaires et pièces design, finis à la main. Livraison offerte partout au Maroc dès 700 DH.',
    en: 'Interior design made in Morocco. Handmade sculptural lighting and design pieces made to order. Free delivery across Morocco.'
  },
  contact: {
    whatsapp: '+212629615257',
    whatsappRaw: '212629615257',
    email: 'hajar@owwwostudio.com',
    location: {
      ar: 'المغرب',
      fr: 'Maroc',
      en: 'Morocco'
    },
    hours: {
      ar: 'الإثنين – السبت : 9:00 ص – 7:00 م (توقيت المغرب)',
      fr: 'Lun – Sam : 9h00 – 19h00 (GMT+1)',
      en: 'Mon – Sat: 9:00 AM – 7:00 PM (GMT+1)'
    }
  },
  workshop: {
    location: 'Maroc',
    hoursPerPiece: 18,
    productionTime: {
      ar: '3 إلى 5 أيام عمل',
      fr: '3 à 5 jours ouvrés',
      en: '3 to 5 business days'
    },
    philosophy: {
      ar: 'كل قطعة تبدأ بموافقتك. تصنيع مخصص على الطلب بدون أي فائض مخزون غير ضروري.',
      fr: 'Chaque pièce commence par votre oui. Fabrication sur commande sans sur-stock.',
      en: 'Every piece begins after you say yes. Made to order with zero overstock.'
    }
  },
  shipping: {
    freeThreshold: 700,
    costMorocco: 0,
    moroccoText: {
      ar: 'توصيل مجاني في جميع مدن المغرب',
      fr: 'Livraison offerte partout au Maroc',
      en: 'Free shipping throughout Morocco'
    },
    international: {
      ar: 'التوصيل الدولي متاح عند الطلب',
      fr: 'Livraison internationale disponible sur demande',
      en: 'Worldwide shipping available upon request'
    }
  },
  warranty: {
    duration: '24 mois',
    coverage: {
      ar: 'ضمان شامل لمدة 24 شهراً يغطي أي عيب في المواد أو التصنيع في ظروف الاستخدام العادي.',
      fr: 'Couvre tout défaut de matière ou de fabrication dans le cadre d’un usage normal.',
      en: 'Covers any material or manufacturing defect under normal use.'
    }
  }
};

export const PRODUCTS = [
  {
    id: 'warda-sienna',
    slug: 'warda-sienna',
    legacySlugs: ['lamp-base-orange'],
    name: 'Noular Warda Sienna · Base Orange',
    shortName: 'Warda Sienna',
    nameAr: 'نولار وردة سيينا · قاعدة برتقالية',
    variantLabel: {
      ar: 'قاعدة برتقالية',
      fr: 'Base Orange',
      en: 'Orange Base'
    },
    accentColor: '#C65D32',
    accentColorSecondary: '#2B2621',
    price: 799,
    compareAtPrice: 899,
    bundlePrice: 1499,
    bundleCompareAtPrice: 1598,
    savings: 99,
    currency: 'MAD',
    currencyDisplay: 'DH',
    currencyDisplayAr: 'درهم',
    category: 'lighting-and-decor',
    categories: ['all', 'lighting-and-decor', 'small-spaces', 'love-or-gifts'],
    shortDescription: {
      ar: 'مصباح طاولة نحتي، قاعدة داكنة وجسم بلون الطين التيراكوتا.',
      fr: 'Lampe à poser, socle sombre, corps terre cuite.',
      en: 'Table lamp, dark base, terracotta body.'
    },
    description: {
      ar: 'وردة سيينا (قاعدة برتقالية): القوام الأيقوني لنولار بقاعدة حجرية داكنة وجسم بلون التيراكوتا الدافئ مع غطاء علوي متموج ينشر ضوءاً دافئاً 2700 كلفن. يتضمن لمبة LED وسلك قماشي مجدول مع قاطع inline.',
      fr: 'Warda Sienna (base orange) : silhouette Noular avec base foncée et abat-jour orangé. Lampe de table fabriquée sur commande pour chevet, console ou bureau. E14 LED incluse, câble tressé, interrupteur inline.',
      en: 'Warda Sienna (orange base): the iconic Noular silhouette with dark base and terracotta body. Made-to-order table lamp for bedside table, console, or desk. E14 LED bulb included, braided cable, inline switch.'
    },
    visualIdentity: {
      ar: 'قوام نحتي عمودي، قاعدة ملمسية داكنة، جسم مركزي تراكوتا، غطاء أبيض ناعم نصف شفاف بتموجات رقيقة.',
      fr: 'Silhouette sculpturale verticale, socle minéral texturé, corps central terracotta, abat-jour sculptural blanc translucide aux ondulations douces.',
      en: 'Sculptural vertical silhouette, textured mineral base, terracotta central body, translucent white undulating lampshade.'
    },
    specifications: {
      type: { ar: 'مصباح طاولة', fr: 'Lampe à poser', en: 'Table lamp' },
      material: { ar: 'مادة PLA حيوية ومستدامة (أصل نباتي)', fr: 'PLA durable (biobased)', en: 'Durable biobased PLA' },
      finish: { ar: 'قاعدة داكنة · جسم بلون التيراكوتا', fr: 'Base sombre · corps terre cuite', en: 'Dark base · terracotta body' },
      dimensions: 'H 24 × Ø 14 cm',
      socket: 'E14',
      bulb: { ar: 'لمبة LED 4 W مشمولة (2700 K)', fr: 'LED 4 W incluse (2700 K)', en: 'LED 4 W included (2700 K)' },
      colorTemperature: '2700 K (أبيض دافئ / Blanc chaud)',
      cable: { ar: 'سلك قماشي مجدول بطول 180 سم', fr: '180 cm · câble tressé', en: '180 cm braided cable' },
      switch: { ar: 'مفتاح مدمج inline', fr: 'Interrupteur inline', en: 'Inline switch' },
      warranty: '24 mois (سنتان)',
      productionTime: { ar: '3 إلى 5 أيام عمل', fr: '3 à 5 jours ouvrés', en: '3 to 5 business days' }
    },
    images: {
      coverLight: '/assets/noular/products/warda-sienna/original/cover-light.jpg',
      coverDark: '/assets/noular/products/warda-sienna/original/cover-dark.jpg',
      angle1: '/assets/noular/products/warda-sienna/original/angle-1.png',
      angle2: '/assets/noular/products/warda-sienna/original/angle-2.png'
    },
    gallery: [
      { url: '/assets/noular/products/warda-sienna/original/cover-light.jpg', title: 'Vue de jour' },
      { url: '/assets/noular/products/warda-sienna/original/cover-dark.jpg', title: 'Illumination chaude 2700K' },
      { url: '/assets/noular/products/warda-sienna/original/angle-1.png', title: 'Détail silhouette & rainures' },
      { url: '/assets/noular/products/warda-sienna/original/angle-2.png', title: 'Angle de profil' }
    ]
  },
  {
    id: 'warda-basalt',
    slug: 'warda-basalt',
    legacySlugs: ['lamp-drak-base'],
    name: 'Noular Warda Basalt · Dark Base',
    shortName: 'Warda Basalt',
    nameAr: 'نولار وردة بازلت · قاعدة داكنة',
    variantLabel: {
      ar: 'قاعدة بازلت داكنة',
      fr: 'Dark Base',
      en: 'Dark Base'
    },
    accentColor: '#262422',
    accentColorSecondary: '#EBE5DC',
    price: 799,
    compareAtPrice: 899,
    bundlePrice: 1499,
    bundleCompareAtPrice: 1598,
    savings: 99,
    currency: 'MAD',
    currencyDisplay: 'DH',
    currencyDisplayAr: 'درهم',
    category: 'lighting-and-decor',
    categories: ['all', 'lighting-and-decor', 'small-spaces'],
    shortDescription: {
      ar: 'مصباح طاولة، قاعدة وجسم أنثراسيت داكن عميق.',
      fr: 'Lampe à poser, socle et corps anthracite sombre.',
      en: 'Table lamp, dark basalt anthracite base and body.'
    },
    description: {
      ar: 'وردة بازلت يبرز قاعدة داكنة وملمساً حجرياً عميقاً بلون الأنثراسيت، يلتقي مع شيد أبيض منحوت ينشر دفئاً متبايناً يضفي فخامة عصرية على الغرفة.',
      fr: 'Warda Basalt met en valeur un socle et corps sombre texturé basalt / anthracite. Son abat-jour sculpté translucide diffuse une lumière chaleureuse qui magnifie les contrastes architecturaux.',
      en: 'Warda Basalt emphasizes a deep, textured basalt and anthracite body. Its sculptural translucent shade diffuses a warm amber glow that enhances architectural contrasts.'
    },
    visualIdentity: {
      ar: 'قوام وردة النحتي، جسم مركزي بازلت أنثراسيت داكن، غطاء أبيض ناعم بتموجات شاقولية ونور دافئ غامر.',
      fr: 'Silhouette sculpturale Warda, corps central basalt / anthracite sombre, abat-jour blanc translucide aux nervures verticales, lumière interne chaleureuse.',
      en: 'Sculptural Warda silhouette, dark basalt/anthracite central body, translucent white upper shade with vertical ribs, warm internal light.'
    },
    specifications: {
      type: { ar: 'مصباح طاولة', fr: 'Lampe à poser', en: 'Table lamp' },
      material: { ar: 'مادة PLA حيوية ومستدامة', fr: 'PLA durable (biobased)', en: 'Durable biobased PLA' },
      finish: { ar: 'قاعدة بازلت / أنثراسيت داكن', fr: 'Base basalt / anthracite sombre', en: 'Basalt / dark anthracite' },
      dimensions: 'H 24 × Ø 14 cm',
      socket: 'E14',
      bulb: { ar: 'لمبة LED 4 W مشمولة (2700 K)', fr: 'LED 4 W incluse (2700 K)', en: 'LED 4 W included (2700 K)' },
      colorTemperature: '2700 K (أبيض دافئ)',
      cable: { ar: 'سلك قماشي مجدول 180 سم', fr: '180 cm · câble tressé', en: '180 cm braided cable' },
      switch: { ar: 'مفتاح مدمج inline', fr: 'Interrupteur inline', en: 'Inline switch' },
      warranty: '24 mois (سنتان)',
      productionTime: { ar: '3 إلى 5 أيام عمل', fr: '3 à 5 jours ouvrés', en: '3 to 5 business days' }
    },
    images: {
      coverLight: '/assets/noular/products/warda-basalt/original/cover-light.jpg',
      coverDark: '/assets/noular/products/warda-basalt/original/cover-dark.jpg',
      angle1: '/assets/noular/products/warda-basalt/original/angle-1.png',
      angle2: '/assets/noular/products/warda-basalt/original/angle-2.png'
    },
    gallery: [
      { url: '/assets/noular/products/warda-basalt/original/cover-light.jpg', title: 'Vue de jour' },
      { url: '/assets/noular/products/warda-basalt/original/cover-dark.jpg', title: 'Contraste nocturne' },
      { url: '/assets/noular/products/warda-basalt/original/angle-1.png', title: 'Détail socle basalt' },
      { url: '/assets/noular/products/warda-basalt/original/angle-2.png', title: 'Angle de profil' }
    ]
  },
  {
    id: 'warda-neige',
    slug: 'warda-neige',
    legacySlugs: ['lamp-white-color'],
    name: 'Noular Warda Neige · White',
    shortName: 'Warda Neige',
    nameAr: 'نولار وردة ثلج · أبيض',
    variantLabel: {
      ar: 'أبيض ثلجي',
      fr: 'Blanc Neige',
      en: 'Snow White'
    },
    accentColor: '#EBE5DC',
    accentColorSecondary: '#4A3A30',
    price: 799,
    compareAtPrice: 899,
    bundlePrice: 1499,
    bundleCompareAtPrice: 1598,
    savings: 99,
    currency: 'MAD',
    currencyDisplay: 'DH',
    currencyDisplayAr: 'درهم',
    category: 'lighting-and-decor',
    categories: ['all', 'lighting-and-decor', 'small-spaces', 'love-or-gifts'],
    shortDescription: {
      ar: 'مصباح طاولة، قوام ناصع البياض بالكامل للبيوت البسيطة الهادئة.',
      fr: 'Lampe à poser, silhouette entièrement blanche pour intérieurs épurés.',
      en: 'Table lamp, pure monochrome white for minimalist serene spaces.'
    },
    description: {
      ar: 'وردة ثلج هي اللمسة النقية الخالصة للمساحات المينيمالية. المصباح بأكمله يتجلى في بياض هادئ، محولاً الضوء إلى هالة محيطية ناعمة تملأ الغرفة بالسلام.',
      fr: 'Warda Neige est la finition lumineuse et douce pour les intérieurs minimalistes. Toute la lampe s’habille d’un blanc doux et chaleureux, transformant la lumière en un halo bienfaisant.',
      en: 'Warda Neige is the gentle light finish for minimalist interiors. The entire lamp is sculpted in soothing white, creating an ethereal glow that softens the whole room.'
    },
    visualIdentity: {
      ar: 'مصباح أحادي اللون أبيض كالثلج، جسم مضلع منحوت، غطاء علوي متموج نصف شفاف، وملمس يدوي رقيق.',
      fr: 'Lampe monochrome blanc / neige, corps cylindrique nervuré, abat-jour supérieur translucide, texture artisanale subtile, rayonnement doux.',
      en: 'Monochrome white/snow lamp, ribbed cylindrical body, translucent upper shade, subtle handcrafted texture, soft gentle glow.'
    },
    specifications: {
      type: { ar: 'مصباح طاولة', fr: 'Lampe à poser', en: 'Table lamp' },
      material: { ar: 'مادة PLA حيوية ومستدامة', fr: 'PLA durable (biobased)', en: 'Durable biobased PLA' },
      finish: { ar: 'أبيض ثلجي نقي', fr: 'Blanc / neige pur', en: 'Pure snow / white' },
      dimensions: 'H 24 × Ø 14 cm',
      socket: 'E14',
      bulb: { ar: 'لمبة LED 4 W مشمولة (2700 K)', fr: 'LED 4 W incluse (2700 K)', en: 'LED 4 W included (2700 K)' },
      colorTemperature: '2700 K (أبيض دافئ)',
      cable: { ar: 'سلك قماشي مجدول 180 سم', fr: '180 cm · câble tressé', en: '180 cm braided cable' },
      switch: { ar: 'مفتاح مدمج inline', fr: 'Interrupteur inline', en: 'Inline switch' },
      warranty: '24 mois (سنتان)',
      productionTime: { ar: '3 إلى 5 أيام عمل', fr: '3 à 5 jours ouvrés', en: '3 to 5 business days' }
    },
    images: {
      coverLight: '/assets/noular/products/warda-neige/original/cover-light.jpg',
      coverDark: '/assets/noular/products/warda-neige/original/cover-dark.jpg',
      angle1: '/assets/noular/products/warda-neige/original/angle-1.png',
      angle2: '/assets/noular/products/warda-neige/original/angle-2.png',
      angle3: '/assets/noular/products/warda-neige/original/angle-3.png'
    },
    gallery: [
      { url: '/assets/noular/products/warda-neige/original/cover-light.jpg', title: 'Pureté en lumière naturelle' },
      { url: '/assets/noular/products/warda-neige/original/cover-dark.jpg', title: 'Halo chaleureux 2700K' },
      { url: '/assets/noular/products/warda-neige/original/angle-1.png', title: 'Texture détaillée' },
      { url: '/assets/noular/products/warda-neige/original/angle-2.png', title: 'Vue de profil' }
    ]
  },
  {
    id: 'warda-soleil',
    slug: 'warda-soleil',
    legacySlugs: ['lamp-full-orange'],
    name: 'Noular Warda Soleil · Full Orange',
    shortName: 'Warda Soleil',
    nameAr: 'نولار وردة شمس · برتقالي كامل',
    variantLabel: {
      ar: 'برتقالي كامل (تيراكوتا)',
      fr: 'Full Orange',
      en: 'Full Orange'
    },
    accentColor: '#E06B32',
    accentColorSecondary: '#30261E',
    price: 799,
    compareAtPrice: 899,
    bundlePrice: 1499,
    bundleCompareAtPrice: 1598,
    savings: 99,
    currency: 'MAD',
    currencyDisplay: 'DH',
    currencyDisplayAr: 'درهم',
    category: 'lighting-and-decor',
    categories: ['all', 'lighting-and-decor', 'love-or-gifts'],
    shortDescription: {
      ar: 'مصباح طاولة، تحفة أحادية اللون بلون التيراكوتا الشمسي الدافئ.',
      fr: 'Lampe à poser, monochrome terracotta chaleureux et vibrant.',
      en: 'Table lamp, full warm terracotta orange sculptural statement.'
    },
    description: {
      ar: 'وردة شمس هو التعبير الشامل بلون التيراكوتا البرتقالي الدافئ لمصباح نولار. قطعة جريئة بحضور نحتي مميز، تشع نوراً ذهبياً غامراً يعيد الدفء فوراً إلى أركان المنزل.',
      fr: 'Warda Soleil est la version intégrale orange terracotta du luminaire iconique NOULAR. Une pièce audacieuse à la forte présence sculpturale qui irradie une lumière dorée et réconfortante.',
      en: 'Warda Soleil is the full terracotta orange edition of the iconic NOULAR lamp. A bold statement with a strong sculptural presence that radiates comforting golden illumination.'
    },
    visualIdentity: {
      ar: 'المصباح بأكمله من التيراكوتا البرتقالية، جسم أسطواني بقنوات عمودية، وغطاء ناعم يمنح وهجاً عنبرياً دافئاً.',
      fr: 'Toute la lampe est en terre cuite orangée, corps cylindrique cannelé, abat-jour assorti diffusant une douce lueur ambrée, silhouette organique affirmée.',
      en: 'Entire lamp in warm terracotta orange, fluted cylindrical body, matching shade radiating warm amber glow, strong organic silhouette.'
    },
    specifications: {
      type: { ar: 'مصباح طاولة', fr: 'Lampe à poser', en: 'Table lamp' },
      material: { ar: 'مادة PLA حيوية ومستدامة', fr: 'PLA durable (biobased)', en: 'Durable biobased PLA' },
      finish: { ar: 'تيراكوتا شمسية كاملة', fr: 'Full terre cuite / orange solaire', en: 'Full terracotta / solar orange' },
      dimensions: 'H 24 × Ø 14 cm',
      socket: 'E14',
      bulb: { ar: 'لمبة LED 4 W مشمولة (2700 K)', fr: 'LED 4 W incluse (2700 K)', en: 'LED 4 W included (2700 K)' },
      colorTemperature: '2700 K (أبيض دافئ)',
      cable: { ar: 'سلك قماشي مجدول 180 سم', fr: '180 cm · câble tressé', en: '180 cm braided cable' },
      switch: { ar: 'مفتاح مدمج inline', fr: 'Interrupteur inline', en: 'Inline switch' },
      warranty: '24 mois (سنتان)',
      productionTime: { ar: '3 إلى 5 أيام عمل', fr: '3 à 5 jours ouvrés', en: '3 to 5 business days' }
    },
    images: {
      coverLight: '/assets/noular/products/warda-soleil/original/cover-light.jpg',
      coverDark: '/assets/noular/products/warda-soleil/original/cover-dark.jpg',
      angle1: '/assets/noular/products/warda-soleil/original/angle-1.png',
      angle3: '/assets/noular/products/warda-soleil/original/angle-3.png',
      angle6: '/assets/noular/products/warda-soleil/original/angle-6.png',
      angle7: '/assets/noular/products/warda-soleil/original/angle-7.png'
    },
    gallery: [
      { url: '/assets/noular/products/warda-soleil/original/cover-light.jpg', title: 'Vibrance terracotta de jour' },
      { url: '/assets/noular/products/warda-soleil/original/cover-dark.jpg', title: 'Lumière solaire ambrée' },
      { url: '/assets/noular/products/warda-soleil/original/angle-1.png', title: 'Texture cannelée' },
      { url: '/assets/noular/products/warda-soleil/original/angle-3.png', title: 'Angle architectural' }
    ]
  }
];

export const CATEGORIES = [
  { id: 'all', slug: 'all', name: { ar: 'الكل', fr: 'Tout', en: 'All' } },
  { id: 'lighting-and-decor', slug: 'lighting-and-decor', name: { ar: 'إنارة وديكور', fr: 'Luminaires et décor', en: 'Lighting & Decor' } },
  { id: 'love-or-gifts', slug: 'love-or-gifts', name: { ar: 'هدايا ومحبة', fr: 'Amour ou cadeaux', en: 'Gifts & Love' } },
  { id: 'small-spaces', slug: 'small-spaces', name: { ar: 'مساحات صغيرة', fr: 'Petits espaces', en: 'Small Spaces' } }
];

export const CRAFT_PILLARS = [
  {
    number: '01',
    hours: '18 h',
    title: {
      ar: '18 ساعة عمل في الورشة لكل قطعة',
      fr: '18 h d’atelier par pièce',
      en: '18 hours of atelier work per piece'
    },
    description: {
      ar: 'كل مصباح يتطلب قرابة 18 ساعة من العناية الدقيقة: تشكيل متأنٍ، مراقبة طبقات البناء، إزالة النتوءات، وتشطيب يدوي فائق الإتقان.',
      fr: 'Chaque lampe nécessite environ 18 heures d’attention minutieuse : mise en forme lente, contrôle des couches, ébavurage et finitions manuelles.',
      en: 'Each lamp requires roughly 18 hours of dedicated attention: slow shaping, layer inspection, hand-deburring, and meticulous finishing.'
    }
  },
  {
    number: '02',
    hours: 'PLA',
    title: {
      ar: 'مادة حيوية من مصادر نباتية مستدامة',
      fr: 'Matière bio-sourcée',
      en: 'Biobased PLA Material'
    },
    description: {
      ar: 'مُصاغة من مادة PLA المستدامة المشتقة من مصادر نباتية متجددة. مادة صادقة ومستقرة، خالية من المذيبات السامة أو الانبعاثات الضارة.',
      fr: 'Façonnée en PLA durable issu de ressources végétales renouvelables. Une matière honnête, stable, sans solvants toxiques ni émissions nocives.',
      en: 'Formed from durable biobased PLA derived from renewable plant materials. An honest, stable medium without toxic emissions or unnecessary waste.'
    }
  },
  {
    number: '03',
    hours: '1/1',
    title: {
      ar: 'تركيب وفحص يدوي فردي في المغرب',
      fr: 'Montage et contrôle à la main',
      en: 'Hand Assembly & Quality Control'
    },
    description: {
      ar: 'التجهيز الكهربائي E14، السلك القماشي المجدول بطول 180 سم، والقاطع الداخلي يتم تجميعها واختبارها قطعة بقطعة يدوياً في ورشتنا بالمغرب.',
      fr: 'L’installation électrique E14, le câble textile tressé de 180 cm et l’interrupteur sont assemblés et rigoureusement testés à la main au Maroc.',
      en: 'The E14 electrical socket, 180 cm braided textile cable, and inline switch are assembled and tested individually by hand in Morocco.'
    }
  },
  {
    number: '04',
    hours: '0 kg',
    title: {
      ar: 'صفر هدر · لا تخزين فائض',
      fr: 'Zéro sur-stock inutile',
      en: 'Zero Unnecessary Overstock'
    },
    description: {
      ar: 'لا نصنع سوى ما يُطلب. لا مستودعات متخمة ولا بضائع مركونة: إيقاع إنتاج واعٍ ومحترم للإنسان والبيئة.',
      fr: 'Nous ne produisons que ce qui est demandé. Pas d’entrepôts saturés ni d’objets invendus : un rythme de fabrication calme et respectueux.',
      en: 'We produce only after an order is placed. No overflowing warehouses or discarded objects: a calm, intentional, and respectful production rhythm.'
    }
  }
];

export const PRODUCTION_PROCESS_STEPS = [
  {
    step: '01',
    slug: 'choose',
    title: { ar: 'الاختيار والطلب', fr: 'Choisir et commander', en: 'Choose & Order' },
    subtitle: { ar: 'اختيارك الشخصي', fr: 'Votre intention', en: 'Your Intention' },
    description: {
      ar: 'تختار لون وردة الأنسب لديكور منزلك. تؤكد طلبك عبر الموقع أو بلمسة واحدة على واتساب. بضع نقرات فقط تكفي.',
      fr: 'Vous sélectionnez la nuance Warda qui dialogue avec votre intérieur. Vous passez commande sur le site ou directement sur WhatsApp. Quelques clics suffisent.',
      en: 'Select the Warda finish that resonates with your space. Complete your order on our site or directly via WhatsApp in just a few clicks.'
    },
    icon: 'sparkles'
  },
  {
    step: '02',
    slug: 'make',
    title: { ar: 'التصنيع في الورشة', fr: 'Fabrication à l’atelier', en: 'Production at the Atelier' },
    subtitle: { ar: '3 إلى 5 أيام عمل', fr: '3 à 5 jours ouvrés', en: '3 to 5 Business Days' },
    description: {
      ar: 'بمجرد التأكيد، يبدأ العمل في ورشتنا المغربية: تشكيل هندسي متطور يتبعه تجميع وفحص يدوي دقيق لكل زاوية وتفصيلة.',
      fr: 'Dès validation, la fabrication démarre dans notre atelier marocain : façonnage numérique de précision, puis assemblage et contrôle manuel de chaque détail.',
      en: 'Upon confirmation, production begins in our Moroccan atelier: precision algorithmic shaping followed by meticulous hand-assembly and detail control.'
    },
    icon: 'hammer'
  },
  {
    step: '03',
    slug: 'ship',
    title: { ar: 'في الطريق إلى بيتك', fr: 'En route vers chez vous', en: 'On the Way Home' },
    subtitle: { ar: 'توصيل مجاني في كل مدن المغرب', fr: 'Livraison offerte partout au Maroc', en: 'Free Delivery Across Morocco' },
    description: {
      ar: 'نغلف كل مصباح بعناية فائقة مع لمسات ورقية فاخرة. يصلك رابط التتبع فور الانطلاق، مع الدفع عند الاستلام.',
      fr: 'Chaque pièce est enveloppée dans un emballage soigné accompagné de ses petits détails papier. Vous recevez un lien de suivi dès l’expédition.',
      en: 'Each piece is carefully packaged with tactile paper details and protective wraps. A live tracking link is emailed as soon as it departs.'
    },
    icon: 'truck'
  }
];

export const CARE_GUIDE = [
  {
    rule: {
      ar: 'يُنظف بقطعة قماش ناعمة وجافة وخالية من الوبر. يُمنع استخدام الماء والمنظفات الكيميائية الكاشطة.',
      fr: 'Nettoyer avec un chiffon doux et sec. Éviter l’eau et les produits abrasifs.',
      en: 'Clean with a soft, dry lint-free cloth. Avoid water and abrasive cleaners.'
    }
  },
  {
    rule: {
      ar: 'تجنب تعريض المصباح لأشعة الشمس المباشرة الطويلة أو لدرجات حرارة تتجاوز 50 درجة مئوية.',
      fr: 'Ne pas exposer à la lumière directe du soleil ni à des températures supérieures à 50 °C.',
      en: 'Do not expose to direct prolonged sunlight or ambient temperatures above 50°C (122°F).'
    }
  },
  {
    rule: {
      ar: 'تجنب تعرض القطعة للرطوبة العالية لفترات متواصلة.',
      fr: 'Éviter toute exposition prolongée à l’humidité.',
      en: 'Avoid prolonged exposure to excessive humidity or wet outdoor conditions.'
    }
  },
  {
    rule: {
      ar: 'استخدم فقط لمبات LED ذات قاعدة E14 (اللمبة 4 واط مرفقة مع المصباح) ولا تتجاوز الاستطاعة المحددة.',
      fr: 'Utiliser uniquement le type d’ampoule recommandé et ne pas dépasser la puissance maximale.',
      en: 'Use only an E14 LED bulb (4 W bulb provided). Never exceed recommended wattage or use hot incandescent bulbs.'
    }
  },
  {
    rule: {
      ar: 'يُرجى التعامل مع القطعة برفق: تحفة فنية بتضاريس ومنحنيات نحتية رقيقة.',
      fr: 'Manipuler avec précaution : pièce artisanale aux ondulations délicates.',
      en: 'Handle with care: an artisanal sculptural object with delicate geometry.'
    }
  }
];

export const CINEMATIC_STORYBOARD = [
  {
    id: 1,
    tag: 'SCENE 01',
    headline: {
      ar: 'قبل النور.',
      fr: 'AVANT LA LUMIÈRE',
      en: 'BEFORE THE LIGHT'
    },
    subtitle: {
      ar: 'سكونٌ تام. تظهر ظلال مصباح وردة في عتمة معمارية هادئة تحبس الأنفاس.',
      fr: 'Un espace calme. La silhouette Warda se dessine dans la pénombre minérale.',
      en: 'A quiet space. The Warda silhouette rests quietly in mineral stillness.'
    },
    imageState: 'coverDark',
    ambientLight: 0.15,
    cameraScale: 1.0,
    accentProduct: 'warda-sienna'
  },
  {
    id: 2,
    tag: 'SCENE 02',
    headline: {
      ar: 'النور، في هدوء.',
      fr: 'LA LUMIÈRE, SANS BRUIT.',
      en: 'LIGHT, QUIETLY.'
    },
    subtitle: {
      ar: 'يستيقظ الدفء بدرجة 2700 كلفن. يشع الغطاء المنحوت من الداخل بهالة عنبرية آسرة.',
      fr: 'La douce température 2700 K s’éveille. L’abat-jour translucide s’illumine de l’intérieur.',
      en: 'Gentle 2700 K warmth awakens. The translucent shade glows softly from within.'
    },
    imageState: 'coverDark',
    ambientLight: 0.85,
    cameraScale: 1.04,
    accentProduct: 'warda-sienna'
  },
  {
    id: 3,
    tag: 'SCENE 03',
    headline: {
      ar: 'الشكل المنحوت.',
      fr: 'LA FORME.',
      en: 'FORM.'
    },
    subtitle: {
      ar: 'قنوات عمودية وتموجات عضوية ناعمة عند القمة. لغة نحتية متميزة.',
      fr: 'Cannelures verticales, ondulations douces au sommet. Une présence sculpturale.',
      en: 'Vertical fluting, gentle undulations at the crown. An organic sculptural presence.'
    },
    imageState: 'angle1',
    ambientLight: 0.9,
    cameraScale: 1.08,
    accentProduct: 'warda-sienna'
  },
  {
    id: 4,
    tag: 'SCENE 04',
    headline: {
      ar: 'صُنعت باليد.',
      fr: 'FAIT DE MAIN D’HOMME.',
      en: 'MADE BY HAND.'
    },
    subtitle: {
      ar: 'مادة حيوية نباتية، ملمس متعرج فريد، و18 ساعة عمل في الورشة لكل مصباح.',
      fr: 'Matière bio-sourcée, textures fines, 18 heures d’atelier pour chaque lampe.',
      en: 'Biobased PLA, micro-relief surface, 18 hours of workshop care per lamp.'
    },
    imageState: 'angle2',
    ambientLight: 0.95,
    cameraScale: 1.15,
    accentProduct: 'warda-sienna'
  },
  {
    id: 5,
    tag: 'SCENE 05',
    headline: {
      ar: 'صُممت لتسكن بيتك.',
      fr: 'FAITE POUR HABITER.',
      en: 'DESIGNED TO BELONG.'
    },
    subtitle: {
      ar: 'وردة سيينا · قاعدة داكنة وجسم تيراكوتا دافئ · 799 درهم',
      fr: 'Warda Sienna · Base sombre, corps terre cuite · 799 DH',
      en: 'Warda Sienna · Dark base, terracotta body · 799 DH'
    },
    imageState: 'coverLight',
    ambientLight: 1.0,
    cameraScale: 1.05,
    accentProduct: 'warda-sienna'
  },
  {
    id: 6,
    tag: 'SCENE 06',
    headline: {
      ar: 'بيتٌ أكثر هدوءاً.',
      fr: 'UNE MAISON PLUS CALME.',
      en: 'A CALMER KIND OF HOME.'
    },
    subtitle: {
      ar: 'قطع فنية تبث السكينة في المكان. استكشف تجليات مجموعة وردة الأربعة.',
      fr: 'Des objets qui adoucissent l’atmosphère. Explorez la collection Warda.',
      en: 'Objects that soften the space. Explore the four Warda expressions.'
    },
    imageState: 'coverLight',
    ambientLight: 1.0,
    cameraScale: 1.0,
    accentProduct: 'warda-sienna'
  }
];
