import { Component, computed, input } from '@angular/core';
import { Language, NavagrahaTemple, TempleImageCredit, TemplePhotoAsset } from '../../data/navagraha-temples';
import { useTempleImageFallback } from '../../image-fallback';
import { UI_LABELS } from '../../i18n';

@Component({
  selector: 'app-temple-photo',
  templateUrl: './temple-photo.html',
  styleUrl: './temple-photo.scss',
})
export class TemplePhotoComponent {
  readonly temple = input.required<NavagrahaTemple>();
  readonly language = input.required<Language>();
  readonly photo = input<TemplePhotoAsset>();
  readonly content = computed(() => this.temple().translations[this.language()]);
  readonly imagePath = computed(() => this.photo()?.imagePath ?? this.temple().imagePath);
  readonly imageCredit = computed<TempleImageCredit | undefined>(() => {
    const photo = this.photo();
    return photo ? photo.imageCredit : this.temple().imageCredit;
  });
  readonly imageAlt = computed(() => this.photo()?.alt[this.language()] ?? this.content().imageAlt);
  readonly labels = computed(() => UI_LABELS[this.language()]);

  onImageError(event: Event): void {
    useTempleImageFallback(event, this.content().name, this.labels().photoUnavailable);
  }
}
