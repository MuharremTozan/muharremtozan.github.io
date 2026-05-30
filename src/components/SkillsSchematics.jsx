import React, { useState } from 'react';
import { Cpu, Terminal, Compass } from 'lucide-react';

export default function SkillsSchematics({ ui, currentLang }) {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Skill categories data with professional descriptions and statuses
  const skillCategories = [
    {
      id: 'frontend',
      title_en: 'Frontend Engineering',
      title_tr: 'Ön Uç Mühendisliği',
      icon: Cpu,
      status: 'OPERATIONAL',
      skills: ['React.js', 'JavaScript (ES6+)', 'CSS3 // Pico CSS', 'Framer Motion', 'Vite', 'Responsive UX'],
    },
    {
      id: 'backend',
      title_en: 'Backend Systems & Storage',
      title_tr: 'Arka Uç Sistemleri ve Depolama',
      icon: Terminal,
      status: 'OPTIMIZED',
      skills: ['Node.js', 'Express.js', 'Redis Cache', 'REST & SSE APIs', 'SQL // PostgreSQL', 'Docker Containers'],
    },
    {
      id: 'systems',
      title_en: 'Systems & Methodologies',
      title_tr: 'Sistemler ve Metodolojiler',
      icon: Compass,
      status: 'COMPLIANT',
      skills: ['Git & GitHub Actions', 'OIDC & OAuth 2.0 Auth', 'Core Web Vitals SEO', 'Lighthouse Optimization', 'Agile Workflows', 'Shell Scripting'],
    },
  ];

  return (
    <section id="skills" className="page-section skills-schematic-section">
      <div className="section-intro">
        <h2 className="skills-section-title">{ui.skills_title}</h2>
        <p className="skills-section-sub">{ui.skills_sub}</p>
      </div>

      {/* Grid of Motherboard circuit blocks */}
      <div className="schematic-board">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          const isCategoryHovered = hoveredCategory === category.id;
          const title = currentLang === 'en' ? category.title_en : category.title_tr;

          return (
            <div
              key={category.id}
              className={`schematic-card cyber-card ${isCategoryHovered ? 'blueprint-active' : ''}`}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Circuit tracings backing decoration */}
              <div className="circuit-lines-decor"></div>

              {/* Schematic Header */}
              <div className="schematic-header">
                <div className="schematic-icon-node">
                  <Icon size={18} className="schematic-svg" />
                </div>
                <div className="schematic-meta">
                  <h3 className="category-title">{title}</h3>
                  <span className={`schematic-status-pill ${category.status.toLowerCase()}`}>
                    {ui.skills_status}: {category.status}
                  </span>
                </div>
              </div>

              {/* Skills Node Network Grid */}
              <div className="skills-node-network">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-network-node">
                    <span className="node-terminal-point"></span>
                    <span className="node-label">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Skills Schematics local helper styles */}
      <style>{`
        .skills-schematic-section {
          padding-bottom: 3rem;
        }

        .skills-section-title {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(90deg, var(--text-main) 0%, var(--text-muted) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .skills-section-sub {
          font-size: 1rem;
          color: var(--text-muted);
        }

        .schematic-board {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.75rem;
        }

        .schematic-card {
          padding: 2rem !important;
          position: relative;
          transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
        }

        .schematic-card.blueprint-active {
          border-color: var(--primary-glow) !important;
          box-shadow: 0 15px 40px rgba(0,0,0,0.6), 
                      0 0 25px rgba(67, 226, 198, 0.15);
          transform: translateY(-2px);
        }

        /* Motherboard schematic backing decor */
        .circuit-lines-decor {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
            radial-gradient(var(--bg-panel-border) 1px, transparent 1px),
            linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px);
          background-size: 20px 20px, 40px 40px, 40px 40px;
          opacity: 0.25;
          pointer-events: none;
          z-index: 1;
        }

        .schematic-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .schematic-icon-node {
          width: 38px;
          height: 38px;
          border-radius: 6px;
          background: rgba(6, 182, 212, 0.06);
          border: 1px solid rgba(6, 182, 212, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          transition: color 0.3s, border-color 0.3s, background-color 0.3s;
        }

        .blueprint-active .schematic-icon-node {
          background: rgba(67, 226, 198, 0.1);
          border-color: var(--primary-glow);
          color: var(--primary-glow);
        }

        .category-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
          color: var(--text-main);
        }

        .schematic-status-pill {
          font-family: 'Courier New', monospace;
          font-size: 0.55rem;
          font-weight: bold;
          letter-spacing: 0.05em;
          padding: 0.1rem 0.5rem;
          border-radius: 4px;
          display: inline-block;
        }

        .schematic-status-pill.operational {
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.2);
          color: var(--terminal-log);
        }

        .schematic-status-pill.optimized {
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.2);
          color: var(--accent-cyan);
        }

        .schematic-status-pill.compliant {
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.2);
          color: var(--terminal-unstable);
        }

        .skills-node-network {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          position: relative;
          z-index: 2;
        }

        .skill-network-node {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .node-terminal-point {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--bg-space);
          border: 1.5px solid var(--accent-cyan);
          transition: background-color 0.3s, border-color 0.3s;
        }

        .blueprint-active .node-terminal-point {
          border-color: var(--primary-glow);
          background: var(--primary-glow);
        }

        .node-label {
          font-size: 0.95rem;
          color: var(--text-muted);
          transition: color 0.3s;
        }

        .blueprint-active .node-label {
          color: var(--text-main);
        }
      `}</style>
    </section>
  );
}
