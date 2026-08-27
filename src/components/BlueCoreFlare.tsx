import React from 'react';
import { motion } from 'motion/react';
import { BRAND_CONFIG } from '../config/brandAssets';

interface BlueCoreFlareProps {
  logoSrc?: string;
}

export const BlueCoreFlare: React.FC<BlueCoreFlareProps> = ({ logoSrc }) => {
  const activeImage = logoSrc !== undefined ? logoSrc : BRAND_CONFIG.HERO_CORE_LOGO_SRC;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, filter: 'brightness(0.2)' }}
      animate={{ opacity: 1, scale: 1, filter: 'brightness(1)' }}
      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="relative flex items-center justify-center select-none"
    >
      {/* 
        ========================================================================
        CLARÃO EM AZUL (OPTICAL BLUE FLARE / CORE BURST)
        Camadas volumétricas de luz e energia azul elétrico
        ========================================================================
      */}

      {/* 1. Clarão Volumétrico Profundo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.75, 0.95, 0.75],
        }}
        transition={{
          opacity: { duration: 1, delay: 0.1 },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute w-[320px] sm:w-[420px] lg:w-[480px] h-[320px] sm:h-[420px] lg:h-[480px] rounded-full bg-gradient-to-r from-blue-600/30 via-[#0088ff]/35 to-cyan-400/20 blur-[60px] sm:blur-[75px] pointer-events-none transform-gpu"
      />

      {/* 2. Núcleo de Alta Intensidade Ciano/Azul */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.85, 1, 0.85],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.2 },
          scale: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
        }}
        className="absolute w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] rounded-full bg-gradient-radial from-[#38bdf8]/60 via-[#0088ff]/40 to-transparent blur-[35px] sm:blur-[45px] pointer-events-none transform-gpu"
      />

      {/* 3. Feixe de Luz Anamórfico Horizontal */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{
          scaleX: [0.92, 1.08, 0.92],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.25 },
          scaleX: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute w-[360px] sm:w-[480px] lg:w-[540px] h-[2px] bg-gradient-to-r from-transparent via-[#7dd3fc] to-transparent shadow-[0_0_12px_#38bdf8] pointer-events-none z-0 transform-gpu"
      />
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.8, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute w-[220px] sm:w-[280px] h-[4px] bg-gradient-to-r from-transparent via-[#0099ff]/80 to-transparent blur-[1px] pointer-events-none z-0 transform-gpu"
      />

      {/* 4. Feixes Diagonais em Cruz */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, delay: 0.5 }}
        className="absolute w-[260px] sm:w-[360px] h-[1.5px] bg-gradient-to-r from-transparent via-[#38bdf8]/60 to-transparent rotate-45 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, delay: 0.5 }}
        className="absolute w-[260px] sm:w-[360px] h-[1.5px] bg-gradient-to-r from-transparent via-[#38bdf8]/60 to-transparent -rotate-45 pointer-events-none"
      />

      {/* 5. Hotspot Central Branco/Azul */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          scale: [0.9, 1.15, 0.9],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          opacity: { duration: 1, delay: 0.3 },
          scale: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute w-12 h-12 rounded-full bg-white/40 blur-[8px] pointer-events-none"
      />

      {/* 
        ========================================================================
        ÁREA CENTRAL DO NÚCLEO (100% ESTÁTICA / SOMENTE CÓDIGO)
        Sem inputs, sem drag & drop, sem menus de trocar/remover.
        ========================================================================
      */}
      <div className="relative z-20 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 flex items-center justify-center pointer-events-none select-none">
        {activeImage && activeImage.trim() !== '' ? (
          /* Imagem/Logo configurada via código em BRAND_CONFIG */
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-full h-full flex items-center justify-center pointer-events-none select-none"
          >
            <img
              src={activeImage}
              alt={`${BRAND_CONFIG.BRAND_NAME} Hero Core Visual`}
              draggable={false}
              className="max-w-[85%] max-h-[85%] w-auto h-auto object-contain filter drop-shadow-[0_12px_45px_rgba(0,140,255,0.85)] drop-shadow-[0_0_35px_rgba(56,189,248,0.7)] pointer-events-none select-none"
            />
          </motion.div>
        ) : (
          /* Ponto Focal Puro do Núcleo de Energia quando não há logo estática definida */
          <div className="w-24 h-24 rounded-full border border-sky-400/30 bg-sky-500/10 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(0,140,255,0.35)] pointer-events-none select-none">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0088ff] to-[#00f0ff] animate-pulse blur-[2px] opacity-80" />
            <div className="absolute w-4 h-4 rounded-full bg-white shadow-[0_0_15px_#ffffff]" />
          </div>
        )}
      </div>
    </motion.div>
  );
};
