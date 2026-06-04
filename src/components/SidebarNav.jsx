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

      {/* Sidebar Specific Layout Styles moved to src/components.css */}
    </>
  );
}
