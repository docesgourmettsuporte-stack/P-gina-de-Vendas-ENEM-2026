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
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <div className="text-left">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xs text-slate-400 hidden sm:inline">A partir de</span>
              <span className="text-base font-black text-amber-400 font-mono">R$ 14,99</span>
              <span className="text-xs text-slate-400 hidden md:inline">• Completo VIP <strong className="text-white font-mono">R$ 27,90</strong></span>
            </div>
            <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
              <span>PIX Instantâneo</span>
              <span>•</span>
              <span>Garantia 30 Dias</span>
            </div>
          </div>
        </div>

        <button
          onClick={onOpenCheckout}
          className="px-4 sm:px-6 py-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-amber-500/20 flex items-center gap-1.5 cursor-pointer active:scale-95 transition-transform shrink-0"
        >
          <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
          <span>GARANTIR ACESSO</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
