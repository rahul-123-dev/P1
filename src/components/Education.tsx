import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

export default function Education() {
  return (
    <div className="h-full p-6 lg:p-8">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-8">Education</h2>

      <div className="space-y-8">
        {PORTFOLIO_DATA.education.map((edu, idx) => (
          <div key={idx} className="flex gap-4 group">
            <div className="text-2xl shrink-0 group-hover:scale-110 transition-transform">
              {edu.emoji}
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <h4 className="text-sm font-bold text-text-primary">{edu.institution}</h4>
                <span className="text-[10px] font-mono text-secondary">{edu.year}</span>
              </div>
              <p className="text-[11px] text-text-muted">
                {edu.degree} • <span className="text-secondary">{edu.grade}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
