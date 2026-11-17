import { useState } from 'react';
import contact from '../data/contact.json';
import { sendEmail } from '../utils/email.js';
import './Contact.css';




const SUBJECTS = [
  'General question',
  'Feedback on the website',
  'Mountaineering information',
  'Report a problem'
];

const EMPTY = {
  name: '',
  email: '',
  subject: '',
  message: ''
};


/** Returns an object of error messages (empty object = form is valid). */
function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name (at least 2 characters).';
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!values.subject) errors.subject = 'Please choose a subject.';
  if (values.message.trim().length < 10) errors.message = 'Your message must be at least 10 characters.';
  if (values.message.length > 1000) errors.message = 'Your message must be 1000 characters or fewer.';
  return errors;
}

function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);

const handleChange = (event) => {
  const { name, value } = event.target;

  setValues((prev) => ({
    ...prev,
    [name]: value
  }));

  if (errors[name]) {
    setErrors((prev) => ({
      ...prev,
      [name]: ''
    }));
  }

  setStatus({ type: '', text: '' });
};

const handleSubmit = async (event) => {
  event.preventDefault();

  if (sending) return;

  const found = validate(values);
  setErrors(found);

  if (Object.keys(found).length) {
    setStatus({
      type: 'error',
      text: 'Please correct the highlighted fields.'
    });
    return;
  }

       setSending(true);

    try {
      await sendEmail(values);

      setStatus({
        type: 'success',
        text: 'Thank you! Your message has been sent successfully.'
      });

      setValues(EMPTY);
      setErrors({});

    } catch (error) {
      setStatus({
        type: 'error',
        text: error.message || 'Failed to send your message.'
      });

    } finally {
      setSending(false);
    }
  };

  const field = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': `${name}-error`
  });

  return (
    <section className="contact-page">
      <div className="contact-hero">
        <p className="contact-eyebrow">Get in touch</p>
        <h1>Contact Us</h1>
        <p>Have a question about mountaineering or this website? Send us a message.</p>
      </div>

      <div className="contact-body">
        <aside className="contact-info">
          <h2>Talk to us</h2>
          <p>{contact.note}</p>
          <ul>
            {contact.email && <li><strong>Email</strong><a href={`mailto:${contact.email}`}>
  {contact.email}
</a></li>}
          </ul>
          <p className="contact-warning">
            <strong>In an emergency</strong> contact local emergency services immediately (112 works on mobile networks in many countries). This form is not monitored.
          </p>
        </aside>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="name">Your name</label>
            <input type="text" autoComplete="name" {...field('name')} />
            <span className="field-error" id="name-error">{errors.name}</span>
          </div>

          <div className="form-row">
            <label htmlFor="email">Email address</label>
            <input type="email" autoComplete="email" {...field('email')} />
            <span className="field-error" id="email-error">{errors.email}</span>
          </div>

          <div className="form-row">
            <label htmlFor="subject">Subject</label>
            <select {...field('subject')}>
              <option value="">Select a subject…</option>
              {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <span className="field-error" id="subject-error">{errors.subject}</span>
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea rows="6" maxLength="1000" {...field('message')} />
            <span className="field-count">{values.message.length}/1000</span>
            <span className="field-error" id="message-error">{errors.message}</span>
          </div>

          <button type="submit" className="contact-submit" disabled={sending}>
            {sending ? 'Sending…' : 'Send message'}
          </button>

          <p className={`form-status ${status.type}`} role="status">{status.text}</p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
