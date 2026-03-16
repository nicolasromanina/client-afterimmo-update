/**
 * DashboardFooter - Dark footer with geometric background
 * Contains: Logo, description text, useful links, legal pages, copyright
 */
import React from 'react';
import footerBg from '@/assets/footer-bg.jpg';
import logoIcon from '@/assets/logo-icon.png';

const DashboardFooter: React.FC = () => {
  return (
    <footer className="relative w-full overflow-hidden rounded-[28px] bg-fi-dark shadow-[0_16px_38px_rgba(0,0,0,0.25)]">
      {/* Background */}
      <img
        src={footerBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-foreground/80" />

      {/* Content */}
      <div className="relative z-10 px-5 sm:px-7 lg:px-10 py-10 sm:py-14">
        {/* Logo centered */}
        <div className="mb-10 flex items-center justify-center gap-2">
          <img src={logoIcon} alt="Afterimmo" className="" />
          
        </div>

        {/* Grid content */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Description */}
          <div>
            <p className="text-[12px] leading-relaxed text-primary-foreground/60">
              Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>

          {/* Useful links */}
          <div>
            <h4 className="mb-3 text-[12px] font-bold uppercase tracking-wider text-primary-foreground">
              Liens utiles
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[12px] text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  Nos projets
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[12px] text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  Annuaires
                </a>
              </li>
            </ul>
          </div>

          {/* Legal pages */}
          <div>
            <h4 className="mb-3 text-[12px] font-bold uppercase tracking-wider text-primary-foreground">
              Pages légales
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[12px] text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[12px] text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  Conditions général d'utilisation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[12px] text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  Mention légales
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto my-8 max-w-4xl border-t border-primary-foreground/10" />

        {/* Copyright */}
        <p className="text-center text-[12px] text-primary-foreground/50">
          Copyright-Tout droit reservés
        </p>
      </div>
    </footer>
  );
};

export default DashboardFooter;
