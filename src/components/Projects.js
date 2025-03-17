import React from 'react';
import { motion } from 'framer-motion';

function Projects({ isDarkMode }) {
  const projects = [
    { title: 'Project 1', description: 'A fun React app!', link: '#' },
    { title: 'Project 2', description: 'A neat website.', link: '#' },
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>My Projects</h2>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            style={{ ...styles.card, backgroundColor: isDarkMode ? '#0f0f23' : '#fff' }}
            whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10 }} // 3D tilt on hover
            whileTap={{ scale: 0.95 }} // Shrink on click
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 style={styles.cardTitle}>{project.title}</h3>
            <p style={styles.cardText}>{project.description}</p>
            <a href={project.link} style={styles.link}>
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: 'clamp(40px, 10vw, 80px) 5%',
  },
  heading: {
    fontSize: 'clamp(24px, 6vw, 36px)',
    color: '#4a90e2',
    marginBottom: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 'clamp(20px, 5vw, 30px)',
    maxWidth: '90%',
    margin: '0 auto',
  },
  card: {
    padding: 'clamp(15px, 4vw, 25px)',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
    cursor: 'pointer',
  },
  cardTitle: {
    fontSize: 'clamp(18px, 5vw, 24px)',
    margin: '0 0 10px',
    color: '#4a90e2',
  },
  cardText: {
    fontSize: 'clamp(14px, 3vw, 16px)',
    color: '#777',
    margin: '0 0 15px',
  },
  link: {
    color: '#e94e77',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: 'clamp(14px, 3vw, 16px)',
  },
};

export default Projects;