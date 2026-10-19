export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  idealFor: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'gym',
    number: '01',
    title: 'Gym & Fitness Websites',
    category: 'Health & Athletics',
    description: 'High-energy, conversion-focused websites engineered to drive member sign-ups, display dynamic training timetables, and showcase coach credentials.',
    features: [
      'Interactive class & training schedules',
      'Membership pricing & plan comparison tables',
      'Direct WhatsApp booking for free trial sessions',
      'Mobile-first high-contrast visual layout'
    ],
    idealFor: 'CrossFit boxes, boutique gyms, personal training studios, and yoga centers.'
  },
  {
    id: 'salon',
    number: '02',
    title: 'Salon & Spa Websites',
    category: 'Beauty & Wellness',
    description: 'Tactile, premium digital experiences that convey aesthetic sophistication, highlight signature services, and convert casual visitors into booked appointments.',
    features: [
      'Structured service & treatment menu with pricing',
      'One-tap appointment booking via WhatsApp or phone',
      'Stylist & specialist profile showcase',
      'Client before-and-after gallery section'
    ],
    idealFor: 'Hair salons, luxury spas, aesthetic clinics, and nail studios.'
  },
  {
    id: 'restaurant',
    number: '03',
    title: 'Restaurant Websites',
    category: 'Hospitality & Dining',
    description: 'Appetizing, intuitive digital storefronts featuring readable digital menus, location guidance, and frictionless table reservation actions.',
    features: [
      'Categorized food & drink menu with dietary markers',
      'Frictionless table reservation & inquiry flow',
      'Atmospheric dining room & dish presentation',
      'Google Maps link, opening hours & quick directions'
    ],
    idealFor: 'Fine dining restaurants, bistros, rooftop lounges, and casual eateries.'
  },
  {
    id: 'cafe',
    number: '04',
    title: 'Cafe & Bakery Websites',
    category: 'Artisanal & Coffee',
    description: 'Inviting, characterful web pages celebrating craft coffee, daily baked offerings, and community warmth with fast-loading mobile pages.',
    features: [
      'Artisanal coffee origins & bean profiles',
      'Daily freshly baked treats highlight',
      'Direct order pickup links & WhatsApp quick chat',
      'WiFi, remote-work friendly indicators & cozy ambiance'
    ],
    idealFor: 'Specialty coffee shops, artisan bakeries, dessert parlors, and tea houses.'
  },
  {
    id: 'portfolio',
    number: '05',
    title: 'Personal Portfolio Websites',
    category: 'Creatives & Founders',
    description: 'Bespoke, confident portfolio sites for freelancers, architects, photographers, and founders who want an unmistakable personal identity that converts.',
    features: [
      'Commanding personal hero layout with unique typography',
      'Curated project case study cards & prototype demos',
      'Frictionless direct contact links (WhatsApp, Instagram, Email)',
      'Blazing fast performance & responsive mobile view'
    ],
    idealFor: 'Freelancers, consultants, visual artists, architects, and creators.'
  }
];
