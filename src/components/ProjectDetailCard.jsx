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

      {/* Local card specific helper styles */}
      <style>{`
        .project-detail-card {
          margin-bottom: 2.5rem;
          padding: 2.5rem !important;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .project-telemetry-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(6, 182, 212, 0.1);
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
        }

        .dimension-slug {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          color: var(--text-dimmed);
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .project-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }

        .project-desc {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .project-footer {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 2rem;
          border-top: 1px solid rgba(6, 182, 212, 0.1);
          padding-top: 1.5rem;
        }

        .footer-section-title {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          font-weight: bold;
          letter-spacing: 0.1em;
          color: var(--text-dimmed);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }

        .pills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-pill {
          font-size: 0.75rem;
          font-weight: 700;
          background: rgba(6, 182, 212, 0.06);
          border: 1px solid rgba(6, 182, 212, 0.15);
          color: var(--accent-cyan);
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
          letter-spacing: 0.02em;
          transition: background-color 0.2s, border-color 0.2s;
        }

        .tech-pill:hover {
          background: rgba(6, 182, 212, 0.12);
          border-color: rgba(6, 182, 212, 0.3);
        }

        .links-row {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .gateway-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          font-size: 0.8rem;
          font-weight: 700;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s;
          text-decoration: none !important;
          box-sizing: border-box;
          width: 100%;
        }

        .gateway-btn.active-portal {
          background: rgba(67, 226, 198, 0.08);
          border: 1px solid rgba(67, 226, 198, 0.25);
          color: var(--primary-glow);
        }

        .gateway-btn.active-portal:hover {
          background: rgba(67, 226, 198, 0.15);
          border-color: var(--primary-glow);
          box-shadow: 0 0 12px rgba(67, 226, 198, 0.25);
          transform: translateY(-1px);
        }

        .gateway-btn.source-code {
          background: rgba(148, 163, 184, 0.05);
          border: 1px solid rgba(148, 163, 184, 0.15);
          color: var(--text-main);
        }

        .gateway-btn.source-code:hover {
          background: rgba(148, 163, 184, 0.1);
          border-color: var(--text-muted);
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .project-footer {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .project-detail-card {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </article>
  );
}
