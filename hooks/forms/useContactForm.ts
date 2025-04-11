import { API_ROUTES } from '@/constants/api';
import { useForm } from './useForm';
import { MESSAGES } from '@/constants/messages';
import { VALIDATION } from '@/constants/validation';

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  date: Date | null;
  time: string;
  players: string;
  recaptchaToken: string;
}

export function useContactForm() {
  const validateForm = (values: ContactFormValues) => {
    const errors: Partial<Record<keyof ContactFormValues, string>> = {};

    if (!values.name) {
      errors.name = 'Le nom est requis';
    }

    if (!values.email) {
      errors.email = 'L\'email est requis';
    } else if (!VALIDATION.EMAIL_PATTERN.test(values.email)) {
      errors.email = 'Email invalide';
    }

    if (!values.message) {
      errors.message = 'Le message est requis';
    }

    if (!values.recaptchaToken) {
      errors.recaptchaToken = MESSAGES.ERROR.RECAPTCHA;
    }

    return Object.keys(errors).length ? errors : null;
  };

  const form = useForm<ContactFormValues>({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      date: null,
      time: '',
      players: '1',
      recaptchaToken: ''
    },
    validate: validateForm,
    onSubmit: async (values) => {
      const response = await fetch(API_ROUTES.CONTACT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(MESSAGES.ERROR.CONTACT_FORM);
      }
    }
  });

  return {
    ...form,
    isLoading: form.isSubmitting,
    error: form.submitError,
    success: form.submitSuccess
  };
}
