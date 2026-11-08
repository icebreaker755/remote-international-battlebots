import React from 'react';
import { motion } from 'motion/react';

export const SlidePart3: React.FC = () => {
  return (
    <div className="relative w-[1366px] h-[768px] bg-[#161a1c] overflow-hidden select-none">
      {/* Decorative Bottom-Left Graphic (Flipped horizontally and rotated) */}
      <motion.img
        src="/assets/3a31ee94cb425d6f241f9f45d999bafe.png"
        alt=""
        draggable={false}
        className="absolute pointer-events-none select-none max-w-none"
        style={{
          top: '388.81px',
          left: '-240.04px',
          width: '633.68px',
          height: '480.80px',
        }}
        initial={{ opacity: 0, scale: 0.5, rotate: -40, scaleX: -1 }}
        animate={{ opacity: 1, scale: 1, rotate: 18.78, scaleX: -1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Flipper Robot Photo Right with entrance from right */}
      <motion.div
        className="absolute overflow-hidden shadow-2xl rounded-sm"
        style={{
          top: '98.80px',
          left: '571.38px',
          width: '717.82px',
          height: '457.89px',
        }}
        initial={{ opacity: 0, scale: 0.9, x: 45 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/assets/2fedca611993bf664f1f80a29236417c.jpg"
          alt="Flipper Battle-Bot Variant"
          draggable={false}
          className="w-full h-full object-cover select-none"
        />
      </motion.div>

      {/* Title Left */}
      <motion.div
        className="absolute uppercase"
        style={{
          top: '217.75px',
          left: '140.65px',
          width: '350.44px',
          height: '110.00px',
          fontFamily: "'ITC Benguiat Condensed', serif",
          fontWeight: 400,
          fontSize: '53.3333px',
          lineHeight: '0.9em',
          color: '#e6f0fa',
        }}
        initial={{ opacity: 0, x: -35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        Variant of Battle-Bots
      </motion.div>

      {/* Subtitle Left */}
      <motion.div
        className="absolute"
        style={{
          top: '354.01px',
          left: '76.80px',
          width: '450.91px',
          height: '59.98px',
          fontFamily: "'ITC Franklin Gothic LT', sans-serif",
          fontSize: '21.3335px',
          letterSpacing: '-0.02em',
          lineHeight: '1.4em',
          color: '#e6f0fa',
          fontWeight: 400,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.3, ease: 'easeOut' }}
      >
        A battle-bot that has the ability to Flip Other Bot!
      </motion.div>
    </div>
  );
};
