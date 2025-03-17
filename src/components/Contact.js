import React, { useState } from 'react';

function Contact({ isDarkMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Demo mode)');
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
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
    </section>
  );
}

const styles = {
  section: {
    padding: '80px 20px',
    borderRadius: '12px',
  },
  heading: {
    fontSize: '36px',
    color: '#4a90e2',
    marginBottom: '40px',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '15px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    color: '#333',
    width: '100%', // Full width on all screens
    boxSizing: 'border-box',
  },
  textarea: {
    padding: '15px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    minHeight: '150px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    color: '#333',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    padding: '15px',
    fontSize: '18px',
    backgroundColor: '#e94e77',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  },
};

/* Responsive styles */
const responsiveStyles = `
  @media (max-width: 768px) {
    section {
      padding: 50px 15px;
    }
    .heading {
      font-size: 30px;
    }
    .form {
      max-width: 90%;
    }
  }
  @media (max-width: 480px) {
    section {
      padding: 30px 10px;
    }
    .input, .textarea {
      padding: 12px;
      font-size: 14px;
    }
    .button {
      padding: 12px;
      font-size: 16px;
    }
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = responsiveStyles;
document.head.appendChild(styleSheet);

export default Contact;