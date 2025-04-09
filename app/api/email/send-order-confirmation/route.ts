import { NextResponse } from 'next/server';
import { sendBookingConfirmationEmail } from '@/app/lib/email';
import { UNIT_PRICE } from '@/app/constants';

export async function POST(request: Request) {
  try {
    const { customerName, customerEmail, bookingNumber, service, date, time, period, players, price } = await request.json();

    if (!customerName || !customerEmail || !service || !date || !time || !players) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const result = await sendBookingConfirmationEmail({
      customerName,
      customerEmail,
      bookingNumber: bookingNumber,
      bookingDetails: {
        service,
        date,
        time,
        period,
        players,
        price: price || `${players * UNIT_PRICE} CHF`, // Default price calculation
      },
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
