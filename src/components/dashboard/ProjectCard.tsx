/**
 * ProjectCard - Individual real estate project listing card
 * Shows: image with "Certifié" badge, project details, promoter info,
 * location tags, score badges, price, and action buttons
 */
import React from 'react';
import { MapPin, Eye, Heart } from 'lucide-react';

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
  certified?: boolean;
}

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
}) => {
  return (
    <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        {/* Project image */}
        <div className="relative w-full sm:w-52 md:w-60 h-48 sm:h-auto flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Certified badge */}
          {certified && (
            <div className="absolute top-3 left-3 bg-fi-green text-primary-foreground text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1">
              <span>🏅</span> Certifié
            </div>
          )}
          {/* Type badge */}
          <div className="absolute bottom-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded-md">
            En avant VIP
          </div>
          {/* Favorite button */}
          <button className="absolute top-3 right-3 w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-card transition-colors">
            <Heart size={16} fill="currentColor" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
          {/* Top section */}
          <div>
            {/* Title & Price row */}
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-foreground text-base">{title}</h3>
              <span className="font-bold text-foreground text-sm whitespace-nowrap">{price}</span>
            </div>

            {/* Description */}
            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{description}</p>

            {/* Promoter */}
            <div className="flex items-center gap-2 mb-3">
              <div className="text-[10px] text-muted-foreground">Promu par</div>
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-fi-gray-200" />
                <span className="text-xs font-semibold text-foreground">{promoter}</span>
              </div>
              <div className="w-3 h-3 rounded-full bg-fi-green" />
            </div>

            {/* Aperçu link */}
            <div className="flex items-center justify-end mb-3">
              <button className="flex items-center gap-1 text-xs font-medium text-primary hover:underline">
                <Eye size={12} />
                Aperçu
              </button>
            </div>
          </div>

          {/* Bottom tags & action */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="flex items-center gap-1 text-[10px] text-muted-foreground bg-fi-gray-100 px-2 py-1 rounded-full">
                <MapPin size={10} /> {location}
              </span>
              <span className="text-[10px] text-muted-foreground bg-fi-gray-100 px-2 py-1 rounded-full">
                {type}
              </span>
              <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                Score: {score}/100
              </span>
              <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${
                subScore >= 80 
                  ? 'bg-fi-green/10 text-fi-green' 
                  : 'bg-primary/10 text-primary'
              }`}>
                {subScore}/100 🔥
              </span>
            </div>
            <button className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Rejoindre le projet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
