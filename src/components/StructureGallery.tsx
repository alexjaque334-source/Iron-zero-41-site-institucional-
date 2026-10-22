import React, { useState } from "react";
import { ModalPhoto } from "./ModalPhoto";
import { ZoomIn } from "lucide-react";

interface StructureItem {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  tag: string;
}

const ITEMS: StructureItem[] = [
  {
    id: "luzes",
    src: "/hero_bg.jpg",
    title: "Teto Hexagonal LED & Piso de Alta Carga",
    subtitle: "Iluminação exclusiva e design futurista para máxima energia no treino.",
    tag: "Design Exclusivo",
  },
  {
    id: "halteres",
    src: "/halteres.jpg",
    title: "Área de Pesos Livres & Dumbbells de Precisão",
    subtitle: "Racks organizados com ampla graduação de carga para hipertrofia.",
    tag: "Pesos Livres",
  },
  {
    id: "maquinas",
    src: "/maquinas.jpg",
    title: "Maquinário Biomecânico de Alta Performance",
    subtitle: "Biomecânica ajustada para segurança articular e isolamento muscular.",
    tag: "Musculação",
  },
  {
    id: "mezanino",
    src: "/mezanino.jpg",
    title: "Estrutura Ampla em 2 Níveis & Mezanino",
    subtitle: "Ambiente arejado, climatizado e planejado para fluidez sem filas.",
    tag: "Dois Níveis",
  },
];

export const StructureGallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<StructureItem | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-black text-white flex items-center gap-2">
            Estrutura Real da Academia
            <span className="text-xs px-2 py-0.5 rounded-md bg-[#c8ff00]/15 text-[#c8ff00] font-bold border border-[#c8ff00]/30">
              Ambiente Oficial
            </span>
          </h3>
          <p className="text-xs text-slate-400">
            Imagens reais gravadas no espaço da IRONZERO41 no Campo de Santana.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => setActivePhoto(item)}
            className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-[#c8ff00]/50 aspect-[4/3] sm:aspect-square bg-[#101218] cursor-pointer transition-all shadow-md"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-between p-3 opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="self-start text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-black/70 border border-white/20 text-[#c8ff00]">
                {item.tag}
              </span>
              <div className="flex items-end justify-between gap-1">
                <span className="text-xs font-bold text-white line-clamp-1 group-hover:text-[#c8ff00] transition-colors">
                  {item.title}
                </span>
                <ZoomIn className="w-4 h-4 text-white/70 group-hover:text-[#c8ff00] flex-shrink-0" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <ModalPhoto
        photo={activePhoto}
        onClose={() => setActivePhoto(null)}
      />
    </div>
  );
};
