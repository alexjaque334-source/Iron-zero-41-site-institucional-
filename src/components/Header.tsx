import React from "react";
import { GYM_DATA, getGymOpenStatus, buildWhatsAppLink } from "../data/gymData";
import { InstagramIcon, WhatsAppIcon } from "./Icons";
import { MapPin } from "lucide-react";

export const Header: React.FC = () => {
  const status = getGymOpenStatus();

  return (
    <header className="w-full border-b border-white/5 bg-[#0b0c10]/95 backdrop-blur-md sticky top-0 z-40 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8ff00] rounded-lg p-1">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
            <img
              src="/favicon.svg"
              alt="Logo IRONZERO41"
              className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(200,255,0,0.4)] group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-black text-lg sm:text-xl tracking-tight leading-none">
              <span className="text-white">IRON</span>
              <span className="text-[#c8ff00] drop-shadow-[0_0_10px_rgba(200,255,0,0.5)]">ZERO41</span>
            </div>
            <span className="text-[10px] sm:text-xs text-slate-400 font-semibold tracking-wider uppercase mt-1">
              Curitiba • Campo de Santana
            </span>
          </div>
        </a>

        {/* Real-time Status & Quick Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Status Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-slate-300">
            <span
              className={`w-2 h-2 rounded-full ${
                status.isOpen
                  ? "bg-[#c8ff00] shadow-[0_0_8px_#c8ff00] animate-pulse"
                  : "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]"
              }`}
            />
            <span className="font-medium text-slate-200">{status.message}</span>
          </div>

          {/* Social Links */}
          <a
            href={GYM_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Oficial @ironzero41academia_"
            className="p-2 sm:px-3 sm:py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-pink-500/40 text-slate-300 hover:text-pink-400 transition-all flex items-center gap-2 text-xs font-semibold"
          >
            <InstagramIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Instagram</span>
          </a>

          <a
            href={GYM_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Como Chegar - Google Maps"
            className="p-2 sm:px-3 sm:py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#c8ff00]/40 text-slate-300 hover:text-[#c8ff00] transition-all flex items-center gap-2 text-xs font-semibold"
          >
            <MapPin className="w-4 h-4 text-[#c8ff00]" />
            <span className="hidden sm:inline">Como Chegar</span>
          </a>

          {/* Direct WhatsApp Call */}
          <a
            href={buildWhatsAppLink(
              "Olá! Conheci vocês pelo site e gostaria de saber mais informações sobre os planos."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-3 sm:px-4 py-2 rounded-lg bg-[#c8ff00] hover:bg-[#d8ff33] text-black font-extrabold text-xs sm:text-sm tracking-wide shadow-[0_0_15px_rgba(200,255,0,0.35)] hover:shadow-[0_0_20px_rgba(200,255,0,0.6)] transition-all flex items-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4 fill-black" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
