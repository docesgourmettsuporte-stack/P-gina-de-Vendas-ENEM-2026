import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

interface GuaranteeSectionProps {
  onScrollToOffer: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section className="py-12 md:py-16 bg-[#040914] border-t border-slate-800/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900/80 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-9 h-9 text-emerald-400" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
              GARANTIA TOTAL DE 30 DIAS
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Teste o método por 30 dias sem qualquer risco.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Baixe o material, aplique a Redação Coringa e confira o cronograma. Se achar que não valeu a pena, basta nos mandar um e-mail e devolveremos 100% do seu valor. Simples e direto.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
