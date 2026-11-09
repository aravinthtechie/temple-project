import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Language, NavagrahaTemple, PLANET_NAMES } from '../../data/navagraha-temples';
import { FALLBACK_IMAGE_PATH, useTempleImageFallback } from '../../image-fallback';
import { UI_LABELS } from '../../i18n';

@Component({
  selector: 'app-temple-card',
  imports: [RouterLink],
  templateUrl: './temple-card.html',
  styleUrl: './temple-card.scss',
})
export class TempleCardComponent {
  readonly temple = input.required<NavagrahaTemple>();
  readonly language = input.required<Language>();
  readonly content = computed(() => this.temple().translations[this.language()]);
  readonly planetName = computed(() => PLANET_NAMES[this.temple().planet][this.language()]);

  label(key: keyof (typeof UI_LABELS)['en']): string {
    return UI_LABELS[this.language()][key];
  }

  onImageError(event: Event): void {
    useTempleImageFallback(event, this.content().name, this.label('photoUnavailable'));
  }

  readonly fallbackImagePath = FALLBACK_IMAGE_PATH;
}
