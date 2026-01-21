import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

// --- Composants SVG Icones ---
interface IconProps {
  className?: string;
}

const PhoneIcon = ({ className }: IconProps) => (
  // Fixed typo in SVG path: changed 19.79(19.79 to 19.79 19.79
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const CheckIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"></polyline></svg>
);
const ClipboardIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
);
const KeyIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.75m.25-2.25l1-1 3 3"></path></svg>
);
const CubeIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
);
const ClockIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);
const MapPinIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const ChevronRightIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="9 18 15 12 9 6"></polyline></svg>
);
const ArrowLeftIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);

// --- Composants UI ---

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  // Fixed error: children must be optional in the interface to allow passing them as JSX content
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 border text-base font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-dark bg-gold hover:bg-goldhover shadow-sm focus:ring-gold",
    secondary: "border-white text-white hover:bg-white hover:text-forest focus:ring-white",
    outline: "border-forest text-forest bg-transparent hover:bg-forest hover:text-white",
    ghost: "border-transparent text-dark hover:bg-gray-100",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// --- Sections & Pages ---

const Navbar = ({ onNavigate, currentView }: { onNavigate: (view: 'home' | 'services') => void, currentView: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navColorClass = (isScrolled || currentView === 'services') ? 'text-forest' : 'text-white';
  const logoAccentClass = (isScrolled || currentView === 'services') ? 'text-forest/80' : 'text-gold';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || currentView === 'services' ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div 
          onClick={() => onNavigate('home')}
          className={`text-2xl font-bold tracking-tight cursor-pointer ${navColorClass}`}
        >
          Lille<span className={logoAccentClass}>Inventaire</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => onNavigate('home')} className={`font-medium hover:text-gold transition-colors ${navColorClass}`}>Accueil</button>
          <button onClick={() => onNavigate('services')} className={`font-medium hover:text-gold transition-colors ${navColorClass}`}>Nos Tarifs</button>
          
          <div className="flex items-center space-x-4 ml-4">
            <a href="tel:0600000000" className={`font-semibold flex items-center ${navColorClass}`}>
              <PhoneIcon className="w-4 h-4 mr-2" />
              06 00 00 00 00
            </a>
            <Button variant="primary" className="py-2 px-4 text-sm" onClick={() => onNavigate('services')}>
              Devis Rapide
            </Button>
          </div>
        </div>

        <div className="md:hidden">
             <Button variant="primary" className="py-2 px-3 text-xs" onClick={() => onNavigate('services')}>Devis</Button>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ onNavigate }: { onNavigate: (view: 'home' | 'services') => void }) => {
  return (
    <section className="relative bg-forest pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#fff" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
        <div className="lg:w-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            L’expert de vos états des lieux sur la <span className="text-gold">Métropole Lilloise</span>.
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
            Sécurisez vos locations grâce à une expertise indépendante à Lille, Roubaix, Tourcoing et environs. Conformité Loi Alur garantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="primary" className="shadow-lg transform hover:-translate-y-1" onClick={() => onNavigate('services')}>
              Obtenir un devis gratuit
            </Button>
            <Button variant="secondary" onClick={() => onNavigate('services')}>
              Découvrir nos services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- SERVICES PAGE COMPONENT ---

const ServicesPage = ({ onNavigate }: { onNavigate: (view: 'home' | 'services') => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pricingData = [
    {
      category: "États des Lieux (EDL)",
      description: "Constat exhaustif et certifié Loi Alur.",
      icon: <ClipboardIcon className="w-8 h-8 text-forest" />,
      tiers: [
        { label: "< 25m²", price: "120€ HT" },
        { label: "< 40m²", price: "140€ HT" },
        { label: "< 80m²", price: "160€ HT" },
        { label: "> 80m²", price: "À définir" },
      ]
    },
    {
      category: "Visites Virtuelles 3D",
      description: "Technologie Matterport pour une immersion totale.",
      icon: <CubeIcon className="w-8 h-8 text-forest" />,
      tiers: [
        { label: "< 25m²", price: "70€ HT" },
        { label: "< 40m²", price: "100€ HT" },
        { label: "< 80m²", price: "150€ HT" },
        { label: "> 80m²", price: "À définir" },
      ]
    }
  ];

  const flatServices = [
    {
      title: "Visites Candidats Locataires",
      prices: ["40€ HT par visite", "Forfait : 90€ HT pour 3 visites"],
      icon: <KeyIcon className="w-6 h-6 text-white" />
    },
    {
      title: "Interventions Techniques",
      prices: ["45€ HT / heure (en présentiel)"],
      icon: <ClockIcon className="w-6 h-6 text-white" />
    }
  ];

  return (
    <div className="bg-cream min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center text-forest font-semibold mb-8 hover:translate-x-1 transition-transform"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" /> Retour à l'accueil
        </button>

        <header className="mb-16 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-forest mb-4">Nos Prestations & Tarifs</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Une tarification transparente et adaptée à chaque bien. Tous nos prix sont indiqués Hors Taxes (HT).
          </p>
        </header>

        {/* Pricing Grid - Surface based */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {pricingData.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-soft overflow-hidden border border-gray-100 transition-all hover:shadow-xl">
              <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-white">
                <div>
                  <h3 className="text-2xl font-bold text-dark">{service.category}</h3>
                  <p className="text-gray-500 mt-1">{service.description}</p>
                </div>
                <div className="bg-gold/10 p-4 rounded-full">
                  {service.icon}
                </div>
              </div>
              <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {service.tiers.map((tier, tIdx) => (
                  <div key={tIdx} className="text-center p-4 rounded-xl bg-cream border border-gray-50">
                    <p className="text-sm text-gray-500 mb-2 font-medium">{tier.label}</p>
                    <p className="text-lg font-bold text-forest">{tier.price}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
                 <Button variant="primary" className="w-full">Réserver ce service</Button>
              </div>
            </div>
          ))}
        </div>

        {/* Flat Rate Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-forest mb-10 text-center">Accompagnement & Logistique</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {flatServices.map((service, idx) => (
              <div key={idx} className="flex items-start p-8 bg-forest rounded-2xl text-white shadow-lg relative overflow-hidden group">
                <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-125 transition-transform duration-500">
                   <div className="w-40 h-40 bg-white rounded-full"></div>
                </div>
                <div className="bg-gold/20 p-4 rounded-xl mr-6 relative z-10">
                  {service.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.prices.map((price, pIdx) => (
                      <li key={pIdx} className="flex items-center text-gold font-semibold text-lg">
                        <CheckIcon className="w-5 h-5 mr-3 text-white" />
                        {price}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <section className="bg-white rounded-3xl p-10 lg:p-16 shadow-xl border border-gold/20 text-center">
          <h2 className="text-3xl font-bold text-forest mb-6">Besoin d'un devis sur-mesure ?</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Pour les surfaces supérieures à 80m², les immeubles entiers ou les besoins récurrents, nous proposons des tarifs dégressifs. Contactez-nous pour une proposition personnalisée.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:0600000000" className="bg-forest text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:bg-forest/90 transition-all">
              <PhoneIcon className="w-5 h-5 mr-3" /> 06 00 00 00 00
            </a>
            <Button variant="outline" className="px-8 py-4 text-lg">
              Envoyer un email
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

// --- Home Components ---

const MainService = () => {
  return (
    <section id="services" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-12 lg:mb-0">
            <div className="absolute top-0 left-0 -ml-4 -mt-4 w-full h-full bg-gold rounded-lg transform translate-x-4 translate-y-4 opacity-20"></div>
            <div className="relative bg-white rounded-lg shadow-xl p-8 border-l-4 border-forest">
              <div className="flex items-center mb-6">
                <div className="bg-forest/10 p-3 rounded-full mr-4">
                  <ClipboardIcon className="w-8 h-8 text-forest" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark">Rapport d'État des Lieux</h3>
                  <p className="text-sm text-gray-500">Document certifié conforme</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  "Inventaire détaillé pièce par pièce",
                  "Relevé des compteurs inclus",
                  "Photos HD illimitées des dégradations",
                  "Signature électronique sécurisée",
                  "Comparatif Entrée / Sortie"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-forest mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-forest mb-6">
              L’état des lieux professionnel : votre meilleure protection locative.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Que vous soyez propriétaire bailleur ou administrateur de biens, nous garantissons un constat impartial et exhaustif pour apaiser la relation locataire-propriétaire.
            </p>
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-forest text-white">
                    <span className="font-bold text-xl">1</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-dark">Neutralité absolue</h4>
                  <p className="mt-1 text-gray-500">Un tiers de confiance expert pour éviter tout litige au moment de la sortie.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-forest text-white">
                    <span className="font-bold text-xl">2</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-dark">Gain de temps précieux</h4>
                  <p className="mt-1 text-gray-500">Fini les déplacements et les rendez-vous conflictuels, nous gérons tout pour vous.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SecondaryServices = ({ onNavigate }: { onNavigate: (view: 'home' | 'services') => void }) => {
  return (
    <section className="py-20 bg-white text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Services Complémentaires</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Pour une gestion locative 100% déléguée et sereine.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gold rounded-xl p-8 text-dark shadow-soft transform hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
            <KeyIcon className="w-10 h-10 mb-6 text-forest relative z-10" />
            <h3 className="text-2xl font-bold mb-4 relative z-10">Délégation de visites</h3>
            <p className="mb-6 text-dark/90 relative z-10">
              Ne perdez plus votre temps dans les transports. Nous assurons l'accueil des candidats locataires.
            </p>
            <button onClick={() => onNavigate('services')} className="inline-block border-b-2 border-forest pb-1 font-semibold hover:text-white transition-colors relative z-10">
              Voir les forfaits visites
            </button>
          </div>
          <div className="bg-gold rounded-xl p-8 text-dark shadow-soft transform hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
            <CubeIcon className="w-10 h-10 mb-6 text-forest relative z-10" />
            <h3 className="text-2xl font-bold mb-4 relative z-10">Visites Virtuelles & 3D</h3>
            <p className="mb-6 text-dark/90 relative z-10">
              Valorisez votre bien avec une immersion 3D haute définition.
            </p>
            <button onClick={() => onNavigate('services')} className="inline-block border-b-2 border-forest pb-1 font-semibold hover:text-white transition-colors relative z-10">
              Découvrir la technologie 3D
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const features = [
    { title: "Expertise 100% Locale", desc: "Une connaissance parfaite du marché locatif de la métropole lilloise.", icon: <MapPinIcon className="w-6 h-6 text-white" /> },
    { title: "Flexibilité Horaire", desc: "Des créneaux adaptés aux disponibilités (y compris le samedi).", icon: <ClockIcon className="w-6 h-6 text-white" /> },
    { title: "Réactivité Immédiate", desc: "Devis sous 24h. Rapports envoyés instantanément.", icon: <CheckIcon className="w-6 h-6 text-white" /> }
  ];
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-forest mb-12">Pourquoi nous faire confiance ?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="flex flex-col items-center p-6">
              <div className="w-14 h-14 bg-forest rounded-full flex items-center justify-center mb-6 shadow-md">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Un processus simple en 4 étapes</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { title: "Contact & Devis", desc: "Appel ou formulaire en 2 min." },
            { title: "Planification", desc: "Nous fixons le RDV locataire." },
            { title: "Intervention", desc: "État des lieux sur tablette." },
            { title: "Réception", desc: "Rapport PDF immédiat." }
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-gold text-dark font-bold text-xl flex items-center justify-center mb-4 border-4 border-white shadow-sm">{idx + 1}</div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row bg-forest text-white">
      <div className="md:w-1/2 p-12 lg:p-20">
        <h2 className="text-3xl font-bold mb-6">Zone d'intervention</h2>
        <p className="text-lg text-gray-300 mb-6">Basés à Lille, nous couvrons Lille Centre, Vieux-Lille, Roubaix, Tourcoing et Villeneuve d'Ascq.</p>
        <div className="flex items-center space-x-2 text-gold font-semibold"><MapPinIcon className="w-5 h-5" /><span>Aucun frais de déplacement sur la MEL</span></div>
      </div>
      <div className="md:w-1/2 bg-gray-200 min-h-[300px] relative">
         <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e4/Lille_Metropole_map.png')] bg-cover bg-center opacity-40 grayscale"></div>
      </div>
    </section>
  );
};

const Footer = ({ onNavigate }: { onNavigate: (view: 'home' | 'services') => void }) => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:justify-between lg:items-center mb-12 border-b border-gray-700 pb-12">
          <div><h2 className="text-3xl font-bold mb-2">Prêt à sécuriser votre location ?</h2></div>
          <div className="flex gap-4 mt-6 lg:mt-0">
            <Button variant="primary" className="font-bold">06 00 00 00 00</Button>
            <Button variant="outline" className="text-white border-white" onClick={() => onNavigate('services')}>Tarifs</Button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12 text-sm text-gray-400">
          <div><h4 className="text-white font-bold mb-4 uppercase tracking-wider">Lille Inventaire</h4><p>Expert en états des lieux indépendants.</p></div>
          <div><h4 className="text-white font-bold mb-4 uppercase tracking-wider">Contact</h4><p>Lille, France | contact@lille-inventaire.fr</p></div>
          <div><h4 className="text-white font-bold mb-4 uppercase tracking-wider">Légal</h4><ul className="space-y-2"><li><a href="#" className="hover:text-gold">Mentions Légales</a></li></ul></div>
        </div>
      </div>
    </footer>
  );
};

const StickyMobileFooter = ({ onNavigate }: { onNavigate: (view: 'home' | 'services') => void }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex shadow-lg">
      <a href="tel:0600000000" className="flex-1 bg-forest text-white py-4 flex justify-center items-center font-bold text-sm"><PhoneIcon className="w-4 h-4 mr-2" /> Appeler</a>
      <button onClick={() => onNavigate('services')} className="flex-1 bg-gold text-dark py-4 flex justify-center items-center font-bold text-sm"><ClipboardIcon className="w-4 h-4 mr-2" /> Nos Tarifs</button>
    </div>
  );
};

// --- MAIN APP WITH ROUTING ---

const App = () => {
  const [view, setView] = useState<'home' | 'services'>('home');

  const handleNavigate = (newView: 'home' | 'services') => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-dark antialiased bg-white selection:bg-gold selection:text-dark pb-16 md:pb-0">
      <Navbar onNavigate={handleNavigate} currentView={view} />
      <main>
        {view === 'home' ? (
          <>
            <Hero onNavigate={handleNavigate} />
            <MainService />
            <SecondaryServices onNavigate={handleNavigate} />
            <WhyUs />
            <Process />
            <MapSection />
          </>
        ) : (
          <ServicesPage onNavigate={handleNavigate} />
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
      <StickyMobileFooter onNavigate={handleNavigate} />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
