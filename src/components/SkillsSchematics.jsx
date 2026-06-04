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

      {/* Skills Schematics local helper styles moved to src/components.css */}
    </section>
  );
}
