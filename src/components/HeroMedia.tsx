import React, { useState, useRef, useEffect } from "react";
import { GYM_DATA, buildWhatsAppLink } from "../data/gymData";
import { WhatsAppIcon } from "./Icons";
import { Sparkles, CheckCircle2, Play, Pause } from "lucide-react";

interface HeroMediaProps {
  onOpenPlans: () => void;
}

export const HeroMedia: React.FC<HeroMediaProps> = ({ onOpenPlans }) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85; // slightly slower for premium cinematic feel
    }
  }, [videoLoaded]);

  const toggleMediaMode = () => {
    setIsPlayingVideo((prev) => !prev);
  };

  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0e1015] flex flex-col justify-end min-h-[460px] sm:min-h-[520px] lg:h-full transition-all group">
      {/* Background Media Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Still Frame HD with Ken Burns Zoom Effect as fallback/base */}
        <img
          src="/hero_bg.jpg"
          alt="Estrutura e iluminação hexagonal IRONZERO41"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isPlayingVideo && videoLoaded ? "opacity-0" : "opacity-100 animate-ken-burns"
          }`}
          loading="eager"
        />

        {/* Short Loop Video Layer (Cinematic Smooth Loop, Muted) */}
        {isPlayingVideo && (
          <video
            ref={videoRef}
            src="/hero_loop.mp4"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* Dark Cinematic Vignette & Gradients for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c10]/80 via-transparent to-[#0b0c10]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#c8ff00]/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Top Media Controller Button */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={toggleMediaMode}
          title={isPlayingVideo ? "Pausar vídeo / Ver foto estática" : "Reproduzir vídeo cinematográfico"}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/15 text-slate-300 text-xs font-medium transition-all"
        >
          {isPlayingVideo ? (
            <>
              <Pause className="w-3.5 h-3.5 text-[#c8ff00]" />
              <span className="text-[11px] font-semibold">Vídeo Ativo</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-[#c8ff00]" />
              <span className="text-[11px] font-semibold">Foto HD</span>
            </>
          )}
        </button>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 p-5 sm:p-8 lg:p-10 flex flex-col gap-4 sm:gap-6">
        {/* Badge Slogan */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#c8ff00]/30 w-fit">
          <Sparkles className="w-3.5 h-3.5 text-[#c8ff00]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#c8ff00]">
            {GYM_DATA.subtagline}
          </span>
        </div>

        {/* Main Headline */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            NÃO É SÓ ACADEMIA. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#c8ff00] drop-shadow-[0_0_20px_rgba(200,255,0,0.2)]">
              É EXPERIÊNCIA.
            </span>
          </h1>
          <p className="mt-2.5 text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
            Musculação de ponta, maquinário biomecânico de precisão, teto em iluminação hexagonal e acompanhamento dedicado no Campo de Santana.
          </p>
        </div>

        {/* Core Pillars / Bullet tags */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-1">
          <div className="flex items-center gap-1.5 text-xs text-slate-200 bg-white/[0.05] border border-white/10 px-2.5 py-1.5 rounded-lg">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#c8ff00] flex-shrink-0" />
            <span className="truncate">Maquinário Novo</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-200 bg-white/[0.05] border border-white/10 px-2.5 py-1.5 rounded-lg">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#c8ff00] flex-shrink-0" />
            <span className="truncate">Bioimpedância</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-200 bg-white/[0.05] border border-white/10 px-2.5 py-1.5 rounded-lg col-span-2 sm:col-span-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#c8ff00] flex-shrink-0" />
            <span className="truncate">Wellhub & TotalPass</span>
          </div>
        </div>

        {/* Conversion Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          {/* Main WhatsApp CTA */}
          <a
            href={buildWhatsAppLink(
              "Olá! Conheci vocês pelo site da IRONZERO41 e gostaria de saber mais informações sobre os planos."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-5 py-3.5 rounded-xl bg-[#c8ff00] hover:bg-[#d8ff33] text-black font-black text-sm tracking-wide text-center flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(200,255,0,0.4)] hover:shadow-[0_0_30px_rgba(200,255,0,0.65)] hover:-translate-y-0.5 transition-all group"
          >
            <WhatsAppIcon className="w-5 h-5 fill-black group-hover:scale-110 transition-transform" />
            <span>FALAR NO WHATSAPP</span>
          </a>

          {/* Secondary Plan CTA */}
          <button
            onClick={onOpenPlans}
            className="px-5 py-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white font-bold text-sm text-center flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Ver Planos & Valores</span>
          </button>
        </div>
      </div>
    </div>
  );
};
