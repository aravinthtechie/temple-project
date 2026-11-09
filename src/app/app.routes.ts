import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then((module) => module.HomeComponent) },
  { path: 'tours/navagraha', loadComponent: () => import('./pages/navagraha-tour/navagraha-tour').then((module) => module.NavagrahaTourComponent) },
  { path: 'navagraha', loadComponent: () => import('./pages/navagraha-gallery/navagraha-gallery').then((module) => module.NavagrahaGalleryComponent) },
  { path: 'navagraha/:slug', loadComponent: () => import('./pages/temple-details/temple-details').then((module) => module.TempleDetailsComponent) },
  { path: '**', redirectTo: 'navagraha' },
];
