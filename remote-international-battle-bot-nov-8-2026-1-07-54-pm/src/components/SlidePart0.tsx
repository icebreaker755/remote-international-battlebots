import React from 'react';
import { motion } from 'motion/react';

export const SlidePart0: React.FC = () => {
  return (
    <div className="relative w-[1366px] h-[768px] bg-[#161a1c] overflow-hidden select-none">
      {/* Decorative Top-Right Blade Graphic with dynamic rotation entrance */}
      <motion.img
        src="/assets/14d3472b1cc41eccd6c8367a4273684b.png"
        alt=""
        draggable={false}
        className="absolute pointer-events-none select-none max-w-none"
        style={{
          top: '-64.58px',
          left: '965.28px',
          width: '584.06px',
          height: '505.94px',
        }}
        initial={{ opacity: 0, scale: 0.5, rotate: -220 }}
        animate={{ opacity: 1, scale: 1, rotate: -142.74 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Decorative Bottom-Left Blade Graphic with dynamic entrance */}
      <motion.img
        src="/assets/3a31ee94cb425d6f241f9f45d999bafe.png"
        alt=""
        draggable={false}
        className="absolute pointer-events-none select-none max-w-none"
        style={{
          top: '326.13px',
          left: '-475.63px',
          width: '633.68px',
          height: '480.80px',
        }}
        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
        animate={{ opacity: 1, scale: 1, rotate: -26.22 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Main Title: +riBB+ */}
      <motion.div
        className="absolute flex items-center justify-center tracking-normal uppercase"
        style={{
          top: '188.39px',
          left: '-243.32px',
          width: '1366px',
          height: '143.86px',
          fontFamily: "'Prachason Neue Expanded', sans-serif",
          fontWeight: 700,
          fontSize: '156.022px',
          lineHeight: '1.09em',
          color: '#dfdee0',
          textAlign: 'center',
        }}
        initial={{ opacity: 0, y: 60, scale: 0.88 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        +riBB+
      </motion.div>

      {/* Subtitle: Remote international Battle-bot */}
      <motion.div
        className="absolute uppercase"
        style={{
          top: '317.02px',
          left: '126.79px',
          width: '890.33px',
          height: '30.46px',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '33.4591px',
          letterSpacing: '0.232em',
          lineHeight: '1.48em',
          color: '#ffffff',
          fontWeight: 400,
        }}
        initial={{ opacity: 0, y: 25, letterSpacing: '0.1em' }}
        animate={{ opacity: 1, y: 0, letterSpacing: '0.232em' }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        Remote international Battle-bot
      </motion.div>

      {/* Description */}
      <motion.div
        className="absolute uppercase"
        style={{
          top: '450px',
          left: '167.40px',
          width: '544.57px',
          height: '97.23px',
          fontFamily: "'Open Sauce', sans-serif",
          fontSize: '22.8525px',
          lineHeight: '1.54em',
          color: '#e6f0fa',
          fontWeight: 400,
        }}
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.45, ease: 'easeOut' }}
      >
        This company based on a project by a dedicated student to improvise and advancing in tech.
      </motion.div>

      {/* Est. 2026 */}
      <motion.div
        className="absolute"
        style={{
          top: '713.07px',
          left: '793.16px',
          width: '402.50px',
          height: '31.67px',
          fontFamily: "'Beth Ellen', cursive",
          fontSize: '26.6665px',
          lineHeight: '1.4em',
          color: '#e6f0fa',
          fontWeight: 400,
        }}
        initial={{ opacity: 0, x: 30, scale: 0.85 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      >
        Est. 2026
      </motion.div>
    </div>
  );
};
