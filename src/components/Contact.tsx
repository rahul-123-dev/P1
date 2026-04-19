import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

const socialLinks = [
  { id: 'email', icon: <Mail size={20} />, label: 'Email', href: `mailto:${PORTFOLIO_DATA.contact.email}` },
  { id: 'github', icon: <Github size={20} />, label: 'GitHub', href: PORTFOLIO_DATA.contact.github },
  { id: 'linkedin', icon: <Linkedin size={20} />, label: 'LinkedIn', href: PORTFOLIO_DATA.contact.linkedin },
  { id: 'twitter', icon: <Twitter size={20} />, label: 'Twitter/X', href: PORTFOLIO_DATA.contact.twitter },
  { id: 'resume', icon: <FileText size={20} />, label: 'Resume PDF', href: PORTFOLIO_DATA.contact.resume },
];

export default function Contact() {
  return (
    <div className="h-full p-6 lg:p-8 flex flex-col items-center justify-center text-center">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8 w-full text-left">Contact</h2>
      
      <div className="mb-8">
        <h3 className="text-2xl font-display font-bold mb-2">Let's Connect</h3>
        <p className="text-xs text-text-muted">I'm currently open for new projects and collaborations. Feel free to reach out!</p>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full">
        {socialLinks.map((link) => (
          <motion.a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(124,110,224,0.1)' }}
            className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/5 group transition-all"
          >
            <span className="text-text-muted group-hover:text-primary transition-colors">
              {link.icon}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest">{link.label}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
