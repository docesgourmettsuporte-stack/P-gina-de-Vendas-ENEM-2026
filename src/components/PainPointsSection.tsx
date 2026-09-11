import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface PainPointsSectionProps {
  onScrollToOffer: () => void;
}

export const PainPointsSection: React.FC<PainPointsSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section className="py-14 md:py-20 bg-[#040914] border-y border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
            A GRANDE DIFERENÇA
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Por que tentar estudar tudo agora é o maior erro?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            O ENEM não avalia quem leu mais páginas. O algoritmo do TRI avalia a coerência dos seus acertos.
          </p>
        </div>

        {/* Clean 2-Column Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          
          {/* Column Left: The Wrong Way */}
          <div className="bg-slate-950/80 border border-rose-500/20 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase pb-3 border-b border-slate-900">
              <XCircle className="w-4 h-4" />
              <span>O Jeito Desesperado (Sem Método)</span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">•</span>
                <span>Tenta assistir centenas de videoaulas acumuladas e não absorve nada.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">•</span>
                <span>Trava na redação por falta de repertório e perde mais de 1h30 escrevendo.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">•</span>
                <span>Gasta tempo com contas difíceis de logaritmo e erra as fáceis por cansaço.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">•</span>
                <span>O TRI despenca por falta de coerência pedagógica nos acertos.</span>
              </li>
            </ul>
          </div>

          {/* Column Right: The 80/20 Method */}
          <div className="bg-slate-900/90 border border-amber-500/40 rounded-2xl p-6 space-y-4 shadow-lg shadow-amber-500/5">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm uppercase pb-3 border-b border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>A Rota de Emergência 80/20</span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Foco exclusivo nos <strong>18 tópicos que representam 73% da prova</strong>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Esqueleto Coringa pronto para garantir <strong>900+ na redação em 50 min</strong>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Identificação rápida das <strong>25 questões fáceis</strong> para inflar o TRI.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Técnicas de chute estatístico para descartar distratores óbvios.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Minimalist Summary Banner */}
        <div className="text-center">
          <button
            onClick={onScrollToOffer}
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            <span>Ver tudo o que está incluso no pacote por R$ 27,90</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
