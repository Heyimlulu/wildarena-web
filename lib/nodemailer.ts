import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_EMAIL_USER,
    pass: process.env.NEXT_EMAIL_PASSWORD,
  },
});

export type EmailTemplate = {
  to: string;
  subject: string;
  html: string;
};

export async function sendEmail(template: EmailTemplate) {
  const mailOptions = {
    from: process.env.NEXT_EMAIL_USER,
    ...template,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}
