/**
 * UserProfileCard - Shows user info (name, role, investment stats)
 * Contains the "Modifier mon profil" CTA button
 */
import React from 'react';
import { CheckSquare, Coins, Pencil, Shield, Users } from 'lucide-react';

const UserProfileCard: React.FC = () => {
  return (
    <div className="rounded-[20px] border border-border bg-card p-5 shadow-[0_10px_22px_rgba(0,0,0,0.06)]">
      {/* User header */}
      <div className="mb-4 flex items-center gap-3">
        {/* Avatar placeholder */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-fi-gray-200 text-sm font-semibold text-fi-gray-600">
          RJ
        </div>
        <div>
          <h3 className="text-[15px] font-semibold text-foreground">Robert Jr</h3>
          <span className="inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
            Investisseur
          </span>
        </div>
      </div>

      {/* Stats grid */}
      <div className="mb-5 grid grid-cols-2 gap-y-3 gap-x-4">
        <div className="flex items-center gap-2 text-[12px] text-fi-gray-600">
          <CheckSquare size={14} className="text-fi-green" />
          <span>Investissement</span>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-fi-gray-600">
          <Coins size={14} className="text-fi-yellow" />
          <span>Credit</span>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-fi-gray-600">
          <Shield size={14} className="text-primary" />
          <span>Risque moyen</span>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-fi-gray-600">
          <Users size={14} className="text-fi-gray-500" />
          <span>Accompagnement(3)</span>
        </div>
      </div>

      {/* Edit profile button */}
      <button className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[12px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
        Modifier mon profil
        <Pencil size={14} />
      </button>
    </div>
  );
};

export default UserProfileCard;
