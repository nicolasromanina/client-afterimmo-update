/**
 * ComparateurPremium - Main page for the premium comparator
 * Layout: Header + Sidebar + Tab content + Footer
 */
import React, { useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardFooter from '@/components/dashboard/DashboardFooter';
import ProjetsTab from '@/components/comparison-premium/ProjetsTab';
import ScoreAfterImmoTab from '@/components/comparison-premium/ScoreAfterImmoTab';
import GarantiesTab from '@/components/comparison-premium/GarantiesTab';

type TabKey = 'projets' | 'score' | 'garanties';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'projets', label: 'Projets' },
  { key: 'score', label: 'Score AfterImmo' },
  { key: 'garanties', label: 'Garanties' },
];

const ComparisonPremium: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('score');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <DashboardHeader title="Comparateur premium" onMenuToggle={() => setSidebarOpen(true)} />

      {/* Body: sidebar + main */}
      <div className="mx-auto flex max-w-[1400px] gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        {/* Sidebar */}
        <div className="hidden shrink-0 lg:block">
          <DashboardSidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            activeItem="Comparateur Prémium"
          />
        </div>
        {/* Mobile sidebar */}
        <div className="lg:hidden">
          <DashboardSidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            activeItem="Comparateur Prémium"
          />
        </div>

        {/* Main content */}
        <main className="min-w-0 flex-1">
          {/* Page title */}
          <h2 className="mb-6 text-center text-xl font-bold text-foreground sm:text-2xl">
            Comparer vos projets
          </h2>

          {/* Tabs */}
          <div className="mb-8 flex justify-center border-b border-fi-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-4 py-3 text-[13px] font-medium transition-colors sm:px-6
                  ${activeTab === tab.key
                    ? 'text-foreground'
                    : 'text-fi-gray-400 hover:text-fi-gray-600'
                  }
                `}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t-full bg-fi-dark" />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === 'projets' && <ProjetsTab />}
          {activeTab === 'score' && <ScoreAfterImmoTab />}
          {activeTab === 'garanties' && <GarantiesTab />}
        </main>
      </div>

      {/* Footer */}
      <DashboardFooter />
    </div>
  );
};

export default ComparisonPremium;
