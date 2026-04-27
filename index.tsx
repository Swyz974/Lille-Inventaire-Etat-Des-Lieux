import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  FileCheck, 
  MapPin, 
  Clock, 
  ShieldCheck,
  ChevronRight,
  ClipboardList
} from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- GLOBAL DATA ---
const CONTACT_PHONE = "06 03 26 78 35";
const CONTACT_PHONE_LINK = "tel:+33603267835";
const CONTACT_EMAIL = "smlsadon@gmail.com";
const WHATSAPP_LINK = "https://wa.me/33603267835?text=Bonjour,%20je%20souhaiterais%20réserver%20une%20prestation%20d'état%20des%20lieux.";

type View = "home" | "legal";

// --- COMPONENTS ---
const Button = ({ children, variant = "primary", className, ...props }) => {
  const base = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full px-6 py-3 text-sm tracking-wide";
  const variants = {
    primary: "bg-ink text-white hover:bg-ink/90 hover:-translate-y-0.5 shadow-float",
    secondary: "bg-surface text-ink border border-slate-200 hover:border-slate-300 hover:bg-slate-50",
    accent: "bg-accent text-white hover:bg-accentDark shadow-float",
    ghost: "bg-transparent text-ink hover:bg-slate-100"
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

const Navbar = ({ onViewChange }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-surface/80 backdrop-blur-md border-b border-slate-200/50 py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div 
          onClick={() => onViewChange("home")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-serif font-bold text-lg">
            L
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-ink">
            Lille<span className="text-accent italic font-light">Inventaire</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button onClick={() => onViewChange("home")} className="text-slate-600 hover:text-ink">Accueil</button>
          <button onClick={() => {
            onViewChange("home");
            setTimeout(() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }), 100);
          }} className="text-slate-600 hover:text-ink">Le Tarif Unique</button>
          
          <div className="flex items-center gap-4">
            <a href={CONTACT_PHONE_LINK} className="flex items-center gap-2 text-ink hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>{CONTACT_PHONE}</span>
            </a>
            <Button variant="primary" onClick={() => window.open(WHATSAPP_LINK, "_blank")}>
              Réserver en 1 clic
            </Button>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Button variant="primary" className="py-2 px-4 shadow-none" onClick={() => window.open(WHATSAPP_LINK, "_blank")}>
            Réserver
          </Button>
        </div>
      </div>
    </nav>
  );
};

// --- VIEWS ---

const Home = () => {
  return (
    <>
      {/* SaaS Landing Hero - Split Layout Variant */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-paper">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/50 block rounded-bl-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              L'Expertise Immobilière Lilloise
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight text-balance text-ink mb-6">
              Sécurisez vos <br />
              <span className="font-serif italic font-light text-accent">relations locatives.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              États des lieux détaillés, impartiaux et certifiés Loi Alur sur la Métropole Lilloise. Protégez votre patrimoine avec un constat sans équivoque.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" className="text-base px-8 py-4" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                Voir notre tarif unique
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="secondary" className="text-base px-8 py-4" onClick={() => window.open(`mailto:${CONTACT_EMAIL}`)}>
                Nous contacter
              </Button>
            </div>
          </motion.div>

          {/* Hero Visual - Premium Floating Interface */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-gold/10 rounded-full blur-3xl opacity-60" />
              <div className="absolute inset-10 bg-white shadow-float rounded-[2rem] border border-slate-100 p-8 flex flex-col justify-between transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-accent/10 text-accent flex items-center justify-center rounded-xl">
                      <FileCheck className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Certifié</span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-ink mb-2">Rapport d'État des Lieux</h3>
                  <p className="text-slate-500 text-sm">Entrée / Sortie • Comparatif complet</p>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Photos HD, compteurs et clés",
                    "Constat exhaustif pièce par pièce",
                    "Signature électronique et sécurisée"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICING SECTION - The Unique Price Focus */}
      <section id="pricing" className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-ink mb-4 text-balance">
              L'excellence à prix fixe. <br/> <span className="italic text-slate-500 text-3xl md:text-4xl">Fini les devis à rallonge.</span>
            </h2>
            <p className="text-lg text-slate-600">
              Pas de mauvaises surprises. Une tarification simple et claire, pensée pour vous faciliter la vie et sécuriser votre bien au juste prix.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-ink rounded-[2rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
              
              <div className="relative z-10 flex-1 w-full text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-white text-xs font-semibold uppercase tracking-widest mb-6">
                  Tarif Unique
                </div>
                <div className="flex items-baseline justify-center md:justify-start gap-2 mb-2">
                  <span className="text-6xl md:text-8xl font-semibold tracking-tighter text-white">150€</span>
                  <span className="text-xl md:text-2xl font-serif italic text-accent/80 font-light">TTC</span>
                </div>
                <div className="text-slate-300 font-medium tracking-wide">
                  Pour tout bien <span className="text-white font-bold border-b border-accent">jusqu'à 99 m²</span>
                </div>
              </div>

              <div className="relative z-10 flex-1 w-full space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-white text-base">Aucune surprise</span>
                      <span className="text-sm text-slate-400">150€ TTC point final. Pas de TVA à ajouter ou de frais cachés.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-white text-base">Particuliers & Professionnels</span>
                      <span className="text-sm text-slate-400">Tarif clair et identique pour les agences ou propriétaires directs.</span>
                    </div>
                  </li>
                </ul>
                <div className="pt-4 border-t border-white/10">
                  <Button variant="accent" className="w-full text-base py-4" onClick={() => window.open(WHATSAPP_LINK, "_blank")}>
                    Planifier mon État des Lieux
                  </Button>
                </div>
              </div>
            </div>

            {/* Over 99m2 constraint */}
            <div className="mt-8 text-center">
              <p className="inline-flex items-center gap-2 text-slate-600 bg-paper py-3 px-6 rounded-full border border-slate-200">
                <span className="font-semibold text-ink">Bien supérieur à 99 m² ?</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
                <a href={CONTACT_PHONE_LINK} className="text-accent hover:underline font-medium">Tarif sur-mesure, contactez-nous</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY US SECTION - Minimal Utility Grid */}
      <section className="py-24 bg-paper border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: ShieldCheck,
                title: "Partie Indépendante",
                desc: "Un regard objectif pour une relation apaisée. Nous protégeons équitablement les intérêts de chaque partie."
              },
              {
                icon: ClipboardList,
                title: "Conformité Loi Alur",
                desc: "Rapports d'une précision chirurgicale, conformes aux dernières exigences légales (photos HD, compteurs, clés)."
              },
              {
                icon: Clock,
                title: "Réactivité Absolue",
                desc: "Intervention rapide sur toute la métropole lilloise avec remise du rapport sous 1 heure après la visite."
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col text-center md:text-left">
                <div className="w-12 h-12 rounded-xl bg-surface border border-slate-200 shadow-sm flex items-center justify-center text-ink mb-6 mx-auto md:mx-0">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-ink mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const Legal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-paper pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-serif font-bold text-ink mb-12">Mentions Légales</h1>
        
        <div className="bg-surface rounded-2xl shadow-soft p-8 md:p-12 space-y-10 text-slate-700 leading-relaxed border border-slate-100">
          <section>
            <h2 className="text-xl font-bold text-ink mb-4">1. Éditeur du site</h2>
            <p><strong>Nom commercial :</strong> Lille Inventaire</p>
            <p><strong>Statut juridique :</strong> Micro-entreprise (Auto-entrepreneur)</p>
            <p><strong>SIRET :</strong> 910 130 749 00013</p>
            <p><strong>Directeur de la publication :</strong> Samuel Sadon</p>
            <p><strong>Contact :</strong> {CONTACT_EMAIL} / {CONTACT_PHONE}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-4">2. Hébergement</h2>
            <p>Ce site est hébergé par Vercel Inc. (340 S Lemon Ave #4133 Walnut, CA 91789, USA).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-4">3. Tarification & TVA</h2>
            <p>TVA non applicable, art. 293 B du CGI. Le tarif de 150€ TTC est un tarif net à payer, s'appliquant aux biens de type logement (appartement, maison) d'une surface allant jusqu'à 99 m² inclus. Au-delà, un devis spécifique sera établi.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-4">4. Médiation de la consommation</h2>
            <p>Conformément aux dispositions du Code de la consommation, le client a le droit de recourir gratuitement à un service de médiation. Médiateur proposé :<br/>
            La Société Médiation Professionnelle (www.mediateur-consommation-smp.fr).</p>
          </section>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ onViewChange }) => {
  return (
    <footer className="bg-ink text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
        
        <div className="md:col-span-4">
          <div className="flex items-center gap-2 mb-6 text-white">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center font-serif font-bold text-lg">
              L
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">
              Lille<span className="text-slate-500 italic font-light">Inventaire</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Expertise indépendante en états des lieux sur la métropole lilloise. Neutralité garantie, rapports certifiés pour sécuriser au mieux propriétaires et locataires.
          </p>
        </div>

        <div className="md:col-span-4 md:col-start-6">
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-slate-500" />
              <a href={CONTACT_PHONE_LINK} className="hover:text-white transition-colors">{CONTACT_PHONE}</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-slate-500" />
              <span>Lille, Roubaix, Tourcoing & Métropole</span>
            </li>
            <li className="mt-4">
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:text-white transition-colors underline underline-offset-4">
                 {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Légal</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <button onClick={() => onViewChange("legal")} className="hover:text-white transition-colors">Mentions Légales & CGV</button>
            </li>
            <li>
              <span className="text-slate-600">SIRET: 910 130 749 00013</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [view, setView] = useState<View>("home");

  const handleViewChange = (newView: View) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-ink bg-paper min-h-screen flex flex-col">
      <Navbar onViewChange={handleViewChange} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {view === "home" ? <Home /> : <Legal />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer onViewChange={handleViewChange} />
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);