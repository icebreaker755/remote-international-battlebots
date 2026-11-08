import React from 'react';
import { motion } from 'motion/react';

export const SlidePart2: React.FC = () => {
  return (
    <div className="relative w-[1366px] h-[768px] bg-[#161a1c] overflow-hidden select-none">
      {/* Robot Photo Left with sleek scale and shadow entrance */}
      <motion.div
        className="absolute overflow-hidden shadow-2xl rounded-sm"
        style={{
          top: '131.64px',
          left: '51.86px',
          width: '667.37px',
          height: '425.72px',
        }}
        initial={{ opacity: 0, scale: 0.9, x: -40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/assets/75213bbc04f368127bbd2893d9715890.jpg"
          alt="Advance Robot Battle-Bot"
          draggable={false}
          className="w-full h-full object-cover select-none"
        />
      </motion.div>

      {/* Title Right: Creative technology / Advance. */}
      <motion.div
        className="absolute flex flex-col justify-start uppercase"
        style={{
          top: '101.35px',
          left: '803.81px',
          width: '536.10px',
          height: '110.00px',
        }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <span
          style={{
            fontFamily: "'ITC Benguiat Condensed', serif",
            fontWeight: 400,
            fontSize: '53.3333px',
            lineHeight: '0.9em',
            color: '#e6f0fa',
          }}
        >
          Creative technology
        </span>
        <span
          style={{
            fontFamily: "'ITC Benguiat Condensed', serif",
            fontWeight: 400,
            fontSize: '53.3333px',
            lineHeight: '0.9em',
            color: '#ffffff',
          }}
        >
          Advance.
        </span>
      </motion.div>

      {/* Subtitle Right */}
      <motion.div
        className="absolute"
        style={{
          top: '246.80px',
          left: '803.81px',
          width: '434.99px',
          height: '74.70px',
          fontFamily: "'ITC Franklin Gothic LT', sans-serif",
          fontSize: '21.3335px',
          letterSpacing: '-0.02em',
          lineHeight: '1.4em',
          color: '#e6f0fa',
          fontWeight: 400,
        }}
        initial={{ opacity: 0, x: 35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, delay: 0.35, ease: 'easeOut' }}
      >
        Jump into a fight with Our Battle bot.
      </motion.div>

      {/* Highlight Text Bottom */}
      <motion.div
        className="absolute"
        style={{
          top: '597.31px',
          left: '128.78px',
          width: '776.79px',
          height: '74.70px',
          fontFamily: "'ITC Franklin Gothic LT', sans-serif",
          fontSize: '21.3335px',
          letterSpacing: '-0.02em',
          lineHeight: '1.4em',
          color: '#e6f0fa',
          fontWeight: 400,
        }}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 220, damping: 20 }}
      >
        Advance Robot Battle-Bot thats Blade Can rotate Up to 10,000 RPM!
      </motion.div>
    </div>
  );
};
