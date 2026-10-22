import React, { useState } from "react";
import { Header } from "./components/Header";
import { HeroMedia } from "./components/HeroMedia";
import { PlansTab } from "./components/PlansTab";
import { WellhubTab } from "./components/WellhubTab";
import { LocationHoursTab } from "./components/LocationHoursTab";
import { StructureGallery } from "./components/StructureGallery";
import { MobileBottomNav } from "./components/MobileBottomNav";
import { InstagramIcon } from "./components/Icons";
import { GYM_DATA } from "./data/gymData";
import {
  Sparkles,
  Zap,
  MapPin,
  Image as ImageIcon,
  CheckCircle2,
  Share2,
} from "lucide-react";

type ActiveTab = "planos" | "wellhub" | "local" | "estrutura";

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("planos");
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "IRONZERO41 Academia",
          text: "Conheça a IRONZERO41 Academia em Curitiba. Musculação de alta performance e estrutura premium!",
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-slate-100 flex flex-col justify-between selection:bg-[#c8ff00] selection:text-black">
      {/* Top Header */}
      <Header />

      {/* Main One-Screen / Low-Scroll Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-5 flex flex-col justify-center">
        {/* Master 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
          
          {/* Left Column: Visual Hero & Identity (Takes 5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <HeroMedia onOpenPlans={() => setActiveTab("planos")} />
          </div>

          {/* Right Column: Interactive Content Hub with Fast Tabs (Takes 7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col bg-[#0e1016]/90 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-md">
            
            {/* Top Interactive Tabs Navigator */}
            <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-black/60 border border-white/10 mb-4 sm:mb-5 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab("planos")}
                className={`flex-1 min-w-[90px] py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "planos"
                    ? "bg-[#c8ff00] text-black shadow-[0_0_15px_rgba(200,255,0,0.35)]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Planos</span>
              </button>

              <button
                onClick={() => setActiveTab("wellhub")}
                className={`flex-1 min-w-[130px] py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "wellhub"
                    ? "bg-[#c8ff00] text-black shadow-[0_0_15px_rgba(200,255,0,0.35)]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <Zap className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Wellhub & TotalPass</span>
              </button>

              <button
                onClick={() => setActiveTab("local")}
                className={`flex-1 min-w-[105px] py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "local"
                    ? "bg-[#c8ff00] text-black shadow-[0_0_15px_rgba(200,255,0,0.35)]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Localização</span>
              </button>

              <button
                onClick={() => setActiveTab("estrutura")}
                className={`flex-1 min-w-[100px] py-2 sm:py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === "estrutura"
                    ? "bg-[#c8ff00] text-black shadow-[0_0_15px_rgba(200,255,0,0.35)]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Estrutura</span>
              </button>
            </div>

            {/* Dynamic Tab Body Container */}
            <div className="flex-1 flex flex-col justify-center">
              {activeTab === "planos" && <PlansTab />}
              {activeTab === "wellhub" && <WellhubTab />}
              {activeTab === "local" && <LocationHoursTab />}
              {activeTab === "estrutura" && <StructureGallery />}
            </div>

            {/* Quick Micro Bar in Hub Footer */}
            <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c8ff00]" />
                  Matrículas Abertas
                </span>
                <span className="text-white/20">•</span>
                <a
                  href={GYM_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors flex items-center gap-1"
                >
                  <InstagramIcon className="w-3 h-3" />
                  <span>{GYM_DATA.instagramHandle}</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-[11px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                  title="Compartilhar site da IRONZERO41"
                >
                  <Share2 className="w-3 h-3 text-[#c8ff00]" />
                  <span>{copiedLink ? "Link Copiado!" : "Compartilhar"}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Compact Institutional Footer */}
      <footer className="w-full border-t border-white/5 bg-[#08090c] py-3 pb-20 md:pb-3 px-4 sm:px-6 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="text-white font-bold">IRONZERO41</span>
            <span>•</span>
            <span>Rua Marcos Bertoldi, 116 – Campo de Santana, Curitiba - PR</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Atendimento: {GYM_DATA.whatsappDisplay}</span>
            <span>•</span>
            <span className="text-slate-400">Qualidade de Agência Sênior</span>
          </div>
        </div>
      </footer>

      {/* Fixed Sticky Mobile Bottom Bar */}
      <MobileBottomNav onSelectTab={(tab) => setActiveTab(tab)} activeTab={activeTab} />
    </div>
  );
};

export default App;
