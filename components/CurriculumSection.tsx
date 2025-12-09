import React from 'react';
import { IconArrowRight, IconBook, IconDownload } from './Icons';

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
                                La práctica pedagógica en el programa LILEI constituye un eje formativo fundamental que se desarrolla de manera progresiva y coherente. El estudiante avanza a través de diferentes fases que integran saberes disciplinarios con el entorno educativo.
                            </p>
                            <p>
                                Todo este proceso, enmarcado en los principios del MHUS, busca formar docentes éticos, reflexivos y competentes, capaces de aportar a la transformación educativa y atender las demandas lingüísticas y socioculturales de los territorios.
                            </p>
                         </div>
                         
                         <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">1</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Observación Participante</h4>
                                    <p className="text-slate-500">Análisis de contextos escolares, dinámicas institucionales y procesos pedagógicos.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">2</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Inmersión</h4>
                                    <p className="text-slate-500">Rol activo en planeación, mediación y acompañamiento de actividades de aula y diseño de estrategias didácticas.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">3</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Investigación Educativa</h4>
                                    <p className="text-slate-500">Desarrollo de proyectos que responden a necesidades reales, articulados con semilleros de investigación.</p>
                                </div>
                            </div>
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
                    </div>
                    <div className="bg-emerald-900 p-8 md:p-12 text-white flex flex-col justify-center">
                        <div className="border border-emerald-700 rounded-xl p-6 bg-emerald-800/50 backdrop-blur-sm">
                             <IconBook className="w-12 h-12 mb-4 text-emerald-400" />
                             <h3 className="text-2xl font-bold mb-4">Componente Investigativo</h3>
                             <p className="text-emerald-100 leading-relaxed">
                                "En esta fase, el futuro docente analiza problemáticas del aula, implementa intervenciones y sistematiza experiencias que fortalecen su pensamiento crítico y su formación profesional."
                             </p>
                        </div>
                    </div>
                </div>
           </div>
        </div>

        {/* PLAN DE TRANSICIÓN */}
        <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Plan de Transición y Equivalencias</h3>
            <p className="text-slate-700 mb-6 max-w-4xl">
                El plan de transición garantiza que los estudiantes del plan anterior (Resolución 09864 de 2018) puedan continuar su proceso formativo con normalidad frente a la actualización curricular. Se homologan cursos, se establecen equivalencias y se orienta el tránsito académico.
            </p>
            <div className="flex flex-wrap gap-4">
                <a 
                    href="https://sgeneral.unad.edu.co/images/documentos/consejoAcademico/acuerdos/2024/COAC_ACUE_006_19042024.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors"
                >
                    <IconDownload className="w-4 h-4" />
                    <span>Descargar Acuerdo 006 de 2024</span>
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};