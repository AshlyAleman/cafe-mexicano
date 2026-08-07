import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, CheckCircle, Coffee, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (coffeeId: string, quantity: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart
}) => {
  if (!isOpen) return null;

  const [orderType, setOrderType] = useState<'mesa' | 'llevar' | 'domicilio'>('mesa');
  const [customerName, setCustomerName] = useState('');
  const [notes, setNotes] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.coffee.price * item.quantity, 0);

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = 'CM-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(newId);
    setOrderPlaced(true);
  };

  const handleFinishAndReset = () => {
    onClearCart();
    setOrderPlaced(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#180E0B] border-l border-[#2C1C17] text-[#F9FAFC] flex flex-col shadow-2xl">
          {/* Drawer Header */}
          <div className="p-6 bg-[#120B09] border-b border-[#2C1C17] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[#CE9678]/15 text-[#CE9678]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h2 className="font-serif-title text-xl font-bold uppercase tracking-wide text-[#FFFDFC]">
                Tu Orden de Café
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#A0A1A8] hover:text-white hover:bg-[#251510]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          {!orderPlaced ? (
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#251510] border border-[#3D251D] flex items-center justify-center mx-auto text-[#A0A1A8]">
                    <Coffee className="w-8 h-8" />
                  </div>
                  <p className="text-sm text-[#C5C5C5]">Tu orden aún está vacía.</p>
                  <p className="text-xs text-[#8C8D94]">
                    Explora nuestras variedades de café artesanal y agrega tus favoritas.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-2 px-5 py-2.5 rounded-xl bg-[#CE9678] text-[#120B09] font-bold text-xs uppercase"
                  >
                    Ver Variedades
                  </button>
                </div>
              ) : (
                <>
                  {/* Item List */}
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.coffee.id}
                        className="p-3.5 rounded-xl bg-[#1C110D] border border-[#2E1D17] flex items-center justify-between gap-3"
                      >
                        <img
                          src={item.coffee.image}
                          alt={item.coffee.name}
                          className="w-14 h-14 rounded-lg object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />

                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-[#FFFDFC] truncate">
                            {item.coffee.name}
                          </h4>
                          <span className="text-[11px] text-[#A0A1A8] block">
                            ${item.coffee.price} MXN c/u
                          </span>
                          {item.grindOption && (
                            <span className="text-[10px] text-[#CE9678] uppercase">
                              Tipo: {item.grindOption}
                            </span>
                          )}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1.5 bg-[#251510] border border-[#3D251D] rounded-lg p-1">
                          <button
                            onClick={() => onUpdateQuantity(item.coffee.id, item.quantity - 1)}
                            className="p-1 text-[#A0A1A8] hover:text-white"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-bold w-5 text-center text-[#CE9678]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.coffee.id, item.quantity + 1)}
                            className="p-1 text-[#A0A1A8] hover:text-white"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Options Form */}
                  <form onSubmit={handleConfirmOrder} className="space-y-4 pt-4 border-t border-[#2C1C17]">
                    <div>
                      <label className="text-xs font-bold uppercase text-[#A0A1A8] tracking-widest block mb-2">
                        Modalidad de Pedido:
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'mesa', label: 'En Barra / Mesa' },
                          { id: 'llevar', label: 'Para Llevar' },
                          { id: 'domicilio', label: 'Envío Grano' },
                        ].map((m) => (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => setOrderType(m.id as any)}
                            className={`py-2 px-2 text-[11px] font-semibold rounded-lg border text-center transition-colors ${
                              orderType === m.id
                                ? 'bg-[#CE9678] text-[#120B09] border-[#CE9678] font-bold'
                                : 'bg-[#251510] text-[#C5C5C5] border-[#3D251D]'
                            }`}
                          >
                            {m.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase text-[#A0A1A8] tracking-widest block mb-1">
                        Tu Nombre o Mesa:
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej: Sofía (Mesa 4)"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full bg-[#251510] border border-[#3D251D] rounded-xl px-3.5 py-2 text-xs text-white placeholder-[#8C8D94] focus:outline-none focus:border-[#CE9678]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase text-[#A0A1A8] tracking-widest block mb-1">
                        Instrucciones Especiales:
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Extra caliente, poco piloncillo..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-[#251510] border border-[#3D251D] rounded-xl px-3.5 py-2 text-xs text-white placeholder-[#8C8D94] focus:outline-none focus:border-[#CE9678]"
                      />
                    </div>

                    {/* Summary & Checkout */}
                    <div className="pt-4 border-t border-[#2C1C17] space-y-3">
                      <div className="flex justify-between text-xs text-[#A0A1A8]">
                        <span>Subtotal</span>
                        <span>${subtotal} MXN</span>
                      </div>
                      <div className="flex justify-between text-xs text-[#A0A1A8]">
                        <span>Impuestos y Servicio</span>
                        <span>Incluidos</span>
                      </div>
                      <div className="flex justify-between text-base font-bold text-[#CE9678] pt-2 border-t border-[#2C1C17]">
                        <span>Total a Pagar</span>
                        <span>${subtotal} MXN</span>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-[#CE9678] hover:bg-[#dfa78a] text-[#120B09] font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-4"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>Confirmar & Enviar Pedido</span>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          ) : (
            /* Order Placed Success View */
            <div className="flex-1 p-6 flex flex-col justify-between text-center space-y-6">
              <div className="my-auto space-y-4">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <span className="text-xs font-bold text-[#CE9678] uppercase tracking-widest block">
                  ¡Pedido Recibido con Éxito!
                </span>

                <h3 className="font-serif-title text-2xl font-bold text-white">
                  Gracias, {customerName || 'Cliente'}
                </h3>

                <p className="text-xs text-[#C5C5C5] leading-relaxed max-w-xs mx-auto">
                  Tu orden <strong className="text-[#CE9678]">{orderId}</strong> ha sido enviada directamente a la barra de barismo.
                </p>

                <div className="p-4 rounded-xl bg-[#251510] border border-[#3D251D] text-left text-xs space-y-2">
                  <div className="flex justify-between text-[#A0A1A8]">
                    <span>Modalidad:</span>
                    <span className="text-white capitalize">{orderType}</span>
                  </div>
                  <div className="flex justify-between text-[#A0A1A8]">
                    <span>Total Pagado:</span>
                    <span className="text-[#CE9678] font-bold">${subtotal} MXN</span>
                  </div>
                  {notes && (
                    <div className="text-[11px] text-[#A0A1A8] pt-2 border-t border-[#3D251D]">
                      Notas: "{notes}"
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={handleFinishAndReset}
                className="w-full py-3.5 rounded-xl bg-[#CE9678] text-[#120B09] font-bold text-xs uppercase tracking-wider"
              >
                Volver al Menú
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
