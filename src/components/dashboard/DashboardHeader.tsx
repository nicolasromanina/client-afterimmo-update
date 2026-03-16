/**
 * DashboardHeader - Top navigation bar with dark geometric background
 * Contains: Logo, nav links, notification icons, user disconnect button
 * Welcome message displayed below the nav
 */
import React from 'react';
import { Mail, Bell, ChevronDown } from 'lucide-react';
import headerBg from '@/assets/header-bg.jpg';
import logoIcon from '@/assets/logo-icon.png';

interface DashboardHeaderProps {
  title?: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title = 'Bonjour et Bienvenue' }) => {
  return (
    <header
      className="relative w-full bg-fi-dark overflow-hidden"
    >
      {/* Background image */}
      <img
        src={headerBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Content overlay */}
      <div className="relative z-10">
        {/* Top navigation bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logoIcon} alt="First Immo" className="w-7 h-7 object-contain" />
            <span className="text-primary-foreground font-bold text-lg tracking-tight">
              FIRST IMMO
            </span>
          </div>

          {/* Center nav links - hidden on mobile */}
          <nav className="hidden md:flex items-center bg-fi-gray-700/50 backdrop-blur-sm rounded-full px-1 py-1">
            {['Accueil', 'Annuaires', 'Nos projets'].map((item) => (
              <a
                key={item}
                href="#"
                className="px-5 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-full transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Mail size={20} />
            </button>
            <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors relative">
              <Bell size={20} />
            </button>
            {/* Disconnect button */}
            <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors">
              {/* Avatar placeholder */}
              <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="text-xs">👤</span>
              </div>
              <span className="hidden sm:inline">Se Déconnecter</span>
              <ChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Welcome text */}
        <div className="text-center pb-8 pt-2 sm:pb-10 sm:pt-4">
          <h1 className="text-2xl sm:text-3xl font-medium text-primary-foreground">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
