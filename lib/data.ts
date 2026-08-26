import regeneratedImageLook4 from '@/src/assets/images/regenerated_image_1787740495284.png';
import { StaticImageData } from 'next/image';

export interface ServiceItem {
  id: string;
  number: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  subServices: {
    name: string;
    description: string;
    duration?: string;
  }[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'hair',
    number: '01',
    category: 'HAIR',
    tagline: 'CUT • STYLE • TREATMENT',
    description:
      'Precision architectural haircuts and organic texturizing tailored to your face shape, daily routine, and personal texture.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop',
    features: ['Consultation & Diagnostic', 'Precision Wet & Dry Cut', 'Blowout & Directional Finish', 'Deep Scalp & Keratin Infusions'],
    subServices: [
      {
        name: 'The Signature Haircut',
        description: 'Comprehensive consultation, custom wash, precision sculpting cut, and styled blowout.',
        duration: '45-60 mins',
      },
      {
        name: 'Texture & Movement Layering',
        description: 'De-bulking and texturizing tailored to enhance natural waves, curls, or fine hair volume.',
        duration: '45 mins',
      },
      {
        name: 'Restorative Hair & Scalp Ritual',
        description: 'Targeted hydration, stem cell or protein treatment for damaged, chemically treated, or dry hair.',
        duration: '45 mins',
      },
      {
        name: 'Editorial Wash & Blowout',
        description: 'Silk press, textured beach waves, or high-volume classic blowout for any occasion.',
        duration: '35 mins',
      },
    ],
  },
  {
    id: 'colour',
    number: '02',
    category: 'COLOUR',
    tagline: 'GLOBAL • HIGHLIGHTS • CREATIVE COLOUR',
    description:
      'Lived-in dimensional balayage, rich glossy globals, and fashion-forward tonal placement that grows out effortlessly.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop',
    features: ['Custom Tone Formulations', 'Seamless Lived-in Balayage', 'Grey Blending & Root Retouch', 'High-Gloss Glaze Sealant'],
    subServices: [
      {
        name: 'Signature Balayage & Melt',
        description: 'Hand-painted dimensional highlights paired with shadow root and customized gloss tone.',
        duration: '120-180 mins',
      },
      {
        name: 'Full Global Colour & Shine',
        description: 'Rich, uniform all-over coverage with deep conditioning gloss for long-lasting vibrancy.',
        duration: '90 mins',
      },
      {
        name: 'Face-Framing Money Piece',
        description: 'High-contrast or subtle micro-lights around the hairline to illuminate facial features.',
        duration: '60 mins',
      },
      {
        name: 'Tonal Gloss & Refresh',
        description: 'Post-color shine booster and brass-cancelling tone between major color sessions.',
        duration: '40 mins',
      },
    ],
  },
  {
    id: 'beauty',
    number: '03',
    category: 'BEAUTY',
    tagline: 'SKIN • HANDS • FEET',
    description:
      'Curated skincare therapies, modern manicures, and revitalizing treatments designed to enhance your natural radiance.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop',
    features: ['Hydrating Skin Facials', 'Gel & Classic Nail Artistry', 'Detoxifying Spa Pedicures', 'Brow Shaping & Tinting'],
    subServices: [
      {
        name: 'Custom Glow Facial',
        description: 'Deep pore cleanse, gentle exfoliation, active hydration mask, and lymphatic drainage massage.',
        duration: '60 mins',
      },
      {
        name: 'Editorial Manicure & Nail Care',
        description: 'Cuticle restoration, precision shaping, buffing, and optional long-wear gel finish.',
        duration: '45 mins',
      },
      {
        name: 'Restorative Spa Pedicure',
        description: 'Warm botanical soak, callus smoothing, deep massage, and revitalizing mineral mask.',
        duration: '50 mins',
      },
      {
        name: 'Brow & Lash Architecture',
        description: 'Custom brow shaping, threading/waxing, and natural tinting to frame your eyes.',
        duration: '30 mins',
      },
    ],
  },
  {
    id: 'grooming',
    number: '04',
    category: 'GROOMING',
    tagline: 'STYLE • CARE • DETAIL',
    description:
      'Modern grooming protocols, beard architecture, precision fading, and revitalizing hair care for contemporary gentlemen and gender-fluid styles.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop',
    features: ['Custom Scissor & Clipper Fades', 'Hot Towel Beard Sculpting', 'Scalp Detox & Exfoliation', 'Discreet Grey Blending'],
    subServices: [
      {
        name: 'Modern Precision Cut & Fade',
        description: 'Clean taper, skin fade, or textured crop tailored to your hair growth pattern.',
        duration: '40 mins',
      },
      {
        name: 'Beard Design & Hot Towel Finish',
        description: 'Razor sharp line work, length balancing, conditioning oil massage, and hot towel relaxation.',
        duration: '30 mins',
      },
      {
        name: 'Executive Scalp & Hair Detox',
        description: 'Stimulating wash, clarifying scalp scrub, and invigorating head massage.',
        duration: '35 mins',
      },
      {
        name: 'Complete Grooming Session',
        description: 'Combination of precision haircut, beard detailing, and express face refresh.',
        duration: '65 mins',
      },
    ],
  },
  {
    id: 'occasion',
    number: '05',
    category: 'OCCASION',
    tagline: 'EVENT • PARTY • SPECIAL LOOKS',
    description:
      'Statement hair design, bridal styling, red-carpet updos, and contemporary event looks designed to hold through Pune nights.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
    features: ['Bridal & Pre-Wedding Looks', 'Modern Architectural Updos', 'Textured Event Waves', 'Trial Consultations'],
    subServices: [
      {
        name: 'Contemporary Bridal Styling',
        description: 'Complete hair concept, dupatta/veil setting, accessory pinning, and long-stay hold.',
        duration: '90-120 mins',
      },
      {
        name: 'Editorial Evening Updo',
        description: 'Sleek sculptural buns, loose romantic chignons, or runway-inspired ponytails.',
        duration: '60 mins',
      },
      {
        name: 'Party Glam Styling',
        description: 'High-gloss wave cascades, Hollywood waves, or textured modern blowout.',
        duration: '45 mins',
      },
      {
        name: 'Bridal Trial & Moodboard',
        description: 'Look testing and consultation ahead of your big day to ensure a seamless experience.',
        duration: '75 mins',
      },
    ],
  },
];

export interface LookbookItem {
  id: string;
  title: string;
  category: 'HAIR' | 'COLOUR' | 'STYLING' | 'BEAUTY';
  aspect: 'portrait' | 'tall' | 'wide' | 'square';
  image: string | StaticImageData;
  caption: string;
  details: string;
}

export const LOOKBOOK_DATA: LookbookItem[] = [
  {
    id: 'look-1',
    title: 'Sculpted Bob & Razor Texture',
    category: 'HAIR',
    aspect: 'portrait',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop',
    caption: 'Soft micro-fringe with weightless interior texturizing.',
    details: 'Custom razor cut with weight reduction for natural movement and effortless air-drying.',
  },
  {
    id: 'look-2',
    title: 'Sunlit Cinnamon Balayage',
    category: 'COLOUR',
    aspect: 'tall',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1000&auto=format&fit=crop',
    caption: 'Warm amber tones blended into natural dark bases.',
    details: 'Seamless freehand painting technique with glossy root shadow for zero harsh regrowth.',
  },
  {
    id: 'look-3',
    title: 'Deconstructed High Updo',
    category: 'STYLING',
    aspect: 'wide',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
    caption: 'Modern event styling with organic tendrils and airy volume.',
    details: 'Architectural pin placement with high-movement texture designed for long evening wear.',
  },
  {
    id: 'look-4',
    title: 'Minimalist Clean Glow',
    category: 'BEAUTY',
    aspect: 'square',
    image: regeneratedImageLook4,
    caption: 'Radiant skin finish with sculpted brow architecture.',
    details: 'Skin prep ritual focusing on high moisture barrier and defined micro-laminated brows.',
  },
  {
    id: 'look-5',
    title: 'Tapered Fade & Textured Crop',
    category: 'HAIR',
    aspect: 'tall',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop',
    caption: 'Low skin fade paired with blunt textured top geometry.',
    details: 'Precision scissor over comb technique tailored to natural crown swirls.',
  },
  {
    id: 'look-6',
    title: 'Espresso Gloss & Glass Hair Finish',
    category: 'COLOUR',
    aspect: 'portrait',
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=1000&auto=format&fit=crop',
    caption: 'Ultra-reflective dark chocolate gloss with silk seal.',
    details: 'Acidic gloss toner infused with amino complexes for mirror-like light reflection.',
  },
  {
    id: 'look-7',
    title: 'Effortless Bottleneck Bangs & Waves',
    category: 'STYLING',
    aspect: 'portrait',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    caption: 'Face-hugging curves and lived-in undone texture.',
    details: 'French-inspired fringe cut with soft curve tapering into collarbone lengths.',
  },
  {
    id: 'look-8',
    title: 'Editorial Nail Art & Studio Hands',
    category: 'BEAUTY',
    aspect: 'square',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop',
    caption: 'Clean almond shape with minimalist negative space line art.',
    details: 'Nourishing Japanese cuticle care combined with protective builder gel.',
  },
];

export interface ClientStory {
  id: string;
  quote: string;
  clientName: string;
  service: string;
  note: string;
}

export const CLIENT_STORIES: ClientStory[] = [
  {
    id: 'story-1',
    quote:
      'Verified client testimonial can appear here. A truly transformative experience where the stylist listened to what I wanted and crafted a haircut that fits my daily lifestyle effortlessly.',
    clientName: 'Client Name (Verified Visit)',
    service: 'Signature Cut & Balayage',
    note: 'Erandwane Regular',
  },
  {
    id: 'story-2',
    quote:
      'Verified client testimonial can appear here. The studio environment is modern, welcoming, and relaxed. The attention to hair health and precision color placement is second to none.',
    clientName: 'Client Name (Verified Visit)',
    service: 'Global Gloss & Restorative Ritual',
    note: 'First-time Guest',
  },
  {
    id: 'story-3',
    quote:
      'Verified client testimonial can appear here. From the personalized consultation to the final blowout, every detail felt intentional. Wisteria is our go-to salon in Pune.',
    clientName: 'Client Name (Verified Visit)',
    service: 'Bridal Occasion Styling',
    note: 'Event Client',
  },
];

export const EDITORIAL_PRINCIPLES = [
  {
    number: '01',
    title: 'STYLE WITH INTENTION',
    description:
      'We reject cookie-cutter formulas. Every cut, shade, and texture begins with a thorough diagnostic of your bone structure, hair fabric, and personal aesthetic.',
  },
  {
    number: '02',
    title: 'PERSONAL EXPRESSION',
    description:
      'Your look should be an authentic extension of who you are. We collaborate with you to craft styles that feel bold yet effortlessly wearable every day.',
  },
  {
    number: '03',
    title: 'DETAIL MATTERS',
    description:
      'From millimeter-precision edge blending to customized post-color hydration, greatness lives in the quiet details that most salons overlook.',
  },
  {
    number: '04',
    title: 'MAKE IT YOUR OWN',
    description:
      'Great salon hair should not disappear the moment you wash it at home. We empower you with straightforward styling rituals and product guidance.',
  },
];
