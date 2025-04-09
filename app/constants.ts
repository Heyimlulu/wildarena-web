// Analytics
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// API Routes
export const API_ROUTES = {
  CONTACT: '/api/contact',
  ORDER_CONFIRMATION: '/api/email/send-order-confirmation',
} as const;

// Common validation
export const VALIDATION = {
  EMAIL_PATTERN: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  PHONE_PATTERN: /^\+?[1-9]\d{1,14}$/,
} as const;

// HTTP Status codes
export const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// Unit price for group bookings
export const UNIT_PRICE = 35;
