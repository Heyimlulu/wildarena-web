import { useForm } from './useForm';
import { MESSAGES } from '@/constants/messages';
import { VALIDATION } from '@/constants/validation';
import { calculateFlexiblePrice } from '@/services/pricing/calculator';
import { PricingCardProps } from '@/components/features/pricing/PricingOptions';
import { submitBooking } from '@/services/api/bookings';

interface BookingFormValues {
  name: string;
  email: string;
  message: string;
  date: Date | null;
  time: string;
  period: string;
  players: string;
  package: string;
  type: 'individual' | 'group';
  price: number;
  recaptchaToken: string;
}

export function useBookingForm() {
  const validateForm = (values: BookingFormValues) => {
    const errors: Partial<Record<keyof BookingFormValues, string>> = {};

    if (!values.name) {
      errors.name = 'Le nom est requis';
    }

    if (!values.email) {
      errors.email = 'L\'email est requis';
    } else if (!VALIDATION.EMAIL_PATTERN.test(values.email)) {
      errors.email = 'Email invalide';
    }

    if (!values.date) {
      errors.date = 'La date est requise';
    }

    if (!values.time && !values.period) {
      errors.time = 'Ce champ est requis';
    }

    if (!values.players || parseInt(values.players) < 1) {
      errors.players = 'Le nombre de joueurs doit être supérieur à 0';
    }

    if (!values.recaptchaToken) {
      errors.recaptchaToken = MESSAGES.ERROR.RECAPTCHA;
    }

    return Object.keys(errors).length ? errors : null;
  };

  const form = useForm<BookingFormValues>({
    initialValues: {
      name: '',
      email: '',
      message: '',
      date: null,
      time: '',
      period: '',
      players: '1',
      package: '',
      type: 'individual',
      price: 0,
      recaptchaToken: ''
    },
    validate: validateForm,
    onSubmit: async (values) => {
      const bookingNumber = Date.now().toString();
      const calculatedPrice = calculateFlexiblePrice(
        { name: values.package, price: values.price } as PricingCardProps['option'],
        values.players
      );

      await submitBooking({
        customerName: values.name,
        customerEmail: values.email,
        bookingNumber,
        service: values.package,
        date: values.date?.toLocaleDateString('fr-FR') || '',
        time: values.time,
        period: values.period,
        players: parseInt(values.players),
        price: `${calculatedPrice} CHF`,
        message: values.message,
        recaptchaToken: values.recaptchaToken
      });
    }
  });

  return {
    ...form,
    isLoading: form.isSubmitting,
    error: form.submitError,
    success: form.submitSuccess
  };
}
