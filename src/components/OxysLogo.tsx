import React from 'react';
import { BRAND_CONFIG } from '../config/brandAssets';

interface OxysLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  // Permite passar diretamente uma URL de imagem de logo customizada se desejar
  logoSrc?: string;
}

export const OxysLogo: React.FC<OxysLogoProps> = ({
  className = '',
  size = 'md',
  logoSrc,
  variant = 'header'
}: OxysLogoProps & { variant?: 'header' | 'footer' }) => {
  // Pega a logo passada por prop ou a configurada no repositório BRAND_CONFIG
  const configuredLogo = variant === 'footer' 
    ? (BRAND_CONFIG.FOOTER_LOGO_SRC || BRAND_CONFIG.HEADER_LOGO_SRC)
    : BRAND_CONFIG.HEADER_LOGO_SRC;

  const activeLogo = logoSrc !== undefined ? logoSrc : configuredLogo;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Imagem da logo quando informada no repositório /src/config/brandAssets.ts */}
      {activeLogo ? (
        <img
          src={activeLogo}
          alt={`${BRAND_CONFIG.BRAND_NAME} Logo`}
          className={`${
            size === 'sm'
              ? 'h-7 sm:h-8 w-auto max-w-[140px]'
              : size === 'lg'
              ? 'h-12 sm:h-14 w-auto max-w-[220px]'
              : 'h-9 sm:h-10 w-auto max-w-[170px]'
          } object-contain filter drop-shadow-[0_2px_10px_rgba(0,140,255,0.4)]`}
        />
      ) : null}

      {/* Tipografia Oxys Sistemas | TI (mantida com visual cromado) */}
      <div className="flex flex-col justify-center">
        <span className="font-orbitron font-extrabold text-[22px] tracking-[0.14em] leading-none text-chrome">
          {BRAND_CONFIG.BRAND_NAME}
        </span>
        <span className="font-rajdhani font-semibold text-[10px] tracking-[0.26em] text-slate-400 uppercase mt-1 leading-none">
          {BRAND_CONFIG.BRAND_SUBTITLE}
        </span>
      </div>
    </div>
  );
};
