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

      {/* Dashboard welcome local styles moved to src/components.css */}
    </section>
  );
}
