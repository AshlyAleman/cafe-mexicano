import React, { useState } from 'react';
import { CoffeeItem } from '../types';
import { COFFEE_ITEMS } from '../data/coffeeData';
import { Flame, Info, Plus, Search, Sparkles, ShoppingBag } from 'lucide-react';

interface CoffeeTypesProps {
  onSelectCoffee: (coffee: CoffeeItem) => void;
  onAddToCart: (coffee: CoffeeItem) => void;
}

export const CoffeeTypes: React.FC<CoffeeTypesProps> = ({
  onSelectCoffee,
  onAddToCart
}) => {
  const [activeTab, setActiveTab] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'todos', label: 'Todos los Cafes' },
    { id: 'tradicional', label: 'Tradicional (de Olla)' },
    { id: 'espresso', label: 'Espressos y Cappuccinos' },
    { id: 'frio', label: 'Bebidas Frias y Cold Brew' },
    { id: 'especialidad', label: 'Especialidad & Vainilla' },
  ];

  const filteredCoffees = COFFEE_ITEMS.filter((item) => {
    const matchesTab = activeTab === 'todos' || item.category === activeTab;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.notes.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <section id="variedades" className="py-20 bg-[#150D0A] relative border-t border-[#251510]">
      {/* Decorative side coffee bean silhouette background accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#CE9678] block mb-2">
            Nuestra Cosecha & Menú
          </span>
          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold uppercase text-[#F9FAFC] tracking-tight mb-4">
            Los diferentes tipos de café
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#CE9678] to-transparent mx-auto mb-6" />
          <p className="text-[#C5C5C5] text-base leading-relaxed">
            Cada taza cuenta una historia de las altas montañas mexicanas. Desde el ancestral Café de Olla sazonado con canela y piloncillo hasta refinadas extracciones de especialidad.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-[#2C1C17]">
          {/* Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-[#CE9678] text-[#120B09] shadow-md shadow-[#CE9678]/20 font-bold'
                    : 'bg-[#251510] text-[#C5C5C5] hover:text-[#FFFDFC] hover:bg-[#321C16] border border-[#3D251D]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#8C8D94] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por notas o nombre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#251510] border border-[#3D251D] rounded-xl pl-9 pr-4 py-2 text-xs text-[#F9FAFC] placeholder-[#8C8D94] focus:outline-none focus:border-[#CE9678] transition-colors"
            />
          </div>
        </div>

        {/* Coffee Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCoffees.map((coffee) => (
            <div
              key={coffee.id}
              className="group bg-[#1D120E] border border-[#2C1C17] hover:border-[#CE9678]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#CE9678]/10 flex flex-col h-full"
            >
              {/* Image Container */}
              <div
                className="relative h-56 overflow-hidden cursor-pointer"
                onClick={() => onSelectCoffee(coffee)}
              >
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D120E] via-transparent to-transparent opacity-90" />

                {coffee.isPopular && (
                  <span className="absolute top-3 left-3 bg-[#CE9678] text-[#120B09] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Favorito
                  </span>
                )}

                <span className="absolute top-3 right-3 bg-[#120B09]/80 backdrop-blur-md text-[#EACCB3] text-[10px] font-bold uppercase px-2.5 py-1 rounded-md border border-[#3D251D] flex items-center gap-1">
                  <Flame className="w-3 h-3 text-[#CE9678]" />
                  {coffee.region}
                </span>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-2xl font-bold font-serif-title text-[#CE9678]">
                    ${coffee.price} <span className="text-xs text-[#C5C5C5] font-sans">MXN</span>
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => onSelectCoffee(coffee)}
                    className="font-serif-title text-xl font-bold text-[#F9FAFC] group-hover:text-[#CE9678] transition-colors cursor-pointer mb-1"
                  >
                    {coffee.name}
                  </h3>
                  <p className="text-xs text-[#A0A1A8] mb-3 line-clamp-1 font-medium">
                    {coffee.subtitle}
                  </p>
                  <p className="text-xs text-[#C5C5C5] leading-relaxed line-clamp-2 mb-4">
                    {coffee.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {coffee.notes.slice(0, 3).map((note, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-[#271712] text-[#EACCB3] border border-[#3D251D] text-[10px]"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-2 pt-4 border-t border-[#2A1B16]">
                  <button
                    onClick={() => onSelectCoffee(coffee)}
                    id={`info-btn-${coffee.id}`}
                    className="flex-1 py-2.5 px-3 bg-[#251510] hover:bg-[#321C16] text-[#E0E1E6] hover:text-[#FFFDFC] text-xs font-semibold rounded-xl border border-[#3D251D] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-[#CE9678]" />
                    <span>Información</span>
                  </button>

                  <button
                    onClick={() => onAddToCart(coffee)}
                    id={`add-btn-${coffee.id}`}
                    className="py-2.5 px-4 bg-[#CE9678] hover:bg-[#dfa78a] text-[#120B09] text-xs font-bold rounded-xl transition-all shadow-md shadow-[#CE9678]/15 flex items-center justify-center gap-1.5 cursor-pointer"
                    title="Agregar a la orden"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Pedir</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCoffees.length === 0 && (
          <div className="text-center py-16 bg-[#1D120E] rounded-2xl border border-[#2C1C17]">
            <p className="text-[#C5C5C5] text-sm">
              No se encontraron variedades de café que coincidan con tu búsqueda.
            </p>
            <button
              onClick={() => {
                setActiveTab('todos');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#CE9678] text-[#120B09] font-semibold text-xs rounded-xl"
            >
              Ver todas las variedades
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
