import { useState, useEffect } from 'react';

export const defaultWebsiteContent = {
  hero: {
    subtitle: 'Crafted with Heritage, Served with Grace',
    titleLine1: 'Experience Authentic',
    titleGold: 'Thai Food',
    buttonText: 'EXPLORE OUR MENUS'
  },
  philosophy: {
    subtitle: 'THE ART OF MAHA',
    title: 'Culinary Philosophy Rooted in Tradition',
    paragraph1: 'At Maha Thai, we believe that dining is a narrative of heritage. Each dish is a meticulously crafted masterpiece, utilizing ancient royal recipes passed down through generations of master chefs.',
    paragraph2: 'Our commitment to excellence begins with the source: premium organic spices from the foothills of Chiang Mai and the freshest coastal harvests. We balance the five essential Thai flavors—sour, sweet, salty, bitter, and spicy—to create a symphony for the palate.',
    pillar1Num: '01',
    pillar1Text: 'HERITAGE INGREDIENTS',
    pillar2Num: '02',
    pillar2Text: 'ARTISANAL CRAFT',
    pillar3Num: '03',
    pillar3Text: 'BESPOKE SERVICE'
  },
  welcome: {
    subtitle: 'Sawasdee & Welcome',
    title: 'A Sanctuary of Royal Siamese Dining',
    paragraph: 'Step into a space where every corner breathes elegance and every aroma whispers a centuries-old secret. Maha Thai brings the grandeur of the historic Siamese courts to life, offering a peaceful refuge of high culinary craftsmanship and warm, heartfelt hospitality.',
    pillar1Num: 'I',
    pillar1Title: 'Royal Lineage Recipes',
    pillar1Desc: 'Inspired by the traditional menus of the Royal Court of Bangkok, balancing all five taste dimensions.',
    pillar2Num: 'II',
    pillar2Title: 'Heritage Sourcing',
    pillar2Desc: 'Fresh, native herbs and cold-pressed botanical oils imported directly from local organic farms in Thailand.',
    pillar3Num: 'III',
    pillar3Title: 'The Twelve-Salon Intimacy',
    pillar3Desc: 'A restricted layout of only twelve tables ensures that each guest receives bespoke, uncompromising service.',
    buttonText: 'Order Now'
  },
  about: {
    heroSubtitle: 'Our Legacy',
    heroTitle: 'Philosophy & Heritage',
    heroDesc: 'Step behind the curtain of Maha Thai. We honor the intricate culinary methodologies of ancient Siam, preserving the culinary disciplines of royal court kitchens.',
    splitSubtitle: 'The Royal Lineage',
    splitTitle: 'Artistry born from Royal culinary tradition.',
    splitDesc1: 'In the royal courts of ancient Siam, dining was crafted as an offering of absolute equilibrium. Every dish was prepared to satisfy and balance the five fundamental flavors: salty, sweet, sour, spicy, and bitter. Spices were selected not only for their flavor profiles but for their natural therapeutic value.',
    splitDesc2: 'Our ancestors believed that food had the power to nurture the soul and harmonize the body. Each recipe was guardedly documented, handed down through generations of culinary masters who served the royal palaces. We carry this torch with pride, keeping the ancient flame of traditional Siamese cooking alive.',
    quoteText: 'Cooking is a form of active meditation, where every herb must align to create a singular, transformative memory.',
    quoteAuthorName: 'Chef Thanachai',
    quoteAuthorTitle: 'Master Culinary Officer',
    canvasSubtitle: 'Culinary Integrity',
    canvasTitle: 'The Rhythm of the Stone Mortar',
    canvasDesc1: 'Our Master Chef Thanachai firmly believes that electric food processors destroy the soul of Thai paste. High-speed steel blades heat the ingredients, causing delicate volatile oils in lemongrass, lime leaves, and wild galangal to evaporate prematurely.',
    canvasDesc2: 'Instead, our paste is created with a heavy granite mortar. The heavy, rhythmic pressure crushes the cell walls of herbs, coaxing out deep aromas and bonding natural juices into a thick, emerald paste. It is a slow, physically demanding task—but it is the only way to achieve the intense, complex depth that defines our signature curries.',
    canvasDesc3: 'From hand-pressed coconut milk to locally sourced bird\'s eye chilies and holy basil, we reject shortcuts. Every ingredient is treated as a sacred note in a larger, symphonic culinary masterpiece.',
    value1Num: '01',
    value1Title: 'Purity',
    value1Desc: 'Strictly organic herbs, fresh hand-pressed coconut milk, and zero artificial enhancers.',
    value2Num: '02',
    value2Title: 'Harmony',
    value2Desc: 'A calibrated symphony of sweet, spicy, salty, sour, and bitter elements in every bite.',
    value3Num: '03',
    value3Title: 'Artistry',
    value3Desc: 'Bespoke, visual plated designs mirroring traditional royal palace presentation methods.',
    value4Num: '04',
    value4Title: 'Heritage',
    value4Desc: 'Recipes preserved across four generations of Siamese culinary guilds and master chefs.'
  },
  contact: {
    heroSubtitle: 'GET IN TOUCH',
    heroTitle: 'Contact Us',
    heroDesc: 'We\'d love to hear from you. Reach out for reservations, private events, catering inquiries, or simply to say hello.',
    card1Title: 'Visit Us',
    card1Line1: '1901 Long Prairie Rd, Ste 260,',
    card1Line2: 'Flower Mound, TX 75022',
    card2Title: 'Call Us',
    card2Line1: '+1 (469) 993-1399',
    card2Line2: '',
    card3Title: 'Email Us',
    card3Line1: 'info@mahaathai.com',
    card3Line2: '',
    card4Title: 'Opening Hours',
    card4Line1: 'Lunch: 11:00 AM – 3:00 PM',
    card4Line2: 'Dinner: Served All Day',
    formSubtitle: 'SEND A MESSAGE',
    formTitle: 'We\'d Love to Hear From You',
    formDesc: 'Whether it\'s a question about our menu, a special dietary need, or a private event inquiry — our team is here to help.'
  }
};

let globalContent = { ...defaultWebsiteContent };
const listeners = new Set();

// Load initial content from local storage safely
try {
  if (typeof window !== 'undefined') {
    if (!localStorage.getItem('maha_content_reset_v4')) {
      localStorage.removeItem('maha_website_content');
      localStorage.setItem('maha_content_reset_v4', 'true');
    }
  }
  const saved = localStorage.getItem('maha_website_content');
  if (saved) {
    const parsed = JSON.parse(saved);
    globalContent = {
      hero: { ...defaultWebsiteContent.hero, ...parsed.hero },
      philosophy: { ...defaultWebsiteContent.philosophy, ...parsed.philosophy },
      welcome: { ...defaultWebsiteContent.welcome, ...parsed.welcome },
      about: { ...defaultWebsiteContent.about, ...parsed.about },
      contact: { ...defaultWebsiteContent.contact, ...parsed.contact }
    };
  }
} catch (e) {
  console.error("Failed to load saved CMS website content:", e);
}

export function getWebsiteContent() {
  return globalContent;
}

export function updateWebsiteContent(newContent) {
  globalContent = {
    hero: { ...globalContent.hero, ...newContent.hero },
    philosophy: { ...globalContent.philosophy, ...newContent.philosophy },
    welcome: { ...globalContent.welcome, ...newContent.welcome },
    about: { ...globalContent.about, ...newContent.about },
    contact: { ...globalContent.contact, ...newContent.contact }
  };
  localStorage.setItem('maha_website_content', JSON.stringify(globalContent));
  
  listeners.forEach(listener => listener(globalContent));
  window.dispatchEvent(new CustomEvent('maha_cms_update', { detail: globalContent }));
}

export function useWebsiteContent() {
  const [content, setContent] = useState(globalContent);
  
  useEffect(() => {
    listeners.add(setContent);
    const handleCmsUpdate = (e) => {
      setContent(e.detail);
    };
    window.addEventListener('maha_cms_update', handleCmsUpdate);
    return () => {
      listeners.delete(setContent);
      window.removeEventListener('maha_cms_update', handleCmsUpdate);
    };
  }, []);
  
  return content;
}
