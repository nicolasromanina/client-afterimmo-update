/**
 * DashboardFooter - Dark footer with geometric background
 * Contains: Logo, description text, useful links, legal pages, copyright
 */
import React from 'react';
import footerBg from '@/assets/footer-bg.jpg';
import logoIcon from '@/assets/logo-icon.png';

const DashboardFooter: React.FC = () => {
  return (
    <footer className="relative w-full mt-12 overflow-hidden">
      {/* Background */}
      <img
        src={footerBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/80" />

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
        {/* Logo centered */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <img src={logoIcon} alt="First Immo" className="w-7 h-7 object-contain" />
          <span className="text-primary-foreground font-bold text-lg tracking-tight">
            FIRST IMMO
          </span>
        </div>

        {/* Grid content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
          {/* Description */}
          <div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>

          {/* Useful links */}
          <div>
            <h4 className="text-primary-foreground font-bold text-sm mb-3 uppercase tracking-wider">
              Liens Utiles
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
                  Nos projets
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
                  Annuaires
                </a>
              </li>
            </ul>
          </div>

          {/* Legal pages */}
          <div>
            <h4 className="text-primary-foreground font-bold text-sm mb-3 uppercase tracking-wider">
              Pages Légales
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
                  Conditions général d'utilisation
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
                  Mention Légales
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 max-w-4xl mx-auto mb-6" />

        {/* Copyright */}
        <p className="text-center text-primary-foreground/50 text-sm">
          Copyright-Tout droit reservés
        </p>
      </div>
    </footer>
  );
};

export default DashboardFooter;
