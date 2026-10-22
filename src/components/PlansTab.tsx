import React, { useState } from "react";
import { GYM_DATA, buildWhatsAppLink } from "../data/gymData";
import { WhatsAppIcon } from "./Icons";
import { Check, Sparkles, ShieldCheck, HelpCircle } from "lucide-react";

export const PlansTab: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>("trimestral");

  return (
    <div className="flex flex-col gap-4">
      {/* Header of Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1 border-b border-white/5">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            Planos & Mensalidades
            <span className="text-xs px-2 py-0.5 rounded-md bg-[#c8ff00]/15 text-[#c8ff00] font-bold border border-[#c8ff00]/30">
              Oficial
            </span>
          </h2>
          <p className="text-xs text-slate-400">
            Escolha o formato ideal para sua rotina de treinos. Sem pegadinhas ou taxas ocultas.
          </p>
        </div>

        {/* Commercial notice badge */}
        <div className="text-[11px] text-slate-400 flex items-center gap-1.5 bg-white/[0.03] px-2.5 py-1 rounded-lg border border-white/5 w-fit">
          <ShieldCheck className="w-3.5 h-3.5 text-[#c8ff00]" />
          <span>Matrícula & Condições direto no balcão ou WhatsApp</span>
        </div>
      </div>

      {/* Grid of Compact Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        {GYM_DATA.plans.map((plan) => {
          const isSelected = selectedPlanId === plan.id;
          const isPopular = plan.popular;

          return (
            <div
              key={plan.id}
              onClick={() => setSelectedPlanId(plan.id)}
              className={`relative rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[#141720] border-[#c8ff00] shadow-[0_0_20px_rgba(200,255,0,0.18)] ring-1 ring-[#c8ff00]/50"
                  : isPopular
                  ? "bg-[#12141a] border-white/20 hover:border-white/30"
                  : "bg-[#101217] border-white/10 hover:border-white/20"
              }`}
            >
              {/* Badge top */}
              {plan.badge && (
                <div className="absolute -top-2.5 right-3">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#c8ff00] text-black shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-black" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-3">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {plan.period}
                  </span>
                  <h3 className="text-lg font-black text-white mt-0.5">{plan.name}</h3>
                  <div className="mt-2 py-1 px-2 rounded-md bg-white/[0.04] border border-white/5 inline-block">
                    <span className="text-xs font-semibold text-[#c8ff00]">
                      {plan.priceNote}
                    </span>
                  </div>
                </div>

                {/* Benefits List */}
                <ul className="space-y-2 my-4 text-xs text-slate-300 border-t border-white/5 pt-3">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="p-0.5 rounded-full bg-[#c8ff00]/20 text-[#c8ff00] mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug text-slate-200">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <a
                href={buildWhatsAppLink(plan.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`w-full mt-2 py-2.5 px-3 rounded-lg text-xs font-black tracking-wide text-center flex items-center justify-center gap-2 transition-all ${
                  isSelected
                    ? "bg-[#c8ff00] hover:bg-[#d8ff33] text-black shadow-[0_0_12px_rgba(200,255,0,0.3)]"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>{plan.ctaText}</span>
              </a>
            </div>
          );
        })}
      </div>

      {/* Transparent Information Box */}
      <div className="rounded-xl p-3 bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-[#c8ff00] flex-shrink-0" />
          <span>
            Valores sujeitos a campanhas sazonais e convênios corporativos. Atendimento ágil no WhatsApp oficial.
          </span>
        </div>
        <a
          href={buildWhatsAppLink("Olá! Gostaria de consultar a tabela de preços atualizada da Ironzero41.")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c8ff00] hover:underline font-bold whitespace-nowrap text-[11px]"
        >
          Consultar Tabela Completa →
        </a>
      </div>
    </div>
  );
};
