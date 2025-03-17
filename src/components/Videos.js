import React from 'react';
import { motion } from 'framer-motion';

function Videos({ isDarkMode }) {
  const videoData = [
    {
      title: 'TikTok Productivity Tips',
      platform: 'TikTok',
      embedUrl: 'https://www.tiktok.com/embed/v2/7440134072703372590',
      profileLink: 'https://www.tiktok.com/@productivehabesha',
      isTikTok: true, // For TikTok-specific styling
    },
    {
      title: 'YouTube Cinematic Intro',
      platform: 'YouTube',
      embedUrl: 'https://www.youtube.com/embed/at08VFUrZoU',
      profileLink: 'https://www.youtube.com/@Productivehabesha', // Update this
      isTikTok: false,
    },
  ];

  return (
    <section id="videos" style={{ ...styles.section, backgroundColor: isDarkMode ? '#16213e' : '#fff' }}>
      <h2 style={styles.heading}>Video Editing</h2>
      <p style={styles.subheading}>
        My video edits for TikTok and YouTube—crafted with flair!
      </p>
      <div style={styles.videoGrid}>
        {videoData.map((video, index) => (
          <motion.div
            key={index}
            style={styles.videoCard}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div style={video.isTikTok ? styles.tiktokContainer : styles.youtubeContainer}>
              <iframe
                src={video.embedUrl}
                style={video.isTikTok ? styles.tiktokIframe : styles.youtubeIframe}
                allowFullScreen
                title={video.title}
              />
            </div>
            <div style={styles.videoInfo}>
              <h3 style={styles.videoTitle}>{video.title}</h3>
              <a
                href={video.profileLink}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.profileLink}
              >
                More on {video.platform}
              </a>
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
  videoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 'clamp(20px, 5vw, 30px)',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  videoCard: {
    backgroundColor: isDarkMode => (isDarkMode ? '#0f0f23' : '#fff'),
    borderRadius: '12px',
    padding: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    overflow: 'hidden',
  },
  tiktokContainer: {
    position: 'relative',
    width: '100%',
    paddingBottom: '177.78%', // 9:16 aspect ratio
    height: 0,
  },
  youtubeContainer: {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%', // 16:9 aspect ratio
    height: 0,
  },
  tiktokIframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
    borderRadius: '8px',
  },
  youtubeIframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
    borderRadius: '8px',
  },
  videoInfo: {
    padding: '10px 0',
    textAlign: 'center',
  },
  videoTitle: {
    fontSize: 'clamp(16px, 4vw, 20px)',
    color: '#4a90e2',
    margin: '0 0 5px',
  },
  profileLink: {
    color: '#e94e77',
    textDecoration: 'none',
    fontSize: 'clamp(14px, 3vw, 16px)',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
};

export default Videos;