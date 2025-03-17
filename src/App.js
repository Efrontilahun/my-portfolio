import React, { useState } from 'react';
import Particles from 'react-tsparticles'; // Import particles
import { loadFull } from 'tsparticles'; // Load particle features
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Thumbnails from './components/Thumbnails';
import Videos from './components/Videos'; // Should already be here
// Inside the return:


import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const particlesInit = async (main) => {
    await loadFull(main); // Load all particle features
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: isDarkMode ? '#1a1a2e' : '#f0f4f8', // Matches your theme
            },
          },
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: isDarkMode ? '#e0e0e0' : '#4a90e2' }, // White in dark, blue in light
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1, direction: 'none', random: true },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: 'repulse' }, // Particles move away from mouse
              onclick: { enable: true, mode: 'push' }, // Click adds more particles
            },
          },
        }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}> {/* Keep content above particles */}
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Home isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Videos isDarkMode={isDarkMode} /> {/* Between Projects and Contact */}
        <Thumbnails isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;