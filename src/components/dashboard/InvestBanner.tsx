import React from 'react';
import investIllustration from '@/assets/invest-illustration.png';

const InvestBanner: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-card rounded-2xl p-5 sm:p-7 lg:p-8 shadow-sm border border-border flex items-center justify-center">

      {/* Illustration */}
      <div className="absolute -left-8 sm:left-0 top-0 h-full flex items-center pointer-events-none">
        <img
          src={investIllustration}
          alt="Investissement immobilier"
          className="h-full w-[90px] sm:w-[140px] md:w-[180px] lg:w-auto object-cover object-left"
        />
      </div>

      {/* Content */}
      <div
        className="relative z-50 w-full text-center max-w-xl mx-auto flex flex-col items-center
        pl-[95px] sm:pl-[140px] md:pl-[180px] lg:pl-0"
      >

        <h2 className="text-[18px] sm:text-[24px] lg:text-[32px] font-medium text-black mb-2 lg:mb-4 leading-[1.2] tracking-tight">
          Investissez en Côte d'Ivoire
          <br className="hidden sm:block" />
          {' '}en toute confiance
        </h2>

        <p className="text-[13px] sm:text-[14px] lg:text-base text-black mb-5 lg:mb-8 leading-snug">
          La première plateforme qui vérifie les promoteurs immobiliers
          <br className="hidden lg:block" />
          <span className="sm:block">pour la diaspora. Quel est votre projet ?</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row flex-nowrap items-center justify-center gap-3 sm:gap-3 lg:gap-4 w-full max-w-[320px] sm:max-w-none">
          <button className="flex-1 min-w-0 px-3 sm:px-5 py-2.5 border border-border rounded-full text-[13px] sm:text-sm font-medium text-foreground hover:bg-fi-gray-100 transition-colors whitespace-nowrap">
            Calculer votre rentabilité
          </button>

          <button className="flex-1 min-w-0 px-3 sm:px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-[13px] sm:text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
            Comparateur Prémium
          </button>
        </div>

      </div>
    </div>
  );
};

export default InvestBanner;
