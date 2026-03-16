/**
 * Dashboard Page (Index) - Main client dashboard for First Immo
 * Layout: Header (pill) -> Sidebar + Content area -> Footer (pill)
 * Responsive: sidebar collapses to hamburger on mobile
 */
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import UserProfileCard from '@/components/dashboard/UserProfileCard';
import PromoteurCard from '@/components/dashboard/PromoteurCard';
import InvestBanner from '@/components/dashboard/InvestBanner';
import ProjectCard from '@/components/dashboard/ProjectCard';
import DashboardFooter from '@/components/dashboard/DashboardFooter';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';

const Index: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Page container keeps header, content, and footer aligned */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10">
        <DashboardHeader />
      </div>

      {/* Main content area with sidebar */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Mobile menu toggle */}
        <button
          className="lg:hidden mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setSidebarOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <Menu size={20} />
          Menu
        </button>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar */}
          <div className="flex-shrink-0">
            <DashboardSidebar
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0 space-y-6">
            {/* Top cards row: Profile + Promoteur */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <UserProfileCard />
              <PromoteurCard />
            </div>

            {/* Investment banner */}
            <InvestBanner />

            {/* Projects section */}
            <div>
              <h2 className="text-center text-base font-semibold text-foreground mb-5">
                Tout les projets consulté
              </h2>

              <div className="space-y-4">
                <ProjectCard
                  image={project1}
                  title="Résidence Théa"
                  description="En front de mer, la résidence Théa est notre résidence exclusive, sécurisée et rentable de 18 ...."
                  price="60 000 000 FCFA"
                  promoter="Marc.H"
                  location="Almadies"
                  type="Immeuble"
                  score={50}
                  subScore={61}
                  certified
                  featuredLabel="Sponsorisé"
                  featuredTone="orange"
                />
                <ProjectCard
                  image={project2}
                  title="Almadies Residence"
                  description="Conçu pour allier esthétique contemporaine et exigences environnementales, il vise les"
                  price="7 000 €"
                  promoter="Marie.H"
                  location="Almadies"
                  type="Immeuble"
                  score={50}
                  subScore={61}
                  certified
                  featuredLabel="En avant VIP"
                  featuredTone="blue"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-10 lg:pb-14">
        <DashboardFooter />
      </div>
    </div>
  );
};

export default Index;
