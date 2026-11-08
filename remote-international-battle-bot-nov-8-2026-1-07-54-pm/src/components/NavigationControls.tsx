import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationControlsProps {
  currentPart: number;
  totalParts: number;
  onNext: () => void;
  onPrev: () => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentPart,
  totalParts,
  onNext,
  onPrev,
}) => {
  const canGoPrev = currentPart > 0;
  const canGoNext = currentPart < totalParts - 1;

  return (
    <>
      {/* Sleek Floating Left Arrow Button */}
      {canGoPrev && (
        <button
          onClick={onPrev}
          aria-label="Previous Part"
          title="Previous Part"
          className="fixed left-6 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full transition-all duration-300 flex items-center justify-center bg-black/60 hover:bg-white/20 active:scale-90 text-white/90 hover:text-white border border-white/20 hover:border-cyan-400/50 shadow-2xl hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] backdrop-blur-md cursor-pointer group"
        >
          <ChevronLeft className="w-9 h-9 transition-transform duration-200 group-hover:-translate-x-1" strokeWidth={2.5} />
        </button>
      )}

      {/* Sleek Floating Right Arrow Button */}
      {canGoNext && (
        <button
          onClick={onNext}
          aria-label="Next Part"
          title="Next Part"
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full transition-all duration-300 flex items-center justify-center bg-black/60 hover:bg-white/20 active:scale-90 text-white/90 hover:text-white border border-white/20 hover:border-cyan-400/50 shadow-2xl hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] backdrop-blur-md cursor-pointer group"
        >
          <ChevronRight className="w-9 h-9 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
        </button>
      )}
    </>
  );
};
