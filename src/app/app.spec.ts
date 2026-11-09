import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('offers selectable, distinct color themes', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const select = fixture.nativeElement.querySelector('.theme-picker select') as HTMLSelectElement;
    expect(select.options.length).toBe(5);

    select.value = 'forest';
    select.dispatchEvent(new Event('change'));

    expect(fixture.componentInstance.theme()).toBe('forest');
  });
});
