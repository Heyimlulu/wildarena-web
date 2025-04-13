interface NewsletterSubscribeResponse {
  success: boolean;
  message: string;
}

export async function subscribeToNewsletter(email: string): Promise<NewsletterSubscribeResponse> {
  try {
    const response = await fetch('/api/newsletter/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      message: 'Une erreur est survenue lors de l\'inscription à la newsletter.',
    };
  }
}
