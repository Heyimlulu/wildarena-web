export const AVAILABLE_TIMES = [
  '10:00', '11:00', '12:00', '13:00', '14:00',
  '15:00', '16:00', '17:00', '18:00', '19:00'
] as const;

export const AVAILABLE_PERIODS = [
  'Matin (10:00 - 14:00)',
  'Après-midi (14:00 - 20:00)'
] as const;

export type AvailableTime = typeof AVAILABLE_TIMES[number];
export type AvailablePeriod = typeof AVAILABLE_PERIODS[number];
