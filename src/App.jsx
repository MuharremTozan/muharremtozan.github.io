import React, { useState, useEffect } from 'react';
import PortalSplash from './components/PortalSplash';
import SidebarNav from './components/SidebarNav';
import DashboardWelcome from './components/DashboardWelcome';
import PortalTimeline from './components/PortalTimeline';
import ProjectDetailCard from './components/ProjectDetailCard';
import SkillsSchematics from './components/SkillsSchematics';
import ContactCommLink from './components/ContactCommLink';

// Static translation layers
import localesData from './data/locales.json';
import projectsData from './data/projects.json';

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [lang, setLang] = useState('en');
  const [focusedProjectId, setFocusedProjectId] = useState(null);

  // Initialize language preference from localStorage or browser settings
  useEffect(() => {
    const cachedLang = localStorage.getItem('rm_portfolio_lang');
    if (cachedLang === 'en' || cachedLang === 'tr') {
      setLang(cachedLang);
    } else {
      const browserLang = navigator.language.substring(0, 2);
      if (browserLang === 'tr') {
        setLang('tr');
      } else {
        setLang('en');
      }
    }
  }, []);

  // Language toggle handler
  const handleToggleLang = () => {
    const nextLang = lang === 'en' ? 'tr' : 'en';
    setLang(nextLang);
    localStorage.setItem('rm_portfolio_lang', nextLang);
  };

  const handleSplashComplete = () => {
    setSplashComplete(true);
  };

  // Timeline Portal Select Scrolling Handler
  const handleSelectProject = (projectId) => {
    // Set target highlight project state
    setFocusedProjectId(projectId);

    // Coordinate scroll destination
    const targetElement = document.getElementById(`project-card-${projectId}`);
    if (targetElement) {
      // Temporarily suspend sidebar intersection observing highlights
      window.isProgrammaticScrolling = true;
      setActiveSection('experience');
      
      targetElement.scrollIntoView({ behavior: 'smooth' });

      // Clear scroll suspension and clear target focus glows after transition
      setTimeout(() => {
        window.isProgrammaticScrolling = false;
      }, 800);

      setTimeout(() => {
        setFocusedProjectId(null);
      }, 2000);
    }
  };

  const ui = localesData[lang] || localesData['en'];

  return (
    <>
      {/* Session animated portal entry splash */}
      <PortalSplash onComplete={handleSplashComplete} />

      {/* Main app panel loads after splash triggers */}
      {splashComplete && (
        <div className="app-container">
          {/* Cybernetic sidebar controller */}
          <SidebarNav
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            currentLang={lang}
            toggleLang={handleToggleLang}
            ui={ui}
          />

          {/* Main scrolling portfolio body */}
          <main className="main-content">
            {/* Dashboard Welcome Segment */}
            <DashboardWelcome ui={ui} />

            {/* Interactive Horizon Timeline Directory */}
            <PortalTimeline
              projects={projectsData}
              onSelectProject={handleSelectProject}
              ui={ui}
              currentLang={lang}
            />

            {/* Stacked Vertical Details Stack */}
            <div className="vertical-projects-stack">
              {projectsData.map((project) => (
                <ProjectDetailCard
                  key={project.id}
                  project={project}
                  ui={ui}
                  currentLang={lang}
                  isFocused={focusedProjectId === project.id}
                />
              ))}
            </div>

            {/* Motherboard circuit technical blueprints */}
            <SkillsSchematics ui={ui} currentLang={lang} />

            {/* Professional Comm-Link gateways */}
            <ContactCommLink ui={ui} currentLang={lang} />
          </main>
        </div>
      )}

      {/* Responsive layout corrections */}
    </>
  );
}
