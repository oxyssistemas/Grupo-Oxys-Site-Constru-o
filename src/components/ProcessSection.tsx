import React from 'react';
import { motion } from 'motion/react';
import { PortalAnimation } from './PortalAnimation';
import { GlitchHeading } from './GlitchHeading';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const ProcessSection: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'ENTENDER',
      description: 'Entendemos seu negócio, desafios e objetivos.',
      icon: (
        <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          {/* Monitor / Board with chart and magnifying discovery */}
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" />
          <path d="M8 21h8" strokeLinecap="round" />
          <path d="M12 17v4" strokeLinecap="round" />
          <path d="M6 8l3 3 3-2 5 4" stroke="#00f0ff" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="17" cy="13" r="1.5" fill="#00f0ff" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'PLANEJAR',
      description: 'Planejamos a melhor estratégia e definimos o caminho.',
      icon: (
        <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          {/* Pen / Drafting Blueprint */}
          <path d="M12 19l7-7 3 3-7 7-3-3z" stroke="currentColor" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18" stroke="#00f0ff" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="9" r="2" stroke="currentColor" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'DESENVOLVER',
      description: 'Construímos soluções com tecnologia e boas práticas.',
      icon: (
        <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          {/* Code block / Dev icon */}
          <path d="M7 8l-4 4 4 4" stroke="#00f0ff" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 8l4 4-4 4" stroke="#00f0ff" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 4l-4 16" stroke="currentColor" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1.5" fill="#00f0ff" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'VALIDAR',
      description: 'Testamos, validamos e garantimos qualidade em cada detalhe.',
      icon: (
        <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          {/* Double validation node / QA */}
          <circle cx="8" cy="12" r="4" stroke="currentColor" />
          <circle cx="16" cy="12" r="4" stroke="currentColor" />
          <path d="M6.5 12l1 1 2-2" stroke="#00f0ff" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.5 12l1 1 2-2" stroke="#00f0ff" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 8a4 4 0 0 1 0 8" stroke="#00f0ff" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'ENTREGAR',
      description: 'Entregamos com suporte e acompanhamento contínuo.',
      icon: (
        <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          {/* Starburst / Quantum butterfly release */}
          <path d="M12 2v20M2 12h20" stroke="currentColor" strokeLinecap="round" />
          <path d="M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" stroke="#00f0ff" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3" fill="#00f0ff" fillOpacity="0.4" stroke="#00f0ff" strokeWidth="1.5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="processos" className="relative py-12 sm:py-16 bg-[#02050e] overflow-hidden scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Container Principal do Card de Processo */}
        <motion.div
          id="process-card-container"
          initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.15, margin: '-50px 0px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative rounded-[28px] bg-gradient-to-b from-[#060d1e] via-[#040816] to-[#030612] border border-[#14223b] shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-6 sm:p-8 lg:p-10 overflow-hidden"
        >
          {/* Luz interna suave no topo do card */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-sky-500/40 to-transparent pointer-events-none" />

          {/* Cabeçalho */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10 sm:mb-12"
          >
            <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#00b4d8] uppercase mb-2">
              NOSSO PROCESSO
            </div>
            <GlitchHeading
              as="h2"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight"
            >
              Do planejamento à entrega,<br />
              com foco em <span className="text-[#00b4d8]">resultado.</span>
            </GlitchHeading>
          </motion.div>

          {/* Layout Principal: 5 Etapas à Esquerda + Portal 3D à Direita */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 items-center">
            
            {/* Grid dos 5 Passos com Linhas de Conexão */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 lg:gap-3 relative">
                
                {steps.map((step, idx) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: 0.15 + idx * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="flex flex-col items-start relative group"
                  >
                    
                    {/* Linha Conectora com seta (apenas em telas grandes entre os passos) */}
                    {idx < steps.length - 1 && (
                      <div className="hidden lg:flex items-center absolute top-7 left-[56px] w-[calc(100%-40px)] z-0 pointer-events-none">
                        <div className="h-[1.5px] w-full bg-gradient-to-r from-sky-500/70 via-sky-400/40 to-sky-500/70 relative">
                          {/* Partícula de Luz animada ao longo da linha */}
                          <motion.div
                            animate={{ x: ['0%', '100%'], opacity: [0, 1, 0] }}
                            transition={{
                              duration: 2.2,
                              repeat: Infinity,
                              ease: 'linear',
                              delay: idx * 0.4,
                            }}
                            className="absolute top-[-2px] w-3 h-1.5 rounded-full bg-sky-300 shadow-[0_0_8px_#38bdf8]"
                          />
                        </div>
                        {/* Ponta da Seta */}
                        <svg className="w-3 h-3 text-sky-400 shrink-0 -ml-1" viewBox="0 0 12 12" fill="currentColor">
                          <path d="M4 2L8 6L4 10V2Z" />
                        </svg>
                      </div>
                    )}

                    {/* Botão Circular Luminoso com Ícone */}
                    <div className="relative mb-5 z-10">
                      {/* Glow Exterior */}
                      <div className="absolute -inset-1.5 bg-sky-500/20 rounded-full blur-md group-hover:bg-sky-400/35 transition-all duration-300" />
                      
                      {/* Círculo do Ícone */}
                      <div className="relative w-14 h-14 rounded-full bg-[#071124] border-2 border-sky-500/60 shadow-[0_0_15px_rgba(0,180,216,0.35)] flex items-center justify-center group-hover:border-sky-400 group-hover:shadow-[0_0_22px_rgba(0,240,255,0.6)] transition-all duration-300">
                        {step.icon}
                      </div>
                    </div>

                    {/* Número + Título */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[13px] sm:text-sm font-bold text-[#00b4d8] font-mono tracking-tight">
                        {step.number}
                      </span>
                      <h3 className="text-xs sm:text-[13px] font-bold text-white uppercase tracking-wider group-hover:text-sky-300 transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    {/* Descrição */}
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed max-w-[200px]">
                      {step.description}
                    </p>

                  </motion.div>
                ))}

              </div>
            </div>

            {/* Ilustração do Portal 3D Reduzido Sem Bordas com Neblinas em Expansão */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
              className="w-full sm:w-64 lg:w-72 xl:w-[280px] shrink-0 flex items-center justify-center relative mt-4 lg:mt-0 select-none"
            >
              <PortalAnimation />
            </motion.div>

          </div>

          {/* Neblinas dinâmicas volumétricas que fluem do portal por toda a extensão do site */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            {/* Onda 1 de Neblina Brilhante Deslocando-se pelo topo dos passos */}
            <motion.div
              animate={{
                x: ['30%', '-40%'],
                opacity: [0, 0.4, 0.45, 0],
                scale: [0.8, 1.4],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute right-0 top-1/4 w-[650px] h-[300px] bg-gradient-to-l from-sky-400/25 via-cyan-500/15 to-transparent blur-3xl rounded-full"
            />

            {/* Onda 2 de Neblina Baixa Flutuante sobre o chão */}
            <motion.div
              animate={{
                x: ['20%', '-50%'],
                opacity: [0, 0.35, 0.3, 0],
                scale: [0.9, 1.5],
              }}
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 3,
              }}
              className="absolute right-0 bottom-0 w-[750px] h-[240px] bg-gradient-to-l from-cyan-400/20 via-blue-500/10 to-transparent blur-3xl rounded-full"
            />

            {/* Onda 3 de Névoa Celestial Central */}
            <motion.div
              animate={{
                x: ['10%', '-60%'],
                opacity: [0, 0.25, 0],
                scale: [1, 1.6],
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 6,
              }}
              className="absolute right-10 top-1/2 -translate-y-1/2 w-[600px] h-[280px] bg-gradient-to-l from-[#00f0ff]/15 via-sky-600/10 to-transparent blur-[80px] rounded-full"
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
};
