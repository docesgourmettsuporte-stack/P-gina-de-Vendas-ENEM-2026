import React, { useState } from 'react';
import { FileText, CheckCircle2, Zap, Calendar, Sparkles, ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';

interface MaterialShowcaseProps {
  onOpenCheckout: () => void;
}

export const MaterialShowcase: React.FC<MaterialShowcaseProps> = ({ onOpenCheckout }) => {
  const [activeTab, setActiveTab] = useState<'redacao' | 'tri' | 'cronograma'>('redacao');

  return (
    <section id="amostra" className="py-14 md:py-20 bg-[#050b14] border-t border-slate-800/80 scroll-mt-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>TRANSPARÊNCIA TOTAL</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Veja por dentro do material que você vai receber
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Nada de teorias enroladas de 800 páginas. Formato direto ao ponto, limpo e pronto para aplicar no celular ou imprimir.
          </p>
        </div>

        {/* 3 Tab Switchers */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <button
            onClick={() => setActiveTab('redacao')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'redacao'
                ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 ring-1 ring-amber-400'
                : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span>📝 Esqueleto Redação 900+</span>
          </button>

          <button
            onClick={() => setActiveTab('tri')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'tri'
                ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 ring-1 ring-amber-400'
                : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span>📊 Caça às 25 Fáceis do TRI</span>
          </button>

          <button
            onClick={() => setActiveTab('cronograma')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'cronograma'
                ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 ring-1 ring-amber-400'
                : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span>📅 Cronograma & Metas</span>
          </button>
        </div>

        {/* Digital Reader Simulator */}
        <div className="bg-slate-900/95 border-2 border-slate-800 hover:border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transition-all">
          
          {/* Reader Window Top Bar */}
          <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-[11px] text-slate-500 ml-2 font-sans font-medium hidden sm:inline">
                Guia Oficial Rota 80/20 • Visualizador Digital
              </span>
            </div>
            <div className="text-[11px] text-amber-400 font-bold flex items-center gap-1 font-sans">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Amostra Liberada</span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {activeTab === 'redacao' && (
              <div className="space-y-4">
                <div className="pb-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                    Modelos de Redação Coringa Pré-Prontos e Editáveis
                  </h4>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30">
                    Válido para Qualquer Tema
                  </span>
                </div>

                <div className="p-4 sm:p-5 bg-slate-950 rounded-xl border border-slate-800/90 text-xs sm:text-sm text-slate-200 leading-relaxed space-y-3 font-serif shadow-inner">
                  <p>
                    <strong className="text-amber-400 font-sans font-black text-xs block mb-1">
                      [PARÁGRAFO 1: INTRODUÇÃO CHANCELADA PELO INEP]
                    </strong>
                    &quot;A Carta Magna de 1988 — documento jurídico de maior relevância no Brasil — postula como dever irrevogável do Estado a garantia da plena cidadania e do bem-estar coletivo. Todavia, ao analisar a conjuntura nacional, constata-se que a problemática de <span className="text-amber-300 font-sans font-bold bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/40">[INSERIR TEMA DO ANO]</span> ainda impede a concretização desse preceito. Nesse contexto, convém examinar não apenas <span className="text-emerald-300 font-sans font-bold bg-emerald-500/20 px-1.5 py-0.5 rounded border border-emerald-500/40">[ARGUMENTO 1: Inércia Governamental]</span>, mas também <span className="text-sky-300 font-sans font-bold bg-sky-500/20 px-1.5 py-0.5 rounded border border-sky-500/40">[ARGUMENTO 2: Invisibilidade Social]</span> como motores dessa chaga.&quot;
                  </p>

                  <div className="pt-3 border-t border-slate-900 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-slate-300">
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Conectivos interparágrafos nota 1000 já posicionados.</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-300">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Proposta de intervenção completa com os 5 elementos.</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Economiza até 45 minutos no 1º domingo do ENEM
                  </span>
                  <span className="text-amber-300 font-bold bg-amber-500/10 px-2 py-0.5 rounded">
                    15 Repertórios Universais Inclusos no Guia
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'tri' && (
              <div className="space-y-4">
                <div className="pb-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                    Engenharia Reversa do TRI: Como Ganhar Mais Pontos
                  </h4>
                  <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30">
                    Matriz de Coerência Inep
                  </span>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">
                    Comparativo Real: 2 Estudantes com os <span className="text-white underline decoration-amber-400 font-black">Mesmos 26 Acertos</span> em Matemática
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Aluno A */}
                    <div className="bg-slate-950 p-4 rounded-xl border border-rose-500/30 text-left relative overflow-hidden">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-rose-400 uppercase font-black bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                          Aluno A (Sem Estratégia)
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">26 acertos</span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-rose-400 my-2 font-mono">624,3 pts</div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Errou questões básicas de geometria e porcentagem e acertou questões difíceis no chute. O algoritmo do TRI considerou <strong>incoerente</strong> e desvalorizou sua prova.
                      </p>
                    </div>

                    {/* Aluno B */}
                    <div className="bg-slate-950 p-4 rounded-xl border-2 border-emerald-500/60 text-left relative overflow-hidden shadow-lg shadow-emerald-500/10">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-emerald-400 uppercase font-black bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">
                          Aluno B (Com a Rota 80/20)
                        </span>
                        <span className="text-[10px] text-emerald-300 font-mono font-bold">26 acertos</span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-emerald-400 my-2 font-mono">798,6 pts</div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Garantiu as <strong>25 questões fáceis e médias</strong> primeiro. O algoritmo do TRI reconheceu <strong>coerência pedagógica máxima</strong> e jogou a pontuação lá em cima.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-amber-500/15 border border-amber-500/40 rounded-xl text-center text-xs sm:text-sm text-amber-300 font-medium">
                  ⚡ <strong>Diferença de +174,3 PONTOS</strong> no Sisu/ProUni com exatamente o mesmo número de acertos!
                </div>
              </div>
            )}

            {activeTab === 'cronograma' && (
              <div className="space-y-4">
                <div className="pb-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                    Plano de Estudo Completo: Sem Perder Tempo
                  </h4>
                  <span className="text-[11px] font-bold text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded border border-sky-500/30">
                    Bônus 1 Incluso
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-left">
                    <span className="text-[10px] font-bold text-amber-400 uppercase block mb-1">FASE 1 • TRIAGEM</span>
                    <h5 className="text-white font-bold text-xs mb-1">Rastreio das Fáceis</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Identificação dos 18 temas que concentram 73% das questões e fixação das fórmulas vitais.
                    </p>
                  </div>

                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-left">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase block mb-1">FASE 2 • DOMÍNIO</span>
                    <h5 className="text-white font-bold text-xs mb-1">Blindagem da Redação</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Memorização das lacunas coringas e dos 15 repertórios coringas para atingir 900+ sem travar.
                    </p>
                  </div>

                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-left">
                    <span className="text-[10px] font-bold text-indigo-400 uppercase block mb-1">FASE 3 • SIMULAÇÃO</span>
                    <h5 className="text-white font-bold text-xs mb-1">Gestão de Tempo & Chute</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Aplicação das técnicas de eliminação estatística para nunca mais deixar gabarito em branco.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center text-xs text-slate-300">
                  🎯 Adaptável para quem estuda <strong>2 horas por dia</strong> ou quem tem o dia todo livre.
                </div>
              </div>
            )}

            {/* In-Section High-Converting CTA */}
            <div className="mt-7 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="text-xs text-slate-300">
                <span className="block font-bold text-white text-sm">Pronto para ter acesso a tudo isso?</span>
                <span className="text-slate-400">Download em PDF no seu celular ou computador.</span>
              </div>
              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto py-3 px-6 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>QUERO ACESSO IMEDIATO (A PARTIR DE R$ 14,99)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

