'use client';

import { useEffect, useCallback } from 'react';
import Script from 'next/script';

interface ReCaptchaProps {
  onVerify: (token: string) => void;
}

declare global {
  interface Window {
    grecaptcha: any;
    onReCaptchaLoad: () => void;
  }
}

export default function ReCaptcha({ onVerify }: ReCaptchaProps) {
  const handleReCaptchaVerify = useCallback(
    (token: string) => {
      onVerify(token);
    },
    [onVerify]
  );

  useEffect(() => {
    // Initialize reCAPTCHA when component mounts
    window.onReCaptchaLoad = () => {
      window.grecaptcha.ready(() => {
        window.grecaptcha.render('recaptcha-container', {
          sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          callback: handleReCaptchaVerify,
        });
      });
    };

    return () => {
      // Cleanup
      window.onReCaptchaLoad = () => {};
    };
  }, [handleReCaptchaVerify]);

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?onload=onReCaptchaLoad&render=explicit`}
        strategy="lazyOnload"
      />
      <div id="recaptcha-container" className="mt-4" />
    </>
  );
}
