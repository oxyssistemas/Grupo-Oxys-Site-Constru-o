import React from 'react';
import {
  Code2,
  Server,
  Cloud,
  Cpu,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { CompanyId } from '../types';
import { COMPANIES_DATA } from '../data/companies';
import { OxysLogo } from './OxysLogo';
import { BRAND_CONFIG } from '../config/brandAssets';

interface FooterProps {
  onSelectCompany: (companyId: CompanyId) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCompany, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050e] border-t border-blue-950/60 pt-16 pb-12 overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <OxysLogo size="md" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Ecossistema integrado de tecnologia composto por Oxys Sistemas, Oxys TI, Oxys Cloud e Oxys Automação. Engenharia de ponta para empresas que buscam liderança de mercado.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenContact}
                className="px-4 py-2 rounded-full bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-sky-300 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-[0_0_12px_rgba(0,140,255,0.25)]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Vamos Conversar</span>
              </button>

              <a
                href={BRAND_CONFIG.CONTACT.WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp: {BRAND_CONFIG.CONTACT.PHONE}</span>
              </a>
            </div>
          </div>

          {/* Col 3: As 4 Empresas */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono-tech font-bold text-white mb-4">
              Empresas do Grupo
            </h4>
            <ul className="space-y-2.5 text-xs">
              {COMPANIES_DATA.map((company) => (
                <li key={company.id}>
                  <button
                    onClick={() => onSelectCompany(company.id)}
                    className="hover:text-sky-300 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>{company.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Links Rápidos */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono-tech font-bold text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  HOME
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  WORK (Portfólio)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  ABOUT (Sobre Nós)
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  SERVIÇOS (Soluções)
                </a>
              </li>
              <li>
                <a href="#processos" className="hover:text-white transition-colors">
                  PROCESSOS (Ecossistema)
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  CONTATO (Atendimento)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Atendimento & Segurança */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono-tech font-bold text-white mb-4">
              Contato Corporativo
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a
                  href={`mailto:${BRAND_CONFIG.CONTACT.EMAIL}`}
                  className="hover:text-sky-300 transition-colors"
                >
                  {BRAND_CONFIG.CONTACT.EMAIL}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a
                  href={BRAND_CONFIG.CONTACT.WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-300 transition-colors"
                >
                  {BRAND_CONFIG.CONTACT.PHONE}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>{BRAND_CONFIG.CONTACT.ADDRESS}</span>
              </p>
              <p className="text-[11px] text-slate-500 pt-1">
                <strong className="text-slate-400 block">Atendimento:</strong>
                {BRAND_CONFIG.CONTACT.COVERAGE}
              </p>
              <p className="text-[11px] text-slate-500">
                <strong className="text-slate-400 block">Horário:</strong>
                {BRAND_CONFIG.CONTACT.BUSINESS_HOURS}
              </p>
              <p className="text-[11px] text-emerald-400 font-medium">
                • {BRAND_CONFIG.CONTACT.SUPPORT}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Grupo Oxys. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Segurança & LGPD Homologados</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
