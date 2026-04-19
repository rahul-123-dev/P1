/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useActiveSection } from './hooks/useActiveSection';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];

export default function App() {
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="relative min-h-screen bg-bg text-text-primary selection:bg-primary/30 p-4 md:p-8 flex flex-col md:flex-row gap-6">
      <CustomCursor />
      
      {/* Background Blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      {/* Side Navigation - Bento Style */}
      <nav className="w-full md:w-20 flex md:flex-col items-center justify-between py-6 px-4 bento-card border-none bg-opacity-40 shrink-0 h-auto md:h-screen sticky top-8">
        <div className="text-2xl font-bold tracking-tighter gradient-text font-display">RKB</div>
        <div className="flex md:flex-col gap-6 md:gap-8 opacity-60">
          <a href="#hero" className="hover:text-primary transition-colors text-xl">🏠</a>
          <a href="#about" className="hover:text-primary transition-colors text-xl">👤</a>
          <a href="#skills" className="hover:text-primary transition-colors text-xl">🛠️</a>
          <a href="#projects" className="hover:text-primary transition-colors text-xl">📂</a>
          <a href="#contact" className="hover:text-primary transition-colors text-xl">✉️</a>
        </div>
        <div className="hidden md:block text-[10px] rotate-[-90deg] whitespace-nowrap opacity-30 tracking-[0.3em] font-mono">
          2026 © PORTFOLIO
        </div>
      </nav>
      
      {/* Main Content - Bento Grid */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto md:auto-rows-[minmax(120px,auto)] pb-20">
        {/* Hero Section */}
        <div id="hero" className="md:col-span-8 md:row-span-3 bento-card">
          <Hero />
        </div>

        {/* About Section */}
        <div id="about" className="md:col-span-4 md:row-span-3 bento-card">
          <About />
        </div>

        {/* Skills Section */}
        <div id="skills" className="md:col-span-4 md:row-span-4 bento-card">
          <Skills />
        </div>

        {/* Projects Section */}
        <div id="projects" className="md:col-span-8 md:row-span-4 bento-card">
          <Projects />
        </div>

        {/* Experience Section */}
        <div id="experience" className="md:col-span-8 md:row-span-3 bento-card">
          <Experience />
        </div>

        {/* Contact/Social Links Section */}
        <div id="contact" className="md:col-span-4 md:row-span-3 bento-card">
          <Contact />
        </div>
        
        {/* Additional Sections */}
        <div id="education" className="md:col-span-6 md:row-span-2 bento-card">
           <Education />
        </div>

        <div id="certifications" className="md:col-span-6 md:row-span-2 bento-card">
           <Certifications />
        </div>

        {/* Footer */}
        <div className="md:col-span-12 mt-8">
          <Footer />
        </div>
      </main>
    </div>
  );
}
