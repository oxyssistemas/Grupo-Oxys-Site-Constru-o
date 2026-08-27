import React from 'react';
import { CompanyId } from '../types';
import { BRAND_CONFIG } from '../config/brandAssets';

interface CompanyImageSlotProps {
  companyId: CompanyId;
  companyName: string;
  number: string;
}

export const CompanyImageSlot: React.FC<CompanyImageSlotProps> = ({
  companyId,
  companyName,
  number,
}) => {
  const customImg = BRAND_CONFIG.COMPANY_CARD_IMAGES?.[companyId];

  // 1. Se o usuário já adicionou a imagem (via brandAssets.ts ou import), exibe a imagem
  if (customImg && customImg.trim() !== '') {
    return (
      <div className="w-full h-full relative overflow-hidden rounded-t-[20px] bg-[#050a16]">
        <img
          src={customImg}
          alt={companyName}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b18] via-transparent to-transparent pointer-events-none opacity-80" />
        {/* Numeração no canto inferior esquerdo */}
        <span className="absolute bottom-2.5 left-3 text-xs font-mono text-slate-400 font-medium tracking-wider z-10 drop-shadow-md">
          {number}
        </span>
      </div>
    );
  }

  // 2. Imagem VAZIA (conforme solicitado pelo usuário, para adicionar depois no código)
  return (
    <div className="w-full h-full relative overflow-hidden rounded-t-[20px] bg-gradient-to-b from-[#060c1c] via-[#040814] to-[#060b18] flex items-center justify-center select-none">
      {/* Luz ambiente sutil de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(14,165,233,0.06),transparent_70%)] pointer-events-none" />

      {/* Grid técnico discreto no fundo da área vazia */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e1a33_1px,transparent_1px),linear-gradient(to_bottom,#0e1a33_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20 pointer-events-none" />

      {/* Numeração no canto inferior esquerdo exatamente como na referência */}
      <span className="absolute bottom-2.5 left-3 text-xs font-mono text-slate-400 font-medium tracking-wider z-10 drop-shadow-md">
        {number}
      </span>
    </div>
  );
};
