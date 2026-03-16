/**
 * ComparisonModal - Overlay table comparing 2 or 3 projects side by side
 * Dynamically adapts columns based on number of projects passed
 */
import React from 'react';
import { ArrowRight, AlertTriangle, CheckCircle, X } from 'lucide-react';

interface ComparisonProject {
  name: string;
  subtitle: string;
  zone: string;
  price: string;
  score: number;
  yield: string;
  surface: string;
  type: string;
  delivery: string;
  documentsStatus: 'complete' | 'missing';
  documentsNote?: string;
  construction: string;
  reactivity: string;
  promoter: string;
}

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: ComparisonProject[];
}

const ComparisonModal: React.FC<ComparisonModalProps> = ({ isOpen, onClose, projects }) => {
  if (!isOpen || projects.length < 2) return null;

  const rows: { label: string; key: keyof ComparisonProject }[] = [
    { label: 'ZONE', key: 'zone' },
    { label: 'PRIX F3', key: 'price' },
    { label: 'SCORE/100', key: 'score' },
    { label: 'RENDEMENT BRUT', key: 'yield' },
    { label: 'SURFACE', key: 'surface' },
    { label: 'TYPE', key: 'type' },
    { label: 'LIVRAISON', key: 'delivery' },
    { label: 'CHANTIER', key: 'construction' },
    { label: 'REACTIVITE', key: 'reactivity' },
    { label: 'PROMOTTEUR', key: 'promoter' },
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/50 p-4" onClick={onClose}>
      <div
        className={`relative max-h-[90vh] w-full overflow-auto rounded-[20px] bg-card shadow-2xl ${
          projects.length >= 3 ? 'max-w-[900px]' : 'max-w-[700px]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full p-1 text-muted-foreground hover:bg-fi-gray-100"
        >
          <X size={18} />
        </button>

        {/* Title */}
        <div className="border-b border-border px-6 py-5">
          <h2 className="text-center text-[16px] font-semibold text-foreground">Comparateur de projet</h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-[12px] sm:text-[13px]">
            <thead>
              <tr className="border-b border-border bg-fi-gray-100">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground" />
                {projects.map((p, i) => (
                  <th key={i} className="px-4 py-3 text-center font-semibold text-foreground">
                    <div>{p.name}</div>
                    <div className="text-[11px] font-normal text-muted-foreground">{p.subtitle}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.key} className="border-b border-border">
                  <td className="px-4 py-3 font-semibold text-fi-gray-600">{row.label}</td>
                  {projects.map((p, i) => (
                    <td key={i} className="px-4 py-3 text-center text-foreground">
                      {String(p[row.key])}
                    </td>
                  ))}
                </tr>
              ))}
              {/* Documents row */}
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-semibold text-fi-gray-600">DOCUMENTS</td>
                {projects.map((p, i) => (
                  <td key={i} className="px-4 py-3 text-center">
                    {p.documentsStatus === 'complete' ? (
                      <span className="inline-flex items-center gap-1 text-fi-green">
                        <CheckCircle size={14} /> Complet
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-fi-yellow">
                        <AlertTriangle size={14} /> {p.documentsNote || 'CPA Manquante'}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 border-t border-border p-5">
          {projects.map((p, i) => (
            <button
              key={i}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-[12px] font-semibold text-primary-foreground transition-colors hover:bg-fi-orange-light"
            >
              Voir le projet <ArrowRight size={14} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;
