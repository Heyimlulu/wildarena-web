'use client';

import { useEffect, useCallback } from 'react';
import Script from 'next/script';

interface ReCaptchaProps {
  onVerify: (token: string) => void;
  action?: string;
}

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function ReCaptcha({ onVerify, action = 'submit' }: ReCaptchaProps) {
  const executeReCaptcha = useCallback(async () => {
    try {
      const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
        action: action
      });
      onVerify(token);
    } catch (error) {
      console.error('reCAPTCHA error:', error);
    }
  }, [onVerify, action]);

  useEffect(() => {
    // Load reCAPTCHA when component mounts
    if (typeof window !== 'undefined') {
      window.grecaptcha?.ready(executeReCaptcha);
    }

    // Re-execute reCAPTCHA every 2 minutes as tokens expire
    const intervalId = setInterval(() => {
      if (typeof window !== 'undefined') {
        window.grecaptcha?.ready(executeReCaptcha);
      }
    }, 120000);

    return () => {
      clearInterval(intervalId);
    };
  }, [executeReCaptcha]);

  return (
    <Script
      src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
      strategy="lazyOnload"
    />
  );
}
