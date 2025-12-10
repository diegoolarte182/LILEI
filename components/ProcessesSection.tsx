import React from 'react';
import { IconCheckCircle, IconFileText, IconArrowRight, IconMail, IconLink, IconUsers, IconHome, IconDownload } from './Icons';

const BackToHome = () => (
    <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-amber-600 transition-colors"
    >
        <IconHome className="w-4 h-4" />
        <span>Volver al Inicio</span>
    </button>
);

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
                <p className="text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto text-center mb-6">
                    La homologación de los cursos de Inglés del programa se realiza exclusivamente mediante certificación de nivel de lengua obtenida en un examen estandarizado reconocido internacionalmente y aceptado por la UNAD, siempre que dicho certificado evalúe las cuatro habilidades (Listening, Speaking, Reading y Writing) y tenga una vigencia no mayor a dos años.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <button className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                        <IconDownload className="w-4 h-4" />
                        <span>Descargar Acuerdo 421 de 2025</span>
                    </button>
                     <button className="inline-flex items-center gap-2 bg-slate-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                        <IconFileText className="w-4 h-4" />
                        <span>Ver Guía Solicitud de Homologación</span>
                    </button>
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
                <div className="mt-8 text-center flex flex-col items-center gap-4">
                    <BackToHome />
                </div>
            </div>
        </div>
      </div>

      {/* MATRICULA */}
      <div id="registration" className="scroll-mt-32 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4">Proceso de Matrícula</h3>
                  <p className="mb-4 opacity-90 leading-relaxed">
                      Para realizar la matrícula en la UNAD, primero debes completar el registro en el formulario de inscripción, diligenciar tus datos personales y cargar los documentos solicitados. Una vez hecho el registro, ingresa al enlace de Inscripción y Matrícula, selecciona el programa académico y los cursos del primer periodo, y descarga tu recibo de pago, el cual debes cancelar dentro de las fechas establecidas.
                  </p>
                  <p className="mb-6 opacity-90 text-sm font-light bg-blue-800/30 p-4 rounded-lg">
                      <strong>Nota:</strong> Para evitar retrasos, tenga listos sus documentos soporte, verifique la exactitud de la información registrada, realice el pago dentro de las fechas establecidas y genere oportunamente su acta de matrícula. Finalmente, legalice su matrícula en el CEAD y asista a la inducción para iniciar adecuadamente su proceso académico.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                      <a 
                        href="https://estudios.unad.edu.co/inscripciones-y-matriculas" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
                      >
                          <span>Inscripciones y Matrículas</span>
                          <IconArrowRight className="w-4 h-4" />
                      </a>
                      <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 text-sm font-medium text-blue-200 hover:text-white transition-colors ml-4"
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
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 text-center">Opciones de Grado</h2>
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <p className="text-slate-600 mb-4 text-lg">
                    Las opciones de trabajo de grado en la UNAD son alternativas académicas que permiten al estudiante integrar, profundizar y aplicar los conocimientos adquiridos durante su proceso formativo, tal como lo establece el Reglamento Estudiantil. Para obtener el título profesional, el estudiante debe aprobar una de estas opciones, las cuales pueden incluir diplomado de profundización, créditos de especialización o maestría, o trabajo de grado investigativo (monografía, proyecto de investigación o proyecto aplicado).
                </p>
                <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg text-purple-900 font-medium">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div> Diplomado de Profundización
                    </li>
                    <li className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg text-purple-900 font-medium">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div> Créditos de Especialización o Maestría
                    </li>
                    <li className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg text-purple-900 font-medium">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div> Trabajo de Grado Investigativo
                    </li>
                </ul>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    El estudiante puede iniciar su opción de grado cuando cumpla con los requisitos establecidos, pero una vez finalizado el plan de estudios, dispone de doce meses para desarrollar la opción elegida, pagando los derechos pecuniarios correspondientes cuando aplica, y manteniendo vigente el seguro estudiantil. Todas las notificaciones se realizarán a través del correo institucional, por lo que es indispensable revisarlo constantemente. Si el estudiante pertenece a un semillero, deberá postular su propuesta de trabajo de grado por el módulo correspondiente. Para resolver inquietudes adicionales sobre cronogramas o procedimientos, puede contactar al líder de escuela en su zona.
                </p>
                <a 
                    href="https://estudios.unad.edu.co/opcion-de-grado-profesional"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 font-bold hover:text-purple-800 inline-flex items-center gap-2 mb-4"
                >
                    <span>Ver Información Oficial</span>
                    <IconLink className="w-4 h-4" />
                </a>
                <div className="block">
                     <BackToHome />
                </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
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
                        <div key={item.zone} className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white p-3 rounded border border-slate-100 hover:border-purple-200 transition-colors">
                            <span className="font-semibold text-xs text-slate-500 mb-1 sm:mb-0">{item.zone}</span>
                            <a href={`mailto:${item.email}`} className="text-blue-600 hover:underline break-all font-mono text-xs">{item.email}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* 6. ACOMPAÑAMIENTO */}
      <div id="support" className="scroll-mt-32 border-t pt-16 border-slate-200">
          <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 flex justify-center md:justify-start">
                  <div className="w-48 h-48 bg-teal-100 rounded-full flex items-center justify-center relative flex-shrink-0">
                      <div className="absolute inset-0 border-4 border-teal-200 rounded-full animate-pulse"></div>
                      <IconUsers className="w-24 h-24 text-teal-600" />
                  </div>
              </div>
              <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Acompañamiento Docente</h2>
                  <div className="space-y-6 text-slate-600 prose prose-lg">
                      <p>
                          El acompañamiento docente en el programa de Licenciatura en Lenguas Extranjeras con Énfasis en Inglés se estructura a partir de diversas mediaciones que fortalecen la formación lingüística y pedagógica del estudiante.
                      </p>
                      <p>
                          Las <strong>CIPAS PM</strong> (Comunidad de Interacción y Participación Académica y Social) constituyen un espacio clave donde los estudiantes de primera matrícula encuentran orientación, acompañamiento permanente y apoyo académico y socioemocional. Allí se promueve la integración a la vida universitaria, el reconocimiento de rutas de aprendizaje, la participación en actividades colaborativas y el fortalecimiento de habilidades para la permanencia y el éxito académico.
                      </p>
                      <p>
                          A la par, las <strong>Comunidades Virtuales de Lengua</strong> ofrecen un entorno especializado para la práctica continua del inglés, con recursos didácticos, actividades de interacción, talleres y espacios de participación que complementan el desarrollo de competencias comunicativas. Este espacio permite profundizar en el uso real de la lengua y promover el aprendizaje autónomo mediado por prácticas colaborativas entre docentes y estudiantes.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4 my-6 not-prose">
                          <div className="bg-teal-50 p-5 rounded-xl border border-teal-100">
                              <h5 className="font-bold text-teal-800 mb-2">Estrategias Sincrónicas</h5>
                              <p className="text-sm">Conferencias, tutorías en vivo, sesiones de práctica oral y talleres que facilitan la interacción directa y el diálogo formativo.</p>
                          </div>
                          <div className="bg-teal-50 p-5 rounded-xl border border-teal-100">
                              <h5 className="font-bold text-teal-800 mb-2">Estrategias Asincrónicas</h5>
                              <p className="text-sm">Retroalimentaciones personalizadas, foros académicos, materiales de consulta y actividades guiadas para avanzar a ritmo propio.</p>
                          </div>
                      </div>
                      <p className="italic text-slate-500 border-l-4 border-teal-400 pl-4">
                          En conjunto, estos componentes articulan un acompañamiento integral, flexible y reticular, coherente con el modelo pedagógico unadista y orientado a fortalecer el desarrollo profesional, lingüístico y humano de los futuros licenciados en lenguas extranjeras.
                      </p>
                      <BackToHome />
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};