import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import profileImage from '../assets/profile.JPG'; // Adjust the file name if different

function Home({ isDarkMode }) {
  return (
    <section id="home" style={{ ...styles.section, backgroundColor: isDarkMode ? '#16213e' : '#fff' }}>
      <motion.img
        src={profileImage}
        alt="Efron"
        style={styles.profileImage}
        initial={{ opacity: 0, scale: 0.8 }} // Start small and hidden
        animate={{ opacity: 1, scale: 1 }}   // Grow to full size and appear
        transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth 0.8-second animation
        whileHover={{ scale: 1.05 }} // Slight zoom on hover
      />
      <h2 style={styles.heading}>Welcome!</h2>
      <p style={styles.text}>
  Hi, I’m Efron Tilahun! I’m a web designer and video editor crafting stunning websites and dynamic edits for TikTok and YouTube. Check out my work below!
</p>
    </section>
  );
}

const styles = {
  section: {
    padding: 'clamp(40px, 10vw, 80px) 5%',
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', // Center everything
    boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.1)',
  },
  profileImage: {
    width: 'clamp(120px, 20vw, 200px)', // Scales between 120px and 200px
    height: 'clamp(120px, 20vw, 200px)',
    borderRadius: '50%', // Circular image
    marginBottom: '20px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)', // Professional shadow
    objectFit: 'cover', // Keeps image proportions
  },
  heading: {
    fontSize: 'clamp(24px, 8vw, 40px)',
    color: '#4a90e2',
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  text: {
    maxWidth: '90%',
    margin: '0 auto',
    fontSize: 'clamp(16px, 4vw, 20px)',
    lineHeight: '1.6',
    color: '#666',
  },
};

export default Home;