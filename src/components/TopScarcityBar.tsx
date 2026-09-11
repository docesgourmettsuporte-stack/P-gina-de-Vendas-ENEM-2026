import React, { useState, useEffect } from 'react';
import { Clock, ShieldCheck } from 'lucide-react';

interface TopScarcityBarProps {
  spotsRemaining?: number;
}

export const TopScarcityBar: React.FC<TopScarcityBarProps> = ({ spotsRemaining = 12 }) => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 50 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <aside aria-label="Aviso de oferta especial" className="bg-[#040810] text-slate-300 py-2 px-4 border-b border-amber-500/20 text-xs sticky top-0 z-40 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 font-medium">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-amber-400 font-bold tracking-wide uppercase text-[11px]">
            Condição Especial de Emergência
          </span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:inline text-slate-300 text-[11px]">
            Acesso vitalício ao Método 80/20 por apenas <strong className="text-amber-300">R$ 27,90</strong>
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono text-[11px]">
          <div className="flex items-center gap-1.5 text-slate-300 bg-slate-900/80 px-2.5 py-0.5 rounded-md border border-slate-800">
            <Clock className="w-3 h-3 text-amber-400" />
            <span className="text-amber-300 font-bold">
              {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
          <span className="hidden md:inline text-slate-400 text-[11px]">
            Restam <strong className="text-white">{spotsRemaining} vagas</strong>
          </span>
        </div>
      </div>
    </aside>
  );
};
