import React from 'react';
import { motion } from 'motion/react';
import { CompanyId } from '../types';

interface TechCircuitNetworkProps {
  hoveredCompany?: CompanyId | null;
  stage?: 'black' | 'core' | 'circuits' | 'revealed';
}

export const TechCircuitNetwork: React.FC<TechCircuitNetworkProps> = ({
  hoveredCompany,
  stage = 'revealed',
}) => {
  const isCircuitVisible = stage === 'circuits' || stage === 'revealed';
  const isAssembling = stage === 'circuits';

  // Helper para retornar estilo dinâmico de cada linha conforme o hover (otimizado sem filtros pesados)
  const getTraceStyle = (id: CompanyId) => {
    const isHovered = hoveredCompany === id;
    const isAnyHovered = hoveredCompany !== null && hoveredCompany !== undefined;

    if (isHovered) {
      return {
        stroke: '#00f0ff',
        strokeWidth: 3.5,
        opacity: 1,
        transition: 'stroke 0.2s ease, opacity 0.2s ease',
      };
    }

    if (isAnyHovered) {
      return {
        stroke: '#0284c7',
        strokeWidth: 1.2,
        opacity: 0.18,
        transition: 'stroke 0.2s ease, opacity 0.2s ease',
      };
    }

    return {
      stroke: 'url(#fadeBottomTraceHD)',
      strokeWidth: 2,
      opacity: 0.85,
      transition: 'stroke 0.2s ease, opacity 0.2s ease',
    };
  };

  const getTraceCoreStyle = (id: CompanyId) => {
    const isHovered = hoveredCompany === id;
    const isAnyHovered = hoveredCompany !== null && hoveredCompany !== undefined;

    if (isHovered) {
      return {
        stroke: '#ffffff',
        strokeWidth: 1.8,
        opacity: 1,
        transition: 'all 0.2s ease',
      };
    }

    if (isAnyHovered) {
      return {
        stroke: '#38bdf8',
        strokeWidth: 0.8,
        opacity: 0.25,
        transition: 'all 0.2s ease',
      };
    }

    return {
      stroke: '#e0f2fe',
      strokeWidth: 1,
      opacity: 0.75,
      transition: 'all 0.2s ease',
    };
  };

  const getNodeColor = (id: CompanyId, defaultColor: string) => {
    if (hoveredCompany === id) return '#00f0ff';
    if (hoveredCompany) return '#0369a1';
    return defaultColor;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isCircuitVisible ? 1 : 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 transform-gpu"
    >
      {/* Background Volumetric Core Light with smooth downward gradient dissipation */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-12 w-[500px] h-[500px] bg-gradient-to-b from-blue-600/15 via-blue-500/10 to-transparent blur-[90px] rounded-full pointer-events-none transform-gpu" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-12 w-[280px] h-[280px] bg-cyan-400/10 blur-[50px] rounded-full pointer-events-none transform-gpu" />

      {/* SVG Canvas for High-Definition Circuit Grid, PCB Traces and Micro-Vias */}
      <svg
        className="w-full h-full min-h-[700px] object-cover"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradients de Alta Definição */}
          <linearGradient id="circuitCoreGlowHD" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#0088FF" />
            <stop offset="100%" stopColor="#0044B3" />
          </linearGradient>

          <linearGradient id="fadeLeftTraceHD" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.85" />
            <stop offset="25%" stopColor="#0099FF" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#0284C7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="fadeBottomTraceHD" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0099FF" stopOpacity="0.65" />
            <stop offset="40%" stopColor="#0088FF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="fadeRightTraceHD" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#0099FF" stopOpacity="0.6" />
            <stop offset="75%" stopColor="#0284C7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="fadeTopTraceHD" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#0099FF" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#0284C7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0" />
          </linearGradient>

          {/* Gradiente para Trilha Paralela Secundária */}
          <linearGradient id="subtleBusTrace" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#0369A1" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#082f49" stopOpacity="0" />
          </linearGradient>

          {/* Filtros de Brilho Neon Aprimorados (Sharp + Soft Bloom) */}
          <filter id="neonPulseHD" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2" result="sharpBlur" />
            <feGaussianBlur stdDeviation="5" result="bloomBlur" />
            <feMerge>
              <feMergeNode in="bloomBlur" />
              <feMergeNode in="sharpBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="subtleGlowHD" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="nodeHaloHD" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Padrão de Micro-Pontos PCB para Fundo Técnico com Máscara de Degradê Fluido */}
          <pattern id="pcbDots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="16" cy="16" r="0.8" fill="#0088ff" fillOpacity="0.15" />
          </pattern>

          <mask id="pcbDotsFadeMask">
            <linearGradient id="pcbFadeGrad" x1="0" y1="0" x2="0" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="20%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="90%" stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <rect x="0" y="0" width="1440" height="900" fill="url(#pcbFadeGrad)" />
          </mask>
        </defs>

        {/* Camada de Micro-Pontos PCB com transição fluida sem cortes */}
        <rect x="0" y="0" width="1440" height="900" fill="url(#pcbDots)" mask="url(#pcbDotsFadeMask)" opacity="0.75" />

        {/* 
          ===========================================================================
          1. NÚCLEO CENTRAL DE ALTA PRECISÃO (CPU QUANTUM MATRIX)
          Localizado em X=1080, Y=450
          ===========================================================================
        */}
        <g transform="translate(1080, 450)">
          {/* Micro-anéis concêntricos graduados (estilo HUD técnico aeronáutico / quântico) */}
          <circle cx="0" cy="0" r="175" stroke="#0369a1" strokeWidth="0.8" strokeDasharray="3 9" opacity="0.3" />
          <circle cx="0" cy="0" r="150" stroke="#0284c7" strokeWidth="1.2" strokeDasharray="60 120" opacity="0.5" />
          <circle cx="0" cy="0" r="125" stroke="#0099ff" strokeWidth="1" strokeDasharray="8 16" opacity="0.6" />
          <circle cx="0" cy="0" r="100" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="40 80" opacity="0.75" />

          {/* Escala de Graus / Ticks angulares nos 4 quadrantes */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((ang) => (
            <g key={`radial-tick-${ang}`} transform={`rotate(${ang})`}>
              <line x1="140" y1="0" x2="148" y2="0" stroke="#38bdf8" strokeWidth="1" opacity="0.6" />
              <circle cx="152" cy="0" r="1" fill="#00f0ff" opacity="0.8" />
            </g>
          ))}

          {/* Octagon Core Border com chanfros de precisão */}
          <polygon
            points="-65,-100 65,-100 100,-65 100,65 65,100 -65,100 -100,65 -100,-65"
            stroke="#0088ff"
            strokeWidth="1.2"
            strokeOpacity="0.4"
            fill="none"
          />

          {/* Microchip Socket Outline com cantos chanfrados e pulso suave */}
          <rect
            x="-80"
            y="-80"
            width="160"
            height="160"
            rx="18"
            stroke="#0088ff"
            strokeWidth="1.5"
            strokeDasharray="20 8"
            fill="#030919"
            fillOpacity="0.8"
            className="animate-pulse"
          />

          {/* Moldura Interna do Socket */}
          <rect
            x="-72"
            y="-72"
            width="144"
            height="144"
            rx="12"
            stroke="#38bdf8"
            strokeWidth="0.8"
            strokeOpacity="0.4"
            fill="none"
          />

          {/* Micro-Pinos de Barramento Dourados/Azuis (Norte, Sul, Leste, Oeste) */}
          {[-54, -36, -18, 0, 18, 36, 54].map((offset) => (
            <g key={`pin-top-${offset}`}>
              <line x1={offset} y1="-80" x2={offset} y2="-94" stroke="#38bdf8" strokeWidth="1.5" opacity="0.75" />
              {/* Micro-Via Terminal */}
              <circle cx={offset} cy="-94" r="2.5" fill="#030919" stroke="#38bdf8" strokeWidth="1" />
              <circle cx={offset} cy="-94" r="1" fill="#00f0ff" />
            </g>
          ))}
          {[-54, -36, -18, 0, 18, 36, 54].map((offset) => (
            <g key={`pin-bottom-${offset}`}>
              <line x1={offset} y1="80" x2={offset} y2="94" stroke="#38bdf8" strokeWidth="1.5" opacity="0.75" />
              <circle cx={offset} cy="94" r="2.5" fill="#030919" stroke="#38bdf8" strokeWidth="1" />
              <circle cx={offset} cy="94" r="1" fill="#00f0ff" />
            </g>
          ))}
          {[-54, -36, -18, 0, 18, 36, 54].map((offset) => (
            <g key={`pin-left-${offset}`}>
              <line x1="-80" y1={offset} x2="-94" y2={offset} stroke="#38bdf8" strokeWidth="1.5" opacity="0.75" />
              <circle cx="-94" cy={offset} r="2.5" fill="#030919" stroke="#38bdf8" strokeWidth="1" />
              <circle cx="-94" cy={offset} r="1" fill="#00f0ff" />
            </g>
          ))}
          {[-54, -36, -18, 0, 18, 36, 54].map((offset) => (
            <g key={`pin-right-${offset}`}>
              <line x1="80" y1={offset} x2="94" y2={offset} stroke="#38bdf8" strokeWidth="1.5" opacity="0.75" />
              <circle cx="94" cy={offset} r="2.5" fill="#030919" stroke="#38bdf8" strokeWidth="1" />
              <circle cx="94" cy={offset} r="1" fill="#00f0ff" />
            </g>
          ))}

          {/* Micro-Chips SMD periféricos ao redor do núcleo */}
          {[-45, 45].map((x) => (
            <g key={`smd-chip-${x}`}>
              <rect x={x - 8} y="-68" width="16" height="8" rx="1.5" fill="#0b1e3b" stroke="#0284c7" strokeWidth="0.8" />
              <line x1={x - 6} y1="-64" x2={x + 6} y2="-64" stroke="#38bdf8" strokeWidth="0.8" opacity="0.6" />
            </g>
          ))}

          {/* Core Central Glow Orb */}
          <circle cx="0" cy="0" r="48" fill="url(#circuitCoreGlowHD)" fillOpacity="0.2" filter="url(#neonPulseHD)" />
          <circle cx="0" cy="0" r="16" fill="#0088ff" fillOpacity="0.45" />
          <circle cx="0" cy="0" r="6" fill="#00f0ff" filter="url(#subtleGlowHD)" />
          <circle cx="0" cy="0" r="2" fill="#ffffff" />

          {/* Partículas e Faíscas Sutis Emanando do Núcleo */}
          {[
            { angle: 25, dist: 125, dur: '3.6s', delay: '0s', size: 2.5, color: '#00f0ff' },
            { angle: 75, dist: 100, dur: '4.2s', delay: '0.7s', size: 2, color: '#38bdf8' },
            { angle: 130, dist: 145, dur: '5.0s', delay: '1.2s', size: 2.2, color: '#60a5fa' },
            { angle: 190, dist: 115, dur: '3.8s', delay: '0.4s', size: 2.5, color: '#00f0ff' },
            { angle: 245, dist: 135, dur: '4.6s', delay: '1.6s', size: 2, color: '#38bdf8' },
            { angle: 305, dist: 110, dur: '3.4s', delay: '0.9s', size: 2.8, color: '#00f0ff' },
            { angle: 345, dist: 130, dur: '4.8s', delay: '2.1s', size: 1.8, color: '#93c5fd' },
          ].map((sp, idx) => {
            const rad = (sp.angle * Math.PI) / 180;
            const targetX = Math.cos(rad) * sp.dist;
            const targetY = Math.sin(rad) * sp.dist;
            return (
              <g key={`spark-${idx}`}>
                <circle cx="0" cy="0" r={sp.size} fill={sp.color} filter="url(#subtleGlowHD)">
                  <animate
                    attributeName="cx"
                    values={`0; ${targetX * 0.4}; ${targetX}`}
                    dur={sp.dur}
                    begin={sp.delay}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values={`0; ${targetY * 0.4}; ${targetY}`}
                    dur={sp.dur}
                    begin={sp.delay}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0; 0.9; 0.6; 0"
                    dur={sp.dur}
                    begin={sp.delay}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="r"
                    values={`${sp.size * 0.5}; ${sp.size}; ${sp.size * 0.3}`}
                    dur={sp.dur}
                    begin={sp.delay}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </g>


        {/* 
          ===========================================================================
          2. TRILHAS PRINCIPAIS ESQUERDA COM CAMADA DUPLA (LASER FIBER + BUS GUARDS)
          ===========================================================================
        */}

        {/* --- TRILHA 1: Topo-Esquerda em direção ao Título --- */}
        <g>
          {/* Trilha Paralela Secundária (Micro-Barramento) */}
          <path
            d="M 992 350 L 916 274 L 756 274 L 696 214 L 466 214 L 386 134 L 140 134"
            stroke="url(#subtleBusTrace)"
            strokeWidth="0.8"
            fill="none"
          />
          {/* Trilha Principal (Base Glow) */}
          <path
            d="M 992 362 L 910 280 L 750 280 L 690 220 L 460 220 L 380 140 L 120 140"
            stroke="url(#fadeLeftTraceHD)"
            strokeWidth="2.2"
            fill="none"
            filter="url(#subtleGlowHD)"
          />
          {/* Núcleo Laser Interno Super Nítido */}
          <path
            d="M 992 362 L 910 280 L 750 280 L 690 220 L 460 220 L 380 140 L 120 140"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeOpacity="0.75"
            fill="none"
          />
          {/* Micro-Vias de PCB e Pontos de Teste (TP) */}
          <g>
            <circle cx="910" cy="280" r="3.5" fill="#030919" stroke="#38bdf8" strokeWidth="1.2" />
            <circle cx="910" cy="280" r="1.5" fill="#00f0ff" />
            <circle cx="690" cy="220" r="3.5" fill="#030919" stroke="#0099ff" strokeWidth="1.2" />
            <circle cx="690" cy="220" r="1.5" fill="#38bdf8" />
            <circle cx="460" cy="220" r="2.5" fill="#030919" stroke="#0284c7" strokeWidth="1" />
            <circle cx="460" cy="220" r="1" fill="#38bdf8" />
            <circle cx="380" cy="140" r="3" fill="#030919" stroke="#0369a1" strokeWidth="1" />
            <circle cx="380" cy="140" r="1.2" fill="#00f0ff" />
          </g>
        </g>

        {/* --- TRILHA 2: Centro-Esquerda (Botões e Tags) --- */}
        <g>
          {/* Trilha Paralela Secundária */}
          <path
            d="M 992 438 L 896 438 L 836 378 L 646 378 L 586 438 L 326 438 L 266 498 L 90 498"
            stroke="url(#subtleBusTrace)"
            strokeWidth="0.8"
            fill="none"
          />
          {/* Trilha Principal */}
          <path
            d="M 992 450 L 890 450 L 830 390 L 640 390 L 580 450 L 320 450 L 260 510 L 80 510"
            stroke="url(#fadeLeftTraceHD)"
            strokeWidth="2.2"
            fill="none"
            filter="url(#subtleGlowHD)"
          />
          {/* Núcleo Laser */}
          <path
            d="M 992 450 L 890 450 L 830 390 L 640 390 L 580 450 L 320 450 L 260 510 L 80 510"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeOpacity="0.75"
            fill="none"
          />
          {/* Micro-Vias de Precisão */}
          <g>
            <circle cx="890" cy="450" r="3.5" fill="#030919" stroke="#38bdf8" strokeWidth="1.2" />
            <circle cx="890" cy="450" r="1.5" fill="#00f0ff" />
            <circle cx="830" cy="390" r="3" fill="#030919" stroke="#0099ff" strokeWidth="1" />
            <circle cx="830" cy="390" r="1.2" fill="#38bdf8" />
            <circle cx="580" cy="450" r="3.5" fill="#030919" stroke="#38bdf8" strokeWidth="1.2" />
            <circle cx="580" cy="450" r="1.5" fill="#00f0ff" />
            <circle cx="320" cy="450" r="2.5" fill="#030919" stroke="#0284c7" strokeWidth="1" />
            <circle cx="320" cy="450" r="1" fill="#38bdf8" />
          </g>
        </g>

        {/* --- TRILHA 3: Inferior-Esquerda (Radar de Disponibilidade) --- */}
        <g>
          {/* Trilha Paralela Secundária */}
          <path
            d="M 992 492 L 846 644 L 676 644 L 616 704 L 356 704 L 296 764 L 150 764"
            stroke="url(#subtleBusTrace)"
            strokeWidth="0.8"
            fill="none"
          />
          {/* Trilha Principal */}
          <path
            d="M 992 480 L 840 632 L 670 632 L 610 692 L 350 692 L 290 752 L 140 752"
            stroke="url(#fadeLeftTraceHD)"
            strokeWidth="2.2"
            fill="none"
            filter="url(#subtleGlowHD)"
          />
          {/* Núcleo Laser */}
          <path
            d="M 992 480 L 840 632 L 670 632 L 610 692 L 350 692 L 290 752 L 140 752"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeOpacity="0.75"
            fill="none"
          />
          {/* Micro-Vias */}
          <g>
            <circle cx="840" cy="632" r="3.5" fill="#030919" stroke="#38bdf8" strokeWidth="1.2" />
            <circle cx="840" cy="632" r="1.5" fill="#00f0ff" />
            <circle cx="670" cy="632" r="3" fill="#030919" stroke="#0099ff" strokeWidth="1" />
            <circle cx="670" cy="632" r="1.2" fill="#38bdf8" />
            <circle cx="350" cy="692" r="3.5" fill="#030919" stroke="#38bdf8" strokeWidth="1.2" />
            <circle cx="350" cy="692" r="1.5" fill="#00f0ff" />
          </g>
        </g>


        {/* 
          ===========================================================================
          3. CIRCUITOS CONECTANDO AOS BALÕES FLUTUANTES COM ALTA DEFINIÇÃO
          ===========================================================================
        */}

        {/* Conexão para Balão Top-Right (Especialistas em tecnologia) */}
        <g>
          <path
            d="M 1168 362 L 1230 300 L 1270 300 L 1310 260 L 1310 210"
            stroke="#0099ff"
            strokeWidth="1.8"
            fill="none"
            strokeDasharray="4 4"
            opacity="0.85"
            filter="url(#subtleGlowHD)"
          />
          <circle cx="1168" cy="362" r="3" fill="#030919" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="1168" cy="362" r="1.2" fill="#00f0ff" />
          <circle cx="1230" cy="300" r="3" fill="#030919" stroke="#0099ff" strokeWidth="1" />
          <circle cx="1230" cy="300" r="1.2" fill="#38bdf8" />
          <circle cx="1310" cy="210" r="4.5" fill="#00f0ff" filter="url(#nodeHaloHD)" />
          <circle cx="1310" cy="210" r="1.8" fill="#ffffff" />
        </g>

        {/* Trilha Secundária Top-Right */}
        <path
          d="M 1140 375 L 1180 335 L 1280 335 L 1320 295"
          stroke="#0284c7"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <circle cx="1320" cy="295" r="2.5" fill="#0284c7" />

        {/* Conexão para Balão Bottom-Left (Experiência +7 Anos) */}
        <g>
          <path
            d="M 992 538 L 920 610 L 860 610 L 830 640 L 780 640"
            stroke="#0099ff"
            strokeWidth="1.8"
            fill="none"
            strokeDasharray="6 3"
            opacity="0.85"
            filter="url(#subtleGlowHD)"
          />
          <circle cx="992" cy="538" r="3" fill="#030919" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="992" cy="538" r="1.2" fill="#00f0ff" />
          <circle cx="920" cy="610" r="3.5" fill="#030919" stroke="#0099ff" strokeWidth="1.2" />
          <circle cx="920" cy="610" r="1.5" fill="#38bdf8" />
          <circle cx="860" cy="610" r="2.5" fill="#38bdf8" />
          <circle cx="780" cy="640" r="4.5" fill="#00f0ff" filter="url(#nodeHaloHD)" />
          <circle cx="780" cy="640" r="1.8" fill="#ffffff" />
        </g>

        {/* Conexão para Balão Bottom-Right (Foco em...) */}
        <g>
          <path
            d="M 1168 538 L 1220 590 L 1260 590 L 1290 620 L 1340 620"
            stroke="#0099ff"
            strokeWidth="1.8"
            fill="none"
            strokeDasharray="4 4"
            opacity="0.85"
            filter="url(#subtleGlowHD)"
          />
          <circle cx="1168" cy="538" r="3" fill="#030919" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="1168" cy="538" r="1.2" fill="#00f0ff" />
          <circle cx="1220" cy="590" r="3" fill="#030919" stroke="#0099ff" strokeWidth="1" />
          <circle cx="1220" cy="590" r="1.2" fill="#38bdf8" />
          <circle cx="1340" cy="620" r="4.5" fill="#00f0ff" filter="url(#nodeHaloHD)" />
          <circle cx="1340" cy="620" r="1.8" fill="#ffffff" />
        </g>


        {/* 
          ===========================================================================
          4. TRILHAS DO NÚCLEO ALIMENTANDO O BARRAMENTO INFERIOR (HD)
          ===========================================================================
        */}
        {/* --- Trilha 1: Oxys Sistemas (Coluna 1) --- */}
        <g style={{ transition: 'all 0.3s ease' }}>
          <path
            d="M 1020 538 L 1020 620 L 980 660 L 980 900"
            style={getTraceStyle('sistemas')}
            fill="none"
          />
          <path
            d="M 1020 538 L 1020 620 L 980 660 L 980 900"
            style={getTraceCoreStyle('sistemas')}
            fill="none"
          />
          <circle cx="1020" cy="620" r="3.5" fill="#030919" stroke={getNodeColor('sistemas', '#38bdf8')} strokeWidth="1.2" />
          <circle cx="1020" cy="620" r="1.5" fill={getNodeColor('sistemas', '#00f0ff')} />
          <circle cx="980" cy="660" r="3.5" fill="#030919" stroke={getNodeColor('sistemas', '#0099ff')} strokeWidth="1.2" />
          <circle cx="980" cy="660" r="1.5" fill={getNodeColor('sistemas', '#38bdf8')} />
        </g>

        {/* --- Trilha 2: Oxys TI (Coluna 2) --- */}
        <g style={{ transition: 'all 0.3s ease' }}>
          <path
            d="M 1050 538 L 1050 640 L 1010 680 L 1010 900"
            style={getTraceStyle('ti')}
            fill="none"
          />
          <path
            d="M 1050 538 L 1050 640 L 1010 680 L 1010 900"
            style={getTraceCoreStyle('ti')}
            fill="none"
          />
          <circle cx="1050" cy="640" r="3.5" fill="#030919" stroke={getNodeColor('ti', '#38bdf8')} strokeWidth="1.2" />
          <circle cx="1050" cy="640" r="1.5" fill={getNodeColor('ti', '#00f0ff')} />
          <circle cx="1010" cy="680" r="3.5" fill="#030919" stroke={getNodeColor('ti', '#0099ff')} strokeWidth="1.2" />
          <circle cx="1010" cy="680" r="1.5" fill={getNodeColor('ti', '#38bdf8')} />
        </g>

        {/* --- Trilha 3: Oxys Cloud (Coluna 3) --- */}
        <g style={{ transition: 'all 0.3s ease' }}>
          <path
            d="M 1080 538 L 1080 660 L 1040 700 L 1040 900"
            style={getTraceStyle('cloud')}
            fill="none"
          />
          <path
            d="M 1080 538 L 1080 660 L 1040 700 L 1040 900"
            style={getTraceCoreStyle('cloud')}
            fill="none"
          />
          <circle cx="1080" cy="660" r="3.5" fill="#030919" stroke={getNodeColor('cloud', '#38bdf8')} strokeWidth="1.2" />
          <circle cx="1080" cy="660" r="1.5" fill={getNodeColor('cloud', '#00f0ff')} />
          <circle cx="1040" cy="700" r="3.5" fill="#030919" stroke={getNodeColor('cloud', '#0099ff')} strokeWidth="1.2" />
          <circle cx="1040" cy="700" r="1.5" fill={getNodeColor('cloud', '#38bdf8')} />
        </g>

        {/* --- Trilha 4: Oxys Automação (Coluna 4) --- */}
        <g style={{ transition: 'all 0.3s ease' }}>
          <path
            d="M 1120 538 L 1120 640 L 1150 670 L 1150 900"
            style={getTraceStyle('automacao')}
            fill="none"
          />
          <path
            d="M 1120 538 L 1120 640 L 1150 670 L 1150 900"
            style={getTraceCoreStyle('automacao')}
            fill="none"
          />
          <circle cx="1120" cy="640" r="3.5" fill="#030919" stroke={getNodeColor('automacao', '#38bdf8')} strokeWidth="1.2" />
          <circle cx="1120" cy="640" r="1.5" fill={getNodeColor('automacao', '#00f0ff')} />
          <circle cx="1150" cy="670" r="3.5" fill="#030919" stroke={getNodeColor('automacao', '#0099ff')} strokeWidth="1.2" />
          <circle cx="1150" cy="670" r="1.5" fill={getNodeColor('automacao', '#38bdf8')} />
        </g>


        {/* 
          ===========================================================================
          5. TRILHAS DISSIPANDO PARA A DIREITA E TOPO
          ===========================================================================
        */}
        {/* Trilha Direita Superior */}
        <g>
          <path
            d="M 1168 420 L 1260 420 L 1320 360 L 1440 360"
            stroke="url(#fadeRightTraceHD)"
            strokeWidth="2"
            fill="none"
            filter="url(#subtleGlowHD)"
          />
          <circle cx="1260" cy="420" r="3" fill="#030919" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="1260" cy="420" r="1.2" fill="#00f0ff" />
          <circle cx="1320" cy="360" r="2.5" fill="#0099ff" />
        </g>

        {/* Trilha Direita Inferior */}
        <g>
          <path
            d="M 1168 480 L 1280 480 L 1340 540 L 1440 540"
            stroke="url(#fadeRightTraceHD)"
            strokeWidth="2"
            fill="none"
            filter="url(#subtleGlowHD)"
          />
          <circle cx="1280" cy="480" r="3" fill="#030919" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="1280" cy="480" r="1.2" fill="#00f0ff" />
          <circle cx="1340" cy="540" r="2.5" fill="#0099ff" />
        </g>

        {/* Trilha Topo Norte */}
        <g>
          <path
            d="M 1080 362 L 1080 260 L 1020 200 L 1020 80 L 980 40 L 980 0"
            stroke="url(#fadeTopTraceHD)"
            strokeWidth="2"
            fill="none"
            filter="url(#subtleGlowHD)"
          />
          <circle cx="1080" cy="260" r="3" fill="#030919" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="1080" cy="260" r="1.2" fill="#00f0ff" />
          <circle cx="1020" cy="200" r="2.5" fill="#0099ff" />
          <circle cx="1020" cy="80" r="2" fill="#0369a1" />
        </g>


        {/* 
          ===========================================================================
          6. PULSOS DE DADOS ANIMADOS (DATA STREAM PACKETS) - ULTRA LEVES E SUAVES
          ===========================================================================
        */}

        {/* Pulso 1: Núcleo -> Esquerda (Botões) */}
        <g>
          <circle r="4" fill="#00f0ff" fillOpacity="0.5">
            <animateMotion
              path="M 992 450 L 890 450 L 830 390 L 640 390 L 580 450 L 320 450 L 260 510 L 80 510"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle r="1.8" fill="#ffffff">
            <animateMotion
              path="M 992 450 L 890 450 L 830 390 L 640 390 L 580 450 L 320 450 L 260 510 L 80 510"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Pulso 2: Núcleo -> Topo Esquerda */}
        <g>
          <circle r="4" fill="#38bdf8" fillOpacity="0.5">
            <animateMotion
              path="M 992 362 L 910 280 L 750 280 L 690 220 L 460 220 L 380 140 L 120 140"
              dur="5s"
              repeatCount="indefinite"
              begin="1.2s"
            />
          </circle>
          <circle r="1.8" fill="#ffffff">
            <animateMotion
              path="M 992 362 L 910 280 L 750 280 L 690 220 L 460 220 L 380 140 L 120 140"
              dur="5s"
              repeatCount="indefinite"
              begin="1.2s"
            />
          </circle>
        </g>

        {/* Pulso 3: Núcleo -> Balão Superior Direito */}
        <g>
          <circle r="3.5" fill="#7dd3fc" fillOpacity="0.5">
            <animateMotion
              path="M 1168 362 L 1230 300 L 1270 300 L 1310 260 L 1310 210"
              dur="3.2s"
              repeatCount="indefinite"
              begin="0.5s"
            />
          </circle>
          <circle r="1.5" fill="#ffffff">
            <animateMotion
              path="M 1168 362 L 1230 300 L 1270 300 L 1310 260 L 1310 210"
              dur="3.2s"
              repeatCount="indefinite"
              begin="0.5s"
            />
          </circle>
        </g>

        {/* Pulso 4: Núcleo -> Balão Inferior Esquerdo */}
        <g>
          <circle r="3.5" fill="#38bdf8" fillOpacity="0.5">
            <animateMotion
              path="M 992 538 L 920 610 L 860 610 L 830 640 L 780 640"
              dur="3.8s"
              repeatCount="indefinite"
              begin="1.8s"
            />
          </circle>
          <circle r="1.5" fill="#ffffff">
            <animateMotion
              path="M 992 538 L 920 610 L 860 610 L 830 640 L 780 640"
              dur="3.8s"
              repeatCount="indefinite"
              begin="1.8s"
            />
          </circle>
        </g>

        {/* Pulso 5: Núcleo -> Inferior Esquerdo (Radar) */}
        <g>
          <circle r="4" fill="#00f0ff" fillOpacity="0.5">
            <animateMotion
              path="M 992 480 L 840 632 L 670 632 L 610 692 L 350 692 L 290 752 L 140 752"
              dur="5.5s"
              repeatCount="indefinite"
              begin="2.5s"
            />
          </circle>
          <circle r="1.8" fill="#ffffff">
            <animateMotion
              path="M 992 480 L 840 632 L 670 632 L 610 692 L 350 692 L 290 752 L 140 752"
              dur="5.5s"
              repeatCount="indefinite"
              begin="2.5s"
            />
          </circle>
        </g>

        {/* Pulso 6: Núcleo -> Direita Superior */}
        <g>
          <circle r="3.5" fill="#0099ff" fillOpacity="0.5">
            <animateMotion
              path="M 1168 420 L 1260 420 L 1320 360 L 1440 360"
              dur="3.8s"
              repeatCount="indefinite"
              begin="0.6s"
            />
          </circle>
          <circle r="1.5" fill="#ffffff">
            <animateMotion
              path="M 1168 420 L 1260 420 L 1320 360 L 1440 360"
              dur="3.8s"
              repeatCount="indefinite"
              begin="0.6s"
            />
          </circle>
        </g>

        {/* Pulso 7: Núcleo -> Direita Inferior */}
        <g>
          <circle r="3.5" fill="#00f0ff" fillOpacity="0.5">
            <animateMotion
              path="M 1168 480 L 1280 480 L 1340 540 L 1440 540"
              dur="3.5s"
              repeatCount="indefinite"
              begin="1.4s"
            />
          </circle>
          <circle r="1.5" fill="#ffffff">
            <animateMotion
              path="M 1168 480 L 1280 480 L 1340 540 L 1440 540"
              dur="3.5s"
              repeatCount="indefinite"
              begin="1.4s"
            />
          </circle>
        </g>

        {/* Ondas Expansivas de Montagem / Power-up Shockwave ao inicializar */}
        {isAssembling && (
          <g transform="translate(1080, 450)">
            <motion.circle
              cx="0"
              cy="0"
              r="20"
              stroke="#00f0ff"
              strokeWidth="4"
              fill="none"
              initial={{ scale: 0.1, opacity: 1 }}
              animate={{ scale: [0.1, 8, 18], opacity: [1, 0.8, 0] }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <motion.circle
              cx="0"
              cy="0"
              r="20"
              stroke="#38bdf8"
              strokeWidth="2"
              fill="none"
              initial={{ scale: 0.1, opacity: 1 }}
              animate={{ scale: [0.1, 6, 14], opacity: [1, 0.7, 0] }}
              transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
            />
          </g>
        )}

        {/* Pulso 8: Núcleo -> Topo Norte */}
        <g>
          <circle r="3.5" fill="#38bdf8" fillOpacity="0.5">
            <animateMotion
              path="M 1080 362 L 1080 260 L 1020 200 L 1020 80 L 980 40 L 980 0"
              dur="4.2s"
              repeatCount="indefinite"
              begin="0.9s"
            />
          </circle>
          <circle r="1.5" fill="#ffffff">
            <animateMotion
              path="M 1080 362 L 1080 260 L 1020 200 L 1020 80 L 980 40 L 980 0"
              dur="4.2s"
              repeatCount="indefinite"
              begin="0.9s"
            />
          </circle>
        </g>
      </svg>
    </motion.div>
  );
};
