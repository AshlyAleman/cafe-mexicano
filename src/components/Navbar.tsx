import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingBag, Menu as MenuIcon, X, Sparkles, Phone, MapPin } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cartItems: CartItem[];
  onOpenCart: () => void;
  onOpenQuiz: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItems,
  onOpenCart,
  onOpenQuiz,
  onOpenContact
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Variedades', href: '#variedades' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Origen', href: '#origen' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#180E0B]/95 backdrop-blur-md border-b border-[#2C1C17] shadow-xl py-3'
          : 'bg-gradient-to-b from-[#0F0806]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus:outline-none"
            id="nav-logo-link"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#CE9678] to-[#8C5538] flex items-center justify-center text-white shadow-lg shadow-[#CE9678]/20 group-hover:scale-105 transition-transform duration-300">
              <Coffee className="w-5 h-5 text-[#FFFDFC]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-title text-xl font-bold tracking-wider text-[#FFFDFC] uppercase group-hover:text-[#CE9678] transition-colors">
                Café Mexicano
              </span>
              <span className="text-[10px] text-[#C5C5C5] tracking-widest uppercase font-sans -mt-1">
                Tierra & Tradición
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#E0E1E6] hover:text-[#CE9678] transition-colors rounded-lg hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenQuiz}
              id="open-quiz-btn"
              className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-full border border-[#CE9678]/40 bg-[#CE9678]/10 text-[#EACCB3] hover:bg-[#CE9678] hover:text-[#120B09] transition-all duration-300 cursor-pointer shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#CE9678] group-hover:text-black" />
              <span>¿Que cafe va elegir?</span>
            </button>

            <button
              onClick={onOpenContact}
              id="open-contact-nav-btn"
              className="px-3.5 py-2 text-xs font-medium text-[#FFFDFC] hover:text-[#CE9678] transition-colors"
            >
              Contacto
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              id="open-cart-btn"
              className="relative p-2.5 rounded-full bg-[#2C1A14] text-[#E0E1E6] hover:text-[#FFFDFC] hover:bg-[#3D251D] border border-[#4D3127] transition-all cursor-pointer"
              aria-label="Ver pedido"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#CE9678] text-[#120B09] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse shadow-md">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onOpenCart}
              id="mobile-open-cart-btn"
              className="relative p-2 rounded-full bg-[#2C1A14] text-[#E0E1E6] border border-[#4D3127]"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#CE9678] text-[#120B09] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-lg text-[#FFFDFC] hover:bg-[#2C1A14]"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#180E0B] border-b border-[#2C1C17] px-4 pt-3 pb-6 space-y-3 mt-2 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#E0E1E6] hover:text-[#CE9678] hover:bg-white/5 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#2C1C17] flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              id="mobile-quiz-btn"
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold py-2.5 px-4 rounded-lg bg-[#CE9678] text-[#120B09]"
            >
              <Sparkles className="w-4 h-4" />
              <span>¿Qué café va contigo? (Recomendador)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              id="mobile-contact-btn"
              className="w-full text-center py-2 text-sm text-[#C5C5C5] hover:text-white"
            >
              Contacto / Reservar Mesa
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
