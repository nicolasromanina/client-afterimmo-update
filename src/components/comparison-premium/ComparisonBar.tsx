/**
 * ComparisonBar - Floating bottom bar showing selected projects count
 * Appears when 1+ projects are selected, enables comparison when 2+ selected
 */
import React from 'react';
import { X, ArrowRight } from 'lucide-react';

interface ComparisonBarProps {
  selectedCount: number;
  maxCount: number;
  onCompare: () => void;
  onClear: () => void;
}

const ComparisonBar: React.FC<ComparisonBarProps> = ({
  selectedCount,
  maxCount,
  onCompare,
  onClear,
}) => {
  if (selectedCount === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-4 duration-300">
      <div className="mx-auto max-w-[700px] px-4 pb-4">
        <div className="flex items-center justify-between gap-4 rounded-2xl bg-fi-dark px-5 py-3.5 shadow-[0_-4px_30px_rgba(0,0,0,0.2)]">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[14px] font-bold text-primary-foreground">
              {selectedCount}
            </span>
            <span className="text-[13px] font-medium text-primary-foreground">
              {selectedCount === 1
                ? 'projet sélectionné'
                : 'projets sélectionnés'}
              <span className="ml-1 text-fi-gray-400">/ {maxCount} max</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClear}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-[12px] font-medium text-fi-gray-400 transition-colors hover:text-primary-foreground"
            >
              <X size={14} /> Effacer
            </button>
            <button
              onClick={onCompare}
              disabled={selectedCount < 2}
              className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-[12px] font-semibold transition-all ${
                selectedCount >= 2
                  ? 'bg-primary text-primary-foreground hover:bg-fi-orange-light'
                  : 'bg-fi-gray-600 text-fi-gray-400 cursor-not-allowed'
              }`}
            >
              Comparer <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonBar;
