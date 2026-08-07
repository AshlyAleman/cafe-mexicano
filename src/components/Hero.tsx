import React from 'react';
import { Sparkles, ArrowRight, Award, Coffee, Mountain, Flame } from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz, onExploreClick }) => {
  return (
    <section id="inicio" className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/mexican_coffee_hero_1786079757097.jpg"
          alt="Café Mexicano artesanal en taza de barro con canela"
          className="w-full h-full object-cover object-center scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        {/* Layered Gradient Overlay for dark elegant coffee atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120B09] via-[#120B09]/75 to-[#0F0806]/85" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CE9678]/15 border border-[#CE9678]/30 text-[#EACCB3] text-xs font-medium uppercase tracking-widest mb-6 backdrop-blur-sm shadow-md">
          <Flame className="w-3.5 h-3.5 text-[#CE9678] animate-pulse" />
          <span>Tueste Artesanal de Origen Mexicano</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#F9FAFC] uppercase mb-6 drop-shadow-lg leading-tight">
          Café <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EACCB3] via-[#CE9678] to-[#A66C4E]">Mexicano</span>
        </h1>

        {/* Hero Paragraph */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#C5C5C5] font-light leading-relaxed mb-10 px-2 sm:px-0">
          Descubre la riqueza de nuestros granos cosechados a mano en las altas sierras de Chiapas, Oaxaca y Veracruz. Infusionado con el alma y la calidez de nuestras tradiciones.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16">
          <button
            onClick={onExploreClick}
            id="hero-explore-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#CE9678] hover:bg-[#dfa78a] text-[#120B09] font-semibold uppercase text-xs tracking-wider rounded-xl shadow-xl shadow-[#CE9678]/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Ver Menú & Variedades</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenQuiz}
            id="hero-quiz-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#2C1A14]/90 hover:bg-[#3D251D] text-[#FFFDFC] border border-[#4D3127] font-semibold text-xs uppercase tracking-wider rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-[#CE9678] cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#CE9678]" />
            <span>¿Quecafe va contigo?</span>
          </button>
        </div>

        {/* Feature Pill Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-8 border-t border-[#2C1C17]/80 text-left">
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#1E120E]/60 border border-[#2C1C17] backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-[#CE9678]/15 text-[#CE9678]">
              <Mountain className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#F9FAFC] uppercase tracking-wide">100% De Altura</h3>
              <p className="text-[11px] text-[#A0A1A8]">Sierra de Chiapas, Oaxaca y Veracruz</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#1E120E]/60 border border-[#2C1C17] backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-[#CE9678]/15 text-[#CE9678]">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#F9FAFC] uppercase tracking-wide">Café de Olla Real</h3>
              <p className="text-[11px] text-[#A0A1A8]">Infusión en barro con piloncillo y canela</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#1E120E]/60 border border-[#2C1C17] backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-[#CE9678]/15 text-[#CE9678]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#F9FAFC] uppercase tracking-wide">Comercio Justo</h3>
              <p className="text-[11px] text-[#A0A1A8]">Apoyo directo a familias cafetaleras</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
