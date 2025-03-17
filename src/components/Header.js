import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Header({ isDarkMode, toggleTheme }) {
  return (
    <header style={{ ...styles.header, backgroundColor: isDarkMode ? '#0f0f23' : '#4a90e2' }}>
      <h1 style={styles.title}>
        <TypeAnimation
          sequence={[
            'Efron Tilahun: Web Designer', // Your name + skill 1
            2000,
            'Efron Tilahun: Video Editor', // Skill 2
            2000,
            'Efron Tilahun: Thumbnail Creator', // Skill 3
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          style={{ display: 'inline-block', color: '#fff' }}
        />
      </h1>
      <nav style={styles.nav}>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#projects" style={styles.navLink}>Projects</a>
        <a href="#videos" style={styles.navLink}>Videos</a> {/* Link to Videos */}
        <a href="#thumbnails" style={styles.navLink}>Thumbnails</a> {/* Link to Thumbnails */}
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
    padding: 'clamp(15px, 3vw, 20px) 5%', // Slightly tighter padding
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)', // Deeper shadow
    background: isDarkMode => (isDarkMode ? 'linear-gradient(90deg, #0f0f23, #1a1a3d)' : 'linear-gradient(90deg, #4a90e2, #357abd)'), // Gradient
  },
  title: {
    fontSize: 'clamp(18px, 4.5vw, 26px)', // Slightly smaller max size
    margin: 0,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', // Bolder shadow
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: 'clamp(10px, 2vw, 15px)', // Responsive gap
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: 'clamp(13px, 3.5vw, 16px)', // Slightly smaller max size
    transition: 'color 0.3s, transform 0.2s',
    ':hover': { color: '#e94e77', transform: 'scale(1.1)' }, // Hover effect (won’t work inline, see note)
  },
  socialLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: 'clamp(16px, 4vw, 20px)', // Bigger for icons
    transition: 'color 0.3s, transform 0.2s',
    ':hover': { color: '#e94e77', transform: 'scale(1.2)' }, // Hover effect
  },
  toggleButton: {
    padding: 'clamp(6px, 2vw, 10px) clamp(12px, 3vw, 16px)', // Responsive padding
    fontSize: 'clamp(12px, 3vw, 16px)',
    backgroundColor: '#fff',
    color: '#333',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Subtle shadow
    ':hover': { backgroundColor: '#e0e0e0', transform: 'scale(1.05)' }, // Hover effect
  },
};

export default Header;