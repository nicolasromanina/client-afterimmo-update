/**
 * DashboardHeader - Top pill header with diagonal background
 * Contains: Logo, nav links, notification icons, user disconnect button
 * Welcome message displayed below the nav
 */
import React from 'react';
import { Bell, ChevronDown, Mail, User } from 'lucide-react';
import headerBg from '@/assets/header-bg.jpg';
import logoIcon from '@/assets/logo-icon.png';

interface DashboardHeaderProps {
  title: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title = 'Bonjour et Bienvenue' }) => {
  return (
    <header className="relative w-full min-h-[150px] overflow-hidden rounded-[28px] bg-fi-dark shadow-[0_14px_36px_rgba(0,0,0,0.28)]">
      {/* Background image (diagonal stripes) */}
      <img
        src={headerBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />

      {/* Content overlay */}
      <div className="relative z-10 px-5 sm:px-7 lg:px-10 pt-4 sm:pt-5 pb-6 sm:pb-7">
        {/* Top navigation bar */}
        <div className="flex items-center justify-between gap-3">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <img src={logoIcon} alt="Afterimmo" className="" />
          </div>

          {/* Center nav links */}
          <nav className="hidden md:flex items-center rounded-full border border-white/15 bg-[#2b2b2b]/80 px-2 py-1 shadow-inner backdrop-blur">
            {['Accueil', 'Annuaires', 'Nos projets'].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 text-[13px] font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="Messages"
            >
              <Mail size={18} />
            </button>
            <button
              className="relative text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="Notifications"
            >
              <Bell size={18} />
              {/* Notification dot */}
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary" />
            </button>

            {/* Disconnect button */}
            <button className="flex items-center gap-2 rounded-full bg-primary px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              {/* Avatar placeholder */}
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/20">
                <User size={14} />
              </span>
              <span className="hidden sm:inline">Se Déconnecter</span>
              <ChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Welcome text */}
        <div className="text-center pt-5 sm:pt-6">
          <h1 className="text-[22px] sm:text-[26px] font-medium text-primary-foreground">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
