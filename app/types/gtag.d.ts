/* eslint-disable @typescript-eslint/no-explicit-any */
interface Window {
  gtag: (
    command: 'js' | 'config' | 'consent',
    target: Date | string,
    config?: {
      [key: string]: any;
    }
  ) => void;
  dataLayer: any[];
}
