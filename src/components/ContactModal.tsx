import React, { useState } from 'react';
import { X, Send, Phone, MapPin, Clock, CheckCircle2, Calendar } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: initialService || 'Reserva de Mesa',
    date: '',
    guests: '2 personas',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#180E0B] border border-[#3D251D] rounded-2xl overflow-hidden shadow-2xl text-[#F9FAFC] max-h-[92vh] flex flex-col my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#2C1A14] text-[#E0E1E6] hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 bg-[#120B09] border-b border-[#2C1C17] text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#CE9678] block mb-1">
            Contacto & Reservaciones
          </span>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#FFFDFC]">
            Café Mexicano — Barra Artesanal
          </h2>
        </div>

        {!submitted ? (
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#120B09] border border-[#2C1C17] text-xs text-[#C5C5C5]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#CE9678] shrink-0" />
                <span>Polanco & Roma Norte, CDMX</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#CE9678] shrink-0" />
                <span>Lun - Dom: 7:00am - 10:00pm</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#CE9678] shrink-0" />
                <span>+52 (55) 8900-CAFE</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase text-[#A0A1A8] tracking-widest block mb-1">
                    Tu Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Alejandro Morales"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#251510] border border-[#3D251D] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#8C8D94] focus:outline-none focus:border-[#CE9678]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-[#A0A1A8] tracking-widest block mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+52 55 1234 5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#251510] border border-[#3D251D] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#8C8D94] focus:outline-none focus:border-[#CE9678]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase text-[#A0A1A8] tracking-widest block mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="ejemplo@correo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#251510] border border-[#3D251D] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#8C8D94] focus:outline-none focus:border-[#CE9678]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-[#A0A1A8] tracking-widest block mb-1">
                    Asunto o Servicio
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full bg-[#251510] border border-[#3D251D] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#CE9678]"
                  >
                    <option value="Reserva de Mesa">Reserva de Mesa en Cafetería</option>
                    <option value="Servicios Corporativos y Catering">Catering & Barra Móvil para Evento</option>
                    <option value="Catas y Barismo">Inscripcion a cartas y Talleres</option>
                    <option value="Venta de Grano Mayoreo">Venta de Grano a Mayoreo</option>
                  </select>
                </div>
              </div>

              {formData.topic === 'Reserva de Mesa' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase text-[#A0A1A8] tracking-widest block mb-1">
                      Fecha y Hora Deseada
                    </label>
                    <input
                      type="datetime-local"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#251510] border border-[#3D251D] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#CE9678]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase text-[#A0A1A8] tracking-widest block mb-1">
                      Número de Personas
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#251510] border border-[#3D251D] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#CE9678]"
                    >
                      <option value="1 persona">1 Persona (Zona Co-Working)</option>
                      <option value="2 personas">2 Personas</option>
                      <option value="4 personas">4 Personas</option>
                      <option value="6+ personas">Grupo (6+ Personas)</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="text-xs font-bold uppercase text-[#A0A1A8] tracking-widest block mb-1">
                  Mensaje o Solicitud Especial
                </label>
                <textarea
                  rows={3}
                  placeholder="Escribe aquí cualquier detalle sobre tus preferencias, alergias o requerimientos..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#251510] border border-[#3D251D] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#8C8D94] focus:outline-none focus:border-[#CE9678]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#CE9678] hover:bg-[#dfa78a] text-[#120B09] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Solicitud / Confirmar</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase text-[#CE9678] tracking-widest block mb-1">
                ¡Solicitud Enviada!
              </span>
              <h3 className="font-serif-title text-2xl font-bold text-white">
                Gracias por contactar a Café Mexicano
              </h3>
              <p className="text-xs text-[#C5C5C5] max-w-sm mx-auto mt-2 leading-relaxed">
                Hemos registrado tu solicitud para <strong className="text-white">{formData.topic}</strong>. Un barista o coordinador se comunicará contigo vía WhatsApp en breve.
              </p>
            </div>

            <button
              onClick={handleResetAndClose}
              className="px-8 py-3 rounded-xl bg-[#CE9678] text-[#120B09] font-bold text-xs uppercase"
            >
              Cerrar Ventana
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
