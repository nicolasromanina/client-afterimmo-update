/**
 * ProjectCard - Individual real estate project listing card
 * Shows: image with badges, project details, promoter info,
 * location tags, score badges, price, and action buttons
 */
import React from 'react';
import { Eye, Flame, Heart, MapPin } from 'lucide-react';

type FeaturedTone = 'orange' | 'blue';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  promoter: string;
  location: string;
  type: string;
  score: number;
  subScore: number;
  certified: boolean;
  featuredLabel: string;
  featuredTone: FeaturedTone;
}

const featuredToneClasses: Record<FeaturedTone, string> = {
  orange: 'bg-[#F59E0B]',
  blue: 'bg-[#3B82F6]',
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  price,
  promoter,
  location,
  type,
  score,
  subScore,
  certified = true,
  featuredLabel = 'En avant VIP',
  featuredTone = 'orange',
}) => {
  return (
    <div className="overflow-hidden rounded-[20px] border border-border bg-card shadow-[0_10px_22px_rgba(0,0,0,0.06)]">
      <div className="flex flex-col sm:flex-row">
        {/* Project image */}
        <div className="relative h-48 w-full flex-shrink-0 sm:h-auto sm:w-56">
          <img src={image} alt={title} className="h-full w-full object-cover" />

          {/* Certified badge */}
          {certified && (
            <div className="absolute left-3 top-3 flex items-center gap-1 rounded-md bg-[#111111]/80 px-2 py-1 text-[10px] font-semibold text-white">
              Certifié
            </div>
          )}

          {/* Featured badge */}
          <div
            className={`absolute bottom-3 left-3 rounded-md px-2 py-1 text-[10px] font-bold text-white ${featuredToneClasses[featuredTone]}`}
          >
            {featuredLabel}
          </div>

          {/* Favorite button */}
          <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-primary transition-colors hover:bg-white">
            <Heart size={14} fill="currentColor" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
          {/* Top section */}
          <div>
            {/* Title & Price */}
            <div className="mb-2 flex items-start justify-between gap-3">
              <h3 className="text-[14px] font-semibold text-foreground">{title}</h3>
              <div className="flex flex-col items-end gap-1">
                <span className="whitespace-nowrap text-[12px] font-bold text-foreground">
                  {price}
                </span>
                <button className="flex items-center gap-1 text-[11px] font-medium text-[#2F7BFF] hover:underline">
                  <Eye size={12} />
                  Aperçu
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="mb-3 text-[11px] text-muted-foreground">{description}</p>

            {/* Promoter */}
            <div className="mb-3 flex items-center gap-2">
              <span className="text-[10px] text-muted-foreground">Promu par</span>
              <div className="flex items-center gap-1.5">
                <div className="h-6 w-6 rounded-full bg-fi-gray-200" />
                <span className="text-[11px] font-semibold text-foreground">{promoter}</span>
              </div>
              <div className="h-2 w-2 rounded-full bg-fi-green" />
            </div>
          </div>

          {/* Bottom tags & action */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="flex items-center gap-1 rounded-full bg-fi-gray-100 px-2 py-1 text-[10px] text-muted-foreground">
                <MapPin size={10} /> {location}
              </span>
              <span className="rounded-full bg-fi-gray-100 px-2 py-1 text-[10px] text-muted-foreground">
                {type}
              </span>
              <span className="rounded-full bg-[#E8F5EA] px-2 py-1 text-[10px] font-semibold text-fi-green">
                Score: {score}/100
              </span>
              <span className="flex items-center gap-1 rounded-full bg-[#F3F1FF] px-2 py-1 text-[10px] font-semibold text-primary">
                {subScore}/100
                <Flame size={10} />
              </span>
            </div>
            <button className="rounded-full bg-[#D9D9D9] px-4 py-2 text-[11px] font-semibold text-[#3A3A3A] transition-colors hover:bg-[#CFCFCF]">
              Rejoindre le projet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
