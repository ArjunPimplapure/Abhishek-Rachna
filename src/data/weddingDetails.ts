import { WEDDING_ASSETS } from '../config/weddingAssets';

export interface WeddingEvent {
  id: string;
  name: string;
  time: string;
  period: 'morning' | 'evening';
  themeLabel: string;
  description: string;
  motif: 'marigold' | 'sangeet' | 'phere' | 'haldi' | 'baarat' | 'dinner';
  image: string;
  imageAlt: string;
  accentClass: string;
  surfaceClass: string;
  borderClass: string;
}

export interface WeddingVenue {
  id: string;
  label: string;
  name: string;
  address: string;
  dates: string;
  buttonText: string;
  mapsUrl: string;
  image: string;
  imageAlt: string;
}

export const WEDDING_DATA = {
  religiousHeading: '।। শ্রীশ্রী প্রজাপতয়ে নমঃ ।।',
  doorCaptionBengali: 'একটি শুভ পরিণয়ের আমন্ত্রণ',
  doorSubCaption: 'Tap the seal to enter the celebration',
  introduction:
    'With the divine blessings of our elders and the love of our families, we cordially invite you to celebrate the wedding of',
  groom: {
    name: 'Abhishek Maity',
    parents: 'S/o Smt. Shefali Maity & Shri Rampad Maity',
    grandparents: 'Grandson of Late Smt. Parul Bala & Lt. Shri Ratan Chandra Maity',
  },
  bride: {
    name: 'Rachna Sarkar',
    parents: 'D/o Smt. Minti & Shri Rabindranath Sarkar',
    grandparents: 'Grand Daughter of Late Smt. Gouri Bala & Lt. Shri Rasik Lal Sarkar',
  },
  countdownTargetIso: '2026-12-12T00:00:00+05:30',
  dayOne: {
    date: '12 DECEMBER 2026',
    subtitle: 'An Evening of Togetherness & Celebration',
    events: [
      {
        id: 'welcome-gathering',
        name: 'Welcome Gathering',
        time: '12:00 PM',
        period: 'morning',
        themeLabel: 'Traditional Bengali Welcome',
        description:
          'Marigold garlands, fresh white jasmine strands, and warm hospitality as families unite in celebration.',
        motif: 'marigold',
        image: WEDDING_ASSETS.functions.welcomeGathering,
        imageAlt: 'Marigold and white jasmine welcome garlands with brass mangal kalash pots',
        accentClass: 'text-[#9E1B24]',
        surfaceClass: 'bg-[#FFFDF9]',
        borderClass: 'border-[#B88A3B]/45',
      },
      {
        id: 'sangeet-ceremony',
        name: 'Sangeet Ceremony',
        time: '8:00 PM',
        period: 'evening',
        themeLabel: 'Royal Burgundy & Gold Evening',
        description:
          'An illuminated evening of music, joyous dance, and festive melodies beneath warm heritage lights.',
        motif: 'sangeet',
        image: WEDDING_ASSETS.functions.sangeetCeremony,
        imageAlt: 'Royal burgundy drapes, golden fairy lights, sitar and tabla on Sangeet stage',
        accentClass: 'text-[#5A0F16]',
        surfaceClass: 'bg-[#FBF3EA]',
        borderClass: 'border-[#9E1B24]/35',
      },
    ] as WeddingEvent[],
  },
  dayTwo: {
    date: '13 DECEMBER 2026',
    subtitle: 'Traditions, Blessings & Forever Together',
    events: [
      {
        id: 'haldi-ceremony',
        name: 'Haldi Ceremony',
        time: '10:00 AM',
        period: 'morning',
        themeLabel: 'Sunlit Turmeric & Marigold',
        description:
          'Auspicious turmeric blessings adorned with golden marigolds, yellow-and-white alpana, and morning warmth.',
        motif: 'haldi',
        image: WEDDING_ASSETS.functions.haldiCeremony,
        imageAlt: 'Sunlit Haldi courtyard with brass urli bowl of turmeric, marigold garlands, and white alpana',
        accentClass: 'text-[#8F5B00]',
        surfaceClass: 'bg-[#FDF7E3]',
        borderClass: 'border-[#C99A2E]/45',
      },
      {
        id: 'baarat',
        name: 'Baarat',
        time: '5:30 PM',
        period: 'evening',
        themeLabel: 'Royal Wedding Procession',
        description:
          'A grand celebratory procession in royal sindoor red and antique gold illuminated by festive lights.',
        motif: 'baarat',
        image: WEDDING_ASSETS.functions.baarat,
        imageAlt: 'Crimson and gold embroidered royal wedding parasol along lantern-lit pathway',
        accentClass: 'text-[#9E1B24]',
        surfaceClass: 'bg-[#FCF4EC]',
        borderClass: 'border-[#B88A3B]/45',
      },
      {
        id: 'reception-dinner',
        name: 'Reception Dinner',
        time: '9:00 PM',
        period: 'evening',
        themeLabel: 'Champagne Gold & Burgundy Feast',
        description:
          'An evening of fine traditional hospitality, floral elegance, and warm blessings shared over dinner.',
        motif: 'dinner',
        image: WEDDING_ASSETS.functions.receptionDinner,
        imageAlt: 'Candlelit wedding banquet table with burgundy linen, brass candelabras, and red roses',
        accentClass: 'text-[#5A0F16]',
        surfaceClass: 'bg-[#F9EFE8]',
        borderClass: 'border-[#5A0F16]/35',
      },
      {
        id: 'wedding-phere',
        name: 'Wedding Phere',
        time: '9:30 PM',
        period: 'evening',
        themeLabel: 'Sacred Night Vows',
        description:
          'Sacred Vedic hymns, Shankha resonance, and seven eternal vows around the auspicious ceremonial fire.',
        motif: 'phere',
        image: WEDDING_ASSETS.functions.weddingPhere,
        imageAlt: 'Sacred Bengali wedding havan fire beneath floral mandap with hibiscus, jasmine, and shankha',
        accentClass: 'text-[#9E1B24]',
        surfaceClass: 'bg-[#FFF9F4]',
        borderClass: 'border-[#9E1B24]/45',
      },
    ] as WeddingEvent[],
  },
  grandReception: {
    heading: 'A GRAND RECEPTION',
    subtitle: 'An Evening to Celebrate Love, Togetherness & New Beginnings',
    date: '16 DECEMBER 2026',
    eventName: 'GRAND RECEPTION & DINNER',
    time: '8:00 PM',
    venueName: 'RAM MANGALAM LAWN',
    venueAddress: 'Opposite Kolors Mall, Pachpedi Naka, Raipur',
  },
  venues: [
    {
      id: 'main-wedding-venue',
      label: 'Main Wedding Venue',
      name: 'AKAY RESORT & VILLAS',
      address: 'Near Pahadi Paat Mandir, Mudhipar, Rajnandgaon',
      dates: '12 & 13 December 2026',
      buttonText: 'EXPLORE WEDDING VENUE',
      mapsUrl: 'https://maps.app.goo.gl/vL6yw8SPL7Xdg5Ln6',
      image: WEDDING_ASSETS.courtyardImage,
      imageAlt: 'Traditional wedding courtyard illumination representing Akay Resort and Villas',
    },
    {
      id: 'grand-reception-venue',
      label: 'Grand Reception Venue',
      name: 'RAM MANGALAM LAWN',
      address: 'Opposite Kolors Mall, Pachpedi Naka, Raipur',
      dates: '16 December 2026',
      buttonText: 'EXPLORE RECEPTION VENUE',
      mapsUrl: 'https://maps.app.goo.gl/pPuF4YydtQ7pd2zZ7',
      image: WEDDING_ASSETS.receptionImage,
      imageAlt: 'Evening reception lawn with chandeliers and floral canopies representing Ram Mangalam Lawn',
    },
  ] as WeddingVenue[],
  complimentsElders: [
    'Smt. Jyotsana Mandal',
    'Smt. Mohini & Ashok Mandal',
    'Smt. Kalpana & Pulkesh Maity',
    'Smt. Tanushree & Tapan Pattanayak',
    'Smt. Sayantika & Swapan Pattanayak',
    'Smt. Laxmi & Rajkumar Mandal',
    'Smt. Sukanya & Devkumar Mandal',
    'Smt. Rajkumari & Tapash Paul',
    'Smt. Vinita & Arup Halder',
  ],
  complimentsYounger: [
    'Aniket',
    'Pradeep',
    'Shreyashi',
    'Vansh',
    'Samarth',
    'Devansh',
    'Avik',
    'Arvi',
    'Kavyanash',
  ],
  rsvp: {
    heading: 'FOR YOUR KIND CONFIRMATION',
    subtitle: 'We would be delighted by your presence and blessings on our special occasion.',
    contactName: 'ABHISHEK MAITY',
    phoneDisplay: '+91-62622 24721',
    telHref: 'tel:+916262224721',
    whatsappHref: 'https://wa.me/916262224721',
  },
  closing: {
    message: 'Your presence and blessings will make our celebrations even more memorable.',
    couple: 'ABHISHEK & RACHNA',
    regards: 'With Love & Warm Regards',
    family: 'The Maity Family',
  },
} as const;
