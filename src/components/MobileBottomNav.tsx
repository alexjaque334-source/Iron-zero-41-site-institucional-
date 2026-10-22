import React from "react";
import { GYM_DATA, buildWhatsAppLink } from "../data/gymData";
import { WhatsAppIcon } from "./Icons";
import { MapPin, Sparkles } from "lucide-react";

interface MobileBottomNavProps {
  onSelectTab: (tab: "planos" | "wellhub" | "local" | "estrutura") => void;
  activeTab: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onSelectTab, activeTab }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0b0c10]/95 backdrop-blur-lg border-t border-white/10 px-3 py-2.5 shadow-[0_-10px_25px_rgba(0,0,0,0.8)]">
      <div className="max-w-md mx-auto flex items-center justify-between gap-2">
        {/* Quick Tab Switchers */}
        <button
          onClick={() => onSelectTab("planos")}
          className={`flex-1 py-2 px-1 rounded-xl text-center flex flex-col items-center justify-center gap-1 transition-all ${
            activeTab === "planos"
              ? "bg-[#c8ff00]/15 text-[#c8ff00] border border-[#c8ff00]/30 font-bold"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-[10px]">Planos</span>
        </button>

        <button
          onClick={() => onSelectTab("wellhub")}
          className={`flex-1 py-2 px-1 rounded-xl text-center flex flex-col items-center justify-center gap-1 transition-all ${
            activeTab === "wellhub"
              ? "bg-[#c8ff00]/15 text-[#c8ff00] border border-[#c8ff00]/30 font-bold"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <span className="text-[11px] font-black leading-none">WH/TP</span>
          <span className="text-[10px]">Convênios</span>
        </button>

        <a
          href={GYM_DATA.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-1 rounded-xl text-slate-400 hover:text-white text-center flex flex-col items-center justify-center gap-1"
        >
          <MapPin className="w-4 h-4 text-slate-300" />
          <span className="text-[10px]">Rotas</span>
        </a>

        {/* WhatsApp Dominant Call */}
        <a
          href={buildWhatsAppLink(
            "Olá! Conheci a Ironzero41 pelo site e gostaria de saber mais informações sobre os planos."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.8] py-2.5 px-3 rounded-xl bg-[#c8ff00] active:scale-95 text-black font-black text-xs flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(200,255,0,0.4)]"
        >
          <WhatsAppIcon className="w-4 h-4 fill-black flex-shrink-0" />
          <span className="tracking-tight uppercase">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
