import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Zap, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { TARGET_COURSES } from '../data/landingData';

interface TriSimulatorProps {
  onOpenCheckout: () => void;
}

export const TriSimulator: React.FC<TriSimulatorProps> = ({ onOpenCheckout }) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>('direito');
  const [prepLevel, setPrepLevel] = useState<'zero' | 'pouco' | 'medio'>('zero');
  const [currentEstimatedScore, setCurrentEstimatedScore] = useState<number>(530);

  const selectedCourse = TARGET_COURSES.find((c) => c.id === selectedCourseId) || TARGET_COURSES[0];

  // Dynamic calculations based on prep level
  const baseBoost = prepLevel === 'zero' ? 220 : prepLevel === 'pouco' ? 180 : 140;
  const simulatedScore = Math.min(Math.round(currentEstimatedScore + baseBoost), 840);
  const redacaoProjection = prepLevel === 'zero' ? '920+' : '960+';
  const mathProjectedTri = prepLevel === 'zero' ? '740+' : '810+';

  return (
    <section id="simulador" className="py-16 md:py-24 bg-[#071324] relative overflow-hidden scroll-mt-16">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            FERRAMENTA INTERATIVA DE DIAGNÓSTICO
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Simulador de Salto no TRI:<br />
            <span className="text-amber-400">Descubra quantos pontos você pode resgatar</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Veja em tempo real como a combinação de <strong>TRI Focado + Redação 900+ Coringa</strong> transforma sua pontuação final mesmo com poucas semanas de estudo.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/90 border border-amber-500/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-sm">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <label className="block text-xs font-black uppercase text-amber-400 tracking-wider mb-2">
                1. Selecione seu Curso dos Sonhos:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {TARGET_COURSES.map((course) => {
                  const isSelected = course.id === selectedCourseId;
                  return (
                    <button
                      key={course.id}
                      onClick={() => setSelectedCourseId(course.id)}
                      className={`p-3 rounded-xl text-left border text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md scale-[1.02]'
                          : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      <div className="font-extrabold">{course.name}</div>
                      <div className={`text-[11px] mt-1 ${isSelected ? 'text-slate-900 font-semibold' : 'text-slate-400'}`}>
                        Corte Médio: ~{course.averageCutoff} pts
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Level of preparation */}
            <div>
              <label className="block text-xs font-black uppercase text-amber-400 tracking-wider mb-2">
                2. Qual o seu nível real de estudo até agora?
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    setPrepLevel('zero');
                    setCurrentEstimatedScore(490);
                  }}
                  className={`p-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                    prepLevel === 'zero'
                      ? 'bg-rose-500 text-white border-rose-400 shadow-sm'
                      : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  <div className="text-sm mb-1">😰</div>
                  <span>Zerado / Quase Nada</span>
                </button>

                <button
                  onClick={() => {
                    setPrepLevel('pouco');
                    setCurrentEstimatedScore(560);
                  }}
                  className={`p-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                    prepLevel === 'pouco'
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-sm'
                      : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  <div className="text-sm mb-1">📚</div>
                  <span>Estudei Pouco / Perdido</span>
                </button>

                <button
                  onClick={() => {
                    setPrepLevel('medio');
                    setCurrentEstimatedScore(630);
                  }}
                  className={`p-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                    prepLevel === 'medio'
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-sm'
                      : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  <div className="text-sm mb-1">⚡</div>
                  <span>Quero Turbinar a Nota</span>
                </button>
              </div>
            </div>

            {/* Estimated Current Score Slider */}
            <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between items-center text-xs text-slate-300 font-bold mb-2">
                <span>Sua Nota Média Atual Estimada:</span>
                <span className="text-amber-400 font-mono text-base font-extrabold">{currentEstimatedScore} pts</span>
              </div>
              <input
                type="range"
                min="450"
                max="720"
                step="10"
                value={currentEstimatedScore}
                onChange={(e) => setCurrentEstimatedScore(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>450 pts (Sem Estudar)</span>
                <span>600 pts</span>
                <span>720 pts (Avançado)</span>
              </div>
            </div>
          </div>

          {/* Result Projection (Right Column) */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-gradient-to-b from-[#0a1b32] to-[#0d223f] p-6 sm:p-8 rounded-2xl border border-amber-500/30">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-700/60">
                <div className="flex items-center gap-2 text-xs font-black text-amber-300 uppercase">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  DIAGNÓSTICO PERSONALIZADO: {selectedCourse.name.toUpperCase()}
                </div>
                <span className="bg-amber-500/20 text-amber-300 text-[11px] font-bold px-2 py-0.5 rounded border border-amber-500/40">
                  Urgência: {selectedCourse.urgencyLevel}
                </span>
              </div>

              {/* Main Jump Card */}
              <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 mb-5">
                <div className="text-xs text-slate-400 font-semibold mb-1">PROJEÇÃO FINAL COM O MÉTODO DE EMERGÊNCIA:</div>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight">
                    {simulatedScore} <span className="text-xl sm:text-2xl text-emerald-300">pts</span>
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30">
                    +{baseBoost} pontos salvos
                  </span>
                </div>
                <div className="mt-3 text-xs text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Suficiente para disputar vagas em <strong>{selectedCourse.name}</strong> pelo SISU / Prouni!</span>
                </div>
              </div>

              {/* Breakdown metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Redação Coringa:</div>
                  <div className="text-xl font-black text-amber-400">{redacaoProjection}</div>
                  <div className="text-[10px] text-slate-400">Garante peso decisivo</div>
                </div>

                <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">TRI Matemática:</div>
                  <div className="text-xl font-black text-amber-400">{mathProjectedTri}</div>
                  <div className="text-[10px] text-slate-400">Só acertando as 22 fáceis</div>
                </div>
              </div>

              <div className="text-xs text-slate-300 space-y-1.5 mb-6">
                <div className="font-bold text-white">Estratégia Recomendada para seu Perfil:</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {selectedCourse.estimatedJump}. Priorize a aplicação da <strong>Redação Coringa</strong> na primeira hora e elimine as questões difíceis com o <strong>Chute Técnico</strong>.
                </p>
              </div>
            </div>

            {/* Instant Unlock CTA */}
            <div>
              <button
                onClick={onOpenCheckout}
                className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black rounded-xl text-base shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-transform transform active:scale-95"
              >
                <Zap className="w-5 h-5 fill-slate-950 text-slate-950" />
                <span>DESBLOQUEAR ESTA ROTA POR APENAS R$ 27,90</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="text-center text-[11px] text-slate-400 mt-2">
                Acesso imediato • 6 bônus inclusos • Garantia de 30 dias
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
