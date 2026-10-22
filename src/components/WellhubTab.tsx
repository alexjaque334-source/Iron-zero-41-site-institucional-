import React, { useState } from "react";
import { buildWhatsAppLink } from "../data/gymData";
import { WhatsAppIcon } from "./Icons";
import { ArrowRight, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";

export const WellhubTab: React.FC = () => {
  const [activePartner, setActivePartner] = useState<"wellhub" | "totalpass">("wellhub");

  return (
    <div className="flex flex-col gap-4">
      {/* Top Banner Card */}
      <div className="relative rounded-2xl overflow-hidden p-5 sm:p-6 bg-gradient-to-br from-[#12141c] via-[#161922] to-[#0d0e14] border border-[#c8ff00]/30 shadow-xl">
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8ff00]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8ff00]/15 border border-[#c8ff00]/30 text-[#c8ff00] text-xs font-black tracking-wider uppercase">
              <Zap className="w-3.5 h-3.5 fill-[#c8ff00]" />
              <span>Benefícios Corporativos Oficiais</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Aceitamos <span className="text-[#c8ff00]">Wellhub</span> & <span className="text-[#c8ff00]">TotalPass</span>
            </h2>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              Treine na IRONZERO41 através do benefício corporativo da sua empresa. Acesso completo à musculação, pesos livres e estrutura moderna com check-in ágil.
            </p>
          </div>

          {/* Quick CTA */}
          <div className="flex-shrink-0">
            <a
              href={buildWhatsAppLink(
                activePartner === "wellhub"
                  ? "Olá! Gostaria de saber como treinar na Ironzero41 utilizando o benefício Wellhub (Gympass)."
                  : "Olá! Gostaria de saber como treinar na Ironzero41 utilizando o benefício TotalPass."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#c8ff00] hover:bg-[#d8ff33] text-black font-extrabold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(200,255,0,0.35)] transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-black" />
              <span>Consultar no WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Partner Switcher Pills */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2">
          <button
            onClick={() => setActivePartner("wellhub")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activePartner === "wellhub"
                ? "bg-[#c8ff00] text-black shadow-md font-black"
                : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
            }`}
          >
            <span>Wellhub (antigo Gympass)</span>
            {activePartner === "wellhub" && <CheckCircle2 className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => setActivePartner("totalpass")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activePartner === "totalpass"
                ? "bg-[#c8ff00] text-black shadow-md font-black"
                : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
            }`}
          >
            <span>TotalPass</span>
            {activePartner === "totalpass" && <CheckCircle2 className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Steps Grid based on partner */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#c8ff00]/10 text-[#c8ff00] font-black text-xs">
              01
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">
                {activePartner === "wellhub" ? "Busque no Wellhub" : "Busque no TotalPass"}
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                Abra seu app e procure por <strong>IRONZERO41 Academia</strong> em Curitiba (Rua Marcos Bertoldi, 116).
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#c8ff00]/10 text-[#c8ff00] font-black text-xs">
              02
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Check-in na Recepção</h4>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                Ao chegar, realize seu check-in diário no app e apresente na catraca para liberação imediata.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#c8ff00]/10 text-[#c8ff00] font-black text-xs">
              03
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Treino de Alta Performance</h4>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                Aproveite o maquinário novo, pesos livres, ambiente climatizado e suporte dos instrutores.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate support note */}
      <div className="rounded-xl p-3.5 bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#c8ff00] flex-shrink-0" />
          <span>
            Dúvidas sobre o plano elegível no seu aplicativo (Wellhub ou TotalPass)? Nossa recepção te orienta na hora.
          </span>
        </div>
        <a
          href={buildWhatsAppLink(
            `Olá! Quero saber qual o plano mínimo do ${
              activePartner === "wellhub" ? "Wellhub" : "TotalPass"
            } para treinar na Ironzero41.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c8ff00] hover:underline font-bold text-[11px] flex items-center gap-1 whitespace-nowrap"
        >
          <span>Tirar dúvidas de acesso</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
