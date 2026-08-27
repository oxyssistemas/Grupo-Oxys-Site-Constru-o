import React from 'react';
import { motion } from 'motion/react';
import {
  Building,
  Target,
  Users,
  Award,
  CheckCircle2,
  XCircle,
  Shield,
  Layers,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { COMPANIES_DATA } from '../data/companies';
import { CompanyId } from '../types';
import { GlitchHeading } from './GlitchHeading';

interface AboutSectionProps {
  onSelectCompany: (companyId: CompanyId) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectCompany }) => {
  return (
    <section id="about" className="py-24 relative bg-[#040814] border-t border-slate-900 overflow-hidden scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2, margin: '-40px 0px' }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono-tech uppercase font-semibold">
            <Building className="w-3.5 h-3.5" />
            <span>Nossa História & Estrutura</span>
          </div>
          <div className="mt-4">
            <GlitchHeading
              as="h2"
              text="Sobre o Grupo Oxys"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading"
            />
          </div>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Nascemos com a missão de unificar os pilares mais críticos da tecnologia moderna para empresas que buscam alta performance, segurança e inovação contínua.
          </p>
        </motion.div>

        {/* 2-Column Overview */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2, margin: '-40px 0px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <GlitchHeading
              as="h3"
              text="Uma estrutura sólida com especialistas dedicados em 4 verticais"
              className="text-2xl sm:text-3xl font-bold text-white font-heading leading-tight"
            />
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              O <strong className="text-white font-semibold">Grupo Oxys</strong> é composto por quatro divisões estratégicas, cada uma liderada por especialistas de referência. Essa independência operacional combinada à sinergia do grupo permite que sua empresa tenha suporte de alta profundidade técnica sem perder a visão integrada do negócio.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-colors">
                <div className="p-2 rounded-xl bg-blue-600/20 text-sky-400 shrink-0 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Nosso Propósito</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Tornar a tecnologia um motor de lucro, segurança e eficiência, eliminando ruídos e complexidade técnica para os líderes empresariais.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-colors">
                <div className="p-2 rounded-xl bg-blue-600/20 text-sky-400 shrink-0 mt-0.5">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Corpo Técnico Especializado</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Engenheiros de software, arquitetos de nuvem certificados, especialistas em cibersegurança e integradores industriais atuando lado a lado.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Comparison Table: Traditional vs. Grupo Oxys */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2, margin: '-40px 0px' }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="p-8 rounded-3xl bg-[#080d1c] border border-blue-500/20 shadow-[0_15px_40px_rgba(0,0,0,0.7)]"
          >
            <div className="text-xs uppercase tracking-wider font-mono-tech text-sky-400 font-bold mb-4">
              Diferencial Competitivo
            </div>
            <h4 className="text-xl font-bold text-white mb-6">
              Múltiplos Fornecedores vs. Ecossistema Oxys
            </h4>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-red-950/20 border border-red-900/30">
                <div className="flex items-center gap-2 text-red-400 text-xs font-bold font-mono-tech uppercase mb-2">
                  <XCircle className="w-4 h-4" />
                  <span>Modelo Tradicional (Fornecedores Separados)</span>
                </div>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                  <li>Software diz que o problema é na infraestrutura da nuvem</li>
                  <li>TI local não conversa com a equipe de desenvolvimento</li>
                  <li>Múltiplas faturas, contratos e canais de suporte confusos</li>
                  <li>Falta de visão holística da segurança e conformidade</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/40">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-bold font-mono-tech uppercase mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Ecossistema Grupo Oxys (4 Unidades Integradas)</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>Uma única governança e alinhamento estratégico contínuo</li>
                  <li>Software, nuvem, infra e automação perfeitamente integrados</li>
                  <li>SLA unificado e atendimento ágil de ponta a ponta</li>
                  <li>Custo otimizado e previsibilidade contratual total</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
