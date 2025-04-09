interface ReCaptchaResponse {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;
  error_codes?: string[];
}

export async function verifyReCaptcha(token: string, expectedAction?: string): Promise<boolean> {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.NEXT_SECRET_RECAPTCHA_KEY}&response=${token}`,
    });

    const data: ReCaptchaResponse = await response.json();
    
    // Check if verification was successful
    if (!data.success) {
      console.error('reCAPTCHA verification failed:', data.error_codes);
      return false;
    }

    // For v3, verify the score is above threshold (0.5 is recommended by Google)
    if (data.score < 0.5) {
      console.error('reCAPTCHA score too low:', data.score);
      return false;
    }

    // If an expected action was provided, verify it matches
    if (expectedAction && data.action !== expectedAction) {
      console.error('reCAPTCHA action mismatch:', { expected: expectedAction, received: data.action });
      return false;
    }

    return true;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}
