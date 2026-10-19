export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Gym' | 'Salon' | 'Restaurant' | 'Cafe' | 'Personal Portfolio';
  status: 'Design Prototype' | 'Concept Placeholder';
  description: string;
  highlights: string[];
  techStack: string[];
  palette: {
    bg: string;
    accent: string;
    text: string;
  };
  mockSections: {
    heroTitle: string;
    heroSubtitle: string;
    featuredItems: { name: string; detail: string; priceOrMeta?: string }[];
    callToAction: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: 'ironcore-gym',
    title: 'IronCore Athletic Studio',
    tagline: 'High-Impact Fitness & Strength Training Hub',
    category: 'Gym',
    status: 'Design Prototype',
    description: 'A dark, high-octane web prototype crafted for high-performance training studios. Engineered with an interactive schedule table, coach roster, and 1-tap WhatsApp session booking.',
    highlights: [
      'Interactive daily HIIT and weightlifting timetable',
      'Dynamic membership comparison with WhatsApp trial action',
      'High-contrast typography optimized for rapid mobile browsing'
    ],
    techStack: ['React', 'Tailwind CSS', 'Mobile First', 'WhatsApp API'],
    palette: {
      bg: '#111111',
      accent: '#E63946',
      text: '#F5F3F0'
    },
    mockSections: {
      heroTitle: 'FORGE YOUR STRONGEST PHYSIQUE',
      heroSubtitle: 'Boutique strength facility with Olympic lifting platforms & private coaching.',
      featuredItems: [
        { name: 'Strength & Conditioning', detail: 'Mon, Wed, Fri at 6:30 AM & 6:00 PM', priceOrMeta: 'High Intensity' },
        { name: 'Functional HIIT Circuit', detail: 'Tue, Thu, Sat at 7:00 AM & 5:30 PM', priceOrMeta: 'Cardio Focus' },
        { name: '1-on-1 Personal Training', detail: 'Flexible booking with certified coaches', priceOrMeta: 'Bespoke Plan' }
      ],
      callToAction: 'Book Free Trial Class'
    }
  },
  {
    id: 'luxe-velvet-salon',
    title: 'Élixir Aesthetics & Hair Studio',
    tagline: 'Boutique Hair Styling & Luxury Day Spa',
    category: 'Salon',
    status: 'Design Prototype',
    description: 'An understated, elegant prototype with soft editorial warmth. Features an organized treatment menu with clear price tiers, artist profiles, and direct appointment requests.',
    highlights: [
      'Categorized aesthetic & hair styling menu with transparent pricing',
      'Direct WhatsApp booking with preferred time slot selector',
      'High-fashion visual framing tailored for beauty clientele'
    ],
    techStack: ['React', 'Tailwind CSS', 'Responsive Layout', 'Appointment Flow'],
    palette: {
      bg: '#181716',
      accent: '#e2d5c3',
      text: '#faf8f5'
    },
    mockSections: {
      heroTitle: 'HAUTE COIFFURE & REFINED WELLNESS',
      heroSubtitle: 'Contemporary haircutting, organic coloring, and restorative head spa treatments.',
      featuredItems: [
        { name: 'Signature Precision Cut & Blowout', detail: 'Includes botanical scalp massage', priceOrMeta: '45 mins' },
        { name: 'Balayage & Dimensional Color', detail: 'Ammonia-free organic color formulas', priceOrMeta: '120 mins' },
        { name: 'Restorative Keratin & Scalp Therapy', detail: 'Deep hydration & shine treatment', priceOrMeta: '60 mins' }
      ],
      callToAction: 'Reserve Appointment via WhatsApp'
    }
  },
  {
    id: 'vesper-table-restaurant',
    title: 'Vesper Hearth & Table',
    tagline: 'Wood-Fired Dining & Craft Cocktail Bar',
    category: 'Restaurant',
    status: 'Design Prototype',
    description: 'An atmospheric, appetizing dining experience. Implements a responsive menu with dietary filtering (Veg, Vegan, Gluten-Free), wine pairing suggestions, and table booking.',
    highlights: [
      'Interactive digital dining menu with filterable courses',
      'One-tap reservation form linked directly to WhatsApp or phone',
      'Location, operating hours, and parking information'
    ],
    techStack: ['React', 'Tailwind CSS', 'Interactive Menus', 'Reservation Flow'],
    palette: {
      bg: '#141211',
      accent: '#f3c070',
      text: '#faf5ee'
    },
    mockSections: {
      heroTitle: 'WOOD-FIRED FLAVORS & ARTISANAL SIPS',
      heroSubtitle: 'Seasonal farm-to-table cuisine prepared over open charcoal embers.',
      featuredItems: [
        { name: 'Charred Heritage Burrata', detail: 'Smoked heirloom figs, wild honey, warm sourdough', priceOrMeta: 'Starter' },
        { name: 'Wood-Roasted Truffle Gnocchi', detail: 'Cultivated wild mushrooms, brown butter, sage', priceOrMeta: 'Main' },
        { name: 'Smoked Bourbon Old Fashioned', detail: 'Single-cask spirit, house bitters, orange peel', priceOrMeta: 'Craft Bar' }
      ],
      callToAction: 'Reserve a Table Online'
    }
  },
  {
    id: 'brew-hearth-cafe',
    title: 'Brew & Hearth Coffee Lab',
    tagline: 'Specialty Coffee Bar & Artisan Micro-Bakery',
    category: 'Cafe',
    status: 'Design Prototype',
    description: 'A cozy, clean digital shop showcasing single-origin bean selections, fresh morning bake drops, remote-work amenities, and quick pickup ordering.',
    highlights: [
      'Single-origin roast profiles and brew method guide',
      'Live daily pastry board and specialty drink list',
      'WhatsApp direct ordering for express take-away'
    ],
    techStack: ['React', 'Tailwind CSS', 'Fast Mobile UX', 'Quick Order'],
    palette: {
      bg: '#171614',
      accent: '#d8b082',
      text: '#fdfbf7'
    },
    mockSections: {
      heroTitle: 'CRAFTED COFFEE & MORNING BAKES',
      heroSubtitle: 'Ethically sourced single origins roasted weekly with butter-flaked pastries.',
      featuredItems: [
        { name: 'Single Origin Pour Over (Ethiopia Yirgacheffe)', detail: 'Jasmine, bergamot, peach stone fruit notes', priceOrMeta: 'V60 / AeroPress' },
        { name: 'Velvet Vanilla Bean Cold Brew', detail: 'Steeped for 18 hours, silky cream top', priceOrMeta: 'Cold Craft' },
        { name: 'Cardamom & Almond Twice-Baked Croissant', detail: 'Freshly baked daily at 7:30 AM', priceOrMeta: 'Artisan Bakery' }
      ],
      callToAction: 'Order Take-Away on WhatsApp'
    }
  },
  {
    id: 'minimal-creator-portfolio',
    title: 'Atelier Monochrome',
    tagline: 'Bespoke Personal Portfolio for Independent Creators',
    category: 'Personal Portfolio',
    status: 'Design Prototype',
    description: 'A stark, unapologetic personal portfolio template designed to make the individual the focal point. High-contrast typography, zero clutter, and high-converting contact actions.',
    highlights: [
      'Commanding hero with personal monogram and bio focal anchor',
      'Curated case studies with dynamic modal expansions',
      'Direct WhatsApp, Instagram, and email conversion points'
    ],
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Personal Branding'],
    palette: {
      bg: '#111111',
      accent: '#E63946',
      text: '#F5F3F0'
    },
    mockSections: {
      heroTitle: 'DISTINCTIVE DIGITAL IDENTITIES',
      heroSubtitle: 'Tailored websites built for creators and professionals who refuse to blend in.',
      featuredItems: [
        { name: 'High-Impact Personal Branding', detail: 'Unforgettable first impression with custom typography', priceOrMeta: 'Identity' },
        { name: 'Speed & Responsive Craft', detail: '100/100 performance scores on mobile and desktop', priceOrMeta: 'Performance' },
        { name: 'Direct Inbound Conversion', detail: 'Eliminate friction with direct WhatsApp and mail CTAs', priceOrMeta: 'Inquiries' }
      ],
      callToAction: 'Commission Your Portfolio'
    }
  }
];
