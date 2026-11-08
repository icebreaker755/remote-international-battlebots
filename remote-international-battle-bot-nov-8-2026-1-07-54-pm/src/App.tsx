import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SLIDES } from './types.ts';
import { SlidePart0 } from './components/SlidePart0.tsx';
import { SlidePart1 } from './components/SlidePart1.tsx';
import { SlidePart2 } from './components/SlidePart2.tsx';
import { SlidePart3 } from './components/SlidePart3.tsx';
import { SlidePart4 } from './components/SlidePart4.tsx';
import { NavigationControls } from './components/NavigationControls.tsx';
import { playNavClick } from './utils/sound.ts';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring' as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.3 },
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: 'spring' as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  }),
};

export default function App() {
  const [[currentPart, direction], setPage] = useState<[number, number]>([0, 0]);
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Touch swipe handling
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const totalParts = SLIDES.length;

  // Responsive dynamic scaling to keep 1366x768 canvas aspect-perfect
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // Fit 1366 x 768 perfectly inside the window
      const scaleW = w / 1366;
      const scaleH = h / 768;
      setScale(Math.min(scaleW, scaleH));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fullscreen state listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const goNext = useCallback(() => {
    if (currentPart < totalParts - 1) {
      if (soundEnabled) playNavClick('next');
      setPage(([prev]) => [prev + 1, 1]);
    }
  }, [currentPart, totalParts, soundEnabled]);

  const goPrev = useCallback(() => {
    if (currentPart > 0) {
      if (soundEnabled) playNavClick('prev');
      setPage(([prev]) => [prev - 1, -1]);
    }
  }, [currentPart, soundEnabled]);

  const goToPart = useCallback(
    (index: number) => {
      if (index === currentPart || index < 0 || index >= totalParts) return;
      const dir = index > currentPart ? 1 : -1;
      if (soundEnabled) playNavClick(dir > 0 ? 'next' : 'prev');
      setPage([index, dir]);
    },
    [currentPart, totalParts, soundEnabled]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input (none currently, but good practice)
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'Backspace') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToPart(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToPart(totalParts - 1);
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key >= '1' && e.key <= '5') {
        e.preventDefault();
        goToPart(parseInt(e.key, 10) - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, goToPart, totalParts]);

  // Touch swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Minimum swipe threshold 50px, horizontal dominant
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0) {
        goNext(); // Swipe left -> Next
      } else {
        goPrev(); // Swipe right -> Prev
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const renderCurrentSlide = () => {
    switch (currentPart) {
      case 0:
        return <SlidePart0 />;
      case 1:
        return <SlidePart1 />;
      case 2:
        return <SlidePart2 />;
      case 3:
        return <SlidePart3 />;
      case 4:
        return <SlidePart4 />;
      default:
        return <SlidePart0 />;
    }
  };

  return (
    <div
      className="relative w-screen h-screen bg-[#161a1c] overflow-hidden flex items-center justify-center select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Dynamic Scaled Canvas Stage (Fixed 1366x768 aspect ratio container) */}
      <div
        className="relative shadow-2xl overflow-hidden bg-[#161a1c]"
        style={{
          width: '1366px',
          height: '768px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
        }}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPart}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            {renderCurrentSlide()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrow Navigation Controls: Left and Right floating arrows */}
      <NavigationControls
        currentPart={currentPart}
        totalParts={totalParts}
        onNext={goNext}
        onPrev={goPrev}
      />
    </div>
  );
}
