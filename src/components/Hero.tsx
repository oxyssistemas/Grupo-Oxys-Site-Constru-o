import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, User, Heart } from 'lucide-react';
import { CompanyId } from '../types';
import { TechCircuitNetwork } from './TechCircuitNetwork';
import { BlueCoreFlare } from './BlueCoreFlare';
import { CoreFloatingParticles } from './CoreFloatingParticles';
import { BRAND_CONFIG } from '../config/brandAssets';
import { GlitchHeading } from './GlitchHeading';

interface HeroProps {
  hoveredCompany?: CompanyId | null;
  onSelectCompany: (companyId: CompanyId) => void;
  onOpenContact: () => void;
  stage?: 'black' | 'core' | 'circuits' | 'revealed';
}

export const Hero: React.FC<HeroProps> = ({
  hoveredCompany,
  onSelectCompany,
  onOpenContact,
  stage = 'revealed',
}) => {
  const isCoreIgnited = stage === 'core' || stage === 'circuits' || stage === 'revealed';
  const isContentRevealed = stage === 'revealed';

  const handleScrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-0 lg:pt-32 lg:pb-0 overflow-hidden bg-gradient-to-b from-[#020614] via-[#040c20] via-60% to-[#02050e]"
    >
      {/* Luzes fluidas de fundo em degradê orgânico (sem cortes bruscos) */}
      <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] bg-gradient-to-br from-blue-600/10 via-indigo-700/5 to-transparent blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[650px] h-[650px] bg-gradient-to-br from-blue-600/18 via-sky-500/10 to-transparent blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 w-[600px] h-[400px] bg-gradient-to-t from-sky-600/8 via-blue-900/5 to-transparent blur-[150px] rounded-full pointer-events-none" />

      {/* Dynamic Cyber Tech Circuits Background Network */}
      <TechCircuitNetwork hoveredCompany={hoveredCompany} stage={stage} />

      {/* Tech Grid Pattern overlay com máscara radial suave e transição fluida */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isCoreIgnited ? 0.2 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#0e1a33_1px,transparent_1px),linear-gradient(to_bottom,#0e1a33_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_45%,#000_30%,transparent_90%)] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* ========================================================================= */}
          {/* TEXT COLUMN (DESKTOP: LEFT / MOBILE: EM BAIXO DA LOGO)                     */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isContentRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center text-center lg:text-left items-center lg:items-start ${
              !isContentRevealed ? 'pointer-events-none' : ''
            }`}
          >
            
            {/* Top Category Tag: SISTEMAS | TI */}
            <div className="inline-flex items-center">
              <span className="font-rajdhani font-bold text-xs sm:text-sm md:text-base tracking-[0.24em] text-[#0099ff] uppercase">
                SISTEMAS <span className="text-slate-500 font-normal">|</span> TI
              </span>
            </div>

            {/* Main Headline */}
            <div className="mt-3 sm:mt-4">
              <GlitchHeading
                as="h1"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] font-extrabold text-white font-heading leading-[1.15] lg:leading-[1.12] tracking-tight"
              >
                Soluções digitais <br className="hidden sm:inline" />
                que impulsionam o <br className="hidden sm:inline" />
                <span className="text-[#0088ff] drop-shadow-[0_0_20px_rgba(0,136,255,0.4)]">
                  futuro.
                </span>
              </GlitchHeading>
            </div>

            {/* Subtitle description */}
            <p className="mt-4 sm:mt-6 text-slate-400 text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed font-normal text-center lg:text-left">
              Desenvolvemos sistemas e soluções de TI inteligentes que transformam ideias em resultados reais.
            </p>

            {/* Action Buttons: VER NOSSOS PROJETOS & SOBRE NÓS */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Primary Blue Button */}
              <button
                id="hero-btn-ver-projetos"
                onClick={handleScrollToWork}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0066ff] hover:bg-[#0055d4] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(0,102,255,0.55)] hover:shadow-[0_0_35px_rgba(0,102,255,0.8)] transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-95 focus:outline-none min-h-[46px]"
              >
                <span>VER NOSSOS PROJETOS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary Dark Button */}
              <button
                id="hero-btn-sobre-nos"
                onClick={handleScrollToAbout}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#070d1a]/90 hover:bg-[#0c162a] border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-95 focus:outline-none min-h-[46px]"
              >
                <span>SOBRE NÓS</span>
                <User className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Bottom Availability Status Badge */}
            <div className="mt-8 sm:mt-12 flex items-center justify-center lg:justify-start gap-3.5">
              {/* Pulsing Blue Dot with Concentric Radar Wave */}
              <div className="relative flex items-center justify-center w-5 h-5 shrink-0">
                <span className="absolute w-5 h-5 rounded-full border border-sky-400/40 animate-ping" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#0099ff] shadow-[0_0_10px_#0099ff]" />
              </div>

              <div className="text-left">
                <div className="text-[11px] sm:text-xs font-bold tracking-[0.14em] text-white uppercase font-rajdhani">
                  DISPONÍVEL PARA PROJETOS
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Vamos tirar sua ideia do papel?
                </div>
              </div>
            </div>

          </motion.div>

          {/* ========================================================================= */}
          {/* LOGO VISUAL COLUMN (DESKTOP: RIGHT / MOBILE: EM CIMA DA ESCRITA)           */}
          {/* ========================================================================= */}
          <div className="order-1 lg:order-2 lg:col-span-6 relative flex items-center justify-center min-h-[340px] sm:min-h-[440px] lg:min-h-[580px] w-full pt-4 lg:pt-0">
            
            {/* Background Cyber Tech Circuit Core & Concentric Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              animate={isCoreIgnited ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none transform-gpu"
            >
              {/* Central Core Volumetric Glow */}
              <div className="w-[300px] sm:w-[360px] h-[300px] sm:h-[360px] rounded-full bg-blue-600/25 blur-[60px] transform-gpu" />
              <div className="w-[160px] sm:w-[200px] h-[160px] sm:h-[200px] rounded-full bg-cyan-400/15 blur-[40px] transform-gpu" />
              
              {/* Computer Circuit Motherboard Central Hub (SVG) */}
              <svg
                className="w-[340px] sm:w-[440px] lg:w-[480px] h-[340px] sm:h-[440px] lg:h-[480px]"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 1. Outer Chip Enclosure / Chamfered Socket Frame */}
                <rect
                  x="70"
                  y="70"
                  width="260"
                  height="260"
                  rx="36"
                  stroke="#0088ff"
                  strokeWidth="1.5"
                  strokeDasharray="14 8"
                  fill="#030816"
                  fillOpacity="0.8"
                />

                {/* Inner Bevel Border */}
                <rect
                  x="86"
                  y="86"
                  width="228"
                  height="228"
                  rx="24"
                  stroke="#0284c7"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  opacity="0.6"
                />

                {/* Concentric Tech Data Octagon */}
                <polygon
                  points="140,100 260,100 300,140 300,260 260,300 140,300 100,260 100,140"
                  stroke="#38bdf8"
                  strokeWidth="1.2"
                  strokeOpacity="0.4"
                  fill="none"
                />

                {/* Microchip Bus Terminals / Connection Pins */}
                {/* Top Pins */}
                {[110, 140, 170, 200, 230, 260, 290].map((x) => (
                  <g key={`top-pin-${x}`}>
                    <line x1={x} y1="70" x2={x} y2="52" stroke="#38bdf8" strokeWidth="1.5" opacity="0.8" />
                    <circle cx={x} cy="52" r="2" fill="#38bdf8" />
                  </g>
                ))}
                {/* Bottom Pins */}
                {[110, 140, 170, 200, 230, 260, 290].map((x) => (
                  <g key={`bottom-pin-${x}`}>
                    <line x1={x} y1="330" x2={x} y2="348" stroke="#38bdf8" strokeWidth="1.5" opacity="0.8" />
                    <circle cx={x} cy="348" r="2" fill="#38bdf8" />
                  </g>
                ))}
                {/* Left Pins */}
                {[110, 140, 170, 200, 230, 260, 290].map((y) => (
                  <g key={`left-pin-${y}`}>
                    <line x1="70" y1={y} x2="52" y2={y} stroke="#38bdf8" strokeWidth="1.5" opacity="0.8" />
                    <circle cx="52" cy={y} r="2" fill="#38bdf8" />
                  </g>
                ))}
                {/* Right Pins */}
                {[110, 140, 170, 200, 230, 260, 290].map((y) => (
                  <g key={`right-pin-${y}`}>
                    <line x1="330" y1={y} x2="348" y2={y} stroke="#38bdf8" strokeWidth="1.5" opacity="0.8" />
                    <circle cx="348" cy={y} r="2" fill="#38bdf8" />
                  </g>
                ))}

                {/* 2. PCB Circuit Bus Branches Spreading Outward */}
                {/* Branch to Top-Right (Connecting to Balloon 1) */}
                <path
                  d="M 290 110 L 330 70 L 370 70"
                  stroke="#0099ff"
                  strokeWidth="1.5"
                  fill="none"
                />
                <circle cx="370" cy="70" r="3" fill="#38bdf8" />

                {/* Branch to Bottom-Left (Connecting to Balloon 2) */}
                <path
                  d="M 110 290 L 70 330 L 25 330"
                  stroke="#0099ff"
                  strokeWidth="1.5"
                  fill="none"
                />
                <circle cx="25" cy="330" r="3" fill="#38bdf8" />

                {/* Branch to Bottom-Right (Connecting to Balloon 3) */}
                <path
                  d="M 290 290 L 330 330 L 375 330"
                  stroke="#0099ff"
                  strokeWidth="1.5"
                  fill="none"
                />
                <circle cx="375" cy="330" r="3" fill="#38bdf8" />

                {/* Branch to Left Edge */}
                <path
                  d="M 70 200 L 30 200 L 10 180"
                  stroke="#0284c7"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.7"
                />
                <circle cx="10" cy="180" r="2.5" fill="#38bdf8" />

                {/* Branch to Top Edge */}
                <path
                  d="M 200 70 L 200 30 L 180 10"
                  stroke="#0284c7"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.7"
                />
                <circle cx="180" cy="10" r="2.5" fill="#38bdf8" />

                {/* 3. Concentric Inner Energy Core Ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="75"
                  stroke="#0099ff"
                  strokeWidth="1"
                  strokeDasharray="8 12"
                  opacity="0.5"
                />

                {/* Traveling Data Bits on Motherboard */}
                <g>
                  <circle r="3" fill="#38BDF8">
                    <animateMotion
                      path="M 200 200 L 290 110 L 330 70 L 370 70"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="1.5" fill="#ffffff">
                    <animateMotion
                      path="M 200 200 L 290 110 L 330 70 L 370 70"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
                <g>
                  <circle r="3" fill="#38BDF8">
                    <animateMotion
                      path="M 200 200 L 110 290 L 70 330 L 25 330"
                      dur="3.4s"
                      repeatCount="indefinite"
                      begin="1s"
                    />
                  </circle>
                  <circle r="1.5" fill="#ffffff">
                    <animateMotion
                      path="M 200 200 L 110 290 L 70 330 L 25 330"
                      dur="3.4s"
                      repeatCount="indefinite"
                      begin="1s"
                    />
                  </circle>
                </g>
              </svg>
            </motion.div>

            {/* 
              ======================================================================
              NÚCLEO COM CLARÃO EM AZUL & REPOSITÓRIO DA LOGO:
              O Clarão em Azul elétrico atua como a fonte de energia luminosa central.
              ======================================================================
            */}
            <motion.div
              initial={{ opacity: 0, scale: 0.1 }}
              animate={
                isCoreIgnited
                  ? { opacity: 1, scale: [0.1, 1.15, 1] }
                  : { opacity: 0, scale: 0.1 }
              }
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex items-center justify-center"
            >
              <BlueCoreFlare />
              {/* Efeito de partículas quânticas/tecnológicas sutis emanando do núcleo */}
              <CoreFloatingParticles />
            </motion.div>

            {/* ======================================================================= */}
            {/* FLOATING BALLOON 1 (TOP-RIGHT): "ESPECIALISTAS EM"                      */}
            {/* ======================================================================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 25 }}
              animate={
                isContentRevealed
                  ? {
                      opacity: 1,
                      scale: 1,
                      y: [0, -10, 0],
                      x: [0, 4, 0],
                    }
                  : { opacity: 0, scale: 0.8, y: 25 }
              }
              transition={
                isContentRevealed
                  ? {
                      opacity: { duration: 0.7 },
                      scale: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                      y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
                      x: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
                    }
                  : { duration: 0.2 }
              }
              className={`absolute -top-2 sm:top-4 right-0 sm:right-4 z-20 scale-[0.85] sm:scale-100 origin-top-right ${
                !isContentRevealed ? 'pointer-events-none' : ''
              }`}
            >
              <div className="p-3.5 sm:p-5 rounded-2xl bg-[#090e1c]/90 border border-slate-800/90 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.8)] max-w-[190px] sm:max-w-[230px]">
                <span className="text-[9px] sm:text-[11px] font-bold text-[#0099ff] tracking-[0.16em] uppercase font-rajdhani block">
                  ESPECIALISTAS EM
                </span>
                <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-sm font-medium text-slate-200 leading-snug">
                  tecnologia com propósito e performance.
                </p>
                <div className="mt-2 sm:mt-2.5 flex justify-end">
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0099ff] fill-[#0099ff]/30 drop-shadow-[0_0_6px_#0099ff]" />
                </div>
              </div>
            </motion.div>

            {/* ======================================================================= */}
            {/* FLOATING BALLOON 2 (BOTTOM-LEFT): "EXPERIÊNCIA +7 ANOS"                 */}
            {/* ======================================================================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 25 }}
              animate={
                isContentRevealed
                  ? {
                      opacity: 1,
                      scale: 1,
                      y: [0, 8, 0],
                      x: [0, -4, 0],
                    }
                  : { opacity: 0, scale: 0.8, y: 25 }
              }
              transition={
                isContentRevealed
                  ? {
                      opacity: { duration: 0.7, delay: 0.15 },
                      scale: { duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
                      y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
                      x: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 },
                    }
                  : { duration: 0.2 }
              }
              className={`absolute -bottom-2 sm:bottom-4 left-0 sm:left-4 z-20 scale-[0.85] sm:scale-100 origin-bottom-left ${
                !isContentRevealed ? 'pointer-events-none' : ''
              }`}
            >
              <div className="p-3.5 sm:p-5 rounded-2xl bg-[#090e1c]/90 border border-slate-800/90 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.8)] min-w-[150px] sm:min-w-[190px]">
                <span className="text-[9px] sm:text-[11px] font-bold text-[#0099ff] tracking-[0.16em] uppercase font-rajdhani block">
                  EXPERIÊNCIA
                </span>
                <div className="mt-1 sm:mt-1.5 text-lg sm:text-2xl font-extrabold text-white font-heading tracking-tight">
                  +7 ANOS
                </div>
                <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-slate-400 leading-snug">
                  entregando soluções digitais
                </p>
              </div>
            </motion.div>

            {/* ======================================================================= */}
            {/* FLOATING BALLOON 3 (BOTTOM-RIGHT): "FOCO EM"                            */}
            {/* ======================================================================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 25 }}
              animate={
                isContentRevealed
                  ? {
                      opacity: 1,
                      scale: 1,
                      y: [0, -8, 0],
                      x: [0, -3, 0],
                    }
                  : { opacity: 0, scale: 0.8, y: 25 }
              }
              transition={
                isContentRevealed
                  ? {
                      opacity: { duration: 0.7, delay: 0.3 },
                      scale: { duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
                      y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
                      x: { duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 },
                    }
                  : { duration: 0.2 }
              }
              className={`hidden sm:block absolute bottom-0 sm:bottom-4 right-0 sm:right-4 z-20 scale-[0.85] sm:scale-100 origin-bottom-right ${
                !isContentRevealed ? 'pointer-events-none' : ''
              }`}
            >
              <div className="p-4 sm:p-5 rounded-2xl bg-[#090e1c]/90 border border-slate-800/90 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.8)] min-w-[175px] sm:min-w-[195px]">
                <span className="text-[10px] sm:text-[11px] font-bold text-[#0099ff] tracking-[0.16em] uppercase font-rajdhani block">
                  FOCO EM
                </span>
                <ul className="mt-2.5 space-y-1 text-xs text-slate-300 font-medium">
                  <li className="flex items-center gap-1.5">
                    <span className="text-slate-500">•</span>
                    <span>Desenvolvimento</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-slate-500">•</span>
                    <span>Infraestrutura</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-slate-500">•</span>
                    <span>Cloud & DevOps</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-slate-500">•</span>
                    <span>Segurança</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-slate-500">•</span>
                    <span>Suporte & TI</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
