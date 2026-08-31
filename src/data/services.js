// Services Catalog Data
// All services are organized into distinct categories with starting prices and images.

export const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "hair", label: "Hair Care & Styling" },
  { id: "skin", label: "Skin & Facial" },
  { id: "makeup", label: "Makeup & Glam" },
  { id: "nails", label: "Nails & Spa" },
  { id: "beauty", label: "Beauty Care & Waxing" }
];

export const servicesData = [
  // HAIR SERVICES
  {
    id: "h1",
    category: "hair",
    categoryLabel: "Hair",
    name: "Haircut & Styling",
    description: "Custom haircut tailored to your face structure, finished with professional blow-dry and heat styling.",
    startingPrice: 499,
    duration: "45 mins",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
    popular: true
  },
  {
    id: "h2",
    category: "hair",
    categoryLabel: "Hair",
    name: "Hair Spa",
    description: "Nourishing deep conditioning treatment with scalp massage to restore moisture, shine, and repair damaged cuticles.",
    startingPrice: 899,
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    popular: true
  },
  {
    id: "h3",
    category: "hair",
    categoryLabel: "Hair",
    name: "Hair Coloring",
    description: "Global hair color using premium ammonia-free formulas for vivid shine and seamless coverage.",
    startingPrice: 1999,
    duration: "90 mins",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800",
    popular: false
  },
  {
    id: "h4",
    category: "hair",
    categoryLabel: "Hair",
    name: "Hair Highlights / Balayage",
    description: "Multi-dimensional foil highlights or hand-painted balayage for texture and sun-kissed brightness.",
    startingPrice: 2499,
    duration: "120 mins",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800",
    popular: false
  },
  {
    id: "h5",
    category: "hair",
    categoryLabel: "Hair",
    name: "Keratin Smoothing Treatment",
    description: "Frizz-eliminating protein treatment that smooths, strengthens, and gives ultra-glossy manageable hair for months.",
    startingPrice: 3999,
    duration: "150 mins",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
    popular: true
  },
  {
    id: "h6",
    category: "hair",
    categoryLabel: "Hair",
    name: "Hair Smoothening / Rebonding",
    description: "Permanent straight smoothening treatment for silky, straight, soft, and tangle-free hair.",
    startingPrice: 4499,
    duration: "180 mins",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800",
    popular: false
  },

  // SKIN & FACIAL SERVICES
  {
    id: "s1",
    category: "skin",
    categoryLabel: "Skin & Facial",
    name: "Express Cleanup",
    description: "Deep cleansing, gentle exfoliation, steam, blackhead removal, and soothing mask for instant fresh skin.",
    startingPrice: 599,
    duration: "30 mins",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
    popular: false
  },
  {
    id: "s2",
    category: "skin",
    categoryLabel: "Skin & Facial",
    name: "Basic Glow Facial",
    description: "Hydrating facial treatment formulated to replenish moisture, even skin tone, and restore natural elasticity.",
    startingPrice: 899,
    duration: "45 mins",
    image: "https://images.unsplash.com/photo-1512290900673-70020473d09e?auto=format&fit=crop&q=80&w=800",
    popular: false
  },
  {
    id: "s3",
    category: "skin",
    categoryLabel: "Skin & Facial",
    name: "Radiant Gold Facial",
    description: "Luxury facial enriched with 24k gold foil dust to boost collagen, reduce pigmentation, and provide golden glow.",
    startingPrice: 1499,
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1512290900673-70020473d09e?auto=format&fit=crop&q=80&w=800",
    popular: true
  },
  {
    id: "s4",
    category: "skin",
    categoryLabel: "Skin & Facial",
    name: "Pearl Whitening Facial",
    description: "Pearl ash extracts to lighten dark spots, brighten complexion, and deliver a porcelain smooth texture.",
    startingPrice: 1699,
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    popular: false
  },
  {
    id: "s5",
    category: "skin",
    categoryLabel: "Skin & Facial",
    name: "Diamond Polishing Facial",
    description: "Advanced microdermabrasion diamond facial for deep skin resurfacing, pore tightening, and glass skin finish.",
    startingPrice: 1999,
    duration: "75 mins",
    image: "https://images.unsplash.com/photo-1512290900673-70020473d09e?auto=format&fit=crop&q=80&w=800",
    popular: true
  },
  {
    id: "s6",
    category: "skin",
    categoryLabel: "Skin & Facial",
    name: "Anti-Aging Collagen Facial",
    description: "Rejuvenating treatment with hyaluronic acid and collagen boosters to firm fine lines and lift dull skin.",
    startingPrice: 2499,
    duration: "75 mins",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
    popular: false
  },

  // MAKEUP SERVICES
  {
    id: "m1",
    category: "makeup",
    categoryLabel: "Makeup",
    name: "Basic Soft Makeup",
    description: "Subtle everyday daytime or dinner party makeup focusing on soft skin finish, light eye shading, and lip gloss.",
    startingPrice: 1499,
    duration: "45 mins",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
    popular: false
  },
  {
    id: "m2",
    category: "makeup",
    categoryLabel: "Makeup",
    name: "Glam Party Makeup",
    description: "Gorgeous evening party glam including lash extensions, contouring, smokey eye makeup, and long-stay lipstick.",
    startingPrice: 2499,
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    popular: true
  },
  {
    id: "m3",
    category: "makeup",
    categoryLabel: "Makeup",
    name: "Engagement / Roka Makeup",
    description: "Elegant semi-bridal look crafted with high-definition products to ensure photography perfection.",
    startingPrice: 3999,
    duration: "90 mins",
    image: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&q=80&w=800",
    popular: true
  },
  {
    id: "m4",
    category: "makeup",
    categoryLabel: "Makeup",
    name: "HD Waterproof Makeup",
    description: "High-definition light-reflecting makeup formula that resists heat, humidity, and tears for 18+ hours.",
    startingPrice: 5999,
    duration: "100 mins",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
    popular: true
  },
  {
    id: "m5",
    category: "makeup",
    categoryLabel: "Makeup",
    name: "Royal Bridal Makeup Package",
    description: "Full luxury wedding day bridal transformation including hair styling, saree/dupatta draping, and eyelash application.",
    startingPrice: 9999,
    duration: "180 mins",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
    popular: true
  },

  // NAIL SERVICES
  {
    id: "n1",
    category: "nails",
    categoryLabel: "Nails",
    name: "Classic Manicure",
    description: "Nail shaping, cuticle grooming, hand scrub exfoliation, soothing hand massage, and high-shine polish.",
    startingPrice: 399,
    duration: "30 mins",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800",
    popular: false
  },
  {
    id: "n2",
    category: "nails",
    categoryLabel: "Nails",
    name: "Classic Pedicure",
    description: "Relaxing foot soak, heel buffing, nail trimming, scrub exfoliation, foot massage, and polish.",
    startingPrice: 499,
    duration: "45 mins",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800",
    popular: true
  },
  {
    id: "n3",
    category: "nails",
    categoryLabel: "Nails",
    name: "Gel Nail Extensions",
    description: "Durable builder gel nail extensions with customized shape (almond, square, coffin) and UV gel color.",
    startingPrice: 1299,
    duration: "75 mins",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800",
    popular: true
  },
  {
    id: "n4",
    category: "nails",
    categoryLabel: "Nails",
    name: "Designer Nail Art",
    description: "Intricate hand-painted nail designs, foil accents, French tips, or rhinestone embellishments per nail.",
    startingPrice: 199,
    duration: "20 mins",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800",
    popular: false
  },

  // BEAUTY CARE & WAXING
  {
    id: "b1",
    category: "beauty",
    categoryLabel: "Beauty Care",
    name: "Eyebrow & Upper Lip Threading",
    description: "Precise eyebrow shaping and upper lip hair removal using organic anti-bacterial cotton thread.",
    startingPrice: 79,
    duration: "15 mins",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
    popular: true
  },
  {
    id: "b2",
    category: "beauty",
    categoryLabel: "Beauty Care",
    name: "Full Hand Waxing",
    description: "Smooth chocolate or Rica painless wax for complete arm hair removal and gentle tan clearance.",
    startingPrice: 349,
    duration: "30 mins",
    image: "https://images.unsplash.com/photo-1512290900673-70020473d09e?auto=format&fit=crop&q=80&w=800",
    popular: false
  },
  {
    id: "b3",
    category: "beauty",
    categoryLabel: "Beauty Care",
    name: "Full Leg Waxing",
    description: "Soothing full leg waxing leaving skin silky smooth, soft, and completely stubble-free.",
    startingPrice: 499,
    duration: "45 mins",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800",
    popular: false
  },
  {
    id: "b4",
    category: "beauty",
    categoryLabel: "Beauty Care",
    name: "Full Body Luxury Waxing",
    description: "Comprehensive head-to-toe Rica wax treatment infused with essential oils for velvety soft skin.",
    startingPrice: 1499,
    duration: "90 mins",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
    popular: true
  }
];
