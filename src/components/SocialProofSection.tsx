import React, { useState } from 'react';
import { 
  CheckCheck, 
  ArrowRight, 
  MoreVertical,
  Phone,
  Video,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { WHATSAPP_TESTIMONIALS } from '../data/landingData';

interface SocialProofSectionProps {
  onOpenCheckout?: () => void;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({ 
  onOpenCheckout = () => {} 
}) => {
  const [activeChatId, setActiveChatId] = useState<string>(WHATSAPP_TESTIMONIALS[0].id);

  const activeChat = WHATSAPP_TESTIMONIALS.find((c) => c.id === activeChatId) || WHATSAPP_TESTIMONIALS[0];

  return (
    <section id="depoimentos" className="py-14 md:py-20 bg-[#040914] border-t border-slate-800/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-xs text-emerald-400 font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            CONVERSAS REAIS NO WHATSAPP
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Mensagens de Alunos no Dia do Resultado
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            Veja os agradecimentos espontâneos enviados por quem aplicou o método e conquistou a vaga na faculdade dos sonhos:
          </p>
        </div>

        {/* Student Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
          {WHATSAPP_TESTIMONIALS.map((item) => {
            const isSelected = item.id === activeChat.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveChatId(item.id)}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                  isSelected
                    ? 'bg-slate-900 border-amber-500/60 shadow-lg shadow-amber-500/5 ring-1 ring-amber-500/40'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 opacity-75 hover:opacity-100'
                }`}
              >
                <div className="relative shrink-0">
                  <img
                    src={item.studentAvatar}
                    alt={item.studentName}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900" />
                </div>
                <div className="overflow-hidden">
                  <div className="font-bold text-xs text-white truncate">
                    {item.studentName}
                  </div>
                  <div className="text-[11px] text-amber-300 font-medium truncate">
                    {item.targetCourse}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {item.universityShort}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main WhatsApp Chat Showcase Container */}
        <div className="max-w-2xl mx-auto bg-[#0b141a] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* WhatsApp Header Bar */}
          <div className="bg-[#1f2c34] px-4 py-3 border-b border-[#2a3942] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={activeChat.studentAvatar}
                  alt={activeChat.studentName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#1f2c34]" />
              </div>
              <div>
                <div className="font-bold text-sm text-slate-100 flex items-center gap-1.5">
                  <span>{activeChat.studentName}</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-normal">
                    {activeChat.universityShort}
                  </span>
                </div>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{activeChat.statusText}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <Phone className="w-4 h-4 text-slate-400" />
              <Video className="w-4 h-4 text-slate-400" />
              <MoreVertical className="w-4 h-4 text-slate-400" />
            </div>
          </div>

          {/* WhatsApp Conversation Body */}
          <div className="p-4 sm:p-6 space-y-3 bg-[#0b141a] min-h-[420px] flex flex-col justify-start relative">
            {/* Subtle WhatsApp style background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Date Center Badge */}
            <div className="flex justify-center my-2">
              <div className="bg-[#182229] border border-[#222e35] text-slate-400 text-[10px] font-medium px-3 py-1 rounded-lg uppercase tracking-wider shadow-sm">
                {activeChat.dateBadge}
              </div>
            </div>

            {/* Messages Flow */}
            {activeChat.messages.map((msg) => {
              const isStudent = msg.sender === 'student';

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col max-w-[90%] sm:max-w-[82%] relative z-10 ${
                    isStudent ? 'self-start items-start' : 'self-end items-end'
                  }`}
                >
                  <div
                    className={`rounded-2xl px-3.5 py-2.5 shadow-md relative group ${
                      isStudent
                        ? 'bg-[#202c33] text-slate-100 rounded-tl-sm border border-[#2a3942]'
                        : 'bg-[#005c4b] text-white rounded-tr-sm'
                    }`}
                  >
                    {/* Message Text */}
                    {msg.text && (
                      <p className="text-xs sm:text-[13px] leading-relaxed whitespace-pre-wrap">
                        {msg.text}
                      </p>
                    )}

                    {/* Time & Read Receipts */}
                    <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-slate-400 font-mono">
                      <span>{msg.time}</span>
                      {!isStudent && <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />}
                    </div>

                    {/* WhatsApp Reaction Badge */}
                    {msg.reaction && (
                      <div className="absolute -bottom-2.5 right-2 bg-[#1f2c34] border border-[#2a3942] rounded-full px-1.5 py-0.5 text-[10px] shadow">
                        {msg.reaction}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Score Evolution Card */}
          <div className="bg-[#111b21] p-4 border-t border-[#222e35] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="text-left">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">
                  Evolução do Aluno:
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-slate-400 line-through">Nota anterior: {activeChat.scoreEvolution.previous} pts</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {activeChat.scoreEvolution.achieved} pts
                  </span>
                  {activeChat.scoreEvolution.redacao && (
                    <span className="text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 font-bold">
                      Redação: {activeChat.scoreEvolution.redacao}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              {activeChat.approvalTag}
            </span>
          </div>

        </div>

        {/* CTA below proof */}
        <div className="text-center mt-10">
          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg transition-all cursor-pointer active:scale-95"
          >
            <span>QUERO MINHA VAGA NA FACULDADE (A PARTIR DE R$ 14,99)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
