import React, { useState } from 'react';
import { X, Flame, MapPin, Clock, Plus, ShoppingBag, Check } from 'lucide-react';
import { CoffeeItem } from '../types';

interface CoffeeDetailModalProps {
  coffee: CoffeeItem | null;
  onClose: () => void;
  onAddToCart: (coffee: CoffeeItem, grindOption?: 'grano' | 'fino' | 'medio' | 'prensa') => void;
}

export const CoffeeDetailModal: React.FC<CoffeeDetailModalProps> = ({
  coffee,
  onClose,
  onAddToCart
}) => {
  if (!coffee) return null;

  const [selectedGrind, setSelectedGrind] = useState<'grano' | 'fino' | 'medio' | 'prensa'>('fino');
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(coffee, selectedGrind);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#180E0B] border border-[#3D251D] rounded-2xl overflow-hidden shadow-2xl text-[#F9FAFC] max-h-[90vh] flex flex-col my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-coffee-detail-modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-[#E0E1E6] hover:text-white hover:bg-black/90 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={coffee.image}
            alt={coffee.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#180E0B] via-[#180E0B]/30 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-[#CE9678] text-[#120B09] text-[10px] font-bold uppercase tracking-wider">
                {coffee.region}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#2C1A14] text-[#EACCB3] border border-[#4D3127] text-[10px] font-semibold uppercase tracking-wider flex items-center gap-1">
                <Flame className="w-3 h-3 text-[#CE9678]" />
                Tueste {coffee.roastLevel}
              </span>
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#FFFDFC]">
              {coffee.name}
            </h2>
          </div>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-[#C5C5C5] text-sm leading-relaxed">
            {coffee.description}
          </p>

          {/* Flavor Notes */}
          <div>
            <h4 className="text-xs font-bold uppercase text-[#A0A1A8] tracking-widest mb-2">
              Notas de Cata & Perfil
            </h4>
            <div className="flex flex-wrap gap-2">
              {coffee.notes.map((note, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-[#251510] text-[#EACCB3] border border-[#3D251D] text-xs font-medium"
                >
                  🌿 {note}
                </span>
              ))}
            </div>
          </div>

          {/* Additional details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#120B09] border border-[#2C1C17] text-xs">
            <div>
              <span className="text-[#8C8D94] block">Intensidad</span>
              <div className="flex items-center gap-1 mt-1 text-[#CE9678]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < coffee.intensity ? 'bg-[#CE9678]' : 'bg-[#3D251D]'
                    }`}
                  />
                ))}
              </div>
            </div>

            {coffee.preparationTime && (
              <div>
                <span className="text-[#8C8D94] block">Tiempo preparación</span>
                <span className="text-[#FFFDFC] font-medium flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-[#CE9678]" />
                  {coffee.preparationTime}
                </span>
              </div>
            )}

            <div>
              <span className="text-[#8C8D94] block">Origen</span>
              <span className="text-[#FFFDFC] font-medium flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#CE9678]" />
                {coffee.region}, México
              </span>
            </div>
          </div>

          {/* Grind Selector if applicable */}
          <div>
            <label className="text-xs font-bold uppercase text-[#A0A1A8] tracking-widest block mb-2">
              Selecciona el tipo de preparación o molienda:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'fino', label: 'Para Servir Listo' },
                { id: 'grano', label: 'Grano Entero' },
                { id: 'medio', label: 'Molido Filtro' },
                { id: 'prensa', label: 'Molido Prensa' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedGrind(opt.id as any)}
                  className={`px-3 py-2 text-xs rounded-lg border font-medium transition-all ${
                    selectedGrind === opt.id
                      ? 'bg-[#CE9678] text-[#120B09] border-[#CE9678] font-bold'
                      : 'bg-[#251510] text-[#C5C5C5] border-[#3D251D] hover:border-[#8C5538]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#120B09] border-t border-[#2C1C17] flex items-center justify-between gap-4 mt-auto">
          <div>
            <span className="text-xs text-[#8C8D94] block uppercase tracking-wider">Precio</span>
            <span className="text-2xl font-bold font-serif-title text-[#CE9678]">
              ${coffee.price} <span className="text-xs text-[#C5C5C5] font-sans">MXN</span>
            </span>
          </div>

          <button
            onClick={handleAdd}
            id="modal-add-to-cart-btn"
            className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              added
                ? 'bg-emerald-600 text-white'
                : 'bg-[#CE9678] hover:bg-[#dfa78a] text-[#120B09] shadow-lg shadow-[#CE9678]/20'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                <span>Agregado a tu Orden</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Agregar a mi Orden (${coffee.price} MXN)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
