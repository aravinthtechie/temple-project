import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Language } from './data/navagraha-temples';
import { LANGUAGE_OPTIONS, UI_LABELS, UiKey } from './i18n';
import { LanguageService } from './language.service';
import { HOME_CONTENT, HomeContent, SITE_NAME } from './data/site-content';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private readonly languageService = inject(LanguageService);
  readonly language = this.languageService.language;
  readonly languages = LANGUAGE_OPTIONS;
  readonly themes = [
    { value: 'temple', label: 'themeTemple' },
    { value: 'forest', label: 'themeForest' },
    { value: 'sunrise', label: 'themeSunrise' },
    { value: 'ocean', label: 'themeOcean' },
    { value: 'night', label: 'themeNight' },
  ] as const;
  readonly theme = signal<(typeof this.themes)[number]['value']>('temple');
  readonly mobileMenuOpen = signal(false);
  readonly siteName = SITE_NAME;

  text(key: UiKey): string {
    return UI_LABELS[this.language()][key];
  }

  homeText(key: 'navPackages' | 'navPariharam' | 'navHeritage' | 'navContact' | 'navNavagraha' | 'tagline'): string {
    const content: HomeContent = HOME_CONTENT[this.language()];
    return content[key];
  }

  setLanguage(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    const option = LANGUAGE_OPTIONS.find((language) => language.value === value);
    if (!option) {
      throw new Error(`Unsupported language: ${value}`);
    }
    this.languageService.setLanguage(option.value);
    document.documentElement.lang = option.value;
  }

  setTheme(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    const option = this.themes.find((theme) => theme.value === value);
    if (!option) {
      throw new Error(`Unsupported theme: ${value}`);
    }
    this.theme.set(option.value);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
