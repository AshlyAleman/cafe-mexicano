import React, { useState } from 'react';
import { X, Sparkles, Coffee, Check, ArrowRight, RotateCcw } from 'lucide-react';
import { COFFEE_ITEMS } from '../data/coffeeData';
import { CoffeeItem } from '../types';

interface CoffeeQuizModalProps {
  onClose: () => void;
  onSelectRecommendedCoffee: (coffee: CoffeeItem) => void;
}

export const CoffeeQuizModal: React.FC<CoffeeQuizModalProps> = ({
  onClose,
  onSelectRecommendedCoffee
}) => {
  const [step, setStep] = useState<number>(1);
  const [flavorPreference, setFlavorPreference] = useState<string>('');
  const [intensityPreference, setIntensityPreference] = useState<string>('');
  const [sweetnessPreference, setSweetnessPreference] = useState<string>('');
  const [recommendation, setRecommendation] = useState<CoffeeItem | null>(null);

  const handleFinishQuiz = () => {
    let matched = COFFEE_ITEMS[0]; // fallback Cafe de Olla

    if (flavorPreference === 'tradicional') {
      matched = COFFEE_ITEMS.find((c) => c.id === 'cafe-olla') || COFFEE_ITEMS[0];

    } 
    else if (flavorPreference === 'frio') 
      {

      matched = COFFEE_ITEMS.find((c) => c.id === 'cold-brew-artesanal') || COFFEE_ITEMS[3];
    } 
    else if (flavorPreference === 'dulce-leche')
     {
      matched = COFFEE_ITEMS.find((c) => c.id === 'latte-papantla') || COFFEE_ITEMS[4];
    }
     else if (flavorPreference === 'intenso') 
      {
      matched = COFFEE_ITEMS.find((c) => c.id === 'espresso-chiapas') || COFFEE_ITEMS[1];
    }
     else 
      {
      matched = COFFEE_ITEMS[2]; // Capuchino Garat
    }

    setRecommendation(matched);
    setStep(4);
  };

  const resetQuiz = () => {
    setStep(1);
    setFlavorPreference('');
    setIntensityPreference('');
    setSweetnessPreference('');
    setRecommendation(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#180E0B] border border-[#3D251D] rounded-2xl p-6 sm:p-8 text-[#F9FAFC] shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#2C1A14] text-[#E0E1E6] hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-[#CE9678]/15 border border-[#CE9678]/30 text-[#CE9678]">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] text-[#CE9678] font-bold uppercase tracking-wider">Recomendador Inteligente</span>
            <h3 className="font-serif-title text-2xl font-bold text-[#FFFDFC]">
              ¿Qué café va contigo hoy?
            </h3>
          </div>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex-1 h-1.5 rounded-full transition-all ${
                  step >= s ? 'bg-[#CE9678]' : 'bg-[#2A1B16]'
                }`}
              />
            ))}
          </div>
        )}

        {/* Question 1 */}
        {step === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <h4 className="text-sm font-bold uppercase tracking-wide text-[#EACCB3]">
              Paso 1: ¿Cómo prefieres disfrutar tu taza de café?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'tradicional', label: '☕ Olla Tradicional', desc: 'Con canela, piloncillo y aroma a hogar' },
                { id: 'intenso', label: '⚡ Espresso Intenso', desc: 'Corto, concentrado y con cuerpo profundo' },
                { id: 'dulce-leche', label: '🥛 Con Leche & Vainilla', desc: 'Textura cremosa y notas dulces' },
                { id: 'frio', label: '🧊 Helado / Cold Brew', desc: 'Refrescante con extracción lenta' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setFlavorPreference(opt.id);
                    setStep(2);
                  }}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    flavorPreference === opt.id
                      ? 'bg-[#CE9678] text-[#120B09] border-[#CE9678] font-bold'
                      : 'bg-[#251510] border-[#3D251D] hover:border-[#8C5538] text-[#E0E1E6]'
                  }`}
                >
                  <span className="block text-sm font-bold mb-1">{opt.label}</span>
                  <span className="block text-[11px] opacity-80">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Question 2 */}
        {step === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <h4 className="text-sm font-bold uppercase tracking-wide text-[#EACCB3]">
              Paso 2: ¿Qué nivel de tueste e intensidad prefieres?
            </h4>
            <div className="space-y-2.5">
              {[
                { id: 'suave', label: 'Tueste Ligero a Medio', desc: 'Notas florales, acidez cítrica brillante y cuerpo ligero' },
                { id: 'equilibrado', label: 'Tueste Medio Equilibrado', desc: 'Notas a caramelo, miel, almendras y dulzura envolvente' },
                { id: 'oscuro', label: 'Tueste Oscuro Intenso', desc: 'Notas a cacao amargo, frutos secos tostados y retrogusto prolongado' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setIntensityPreference(opt.id);
                    setStep(3);
                  }}
                  className="w-full p-4 rounded-xl border text-left bg-[#251510] border-[#3D251D] hover:border-[#CE9678] text-[#E0E1E6] hover:bg-[#2C1A14] transition-all cursor-pointer"
                >
                  <span className="block text-sm font-bold text-[#FFFDFC]">{opt.label}</span>
                  <span className="block text-xs text-[#A0A1A8] mt-0.5">{opt.desc}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="text-xs text-[#A0A1A8] hover:text-white pt-2 inline-block"
            >
              ← Regresar
            </button>
          </div>
        )}

        {/* Question 3 */}
        {step === 3 && (
          <div className="space-y-4 animate-fadeIn">
            <h4 className="text-sm font-bold uppercase tracking-wide text-[#EACCB3]">
              Paso 3: ¿Te agrada algún toque especiado o natural?
            </h4>
            <div className="space-y-2.5">
              {[
                { id: 'canela', label: 'Sí, Canela y Piloncillo', desc: 'Auténtica infusión tradicional mexicana' },
                { id: 'vainilla', label: 'Sí, Vainilla de Papantla', desc: 'Perfume natural y dulzura sutil' },
                { id: 'puro', label: 'No, Café 100% Puro de Origen', desc: 'Sin especias agregadas, solo las notas naturales del grano' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    setSweetnessPreference(opt.id);
                    handleFinishQuiz();
                  }}
                  className="w-full p-4 rounded-xl border text-left bg-[#251510] border-[#3D251D] hover:border-[#CE9678] text-[#E0E1E6] hover:bg-[#2C1A14] transition-all cursor-pointer"
                >
                  <span className="block text-sm font-bold text-[#FFFDFC]">{opt.label}</span>
                  <span className="block text-xs text-[#A0A1A8] mt-0.5">{opt.desc}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              className="text-xs text-[#A0A1A8] hover:text-white pt-2 inline-block"
            >
              ← Regresar
            </button>
          </div>
        )}

        {/* Recommendation Result */}
        {step === 4 && recommendation && (
          <div className="space-y-6 text-center animate-fadeIn">
            <div className="inline-block p-3 rounded-full bg-[#CE9678]/20 text-[#CE9678] mb-2">
              <Coffee className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#CE9678] block">
                ¡Tu Elección Ideal de Café!
              </span>
              <h3 className="font-serif-title text-3xl font-bold text-[#FFFDFC] mt-1">
                {recommendation.name}
              </h3>
              <p className="text-xs text-[#EACCB3] font-medium mt-1">
                {recommendation.subtitle}
              </p>
            </div>

            <div className="relative h-48 rounded-2xl overflow-hidden border border-[#3D251D]">
              <img
                src={recommendation.image}
                alt={recommendation.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#180E0B] via-transparent to-transparent" />
            </div>

            <p className="text-xs text-[#C5C5C5] leading-relaxed">
              {recommendation.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={resetQuiz}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-[#251510] text-[#A0A1A8] hover:text-white border border-[#3D251D] text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Repetir Quiz</span>
              </button>

              <button
                onClick={() => {
                  onSelectRecommendedCoffee(recommendation);
                  onClose();
                }}
                className="w-full sm:flex-1 px-6 py-3 rounded-xl bg-[#CE9678] text-[#120B09] font-bold text-xs uppercase tracking-wider hover:bg-[#dfa78a] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Ver Detalles / Agregar (${recommendation.price} MXN)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
