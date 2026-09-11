import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  QrCode, 
  CheckCircle2, 
  Copy, 
  Zap, 
  Download, 
  ExternalLink,
  Flame,
  Clock,
  Sparkles,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { BASIC_PACKAGE, COMPLETE_PACKAGE, ORDER_BUMPS } from '../data/landingData';
import { CHECKOUT_URLS, redirectToCheckout } from '../utils/checkout';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: 'basic' | 'complete';
  selectedBumpIds: string[];
  totalPrice: number;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
  selectedBumpIds,
  totalPrice,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [step, setStep] = useState<'form' | 'pix_generated' | 'success'>('form');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const currentPlanData = selectedPlan === 'basic' ? BASIC_PACKAGE : COMPLETE_PACKAGE;

  const handleGeneratePix = (e: React.FormEvent) => {
    e.preventDefault();
    const destination = selectedPlan === 'basic' ? CHECKOUT_URLS.basic : CHECKOUT_URLS.complete;
    redirectToCheckout(destination);
  };

  const handleSimulatePaymentConfirmation = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('success');
    }, 750);
  };

  const dummyPixCode = `00020126580014br.gov.bcb.pix0136enem-nao-estudei-${selectedPlan}-plano5204000053039865405${totalPrice.toFixed(2)}5802BR5925ENEM_EMERGENCIA_OFICIAL6009SAO_PAULO62070503***6304E9A1`;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(dummyPixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-400 mb-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>PAGAMENTO SEGURO VIA PIX • LIBERAÇÃO IMEDIATA</span>
        </div>

        {/* Step 1: Data & Payment selection */}
        {step === 'form' && (
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
              Finalize seu Acesso ao {currentPlanData.title}
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Preencha os dados abaixo para gerar sua chave PIX com liberação instantânea.
            </p>

            {/* Order Summary Pill */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-5">
              <div className="flex justify-between items-center text-xs text-slate-300 font-bold mb-2">
                <span>Plano Selecionado:</span>
                <span className={selectedPlan === 'complete' ? 'text-amber-400' : 'text-emerald-400'}>
                  {currentPlanData.title}
                </span>
              </div>
              
              <div className="flex justify-between text-[11px] text-slate-400 py-0.5">
                <span>{selectedPlan === 'basic' ? 'Guia Oficial Rota 80/20 + TRI' : 'Guia Principal + 5 Bônus Aceleradores'}</span>
                <span className="font-mono text-white">R$ {currentPlanData.currentPrice.toFixed(2).replace('.', ',')}</span>
              </div>

              {selectedPlan === 'complete' && selectedBumpIds.map((bumpId) => {
                const bump = ORDER_BUMPS.find((b) => b.id === bumpId);
                if (!bump) return null;
                return (
                  <div key={bump.id} className="flex justify-between text-[11px] text-slate-400 py-0.5">
                    <span>+ {bump.title}</span>
                    <span className="font-mono text-amber-400">+ R$ {bump.price.toFixed(2).replace('.', ',')}</span>
                  </div>
                );
              })}

              <div className="flex justify-between items-center text-sm font-black text-white pt-2 mt-2 border-t border-slate-800">
                <span>Total no PIX:</span>
                <span className="text-xl text-emerald-400 font-mono">
                  R$ {totalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {/* PIX Method Info Banner */}
            <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <QrCode className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-emerald-300">
                  Forma de Pagamento: PIX Instantâneo
                </div>
                <div className="text-[11px] text-slate-400">
                  Chave segura gerada na hora. Acesso liberado no seu e-mail em menos de 30 segundos.
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleGeneratePix} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">
                  Seu Nome Completo:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João Victor Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">
                  Seu Melhor E-mail (Onde você receberá os acessos):
                </label>
                <input
                  type="email"
                  required
                  placeholder="Ex: joao.estudante@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">
                  WhatsApp (Para avisos e suporte):
                </label>
                <input
                  type="tel"
                  placeholder="(00) 90000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 py-4 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-base rounded-xl shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
              >
                {loading ? (
                  <span>Gerando PIX com Segurança...</span>
                ) : (
                  <>
                    <Zap className="w-5 h-5 fill-slate-950" />
                    <span>
                      GERAR PIX DE R$ {totalPrice.toFixed(2).replace('.', ',')}
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}

        {/* Step 2: PIX QR Code Simulated Screen */}
        {step === 'pix_generated' && (
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
              <QrCode className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
              PIX Gerado com Sucesso!
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Escaneie o QR Code no seu aplicativo do banco ou use o botão Copiar Código Pix:
            </p>

            {/* Mock QR Code container */}
            <div className="bg-white p-4 rounded-2xl w-48 h-48 mx-auto flex items-center justify-center shadow-inner mb-4">
              <div className="relative w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-xl p-2 text-center text-slate-900 font-mono text-[10px]">
                <QrCode className="w-24 h-24 text-slate-900 mb-1" />
                <span className="font-bold">{currentPlanData.title}</span>
                <span className="text-[9px] text-slate-600">R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            {/* Copy Button */}
            <div className="space-y-3 mb-6">
              <button
                onClick={handleCopyPix}
                className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 border border-slate-700 cursor-pointer"
              >
                <Copy className="w-4 h-4 text-amber-400" />
                <span>{copied ? '✅ Código PIX Copiado com Sucesso!' : 'Copiar Código PIX Copia e Cola'}</span>
              </button>

              <button
                onClick={handleSimulatePaymentConfirmation}
                disabled={loading}
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <CheckCircle2 className="w-5 h-5 fill-slate-950 text-emerald-400" />
                <span>{loading ? 'Verificando pagamento...' : 'Já Realizei o Pagamento (Liberar Acesso)'}</span>
              </button>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>O código expira em 15 minutos</span>
            </div>
          </div>
        )}

        {/* Step 3: Instant Access Portal Screen (Success) */}
        {step === 'success' && (
          <div className="text-center py-2">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white mb-1">
              🎉 Parabéns, {formData.name || 'Estudante'}!
            </h3>
            <p className="text-xs sm:text-sm text-emerald-400 font-bold mb-4">
              Seu acesso ao {currentPlanData.title} foi liberado com sucesso!
            </p>
            <p className="text-xs text-slate-300 mb-6">
              Enviamos todos os materiais e links de acesso para o e-mail: <strong className="text-white">{formData.email || 'seu e-mail'}</strong>. Você já pode baixar os arquivos principais abaixo:
            </p>

            {/* Instant Download Links Box */}
            <div className="space-y-2.5 mb-6 text-left">
              <div className="bg-slate-950 p-3.5 rounded-xl border border-amber-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="font-bold text-white text-xs">📘 Guia Principal: Rota de Emergência ENEM 80/20</div>
                    <div className="text-[10px] text-slate-400">PDF • 64 páginas • Leitura rápida e objetiva</div>
                  </div>
                </div>
                <button
                  onClick={() => alert('Download do Guia Principal iniciado!')}
                  className="px-3 py-1.5 bg-amber-500 text-slate-950 text-xs font-black rounded-lg flex items-center gap-1 cursor-pointer hover:bg-amber-400"
                >
                  <Download className="w-3.5 h-3.5" /> Baixar
                </button>
              </div>

              {selectedPlan === 'complete' && (
                <div className="bg-slate-950 p-3.5 rounded-xl border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-emerald-400" />
                    <div>
                      <div className="font-bold text-white text-xs">🎁 Pacote Completo com 5 Bônus Aceleradores</div>
                      <div className="text-[10px] text-slate-400">Redação Coringa 900+, Cronograma de Choque, Fórmulas & Chute</div>
                    </div>
                  </div>
                  <button
                    onClick={() => alert('Download do Pacote de Bônus iniciado!')}
                    className="px-3 py-1.5 bg-emerald-500 text-slate-950 text-xs font-black rounded-lg flex items-center gap-1 cursor-pointer hover:bg-emerald-400"
                  >
                    <Download className="w-3.5 h-3.5" /> Baixar
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl cursor-pointer"
            >
              Fechar e Voltar à Página
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
