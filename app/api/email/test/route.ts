import { NextResponse } from 'next/server';
import { sendBookingConfirmationEmail, sendContactFormEmail } from '@/app/lib/email';

export async function GET() {
  try {
    // Test booking confirmation email
    const bookingResult = await sendBookingConfirmationEmail({
      customerName: "Test User",
      customerEmail: process.env.NEXT_EMAIL_USER!,
      bookingNumber: "TEST-123",
      bookingDetails: {
        service: "Arena Standard",
        date: "8 Avril 2025",
        time: "14:00",
        players: 4,
        price: "100 CHF"
      }
    });

    // Test contact form email
    const contactResult = await sendContactFormEmail({
      name: "Test Contact",
      email: "test@example.com",
      message: "This is a test message from the contact form."
    });

    if (!bookingResult.success || !contactResult.success) {
      throw new Error('One or more test emails failed to send');
    }

    return NextResponse.json({
      message: 'Test emails sent successfully',
      bookingResult,
      contactResult
    }, { status: 200 });

  } catch (error) {
    console.error("Error sending test emails:", error);
    return NextResponse.json(
      { error: 'Failed to send test emails' },
      { status: 500 }
    );
  }
}
