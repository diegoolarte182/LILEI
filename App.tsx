import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { FocusSection } from './components/FocusSection';
import { CurriculumSection } from './components/CurriculumSection';
import { ProcessesSection } from './components/ProcessesSection';

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
      { label: 'Práctica', id: 'practice' },
      { label: 'Homologación', id: 'homologation' },
      { label: 'Grado', id: 'degree' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
             {/* Abstract Logo Placeholder */}
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold transition-colors ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-900'}`}>
              L
            </div>
            <span className={`font-bold text-lg tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              UNAD <span className="font-light opacity-80">| LILEI</span>
            </span>
          </div>
          <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium">
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
                    className={`${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-200 hover:text-white'} transition-colors`}
                >
                    {item.label}
                </button>
             ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col">
        <HeroSection />
        <FocusSection />
        <CurriculumSection />
        <ProcessesSection />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
            <div>
                <h4 className="text-white font-bold text-lg mb-4">LILEI</h4>
                <p>Licenciatura en Lenguas Extranjeras con Énfasis en Inglés. Escuela de Ciencias de la Educación (ECEDU).</p>
            </div>
            <div>
                <h4 className="text-white font-bold text-lg mb-4">Contacto</h4>
                <p className="mb-2">Universidad Nacional Abierta y a Distancia</p>
                <p>Sede Nacional: Bogotá, Colombia</p>
            </div>
            <div className="flex flex-col gap-2 items-start md:items-end">
                <a href="https://www.unad.edu.co/" target="_blank" className="hover:text-blue-400 transition-colors">Portal UNAD</a>
                <a href="https://estudios.unad.edu.co/oferta-academica" target="_blank" className="hover:text-blue-400 transition-colors">Oferta Académica</a>
                <span className="text-slate-600 mt-4">© {new Date().getFullYear()} Diseño Moderno LILEI</span>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;