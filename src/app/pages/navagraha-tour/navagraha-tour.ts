import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookingEnquiryDialogComponent } from '../../components/booking-enquiry-dialog/booking-enquiry-dialog';
import { Language, NAVAGRAHA_TEMPLES, NavagrahaTemple } from '../../data/navagraha-temples';
import { HOME_CONTENT, NAVAGRAHA_TOUR } from '../../data/site-content';
import { LanguageService } from '../../language.service';
import { UI_LABELS } from '../../i18n';

@Component({
  selector: 'app-navagraha-tour',
  imports: [RouterLink, BookingEnquiryDialogComponent],
  templateUrl: './navagraha-tour.html',
})
export class NavagrahaTourComponent {
  private readonly languageService = inject(LanguageService);
  readonly language = this.languageService.language;
  readonly bookingOpen = signal(false);

  content(): (typeof NAVAGRAHA_TOUR)[Language] {
    return NAVAGRAHA_TOUR[this.language()];
  }

  temple(slug: string): NavagrahaTemple {
    const temple = NAVAGRAHA_TEMPLES.find((item) => item.slug === slug);
    if (!temple) {
      throw new Error(`Unknown Navagraha tour stop: ${slug}`);
    }
    return temple;
  }

  templeName(slug: string): string {
    return this.temple(slug).translations[this.language()].name;
  }

  homeLabel(key: 'backToGallery' | 'journeyDate' | 'journeyTravelers' | 'journeyOrigin' | 'journeyTemples'): string {
    return key === 'backToGallery'
      ? UI_LABELS[this.language()].backToGallery
      : HOME_CONTENT[this.language()][key];
  }
}
