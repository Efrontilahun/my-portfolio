import React from 'react';
import { motion } from 'framer-motion';
import thumbnailTikTok from '../assets/thumbnail1.png'; // Replace with your TikTok thumbnail
import thumbnailYouTube from '../assets/thumbnail2.jpg'; // Replace with your YouTube thumbnail

function Thumbnails({ isDarkMode }) {
  const thumbnailData = [
    {
      title: 'Youtube Thumbnail',
      description: 'Designed for jo tube.',
      image: thumbnailTikTok,
    },
    {
      title: 'YouTube Cinematic Thumbnail',
      description: 'Created for fnote wongel tube',
      image: thumbnailYouTube,
    },
    // Add more thumbnails here
  ];

  return (
    <section id="thumbnails" style={{ ...styles.section, backgroundColor: isDarkMode ? '#16213e' : '#fff' }}>
      <h2 style={styles.heading}>Thumbnail Designs</h2>
      <p style={styles.subheading}>
        Eye-catching thumbnails I’ve crafted for YouTube!
      </p>
      <div style={styles.thumbnailGrid}>
        {thumbnailData.map((thumb, index) => (
          <motion.div
            key={index}
            style={styles.thumbnailCard}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={thumb.image} alt={thumb.title} style={styles.thumbnail} />
            <div style={styles.thumbInfo}>
              <h3 style={styles.thumbTitle}>{thumb.title}</h3>
              <p style={styles.thumbDesc}>{thumb.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
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
    marginBottom: '20px',
    textAlign: 'center',
  },
  subheading: {
    fontSize: 'clamp(16px, 4vw, 18px)',
    color: '#666',
    marginBottom: '40px',
    textAlign: 'center',
  },
  thumbnailGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 'clamp(20px, 5vw, 30px)',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  thumbnailCard: {
    backgroundColor: isDarkMode => (isDarkMode ? '#0f0f23' : '#fff'),
    borderRadius: '12px',
    padding: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: 'auto', // Keeps aspect ratio (9:16 for TikTok, 16:9 for YouTube)
    borderRadius: '8px',
    objectFit: 'cover',
  },
  thumbInfo: {
    padding: '10px 0',
    textAlign: 'center',
  },
  thumbTitle: {
    fontSize: 'clamp(16px, 4vw, 20px)',
    color: '#4a90e2',
    margin: '0 0 5px',
  },
  thumbDesc: {
    fontSize: 'clamp(14px, 3vw, 16px)',
    color: isDarkMode => (isDarkMode ? '#ccc' : '#666'),
    margin: 0,
  },
};

export default Thumbnails;