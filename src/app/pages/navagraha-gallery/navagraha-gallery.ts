import { Component, inject } from '@angular/core';
import { LanguageService } from '../../language.service';
import { UI_LABELS } from '../../i18n';
import { UiKey } from '../../i18n';
import { NAVAGRAHA_TEMPLES } from '../../data/navagraha-temples';
import { TempleCardComponent } from '../../components/temple-card/temple-card';

@Component({
  selector: 'app-navagraha-gallery',
  imports: [TempleCardComponent],
  templateUrl: './navagraha-gallery.html',
  styleUrl: './navagraha-gallery.scss',
})
export class NavagrahaGalleryComponent {
  private readonly languageService = inject(LanguageService);
  readonly language = this.languageService.language;
  readonly temples = NAVAGRAHA_TEMPLES;

  text(key: UiKey): string {
    return UI_LABELS[this.language()][key];
  }
}
