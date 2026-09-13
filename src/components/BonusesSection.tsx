import React from 'react';
import { 
  Gift, 
  CalendarCheck, 
  CheckSquare, 
  BookOpenCheck, 
  Layers, 
  Zap, 
  ClockAlert, 
  HeartPulse,
  Sparkles, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { BONUSES } from '../data/landingData';

interface BonusesSectionProps {
  onOpenCheckout: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onOpenCheckout }) => {
  const iconMap: Record<string, React.ElementType> = {
    CalendarCheck,
    CheckSquare,
    BookOpenCheck,
    Layers,
    Zap,
    ClockAlert,
    HeartPulse,
  };

  return (
    <section id="bonus" className="py-16 md:py-24 bg-gradient-to-b from-[#050b14] via-[#091526] to-[#050b14] relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/40 text-amber-300 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 shadow-sm">
            <Gift className="w-4 h-4 text-amber-400 animate-bounce" />
            SUPER PACOTE DE BÔNUS EXCLUSIVOS
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Você não vai receber apenas um PDF básico.<br />
            <span className="text-amber-400">Receba um arsenal completo de aprovação.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Ao garantir o seu acesso hoje pelo valor promocional de <strong className="text-amber-400">R$ 27,90</strong>, você leva gratuitamente estes 5 materiais aceleradores avaliados em mais de <span className="line-through text-slate-400">R$ 105,40</span>:
          </p>
        </div>

        {/* 5 Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-14">
          {BONUSES.map((bonus, index) => {
            const Icon = iconMap[bonus.iconName] || Gift;
            const isLastTwoOnDesktop = index === 3 ? 'lg:col-start-2 lg:col-span-2' : 'lg:col-span-2';
            const isLastOnTablet = index === 4 ? 'md:col-span-2 md:max-w-md md:mx-auto w-full lg:col-span-2 lg:max-w-none' : '';

            return (
              <div
                key={bonus.id}
                className={`relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-500/40 hover:shadow-[0_8px_25px_rgba(245,158,11,0.1)] transition-all duration-300 group ${isLastTwoOnDesktop} ${isLastOnTablet}`}
              >
                {bonus.highlightTag && (
                  <div className="absolute -top-3 right-5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md z-10">
                    ⭐ {bonus.highlightTag}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black tracking-wider text-amber-400 font-mono bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                      {bonus.badge}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {bonus.image && (
                    <div className="relative mb-4 overflow-hidden rounded-xl border border-slate-700/60 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-inner group/img aspect-[3/4] flex items-center justify-center p-1.5">
                      <img
                        src={bonus.image}
                        alt={`Mockup 3D - ${bonus.title}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-2.5 left-2.5 bg-slate-950/85 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-amber-300 font-bold border border-amber-500/20 flex items-center gap-1 shadow">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>Mockup 3D Oficial</span>
                      </div>
                    </div>
                  )}

                  <h3 className="text-lg font-black text-white mb-1 leading-snug">
                    {bonus.title}
                  </h3>

                  <div className="text-xs font-semibold text-amber-300/80 mb-3">
                    {bonus.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {bonus.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="text-xs text-slate-400">
                    Preço individual: <span className="line-through font-mono">R$ {bonus.originalPrice.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-black px-2 py-0.5 rounded">
                    GRÁTIS HOJE
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Value Summary Banner */}
        <div className="bg-gradient-to-r from-amber-500/20 via-slate-900 to-orange-500/20 border border-amber-500/40 rounded-3xl p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-2xl">
          <div className="text-xs font-black uppercase tracking-widest text-amber-400 mb-2">
            VALOR REAL DE TODO O COMBO:
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white mb-2">
            Guia Principal + 5 Bônus Exclusivos = <span className="line-through text-rose-400">R$ 155,30</span>
          </div>
          <div className="text-lg sm:text-xl font-bold text-slate-200 mb-6">
            Hoje tudo por apenas <span className="text-amber-400 font-black text-2xl sm:text-3xl">R$ 27,90</span> no PIX (Pagamento Único)
          </div>

          <button
            onClick={onOpenCheckout}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-base sm:text-lg rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer active:scale-95"
          >
            <Gift className="w-5 h-5 fill-slate-950" />
            <span>QUERO GARANTIR TODOS OS 5 BÔNUS AGORA</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
