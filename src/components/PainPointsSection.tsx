import React from 'react';
import { XCircle, CheckCircle2, ArrowRight, Zap, AlertTriangle, Sparkles } from 'lucide-react';

interface PainPointsSectionProps {
  onScrollToOffer: () => void;
}

export const PainPointsSection: React.FC<PainPointsSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section className="py-14 md:py-20 bg-[#040914] border-y border-slate-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>A GRANDE ARMADILHA DA RETA FINAL</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Por que tentar estudar tudo agora é o maior erro?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            O ENEM não mede quem acumulou mais páginas lidas. O algoritmo do TRI mede a <strong className="text-white">coerência pedagógica dos seus acertos</strong>.
          </p>
        </div>

        {/* 2-Column High-Contrast Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          
          {/* Column Left: The Wrong Way */}
          <div className="bg-slate-950/90 border-2 border-rose-500/30 rounded-2xl p-6 sm:p-7 space-y-4 relative shadow-lg">
            <div className="flex items-center gap-2 text-rose-400 font-black text-xs sm:text-sm uppercase pb-3 border-b border-slate-800/80 tracking-wide">
              <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>O Jeito Desesperado (Sem Método)</span>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold shrink-0">✕</span>
                <span>Tenta assistir centenas de videoaulas longas e acumuladas, terminando o dia exausto e sem fixar nada.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold shrink-0">✕</span>
                <span>Trava na folha em branco da redação por falta de repertório e perde mais de 1h30 em pânico.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold shrink-0">✕</span>
                <span>Perde 10 minutos tentando resolver cálculos complexos e erra as questões fáceis por puro cansaço mental.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold shrink-0">✕</span>
                <span>Sua nota do TRI é rebaixada pelo algoritmo por incoerência nos acertos.</span>
              </li>
            </ul>
          </div>

          {/* Column Right: The 80/20 Method */}
          <div className="bg-gradient-to-b from-slate-900 to-[#071324] border-2 border-amber-400/80 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl shadow-amber-500/10 relative">
            <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md">
              MÉTODO COMPROVADO
            </div>

            <div className="flex items-center gap-2 text-amber-300 font-black text-xs sm:text-sm uppercase pb-3 border-b border-slate-800/80 tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>A Rota Cirúrgica 80/20</span>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-100">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-black shrink-0">✓</span>
                <span>Foco exclusivo nos <strong>18 tópicos que representam 73% de toda a prova do ENEM</strong>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-black shrink-0">✓</span>
                <span>Esqueletos Coringas prontos para garantir <strong>900+ na redação em menos de 50 minutos</strong>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-black shrink-0">✓</span>
                <span>Técnica visual para caçar e cravar as <strong>25 questões fáceis de cada caderno</strong> e blindar seu TRI.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-black shrink-0">✓</span>
                <span>Técnicas de eliminação estatística para descartar distratores óbvios sem perder tempo.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 3 Impact Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-8 text-center">
          <div className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl">
            <div className="text-amber-400 font-black text-xl sm:text-2xl font-mono">73%</div>
            <div className="text-[11px] text-slate-400 mt-0.5">da prova concentrada em 18 temas</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl">
            <div className="text-emerald-400 font-black text-xl sm:text-2xl font-mono">+174 pts</div>
            <div className="text-[11px] text-slate-400 mt-0.5">de ganho médio por coerência no TRI</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl">
            <div className="text-indigo-400 font-black text-xl sm:text-2xl font-mono">50 min</div>
            <div className="text-[11px] text-slate-400 mt-0.5">para produzir redação nota 900+</div>
          </div>
        </div>

        {/* Call-to-action button */}
        <div className="text-center">
          <button
            onClick={onScrollToOffer}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-amber-300 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl border border-amber-500/30 hover:border-amber-400/60 transition-all cursor-pointer shadow-sm group"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Quero seguir a Rota 80/20 (A partir de R$ 14,99)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

