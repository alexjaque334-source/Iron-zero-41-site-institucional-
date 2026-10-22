import React from "react";
import { X } from "lucide-react";

interface ModalPhotoProps {
  photo: { src: string; title: string; subtitle: string } | null;
  onClose: () => void;
}

export const ModalPhoto: React.FC<ModalPhotoProps> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] bg-[#12141a] rounded-2xl border border-white/20 overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar foto ampliada"
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/70 hover:bg-black text-white hover:text-[#c8ff00] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative flex-1 min-h-[300px] max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={photo.src}
            alt={photo.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-4 bg-[#12141a] border-t border-white/10 flex items-center justify-between">
          <div>
            <h4 className="text-base font-black text-white">{photo.title}</h4>
            <p className="text-xs text-slate-400 mt-0.5">{photo.subtitle}</p>
          </div>
          <span className="text-[11px] font-bold text-[#c8ff00] px-2.5 py-1 rounded-md bg-[#c8ff00]/10 border border-[#c8ff00]/30">
            Foto Real IRONZERO41
          </span>
        </div>
      </div>
    </div>
  );
};
