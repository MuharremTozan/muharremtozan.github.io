import React, { useEffect, useState } from 'react';

export default function PortalSplash({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Evaluate session persistence
    const hasPlayed = sessionStorage.getItem('rm_has_played_splash');
    if (hasPlayed === 'true') {
      setVisible(false);
      onComplete();
      return;
    }

    // Set timeout to start fade out after 1.5s (very quick and premium!)
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1500);

    // Completely unmount and complete after fade transition (300ms)
    const completeTimer = setTimeout(() => {
      sessionStorage.setItem('rm_has_played_splash', 'true');
      setVisible(false);
      onComplete();
    }, 1800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: '#060913',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      {/* Spinning Portal SVG Icon */}
      <div className="spin-effect" style={{ width: '120px', height: '120px', position: 'relative' }}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: '100%',
            height: '100%',
            filter: 'drop-shadow(0 0 12px #43e2c6)',
          }}
        >
          {/* Swirling space vortex paths */}
          <path
            d="M50 10 C 70 10, 90 30, 90 50 C 90 70, 70 90, 50 90 C 30 90, 10 70, 10 50 C 10 30, 30 10, 50 10"
            stroke="#43e2c6"
            strokeWidth="3"
            strokeDasharray="15 8"
          />
          <path
            d="M50 20 C 65 20, 80 35, 80 50 C 80 65, 65 80, 50 80 C 35 80, 20 65, 20 50 C 20 35, 35 20, 50 20"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeDasharray="8 5"
            transform="rotate(-45 50 50)"
          />
          <circle cx="50" cy="50" r="10" fill="#43e2c6" opacity="0.8" />
        </svg>
      </div>

      {/* Futuristic scanning log text */}
      <div
        style={{
          marginTop: '2rem',
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: '0.75rem',
          color: '#43e2c6',
          letterSpacing: '0.25em',
          fontWeight: 700,
          textShadow: '0 0 8px rgba(67, 226, 198, 0.4)',
        }}
      >
        BOOTING CHRONO-PORTAL...
      </div>
    </div>
  );
}
