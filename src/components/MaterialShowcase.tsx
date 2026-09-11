import React, { useState } from 'react';
import { FileText, CheckCircle2, Zap } from 'lucide-react';

interface MaterialShowcaseProps {
  onOpenCheckout: () => void;
}

export const MaterialShowcase: React.FC<MaterialShowcaseProps> = ({ onOpenCheckout }) => {
  const [activeTab, setActiveTab] = useState<'redacao' | 'tri'>('redacao');

  return (
    <section className="py-14 md:py-20 bg-[#050b14] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
            AMOSTRA REAL
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Veja por dentro do material que você vai receber
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Formato direto, limpo e sem enrolação, pronto para uso no celular ou impressão.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => setActiveTab('redacao')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'redacao'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            📝 Esqueleto de Redação 900+
          </button>
          <button
            onClick={() => setActiveTab('tri')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'tri'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            📊 Prova da Coerência no TRI
          </button>
        </div>

        {/* Document Sneak Peek Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          {activeTab === 'redacao' ? (
            <div className="space-y-4">
              <div className="pb-3 border-b border-slate-800">
                <h4 className="w-full text-lg sm:text-2xl font-black text-white tracking-tight">
                  Tenha acesso a modelos de redação pré-prontos e editáveis
                </h4>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 font-serif">
                <p>
                  <strong className="text-amber-400 font-sans font-bold text-xs">[INTRODUÇÃO CORINGA]:</strong><br />
                  &quot;A Carta Magna de 1988 — documento jurídico de maior relevância no Brasil — postula como dever do Estado a garantia da plena cidadania e do bem-estar social. Todavia, ao analisar a conjuntura brasileira, percebe-se que a problemática de <span className="text-amber-300 font-sans font-bold bg-amber-500/20 px-1 py-0.5 rounded">[TEMA DO ANO]</span> ainda impede a consolidação desse preceito...&quot;
                </p>
                <p className="text-xs font-sans text-slate-400 pt-2 border-t border-slate-900">
                  ⚡ <strong>Como funciona:</strong> Você só precisa preencher o eixo temático e os dois argumentos nos campos sinalizados para atingir nota máxima nas 5 competências.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Economiza até 40 minutos na prova
                </span>
                <span className="text-amber-300 font-semibold">15 Repertórios Inclusos no Guia</span>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="pb-3 border-b border-slate-800">
                <h4 className="w-full text-lg sm:text-2xl font-black text-white tracking-tight">
                  Entenda a TRI na Prática
                </h4>
              </div>

              {/* 26 Hits Comparative Case */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">
                  O Impacto Real da TRI: 2 Estudantes com os <span className="text-white underline decoration-amber-400 font-extrabold">Mesmos 26 Acertos</span> em Matemática
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-slate-950 p-4 rounded-xl border border-rose-500/30 text-left relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-rose-400 uppercase font-black bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                        Aluno A (Sem Estratégia)
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">26 acertos</span>
                    </div>
                    <div className="text-2xl font-black text-rose-400 my-2 font-mono">624,3 pts</div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Errou questões básicas/fáceis e acertou questões difíceis por &quot;chute&quot;. O algoritmo do Inep interpretou como <strong>incoerência</strong> e jogou a nota para baixo.
                    </p>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/40 text-left relative overflow-hidden shadow-lg shadow-emerald-500/5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-emerald-400 uppercase font-black bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">
                        Aluno B (Com a Rota 80/20)
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">26 acertos</span>
                    </div>
                    <div className="text-2xl font-black text-emerald-400 my-2 font-mono">798,6 pts</div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Garantir as <strong>25 questões fáceis e médias</strong> primeiro gerou <strong>coerência pedagógica máxima</strong>, valorizando cada acerto ao extremo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 border border-amber-500/30 rounded-xl text-center text-xs text-amber-300">
                ⚡ <strong>Diferença de +174,3 PONTOS</strong> no boletim final com exatamente a mesma quantidade de acertos!
              </div>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-slate-800 text-center">
            <button
              onClick={onOpenCheckout}
              className="py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-md hover:from-amber-400 hover:to-amber-300 transition-all cursor-pointer"
            >
              Quero Acesso Imediato aos Materiais (A Partir de R$ 14,99)
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
