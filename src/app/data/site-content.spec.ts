import { HOME_CONTENT, NAVAGRAHA_TOUR, SITE_CONTACT, TOUR_PACKAGES } from './site-content';
import { Language, NAVAGRAHA_TEMPLES } from './navagraha-temples';
import { UI_LABELS } from '../i18n';

const LANGUAGES: Language[] = ['en', 'ta', 'hi', 'fr'];

describe('Temple Buddy travel content', () => {
  it('provides all six tour packages and core landing-page copy in each language', () => {
    expect(TOUR_PACKAGES).toHaveLength(6);

    for (const language of LANGUAGES) {
      expect(HOME_CONTENT[language].tagline).not.toBe('');
      expect(HOME_CONTENT[language].heroDescription).not.toBe('');
      expect(HOME_CONTENT[language].pariharamDescription).not.toBe('');
      expect(HOME_CONTENT[language].faithDisclaimer).not.toBe('');
      expect(HOME_CONTENT[language].steps).toHaveLength(4);
      for (const tour of TOUR_PACKAGES) {
        expect(tour.title[language]).not.toBe('');
      }
    }
  });

  it('covers nine distinct Navagraha stops and three days in every itinerary', () => {
    for (const language of LANGUAGES) {
      const itinerary = NAVAGRAHA_TOUR[language];
      const stops = itinerary.days.flatMap((day) => day.templeSlugs);

      expect(itinerary.days).toHaveLength(3);
      expect(stops).toHaveLength(9);
      expect(new Set(stops).size).toBe(9);
      expect(itinerary.quoteDisclaimer).not.toBe('');
      expect(
        itinerary.questions.some((item) =>
          item.answer.includes('not been supplied')
          || item.answer.includes('இன்னும் வழங்கப்படவில்லை')
          || item.answer.includes('अभी उपलब्ध नहीं')
          || item.answer.includes('n’a encore été fournie'),
        ),
      ).toBe(true);
    }
  });

  it('keeps the featured temple, contact placeholders and enquiry action available', () => {
    const featuredTemple = NAVAGRAHA_TEMPLES.find((temple) => temple.slug === 'vaitheeswaran-koil');
    expect(featuredTemple?.imagePath).toBe('assets/images/navagraha/vaitheeswaran-koil.webp');
    expect(featuredTemple?.featuredPhoto?.imagePath)
      .toBe('assets/images/navagraha/vaitheeswaran-koil-gopuram.webp');
    expect(featuredTemple?.featuredPhoto?.imageCredit).toBeUndefined();
    for (const language of LANGUAGES) {
      expect(featuredTemple?.featuredPhoto?.alt[language]).not.toBe('');
    }
    expect(SITE_CONTACT.phone).toBe('8489462424');
    expect(SITE_CONTACT.officeAddress).toBe('Vaitheeswarankoil');
    expect(HOME_CONTENT.en.emailPlaceholder).not.toBe('');
    expect(HOME_CONTENT.en.pendingPrice).not.toBe('');
    expect(HOME_CONTENT.en.reviewPlaceholder).not.toBe('');
    expect(UI_LABELS.en.sendEnquiry).toBe('Submit enquiry');
  });
});
