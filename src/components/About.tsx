import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

export default function About() {
  return (
    <div className="h-full p-6 lg:p-8 flex flex-col justify-center">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">About Me</h2>
      <p className="text-sm text-text-muted leading-relaxed mb-6">
        🧠 Curiosity-driven builder based in {PORTFOLIO_DATA.city}. I craft high-performance digital experiences with a focus on polished interactions.
      </p>

      <div className="flex flex-wrap gap-2">
        {PORTFOLIO_DATA.funFacts.map((fact, idx) => (
          <span 
            key={idx}
            className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase border border-white/10 hover:border-primary/30 transition-colors"
          >
            {fact.emoji} {fact.text}
          </span>
        ))}
      </div>
    </div>
  );
}
