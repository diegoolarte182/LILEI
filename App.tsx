import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { FocusSection } from './components/FocusSection';
import { CurriculumSection } from './components/CurriculumSection';
import { ProcessesSection } from './components/ProcessesSection';
import { IconMail } from './components/Icons';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
      { label: 'Inicio', id: 'top' },
      { label: 'Programa', id: 'general-info' },
      { label: 'Enfoque', id: 'pedagogical-focus' },
      { label: 'Práctica', id: 'practice' },
      { label: 'Homologación', id: 'homologation' },
      { label: 'Matrícula', id: 'registration' },
      { label: 'Transición', id: 'transition' },
      { label: 'Grado', id: 'degree' },
      { label: 'Apoyo', id: 'support' }
  ];

  const scrollToFooter = () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-xl shadow-lg border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             {/* Modern Text Logo */}
            <div className="flex flex-col leading-none">
              <span className={`text-2xl font-extrabold tracking-tighter ${isScrolled ? 'text-white' : 'text-white'}`}>
                <span className="text-blue-500">UN</span><span className="text-orange-500">AD</span>
              </span>
              <span className="text-[0.6rem] font-bold text-slate-400 tracking-[0.3em] uppercase">Licenciatura</span>
            </div>
            
            <div className="h-8 w-px bg-white/10 mx-2"></div>
            
            <span className={`font-semibold text-lg tracking-tight transition-colors ${isScrolled ? 'text-slate-200' : 'text-white/90'}`}>
              LILEI
            </span>
          </div>
          
          <div className="flex items-center gap-4">
              <div className="hidden xl:flex gap-1 bg-slate-800/30 p-1 rounded-full backdrop-blur-md border border-white/5">
                 {navItems.map((item) => (
                    <button 
                        key={item.label}
                        onClick={() => {
                            const targetId = item.id;
                            if (targetId === 'top') {
                                 window.scrollTo({ top: 0, behavior: 'smooth' });
                            } else {
                                const el = document.getElementById(targetId);
                                if (el) {
                                    const y = el.getBoundingClientRect().top + window.scrollY - 100;
                                    window.scrollTo({ top: y, behavior: 'smooth' });
                                }
                            }
                        }}
                        className={`px-4 py-2 rounded-full text-[10px] lg:text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
                            isScrolled 
                                ? 'text-slate-400 hover:text-white hover:bg-white/10' 
                                : 'text-slate-300 hover:text-white hover:bg-white/10'
                        }`}
                    >
                        {item.label}
                    </button>
                 ))}
              </div>

              {/* Contact Button in Navbar */}
              <button 
                  onClick={scrollToFooter}
                  className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 border ${
                    isScrolled 
                        ? 'bg-orange-500 text-white border-orange-500 hover:bg-orange-600' 
                        : 'bg-white/5 text-white border-white/20 hover:bg-orange-500 hover:border-orange-500'
                  }`}
              >
                  <IconMail className="w-4 h-4" />
                  <span>Contacto</span>
              </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col relative">
        <HeroSection />
        <FocusSection />
        <CurriculumSection />
        <ProcessesSection />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-20 px-4 border-t border-slate-900 relative overflow-hidden">
        {/* Abstract background shape for footer */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-12 gap-12 text-sm mb-16">
                <div className="md:col-span-5 space-y-6">
                    <div className="flex flex-col leading-none mb-4">
                      <span className="text-3xl font-extrabold tracking-tighter text-white">
                        <span className="text-blue-600">UN</span><span className="text-orange-500">AD</span>
                      </span>
                    </div>
                    <p className="leading-relaxed text-slate-500 max-w-sm text-base">
                        Licenciatura en Lenguas Extranjeras con Énfasis en Inglés. <br/>
                        Escuela de Ciencias de la Educación (ECEDU).
                    </p>
                </div>
                
                <div className="md:col-span-4">
                    <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                        <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
                        Contacto
                    </h4>
                    <div className="space-y-4 text-slate-400">
                        <div>
                            <p className="font-semibold text-white">Universidad Nacional Abierta y a Distancia</p>
                            <p>Sede Nacional: Bogotá, Colombia</p>
                        </div>
                        
                        <div className="pt-2">
                            <a 
                                href="mailto:licenciatura.ingles@unad.edu.co" 
                                className="inline-flex items-center gap-3 bg-slate-900 border border-slate-800 hover:border-orange-500/50 text-slate-300 hover:text-white px-5 py-3 rounded-lg transition-colors font-mono text-sm w-full md:w-auto"
                            >
                                <IconMail className="w-4 h-4 text-orange-500" />
                                <span>licenciatura.ingles@unad.edu.co</span>
                            </a>
                        </div>

                        <p className="text-xs text-slate-600 uppercase tracking-widest mt-4">Institución Acreditada</p>
                    </div>
                </div>
                
                <div className="md:col-span-3 flex flex-col items-start md:items-end gap-4">
                    <h4 className="text-white font-bold text-lg mb-2">Enlaces</h4>
                    <a href="https://www.unad.edu.co/" target="_blank" className="text-slate-400 hover:text-orange-400 transition-colors">Portal UNAD</a>
                    <a href="https://estudios.unad.edu.co/oferta-academica" target="_blank" className="text-slate-400 hover:text-orange-400 transition-colors">Oferta Académica</a>
                    <a href="https://sgeneral.unad.edu.co/" target="_blank" className="text-slate-400 hover:text-orange-400 transition-colors">Secretaría General</a>
                </div>
            </div>
            
            <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-medium uppercase tracking-wider">
                <span>© {new Date().getFullYear()} UNAD. Todos los derechos reservados.</span>
                <span className="mt-2 md:mt-0 opacity-50">Designed for Education</span>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;