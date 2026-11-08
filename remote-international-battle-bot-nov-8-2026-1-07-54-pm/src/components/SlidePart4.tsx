import React, { useState } from 'react';
import { ExternalLink, Check, Copy } from 'lucide-react';
import { motion } from 'motion/react';

export const SlidePart4: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const discordUrl = 'https://discord.gg/XQph96U27';

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(discordUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-[1366px] h-[768px] bg-[#161a1c] overflow-hidden select-none">
      {/* Decorative Right Blade Graphic */}
      <motion.img
        src="/assets/14d3472b1cc41eccd6c8367a4273684b.png"
        alt=""
        draggable={false}
        className="absolute pointer-events-none select-none max-w-none"
        style={{
          top: '103.38px',
          left: '1011.28px',
          width: '584.06px',
          height: '505.94px',
        }}
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: -97.74 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Big Title: Coming soon with punchy spring scale entrance */}
      <motion.div
        className="absolute uppercase flex items-center justify-center"
        style={{
          top: '120px',
          left: '-8.97px',
          width: '691.97px',
          height: '140px',
          fontFamily: "'Prachason Neue Expanded', sans-serif",
          fontWeight: 700,
          fontSize: '72px',
          lineHeight: '1.1em',
          textAlign: 'center',
          color: '#dfdee0',
          whiteSpace: 'nowrap',
        }}
        initial={{ opacity: 0, scale: 0.75, y: -25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 220, damping: 18 }}
      >
        Coming soon
      </motion.div>

      {/* Subtitle: Contact Us! */}
      <motion.div
        className="absolute uppercase flex items-center justify-center"
        style={{
          top: '537.76px',
          left: '-54.74px',
          width: '691.97px',
          height: '61.71px',
          fontFamily: "'Prachason Neue Expanded', sans-serif",
          fontWeight: 700,
          fontSize: '51.8671px',
          lineHeight: '1.09em',
          textAlign: 'center',
          color: '#dfdee0',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.28, ease: 'easeOut' }}
      >
        Contact Us!
      </motion.div>

      {/* Interactive Link: Discord Server URL */}
      <motion.div
        className="absolute flex items-center gap-3 group"
        style={{
          top: '655px',
          left: '41.17px',
          width: '560px',
          height: '44.53px',
        }}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.45, type: 'spring', stiffness: 200, damping: 20 }}
      >
        <a
          href={discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors flex items-center gap-2"
          style={{
            fontFamily: "'Arimo', sans-serif",
            fontSize: '37.3333px',
            color: '#dfdee0',
            textDecoration: 'underline',
          }}
          title="Open Discord Server"
        >
          {discordUrl}
          <ExternalLink className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity inline-block" />
        </a>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="px-2.5 py-1.5 rounded bg-white/10 hover:bg-white/20 active:scale-95 text-white/80 hover:text-white transition-all text-sm flex items-center gap-1.5 cursor-pointer backdrop-blur"
          title="Copy Discord invite link"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-emerald-400 font-sans">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span className="text-xs font-sans">Copy</span>
            </>
          )}
        </button>
      </motion.div>
    </div>
  );
};
