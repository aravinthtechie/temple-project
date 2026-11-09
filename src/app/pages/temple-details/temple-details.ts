import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Language, NAVAGRAHA_TEMPLES, NavagrahaTemple, PLANET_NAMES } from '../../data/navagraha-temples';
import { LanguageService } from '../../language.service';
import { UI_LABELS, UiKey } from '../../i18n';
import { TempleCardComponent } from '../../components/temple-card/temple-card';
import { TemplePhotoComponent } from '../../components/temple-photo/temple-photo';
import { BookingEnquiryDialogComponent } from '../../components/booking-enquiry-dialog/booking-enquiry-dialog';

@Component({
  selector: 'app-temple-details',
  imports: [RouterLink, TempleCardComponent, TemplePhotoComponent, BookingEnquiryDialogComponent],
  templateUrl: './temple-details.html',
  styleUrl: './temple-details.scss',
})
export class TempleDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly languageService = inject(LanguageService);
  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: this.route.snapshot.paramMap.get('slug') ?? '' },
  );

  readonly language = this.languageService.language;
  readonly temple = computed(() => NAVAGRAHA_TEMPLES.find((item) => item.slug === this.slug()));
  readonly nearbyTemples = computed(() => {
    const temple = this.temple();
    return temple
      ? temple.nearbySlugs
          .map((slug) => NAVAGRAHA_TEMPLES.find((item) => item.slug === slug))
          .filter((item): item is NavagrahaTemple => item !== undefined)
      : [];
  });
  readonly bookingOpen = signal(false);

  text(key: UiKey): string {
    return UI_LABELS[this.language()][key];
  }

  planetName(temple: NavagrahaTemple, language: Language): string {
    return PLANET_NAMES[temple.planet][language];
  }

}
