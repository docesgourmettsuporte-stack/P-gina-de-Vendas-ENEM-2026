import React, { useState } from 'react';
import { 
  Check, 
  X, 
  ArrowRight, 
  Sparkles, 
  QrCode, 
  Zap, 
  ShieldCheck,
  Star,
  Flame,
  Gift
} from 'lucide-react';
import { BASIC_PACKAGE, COMPLETE_PACKAGE, BONUSES } from '../data/landingData';
import { CHECKOUT_URLS, redirectToCheckout } from '../utils/checkout';

interface PricingOfferBoxProps {
  onOpenCheckoutPlan?: (plan: 'basic' | 'complete') => void;
}

export const PricingOfferBox: React.FC<PricingOfferBoxProps> = ({ onOpenCheckoutPlan }) => {
  const [showSpecialOfferModal, setShowSpecialOfferModal] = useState<boolean>(false);

  const handleBasicCheckout = () => {
    setShowSpecialOfferModal(true);
  };

  const handleAcceptDiscount = () => {
    redirectToCheckout(CHECKOUT_URLS.discountOffer, 'Pacote Especial com Desconto', 19.90);
  };

  const handleDeclineDiscountAndContinueBasic = () => {
    setShowSpecialOfferModal(false);
    redirectToCheckout(CHECKOUT_URLS.basic, 'Pacote Básico', 14.99);
  };

  const handleCompleteCheckout = () => {
    if (onOpenCheckoutPlan) {
      onOpenCheckoutPlan('complete');
    } else {
      redirectToCheckout(CHECKOUT_URLS.complete, 'Pacote Completo VIP', 27.90);
    }
  };

  return (
    <section id="oferta" className="py-16 md:py-24 bg-[#020617] relative overflow-hidden scroll-mt-16">
      {/* Radiant Background Aura for High Vibrancy */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-amber-500/15 via-orange-500/10 to-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/40 px-4 py-1.5 rounded-full text-xs font-black text-amber-300 uppercase tracking-wider mb-4 shadow-lg shadow-amber-500/5">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>ESCOLHA SEU PLANO DE ACESSO IMEDIATO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Comece Hoje com o Método <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Que Cabe na Sua Rotina
            </span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Liberação imediata no seu e-mail e WhatsApp logo após a confirmação. Pagamento 100% seguro via PIX com garantia incondicional de 30 dias.
          </p>
        </div>

        {/* 2 Side-by-Side Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* ============================================================ */}
          {/* CARD 1: PACOTE BÁSICO (Oferta Principal / Essencial)         */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-700/80 hover:border-slate-600 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl backdrop-blur-md transition-all">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[11px] font-bold text-slate-400 bg-slate-800 px-3 py-1 rounded-full uppercase tracking-wider">
                  {BASIC_PACKAGE.tag}
                </span>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  70% OFF
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
                {BASIC_PACKAGE.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                {BASIC_PACKAGE.description}
              </p>

              {/* Price Box */}
              <div className="bg-slate-950/90 p-4 rounded-2xl border border-slate-800 text-left mb-6">
                <div className="text-xs text-slate-500">De <span className="line-through font-mono">R$ 49,99</span> por:</div>
                <div className="flex items-baseline gap-1 my-1">
                  <span className="text-lg font-bold text-slate-400">R$</span>
                  <span className="text-4xl font-black text-white font-mono">14,99</span>
                  <span className="text-xs text-emerald-400 font-bold ml-1">no PIX</span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1">
                  <QrCode className="w-3 h-3 text-emerald-400" />
                  <span>Pagamento único com liberação instantânea</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  O que está incluso no Básico:
                </div>
                
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Guia Oficial:</strong> Rota de Emergência ENEM 80/20 (PDF)</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Engenharia do TRI:</strong> Como caçar as 25 questões fáceis de cada área</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Matriz 80/20:</strong> Os 18 conteúdos com 73% de recorrência na prova</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Acesso Imediato:</strong> Download no celular, tablet e computador</span>
                </div>

                {/* What is not included in Basic */}
                <div className="pt-2 space-y-2 border-t border-slate-800/80 text-[11px] text-slate-500">
                  <div className="flex items-center gap-2">
                    <X className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                    <span className="line-through">Esqueleto Coringa de Redação 900+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <X className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                    <span className="line-through">Cronogramas de Choque (30, 15 e 7 Dias)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <X className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                    <span className="line-through">Mapas Mentais de Fórmulas e Mnemônicos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Basic CTA Button */}
            <div>
              <button
                onClick={handleBasicCheckout}
                className="w-full py-3.5 px-5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm rounded-xl border border-slate-700 hover:border-slate-500 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>QUERO O PACOTE BÁSICO (R$ 14,99)</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 2: PACOTE COMPLETO DE EMERGÊNCIA (VIP / Mais Destacado)  */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 bg-gradient-to-b from-slate-900 via-slate-900/95 to-[#0b1329] border-2 border-amber-400/90 rounded-3xl p-6 sm:p-9 flex flex-col justify-between shadow-2xl shadow-amber-500/10 backdrop-blur-md relative transform lg:-translate-y-2">
            
            {/* Top Glowing Ribbon Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black text-[11px] sm:text-xs uppercase tracking-wider py-1 px-4 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
              <span>MAIS ESCOLHIDO POR 94% DOS APROVADOS</span>
            </div>

            <div>
              {/* Card Sub-Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 pb-4 mb-4 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-black text-amber-400 uppercase tracking-wider block">
                    PACOTE COMPLETO VIP
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {COMPLETE_PACKAGE.title}
                  </h3>
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 text-xs font-black px-3 py-1 rounded-full shadow-sm">
                  82% DE DESCONTO
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                A rota cirúrgica com o <strong>Guia Principal + Todos os 5 Bônus Aceleradores</strong> para blindar sua Redação em 900+ e maximizar sua nota.
              </p>

              {/* Highlighted Price Box with Vivid Accent */}
              <div className="bg-gradient-to-r from-slate-950 via-slate-950 to-amber-950/30 p-4 sm:p-5 rounded-2xl border border-amber-500/40 text-left mb-6 shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <div className="text-xs text-slate-400">
                      De <span className="line-through font-mono">R$ 155,30</span> por apenas:
                    </div>
                    <div className="flex items-baseline gap-1.5 my-0.5">
                      <span className="text-xl font-bold text-amber-400">R$</span>
                      <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                        27,90
                      </span>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 ml-1">
                        ECONOMIZE R$ 127,40
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-300 sm:text-right border-t sm:border-t-0 pt-1 sm:pt-0 border-slate-800">
                    <span className="block text-emerald-400 font-bold text-[11px]">Pagamento único via PIX</span>
                    <span className="text-slate-400 text-[11px]">Acesso vitalício imediato</span>
                  </div>
                </div>
              </div>

              {/* Complete Stack of Inclusions */}
              <div className="space-y-2.5 mb-6">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>Tudo do Pacote Básico + 5 Bônus Estratégicos Inclusos:</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <div className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-white">Guia Oficial Rota 80/20 + Engenharia do TRI:</strong>
                    <span className="text-slate-400 text-xs block">Os 18 temas com 73% das questões e caça às fáceis.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-amber-300">BÔNUS 1: Cronograma ENEM — Plano de Estudo Completo</strong>
                    <span className="text-slate-400 text-xs block">Organize suas semanas e turbine sua preparação com metas claras.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-amber-300">BÔNUS 2: Repertórios Coringas para Redação</strong>
                    <span className="text-slate-400 text-xs block">Referências, dados e argumentos universais para garantir nota 900+.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-white">BÔNUS 3: Mapa de Fórmulas (Física, Matemática e Química)</strong>
                    <span className="text-slate-400 text-xs block">Resumo direto e visual com tudo o que você precisa para arrasar no TRI.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-white">BÔNUS 4: Flashcards ENEM — Revise Onde e Quando Quiser</strong>
                    <span className="text-slate-400 text-xs block">Revisão rápida e eficiente em todas as áreas do conhecimento.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <strong className="text-amber-300">BÔNUS 5: 4 Pilares Fundamentais para Medicina no ENEM</strong>
                    <span className="text-slate-400 text-xs block">Foco, Método, Mentalidade Vencedora e Melhoria Contínua para vagas concorridas.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Action Button */}
            <div>
              <button
                id="complete-pricing-cta-button"
                onClick={handleCompleteCheckout}
                className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-base sm:text-lg rounded-xl shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] animate-pulse hover:animate-none"
              >
                <span>GARANTIR PACOTE COMPLETO POR R$ 27,90</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Trust Sub-Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 mt-4 pt-3 border-t border-slate-800">
                <span className="flex items-center gap-1">
                  <QrCode className="w-3.5 h-3.5 text-emerald-400" />
                  PIX Instantâneo
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Liberação em 30 Segundos
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Garantia de 30 Dias
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Special Offer Pop-up Modal (Upsell / Downsell R$ 19,90) */}
      {showSpecialOfferModal && (
        <div 
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowSpecialOfferModal(false);
            }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in overflow-y-auto cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[94vh] overflow-y-auto bg-gradient-to-b from-slate-900 via-slate-900 to-[#0b1329] border-2 border-amber-400 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-[0_0_50px_rgba(245,158,11,0.25)] text-center text-white my-auto cursor-default"
          >
            
            {/* Close Button */}
            <button
              onClick={() => setShowSpecialOfferModal(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-slate-800 transition-colors cursor-pointer z-10"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Glowing Tag */}
            <div className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-400/50 px-3 py-1 rounded-full text-xs font-black text-amber-300 uppercase tracking-wider mb-4 shadow-sm">
              <Gift className="w-4 h-4 text-amber-400 shrink-0" />
              <span>OFERTA EXCLUSIVA DESTE MOMENTO</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug sm:leading-tight mb-2 pr-6 sm:pr-0">
              Espere! Leve o <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">Pacote Completo</span> com Desconto Especial
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 mb-4 sm:mb-5 leading-relaxed max-w-md mx-auto">
              Não vá para a prova desprotegido. Liberamos uma condição única para você levar o <strong>Guia Principal + Todos os 5 Bônus Aceleradores</strong> por uma diferença mínima:
            </p>

            {/* Price Box */}
            <div className="bg-slate-950/90 border border-amber-500/40 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-5 shadow-inner">
              <div className="text-xs text-slate-400 line-through mb-0.5">De R$ 155,30 por R$ 27,90</div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs font-bold text-amber-400 uppercase">Apenas</span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-400 font-mono tracking-tight">R$ 19,90</span>
                <span className="text-xs text-slate-300 font-bold">no PIX</span>
              </div>
              <div className="text-xs text-amber-300/90 font-medium mt-1">
                ⚡ Economia de mais de 87% com liberação imediata
              </div>
            </div>

            {/* Quick Benefits List */}
            <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800 text-left text-xs text-slate-200 space-y-1.5 mb-5">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong>Guia Oficial:</strong> Engenharia Reversa do TRI + Rota 80/20</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span><strong>Cronograma ENEM:</strong> Plano de Estudo Completo e Metas</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span><strong>Repertórios Coringas Redação 900+</strong> (Argumentos prontos)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span><strong>Mapa de Fórmulas Exatas</strong> + Flashcards ENEM</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span><strong>4 Pilares Fundamentais para Medicina no ENEM</strong></span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAcceptDiscount}
                className="w-full py-4 px-4 sm:px-6 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-sm sm:text-base rounded-xl shadow-[0_0_25px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
              >
                <Zap className="w-5 h-5 fill-slate-950 shrink-0" />
                <span className="leading-tight">SIM, QUERO O PACOTE COMPLETO POR R$ 19,90</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </button>

              <button
                onClick={handleDeclineDiscountAndContinueBasic}
                className="block w-full text-xs text-slate-400 hover:text-slate-200 underline transition-colors cursor-pointer py-1"
              >
                Não, prefiro continuar apenas com o Pacote Básico por R$ 14,99
              </button>
            </div>

            {/* Micro Trust badge */}
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-4 pt-3 border-t border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Garantia incondicional de 30 dias • Liberação instantânea no PIX</span>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
