import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface StickyBottomBarProps {
  onOpenCheckout: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenCheckout }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside aria-label="Acesso rápido à oferta" className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 border-t border-amber-500/40 py-2.5 px-4 backdrop-blur-md shadow-2xl transition-all">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-300 hidden sm:inline">Planos ENEM a partir de:</span>
          <span className="text-base font-black text-amber-400 font-mono">R$ 14,99</span>
          <span className="text-xs text-slate-400 hidden md:inline">| Completo VIP por <strong className="text-white font-mono">R$ 27,90</strong></span>
          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
            Liberação Imediata
          </span>
        </div>

        <button
          onClick={onOpenCheckout}
          className="px-5 py-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer active:scale-95 transition-transform"
        >
          <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
          <span>ESCOLHER MEU PLANO</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
