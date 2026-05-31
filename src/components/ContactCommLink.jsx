import React, { useState } from 'react';
import { Linkedin, Github, Mail, Copy, Check } from 'lucide-react';

export default function ContactCommLink({ ui, currentLang }) {
  const [copied, setCopied] = useState(false);
  
  // Professional details
  const emailAddress = "mtozan.dev@gmail.com"; // Professional email contact
  const linkedinUrl = "https://www.linkedin.com/in/muharrem-tozan-3658b1222/"; // Updated to user's LinkedIn
  const githubUrl = "https://github.com/MuharremTozan"; // Updated to user's GitHub

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

      {/* Contact Comm-Link local helper styles moved to src/components.css */}
    </section>
  );
}
