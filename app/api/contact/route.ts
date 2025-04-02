import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, date, time, players } = await request.json();

    const formattedDate = new Date(date).toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const emailBody = `
Nouvelle demande de réservation:

Nom, Prénom: ${name}
Email: ${email}
Date: ${formattedDate}
Heure: ${time}
Nombre de joueurs: ${players}
${message ? `\nMessage: ${message}` : ''}
    `;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_EMAIL_USER,
        pass: process.env.NEXT_EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.NEXT_EMAIL_USER,
      subject: `Réservation - ${subject}`,
      text: emailBody,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}