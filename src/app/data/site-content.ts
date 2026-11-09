import { Language, LocalizedText } from './navagraha-temples';

export type TempleTourPackage = {
  id: string;
  duration: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
};

export type HomeContent = {
  navPackages: string;
  navPariharam: string;
  navHeritage: string;
  navContact: string;
  navNavagraha: string;
  tagline: string;
  heroTitle: string;
  heroDescription: string;
  planTrip: string;
  explorePackages: string;
  navagrahaTour: string;
  featuresTitle: string;
  packageTitle: string;
  packageDescription: string;
  quoteLabel: string;
  viewPlan: string;
  customPackage: string;
  pariharamTitle: string;
  pariharamDescription: string;
  faithDisclaimer: string;
  marriage: string;
  childBlessing: string;
  rahuKetu: string;
  saniDosha: string;
  health: string;
  nagaDosha: string;
  howTitle: string;
  heritageTitle: string;
  heritageDescription: string;
  weddingsTitle: string;
  weddingsDescription: string;
  askWedding: string;
  vehiclesTitle: string;
  vehiclesDescription: string;
  vehicleSizes: string;
  reviewTitle: string;
  reviewDescription: string;
  partnerTitle: string;
  partnerDescription: string;
  partnerCta: string;
  contactTitle: string;
  contactUnavailable: string;
  contactCall: string;
  officeAddress: string;
  pendingPrice: string;
  featuredTempleEyebrow: string;
  featuredTempleTitle: string;
  featuredTempleDescription: string;
  featuredTempleCta: string;
  templeListPlaceholder: string;
  emailPlaceholder: string;
  reviewPlaceholder: string;
  reviewNamePlaceholder: string;
  reviewTripPlaceholder: string;
  imagePlaceholder: string;
  featureItinerary: string;
  featureItineraryDescription: string;
  featureCar: string;
  featureCarDescription: string;
  featureMeals: string;
  featureMealsDescription: string;
  featureRituals: string;
  featureRitualsDescription: string;
  journeyOrigin: string;
  journeyDate: string;
  journeyTravelers: string;
  journeyTemples: string;
  steps: { title: string; description: string }[];
};

export type NavagrahaTourContent = {
  title: string;
  summary: string;
  duration: string;
  templeCount: string;
  meals: string;
  familyFriendly: string;
  itineraryTitle: string;
  sampleNotice: string;
  days: { title: string; description: string; templeSlugs: string[]; overnight: string }[];
  includedTitle: string;
  included: string[];
  excludedTitle: string;
  excluded: string[];
  faqTitle: string;
  questions: { question: string; answer: string }[];
  estimateTitle: string;
  estimateDescription: string;
  quoteDisclaimer: string;
  quoteStart: string;
  stationDrop: string;
};

export const SITE_NAME = 'Temple Buddy';

export const SITE_CONTACT = {
  phone: '8489462424' as string | null,
  email: null as string | null,
  bookingEmail: null as string | null,
  whatsappNumber: null as string | null,
  officeAddress: 'Vaitheeswarankoil' as string | null,
  googleReviewsUrl: null as string | null,
};

export const TOUR_PACKAGES: TempleTourPackage[] = [
  {
    id: 'kumbakonam',
    duration: { en: '2 days', ta: '2 நாட்கள்', hi: '2 दिन', fr: '2 jours' },
    title: { en: 'Kumbakonam Temple Tour', ta: 'கும்பகோணம் கோவில் பயணம்', hi: 'कुंभकोणम मंदिर यात्रा', fr: 'Circuit des temples de Kumbakonam' },
    summary: { en: 'Explore the Kumbakonam temple circuit at an easy pace.', ta: 'கும்பகோணம் கோவில்களை நிதானமான வேகத்தில் தரிசிக்கவும்.', hi: 'आराम से कुंभकोणम के मंदिरों की यात्रा करें।', fr: 'Découvrez les temples de Kumbakonam à un rythme tranquille.' },
  },
  {
    id: 'navagraha',
    duration: { en: '3 days', ta: '3 நாட்கள்', hi: '3 दिन', fr: '3 jours' },
    title: { en: 'Navagraha Temple Tour', ta: 'நவக்கிரகக் கோவில் பயணம்', hi: 'नवग्रह मंदिर यात्रा', fr: 'Circuit des temples Navagraha' },
    summary: { en: 'Visit all nine planetary temples across the Cauvery Delta.', ta: 'காவிரி டெல்டாவின் ஒன்பது நவக்கிரகத் தலங்களையும் தரிசிக்கவும்.', hi: 'कावेरी डेल्टा के सभी नौ नवग्रह मंदिरों के दर्शन करें।', fr: 'Visitez les neuf temples planétaires du delta de la Kaveri.' },
  },
  {
    id: 'mayiladuthurai',
    duration: { en: '2 days', ta: '2 நாட்கள்', hi: '2 दिन', fr: '2 jours' },
    title: { en: 'Mayiladuthurai & Sirkazhi', ta: 'மயிலாடுதுறை & சீர்காழி', hi: 'मयिलादुथुरै और सीरकाज़ी', fr: 'Mayiladuthurai et Sirkazhi' },
    summary: { en: 'Discover historic Shiva temples around Sirkazhi.', ta: 'சீர்காழியைச் சுற்றியுள்ள பழமையான சிவத்தலங்களைக் காணுங்கள்.', hi: 'सीरकाज़ी के आसपास के ऐतिहासिक शिव मंदिर देखें।', fr: 'Découvrez les temples historiques de Shiva autour de Sirkazhi.' },
  },
  {
    id: 'divya-desam',
    duration: { en: '2 days', ta: '2 நாட்கள்', hi: '2 दिन', fr: '2 jours' },
    title: { en: 'Divya Desam Tour', ta: 'திவ்ய தேசப் பயணம்', hi: 'दिव्य देशम यात्रा', fr: 'Circuit Divya Desam' },
    summary: { en: 'Visit Vaishnavite temples around Sirkazhi.', ta: 'சீர்காழியைச் சுற்றியுள்ள வைணவத் திருத்தலங்களைத் தரிசிக்கவும்.', hi: 'सीरकाज़ी के आसपास के वैष्णव मंदिरों के दर्शन करें।', fr: 'Visitez les temples vaishnavites autour de Sirkazhi.' },
  },
  {
    id: 'thiruvarur',
    duration: { en: '3 days', ta: '3 நாட்கள்', hi: '3 दिन', fr: '3 jours' },
    title: { en: 'Thiruvarur & Kumbakonam', ta: 'திருவாரூர் & கும்பகோணம்', hi: 'तिरुवारूर और कुंभकोणम', fr: 'Tiruvarur et Kumbakonam' },
    summary: { en: 'Two celebrated temple towns in one thoughtfully paced trip.', ta: 'இரண்டு புகழ்பெற்ற கோவில் நகரங்களை நிதானமாக ஒரே பயணத்தில் காணுங்கள்.', hi: 'दो प्रसिद्ध मंदिर नगरों की एक सुविचारित यात्रा।', fr: 'Deux villes-temples renommées dans un seul voyage bien rythmé.' },
  },
  {
    id: 'custom',
    duration: { en: 'Custom', ta: 'விருப்பப் பயணம்', hi: 'कस्टम', fr: 'Sur mesure' },
    title: { en: 'Plan Your Own Trip', ta: 'உங்கள் பயணத்தைத் திட்டமிடுங்கள்', hi: 'अपनी यात्रा बनाएँ', fr: 'Composez votre voyage' },
    summary: { en: 'Choose your temples, dates and group size.', ta: 'விருப்பமான கோவில்கள், தேதிகள், குழு அளவைத் தேர்ந்தெடுங்கள்.', hi: 'अपने मंदिर, तारीख़ें और समूह का आकार चुनें।', fr: 'Choisissez vos temples, vos dates et la taille du groupe.' },
  },
];

export const HOME_CONTENT: Record<Language, HomeContent> = {
  en: {
    navPackages: 'Tour packages',
    navPariharam: 'Pariharam',
    navHeritage: 'Heritage',
    navContact: 'Plan a trip',
    navNavagraha: 'Navagraha temples',
    tagline: 'Your friend for darshan in the Cauvery Delta',
    heroTitle: 'A more thoughtful way to travel for darshan.',
    heroDescription: 'Tell us your temples and dates. We plan the route, car, stay, meals and rituals, with a Buddy on call while you travel.',
    planTrip: 'Plan my temple trip',
    explorePackages: 'Explore tour packages',
    navagrahaTour: 'Explore the Navagraha temples',
    featuresTitle: 'Thoughtful details, from pickup to darshan',
    packageTitle: 'Tour packages',
    packageDescription: 'Choose a temple circuit. The itinerary is planned in advance; ask us for a current quote.',
    quoteLabel: 'Price to be confirmed',
    viewPlan: 'View plan',
    customPackage: 'Ask about this trip',
    pariharamTitle: 'Pariharam temple visits',
    pariharamDescription: 'We can coordinate temples, priests and timings for the pariharam your family follows.',
    faithDisclaimer: 'These are faith-based visits. We do not promise or guarantee spiritual, medical or other results.',
    marriage: 'Marriage blessings and harmony',
    childBlessing: 'Prayers for children',
    rahuKetu: 'Rahu and Ketu temple visits',
    saniDosha: 'Sani worship and ritual support',
    health: 'Visits for health and wellbeing',
    nagaDosha: 'Naga and sarpa dosha prayers',
    howTitle: 'Four steps to your darshan',
    heritageTitle: 'Beyond darshan: discover the delta',
    heritageDescription: 'Explore Chola heritage, temple architecture and the stories behind the region, with experiences for curious travellers and student groups.',
    weddingsTitle: 'A temple wedding, planned end to end',
    weddingsDescription: 'Ask about help with muhurtham planning, temple permissions, decor, catering, accommodation and guest transport for local, custom and NRI families. Plans are subject to temple approval and confirmed availability.',
    askWedding: 'Ask about wedding arrangements',
    vehiclesTitle: 'The right vehicle for your group',
    vehiclesDescription: 'Vehicle options described in our travel plan include compact cars, family vehicles and Tempo Travellers. Share your group size and pickup point to request availability.',
    vehicleSizes: '4, 6 and 7-seat vehicles · 14-seat Tempo Traveller · station and airport pickup on request',
    reviewTitle: 'Traveller reviews',
    reviewDescription: 'Verified customer reviews will appear here once genuine review text and permission to publish are provided.',
    partnerTitle: 'Travel agents and group organisers',
    partnerDescription: 'Ask about ready-made temple circuits, group handling and agent partnership options.',
    partnerCta: 'Ask about becoming a partner',
    contactTitle: 'Plan your Cauvery Delta journey',
    contactUnavailable: 'Package prices and online booking are not configured yet. Call us to discuss your trip and request a quote.',
    contactCall: 'Call Temple Buddy',
    officeAddress: 'Office',
    pendingPrice: 'Final package price to be added',
    featuredTempleEyebrow: 'Featured temple · Cauvery Delta',
    featuredTempleTitle: 'Vaitheeswaran Koil',
    featuredTempleDescription: 'Visit the celebrated Vaidyanathaswamy temple, associated with Angaraka (Mars), on your Cauvery Delta journey.',
    featuredTempleCta: 'Explore Vaitheeswaran Koil',
    templeListPlaceholder: 'e.g. Vaitheeswaran Koil, Sirkazhi',
    emailPlaceholder: 'Booking email to be added',
    reviewPlaceholder: 'Customer review to be added',
    reviewNamePlaceholder: 'Customer name and city',
    reviewTripPlaceholder: 'Trip taken',
    imagePlaceholder: 'Authentic photograph to be added',
    featureItinerary: 'Day-wise itinerary',
    featureItineraryDescription: 'Every temple and planned timing set out in your itinerary before you confirm.',
    featureCar: 'Car and driver',
    featureCarDescription: 'Request a sedan, family vehicle or Tempo Traveller to suit your group.',
    featureMeals: 'Vegetarian meals',
    featureMealsDescription: 'Simple vegetarian meals at planned stops, as listed in your final itinerary.',
    featureRituals: 'Ritual coordination',
    featureRitualsDescription: 'Ask about coordinating archana, abhishekam and pariharam with temple priests.',
    journeyOrigin: 'Travelling from',
    journeyDate: 'Travel date',
    journeyTravelers: 'Travellers',
    journeyTemples: 'Temples on your wishlist',
    steps: [
      { title: 'Tell us your plan', description: 'Share your dates, group size and temples on your wishlist.' },
      { title: 'Review the itinerary and quote', description: 'Receive a day-wise plan and itemised price before confirming.' },
      { title: 'Confirm the arrangements', description: 'Car, stay and rituals are confirmed only after availability and payment terms are agreed.' },
      { title: 'Travel with your Buddy', description: 'A travel coordinator is available on call during the journey.' },
    ],
  },
  ta: {
    navPackages: 'பயணத் தொகுப்புகள்',
    navPariharam: 'பரிகாரம்',
    navHeritage: 'பாரம்பரியம்',
    navContact: 'பயணத் திட்டம்',
    navNavagraha: 'நவக்கிரகத் தலங்கள்',
    tagline: 'காவிரி டெல்டாவில் உங்கள் தரிசன நண்பன்',
    heroTitle: 'தரிசனப் பயணத்தை நிதானமாகத் திட்டமிடுங்கள்.',
    heroDescription: 'கோவில்களையும் தேதிகளையும் தெரிவியுங்கள். பயண வழி, கார், தங்குமிடம், உணவு, சடங்கு ஏற்பாடுகளுக்கு உதவுகிறோம்; பயணத்தில் உங்கள் Buddy தொடர்பில் இருப்பார்.',
    planTrip: 'என் கோவில் பயணத்தைத் திட்டமிடுங்கள்',
    explorePackages: 'பயணத் தொகுப்புகளைக் காண்க',
    navagrahaTour: 'நவக்கிரகத் தலங்களைக் காண்க',
    featuresTitle: 'பயணத்தின் ஒவ்வொரு கட்டத்திற்கும் உதவி',
    packageTitle: 'பயணத் தொகுப்புகள்',
    packageDescription: 'ஒரு கோவில் வழித்தடத்தைத் தேர்ந்தெடுங்கள். பயணத் திட்டத்தை முன்கூட்டியே அமைத்து, தற்போதைய விலையைக் கேளுங்கள்.',
    quoteLabel: 'விலை பின்னர் உறுதிப்படுத்தப்படும்',
    viewPlan: 'பயணத் திட்டம்',
    customPackage: 'இந்தப் பயணத்தைப் பற்றி கேளுங்கள்',
    pariharamTitle: 'பரிகாரத் தலப் பயணங்கள்',
    pariharamDescription: 'உங்கள் குடும்பம் பின்பற்றும் பரிகாரத்திற்கான கோவில், அர்ச்சகர், நேர ஏற்பாடுகளை ஒருங்கிணைக்க உதவுகிறோம்.',
    faithDisclaimer: 'இவை நம்பிக்கை சார்ந்த வழிபாடுகள். ஆன்மிகம், மருத்துவம் அல்லது பிற பலன்களுக்கு நாங்கள் உறுதி அளிப்பதில்லை.',
    marriage: 'திருமண நல்வாழ்த்தும் நல்லிணக்கமும்',
    childBlessing: 'குழந்தை வரம் வேண்டிய வழிபாடு',
    rahuKetu: 'ராகு, கேது கோவில் வழிபாடு',
    saniDosha: 'சனி வழிபாடு மற்றும் சடங்கு உதவி',
    health: 'நலம் மற்றும் ஆரோக்கிய வழிபாடு',
    nagaDosha: 'நாக தோஷ வழிபாடு',
    howTitle: 'தரிசனப் பயணத்தின் நான்கு படிகள்',
    heritageTitle: 'தரிசனத்திற்கு அப்பால்: டெல்டாவின் மரபு',
    heritageDescription: 'சோழர் மரபு, கோவில் கட்டிடக்கலை, இப்பகுதியின் கதைகளை அறியுங்கள். ஆர்வமுள்ள பயணிகளுக்கும் மாணவர் குழுக்களுக்கும் ஏற்ற அனுபவங்கள்.',
    weddingsTitle: 'முழுமையான கோவில் திருமண ஏற்பாடுகள்',
    weddingsDescription: 'உள்ளூர், விருப்ப, வெளிநாடு வாழ் குடும்பங்களுக்கான முகூர்த்தம், கோவில் அனுமதி, அலங்காரம், உணவு, தங்குமிடம், விருந்தினர் போக்குவரத்து குறித்து கேளுங்கள். கோவில் அனுமதியும் உறுதியான கிடைப்பும் அவசியம்.',
    askWedding: 'திருமண ஏற்பாடுகள் பற்றி கேளுங்கள்',
    vehiclesTitle: 'உங்கள் குழுவுக்கு ஏற்ற வாகனம்',
    vehiclesDescription: 'சிறிய கார், குடும்ப வாகனம், டெம்போ டிராவலர் உள்ளிட்ட வாகனங்கள் பயணத் திட்டத்தில் உள்ளன. குழு அளவு, ஏறும் இடம் தெரிவித்து கிடைப்பைக் கேளுங்கள்.',
    vehicleSizes: '4, 6, 7 இருக்கை வாகனங்கள் · 14 இருக்கை டெம்போ டிராவலர் · ரயில் நிலையம், விமான நிலையப் பயணம் கோரிக்கைக்கு ஏற்ப',
    reviewTitle: 'பயணிகளின் கருத்துகள்',
    reviewDescription: 'உண்மையான கருத்துகளும் அவற்றைப் பகிர்வதற்கான அனுமதியும் கிடைத்த பிறகே சரிபார்க்கப்பட்ட விமர்சனங்கள் வெளியிடப்படும்.',
    partnerTitle: 'பயண முகவர்கள் மற்றும் குழு ஏற்பாட்டாளர்கள்',
    partnerDescription: 'தயார் கோவில் பயணங்கள், குழு ஒருங்கிணைப்பு, முகவர் கூட்டாண்மை பற்றி கேளுங்கள்.',
    partnerCta: 'கூட்டாளராக இணைவது பற்றி கேளுங்கள்',
    contactTitle: 'உங்கள் காவிரி டெல்டா பயணத்தைத் திட்டமிடுங்கள்',
    contactUnavailable: 'பயணத் தொகுப்பு விலையும் இணைய முன்பதிவும் இன்னும் அமைக்கப்படவில்லை. பயணம் மற்றும் விலை குறித்து பேச எங்களை அழைக்கவும்.',
    contactCall: 'Temple Buddy-ஐ அழைக்கவும்',
    officeAddress: 'அலுவலகம்',
    pendingPrice: 'இறுதிப் பயணத் தொகுப்பு விலை சேர்க்கப்பட வேண்டும்',
    featuredTempleEyebrow: 'சிறப்புத் திருத்தலம் · காவிரி டெல்டா',
    featuredTempleTitle: 'வைத்தீஸ்வரன் கோவில்',
    featuredTempleDescription: 'அங்காரகன் (செவ்வாய்) தலமான புகழ்பெற்ற வைத்தியநாதசுவாமி கோவிலை உங்கள் காவிரி டெல்டா பயணத்தில் தரிசிக்கவும்.',
    featuredTempleCta: 'வைத்தீஸ்வரன் கோவிலை அறியுங்கள்',
    templeListPlaceholder: 'எ.கா. வைத்தீஸ்வரன் கோவில், சீர்காழி',
    emailPlaceholder: 'முன்பதிவு மின்னஞ்சல் சேர்க்கப்பட வேண்டும்',
    reviewPlaceholder: 'வாடிக்கையாளர் கருத்து சேர்க்கப்பட வேண்டும்',
    reviewNamePlaceholder: 'வாடிக்கையாளர் பெயர் மற்றும் ஊர்',
    reviewTripPlaceholder: 'மேற்கொண்ட பயணம்',
    imagePlaceholder: 'உண்மையான புகைப்படம் சேர்க்கப்பட வேண்டும்',
    featureItinerary: 'நாள் வாரியான பயணத் திட்டம்',
    featureItineraryDescription: 'ஒவ்வொரு கோவிலும் திட்டமிட்ட நேரமும் உறுதிப்படுத்துவதற்கு முன் பயணத் திட்டத்தில் இடம்பெறும்.',
    featureCar: 'கார் மற்றும் ஓட்டுநர்',
    featureCarDescription: 'உங்கள் குழுவுக்கு ஏற்ற செடான், குடும்ப வாகனம் அல்லது டெம்போ டிராவலரைக் கேளுங்கள்.',
    featureMeals: 'சைவ உணவு',
    featureMealsDescription: 'இறுதிப் பயணத் திட்டத்தில் குறிப்பிடப்படும் இடங்களில் எளிய சைவ உணவு.',
    featureRituals: 'சடங்கு ஒருங்கிணைப்பு',
    featureRitualsDescription: 'அர்ச்சனை, அபிஷேகம், பரிகாரத்திற்கான அர்ச்சகர் ஏற்பாடுகள் குறித்து கேளுங்கள்.',
    journeyOrigin: 'புறப்படும் இடம்',
    journeyDate: 'பயண நாள்',
    journeyTravelers: 'பயணிகள்',
    journeyTemples: 'நீங்கள் செல்ல விரும்பும் கோவில்கள்',
    steps: [
      { title: 'உங்கள் திட்டத்தைச் சொல்லுங்கள்', description: 'தேதி, குழு அளவு, விரும்பும் கோவில்களைப் பகிருங்கள்.' },
      { title: 'திட்டம் மற்றும் விலையைப் பாருங்கள்', description: 'உறுதிப்படுத்துவதற்கு முன் நாள் வாரியான திட்டமும் செலவு விவரமும் கிடைக்கும்.' },
      { title: 'ஏற்பாடுகளை உறுதிப்படுத்துங்கள்', description: 'கிடைப்பு மற்றும் கட்டண விதிகள் ஒப்புக்கொள்ளப்பட்ட பிறகே கார், தங்குமிடம், சடங்குகள் உறுதியாகும்.' },
      { title: 'உங்கள் Buddy உடன் பயணம் செய்யுங்கள்', description: 'பயணத்தின் போது ஒருங்கிணைப்பாளர் தொலைபேசியில் தொடர்பில் இருப்பார்.' },
    ],
  },
  hi: {
    navPackages: 'यात्रा पैकेज',
    navPariharam: 'परिहारम',
    navHeritage: 'विरासत',
    navContact: 'यात्रा योजना',
    navNavagraha: 'नवग्रह मंदिर',
    tagline: 'कावेरी डेल्टा में दर्शन के लिए आपका साथी',
    heroTitle: 'दर्शन यात्रा को सोच-समझकर तय करें।',
    heroDescription: 'मंदिर और तारीख़ें बताएँ। हम मार्ग, गाड़ी, ठहरने, भोजन और पूजा-व्यवस्था की योजना बनाने में मदद करते हैं; यात्रा में Buddy फ़ोन पर उपलब्ध रहता है।',
    planTrip: 'मेरी मंदिर यात्रा बनाएँ',
    explorePackages: 'यात्रा पैकेज देखें',
    navagrahaTour: 'नवग्रह मंदिर देखें',
    featuresTitle: 'यात्रा की हर बारीकी में सहायता',
    packageTitle: 'यात्रा पैकेज',
    packageDescription: 'मंदिर मार्ग चुनें। यात्रा कार्यक्रम पहले से तय करें और मौजूदा कीमत पूछें।',
    quoteLabel: 'कीमत की पुष्टि बाकी',
    viewPlan: 'योजना देखें',
    customPackage: 'इस यात्रा के बारे में पूछें',
    pariharamTitle: 'परिहारम मंदिर यात्राएँ',
    pariharamDescription: 'आपके परिवार की परंपरा के अनुसार मंदिर, पुजारी और पूजा समय के समन्वय में मदद करते हैं।',
    faithDisclaimer: 'ये आस्था-आधारित यात्राएँ हैं। हम आध्यात्मिक, चिकित्सकीय या अन्य परिणामों की गारंटी नहीं देते।',
    marriage: 'विवाह मंगल और सौहार्द',
    childBlessing: 'संतान के लिए प्रार्थना',
    rahuKetu: 'राहु और केतु मंदिर यात्रा',
    saniDosha: 'शनि पूजा और अनुष्ठान सहायता',
    health: 'स्वास्थ्य और कल्याण की प्रार्थना',
    nagaDosha: 'नाग और सर्प दोष पूजा',
    howTitle: 'दर्शन यात्रा के चार चरण',
    heritageTitle: 'दर्शन से आगे: डेल्टा की विरासत',
    heritageDescription: 'चोल विरासत, मंदिर वास्तुकला और क्षेत्र की कहानियाँ जानें। जिज्ञासु यात्रियों और विद्यार्थी समूहों के लिए अनुभव।',
    weddingsTitle: 'मंदिर विवाह की पूरी योजना',
    weddingsDescription: 'स्थानीय, कस्टम और NRI परिवारों के लिए मुहूर्त, मंदिर अनुमति, सजावट, भोजन, ठहरने और अतिथि परिवहन के बारे में पूछें। मंदिर की स्वीकृति और उपलब्धता आवश्यक है।',
    askWedding: 'विवाह व्यवस्था के बारे में पूछें',
    vehiclesTitle: 'आपके समूह के लिए सही वाहन',
    vehiclesDescription: 'यात्रा योजना में छोटी कार, पारिवारिक वाहन और टेम्पो ट्रैवलर शामिल हो सकते हैं। समूह आकार और पिकअप स्थान बताकर उपलब्धता पूछें।',
    vehicleSizes: '4, 6 और 7 सीट वाहन · 14 सीट टेम्पो ट्रैवलर · अनुरोध पर स्टेशन और हवाईअड्डा पिकअप',
    reviewTitle: 'यात्रियों की समीक्षाएँ',
    reviewDescription: 'वास्तविक समीक्षा और उसे प्रकाशित करने की अनुमति मिलने पर ही सत्यापित ग्राहक समीक्षाएँ यहाँ दिखाई जाएँगी।',
    partnerTitle: 'ट्रैवल एजेंट और समूह आयोजक',
    partnerDescription: 'तैयार मंदिर यात्रा, समूह प्रबंधन और एजेंट साझेदारी के विकल्प पूछें।',
    partnerCta: 'साझेदारी के बारे में पूछें',
    contactTitle: 'अपनी कावेरी डेल्टा यात्रा की योजना बनाएँ',
    contactUnavailable: 'यात्रा पैकेज की कीमतें और ऑनलाइन बुकिंग अभी तय नहीं हैं। यात्रा और कीमत के लिए हमें कॉल करें।',
    contactCall: 'Temple Buddy को कॉल करें',
    officeAddress: 'कार्यालय',
    pendingPrice: 'अंतिम पैकेज कीमत जोड़ी जानी बाकी है',
    featuredTempleEyebrow: 'विशेष मंदिर · कावेरी डेल्टा',
    featuredTempleTitle: 'वैथीश्वरन कोविल',
    featuredTempleDescription: 'कावेरी डेल्टा यात्रा में अंगारक (मंगल) से जुड़े प्रसिद्ध वैद्यनाथस्वामी मंदिर के दर्शन करें।',
    featuredTempleCta: 'वैथीश्वरन कोविल देखें',
    templeListPlaceholder: 'जैसे वैथीश्वरन कोविल, सीरकाज़ी',
    emailPlaceholder: 'बुकिंग ईमेल जोड़ा जाना बाकी है',
    reviewPlaceholder: 'ग्राहक समीक्षा जोड़ी जानी बाकी है',
    reviewNamePlaceholder: 'ग्राहक का नाम और शहर',
    reviewTripPlaceholder: 'की गई यात्रा',
    imagePlaceholder: 'प्रामाणिक फोटो जोड़ा जाना बाकी है',
    featureItinerary: 'दिन-वार यात्रा कार्यक्रम',
    featureItineraryDescription: 'पुष्टि से पहले हर मंदिर और यात्रा का समय कार्यक्रम में दिया जाएगा।',
    featureCar: 'गाड़ी और चालक',
    featureCarDescription: 'अपने समूह के अनुसार सेडान, पारिवारिक वाहन या टेम्पो ट्रैवलर पूछें।',
    featureMeals: 'शाकाहारी भोजन',
    featureMealsDescription: 'अंतिम कार्यक्रम में सूचीबद्ध नियोजित पड़ावों पर सादा शाकाहारी भोजन।',
    featureRituals: 'अनुष्ठान समन्वय',
    featureRitualsDescription: 'मंदिर के पुजारियों के साथ अर्चना, अभिषेक और परिहारम समन्वय पूछें।',
    journeyOrigin: 'कहाँ से यात्रा',
    journeyDate: 'यात्रा की तारीख़',
    journeyTravelers: 'यात्री',
    journeyTemples: 'इच्छित मंदिर',
    steps: [
      { title: 'अपनी योजना बताएँ', description: 'तारीख़ें, समूह आकार और इच्छित मंदिर साझा करें।' },
      { title: 'यात्रा योजना और कीमत देखें', description: 'पुष्टि से पहले दिन-वार यात्रा कार्यक्रम और लागत विवरण प्राप्त करें।' },
      { title: 'व्यवस्थाएँ पक्की करें', description: 'उपलब्धता और भुगतान शर्तों पर सहमति के बाद ही गाड़ी, ठहरना और पूजा तय होंगे।' },
      { title: 'अपने Buddy के साथ यात्रा करें', description: 'यात्रा के दौरान समन्वयक फ़ोन पर उपलब्ध रहेगा।' },
    ],
  },
  fr: {
    navPackages: 'Circuits',
    navPariharam: 'Pariharam',
    navHeritage: 'Patrimoine',
    navContact: 'Préparer un voyage',
    navNavagraha: 'Temples Navagraha',
    tagline: 'Votre compagnon de pèlerinage dans le delta de la Kaveri',
    heroTitle: 'Un voyage de pèlerinage préparé avec soin.',
    heroDescription: 'Indiquez les temples et vos dates. Nous vous aidons à organiser l’itinéraire, le véhicule, l’hébergement, les repas et les rites, avec un Buddy joignable pendant le voyage.',
    planTrip: 'Préparer mon voyage',
    explorePackages: 'Découvrir les circuits',
    navagrahaTour: 'Découvrir les temples Navagraha',
    featuresTitle: 'Une attention à chaque étape du voyage',
    packageTitle: 'Circuits de pèlerinage',
    packageDescription: 'Choisissez un circuit. L’itinéraire se prépare à l’avance; demandez un devis actualisé.',
    quoteLabel: 'Prix à confirmer',
    viewPlan: 'Voir le programme',
    customPackage: 'Demander des informations',
    pariharamTitle: 'Visites de temples pour les pariharams',
    pariharamDescription: 'Nous aidons à coordonner les temples, les prêtres et les horaires selon les pratiques de votre famille.',
    faithDisclaimer: 'Ces visites relèvent de la foi. Aucun résultat spirituel, médical ou autre n’est garanti.',
    marriage: 'Bénédictions et harmonie conjugale',
    childBlessing: 'Prières pour avoir des enfants',
    rahuKetu: 'Visites des temples de Rahu et Ketu',
    saniDosha: 'Culte de Sani et assistance rituelle',
    health: 'Prières pour la santé et le bien-être',
    nagaDosha: 'Prières liées au naga dosha',
    howTitle: 'Quatre étapes pour votre pèlerinage',
    heritageTitle: 'Au-delà du pèlerinage : le patrimoine du delta',
    heritageDescription: 'Découvrez le patrimoine Chola, l’architecture des temples et les récits de la région, pour les curieux et les groupes scolaires.',
    weddingsTitle: 'Un mariage au temple organisé de bout en bout',
    weddingsDescription: 'Renseignez-vous sur le muhurtham, les autorisations, la décoration, le traiteur, l’hébergement et le transport pour les familles locales, sur mesure et NRI. Sous réserve d’autorisation et de disponibilité.',
    askWedding: 'Renseignements sur les mariages',
    vehiclesTitle: 'Le bon véhicule pour votre groupe',
    vehiclesDescription: 'Les options prévues comprennent voitures compactes, véhicules familiaux et Tempo Travellers. Indiquez la taille du groupe et le lieu de prise en charge.',
    vehicleSizes: 'Véhicules 4, 6 et 7 places · Tempo Traveller 14 places · prise en charge gare ou aéroport sur demande',
    reviewTitle: 'Avis des voyageurs',
    reviewDescription: 'Les avis vérifiés ne seront publiés qu’après réception de véritables témoignages et de l’autorisation de les partager.',
    partnerTitle: 'Agences de voyage et organisateurs de groupes',
    partnerDescription: 'Renseignez-vous sur les circuits prêts à l’emploi, la gestion de groupes et les partenariats.',
    partnerCta: 'Devenir partenaire',
    contactTitle: 'Préparez votre voyage dans le delta de la Kaveri',
    contactUnavailable: 'Les prix des circuits et la réservation en ligne ne sont pas encore configurés. Appelez-nous pour discuter de votre voyage et demander un devis.',
    contactCall: 'Appeler Temple Buddy',
    officeAddress: 'Bureau',
    pendingPrice: 'Prix final du circuit à ajouter',
    featuredTempleEyebrow: 'Temple à découvrir · Delta de la Kaveri',
    featuredTempleTitle: 'Vaitheeswaran Koil',
    featuredTempleDescription: 'Découvrez le célèbre temple Vaidyanathaswamy, associé à Angaraka (Mars), lors de votre voyage dans le delta de la Kaveri.',
    featuredTempleCta: 'Découvrir Vaitheeswaran Koil',
    templeListPlaceholder: 'Ex. Vaitheeswaran Koil, Sirkazhi',
    emailPlaceholder: 'Courriel de réservation à ajouter',
    reviewPlaceholder: 'Avis client à ajouter',
    reviewNamePlaceholder: 'Nom et ville du client',
    reviewTripPlaceholder: 'Voyage effectué',
    imagePlaceholder: 'Photo authentique à ajouter',
    featureItinerary: 'Programme jour par jour',
    featureItineraryDescription: 'Chaque temple et horaire prévu figurent au programme avant confirmation.',
    featureCar: 'Véhicule et chauffeur',
    featureCarDescription: 'Demandez une berline, un véhicule familial ou un Tempo Traveller adapté au groupe.',
    featureMeals: 'Repas végétariens',
    featureMealsDescription: 'Repas végétariens simples aux étapes prévues, selon le programme final.',
    featureRituals: 'Coordination des rites',
    featureRitualsDescription: 'Renseignez-vous sur la coordination de l’archana, de l’abhishekam et des pariharams.',
    journeyOrigin: 'Départ depuis',
    journeyDate: 'Date du voyage',
    journeyTravelers: 'Voyageurs',
    journeyTemples: 'Temples souhaités',
    steps: [
      { title: 'Présentez votre projet', description: 'Indiquez vos dates, la taille du groupe et les temples souhaités.' },
      { title: 'Examinez le programme et le devis', description: 'Recevez un itinéraire par jour et le détail des prix avant de confirmer.' },
      { title: 'Confirmez les prestations', description: 'Véhicule, hébergement et rites ne sont confirmés qu’après accord sur les disponibilités et modalités de paiement.' },
      { title: 'Voyagez avec votre Buddy', description: 'Un coordinateur reste joignable pendant le voyage.' },
    ],
  },
};

export const PARIHARAM_ITEMS: (keyof Pick<HomeContent, 'marriage' | 'childBlessing' | 'rahuKetu' | 'saniDosha' | 'health' | 'nagaDosha'>)[] = [
  'marriage',
  'childBlessing',
  'rahuKetu',
  'saniDosha',
  'health',
  'nagaDosha',
];

export const NAVAGRAHA_TOUR: Record<Language, NavagrahaTourContent> = {
  en: {
    title: '3-Day Navagraha Temple Tour',
    summary: 'A sample three-day journey to all nine planetary temples of the Cauvery Delta. Review the route with your Buddy before confirming any travel arrangements.',
    duration: '3 days · 2 nights',
    templeCount: '9 temples',
    meals: 'Vegetarian meals',
    familyFriendly: 'A considered pace for families',
    itineraryTitle: 'A sample day-wise itinerary',
    sampleNotice: 'Sample order only. Your Buddy confirms the final route, travel times and temple schedules with you before you pay.',
    days: [
      { title: 'Arrival and the first temples', description: 'Begin the circuit and take time for darshan.', templeSlugs: ['thingalur', 'suriyanar-kovil', 'kanjanur'], overnight: 'Overnight in Kumbakonam (hotel category to be confirmed).' },
      { title: 'The heart of the circuit', description: 'Continue south and east through the Cauvery Delta.', templeSlugs: ['alangudi', 'thirunageswaram', 'vaitheeswaran-koil'], overnight: 'Overnight near Vaitheeswaran Koil (hotel category to be confirmed).' },
      { title: 'Final temples and departure', description: 'Complete the circuit and continue to your agreed drop-off point.', templeSlugs: ['thiruvenkadu', 'keezhaperumpallam', 'thirunallar'], overnight: 'Drop at your confirmed railway station or airport.' },
    ],
    includedTitle: 'Included in the proposed plan',
    included: ['Car and driver for all three days', 'Two nights of accommodation (hotel category to be confirmed)', 'Vegetarian meals as listed in your final itinerary', 'Ritual coordination at temples, subject to availability', 'A travel Buddy on call during the trip'],
    excludedTitle: 'Not included',
    excluded: ['Train or flight tickets', 'Temple special-darshan tickets', 'Pooja items and offerings', 'Personal expenses and gratuities'],
    faqTitle: 'Questions travellers ask',
    questions: [
      { question: 'What should we wear?', answer: 'Choose simple, modest clothing. Some temples expect traditional dress; confirm each temple’s current guidance before your visit.' },
      { question: 'Can you arrange airport or railway-station pickup?', answer: 'Pickup can be requested. Share your arrival point and time so availability and the added cost can be confirmed.' },
      { question: 'Is the trip suitable for elders?', answer: 'The itinerary can be paced with rest stops. Discuss mobility, access needs and temple timings before confirming.' },
      { question: 'Can we change the temples?', answer: 'Yes. Request a custom itinerary and an updated quote before confirming.' },
      { question: 'What is the cancellation and refund policy?', answer: 'A cancellation and refund policy has not been supplied yet. Ask for the written terms before paying any advance.' },
    ],
    estimateTitle: 'Request a trip estimate',
    estimateDescription: 'Share your dates, group size and pickup point to prepare a tailored enquiry.',
    quoteDisclaimer: 'The source document does not provide a verified price, group-size basis, hotel category, payment link or advance amount. No booking or payment is taken on this page.',
    quoteStart: 'Per-person price on request',
    stationDrop: 'Drop-off station or airport to be agreed before confirmation.',
  },
  ta: {
    title: '3 நாள் நவக்கிரகக் கோவில் பயணம்',
    summary: 'காவிரி டெல்டாவின் ஒன்பது நவக்கிரகத் தலங்களுக்கான மாதிரி மூன்று நாள் பயணம். ஏற்பாடுகளை உறுதிப்படுத்துவதற்கு முன் பயண வழியை உங்கள் Buddy உடன் பார்வையிடுங்கள்.',
    duration: '3 நாட்கள் · 2 இரவுகள்',
    templeCount: '9 கோவில்கள்',
    meals: 'சைவ உணவு',
    familyFriendly: 'குடும்பத்திற்கேற்ற நிதானமான பயணம்',
    itineraryTitle: 'மாதிரி நாள் வாரியான பயணத் திட்டம்',
    sampleNotice: 'இது மாதிரி வரிசை மட்டுமே. பணம் செலுத்துவதற்கு முன் இறுதி வழி, பயண நேரம், கோவில் நேரங்களை உங்கள் Buddy உறுதிப்படுத்துவார்.',
    days: [
      { title: 'வருகையும் முதல் கோவில்களும்', description: 'யாத்திரையைத் தொடங்கி நிதானமாகத் தரிசனம் செய்யுங்கள்.', templeSlugs: ['thingalur', 'suriyanar-kovil', 'kanjanur'], overnight: 'கும்பகோணத்தில் இரவு தங்குதல் (விடுதி வகை பின்னர் உறுதிப்படுத்தப்படும்).' },
      { title: 'யாத்திரையின் மையப் பகுதி', description: 'காவிரி டெல்டா வழியாகத் தெற்கு, கிழக்குப் பகுதிகளுக்குப் பயணம்.', templeSlugs: ['alangudi', 'thirunageswaram', 'vaitheeswaran-koil'], overnight: 'வைத்தீஸ்வரன் கோவில் அருகே இரவு தங்குதல் (விடுதி வகை பின்னர் உறுதிப்படுத்தப்படும்).' },
      { title: 'இறுதித் தலங்களும் புறப்பாடும்', description: 'யாத்திரையை நிறைவு செய்து ஒப்புக்கொண்ட இறங்கும் இடத்திற்குச் செல்லுங்கள்.', templeSlugs: ['thiruvenkadu', 'keezhaperumpallam', 'thirunallar'], overnight: 'உறுதிப்படுத்தப்பட்ட ரயில் நிலையம் அல்லது விமான நிலையத்தில் இறக்கிவிடுதல்.' },
    ],
    includedTitle: 'முன்மொழியப்படும் திட்டத்தில் அடங்குபவை',
    included: ['மூன்று நாட்களுக்கும் கார் மற்றும் ஓட்டுநர்', 'இரண்டு இரவு தங்குமிடம் (விடுதி வகை உறுதிப்படுத்தப்பட வேண்டும்)', 'இறுதி திட்டத்தில் குறிப்பிட்ட சைவ உணவு', 'கிடைப்புக்கு உட்பட்டு கோவில் சடங்கு ஒருங்கிணைப்பு', 'பயணத்தில் தொலைபேசியில் தொடர்பில் இருக்கும் Buddy'],
    excludedTitle: 'சேர்க்கப்படாதவை',
    excluded: ['ரயில் அல்லது விமானப் பயணச்சீட்டு', 'கோவில் சிறப்பு தரிசனச் சீட்டு', 'பூஜைப் பொருட்கள் மற்றும் காணிக்கைகள்', 'தனிப்பட்ட செலவுகள் மற்றும் அன்பளிப்புகள்'],
    faqTitle: 'பயணிகள் கேட்கும் கேள்விகள்',
    questions: [
      { question: 'என்ன உடை அணிய வேண்டும்?', answer: 'எளிமையான, அடக்கமான உடை அணியுங்கள். சில கோவில்களில் பாரம்பரிய உடை அவசியம்; தற்போதைய விதிகளை முன்கூட்டியே உறுதிப்படுத்துங்கள்.' },
      { question: 'விமான நிலையம் அல்லது ரயில் நிலையத்தில் அழைத்துச் செல்ல முடியுமா?', answer: 'அழைத்துச் செல்லும் வசதியைக் கோரலாம். கிடைப்பையும் கூடுதல் செலவையும் உறுதிப்படுத்த வருகை இடம், நேரம் தெரிவியுங்கள்.' },
      { question: 'முதியவர்களுக்கு இந்தப் பயணம் ஏற்றதா?', answer: 'ஓய்வு இடங்களுடன் பயணத்தை நிதானமாக அமைக்கலாம். உறுதிப்படுத்துவதற்கு முன் நடமாட்டத் தேவை, அணுகல், கோவில் நேரங்கள் குறித்து பேசுங்கள்.' },
      { question: 'கோவில்களை மாற்ற முடியுமா?', answer: 'முடியும். விருப்பப் பயணத் திட்டமும் புதுப்பிக்கப்பட்ட விலையும் கேட்டு உறுதிப்படுத்துங்கள்.' },
      { question: 'ரத்து மற்றும் பணத்திரும்பப் பெறும் விதி என்ன?', answer: 'ரத்து மற்றும் பணத்திரும்பப் பெறும் விதி இன்னும் வழங்கப்படவில்லை. முன்பணம் செலுத்துவதற்கு முன் எழுத்துப்பூர்வ விதிகளைக் கேளுங்கள்.' },
    ],
    estimateTitle: 'பயணச் செலவைக் கேளுங்கள்',
    estimateDescription: 'உங்கள் தேதிகள், குழு அளவு, ஏறும் இடத்தைத் தெரிவித்து தனிப்பயன் விசாரணையைத் தயாரியுங்கள்.',
    quoteDisclaimer: 'மூல ஆவணத்தில் உறுதிப்படுத்தப்பட்ட விலை, குழு அளவிற்கான கணக்கு, விடுதி வகை, கட்டண இணைப்பு அல்லது முன்பணம் குறிப்பிடப்படவில்லை. இப்பக்கத்தில் முன்பதிவோ கட்டணமோ இல்லை.',
    quoteStart: 'ஒருவருக்கான விலையைக் கேளுங்கள்',
    stationDrop: 'இறங்கும் ரயில் நிலையம் அல்லது விமான நிலையத்தை முன்கூட்டியே ஒப்புக்கொள்ள வேண்டும்.',
  },
  hi: {
    title: 'तीन-दिवसीय नवग्रह मंदिर यात्रा',
    summary: 'कावेरी डेल्टा के सभी नौ नवग्रह मंदिरों की एक नमूना तीन-दिवसीय यात्रा। व्यवस्था पक्की करने से पहले अपने Buddy के साथ मार्ग की समीक्षा करें।',
    duration: '3 दिन · 2 रातें',
    templeCount: '9 मंदिर',
    meals: 'शाकाहारी भोजन',
    familyFriendly: 'परिवार के लिए संतुलित गति',
    itineraryTitle: 'नमूना दिन-वार यात्रा कार्यक्रम',
    sampleNotice: 'यह केवल नमूना क्रम है। भुगतान से पहले Buddy अंतिम मार्ग, यात्रा समय और मंदिर के दर्शन समय की पुष्टि करेगा।',
    days: [
      { title: 'आगमन और पहले मंदिर', description: 'यात्रा शुरू करें और दर्शन के लिए पर्याप्त समय रखें।', templeSlugs: ['thingalur', 'suriyanar-kovil', 'kanjanur'], overnight: 'कुंभकोणम में रात (होटल श्रेणी की पुष्टि बाद में होगी)।' },
      { title: 'यात्रा का मुख्य हिस्सा', description: 'कावेरी डेल्टा से दक्षिण और पूर्व की ओर बढ़ें।', templeSlugs: ['alangudi', 'thirunageswaram', 'vaitheeswaran-koil'], overnight: 'वैथीश्वरन कोविल के पास रात (होटल श्रेणी की पुष्टि बाद में होगी)।' },
      { title: 'अंतिम मंदिर और प्रस्थान', description: 'तीर्थ पूरा कर सहमत ड्रॉप-ऑफ स्थान तक जाएँ।', templeSlugs: ['thiruvenkadu', 'keezhaperumpallam', 'thirunallar'], overnight: 'पुष्टि किए गए रेलवे स्टेशन या हवाईअड्डे पर ड्रॉप।' },
    ],
    includedTitle: 'प्रस्तावित योजना में शामिल',
    included: ['तीनों दिन कार और चालक', 'दो रात का ठहरना (होटल श्रेणी की पुष्टि आवश्यक)', 'अंतिम कार्यक्रम में सूचीबद्ध शाकाहारी भोजन', 'उपलब्धता के अनुसार मंदिर अनुष्ठान समन्वय', 'यात्रा के दौरान फ़ोन पर उपलब्ध Buddy'],
    excludedTitle: 'शामिल नहीं',
    excluded: ['ट्रेन या हवाई टिकट', 'मंदिर के विशेष दर्शन टिकट', 'पूजा सामग्री और भेंट', 'व्यक्तिगत खर्च और बख्शीश'],
    faqTitle: 'यात्रियों के सवाल',
    questions: [
      { question: 'क्या पहनना चाहिए?', answer: 'सादे और शालीन कपड़े पहनें। कुछ मंदिरों में पारंपरिक पोशाक अपेक्षित है; यात्रा से पहले मौजूदा नियमों की पुष्टि करें।' },
      { question: 'क्या स्टेशन या हवाईअड्डे से पिकअप है?', answer: 'पिकअप का अनुरोध किया जा सकता है। उपलब्धता और अतिरिक्त लागत जानने के लिए आगमन स्थान और समय साझा करें।' },
      { question: 'क्या यह यात्रा बुज़ुर्गों के लिए ठीक है?', answer: 'आराम के विराम जोड़कर यात्रा की गति तय की जा सकती है। पुष्टि से पहले चलने-फिरने, पहुँच और दर्शन समय पर चर्चा करें।' },
      { question: 'क्या मंदिर बदले जा सकते हैं?', answer: 'हाँ। कस्टम कार्यक्रम और संशोधित कीमत का अनुरोध करें।' },
      { question: 'रद्द करने और धन-वापसी की नीति क्या है?', answer: 'रद्दीकरण और धन-वापसी की नीति अभी उपलब्ध नहीं है। अग्रिम भुगतान से पहले लिखित शर्तें माँगें।' },
    ],
    estimateTitle: 'यात्रा का अनुमान माँगें',
    estimateDescription: 'तारीख़ें, समूह आकार और पिकअप स्थान बताएँ ताकि आपकी पूछताछ तैयार हो सके।',
    quoteDisclaimer: 'दस्तावेज़ में सत्यापित कीमत, समूह-आकार का आधार, होटल श्रेणी, भुगतान लिंक या अग्रिम राशि नहीं दी गई है। इस पृष्ठ पर बुकिंग या भुगतान नहीं लिया जाता।',
    quoteStart: 'प्रति व्यक्ति कीमत पूछें',
    stationDrop: 'ड्रॉप-ऑफ स्टेशन या हवाईअड्डा पहले से तय किया जाएगा।',
  },
  fr: {
    title: 'Circuit Navagraha en trois jours',
    summary: 'Un exemple de circuit de trois jours vers les neuf temples planétaires du delta de la Kaveri. Revoyez l’itinéraire avec votre Buddy avant de confirmer.',
    duration: '3 jours · 2 nuits',
    templeCount: '9 temples',
    meals: 'Repas végétariens',
    familyFriendly: 'Un rythme adapté aux familles',
    itineraryTitle: 'Exemple de programme jour par jour',
    sampleNotice: 'Ordre indicatif uniquement. Votre Buddy confirme le trajet final, les temps de route et les horaires avant tout paiement.',
    days: [
      { title: 'Arrivée et premiers temples', description: 'Commencez le circuit en prenant le temps du darshan.', templeSlugs: ['thingalur', 'suriyanar-kovil', 'kanjanur'], overnight: 'Nuit à Kumbakonam (catégorie d’hébergement à confirmer).' },
      { title: 'Au cœur du circuit', description: 'Poursuivez vers le sud et l’est à travers le delta de la Kaveri.', templeSlugs: ['alangudi', 'thirunageswaram', 'vaitheeswaran-koil'], overnight: 'Nuit près de Vaitheeswaran Koil (catégorie à confirmer).' },
      { title: 'Derniers temples et départ', description: 'Terminez le circuit et rejoignez le lieu de dépose convenu.', templeSlugs: ['thiruvenkadu', 'keezhaperumpallam', 'thirunallar'], overnight: 'Dépose à la gare ou à l’aéroport confirmé.' },
    ],
    includedTitle: 'Inclus dans le projet de programme',
    included: ['Véhicule et chauffeur pendant trois jours', 'Deux nuits d’hébergement (catégorie à confirmer)', 'Repas végétariens indiqués dans le programme final', 'Coordination des rites, sous réserve de disponibilité', 'Buddy joignable pendant le voyage'],
    excludedTitle: 'Non inclus',
    excluded: ['Billets de train ou d’avion', 'Billets de darshan spécial', 'Articles de puja et offrandes', 'Dépenses personnelles et pourboires'],
    faqTitle: 'Questions des voyageurs',
    questions: [
      { question: 'Comment s’habiller ?', answer: 'Prévoyez des vêtements simples et modestes. Certains temples exigent une tenue traditionnelle; vérifiez leurs consignes actuelles avant la visite.' },
      { question: 'Un transfert depuis la gare ou l’aéroport est-il possible ?', answer: 'Un transfert peut être demandé. Communiquez le lieu et l’heure d’arrivée pour vérifier la disponibilité et le coût.' },
      { question: 'Le circuit convient-il aux personnes âgées ?', answer: 'Des pauses peuvent être prévues. Parlez des besoins de mobilité, de l’accessibilité et des horaires avant confirmation.' },
      { question: 'Peut-on modifier les temples ?', answer: 'Oui. Demandez un programme sur mesure et un devis actualisé.' },
      { question: 'Quelle est la politique d’annulation et de remboursement ?', answer: 'Aucune politique d’annulation et de remboursement n’a encore été fournie. Demandez les conditions écrites avant tout acompte.' },
    ],
    estimateTitle: 'Demander une estimation',
    estimateDescription: 'Indiquez les dates, la taille du groupe et le lieu de prise en charge.',
    quoteDisclaimer: 'Le document source ne précise ni prix vérifié, ni taille de groupe de référence, ni catégorie d’hôtel, lien de paiement ou acompte. Aucune réservation ni paiement ne sont pris sur cette page.',
    quoteStart: 'Prix par personne sur demande',
    stationDrop: 'La gare ou l’aéroport de dépose est à convenir avant confirmation.',
  },
};
