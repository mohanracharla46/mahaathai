import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

// Import images
import heroDish from '../assets/hero_dish.png';
import menuAppetizer from '../assets/menu_appetizer.png';
import menuCurry from '../assets/menu_curry.png';
import menuDessert from '../assets/menu_dessert.png';
import mahaStreetPadThaiImg from '../assets/Pad thai.png';
import coconutShellSeafoodImg from '../assets/Coconut Shell.png';
import chooCheeSeafoodCurryImg from '../assets/Choo Chee Seafood Curry.png';
import lambChopsImg from '../assets/Lamb Chops.jpeg';
import salmonImg from '../assets/Salmon .png';
import wholeFishSelectionImg from '../assets/Whole Fish Selection.png';
import wholeFishSwaiImg from '../assets/Whole Fish Selection (Swai Filet).png';
import wholeFishTilapiaImg from '../assets/Whole Fish Selection (Tilapia).png';
import wholeFishRedsnapperImg from '../assets/Whole Fish Selection (Redsnapper).png';
import wholeFishPomfretImg from '../assets/Whole Fish Selection (Pomfret).png';
import yentafoImg from '../assets/Yen Ta Fo.png';
import kanaHedHormImg from '../assets/KA-NA HED HORM.png';
import lemongrassChickenImg from '../assets/Lemongrass.png';
import massamanBeefStewImg from '../assets/Massaman Beef Stew with Roti.png';
import thaiRamaGardenImg from '../assets/Thai Rama Garden.png';
import thaiStyleOmeletteImg from '../assets/Thai Style Omelette.png';
import vietnamesePhoImg from '../assets/Vietnamese Pho.png';
import hainaneseChickenRiceImg from '../assets/Hainanese Chicken Rice.png';
import thaiChickenBiryaniImg from '../assets/Thai Chicken Biryani.png';
import thaiOrangeSesameChickenImg from '../assets/Thai Orange Sesame Chicken.png';
import thaiSweetAndSourChickenImg from '../assets/Thai Sweet and Sour Chicken.png';
import vegThaiFriedRiceImg from '../assets/Vegetarian Thai Fried Rice.png';
import crispySpringRollsImg from '../assets/Crispy Spring Rolls (veg  shrimp  chicken).png';
import firecrackerShrimpImg from '../assets/Firecracker Shrimp.png';
import freshGardenRollsImg from '../assets/Fresh Garden Rolls.png';
import goldenFriedTofuImg from '../assets/Golden Fried Tofu.png';
import mahaCrispyCrabBitesImg from '../assets/Maha Crispy Crab Bites.png';
import crabBitesImg from '../assets/crab bites.png';
import panSearedDumplingsImg from '../assets/Pan-Seared Dumplings (chicken  pork  veg).png';
import dumplingsImg from '../assets/Dumplings.png';
import tofuSatayImg from '../assets/Tofu Satay.png';
import shrimpSaladImg from '../assets/shrimp salad.png';
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
import bangkokFireBasilRiceImg from '../assets/Bangkok Fire Basil Rice.png';
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
import greenCurryFriedRiceImg from '../assets/Green Curry Fried Rice .png';
import kapiUmamiFriedRiceImg from '../assets/Kapi Umami Fried Rice.png';
import redCurryFriedRiceImg from '../assets/Red Curry Fried Rice.png';
import plantBasilRiceImg from '../assets/Basil Fried Rice 🌶️.png';
import plantChooCheeTofuImg from '../assets/Choo Chee Tofu.png';
import plantEggplantTofuImg from '../assets/Eggplant & Tofu Curry.png';
import kanaHedHormImgNew from '../assets/KANA HED HORM.png';
import mangoStickyRiceImg from '../assets/Mango Sticky Rice.png';
import rubiesCoconutImg from '../assets/Red Rubies in Coconut Milk..png';
import plantTofuKheeMaoImg from '../assets/Tofu Khee Mao.png';
import plantTomKhaImg from '../assets/Tom Kha (veg).png';
import plantTomYumImg from '../assets/Tom Yum (veg).png';
import plantPadThaiImg from '../assets/Vegetarian Pad Thai.png';
import bananaStickyRiceImg from '../assets/Banana Sticky Rice.png';
import blackRiceMangoImg from '../assets/Black Rice Mango.png';
import eggDropSoupImg from '../assets/Egg Drop Soup.png';
import hotSourSoupImg from '../assets/hot and sour soup.png';
import misoSoupImg from '../assets/Miso Soup.png';
import shrimpWontonSoupImg from '../assets/Shrimp Wonton Soup.png';
import lunchImg from '../assets/lunchimg.png';
import brownRiceImg from '../assets/Brown Rice.png';
import deepFriedIceCreamImg from '../assets/Deep Fried Ice Cream.png';
import friedBananaWithHoneyImg from '../assets/Fried Banana with Honey.png';
import jasmineRiceImg from '../assets/Jasmine Rice.png';
import peanutSauceImg from '../assets/Peanut Sauce.png';
import steamedNoodlesImg from '../assets/Steamed Noodles.png';
import steamedVegetablesImg from '../assets/Steamed Vegetables.png';
import stickyRiceImg from '../assets/Sticky Rice.png';
import sweetRotiImg from '../assets/Sweet Roti.png';
import thaiCoconutPancakesImg from '../assets/Thai Coconut Pancakes.png';
import thaiIcedTeaImg from '../assets/Thai Iced Tea.png';

// Signature dishes matching mockup
export const signatureDishes = [
  {
    id: 'sig-1',
    name: 'Maha Street Pad Thai',
    price: 15.99,
    description: 'Aromatic wok-fired rice ribbon noodles with egg, pressed tofu, sweet turnip, chives, bean sprouts, crushed peanuts, and fresh lime in our signature tamarind reduction.',
    image: mahaStreetPadThaiImg,
    tags: ['Signature', 'Wok-Fired']
  },
  {
    id: 'sig-2',
    name: 'Coconut Shell Seafood (Hor Mok)',
    price: 19.99,
    description: 'Rich, fragrant red curry soufflé steamed inside a young coconut shell with fresh sea scallops, calamari, jumbo shrimp, kaffir lime leaves, and sweet basil.',
    image: coconutShellSeafoodImg,
    tags: ['Signature', 'Spicy']
  },
  {
    id: 'sig-3',
    name: 'Northern Khao Soi',
    price: 18.99,
    description: 'Slow-simmered aromatic coconut curry broth with tender egg noodles, mustard greens, red shallots, and lime, topped with crispy noodles and house chili oil.',
    image: northernKhaoSoiImg,
    tags: ['Signature', 'Spicy']
  }
];

export const menuData = {
  'Appetizers': [
    {
      id: 'app-edamame',
      name: 'Edamame',
      description: 'Steamed soybeans lightly salted for a simple, healthy starter.',
      price: 5.99,
      rating: 4.7,
      image: edamameImg
    },
    {
      id: 'app-spring-rolls',
      name: 'Crispy Spring Rolls (Veg / Shrimp / Chicken)',
      description: 'Classic fried rolls filled with seasoned vegetables or protein, served crisp and hot.',
      price: 5.99,
      rating: 4.8,
      image: crispySpringRollsImg
    },
    {
      id: 'app-firecracker-shrimp',
      name: 'Firecracker Shrimp Blanket',
      description: 'Whole shrimp wrapped in thin pastry and fried crispy, served with a bright chili-lime dipping sauce.',
      price: 8.99,
      rating: 4.9,
      image: firecrackerShrimpImg
    },
    {
      id: 'app-garden-rolls',
      name: 'Fresh Garden Rolls',
      description: 'Soft rice paper wraps filled with fresh vegetables and noodles, served with peanut sauce.',
      price: 7.99,
      rating: 4.7,
      image: freshGardenRollsImg
    },
    {
      id: 'app-fried-tofu',
      name: 'Golden Fried Tofu',
      description: 'Crispy fried tofu with a crunchy exterior and soft center, served with dipping sauce.',
      price: 6.99,
      rating: 4.7,
      image: goldenFriedTofuImg
    },
    {
      id: 'app-crab-bites',
      name: 'Maha Crispy Crab Bites',
      description: 'Cream cheese and crab wrapped in wonton skin and fried until golden and crispy.',
      price: 8.99,
      rating: 4.8,
      image: crabBitesImg
    },
    {
      id: 'app-dumplings',
      name: 'Pan-Seared Dumplings (Chicken / Veg)',
      description: 'Dumplings with crispy bottoms and juicy filling, served with savory soy sauce.',
      price: 7.99,
      rating: 4.8,
      image: dumplingsImg
    },
    {
      id: 'app-satay-chicken',
      name: 'Street Satay Chicken',
      description: 'Grilled marinated chicken in Thai spices, served with peanut sauce and cucumber relish.',
      price: 9.99,
      rating: 4.9,
      image: streetSataySkewersImg
    },
    {
      id: 'app-satay-tofu',
      name: 'Tofu Satay',
      description: 'Grilled Tofu marinated in Thai spices, served with peanut sauce and cucumber relish.',
      price: 8.99,
      rating: 4.8,
      image: tofuSatayImg
    },
    {
      id: 'app-vietnamese-rolls',
      name: 'Vietnamese Fresh Rolls',
      description: 'Fresh shrimp, herbs, and vermicelli wrapped in rice paper for a light, refreshing bite.',
      price: 7.99,
      rating: 4.8,
      image: vietnameseFreshRollsImg
    }
  ],
  'Salads': [
    {
      id: 'salad-som-tum',
      name: 'Green Papaya Crunch (Som Tum Thai)',
      description: 'Hand-shredded green papaya hammered with fresh lime juice, palm sugar, bird’s eye chilies, garlic, green beans, cherry tomatoes, and roasted peanuts.',
      price: 11.99,
      rating: 4.8,
      image: greenPapayaCrunchImg
    },
    {
      id: 'salad-som-tum-poo',
      name: 'Som Tum Poo',
      description: 'Authentic Isan-style papaya salad containing salted black crab for a rich, deeply savory umami punch, mixed with fresh herbs and spices.',
      price: 12.99,
      rating: 4.7,
      image: somTumPooImg
    },
    {
      id: 'salad-som-tum-poo-plara',
      name: 'Som Tum Poo Plara',
      description: 'Traditional street-style green papaya salad loaded with salted black crab and house-fermented fish sauce (Plara) for the ultimate bold flavor.',
      price: 13.99,
      rating: 4.8,
      image: somTumPooPlaraImg
    },
    {
      id: 'salad-larb',
      name: 'Northern Larb Herb Salad',
      description: 'Aromatic minced chicken, pork, or tofu salad tossed with toasted ground rice, mint, fresh coriander, scallions, shallots, and lime-chili dressing.',
      price: 12.99,
      rating: 4.8,
      image: northernLarbHerbSaladImg
    },
    {
      id: 'salad-yum-woon-sen',
      name: 'Glass Noodle Seafood Salad (Yum Woon Sen)',
      description: 'Vibrant glass noodles tossed with jumbo shrimp, calamari, minced chicken, wood ear mushrooms, onions, fresh cilantro, and a zesty lime-chili dressing.',
      price: 13.99,
      rating: 4.9,
      image: glassNoodleSeafoodSaladImg
    },
    {
      id: 'salad-yum-seafood',
      name: 'Yum Seafood Combination',
      description: 'Zesty lemongrass-infused seafood medley of scallops, shrimp, mussels, and squid, tossed with fresh herbs in sweet-sour chili paste vinaigrette.',
      price: 14.99,
      rating: 4.9,
      image: yumSeafoodCombinationImg
    },
    {
      id: 'salad-yum-shrimp-squid',
      name: 'Yum Shrimp or Squid',
      description: 'Choice of poached tiger prawns or tender squid rings dressed with celery, red onions, tomatoes, coriander, and fresh chili-lime marinade.',
      price: 13.99,
      rating: 4.8,
      image: shrimpSaladImg
    }
  ],
  'Noodle Bar': [
    {
      id: 'sig-1',
      name: 'Maha Street Pad Thai',
      description: 'Signature stir-fried rice noodles with tamarind sauce, egg, and peanuts.',
      price: 15.99,
      rating: 5.0,
      image: mahaStreetPadThaiImg
    },
    {
      id: 'noodle-omelette',
      name: 'Pad Thai Omelette Wrap',
      description: 'Classic Pad Thai wrapped in a thin egg omelette for a rich presentation.',
      price: 17.99,
      rating: 4.9,
      image: padThaiOmeletteWrapImg
    },
    {
      id: 'noodle-drunken',
      name: 'Midnight Drunken Noodles',
      description: 'Wide noodles stir-fried with chili, garlic, and Thai basil.',
      price: 15.99,
      rating: 4.8,
      image: midnightDrunkenNoodlesImg
    },
    {
      id: 'noodle-padseeew',
      name: 'Caramelized Pad See Ew',
      description: 'Flat noodles stir-fried with egg and Chinese broccoli in a savory soy glaze.',
      price: 15.99,
      rating: 4.8,
      image: caramelizedPadSeeEwImg
    },
    {
      id: 'noodle-padwunsen',
      name: 'Glass Noodle Stir Fry (Pad Wun Sen)',
      description: 'Light stir-fried glass noodles with vegetables and egg.',
      price: 15.99,
      rating: 4.7,
      image: glassNoodleStirFryImg
    },
    {
      id: 'sig-suki',
      name: 'Thai Sukiyaki Stir-Fry (Suki Hang)',
      description: 'Glass noodles stir-fried with napa cabbage, egg, and vegetables in a savory suki sauce.',
      price: 15.99,
      rating: 4.7,
      image: thaiSukiyakiStirFryImg
    },
    {
      id: 'sig-3',
      name: 'Northern Khao Soi',
      description: 'Coconut curry noodle soup with crispy noodles and rich broth.',
      price: 18.99,
      rating: 4.9,
      image: northernKhaoSoiImg
    },
    {
      id: 'noodle-pho',
      name: 'Vietnamese Pho',
      description: 'Slow-simmered broth with rice noodles, herbs, and your choice of protein.',
      price: 14.99,
      rating: 4.8,
      image: vietnamesePhoImg
    },
    {
      id: 'noodle-yentafo',
      name: 'Yen Ta Fo Pink Noodle Soup',
      description: 'Sweet and tangy Thai noodle soup with a distinctive pink broth.',
      price: 14.99,
      rating: 4.7,
      image: yentafoImg
    }
  ],
  'Curry Kitchen': [
    {
      id: 'curry-massaman',
      name: 'Massaman Comfort Curry',
      description: 'Mild curry with potatoes, onions, and warm spices.',
      price: 15.99,
      rating: 4.9,
      image: massamanComfortCurryImg
    },
    {
      id: 'curry-red',
      name: 'Red Fire Curry',
      description: 'Coconut curry with bold red chili flavor.',
      price: 15.99,
      rating: 4.8,
      image: redFireCurryImg
    },
    {
      id: 'curry-pumpkin',
      name: 'Pineapple Curry with Pumpkin',
      description: 'Rich curry served inside pumpkin for a slightly sweet finish.',
      price: 15.99,
      rating: 5.0,
      image: redCurryWithPumpkinImg
    },
    {
      id: 'curry-green',
      name: 'Green Herb Curry',
      description: 'Fresh, aromatic green curry with basil and coconut milk.',
      price: 15.99,
      rating: 4.9,
      image: greenHerbCurryImg
    },
    {
      id: 'curry-yellow',
      name: 'Golden Yellow Curry',
      description: 'Mild curry with turmeric, potatoes, and vegetables.',
      price: 15.99,
      rating: 4.7,
      image: goldenYellowCurryImg
    },
    {
      id: 'curry-panang',
      name: 'Panang Silk Curry',
      description: 'Thick and creamy curry with a slightly sweet, nutty flavor.',
      price: 15.99,
      rating: 4.9,
      image: panangSilkCurryImg
    },
    {
      id: 'curry-jungle',
      name: 'Jungle Heat Curry',
      description: 'Spicy, herb-forward curry without coconut milk.',
      price: 13.99,
      rating: 4.6,
      image: jungleHeatCurryImg
    }
  ],
  'Rice & Wok': [
    {
      id: 'sig-basil-rice',
      name: 'Bangkok Fire Basil Rice',
      description: 'Spicy basil fried rice with chili and garlic.',
      price: 15.99,
      rating: 4.8,
      image: bangkokFireBasilRiceImg
    },
    {
      id: 'rice-pineapple',
      name: 'Pineapple Island Fried Rice',
      description: 'Sweet and savory fried rice with pineapple and cashews.',
      price: 15.99,
      rating: 4.8,
      image: pineappleIslandFriedRiceImg
    },
    {
      id: 'rice-classic',
      name: 'Classic Thai Fried Rice',
      description: 'Simple egg fried rice with vegetables.',
      price: 15.99,
      rating: 4.6,
      image: classicThaiFriedRiceImg
    },
    {
      id: 'rice-crab',
      name: 'Crab Butter Fried Rice',
      description: 'Fried rice with crab meat and rich garlic butter.',
      price: 17.99,
      rating: 5.0,
      image: crabButterFriedRiceImg
    },
    {
      id: 'rice-curry-spiced',
      name: 'Curry Spiced Fried Rice',
      description: 'Fried rice infused with warm curry spices.',
      price: 14.99,
      rating: 4.7,
      image: currySpicedFriedRiceImg
    },
    {
      id: 'rice-green-curry',
      name: 'Green Curry Fried Rice',
      description: 'Fried rice blended with green curry flavors.',
      price: 15.99,
      rating: 4.7,
      image: greenCurryFriedRiceImg
    },
    {
      id: 'rice-red-curry',
      name: 'Red Curry Fried Rice',
      description: 'Fried rice with bold red curry seasoning.',
      price: 15.99,
      rating: 4.7,
      image: redCurryFriedRiceImg
    },
    {
      id: 'rice-kapi',
      name: 'Kapi Umami Fried Rice',
      description: 'Shrimp paste fried rice with deep, savory flavor.',
      price: 17.99,
      rating: 4.8,
      image: kapiUmamiFriedRiceImg
    },
    {
      id: 'rice-hainanese',
      name: 'Hainanese Chicken Rice',
      description: 'Tender poached chicken served with fragrant rice and ginger sauce.',
      price: 13.99,
      rating: 4.8,
      image: hainaneseChickenRiceImg
    }
  ],
  'Street Kitchen': [
    {
      id: 'street-hainanese',
      name: 'Hainanese Chicken Rice',
      description: 'Classic Southeast Asian dish with poached chicken and aromatic rice.',
      price: 13.99,
      rating: 4.8,
      image: hainaneseChickenRiceImg
    },
    {
      id: 'street-biryani',
      name: 'Thai Chicken Biryani',
      description: 'Spiced rice dish layered with herbs and protein.',
      price: 16.99,
      rating: 4.8,
      image: thaiChickenBiryaniImg
    },
    {
      id: 'sig-3',
      name: 'Northern Khao Soi',
      description: 'Rich coconut curry noodle soup with crispy topping.',
      price: 18.99,
      rating: 4.9,
      image: northernKhaoSoiImg
    },
    {
      id: 'street-pho',
      name: 'Pho (Beef / Chicken / Seafood)',
      description: 'Light and aromatic Vietnamese noodle soup.',
      price: 22,
      rating: 4.7,
      image: vietnamesePhoImg
    },
    {
      id: 'street-yentafo',
      name: 'Yen Ta Fo',
      description: 'Sweet-tangy Thai noodle soup with bold flavor.',
      price: 23,
      rating: 4.7,
      image: yentafoImg
    },
    {
      id: 'street-orange-chicken',
      name: 'Thai Orange Sesame Chicken',
      description: 'Zesty, bright notes of a traditional orange glaze with the aromatic, savory foundations of Thai cuisine.',
      price: 15.99,
      rating: 4.8,
      image: thaiOrangeSesameChickenImg
    },
    {
      id: 'street-sweet-sour',
      name: 'Thai Sweet and Sour Chicken',
      description: 'Vibrant dish that balances sweet, tangy, and savory flavors.',
      price: 15.99,
      rating: 4.7,
      image: thaiSweetAndSourChickenImg
    },
    {
      id: 'street-rama-garden',
      name: 'Thai Rama Garden',
      description: 'Southeast Asian dish with rich, creamy peanut sauce served over a bed of vibrant green vegetables.',
      price: 15.99,
      rating: 4.7,
      image: thaiRamaGardenImg
    }
  ],
  'From the Sea': [
    {
      id: 'sig-2',
      name: 'Coconut Shell Seafood (Hor Mok)',
      description: 'Steamed seafood curry in coconut custard served inside a coconut shell.',
      price: 19.99,
      rating: 5.0,
      image: coconutShellSeafoodImg
    },
    {
      id: 'sea-choochee',
      name: 'Choo Chee Seafood Curry',
      description: 'Rich coconut curry with shrimp, squid, and mussels.',
      price: 19.99,
      rating: 4.9,
      image: chooCheeSeafoodCurryImg
    },
    {
      id: 'sea-salmon',
      name: 'Salmon (Choo Chee / Garlic / Sweet Chili)',
      description: 'Pan-seared salmon served with your choice of savory sauce.',
      price: 19.99,
      rating: 4.8,
      image: salmonImg
    },
    {
      id: 'sea-whole-fish-swai',
      name: 'Whole Fish Selection (Swai Filet)',
      description: 'Deep-fried whole Swai fish filet served with garlic or chili-based sauces.',
      price: 18.99,
      rating: 4.8,
      image: wholeFishSwaiImg
    },
    {
      id: 'sea-whole-fish-tilapia',
      name: 'Whole Fish Selection (Tilapia)',
      description: 'Deep-fried whole Tilapia fish served with garlic or chili-based sauces.',
      price: 22.99,
      rating: 4.8,
      image: wholeFishTilapiaImg
    },
    {
      id: 'sea-whole-fish-redsnapper',
      name: 'Whole Fish Selection (Redsnapper)',
      description: 'Deep-fried whole Redsnapper served with garlic or chili-based sauces.',
      price: 31.00,
      rating: 4.9,
      image: wholeFishRedsnapperImg
    },
    {
      id: 'sea-whole-fish-pomfret',
      name: 'Whole Fish Selection (Pomfret)',
      description: 'Deep-fried whole Pomfret served with garlic or chili-based sauces.',
      price: 25.00,
      rating: 4.8,
      image: wholeFishPomfretImg
    },
    {
      id: 'sea-whole-fish-pompano',
      name: 'Whole Fish Selection (Pompano)',
      description: 'Deep-fried whole Pompano served with garlic or chili-based sauces.',
      price: 25.00,
      rating: 4.8,
      image: wholeFishSelectionImg
    }
  ],
  'Chef’s Table': [
    {
      id: 'chef-lamb',
      name: 'Lamb Chops',
      description: 'Grilled lamb chops seasoned with Thai spices.',
      price: 25.00,
      rating: 4.9,
      image: lambChopsImg
    },
    {
      id: 'chef-lemongrass-chicken',
      name: 'Lemongrass Chicken',
      description: 'Grilled chicken infused with lemongrass and herbs.',
      price: 15.00,
      rating: 4.8,
      image: lemongrassChickenImg
    },
    {
      id: 'chef-omelette',
      name: 'Thai Style Omelette',
      description: 'Fluffy omelette seasoned with fish sauce and herbs.',
      price: 12.00,
      rating: 4.6,
      image: thaiStyleOmeletteImg
    },
    {
      id: 'chef-massaman-stew',
      name: 'Massaman Beef Stew with Roti',
      description: 'Rich, slow-simmered beef stew in massaman curry paste, served with crispy roti bread.',
      price: 18.00,
      rating: 4.9,
      image: massamanBeefStewImg
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
      price: 14.00,
      rating: 4.8,
      image: kanaHedHormImgNew
    },
    {
      id: 'plant-fried-rice',
      name: 'Vegetarian Thai Fried Rice',
      description: 'Fried rice with vegetables and soy-based seasoning.',
      price: 14.00,
      rating: 4.6,
      image: vegThaiFriedRiceImg
    },
    {
      id: 'plant-basil-rice',
      name: 'Basil Fried Rice',
      description: 'Spicy vegetarian fried rice with basil and chili.',
      price: 14.00,
      rating: 4.7,
      image: plantBasilRiceImg
    },
    {
      id: 'plant-padthai',
      name: 'Vegetarian Pad Thai',
      description: 'Rice noodles stir-fried with vegetables and tofu.',
      price: 14.00,
      rating: 4.8,
      image: plantPadThaiImg
    },
    {
      id: 'plant-tomkha-sm',
      name: 'Tom Kha (veg) - Small',
      description: 'Coconut soup with vegetables and herbs.',
      price: 5.99,
      rating: 4.8,
      image: plantTomKhaImg
    },
    {
      id: 'plant-tomkha-lg',
      name: 'Tom Kha (veg) - Large',
      description: 'Coconut soup with vegetables and herbs.',
      price: 11.99,
      rating: 4.8,
      image: plantTomKhaImg
    },
    {
      id: 'plant-tomyum-sm',
      name: 'Tom Yum (veg) - Small',
      description: 'Spicy and sour vegetable soup.',
      price: 5.99,
      rating: 4.8,
      image: plantTomYumImg
    },
    {
      id: 'plant-tomyum-lg',
      name: 'Tom Yum (veg) - Large',
      description: 'Spicy and sour vegetable soup.',
      price: 11.99,
      rating: 4.8,
      image: plantTomYumImg
    },
    {
      id: 'plant-eggplant-curry',
      name: 'Eggplant & Tofu Prik Pao',
      description: 'Eggplant and tofu in a rich prik pao chili sauce.',
      price: 14.00,
      rating: 4.7,
      image: plantEggplantTofuImg
    },
    {
      id: 'plant-choochee',
      name: 'Choo Chee Tofu',
      description: 'Tofu cooked in a creamy red curry sauce.',
      price: 18.00,
      rating: 4.7,
      image: plantChooCheeTofuImg
    },
    {
      id: 'plant-kheemao',
      name: 'Tofu Khee Mao',
      description: 'Stir-fried tofu with chili, garlic, and basil.',
      price: 14.00,
      rating: 4.7,
      image: plantTofuKheeMaoImg
    }
  ],
  'Sweet Endings': [
    {
      id: 'sweet-rubies',
      name: 'Thai Rubies in Coconut Milk (Fri, Sat & Sun only)',
      description: 'Water chestnuts served in sweet coconut milk with crushed ice.',
      price: 9.99,
      rating: 4.9,
      image: rubiesCoconutImg
    },
    {
      id: 'sweet-mango-sticky',
      name: 'Mango Sticky Rice',
      description: 'Fresh mango served with sweet coconut sticky rice.',
      price: 9.99,
      rating: 5.0,
      image: mangoStickyRiceImg
    },
    {
      id: 'sweet-banana-sticky',
      name: 'Banana Sticky Rice',
      description: 'Warm sticky rice with banana and coconut.',
      price: 8.99,
      rating: 4.8,
      image: bananaStickyRiceImg
    },
    {
      id: 'sweet-black-rice',
      name: 'Black Rice Mango Dessert',
      description: 'Nutty black rice paired with fresh mango.',
      price: 9.99,
      rating: 4.8,
      image: blackRiceMangoImg
    },
    {
      id: 'sweet-roti',
      name: 'Sweet Roti',
      description: 'Crispy Thai flatbread topped with condensed milk.',
      price: 6.99,
      rating: 4.7,
      image: sweetRotiImg
    },
    {
      id: 'sweet-banana-honey',
      name: 'Fried Banana with Honey',
      description: 'Golden fried banana drizzled with honey.',
      price: 6.99,
      rating: 4.7,
      image: friedBananaWithHoneyImg
    },
    {
      id: 'sweet-ice-cream',
      name: 'Deep Fried Ice Cream (Vanilla / Chocolate)',
      description: 'Ice cream wrapped and fried for a hot and cold contrast.',
      price: 7.99,
      rating: 4.7,
      image: deepFriedIceCreamImg
    },
    {
      id: 'sweet-pancakes',
      name: 'Thai Coconut Pancakes (Kanom Krok)',
      description: 'Bite-sized coconut rice pancakes with crispy edges and soft centers.',
      price: 8.99,
      rating: 4.8,
      image: thaiCoconutPancakesImg
    }
  ],
  'Beverages & Sides': [
    {
      id: 'side-jasmine-sm',
      name: 'Jasmine Rice - Small',
      description: 'Fragrant, steaming Jasmine rice.',
      price: 3.00,
      rating: 4.8,
      image: jasmineRiceImg
    },
    {
      id: 'side-jasmine-lg',
      name: 'Jasmine Rice - Large',
      description: 'Fragrant, steaming Jasmine rice.',
      price: 5.00,
      rating: 4.8,
      image: jasmineRiceImg
    },
    {
      id: 'side-brown',
      name: 'Brown Rice',
      description: 'Healthy, fiber-rich steamed brown rice.',
      price: 3.00,
      rating: 4.6,
      image: brownRiceImg
    },
    {
      id: 'side-sticky',
      name: 'Sticky Rice',
      description: 'Traditional sweet-savory sticky rice.',
      price: 4.00,
      rating: 4.8,
      image: stickyRiceImg
    },
    {
      id: 'side-noodles',
      name: 'Steamed Noodles (choice of glass/ pad thai / flat noodles)',
      description: 'Freshly steamed rice ribbon noodles.',
      price: 5.99,
      rating: 4.7,
      image: steamedNoodlesImg
    },
    {
      id: 'side-veg',
      name: 'Steamed Vegetables',
      description: 'A fresh mix of seasonal steamed greens and vegetables.',
      price: 3.99,
      rating: 4.7,
      image: steamedVegetablesImg
    },
    {
      id: 'side-peanut',
      name: 'Peanut Sauce',
      description: 'Our house-made aromatic peanut dipping sauce.',
      price: 3.00,
      rating: 4.9,
      image: peanutSauceImg
    },
    {
      id: 'bev-thai-tea',
      name: 'Thai Iced Tea',
      description: 'Traditional sweetened Thai iced tea topped with rich cream.',
      price: 5.00,
      rating: 4.9,
      image: thaiIcedTeaImg
    }
  ],
  'Soups & Claypots': [
    {
      id: 'soup-tomyum-clear-sm',
      name: 'Tom Yum Fire Broth (Clear) - Small',
      description: 'Traditional, fiery-sharp clear hot and sour broth infused with crushed lemongrass, galangal, fresh chili, fresh lime juice, kaffir lime leaves, and wild mushrooms.',
      price: 5.99,
      rating: 4.8,
      image: tomYumFireBrothImg
    },
    {
      id: 'soup-tomyum-clear-lg',
      name: 'Tom Yum Fire Broth (Clear) - Large',
      description: 'Traditional, fiery-sharp clear hot and sour broth infused with crushed lemongrass, galangal, fresh chili, fresh lime juice, kaffir lime leaves, and wild mushrooms.',
      price: 11.99,
      rating: 4.8,
      image: tomYumFireBrothImg
    },
    {
      id: 'soup-tomyum-creamy-sm',
      name: 'Tom Yum Creamy Broth - Small',
      description: 'Vibrant, spicy-sour lemongrass broth enriched with a touch of evaporated milk, loaded with giant tiger prawns, oyster mushrooms, tomatoes, and fresh kaffir lime leaves.',
      price: 6.99,
      rating: 4.9,
      image: tomYumCreamyBrothImg
    },
    {
      id: 'soup-tomyum-creamy-lg',
      name: 'Tom Yum Creamy Broth - Large',
      description: 'Vibrant, spicy-sour lemongrass broth enriched with a touch of evaporated milk, loaded with giant tiger prawns, oyster mushrooms, tomatoes, and fresh kaffir lime leaves.',
      price: 12.99,
      rating: 4.9,
      image: tomYumCreamyBrothImg
    },
    {
      id: 'soup-tomkha-sm',
      name: 'Tom Kha Coconut Soup - Small',
      description: 'Silky, aromatic coconut milk broth simmered with tender chicken breast, wild mushrooms, fresh galangal, lemongrass, kaffir lime, and roasted chili oil.',
      price: 6.99,
      rating: 4.9,
      image: tomKhaCoconutSoupImg
    },
    {
      id: 'soup-tomkha-lg',
      name: 'Tom Kha Coconut Soup - Large',
      description: 'Silky, aromatic coconut milk broth simmered with tender chicken breast, wild mushrooms, fresh galangal, lemongrass, kaffir lime, and roasted chili oil.',
      price: 13.99,
      rating: 4.9,
      image: tomKhaCoconutSoupImg
    },
    {
      id: 'soup-khao-tom',
      name: 'Rice Comfort Soup (Khao Tom)',
      description: 'Traditional comforting Thai rice soup cooked in a rich, savory pork bone broth with hand-rolled seasoned pork meatballs, fresh ginger, celery, and golden fried garlic.',
      price: 11.99,
      rating: 4.7,
      image: riceComfortSoupImg
    },
    {
      id: 'soup-egg-drop-sm',
      name: 'Egg Drop Soup Small',
      description: 'Light broth with delicate ribbons of egg.',
      price: 6.99,
      rating: 4.7,
      image: eggDropSoupImg
    },
    {
      id: 'soup-hot-sour-sm',
      name: 'Hot & Sour Soup - Small',
      description: 'Tangy, savory soup with vegetables and a mild spicy kick.',
      price: 6.99,
      rating: 4.8,
      image: hotSourSoupImg
    },
    {
      id: 'soup-hot-sour-lg',
      name: 'Hot & Sour Soup - Large',
      description: 'Tangy, savory soup with vegetables and a mild spicy kick.',
      price: 13.99,
      rating: 4.8,
      image: hotSourSoupImg
    },
    {
      id: 'soup-miso-sm',
      name: 'Miso Soup Small',
      description: 'Traditional Japanese-style soybean broth with tofu and seaweed.',
      price: 5.99,
      rating: 4.7,
      image: misoSoupImg
    },
    {
      id: 'soup-shrimp-wonton-sm',
      name: 'Shrimp Wonton Soup - Small',
      description: 'Savory broth filled with house-made shrimp wontons and vegetables.',
      price: 6.99,
      rating: 4.8,
      image: shrimpWontonSoupImg
    },
    {
      id: 'soup-shrimp-wonton-lg',
      name: 'Shrimp Wonton Soup - Large',
      description: 'Savory broth filled with house-made shrimp wontons and vegetables.',
      price: 13.99,
      rating: 4.8,
      image: shrimpWontonSoupImg
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
    price: 12.99,
    rating: 5.0,
    image: lunchImg,
    tags: ['Lunch Special', 'Multi-Course']
  },
  {
    id: 'lunch-pad-thai',
    name: 'Lunch Maha Street Pad Thai',
    description: 'Midday portion of our signature stir-fried rice noodles with tamarind sauce, egg, and peanuts.',
    price: 12.99,
    rating: 4.9,
    image: mahaStreetPadThaiImg
  },
  {
    id: 'lunch-drunken-noodles',
    name: 'Lunch Midnight Drunken Noodles 🌶️🔥',
    description: 'Wide noodles stir-fried with chili, garlic, and Thai basil.',
    price: 12.99,
    rating: 4.8,
    image: midnightDrunkenNoodlesImg
  },
  {
    id: 'lunch-pad-see-ew',
    name: 'Lunch Caramelized Pad See Ew',
    description: 'Flat noodles stir-fried with egg and Chinese broccoli in a savory soy glaze.',
    price: 12.99,
    rating: 4.8,
    image: caramelizedPadSeeEwImg
  },
  {
    id: 'lunch-massaman',
    name: 'Lunch Massaman Comfort Curry',
    description: 'Mild curry with potatoes, onions, and warm spices.',
    price: 12.99,
    rating: 4.9,
    image: massamanComfortCurryImg
  },
  {
    id: 'lunch-yellow-curry',
    name: 'Lunch Golden Yellow Curry',
    description: 'Mild curry with turmeric, potatoes, and vegetables.',
    price: 12.99,
    rating: 4.7,
    image: goldenYellowCurryImg
  },
  {
    id: 'lunch-basil-rice',
    name: 'Lunch Bangkok Fire Basil Rice 🌶️🔥',
    description: 'Spicy basil fried rice with chili and garlic.',
    price: 12.99,
    rating: 4.8,
    image: bangkokFireBasilRiceImg
  },
  {
    id: 'lunch-pineapple-rice',
    name: 'Lunch Pineapple Island Fried Rice',
    description: 'Sweet and savory fried rice with pineapple and cashews.',
    price: 12.99,
    rating: 4.8,
    image: pineappleIslandFriedRiceImg
  },
  {
    id: 'lunch-classic-rice',
    name: 'Lunch Classic Thai Fried Rice',
    description: 'Simple egg fried rice with vegetables.',
    price: 12.99,
    rating: 4.6,
    image: classicThaiFriedRiceImg
  },
  {
    id: 'lunch-lemongrass-chicken',
    name: 'Lunch Lemongrass Chicken',
    description: 'Grilled chicken infused with lemongrass and herbs.',
    price: 12.99,
    rating: 4.8,
    image: lemongrassChickenImg
  },
  {
    id: 'lunch-veg-padthai',
    name: 'Lunch Vegetarian Pad Thai',
    description: 'Rice noodles stir-fried with vegetables and tofu.',
    price: 12.99,
    rating: 4.8,
    image: mahaStreetPadThaiImg
  }
];

// Load custom admin overrides from localStorage if present
try {
  if (typeof window !== 'undefined') {
    if (!localStorage.getItem('maha_menu_reset_prices_v5')) {
      localStorage.removeItem('maha_custom_menu');
      localStorage.setItem('maha_menu_reset_prices_v5', 'true');
    }
  }
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

export default function MenuSection({ cart = {}, addToCart, removeFromCart }) {
  const seasonalItems = [
    menuData['Soups & Claypots'].find(item => item.id === 'soup-hot-pot'),
    menuData['Curry Kitchen'].find(item => item.id === 'curry-jungle'),
    menuData['Soups & Claypots'].find(item => item.id === 'soup-khao-tom')
  ].filter(Boolean);

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

        {/* Grid Showcase of Seasonal Menu Cards */}
        <motion.div
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
          {seasonalItems.map((item) => (
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

        {/* View Full Menu Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <a
            href="#/menu/dinner"
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
