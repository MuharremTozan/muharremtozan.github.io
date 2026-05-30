import React, { useEffect } from 'react';
import { Gauge, Milestone, Cpu, Radio, Globe } from 'lucide-react';

export default function SidebarNav({ activeSection, setActiveSection, currentLang, toggleLang, ui }) {
  // Navigation mapping to Lucide Icons
  const navItems = [
    { id: 'dashboard', label: ui.nav_dashboard, icon: Gauge },
    { id: 'experience', label: ui.nav_experience, icon: Milestone },
    { id: 'skills', label: ui.nav_skills, icon: Cpu },
    { id: 'contact', label: ui.nav_contact, icon: Radio },
  ];

  // Smooth scroll handler
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Temporarily suspend observer to prevent visual stuttering while scrolling
      window.isProgrammaticScrolling = true;
      setActiveSection(id);
      
      element.scrollIntoView({ behavior: 'smooth' });

      // Re-enable observer after smooth scroll completes
      setTimeout(() => {
        window.isProgrammaticScrolling = false;
      }, 800);
    }
  };

  // Passive IntersectionObserver setup
  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Center viewport focus
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      // Bypass if scrolling is programmatically triggered via click
      if (window.isProgrammaticScrolling) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [setActiveSection]);

  return (
    <>
      {/* Desktop Persistent Left Sidebar */}
      <aside className="desktop-sidebar">
        {/* Branding & Logo telemetry */}
        <div className="sidebar-brand">
          <div className="cyber-logo">
            <span className="logo-glitch">PORTFOLIO</span>
            <div className="logo-sub">DIMENSIONAL // C-137</div>
          </div>
          <div className="circuit-status">
            <span className="blink-dot"></span>
            <span className="status-label">{ui.stats_status_val}</span>
          </div>
        </div>

        {/* Dynamic Interactive Navigation List */}
        <nav className="sidebar-nav-list">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`nav-btn ${isActive ? 'active' : ''}`}
                aria-label={`Scroll to ${item.label}`}
              >
                <Icon size={20} className="nav-icon" />
                <span className="nav-text">{item.label}</span>
                {isActive && <div className="nav-active-bar"></div>}
              </button>
            );
          })}
        </nav>

        {/* Bottom Control Deck: Language Toggle */}
        <div className="sidebar-footer">
          <button 
            className="lang-toggle-deck" 
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            <Globe size={16} />
            <span>{currentLang === 'en' ? 'TÜRKÇE (TR)' : 'ENGLISH (EN)'}</span>
          </button>
        </div>
      </aside>

      {/* Mobile Sticky Top Header */}
      <header className="mobile-header">
        <div className="mobile-header-brand">
          <span className="mobile-logo-title">PORTFOLIO</span>
        </div>
        <div className="mobile-nav-deck">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`mobile-nav-btn ${isActive ? 'active' : ''}`}
                aria-label={`Scroll to ${item.label}`}
              >
                <Icon size={18} />
              </button>
            );
          })}
          <button 
            className="mobile-lang-btn" 
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            <Globe size={18} />
            <span style={{ fontSize: '0.65rem', marginLeft: '2px', fontWeight: 'bold' }}>
              {currentLang.toUpperCase()}
            </span>
          </button>
        </div>
      </header>

      {/* Sidebar Specific Layout Styles */}
      <style>{`
        /* Desktop styles */
        .desktop-sidebar {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: var(--sidebar-width);
          background-color: var(--bg-panel);
          border-right: 1px solid var(--bg-panel-border);
          display: flex;
          flex-direction: column;
          padding: 2.5rem 1.5rem;
          box-sizing: border-box;
          z-index: 100;
        }

        .sidebar-brand {
          margin-bottom: 3.5rem;
        }

        .cyber-logo {
          font-family: var(--font-family);
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--text-main);
          letter-spacing: 0.1em;
          position: relative;
        }

        .logo-glitch {
          background: linear-gradient(90deg, var(--primary-glow) 0%, var(--accent-cyan) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .logo-sub {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          margin-top: 0.25rem;
          font-weight: 700;
        }

        .circuit-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.75rem;
        }

        .blink-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: blink 2s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .status-label {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          color: var(--text-muted);
          font-weight: bold;
        }

        .sidebar-nav-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex-grow: 1;
        }

        .nav-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: transparent;
          border: 1px solid transparent;
          padding: 0.75rem 1.25rem;
          width: 100%;
          text-align: left;
          border-radius: 8px;
          cursor: pointer;
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.9rem;
          position: relative;
          transition: background-color 0.2s, color 0.2s, border-color 0.2s;
        }

        .nav-btn:hover {
          background-color: rgba(6, 182, 212, 0.05);
          color: var(--accent-cyan);
          border-color: rgba(6, 182, 212, 0.1);
        }

        .nav-btn.active {
          background-color: rgba(67, 226, 198, 0.08);
          color: var(--primary-glow);
          border-color: rgba(67, 226, 198, 0.2);
        }

        .nav-icon {
          transition: transform 0.2s;
        }

        .nav-btn:hover .nav-icon {
          transform: translateX(2px);
        }

        .nav-active-bar {
          position: absolute;
          right: 0;
          top: 20%;
          bottom: 20%;
          width: 3px;
          background-color: var(--primary-glow);
          border-radius: 3px 0 0 3px;
          box-shadow: 0 0 10px var(--primary-glow);
        }

        .sidebar-footer {
          margin-top: auto;
        }

        .lang-toggle-deck {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          background: rgba(6, 182, 212, 0.05);
          border: 1px solid rgba(6, 182, 212, 0.15);
          padding: 0.65rem;
          border-radius: 8px;
          cursor: pointer;
          color: var(--text-main);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .lang-toggle-deck:hover {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 12px rgba(6, 182, 212, 0.25);
        }

        /* Mobile specific styles */
        .mobile-header {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          background-color: var(--bg-panel);
          border-bottom: 1px solid var(--bg-panel-border);
          z-index: 100;
          padding: 0 1.5rem;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
        }

        .mobile-header-brand {
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .mobile-logo-title {
          background: linear-gradient(90deg, var(--primary-glow) 0%, var(--accent-cyan) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .mobile-nav-deck {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .mobile-nav-btn {
          background: transparent;
          border: none;
          padding: 0.5rem;
          cursor: pointer;
          color: var(--text-muted);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s;
        }

        .mobile-nav-btn.active {
          color: var(--primary-glow);
          background-color: rgba(67, 226, 198, 0.08);
        }

        .mobile-lang-btn {
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.2);
          padding: 0.35rem 0.5rem;
          border-radius: 4px;
          cursor: pointer;
          color: var(--text-main);
          display: flex;
          align-items: center;
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .desktop-sidebar {
            display: none;
          }
          
          .mobile-header {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
