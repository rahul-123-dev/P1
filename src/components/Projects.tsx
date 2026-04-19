import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

export default function Projects() {
  return (
    <div className="h-full p-6 lg:p-8 flex flex-col">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -4 }}
            className="p-4 rounded-xl border border-white/5 bg-white/5 hover:border-primary/20 transition-all group flex flex-col"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xl group-hover:scale-110 transition-transform">{project.emoji}</span>
              <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{project.title}</h4>
            </div>
            
            <p className="text-[11px] text-text-muted mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1 mb-4 mt-auto">
              {project.tech.slice(0, 3).map((t) => (
                <span key={t} className="text-[9px] bg-primary/10 text-primary/80 px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs text-text-muted hover:text-primary transition-colors flex items-center gap-1">
                <Github size={12} /> GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-xs text-text-muted hover:text-primary transition-colors flex items-center gap-1">
                <ExternalLink size={12} /> Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
