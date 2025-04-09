const ReCaptchaPrivacy = () => {
  return (
    <p className="text-sm text-gray-500 mt-2">
      This site is protected by reCAPTCHA and the Google{' '}
      <a 
        href="https://policies.google.com/privacy"
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>{' '}
      and{' '}
      <a 
        href="https://policies.google.com/terms"
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Terms of Service
      </a>{' '}
      apply.
    </p>
  );
};

export default ReCaptchaPrivacy;