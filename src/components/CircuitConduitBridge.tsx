import React from 'react';
import { CompanyId } from '../types';

interface CircuitConduitBridgeProps {
  hoveredCompany?: CompanyId | null;
}

export const CircuitConduitBridge: React.FC<CircuitConduitBridgeProps> = ({
  hoveredCompany,
}) => {
  // Retorna estilos dinâmicos para cada trilha que vem do Hero e desce para a respectiva caixa
  const getLineStyle = (id: CompanyId) => {
    const isHovered = hoveredCompany === id;
    const isAnyHovered = hoveredCompany !== null && hoveredCompany !== undefined;

    if (isHovered) {
      return {
        stroke: '#00f0ff',
        strokeWidth: 3.5,
        opacity: 1,
        filter: 'url(#conduitNeonGlowHD)',
        transition: 'all 0.35s ease',
      };
    }

    if (isAnyHovered) {
      return {
        stroke: '#0284c7',
        strokeWidth: 1.2,
        opacity: 0.18,
        filter: 'none',
        transition: 'all 0.35s ease',
      };
    }

    return {
      stroke: 'url(#conduitTraceGradientHD)',
      strokeWidth: 2,
      opacity: 0.85,
      filter: 'url(#conduitSubtleGlowHD)',
      transition: 'all 0.35s ease',
    };
  };

  const getLineCoreStyle = (id: CompanyId) => {
    const isHovered = hoveredCompany === id;
    const isAnyHovered = hoveredCompany !== null && hoveredCompany !== undefined;

    if (isHovered) {
      return {
        stroke: '#ffffff',
        strokeWidth: 1.8,
        opacity: 1,
        transition: 'all 0.35s ease',
      };
    }

    if (isAnyHovered) {
      return {
        stroke: '#38bdf8',
        strokeWidth: 0.8,
        opacity: 0.25,
        transition: 'all 0.35s ease',
      };
    }

    return {
      stroke: '#e0f2fe',
      strokeWidth: 1,
      opacity: 0.75,
      transition: 'all 0.35s ease',
    };
  };

  const getNodeFill = (id: CompanyId) => {
    if (hoveredCompany === id) return '#00f0ff';
    if (hoveredCompany) return '#0284c7';
    return '#38bdf8';
  };

  return (
    <div className="w-full relative pointer-events-none -mt-1 sm:-mt-2 mb-0 overflow-visible z-20">
      {/* 
        ========================================================================
        CONEXÃO CONTÍNUA FLUIDA HERO -> 4 CAIXAS (VIEWBOX 1440 HD):
        As 4 linhas nascem diretamente no ponto exato onde as linhas do Hero
        terminam (X=980, X=1010, X=1040, X=1150 em Y=0), e se ramificam com
        alta definição e precisão de micro-vias até o centro de cada caixa.
        ========================================================================
      */}
      <div className="hidden lg:block w-full">
        <svg
          className="w-full h-36 xl:h-40 overflow-visible"
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="conduitTraceGradientHD" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.95" />
              <stop offset="30%" stopColor="#0099ff" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#0088ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
            </linearGradient>

            <filter id="conduitNeonGlowHD" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="2.5" result="sharp" />
              <feGaussianBlur stdDeviation="6" result="bloom" />
              <feMerge>
                <feMergeNode in="bloom" />
                <feMergeNode in="sharp" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="conduitSubtleGlowHD" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="nodeHaloHD" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 
            --------------------------------------------------------------------
            TRILHA 1 -> OXYS SISTEMAS (Coluna 1, Centro X=255)
            --------------------------------------------------------------------
          */}
          <g>
            <path
              d="M 980 0 L 980 20 L 950 50 L 285 50 L 255 80 L 255 174"
              style={getLineStyle('sistemas')}
              fill="none"
            />
            <path
              d="M 980 0 L 980 20 L 950 50 L 285 50 L 255 80 L 255 174"
              style={getLineCoreStyle('sistemas')}
              fill="none"
            />
            {/* Micro-Vias PCB */}
            <circle cx="950" cy="50" r="3" fill="#030919" stroke={getNodeFill('sistemas')} strokeWidth="1" />
            <circle cx="950" cy="50" r="1.2" fill={getNodeFill('sistemas')} />
            <circle cx="285" cy="50" r="3" fill="#030919" stroke={getNodeFill('sistemas')} strokeWidth="1" />
            <circle cx="285" cy="50" r="1.2" fill={getNodeFill('sistemas')} />
            
            {/* Nó Terminal de Conexão Superior da Caixa */}
            <circle
              cx="255"
              cy="174"
              r={hoveredCompany === 'sistemas' ? 6 : 4.5}
              fill={getNodeFill('sistemas')}
              filter="url(#nodeHaloHD)"
              style={{ transition: 'all 0.3s ease' }}
            />
            <circle cx="255" cy="174" r="1.8" fill="#ffffff" />

            {/* Pulso de energia contínuo */}
            <circle r="3.5" fill="#00f0ff" filter="url(#nodeHaloHD)">
              <animateMotion
                path="M 980 0 L 980 20 L 950 50 L 285 50 L 255 80 L 255 174"
                dur={hoveredCompany === 'sistemas' ? '1.2s' : '3.6s'}
                repeatCount="indefinite"
              />
            </circle>
            <circle r="1.5" fill="#ffffff">
              <animateMotion
                path="M 980 0 L 980 20 L 950 50 L 285 50 L 255 80 L 255 174"
                dur={hoveredCompany === 'sistemas' ? '1.2s' : '3.6s'}
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* 
            --------------------------------------------------------------------
            TRILHA 2 -> OXYS TI (Coluna 2, Centro X=565)
            --------------------------------------------------------------------
          */}
          <g>
            <path
              d="M 1010 0 L 1010 32 L 980 62 L 595 62 L 565 92 L 565 174"
              style={getLineStyle('ti')}
              fill="none"
            />
            <path
              d="M 1010 0 L 1010 32 L 980 62 L 595 62 L 565 92 L 565 174"
              style={getLineCoreStyle('ti')}
              fill="none"
            />
            {/* Micro-Vias PCB */}
            <circle cx="980" cy="62" r="3" fill="#030919" stroke={getNodeFill('ti')} strokeWidth="1" />
            <circle cx="980" cy="62" r="1.2" fill={getNodeFill('ti')} />
            <circle cx="595" cy="62" r="3" fill="#030919" stroke={getNodeFill('ti')} strokeWidth="1" />
            <circle cx="595" cy="62" r="1.2" fill={getNodeFill('ti')} />

            {/* Nó Terminal Superior */}
            <circle
              cx="565"
              cy="174"
              r={hoveredCompany === 'ti' ? 6 : 4.5}
              fill={getNodeFill('ti')}
              filter="url(#nodeHaloHD)"
              style={{ transition: 'all 0.3s ease' }}
            />
            <circle cx="565" cy="174" r="1.8" fill="#ffffff" />

            {/* Pulso de energia */}
            <circle r="3.5" fill="#00f0ff" filter="url(#nodeHaloHD)">
              <animateMotion
                path="M 1010 0 L 1010 32 L 980 62 L 595 62 L 565 92 L 565 174"
                dur={hoveredCompany === 'ti' ? '1.2s' : '3.2s'}
                repeatCount="indefinite"
                begin="0.5s"
              />
            </circle>
            <circle r="1.5" fill="#ffffff">
              <animateMotion
                path="M 1010 0 L 1010 32 L 980 62 L 595 62 L 565 92 L 565 174"
                dur={hoveredCompany === 'ti' ? '1.2s' : '3.2s'}
                repeatCount="indefinite"
                begin="0.5s"
              />
            </circle>
          </g>

          {/* 
            --------------------------------------------------------------------
            TRILHA 3 -> OXYS CLOUD (Coluna 3, Centro X=875)
            --------------------------------------------------------------------
          */}
          <g>
            <path
              d="M 1040 0 L 1040 44 L 1010 74 L 905 74 L 875 104 L 875 174"
              style={getLineStyle('cloud')}
              fill="none"
            />
            <path
              d="M 1040 0 L 1040 44 L 1010 74 L 905 74 L 875 104 L 875 174"
              style={getLineCoreStyle('cloud')}
              fill="none"
            />
            {/* Micro-Vias PCB */}
            <circle cx="1010" cy="74" r="3" fill="#030919" stroke={getNodeFill('cloud')} strokeWidth="1" />
            <circle cx="1010" cy="74" r="1.2" fill={getNodeFill('cloud')} />
            <circle cx="905" cy="74" r="3" fill="#030919" stroke={getNodeFill('cloud')} strokeWidth="1" />
            <circle cx="905" cy="74" r="1.2" fill={getNodeFill('cloud')} />

            {/* Nó Terminal */}
            <circle
              cx="875"
              cy="174"
              r={hoveredCompany === 'cloud' ? 6 : 4.5}
              fill={getNodeFill('cloud')}
              filter="url(#nodeHaloHD)"
              style={{ transition: 'all 0.3s ease' }}
            />
            <circle cx="875" cy="174" r="1.8" fill="#ffffff" />

            {/* Pulso de energia */}
            <circle r="3.5" fill="#00f0ff" filter="url(#nodeHaloHD)">
              <animateMotion
                path="M 1040 0 L 1040 44 L 1010 74 L 905 74 L 875 104 L 875 174"
                dur={hoveredCompany === 'cloud' ? '1.2s' : '3.0s'}
                repeatCount="indefinite"
                begin="1.0s"
              />
            </circle>
            <circle r="1.5" fill="#ffffff">
              <animateMotion
                path="M 1040 0 L 1040 44 L 1010 74 L 905 74 L 875 104 L 875 174"
                dur={hoveredCompany === 'cloud' ? '1.2s' : '3.0s'}
                repeatCount="indefinite"
                begin="1.0s"
              />
            </circle>
          </g>

          {/* 
            --------------------------------------------------------------------
            TRILHA 4 -> OXYS AUTOMAÇÃO (Coluna 4, Centro X=1185)
            --------------------------------------------------------------------
          */}
          <g>
            <path
              d="M 1150 0 L 1150 30 L 1175 55 L 1185 65 L 1185 174"
              style={getLineStyle('automacao')}
              fill="none"
            />
            <path
              d="M 1150 0 L 1150 30 L 1175 55 L 1185 65 L 1185 174"
              style={getLineCoreStyle('automacao')}
              fill="none"
            />
            {/* Micro-Vias PCB */}
            <circle cx="1175" cy="55" r="3" fill="#030919" stroke={getNodeFill('automacao')} strokeWidth="1" />
            <circle cx="1175" cy="55" r="1.2" fill={getNodeFill('automacao')} />

            {/* Nó Terminal */}
            <circle
              cx="1185"
              cy="174"
              r={hoveredCompany === 'automacao' ? 6 : 4.5}
              fill={getNodeFill('automacao')}
              filter="url(#nodeHaloHD)"
              style={{ transition: 'all 0.3s ease' }}
            />
            <circle cx="1185" cy="174" r="1.8" fill="#ffffff" />

            {/* Pulso de energia */}
            <circle r="3.5" fill="#00f0ff" filter="url(#nodeHaloHD)">
              <animateMotion
                path="M 1150 0 L 1150 30 L 1175 55 L 1185 65 L 1185 174"
                dur={hoveredCompany === 'automacao' ? '1.2s' : '3.4s'}
                repeatCount="indefinite"
                begin="0.2s"
              />
            </circle>
            <circle r="1.5" fill="#ffffff">
              <animateMotion
                path="M 1150 0 L 1150 30 L 1175 55 L 1185 65 L 1185 174"
                dur={hoveredCompany === 'automacao' ? '1.2s' : '3.4s'}
                repeatCount="indefinite"
                begin="0.2s"
              />
            </circle>
          </g>
        </svg>
      </div>

      {/* Versão para Telas Mobile / Tablet */}
      <div className="lg:hidden w-full flex items-center justify-center mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] shadow-[0_0_12px_#00f0ff]" />
      </div>
    </div>
  );
};
