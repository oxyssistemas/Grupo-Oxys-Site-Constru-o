import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Code2,
  Server,
  Cloud,
  Cpu,
  Layers,
  Shield,
  Zap,
  TrendingUp
} from 'lucide-react';
import { Company, CompanyId } from '../types';
import { DynamicIcon } from './DynamicIcon';

interface CompanyModalProps {
  company: Company | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenContactWithCompany: (companyId: CompanyId) => void;
}

export const CompanyModal: React.FC<CompanyModalProps> = ({
  company,
  isOpen,
  onClose,
  onOpenContactWithCompany
}) => {
  if (!isOpen || !company) return null;

  const getIcon = () => {
    switch (company.id) {
      case 'sistemas': return <Code2 className="w-8 h-8 text-sky-400" />;
      case 'ti': return <Server className="w-8 h-8 text-blue-400" />;
      case 'cloud': return <Cloud className="w-8 h-8 text-cyan-400" />;
      case 'automacao': return <Cpu className="w-8 h-8 text-indigo-400" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Content Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#080e1e] border border-blue-500/30 p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10"
        >
          {/* Close button */}
          <button
            id="btn-close-modal"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-start gap-4 pr-10">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 shrink-0">
              {getIcon()}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono-tech px-2.5 py-0.5 rounded-full bg-blue-500/10 text-sky-400 border border-blue-500/20 uppercase font-semibold">
                  {company.badge}
                </span>
                <span className="text-xs text-slate-500">Unidade do Grupo Oxys</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
                {company.name}
              </h2>
              <p className="text-sm text-slate-300 mt-2 font-medium">
                {company.tagline}
              </p>
            </div>
          </div>

          {/* Extended Description */}
          <div className="mt-6 p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <p className="text-sm text-slate-300 leading-relaxed">
              {company.longDescription}
            </p>
          </div>

          {/* Pillars of Delivery */}
          <div className="mt-8">
            <h4 className="text-xs uppercase tracking-wider font-mono-tech font-bold text-sky-400 mb-3">
              Pilares de Atuação & Metodologia
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {company.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800"
                >
                  <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm mb-1.5">
                    <DynamicIcon name={pillar.icon} className="w-4 h-4" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies / Business Use Cases */}
          <div className="mt-8">
            <h4 className="text-xs uppercase tracking-wider font-mono-tech font-bold text-sky-400 mb-3">
              Casos Reais & Impacto no Negócio
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {company.useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40"
                >
                  <div className="text-xs font-semibold text-sky-300">
                    Cenário: {useCase.clientType}
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    <strong>Solução:</strong> {useCase.solution}
                  </p>
                  <div className="mt-2 pt-2 border-t border-slate-800/60 text-xs text-emerald-400 font-medium flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{useCase.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-800">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-mono-tech font-bold text-slate-400 mb-3">
                O que garantimos na entrega
              </h4>
              <ul className="space-y-2">
                {company.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-mono-tech font-bold text-slate-400 mb-3">
                Tecnologias & Padrões
              </h4>
              <div className="flex flex-wrap gap-2">
                {company.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 text-xs font-mono-tech"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Precisa de um projeto sob medida para {company.name}?
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold"
              >
                Fechar
              </button>
              <button
                id={`modal-cta-quote-${company.id}`}
                onClick={() => {
                  onClose();
                  onOpenContactWithCompany(company.id);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Solicitar Proposta para {company.name}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
