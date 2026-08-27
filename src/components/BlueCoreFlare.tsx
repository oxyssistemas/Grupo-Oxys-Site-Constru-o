import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, Image as ImageIcon, X, Sparkles, RefreshCw } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brandAssets';

interface BlueCoreFlareProps {
  logoSrc?: string;
  onImageChange?: (newSrc: string) => void;
}

export const BlueCoreFlare: React.FC<BlueCoreFlareProps> = ({ logoSrc, onImageChange }) => {
  // Pega a imagem inicial da prop ou da configuração global
  const defaultImage = logoSrc !== undefined ? logoSrc : BRAND_CONFIG.HERO_CORE_LOGO_SRC;
  const [uploadedImage, setUploadedImage] = useState<string | null>(defaultImage || null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activeImage = uploadedImage || defaultImage;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setUploadedImage(result);
        if (onImageChange) onImageChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setUploadedImage(result);
        if (onImageChange) onImageChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (onImageChange) onImageChange('');
  };

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
        ESPAÇO / DOCK PARA IMAGEM / LOGO EM CIMA DO NÚCLEO DA HERO:
        Permite arrastar e soltar (drag & drop), selecionar do computador,
        ou carregar via `BRAND_CONFIG.HERO_CORE_LOGO_SRC`
        ========================================================================
      */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="hero-core-image-upload"
      />

      <div className="relative z-20 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {activeImage ? (
            /* Imagem Carregada sobre o Núcleo */
            <motion.div
              key="active-core-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative w-full h-full flex items-center justify-center group"
            >
              {/* Imagem Central com Efeito Flutuante e Glow Ampliado */}
              <motion.img
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                src={activeImage}
                alt={`${BRAND_CONFIG.BRAND_NAME} Hero Core Visual`}
                referrerPolicy="no-referrer"
                className="max-w-[95%] max-h-[95%] object-contain filter drop-shadow-[0_12px_45px_rgba(0,140,255,0.85)] drop-shadow-[0_0_35px_rgba(56,189,248,0.7)] select-none"
              />

              {/* Botões de Ação ao passar o mouse sobre a imagem */}
              <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-3xl">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3.5 py-2 rounded-lg bg-sky-600/90 hover:bg-sky-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-sky-950/50 backdrop-blur-md transition-all cursor-pointer"
                  title="Trocar Imagem"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Trocar
                </button>
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="p-2 rounded-lg bg-rose-600/90 hover:bg-rose-500 text-white text-xs font-semibold shadow-lg shadow-rose-950/50 backdrop-blur-md transition-all cursor-pointer"
                  title="Remover Imagem"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ) : (
            /* Espaço / Dock Holográfico Pronto para Inserir a Imagem */
            <motion.div
              key="empty-core-dock"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => fileInputRef.current?.click()}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`w-56 sm:w-64 lg:w-72 h-56 sm:h-64 lg:h-72 rounded-2xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-5 text-center cursor-pointer group backdrop-blur-sm relative ${
                isDragging
                  ? 'border-[#00f0ff] bg-[#00f0ff]/15 scale-105 shadow-[0_0_30px_rgba(0,240,255,0.4)]'
                  : 'border-sky-400/40 hover:border-[#00f0ff] bg-[#050b18]/60 hover:bg-[#08152c]/70 shadow-[0_0_25px_rgba(0,140,255,0.2)] hover:shadow-[0_0_35px_rgba(0,240,255,0.4)]'
              }`}
            >
              {/* Cantos Tecnológicos Holográficos */}
              <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#00f0ff] opacity-80" />
              <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#00f0ff] opacity-80" />
              <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#00f0ff] opacity-80" />
              <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#00f0ff] opacity-80" />

              {/* Ícone com Pulso de Energia */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/30 to-sky-400/20 border border-sky-400/40 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-[#00f0ff] transition-all shadow-[0_0_15px_rgba(0,140,255,0.3)]">
                <Upload className="w-7 h-7 text-[#00f0ff] group-hover:text-white transition-colors animate-pulse" />
              </div>

              {/* Textos Informativos */}
              <span className="text-xs sm:text-sm font-bold text-sky-200 group-hover:text-[#00f0ff] tracking-wider uppercase font-rajdhani flex items-center gap-1 transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
                Inserir Imagem / Logo
              </span>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-tight group-hover:text-slate-200 transition-colors">
                Clique ou arraste sua logo aqui
              </p>
              <span className="text-[10px] text-sky-400/60 mt-1.5 font-mono">
                PNG, SVG, JPG ou WebP
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
