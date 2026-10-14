/* SOLVÉRA fictional demo catalogue. Product names, prices, ratings and reviews are sample content. */
const PRODUCTS = [
  {
    "id": 1,
    "name": "Cloudmilk Gentle Cleanser",
    "category": "Skincare",
    "type": "Cleanser",
    "price": 649,
    "rating": 4.8,
    "popularity": 98,
    "skinTypes": [
      "All",
      "Dry",
      "Sensitive"
    ],
    "concerns": [
      "Dryness",
      "Sensitivity"
    ],
    "finish": "",
    "shades": [],
    "size": "150 ml",
    "description": "A cushiony, low-foam cleanser that lifts daily buildup without leaving skin tight.",
    "details": "Massage onto damp skin for 30–60 seconds, then rinse. Use morning and evening.",
    "ingredients": "Glycerin, oat extract, panthenol, mild amino-acid surfactants",
    "image": "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85",
    "best": true,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 2,
    "name": "Dewdrop Balancing Toner",
    "category": "Skincare",
    "type": "Toner",
    "price": 790,
    "rating": 4.7,
    "popularity": 84,
    "skinTypes": [
      "All",
      "Oily",
      "Combination"
    ],
    "concerns": [
      "Oiliness",
      "Dullness"
    ],
    "finish": "",
    "shades": [],
    "size": "120 ml",
    "description": "A refreshing, alcohol-free toner for a comfortable, balanced-feeling complexion.",
    "details": "Pat into clean skin with hands or a reusable cotton pad.",
    "ingredients": "Niacinamide, green tea extract, betaine",
    "image": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=85",
    "best": false,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 3,
    "name": "Daybreak Vitamin C Serum",
    "category": "Skincare",
    "type": "Serum",
    "price": 1199,
    "rating": 4.9,
    "popularity": 99,
    "skinTypes": [
      "All",
      "Combination",
      "Oily"
    ],
    "concerns": [
      "Dullness",
      "Uneven Tone"
    ],
    "finish": "",
    "shades": [],
    "size": "30 ml",
    "description": "A lightweight daily serum designed to leave skin looking fresh and radiant.",
    "details": "Apply a few drops in the morning before moisturiser and sunscreen.",
    "ingredients": "Vitamin C derivative, hyaluronic acid, vitamin E",
    "image": "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
    "best": true,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 4,
    "name": "Plump Ritual Hyaluronic Serum",
    "category": "Skincare",
    "type": "Serum",
    "price": 999,
    "rating": 4.8,
    "popularity": 93,
    "skinTypes": [
      "All",
      "Dry",
      "Sensitive"
    ],
    "concerns": [
      "Dehydration",
      "Dryness"
    ],
    "finish": "",
    "shades": [],
    "size": "30 ml",
    "description": "A silky hydration layer that helps skin feel supple and comfortably plump.",
    "details": "Apply to slightly damp skin, then seal with moisturiser.",
    "ingredients": "Multi-weight hyaluronic acid, panthenol, glycerin",
    "image": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85",
    "best": true,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 5,
    "name": "Soft Focus Daily Moisturiser",
    "category": "Skincare",
    "type": "Moisturizer",
    "price": 899,
    "rating": 4.7,
    "popularity": 91,
    "skinTypes": [
      "All",
      "Combination",
      "Oily"
    ],
    "concerns": [
      "Oiliness",
      "Dehydration"
    ],
    "finish": "",
    "shades": [],
    "size": "50 g",
    "description": "A breathable gel-cream that layers beautifully under SPF and makeup.",
    "details": "Smooth over face and neck after serum, morning and night.",
    "ingredients": "Squalane, ceramides, niacinamide",
    "image": "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
    "best": true,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 6,
    "name": "Stillwater Barrier Cream",
    "category": "Skincare",
    "type": "Barrier Cream",
    "price": 1099,
    "rating": 4.9,
    "popularity": 89,
    "skinTypes": [
      "Dry",
      "Sensitive",
      "All"
    ],
    "concerns": [
      "Dryness",
      "Sensitivity",
      "Barrier Support"
    ],
    "finish": "",
    "shades": [],
    "size": "50 g",
    "description": "A rich, comforting cream for skin that wants a little extra care.",
    "details": "Press a pea-sized amount over moisturiser or use as your final step.",
    "ingredients": "Ceramides, colloidal oat, shea butter",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85",
    "best": false,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 7,
    "name": "Dayveil SPF 50 Sunscreen",
    "category": "Skincare",
    "type": "Sunscreen",
    "price": 849,
    "rating": 4.8,
    "popularity": 97,
    "skinTypes": [
      "All",
      "Oily",
      "Dry",
      "Sensitive"
    ],
    "concerns": [
      "Sun Protection",
      "Uneven Tone"
    ],
    "finish": "",
    "shades": [],
    "size": "50 g",
    "description": "A daily broad-spectrum SPF 50 formula with a comfortable, non-greasy feel.",
    "details": "Apply generously as the last morning skincare step. Reapply every two hours outdoors.",
    "ingredients": "Broad-spectrum UV filters, glycerin, vitamin E",
    "image": "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85",
    "best": true,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 8,
    "name": "Moonbath Enzyme Mask",
    "category": "Skincare",
    "type": "Face Mask",
    "price": 749,
    "rating": 4.6,
    "popularity": 76,
    "skinTypes": [
      "Normal",
      "Combination",
      "Oily"
    ],
    "concerns": [
      "Dullness",
      "Texture"
    ],
    "finish": "",
    "shades": [],
    "size": "75 ml",
    "description": "A weekly rinse-off mask for a smoother-looking, refreshed finish.",
    "details": "Use once weekly as directed. Patch test first and avoid irritated skin.",
    "ingredients": "Papaya enzyme, kaolin, aloe vera",
    "image": "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85",
    "best": false,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 9,
    "name": "Petal Kiss Lip Balm",
    "category": "Skincare",
    "type": "Lip Care",
    "price": 399,
    "rating": 4.7,
    "popularity": 88,
    "skinTypes": [
      "All"
    ],
    "concerns": [
      "Dryness"
    ],
    "finish": "",
    "shades": [],
    "size": "12 g",
    "description": "A soft, cushiony balm that keeps lips feeling cared for through the day.",
    "details": "Swipe on whenever lips feel dry.",
    "ingredients": "Shea butter, jojoba oil, vitamin E",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85",
    "best": false,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 10,
    "name": "Velvet Skin Serum Foundation",
    "category": "Makeup",
    "type": "Foundation",
    "price": 1299,
    "rating": 4.8,
    "popularity": 95,
    "skinTypes": [
      "All",
      "Dry",
      "Combination"
    ],
    "concerns": [
      "Uneven Tone"
    ],
    "finish": "Natural",
    "shades": [
      "Porcelain",
      "Warm Sand",
      "Golden Beige",
      "Honey",
      "Cocoa",
      "Deep Umber"
    ],
    "size": "30 ml",
    "description": "Flexible, skin-like coverage with a soft natural finish across a thoughtful shade range.",
    "details": "Start at the centre of the face and blend outward with fingers, brush or sponge.",
    "ingredients": "Glycerin, vitamin E",
    "image": "https://images.unsplash.com/photo-1631214540242-5b7f5b2c7a6d?auto=format&fit=crop&w=900&q=85",
    "best": true,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 11,
    "name": "Second-Skin Concealer",
    "category": "Makeup",
    "type": "Concealer",
    "price": 699,
    "rating": 4.6,
    "popularity": 83,
    "skinTypes": [
      "All"
    ],
    "concerns": [
      "Uneven Tone"
    ],
    "finish": "Natural",
    "shades": [
      "Porcelain",
      "Warm Sand",
      "Golden Beige",
      "Honey",
      "Cocoa",
      "Deep Umber"
    ],
    "size": "8 ml",
    "description": "Buildable spot and under-eye coverage that blends without a heavy look.",
    "details": "Dot sparingly and tap to blend. Choose a matching shade for spots or a slightly brighter one under eyes.",
    "ingredients": "Squalane, vitamin E",
    "image": "https://images.unsplash.com/photo-1631214540242-5b7f5b2c7a6d?auto=format&fit=crop&w=900&q=85",
    "best": false,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 12,
    "name": "Rosewood Cream Lipstick",
    "category": "Makeup",
    "type": "Lipstick",
    "price": 799,
    "rating": 4.9,
    "popularity": 94,
    "skinTypes": [
      "All"
    ],
    "concerns": [],
    "finish": "Satin",
    "shades": [
      "Rosewood",
      "Terracotta",
      "Mulberry",
      "Nude Fig"
    ],
    "size": "3.5 g",
    "description": "A comfortable satin lipstick in wearable shades inspired by warm natural pigments.",
    "details": "Apply directly or tap on with a fingertip for a diffused stain.",
    "ingredients": "Castor seed oil, jojoba oil, vitamin E",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85",
    "best": true,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 13,
    "name": "Glass Petal Lip Gloss",
    "category": "Makeup",
    "type": "Lip Gloss",
    "price": 649,
    "rating": 4.5,
    "popularity": 78,
    "skinTypes": [
      "All"
    ],
    "concerns": [],
    "finish": "Glossy",
    "shades": [
      "Clear",
      "Rose Quartz",
      "Caramel Glaze"
    ],
    "size": "5 ml",
    "description": "A non-sticky shine layer for a fresh, glass-like lip look.",
    "details": "Wear alone or layer over lipstick.",
    "ingredients": "Jojoba oil, vitamin E",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85",
    "best": false,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 14,
    "name": "Tinted Comfort Lip Balm",
    "category": "Makeup",
    "type": "Lip Balm",
    "price": 449,
    "rating": 4.7,
    "popularity": 80,
    "skinTypes": [
      "All"
    ],
    "concerns": [
      "Dryness"
    ],
    "finish": "Dewy",
    "shades": [
      "Bare Rose",
      "Berry Tint",
      "Warm Nude"
    ],
    "size": "4 g",
    "description": "A sheer wash of colour with everyday lip comfort.",
    "details": "Swipe on for a quick, low-effort tint.",
    "ingredients": "Shea butter, squalane",
    "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85",
    "best": false,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 15,
    "name": "Cloud Blush Cream Tint",
    "category": "Makeup",
    "type": "Blush",
    "price": 749,
    "rating": 4.7,
    "popularity": 87,
    "skinTypes": [
      "All"
    ],
    "concerns": [],
    "finish": "Dewy",
    "shades": [
      "Petal",
      "Apricot",
      "Berry",
      "Cinnamon"
    ],
    "size": "5 g",
    "description": "A blendable cream blush that melts into skin for a just-pinched flush.",
    "details": "Tap onto cheeks and blend with fingers or a brush.",
    "ingredients": "Jojoba oil, vitamin E",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
    "best": false,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 16,
    "name": "Sunlit Beam Highlighter",
    "category": "Makeup",
    "type": "Highlighter",
    "price": 899,
    "rating": 4.6,
    "popularity": 72,
    "skinTypes": [
      "All"
    ],
    "concerns": [],
    "finish": "Radiant",
    "shades": [
      "Champagne",
      "Rose Gold",
      "Bronze Glow"
    ],
    "size": "6 g",
    "description": "A finely milled glow that catches the light without chunky sparkle.",
    "details": "Sweep over cheekbones, brow bones and cupid’s bow.",
    "ingredients": "Mica, squalane",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
    "best": false,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 17,
    "name": "Lash Poetry Mascara",
    "category": "Makeup",
    "type": "Mascara",
    "price": 699,
    "rating": 4.6,
    "popularity": 85,
    "skinTypes": [
      "All"
    ],
    "concerns": [],
    "finish": "Volumising",
    "shades": [
      "Soft Black",
      "Deep Brown"
    ],
    "size": "9 ml",
    "description": "A defining mascara for lifted-looking lashes and soft everyday drama.",
    "details": "Wiggle from root to tip. Remove gently at the end of the day.",
    "ingredients": "Carnauba wax, panthenol",
    "image": "https://images.unsplash.com/photo-1631214540242-5b7f5b2c7a6d?auto=format&fit=crop&w=900&q=85",
    "best": false,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 18,
    "name": "Fine Line Liquid Eyeliner",
    "category": "Makeup",
    "type": "Eyeliner",
    "price": 599,
    "rating": 4.5,
    "popularity": 69,
    "skinTypes": [
      "All"
    ],
    "concerns": [],
    "finish": "Matte",
    "shades": [
      "Black",
      "Brown"
    ],
    "size": "1 ml",
    "description": "A precise felt tip for a clean line or a subtle wing.",
    "details": "Use short strokes close to the lash line.",
    "ingredients": "Film-forming pigments",
    "image": "https://images.unsplash.com/photo-1631214540242-5b7f5b2c7a6d?auto=format&fit=crop&w=900&q=85",
    "best": false,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 19,
    "name": "Soft Earth Eyeshadow Quad",
    "category": "Makeup",
    "type": "Eyeshadow",
    "price": 999,
    "rating": 4.8,
    "popularity": 74,
    "skinTypes": [
      "All"
    ],
    "concerns": [],
    "finish": "Matte & shimmer",
    "shades": [
      "Clay",
      "Olive",
      "Cocoa"
    ],
    "size": "8 g",
    "description": "Four easy-to-blend neutrals for soft definition from day to evening.",
    "details": "Layer matte shades for dimension and tap shimmer onto the centre of the lid.",
    "ingredients": "Mica, mineral pigments",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
    "best": false,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 20,
    "name": "Airset Translucent Powder",
    "category": "Makeup",
    "type": "Setting Powder",
    "price": 849,
    "rating": 4.6,
    "popularity": 73,
    "skinTypes": [
      "All",
      "Oily",
      "Combination"
    ],
    "concerns": [
      "Oiliness"
    ],
    "finish": "Soft matte",
    "shades": [
      "Translucent",
      "Warm Translucent"
    ],
    "size": "10 g",
    "description": "A finely milled powder to soften shine while keeping makeup looking like skin.",
    "details": "Press a small amount into areas that need extra staying power.",
    "ingredients": "Silica, rice powder",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
    "best": false,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 21,
    "name": "Sunday Body Wash",
    "category": "Body Care",
    "type": "Body Wash",
    "price": 549,
    "rating": 4.7,
    "popularity": 81,
    "skinTypes": [
      "All",
      "Dry",
      "Sensitive"
    ],
    "concerns": [
      "Dryness"
    ],
    "finish": "",
    "shades": [],
    "size": "250 ml",
    "description": "A gentle, creamy wash with a clean, softly botanical scent.",
    "details": "Work into a lather on wet skin and rinse thoroughly.",
    "ingredients": "Glycerin, aloe vera, oat extract",
    "image": "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
    "best": false,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 22,
    "name": "Silk Veil Body Lotion",
    "category": "Body Care",
    "type": "Body Lotion",
    "price": 699,
    "rating": 4.8,
    "popularity": 86,
    "skinTypes": [
      "All",
      "Dry"
    ],
    "concerns": [
      "Dryness"
    ],
    "finish": "",
    "shades": [],
    "size": "250 ml",
    "description": "A fast-absorbing lotion that leaves skin feeling smooth and comfortable.",
    "details": "Massage into skin after showering, while skin is slightly damp.",
    "ingredients": "Shea butter, squalane, glycerin",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85",
    "best": true,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 23,
    "name": "Polished Oat Body Scrub",
    "category": "Body Care",
    "type": "Body Scrub",
    "price": 599,
    "rating": 4.5,
    "popularity": 67,
    "skinTypes": [
      "All",
      "Dry"
    ],
    "concerns": [
      "Texture",
      "Dryness"
    ],
    "finish": "",
    "shades": [],
    "size": "200 g",
    "description": "A gentle-feeling body polish for a soft, smooth finish.",
    "details": "Massage lightly onto damp skin once or twice weekly, then rinse.",
    "ingredients": "Oat powder, sunflower oil, fine sugar",
    "image": "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85",
    "best": false,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  },
  {
    "id": 24,
    "name": "Pocket Silk Hand Cream",
    "category": "Body Care",
    "type": "Hand Cream",
    "price": 349,
    "rating": 4.6,
    "popularity": 75,
    "skinTypes": [
      "All",
      "Dry",
      "Sensitive"
    ],
    "concerns": [
      "Dryness"
    ],
    "finish": "",
    "shades": [],
    "size": "50 ml",
    "description": "A pocket-sized hand cream for soft, cared-for hands without a greasy finish.",
    "details": "Massage into hands and cuticles whenever needed.",
    "ingredients": "Glycerin, shea butter, panthenol",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85",
    "best": false,
    "reviews": [
      {
        "name": "Sample customer",
        "rating": 5,
        "text": "Demo review: a lovely texture and an easy addition to my routine."
      },
      {
        "name": "Sample customer",
        "rating": 4,
        "text": "Demo review: feels thoughtful and comfortable on the skin."
      }
    ]
  }
];
