import { Injectable, signal } from '@angular/core';
import { Language } from './data/navagraha-temples';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly currentLanguage = signal<Language>('en');
  readonly language = this.currentLanguage.asReadonly();

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);
  }
}
