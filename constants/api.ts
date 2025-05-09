export const API_ROUTES = {
  CONTACT: '/api/contact',
  ORDER_CONFIRMATION: '/api/bookings',
} as const;

export const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;
