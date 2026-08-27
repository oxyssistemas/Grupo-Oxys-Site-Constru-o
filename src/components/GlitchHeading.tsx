import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';

interface GlitchHeadingProps {
  children?: React.ReactNode;
  text?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div';
  className?: string;
  id?: string;
  subtle?: boolean;
}

const GLITCH_CHARS = '01#/_[]{}<>=+*~XYZØΔ';

export const GlitchHeading: React.FC<GlitchHeadingProps> = ({
  children,
  text: propText,
  as: Component = 'h2',
  className = '',
  id,
  subtle = true,
}) => {
  // Se o texto foi passado como prop text ou string simples em children
  const rawText = propText || (typeof children === 'string' ? children : '');
  const [displayText, setDisplayText] = useState<string>(rawText);
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchOffset, setGlitchOffset] = useState<{ x1: number; y1: number; x2: number; y2: number }>({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  });
  const [clipPathStyle, setClipPathStyle] = useState<string>('none');
  const isHoveredRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Atualiza displayText quando rawText mudar
  useEffect(() => {
    if (rawText) {
      setDisplayText(rawText);
    }
  }, [rawText]);

  // Função para executar um ciclo de micro-glitch aleatório e sutil
  const triggerGlitchBurst = useCallback(() => {
    if (!rawText) return;
    setIsGlitching(true);

    const textLength = rawText.length;
    let step = 0;
    const maxSteps = Math.floor(Math.random() * 5) + 6; // 6 a 10 micro-frames (~180-300ms)

    const runStep = () => {
      step++;

      if (step < maxSteps) {
        // 1. Deslocamentos sutis de aberração cromática (-3px a 3px)
        const x1 = (Math.random() - 0.5) * (subtle ? 3 : 5);
        const y1 = (Math.random() - 0.5) * (subtle ? 1.5 : 3);
        const x2 = (Math.random() - 0.5) * (subtle ? -3 : -5);
        const y2 = (Math.random() - 0.5) * (subtle ? -1.5 : -3);
        setGlitchOffset({ x1, y1, x2, y2 });

        // 2. Fatiamento aleatório de clip-path tecnológico horizontal
        const topPercent = Math.floor(Math.random() * 80);
        const heightPercent = Math.floor(Math.random() * 20) + 5;
        setClipPathStyle(`inset(${topPercent}% 0 ${100 - (topPercent + heightPercent)}% 0)`);

        // 3. Scramble de 1 ou 2 caracteres aleatórios
        if (textLength > 3) {
          const chars = rawText.split('');
          const numCorruptions = Math.random() > 0.4 ? 1 : 2;
          for (let i = 0; i < numCorruptions; i++) {
            const randIndex = Math.floor(Math.random() * textLength);
            if (chars[randIndex] !== ' ' && chars[randIndex] !== '\n') {
              chars[randIndex] = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
            }
          }
          setDisplayText(chars.join(''));
        }

        // Próximo micro-frame
        const delay = Math.floor(Math.random() * 25) + 25; // 25ms-50ms por frame
        timeoutRef.current = setTimeout(runStep, delay);
      } else {
        // Restaura estado original cristalino
        setIsGlitching(false);
        setDisplayText(rawText);
        setGlitchOffset({ x1: 0, y1: 0, x2: 0, y2: 0 });
        setClipPathStyle('none');

        // Se ainda estiver hover, agenda um novo micro-glitch aleatório daqui a 2 a 4 segundos
        if (isHoveredRef.current) {
          const nextGlitchDelay = Math.random() * 2500 + 2000;
          timeoutRef.current = setTimeout(() => {
            if (isHoveredRef.current) {
              triggerGlitchBurst();
            }
          }, nextGlitchDelay);
        }
      }
    };

    runStep();
  }, [rawText, subtle]);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    triggerGlitchBurst();
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsGlitching(false);
    if (rawText) setDisplayText(rawText);
    setGlitchOffset({ x1: 0, y1: 0, x2: 0, y2: 0 });
    setClipPathStyle('none');
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  // Se o conteúdo for um nó React complexo (com spans, quebras, tags)
  if (!rawText) {
    return (
      <Component
        id={id}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative inline-block cursor-default select-none group transition-transform duration-200 ${className}`}
      >
        <span className={`transition-all duration-150 ${isGlitching ? 'translate-x-[0.5px] opacity-90' : ''}`}>
          {children}
        </span>
        {isGlitching && (
          <>
            <span
              aria-hidden="true"
              style={{
                transform: `translate(${glitchOffset.x1}px, ${glitchOffset.y1}px)`,
                clipPath: clipPathStyle,
              }}
              className="absolute inset-0 pointer-events-none text-[#00f0ff] opacity-75 mix-blend-screen"
            >
              {children}
            </span>
            <span
              aria-hidden="true"
              style={{
                transform: `translate(${glitchOffset.x2}px, ${glitchOffset.y2}px)`,
                clipPath: clipPathStyle,
              }}
              className="absolute inset-0 pointer-events-none text-[#3b82f6] opacity-75 mix-blend-screen"
            >
              {children}
            </span>
          </>
        )}
      </Component>
    );
  }

  return (
    <Component
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block cursor-default select-none group transition-colors duration-200 ${className}`}
    >
      {/* Camada Principal de Texto */}
      <span
        className={`relative z-10 block transition-transform duration-100 ${
          isGlitching ? 'translate-x-[0.5px]' : ''
        }`}
      >
        {displayText}
      </span>

      {/* Camadas Holográficas de Aberração Cromática e Fatiamento Digital */}
      {isGlitching && (
        <>
          {/* Camada Neon Ciano / Sky */}
          <span
            aria-hidden="true"
            style={{
              transform: `translate(${glitchOffset.x1}px, ${glitchOffset.y1}px)`,
              clipPath: clipPathStyle,
            }}
            className="absolute inset-0 z-0 pointer-events-none select-none text-[#00f0ff] opacity-80 mix-blend-screen"
          >
            {displayText}
          </span>

          {/* Camada Neon Azul Elétrico / Violeta */}
          <span
            aria-hidden="true"
            style={{
              transform: `translate(${glitchOffset.x2}px, ${glitchOffset.y2}px)`,
              clipPath: clipPathStyle,
            }}
            className="absolute inset-0 z-0 pointer-events-none select-none text-[#60a5fa] opacity-80 mix-blend-screen"
          >
            {displayText}
          </span>

          {/* Micro scanline horizontal luminosa */}
          <motion.span
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: [0, 0.9, 0], scaleX: [0.2, 1, 0.4] }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent pointer-events-none z-20"
          />
        </>
      )}
    </Component>
  );
};
