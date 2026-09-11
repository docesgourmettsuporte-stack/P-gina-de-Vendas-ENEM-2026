import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  GraduationCap, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Award,
  Clock,
  BookOpen
} from 'lucide-react';
import { TestimonialItem } from '../types';

interface VideoTestimonialModalProps {
  testimonial: TestimonialItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const VideoTestimonialModal: React.FC<VideoTestimonialModalProps> = ({
  testimonial,
  isOpen,
  onClose,
  onOpenCheckout,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    if (!isOpen) {
      setProgress(15);
      setIsPlaying(true);
      return;
    }

    const interval = setInterval(() => {
      if (isPlaying) {
        setProgress((prev) => {
          if (prev >= 98) return 15;
          return prev + 1.2;
        });
      }
    }, 400);

    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen || !testimonial) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-slate-900 border border-slate-700 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col relative text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60 sticky top-0 z-20 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                <span>Depoimento em Vídeo: {testimonial.name}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-xs text-amber-400 font-semibold">
                {testimonial.targetCourse} • {testimonial.university} ({testimonial.universityShort})
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Grid */}
        <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: Video Player Area (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner group">
              <img
                src={testimonial.videoThumbnail}
                alt={testimonial.name}
                className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-105 filter brightness-95' : 'filter brightness-75'}`}
              />

              {/* Video Overlay Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40 flex flex-col justify-between p-4">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="bg-emerald-500/90 text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <ShieldCheck className="w-3 h-3" />
                    Depoimento e Aprovação Verificada
                  </span>
                  <span className="bg-slate-950/70 backdrop-blur-md text-slate-300 text-xs px-2 py-0.5 rounded-md font-mono border border-slate-800">
                    {testimonial.videoDuration || '02:10'}
                  </span>
                </div>

                {/* Center Play/Pause Trigger */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="self-center w-14 h-14 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center hover:scale-110 hover:bg-amber-400 transition-all shadow-2xl"
                >
                  {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
                </button>

                {/* Bottom Quote & Audio Wave */}
                <div>
                  <div className="bg-slate-900/85 backdrop-blur-md border border-slate-700/60 p-2.5 rounded-xl text-xs text-slate-200 mb-2 italic">
                    &quot;{testimonial.videoQuote}&quot;
                  </div>

                  {/* Player Controls Bar */}
                  <div className="flex items-center gap-3 text-xs text-slate-300">
                    <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-white">
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    
                    {/* Progress Bar */}
                    <div className="flex-1 bg-slate-800 h-1.5 rounded-full overflow-hidden cursor-pointer">
                      <div 
                        className="bg-amber-400 h-full rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>

                    <button onClick={() => setIsMuted(!isMuted)} className="hover:text-white">
                      {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Strategy Impact Pill */}
            <div className="mt-4 p-3 bg-slate-950/80 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                Tempo de estudo: <strong className="text-slate-200">{testimonial.timeSpent}</strong>
              </span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                {testimonial.approvalBadge}
              </span>
            </div>
          </div>

          {/* Right: Detailed Story & Decisive Strategies (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Score Evolution Card */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <div className="text-[11px] text-slate-400 uppercase font-black tracking-wider mb-2 flex items-center justify-between">
                <span>Evolução da Nota Geral</span>
                <span className="text-emerald-400 font-mono">+{testimonial.achievedScore - testimonial.previousScore} pts</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800/80">
                  <div className="text-[10px] text-rose-400 font-bold uppercase">Antes do Método</div>
                  <div className="text-xl font-mono font-black text-rose-400">{testimonial.previousScore} pts</div>
                  <div className="text-[9px] text-slate-500">Inseguro e atrasado</div>
                </div>
                <div className="bg-emerald-950/30 p-2.5 rounded-xl border border-emerald-500/40">
                  <div className="text-[10px] text-emerald-400 font-bold uppercase">Nota Aprovada</div>
                  <div className="text-xl font-mono font-black text-emerald-300">{testimonial.achievedScore} pts</div>
                  {testimonial.redacaoScore && (
                    <div className="text-[9px] text-amber-300 font-bold">Redação: {testimonial.redacaoScore} pts</div>
                  )}
                </div>
              </div>
            </div>

            {/* Decisive Strategy Factor */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2.5">
              <div>
                <div className="text-[11px] font-bold text-amber-400 uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Estratégia Decisiva para a Aprovação:
                </div>
                <p className="text-xs text-slate-200 font-medium mt-0.5">
                  {testimonial.decisiveStrategy}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <div className="text-[11px] font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Como Gerou Segurança na Prova:
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  {testimonial.securityImpact}
                </p>
              </div>
            </div>

            {/* Full Quote Excerpt */}
            <div className="text-xs text-slate-300 leading-relaxed italic bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              &quot;{testimonial.comment}&quot;
            </div>

            {/* Modal CTA */}
            <button
              onClick={() => {
                onClose();
                onOpenCheckout();
              }}
              className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Quero a Mesma Segurança e Minha Aprovação</span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};
