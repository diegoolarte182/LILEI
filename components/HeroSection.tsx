import React from 'react';
import { IconGlobe, IconLaptop, IconUsers, IconBook, IconGraduation, IconCheckCircle, IconArrowRight, IconFileText, IconDownload } from './Icons';

interface HeroButtonProps {
  label: string;
  icon: React.ReactNode;
  colorClass: string;
  targetId: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({ label, icon, colorClass, targetId }) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      // Offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={scrollToSection}
      className={`${colorClass} group relative overflow-hidden rounded-2xl p-6 h-36 md:h-44 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-white/10 flex flex-col justify-between`}
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform scale-150 origin-top-right">
        {icon}
      </div>
      <div className="relative z-10">
        <div className="p-2 bg-white/20 w-fit rounded-lg backdrop-blur-sm mb-4">
          {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6 text-white' })}
        </div>
      </div>
      <div className="relative z-10">
        <h3 className="text-lg md:text-xl font-bold text-white mb-1 leading-tight">{label}</h3>
        <div className="flex items-center gap-2 text-white/80 text-xs md:text-sm font-medium group-hover:text-white group-hover:translate-x-1 transition-all">
          <span>Ver Detalles</span>
          <IconArrowRight className="w-3 h-3" />
        </div>
      </div>
    </button>
  );
};

export const HeroSection: React.FC = () => {
  return (
    <header id="top" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-slate-900 pt-24 pb-20">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[128px] opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[128px] opacity-10"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-900/50 border border-blue-700 text-blue-300 text-sm font-semibold mb-6 tracking-wide">
            PROGRAMA ACADÉMICO UNAD
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-300">LILEI</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-slate-300 mb-8">
            Licenciatura en Lenguas Extranjeras con Énfasis en Inglés
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
             Un programa innovador, intercultural e inclusivo para los docentes del futuro.
          </p>
        </div>

        {/* The 8 Main Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          <HeroButton 
            label="Información General" 
            icon={<IconGlobe />} 
            colorClass="bg-gradient-to-br from-indigo-600 to-indigo-800"
            targetId="general-info"
          />
          <HeroButton 
            label="Enfoque Pedagógico" 
            icon={<IconLaptop />} 
            colorClass="bg-gradient-to-br from-blue-600 to-blue-800"
            targetId="pedagogical-focus"
          />
          <HeroButton 
            label="Práctica Pedagógica" 
            icon={<IconBook />} 
            colorClass="bg-gradient-to-br from-emerald-600 to-emerald-800"
            targetId="practice"
          />
          <HeroButton 
            label="Homologaciones" 
            icon={<IconCheckCircle />} 
            colorClass="bg-gradient-to-br from-amber-600 to-amber-800"
            targetId="homologation"
          />
          <HeroButton 
            label="Matrícula" 
            icon={<IconFileText />} 
            colorClass="bg-gradient-to-br from-cyan-600 to-cyan-800"
            targetId="registration"
          />
          <HeroButton 
            label="Plan de Transición" 
            icon={<IconDownload />} 
            colorClass="bg-gradient-to-br from-orange-600 to-orange-800"
            targetId="transition"
          />
          <HeroButton 
            label="Opciones de Grado" 
            icon={<IconGraduation />} 
            colorClass="bg-gradient-to-br from-purple-600 to-purple-800"
            targetId="degree"
          />
          <HeroButton 
            label="Acompañamiento" 
            icon={<IconUsers />} 
            colorClass="bg-gradient-to-br from-teal-600 to-teal-800"
            targetId="support"
          />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 hidden md:block">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  );
};