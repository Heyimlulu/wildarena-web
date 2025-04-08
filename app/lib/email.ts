import { render } from '@react-email/render';
import { BookingConfirmationEmail } from '../emails/BookingConfirmation';
import { ContactFormEmail } from '../emails/ContactForm';
import { sendEmail, type EmailTemplate } from './nodemailer';

export type BookingEmailData = {
  customerName: string;
  customerEmail: string;
  bookingNumber: string;
  bookingDetails: {
    service: string;
    date: string;
    time: string;
    players: number;
    price: string;
  };
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export async function sendBookingConfirmationEmail(data: BookingEmailData) {
  const html = await render(BookingConfirmationEmail(data));

  const template: EmailTemplate = {
    to: data.customerEmail,
    subject: `Wild Arena - Confirmation de réservation #${data.bookingNumber}`,
    html,
  };

  return sendEmail(template);
}

export async function sendContactFormEmail(data: ContactFormData) {
  const html = await render(ContactFormEmail(data));

  const template: EmailTemplate = {
    to: process.env.NEXT_EMAIL_USER!, // Send to admin email
    subject: `Wild Arena - Nouvelle réservation de ${data.name}`,
    html,
  };

  return sendEmail(template);
}
