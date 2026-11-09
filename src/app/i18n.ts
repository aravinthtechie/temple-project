import { Language } from './data/navagraha-temples';

export type UiKey =
  | 'brand'
  | 'navagraha'
  | 'journey'
  | 'journeyOrigin'
  | 'journeyTravelers'
  | 'circuitEyebrow'
  | 'languageLabel'
  | 'openMenu'
  | 'closeMenu'
  | 'theme'
  | 'themeTemple'
  | 'themeForest'
  | 'themeSunrise'
  | 'themeOcean'
  | 'themeNight'
  | 'photoSuppliedBy'
  | 'galleryEyebrow'
  | 'galleryTitle'
  | 'galleryDescription'
  | 'templeCount'
  | 'viewDetails'
  | 'backToGallery'
  | 'history'
  | 'significance'
  | 'location'
  | 'address'
  | 'openingHours'
  | 'hoursUnavailable'
  | 'hoursVerification'
  | 'route'
  | 'nearbyTemples'
  | 'photos'
  | 'photoUnavailable'
  | 'photoCredit'
  | 'browseOriginal'
  | 'bookingEnquiry'
  | 'bookingDescription'
  | 'travelerName'
  | 'travelerEmail'
  | 'travelerPhone'
  | 'namePlaceholder'
  | 'emailPlaceholder'
  | 'phonePlaceholder'
  | 'recipientPlaceholder'
  | 'datePlaceholder'
  | 'originPlaceholder'
  | 'travelerCountPlaceholder'
  | 'messagePlaceholder'
  | 'templeOfficeEmail'
  | 'visitDate'
  | 'message'
  | 'sendEnquiry'
  | 'cancel'
  | 'contactRequired'
  | 'footerNote'
  | 'notFound'
  | 'notFoundDescription'
  | 'returnHome';

export const UI_LABELS: Record<Language, Record<UiKey, string>> = {
  en: {
    brand: 'Temple Buddy',
    navagraha: 'Navagraha temples',
    journey: 'A journey through the nine celestial shrines',
    journeyOrigin: 'Travelling from',
    journeyTravelers: 'Travellers',
    circuitEyebrow: 'The pilgrimage circuit',
    languageLabel: 'Language',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    theme: 'Color theme',
    themeTemple: 'Temple',
    themeForest: 'Forest',
    themeSunrise: 'Sunrise',
    themeOcean: 'Ocean',
    themeNight: 'Night',
    photoSuppliedBy: 'Photo supplied by Temple Buddy',
    galleryEyebrow: 'Tamil Nadu · Sacred Circuit',
    galleryTitle: 'The Navagraha temples',
    galleryDescription: 'Nine ancient shrines, each devoted to a celestial force. Explore their stories, significance and the places that make this pilgrimage unforgettable.',
    templeCount: 'Nine temples · One timeless journey',
    viewDetails: 'View temple details',
    backToGallery: 'All nine temples',
    history: 'Temple history',
    significance: 'Religious significance',
    location: 'Location',
    address: 'Address',
    openingHours: 'Opening hours',
    hoursUnavailable: 'Hours not verified',
    hoursVerification: 'Temple schedules can change for rituals, festivals and special days. Please confirm directly with the temple before travelling.',
    route: 'Getting there',
    nearbyTemples: 'Nearby Navagraha temples',
    photos: 'Temple photograph',
    photoUnavailable: 'Photograph unavailable',
    photoCredit: 'Photo by',
    browseOriginal: 'View source and license',
    bookingEnquiry: 'Booking enquiry',
    bookingDescription: 'Prepare an enquiry email for the temple or travel provider. This site does not confirm bookings or payments.',
    travelerName: 'Your name',
    travelerEmail: 'Your email',
    travelerPhone: 'Mobile number',
    templeOfficeEmail: 'Travel provider email (optional)',
    visitDate: 'Planned visit date',
    message: 'Enquiry details',
    sendEnquiry: 'Submit enquiry',
    namePlaceholder: 'Enter your name',
    emailPlaceholder: 'Enter your email address',
    phonePlaceholder: 'Add a contact number (optional)',
    recipientPlaceholder: 'Add an email address when available',
    datePlaceholder: 'Select your planned visit date',
    originPlaceholder: 'Enter your starting location',
    travelerCountPlaceholder: 'Number of travellers',
    messagePlaceholder: 'Add temples, travel preferences or questions',
    cancel: 'Cancel',
    contactRequired: 'Enter the email address that should receive your enquiry.',
    footerNote: 'Temple details are provided as a visitor guide. Please confirm local arrangements before travel.',
    notFound: 'Temple not found',
    notFoundDescription: 'This destination is not in the Navagraha circuit.',
    returnHome: 'Explore the temples',
  },
  ta: {
    brand: 'Temple Buddy',
    navagraha: 'நவக்கிரகத் தலங்கள்',
    journey: 'ஒன்பது விண்ணகத் திருத்தலங்களின் பயணம்',
    journeyOrigin: 'புறப்படும் இடம்',
    journeyTravelers: 'பயணிகள்',
    circuitEyebrow: 'யாத்திரைத் தலம்',
    languageLabel: 'மொழி',
    openMenu: 'வழிசெலுத்தல் பட்டியைத் திற',
    closeMenu: 'வழிசெலுத்தல் பட்டியை மூடு',
    theme: 'வண்ணத் தோற்றம்',
    themeTemple: 'கோவில்',
    themeForest: 'இயற்கை',
    themeSunrise: 'சூரிய உதயம்',
    themeOcean: 'கடல்',
    themeNight: 'இரவு',
    photoSuppliedBy: 'Temple Buddy வழங்கிய புகைப்படம்',
    galleryEyebrow: 'தமிழ்நாடு · புனித யாத்திரை வழி',
    galleryTitle: 'நவக்கிரகத் திருக்கோவில்கள்',
    galleryDescription: 'ஒவ்வொரு விண்கோளுக்கும் அர்ப்பணிக்கப்பட்ட ஒன்பது பழமையான திருத்தலங்கள். அவற்றின் வரலாறு, ஆன்மிகச் சிறப்பு, பயணத் தகவல்களை அறியுங்கள்.',
    templeCount: 'ஒன்பது கோவில்கள் · காலத்தால் அழியாத பயணம்',
    viewDetails: 'திருத்தல விவரங்கள்',
    backToGallery: 'ஒன்பது திருத்தலங்கள்',
    history: 'கோவில் வரலாறு',
    significance: 'ஆன்மிகச் சிறப்பு',
    location: 'இடம்',
    address: 'முகவரி',
    openingHours: 'திறந்திருக்கும் நேரம்',
    hoursUnavailable: 'நேரம் சரிபார்க்கப்படவில்லை',
    hoursVerification: 'பூஜை, திருவிழா மற்றும் சிறப்பு நாட்களில் நேரம் மாறலாம். பயணத்திற்கு முன் கோவிலில் நேரடியாக உறுதிப்படுத்தவும்.',
    route: 'செல்லும் வழி',
    nearbyTemples: 'அருகிலுள்ள நவக்கிரகத் தலங்கள்',
    photos: 'கோவில் புகைப்படம்',
    photoUnavailable: 'புகைப்படம் கிடைக்கவில்லை',
    photoCredit: 'புகைப்படம்',
    browseOriginal: 'மூலமும் உரிமமும்',
    bookingEnquiry: 'பயண விசாரணை',
    bookingDescription: 'கோவில் அல்லது பயண ஏற்பாட்டாளருக்கு விசாரணை மின்னஞ்சலைத் தயாரிக்கவும். இத்தளம் முன்பதிவு அல்லது கட்டணத்தை உறுதிப்படுத்தாது.',
    travelerName: 'உங்கள் பெயர்',
    travelerEmail: 'உங்கள் மின்னஞ்சல்',
    travelerPhone: 'கைபேசி எண்',
    templeOfficeEmail: 'கோவில் அல்லது பயண நிறுவன மின்னஞ்சல் (விருப்பம்)',
    visitDate: 'திட்டமிட்ட பயண நாள்',
    message: 'விசாரணை விவரங்கள்',
    sendEnquiry: 'விசாரணையைச் சமர்ப்பிக்கவும்',
    namePlaceholder: 'உங்கள் பெயரை உள்ளிடுங்கள்',
    emailPlaceholder: 'உங்கள் மின்னஞ்சல் முகவரியை உள்ளிடுங்கள்',
    phonePlaceholder: 'தொடர்பு எண்ணைச் சேர்க்கவும் (விருப்பம்)',
    recipientPlaceholder: 'மின்னஞ்சல் கிடைக்கும்போது சேர்க்கவும்',
    datePlaceholder: 'திட்டமிட்ட பயண நாளைத் தேர்ந்தெடுக்கவும்',
    originPlaceholder: 'புறப்படும் இடத்தை உள்ளிடுங்கள்',
    travelerCountPlaceholder: 'பயணிகளின் எண்ணிக்கை',
    messagePlaceholder: 'கோவில், பயண விருப்பம் அல்லது கேள்விகளைச் சேர்க்கவும்',
    cancel: 'ரத்து செய்',
    contactRequired: 'விசாரணையைப் பெற வேண்டிய மின்னஞ்சல் முகவரியை உள்ளிடவும்.',
    footerNote: 'இந்தத் தகவல்கள் பயண வழிகாட்டிக்காக. உள்ளூர் ஏற்பாடுகளைப் பயணத்திற்கு முன் உறுதிப்படுத்தவும்.',
    notFound: 'திருத்தலம் இல்லை',
    notFoundDescription: 'இந்த இடம் நவக்கிரகத் தலங்களின் பட்டியலில் இல்லை.',
    returnHome: 'திருத்தலங்களைக் காண்க',
  },
  hi: {
    brand: 'Temple Buddy',
    navagraha: 'नवग्रह मंदिर',
    journey: 'नौ दिव्य तीर्थों की यात्रा',
    journeyOrigin: 'कहाँ से यात्रा',
    journeyTravelers: 'यात्री',
    circuitEyebrow: 'तीर्थ यात्रा मार्ग',
    languageLabel: 'भाषा',
    openMenu: 'नेविगेशन मेनू खोलें',
    closeMenu: 'नेविगेशन मेनू बंद करें',
    theme: 'रंग थीम',
    themeTemple: 'मंदिर',
    themeForest: 'वन',
    themeSunrise: 'सूर्योदय',
    themeOcean: 'सागर',
    themeNight: 'रात्रि',
    photoSuppliedBy: 'Temple Buddy द्वारा दिया गया फोटो',
    galleryEyebrow: 'तमिलनाडु · पवित्र यात्रा मार्ग',
    galleryTitle: 'नवग्रह मंदिर',
    galleryDescription: 'नौ प्राचीन मंदिर, प्रत्येक एक ग्रह को समर्पित। उनके इतिहास, धार्मिक महत्व और यात्रा की जानकारी जानें।',
    templeCount: 'नौ मंदिर · एक कालातीत यात्रा',
    viewDetails: 'मंदिर का विवरण देखें',
    backToGallery: 'सभी नौ मंदिर',
    history: 'मंदिर का इतिहास',
    significance: 'धार्मिक महत्व',
    location: 'स्थान',
    address: 'पता',
    openingHours: 'दर्शन का समय',
    hoursUnavailable: 'समय सत्यापित नहीं है',
    hoursVerification: 'पूजा, त्योहार और विशेष दिनों में समय बदल सकता है। यात्रा से पहले मंदिर से सीधे पुष्टि करें।',
    route: 'कैसे पहुँचें',
    nearbyTemples: 'पास के नवग्रह मंदिर',
    photos: 'मंदिर का फोटो',
    photoUnavailable: 'फोटो उपलब्ध नहीं',
    photoCredit: 'फोटो',
    browseOriginal: 'स्रोत और लाइसेंस देखें',
    bookingEnquiry: 'यात्रा पूछताछ',
    bookingDescription: 'मंदिर या यात्रा संचालक के लिए पूछताछ ईमेल तैयार करें। यह वेबसाइट बुकिंग या भुगतान की पुष्टि नहीं करती।',
    travelerName: 'आपका नाम',
    travelerEmail: 'आपका ईमेल',
    travelerPhone: 'मोबाइल नंबर',
    templeOfficeEmail: 'मंदिर या यात्रा संचालक का ईमेल (वैकल्पिक)',
    visitDate: 'यात्रा की प्रस्तावित तारीख',
    message: 'पूछताछ का विवरण',
    sendEnquiry: 'पूछताछ भेजें',
    namePlaceholder: 'अपना नाम दर्ज करें',
    emailPlaceholder: 'अपना ईमेल पता दर्ज करें',
    phonePlaceholder: 'संपर्क नंबर जोड़ें (वैकल्पिक)',
    recipientPlaceholder: 'उपलब्ध होने पर ईमेल पता जोड़ें',
    datePlaceholder: 'यात्रा की तारीख़ चुनें',
    originPlaceholder: 'अपना प्रारंभिक स्थान दर्ज करें',
    travelerCountPlaceholder: 'यात्रियों की संख्या',
    messagePlaceholder: 'मंदिर, यात्रा की पसंद या प्रश्न जोड़ें',
    cancel: 'रद्द करें',
    contactRequired: 'पूछताछ प्राप्त करने वाले का ईमेल पता भरें।',
    footerNote: 'मंदिर की जानकारी यात्रा मार्गदर्शिका के लिए है। यात्रा से पहले स्थानीय व्यवस्था की पुष्टि करें।',
    notFound: 'मंदिर नहीं मिला',
    notFoundDescription: 'यह स्थान नवग्रह यात्रा मार्ग में नहीं है।',
    returnHome: 'मंदिर देखें',
  },
  fr: {
    brand: 'Temple Buddy',
    navagraha: 'Temples Navagraha',
    journey: 'Un voyage parmi neuf sanctuaires célestes',
    journeyOrigin: 'Départ depuis',
    journeyTravelers: 'Voyageurs',
    circuitEyebrow: 'Le circuit de pèlerinage',
    languageLabel: 'Langue',
    openMenu: 'Ouvrir le menu de navigation',
    closeMenu: 'Fermer le menu de navigation',
    theme: 'Thème de couleur',
    themeTemple: 'Temple',
    themeForest: 'Forêt',
    themeSunrise: 'Lever du soleil',
    themeOcean: 'Océan',
    themeNight: 'Nuit',
    photoSuppliedBy: 'Photo fournie par Temple Buddy',
    galleryEyebrow: 'Tamil Nadu · Circuit sacré',
    galleryTitle: 'Les temples Navagraha',
    galleryDescription: 'Neuf anciens sanctuaires dédiés chacun à une force céleste. Découvrez leur histoire, leur importance et les étapes de ce pèlerinage.',
    templeCount: 'Neuf temples · Un voyage intemporel',
    viewDetails: 'Découvrir le temple',
    backToGallery: 'Les neuf temples',
    history: 'Histoire du temple',
    significance: 'Importance religieuse',
    location: 'Lieu',
    address: 'Adresse',
    openingHours: 'Horaires d’ouverture',
    hoursUnavailable: 'Horaires non vérifiés',
    hoursVerification: 'Les horaires peuvent changer lors des rites, fêtes et jours spéciaux. Veuillez les confirmer auprès du temple avant le voyage.',
    route: 'Comment s’y rendre',
    nearbyTemples: 'Temples Navagraha à proximité',
    photos: 'Photo du temple',
    photoUnavailable: 'Photo indisponible',
    photoCredit: 'Photo par',
    browseOriginal: 'Voir la source et la licence',
    bookingEnquiry: 'Demande de réservation',
    bookingDescription: 'Préparez un courriel au temple ou à votre organisateur. Ce site ne confirme ni réservation ni paiement.',
    travelerName: 'Votre nom',
    travelerEmail: 'Votre courriel',
    travelerPhone: 'Numéro de téléphone',
    templeOfficeEmail: 'Courriel du temple ou du voyagiste (facultatif)',
    visitDate: 'Date de visite prévue',
    message: 'Détails de la demande',
    sendEnquiry: 'Envoyer la demande',
    namePlaceholder: 'Saisissez votre nom',
    emailPlaceholder: 'Saisissez votre adresse courriel',
    phonePlaceholder: 'Ajouter un numéro (facultatif)',
    recipientPlaceholder: 'Ajouter une adresse courriel si disponible',
    datePlaceholder: 'Choisir la date prévue',
    originPlaceholder: 'Saisir le lieu de départ',
    travelerCountPlaceholder: 'Nombre de voyageurs',
    messagePlaceholder: 'Ajouter les temples, préférences ou questions',
    cancel: 'Annuler',
    contactRequired: 'Saisissez l’adresse courriel qui recevra votre demande.',
    footerNote: 'Ces informations servent de guide aux visiteurs. Confirmez les modalités locales avant le départ.',
    notFound: 'Temple introuvable',
    notFoundDescription: 'Cette destination ne fait pas partie du circuit Navagraha.',
    returnHome: 'Explorer les temples',
  },
};

export const LANGUAGE_OPTIONS: { value: Language; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'ta', label: 'தமிழ்' },
  { value: 'hi', label: 'हिन्दी' },
  { value: 'fr', label: 'Français' },
];
