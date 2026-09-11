import React from 'react';
import { ShieldCheck, Lock, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#03070e] text-slate-400 text-xs border-t border-slate-800/80 pt-12 pb-24 md:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-center md:text-left">
          
          {/* Col 1 */}
          <div>
            <div className="text-white font-black text-sm tracking-wider uppercase mb-2">
              ENEM: NÃO ESTUDEI. E AGORA?
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
              Método independente de aceleração de estudos, decodificação do TRI e estruturação de redação para estudantes do Exame Nacional do Ensino Médio.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 text-emerald-400 text-[11px] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Ambiente 100% Protegido</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="text-center">
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-2">
              GARANTIA E SEGURANÇA
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Pagamento processado com tecnologia SSL de 256 bits. Seus dados estão seguros e o acesso ao material é enviado imediatamente após a aprovação.
            </p>
            <div className="mt-2 text-amber-400 font-bold text-[11px]">
              Garantia de 30 Dias com Risco Zero
            </div>
          </div>

          {/* Col 3 */}
          <div className="text-center md:text-right">
            <div className="text-white font-bold text-xs uppercase tracking-wider mb-2">
              SUPORTE AO ALUNO
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed mb-2">
              Precisa de ajuda com seu acesso ou downloads?
            </p>
            <div className="text-slate-300 font-mono text-[11px]">
              suporte@enememergencia.com.br
            </div>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 border-t border-slate-900 text-center text-[10px] text-slate-400 space-y-2 max-w-3xl mx-auto">
          <p>
            Aviso Legal: Este site e seus produtos não possuem vínculo institucional direto com o INEP ou com o Ministério da Educação (MEC). &quot;ENEM&quot; é uma marca registrada de propriedade de seus respectivos detentores. Os resultados podem variar de pessoa para pessoa dependendo da dedicação e execução das estratégias.
          </p>
          <p>
            © {new Date().getFullYear()} ENEM: Não Estudei. E Agora? • Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
