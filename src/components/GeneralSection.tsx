import React, { useState } from 'react';
import { REGIONS } from '../data/coffeeData';
import { Mountain, MapPin, Award, ArrowRight, ShieldCheck } from 'lucide-react';

interface GeneralSectionProps {
  onExploreRegion: (regionName: string) => void;
}

export const GeneralSection: React.FC<GeneralSectionProps> = ({ onExploreRegion }) => {
  const [activeRegionId, setActiveRegionId] = useState<string>('chiapas');

  const currentRegion = REGIONS.find((r) => r.id === activeRegionId) || REGIONS[0];

  return (
    <section id="origen" className="py-24 bg-[#180E0B] border-t border-[#2A1B16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#CE9678] block mb-2">
            Denominación de Origen & Altura
          </span>
          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold uppercase text-[#FFFDFC] tracking-tight mb-4">
            Sabor, Origen y Tradicion
          </h2>
          <div className="w-20 h-1 bg-[#CE9678] mx-auto mb-6" />
          <p className="text-[#C5C5C5] text-base leading-relaxed">
            México es tierra bendecida por volcanes y biodiversidad. Seleccionamos los mejores granos de pequeños productores independientes en las 3 regiones cafetaleras más emblemáticas del país.
          </p>
        </div>

        {/* Region Selector Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {REGIONS.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegionId(region.id)}
              className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeRegionId === region.id
                  ? 'bg-[#CE9678] text-[#120B09] shadow-lg shadow-[#CE9678]/20'
                  : 'bg-[#251510] text-[#C5C5C5] hover:bg-[#321C16] border border-[#3D251D]'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>{region.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Main Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1D120E] border border-[#2C1C17] rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-10">
          {/* Left Column: Image & Highlights */}
          <div className="lg:col-span-6 relative h-80 sm:h-96 lg:h-[450px] rounded-2xl overflow-hidden">
            <img
              src={currentRegion.image}
              alt={currentRegion.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120B09] via-transparent to-transparent opacity-80" />

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#120B09]/90 border border-[#3D251D] backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-[#EACCB3] font-semibold">
                <span className="flex items-center gap-1.5">
                  <Mountain className="w-4 h-4 text-[#CE9678]" />
                  Altitud: {currentRegion.altitude}
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  Grano 100% Orgánico
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Region Details */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#CE9678] block mb-1">
                Finca & Microclima
              </span>
              <h3 className="font-serif-title text-3xl font-bold text-[#F9FAFC] mb-4">
                {currentRegion.name}
              </h3>
              <p className="text-sm text-[#C5C5C5] leading-relaxed mb-6">
                {currentRegion.description}
              </p>
            </div>

            {/* Flavor Profile */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase text-[#A0A1A8] tracking-widest">
                Perfil de Sabor Caracteristico:
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentRegion.notes.map((note, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-[#2C1A14] border border-[#4D3127] text-xs font-semibold text-[#EACCB3]"
                  >
                    🍃 {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Roast Recommendation */}
            <div className="p-4 rounded-xl bg-[#150D0A] border border-[#2C1C17] flex items-center justify-between">
              <div>
                <span className="text-[11px] text-[#A0A1A8] block">Recomendacion del Tostador:</span>
                <span className="text-sm font-bold text-[#CE9678]">{currentRegion.roastRecommendation}</span>
              </div>
              <Award className="w-6 h-6 text-[#CE9678]" />
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => onExploreRegion(currentRegion.name.split(' ')[0])}
                id="explore-region-btn"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#CE9678] hover:bg-[#dfa78a] text-[#120B09] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ver Cafés de {currentRegion.name.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
