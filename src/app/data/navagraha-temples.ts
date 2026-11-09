export type Language = 'en' | 'ta' | 'hi' | 'fr';

export type LocalizedText = Record<Language, string>;

export type TempleContent = {
  name: string;
  location: string;
  description: string;
  history: string;
  significance: string;
  address: string;
  route: string;
  imageAlt: string;
};

export type TempleImageCredit = {
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
};

export type TemplePhotoAsset = {
  imagePath: string;
  imageCredit?: TempleImageCredit;
  alt: LocalizedText;
};

export type OpeningHours = {
  schedule: string | null;
  verifiedAt: string | null;
  sourceUrl: string | null;
};

export type NavagrahaTemple = {
  slug: string;
  planet: 'Surya' | 'Chandra' | 'Angaraka' | 'Budhan' | 'Guru' | 'Sukran' | 'Sani' | 'Rahu' | 'Ketu';
  imagePath: string;
  imageCredit: TempleImageCredit;
  featuredPhoto?: TemplePhotoAsset;
  openingHours: OpeningHours;
  nearbySlugs: string[];
  translations: Record<Language, TempleContent>;
};

export const PLANET_NAMES: Record<NavagrahaTemple['planet'], LocalizedText> = {
  Surya: { en: 'Surya · Sun', ta: 'சூரியன் · சூரியன்', hi: 'सूर्य · सूर्य', fr: 'Surya · Soleil' },
  Chandra: { en: 'Chandra · Moon', ta: 'சந்திரன் · நிலா', hi: 'चंद्र · चंद्रमा', fr: 'Chandra · Lune' },
  Angaraka: { en: 'Angaraka · Mars', ta: 'அங்காரகன் · செவ்வாய்', hi: 'अंगारक · मंगल', fr: 'Angaraka · Mars' },
  Budhan: { en: 'Budhan · Mercury', ta: 'புதன் · புதன்', hi: 'बुध · बुध', fr: 'Budhan · Mercure' },
  Guru: { en: 'Guru · Jupiter', ta: 'குரு · வியாழன்', hi: 'गुरु · बृहस्पति', fr: 'Guru · Jupiter' },
  Sukran: { en: 'Sukran · Venus', ta: 'சுக்கிரன் · வெள்ளி', hi: 'शुक्र · शुक्र', fr: 'Sukran · Vénus' },
  Sani: { en: 'Sani · Saturn', ta: 'சனி · சனி', hi: 'शनि · शनि', fr: 'Sani · Saturne' },
  Rahu: { en: 'Rahu · North lunar node', ta: 'ராகு · வட சந்திர முனை', hi: 'राहु · उत्तरी चंद्र नोड', fr: 'Rahu · Nœud lunaire nord' },
  Ketu: { en: 'Ketu · South lunar node', ta: 'கேது · தென் சந்திர முனை', hi: 'केतु · दक्षिणी चंद्र नोड', fr: 'Ketu · Nœud lunaire sud' },
};

const unverifiedHours: OpeningHours = {
  schedule: null,
  verifiedAt: null,
  sourceUrl: null,
};

export const NAVAGRAHA_TEMPLES: NavagrahaTemple[] = [
  {
    slug: 'suriyanar-kovil',
    planet: 'Surya',
    imagePath: 'assets/images/navagraha/suriyanar-kovil.webp',
    imageCredit: {
      author: 'PJeganathan',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Suryanar_Koil_in_Tamil_Nadu_JEG6875.jpg',
    },
    openingHours: { ...unverifiedHours },
    nearbySlugs: ['thingalur', 'kanjanur', 'thirunageswaram'],
    translations: {
      en: {
        name: 'Suriyanar Kovil',
        location: 'Thanjavur district, Tamil Nadu',
        description: 'A celebrated shrine to Surya, marked by a striking entrance tower and a rare focus on the Sun among the Navagraha temples.',
        history: 'The temple is traditionally associated with the Chola period and is dedicated to the Sun deity, Surya.',
        significance: 'Pilgrims worship Surya here for vitality, clarity and relief from difficulties attributed to the Sun in astrology.',
        address: 'Suriyanar Kovil, Thirumangalakudi, Thanjavur district, Tamil Nadu, India.',
        route: 'From Kumbakonam, follow local signs toward Aduthurai and Thirumangalakudi. Confirm current road and bus information before travel.',
        imageAlt: 'Entrance and gopuram of Suriyanar Kovil, the Surya temple in Tamil Nadu.',
      },
      ta: {
        name: 'சூரியனார் கோவில்',
        location: 'தஞ்சாவூர் மாவட்டம், தமிழ்நாடு',
        description: 'நவக்கிரகத் தலங்களில் சூரியனுக்கென அமைந்த புகழ்பெற்ற ஆலயம்; நுழைவாயிலும் கோபுரமும் சிறப்பாகத் தெரிகின்றன.',
        history: 'சோழர் கால மரபுடன் தொடர்புடைய இத்தலம் சூரியக் கடவுளான சூரியனுக்கு அர்ப்பணிக்கப்பட்டது.',
        significance: 'ஜோதிடத்தில் சூரியனால் ஏற்படும் சிரமங்கள் நீங்கி, ஆற்றலும் தெளிவும் கிடைக்க பக்தர்கள் வழிபடுகின்றனர்.',
        address: 'சூரியனார் கோவில், திருமங்கலக்குடி, தஞ்சாவூர் மாவட்டம், தமிழ்நாடு, இந்தியா.',
        route: 'கும்பகோணத்திலிருந்து ஆடுதுறை மற்றும் திருமங்கலக்குடி நோக்கிச் செல்லும் உள்ளூர் வழிகாட்டுதல்களைப் பின்பற்றவும்; பயணத்திற்கு முன் போக்குவரத்தை உறுதிப்படுத்தவும்.',
        imageAlt: 'தமிழ்நாட்டின் சூரியத் தலமான சூரியனார் கோவிலின் நுழைவாயிலும் கோபுரமும்.',
      },
      hi: {
        name: 'सूर्यनार कोविल',
        location: 'तंजावुर ज़िला, तमिलनाडु',
        description: 'नवग्रह मंदिरों में सूर्य को समर्पित प्रसिद्ध तीर्थ; इसका प्रवेश द्वार और गोपुरम विशेष आकर्षण हैं।',
        history: 'यह मंदिर पारंपरिक रूप से चोल काल से जुड़ा है और सूर्य देव को समर्पित है।',
        significance: 'भक्त सूर्य से जुड़ी ज्योतिषीय कठिनाइयों में राहत, ऊर्जा और स्पष्टता के लिए यहां पूजा करते हैं।',
        address: 'सूर्यनार कोविल, तिरुमंगलकुडी, तंजावुर ज़िला, तमिलनाडु, भारत।',
        route: 'कुंभकोणम से आदुतुरै और तिरुमंगलकुडी की ओर स्थानीय संकेतों का अनुसरण करें; यात्रा से पहले सड़क और बस की जानकारी जाँचें।',
        imageAlt: 'तमिलनाडु के सूर्य मंदिर सूर्यनार कोविल का प्रवेश द्वार और गोपुरम।',
      },
      fr: {
        name: 'Suriyanar Kovil',
        location: 'District de Thanjavur, Tamil Nadu',
        description: 'Sanctuaire renommé dédié à Surya, avec une tour d’entrée remarquable et un culte solaire rare parmi les temples Navagraha.',
        history: 'La tradition associe le temple à l’époque Chola; il est consacré à Surya, la divinité solaire.',
        significance: 'Les pèlerins y prient pour la vitalité, la clarté et l’apaisement des difficultés astrologiques liées au Soleil.',
        address: 'Suriyanar Kovil, Thirumangalakudi, district de Thanjavur, Tamil Nadu, Inde.',
        route: 'Depuis Kumbakonam, suivre les indications locales vers Aduthurai et Thirumangalakudi. Vérifier les routes et bus avant le départ.',
        imageAlt: 'Entrée et gopuram de Suriyanar Kovil, temple de Surya au Tamil Nadu.',
      },
    },
  },
  {
    slug: 'thingalur',
    planet: 'Chandra',
    imagePath: 'assets/images/navagraha/thingalur.webp',
    imageCredit: {
      author: 'Rsmn',
      license: 'CC BY-SA 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Thingalur_temple.JPG',
    },
    openingHours: { ...unverifiedHours },
    nearbySlugs: ['suriyanar-kovil', 'alangudi', 'kanjanur'],
    translations: {
      en: {
        name: 'Thingalur',
        location: 'Thingalur, Thanjavur district, Tamil Nadu',
        description: 'The Kailasanathar temple at Thingalur is revered as the Chandra sthalam and sits amid the quiet Cauvery delta.',
        history: 'Kailasanathar is an ancient Shaiva temple whose local tradition identifies Thingalur as the sacred abode of Chandra.',
        significance: 'Devotees seek peace of mind and balance through worship of Chandra, the Moon, at this shrine.',
        address: 'Kailasanathar Temple, Thingalur, Thanjavur district, Tamil Nadu, India.',
        route: 'Thingalur is reached by local road from Thanjavur or Kumbakonam. Check local transport availability before setting out.',
        imageAlt: 'Kailasanathar Temple at Thingalur, the Chandra shrine in Tamil Nadu.',
      },
      ta: {
        name: 'திங்களூர்',
        location: 'திங்களூர், தஞ்சாவூர் மாவட்டம், தமிழ்நாடு',
        description: 'காவிரி டெல்டாவின் அமைதியான சூழலில் உள்ள கைலாசநாதர் கோவில் சந்திரத் தலமாகப் போற்றப்படுகிறது.',
        history: 'பழமையான சைவத் தலமான கைலாசநாதர் கோவிலைச் சந்திரனின் புனிதத் தலமாக உள்ளூர் மரபு அடையாளப்படுத்துகிறது.',
        significance: 'மன அமைதியும் சமநிலையும் வேண்டி பக்தர்கள் சந்திரனை இங்கு வழிபடுகின்றனர்.',
        address: 'கைலாசநாதர் கோவில், திங்களூர், தஞ்சாவூர் மாவட்டம், தமிழ்நாடு, இந்தியா.',
        route: 'தஞ்சாவூர் அல்லது கும்பகோணத்திலிருந்து உள்ளூர் சாலை வழியாகத் திங்களூரை அடையலாம்; பயணத்திற்கு முன் போக்குவரத்தைச் சரிபார்க்கவும்.',
        imageAlt: 'தமிழ்நாட்டின் சந்திரத் தலமான திங்களூர் கைலாசநாதர் கோவில்.',
      },
      hi: {
        name: 'थिंगलूर',
        location: 'थिंगलूर, तंजावुर ज़िला, तमिलनाडु',
        description: 'कावेरी डेल्टा के शांत परिवेश में स्थित कैलासनाथर मंदिर चंद्र का पवित्र स्थल माना जाता है।',
        history: 'प्राचीन शैव मंदिर कैलासनाथर को स्थानीय परंपरा चंद्र का पवित्र निवास मानती है।',
        significance: 'भक्त मन की शांति और संतुलन के लिए यहां चंद्र की पूजा करते हैं।',
        address: 'कैलासनाथर मंदिर, थिंगलूर, तंजावुर ज़िला, तमिलनाडु, भारत।',
        route: 'थंजावुर या कुंभकोणम से स्थानीय सड़क द्वारा थिंगलूर पहुँचा जा सकता है; निकलने से पहले परिवहन की जाँच करें।',
        imageAlt: 'तमिलनाडु का चंद्र तीर्थ थिंगलूर कैलासनाथर मंदिर।',
      },
      fr: {
        name: 'Thingalur',
        location: 'Thingalur, district de Thanjavur, Tamil Nadu',
        description: 'Dans le delta paisible de la Kaveri, le temple Kailasanathar est vénéré comme le sanctuaire de Chandra.',
        history: 'Ce temple shivaïte ancien est identifié par la tradition locale comme le lieu sacré de Chandra.',
        significance: 'Les fidèles y prient Chandra, la Lune, pour la sérénité et l’équilibre intérieur.',
        address: 'Temple Kailasanathar, Thingalur, district de Thanjavur, Tamil Nadu, Inde.',
        route: 'Thingalur est accessible par la route depuis Thanjavur ou Kumbakonam. Vérifier les transports locaux avant le départ.',
        imageAlt: 'Temple Kailasanathar de Thingalur, sanctuaire de Chandra au Tamil Nadu.',
      },
    },
  },
  {
    slug: 'vaitheeswaran-koil',
    planet: 'Angaraka',
    imagePath: 'assets/images/navagraha/vaitheeswaran-koil.webp',
    imageCredit: {
      author: 'raguleo',
      license: 'CC BY 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:VAITHEESWARAN_KOIL_-_panoramio.jpg',
    },
    featuredPhoto: {
      imagePath: 'assets/images/navagraha/vaitheeswaran-koil-gopuram.webp',
      alt: {
        en: 'Vaitheeswaran Koil gopurams and shrine pavilion beside the temple tank.',
        ta: 'கோவில் திருக்குளத்தின் அருகே உள்ள வைத்தீஸ்வரன் கோவில் கோபுரங்களும் சன்னதியும்.',
        hi: 'मंदिर के सरोवर के पास वैथीश्वरन कोविल के गोपुरम और मंदिर मंडप।',
        fr: 'Les gopurams et le pavillon de Vaitheeswaran Koil au bord du bassin du temple.',
      },
    },
    openingHours: { ...unverifiedHours },
    nearbySlugs: ['thiruvenkadu', 'keezhaperumpallam', 'thirunallar'],
    translations: {
      en: {
        name: 'Vaitheeswaran Koil',
        location: 'Mayiladuthurai district, Tamil Nadu',
        description: 'A major Shiva shrine famed for its healing traditions and its association with Angaraka, the planet Mars.',
        history: 'The temple’s sacred history is woven into Tamil Shaiva devotional tradition and the lore of the Navagraha pilgrimage.',
        significance: 'Angaraka is worshipped here; the temple is also associated with Vaidyanathar, the divine healer.',
        address: 'Vaidyanathaswamy Temple, Vaitheeswaran Koil, Mayiladuthurai district, Tamil Nadu, India.',
        route: 'The town is served by Vaitheeswarankoil railway station and by road from Sirkazhi and Mayiladuthurai; confirm current services.',
        imageAlt: 'Temple entrance and architecture at Vaitheeswaran Koil, the Angaraka shrine.',
      },
      ta: {
        name: 'வைத்தீஸ்வரன் கோவில்',
        location: 'மயிலாடுதுறை மாவட்டம், தமிழ்நாடு',
        description: 'மருத்துவ மரபுகளுக்குப் புகழ்பெற்ற சிவாலயம்; செவ்வாய் கிரகமான அங்காரகனுடன் தொடர்புடையது.',
        history: 'தமிழ் சைவ பக்தி மரபுகளும் நவக்கிரக யாத்திரைத் தொன்மங்களும் இக்கோவிலின் புனித வரலாற்றுடன் இணைந்துள்ளன.',
        significance: 'இங்கு அங்காரகன் வழிபடப்படுகிறார்; வைத்தியநாதர் தெய்வீக மருத்துவராகவும் போற்றப்படுகிறார்.',
        address: 'வைத்தியநாதசுவாமி கோவில், வைத்தீஸ்வரன் கோவில், மயிலாடுதுறை மாவட்டம், தமிழ்நாடு, இந்தியா.',
        route: 'வைத்தீஸ்வரன்கோவில் ரயில் நிலையம் அருகில் உள்ளது; சீர்காழி மற்றும் மயிலாடுதுறையிலிருந்தும் சாலை வழி செல்லலாம். சேவைகளை உறுதிப்படுத்தவும்.',
        imageAlt: 'அங்காரகத் தலமான வைத்தீஸ்வரன் கோவிலின் நுழைவாயிலும் கட்டிட அமைப்பும்.',
      },
      hi: {
        name: 'वैथीश्वरन कोविल',
        location: 'मयिलादुथुरै ज़िला, तमिलनाडु',
        description: 'उपचार परंपराओं के लिए प्रसिद्ध शिव मंदिर, जिसका संबंध मंगल ग्रह अंगारक से है।',
        history: 'इस मंदिर का पवित्र इतिहास तमिल शैव भक्ति और नवग्रह तीर्थ की कथाओं से जुड़ा है।',
        significance: 'यहाँ अंगारक की पूजा होती है; वैद्यनाथर को दिव्य चिकित्सक के रूप में भी माना जाता है।',
        address: 'वैद्यनाथस्वामी मंदिर, वैथीश्वरन कोविल, मयिलादुथुरै ज़िला, तमिलनाडु, भारत।',
        route: 'वैथीश्वरनकोविल रेलवे स्टेशन पास है; सीरकाज़ी और मयिलादुथुरै से सड़क मार्ग भी उपलब्ध है। सेवाएँ पहले जाँचें।',
        imageAlt: 'अंगारक तीर्थ वैथीश्वरन कोविल का प्रवेश द्वार और वास्तुकला।',
      },
      fr: {
        name: 'Vaitheeswaran Koil',
        location: 'District de Mayiladuthurai, Tamil Nadu',
        description: 'Important sanctuaire de Shiva réputé pour ses traditions de guérison et son lien avec Angaraka, Mars.',
        history: 'Son histoire sacrée s’inscrit dans la dévotion shivaïte tamoule et les récits du pèlerinage Navagraha.',
        significance: 'Angaraka y est vénéré; le temple est aussi consacré à Vaidyanathar, le guérisseur divin.',
        address: 'Temple Vaidyanathaswamy, Vaitheeswaran Koil, district de Mayiladuthurai, Tamil Nadu, Inde.',
        route: 'La gare de Vaitheeswarankoil dessert la ville; des routes la relient à Sirkazhi et Mayiladuthurai. Vérifier les services.',
        imageAlt: 'Entrée et architecture de Vaitheeswaran Koil, sanctuaire d’Angaraka.',
      },
    },
  },
  {
    slug: 'thiruvenkadu',
    planet: 'Budhan',
    imagePath: 'assets/images/navagraha/thiruvenkadu.webp',
    imageCredit: {
      author: 'VasuVR',
      license: 'CC BY 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:TK26-25-TVK-Thiruvenkadu_Swetharanyeshwarar_temple_east_gopuram.jpg',
    },
    openingHours: { ...unverifiedHours },
    nearbySlugs: ['vaitheeswaran-koil', 'keezhaperumpallam', 'thirunallar'],
    translations: {
      en: {
        name: 'Thiruvenkadu',
        location: 'Thiruvenkadu, Mayiladuthurai district, Tamil Nadu',
        description: 'The white-forest shrine of Swetharanyeswarar is known for its striking gopurams and its Budhan association.',
        history: 'Swetharanyeswarar Temple is an ancient Shaiva centre whose Tamil name means the sacred white forest.',
        significance: 'The shrine is revered for Budhan, Mercury, and for its distinctive Aghora Murthi form of Shiva.',
        address: 'Swetharanyeswarar Temple, Thiruvenkadu, Mayiladuthurai district, Tamil Nadu, India.',
        route: 'Thiruvenkadu is reached by local roads from Sirkazhi. Check bus times and road conditions before departure.',
        imageAlt: 'East gopuram of Swetharanyeswarar Temple in Thiruvenkadu.',
      },
      ta: {
        name: 'திருவெண்காடு',
        location: 'திருவெண்காடு, மயிலாடுதுறை மாவட்டம், தமிழ்நாடு',
        description: 'ஸ்வேதாரண்யேஸ்வரர் திருக்கோவில் கோபுரங்களுக்கும் புதன் தலமாகப் போற்றப்படுவதற்கும் பெயர் பெற்றது.',
        history: 'பழமையான சைவத் தலமான ஸ்வேதாரண்யேஸ்வரர் கோவிலின் பெயர் புனித வெண்காடு என்று பொருள்படும்.',
        significance: 'புதன் வழிபாட்டுடன், சிவனின் தனித்துவமான அகோரமூர்த்தி வடிவத்திற்காகவும் இத்தலம் போற்றப்படுகிறது.',
        address: 'ஸ்வேதாரண்யேஸ்வரர் கோவில், திருவெண்காடு, மயிலாடுதுறை மாவட்டம், தமிழ்நாடு, இந்தியா.',
        route: 'சீர்காழியிலிருந்து உள்ளூர் சாலை வழியாகத் திருவெண்காட்டை அடையலாம்; பேருந்து நேரத்தையும் சாலை நிலையையும் சரிபார்க்கவும்.',
        imageAlt: 'திருவெண்காடு ஸ்வேதாரண்யேஸ்வரர் கோவிலின் கிழக்குக் கோபுரம்.',
      },
      hi: {
        name: 'थिरुवेंकाडु',
        location: 'थिरुवेंकाडु, मयिलादुथुरै ज़िला, तमिलनाडु',
        description: 'श्वेतारण्येश्वरर मंदिर अपने ऊँचे गोपुरम और बुध से संबंध के लिए प्रसिद्ध है।',
        history: 'प्राचीन शैव केंद्र श्वेतारण्येश्वरर का नाम पवित्र श्वेत वन को दर्शाता है।',
        significance: 'यह बुध, अर्थात् मरकरी, और शिव के विशिष्ट अघोरमूर्ति स्वरूप के लिए पूजित है।',
        address: 'श्वेतारण्येश्वरर मंदिर, थिरुवेंकाडु, मयिलादुथुरै ज़िला, तमिलनाडु, भारत।',
        route: 'सीरकाज़ी से स्थानीय सड़कों द्वारा थिरुवेंकाडु पहुँचा जा सकता है; बस समय और सड़क की स्थिति जाँचें।',
        imageAlt: 'थिरुवेंकाडु के श्वेतारण्येश्वरर मंदिर का पूर्वी गोपुरम।',
      },
      fr: {
        name: 'Thiruvenkadu',
        location: 'Thiruvenkadu, district de Mayiladuthurai, Tamil Nadu',
        description: 'Le sanctuaire de Swetharanyeswarar est réputé pour ses gopurams et son association avec Budhan.',
        history: 'Ce centre shivaïte ancien porte un nom tamoul signifiant la forêt blanche sacrée.',
        significance: 'Le temple est vénéré pour Budhan, Mercure, et pour la forme Aghora Murthi de Shiva.',
        address: 'Temple Swetharanyeswarar, Thiruvenkadu, district de Mayiladuthurai, Tamil Nadu, Inde.',
        route: 'Thiruvenkadu est accessible par la route depuis Sirkazhi. Vérifier les horaires de bus et l’état des routes.',
        imageAlt: 'Gopuram est du temple Swetharanyeswarar à Thiruvenkadu.',
      },
    },
  },
  {
    slug: 'alangudi',
    planet: 'Guru',
    imagePath: 'assets/images/navagraha/alangudi.webp',
    imageCredit: {
      author: 'Rsmn',
      license: 'CC BY-SA 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alangudi_temple.JPG',
    },
    openingHours: { ...unverifiedHours },
    nearbySlugs: ['thingalur', 'kanjanur', 'thirunageswaram'],
    translations: {
      en: {
        name: 'Alangudi',
        location: 'Alangudi, Tiruvarur district, Tamil Nadu',
        description: 'Apatsahayesvarar Temple is a revered Guru sthalam set in the fertile Cauvery delta.',
        history: 'The temple is an old Shaiva place of worship associated with the legends of Apatsahayesvarar and the Navagraha tradition.',
        significance: 'Guru, Jupiter, is worshipped here for wisdom, learning and auspicious guidance.',
        address: 'Apatsahayesvarar Temple, Alangudi, Tiruvarur district, Tamil Nadu, India.',
        route: 'Alangudi is connected by road with Kumbakonam and Needamangalam. Confirm local transport and route conditions.',
        imageAlt: 'Apatsahayesvarar Temple at Alangudi, the Guru shrine.',
      },
      ta: {
        name: 'ஆலங்குடி',
        location: 'ஆலங்குடி, திருவாரூர் மாவட்டம், தமிழ்நாடு',
        description: 'காவிரி டெல்டாவின் வளமான பகுதியில் அமைந்துள்ள ஆபத்சகாயேஸ்வரர் கோவில் குரு தலமாகப் போற்றப்படுகிறது.',
        history: 'ஆபத்சகாயேஸ்வரர் மற்றும் நவக்கிரக மரபுகளுடன் தொடர்புடைய பழமையான சைவ வழிபாட்டுத் தலம் இது.',
        significance: 'ஞானம், கல்வி, நல்வழிகாட்டுதல் வேண்டி பக்தர்கள் குரு பகவானை இங்கு வழிபடுகின்றனர்.',
        address: 'ஆபத்சகாயேஸ்வரர் கோவில், ஆலங்குடி, திருவாரூர் மாவட்டம், தமிழ்நாடு, இந்தியா.',
        route: 'கும்பகோணம் மற்றும் நீடாமங்கலத்திலிருந்து சாலை வழியாக ஆலங்குடியை அடையலாம்; உள்ளூர் போக்குவரத்தை உறுதிப்படுத்தவும்.',
        imageAlt: 'குரு தலமான ஆலங்குடி ஆபத்சகாயேஸ்வரர் கோவில்.',
      },
      hi: {
        name: 'आलंगुडी',
        location: 'आलंगुडी, तिरुवारूर ज़िला, तमिलनाडु',
        description: 'उपजाऊ कावेरी डेल्टा में स्थित आपत्सहायेश्वरर मंदिर गुरु का पूजित तीर्थ है।',
        history: 'यह प्राचीन शैव मंदिर आपत्सहायेश्वरर और नवग्रह परंपरा की कथाओं से जुड़ा है।',
        significance: 'भक्त ज्ञान, शिक्षा और शुभ मार्गदर्शन के लिए गुरु, बृहस्पति, की पूजा करते हैं।',
        address: 'आपत्सहायेश्वरर मंदिर, आलंगुडी, तिरुवारूर ज़िला, तमिलनाडु, भारत।',
        route: 'आलंगुडी सड़क द्वारा कुंभकोणम और नीडामंगलम से जुड़ा है; स्थानीय परिवहन की पुष्टि करें।',
        imageAlt: 'गुरु तीर्थ आलंगुडी का आपत्सहायेश्वरर मंदिर।',
      },
      fr: {
        name: 'Alangudi',
        location: 'Alangudi, district de Tiruvarur, Tamil Nadu',
        description: 'Le temple Apatsahayesvarar, dans le delta fertile de la Kaveri, est un sanctuaire de Guru.',
        history: 'Ce lieu shivaïte ancien est lié aux récits d’Apatsahayesvarar et à la tradition Navagraha.',
        significance: 'Les fidèles prient Guru, Jupiter, pour la sagesse, l’apprentissage et une orientation favorable.',
        address: 'Temple Apatsahayesvarar, Alangudi, district de Tiruvarur, Tamil Nadu, Inde.',
        route: 'Alangudi est relié par la route à Kumbakonam et Needamangalam. Vérifier les transports locaux.',
        imageAlt: 'Temple Apatsahayesvarar d’Alangudi, sanctuaire de Guru.',
      },
    },
  },
  {
    slug: 'kanjanur',
    planet: 'Sukran',
    imagePath: 'assets/images/navagraha/kanjanur.webp',
    imageCredit: {
      author: 'Sathiyaraj',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kanjanur_Sukkiran_Temple.jpg',
    },
    openingHours: { ...unverifiedHours },
    nearbySlugs: ['suriyanar-kovil', 'thingalur', 'thirunageswaram'],
    translations: {
      en: {
        name: 'Kanjanur',
        location: 'Kanjanur, Thanjavur district, Tamil Nadu',
        description: 'Agneeswarar Temple is the traditional Sukran sthalam, known for its Dravidian architecture and sacred tank.',
        history: 'The temple is part of the Kumbakonam-region Shaiva pilgrimage circuit and is associated with the planet Sukran.',
        significance: 'Sukran, Venus, is worshipped for harmony, well-being and prosperity.',
        address: 'Agneeswarar Temple, Kanjanur, Thanjavur district, Tamil Nadu, India.',
        route: 'Kanjanur is accessible by local road from Kumbakonam and Aduthurai. Check current transport before travel.',
        imageAlt: 'Agneeswarar Temple at Kanjanur, the Sukran shrine.',
      },
      ta: {
        name: 'கஞ்சனூர்',
        location: 'கஞ்சனூர், தஞ்சாவூர் மாவட்டம், தமிழ்நாடு',
        description: 'திராவிடக் கட்டிடக்கலையும் புனிதத் தீர்த்தமும் கொண்ட அக்னீஸ்வரர் கோவில் சுக்கிரத் தலமாகப் போற்றப்படுகிறது.',
        history: 'கும்பகோணம் பகுதியின் சைவ யாத்திரைத் தலங்களில் ஒன்றான இக்கோவில் சுக்கிரனுடன் தொடர்புடையது.',
        significance: 'நல்லிணக்கம், நலன், செழிப்பு வேண்டி பக்தர்கள் சுக்கிரனை வழிபடுகின்றனர்.',
        address: 'அக்னீஸ்வரர் கோவில், கஞ்சனூர், தஞ்சாவூர் மாவட்டம், தமிழ்நாடு, இந்தியா.',
        route: 'கும்பகோணம் மற்றும் ஆடுதுறையிலிருந்து உள்ளூர் சாலை வழியாகக் கஞ்சனூரை அடையலாம்; போக்குவரத்தைச் சரிபார்க்கவும்.',
        imageAlt: 'சுக்கிரத் தலமான கஞ்சனூர் அக்னீஸ்வரர் கோவில்.',
      },
      hi: {
        name: 'कंजनूर',
        location: 'कंजनूर, तंजावुर ज़िला, तमिलनाडु',
        description: 'अग्नीश्वरर मंदिर द्रविड़ वास्तुकला और पवित्र कुंड के लिए जाना जाता है तथा शुक्र का तीर्थ है।',
        history: 'कुंभकोणम क्षेत्र की शैव यात्रा परंपरा का हिस्सा यह मंदिर शुक्र ग्रह से जुड़ा है।',
        significance: 'भक्त सौहार्द, कल्याण और समृद्धि के लिए शुक्र की पूजा करते हैं।',
        address: 'अग्नीश्वरर मंदिर, कंजनूर, तंजावुर ज़िला, तमिलनाडु, भारत।',
        route: 'कुंभकोणम और आदुतुरै से स्थानीय सड़क द्वारा कंजनूर पहुँचा जा सकता है; परिवहन की जाँच करें।',
        imageAlt: 'शुक्र तीर्थ कंजनूर का अग्नीश्वरर मंदिर।',
      },
      fr: {
        name: 'Kanjanur',
        location: 'Kanjanur, district de Thanjavur, Tamil Nadu',
        description: 'Le temple Agneeswarar, à l’architecture dravidienne et doté d’un bassin sacré, est le sanctuaire de Sukran.',
        history: 'Ce temple appartient au circuit shivaïte de la région de Kumbakonam et est associé à Sukran.',
        significance: 'Les fidèles prient Sukran, Vénus, pour l’harmonie, le bien-être et la prospérité.',
        address: 'Temple Agneeswarar, Kanjanur, district de Thanjavur, Tamil Nadu, Inde.',
        route: 'Kanjanur est accessible par la route depuis Kumbakonam et Aduthurai. Vérifier les transports avant le départ.',
        imageAlt: 'Temple Agneeswarar de Kanjanur, sanctuaire de Sukran.',
      },
    },
  },
  {
    slug: 'thirunallar',
    planet: 'Sani',
    imagePath: 'assets/images/navagraha/thirunallar.webp',
    imageCredit: {
      author: 'VasuVR',
      license: 'CC BY-SA 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Thirunallar_Dharbaranyeeswarar_Temple_and_Tank.jpg',
    },
    openingHours: { ...unverifiedHours },
    nearbySlugs: ['vaitheeswaran-koil', 'thiruvenkadu', 'keezhaperumpallam'],
    translations: {
      en: {
        name: 'Thirunallar',
        location: 'Thirunallar, Karaikal district, Puducherry',
        description: 'Dharbaranyeswarar Temple is a major pilgrimage destination, with a celebrated Sani shrine and temple tank.',
        history: 'The ancient temple is dedicated to Dharbaranyeswarar and is closely linked with the legend of King Nala.',
        significance: 'Devotees worship Sani, Saturn, seeking strength and relief during challenging astrological periods.',
        address: 'Dharbaranyeswarar Temple, Thirunallar, Karaikal district, Puducherry, India.',
        route: 'Thirunallar is a short road journey from Karaikal. Verify local bus services and temple-day traffic in advance.',
        imageAlt: 'Dharbaranyeswarar Temple and its sacred tank at Thirunallar.',
      },
      ta: {
        name: 'திருநள்ளாறு',
        location: 'திருநள்ளாறு, காரைக்கால் மாவட்டம், புதுச்சேரி',
        description: 'புகழ்பெற்ற சனி சந்நிதியும் கோவில் குளமும் கொண்ட தர்பாரண்யேஸ்வரர் ஆலயம் முக்கிய யாத்திரைத் தலமாகும்.',
        history: 'பழமையான இக்கோவில் தர்பாரண்யேஸ்வரருக்கு அர்ப்பணிக்கப்பட்டது; நள மன்னரின் வரலாற்றுடன் தொடர்புடையது.',
        significance: 'கடினமான ஜோதிடக் காலங்களில் மனவலிமையும் நிவாரணமும் வேண்டி பக்தர்கள் சனி பகவானை வழிபடுகின்றனர்.',
        address: 'தர்பாரண்யேஸ்வரர் கோவில், திருநள்ளாறு, காரைக்கால் மாவட்டம், புதுச்சேரி, இந்தியா.',
        route: 'காரைக்காலிலிருந்து குறுகிய சாலைப் பயணத்தில் திருநள்ளாற்றை அடையலாம்; உள்ளூர் பேருந்து மற்றும் கூட்ட நெரிசலை முன்கூட்டியே சரிபார்க்கவும்.',
        imageAlt: 'திருநள்ளாறு தர்பாரண்யேஸ்வரர் கோவிலும் அதன் புனிதக் குளமும்.',
      },
      hi: {
        name: 'थिरुनल्लार',
        location: 'थिरुनल्लार, कराईकल ज़िला, पुडुचेरी',
        description: 'प्रसिद्ध शनि तीर्थ और मंदिर तालाब वाला धर्मारण्येश्वरर मंदिर प्रमुख तीर्थस्थल है।',
        history: 'प्राचीन मंदिर धर्मारण्येश्वरर को समर्पित है और राजा नल की कथा से जुड़ा है।',
        significance: 'कठिन ज्योतिषीय समय में धैर्य और राहत के लिए भक्त शनि की पूजा करते हैं।',
        address: 'धर्मारण्येश्वरर मंदिर, थिरुनल्लार, कराईकल ज़िला, पुडुचेरी, भारत।',
        route: 'कराईकल से थिरुनल्लार सड़क द्वारा थोड़ी दूरी पर है; स्थानीय बस और मंदिर-दिवस यातायात पहले जाँचें।',
        imageAlt: 'थिरुनल्लार का धर्मारण्येश्वरर मंदिर और उसका पवित्र तालाब।',
      },
      fr: {
        name: 'Thirunallar',
        location: 'Thirunallar, district de Karaikal, Puducherry',
        description: 'Le temple Dharbaranyeswarar, avec son sanctuaire de Sani et son bassin, est un important lieu de pèlerinage.',
        history: 'Ce temple ancien est consacré à Dharbaranyeswarar et lié à la légende du roi Nala.',
        significance: 'Les fidèles prient Sani, Saturne, pour trouver force et apaisement pendant les périodes astrologiques difficiles.',
        address: 'Temple Dharbaranyeswarar, Thirunallar, district de Karaikal, Puducherry, Inde.',
        route: 'Thirunallar se trouve à peu de distance par la route de Karaikal. Vérifier bus et circulation les jours de pèlerinage.',
        imageAlt: 'Temple Dharbaranyeswarar et son bassin sacré à Thirunallar.',
      },
    },
  },
  {
    slug: 'thirunageswaram',
    planet: 'Rahu',
    imagePath: 'assets/images/navagraha/thirunageswaram.webp',
    imageCredit: {
      author: 'Ssriram mt',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Thirunageswaram_(11).jpg',
    },
    openingHours: { ...unverifiedHours },
    nearbySlugs: ['suriyanar-kovil', 'alangudi', 'kanjanur'],
    translations: {
      en: {
        name: 'Thirunageswaram',
        location: 'Thirunageswaram, Thanjavur district, Tamil Nadu',
        description: 'The Naganathaswamy temple is famed for its Rahu shrine and the distinctive milk abhishekam ritual.',
        history: 'The historic Shaiva temple is also known as Rahu Sthalam and forms part of the Kumbakonam pilgrimage circuit.',
        significance: 'Rahu is worshipped here; the shrine is especially known for the ritual in which milk is offered to the deity.',
        address: 'Naganathaswamy Temple, Thirunageswaram, Thanjavur district, Tamil Nadu, India.',
        route: 'The temple is close to Kumbakonam and served by local roads. Check current bus and rail connections before travel.',
        imageAlt: 'Naganathaswamy Temple at Thirunageswaram, the Rahu shrine.',
      },
      ta: {
        name: 'திருநாகேஸ்வரம்',
        location: 'திருநாகேஸ்வரம், தஞ்சாவூர் மாவட்டம், தமிழ்நாடு',
        description: 'ராகு சந்நிதிக்கும் தனித்துவமான பால் அபிஷேகத்திற்கும் நாகநாதசுவாமி கோவில் புகழ்பெற்றது.',
        history: 'ராகு ஸ்தலம் என்றும் அழைக்கப்படும் இப்பழமையான சிவாலயம் கும்பகோணம் யாத்திரைத் தொடரில் இடம்பெறுகிறது.',
        significance: 'ராகு பகவான் இங்கு வழிபடப்படுகிறார்; பால் அபிஷேக மரபு இத்தலத்தின் தனிச்சிறப்பு.',
        address: 'நாகநாதசுவாமி கோவில், திருநாகேஸ்வரம், தஞ்சாவூர் மாவட்டம், தமிழ்நாடு, இந்தியா.',
        route: 'கும்பகோணத்திற்கு அருகில் உள்ள இக்கோவிலை உள்ளூர் சாலை வழியாக அடையலாம்; பேருந்து, ரயில் இணைப்புகளைச் சரிபார்க்கவும்.',
        imageAlt: 'ராகு தலமான திருநாகேஸ்வரம் நாகநாதசுவாமி கோவில்.',
      },
      hi: {
        name: 'थिरुनागेश्वरम',
        location: 'थिरुनागेश्वरम, तंजावुर ज़िला, तमिलनाडु',
        description: 'नागनाथस्वामी मंदिर राहु तीर्थ और विशिष्ट दूध अभिषेक अनुष्ठान के लिए प्रसिद्ध है।',
        history: 'राहु स्थलम के नाम से भी जाना जाने वाला यह प्राचीन शिव मंदिर कुंभकोणम तीर्थ मार्ग का हिस्सा है।',
        significance: 'यहाँ राहु की पूजा होती है; देवता को दूध अर्पित करने की परंपरा विशेष रूप से प्रसिद्ध है।',
        address: 'नागनाथस्वामी मंदिर, थिरुनागेश्वरम, तंजावुर ज़िला, तमिलनाडु, भारत।',
        route: 'मंदिर कुंभकोणम के पास है और स्थानीय सड़कों से पहुँचा जा सकता है; बस और रेल संपर्क जाँचें।',
        imageAlt: 'राहु तीर्थ थिरुनागेश्वरम का नागनाथस्वामी मंदिर।',
      },
      fr: {
        name: 'Thirunageswaram',
        location: 'Thirunageswaram, district de Thanjavur, Tamil Nadu',
        description: 'Le temple Naganathaswamy est réputé pour son sanctuaire de Rahu et le rituel singulier d’abhishekam au lait.',
        history: 'Également appelé Rahu Sthalam, ce temple shivaïte historique fait partie du circuit de Kumbakonam.',
        significance: 'Rahu y est vénéré; l’offrande rituelle de lait à la divinité est particulièrement connue.',
        address: 'Temple Naganathaswamy, Thirunageswaram, district de Thanjavur, Tamil Nadu, Inde.',
        route: 'Le temple est proche de Kumbakonam et accessible par les routes locales. Vérifier les liaisons de bus et de train.',
        imageAlt: 'Temple Naganathaswamy de Thirunageswaram, sanctuaire de Rahu.',
      },
    },
  },
  {
    slug: 'keezhaperumpallam',
    planet: 'Ketu',
    imagePath: 'assets/images/navagraha/keezhaperumpallam.webp',
    imageCredit: {
      author: 'Rsmn',
      license: 'CC BY-SA 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kethu_sthal.JPG',
    },
    openingHours: { ...unverifiedHours },
    nearbySlugs: ['vaitheeswaran-koil', 'thiruvenkadu', 'thirunallar'],
    translations: {
      en: {
        name: 'Keezhaperumpallam',
        location: 'Keezhaperumpallam, Mayiladuthurai district, Tamil Nadu',
        description: 'Naganathaswamy Temple is the quiet Ketu sthalam near the coastal pilgrimage towns of Poompuhar and Tharangambadi.',
        history: 'Local Shaiva tradition identifies this Naganathaswamy shrine as the Navagraha temple associated with Ketu.',
        significance: 'Ketu is worshipped here for spiritual insight and release from obstacles.',
        address: 'Naganathaswamy Temple, Keezhaperumpallam, Mayiladuthurai district, Tamil Nadu, India.',
        route: 'Reach the village by local road from Poompuhar or Sirkazhi. Verify transport and access conditions before setting out.',
        imageAlt: 'Naganathaswamy Temple at Keezhaperumpallam, the Ketu shrine.',
      },
      ta: {
        name: 'கீழப்பெரும்பள்ளம்',
        location: 'கீழப்பெரும்பள்ளம், மயிலாடுதுறை மாவட்டம், தமிழ்நாடு',
        description: 'பூம்புகார், தரங்கம்பாடி கடற்கரை யாத்திரைத் தலங்களுக்கு அருகிலுள்ள அமைதியான கேது தலம் நாகநாதசுவாமி கோவில்.',
        history: 'நாகநாதசுவாமி சந்நிதியை கேதுவுக்குரிய நவக்கிரகக் கோவிலாக உள்ளூர் சைவ மரபு அடையாளப்படுத்துகிறது.',
        significance: 'ஆன்மிகத் தெளிவும் தடைகளிலிருந்து விடுதலையும் வேண்டி பக்தர்கள் கேதுவை வழிபடுகின்றனர்.',
        address: 'நாகநாதசுவாமி கோவில், கீழப்பெரும்பள்ளம், மயிலாடுதுறை மாவட்டம், தமிழ்நாடு, இந்தியா.',
        route: 'பூம்புகார் அல்லது சீர்காழியிலிருந்து உள்ளூர் சாலை வழியாகக் கிராமத்தை அடையலாம்; போக்குவரத்தையும் அணுகலையும் உறுதிப்படுத்தவும்.',
        imageAlt: 'கேது தலமான கீழப்பெரும்பள்ளம் நாகநாதசுவாமி கோவில்.',
      },
      hi: {
        name: 'कीझापेरुम्पल्लम',
        location: 'कीझापेरुम्पल्लम, मयिलादुथुरै ज़िला, तमिलनाडु',
        description: 'नागनाथस्वामी मंदिर पूम्पुहार और तरंगमबाड़ी के तटीय तीर्थों के पास स्थित शांत केतु स्थल है।',
        history: 'स्थानीय शैव परंपरा नागनाथस्वामी मंदिर को केतु से जुड़ा नवग्रह मंदिर मानती है।',
        significance: 'भक्त आध्यात्मिक दृष्टि और बाधाओं से मुक्ति के लिए केतु की पूजा करते हैं।',
        address: 'नागनाथस्वामी मंदिर, कीझापेरुम्पल्लम, मयिलादुथुरै ज़िला, तमिलनाडु, भारत।',
        route: 'पूम्पुहार या सीरकाज़ी से स्थानीय सड़क द्वारा गाँव पहुँचा जा सकता है; परिवहन और पहुँच की पुष्टि करें।',
        imageAlt: 'केतु तीर्थ कीझापेरुम्पल्लम का नागनाथस्वामी मंदिर।',
      },
      fr: {
        name: 'Keezhaperumpallam',
        location: 'Keezhaperumpallam, district de Mayiladuthurai, Tamil Nadu',
        description: 'Le temple Naganathaswamy, sanctuaire paisible de Ketu, se trouve près des lieux côtiers de Poompuhar et Tharangambadi.',
        history: 'La tradition shivaïte locale identifie ce sanctuaire Naganathaswamy comme le temple Navagraha associé à Ketu.',
        significance: 'Les fidèles prient Ketu pour la clairvoyance spirituelle et la levée des obstacles.',
        address: 'Temple Naganathaswamy, Keezhaperumpallam, district de Mayiladuthurai, Tamil Nadu, Inde.',
        route: 'Le village est accessible par la route depuis Poompuhar ou Sirkazhi. Vérifier les transports et l’accès avant le départ.',
        imageAlt: 'Temple Naganathaswamy de Keezhaperumpallam, sanctuaire de Ketu.',
      },
    },
  },
];
