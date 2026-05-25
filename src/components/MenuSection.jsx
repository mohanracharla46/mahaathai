import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

// Import images
import heroDish from '../assets/hero_dish.png';
import menuAppetizer from '../assets/menu_appetizer.png';
import menuCurry from '../assets/menu_curry.png';
import menuDessert from '../assets/menu_dessert.png';
import mahaStreetPadThaiImg from '../assets/Maha Street Pad Thai .png';
import coconutShellSeafoodImg from '../assets/Coconut Shell Seafood (Hor Mok).png';
import shrimpToastImg from '../assets/Shrimp Toast .png';

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
    image: heroDish,
    tags: ['Signature', 'Spicy']
  }
];

export const menuData = {
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
      image: heroDish
    },
    {
      id: 'noodle-drunken',
      name: 'Midnight Drunken Noodles',
      description: 'Wide noodles stir-fried with chili, garlic, and Thai basil.',
      price: 22,
      rating: 4.8,
      image: menuAppetizer
    },
    {
      id: 'noodle-padseeew',
      name: 'Caramelized Pad See Ew',
      description: 'Flat noodles stir-fried with egg and Chinese broccoli in a savory soy glaze.',
      price: 22,
      rating: 4.8,
      image: menuAppetizer
    },
    {
      id: 'noodle-padwunsen',
      name: 'Glass Noodle Stir Fry (Pad Wun Sen)',
      description: 'Light stir-fried glass noodles with vegetables and egg.',
      price: 21,
      rating: 4.7,
      image: heroDish
    },
    {
      id: 'sig-suki',
      name: 'Thai Sukiyaki Stir-Fry (Suki Hang)',
      description: 'Glass noodles stir-fried with napa cabbage, egg, and vegetables in a savory suki sauce.',
      price: 23,
      rating: 4.7,
      image: heroDish
    },
    {
      id: 'sig-3',
      name: 'Northern Khao Soi',
      description: 'Coconut curry noodle soup with crispy noodles and rich broth.',
      price: 25,
      rating: 4.9,
      image: heroDish
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
      image: menuCurry
    },
    {
      id: 'curry-red',
      name: 'Red Fire Curry',
      description: 'Coconut curry with bold red chili flavor.',
      price: 23,
      rating: 4.8,
      image: menuCurry
    },
    {
      id: 'curry-pumpkin',
      name: 'Red Curry with Pumpkin',
      description: 'Rich curry served inside pumpkin for a slightly sweet finish.',
      price: 26,
      rating: 5.0,
      image: menuCurry
    },
    {
      id: 'curry-green',
      name: 'Green Herb Curry',
      description: 'Fresh, aromatic green curry with basil and coconut milk.',
      price: 23,
      rating: 4.9,
      image: menuCurry
    },
    {
      id: 'curry-yellow',
      name: 'Golden Yellow Curry',
      description: 'Mild curry with turmeric, potatoes, and vegetables.',
      price: 22,
      rating: 4.7,
      image: menuCurry
    },
    {
      id: 'curry-panang',
      name: 'Panang Silk Curry',
      description: 'Thick and creamy curry with a slightly sweet, nutty flavor.',
      price: 24,
      rating: 4.9,
      image: menuCurry
    },
    {
      id: 'curry-jungle',
      name: 'Jungle Heat Curry',
      description: 'Spicy, herb-forward curry without coconut milk.',
      price: 22,
      rating: 4.6,
      image: menuCurry
    }
  ],
  'Rice & Wok': [
    {
      id: 'sig-basil-rice',
      name: 'Bangkok Fire Basil Rice',
      description: 'Spicy basil fried rice with chili and garlic.',
      price: 22,
      rating: 4.8,
      image: heroDish
    },
    {
      id: 'rice-pineapple',
      name: 'Pineapple Island Fried Rice',
      description: 'Sweet and savory fried rice with pineapple and cashews.',
      price: 24,
      rating: 4.8,
      image: heroDish
    },
    {
      id: 'rice-classic',
      name: 'Classic Thai Fried Rice',
      description: 'Simple egg fried rice with vegetables.',
      price: 18,
      rating: 4.6,
      image: heroDish
    },
    {
      id: 'rice-crab',
      name: 'Crab Butter Fried Rice',
      description: 'Fried rice with crab meat and rich garlic butter.',
      price: 28,
      rating: 5.0,
      image: heroDish
    },
    {
      id: 'rice-curry-spiced',
      name: 'Curry Spiced Fried Rice',
      description: 'Fried rice infused with warm curry spices.',
      price: 20,
      rating: 4.7,
      image: heroDish
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
      image: heroDish
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
      image: menuCurry
    },
    {
      id: 'plant-tomyum',
      name: 'Tom Yum (veg)',
      description: 'Spicy and sour vegetable soup.',
      price: 18,
      rating: 4.8,
      image: menuCurry
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
  ]
};

// Map Lunch, Normal, and Vegetarian menu keys for the specialized dropdowns and pages
menuData['Vegetarian'] = menuData['Plant-Based'];
menuData['Normal'] = [
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
    image: menuCurry
  },
  {
    id: 'lunch-yellow-curry',
    name: 'Lunch Golden Yellow Curry',
    description: 'Mild curry with turmeric, potatoes, and vegetables.',
    price: 17,
    rating: 4.7,
    image: menuCurry
  },
  {
    id: 'lunch-basil-rice',
    name: 'Lunch Bangkok Fire Basil Rice',
    description: 'Spicy basil fried rice with chili and garlic.',
    price: 17,
    rating: 4.8,
    image: heroDish
  },
  {
    id: 'lunch-pineapple-rice',
    name: 'Lunch Pineapple Island Fried Rice',
    description: 'Sweet and savory fried rice with pineapple and cashews.',
    price: 18,
    rating: 4.8,
    image: heroDish
  },
  {
    id: 'lunch-classic-rice',
    name: 'Lunch Classic Thai Fried Rice',
    description: 'Simple egg fried rice with vegetables.',
    price: 15,
    rating: 4.6,
    image: heroDish
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

const categories = ['Noodle Bar', 'Curry Kitchen', 'Rice & Wok', 'Street Kitchen', 'From the Sea', 'Chef’s Table', 'Plant-Based', 'Sweet Endings', 'Beverages & Sides'];

export default function MenuSection({ cart = {}, addToCart, removeFromCart }) {
  const [selectedCategory, setSelectedCategory] = useState('Noodle Bar');

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
          className="flex justify-center mb-16" 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
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
