import { NextResponse } from 'next/server';
import { sendContactFormEmail } from '@/app/lib/email';
import { verifyReCaptcha } from '@/utils/recaptcha';

export async function POST(request: Request) {
  try {
    const { name, email, message, date, time, period, players, recaptchaToken } = await request.json();

    // Verify reCAPTCHA token first
    const isVerified = await verifyReCaptcha(recaptchaToken);
    if (!isVerified) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    const formattedMessage = `
      Détails de la réservation:

      Date: ${date}
      Heure / Période: ${time || period}
      Nombre de joueurs: ${players}

      Message du client:
      ${message || 'Aucun message fourni'}
    `;

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