import React from 'react';
import { IconGlobe, IconLaptop, IconUsers, IconBook, IconGraduation, IconCheckCircle, IconArrowRight, IconFileText, IconDownload, IconOwl } from './Icons';

interface HeroButtonProps {
  label: string;
  icon: React.ReactNode;
  targetId: string;
  delay: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({ label, icon, targetId, delay }) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={scrollToSection}
      className={`group relative overflow-hidden rounded-2xl p-6 h-40 flex flex-col justify-between text-left transition-all duration-500 
      bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/50
      hover:border-orange-400/50 hover:shadow-[0_0_30px_rgba(251,146,60,0.15)] hover:-translate-y-1`}
      style={{ animationDelay: delay }}
    >
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Icon Background Decoration */}
      <div className="absolute -right-4 -top-4 text-white/5 group-hover:text-orange-500/10 transition-colors duration-500 transform rotate-12 scale-150">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-24 h-24' })}
      </div>

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border border-slate-600 group-hover:border-orange-500/50 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300 shadow-lg">
          {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6 text-slate-300 group-hover:text-white transition-colors' })}
        </div>
      </div>

      <div className="relative z-10 mt-auto">
        <h3 className="text-lg font-bold text-slate-100 group-hover:text-white mb-1 tracking-tight">{label}</h3>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-orange-300 uppercase tracking-wider transition-colors">
          <span>Explorar</span>
          <IconArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </button>
  );
};

// Component for the animated owl background pattern
const OwlBackground = () => {
  // Creating a grid of owls with staggered animations
  const owls = Array.from({ length: 18 });
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/20 to-transparent opacity-50"></div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-16 md:gap-32 p-12 transform -rotate-6 scale-125 opacity-10">
        {owls.map((_, i) => (
          <div key={i} className={`flex justify-center ${
            i % 3 === 0 ? 'animate-float-slow' : i % 2 === 0 ? 'animate-float-medium' : 'animate-float-fast'
          }`}>
             <IconOwl className="w-20 h-20 text-slate-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export const HeroSection: React.FC = () => {
  return (
    <header id="top" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-slate-950 pt-32 pb-24">
      
      {/* Background Layer 1: Silver/Dark Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950 via-[#0f172a] to-slate-900"></div>
      
      {/* Background Layer 2: Owl Pattern */}
      <OwlBackground />

      {/* Background Layer 3: Metallic Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px]"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="text-center mb-20 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-slate-300 text-xs font-bold tracking-[0.2em] uppercase">Programa Acreditado UNAD</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent drop-shadow-sm">LILEI</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-light text-slate-300 mb-8 inline-block max-w-4xl mx-auto leading-snug">
            Licenciatura en Lenguas Extranjeras con <br className="hidden md:block" />
            <span className="font-semibold text-orange-400">Énfasis en Inglés</span>
          </h2>
          
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-light border-t border-slate-800 pt-8 mt-4">
             Formación docente de vanguardia con visión internacional, enfoque crítico y herramientas tecnológicas modernas.
          </p>
        </div>

        {/* The 8 Main Buttons Grid - Modern Metallic Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-7xl mx-auto perspective-1000">
          <HeroButton label="Información General" icon={<IconGlobe />} targetId="general-info" delay="0ms"/>
          <HeroButton label="Enfoque Pedagógico" icon={<IconLaptop />} targetId="pedagogical-focus" delay="100ms"/>
          <HeroButton label="Práctica Pedagógica" icon={<IconBook />} targetId="practice" delay="200ms"/>
          <HeroButton label="Homologaciones" icon={<IconCheckCircle />} targetId="homologation" delay="300ms"/>
          <HeroButton label="Matrícula" icon={<IconFileText />} targetId="registration" delay="400ms"/>
          <HeroButton label="Plan de Transición" icon={<IconDownload />} targetId="transition" delay="500ms"/>
          <HeroButton label="Opciones de Grado" icon={<IconGraduation />} targetId="degree" delay="600ms"/>
          <HeroButton label="Acompañamiento" icon={<IconUsers />} targetId="support" delay="700ms"/>
        </div>
      </div>
      
      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-slate-400 to-transparent"></div>
        <span className="text-[10px] uppercase tracking-widest text-slate-500">Scroll</span>
      </div>
    </header>
  );
};