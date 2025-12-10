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
        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: 'w-24 h-24' })}
      </div>

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border border-slate-600 group-hover:border-orange-500/50 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300 shadow-lg">
          {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: 'w-6 h-6 text-slate-300 group-hover:text-white transition-colors' })}
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

// SVG Component for the LiLEI Logo - High Fidelity Recreation based on official reference
const LileiLogoSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 950 320" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    <style>
      {`
        .lilei-blue { fill: #005696; }
        .lilei-yellow { fill: #FDB913; }
        .lilei-orange { fill: #F05E23; }
        .lilei-purple { fill: #582C58; }
        .lilei-text-purple { fill: #582C58; font-family: Arial, sans-serif; font-weight: 800; }
        .lilei-text-blue { fill: #005696; font-family: Arial, sans-serif; font-weight: 900; }
      `}
    </style>
    
    {/* --- ICON GROUP --- */}
    <g transform="translate(30, 60)">
       {/* Globe Base */}
       <circle cx="100" cy="100" r="70" className="lilei-purple" />
       
       {/* Continents (Stylized White Shapes) */}
       <path d="M80 70 C 100 70, 110 80, 120 95 C 110 100, 100 95, 95 90 C 90 95, 85 115, 90 130 C 105 135, 115 125, 130 115 C 125 130, 120 145, 115 155" fill="white" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
       <path d="M60 95 Q 70 95, 75 105 Q 70 115, 60 110 Z" fill="white" />
       
       {/* Blue Figure (Left) */}
       <circle cx="50" cy="50" r="18" className="lilei-blue" />
       <path d="M20 75 Q 15 65, 40 60 C 50 60, 60 70, 70 95 L 90 85 C 80 60, 60 45, 40 50 Z" className="lilei-blue" />
       
       {/* Yellow Figure (Top) */}
       <circle cx="120" cy="25" r="18" className="lilei-yellow" />
       <path d="M95 45 C 90 30, 110 30, 120 35 C 130 30, 150 30, 145 45 L 130 65 C 125 55, 115 55, 110 65 Z" className="lilei-yellow" />
       
       {/* Orange Figure (Bottom Left) */}
       <circle cx="20" cy="120" r="18" className="lilei-orange" />
       <path d="M30 100 C 45 95, 65 105, 75 120 L 55 140 C 45 130, 30 130, 20 135 C 10 130, 15 105, 30 100" className="lilei-orange" />
    </g>

    {/* --- TEXT GROUP --- */}
    <g transform="translate(260, 40)">
        {/* LiLEI Letters */}
        {/* L (Blue) */}
        <path d="M0 0 H55 V100 H110 V140 H0 V0 Z" className="lilei-blue" />
        
        {/* i (Blue) */}
        <rect x="130" y="0" width="45" height="45" className="lilei-blue" />
        <rect x="130" y="55" width="45" height="85" className="lilei-blue" />
        
        {/* L (Yellow) */}
        <path d="M195 0 H250 V100 H305 V140 H195 V0 Z" className="lilei-yellow" />
        
        {/* E (Yellow) */}
        <path d="M325 0 H430 V35 H380 V50 H420 V85 H380 V100 H430 V140 H325 V0 Z" className="lilei-yellow" />
        
        {/* I (Yellow) */}
        <rect x="450" y="0" width="55" height="140" className="lilei-yellow" />
        
        {/* Subtitles */}
        <text x="252" y="185" fontSize="24" textAnchor="middle" className="lilei-text-purple">LICENCIATURA EN LENGUAS EXTRANJERAS</text>
        <text x="252" y="220" fontSize="24" textAnchor="middle" className="lilei-text-purple">CON ÉNFASIS EN INGLÉS</text>
        <text x="252" y="270" fontSize="36" textAnchor="middle" className="lilei-text-blue">ECEDU</text>
    </g>
  </svg>
);

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
            <span className="text-slate-300 text-xs font-bold tracking-[0.2em] uppercase">Programa con registro calificado MEN</span>
          </div>
          
          <div className="flex justify-center mb-10">
             {/* White container for the logo, exactly as requested */}
             <div className="bg-white rounded-3xl px-8 py-6 shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-500 animate-fade-in-up">
                <LileiLogoSVG className="h-32 md:h-44 w-auto drop-shadow-sm" />
             </div>
          </div>
          
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