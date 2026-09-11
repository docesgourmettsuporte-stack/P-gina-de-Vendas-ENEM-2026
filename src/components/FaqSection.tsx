import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const faqs = [
    {
      id: 'faq-1',
      question: 'Qual a diferença entre o Pacote Básico e o Pacote Completo?',
      answer: 'O Pacote Básico (R$ 14,99) contém o Guia Oficial com a metodologia 80/20, a matriz dos 18 temas mais recorrentes e a engenharia do TRI para caçar as 25 questões fáceis. O Pacote Completo (R$ 27,90) inclui tudo do básico mais os 5 super bônus aceleradores: o Esqueleto Coringa de Redação 900+, os Cronogramas de Choque (30, 15 e 7 dias), os Mapas Mentais de Fórmulas e o Guia de Chute Técnico e Gestão de Tempo.',
    },
    {
      id: 'faq-2',
      question: 'Eu realmente consigo aumentar minha nota começando agora?',
      answer: 'Sim. O método não tenta ensinar o conteúdo de anos em dias. Ele foca na engenharia reversa do TRI (garantindo pontuação máxima nas 25 questões fáceis de cada área) e na estrutura coringa de redação que garante 900+ sem depender do tema.',
    },
    {
      id: 'faq-3',
      question: 'Como e quando recebo o material?',
      answer: 'O envio é imediato. Assim que o pagamento for confirmado via PIX (liberação automática em segundos), você recebe o link de download e acesso aos bônus no seu e-mail e WhatsApp cadastrados.',
    },
    {
      id: 'faq-4',
      question: 'O esqueleto de redação pode ser zerado ou considerado plágio?',
      answer: 'De forma alguma. O modelo coringa utiliza conectivos coesivos chancelados e estruturas argumentativas universais totalmente aceitas pelo manual de corretores do Inep.',
    },
    {
      id: 'faq-5',
      question: 'E se eu não gostar do conteúdo?',
      answer: 'Você tem garantia incondicional de 30 dias. Se não ficar 100% satisfeito, basta solicitar o reembolso e devolveremos todo o seu dinheiro sem questionamentos.',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-14 md:py-20 bg-[#030712] border-t border-slate-800/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Perguntas & Respostas Rápidas
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-800/70 transition-colors"
                >
                  <span className="font-bold text-xs sm:text-sm text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-md text-amber-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-amber-300' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp direct help */}
        <div className="mt-8 text-center">
          <a
            href="https://wa.me/?text=Olá,%20tenho%20uma%20dúvida%20sobre%20o%20Guia%20ENEM:%20Não%20Estudei.%20E%20Agora?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Falar com o Suporte no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
