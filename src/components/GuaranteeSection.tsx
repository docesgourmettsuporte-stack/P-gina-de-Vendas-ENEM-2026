import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Lock } from 'lucide-react';

interface GuaranteeSectionProps {
  onScrollToOffer: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section className="py-14 md:py-20 bg-[#040914] border-t border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-b from-slate-900 via-slate-900/90 to-emerald-950/20 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-emerald-500/5 relative overflow-hidden">
          
          {/* Subtle Glow Aura */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative z-10">
            
            {/* Guarantee Seal Icon */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-emerald-600/20 via-emerald-500/20 to-teal-500/20 border-2 border-emerald-400/60 flex flex-col items-center justify-center text-center shadow-lg shadow-emerald-500/10 p-2">
                <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400 mb-1" />
                <span className="text-[10px] font-black text-emerald-300 font-mono tracking-wider uppercase leading-none">
                  30 DIAS
                </span>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tight">
                  RISCO ZERO
                </span>
              </div>
            </div>

            {/* Guarantee Copy */}
            <div className="space-y-3 flex-1">
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-black text-emerald-400 uppercase tracking-wider">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>COMPROMISSO BLINDADO • RISCO ZERO</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug">
                Teste por 30 dias. Se não se sentir 100% mais seguro, devolvemos seu dinheiro.
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Baixe o Guia Oficial, teste os Esqueletos Coringas de Redação e aplique a técnica das 25 questões fáceis no TRI. Se você sentir que o material não entregou 10x mais valor do que custou, basta nos enviar um único e-mail. Nós devolvemos <strong>100% do seu dinheiro</strong> sem questionamentos ou letras miúdas.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-emerald-300 font-semibold">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Sem burocracia
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Reembolso em 1 clique
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Acesso imediato no PIX
                </span>
              </div>
            </div>

          </div>

          {/* Quick CTA to offer */}
          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
            <button
              onClick={onScrollToOffer}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 bg-slate-950 px-5 py-2.5 rounded-xl border border-amber-500/30 hover:border-amber-400/60 transition-all cursor-pointer group"
            >
              <span>Aproveitar condição com garantia total de 30 dias</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

