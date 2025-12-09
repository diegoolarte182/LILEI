import React from 'react';
import { IconCheckCircle, IconFileText, IconArrowRight, IconMail, IconLink, IconUsers } from './Icons';

export const ProcessesSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-24">
      
      {/* 4. HOMOLOGACIONES */}
      <div id="homologation" className="scroll-mt-32">
        <div className="text-center mb-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-bold mb-4">
                <IconCheckCircle className="w-4 h-4" />
                <span>Validación de Saberes</span>
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Homologación de Lengua</h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-10 bg-slate-50 border-b border-slate-200">
                <p className="text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto text-center">
                    La homologación de los cursos de Inglés se realiza exclusivamente mediante certificación de nivel de lengua obtenida en un examen estandarizado reconocido internacionalmente y aceptado por la UNAD. El certificado debe evaluar las cuatro habilidades (Listening, Speaking, Reading y Writing) y tener una vigencia no mayor a dos años.
                </p>
                <div className="flex justify-center mt-6">
                    <span className="font-semibold text-amber-700 bg-amber-100 px-4 py-2 rounded-lg">Acuerdo 421 de 2025</span>
                </div>
            </div>
            
            <div className="p-8 md:p-10">
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Equivalencia entre nivel MCER y cursos homologables</h3>
                <div className="overflow-x-auto">
                    <table className="w-full max-w-3xl mx-auto border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white">
                                <th className="p-4 text-left rounded-tl-lg">Nivel MCER</th>
                                <th className="p-4 text-left rounded-tr-lg">Cursos UNAD Homologables</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-slate-700">
                            <tr>
                                <td className="p-4 font-bold bg-slate-50">A1</td>
                                <td className="p-4">Elementary English</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold bg-slate-50">A2</td>
                                <td className="p-4">English I y English II</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold bg-slate-50">B1</td>
                                <td className="p-4">English III y English IV</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold bg-slate-50">B2</td>
                                <td className="p-4">English V y English VI</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold bg-slate-50">C1</td>
                                <td className="p-4">English VII: English Conversation y English VIII: Academic Writing</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mt-8 text-center">
                    <button className="text-amber-600 font-bold hover:text-amber-800 transition-colors flex items-center justify-center gap-2 mx-auto">
                        <IconFileText className="w-4 h-4" />
                        <span>Ver Guía Solicitud de Homologación</span>
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* MATRICULA */}
      <div id="registration" className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4">Proceso de Matrícula</h3>
                  <p className="mb-6 opacity-90">
                      Registro, selección de cursos y pago. Para evitar retrasos, tenga listos sus documentos soporte y verifique la información. Una vez matriculado, legalice su matrícula en el CEAD y asista a la inducción.
                  </p>
                  <a 
                    href="https://estudios.unad.edu.co/inscripciones-y-matriculas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                  >
                      <span>Inscripciones y Matrículas</span>
                      <IconArrowRight className="w-4 h-4" />
                  </a>
              </div>
              <div className="hidden md:block w-px h-32 bg-white/20"></div>
              <div className="md:w-1/3 text-sm opacity-80 space-y-2">
                  <div className="flex items-center gap-2"><IconCheckCircle className="w-4 h-4"/> <span>Registro de datos</span></div>
                  <div className="flex items-center gap-2"><IconCheckCircle className="w-4 h-4"/> <span>Cargue de documentos</span></div>
                  <div className="flex items-center gap-2"><IconCheckCircle className="w-4 h-4"/> <span>Generación de recibo</span></div>
                  <div className="flex items-center gap-2"><IconCheckCircle className="w-4 h-4"/> <span>Legalización y Acta</span></div>
              </div>
          </div>
      </div>

      {/* 5. OPCIONES DE GRADO */}
      <div id="degree" className="scroll-mt-32">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 text-center">Opciones de Grado</h2>
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <p className="text-slate-600 mb-6 text-lg">
                    Las opciones de trabajo de grado en la UNAD son alternativas académicas que permiten al estudiante integrar y aplicar conocimientos. Para obtener el título, debe aprobar una de estas opciones:
                </p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg text-purple-900 font-medium">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div> Diplomado de Profundización
                    </li>
                    <li className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg text-purple-900 font-medium">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div> Créditos de Posgrado (Especialización/Maestría)
                    </li>
                    <li className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg text-purple-900 font-medium">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div> Proyecto Aplicado / Monografía
                    </li>
                    <li className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg text-purple-900 font-medium">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div> Proyecto de Investigación
                    </li>
                </ul>
                <a 
                    href="https://estudios.unad.edu.co/opcion-de-grado-profesional"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 font-bold hover:text-purple-800 inline-flex items-center gap-2"
                >
                    <span>Ver Información Oficial</span>
                    <IconLink className="w-4 h-4" />
                </a>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <IconMail className="w-5 h-5 text-slate-500" />
                    Contacto Líderes Zonales
                </h4>
                <div className="grid grid-cols-1 gap-3 text-sm">
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
                        <div key={item.zone} className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white p-3 rounded border border-slate-100">
                            <span className="font-semibold text-xs text-slate-500">{item.zone}</span>
                            <a href={`mailto:${item.email}`} className="text-blue-600 hover:underline break-all">{item.email}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* 6. ACOMPAÑAMIENTO */}
      <div id="support" className="scroll-mt-32 border-t pt-16 border-slate-200">
          <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 bg-teal-100 rounded-full flex items-center justify-center relative">
                      <div className="absolute inset-0 border-4 border-teal-200 rounded-full animate-pulse"></div>
                      <IconUsers className="w-24 h-24 text-teal-600" />
                  </div>
              </div>
              <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Acompañamiento Docente</h2>
                  <div className="space-y-6 text-slate-600">
                      <p>
                          El acompañamiento en LILEI es integral. Las <strong>CIPAS PM</strong> (Comunidad de Interacción y Participación Académica y Social) ofrecen orientación permanente a estudiantes de primera matrícula.
                      </p>
                      <p>
                          La <strong>Comunidad Virtual de Lengua</strong> ofrece un entorno especializado para la práctica del inglés.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-teal-50 p-4 rounded-xl">
                              <h5 className="font-bold text-teal-800 mb-1">Sincrónico</h5>
                              <p className="text-sm">Conferencias, tutorías en vivo, sesiones de práctica oral y talleres.</p>
                          </div>
                          <div className="bg-teal-50 p-4 rounded-xl">
                              <h5 className="font-bold text-teal-800 mb-1">Asincrónico</h5>
                              <p className="text-sm">Retroalimentación personalizada, foros y materiales de consulta.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};