import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CompanyId } from '../types';
import { COMPANIES_DATA } from '../data/companies';
import { CompanyImageSlot } from './CompanyImageSlot';
import { BRAND_CONFIG } from '../config/brandAssets';
import { CircuitConduitBridge } from './CircuitConduitBridge';

interface CompaniesGridProps {
  hoveredCompany?: CompanyId | null;
  onHoverCompany?: (companyId: CompanyId | null) => void;
  onSelectCompany: (companyId: CompanyId) => void;
  onRequestQuoteForCompany: (companyId: CompanyId) => void;
}

// Configuração fiel das 4 caixas conforme o design de referência da imagem
const COMPANY_CARDS_CONFIG: Record<
  CompanyId,
  {
    number: string;
    name: string;
    subtitle: string;
    tags: string[];
  }
> = {
  sistemas: {
    number: '01',
    name: 'OXYS SISTEMAS',
    subtitle: 'Plataforma de Gestão Financeira & ERP',
    tags: ['Web', 'Dashboard', 'Analytics']
  },
  ti: {
    number: '02',
    name: 'OXYS TI',
    subtitle: 'Infraestrutura, Redes & TI Corporativa',
    tags: ['Mobile', 'UI Design', 'Experiência']
  },
  cloud: {
    number: '03',
    name: 'OXYS CLOUD',
    subtitle: 'Arquitetura Multicloud & DevOps',
    tags: ['Web', 'UI Design', 'Performance']
  },
  automacao: {
    number: '04',
    name: 'OXYS AUTOMAÇÃO',
    subtitle: 'Automação Industrial, IoT & RPA',
    tags: ['IoT', 'Dashboard', 'Performance']
  }
};

export const CompaniesGrid: React.FC<CompaniesGridProps> = ({
  hoveredCompany,
  onHoverCompany,
  onSelectCompany,
}) => {
  const handleRedirect = (e: React.MouseEvent, companyId: CompanyId) => {
    e.stopPropagation();
    const url = BRAND_CONFIG.COMPANY_WEBSITES?.[companyId];
    if (url && url !== '#' && url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      onSelectCompany(companyId);
    }
  };

  return (
    <section id="work" className="relative bg-gradient-to-b from-[#02050e] via-[#040a1c] to-[#02050e] pb-24 pt-0 overflow-hidden scroll-mt-12">
      
      {/* Luz volumétrica contínua com degradê suave e fluido */}
      <div className="absolute -top-24 right-1/4 w-[650px] h-[400px] bg-gradient-to-b from-blue-600/12 via-sky-500/6 to-transparent blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-700/8 via-sky-600/4 to-transparent blur-[160px] rounded-full pointer-events-none" />
      
      {/* Grid de continuidade com máscara de transição ultra suave */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-[linear-gradient(to_right,#0e1a33_1px,transparent_1px),linear-gradient(to_bottom,#0e1a33_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.06)_60%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* 
        ========================================================================
        PONTE DE CIRCUITOS: LINHAS QUE SURGEM NO NÚCLEO DO HERO E SE CONECTAM
        DIRETAMENTE ÀS 4 CAIXAS, RIGOROSAMENTE CENTRALIZADAS.
        ========================================================================
      */}
      <CircuitConduitBridge hoveredCompany={hoveredCompany} />

      {/* Grid container das 4 caixas exatamente no design solicitado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {COMPANIES_DATA.map((company, index) => {
            const cardInfo = COMPANY_CARDS_CONFIG[company.id];
            const isHovered = hoveredCompany === company.id;
            const isAnyHovered = hoveredCompany !== null && hoveredCompany !== undefined;

            return (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 32, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.15, margin: '-40px 0px' }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-col items-center w-full h-full"
                onMouseEnter={() => onHoverCompany?.(company.id)}
                onMouseLeave={() => onHoverCompany?.(null)}
              >
                {/* Linha vertical auxiliar para telas mobile/tablet quando a ponte em SVG estiver oculta */}
                <div className="lg:hidden flex flex-col items-center w-full mb-2 pointer-events-none transition-all duration-300">
                  <div
                    className={`w-[2px] h-8 transition-all duration-300 ${
                      isHovered
                        ? 'bg-[#00f0ff] shadow-[0_0_12px_#00f0ff] w-[3px]'
                        : isAnyHovered
                        ? 'bg-blue-900/30'
                        : 'bg-sky-500/60 shadow-[0_0_6px_rgba(56,189,248,0.3)]'
                    }`}
                  />
                  <div className="relative -mt-0.5 flex items-center justify-center">
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-300 flex items-center justify-center ${
                        isHovered
                          ? 'bg-[#00f0ff] shadow-[0_0_14px_#00f0ff] scale-125'
                          : 'bg-sky-400 shadow-[0_0_6px_#38bdf8]'
                      }`}
                    >
                      <div className="w-1 h-1 bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                {/* 
                  ==================================================================
                  CAIXA COM O DESIGN EXATO DA IMAGEM DE REFERÊNCIA:
                  - Topo: Preview Mockup com índice sutil 01, 02... no canto inferior esquerdo
                  - Base: Título em caixa alta, subtítulo elegante, tags e botão circular azul
                  ==================================================================
                */}
                <div
                  id={`company-card-${company.id}`}
                  onClick={() => onSelectCompany(company.id)}
                  className={`w-full h-full group relative rounded-[22px] bg-[#060b18] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.85)] ${
                    isHovered
                      ? 'border border-[#00f0ff] shadow-[0_16px_50px_rgba(0,240,255,0.22)] -translate-y-1'
                      : 'border border-[#141e33] hover:border-sky-500/60'
                  }`}
                >
                  {/* Conector sutil no topo central da caixa em alinhamento exato com a linha */}
                  <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 rounded-b-md transition-all duration-300 pointer-events-none z-20 ${
                      isHovered
                        ? 'bg-[#00f0ff] shadow-[0_0_12px_#00f0ff]'
                        : 'bg-sky-500/30'
                    }`}
                  />

                  {/* 1. TOPO: Espaço da Imagem / Mockup com numeração no canto */}
                  <div className="relative w-full h-[215px] sm:h-[225px] overflow-hidden bg-[#040814] shrink-0">
                    <CompanyImageSlot
                      companyId={company.id}
                      companyName={cardInfo.name}
                      number={cardInfo.number}
                    />
                  </div>

                  {/* 2. BASE DO CARD: Tipografia e Layout Idênticos à Imagem */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                    
                    {/* Título em Caixa Alta e Subtítulo */}
                    <div>
                      <h3 className="font-sans font-bold text-base sm:text-lg tracking-wider uppercase text-white transition-colors group-hover:text-sky-300">
                        {cardInfo.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed line-clamp-1">
                        {cardInfo.subtitle}
                      </p>
                    </div>

                    {/* Linha Inferior: Tags à esquerda + Botão circular com borda azul e seta à direita */}
                    <div className="mt-5 flex items-center justify-between gap-2">
                      
                      {/* Tags em pills escuros com borda sutil */}
                      <div className="flex flex-wrap gap-1.5 items-center">
                        {cardInfo.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 sm:px-3 py-1 rounded-md bg-[#0a1020] border border-slate-800 text-[11px] font-normal text-slate-300 whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Botão circular com contorno azul (#0088ff / sky-500) e seta */}
                      <button
                        id={`btn-visit-${company.id}`}
                        onClick={(e) => handleRedirect(e, company.id)}
                        title={`Acessar ${cardInfo.name}`}
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-sky-500 bg-[#030917] transition-all duration-300 flex items-center justify-center text-sky-400 shrink-0 active:scale-95 shadow-[0_0_14px_rgba(0,140,255,0.2)] ${
                          isHovered
                            ? 'border-[#00f0ff] bg-[#00f0ff] text-slate-950 shadow-[0_0_18px_#00f0ff]'
                            : 'hover:bg-sky-500 hover:text-white group-hover:scale-105 group-hover:border-[#00f0ff]'
                        }`}
                      >
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </button>

                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
