/**
 * GarantiesTab - Guarantees tab content
 * Shows construction safety features, testimonials, and FAQ
 */
import React, { useState } from 'react';
import { ChevronDown, Eye, Scale, Timer, Star, Plus } from 'lucide-react';

/** Feature card */
const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="rounded-2xl border border-fi-gray-200 bg-card p-5 transition-shadow hover:shadow-md">
    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-fi-orange/10 text-fi-orange">
      {icon}
    </div>
    <h4 className="mb-2 text-[13px] font-bold text-fi-orange">{title}</h4>
    <p className="text-[11px] leading-relaxed text-fi-gray-500">{description}</p>
  </div>
);

/** Testimonial card */
const TestimonialCard: React.FC<{ name: string; location: string; text: string; stars: number }> = ({ name, location, text, stars }) => (
  <div className="rounded-2xl border border-fi-gray-200 bg-card p-5">
    {/* Stars */}
    <div className="mb-2 flex gap-0.5">
      {Array.from({ length: stars }).map((_, i) => (
        <Star key={i} size={14} className="fill-fi-yellow text-fi-yellow" />
      ))}
    </div>
    {/* Badge */}
    <span className="mb-3 inline-block rounded-full bg-fi-green px-2 py-0.5 text-[9px] font-semibold text-primary-foreground">
      Achat vérifié
    </span>
    <p className="mb-4 text-[11px] leading-relaxed text-fi-gray-600">{text}</p>
    {/* Author */}
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-fi-orange text-[12px] font-bold text-primary-foreground">
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-[12px] font-semibold text-foreground">{name}</p>
        <p className="text-[10px] text-fi-gray-400">{location}</p>
      </div>
    </div>
  </div>
);

/** FAQ accordion item */
const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-fi-gray-200 bg-card">
      <button
        className="flex w-full items-center justify-between px-5 py-4 text-left text-[13px] font-medium text-foreground"
        onClick={() => setOpen(!open)}
      >
        <span>{question}</span>
        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${open ? 'bg-fi-orange text-primary-foreground' : 'bg-fi-orange text-primary-foreground'}`}>
          <Plus size={14} className={`transition-transform ${open ? 'rotate-45' : ''}`} />
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-[12px] leading-relaxed text-fi-gray-500">
          {answer}
        </div>
      )}
    </div>
  );
};

const GarantiesTab: React.FC = () => {
  const faqs = [
    { q: "Comment acheter depuis l'étranger sans me déplacer ?", a: "Grâce à notre plateforme, vous pouvez suivre toutes les étapes d'achat à distance, avec des documents vérifiés et un suivi en temps réel." },
    { q: 'Un promoteur « Vérifié » garantit-il la livraison ?', a: "Le label Vérifié atteste que le promoteur a été contrôlé sur 5 dimensions clés. C'est un gage de transparence et de sérieux." },
    { q: 'Puis-je obtenir un crédit immobilier depuis la France/UK/Canada ?', a: "Oui, nous avons des partenaires bancaires qui proposent des solutions de financement pour les non-résidents." },
    { q: 'Quelle est la fiscalité pour un non-résident propriétaire en CI ?', a: "La fiscalité dépend de votre pays de résidence et des conventions fiscales en vigueur. Nous vous accompagnons dans ces démarches." },
    { q: "Pourquoi certains projets n'ont-ils pas de Score AfterImmo ?", a: "Seuls les promoteurs ayant soumis leurs documents à notre processus de vérification reçoivent un Score AfterImmo." },
  ];

  return (
    <div className="space-y-12">
      {/* Hero text */}
      <div className="text-center">
        <h2 className="text-xl font-bold leading-tight text-foreground sm:text-2xl">
          80% des constructions<br />
          en CI sont <span className="text-fi-orange underline decoration-fi-orange decoration-2 underline-offset-4">sans permis</span>
        </h2>
      </div>

      {/* 3 feature cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <FeatureCard
          icon={<Scale size={20} />}
          title="Vérification juridique"
          description="ACO, TF, agrément CNP-CI, permis de construire : chaque document contrôlé par un avocat au Barreau d'Abidjan."
        />
        <FeatureCard
          icon={<Eye size={20} />}
          title="Suivi chantier en temps réel"
          description="Photos datées, 3 à 4 jours par visite, vérifié sur place, alertes inclus. Vous savez exactement où en est votre bien."
        />
        <FeatureCard
          icon={<Timer size={20} />}
          title="Réactivité mesurée"
          description="Le délai moyen de réponse du promoteur est mesuré automatiquement et intégré dans le Score AfterImmo."
        />
      </div>

      {/* Testimonials section */}
      <div>
        <h3 className="mb-6 text-center text-xl font-bold text-foreground sm:text-2xl">
          Ce que dit <span className="text-fi-orange">la diaspora</span>
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <TestimonialCard
            name="Kofi M."
            location="Lyon · Investisseur · Abidjan 2"
            stars={5}
            text="J'ai failli tomber dans le panneau d'un promoteur sans agrément CNP-CI. AfterImmo m'a montré le score 34/100 avant que je signe quoi que ce soit. Ça m'a sauvé 90 millions FCFA."
          />
          <TestimonialCard
            name="Amina T."
            location="Londres · Résidence principale · Cocody"
            stars={5}
            text="En tant qu'Ivoirienne à Londres, impossible de vérifier les chantiers depuis là-bas. Les photos datées toutes les 2 semaines sur AfterImmo, c'est exactement ce qu'il me fallait pour avoir confiance."
          />
          <TestimonialCard
            name="Kofi M."
            location="Lyon · Investisseur · Abidjan 2"
            stars={5}
            text="J'ai failli tomber dans le panneau d'un promoteur sans agrément CNP-CI. AfterImmo m'a montré le score 34/100 avant que je signe quoi que ce soit. Ça m'a sauvé 90 millions FCFA."
          />
        </div>
      </div>

      {/* FAQ section */}
      <div>
        <h3 className="mb-6 text-center text-xl font-bold text-foreground sm:text-2xl">
          Ce que vous vous<br />
          <span className="italic text-fi-orange">demandez toujours</span>
        </h3>
        <div className="mx-auto max-w-2xl space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GarantiesTab;
