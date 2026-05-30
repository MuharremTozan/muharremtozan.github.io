import React, { useState } from 'react';
import { Linkedin, Github, Mail, Copy, Check } from 'lucide-react';

export default function ContactCommLink({ ui, currentLang }) {
  const [copied, setCopied] = useState(false);
  
  // Professional details
  const emailAddress = "mtozan.dev@gmail.com"; // Professional email contact
  const linkedinUrl = "https://linkedin.com/in/your-profile"; // Custom placeholder
  const githubUrl = "https://github.com/your-username"; // Custom placeholder

  // Pre-seeded mail parameters based on language
  const mailSubject = currentLang === 'en' 
    ? "Dimensional Transmission: Developer Inquiry" 
    : "Boyutsal İletim: Geliştirici Talebi";
  const mailBody = currentLang === 'en'
    ? "Greetings,\n\nI am contacting you after reviewing your dimensional chronological portfolio..."
    : "Selamlar,\n\nBoyutsal kronolojik portföyünüzü inceledikten sonra sizinle iletişime geçiyorum...";

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  // Clipboard copy helper
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="page-section contact-comm-section">
      <div className="section-intro">
        <h2 className="contact-section-title">{ui.contact_title}</h2>
        <p className="contact-section-sub">{ui.contact_sub}</p>
      </div>

      {/* Grid of gateway profile nodes */}
      <div className="comm-gateway-grid">
        {/* LinkedIn Node */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="comm-card cyber-card"
          aria-label="Access LinkedIn Profile Portal"
        >
          <div className="comm-glow-glow"></div>
          <div className="comm-icon-sphere linkedin">
            <Linkedin size={22} />
          </div>
          <div className="comm-details">
            <span className="comm-title">LINKEDIN</span>
            <span className="comm-status-meta">ESTABLISHED // SECURE</span>
          </div>
        </a>

        {/* GitHub Node */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="comm-card cyber-card"
          aria-label="Access GitHub Repositories Portal"
        >
          <div className="comm-glow-glow"></div>
          <div className="comm-icon-sphere github">
            <Github size={22} />
          </div>
          <div className="comm-details">
            <span className="comm-title">GITHUB</span>
            <span className="comm-status-meta">DIRECTORY // STABLE</span>
          </div>
        </a>
      </div>

      {/* Pre-seeded email cockpit box */}
      <div className="mail-cockpit-box cyber-card crt-effect">
        <div className="mail-icon-node">
          <Mail size={28} className="mail-pulse-icon" />
        </div>
        <div className="mail-info-core">
          <h3 className="mail-box-title">{ui.contact_mail_title}</h3>
          <p className="mail-box-sub">{ui.contact_mail_sub}</p>
          
          <div className="mail-actions">
            <a 
              href={mailtoLink} 
              className="mail-transmit-btn"
              aria-label="Transmit Secure Email"
            >
              {ui.contact_mail_btn}
            </a>

            {/* Accessible clipboard copy block */}
            <div className="copy-email-widget">
              <span className="copy-label">{ui.contact_mail_copy}</span>
              <button 
                onClick={handleCopyEmail}
                className="copy-action-btn"
                aria-label="Copy email address to clipboard"
              >
                <code className="email-code">{emailAddress}</code>
                {copied ? <Check size={14} className="copied-check" /> : <Copy size={14} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Comm-Link local helper styles */}
      <style>{`
        .contact-comm-section {
          padding-bottom: 4rem;
        }

        .contact-section-title {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(90deg, var(--text-main) 0%, var(--text-muted) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .contact-section-sub {
          font-size: 1rem;
          color: var(--text-muted);
        }

        .comm-gateway-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .comm-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem !important;
          text-decoration: none !important;
          position: relative;
        }

        .comm-icon-sphere {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
          z-index: 2;
          transition: transform 0.3s;
        }

        .comm-icon-sphere.linkedin {
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.3);
          color: var(--accent-cyan);
        }

        .comm-icon-sphere.github {
          background: rgba(67, 226, 198, 0.08);
          border: 1px solid rgba(67, 226, 198, 0.3);
          color: var(--primary-glow);
        }

        .comm-card:hover .comm-icon-sphere {
          transform: scale(1.1);
        }

        .comm-details {
          display: flex;
          flex-direction: column;
          z-index: 2;
        }

        .comm-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-main);
          letter-spacing: 0.05em;
        }

        .comm-status-meta {
          font-family: 'Courier New', monospace;
          font-size: 0.6rem;
          font-weight: bold;
          letter-spacing: 0.05em;
          color: var(--text-dimmed);
          margin-top: 0.15rem;
        }

        .comm-card:hover .comm-status-meta {
          color: var(--text-muted);
        }

        /* Email cockpit box styles */
        .mail-cockpit-box {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
          padding: 2.5rem !important;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.02) 0%, rgba(0, 0, 0, 0) 100%) !important;
        }

        .mail-icon-node {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: rgba(6, 182, 212, 0.06);
          border: 1px solid rgba(6, 182, 212, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        @keyframes pulse-icon {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .mail-pulse-icon {
          animation: pulse-icon 3s ease-in-out infinite;
        }

        .mail-info-core {
          flex-grow: 1;
        }

        .mail-box-title {
          font-size: 1.35rem;
          font-weight: 800;
          margin-bottom: 0.25rem;
        }

        .mail-box-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .mail-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 2rem;
        }

        .mail-transmit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(67, 226, 198, 0.08);
          border: 1px solid rgba(67, 226, 198, 0.25);
          color: var(--primary-glow);
          padding: 0.65rem 1.5rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.85rem;
          text-decoration: none !important;
          transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }

        .mail-transmit-btn:hover {
          background: rgba(67, 226, 198, 0.15);
          border-color: var(--primary-glow);
          box-shadow: 0 0 12px rgba(67, 226, 198, 0.3);
          transform: translateY(-1px);
        }

        /* Clipboard Widget */
        .copy-email-widget {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .copy-label {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          color: var(--text-dimmed);
          font-weight: bold;
        }

        .copy-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(148, 163, 184, 0.04);
          border: 1px solid rgba(148, 163, 184, 0.15);
          padding: 0.45rem 0.85rem;
          border-radius: 6px;
          cursor: pointer;
          color: var(--text-muted);
          transition: border-color 0.2s, color 0.2s, background-color 0.2s;
        }

        .copy-action-btn:hover {
          border-color: var(--text-muted);
          color: var(--text-main);
          background-color: rgba(148, 163, 184, 0.08);
        }

        .email-code {
          font-family: 'Courier New', monospace;
          font-size: 0.8rem;
          color: var(--accent-cyan);
          background: transparent !important;
          padding: 0 !important;
          font-weight: 700;
        }

        .copied-check {
          color: var(--terminal-log);
        }

        @media (max-width: 768px) {
          .mail-cockpit-box {
            flex-direction: column;
            gap: 1.5rem;
            padding: 1.5rem !important;
          }
          .mail-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 1.25rem;
          }
          .copy-email-widget {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          .copy-action-btn {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </section>
  );
}
