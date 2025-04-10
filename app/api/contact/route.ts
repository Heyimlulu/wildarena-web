import { NextResponse } from 'next/server';
import { sendContactFormEmail } from '@/lib/email';
import { verifyReCaptcha } from '@/utils/recaptcha';

export async function POST(request: Request) {
  try {
    const { name, email, bookingNumber, service, message, date, time, period, players, recaptchaToken } = await request.json();

    // Verify reCAPTCHA token first
    const isVerified = await verifyReCaptcha(recaptchaToken);
    if (!isVerified) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    const formattedMessage = `Détails de la réservation:\n\n` +
      `Numéro de réservation: ${bookingNumber}\n` +
      `Service: ${service}\n` +
      `Date: ${date}\n` +
      `Heure / Période: ${time || period || 'Non spécifié'}\n` +
      `Nombre de joueurs: ${players}\n\n` +
      `Message du client:\n${message || 'Aucun message fourni'}`;

    const result = await sendContactFormEmail({
      name,
      email,
      message: formattedMessage,
    });

    if (!result.success) {
      throw new Error('Failed to send email');
    }

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}