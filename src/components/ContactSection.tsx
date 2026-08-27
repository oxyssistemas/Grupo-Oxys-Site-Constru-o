import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Layers,
  Server,
  Cloud,
  Cpu,
  MessageSquare,
  ShieldCheck,
  Building2,
  Check
} from 'lucide-react';
import { CompanyId, QuoteFormState } from '../types';
import { COMPANIES_DATA } from '../data/companies';
import { GlitchHeading } from './GlitchHeading';
import { ContactCircuitBackground } from './ContactCircuitBackground';
import { BRAND_CONFIG } from '../config/brandAssets';

interface ContactSectionProps {
  preselectedUnit?: CompanyId | null;
  preselectedSolution?: string | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedUnit,
  preselectedSolution
}) => {
  const [formData, setFormData] = useState<QuoteFormState>({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    selectedUnits: ['sistemas'],
    projectTimeline: 'Imediato (em até 30 dias)',
    message: '',
    budgetRange: 'R$ 5.000 a R$ 20.000'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedUnit) {
      setFormData((prev) => ({
        ...prev,
        selectedUnits: prev.selectedUnits.includes(preselectedUnit)
          ? prev.selectedUnits
          : [...prev.selectedUnits, preselectedUnit]
      }));
    }
  }, [preselectedUnit]);

  useEffect(() => {
    if (preselectedSolution) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message
          ? `${prev.message}\n• Interesse na solução: ${preselectedSolution}`
          : `Olá, tenho interesse na solução: ${preselectedSolution}. Gostaria de entender prazos e investimento.`
      }));
    }
  }, [preselectedSolution]);

  const toggleUnit = (unitId: CompanyId) => {
    setFormData((prev) => {
      const exists = prev.selectedUnits.includes(unitId);
      if (exists) {
        if (prev.selectedUnits.length === 1) return prev; // keep at least 1
        return { ...prev, selectedUnits: prev.selectedUnits.filter((u) => u !== unitId) };
      } else {
        return { ...prev, selectedUnits: [...prev.selectedUnits, unitId] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const selectedNames = formData.selectedUnits
      .map((id) => COMPANIES_DATA.find((c) => c.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const text = `Olá Grupo Oxys! Meu nome é ${formData.name || 'Cliente'} da empresa ${formData.companyName || 'Empresa'}. Tenho interesse em soluções de: ${selectedNames}. Mensagem: ${formData.message || 'Gostaria de uma proposta comercial.'}`;
    return `https://wa.me/${BRAND_CONFIG.CONTACT.WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contato" className="py-24 relative bg-[#030712] overflow-hidden scroll-mt-12">
      {/* Background Animated Blurred Circuit Network */}
      <ContactCircuitBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2, margin: '-40px 0px' }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono-tech uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Atendimento & Propostas</span>
          </div>
          <div className="mt-3">
            <GlitchHeading
              as="h2"
              text="Inicie seu projeto com o Grupo Oxys"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading"
            />
          </div>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Selecione uma ou mais empresas do grupo para receber um diagnóstico técnico completo e proposta comercial sob medida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Group Contact Info Cards (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.15, margin: '-40px 0px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-[#080d1c] border border-blue-900/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              <h3 className="text-xl font-bold text-white font-heading mb-4">
                Canais de Atendimento Central
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Nossos consultores e engenheiros estão prontos para analisar o cenário da sua empresa e propor a melhor estratégia tecnológica.
              </p>

              <div className="space-y-4">
                {/* E-mail */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2 rounded-xl bg-blue-600/20 text-sky-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono-tech">E-mail Corporativo</div>
                    <a
                      href={`mailto:${BRAND_CONFIG.CONTACT.EMAIL}`}
                      className="text-sm font-semibold text-white hover:text-sky-300 transition-colors block"
                    >
                      {BRAND_CONFIG.CONTACT.EMAIL}
                    </a>
                  </div>
                </div>

                {/* Telefone / WhatsApp */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2 rounded-xl bg-blue-600/20 text-sky-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono-tech">Telefone / WhatsApp</div>
                    <a
                      href={BRAND_CONFIG.CONTACT.WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-sky-300 transition-colors block"
                    >
                      {BRAND_CONFIG.CONTACT.PHONE}
                    </a>
                  </div>
                </div>

                {/* Horário de Atendimento & Suporte */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2 rounded-xl bg-blue-600/20 text-sky-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono-tech">Horário de Atendimento</div>
                    <div className="text-sm font-semibold text-white">
                      {BRAND_CONFIG.CONTACT.BUSINESS_HOURS}
                    </div>
                    <div className="text-xs text-emerald-400 font-medium mt-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{BRAND_CONFIG.CONTACT.SUPPORT}</span>
                    </div>
                  </div>
                </div>

                {/* Endereço & Cobertura */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2 rounded-xl bg-blue-600/20 text-sky-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono-tech">Endereço & Atendimento</div>
                    <div className="text-sm font-semibold text-white">
                      {BRAND_CONFIG.CONTACT.ADDRESS}
                    </div>
                    <div className="text-xs text-sky-400 font-medium mt-1">
                      Atendimento: {BRAND_CONFIG.CONTACT.COVERAGE}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Guarantees Badge */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 to-slate-900/50 border border-blue-500/20 flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-sky-400 shrink-0" />
              <div>
                <div className="text-sm font-bold text-white">
                  Acordo de Confidencialidade (NDA) & SLA 24/7
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Atendimento em todo o Brasil e exterior com segurança e sigilo absoluto.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Proposal Form (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.15, margin: '-40px 0px' }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#080e1e] border border-blue-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Solicitação Recebida com Sucesso!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                    Obrigado, <strong className="text-white">{formData.name}</strong>. Nossa equipe técnica analisará sua demanda e entrará em contato em até 4 horas úteis.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Agilizar Atendimento no WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold"
                    >
                      Enviar Outra Solicitação
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Select Units */}
                  <div>
                    <label className="block text-xs font-mono-tech uppercase font-bold text-sky-400 mb-2.5">
                      1. Selecione as Empresas de seu Interesse:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {COMPANIES_DATA.map((company) => {
                        const isSelected = formData.selectedUnits.includes(company.id);
                        return (
                          <button
                            type="button"
                            key={company.id}
                            id={`form-unit-${company.id}`}
                            onClick={() => toggleUnit(company.id)}
                            className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? 'bg-blue-900/40 border-sky-400 text-white shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            <span className="text-[11px] font-bold block truncate">
                              {company.name}
                            </span>
                            <span className="text-[9px] text-slate-400 mt-1 block truncate">
                              {company.badge}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        required
                        id="input-form-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Carlos Silva"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-blue-500 focus:outline-none text-sm text-white placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Nome da Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        id="input-form-company"
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({ ...formData, companyName: e.target.value })
                        }
                        placeholder="Ex: Minha Empresa S.A."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-blue-500 focus:outline-none text-sm text-white placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        id="input-form-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="carlos@empresa.com.br"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-blue-500 focus:outline-none text-sm text-white placeholder:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        id="input-form-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(11) 99999-9999"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-blue-500 focus:outline-none text-sm text-white placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  {/* Step 3: Project Timeline */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Expectativa de Início / Prazo
                    </label>
                    <select
                      id="select-form-timeline"
                      value={formData.projectTimeline}
                      onChange={(e) =>
                        setFormData({ ...formData, projectTimeline: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-blue-500 focus:outline-none text-sm text-white"
                    >
                      <option value="Imediato (em até 30 dias)">Imediato (em até 30 dias)</option>
                      <option value="Planejamento para o próximo trimestre">Planejamento para o próximo trimestre</option>
                      <option value="Consultoria preliminar & diagnóstico">Consultoria preliminar & diagnóstico</option>
                      <option value="Suporte contínuo mensal">Suporte contínuo mensal</option>
                    </select>
                  </div>

                  {/* Step 4: Message / Scope */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Descreva seu Desafio ou Projeto *
                    </label>
                    <textarea
                      required
                      id="textarea-form-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte um pouco sobre as necessidades da sua empresa (ex: precisamos de um software web, suporte para 50 máquinas, migração para cloud ou automação RPA...)"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-blue-500 focus:outline-none text-sm text-white placeholder:text-slate-500 leading-relaxed"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      id="btn-submit-proposal"
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all cursor-pointer active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar Solicitação de Proposta</span>
                    </button>

                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-emerald-500/40 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Direto</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
