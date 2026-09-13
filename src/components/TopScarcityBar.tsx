import React, { useState, useEffect } from 'react';
import { Clock, Zap, ShieldCheck } from 'lucide-react';

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
    <aside aria-label="Aviso de oferta especial" className="bg-[#040810]/95 text-slate-300 py-2 px-4 border-b border-amber-500/30 text-xs sticky top-0 z-40 backdrop-blur-md shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 font-medium">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-amber-400 font-extrabold tracking-wide uppercase text-[11px] flex items-center gap-1">
            <Zap className="w-3 h-3 text-amber-400 fill-amber-400 inline" />
            CONDIÇÃO ESPECIAL DE RETA FINAL
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-300 text-[11px]">
            Pacotes ENEM com até <strong className="text-emerald-400">82% OFF</strong> a partir de <strong className="text-amber-300 font-mono font-bold">R$ 14,99</strong>
          </span>
        </div>

        <div className="flex items-center gap-2.5 font-mono text-[11px]">
          <div className="flex items-center gap-1.5 text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
            <Clock className="w-3 h-3 text-amber-400" />
            <span className="font-bold">
              Expira em {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
          <span className="hidden md:inline text-slate-400 text-[11px]">
            Restam apenas <strong className="text-white bg-slate-800 px-1.5 py-0.5 rounded font-bold">{spotsRemaining} vagas</strong>
          </span>
        </div>
      </div>
    </aside>
  );
};
