import React, { useRef, useEffect } from 'react';
import { Compass, Shield, Gem, Rocket, Palette, Cpu, Swords, Timer } from 'lucide-react';

// Maps project ID to corresponding Lucide vector icon
const iconMap = {
  'telemetry-engine': Compass,
  'secure-gateway': Shield,
  'canvas-simulator': Gem,
  'muharremtozan-github-io': Rocket,
  'gezginfigur': Palette,
  'unity-agent-skills': Cpu,
  'agentic-duel': Swords,
  'time-reporter': Timer,
};

export default function PortalTimeline({ projects, onSelectProject, ui, currentLang }) {
  const galleryRef = useRef(null);

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (el.scrollWidth > el.clientWidth) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

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
        <div className="portal-gallery" ref={galleryRef}>
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

      {/* Local timeline helper styles moved to src/components.css */}
    </div>  );
}
