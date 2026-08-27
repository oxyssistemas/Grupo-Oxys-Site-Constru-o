import React from 'react';
import { motion } from 'motion/react';
import { GlitchHeading } from './GlitchHeading';

export const ServicesTechSection: React.FC = () => {
  return (
    <section id="servicos" className="relative py-12 sm:py-16 bg-[#02050e] overflow-hidden scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-sky-500/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 
          ========================================================================
          CONTAINER PRINCIPAL:
          - Borda arredondada suave
          - Fundo escuro com degradê
          - Distribuição equilibrada com espaçamento perfeito
          ========================================================================
        */}
        <motion.div
          initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.15, margin: '-50px 0px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative rounded-[28px] bg-gradient-to-b from-[#060d1e] via-[#040816] to-[#030612] border border-[#14223b] shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-6 sm:p-8 lg:p-8 xl:p-10 overflow-hidden"
        >
          {/* Luz interna suave no topo do card */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-sky-500/40 to-transparent pointer-events-none" />
          
          <div className="flex flex-col xl:flex-row gap-10 xl:gap-8 items-start">
            
            {/* 
              ====================================================================
              BLOCO ESQUERDA & CENTRO: SERVIÇOS (Título + Globo + 4 Colunas)
              ====================================================================
            */}
            <div className="flex-1 w-full flex flex-col gap-6 min-w-0">
              
              {/* Label de Seção */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#00b4d8] uppercase"
              >
                SERVIÇOS
              </motion.div>

              {/* Flex horizontal: Headline/Planeta à esquerda + 4 Colunas com espaçamento amplo */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-7 items-start w-full">
                
                {/* 1. Headline + Planeta Holográfico Flutuante com Anéis Orbitais Animados */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="w-full lg:w-56 xl:w-60 shrink-0 flex flex-col justify-between space-y-4"
                >
                  <GlitchHeading
                    as="h2"
                    text="Soluções completas de TI para o seu negócio."
                    className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight"
                  />

                  {/* Planeta Flutuante com Anéis em Movimento Orbital 3D Fiel à Posição Original */}
                  <div className="relative w-36 h-36 mx-auto lg:mx-0 mt-1 flex items-center justify-center select-none shrink-0">
                    
                    {/* Brilho de Fundo Pulsante do Planeta */}
                    <motion.div
                      animate={{
                        scale: [1, 1.12, 1],
                        opacity: [0.3, 0.55, 0.3],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute inset-0 bg-sky-500/20 blur-2xl rounded-full pointer-events-none"
                    />

                    {/* Container do Globo com Animação de Levitação Fluida */}
                    <motion.div
                      animate={{
                        y: [-4, 5, -4],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="relative w-full h-full flex items-center justify-center"
                    >
                      {/* SVG do Planeta com Anéis na Posição Original Orbitando ao Redor */}
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 160 160">
                        <defs>
                          {/* Gradiente da Esfera Planetária */}
                          <radialGradient id="planetBodyGrad" cx="38%" cy="32%" r="68%">
                            <stop offset="0%" stopColor="#67e8f9" />
                            <stop offset="25%" stopColor="#38bdf8" />
                            <stop offset="55%" stopColor="#1d4ed8" />
                            <stop offset="85%" stopColor="#0f172a" />
                            <stop offset="100%" stopColor="#030712" />
                          </radialGradient>

                          {/* Atmosfera Luminescente */}
                          <radialGradient id="planetAtmosphere" cx="50%" cy="50%" r="50%">
                            <stop offset="78%" stopColor="#00f0ff" stopOpacity="0" />
                            <stop offset="92%" stopColor="#00f0ff" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
                          </radialGradient>

                          {/* Gradiente dos Anéis */}
                          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.2" />
                            <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.9" />
                            <stop offset="50%" stopColor="#93c5fd" stopOpacity="1" />
                            <stop offset="70%" stopColor="#00f0ff" stopOpacity="0.85" />
                            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.2" />
                          </linearGradient>

                          {/* Gradiente do Anel Secundário */}
                          <linearGradient id="ringGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.2" />
                          </linearGradient>
                        </defs>

                        {/* ========================================================================= */}
                        {/* 1. CAMADA TRASEIRA DOS ANÉIS (Atrás do planeta, na posição original)       */}
                        {/* ========================================================================= */}
                        <g transform="rotate(-18 80 85)">
                          {/* Anel 1 Traseiro (Arco Superior) */}
                          <path
                            d="M 6,85 A 74,22 0 0,1 154,85"
                            fill="none"
                            stroke="url(#ringGrad)"
                            strokeWidth="2.4"
                            strokeDasharray="40 15 25 15"
                            className="opacity-70"
                          >
                            <animate
                              attributeName="stroke-dashoffset"
                              from="0"
                              to="320"
                              dur="6s"
                              repeatCount="indefinite"
                            />
                          </path>

                          {/* Anel 2 Traseiro (Arco Superior) */}
                          <path
                            d="M 16,85 A 64,18 0 0,1 144,85"
                            fill="none"
                            stroke="url(#ringGrad2)"
                            strokeWidth="1.4"
                            strokeDasharray="30 20 15 20"
                            className="opacity-55"
                          >
                            <animate
                              attributeName="stroke-dashoffset"
                              from="0"
                              to="280"
                              dur="4.5s"
                              repeatCount="indefinite"
                            />
                          </path>

                          {/* Anel 3 Traseiro Fino */}
                          <path
                            d="M 26,85 A 54,14 0 0,1 134,85"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="1"
                            strokeDasharray="20 15"
                            className="opacity-40"
                          >
                            <animate
                              attributeName="stroke-dashoffset"
                              from="0"
                              to="240"
                              dur="3.5s"
                              repeatCount="indefinite"
                            />
                          </path>
                        </g>

                        {/* ========================================================================= */}
                        {/* 2. ESFERA DO PLANETA                                                      */}
                        {/* ========================================================================= */}
                        <circle cx="80" cy="85" r="41" fill="url(#planetBodyGrad)" />
                        <circle cx="80" cy="85" r="41" fill="url(#planetAtmosphere)" />
                        
                        {/* Faixas de relevo / Atmosfera interna */}
                        <g opacity="0.45">
                          <path
                            d="M48 72 Q 65 62, 86 74 T 114 78"
                            fill="none"
                            stroke="#bae6fd"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M52 92 Q 74 82, 94 94 T 112 98"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M58 106 Q 78 98, 98 108"
                            fill="none"
                            stroke="#0284c7"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </g>

                        {/* Reflexo luminoso superior */}
                        <ellipse cx="68" cy="62" rx="14" ry="7" fill="#ffffff" opacity="0.25" transform="rotate(-30 68 62)" />

                        {/* ========================================================================= */}
                        {/* 3. CAMADA FRONTAL DOS ANÉIS (Na frente do planeta, na posição original)    */}
                        {/* ========================================================================= */}
                        <g transform="rotate(-18 80 85)">
                          {/* Anel 1 Frontal (Arco Inferior com Brilho Intenso Neon) */}
                          <path
                            d="M 154,85 A 74,22 0 0,1 6,85"
                            fill="none"
                            stroke="url(#ringGrad)"
                            strokeWidth="3.2"
                            strokeDasharray="50 15 35 15"
                            className="drop-shadow-[0_0_10px_#00f0ff]"
                          >
                            <animate
                              attributeName="stroke-dashoffset"
                              from="0"
                              to="320"
                              dur="6s"
                              repeatCount="indefinite"
                            />
                          </path>

                          {/* Anel 2 Frontal (Arco Inferior) */}
                          <path
                            d="M 144,85 A 64,18 0 0,1 16,85"
                            fill="none"
                            stroke="url(#ringGrad2)"
                            strokeWidth="1.8"
                            strokeDasharray="40 20 20 20"
                            className="opacity-90 drop-shadow-[0_0_6px_#38bdf8]"
                          >
                            <animate
                              attributeName="stroke-dashoffset"
                              from="0"
                              to="280"
                              dur="4.5s"
                              repeatCount="indefinite"
                            />
                          </path>

                          {/* Anel 3 Frontal Fino */}
                          <path
                            d="M 134,85 A 54,14 0 0,1 26,85"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="1.2"
                            strokeDasharray="25 15"
                            className="opacity-75 drop-shadow-[0_0_4px_#38bdf8]"
                          >
                            <animate
                              attributeName="stroke-dashoffset"
                              from="0"
                              to="240"
                              dur="3.5s"
                              repeatCount="indefinite"
                            />
                          </path>

                          {/* Partícula/Ponto de Luz Orbitando no Anel Principal ao Redor do Planeta */}
                          <circle r="2.8" fill="#ffffff" className="drop-shadow-[0_0_8px_#ffffff]">
                            <animateMotion
                              path="M 6,85 A 74,22 0 1,0 154,85 A 74,22 0 1,0 6,85"
                              dur="6s"
                              repeatCount="indefinite"
                            />
                          </circle>

                          {/* Segunda Partícula de Luz Orbitando no Anel Médio */}
                          <circle r="2" fill="#00f0ff" className="drop-shadow-[0_0_6px_#00f0ff]">
                            <animateMotion
                              path="M 144,85 A 64,18 0 1,0 16,85 A 64,18 0 1,0 144,85"
                              dur="4.5s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        </g>
                      </svg>
                    </motion.div>

                  </div>
                </motion.div>

                {/* 2. As 4 Colunas de Serviços com Espaçamento Amplo e Animação Progressiva */}
                <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-5 lg:gap-5 xl:gap-6 pt-1">
                  
                  {/* Item 1: DESENVOLVIMENTO */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col space-y-2.5 group min-w-0"
                  >
                    {/* Ícone Hexágono Glowing */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center relative mb-0.5">
                      <div className="absolute inset-0 bg-sky-500/20 blur-md rounded-full group-hover:bg-sky-400/40 transition-colors" />
                      <svg className="w-8 h-8 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" viewBox="0 0 32 32" fill="none">
                        <path d="M16 3 L27 9.5 V22.5 L16 29 L5 22.5 V9.5 Z" stroke="#38bdf8" strokeWidth="2" strokeLinejoin="round" fill="#08142b" />
                        <path d="M12 14 L9.5 16.5 L12 19" stroke="#00f0ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 14 L22.5 16.5 L20 19" stroke="#00f0ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 13 L15 20" stroke="#00f0ff" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-[12px] sm:text-[13px] tracking-wider text-white uppercase group-hover:text-sky-300 transition-colors break-words leading-tight">
                      DESENVOLVIMENTO
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                      Sistemas web e mobile sob medida para impulsionar seu negócio.
                    </p>
                  </motion.div>

                  {/* Item 2: INFRAESTRUTURA */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.28 }}
                    className="flex flex-col space-y-2.5 group min-w-0"
                  >
                    {/* Ícone Sunburst/Network Hub */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center relative mb-0.5">
                      <div className="absolute inset-0 bg-sky-500/20 blur-md rounded-full group-hover:bg-sky-400/40 transition-colors" />
                      <svg className="w-8 h-8 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="4.5" stroke="#38bdf8" strokeWidth="2" fill="#08142b" />
                        <path d="M16 4 V9" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
                        <path d="M16 23 V28" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
                        <path d="M4 16 H9" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
                        <path d="M23 16 H28" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
                        <path d="M7.5 7.5 L11 11" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M21 21 L24.5 24.5" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M7.5 24.5 L11 21" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />
                        <path d="M21 11 L24.5 7.5" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-[12px] sm:text-[13px] tracking-wider text-white uppercase group-hover:text-sky-300 transition-colors break-words leading-tight">
                      INFRAESTRUTURA
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                      Ambientes seguros, escaláveis e de alta disponibilidade.
                    </p>
                  </motion.div>

                  {/* Item 3: CLOUD & DEVOPS */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.36 }}
                    className="flex flex-col space-y-2.5 group min-w-0"
                  >
                    {/* Ícone Cog/Flower Gear */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center relative mb-0.5">
                      <div className="absolute inset-0 bg-sky-500/20 blur-md rounded-full group-hover:bg-sky-400/40 transition-colors" />
                      <svg className="w-8 h-8 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" viewBox="0 0 32 32" fill="none">
                        <path
                          d="M16 6 C17 6 18 8 19 8.5 C20.5 9 22.5 8 23.5 9 C24.5 10 23.5 12 24 13.5 C24.5 15 26.5 16 26.5 17 C26.5 18 24.5 19 24 20.5 C23.5 22 24.5 24 23.5 25 C22.5 26 20.5 25 19 25.5 C18 26 17 28 16 28 C15 28 14 26 13 25.5 C11.5 25 9.5 26 8.5 25 C7.5 24 8.5 22 8 20.5 C7.5 19 5.5 18 5.5 17 C5.5 16 7.5 15 8 13.5 C8.5 12 7.5 10 8.5 9 C9.5 8 11.5 9 13 8.5 C14 8 15 6 16 6 Z"
                          stroke="#38bdf8"
                          strokeWidth="1.8"
                          fill="#08142b"
                        />
                        <circle cx="16" cy="17" r="4" stroke="#00f0ff" strokeWidth="2" fill="#040915" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-[12px] sm:text-[13px] tracking-wider text-white uppercase group-hover:text-sky-300 transition-colors break-words leading-tight">
                      CLOUD &<br className="hidden sm:inline" /> DEVOPS
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                      Automação, deploy contínuo e gestão de ambientes cloud.
                    </p>
                  </motion.div>

                  {/* Item 4: SUPORTE & TI */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.44 }}
                    className="flex flex-col space-y-2.5 group min-w-0"
                  >
                    {/* Ícone Gear & Bubble Nodes */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center relative mb-0.5">
                      <div className="absolute inset-0 bg-sky-500/20 blur-md rounded-full group-hover:bg-sky-400/40 transition-colors" />
                      <svg className="w-8 h-8 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" viewBox="0 0 32 32" fill="none">
                        <circle cx="15" cy="16" r="6" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="3 2" fill="#08142b" />
                        <circle cx="15" cy="16" r="3" stroke="#00f0ff" strokeWidth="1.8" />
                        <circle cx="24" cy="11" r="2.5" stroke="#38bdf8" strokeWidth="1.5" fill="#00f0ff" />
                        <circle cx="23" cy="22" r="2" stroke="#38bdf8" strokeWidth="1.5" fill="#38bdf8" />
                        <path d="M20 13.5 L22 12" stroke="#00f0ff" strokeWidth="1.5" />
                        <path d="M19.5 19 L21.5 21" stroke="#00f0ff" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-[12px] sm:text-[13px] tracking-wider text-white uppercase group-hover:text-sky-300 transition-colors break-words leading-tight">
                      SUPORTE &<br className="hidden sm:inline" /> TI
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                      Suporte técnico especializado e gestão de TI.
                    </p>
                  </motion.div>

                </div>

              </div>

            </div>

            {/* 
              ====================================================================
              BLOCO DIREITA: TECNOLOGIAS (Grid 4x2 com os 8 Logos Exatos)
              - Espaçamento amplo
              - Textos contidos 100% dentro dos quadros sem transbordar
              ====================================================================
            */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full xl:w-[330px] 2xl:w-[350px] shrink-0 flex flex-col gap-4 xl:border-l xl:border-slate-800/80 xl:pl-8 pt-6 xl:pt-0 border-t xl:border-t-0 border-slate-800/60"
            >
              
              {/* Label de Seção */}
              <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#00b4d8] uppercase">
                TECNOLOGIAS
              </div>

              {/* Grid 4 Colunas x 2 Linhas dos Cards Tecnológicos */}
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
                
                {/* 1. React */}
                <div className="flex flex-col items-center justify-center p-2 rounded-2xl bg-[#091122]/90 border border-slate-800 hover:border-sky-500/60 hover:bg-[#0d1830] transition-all group min-w-0 h-[76px] sm:h-[80px]">
                  <div className="w-7 h-7 flex items-center justify-center text-sky-400 shrink-0">
                    <svg className="w-6 h-6 animate-[spin_10s_linear_infinite]" viewBox="0 0 115.3 100" fill="none">
                      <ellipse cx="57.65" cy="50" rx="16.5" ry="46" transform="rotate(30 57.65 50)" stroke="#00d8ff" strokeWidth="6" />
                      <ellipse cx="57.65" cy="50" rx="16.5" ry="46" transform="rotate(90 57.65 50)" stroke="#00d8ff" strokeWidth="6" />
                      <ellipse cx="57.65" cy="50" rx="16.5" ry="46" transform="rotate(150 57.65 50)" stroke="#00d8ff" strokeWidth="6" />
                      <circle cx="57.65" cy="50" r="7.5" fill="#00d8ff" />
                    </svg>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-medium text-slate-300 mt-1 text-center w-full truncate px-0.5">
                    React
                  </span>
                </div>

                {/* 2. Next.js */}
                <div className="flex flex-col items-center justify-center p-2 rounded-2xl bg-[#091122]/90 border border-slate-800 hover:border-sky-500/60 hover:bg-[#0d1830] transition-all group min-w-0 h-[76px] sm:h-[80px]">
                  <div className="w-7 h-7 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 180 180" fill="none">
                      <mask id="nextMask" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                        <circle cx="90" cy="90" r="90" fill="black" />
                      </mask>
                      <g mask="url(#nextMask)">
                        <circle cx="90" cy="90" r="90" fill="#000000" stroke="#333333" strokeWidth="6" />
                        <path d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.141 149.508 157.438Z" fill="white" />
                        <rect x="115" y="54" width="12" height="72" fill="white" />
                      </g>
                    </svg>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-medium text-slate-300 mt-1 text-center w-full truncate px-0.5">
                    Next.js
                  </span>
                </div>

                {/* 3. Node.js */}
                <div className="flex flex-col items-center justify-center p-2 rounded-2xl bg-[#091122]/90 border border-slate-800 hover:border-sky-500/60 hover:bg-[#0d1830] transition-all group min-w-0 h-[76px] sm:h-[80px]">
                  <div className="w-7 h-7 flex items-center justify-center text-emerald-400 shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                      <path d="M16 3 L27 9.5 V22.5 L16 29 L5 22.5 V9.5 Z" stroke="#22c55e" strokeWidth="2" fill="#0c2014" />
                      <path d="M11 19 V13 L16 16 V22 L11 19 Z" fill="#22c55e" />
                      <path d="M21 19 V13 L16 16 V22 L21 19 Z" fill="#4ade80" />
                    </svg>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-medium text-slate-300 mt-1 text-center w-full truncate px-0.5">
                    Node.js
                  </span>
                </div>

                {/* 4. TypeScript (Sem vazamento de texto) */}
                <div className="flex flex-col items-center justify-center p-2 rounded-2xl bg-[#091122]/90 border border-slate-800 hover:border-sky-500/60 hover:bg-[#0d1830] transition-all group min-w-0 h-[76px] sm:h-[80px]">
                  <div className="w-7 h-7 rounded-md bg-[#007acc] flex items-center justify-center shadow-sm shrink-0">
                    <span className="font-mono font-bold text-xs text-white tracking-tighter">
                      TS
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] md:text-[10.5px] font-medium text-slate-300 mt-1 text-center w-full tracking-tighter truncate px-0.5">
                    TypeScript
                  </span>
                </div>

                {/* 5. Tailwind */}
                <div className="flex flex-col items-center justify-center p-2 rounded-2xl bg-[#091122]/90 border border-slate-800 hover:border-sky-500/60 hover:bg-[#0d1830] transition-all group min-w-0 h-[76px] sm:h-[80px]">
                  <div className="w-7 h-7 flex items-center justify-center text-sky-400 shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#38bdf8">
                      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
                    </svg>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-medium text-slate-300 mt-1 text-center w-full truncate px-0.5">
                    Tailwind
                  </span>
                </div>

                {/* 6. PostgreSQL (Sem vazamento de texto) */}
                <div className="flex flex-col items-center justify-center p-2 rounded-2xl bg-[#091122]/90 border border-slate-800 hover:border-sky-500/60 hover:bg-[#0d1830] transition-all group min-w-0 h-[76px] sm:h-[80px]">
                  <div className="w-7 h-7 flex items-center justify-center text-slate-300 shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                      <path
                        d="M16 6 C12 6 9 9 9 13 C9 17 11 20 13 22 L13 26 C13 26.5 13.5 27 14 27 L16 27 C16.5 27 17 26.5 17 26 L17 23 C19 23 23 21 23 16 C23 10 19 6 16 6 Z"
                        stroke="#94a3b8"
                        strokeWidth="1.8"
                        fill="#1e293b"
                      />
                      <circle cx="13.5" cy="12.5" r="1" fill="#38bdf8" />
                      <path d="M17 15 Q 19 16, 21 14" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-[9px] sm:text-[10px] md:text-[10.5px] font-medium text-slate-300 mt-1 text-center w-full tracking-tighter truncate px-0.5">
                    PostgreSQL
                  </span>
                </div>

                {/* 7. AWS */}
                <div className="flex flex-col items-center justify-center p-2 rounded-2xl bg-[#091122]/90 border border-slate-800 hover:border-sky-500/60 hover:bg-[#0d1830] transition-all group min-w-0 h-[76px] sm:h-[80px]">
                  <div className="w-7 h-7 flex flex-col items-center justify-center text-white shrink-0">
                    <span className="font-bold text-[10px] tracking-tight leading-none text-slate-100">
                      aws
                    </span>
                    {/* Smile / Arrow */}
                    <svg className="w-5 h-2 mt-0.5" viewBox="0 0 24 8" fill="none">
                      <path d="M2 3 Q 12 9, 22 2" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                      <path d="M19 1 L22 2 L20 4.5" fill="#f59e0b" />
                    </svg>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-medium text-slate-300 mt-1 text-center w-full truncate px-0.5">
                    AWS
                  </span>
                </div>

                {/* 8. Docker */}
                <div className="flex flex-col items-center justify-center p-2 rounded-2xl bg-[#091122]/90 border border-slate-800 hover:border-sky-500/60 hover:bg-[#0d1830] transition-all group min-w-0 h-[76px] sm:h-[80px]">
                  <div className="w-7 h-7 flex items-center justify-center text-sky-400 shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      {/* Containers */}
                      <rect x="5" y="8" width="2.5" height="2" fill="#0ea5e9" rx="0.3" />
                      <rect x="8.5" y="8" width="2.5" height="2" fill="#0ea5e9" rx="0.3" />
                      <rect x="12" y="8" width="2.5" height="2" fill="#0ea5e9" rx="0.3" />
                      <rect x="8.5" y="5.5" width="2.5" height="2" fill="#0ea5e9" rx="0.3" />
                      <rect x="12" y="5.5" width="2.5" height="2" fill="#0ea5e9" rx="0.3" />
                      {/* Whale Body */}
                      <path
                        d="M2 13 C2 13 3.5 11 6.5 11 C8 11 15 11 18 13 C20 14.5 21 13 22 12 C21.5 15.5 18 18 13 18 C7 18 3 15 2 13 Z"
                        fill="#0284c7"
                      />
                      <circle cx="5" cy="14" r="0.6" fill="white" />
                    </svg>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-medium text-slate-300 mt-1 text-center w-full truncate px-0.5">
                    Docker
                  </span>
                </div>

              </div>

            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};
