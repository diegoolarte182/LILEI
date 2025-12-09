import React from 'react';
import { IconGlobe, IconLaptop, IconCheckCircle, IconArrowRight, IconLink, IconHome } from './Icons';

const BackToHome = () => (
    <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-indigo-600 transition-colors"
    >
        <IconHome className="w-4 h-4" />
        <span>Volver al Inicio</span>
    </button>
);

export const FocusSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-24">
      
      {/* 1. INFORMACIÓN GENERAL */}
      <div id="general-info" className="scroll-mt-32">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold mb-6">
                    <IconGlobe className="w-4 h-4" />
                    <span>LILEI</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Información General
                </h2>
                <div className="prose prose-lg text-slate-600">
                    <p className="mb-4">
                        El programa de Licenciatura en Lenguas Extranjeras con Énfasis en Inglés (LiLEI) de la UNAD es una propuesta académica innovadora diseñada para formar profesionales competentes en la enseñanza del inglés, con un enfoque crítico, intercultural e inclusivo. A través de una modalidad 100% virtual, el programa promueve la flexibilidad académica, permitiendo a los estudiantes adaptar su proceso de aprendizaje a sus necesidades personales y laborales.
                    </p>
                    <p className="mb-4">
                        La formación en LiLEI integra competencias pedagógicas, lingüísticas y tecnológicas, preparando docentes capaces de diseñar estrategias didácticas innovadoras para contextos diversos, con énfasis en el uso de herramientas digitales. Además, el programa fomenta la investigación en el campo de la enseñanza de lenguas extranjeras, alineado con los estándares internacionales (MCER) y las demandas educativas actuales.
                    </p>
                </div>
                
                <div className="mt-8">
                    <a 
                        href="https://estudios.unad.edu.co/licenciatura-en-lenguas-extranjeras-con-enfasis-en-ingles" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg shadow-indigo-200"
                    >
                        <span>Visitar Sitio Web del Programa</span>
                        <IconLink className="w-4 h-4" />
                    </a>
                </div>
                <BackToHome />
            </div>
            
            <div className="lg:w-1/2 w-full">
                <div className="bg-indigo-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
                     <h3 className="text-2xl font-bold mb-6">Datos Clave</h3>
                     <div className="space-y-6">
                        <div className="flex items-center gap-4 border-b border-indigo-700 pb-4">
                            <div className="bg-indigo-800 p-3 rounded-lg"><IconLaptop className="w-6 h-6"/></div>
                            <div>
                                <span className="block text-indigo-300 text-sm">Modalidad</span>
                                <span className="font-semibold text-lg">100% Virtual</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 border-b border-indigo-700 pb-4">
                            <div className="bg-indigo-800 p-3 rounded-lg"><IconGlobe className="w-6 h-6"/></div>
                            <div>
                                <span className="block text-indigo-300 text-sm">Investigación</span>
                                <span className="font-semibold text-lg">Semilleros Activos</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-indigo-800 p-3 rounded-lg"><IconCheckCircle className="w-6 h-6"/></div>
                            <div>
                                <span className="block text-indigo-300 text-sm">Enfoque</span>
                                <span className="font-semibold text-lg">Intercultural e Inclusivo</span>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </div>

      <div className="w-full h-px bg-slate-200"></div>

      {/* 2. ENFOQUE PEDAGÓGICO */}
      <div id="pedagogical-focus" className="scroll-mt-32">
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                        <h4 className="font-bold text-blue-800 mb-2">CLIL & TBL</h4>
                        <p className="text-sm text-blue-700">Integración de contenidos, lenguas y aprendizaje basado en tareas.</p>
                    </div>
                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                         <h4 className="font-bold text-amber-800 mb-2">Didáctica</h4>
                        <p className="text-sm text-amber-700">Diseño de materiales, evaluación y gestión de entornos virtuales.</p>
                    </div>
                    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                         <h4 className="font-bold text-emerald-800 mb-2">Competencias</h4>
                        <p className="text-sm text-emerald-700">Formación pedagógica, lingüística y tecnológica.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                         <h4 className="font-bold text-purple-800 mb-2">Herramientas</h4>
                        <p className="text-sm text-purple-700">Uso de Moodle, simuladores y recursos multimedia.</p>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                    <IconLaptop className="w-4 h-4" />
                    <span>Metodología</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Enfoque Pedagógico
                </h2>
                <div className="prose prose-lg text-slate-600">
                    <p className="mb-4">
                        El programa Licenciatura en Lenguas Extranjeras con Énfasis en Inglés (LILEI) de la UNAD combina teoría y práctica para formar docentes altamente competentes. Integra cursos en didáctica del inglés, pedagogía de las lenguas, lingüística aplicada y tecnologías educativas, utilizando metodologías innovadoras como <strong>CLIL</strong> (Aprendizaje Integrado de Contenidos y Lenguas) y <strong>Task-Based Learning</strong>.
                    </p>
                    <p className="mb-4">
                        Además, prepara a los estudiantes para diseñar materiales didácticos, evaluar competencias lingüísticas y gestionar entornos virtuales de aprendizaje, siempre con un enfoque inclusivo e intercultural.
                    </p>
                    <p className="mb-4">
                        Con un modelo 100% virtual, el programa enfatiza el uso de herramientas digitales (Moodle, simuladores pedagógicos y recursos multimedia) para la enseñanza del inglés. Los graduados desarrollan habilidades para adaptarse a diversos contextos educativos, fomentando un aprendizaje autónomo y colaborativo. La formación incluye un componente de práctica pedagógica educativa y está alineada con los estándares del Marco Común Europeo de Referencia (MCER) y las políticas del Ministerio de Educación Nacional.
                    </p>
                </div>
                 <div className="mt-8">
                    <a 
                        href="https://estudios.unad.edu.co/plan-de-estudios-licenciatura-en-lenguas-extranjeras-con-enfasis-en-ingles-nueva" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
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