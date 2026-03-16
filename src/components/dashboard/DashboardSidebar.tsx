/**
 * DashboardSidebar - Left navigation sidebar
 * Contains menu items with icons matching the design
 * "Tableau de bord" is the active item (orange/dark background)
 * Bottom has "Paramètres" link
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  User,
  FolderOpen,
  FileText,
  Users,
  BarChart3,
  Star,
  BellRing,
  Calculator,
  Diamond,
  CreditCard,
  Settings,
  X,
} from 'lucide-react';

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  path?: string;
}

const menuItems: SidebarItem[] = [
  { icon: LayoutDashboard, label: 'Tableau de bord', path: '/' },
  { icon: User, label: 'Mon profil', path: '/profil' },
  { icon: FolderOpen, label: 'Mes projets' },
  { icon: FileText, label: 'Documents' },
  { icon: Users, label: 'Partenaires' },
  { icon: BarChart3, label: 'Comparer' },
  { icon: Star, label: 'Mes Avis' },
  { icon: BellRing, label: 'Alertes' },
  { icon: Calculator, label: 'Calculateur de rentabilité' },
  { icon: Diamond, label: 'Comparateur Premium' },
  { icon: CreditCard, label: 'Abonnement' },
];

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem?: string;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ isOpen, onClose, activeItem = 'Tableau de bord' }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/30 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-[260px] bg-card rounded-r-2xl lg:rounded-2xl shadow-lg z-50 
          lg:sticky lg:top-8 lg:h-fit lg:z-10
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Mobile close button */}
        <button
          className="absolute top-4 right-4 lg:hidden text-muted-foreground"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="flex flex-col h-full lg:h-auto p-3">
          {/* Menu items */}
          <nav className="space-y-0.5">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                  ${item.label === activeItem
                    ? 'bg-fi-dark text-primary-foreground shadow-md'
                    : 'text-fi-gray-600 hover:bg-fi-gray-100 hover:text-foreground'
                  }
                `}
              >
                <item.icon size={18} strokeWidth={item.active ? 2.5 : 2} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Settings at bottom */}
          <div className="mt-6 lg:mt-8 pt-4 border-t border-border">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-fi-gray-600 hover:bg-fi-gray-100 hover:text-foreground transition-colors">
              <Settings size={18} />
              <span>Paramètres</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
