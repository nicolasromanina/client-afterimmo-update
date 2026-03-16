/**
 * ProjectCard - Property project card with image, badges, details, price, and actions
 * Includes "Comparer ce projet" toggle button for comparison selection
 */
import React from 'react';
import { Heart, AlertTriangle, Lock, Check } from 'lucide-react';

export interface ProjectCardProps {
  image: string;
  status: 'certified' | 'published';
  score?: number;
  location: string;
  name: string;
  type: string;
  delivery: string;
  units: string;
  tags: string[];
  price?: string;
  priceNote?: string;
  availableUnits?: string;
  warning?: string;
  locked?: boolean;
  /** Whether this card is selected for comparison */
  isSelectedForComparison?: boolean;
  /** Callback when user toggles comparison selection */
  onToggleCompare?: () => void;
  /** Whether comparison selection is disabled (max reached) */
  compareDisabled?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  status,
  score,
  location,
  name,
  type,
  delivery,
  units,
  tags,
  price,
  availableUnits,
  warning,
  locked,
  isSelectedForComparison = false,
  onToggleCompare,
  compareDisabled = false,
}) => {
  return (
    <div
      className={`relative flex w-full flex-col overflow-hidden rounded-[16px] bg-card shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-200 ${
        isSelectedForComparison ? 'ring-2 ring-primary ring-offset-2' : ''
      }`}
    >
      {/* Image section */}
      <div className="relative h-[160px] w-full overflow-hidden sm:h-[180px]">
        <img src={image} alt={name} className="h-full w-full object-cover" />

        {/* Status badge */}
        <span
          className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-[10px] font-semibold text-primary-foreground ${
            status === 'certified' ? 'bg-fi-green' : 'bg-fi-gray-500'
          }`}
        >
          {status === 'certified' ? 'Certifié' : 'Publié'}
        </span>

        {/* Score badge */}
        {score !== undefined && (
          <span className="absolute bottom-3 left-3 rounded-md bg-fi-orange px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
            Score: {score}/100
          </span>
        )}

        {/* Favorite heart */}
        <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110">
          <Heart size={16} fill="currentColor" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Location + name */}
        <div className="mb-2">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-foreground">
            {location}
            {score !== undefined && (
              <span className="ml-2 inline-flex items-center gap-0.5 text-fi-green">
                {score}/100 <span className="text-fi-green">●</span>
              </span>
            )}
          </p>
          <h3 className="mt-0.5 text-[14px] font-semibold text-foreground">{name}</h3>
          <p className="text-[11px] text-muted-foreground">
            {type} · Livraison {delivery} · {units}
          </p>
        </div>

        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-fi-gray-100 px-2 py-0.5 text-[10px] font-medium text-fi-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Warning if present */}
        {warning && (
          <div className="mb-3 rounded-lg border border-destructive/30 bg-destructive/5 p-2.5 text-[11px] text-destructive">
            <div className="mb-1 flex items-center gap-1">
              <AlertTriangle size={12} />
              <span className="font-semibold">Attention</span>
            </div>
            {warning}
          </div>
        )}

        {/* Price */}
        <div className="mb-3 mt-auto">
          {price ? (
            <div className="flex items-baseline gap-2">
              <span className="text-[15px] font-bold text-foreground">{price}</span>
              {availableUnits && (
                <span className="text-[11px] font-medium text-primary">{availableUnits}</span>
              )}
            </div>
          ) : (
            <p className="text-[13px] font-semibold uppercase text-muted-foreground">Prix sur demande</p>
          )}
        </div>

        {/* Action buttons */}
        <div className="space-y-2">
          {price ? (
            <button className="w-full rounded-lg bg-primary py-2.5 text-[12px] font-semibold text-primary-foreground transition-colors hover:bg-fi-orange-light">
              Contacter un promoteur
            </button>
          ) : (
            <button className="w-full rounded-lg border border-border bg-card py-2.5 text-[12px] font-semibold text-foreground transition-colors hover:bg-fi-gray-100">
              Demander des informations
            </button>
          )}
          <button className="w-full rounded-lg bg-fi-dark py-2.5 text-[12px] font-semibold text-primary-foreground transition-colors hover:bg-fi-gray-700">
            Voir le projet complet
          </button>

          {/* Compare toggle button */}
          {!locked && (
            <button
              onClick={onToggleCompare}
              disabled={compareDisabled && !isSelectedForComparison}
              className={`flex w-full items-center justify-center gap-1.5 rounded-lg py-2.5 text-[12px] font-medium transition-all duration-200 ${
                isSelectedForComparison
                  ? 'bg-fi-green/10 text-fi-green border border-fi-green/30'
                  : compareDisabled
                    ? 'text-muted-foreground/50 cursor-not-allowed'
                    : 'text-muted-foreground hover:text-foreground hover:bg-fi-gray-100'
              }`}
            >
              {isSelectedForComparison ? (
                <>
                  <Check size={14} /> Sélectionné pour comparaison
                </>
              ) : (
                '+ Comparer ce projet'
              )}
            </button>
          )}
        </div>

        {/* Locked overlay for incomplete projects */}
        {locked && (
          <div className="mt-2 flex items-center gap-1.5 text-[10px] text-muted-foreground">
            <Lock size={11} />
            Score et documents complets disponibles sur plan vérifié
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
