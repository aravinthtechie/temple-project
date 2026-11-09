import { NAVAGRAHA_TEMPLES } from './navagraha-temples';
import { LANGUAGE_OPTIONS } from '../i18n';

describe('Navagraha temple data', () => {
  it('contains nine distinct, credited temple photographs', () => {
    expect(NAVAGRAHA_TEMPLES).toHaveLength(9);
    expect(new Set(NAVAGRAHA_TEMPLES.map((temple) => temple.slug)).size).toBe(9);
    expect(new Set(NAVAGRAHA_TEMPLES.map((temple) => temple.imagePath)).size).toBe(9);

    for (const temple of NAVAGRAHA_TEMPLES) {
      expect(temple.imagePath).toMatch(/^assets\/images\/navagraha\/.+\.webp$/);
      expect(temple.imageCredit.author).not.toBe('');
      expect(temple.imageCredit.sourceUrl).toContain('commons.wikimedia.org');
    }
  });

  it('provides names and descriptions in all four supported languages', () => {
    for (const temple of NAVAGRAHA_TEMPLES) {
      for (const language of LANGUAGE_OPTIONS) {
        const content = temple.translations[language.value];
        expect(content.name).not.toBe('');
        expect(content.description).not.toBe('');
        expect(content.history).not.toBe('');
        expect(content.significance).not.toBe('');
        expect(content.imageAlt).not.toBe('');
      }
    }
  });
});
