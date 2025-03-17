import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact({ isDarkMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // For success/error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS send function
    emailjs
      .send(
        'service_2bqd2v1', // Replace with your Service ID
        'template_alujsgo', // Replace with your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'UNUIkSadzTlIl0JAq' // Replace with your Public Key (User ID)
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Clear form
        },
        (error) => {
          setStatus('Failed to send message. Try again later.');
          console.error('EmailJS error:', error.text);
        }
      );
  };

  return (
    <section id="contact" style={{ ...styles.section, backgroundColor: isDarkMode ? '#16213e' : '#fff' }}>
      <h2 style={styles.heading}>Get in Touch</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ ...styles.input, backgroundColor: isDarkMode ? '#0f0f23' : '#f9f9f9' }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ ...styles.input, backgroundColor: isDarkMode ? '#0f0f23' : '#f9f9f9' }}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...styles.textarea, backgroundColor: isDarkMode ? '#0f0f23' : '#f9f9f9' }}
          required
        />
        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
      {status && <p style={styles.status}>{status}</p>} {/* Show success/error */}
    </section>
  );
}

const styles = {
  section: {
    padding: 'clamp(40px, 10vw, 80px) 5%',
    borderRadius: '12px',
  },
  heading: {
    fontSize: 'clamp(24px, 6vw, 36px)',
    color: '#4a90e2',
    marginBottom: '40px',
  },
  form: {
    maxWidth: '90%',
    width: 'clamp(300px, 80%, 600px)',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: 'clamp(10px, 3vw, 15px)',
    margin: 'clamp(10px, 2vw, 15px) 0',
    fontSize: 'clamp(14px, 3vw, 16px)',
    borderRadius: '8px',
    border: '1px solid #ddd',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    color: '#333',
  },
  textarea: {
    padding: 'clamp(10px, 3vw, 15px)',
    margin: 'clamp(10px, 2vw, 15px) 0',
    fontSize: 'clamp(14px, 3vw, 16px)',
    borderRadius: '8px',
    border: '1px solid #ddd',
    minHeight: 'clamp(100px, 20vw, 150px)',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    color: '#333',
  },
  button: {
    padding: 'clamp(10px, 3vw, 15px)',
    fontSize: 'clamp(16px, 4vw, 18px)',
    backgroundColor: '#e94e77',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  },
  status: {
    marginTop: '20px',
    fontSize: 'clamp(14px, 3vw, 16px)',
    color: '#4a90e2',
  },
};

export default Contact;