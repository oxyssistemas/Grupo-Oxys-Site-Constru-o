import React from 'react';
import { motion } from 'motion/react';

export const ContactCircuitBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Luzes Volumétricas de Fundo com Profundidade Suave */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-blue-600/15 via-sky-500/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[450px] bg-gradient-to-tl from-cyan-500/12 via-blue-700/10 to-transparent blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[380px] h-[380px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* SVG Circuit Canvas com Desfoque Óptico de Fundo (Depth of Field Blur) */}
      <div className="w-full h-full opacity-45 md:opacity-55 filter blur-[2px] sm:blur-[2.5px] transition-opacity duration-1000">
        <svg
          className="w-full h-full object-cover min-h-[850px]"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Gradientes dos Traços de Circuito */}
            <linearGradient id="contactTraceGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.05" />
              <stop offset="30%" stopColor="#00b4d8" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#00f0ff" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="contactTraceGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.05" />
            </linearGradient>

            <linearGradient id="contactPulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#00b4d8" stopOpacity="0" />
            </linearGradient>

            <radialGradient id="contactNodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="1" />
              <stop offset="40%" stopColor="#00b4d8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </radialGradient>

            {/* Padrão Micro-Grid de Placa PCB */}
            <pattern id="contactPcbGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(2, 132, 199, 0.07)" strokeWidth="0.8" />
              <circle cx="40" cy="0" r="0.8" fill="rgba(56, 189, 248, 0.15)" />
              <circle cx="0" cy="40" r="0.8" fill="rgba(56, 189, 248, 0.15)" />
            </pattern>

            {/* Filtros de Glow */}
            <filter id="contactGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Fundo de Malha PCB */}
          <rect width="1440" height="900" fill="url(#contactPcbGrid)" />

          {/* ========================================================
              CIRCUITOS & TRILHAS DE DADOS (Lado Esquerdo e Central)
             ======================================================== */}
          {/* Circuito 1 - Trilha Longa Superior Esquerda */}
          <path
            d="M 50 120 L 220 120 L 320 220 L 320 420 L 440 540 L 680 540"
            stroke="url(#contactTraceGrad1)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Pulso de luz 1 */}
          <motion.circle
            r="4"
            fill="#00f0ff"
            filter="url(#contactGlow)"
            initial={{ offsetDistance: '0%' }}
            animate={{ offsetDistance: '100%' }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              offsetPath: "path('M 50 120 L 220 120 L 320 220 L 320 420 L 440 540 L 680 540')",
            }}
          />

          {/* Circuito 2 - Trilha Rápida Central */}
          <path
            d="M 120 780 L 280 780 L 380 680 L 520 680 L 600 600 L 750 600"
            stroke="url(#contactTraceGrad2)"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
          <motion.circle
            r="3.5"
            fill="#38bdf8"
            filter="url(#contactGlow)"
            initial={{ offsetDistance: '0%' }}
            animate={{ offsetDistance: '100%' }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              ease: 'linear',
              delay: 1.5,
            }}
            style={{
              offsetPath: "path('M 120 780 L 280 780 L 380 680 L 520 680 L 600 600 L 750 600')",
            }}
          />

          {/* Circuito 3 - Trilha Diagonal Esquerda -> Topo Central */}
          <path
            d="M 80 400 L 190 400 L 290 300 L 540 300 L 620 220 L 800 220"
            stroke="url(#contactTraceGrad1)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <motion.circle
            r="3"
            fill="#ffffff"
            filter="url(#contactGlow)"
            initial={{ offsetDistance: '0%' }}
            animate={{ offsetDistance: '100%' }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'linear',
              delay: 0.8,
            }}
            style={{
              offsetPath: "path('M 80 400 L 190 400 L 290 300 L 540 300 L 620 220 L 800 220')",
            }}
          />

          {/* ========================================================
              CIRCUITOS & TRILHAS DE DADOS (Lado Direito e Fundo Form)
             ======================================================== */}
          {/* Circuito 4 - Trilha Topo Direita -> Base */}
          <path
            d="M 1390 150 L 1220 150 L 1100 270 L 1100 480 L 980 600 L 820 600"
            stroke="url(#contactTraceGrad1)"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />
          <motion.circle
            r="4"
            fill="#00f0ff"
            filter="url(#contactGlow)"
            initial={{ offsetDistance: '0%' }}
            animate={{ offsetDistance: '100%' }}
            transition={{
              duration: 6.8,
              repeat: Infinity,
              ease: 'linear',
              delay: 2,
            }}
            style={{
              offsetPath: "path('M 1390 150 L 1220 150 L 1100 270 L 1100 480 L 980 600 L 820 600')",
            }}
          />

          {/* Circuito 5 - Trilha Base Direita */}
          <path
            d="M 1350 720 L 1180 720 L 1080 620 L 920 620 L 850 690 L 700 690"
            stroke="url(#contactTraceGrad2)"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
          <motion.circle
            r="3.5"
            fill="#38bdf8"
            filter="url(#contactGlow)"
            initial={{ offsetDistance: '0%' }}
            animate={{ offsetDistance: '100%' }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
              delay: 3.2,
            }}
            style={{
              offsetPath: "path('M 1350 720 L 1180 720 L 1080 620 L 920 620 L 850 690 L 700 690')",
            }}
          />

          {/* Circuito 6 - Barramento Horizontal Superior */}
          <path
            d="M 400 80 L 720 80 L 780 140 L 1020 140 L 1080 80 L 1300 80"
            stroke="rgba(0, 180, 216, 0.35)"
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="6 4"
          />
          <motion.circle
            r="3"
            fill="#00f0ff"
            filter="url(#contactGlow)"
            initial={{ offsetDistance: '0%' }}
            animate={{ offsetDistance: '100%' }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'linear',
              delay: 1,
            }}
            style={{
              offsetPath: "path('M 400 80 L 720 80 L 780 140 L 1020 140 L 1080 80 L 1300 80')",
            }}
          />

          {/* ========================================================
              MICRO-VIAS & NÓS DE CONEXÃO PULSANTES (GLOWING NODES)
             ======================================================== */}
          {/* Nó 1 */}
          <g transform="translate(320, 220)">
            <circle r="8" fill="url(#contactNodeGlow)" opacity="0.6" />
            <circle r="3.5" fill="#00f0ff" />
            <circle r="1.5" fill="#ffffff" />
          </g>

          {/* Nó 2 */}
          <g transform="translate(440, 540)">
            <circle r="9" fill="url(#contactNodeGlow)" opacity="0.7" />
            <circle r="4" fill="#00f0ff" />
            <circle r="1.5" fill="#ffffff" />
          </g>

          {/* Nó 3 */}
          <g transform="translate(1100, 270)">
            <circle r="8" fill="url(#contactNodeGlow)" opacity="0.6" />
            <circle r="3.5" fill="#00f0ff" />
            <circle r="1.5" fill="#ffffff" />
          </g>

          {/* Nó 4 */}
          <g transform="translate(980, 600)">
            <circle r="9" fill="url(#contactNodeGlow)" opacity="0.7" />
            <circle r="4" fill="#38bdf8" />
            <circle r="1.5" fill="#ffffff" />
          </g>

          {/* Nó 5 */}
          <g transform="translate(380, 680)">
            <circle r="7" fill="url(#contactNodeGlow)" opacity="0.5" />
            <circle r="3" fill="#38bdf8" />
          </g>

          {/* Nó 6 */}
          <g transform="translate(1080, 620)">
            <circle r="7" fill="url(#contactNodeGlow)" opacity="0.5" />
            <circle r="3" fill="#38bdf8" />
          </g>

          {/* ========================================================
              BLOCOS GEOMÉTRICOS DE PROCESSADOR / CHIP HOLOGRÁFICO
             ======================================================== */}
          {/* Micro Chip Esquerda */}
          <g transform="translate(200, 385)">
            <rect x="0" y="0" width="30" height="30" rx="4" fill="#040d21" stroke="#00b4d8" strokeWidth="1.2" opacity="0.7" />
            <rect x="6" y="6" width="18" height="18" rx="2" fill="#0284c7" opacity="0.3" />
            <line x1="-5" y1="8" x2="0" y2="8" stroke="#00f0ff" strokeWidth="1" />
            <line x1="-5" y1="15" x2="0" y2="15" stroke="#00f0ff" strokeWidth="1" />
            <line x1="-5" y1="22" x2="0" y2="22" stroke="#00f0ff" strokeWidth="1" />
            <line x1="30" y1="8" x2="35" y2="8" stroke="#00f0ff" strokeWidth="1" />
            <line x1="30" y1="15" x2="35" y2="15" stroke="#00f0ff" strokeWidth="1" />
            <line x1="30" y1="22" x2="35" y2="22" stroke="#00f0ff" strokeWidth="1" />
          </g>

          {/* Micro Chip Direita */}
          <g transform="translate(1195, 465)">
            <rect x="0" y="0" width="32" height="32" rx="4" fill="#040d21" stroke="#00f0ff" strokeWidth="1.2" opacity="0.75" />
            <rect x="7" y="7" width="18" height="18" rx="2" fill="#0284c7" opacity="0.35" />
            <line x1="-5" y1="10" x2="0" y2="10" stroke="#38bdf8" strokeWidth="1" />
            <line x1="-5" y1="16" x2="0" y2="16" stroke="#38bdf8" strokeWidth="1" />
            <line x1="-5" y1="22" x2="0" y2="22" stroke="#38bdf8" strokeWidth="1" />
            <line x1="32" y1="10" x2="37" y2="10" stroke="#38bdf8" strokeWidth="1" />
            <line x1="32" y1="16" x2="37" y2="16" stroke="#38bdf8" strokeWidth="1" />
            <line x1="32" y1="22" x2="37" y2="22" stroke="#38bdf8" strokeWidth="1" />
          </g>

          {/* Pulsos de Ondas Radiais Tecnológicas nos Nós Centrais */}
          <motion.circle
            cx="440"
            cy="540"
            r="16"
            stroke="#00f0ff"
            strokeWidth="1"
            fill="none"
            initial={{ scale: 0.5, opacity: 0.8 }}
            animate={{ scale: [0.5, 2.2], opacity: [0.8, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut' }}
          />

          <motion.circle
            cx="980"
            cy="600"
            r="16"
            stroke="#00f0ff"
            strokeWidth="1"
            fill="none"
            initial={{ scale: 0.5, opacity: 0.8 }}
            animate={{ scale: [0.5, 2.2], opacity: [0.8, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeOut', delay: 1 }}
          />
        </svg>
      </div>
    </div>
  );
};
