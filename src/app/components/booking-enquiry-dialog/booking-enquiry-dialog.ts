import { Component, HostListener, input, OnInit, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Language, NavagrahaTemple, PLANET_NAMES } from '../../data/navagraha-temples';
import { UI_LABELS, UiKey } from '../../i18n';
import { HOME_CONTENT, SITE_CONTACT } from '../../data/site-content';

@Component({
  selector: 'app-booking-enquiry-dialog',
  imports: [FormsModule],
  templateUrl: './booking-enquiry-dialog.html',
  styleUrl: './booking-enquiry-dialog.scss',
})
export class BookingEnquiryDialogComponent implements OnInit {
  readonly temple = input<NavagrahaTemple | null>(null);
  readonly language = input.required<Language>();
  readonly tripTitle = input('');
  readonly tripDetails = input('');
  readonly contact = SITE_CONTACT;
  readonly dismiss = output<void>();
  readonly enquiry = {
    name: '',
    email: '',
    phone: '',
    recipient: '',
    visitDate: '',
    origin: '',
    travelers: '2',
    message: '',
  };

  ngOnInit(): void {
    this.enquiry.message = this.tripDetails();
  }

  text(key: UiKey): string {
    return UI_LABELS[this.language()][key];
  }

  contactCallLabel(): string {
    return HOME_CONTENT[this.language()].contactCall;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.dismiss.emit();
  }

  closeFromBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.dismiss.emit();
    }
  }

  sendEnquiry(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    const temple = this.temple();
    const destination = temple?.translations[this.language()].name ?? this.tripTitle();
    const subject = `Cauvery Delta travel enquiry: ${destination}`;
    const body = [
      'Hello,',
      '',
      temple
        ? `I would like to enquire about visiting ${destination} (${PLANET_NAMES[temple.planet].en}).`
        : `I would like to enquire about: ${destination}.`,
      `Name: ${this.enquiry.name}`,
      `My email: ${this.enquiry.email}`,
      `Mobile number: ${this.enquiry.phone || 'Not provided'}`,
      `Planned visit: ${this.enquiry.visitDate || 'To be confirmed'}`,
      ...(this.contact.phone ? [`Travel provider phone: ${this.contact.phone}`] : []),
      ...(temple ? [] : [
        `Travelling from: ${this.enquiry.origin || 'To be confirmed'}`,
        `Travellers: ${this.enquiry.travelers}`,
      ]),
      '',
      this.enquiry.message,
    ].join('\n');

    const recipient = encodeURIComponent(this.enquiry.recipient).replace('%40', '@');
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    this.dismiss.emit();
    form.resetForm();
  }
}
