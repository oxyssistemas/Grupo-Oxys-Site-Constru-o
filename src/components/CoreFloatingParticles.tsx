import React, { useMemo } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  initialX: number;
  initialY: number;
  targetX: number;
  targetY: number;
  size: number;
  color: string;
  glowColor: string;
  duration: number;
  delay: number;
  blur: number;
  pulseDuration: number;
}

export const CoreFloatingParticles: React.FC = () => {
  // Gerar partículas determinísticas bem distribuídas ao redor do núcleo
  const particles = useMemo<Particle[]>(() => {
    const colors = [
      { color: '#00f0ff', glow: 'rgba(0, 240, 255, 0.8)' },
      { color: '#38bdf8', glow: 'rgba(56, 189, 248, 0.7)' },
      { color: '#60a5fa', glow: 'rgba(96, 165, 250, 0.6)' },
      { color: '#e0f2fe', glow: 'rgba(224, 242, 254, 0.9)' },
    ];

    const count = 12;
    const list: Particle[] = [];

    for (let i = 0; i < count; i++) {
      // Ângulo de dispersão a partir do centro
      const angle = (i / count) * 2 * Math.PI + 0.1;
      const distance = 40 + (i % 4) * 35; // Raio de emanação determinístico
      const colorScheme = colors[i % colors.length];

      list.push({
        id: i,
        initialX: (i % 2 === 0 ? 1 : -1) * 15,
        initialY: (i % 3 === 0 ? 1 : -1) * 15,
        targetX: Math.cos(angle) * distance,
        targetY: Math.sin(angle) * distance - 20,
        size: 2 + (i % 3),
        color: colorScheme.color,
        glowColor: colorScheme.glow,
        duration: 3.2 + (i % 3) * 0.8,
        delay: (i * 0.3) % 2.5,
        blur: 0,
        pulseDuration: 2,
      });
    }

    return list;
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center z-15 transform-gpu">
      {/* Halo de radiação energética sutil em pulso */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-sky-400/15 blur-xl pointer-events-none transform-gpu"
      />

      {/* Onda de expansão de energia quântica periódica */}
      <motion.div
        animate={{
          scale: [0.8, 1.7],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeOut',
          delay: 0.5,
        }}
        className="absolute w-[160px] h-[160px] rounded-full border border-sky-400/30 pointer-events-none transform-gpu"
      />

      {/* Partículas flutuantes individuais otimizadas */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: p.initialX,
            y: p.initialY,
            opacity: 0,
            scale: 0.4,
          }}
          animate={{
            x: [p.initialX, p.targetX * 0.5, p.targetX],
            y: [p.initialY, p.targetY * 0.6, p.targetY],
            opacity: [0, 0.85, 0.6, 0],
            scale: [0.4, 1.1, 0.7, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
          className="absolute rounded-full transform-gpu"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 2.5}px ${p.glowColor}`,
          }}
        />
      ))}
    </div>
  );
};
