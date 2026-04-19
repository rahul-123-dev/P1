import { PORTFOLIO_DATA } from '../constants/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 text-center">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full opacity-50" />
        
        <p className="text-text-muted text-sm font-medium tracking-wide">
          Made with <span className="text-red-500 animate-pulse">❤️</span> + <span className="text-primary hover:rotate-12 inline-block transition-transform">☕</span> by{' '}
          <span className="text-text-primary font-bold">{PORTFOLIO_DATA.name}</span>
        </p>
        
        <div className="text-[10px] uppercase tracking-[0.2em] text-text-muted/60 flex flex-col sm:flex-row items-center justify-center gap-4">
          <span>&copy; {currentYear} ALL RIGHTS RESERVED</span>
          <span className="hidden sm:block opacity-30">|</span>
          <span>BUILT WITH REACT + FRAMER MOTION</span>
        </div>
      </div>
    </footer>
  );
}
