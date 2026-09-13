import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Star,
  Check,
  TrendingUp
} from 'lucide-react';
import bookMockupImg from '../assets/images/protocolo_livro_mockup_1788317468101.jpg';

interface HeroSectionProps {
  onOpenCheckout?: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToSection, onOpenCheckout }) => {

  return (
    <header className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Top Minimalist Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-3.5 py-1 rounded-full text-xs text-slate-300 shadow-sm">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-white">4.9/5</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">+14.800 estudantes aprovados</span>
          </div>
        </div>

        {/* Main Headline, 3D Background Image & Value Statement */}
        <div className="relative text-center max-w-3xl mx-auto mb-12">
          
          {/* Top Headline Layer */}
          <div className="relative z-20 pb-2">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.2] sm:leading-[1.15] mb-2 drop-shadow-md">
              <span className="block sm:inline">O Protocolo Prático para </span>
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent block sm:inline">
                Salvar Sua Nota no ENEM
              </span>{' '}
              <span className="block text-base sm:text-inherit font-extrabold text-slate-100 sm:text-white mt-1 sm:mt-0">
                Sem ter que Passar Noites em Claro Estudando Teorias Complexas
              </span>
            </h1>
          </div>

          {/* Full-width 3D Image Canvas with Top and Bottom Gradient Fades */}
          <div className="relative w-full -my-14 sm:-my-20 z-10 flex justify-center items-center pointer-events-none overflow-hidden rounded-3xl">
            {/* Top Seamless Gradient Fade to page background #030712 */}
            <div className="absolute top-0 inset-x-0 h-28 sm:h-40 bg-gradient-to-b from-[#030712] via-[#030712]/80 to-transparent z-20 pointer-events-none" />

            {/* Left & Right subtle edge softens */}
            <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#030712] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#030712] to-transparent z-20 pointer-events-none" />

            {/* Ambient gold glow */}
            <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full transform scale-75 -z-10" />

            {/* Full-width Book Mockup Image */}
            <img
              src={bookMockupImg}
              alt="Livro Protocolo Reta Final ENEM"
              referrerPolicy="no-referrer"
              className="w-full max-w-2xl h-auto object-contain max-h-[460px] sm:max-h-[580px] filter contrast-105 brightness-100 transform scale-100 transition-transform duration-500"
            />

            {/* Bottom Seamless Gradient Fade to page background #030712 */}
            <div className="absolute bottom-0 inset-x-0 h-28 sm:h-40 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent z-20 pointer-events-none" />
          </div>

          {/* Bottom Description Text Layer */}
          <div className="relative z-20 pt-2">
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow">
              Não tente memorizar 3 anos de conteúdo em poucos dias, perdendo horas pulando entre vídeos, PDFs soltos e apostilas infinitas. Conheça o <strong className="text-amber-300">Protocolo Reta Final do ENEM</strong>: a estratégia prática que combina <strong className="text-white">Engenharia do TRI</strong>, <strong className="text-white">Priorização 80/20</strong> e o <strong className="text-white">Esqueleto Coringa Redação 900+</strong> para você saber exatamente o que revisar e ter a confiança de buscar atingir sua nota máxima sem desespero.
            </p>
          </div>
        </div>

        {/* 4 Core Value Cards matching real deliverables */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 max-w-5xl mx-auto mb-10">
          {/* Card 1: Técnica 80/20 */}
          <div className="flex items-center gap-3.5 bg-slate-900/80 hover:bg-slate-900 border border-slate-800/90 hover:border-amber-500/40 p-4 rounded-2xl transition-all shadow-lg backdrop-blur-sm group">
            <div className="w-11 h-11 rounded-xl bg-[#332213] border border-[#78461b] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Check className="w-5 h-5 text-amber-400 stroke-[2.5]" />
            </div>
            <div className="text-left">
              <h4 className="text-white font-bold text-sm leading-tight">
                Técnica 80/20
              </h4>
              <p className="text-slate-400 text-xs mt-0.5">
                18 temas que são 73% da prova.
              </p>
            </div>
          </div>

          {/* Card 2: Redação 900+ */}
          <div className="flex items-center gap-3.5 bg-slate-900/80 hover:bg-slate-900 border border-slate-800/90 hover:border-indigo-500/40 p-4 rounded-2xl transition-all shadow-lg backdrop-blur-sm group">
            <div className="w-11 h-11 rounded-xl bg-[#1c1d3b] border border-[#3e428c] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Star className="w-5 h-5 text-indigo-400 fill-indigo-400" />
            </div>
            <div className="text-left">
              <h4 className="text-white font-bold text-sm leading-tight">
                Redação 900+
              </h4>
              <p className="text-slate-400 text-xs mt-0.5">
                Esqueletos coringas pré-prontos.
              </p>
            </div>
          </div>

          {/* Card 3: Alavancagem TRI */}
          <div className="flex items-center gap-3.5 bg-slate-900/80 hover:bg-slate-900 border border-slate-800/90 hover:border-emerald-500/40 p-4 rounded-2xl transition-all shadow-lg backdrop-blur-sm group">
            <div className="w-11 h-11 rounded-xl bg-[#112d2b] border border-[#1b6b5c] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <TrendingUp className="w-5 h-5 text-emerald-400 stroke-[2.2]" />
            </div>
            <div className="text-left">
              <h4 className="text-white font-bold text-sm leading-tight">
                Alavancagem TRI
              </h4>
              <p className="text-slate-400 text-xs mt-0.5">
                Ganhe até +170 pts nas fáceis.
              </p>
            </div>
          </div>

          {/* Card 4: 5 Bônus Inclusos */}
          <div className="flex items-center gap-3.5 bg-slate-900/80 hover:bg-slate-900 border border-slate-800/90 hover:border-amber-500/40 p-4 rounded-2xl transition-all shadow-lg backdrop-blur-sm group">
            <div className="w-11 h-11 rounded-xl bg-[#2a1738] border border-[#6b2c8a] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 text-fuchsia-400 fill-fuchsia-400" />
            </div>
            <div className="text-left">
              <h4 className="text-white font-bold text-sm leading-tight">
                5 Bônus Oficiais
              </h4>
              <p className="text-slate-400 text-xs mt-0.5">
                Cronograma, Fórmulas e Medicina.
              </p>
            </div>
          </div>
        </div>

        {/* Direct High-Converting CTA Box */}
        <div className="flex flex-col items-center justify-center gap-3 text-center max-w-lg mx-auto">
          <button
            id="hero-primary-cta"
            onClick={() => onScrollToSection('oferta')}
            className="w-full py-4 sm:py-4.5 px-6 sm:px-8 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-base sm:text-lg rounded-2xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98] group"
          >
            <span>QUERO SALVAR MINHA NOTA NO ENEM</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Value Micro-Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 mt-1">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              Garantia Blindada de 30 Dias
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
              <Zap className="w-4 h-4 text-amber-400" />
              Acesso Imediato no E-mail e WhatsApp
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-300 hidden sm:inline font-mono">
              Planos a partir de <strong>R$ 14,99</strong>
            </span>
          </div>
        </div>

      </div>
    </header>
  );
};
