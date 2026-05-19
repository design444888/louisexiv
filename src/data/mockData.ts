export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: 'colorations' | 'soins' | 'accessoires';
  description: string;
  price: number;
  image: string;
  rating: number;
  volumeOrSize?: string;
  details: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: 'colorations' | 'soins' | 'accessoires';
  description: string;
  iconName: string;
  featured?: boolean;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'cat1',
    name: 'Colorations Naturelles',
    slug: 'colorations',
    description: 'Pigments botaniques et soins profonds pour une couleur vibrante sans agression.',
    iconName: 'Leaf',
    featured: true
  },
  {
    id: 'cat2',
    name: 'Soins Capillaires',
    slug: 'soins',
    description: 'Rituels hydratants et nourrissants infusés d’extraits biologiques des Alpes.',
    iconName: 'Droplets',
    featured: true
  },
  {
    id: 'cat4',
    name: 'Accessoires',
    slug: 'accessoires',
    description: 'Outils de coiffage artisanaux en matières nobles et durables.',
    iconName: 'Sparkles',
    featured: true
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: "La Lumineuse (8/9.31)",
    category: "Coloration végétale",
    categorySlug: "colorations",
    description: "",
    price: 39,
    image: "Photos/la-lumineuse-louisexiv-1.webp",
    rating: 4.8,
    volumeOrSize: "100g",
    details: [
      "La Lumineuse®, L’élégance d’un blond doré ",
       "La Lumineuse® est un véritable blond doré qui s’utilise seule ou en mélange avec les gels et les autres poudres de la gamme Louise XIV®. Elle permet d’obtenir des blonds dorés très subtils et légers. ",

       "Les colorations permanentes Louise XIV® se déposent et se fixent sur le cheveu sans altérer la structure de la fibre capillaire, elles enrobent et gainent le cheveu pour un résultat brillant, doux et soyeux. Que vous soyez Lumineuse®, Ravissante®,  Somptueuse®, Rêveuse®, Flamboyante®, Gourmande® ou Mystérieuse®, la couleur finale dépendra de la teinte et de la nature de vos cheveux, offrant ainsi un résultat unique à chaque femme.",

       "Dans un bol, ajouter trois fois le poids de la poudre en eau bouillante, mélanger jusqu’à obtention d’une crème fluide homogène sans grumeaux. Après rinçage du masque purifiant Louise XIV®, démêler l’ensemble de la chevelure et appliquer généreusement le mélange sur cheveux essorés, en raies fines (en commençant par la bordure du visage). Laisser poser sous un film ou charlotte et sous une source de chaleur (climazon, bonnet, casque chauffant...) durant 20’ à 45’ selon l’intensité. Rincer abondamment sans shampoing jusqu’à obtention d’une eau claire.",

       "Liste des ingrédients : CASSIA OBOVATA LEAF POWDER- LAWSONIA INERMIS LEAF POWDER- LAWSONIA INERMIS LEAF EXTRACT- ACACIA GUM- XANTHAN GUM- HAEMATOXILON CAMPECHIANUM WOOD EXTRACT- MALTODEXTRINE- LYSINE HYDROCHLORIDE.",

    ]
  },
  {
    id: 'p2',
    name: "La Somptueuse (6.3)",
    category: "Coloration végétale",
    categorySlug: "colorations",
    description: " ",
    price: 39,
    image: "Photos/la-somptueuse-louisexiv-1.webp",
    rating: 4.7,
    volumeOrSize: "100g",
    details: [
      "La Somptueuse®- La charme d’un blond foncé doré ",
       "La Somptueuse® est un véritable blond foncé doré qui s’utilise seule ou en mélange avec les gels et les autres poudres de la gamme Louise XIV®. Elle permet d’obtenir des blonds foncés légèrement doré. ",
       "Les colorations permanentes Louise XIV® se déposent et se fixent sur le cheveu sans altérer la structure de la fibre capillaire, elles enrobent et gainent le cheveu pour un résultat brillant,  doux et soyeux. Que vous soyez Somptueuse, Mystérieuse ,Ravissante, Lumineuse, Rêveuse®, Flamboyante® ou Gourmande®, la couleur finale dépendra de la teinte et de la nature de vos cheveux-, offrant ainsi un résultat unique à chaque femme.",

       "Dans un bol, ajouter trois fois le poids de la poudre en eau bouillante, mélanger jusqu’à obtention d’une crème fluide homogène sans grumeaux. Après rinçage du masque purifiant Louise XIV®, démêler l’ensemble de la chevelure et appliquer généreusement le mélange sur cheveux essorés, en raies fines (en commençant par la bordure du visage). Laisser poser sous un film ou charlotte et sous une source de chaleur (climazon- bonnet- casque chauffant...) durant 1h00. Rincer abondamment sans shampoing jusqu’à obtention d’une eau claire. ",

       "Liste des ingrédients : LAWSONIA INERMIS LEAF POWDER- CASSIA OBAVATA LEAF POWDER- POLYGONUM MULTIFLORUM ROOT EXTRACT- GLYCINE SOJA EXTRACT- HAEMATOXYLUM CAMPECHIANUM WOOD EXTRACT- EMBLICA OFFICINALIS FRUIT EXTRACT- TRIGONELLA FOENUM-GRAECUM SEED EXTRACT- INDIGO TINCTORIA LEAF POWDER- CAMELLIA SINENSIS LEAF POWDER- CHARCOAL POWDER- SODIUM",
       "HYDROXIDE- ACACIA SENEGAL GUM- XANTHAN GUM- LAWSONIA INERMIS LEAF EXTRACT- ILLITE- KAOLIN- LYSINE HYDROCHLORIDE",

    ]
  },
  {
    id: 'p3',
    name: "L'Élixir Suprême",
    category: "Soins Capillaires",
    categorySlug: "soins",
    description: "Huile capillaire régénérante aux huiles précieuses d'argan, amande et fleur d'oranger.",
    price: 54,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600",
    rating: 5.0,
    volumeOrSize: "50ml",
    details: [
      "Nutrition intense sans aucun effet gras ni alourdissement.",
      "Répare les pointes sèches et abîmées dès la première application.",
      "Parfum signature délicat de fleur d'oranger biologique.",
      "Application sur cheveux humides ou secs en finition de rituel."
    ]
  },
  {
    id: 'p4',
    name: "La Crème de Soie",
    category: "Soins Capillaires",
    categorySlug: "soins",
    description: "Masque hydratant intense au beurre de karité bio et protéines de soie naturelle.",
    price: 48,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=600",
    rating: 4.7,
    volumeOrSize: "200ml",
    details: [
      "Texture crème onctueuse enveloppante.",
      "Hydratation en profondeur qui redéfinit les boucles et lisse les frisottis.",
      "Ingrédients rigoureusement sélectionnés en Suisse.",
      "Laisser poser 5 à 10 minutes puis rincer abondamment."
    ]
  },
  {
    id: 'p5',
    name: "La Rosée Lactée",
    category: "Soins Capillaires",
    categorySlug: "soins",
    description: "Brume de soin sans rinçage hydratante et thermo-protectrice à l'eau de rose de Damas.",
    price: 36,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600",
    rating: 4.6,
    volumeOrSize: "150ml",
    details: [
      "Démêlage instantané et protection contre la chaleur des plaques.",
      "Laisse une chevelure aérienne, douce et merveilleusement parfumée.",
      "Composée à 98% d'ingrédients d'origine naturelle.",
      "Flacon vaporisateur en verre ambré recyclable."
    ]
  },
  {
    id: 'p6',
    name: "Le Baume d'Eugénia",
    category: "Soins Capillaires",
    categorySlug: "soins",
    description: "Soin de nuit régénérateur ultime pour le cuir chevelu et les longueurs fatiguées.",
    price: 72,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=600",
    rating: 4.9,
    volumeOrSize: "75ml",
    details: [
      "Traitement nocturne ultra-ciblé haute performance.",
      "Stimule la microcirculation et renforce le bulbe capillaire.",
      "Formule d'exception créée personnellement par la Maison.",
      "S'applique le soir, ne nécessite pas de lavage le lendemain."
    ]
  },
  {
    id: 'p7',
    name: "Sérum Absolu",
    category: "Soins Capillaires",
    categorySlug: "soins",
    description: "Concentré jeunesse capillaire aux peptides naturels de riz et cellules souches d'edelweiss.",
    price: 85,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=600",
    rating: 5.0,
    volumeOrSize: "30ml",
    details: [
      "Ralentit le vieillissement de la fibre capillaire.",
      "Augmente la densité des cheveux et apporte une brillance exceptionnelle.",
      "Sérum aqueux fluide sans fini collant ou gras.",
      "Quelques gouttes au quotidien directement sur le cuir chevelu."
    ]
  },
  {
    id: 'p8',
    name: "Le Peigne d'Ébène",
    category: "Accessoires",
    categorySlug: "accessoires",
    description: "Peigne artisanal en bois de poirier noble, poli à la main en Suisse.",
    price: 28,
    image: "https://images.unsplash.com/photo-1590156546746-c2370a8c601f?auto=format&fit=crop&q=80&w=600",
    rating: 4.5,
    volumeOrSize: "1 pièce",
    details: [
      "Bois issu de forêts suisses gérées durablement.",
      "Dents arrondies pour masser doucement le cuir chevelu.",
      "Prévient l'électricité statique naturelle lors du brossage.",
      "Livré dans son étui en lin naturel Louise XIV."
    ]
  },
  {
    id: 'p9',
    name: "La Brosse en Soie",
    category: "Accessoires",
    categorySlug: "accessoires",
    description: "Brosse premium en poils de sanglier fins et manche en bois de hêtre huilé.",
    price: 42,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600",
    rating: 4.8,
    volumeOrSize: "1 pièce",
    details: [
      "Poils de soie naturelle répartissant le sébum des racines aux pointes.",
      "Effet lissant et lustrant immédiat pour des cheveux soyeux.",
      "Conception ergonomique pour une prise en main confortable.",
      "Entièrement fabriquée à la main."
    ]
  },
  {
    id: 'p10',
    name: "La Somptueuse (6.3)",
    category: "Coloration végétale",
    categorySlug: "colorations",
    description: "Coloration végétale châtain profond aux nuances de cacao et d'ortie dioïque alpine.",
    price: 39,
    image: "Photos/la-somptueuse-louisexiv-1.webp",
    rating: 4.7,
    volumeOrSize: "100g",
    details: [
      "La Somptueuse®- La charme d’un blond foncé doré ",
       "La Somptueuse® est un véritable blond foncé doré qui s’utilise seule ou en mélange avec les gels et les autres poudres de la gamme Louise XIV®. Elle permet d’obtenir des blonds foncés légèrement doré. ",
       "Les colorations permanentes Louise XIV® se déposent et se fixent sur le cheveu sans altérer la structure de la fibre capillaire, elles enrobent et gainent le cheveu pour un résultat brillant,  doux et soyeux. Que vous soyez Somptueuse, Mystérieuse ,Ravissante, Lumineuse, Rêveuse®, Flamboyante® ou Gourmande®, la couleur finale dépendra de la teinte et de la nature de vos cheveux-, offrant ainsi un résultat unique à chaque femme.",

       "Dans un bol, ajouter trois fois le poids de la poudre en eau bouillante, mélanger jusqu’à obtention d’une crème fluide homogène sans grumeaux. Après rinçage du masque purifiant Louise XIV®, démêler l’ensemble de la chevelure et appliquer généreusement le mélange sur cheveux essorés, en raies fines (en commençant par la bordure du visage). Laisser poser sous un film ou charlotte et sous une source de chaleur (climazon- bonnet- casque chauffant...) durant 1h00. Rincer abondamment sans shampoing jusqu’à obtention d’une eau claire. ",

       "Liste des ingrédients : LAWSONIA INERMIS LEAF POWDER- CASSIA OBAVATA LEAF POWDER- POLYGONUM MULTIFLORUM ROOT EXTRACT- GLYCINE SOJA EXTRACT- HAEMATOXYLUM CAMPECHIANUM WOOD EXTRACT- EMBLICA OFFICINALIS FRUIT EXTRACT- TRIGONELLA FOENUM-GRAECUM SEED EXTRACT- INDIGO TINCTORIA LEAF POWDER- CAMELLIA SINENSIS LEAF POWDER- CHARCOAL POWDER- SODIUM",
       "HYDROXIDE- ACACIA SENEGAL GUM- XANTHAN GUM- LAWSONIA INERMIS LEAF EXTRACT- ILLITE- KAOLIN- LYSINE HYDROCHLORIDE",

    ]
  },
  {
    id: 'p11',
    name: "Blond Polaire",
    category: "Colorations Naturelles",
    categorySlug: "colorations",
    description: "Soin gloss illuminateur et neutralisateur de reflets jaunes pour blonds délicats.",
    price: 42,
    image: "https://images.unsplash.com/photo-1552046122-03184de85e08?auto=format&fit=crop&q=80&w=600",
    rating: 4.9,
    volumeOrSize: "100g",
    details: [
      "Nuance et illumine les blonds naturels, méchés ou décolorés.",
      "Sublime la clarté et apporte des reflets froids nacrés.",
      "Soin d'exception ultra-doux enrichi en camomille matricaire.",
      "Ingrédients d'origine suisse 100% naturels."
    ]
  },
  {
    id: 'p12',
    name: "La Brume de Quartz",
    category: "Soins Capillaires",
    categorySlug: "soins",
    description: "Shampoing scrub détoxifiant et purifiant aux cristaux de sel des Alpes et argile blanche.",
    price: 38,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=600",
    rating: 4.8,
    volumeOrSize: "200ml",
    details: [
      "Exfolie en douceur le cuir chevelu et élimine les impuretés.",
      "Régule l'excès de sébum et oxygène les bulbes capillaires.",
      "Laisse une sensation de fraîcheur cristalline immédiate.",
      "Idéal en soin clarifiant une fois par semaine."
    ]
  },
  {
    id: 'p13',
    name: "Le Bol d'Apothicaire",
    category: "Accessoires",
    categorySlug: "accessoires",
    description: "Bol en grès artisanal tourné à la main, conçu pour la préparation des rituels de coloration.",
    price: 45,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=600",
    rating: 4.9,
    volumeOrSize: "1 pièce",
    details: [
      "Grès naturel cuit à haute température, résistant aux pigments.",
      "Chaque pièce est unique, signée par un céramiste suisse.",
      "Forme ergonomique assurant un mélange parfait des poudres végétales.",
      "Facile à nettoyer, passe au lave-vaisselle."
    ]
  },
  {
    id: 'p14',
    name: "Le Pinceau de Soie",
    category: "Accessoires",
    categorySlug: "accessoires",
    description: "Pinceau professionnel en poils synthétiques de haute qualité et manche en hêtre verni.",
    price: 19,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=600",
    rating: 4.6,
    volumeOrSize: "1 pièce",
    details: [
      "Fibres souples et denses pour une application précise des colorations.",
      "N'abîme pas la fibre capillaire ni le cuir chevelu.",
      "Manche en bois résistant à l'eau et aux taches de pigments.",
      "Conçu pour une durabilité professionnelle infinie."
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art1',
    title: "L'Art de la Coloration Végétale : Pourquoi franchir le pas ?",
    excerpt: "Découvrez comment les pigments naturels respectent la structure de vos cheveux tout en leur offrant des reflets incomparables.",
    content: "La coloration végétale n'est pas un simple compromis pour les personnes allergiques ou enceintes : c'est un véritable traitement de beauté. Contrairement aux colorations chimiques qui ouvrent de force les écailles du cheveu et en modifient la structure interne, la coloration végétale enveloppe la fibre. Elle agit comme une gaine protectrice, comblant les brèches et épaississant le cheveu. Résultat ? Une brillance miroir inégalée, des cheveux plus forts et une couleur qui évolue de manière extrêmement naturelle sans effet racine brutal. Chez Louise XIV, nous sélectionnons des poudres de plantes d'une pureté exceptionnelle pour sublimer vos reflets tout en respectant l'équilibre de votre cuir chevelu.",
    date: "12 Mai 2026",
    readTime: "5 min de lecture",
    category: "Colorations Naturelles",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'art2',
    title: "Le Rituel de Nuit Régénérateur : Le secret d'une régénération absolue",
    excerpt: "Comment optimiser le cycle circadien de vos cheveux pour retrouver force et densité au réveil.",
    content: "Tout comme la peau, le cuir chevelu et les cheveux possèdent leur propre horloge biologique. La nuit est le moment où l'activité cellulaire de régénération est à son maximum. C'est en partant de ce constat que notre laboratoire a développé son célèbre Rituel de Nuit. Libérée des agressions extérieures (pollution, UV, brossage répétitif), la fibre capillaire est hautement réceptive aux actifs réparateurs. En appliquant notre Baume de nuit avant le coucher, vous permettez aux lipides végétaux et aux peptides de s'infiltrer lentement au cœur du cortex. Le matin, vos cheveux ne sont pas gras : ils ont bu le soin, ils sont repulpés, forts et soyeux dès le réveil.",
    date: "28 Avril 2026",
    readTime: "4 min de lecture",
    category: "Soins Capillaires",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'art3',
    title: "5 Gestes simples pour préserver l'hydratation de vos cheveux en été",
    excerpt: "Soleil, sel et chlore mettent à rude épreuve votre barrière protectrice. Nos experts partagent leur routine protectrice.",
    content: "L'été approche et avec lui, les agressions naturelles pour notre chevelure. Le soleil détruit la kératine tandis que le sel et le chlore dessèchent profondément la fibre. Pour garder des cheveux soyeux et préserver l'éclat de vos colorations végétales, voici 5 gestes incontournables : 1. Rincez toujours vos cheveux à l'eau claire après chaque baignade. 2. Vaporisez notre Rosée Lactée pour créer un voile protecteur contre la déshydratation. 3. Évitez les appareils de coiffage chauffants et profitez du séchage à l'air libre. 4. Faites un bain d'huile avec l'Élixir Suprême avant votre shampooing pour nourrir intensément. 5. Utilisez un peigne en bois noble pour éviter l'électricité statique et ne pas casser les cheveux sensibilisés.",
    date: "15 Avril 2026",
    readTime: "6 min de lecture",
    category: "Soins Capillaires",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: "La coloration végétale Louise XIV couvre-t-elle les cheveux blancs ?",
    answer: "Oui, tout à fait. Nos formulations exclusives enrichies en pigments botaniques de haute technicité permettent de couvrir les cheveux blancs en transparence ou de manière opaque selon le temps de pose. Contrairement à la coloration chimique, le blanc devient un reflet plus clair, créant un effet méché naturel et harmonieux extrêmement élégant."
  },
  {
    id: 'faq2',
    question: "Les produits conviennent-ils aux cuirs chevelus très sensibles ou allergiques ?",
    answer: "Nos soins et colorations ont été formulés avec le plus grand soin en Suisse, en excluant les principaux allergènes cutanés. Sans ammoniaque, sans parabènes, sans parfums de synthèse agressifs et sans sulfates, ils conviennent parfaitement aux personnes aux cuirs chevelus réactifs, fragilisés ou ayant subi des traitements médicaux lourds. Nous vous recommandons toujours d'effectuer un test de pli de coude 48h avant l'application d'une coloration."
  },
  {
    id: 'faq4',
    question: "Comment utiliser l'Élixir Suprême sans alourdir mes cheveux fins ?",
    answer: "L'Élixir Suprême est une huile sèche fine hautement pénétrante. Pour les cheveux fins, la clé est le dosage : 1 à 2 gouttes suffisent amplement. Chauffez l'huile entre les paumes de vos mains puis effleurez les longueurs humides ou sèches en insistant uniquement sur les pointes. Vos cheveux absorberont instantanément le soin et retrouveront une brillance incomparable tout en restant légers et aériens."
  }
];
