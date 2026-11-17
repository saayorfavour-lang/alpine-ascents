
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Sends a contact form message directly to your email.
 */
export async function sendEmail({ name, email, subject, message }) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('EmailJS configuration is missing.');
  }

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        reply_to: email,
        subject,
        message
      },
      PUBLIC_KEY
    );

    return response;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Unable to send your message. Please try again.');
  }

  
}
