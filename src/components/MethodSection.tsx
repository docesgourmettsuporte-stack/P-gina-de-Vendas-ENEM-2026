import React from 'react';
import { Target, FileEdit, Sparkles, ArrowRight } from 'lucide-react';

interface MethodSectionProps {
  onScrollToOffer: () => void;
}

export const MethodSection: React.FC<MethodSectionProps> = ({ onScrollToOffer }) => {
  const pillars = [
    {
      number: '01',
      title: 'Engenharia Reversa do TRI',
      subtitle: 'Nota Máxima nas 25 Fáceis',
      description: 'O algoritmo do ENEM pune acertos aleatórios em questões difíceis se você errar as fáceis. Você aprende a rastrear e pontuar com coerência máxima.',
    },
    {
      number: '02',
      title: 'Esqueleto Coringa de Redação',
      subtitle: '900+ Garantido em 50 Minutos',
      description: 'Uma estrutura validada de 4 parágrafos com conectivos chancelados e repertórios universais (CF/88, Habermas, Bauman) que se adaptam a qualquer tema.',
    },
    {
      number: '03',
      title: 'A Lei de Pareto 80/20',
      subtitle: 'Os 18 Conteúdos Recorrentes',
      description: 'Mais de 73% das questões do ENEM se repetem nos mesmos tópicos. Você estuda apenas o que comprovadamente vai cair, economizando semanas de esforço.',
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-[#030712] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
            A METODOLOGIA CIRÚRGICA
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Os 3 Pilares da Sua Aprovação Rápida
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Um plano objetivo focado exclusivamente em multiplicar seus pontos no menor tempo possível:
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-200"
            >
              <div>
                <div className="text-3xl font-mono font-black text-amber-400/70 mb-3">
                  {pillar.number}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {pillar.title}
                </h3>
                <div className="text-xs text-amber-300/90 font-medium mb-3">
                  {pillar.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/70 text-[11px] text-emerald-400 font-semibold">
                ✓ Aplicável imediatamente
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onScrollToOffer}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer"
          >
            <span>Quero Acessar o Método (A Partir de R$ 14,99)</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
