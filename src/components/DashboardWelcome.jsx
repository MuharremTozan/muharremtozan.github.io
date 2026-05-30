import React from 'react';
import { Terminal, ShieldAlert, Cpu, Activity } from 'lucide-react';

export default function DashboardWelcome({ ui }) {
  // Telemetry metric cards
  const stats = [
    { title: ui.stats_status, value: ui.stats_status_val, icon: ShieldAlert, color: 'var(--primary-glow)' },
    { title: ui.stats_load, value: ui.stats_load_val, icon: Activity, color: 'var(--accent-cyan)' },
    { title: ui.stats_auth, value: ui.stats_auth_val, icon: Terminal, color: 'var(--primary-glow)' },
    { title: ui.stats_loc, value: ui.stats_loc_val, icon: Cpu, color: 'var(--accent-cyan)' },
  ];

  return (
    <section id="dashboard" className="page-section dashboard-hero crt-effect">
      {/* Telemetry diagnostics scanning header */}
      <div className="telemetry-bar">
        <span className="telemetry-ping"></span>
        <span className="telemetry-log-txt">{ui.welcome_header}</span>
      </div>

      <div className="hero-content">
        <h1 className="hero-greeting">{ui.welcome_greeting}</h1>
        <p className="hero-lead">{ui.welcome_body}</p>
      </div>

      {/* Grid of Cockpit Telemetry Cards */}
      <div className="telemetry-grid">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="telemetry-card cyber-card">
              <div className="stat-header">
                <Icon size={16} style={{ color: stat.color }} />
                <span className="stat-title">{stat.title}</span>
              </div>
              <div className="stat-value" style={{ textShadow: `0 0 10px ${stat.color}44` }}>
                {stat.value}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dashboard welcome local styles */}
      <style>{`
        .dashboard-hero {
          position: relative;
          padding: 4rem 2rem;
          border: 1px solid rgba(6, 182, 212, 0.15);
          background: radial-gradient(circle at 10% 20%, rgba(6, 182, 212, 0.03) 0%, rgba(0, 0, 0, 0) 100%);
          border-radius: 16px;
          margin-bottom: 2rem;
          box-shadow: inset 0 0 40px rgba(6, 182, 212, 0.02);
        }

        .telemetry-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .telemetry-ping {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--primary-glow);
          box-shadow: 0 0 10px var(--primary-glow);
          animation: ping 1.5s infinite;
        }

        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }

        .telemetry-log-txt {
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
          font-weight: bold;
          color: var(--primary-glow);
          letter-spacing: 0.2em;
          text-shadow: 0 0 8px rgba(67, 226, 198, 0.4);
        }

        .hero-content {
          margin-bottom: 3.5rem;
        }

        .hero-greeting {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, var(--text-main) 30%, var(--text-muted) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .hero-lead {
          font-size: 1.15rem;
          color: var(--text-muted);
          max-width: 800px;
          line-height: 1.7;
        }

        .telemetry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .telemetry-card {
          padding: 1.25rem !important;
        }

        .stat-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .stat-title {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .stat-value {
          font-size: 0.95rem;
          font-weight: bold;
          font-family: var(--font-family);
          color: var(--text-main);
          letter-spacing: 0.02em;
        }

        @media (max-width: 768px) {
          .hero-greeting {
            font-size: 2.5rem;
          }
          .hero-lead {
            font-size: 1rem;
          }
          .dashboard-hero {
            padding: 2.5rem 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}
