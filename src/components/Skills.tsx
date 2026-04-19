import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

export default function Skills() {
  return (
    <div className="h-full p-6 lg:p-8">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8">Expertise</h2>

      <div className="flex flex-col gap-6">
        {PORTFOLIO_DATA.skills.slice(0, 6).map((skill, idx) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center text-xs font-medium">
              <span className="flex items-center gap-2">
                <span>{skill.emoji}</span>
                <span>{skill.name}</span>
              </span>
              <span className="opacity-60 font-mono">{skill.level}%</span>
            </div>
            
            {/* Progress Bar Container */}
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary to-secondary"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
