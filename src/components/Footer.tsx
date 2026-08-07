import React, { useState } from 'react';
import { Coffee, Mail, MapPin, Phone, Instagram, Facebook, MessageCircle, Heart, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenQuiz }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#0A0605] border-t border-[#1F120E] text-[#C5C5C5] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1E120E]">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#CE9678] flex items-center justify-center text-[#120B09]">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-serif-title text-2xl font-bold text-white uppercase tracking-wider">
                Café Mexicano
              </span>
            </div>

            <p className="text-xs text-[#A0A1A8] leading-relaxed max-w-sm">
              Cultivando la tradición y el arte del café artesanal mexicano. Selección directa de pequeños productores en Chiapas, Oaxaca y Veracruz.
            </p>

            <div className="pt-2 flex items-center gap-3 text-[#CE9678]">
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); onOpenContact(); }}
                className="w-9 h-9 rounded-full bg-[#180E0B] border border-[#2C1C17] flex items-center justify-center hover:bg-[#CE9678] hover:text-[#120B09] transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); onOpenContact(); }}
                className="w-9 h-9 rounded-full bg-[#180E0B] border border-[#2C1C17] flex items-center justify-center hover:bg-[#CE9678] hover:text-[#120B09] transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); onOpenContact(); }}
                className="w-9 h-9 rounded-full bg-[#180E0B] border border-[#2C1C17] flex items-center justify-center hover:bg-[#CE9678] hover:text-[#120B09] transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="font-serif-title text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#2C1C17] pb-2 inline-block">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#inicio" className="hover:text-[#CE9678] transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#variedades" className="hover:text-[#CE9678] transition-colors">Tipos de Café</a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#CE9678] transition-colors">Servicios & Barismo</a>
              </li>
              <li>
                <a href="#origen" className="hover:text-[#CE9678] transition-colors">Origen & Regiones</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-[#CE9678] transition-colors">Blog Cafetero</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Experience */}
          <div>
            <h3 className="font-serif-title text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#2C1C17] pb-2 inline-block">
              Experiencias
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={onOpenQuiz} className="hover:text-[#CE9678] transition-colors text-left">
                  Recomendador de Café
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-[#CE9678] transition-colors text-left">
                  Reservar Mesa
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-[#CE9678] transition-colors text-left">
                  Barra Móvil para Eventos
                </button>
              </li>
              <li>
                <button onClick={onOpenContact} className="hover:text-[#CE9678] transition-colors text-left">
                  Suscripción de Grano
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Subscription */}
          <div>
            <h3 className="font-serif-title text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#2C1C17] pb-2 inline-block">
              Club de Café
            </h3>
            <p className="text-[11px] text-[#A0A1A8] mb-3">
              Recibe guías de cata exclusivas y avisos de cosechas de edición limitada.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Tu correo electrónico..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#180E0B] border border-[#2C1C17] rounded-xl px-3 py-2 text-xs text-white placeholder-[#8C8D94] focus:outline-none focus:border-[#CE9678]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-[#CE9678] hover:bg-[#dfa78a] text-[#120B09] font-bold text-xs uppercase rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-800" />
                    <span>¡Inscrito!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5" />
                    <span>Suscribirme</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8D94] text-center sm:text-left">
          <p>© {new Date().getFullYear()} Café Mexicano. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>y aroma a café de olla.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
