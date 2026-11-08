import React from 'react';
import { motion } from 'motion/react';

export const SlidePart1: React.FC = () => {
  return (
    <div className="relative w-[1366px] h-[768px] bg-[#161a1c] overflow-hidden select-none">
      {/* Decorative Top-Right Graphic */}
      <motion.img
        src="/assets/3a31ee94cb425d6f241f9f45d999bafe.png"
        alt=""
        draggable={false}
        className="absolute pointer-events-none select-none max-w-none"
        style={{
          top: '-297.25px',
          left: '974.21px',
          width: '633.68px',
          height: '480.80px',
        }}
        initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
        animate={{ opacity: 1, scale: 1, rotate: 105.1 }}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Decorative Bottom-Left Graphic */}
      <motion.img
        src="/assets/14d3472b1cc41eccd6c8367a4273684b.png"
        alt=""
        draggable={false}
        className="absolute pointer-events-none select-none max-w-none"
        style={{
          top: '132.06px',
          left: '-294.02px',
          width: '450.51px',
          height: '390.25px',
        }}
        initial={{ opacity: 0, scale: 0.5, rotate: -200 }}
        animate={{ opacity: 1, scale: 1, rotate: -142.74 }}
        transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Mascot / Robot Illustration Right with bouncy spring entrance */}
      <motion.img
        src="/assets/0d573f66b83d0f2a4b6342962c3b078b.png"
        alt="Robot Mascot"
        draggable={false}
        className="absolute pointer-events-none select-none max-w-none"
        style={{
          top: '311.66px',
          left: '976.43px',
          width: '522.24px',
          height: '614.40px',
        }}
        initial={{ opacity: 0, y: 70, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, type: 'spring', stiffness: 180, damping: 18 }}
      />

      {/* Welcome! & Introduction Container */}
      <div
        className="absolute flex flex-col justify-start"
        style={{
          top: '105.56px',
          left: '89.15px',
          width: '530.61px',
          height: '96.53px',
        }}
      >
        <motion.div
          className="uppercase"
          style={{
            fontFamily: "'ITC Benguiat Condensed', serif",
            fontWeight: 700,
            fontSize: '53.3333px',
            lineHeight: '0.79em',
            color: '#e6f0fa',
          }}
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Welcome!
        </motion.div>
        <motion.div
          style={{
            fontFamily: "'Beth Ellen', cursive",
            fontSize: '26.6665px',
            lineHeight: '1.4em',
            color: '#e6f0fa',
            marginTop: '8px',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
        >
          Introduction
        </motion.div>
      </div>

      {/* Description Paragraph */}
      <motion.div
        className="absolute"
        style={{
          top: '590.91px',
          left: '89.15px',
          width: '547.53px',
          height: '100.29px',
          fontFamily: "'ITC Franklin Gothic LT', sans-serif",
          fontSize: '21.3333px',
          lineHeight: '1.4em',
          color: '#e6f0fa',
          fontWeight: 400,
        }}
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.45, ease: 'easeOut' }}
      >
        Hello! We are a student who’s dedicated to make innovation and advancing technologies espcially in robot-based.
      </motion.div>
    </div>
  );
};
