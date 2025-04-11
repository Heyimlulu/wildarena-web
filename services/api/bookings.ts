import { API_ROUTES } from '@/constants/api';

export interface BookingData {
  customerName: string;
  customerEmail: string;
  bookingNumber: string;
  service: string;
  date: string;
  time: string;
  period: string;
  players: number;
  price: string;
  message?: string;
  recaptchaToken: string;
}

export async function submitBooking(data: BookingData) {
  // Send booking confirmation email
  const emailResponse = await fetch(API_ROUTES.ORDER_CONFIRMATION, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      bookingNumber: data.bookingNumber,
      service: data.service,
      date: data.date,
      time: data.time,
      period: data.period,
      players: data.players,
      price: data.price
    }),
  });

  if (!emailResponse.ok) {
    throw new Error('Failed to send booking confirmation');
  }

  // Send notification to admin
  const contactResponse = await fetch(API_ROUTES.CONTACT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.customerName,
      email: data.customerEmail,
      bookingNumber: data.bookingNumber,
      service: data.service,
      date: data.date,
      time: data.time,
      period: data.period,
      players: data.players,
      message: data.message,
      recaptchaToken: data.recaptchaToken
    }),
  });

  if (!contactResponse.ok) {
    throw new Error('Failed to send admin notification');
  }
}
