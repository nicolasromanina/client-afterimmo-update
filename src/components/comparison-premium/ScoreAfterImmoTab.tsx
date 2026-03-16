/**
 * ScoreAfterImmoTab - Score AfterImmo content tab
 * Shows the verified promoter concept with score card and key metrics
 */
import React from 'react';
import { CheckCircle2, Clock, Eye, FileText, Shield } from 'lucide-react';

/** Progress bar component for score metrics */
const ScoreBar: React.FC<{ label: string; icon: React.ReactNode; value: string; percent: number; color: string }> = ({
  label, icon, value, percent, color,
}) => (
  <div className="flex items-center gap-3 text-[11px] sm:text-[12px]">
    <span className="text-fi-gray-400">{icon}</span>
    <span className="w-[130px] shrink-0 text-fi-gray-600 sm:w-[150px]">{label}</span>
    <div className="h-[6px] flex-1 overflow-hidden rounded-full bg-fi-gray-200">
      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${percent}%`, backgroundColor: color }} />
    </div>
    <span className="w-10 text-right font-semibold" style={{ color }}>{value}</span>
  </div>
);

const ScoreAfterImmoTab: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
      {/* Left: Description */}
      <div className="flex-1">
        <h2 className="text-xl font-bold leading-tight text-foreground sm:text-2xl">
          Votre futur chez-vous, avec{' '}
          <span className="text-fi-orange">un promoteur vérifié</span>
        </h2>
        <p className="mt-4 text-[13px] leading-relaxed text-fi-gray-500">
          Chaque promoteur certifié AfterImmo est contrôlé sur 5 dimensions. Score public,
          documents vérifiés, suivi chantier en temps réel.
        </p>

        {/* 3 feature pills */}
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            { icon: <Shield size={18} />, top: '5', bottom: 'Dimensions vérifiées par promoteur' },
            { icon: <Eye size={18} />, top: 'score /100', bottom: 'Public · Plan Vérifié uniquement' },
            { icon: <Clock size={18} />, top: '< 24h', bottom: 'Réactivité moyenne plans Vérifié+' },
          ].map((f, i) => (
            <div
              key={i}
              className="flex flex-1 flex-col items-center gap-1 rounded-2xl bg-fi-orange px-3 py-3 text-center text-primary-foreground sm:px-4 sm:py-4"
              style={{ minWidth: '100px' }}
            >
              {f.icon}
              <span className="text-[15px] font-bold">{f.top}</span>
              <span className="text-[9px] leading-tight opacity-90">{f.bottom}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="mt-6 rounded-full bg-fi-green px-6 py-3 text-[13px] font-semibold text-primary-foreground shadow-md transition-transform hover:scale-[1.02]">
          Voir les projets certifiés
        </button>
      </div>

      {/* Right: Score Card */}
      <div className="w-full rounded-[20px] border border-fi-gray-200 bg-card p-5 shadow-lg sm:p-6 lg:w-[380px]">
        {/* Card header */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-[13px] font-semibold text-foreground">Score AfterImmo · Plan Vérifié</p>
          </div>
          <span className="flex items-center gap-1 text-[11px] font-medium text-fi-green">
            <CheckCircle2 size={14} /> Certifié
          </span>
        </div>

        {/* Score circle + project info */}
        <div className="flex items-center gap-4">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-4 border-fi-green bg-fi-dark">
            <div className="text-center">
              <span className="text-2xl font-extrabold text-fi-green">82</span>
              <span className="text-[10px] text-fi-gray-300">/100</span>
            </div>
          </div>
          <div>
            <p className="text-[14px] font-bold text-foreground">Résidence Les Palmiers</p>
            <span className="mt-1 inline-block rounded-full bg-fi-orange px-3 py-0.5 text-[10px] font-medium text-primary-foreground">
              Projet sécurisé
            </span>
          </div>
        </div>

        {/* Score bars */}
        <div className="mt-5 space-y-3">
          <ScoreBar label="Documents légaux" icon={<FileText size={12} />} value="26/30" percent={87} color="hsl(142, 76%, 36%)" />
          <ScoreBar label="Capacité financière" icon={<FileText size={12} />} value="16/20" percent={80} color="hsl(14, 100%, 53%)" />
          <ScoreBar label="Transparence chantier" icon={<FileText size={12} />} value="18/20" percent={90} color="hsl(142, 76%, 36%)" />
          <ScoreBar label="Réactivité messages" icon={<FileText size={12} />} value="11/15" percent={73} color="hsl(45, 100%, 51%)" />
          <ScoreBar label="Reputation acheteurs" icon={<FileText size={12} />} value="12/15" percent={80} color="hsl(220, 60%, 50%)" />
        </div>

        {/* Bottom actions */}
        <div className="mt-5 text-center">
          <p className="text-[11px] text-fi-gray-500">Détail des documents</p>
          <p className="text-[10px] text-fi-gray-400">Compte gratuit requis</p>
          <button className="mt-2 w-full rounded-lg bg-fi-orange px-4 py-2 text-[12px] font-semibold text-primary-foreground transition-colors hover:bg-fi-orange-light">
            Débloquer gratuitement
          </button>
          <p className="mt-3 text-[9px] text-fi-gray-400">
            Prochaine vérification : dans 14 jours
          </p>
          <p className="text-[9px] text-fi-gray-400">
            Me Kouadio A, Barreau d'Abidjan
          </p>
        </div>

        <p className="mt-4 text-center text-[9px] text-fi-gray-400">
          Score public · Plan Vérifié Plateforme · Vérifié par Me Kouadio A.
        </p>
      </div>
    </div>
  );
};

export default ScoreAfterImmoTab;
