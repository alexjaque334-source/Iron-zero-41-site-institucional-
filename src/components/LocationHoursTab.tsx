import React from "react";
import { GYM_DATA, getGymOpenStatus } from "../data/gymData";
import { MapPin, Clock, Navigation, ExternalLink, CheckCircle2 } from "lucide-react";

export const LocationHoursTab: React.FC = () => {
  const status = getGymOpenStatus();

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Address & Navigation column */}
      <div className="md:col-span-7 flex flex-col justify-between gap-4 p-5 rounded-2xl bg-[#12141a] border border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#c8ff00] uppercase tracking-wider mb-2">
            <MapPin className="w-4 h-4" />
            <span>Fácil Acesso em Curitiba</span>
          </div>

          <h3 className="text-xl font-black text-white">
            {GYM_DATA.address.street}
          </h3>
          <p className="text-sm font-medium text-slate-300 mt-1">
            {GYM_DATA.address.neighborhood} • {GYM_DATA.address.city} - {GYM_DATA.address.state}
          </p>
          <p className="text-xs text-slate-400 mt-0.5">
            CEP {GYM_DATA.address.cep}
          </p>

          <div className="mt-3 p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-slate-300 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00]" />
            <span><strong>Referência:</strong> {GYM_DATA.address.reference}</span>
          </div>
        </div>

        {/* GPS Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={GYM_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[140px] px-4 py-2.5 rounded-xl bg-[#c8ff00] hover:bg-[#d8ff33] text-black font-extrabold text-xs tracking-wide flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(200,255,0,0.3)] transition-all"
          >
            <Navigation className="w-3.5 h-3.5 fill-black" />
            <span>Google Maps</span>
            <ExternalLink className="w-3 h-3 ml-auto opacity-70" />
          </a>

          <a
            href={GYM_DATA.wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[140px] px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 transition-all"
          >
            <Navigation className="w-3.5 h-3.5 text-[#c8ff00]" />
            <span>Abrir no Waze</span>
          </a>
        </div>
      </div>

      {/* Opening Hours & Real Facade Column */}
      <div className="md:col-span-5 flex flex-col justify-between gap-3 p-5 rounded-2xl bg-[#12141a] border border-white/10">
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
              <Clock className="w-4 h-4 text-[#c8ff00]" />
              <span>Horários de Treino</span>
            </div>
            {/* Status indicator */}
            <span
              className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                status.isOpen
                  ? "bg-[#c8ff00]/15 text-[#c8ff00] border border-[#c8ff00]/30"
                  : "bg-amber-400/15 text-amber-300 border border-amber-400/30"
              }`}
            >
              {status.isOpen ? "Aberto Agora" : "Fechado"}
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between py-1.5 border-b border-white/5">
              <span className="text-slate-400 font-medium">Segunda a Sexta</span>
              <span className="font-bold text-white">{GYM_DATA.hours.weekdays}</span>
            </div>
            <div className="flex items-center justify-between py-1.5 border-b border-white/5">
              <span className="text-slate-400 font-medium">Sábados</span>
              <span className="font-bold text-white">{GYM_DATA.hours.saturday}</span>
            </div>
            <div className="flex items-center justify-between py-1.5 text-slate-500">
              <span className="font-medium">Domingos & Feriados</span>
              <span className="font-semibold">{GYM_DATA.hours.sunday}</span>
            </div>
          </div>
        </div>

        {/* Mini Facade Photo Preview for Easy Identification */}
        <div className="relative rounded-xl overflow-hidden h-24 border border-white/10 group mt-1">
          <img
            src="/fachada.jpg"
            alt="Fachada da Ironzero41 em Curitiba"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-2.5">
            <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3 text-[#c8ff00]" />
              Fachada com Letreiro Oficial
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
