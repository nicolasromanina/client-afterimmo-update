/**
 * Profile Page - "Mon Profil" page for First Immo
 * Shows user info, contact details, project info cards, and other details
 */
import React, { useState } from 'react';
import { Menu, Pencil, Mail, Phone, MapPin, Target, Home, BadgeCheck, AlertTriangle, Users } from 'lucide-react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardFooter from '@/components/dashboard/DashboardFooter';

const Profile: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with "Mon Profil" title */}
      <DashboardHeader title="Mon Profil" />

      {/* Main content area */}
      <div className="px-4 sm:px-6 lg:px-10 py-6 lg:py-8">
        {/* Mobile menu toggle */}
        <button
          className="lg:hidden mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={20} />
          Menu
        </button>

        <div className="flex gap-6 lg:gap-8">
          {/* Sidebar */}
          <div className="flex-shrink-0">
            <DashboardSidebar
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
              activeItem="Mon profil"
            />
          </div>

          {/* Profile content */}
          <div className="flex-1 min-w-0 space-y-6">
            {/* Profile card */}
            <div className="bg-card rounded-2xl p-5 sm:p-7 shadow-sm border border-border">
              {/* Top section: Avatar + Name + Edit button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-fi-gray-200 flex items-center justify-center text-2xl overflow-hidden">
                    👤
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Robert Jr</h3>
                    <span className="text-xs font-medium text-primary-foreground bg-fi-dark px-3 py-1 rounded-full inline-block mt-1">
                      Investisseur
                    </span>
                  </div>
                </div>
                {/* Edit button */}
                <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold transition-colors w-fit">
                  <Pencil size={14} />
                  Modifier mon profil
                </button>
              </div>

              {/* Contact info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-foreground font-medium">Email :</span>
                  <span className="text-muted-foreground italic">robert.Jr@gr.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-foreground font-medium">Numéro de téléphone :</span>
                  <span className="text-muted-foreground">+33 00 000 00</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-foreground font-medium">Adresse :</span>
                  <span className="text-muted-foreground">36 Lorem , Rue 123 IV avenue</span>
                </div>
              </div>

              {/* Information sur mon projet */}
              <h4 className="text-foreground font-semibold text-base mb-4">Information sur mon projet</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {/* Objectif */}
                <div className="bg-primary/5 border border-primary/15 rounded-xl p-4 text-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Target size={20} className="text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground mb-2">Objectif</p>
                  <span className="text-xs font-semibold text-primary-foreground bg-fi-green px-3 py-1 rounded-full">
                    Investissement
                  </span>
                </div>
                {/* Paiement */}
                <div className="bg-primary/5 border border-primary/15 rounded-xl p-4 text-center">
                  <div className="w-10 h-10 bg-fi-green/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Home size={20} className="text-fi-green" />
                  </div>
                  <p className="text-sm font-medium text-foreground mb-2">Paiement</p>
                  <span className="text-xs font-semibold text-primary-foreground bg-fi-green px-3 py-1 rounded-full">
                    Crédit
                  </span>
                </div>
                {/* Statut */}
                <div className="bg-primary/5 border border-primary/15 rounded-xl p-4 text-center">
                  <div className="w-10 h-10 bg-fi-yellow/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <BadgeCheck size={20} className="text-fi-yellow" />
                  </div>
                  <p className="text-sm font-medium text-foreground mb-2">Statut</p>
                  <span className="text-xs font-semibold text-primary-foreground bg-primary px-3 py-1 rounded-full flex items-center gap-1 w-fit mx-auto">
                    🔥 Déjà investi
                  </span>
                </div>
              </div>

              {/* Autres informations */}
              <h4 className="text-foreground font-semibold text-base mb-4">Autres informations</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Aversion au risque */}
                <div className="bg-fi-yellow/5 border border-fi-yellow/15 rounded-xl p-5">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <AlertTriangle size={20} className="text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground mb-2">Aversion au risque</p>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">📊</span>
                    <span className="text-sm font-semibold text-primary">Risque moyen</span>
                  </div>
                </div>
                {/* Mes accompagnements */}
                <div className="bg-fi-yellow/5 border border-fi-yellow/15 rounded-xl p-5">
                  <div className="w-10 h-10 bg-fi-green/10 rounded-lg flex items-center justify-center mb-3">
                    <Users size={20} className="text-fi-green" />
                  </div>
                  <p className="text-sm font-semibold text-foreground mb-3">Mes accompagnements</p>
                  <ul className="space-y-1.5">
                    <li className="flex items-center gap-2 text-sm text-fi-green">
                      <span className="w-2 h-2 rounded-sm bg-fi-green" />
                      Avocat
                    </li>
                    <li className="flex items-center gap-2 text-sm text-fi-green">
                      <span className="w-2 h-2 rounded-sm bg-fi-green" />
                      Architecte
                    </li>
                    <li className="flex items-center gap-2 text-sm text-fi-green">
                      <span className="w-2 h-2 rounded-sm bg-fi-green" />
                      Notaire
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <DashboardFooter />
    </div>
  );
};

export default Profile;
