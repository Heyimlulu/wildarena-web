import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Adresse e-mail invalide.' },
        { status: 400 }
      );
    }

    // TODO: Add your newsletter service integration here
    // Example: Mailchimp, SendGrid, etc.
    // For now, we'll just simulate a successful subscription
    
    return NextResponse.json({
      success: true,
      message: 'Inscription à la newsletter réussie !',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Une erreur est survenue.' },
      { status: 500 }
    );
  }
}
