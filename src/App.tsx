import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoffeeTypes } from './components/CoffeeTypes';
import { CoffeeDetailModal } from './components/CoffeeDetailModal';
import { ServicesSection } from './components/ServicesSection';
import { GeneralSection } from './components/GeneralSection';
import { BlogSection } from './components/BlogSection';
import { CoffeeQuizModal } from './components/CoffeeQuizModal';
import { CartDrawer } from './components/CartDrawer';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { CoffeeItem, CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCoffee, setSelectedCoffee] = useState<CoffeeItem | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactServiceTopic, setContactServiceTopic] = useState<string | undefined>(undefined);

  // Cart operations
  const handleAddToCart = (
    coffee: CoffeeItem,
    grindOption?: 'grano' | 'fino' | 'medio' | 'prensa'
  ) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.coffee.id === coffee.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        if (grindOption) updated[existingIndex].grindOption = grindOption;
        return updated;
      }
      return [...prev, { coffee, quantity: 1, grindOption: grindOption || 'fino' }];
    });
  };

  const handleUpdateQuantity = (coffeeId: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.coffee.id !== coffeeId));
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.coffee.id === coffeeId ? { ...item, quantity } : item))
      );
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenContactWithService = (serviceName?: string) => {
    setContactServiceTopic(serviceName);
    setContactOpen(true);
  };

  const handleExploreRegion = (regionKeyword: string) => {
    const el = document.getElementById('variedades');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#120B09] text-[#F9FAFC] font-sans selection:bg-[#CE9678] selection:text-[#120B09]">
      {/* Navigation Header */}
      <Navbar
        cartItems={cartItems}
        onOpenCart={() => setCartOpen(true)}
        onOpenQuiz={() => setQuizOpen(true)}
        onOpenContact={() => handleOpenContactWithService()}
      />

      {/* Hero Section */}
      <Hero
        onOpenQuiz={() => setQuizOpen(true)}
        onExploreClick={() => handleExploreRegion('todos')}
      />

      {/* Types of Coffee Showcase */}
      <CoffeeTypes
        onSelectCoffee={(coffee) => setSelectedCoffee(coffee)}
        onAddToCart={(coffee) => handleAddToCart(coffee)}
      />

      {/* Services Section */}
      <ServicesSection
        onOpenContactWithService={(serviceName) => handleOpenContactWithService(serviceName)}
      />

      {/* Origin, Region & Tradition Section */}
      <GeneralSection
        onExploreRegion={(region) => handleExploreRegion(region)}
      />

      {/* Coffee Blog */}
      <BlogSection />

      {/* Footer */}
      <Footer
        onOpenContact={() => handleOpenContactWithService()}
        onOpenQuiz={() => setQuizOpen(true)}
      />

      {/* Modals & Slide-overs */}
      {selectedCoffee && (
        <CoffeeDetailModal
          coffee={selectedCoffee}
          onClose={() => setSelectedCoffee(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {quizOpen && (
        <CoffeeQuizModal
          onClose={() => setQuizOpen(false)}
          onSelectRecommendedCoffee={(coffee) => {
            setSelectedCoffee(coffee);
          }}
        />
      )}

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        initialService={contactServiceTopic}
      />
    </div>
  );
}
