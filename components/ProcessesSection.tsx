import React from 'react';
import { IconCheckCircle, IconFileText, IconArrowRight, IconMail, IconLink, IconUsers, IconHome, IconDownload } from './Icons';

const BackToHome = () => (
    <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="mt-8 flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-blue-700 transition-colors group uppercase tracking-wider"
    >
        <div className="p-1.5 rounded-full bg-slate-100 group-hover:bg-blue-100 transition-colors">
            <IconHome className="w-3 h-3" />
        </div>
        <span>Volver al Inicio</span>
    </button>
);

export const ProcessesSection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-32 bg-slate-50">
      
      {/* 4. HOMOLOGACIONES */}
      <div id="homologation" className="scroll-mt-32">
        <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6 border border-orange-200">
                <IconCheckCircle className="w-3 h-3" />
                <span>Validación de Saberes</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Homologación de Lengua</h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] shadow-xl overflow-hidden">
            <div className="p-10 md:p-14 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 text-center">
                <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10 font-light">
                    La homologación de los cursos de Inglés del programa se realiza exclusivamente mediante certificación de nivel de lengua obtenida en un examen estandarizado reconocido internacionalmente.
                </p>
                <div className="flex justify-center gap-6 flex-wrap">
                    <button className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">
                        <IconDownload className="w-4 h-4 text-slate-400" />
                        <span>Descargar Acuerdo 421 de 2025</span>
                    </button>
                     <button className="inline-flex items-center gap-3 bg-white text-slate-700 border border-slate-200 px-8 py-3 rounded-xl font-medium hover:bg-slate-50 hover:border-slate-300 hover:text-blue-700 transition-all shadow-sm">
                        <IconFileText className="w-4 h-4" />
                        <span>Ver Guía Solicitud</span>
                    </button>
                </div>
            </div>
            
            <div className="p-10 md:p-14">
                <h3 className="text-xs font-bold text-slate-400 mb-8 text-center uppercase tracking-[0.2em]">Tabla de Equivalencias</h3>
                <div className="overflow-x-auto">
                    <table className="w-full max-w-4xl mx-auto border-separate border-spacing-y-2">
                        <thead>
                            <tr>
                                <th className="p-4 text-left text-xs font-bold uppercase text-slate-400 tracking-wider">Nivel MCER</th>
                                <th className="p-4 text-left text-xs font-bold uppercase text-slate-400 tracking-wider">Cursos UNAD Homologables</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-700">
                            {[
                                { lvl: 'A1', course: 'Elementary English' },
                                { lvl: 'A2', course: 'English I y English II' },
                                { lvl: 'B1', course: 'English III y English IV' },
                                { lvl: 'B2', course: 'English V y English VI' },
                                { lvl: 'C1', course: 'English VII: Conv. & English VIII: Writing' },
                            ].map((row, idx) => (
                                <tr key={row.lvl} className="bg-white hover:bg-blue-50/50 transition-colors shadow-sm group">
                                    <td className="p-6 font-bold text-blue-900 border border-slate-100 rounded-l-xl group-hover:border-blue-100">{row.lvl}</td>
                                    <td className="p-6 border-y border-r border-slate-100 rounded-r-xl group-hover:border-blue-100">{row.course}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-10 flex justify-center">
                    <BackToHome />
                </div>
            </div>
        </div>
      </div>

      {/* MATRICULA */}
      <div id="registration" className="scroll-mt-32 rounded-[2.5rem] p-10 md:p-16 bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-2xl relative overflow-hidden">
          {/* Metallic glow effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
              <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-8 text-blue-300">
                    <IconFileText className="w-6 h-6" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">Trámites Administrativos</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-8">Proceso de Matrícula</h3>
                  <div className="space-y-8 text-slate-300 text-lg font-light leading-relaxed">
                      <p>
                          Para realizar la matrícula en la UNAD, primero debes completar el registro en el formulario de inscripción, diligenciar tus datos personales y cargar los documentos solicitados.
                      </p>
                      <div className="bg-white/5 border-l-4 border-orange-500 p-8 rounded-r-2xl backdrop-blur-md">
                          <strong className="block text-orange-400 mb-2 font-bold text-sm uppercase tracking-wide">Importante</strong>
                          <p className="text-base text-white/90">
                              Para evitar retrasos, tenga listos sus documentos soporte, verifique la exactitud de la información registrada y realice el pago dentro de las fechas establecidas.
                          </p>
                      </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-8 mt-12">
                      <a 
                        href="https://estudios.unad.edu.co/inscripciones-y-matriculas" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                      >
                          <span>Inscripciones y Matrículas</span>
                          <IconArrowRight className="w-4 h-4" />
                      </a>
                      <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors uppercase tracking-wider"
                    >
                        <IconHome className="w-4 h-4" />
                        <span>Volver al Inicio</span>
                    </button>
                  </div>
              </div>
          </div>
      </div>

      {/* 5. OPCIONES DE GRADO */}
      <div id="degree" className="scroll-mt-32">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">Opciones de Grado</h2>
        <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-10">
                <p className="text-slate-600 text-xl leading-relaxed font-light">
                    Las opciones de trabajo de grado en la UNAD son alternativas académicas que permiten al estudiante integrar, profundizar y aplicar los conocimientos adquiridos. Para obtener el título profesional, el estudiante debe aprobar una de estas opciones:
                </p>
                <div className="space-y-4">
                    {['Diplomado de Profundización', 'Créditos de Especialización o Maestría', 'Trabajo de Grado Investigativo'].map((opt) => (
                        <div key={opt} className="flex items-center gap-5 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-blue-200 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <IconCheckCircle className="w-6 h-6" />
                            </div>
                            <span className="font-semibold text-slate-800 text-lg">{opt}</span>
                        </div>
                    ))}
                </div>
                <div className="pt-6">
                    <a 
                        href="https://estudios.unad.edu.co/opcion-de-grado-profesional"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 font-bold hover:text-blue-900 inline-flex items-center gap-3 text-lg group"
                    >
                        <span className="border-b-2 border-blue-200 group-hover:border-blue-900 transition-colors">Ver Información Oficial</span>
                        <IconLink className="w-5 h-5" />
                    </a>
                </div>
                <BackToHome />
            </div>
            
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200">
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-200">
                    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                        <IconMail className="w-6 h-6 text-slate-600" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-xl">
                        Contacto Líderes Zonales
                    </h4>
                </div>
                <div className="grid grid-cols-1 gap-4 text-sm">
                    {[
                        { zone: 'CENTRO BOGOTÁ CUNDINAMARCA', email: 'ecedu.zcbc@unad.edu.co' },
                        { zone: 'CENTRO SUR', email: 'ecedu.zcsur@unad.edu.co' },
                        { zone: 'SUR', email: 'ecedu.zsur@unad.edu.co' },
                        { zone: 'CENTRO ORIENTE', email: 'ecedu.zcori@unad.edu.co' },
                        { zone: 'OCCIDENTE', email: 'ecedu.zocc@unad.edu.co' },
                        { zone: 'AMAZONÍA ORINOQUÍA', email: 'ecedu.zao@unad.edu.co' },
                        { zone: 'CARIBE', email: 'ecedu.zcar@unad.edu.co' },
                        { zone: 'BOYACÁ', email: 'ecedu.zcboy@unad.edu.co' },
                    ].map((item) => (
                        <div key={item.zone} className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white p-5 rounded-xl border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all group">
                            <span className="font-bold text-[10px] text-slate-400 mb-2 sm:mb-0 uppercase tracking-widest">{item.zone}</span>
                            <a href={`mailto:${item.email}`} className="text-blue-700 font-mono text-xs group-hover:underline">{item.email}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* 6. ACOMPAÑAMIENTO */}
      <div id="support" className="scroll-mt-32 border-t border-slate-200 pt-24">
          <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="md:w-1/3 flex justify-center">
                  <div className="w-64 h-64 bg-slate-100 rounded-full flex items-center justify-center relative flex-shrink-0 shadow-inner border border-slate-200">
                      <div className="absolute inset-0 border border-white rounded-full opacity-50"></div>
                      <IconUsers className="w-24 h-24 text-slate-300" />
                      <div className="absolute bottom-2 right-2 bg-blue-600 text-white p-4 rounded-full shadow-xl border-4 border-slate-50">
                        <IconCheckCircle className="w-8 h-8" />
                      </div>
                  </div>
              </div>
              <div className="md:w-2/3">
                  <h2 className="text-4xl font-bold text-slate-900 mb-8">Acompañamiento Docente</h2>
                  <div className="space-y-8 text-slate-600 text-lg font-light leading-relaxed">
                      <p>
                          El acompañamiento docente en el programa se estructura a partir de diversas mediaciones que fortalecen la formación lingüística y pedagógica.
                      </p>
                      <p>
                          Las <strong className="text-slate-900 font-bold">CIPAS PM</strong> constituyen un espacio clave donde los estudiantes de primera matrícula encuentran orientación. A la par, las <strong className="text-slate-900 font-bold">Comunidades Virtuales de Lengua</strong> ofrecen un entorno especializado para la práctica continua del inglés.
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-6 my-10">
                          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
                              <h5 className="font-bold text-blue-900 mb-2 text-lg">Estrategias Sincrónicas</h5>
                              <p className="text-sm text-slate-500">Conferencias, tutorías en vivo, sesiones de práctica oral y talleres.</p>
                          </div>
                          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-orange-200 transition-colors">
                              <h5 className="font-bold text-orange-700 mb-2 text-lg">Estrategias Asincrónicas</h5>
                              <p className="text-sm text-slate-500">Retroalimentaciones, foros, materiales y actividades guiadas.</p>
                          </div>
                      </div>
                      
                      <p className="text-slate-400 italic text-center md:text-left">
                          "Un acompañamiento integral, flexible y reticular, coherente con el modelo pedagógico unadista."
                      </p>
                      <BackToHome />
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};