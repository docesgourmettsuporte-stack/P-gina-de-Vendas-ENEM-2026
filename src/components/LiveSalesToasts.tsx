import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { LIVE_SALES_NOTIFICATIONS } from '../data/landingData';

export const LiveSalesToasts: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setCurrentIdx(0);
    }, 5000);

    const interval = setInterval(() => {
      setCurrentIdx((prev) => {
        if (prev === null) return 0;
        const next = (prev + 1) % LIVE_SALES_NOTIFICATIONS.length;
        return next;
      });
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (currentIdx === null) return null;

  const currentNotification = LIVE_SALES_NOTIFICATIONS[currentIdx];

  return (
    <aside aria-label="Notificações de compras recentes" className="fixed bottom-14 left-4 z-30 max-w-xs transition-all duration-300 pointer-events-none">
      <div className="bg-slate-900/90 border border-slate-800 text-white p-2.5 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-4 h-4" />
        </div>
        <div className="text-[11px] leading-tight">
          <div className="font-semibold text-slate-200">
            {currentNotification.name} <span className="text-slate-400 font-normal">({currentNotification.city})</span>
          </div>
          <div className="text-[10px] text-emerald-400 font-medium">
            Desbloqueou o Guia de Emergência
          </div>
        </div>
      </div>
    </aside>
  );
};
