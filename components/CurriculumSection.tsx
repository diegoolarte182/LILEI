import React from 'react';
import { IconArrowRight, IconBook, IconDownload, IconHome, IconLink } from './Icons';

const BackToHome = () => (
    <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-blue-600 transition-colors group uppercase tracking-wider"
    >
        <div className="p-1.5 rounded-full bg-slate-100 group-hover:bg-blue-100 transition-colors">
            <IconHome className="w-3 h-3" />
        </div>
        <span>Volver al Inicio</span>
    </button>
);

export const CurriculumSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-32">
        
        {/* 3. PRÁCTICA PEDAGÓGICA */}
        <div id="practice" className="scroll-mt-32">
           <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6 border border-slate-200">
                    Experiencia Real
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Práctica Pedagógica</h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
                    Reconfiguración del componente práctico <br/> 
                    <span className="text-sm font-semibold text-slate-400 uppercase tracking-wide">(Resolución No. 018456 – 21 de octubre de 2024)</span>
                </p>
           </div>

           <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-200">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse min-w-[900px]">
                        <thead>
                            <tr className="bg-slate-900 text-white text-center">
                                <th className="p-8 font-bold w-1/3 border-r border-slate-700 uppercase text-xs tracking-[0.15em]">Observación Participante</th>
                                <th className="p-8 font-bold w-1/3 border-r border-slate-700 uppercase text-xs tracking-[0.15em]">Inmersión</th>
                                <th className="p-8 font-bold w-1/3 uppercase text-xs tracking-[0.15em]">Investigación</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-600">
                            <tr className="bg-slate-50">
                                <td className="p-10 border-r border-slate-200 align-top">
                                    <ul className="space-y-4">
                                        {['Didáctica', 'Evaluación', 'Enfoques Curriculares', 'Educación para la Transformación Social', 'Methodology in FLT'].map(item => (
                                            <li key={item} className="flex items-start gap-3 text-sm font-medium">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="p-10 border-r border-slate-200 align-top bg-white">
                                    <ul className="space-y-4">
                                        {['Teaching English to Children, Adolescents and Adults', 'Technology in Foreign Language Teaching', 'Integral Pedagogical Practice', 'Escenarios Educativos Inclusivos', 'Investigación Educativa y Pedagógica', 'Prácticas Educativas Mediadas por TIC'].map(item => (
                                            <li key={item} className="flex items-start gap-3 text-sm font-medium">
                                                 <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="p-10 align-top">
                                    <ul className="space-y-4">
                                        {['Educational Research', 'Research Pedagogical Practice', 'Pedagogical Practice in Online Environments (Virtual en todos los casos)'].map(item => (
                                            <li key={item} className="flex items-start gap-3 text-sm font-medium">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                            <tr className="text-sm">
                                <td className="p-6 bg-slate-100 text-slate-800 border-r border-white border-t border-slate-200 text-center">
                                    <strong className="block text-slate-500 uppercase text-[10px] tracking-widest mb-2">Escenario</strong>
                                    <span className="font-semibold">Propio UNAD – Virtual, sin excepción</span>
                                </td>
                                <td className="p-6 bg-blue-50 text-blue-900 border-r border-white border-t border-slate-200 text-center">
                                    <strong className="block text-blue-400 uppercase text-[10px] tracking-widest mb-2">Escenario</strong>
                                    <span className="font-semibold">Institución Educativa</span>
                                </td>
                                <td className="p-6 bg-orange-50 text-orange-900 border-t border-slate-200 text-center">
                                    <strong className="block text-orange-400 uppercase text-[10px] tracking-widest mb-2">Escenario</strong>
                                    <span className="font-semibold">Institución Educativa (Virtual para PPOE)</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="p-10 bg-white flex flex-col md:flex-row items-center justify-center gap-6 border-t border-slate-100">
                    <a 
                        href="https://academia.unad.edu.co/practica-educativa-y-pedagogica"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-3 bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-700/30"
                    >
                        <span>Ver Micrositio de Práctica</span>
                        <IconArrowRight className="w-4 h-4" />
                    </a>
                </div>
           </div>

           {/* SEMINARIO PRE-PRACTICA SECTION */}
           <div className="mt-16 max-w-5xl mx-auto">
              <div className="bg-orange-50 rounded-[2rem] p-8 md:p-12 border border-orange-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3 relative z-10">
                   <span className="w-1.5 h-8 bg-orange-500 rounded-full block"></span>
                   Seminario Pre Práctica
                </h3>
                
                <p className="text-slate-700 text-lg leading-relaxed mb-8 font-light relative z-10">
                   El Seminario Pre Práctica como estrategia de la Escuela de Ciencias de la Educación, se desarrolla en el periodo previo al inicio de la ruta de práctica pedagógica y propicia reflexión sobre el ejercicio de la práctica y el alistamiento administrativo para que los estudiantes cuenten con las condiciones óptimas y necesarias para el inicio de su práctica pedagógica en el período académico respectivo.
                </p>

                <div className="space-y-4 mb-8 relative z-10">
                   <details className="group bg-white rounded-xl border border-orange-200 open:shadow-md transition-all duration-300">
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-800 hover:text-orange-600 transition-colors">
                         ¿Cuándo se inscribe el Seminario?
                         <span className="text-orange-400 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                      </summary>
                      <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-100 mt-2">
                         <p className="mb-4">Una vez el estudiante de licenciatura verifica el cumplimiento de prerrequisitos para el inicio de su Práctica Educativa y Pedagógica – PEP puede inscribir el Seminario Pre Práctica un periodo previo al inicio del o los primeros cursos de la ruta formativa de PEP.</p>
                         <p>El seminario pre práctica se debe inscribir cada periodo académico a partir del inicio de la ruta de práctica educativa y pedagógica.</p>
                      </div>
                   </details>

                   <details className="group bg-white rounded-xl border border-orange-200 open:shadow-md transition-all duration-300">
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-800 hover:text-orange-600 transition-colors">
                         ¿Cómo se realiza la inscripción al Seminario Pre Práctica?
                         <span className="text-orange-400 transform group-open:rotate-180 transition-transform duration-300">▼</span>
                      </summary>
                      <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-100 mt-2">
                         <p className="mb-4">El Seminario Pre práctica no es un curso ofertado en el proceso de matrícula, por lo cual, el estudiante debe estar pendiente de la convocatoria de éste a través de los correos internos del campus y de los foros colaborativos en los cursos.</p>
                         <p>El Seminario Pre Práctica abre inscripciones dos (2) veces en el año, en el mes de marzo a julio y de septiembre a diciembre. La inscripción se realiza diligenciando el formulario que el Equipo Nacional de Prácticas comparte a través de este espacio.</p>
                      </div>
                   </details>
                </div>

                <div className="relative z-10">
                    <a 
                        href="https://youtu.be/zqJvolv-uNE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white hover:bg-slate-50 text-red-600 border border-red-100 hover:border-red-200 px-6 py-3 rounded-xl font-bold transition-all shadow-sm hover:shadow-md"
                    >
                        <span>Ver Video: ¿Qué es el Seminario?</span>
                        <IconLink className="w-4 h-4" />
                    </a>
                </div>
              </div>
           </div>

           <div className="flex justify-center mt-12">
               <BackToHome />
           </div>
        </div>

        {/* PLAN DE TRANSICIÓN */}
        <div id="transition" className="bg-slate-900 rounded-[2rem] p-10 md:p-16 text-white scroll-mt-32 relative overflow-hidden shadow-2xl">
             {/* Metallic abstract shapes */}
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-slate-800 to-transparent opacity-30 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"></div>
             
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8 text-orange-400">
                    <IconBook className="w-6 h-6" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">Normatividad Académica</span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">Plan de Transición <br/> y Equivalencias</h3>
                
                <div className="grid lg:grid-cols-2 gap-12 text-slate-300 font-light text-lg leading-relaxed mb-12">
                    <div>
                        <p className="mb-6">
                            El plan de transición y equivalencias es el conjunto de acciones definidas por la UNAD para garantizar que los estudiantes matriculados en el plan de estudios anterior de la Licenciatura en Lenguas Extranjeras con Énfasis en Inglés (Resolución 09864 de 2018) puedan continuar su proceso formativo con normalidad.
                        </p>
                        <p>
                             A través de este plan, se homologan cursos, se establecen equivalencias y se orienta el tránsito académico hacia el nuevo plan de estudios.
                        </p>
                    </div>
                    <div>
                         <p>
                            El acuerdo determina que los estudiantes pueden acogerse voluntariamente al nuevo plan o, en algunos casos, deben hacerlo de manera obligatoria. Asimismo, establece que la oferta académica del plan antiguo continuará disponible de manera gradual.
                        </p>
                    </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    <a 
                        href="https://sgeneral.unad.edu.co/images/documentos/consejoAcademico/acuerdos/2024/COAC_ACUE_006_19042024.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all transform hover:-translate-y-1"
                    >
                        <IconDownload className="w-5 h-5" />
                        <span>Descargar Acuerdo 006 de 2024</span>
                    </a>
                    <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-slate-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 px-6 py-4"
                    >
                        <IconHome className="w-4 h-4" />
                        <span>Volver al Inicio</span>
                    </button>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};