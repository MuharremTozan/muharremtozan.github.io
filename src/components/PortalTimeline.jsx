import React from 'react';
import { Compass, Shield, Gem } from 'lucide-react';

// Maps project ID to corresponding Lucide vector icon
const iconMap = {
  'telemetry-engine': Compass,
  'secure-gateway': Shield,
  'canvas-simulator': Gem,
};

export default function PortalTimeline({ projects, onSelectProject, ui, currentLang }) {
  return (
    <div id="experience" className="page-section experience-timeline-section">
      <div className="section-intro">
        <h2 className="timeline-section-title">{ui.gallery_title}</h2>
        <p className="timeline-section-sub">{ui.gallery_sub}</p>
      </div>

      {/* The timeline gallery wrapper */}
      <div className="portal-timeline-container">
        {/* Glowing circuit line backing */}
        <div className="portal-timeline-line"></div>

        {/* Scrollable portal container */}
        <div className="portal-gallery">
          {projects.map((project) => {
            const IconComponent = iconMap[project.id] || Compass;
            const projectName = currentLang === 'en' ? project.name_en : project.name_tr;

            return (
              <button
                key={project.id}
                onClick={() => onSelectProject(project.id)}
                className="portal-node"
                aria-label={`Jump to ${projectName}`}
              >
                {/* Visual light hologram projector */}
                <div className="portal-cone">
                  <div className="portal-disc spin-effect-hover">
                    <IconComponent size={26} className="portal-icon-svg" />
                  </div>
                </div>

                {/* Sub-node connector point */}
                <div className="portal-timeline-dot"></div>

                {/* Project Title */}
                <span className="portal-label">{projectName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Local timeline helper styles */}
      <style>{`
        .experience-timeline-section {
          padding-bottom: 2rem;
        }

        .section-intro {
          margin-bottom: 2rem;
        }

        .timeline-section-title {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(90deg, var(--text-main) 0%, var(--text-muted) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .timeline-section-sub {
          font-size: 1rem;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
