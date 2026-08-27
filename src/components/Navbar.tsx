import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { OxysLogo } from './OxysLogo';
import { CompanyId } from '../types';

interface NavbarProps {
  onSelectCompany?: (companyId: CompanyId) => void;
  onOpenContact?: (preselectedUnit?: CompanyId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectCompany, onOpenContact }) => {
  const [activeItem, setActiveItem] = useState<string>('HOME');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection based on scroll position
      const scrollPos = window.scrollY + 120;
      const sections = [
        { id: 'home', name: 'HOME' },
        { id: 'work', name: 'WORK' },
        { id: 'about', name: 'ABOUT' },
        { id: 'servicos', name: 'SERVIÇOS' },
        { id: 'processos', name: 'PROCESSOS' },
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveItem(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SERVIÇOS', href: '#servicos', id: 'servicos' },
    { label: 'PROCESSOS', href: '#processos', id: 'processos' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    e.preventDefault();
    setActiveItem(item.label);
    setMobileMenuOpen(false);

    if (item.id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetEl = document.getElementById(item.id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    if (onOpenContact) {
      onOpenContact();
    } else {
      const contactEl = document.getElementById('contato');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#02050e]/95 backdrop-blur-md border-b border-blue-950/40 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.85)]'
          : 'bg-gradient-to-b from-[#02050e]/90 via-[#02050e]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <a
            href="#home"
            id="brand-logo"
            onClick={(e) => {
              e.preventDefault();
              setActiveItem('HOME');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center transition-opacity hover:opacity-95 focus:outline-none"
            aria-label="Oxys Sistemas | TI Home"
          >
            <OxysLogo size="md" />
          </a>

          {/* Desktop Navigation Links & Action Button */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-11">
            <nav className="flex items-center gap-7 xl:gap-9" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = activeItem === item.label;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    id={`nav-link-${item.label.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`relative py-1 text-[12.5px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 ${
                      isActive
                        ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {/* Active Underline Indicator matching image */}
                    {isActive && (
                      <motion.div
                        layoutId="navActiveIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0099ff] to-transparent shadow-[0_0_8px_#0099ff]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Button: "VAMOS CONVERSAR" */}
            <button
              id="nav-btn-vamos-conversar"
              onClick={handleContactClick}
              className="relative group px-6 py-2 rounded-full border border-[#0088ff] text-white text-[12.5px] font-semibold tracking-[0.14em] uppercase bg-blue-950/20 hover:bg-[#0088ff]/15 shadow-[0_0_15px_rgba(0,136,255,0.35)] hover:shadow-[0_0_22px_rgba(0,136,255,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none"
            >
              <span className="relative z-10 text-slate-100 group-hover:text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
                VAMOS CONVERSAR
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#0088ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              aria-expanded={mobileMenuOpen}
              aria-label="Alternar menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#02050e]/98 border-b border-blue-900/30 backdrop-blur-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-4">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const isActive = activeItem === item.label;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`px-3 py-2.5 rounded-lg text-sm font-semibold tracking-[0.14em] uppercase transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-blue-900/30 text-white border-l-2 border-[#0099ff]'
                          : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <div className="w-2 h-2 rounded-full bg-[#0099ff] shadow-[0_0_6px_#0099ff]" />}
                    </a>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-slate-800/80">
                <button
                  onClick={handleContactClick}
                  className="w-full py-3 rounded-full border border-[#0088ff] text-white text-xs font-semibold tracking-[0.16em] uppercase bg-blue-950/40 shadow-[0_0_15px_rgba(0,136,255,0.4)] text-center block"
                >
                  VAMOS CONVERSAR
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
