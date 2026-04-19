import { motion } from 'motion/react';
import { ArrowDown, Mail, Rocket } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

export default function Hero() {
  const { text, blink } = useTypewriter(PORTFOLIO_DATA.roles);

  return (
    <div className="h-full flex flex-col justify-center p-8">
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-primary font-mono text-sm mb-2"
      >
        Hello World
      </motion.h2>

      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight"
      >
        Hey, I'm <span className="gradient-text">{PORTFOLIO_DATA.name}</span>{' '}
        <span className="inline-block animate-wiggle">👋</span>
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="h-8 flex items-center mb-6"
      >
        <p className="text-lg text-text-muted font-light italic">
          {text}
          <span className={blink ? 'opacity-100' : 'opacity-0'}>|</span>
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap gap-4"
      >
        <a href="#projects" className="btn-primary px-5 py-2 text-sm">
          View My Work 🚀
        </a>
        <a href="#contact" className="btn-secondary px-5 py-2 text-sm">
          Contact Me ✉️
        </a>
      </motion.div>
    </div>
  );
}
