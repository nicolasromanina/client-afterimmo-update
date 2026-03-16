/**
 * Index page - Comparateur Premium dashboard
 * Layout: Header, Sidebar + Main content area with filters and project cards, Footer
 * UX: Users select 2-3 projects via "Comparer ce projet" buttons, then compare
 */
import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProjectCard from '@/components/comparison-premium/ProjectCard';
import ComparisonModal from '@/components/comparison-premium/ComparisonModal';
import ComparisonBar from '@/components/comparison-premium/ComparisonBar';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import DashboardSidebar from '../dashboard/DashboardSidebar';

const MAX_COMPARE = 3;

/* Mock project data with IDs */
const projects = [
  {
    id: 'p1',
    image: project1,
    status: 'certified' as const,
    score: 90,
    location: 'COCODY · RIVIERA 3',
    name: 'Résidence Les Palmiers',
    type: 'F3 / F4',
    delivery: 'T2 2026',
    units: '48 appartements',
    tags: ['Documents', 'Garantie', 'Chantier'],
    price: '68 000 000 FCFA · F3',
    availableUnits: '8 appts restants / 48',
  },
  {
    id: 'p2',
    image: project2,
    status: 'certified' as const,
    score: 75,
    location: 'MARCORY · ZONE 4',
    name: 'Eden Park Résidences',
    type: 'F2 / F3',
    delivery: 'T4 2025',
    units: '32 appts',
    tags: ['Documents', 'Chantier', 'Réactivité ABK'],
    price: '52 000 000 FCFA · F3',
    availableUnits: '8 appts restants / 48',
  },
  {
    id: 'p3',
    image: project3,
    status: 'published' as const,
    location: 'COCODY · 2 PLATEAUX',
    name: 'Résidence Panorama C1',
    type: 'F3 / F4',
    delivery: '',
    units: 'Délai non confirmé · Fiche basique',
    tags: [],
    warning: "Ce projet n'a pas encore obtenu le badge Vérifié. Score AfterImmo non disponible.",
    locked: true,
  },
];

/* Comparison data mapped by project ID */
const comparisonDataMap: Record<string, any> = {
  p1: {
    name: 'Résidence les Palmiers',
    subtitle: 'Cocody · Riviera 3',
    zone: 'Cocody · Riviera 3',
    price: '68 000 000 FCFA',
    score: 87,
    yield: '7.8%',
    surface: '88 m²',
    type: 'F3/F4',
    delivery: 'T3 2026',
    documentsStatus: 'complete',
    construction: '68%.0sem.retard',
    reactivity: '8h34',
    promoter: 'SODEXI',
  },
  p2: {
    name: 'Eden park Résidences',
    subtitle: 'Marcory · Zone 4',
    zone: 'Marcory · Zone 4',
    price: '52 000 000 FCFA',
    score: 61,
    yield: '9.2%',
    surface: '75 m²',
    type: 'F2/F3',
    delivery: 'T4 2026',
    documentsStatus: 'missing',
    documentsNote: 'CPA Manquante',
    construction: '45%.2sem.retard',
    reactivity: '<48h',
    promoter: 'Group Eden CI',
  },
};

const ComparisonPremium: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Projets');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const tabs = ['Projets', 'Score AfterImmo', 'Garanties'];

  const toggleCompare = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const comparisonProjects = useMemo(
    () => selectedIds.map((id) => comparisonDataMap[id]).filter(Boolean),
    [selectedIds]
  );

  const handleCompare = () => {
    if (comparisonProjects.length >= 2) {
      setComparisonOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">

      <div className="mx-auto flex max-w-[1400px] gap-6 px-4 py-6 sm:px-6 lg:px-8">


        <main className="flex-1 min-w-0">

          {/* Search and filter */}
          <div className="mb-6 rounded-[18px] bg-fi-gray-100 p-4 sm:p-6">
            <h3 className="mb-4 text-center text-[15px] font-semibold text-foreground sm:text-[16px]">
              Recherche et filtre
            </h3>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap text-[12px] text-muted-foreground">Trier par</span>
                <button className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-[12px] font-medium text-foreground">
                  Score de confiance <ChevronDown size={14} />
                </button>
              </div>
              <label className="flex items-center gap-2 text-[12px] text-muted-foreground">
                <input type="checkbox" className="h-4 w-4 rounded border-border accent-primary" />
                Vérifiés uniquement
              </label>
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Pays, ville, quartier,..."
                  className="w-full rounded-lg border border-border bg-card px-3 py-2 pr-10 text-[12px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Search size={12} />
                </button>
              </div>
            </div>
            <button className="mt-4 flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-[12px] font-semibold text-primary-foreground transition-colors hover:bg-fi-orange-light">
              <SlidersHorizontal size={14} />
              Filtres avancés
            </button>
          </div>

          {/* Project cards grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                isSelectedForComparison={selectedIds.includes(project.id)}
                onToggleCompare={() => toggleCompare(project.id)}
                compareDisabled={selectedIds.length >= MAX_COMPARE}
              />
            ))}
          </div>

          {/* Spacer for floating bar */}
          {selectedIds.length > 0 && <div className="h-20" />}
        </main>
      </div>

      {/* Floating comparison bar */}
      <ComparisonBar
        selectedCount={selectedIds.length}
        maxCount={MAX_COMPARE}
        onCompare={handleCompare}
        onClear={() => setSelectedIds([])}
      />

      {/* Comparison modal */}
      {comparisonProjects.length >= 2 && (
        <ComparisonModal
          isOpen={comparisonOpen}
          onClose={() => setComparisonOpen(false)}
          projects={comparisonProjects as any}
        />
      )}

    </div>
  );
};

export default ComparisonPremium;
