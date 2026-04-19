import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

export default function Certifications() {
  return (
    <div className="h-full p-6 lg:p-8">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8">Certifications</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {PORTFOLIO_DATA.certifications.map((cert, idx) => (
          <div key={idx} className="flex items-center gap-3 group">
            <span className="text-xl shrink-0 p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
              {cert.emoji}
            </span>
            <div className="min-w-0">
              <h4 className="text-[11px] font-bold truncate">{cert.name}</h4>
              <p className="text-[9px] text-text-muted">{cert.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
