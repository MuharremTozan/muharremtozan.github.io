import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectDetailCard({ project, ui, currentLang, isFocused }) {
  const name = currentLang === 'en' ? project.name_en : project.name_tr;
  const description = currentLang === 'en' ? project.description_en : project.description_tr;

  return (
    <article
      id={`project-card-${project.id}`}
      className={`project-detail-card cyber-card crt-effect ${isFocused ? 'project-card-flash' : ''}`}
      style={{
        scrollMarginTop: '100px', // Prevents sticking directly under top mobile header
      }}
    >
      {/* Telemetry metadata status row */}
      <div className="project-telemetry-header">
        <span className={`telemetry-status ${project.status.toLowerCase().includes('unstable') ? 'unstable' : ''}`}>
          {ui.proj_status}: {project.status}
        </span>
        <span className="dimension-slug">REF // {project.id.toUpperCase()}</span>
      </div>

      {/* Main Copy Area */}
      <div className="project-body">
        <h3 className="project-title">{name}</h3>
        <p className="project-desc">{description}</p>
      </div>

      {/* Grid: Tech Stack Pills & Gateway Action Links */}
      <div className="project-footer">
        <div className="tech-specs-pills">
          <div className="footer-section-title">{ui.proj_tech}</div>
          <div className="pills-grid">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="gateway-links">
          <div className="footer-section-title">{ui.proj_links}</div>
          <div className="links-row">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="gateway-btn active-portal"
                aria-label={`${ui.proj_launch}: ${name}`}
              >
                <ExternalLink size={16} />
                <span>{ui.proj_launch}</span>
              </a>
            )}
            {project.links.source && (
              <a
                href={project.links.source}
                target="_blank"
                rel="noopener noreferrer"
                className="gateway-btn source-code"
                aria-label={`${ui.proj_source}: ${name}`}
              >
                <Github size={16} />
                <span>{ui.proj_source}</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Local card specific helper styles moved to src/components.css */}
    </article>
  );
}
