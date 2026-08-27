import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompaniesGrid } from './components/CompaniesGrid';
import { ServicesTechSection } from './components/ServicesTechSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CompanyModal } from './components/CompanyModal';
import { CompanyId, Company } from './types';
import { COMPANIES_DATA } from './data/companies';

export type IgnitionStage = 'black' | 'core' | 'circuits' | 'revealed';

export default function App() {
  const [stage, setStage] = useState<IgnitionStage>('black');
  const [selectedCompanyId, setSelectedCompanyId] = useState<CompanyId | null>(null);
  const [hoveredCompany, setHoveredCompany] = useState<CompanyId | null>(null);
  const [contactPreselectedUnit, setContactPreselectedUnit] = useState<CompanyId | null>(null);
  const [contactPreselectedSolution, setContactPreselectedSolution] = useState<string | null>(null);

  useEffect(() => {
    // 1. Abertura: tela preta
    // 2. Núcleo acende instantaneamente (40ms)
    const t1 = setTimeout(() => {
      setStage('core');
    }, 40);

    // 3. Circuitos acendem e expandem (300ms)
    const t2 = setTimeout(() => {
      setStage('circuits');
    }, 300);

    // 4. Site é totalmente revelado (750ms) - transição fluida sem sensação de travamento
    const t3 = setTimeout(() => {
      setStage('revealed');
    }, 750);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const selectedCompany: Company | null = selectedCompanyId
    ? COMPANIES_DATA.find((c) => c.id === selectedCompanyId) || null
    : null;

  const handleOpenCompanyModal = (companyId: CompanyId) => {
    setSelectedCompanyId(companyId);
  };

  const handleCloseCompanyModal = () => {
    setSelectedCompanyId(null);
  };

  const handleOpenContact = (preselectedUnit?: CompanyId) => {
    if (preselectedUnit) {
      setContactPreselectedUnit(preselectedUnit);
    }
    const contactElem = document.getElementById('contato');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isRevealed = stage === 'revealed';

  return (
    <div className="min-h-screen bg-[#02050e] text-slate-100 selection:bg-blue-500 selection:text-white flex flex-col overflow-x-hidden">
      {/* Top Navbar: Revelada apenas ao término da animação */}
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: -24 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={!isRevealed ? 'pointer-events-none' : ''}
      >
        <Navbar
          onSelectCompany={handleOpenCompanyModal}
          onOpenContact={handleOpenContact}
        />
      </motion.div>

      <main className="flex-grow">
        {/* Hero Section: Executa a ignição do núcleo -> circuitos -> revelação dos textos e botões */}
        <Hero
          hoveredCompany={hoveredCompany}
          onSelectCompany={handleOpenCompanyModal}
          onOpenContact={() => handleOpenContact()}
          stage={stage}
        />

        {/* Demais Seções: Reveladas exclusivamente ao final da animação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className={!isRevealed ? 'pointer-events-none' : ''}
        >
          {/* 4 Companies Grid Section */}
          <CompaniesGrid
            hoveredCompany={hoveredCompany}
            onHoverCompany={setHoveredCompany}
            onSelectCompany={handleOpenCompanyModal}
            onRequestQuoteForCompany={(companyId) => handleOpenContact(companyId)}
          />

          {/* Services & Technologies Showcase Section */}
          <ServicesTechSection />

          {/* Nosso Processo Showcase Section */}
          <ProcessSection />

          {/* About Group Structure & Differentials */}
          <AboutSection onSelectCompany={handleOpenCompanyModal} />

          {/* Interactive Proposal & Contact Section */}
          <ContactSection
            preselectedUnit={contactPreselectedUnit}
            preselectedSolution={contactPreselectedSolution}
          />
        </motion.div>
      </main>

      {/* Footer: Revelado exclusivamente ao final da animação */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className={!isRevealed ? 'pointer-events-none' : ''}
      >
        <Footer
          onSelectCompany={handleOpenCompanyModal}
          onOpenContact={() => handleOpenContact()}
        />
      </motion.div>

      {/* Deep Dive Company Detail Modal */}
      <CompanyModal
        company={selectedCompany}
        isOpen={!!selectedCompanyId}
        onClose={handleCloseCompanyModal}
        onOpenContactWithCompany={(companyId) => handleOpenContact(companyId)}
      />
    </div>
  );
}
