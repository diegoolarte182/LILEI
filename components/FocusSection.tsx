import React from 'react';
import { IconGlobe, IconLaptop, IconCheckCircle, IconArrowRight, IconLink, IconHome } from './Icons';

const BackToHome = () => (
    <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-orange-500 transition-colors group uppercase tracking-wider"
    >
        <div className="p-1.5 rounded-full bg-slate-100 group-hover:bg-orange-100 transition-colors">
            <IconHome className="w-3 h-3" />
        </div>
        <span>Volver al Inicio</span>
    </button>
);

export const FocusSection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-32 bg-slate-50 relative">
      
      {/* 1. INFORMACIÓN GENERAL */}
      <div id="general-info" className="scroll-mt-32">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/50 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6 border border-slate-300">
                    <IconGlobe className="w-3 h-3" />
                    <span>Programa</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                    Información <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">General</span>
                </h2>
                <div className="text-lg text-slate-600 space-y-6 font-light leading-relaxed">
                    <p>
                        El programa de <strong className="text-slate-800">Licenciatura en Lenguas Extranjeras con Énfasis en Inglés (LiLEI)</strong> de la UNAD es una propuesta académica innovadora diseñada para formar profesionales competentes en la enseñanza del inglés, con un enfoque crítico, intercultural e inclusivo. 
                    </p>
                    <p>
                        A través de una modalidad <strong className="text-orange-600">100% virtual</strong>, el programa promueve la flexibilidad académica, permitiendo a los estudiantes adaptar su proceso de aprendizaje a sus necesidades personales y laborales.
                    </p>
                </div>
                
                <div className="mt-12">
                    <a 
                        href="https://estudios.unad.edu.co/licenciatura-en-lenguas-extranjeras-con-enfasis-en-ingles" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 bg-slate-900 hover:bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-xl shadow-slate-900/20 hover:-translate-y-1"
                    >
                        <span>Visitar Sitio Web Oficial</span>
                        <IconLink className="w-4 h-4 text-orange-400" />
                    </a>
                </div>
                <BackToHome />
            </div>
            
            <div className="lg:w-1/2 w-full">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl border border-slate-700">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-20 rounded-full blur-[80px] -mr-10 -mt-10"></div>
                     <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 opacity-10 rounded-full blur-[80px] -ml-10 -mb-10"></div>
                     
                     <h3 className="text-2xl font-bold mb-10 flex items-center gap-4">
                        <span className="w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full block"></span>
                        Datos Clave
                     </h3>
                     
                     <div className="space-y-6 relative z-10">
                        {[
                            { icon: IconLaptop, label: 'Modalidad', value: '100% Virtual' },
                            { icon: IconGlobe, label: 'Investigación', value: 'Semilleros Activos' },
                            { icon: IconCheckCircle, label: 'Enfoque', value: 'Intercultural e Inclusivo' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                <div className="p-3 bg-slate-800 rounded-xl text-orange-400 border border-slate-700 shadow-inner">
                                    <item.icon className="w-6 h-6"/>
                                </div>
                                <div>
                                    <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-0.5">{item.label}</span>
                                    <span className="font-bold text-xl text-slate-100">{item.value}</span>
                                </div>
                            </div>
                        ))}
                     </div>
                </div>
            </div>
        </div>
      </div>

      <div className="w-full h-px bg-slate-200"></div>

      {/* 2. ENFOQUE PEDAGÓGICO */}
      <div id="pedagogical-focus" className="scroll-mt-32">
        <div className="flex flex-col-reverse lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { title: 'CLIL & TBL', desc: 'Integración de contenidos, lenguas y aprendizaje basado en tareas.' },
                        { title: 'Didáctica', desc: 'Diseño de materiales, evaluación y gestión de entornos virtuales.' },
                        { title: 'Competencias', desc: 'Formación pedagógica, lingüística y tecnológica integral.' },
                        { title: 'Tecnología', desc: 'Uso avanzado de Moodle, simuladores y recursos multimedia.' }
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)] hover:border-orange-200 transition-all group">
                            <h4 className="font-bold text-slate-900 mb-3 text-lg group-hover:text-blue-700 transition-colors">{card.title}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed font-light">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/50 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6 border border-slate-300">
                    <IconLaptop className="w-3 h-3" />
                    <span>Metodología</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                    Enfoque <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">Pedagógico</span>
                </h2>
                <div className="text-lg text-slate-600 space-y-6 font-light leading-relaxed">
                    <p>
                        El programa combina teoría y práctica para formar docentes altamente competentes. Integra cursos en didáctica del inglés, pedagogía de las lenguas, lingüística aplicada y tecnologías educativas, utilizando metodologías innovadoras como <strong>CLIL</strong> (Aprendizaje Integrado de Contenidos y Lenguas) y <strong>Task-Based Learning</strong>.
                    </p>
                    <p>
                        Además, prepara a los estudiantes para diseñar materiales didácticos, evaluar competencias lingüísticas y gestionar entornos virtuales de aprendizaje, siempre con un enfoque inclusivo e intercultural.
                    </p>
                    <p>
                         Asegurando una educación de calidad y pertinencia social.
                    </p>
                </div>
                 <div className="mt-10">
                    <a 
                        href="https://estudios.unad.edu.co/plan-de-estudios-licenciatura-en-lenguas-extranjeras-con-enfasis-en-ingles-nueva" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-blue-700 font-bold hover:text-blue-900 transition-colors border-b-2 border-blue-200 hover:border-blue-900 pb-1"
                    >
                        <span>Ver Plan de Estudios Completo</span>
                        <IconArrowRight className="w-4 h-4" />
                    </a>
                </div>
                <BackToHome />
            </div>
        </div>
      </div>
    </section>
  );
};