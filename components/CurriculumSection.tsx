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
                <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Reconfiguración del componente práctico (Resolución No. 018456 – 21 de octubre de 2024)</p>
           </div>

           <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 p-8">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-emerald-900 text-white text-center">
                                <th className="p-4 border-r border-emerald-700 w-1/3 rounded-tl-lg uppercase tracking-wider">Observación Participante</th>
                                <th className="p-4 border-r border-emerald-700 w-1/3 uppercase tracking-wider">Inmersión</th>
                                <th className="p-4 w-1/3 rounded-tr-lg uppercase tracking-wider">Investigación</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-700">
                            <tr>
                                <td className="p-6 border-r border-slate-200 align-top bg-emerald-50/30">
                                    <ul className="list-disc pl-5 space-y-2 mb-6">
                                        <li>Didáctica</li>
                                        <li>Evaluación</li>
                                        <li>Enfoques Curriculares</li>
                                        <li>Educación para la Transformación Social</li>
                                        <li>Methodology in FLT</li>
                                    </ul>
                                </td>
                                <td className="p-6 border-r border-slate-200 align-top">
                                    <ul className="list-disc pl-5 space-y-2 mb-6">
                                        <li>Teaching English to Children, Adolescents and Adults</li>
                                        <li>Technology in Foreign Language Teaching</li>
                                        <li>Integral Pedagogical Practice</li>
                                        <li>Escenarios Educativos Inclusivos</li>
                                        <li>Investigación Educativa y Pedagógica</li>
                                        <li>Prácticas Educativas Mediadas por TIC</li>
                                    </ul>
                                </td>
                                <td className="p-6 align-top bg-emerald-50/30">
                                    <ul className="list-disc pl-5 space-y-2 mb-6">
                                        <li>Educational Research</li>
                                        <li>Research Pedagogical Practice</li>
                                        <li>Pedagogical Practice in Online Environments (Virtual en todos los casos)</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="text-sm font-semibold">
                                <td className="p-4 bg-yellow-100 text-yellow-900 border-r border-white border-b-4 border-b-yellow-400 text-center">
                                    Escenario: <br/><span className="font-normal">Propio UNAD – Virtual, sin excepción</span>
                                </td>
                                <td className="p-4 bg-yellow-100 text-yellow-900 border-r border-white border-b-4 border-b-yellow-400 text-center">
                                    Escenario: <br/><span className="font-normal">Institución Educativa</span>
                                </td>
                                <td className="p-4 bg-yellow-100 text-yellow-900 border-b-4 border-b-yellow-400 text-center">
                                    Escenario: <br/><span className="font-normal">Institución Educativa – únicamente virtual para PPOE</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
                    <a 
                        href="https://academia.unad.edu.co/practica-educativa-y-pedagogica"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200"
                    >
                        <span>Ver Micrositio de la Práctica Educativa y Pedagógica</span>
                        <IconArrowRight className="w-4 h-4" />
                    </a>
                    <a 
                        href="https://www.youtube.com/watch?v=ts1o2dhbBDk"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
                    >
                        <span>Ver Video Explicativo</span>
                        <IconLink className="w-4 h-4" />
                    </a>
                </div>
                <div className="flex justify-center">
                     <BackToHome />
                </div>
           </div>
        </div>

        {/* PLAN DE TRANSICIÓN */}
        <div id="transition" className="bg-amber-50 rounded-2xl p-8 border border-amber-100 scroll-mt-32">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Plan de Transición y Equivalencias</h3>
            <div className="prose prose-lg text-slate-700 mb-6 max-w-5xl">
                <p className="mb-4">
                    El plan de transición y equivalencias es el conjunto de acciones definidas por la UNAD para garantizar que los estudiantes matriculados en el plan de estudios anterior de la Licenciatura en Lenguas Extranjeras con Énfasis en Inglés (Resolución 09864 de 2018) puedan continuar su proceso formativo con normalidad frente a la actualización curricular del programa. A través de este plan, se homologan cursos, se establecen equivalencias y se orienta el tránsito académico hacia el nuevo plan de estudios, respetando los derechos adquiridos de los estudiantes y permitiendo que se beneficien de las mejoras curriculares implementadas.
                </p>
                <p className="mb-4">
                    El acuerdo determina que los estudiantes pueden acogerse voluntariamente al nuevo plan o, en algunos casos, deben hacerlo de manera obligatoria (por ejemplo, reingresos o estudiantes que no completen el 100 % del plan anterior en el plazo de dos años). Asimismo, establece que la oferta académica del plan antiguo continuará disponible de manera gradual, conforme a lo estipulado en el acuerdo, durante un periodo máximo de dos años desde la entrada en vigencia del nuevo plan, tras lo cual los cursos del plan anterior serán retirados progresivamente de la oferta.
                </p>
                <p className="mb-4 font-semibold text-amber-900">
                    Para consultar el acuerdo completo y verificar en detalle las equivalencias, las condiciones y los plazos del proceso, puede acceder al siguiente documento oficial:
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a 
                    href="https://sgeneral.unad.edu.co/images/documentos/consejoAcademico/acuerdos/2024/COAC_ACUE_006_19042024.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors shadow-md"
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