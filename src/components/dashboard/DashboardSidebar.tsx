/**
 * DashboardSidebar - Left navigation sidebar
 * Contains menu items with icons matching the design
 * "Tableau de bord" is the active item (dark pill background)
 * Bottom has "Paramètres" link
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart3,
  BellRing,
  Calculator,
  CreditCard,
  Diamond,
  FileText,
  FolderOpen,
  LayoutDashboard,
  Settings,
  Star,
  User,
  Users,
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
  { icon: Diamond, label: 'Comparateur Premium', path: '/comparateur-premium'},
  { icon: CreditCard, label: 'Abonnement' },
];

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem?: string;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  isOpen,
  onClose,
  activeItem = 'Tableau de bord',
}) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[255px] rounded-r-[26px] bg-card shadow-[0_16px_30px_rgba(0,0,0,0.10)] lg:sticky lg:top-28 lg:h-fit lg:rounded-[26px] lg:z-10 
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        aria-label="Menu latéral"
      >
        {/* Mobile close button */}
        <button
          className="absolute right-4 top-4 text-muted-foreground lg:hidden"
          onClick={onClose}
          aria-label="Fermer le menu"
        >
          <X size={20} />
        </button>

        <div className="flex h-full flex-col p-4">
          {/* Menu items */}
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => item.path && navigate(item.path)}
                className={`flex w-full items-center gap-3 rounded-[14px] px-4 py-3 text-[13px] font-medium transition-all duration-200
                  ${
                    item.label === activeItem
                      ? 'bg-fi-dark text-primary-foreground shadow-[0_8px_18px_rgba(0,0,0,0.25)]'
                      : 'text-fi-gray-600 hover:bg-fi-gray-100 hover:text-foreground'
                  }
                `}
              >
                <item.icon size={16} strokeWidth={item.label === activeItem ? 2.4 : 2} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Settings at bottom */}
          <div className="mt-6 border-t border-border pt-4">
            <button className="flex w-full items-center gap-3 rounded-[14px] px-4 py-3 text-[13px] font-medium text-fi-gray-600 transition-colors hover:bg-fi-gray-100 hover:text-foreground">
              <Settings size={16} />
              <span>Paramètres</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
