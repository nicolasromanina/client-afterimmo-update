/**
 * PromoteurCard - Orange gradient CTA card to become a "Promoteur"
 * Contains icon, description, and action button
 */
import React from 'react';
import { Crown } from 'lucide-react';

const PromoteurCard: React.FC = () => {
  return (
    <div className="flex h-full flex-col justify-between rounded-[20px] bg-gradient-to-r from-primary to-fi-orange-light p-5 text-primary-foreground shadow-[0_10px_22px_rgba(0,0,0,0.08)]">
      {/* Header with icon */}
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/20">
          <Crown size={18} />
        </div>
        <h3 className="text-[15px] font-semibold">Devenir Promoteur</h3>
      </div>

      {/* Description */}
      <p className="mb-4 text-[12px] leading-relaxed text-primary-foreground/90">
        Passez au niveau supérieur ! Publiez vos projets immobiliers, recevez des leads qualifiés et développez votre activité sur notre plateforme.
      </p>

      {/* CTA button */}
      <button className="flex w-fit items-center gap-2 rounded-lg bg-card px-4 py-2.5 text-[12px] font-semibold text-foreground transition-colors hover:bg-card/90">
        <Crown size={14} />
        Devenir Promoteur
      </button>
    </div>
  );
};

export default PromoteurCard;
