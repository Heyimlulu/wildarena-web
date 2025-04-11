import { CONFIG } from '@/constants/config';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  recaptchaToken: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to submit contact form');
  }

  return response.json();
};
