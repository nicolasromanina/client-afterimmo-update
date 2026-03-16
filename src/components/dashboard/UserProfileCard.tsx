/**
 * UserProfileCard - Shows user info (name, role, investment stats)
 * Has "Modifier mon profil" CTA button in orange
 */
import React from 'react';
import { CheckSquare, Coins, Shield, Users, Pencil } from 'lucide-react';

const UserProfileCard: React.FC = () => {
  return (
    <div className="bg-card rounded-2xl p-5 shadow-sm border border-border">
      {/* User header */}
      <div className="flex items-center gap-3 mb-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-fi-gray-200 flex items-center justify-center text-lg">
          👤
        </div>
        <div>
          <h3 className="font-semibold text-foreground text-base">Robert Jr</h3>
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            Investisseur
          </span>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="flex items-center gap-2 text-sm text-fi-gray-600">
          <CheckSquare size={14} className="text-fi-green" />
          <span>Investissement</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-fi-gray-600">
          <Coins size={14} className="text-fi-yellow" />
          <span>Credit</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-fi-gray-600">
          <Shield size={14} className="text-primary" />
          <span>Risque moyen</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-fi-gray-600">
          <Users size={14} className="text-fi-gray-500" />
          <span>Accompagnement(3)</span>
        </div>
      </div>

      {/* Edit profile button */}
      <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold transition-colors">
        Modifier mon profil
        <Pencil size={14} />
      </button>
    </div>
  );
};

export default UserProfileCard;
