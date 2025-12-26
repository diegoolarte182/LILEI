import React, { useState } from 'react';
// Added IconGraduation to the import list to resolve the "Cannot find name 'IconGraduation'" error.
import { IconFileText, IconDownload, IconUsers, IconArrowRight, IconCheckCircle, IconLaptop, IconLink, IconHome, IconMail, IconGraduation } from './Icons';

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

// Added an interface for ProcessCardProps and refactored ProcessCard to use React.FC.
// This ensures that the 'children' prop is correctly handled by the TypeScript compiler in JSX.
interface ProcessCardProps {
  title: string;
  children: React.ReactNode;
  icon: any;
  id?: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ title, children, icon: Icon, id }) => (
    <div id={id} className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <Icon className="w-24 h-24 rotate-12" />
        </div>
        <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">{title}</h3>
            {children}
        </div>
    </div>
);

export const AcademicProcessesSection: React.FC = () => {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(null), 2000);
    };

    const formatUrl = "https://sig.unad.edu.co/documentos/sgc/formatos/F-7-2-1.docx";

    return (
        <section id="academic-processes" className="py-24 px-4 md:px-8 bg-slate-50 scroll-mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-200">
                        <IconLaptop className="w-3 h-3" />
                        <span>Gestión Administrativa</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Procesos Académicos</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
                        Guía completa de trámites y solicitudes frecuentes para el estudiante de LiLEI.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* 1 & 3. Reingreso y Cambio de Malla */}
                    <ProcessCard title="Trámites de Programa" icon={IconFileText}>
                        <div className="space-y-6">
                            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                                <h4 className="font-bold text-slate-800 mb-2">Reingreso al Programa</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Se realiza mediante el Formato Único de Solicitudes firmado y enviado al líder zonal. 
                                    <span className="block mt-2 font-semibold text-blue-700">Nota: Reingresarás al plan de estudios vigente.</span>
                                </p>
                            </div>
                            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                                <h4 className="font-bold text-slate-800 mb-2">Cambio de Malla Curricular</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Diligencia el Formato Único de Solicitudes. Se reconocerán cursos según el acuerdo de reconocimiento y resolución vigente.
                                </p>
                            </div>
                            <a href={formatUrl} className="flex items-center justify-center gap-3 w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">
                                <IconDownload className="w-5 h-5" />
                                <span>Descargar Formato Único (F-7-2-1)</span>
                            </a>
                        </div>
                    </ProcessCard>

                    {/* 6. Créditos Mínimos y Máximos */}
                    <ProcessCard title="Mínimos y Máximos de Créditos" icon={IconCheckCircle}>
                        <div className="space-y-6">
                            <p className="text-slate-600 text-sm">Cualquier solicitud fuera de los rangos oficiales requiere el Formato Único diligenciado con nombres, códigos y créditos de los cursos.</p>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <span className="block text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Periodo 16 Semanas</span>
                                    <div className="flex justify-between items-baseline">
                                        <span className="text-2xl font-bold text-blue-900">9 - 21</span>
                                        <span className="text-xs text-blue-700 font-medium">Créditos</span>
                                    </div>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                                    <span className="block text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1">Periodo 8 Semanas</span>
                                    <div className="flex justify-between items-baseline">
                                        <span className="text-2xl font-bold text-orange-900">3 - 14</span>
                                        <span className="text-xs text-orange-700 font-medium">Créditos</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 border-l-4 border-l-blue-600">
                                <p className="text-xs text-slate-500 italic">
                                    Es responsabilidad del estudiante verificar códigos y nombres de cursos. Solicitudes incompletas no serán tramitadas.
                                </p>
                            </div>
                        </div>
                    </ProcessCard>
                </div>

                {/* 4 & 5. Opción de Grado */}
                <div className="mb-8">
                    <ProcessCard title="Solicitud de Opción de Grado" icon={IconGraduation}>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Paso a Paso en Campus</h4>
                                <ol className="space-y-4">
                                    {[
                                        "Ingresar a Campus Virtual > Plan de Estudio Individual.",
                                        "Hacer clic en 'Ver más' y seleccionar opción de grado.",
                                        "Diligenciar información (Si es Monografía/Proyecto, debe ser en INGLÉS).",
                                        "Guardar y hacer clic en 'Enviar a revisión'."
                                    ].map((step, i) => (
                                        <li key={i} className="flex gap-4 items-start text-sm text-slate-600">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">{i+1}</span>
                                            {step}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Requerimiento de Formato</h4>
                                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                                    Además del registro en campus, se debe entregar el Formato Único con la opción elegida. Para Diplomaturas o Posgrado, es <strong>obligatorio</strong> incluir nombre, código y número de créditos.
                                </p>
                                <a href={formatUrl} className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-900 transition-colors">
                                    <IconDownload className="w-4 h-4" />
                                    <span>Obtener Formato para Firma</span>
                                </a>
                            </div>
                        </div>
                    </ProcessCard>
                </div>

                {/* 2. Contacto Líderes Zonales */}
                <div className="mb-8">
                    <ProcessCard title="Contacto Líderes Zonales ECEDU" icon={IconUsers}>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-slate-400 uppercase tracking-widest border-b border-slate-100">
                                    <tr>
                                        <th className="px-6 py-4">Zona</th>
                                        <th className="px-6 py-4">Correo Electrónico</th>
                                        <th className="px-6 py-4 text-right">Acción</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {[
                                        { zone: 'ZCBC - Bogotá Cundinamarca', email: 'ecedu.zcbc@unad.edu.co' },
                                        { zone: 'ZCSUR - Centro Sur', email: 'ecedu.zcsur@unad.edu.co' },
                                        { zone: 'ZSUR - Sur', email: 'ecedu.zsur@unad.edu.co' },
                                        { zone: 'ZCORI - Centro Oriente', email: 'ecedu.zcori@unad.edu.co' },
                                        { zone: 'ZOCC - Occidente', email: 'ecedu.zocc@unad.edu.co' },
                                        { zone: 'ZAO - Amazonía Orinoquía', email: 'ecedu.zao@unad.edu.co' },
                                        { zone: 'ZCAR - Caribe', email: 'ecedu.zcar@unad.edu.co' },
                                        { zone: 'ZCBOY - Centro Boyacá', email: 'ecedu.zcboy@unad.edu.co' },
                                    ].map((item) => (
                                        <tr key={item.email} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-6 py-4 font-semibold text-slate-800">{item.zone}</td>
                                            <td className="px-6 py-4 font-mono text-slate-500">{item.email}</td>
                                            <td className="px-6 py-4 text-right">
                                                <button 
                                                    onClick={() => copyToClipboard(item.email)}
                                                    className="p-2 rounded-lg bg-slate-100 text-slate-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                                    title="Copiar Correo"
                                                >
                                                    {copied === item.email ? <IconCheckCircle className="w-4 h-4" /> : <IconMail className="w-4 h-4" />}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </ProcessCard>
                </div>

                {/* 8 & 9. Revisión y Recomendación */}
                <div className="grid md:grid-cols-2 gap-8">
                    <ProcessCard title="Revisión del Plan" icon={IconLaptop}>
                        <div className="space-y-4">
                            <p className="text-sm text-slate-600">Consulta tu avance académico desde el campus <strong>ACCESIT</strong>:</p>
                            <div className="flex flex-wrap gap-4">
                                <div className="px-6 py-4 rounded-2xl bg-slate-900 text-white flex flex-col gap-1 shadow-lg">
                                    <span className="text-xs font-bold text-slate-500 uppercase">Aplicativo</span>
                                    <span className="text-lg font-bold">EDUNAT</span>
                                </div>
                                <div className="px-6 py-4 rounded-2xl bg-white border border-slate-200 flex flex-col gap-1 shadow-sm">
                                    <span className="text-xs font-bold text-slate-400 uppercase">Visualización</span>
                                    <span className="text-lg font-bold text-slate-800">Plan Individual</span>
                                </div>
                            </div>
                        </div>
                    </ProcessCard>

                    <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-[2rem] p-8 md:p-10 text-white flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Recomendación Institucional</h3>
                            <p className="text-blue-100 font-light leading-relaxed mb-8">
                                Revisa periódicamente EDUNAT para identificar inconsistencias. Consulta el micrositio oficial para información ampliada sobre perfil de egreso y normatividad.
                            </p>
                        </div>
                        <a 
                            href="https://estudios.unad.edu.co/licenciatura-en-lenguas-extranjeras-con-enfasis-en-ingles" 
                            target="_blank" 
                            className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-xl"
                        >
                            <span>Ir al Micrositio Oficial</span>
                            <IconArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div className="flex justify-center mt-12">
                    <BackToHome />
                </div>
            </div>
        </section>
    );
};