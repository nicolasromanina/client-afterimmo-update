/**
 * InvestBanner - Banner section with illustration
 * "Investissez en Côte d'Ivoire en toute confiance"
 * Two CTA buttons: Calculer rentabilité & Comparateur Premium
 */
import React from 'react';
import investIllustration from '@/assets/invest-illustration.png';

const InvestBanner: React.FC = () => {
  return (
    <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* Illustration */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
          <img
            src={investIllustration}
            alt="Investissement immobilier"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text content */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2 leading-tight">
            Investissez en Côte d'Ivoire<br />
            en toute confiance
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            La première plateforme qui vérifie les promoteurs immobiliers pour la diaspora. Quel est votre projet ?
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <button className="px-5 py-2.5 border border-border rounded-full text-sm font-medium text-foreground hover:bg-fi-gray-100 transition-colors">
              Calculer votre rentabilité
            </button>
            <button className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">
              Comparateur Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestBanner;
