import React, { useState } from 'react';
import { SERVICES } from '../data/coffeeData';
import { ServiceItem } from '../types';
import { Settings, Award, Coffee, Wifi, ArrowRight, CheckCircle2, X } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContactWithService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenContactWithService
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Settings':
        return <Settings className="w-6 h-6 text-[#CE9678]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#CE9678]" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-[#CE9678]" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-[#CE9678]" />;
      default:
        return <Coffee className="w-6 h-6 text-[#CE9678]" />;
    }
  };

  return (
    <section id="servicios" className="py-24 relative overflow-hidden bg-[#120B09]">
      {/* Background fixed parallax effect container */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="/src/assets/images/coffee_beans_process_1786079771217.jpg"
          alt="Servicios de cafetería"
          className="w-full h-full object-cover attachment-fixed filter grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#120B09]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EACCB3] block mb-2">
            Experiencia Integral Cafetera
          </span>
          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold uppercase text-[#FFFDFC] tracking-tight mb-4">
            Cafetería de Servicios
          </h2>
          <div className="w-20 h-1 bg-[#CE9678] mx-auto mb-6" />
          <p className="text-[#C5C5C5] text-base leading-relaxed">
            Más que una taza de café, brindamos soluciones personalizadas para tus eventos, molienda fresca de especialidad y talleres comunitarios.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#1C110D] border border-[#2E1D17] hover:border-[#CE9678]/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#2C1A14] border border-[#4D3127] flex items-center justify-center mb-6 group-hover:bg-[#CE9678] group-hover:text-[#120B09] transition-colors">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="font-serif-title text-xl font-bold text-[#F9FAFC] mb-2 group-hover:text-[#EACCB3] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-[#C5C5C5] leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[11px] text-[#A0A1A8]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#CE9678] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setSelectedService(service)}
                id={`service-detail-btn-${service.id}`}
                className="w-full py-2.5 px-4 bg-[#251510] hover:bg-[#CE9678] text-[#EACCB3] hover:text-[#120B09] border border-[#3D251D] hover:border-[#CE9678] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Saber Más</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-gradient-to-r from-[#2C1A14] via-[#1E120E] to-[#2C1A14] border border-[#4D3127] rounded-2xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif-title text-2xl font-bold text-[#F9FAFC] mb-2">
              ¿Requieres un servicio corporativo o barra de café privada?
            </h3>
            <p className="text-xs text-[#C5C5C5]">
              Cotizamos tu evento o suministro semanal de grano para oficina en menos de 24 horas.
            </p>
          </div>

          <button
            onClick={() => onOpenContactWithService?.('Servicios Corporativos y Catering')}
            id="services-cotizar-btn"
            className="shrink-0 px-6 py-3.5 bg-[#CE9678] hover:bg-[#dfa78a] text-[#120B09] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg cursor-pointer"
          >
            Solicitar Cotización
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl bg-[#180E0B] border border-[#3D251D] rounded-2xl p-6 sm:p-8 text-[#F9FAFC]">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#2C1A14] text-[#E0E1E6] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-[#2C1A14] border border-[#4D3127]">
                {getServiceIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-[10px] text-[#CE9678] font-bold uppercase tracking-wider">Servicio Especializado</span>
                <h3 className="font-serif-title text-2xl font-bold text-[#FFFDFC]">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#C5C5C5] leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <h4 className="text-xs font-bold uppercase text-[#A0A1A8] tracking-widest mb-3">
              ¿Qué incluye este servicio?
            </h4>
            <div className="space-y-2 mb-8">
              {selectedService.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#251510] border border-[#3D251D] text-xs text-[#EACCB3]">
                  <CheckCircle2 className="w-4 h-4 text-[#CE9678] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#2C1C17]">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 text-xs text-[#C5C5C5] hover:text-white"
              >
                Cerrar
              </button>

              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onOpenContactWithService?.(serviceName);
                }}
                className="px-6 py-2.5 bg-[#CE9678] text-[#120B09] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#dfa78a] transition-colors"
              >
                Agendar o Contratar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
