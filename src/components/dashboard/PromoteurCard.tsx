/**
 * PromoteurCard - Orange gradient CTA card to become a "Promoteur"
 * Right side card with icon and description
 */
import React from 'react';
import { Building2 } from 'lucide-react';

const PromoteurCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-fi-orange-light rounded-2xl p-5 text-primary-foreground h-full flex flex-col justify-between">
      {/* Header with icon */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
          <Building2 size={20} />
        </div>
        <h3 className="font-bold text-base">Devenir Promoteur</h3>
      </div>

      {/* Description */}
      <p className="text-sm text-primary-foreground/90 mb-4 leading-relaxed">
        Passez au niveau supérieur ! Publiez vos projets immobiliers, recevez des leads qualifiés et développez votre activité sur notre plateforme.
      </p>

      {/* CTA button */}
      <button className="flex items-center gap-2 bg-card text-foreground px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-card/90 transition-colors w-fit">
        <Building2 size={16} />
        Devenir Promoteur
      </button>
    </div>
  );
};

export default PromoteurCard;
