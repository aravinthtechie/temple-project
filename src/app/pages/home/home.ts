import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../language.service';
import { HomeContent, HOME_CONTENT, PARIHARAM_ITEMS, SITE_CONTACT, SITE_NAME, TOUR_PACKAGES } from '../../data/site-content';
import { NAVAGRAHA_TEMPLES, NavagrahaTemple, TemplePhotoAsset } from '../../data/navagraha-temples';
import { BookingEnquiryDialogComponent } from '../../components/booking-enquiry-dialog/booking-enquiry-dialog';
import { TemplePhotoComponent } from '../../components/temple-photo/temple-photo';
import { UiKey, UI_LABELS } from '../../i18n';
import { useTempleImageFallback } from '../../image-fallback';

@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterLink, BookingEnquiryDialogComponent, TemplePhotoComponent],
  templateUrl: './home.html',
})
export class HomeComponent {
  private readonly languageService = inject(LanguageService);
  readonly language = this.languageService.language;
  readonly siteName = SITE_NAME;
  readonly siteContact = SITE_CONTACT;
  readonly featuredTemple = this.getFeaturedTemple();
  readonly featuredPhoto = this.getFeaturedPhoto();
  readonly tours = TOUR_PACKAGES;
  readonly pariharamItems = PARIHARAM_ITEMS;
  readonly bookingOpen = signal(false);
  readonly selectedTrip = signal('');
  readonly tripDetails = signal('');

  copy(): HomeContent {
    return HOME_CONTENT[this.language()];
  }

  label(key: UiKey): string {
    return UI_LABELS[this.language()][key];
  }

  openEnquiry(title: string, details = ''): void {
    this.selectedTrip.set(title);
    this.tripDetails.set(details);
    this.bookingOpen.set(true);
  }

  submitTripPlan(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const values = form.value as {
      origin: string;
      visitDate: string;
      travelers: string;
      temples: string;
    };
    const labels = this.copy();
    this.openEnquiry(labels.planTrip, [
      `${labels.journeyOrigin}: ${values.origin}`,
      `${labels.journeyDate}: ${values.visitDate}`,
      `${labels.journeyTravelers}: ${values.travelers}`,
      `${labels.journeyTemples}: ${values.temples}`,
    ].join('\n'));
  }

  onFeaturedPhotoError(event: Event): void {
    useTempleImageFallback(
      event,
      this.featuredTemple.translations[this.language()].name,
      this.label('photoUnavailable'),
    );
  }

  private getFeaturedTemple(): NavagrahaTemple {
    const temple = NAVAGRAHA_TEMPLES.find((item) => item.slug === 'vaitheeswaran-koil');
    if (!temple) {
      throw new Error('Vaitheeswaran Koil is missing from the Navagraha temple data.');
    }
    return temple;
  }

  private getFeaturedPhoto(): TemplePhotoAsset {
    const photo = this.featuredTemple.featuredPhoto;
    if (!photo) {
      throw new Error('The featured Vaitheeswaran Koil gopuram photo is missing from the temple data.');
    }
    return photo;
  }
}
