import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';
import { cn } from '../lib/utils';

export default function Experience() {
  return (
    <div className="h-full p-6 lg:p-8">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8">Experience</h2>

      <div className="relative border-l border-dashed border-primary/30 ml-2 pl-6 space-y-10">
        {PORTFOLIO_DATA.experience.slice(0, 3).map((exp, idx) => (
          <div key={idx} className="relative">
            {/* Timeline center dot */}
            <div className={cn(
              "absolute -left-[30px] top-1 w-3 h-3 rounded-full",
              idx === 0 ? "bg-primary shadow-[0_0_8px_#7c6ee0] animate-pulse" : "bg-gray-600"
            )} />
            
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2">
              <h4 className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">
                {exp.role} @ {exp.company}
              </h4>
              <span className="text-[10px] font-mono opacity-40 whitespace-nowrap">
                {exp.date}
              </span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
