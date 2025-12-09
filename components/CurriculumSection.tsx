import React from 'react';
import { IconArrowRight, IconBook, IconDownload, IconHome, IconLink } from './Icons';

const BackToHome = () => (
    <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-emerald-600 transition-colors"
    >
        <IconHome className="w-4 h-4" />
        <span>Volver al Inicio</span>
    </button>
);

export const CurriculumSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-24">
        
        {/* 3. PRÁCTICA PEDAGÓGICA */}
        <div id="practice" className="scroll-mt-32">
           <div className="text-center mb-12">
                <span className="text-emerald-600 font-semibold tracking-wider text-sm uppercase">Experiencia Real</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">Práctica Pedagógica</h2>
           </div>

           <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                <div className="grid lg:grid-cols-2">
                    <div className="p-8 md:p-12">
                         <div className="prose prose-lg text-slate-600 mb-8">
                            <p>
                                La práctica pedagógica en el programa de Licenciatura en Lenguas Extranjeras con Énfasis en Inglés constituye un eje formativo fundamental que se desarrolla de manera progresiva y coherente con las etapas del proceso educativo. En los primeros momentos, el estudiante participa en prácticas de observación participante, donde analiza contextos escolares, identifica dinámicas institucionales y reconoce procesos pedagógicos relacionados con la enseñanza del inglés.
                            </p>
                            <p>
                                Posteriormente, avanza hacia prácticas de inmersión, en las cuales asume un rol más activo en la planeación, mediación y acompañamiento de actividades de aula, diseñando e implementando estrategias didácticas propias de la enseñanza del inglés como lengua extranjera.
                            </p>
                            <p>
                                Finalmente, el programa incorpora prácticas pedagógicas orientadas a la investigación educativa. En esta fase, el futuro docente analiza problemáticas del aula, implementa intervenciones y sistematiza experiencias que fortalecen su pensamiento crítico y su formación profesional. Todo este proceso, enmarcado en los principios del MHUS, busca formar docentes éticos, reflexivos y competentes.
                            </p>
                         </div>
                         
                         <div className="mt-10">
                             <a 
                                href="https://academia.unad.edu.co/practica-educativa-y-pedagogica"
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-800 transition-colors border-b-2 border-transparent hover:border-emerald-600"
                            >
                                <span>Ver Ruta de Práctica Educativa</span>
                                <IconArrowRight className="w-4 h-4" />
                             </a>
                         </div>
                         <BackToHome />
                    </div>
                    <div className="bg-emerald-900 p-8 md:p-12 text-white flex flex-col justify-center">
                        <div className="space-y-6">
                            <div className="border border-emerald-700 rounded-xl p-6 bg-emerald-800/50 backdrop-blur-sm">
                                 <h4 className="text-xl font-bold mb-2 text-emerald-200">1. Observación Participante</h4>
                                 <p className="text-emerald-100 text-sm">Análisis de contextos escolares y dinámicas institucionales.</p>
                            </div>
                            <div className="border border-emerald-700 rounded-xl p-6 bg-emerald-800/50 backdrop-blur-sm">
                                 <h4 className="text-xl font-bold mb-2 text-emerald-200">2. Inmersión</h4>
                                 <p className="text-emerald-100 text-sm">Rol activo en planeación y acompañamiento de actividades de aula.</p>
                            </div>
                            <div className="border border-emerald-700 rounded-xl p-6 bg-emerald-800/50 backdrop-blur-sm">
                                 <h4 className="text-xl font-bold mb-2 text-emerald-200">3. Investigación Educativa</h4>
                                 <p className="text-emerald-100 text-sm">Proyectos articulados con semilleros de investigación para atender necesidades reales.</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>

        {/* PLAN DE TRANSICIÓN */}
        <div id="transition" className="bg-amber-50 rounded-2xl p-8 border border-amber-100 scroll-mt-32">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Plan de Transición y Equivalencias</h3>
            <div className="prose prose-lg text-slate-700 mb-6 max-w-5xl">
                <p className="mb-4">
                    El plan de transición y equivalencias es el conjunto de acciones definidas por la UNAD para garantizar que los estudiantes matriculados en el plan de estudios anterior de la Licenciatura en Lenguas Extranjeras con Énfasis en Inglés (Resolución 09864 de 2018) puedan continuar su proceso formativo con normalidad frente a la actualización curricular del programa.
                </p>
                <p className="mb-4">
                    El acuerdo determina que los estudiantes pueden acogerse voluntariamente al nuevo plan o, en algunos casos, deben hacerlo de manera obligatoria. Asimismo, establece que la oferta académica del plan antiguo continuará disponible de manera gradual durante un periodo máximo de dos años.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a 
                    href="https://sgeneral.unad.edu.co/images/documentos/consejoAcademico/acuerdos/2024/COAC_ACUE_006_19042024.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors"
                >
                    <IconDownload className="w-4 h-4" />
                    <span>Descargar Acuerdo 006 de 2024</span>
                </a>
                <BackToHome />
            </div>
        </div>

      </div>
    </section>
  );
};