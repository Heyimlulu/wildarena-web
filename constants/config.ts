export const CONFIG = {
  SITE_NAME: 'Wild Arena',
  SITE_DESCRIPTION: 'Expérience de laser game en pleine nature',
  CONTACT_EMAIL: process.env.NEXT_EMAIL_USER,
  MAPBOX_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
  GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
} as const;
