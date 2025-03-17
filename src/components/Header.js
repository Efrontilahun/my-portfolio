import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Header({ isDarkMode, toggleTheme }) {
  return (
    <header style={{ ...styles.header, backgroundColor: isDarkMode ? '#0f0f23' : '#4a90e2' }}>
      <h1 style={styles.title}>
        <TypeAnimation
          sequence={[
            "Efron Tilahun's Portfolio", // Your name here
            2000, // Wait 2 seconds
            "Efron Tilahun's Creations", // Another variation
            2000,
          ]}
          wrapper="span"
          speed={50} // Typing speed
          repeat={Infinity} // Loop forever
          style={{ display: 'inline-block', color: '#fff' }}
        />
      </h1>
      <nav style={styles.nav}>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#projects" style={styles.navLink}>Projects</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
        <button onClick={toggleTheme} style={styles.toggleButton}>
          {isDarkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: '20px 5%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: 'clamp(20px, 5vw, 28px)',
    margin: 0,
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: 'clamp(14px, 4vw, 18px)',
    transition: 'color 0.3s',
  },
  toggleButton: {
    padding: '8px 16px',
    fontSize: 'clamp(12px, 3vw, 16px)',
    backgroundColor: '#fff',
    color: '#333',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Header;