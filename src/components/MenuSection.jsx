import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

// Import images
import heroDish from '../assets/hero_dish.png';
import menuAppetizer from '../assets/menu_appetizer.png';
import menuCurry from '../assets/menu_curry.png';
import menuDessert from '../assets/menu_dessert.png';
import mahaStreetPadThaiImg from '../assets/Maha Street Pad Thai.png';
import coconutShellSeafoodImg from '../assets/Coconut Shell Seafood.png';
import shrimpToastImg from '../assets/Shrimp Toast .png';
import crispySpringRollsImg from '../assets/Crispy Spring Rolls (veg  shrimp  chicken).png';
import crunchyMahaRollsImg from '../assets/Crunchy Maha Rolls.png';
import firecrackerShrimpImg from '../assets/Firecracker Shrimp.png';
import freshGardenRollsImg from '../assets/Fresh Garden Rolls.png';
import goldenFriedTofuImg from '../assets/Golden Fried Tofu.png';
import mahaCrispyCrabBitesImg from '../assets/Maha Crispy Crab Bites.png';
import panSearedDumplingsImg from '../assets/Pan-Seared Dumplings (chicken  pork  veg).png';
import streetSataySkewersImg from '../assets/Street Satay Skewers (chicken  spicy chicken 🌶️  tofu).png';
import vietnameseFreshRollsImg from '../assets/Vietnamese Fresh Rolls.png';
import caramelizedPadSeeEwImg from '../assets/Caramelized Pad See Ew.png';
import glassNoodleSeafoodSaladImg from '../assets/Glass Noodle Seafood Salad (Yum Woon Sen).png';
import greenPapayaCrunchImg from '../assets/Green Papaya Crunch (Som Tum Thai).png';
import midnightDrunkenNoodlesImg from '../assets/Midnight Drunken Noodles .png';
import northernLarbHerbSaladImg from '../assets/Northern Larb Herb Salad .png';
import padThaiOmeletteWrapImg from '../assets/Pad Thai Omelette Wrap.png';
import somTumPooPlaraImg from '../assets/Som Tum Poo Plara.png';
import somTumPooImg from '../assets/Som Tum Poo.png';
import yumSeafoodCombinationImg from '../assets/Yum Seafood Combination .png';
import yumShrimpOrSquidImg from '../assets/Yum Shrimp or Squid .png';
import bangkokFireBasilRiceImg from '../assets/Bangkok Fire BasilRice.png';
import edamameImg from '../assets/Edamame .png';
import glassNoodleStirFryImg from '../assets/Glass Noodle Stir Fry (Pad Wun Sen).png';
import mahaHotPotImg from '../assets/Maha Hot Pot (Seasonal).png';
import northernKhaoSoiImg from '../assets/Northern Khao Soi.png';
import riceComfortSoupImg from '../assets/Rice Comfort Soup (Khao Tom).png';
import thaiSukiyakiStirFryImg from '../assets/Thai Sukiyaki Stir-Fry (Suki Hang).png';
import tomYumCreamyBrothImg from '../assets/Tom Yum Creamy Broth.png';
import tomYumFireBrothImg from '../assets/Tom Yum Fire Broth (Clear).png';
import tomKhaCoconutSoupImg from '../assets/Tom kha coconut soup.png';
import classicThaiFriedRiceImg from '../assets/Classic Thai Fried Rice.png';
import crabButterFriedRiceImg from '../assets/Crab Butter Fried Rice.png';
import currySpicedFriedRiceImg from '../assets/Curry Spiced Fried Rice.png';
import pineappleIslandFriedRiceImg from '../assets/Pineapple Island Fried Rice.png';
import goldenYellowCurryImg from '../assets/Golden Yellow Curry.png';
import greenHerbCurryImg from '../assets/Green Herb Curry.png';
import jungleHeatCurryImg from '../assets/Jungle Heat Curry.png';
import massamanComfortCurryImg from '../assets/Massaman Comfort Curry.png';
import panangSilkCurryImg from '../assets/Panang Silk Curr.png';
import redCurryWithPumpkinImg from '../assets/Red Curry with Pumpkin.png';
import redFireCurryImg from '../assets/Red Fire Curry.png';

// Signature dishes matching mockup
export const signatureDishes = [
  {
    id: 'sig-1',
    name: 'Maha Street Pad Thai',
    price: 38,
    description: 'Aromatic wok-fired rice ribbon noodles with egg, pressed tofu, sweet turnip, chives, bean sprouts, crushed peanuts, and fresh lime in our signature tamarind reduction.',
    image: mahaStreetPadThaiImg,
    tags: ['Signature', 'Wok-Fired']
  },
  {
    id: 'sig-2',
    name: 'Coconut Shell Seafood (Hor Mok)',
    price: 42,
    description: 'Rich, fragrant red curry soufflé steamed inside a young coconut shell with fresh sea scallops, calamari, jumbo shrimp, kaffir lime leaves, and sweet basil.',
    image: coconutShellSeafoodImg,
    tags: ['Signature', 'Spicy']
  },
  {
    id: 'sig-3',
    name: 'Northern Khao Soi',
    price: 36,
    description: 'Slow-simmered aromatic coconut curry broth with tender egg noodles, mustard greens, red shallots, and lime, topped with crispy noodles and house chili oil.',
    image: northernKhaoSoiImg,
    tags: ['Signature', 'Spicy']
  }
];

export const menuData = {
  'Appetizers': [
    {
      id: 'app-edamame',
      name: 'Steamed Salted Edamame',
      description: 'Plump green soybeans steamed in their pods, tossed with coarse sea salt, offering a light, clean, and nutritious starter.',
      price: 8,
      rating: 4.7,
      image: edamameImg
    },
    {
      id: 'app-spring-rolls',
      name: 'Crispy Spring Rolls',
      description: 'Crispy golden wrappers filled with seasoned glass noodles, cabbage, carrots, and wood ear mushrooms, served with sweet chili sauce.',
      price: 12,
      rating: 4.8,
      image: crispySpringRollsImg
    },
    {
      id: 'app-maha-rolls',
      name: 'Crunchy Maha Rolls',
      description: 'Signature deep-fried rolls filled with premium crab meat, cream cheese, and scallions, served with a sweet-and-sour plum glaze.',
      price: 15,
      rating: 4.9,
      image: crunchyMahaRollsImg
    },
    {
      id: 'app-firecracker-shrimp',
      name: 'Firecracker Shrimp',
      description: 'Jumbo prawns marinated in garlic and coriander, wrapped in crispy spring roll pastry, and served with a spicy honey-plum sauce.',
      price: 16,
      rating: 4.9,
      image: firecrackerShrimpImg
    },
    {
      id: 'app-garden-rolls',
      name: 'Fresh Garden Rolls',
      description: 'Refreshing rice paper rolls packed with crisp lettuce, cucumber, mint, sweet basil, and vermicelli, served with house peanut dipping sauce.',
      price: 11,
      rating: 4.7,
      image: freshGardenRollsImg
    },
    {
      id: 'app-fried-tofu',
      name: 'Golden Fried Tofu',
      description: 'Crispy organic tofu cubes, golden-fried until airy, served with sweet tamarind sauce topped with crushed roasted peanuts.',
      price: 10,
      rating: 4.7,
      image: goldenFriedTofuImg
    },
    {
      id: 'app-crab-bites',
      name: 'Maha Crispy Crab Bites',
      description: 'Bite-sized crispy pouches stuffed with blue crab meat, cream cheese, and Thai spices, served with a roasted chili garlic dip.',
      price: 14,
      rating: 4.8,
      image: mahaCrispyCrabBitesImg
    },
    {
      id: 'app-dumplings',
      name: 'Pan-Seared Dumplings',
      description: 'Handmade dumplings with seasoned chicken, pork, or vegetables, pan-seared until bottom is crispy, served with ginger-soy vinegar.',
      price: 13,
      rating: 4.8,
      image: panSearedDumplingsImg
    },
    {
      id: 'app-shrimp-toast',
      name: 'Shrimp Toast',
      description: 'Crispy toasted brioche topped with a savory minced shrimp spread and white sesame seeds, served with sweet cucumber relish.',
      price: 14,
      rating: 4.8,
      image: shrimpToastImg
    },
    {
      id: 'app-satay-skewers',
      name: 'Street Satay Skewers',
      description: 'Tender flame-grilled skewers of marinated chicken or tofu, served with signature creamy peanut sauce and fresh cucumber pickle.',
      price: 14,
      rating: 4.9,
      image: streetSataySkewersImg
    },
    {
      id: 'app-vietnamese-rolls',
      name: 'Vietnamese Fresh Rolls',
      description: 'Traditional summer rolls with delicate rice paper, steamed shrimp, pork, fresh mint, and lettuce, paired with rich hoisin peanut sauce.',
      price: 12,
      rating: 4.8,
      image: vietnameseFreshRollsImg
    }
  ],
  'Salads': [
    {
      id: 'salad-som-tum',
      name: 'Green Papaya Crunch (Som Tum Thai)',
      description: 'Hand-shredded green papaya hammered with fresh lime juice, palm sugar, bird’s eye chilies, garlic, green beans, cherry tomatoes, and roasted peanuts.',
      price: 15,
      rating: 4.8,
      image: greenPapayaCrunchImg
    },
    {
      id: 'salad-som-tum-poo',
      name: 'Som Tum Poo',
      description: 'Authentic Isan-style papaya salad containing salted black crab for a rich, deeply savory umami punch, mixed with fresh herbs and spices.',
      price: 17,
      rating: 4.7,
      image: somTumPooImg
    },
    {
      id: 'salad-som-tum-poo-plara',
      name: 'Som Tum Poo Plara',
      description: 'Traditional street-style green papaya salad loaded with salted black crab and house-fermented fish sauce (Plara) for the ultimate bold flavor.',
      price: 18,
      rating: 4.8,
      image: somTumPooPlaraImg
    },
    {
      id: 'salad-larb',
      name: 'Northern Larb Herb Salad',
      description: 'Aromatic minced chicken, pork, or tofu salad tossed with toasted ground rice, mint, fresh coriander, scallions, shallots, and lime-chili dressing.',
      price: 16,
      rating: 4.8,
      image: northernLarbHerbSaladImg
    },
    {
      id: 'salad-yum-woon-sen',
      name: 'Glass Noodle Seafood Salad (Yum Woon Sen)',
      description: 'Vibrant glass noodles tossed with jumbo shrimp, calamari, minced chicken, wood ear mushrooms, onions, fresh cilantro, and a spicy garlic-lime dressing.',
      price: 20,
      rating: 4.9,
      image: glassNoodleSeafoodSaladImg
    },
    {
      id: 'salad-yum-seafood',
      name: 'Yum Seafood Combination',
      description: 'Zesty lemongrass-infused seafood medley of scallops, shrimp, mussels, and squid, tossed with fresh herbs in sweet-sour chili paste vinaigrette.',
      price: 24,
      rating: 4.9,
      image: yumSeafoodCombinationImg
    },
    {
      id: 'salad-yum-shrimp-squid',
      name: 'Yum Shrimp or Squid',
      description: 'Choice of poached tiger prawns or tender squid rings dressed with celery, red onions, tomatoes, coriander, and fresh chili-lime marinade.',
      price: 21,
      rating: 4.8,
      image: yumShrimpOrSquidImg
    }
  ],
  'Noodle Bar': [
    {
      id: 'sig-1',
      name: 'Maha Street Pad Thai',
      description: 'Signature stir-fried rice noodles with tamarind sauce, egg, and peanuts.',
      price: 24,
      rating: 5.0,
      image: mahaStreetPadThaiImg
    },
    {
      id: 'noodle-omelette',
      name: 'Pad Thai Omelette Wrap',
      description: 'Classic Pad Thai wrapped in a thin egg omelette for a rich presentation.',
      price: 26,
      rating: 4.9,
      image: padThaiOmeletteWrapImg
    },
    {
      id: 'noodle-drunken',
      name: 'Midnight Drunken Noodles',
      description: 'Wide noodles stir-fried with chili, garlic, and Thai basil.',
      price: 22,
      rating: 4.8,
      image: midnightDrunkenNoodlesImg
    },
    {
      id: 'noodle-padseeew',
      name: 'Caramelized Pad See Ew',
      description: 'Flat noodles stir-fried with egg and Chinese broccoli in a savory soy glaze.',
      price: 22,
      rating: 4.8,
      image: caramelizedPadSeeEwImg
    },
    {
      id: 'noodle-padwunsen',
      name: 'Glass Noodle Stir Fry (Pad Wun Sen)',
      description: 'Light stir-fried glass noodles with vegetables and egg.',
      price: 21,
      rating: 4.7,
      image: glassNoodleStirFryImg
    },
    {
      id: 'sig-suki',
      name: 'Thai Sukiyaki Stir-Fry (Suki Hang)',
      description: 'Glass noodles stir-fried with napa cabbage, egg, and vegetables in a savory suki sauce.',
      price: 23,
      rating: 4.7,
      image: thaiSukiyakiStirFryImg
    },
    {
      id: 'sig-3',
      name: 'Northern Khao Soi',
      description: 'Coconut curry noodle soup with crispy noodles and rich broth.',
      price: 25,
      rating: 4.9,
      image: northernKhaoSoiImg
    },
    {
      id: 'noodle-pho',
      name: 'Vietnamese Pho (Beef / Chicken / Seafood)',
      description: 'Slow-simmered broth with rice noodles, herbs, and your choice of protein.',
      price: 22,
      rating: 4.8,
      image: menuCurry
    },
    {
      id: 'noodle-yentafo',
      name: 'Yen Ta Fo Pink Noodle Soup',
      description: 'Sweet and tangy Thai noodle soup with a distinctive pink broth.',
      price: 23,
      rating: 4.7,
      image: menuCurry
    }
  ],
  'Curry Kitchen': [
    {
      id: 'curry-massaman',
      name: 'Massaman Comfort Curry',
      description: 'Mild curry with potatoes, onions, and warm spices.',
      price: 24,
      rating: 4.9,
      image: massamanComfortCurryImg
    },
    {
      id: 'curry-red',
      name: 'Red Fire Curry',
      description: 'Coconut curry with bold red chili flavor.',
      price: 23,
      rating: 4.8,
      image: redFireCurryImg
    },
    {
      id: 'curry-pumpkin',
      name: 'Red Curry with Pumpkin',
      description: 'Rich curry served inside pumpkin for a slightly sweet finish.',
      price: 26,
      rating: 5.0,
      image: redCurryWithPumpkinImg
    },
    {
      id: 'curry-green',
      name: 'Green Herb Curry',
      description: 'Fresh, aromatic green curry with basil and coconut milk.',
      price: 23,
      rating: 4.9,
      image: greenHerbCurryImg
    },
    {
      id: 'curry-yellow',
      name: 'Golden Yellow Curry',
      description: 'Mild curry with turmeric, potatoes, and vegetables.',
      price: 22,
      rating: 4.7,
      image: goldenYellowCurryImg
    },
    {
      id: 'curry-panang',
      name: 'Panang Silk Curry',
      description: 'Thick and creamy curry with a slightly sweet, nutty flavor.',
      price: 24,
      rating: 4.9,
      image: panangSilkCurryImg
    },
    {
      id: 'curry-jungle',
      name: 'Jungle Heat Curry',
      description: 'Spicy, herb-forward curry without coconut milk.',
      price: 22,
      rating: 4.6,
      image: jungleHeatCurryImg
    }
  ],
  'Rice & Wok': [
    {
      id: 'sig-basil-rice',
      name: 'Bangkok Fire Basil Rice',
      description: 'Spicy basil fried rice with chili and garlic.',
      price: 22,
      rating: 4.8,
      image: bangkokFireBasilRiceImg
    },
    {
      id: 'rice-pineapple',
      name: 'Pineapple Island Fried Rice',
      description: 'Sweet and savory fried rice with pineapple and cashews.',
      price: 24,
      rating: 4.8,
      image: pineappleIslandFriedRiceImg
    },
    {
      id: 'rice-classic',
      name: 'Classic Thai Fried Rice',
      description: 'Simple egg fried rice with vegetables.',
      price: 18,
      rating: 4.6,
      image: classicThaiFriedRiceImg
    },
    {
      id: 'rice-crab',
      name: 'Crab Butter Fried Rice',
      description: 'Fried rice with crab meat and rich garlic butter.',
      price: 28,
      rating: 5.0,
      image: crabButterFriedRiceImg
    },
    {
      id: 'rice-curry-spiced',
      name: 'Curry Spiced Fried Rice',
      description: 'Fried rice infused with warm curry spices.',
      price: 20,
      rating: 4.7,
      image: currySpicedFriedRiceImg
    },
    {
      id: 'rice-green-curry',
      name: 'Green Curry Fried Rice',
      description: 'Fried rice blended with green curry flavors.',
      price: 21,
      rating: 4.7,
      image: heroDish
    },
    {
      id: 'rice-red-curry',
      name: 'Red Curry Fried Rice',
      description: 'Fried rice with bold red curry seasoning.',
      price: 21,
      rating: 4.7,
      image: heroDish
    },
    {
      id: 'rice-kapi',
      name: 'Kapi Umami Fried Rice',
      description: 'Shrimp paste fried rice with deep, savory flavor.',
      price: 22,
      rating: 4.8,
      image: heroDish
    },
    {
      id: 'rice-hainanese',
      name: 'Hainanese Chicken Rice',
      description: 'Tender poached chicken served with fragrant rice and ginger sauce.',
      price: 23,
      rating: 4.8,
      image: heroDish
    }
  ],
  'Street Kitchen': [
    {
      id: 'street-hainanese',
      name: 'Hainanese Chicken Rice',
      description: 'Classic Southeast Asian dish with poached chicken and aromatic rice.',
      price: 23,
      rating: 4.8,
      image: menuAppetizer
    },
    {
      id: 'street-biryani',
      name: 'Thai Biryani',
      description: 'Spiced rice dish layered with herbs and protein.',
      price: 24,
      rating: 4.8,
      image: menuAppetizer
    },
    {
      id: 'sig-3',
      name: 'Northern Khao Soi',
      description: 'Rich coconut curry noodle soup with crispy topping.',
      price: 25,
      rating: 4.9,
      image: northernKhaoSoiImg
    },
    {
      id: 'street-pho',
      name: 'Pho (Beef / Chicken / Seafood)',
      description: 'Light and aromatic Vietnamese noodle soup.',
      price: 22,
      rating: 4.7,
      image: menuCurry
    },
    {
      id: 'street-yentafo',
      name: 'Yen Ta Fo',
      description: 'Sweet-tangy Thai noodle soup with bold flavor.',
      price: 23,
      rating: 4.7,
      image: menuCurry
    }
  ],
  'From the Sea': [
    {
      id: 'sig-2',
      name: 'Coconut Shell Seafood (Hor Mok)',
      description: 'Steamed seafood curry in coconut custard served inside a coconut shell.',
      price: 42,
      rating: 5.0,
      image: coconutShellSeafoodImg
    },
    {
      id: 'sea-choochee',
      name: 'Choo Chee Seafood Curry',
      description: 'Rich coconut curry with shrimp, squid, and mussels.',
      price: 38,
      rating: 4.9,
      image: menuCurry
    },
    {
      id: 'sea-salmon',
      name: 'Salmon (Choo Chee / Garlic / Sweet Chili)',
      description: 'Pan-seared salmon served with your choice of savory sauce.',
      price: 36,
      rating: 4.8,
      image: heroDish
    },
    {
      id: 'sea-whole-fish',
      name: 'Whole Fish Selection',
      description: 'Deep-fried whole fish served with garlic or chili-based sauces.',
      price: 48,
      rating: 4.9,
      image: heroDish
    }
  ],
  'Chef’s Table': [
    {
      id: 'chef-lamb',
      name: 'Lamb Chops',
      description: 'Grilled lamb chops seasoned with Thai spices.',
      price: 42,
      rating: 4.9,
      image: heroDish
    },
    {
      id: 'chef-lemongrass-chicken',
      name: 'Lemongrass Chicken',
      description: 'Grilled chicken infused with lemongrass and herbs.',
      price: 28,
      rating: 4.8,
      image: menuAppetizer
    },
    {
      id: 'chef-omelette',
      name: 'Thai Style Omelette',
      description: 'Fluffy omelette seasoned with fish sauce and herbs.',
      price: 18,
      rating: 4.6,
      image: heroDish
    }
  ],
  'Plant-Based': [
    {
      id: 'plant-som-tum',
      name: 'Vegetarian Som Tum Thai',
      description: 'Hand-shredded green papaya hammered with fresh lime juice, palm sugar, bird’s eye chilies, garlic, green beans, cherry tomatoes, and roasted peanuts, dressed with mushroom soy sauce.',
      price: 15,
      rating: 4.8,
      image: greenPapayaCrunchImg
    },
    {
      id: 'plant-larb-tofu',
      name: 'Larb Tofu Herb Salad',
      description: 'Aromatic minced organic tofu tossed with toasted ground rice, mint, fresh coriander, scallions, shallots, and a zesty lime-chili dressing.',
      price: 16,
      rating: 4.8,
      image: northernLarbHerbSaladImg
    },
    {
      id: 'plant-garden-rolls',
      name: 'Fresh Garden Rolls',
      description: 'Refreshing rice paper rolls packed with crisp lettuce, cucumber, mint, sweet basil, and vermicelli, served with house peanut dipping sauce.',
      price: 11,
      rating: 4.7,
      image: freshGardenRollsImg
    },
    {
      id: 'plant-fried-tofu',
      name: 'Golden Fried Tofu',
      description: 'Crispy organic tofu cubes, golden-fried until airy, served with sweet tamarind sauce topped with crushed roasted peanuts.',
      price: 10,
      rating: 4.7,
      image: goldenFriedTofuImg
    },
    {
      id: 'plant-kana',
      name: 'KA-NA HED HORM',
      description: 'Chinese broccoli and mushrooms sautéed in savory sauce.',
      price: 18,
      rating: 4.8,
      image: menuAppetizer
    },
    {
      id: 'plant-fried-rice',
      name: 'Vegetarian Thai Fried Rice',
      description: 'Fried rice with vegetables and soy-based seasoning.',
      price: 18,
      rating: 4.6,
      image: heroDish
    },
    {
      id: 'plant-basil-rice',
      name: 'Basil Fried Rice',
      description: 'Spicy vegetarian fried rice with basil and chili.',
      price: 19,
      rating: 4.7,
      image: heroDish
    },
    {
      id: 'plant-padthai',
      name: 'Vegetarian Pad Thai',
      description: 'Rice noodles stir-fried with vegetables and tofu.',
      price: 20,
      rating: 4.8,
      image: mahaStreetPadThaiImg
    },
    {
      id: 'plant-tomkha',
      name: 'Tom Kha (veg)',
      description: 'Coconut soup with vegetables and herbs.',
      price: 18,
      rating: 4.8,
      image: tomKhaCoconutSoupImg
    },
    {
      id: 'plant-tomyum',
      name: 'Tom Yum (veg)',
      description: 'Spicy and sour vegetable soup.',
      price: 18,
      rating: 4.8,
      image: tomYumFireBrothImg
    },
    {
      id: 'plant-eggplant-curry',
      name: 'Eggplant & Tofu Curry',
      description: 'Eggplant and tofu in a rich curry sauce.',
      price: 20,
      rating: 4.7,
      image: menuCurry
    },
    {
      id: 'plant-choochee',
      name: 'Choo Chee Tofu',
      description: 'Tofu cooked in a creamy red curry sauce.',
      price: 21,
      rating: 4.7,
      image: menuCurry
    },
    {
      id: 'plant-kheemao',
      name: 'Tofu Khee Mao',
      description: 'Stir-fried tofu with chili, garlic, and basil.',
      price: 20,
      rating: 4.7,
      image: menuAppetizer
    }
  ],
  'Sweet Endings': [
    {
      id: 'sweet-rubies',
      name: 'Thai Rubies in Coconut Milk (weekends)',
      description: 'Water chestnuts served in sweet coconut milk with crushed ice.',
      price: 12,
      rating: 4.9,
      image: menuDessert
    },
    {
      id: 'sweet-mango-sticky',
      name: 'Mango Sticky Rice',
      description: 'Fresh mango served with sweet coconut sticky rice.',
      price: 14,
      rating: 5.0,
      image: menuDessert
    },
    {
      id: 'sweet-banana-sticky',
      name: 'Banana Sticky Rice',
      description: 'Warm sticky rice with banana and coconut.',
      price: 12,
      rating: 4.8,
      image: menuDessert
    },
    {
      id: 'sweet-black-rice',
      name: 'Black Rice Mango Dessert',
      description: 'Nutty black rice paired with fresh mango.',
      price: 14,
      rating: 4.8,
      image: menuDessert
    },
    {
      id: 'sweet-roti',
      name: 'Sweet Roti',
      description: 'Crispy Thai flatbread topped with condensed milk.',
      price: 10,
      rating: 4.7,
      image: menuDessert
    },
    {
      id: 'sweet-banana-honey',
      name: 'Fried Banana with Honey',
      description: 'Golden fried banana drizzled with honey.',
      price: 10,
      rating: 4.7,
      image: menuDessert
    },
    {
      id: 'sweet-cheesecake',
      name: 'Fried Cheesecake',
      description: 'Crispy outside with a creamy cheesecake center.',
      price: 12,
      rating: 4.8,
      image: menuDessert
    },
    {
      id: 'sweet-ice-cream',
      name: 'Deep Fried Ice Cream',
      description: 'Ice cream wrapped and fried for a hot and cold contrast.',
      price: 12,
      rating: 4.7,
      image: menuDessert
    },
    {
      id: 'sweet-pancakes',
      name: 'Thai Coconut Pancakes (Kanom Krok)',
      description: 'Bite-sized coconut rice pancakes with crispy edges and soft centers.',
      price: 10,
      rating: 4.8,
      image: menuDessert
    }
  ],
  'Beverages & Sides': [
    {
      id: 'side-jasmine',
      name: 'Jasmine Rice',
      description: 'Fragrant, steaming Jasmine rice.',
      price: 4,
      rating: 4.8,
      image: heroDish
    },
    {
      id: 'side-brown',
      name: 'Brown Rice',
      description: 'Healthy, fiber-rich steamed brown rice.',
      price: 4,
      rating: 4.6,
      image: heroDish
    },
    {
      id: 'side-sticky',
      name: 'Sticky Rice',
      description: 'Traditional sweet-savory sticky rice.',
      price: 5,
      rating: 4.8,
      image: heroDish
    },
    {
      id: 'side-noodles',
      name: 'Steamed Noodles',
      description: 'Freshly steamed rice ribbon noodles.',
      price: 4,
      rating: 4.7,
      image: heroDish
    },
    {
      id: 'side-veg',
      name: 'Steamed Vegetables',
      description: 'A fresh mix of seasonal steamed greens and vegetables.',
      price: 6,
      rating: 4.7,
      image: heroDish
    },
    {
      id: 'side-peanut',
      name: 'Peanut Sauce',
      description: 'Our house-made aromatic peanut dipping sauce.',
      price: 3,
      rating: 4.9,
      image: heroDish
    },
    {
      id: 'bev-thai-tea',
      name: 'Thai Iced Tea',
      description: 'Traditional sweetened Thai iced tea topped with rich cream.',
      price: 5,
      rating: 4.9,
      image: menuAppetizer
    },
    {
      id: 'bev-boba',
      name: 'Boba Selection',
      description: 'Explore our rich and creamy Boba Milk Teas and fruit teas. (See Boba menu for full selection).',
      price: 6,
      rating: 4.9,
      image: menuAppetizer
    }
  ],
  'Soups & Claypots': [
    {
      id: 'soup-tomyum-creamy',
      name: 'Tom Yum Creamy Broth',
      description: 'Vibrant, spicy-sour lemongrass broth enriched with a touch of evaporated milk, loaded with giant tiger prawns, oyster mushrooms, tomatoes, and fresh kaffir lime leaves.',
      price: 19,
      rating: 4.9,
      image: tomYumCreamyBrothImg
    },
    {
      id: 'soup-tomyum-clear',
      name: 'Tom Yum Fire Broth (Clear)',
      description: 'Traditional, fiery-sharp clear hot and sour broth infused with crushed lemongrass, galangal, fresh chili, fresh lime juice, kaffir lime leaves, and wild mushrooms.',
      price: 18,
      rating: 4.8,
      image: tomYumFireBrothImg
    },
    {
      id: 'soup-tomkha',
      name: 'Tom Kha Coconut Soup',
      description: 'Silky, aromatic coconut milk broth simmered with tender chicken breast, wild mushrooms, fresh galangal, lemongrass, kaffir lime, and roasted chili oil.',
      price: 19,
      rating: 4.9,
      image: tomKhaCoconutSoupImg
    },
    {
      id: 'soup-khao-tom',
      name: 'Rice Comfort Soup (Khao Tom)',
      description: 'Traditional comforting Thai rice soup cooked in a rich, savory pork bone broth with hand-rolled seasoned pork meatballs, fresh ginger, celery, and golden fried garlic.',
      price: 16,
      rating: 4.7,
      image: riceComfortSoupImg
    },
    {
      id: 'soup-hot-pot',
      name: 'Maha Hot Pot (Seasonal)',
      description: 'A grand communal ceramic pot bubbling with our premium herbal broth, thin-sliced ribeye beef, scallop medallions, prawns, glass noodles, and fresh morning glory.',
      price: 38,
      rating: 5.0,
      image: mahaHotPotImg
    }
  ]
};

// Map Lunch, Dinner, and Vegetarian menu keys for the specialized dropdowns and pages
menuData['Vegetarian'] = menuData['Plant-Based'];
const rawDinnerList = [
  ...menuData['Appetizers'],
  ...menuData['Salads'],
  ...menuData['Soups & Claypots'],
  ...menuData['Noodle Bar'],
  ...menuData['Curry Kitchen'],
  ...menuData['Rice & Wok'],
  ...menuData['Street Kitchen'],
  ...menuData['From the Sea'],
  ...menuData['Chef’s Table'],
  ...menuData['Plant-Based'],
  ...menuData['Sweet Endings'],
  ...menuData['Beverages & Sides']
];
menuData['Dinner'] = rawDinnerList.filter((item, index, self) =>
  self.findIndex(t => t.id === item.id) === index
);
menuData['Lunch'] = [
  {
    id: 'lunch-experience',
    name: 'Maha Lunch Experience (Mon-Fri)',
    description: 'A curated multi-course midday feast. Includes your choice of one appetizer, one soup or salad, and one signature entrée (curry, noodle, or wok rice dish).',
    price: 34,
    rating: 5.0,
    image: menuAppetizer,
    tags: ['Lunch Special', 'Multi-Course']
  },
  {
    id: 'lunch-pad-thai',
    name: 'Lunch Maha Street Pad Thai',
    description: 'Midday portion of our signature stir-fried rice noodles with tamarind sauce, egg, and peanuts.',
    price: 18,
    rating: 4.9,
    image: mahaStreetPadThaiImg
  },
  {
    id: 'lunch-drunken-noodles',
    name: 'Lunch Midnight Drunken Noodles',
    description: 'Wide noodles stir-fried with chili, garlic, and Thai basil.',
    price: 17,
    rating: 4.8,
    image: menuAppetizer
  },
  {
    id: 'lunch-pad-see-ew',
    name: 'Lunch Caramelized Pad See Ew',
    description: 'Flat noodles stir-fried with egg and Chinese broccoli in a savory soy glaze.',
    price: 17,
    rating: 4.8,
    image: menuAppetizer
  },
  {
    id: 'lunch-massaman',
    name: 'Lunch Massaman Comfort Curry',
    description: 'Mild curry with potatoes, onions, and warm spices.',
    price: 18,
    rating: 4.9,
    image: massamanComfortCurryImg
  },
  {
    id: 'lunch-yellow-curry',
    name: 'Lunch Golden Yellow Curry',
    description: 'Mild curry with turmeric, potatoes, and vegetables.',
    price: 17,
    rating: 4.7,
    image: goldenYellowCurryImg
  },
  {
    id: 'lunch-basil-rice',
    name: 'Lunch Bangkok Fire Basil Rice',
    description: 'Spicy basil fried rice with chili and garlic.',
    price: 17,
    rating: 4.8,
    image: bangkokFireBasilRiceImg
  },
  {
    id: 'lunch-pineapple-rice',
    name: 'Lunch Pineapple Island Fried Rice',
    description: 'Sweet and savory fried rice with pineapple and cashews.',
    price: 18,
    rating: 4.8,
    image: pineappleIslandFriedRiceImg
  },
  {
    id: 'lunch-classic-rice',
    name: 'Lunch Classic Thai Fried Rice',
    description: 'Simple egg fried rice with vegetables.',
    price: 15,
    rating: 4.6,
    image: classicThaiFriedRiceImg
  },
  {
    id: 'lunch-lemongrass-chicken',
    name: 'Lunch Lemongrass Chicken',
    description: 'Grilled chicken infused with lemongrass and herbs.',
    price: 22,
    rating: 4.8,
    image: menuAppetizer
  },
  {
    id: 'lunch-veg-padthai',
    name: 'Lunch Vegetarian Pad Thai',
    description: 'Rice noodles stir-fried with vegetables and tofu.',
    price: 16,
    rating: 4.8,
    image: mahaStreetPadThaiImg
  }
];

// Load custom admin overrides from localStorage if present
try {
  const customMenuData = localStorage.getItem('maha_custom_menu');
  if (customMenuData) {
    const parsed = JSON.parse(customMenuData);
    Object.keys(parsed).forEach(key => {
      menuData[key] = parsed[key];
    });
  }
} catch (e) {
  console.error("Failed to parse custom menu data", e);
}

// Deduplicate the Dinner menu to prevent React key collision warnings
if (Array.isArray(menuData['Dinner'])) {
  menuData['Dinner'] = menuData['Dinner'].filter((item, index, self) =>
    self.findIndex(t => t.id === item.id) === index
  );
}

const categories = ['Appetizers', 'Salads', 'Soups & Claypots', 'Noodle Bar', 'Curry Kitchen', 'Rice & Wok', 'Street Kitchen', 'From the Sea', 'Chef’s Table', 'Plant-Based', 'Sweet Endings', 'Beverages & Sides'];

export default function MenuSection({ cart = {}, addToCart, removeFromCart }) {
  const [selectedCategory, setSelectedCategory] = useState('Appetizers');

  useEffect(() => {
    const handleCategoryChange = (e) => {
      if (categories.includes(e.detail)) {
        setSelectedCategory(e.detail);
      }
    };
    window.addEventListener('changeMenuCategory', handleCategoryChange);
    return () => window.removeEventListener('changeMenuCategory', handleCategoryChange);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section 
      id="menu" 
      className="section-padding" 
      style={{ backgroundColor: 'var(--canvas-secondary)', borderBottom: '1px solid var(--border-light)' }}
    >
      <div className="container">
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-12" style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto 3rem' }}>
          <span 
            className="block font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--gold-antique)', display: 'block', fontSize: '0.75rem', letterSpacing: '0.3em', marginBottom: '1rem' }}
          >
            THE COLLECTION
          </span>
          <h2 
            className="font-serif text-4xl md:text-5xl font-light mb-6"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--text-dark)' }}
          >
            Our Seasonal Menu
          </h2>
        </div>

        {/* State-Driven Tab Filtering System */}
        <div 
          className="flex justify-start md:justify-center mb-16" 
          style={{ 
            display: 'flex', 
            marginBottom: '4rem',
            width: '100%',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div 
            className="flex p-1.5 rounded-full border"
            style={{ 
              display: 'flex', 
              padding: '0.375rem', 
              borderRadius: '9999px', 
              borderColor: 'var(--border-light)',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(8px)',
              position: 'relative',
              flexWrap: 'nowrap',
              minWidth: 'max-content'
            }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="relative px-6 py-3 font-sans text-xs font-semibold uppercase tracking-wider transition-colors duration-300"
                style={{
                  position: 'relative',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  padding: '0.75rem 1.75rem',
                  outline: 'none',
                  userSelect: 'none'
                }}
              >
                {selectedCategory === category && (
                  <motion.div
                    layoutId="activeCategoryTab"
                    className="absolute inset-0 z-0"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 0,
                      backgroundColor: 'var(--text-dark)',
                      borderRadius: '9999px'
                    }}
                    transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                  />
                )}
                <span 
                  className="relative z-10 transition-colors duration-300"
                  style={{ 
                    position: 'relative',
                    zIndex: 10,
                    color: selectedCategory === category ? 'var(--canvas-primary)' : 'var(--text-dark)' 
                  }}
                >
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid Showcase of Category Menu Cards */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            {menuData[selectedCategory].slice(0, 3).map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                {/* Image Container */}
                <div 
                  className="relative overflow-hidden w-full aspect-[4/3] rounded-md mb-6"
                  style={{ overflow: 'hidden', position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '8px', marginBottom: '1.5rem' }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  
                  <div 
                    className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/95 px-2 py-1 rounded"
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      left: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      boxShadow: '0 2px 8px rgba(11, 54, 61, 0.05)'
                    }}
                  >
                    <Star size={12} fill="var(--gold-antique)" color="var(--gold-antique)" />
                    <span style={{ fontSize: '10px', color: 'var(--text-dark)', fontWeight: 'bold' }}>
                      {item.rating.toFixed(1)}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div className="menu-leader-row">
                    <h3 className="menu-leader-title">{item.name}</h3>
                    <div className="menu-leader-dots" />
                    <span className="menu-leader-price">${item.price}</span>
                  </div>

                  <p className="menu-card-desc" style={{ flexGrow: 1 }}>{item.description}</p>

                  <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'flex-start' }}>
                    {(() => {
                      const cartItem = cart[item.id];
                      const quantity = cartItem ? cartItem.quantity : 0;
                      if (quantity > 0) {
                        return (
                          <div className="qty-controls" style={{ border: '1px solid var(--gold-antique)', borderRadius: '9999px', padding: '0.25rem 0.6rem' }}>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFromCart(item.id);
                              }}
                              className="qty-btn"
                              style={{ border: 'none', background: 'none', color: 'var(--text-dark)', cursor: 'pointer', fontWeight: 'bold' }}
                            >
                              -
                            </button>
                            <span className="qty-val" style={{ margin: '0 0.75rem', fontWeight: 700 }}>{quantity}</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                addToCart(item);
                              }}
                              className="qty-btn"
                              style={{ border: 'none', background: 'none', color: 'var(--text-dark)', cursor: 'pointer', fontWeight: 'bold' }}
                            >
                              +
                            </button>
                          </div>
                        );
                      }
                      return (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(item);
                          }}
                          className="card-btn"
                        >
                          + Add to Cart
                        </button>
                      );
                    })()}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View Full Menu Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <a
            href={`#/menu/${selectedCategory.toLowerCase()}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2.5rem',
              border: '1px solid var(--gold-antique)',
              backgroundColor: 'transparent',
              color: 'var(--text-dark)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.4s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--gold-antique)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--text-dark)';
            }}
          >
            View Full Menu
            <span style={{ fontSize: '1rem', lineHeight: 1 }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
