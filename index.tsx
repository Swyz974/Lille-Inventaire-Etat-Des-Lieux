import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

// --- Composants SVG Icones ---
interface IconProps {
  className?: string;
}

const PhoneIcon = ({ className }: IconProps) => (
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
const ArrowLeftIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);
const ShieldIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);

// --- Données Globales ---
const CONTACT_PHONE = "06 03 26 78 35";
const CONTACT_PHONE_LINK = "tel:0603267835";
const CONTACT_EMAIL = "smlsadon@gmail.com";
const WHATSAPP_LINK = "https://wa.me/33603267835?text=Bonjour,%20je%20souhaiterais%20réserver%20une%20prestation%20d'état%20des%20lieux%20avec%20Lille%20Inventaire.";

// --- Types de navigation ---
type AppView = 'home' | 'services' | 'legal';

// --- Composants UI ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 border text-base font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-dark bg-gold hover:bg-goldhover shadow-sm focus:ring-gold",
    secondary: "border-transparent text-forest bg-white hover:bg-gold hover:text-dark focus:ring-white shadow-sm",
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

const Navbar = ({ onNavigate, currentView }: { onNavigate: (view: AppView) => void, currentView: AppView }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLightNav = isScrolled || currentView !== 'home';
  const navColorClass = isLightNav ? 'text-forest' : 'text-white';
  const logoAccentClass = isLightNav ? 'text-forest/80' : 'text-gold';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isLightNav ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
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
            <a href={CONTACT_PHONE_LINK} className={`font-semibold flex items-center ${navColorClass}`}>
              <PhoneIcon className="w-4 h-4 mr-2" />
              {CONTACT_PHONE}
            </a>
            <Button variant="primary" className="py-2 px-4 text-sm" onClick={() => onNavigate('services')}>
              Devis Rapide
            </Button>
          </div>
        </div>

        <div className="md:hidden">
             <Button variant="primary" className="py-2 px-3 text-xs" onClick={() => onNavigate('services')}>Tarifs</Button>
        </div>
      </div>
    </nav>
  );
};

// --- LEGAL PAGE COMPONENT ---
const LegalPage = ({ onNavigate }: { onNavigate: (view: AppView) => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-cream min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center text-forest font-semibold mb-8 hover:translate-x-1 transition-transform"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" /> Retour à l'accueil
        </button>

        <h1 className="text-4xl font-bold text-dark mb-12">Mentions Légales & Confidentialité</h1>

        <div className="space-y-12 bg-white p-8 lg:p-12 rounded-3xl shadow-soft border border-gray-100">
          
          <section>
            <h2 className="text-2xl font-bold text-forest mb-4">1. Éditeur du site</h2>
            <div className="text-gray-600 space-y-2 leading-relaxed">
              <p><strong>Nom commercial :</strong> Lille Inventaire</p>
              <p><strong>Statut juridique :</strong> Micro-entreprise (Auto-entrepreneur)</p>
              <p><strong>Adresse :</strong> Lille & Métropole</p>
              <p><strong>Email :</strong> <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest hover:underline">{CONTACT_EMAIL}</a></p>
              <p><strong>Téléphone :</strong> {CONTACT_PHONE}</p>
              <p><strong>SIRET :</strong> 910 130 749 00013</p>
              <p><strong>Directeur de la publication :</strong> Samuel Sadon</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-forest mb-4">2. Hébergement</h2>
            <div className="text-gray-600 space-y-2 leading-relaxed">
              <p>Le site est hébergé par la société <strong>Vercel Inc.</strong></p>
              <p><strong>Adresse :</strong> 340 S Lemon Ave #4133 Walnut, CA 91789, USA</p>
              <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener" className="text-forest hover:underline">https://vercel.com</a></p>
            </div>
          </section>

          <section className="bg-cream p-6 rounded-2xl border-l-4 border-gold">
            <h2 className="text-2xl font-bold text-forest mb-4 flex items-center">
              <ShieldIcon className="w-6 h-6 mr-3" />
              3. Litige – Médiation de la consommation
            </h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>En cas de litige entre le Client et l’entreprise, ceux-ci s’efforceront de le résoudre à l’amiable (le Client adressera une réclamation écrite auprès du professionnel ou, le cas échéant, auprès du Service Relations Clientèle du professionnel).</p>
              <p>À défaut d’accord amiable ou en l’absence de réponse du professionnel dans un délai raisonnable d’un (1) mois, le Client consommateur au sens de l’article L.612-2 du code de la consommation a la possibilité de saisir gratuitement, si un désaccord subsiste, le médiateur compétent inscrit sur la liste des médiateurs établie par la Commission d’évaluation et de contrôle de la médiation de la consommation en application de l’article L.615-1 du code de la consommation, à savoir :</p>
              <div className="bg-white p-4 rounded-xl border border-gray-100 font-medium">
                <p className="text-dark">La Société Médiation Professionnelle</p>
                <p><a href="http://www.mediateur-consommation-smp.fr" target="_blank" rel="noopener" className="text-forest hover:underline">www.mediateur-consommation-smp.fr</a></p>
                <p>Alteritae 5 rue Salvaing 12000 Rodez</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-forest mb-4">4. Protection des données (RGPD)</h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>Conformément au Règlement Général sur la Protection des Données (RGPD), Lille Inventaire s'engage à ce que la collecte et le traitement de vos données soient conformes à la réglementation.</p>
              <p>Les données collectées (nom, téléphone, email) via les formulaires de contact ou WhatsApp sont uniquement utilisées pour répondre à vos demandes de prestations. Elles ne sont en aucun cas cédées à des tiers.</p>
              <p>Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles sur simple demande à l'adresse <strong>{CONTACT_EMAIL}</strong>.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-forest mb-4">5. Propriété intellectuelle</h2>
            <p className="text-gray-600 leading-relaxed">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

// --- SERVICES PAGE COMPONENT ---
const ServicesPage = ({ onNavigate }: { onNavigate: (view: AppView) => void }) => {
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

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {pricingData.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-soft overflow-hidden border border-gray-100 transition-all hover:shadow-xl">
              <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-white">
                <div>
                  <h3 className="text-2xl font-bold text-dark">{service.category}</h3>
                  <p className="text-gray-500 mt-1">{service.description}</p>
                </div>
                <div className="bg-forest/10 p-4 rounded-full">
                  {service.icon}
                </div>
              </div>
              <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white">
                {service.tiers.map((tier, tIdx) => (
                  <div key={tIdx} className="text-center p-4 rounded-xl bg-forest/5 border border-forest/10 transition-colors hover:bg-forest/10">
                    <p className="text-sm text-forest font-semibold mb-2">{tier.label}</p>
                    <p className="text-lg font-bold text-dark">{tier.price}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-100 text-center">
                 <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button variant="primary" className="w-full">Réserver ce service via WhatsApp</Button>
                 </a>
              </div>
            </div>
          ))}
        </div>

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
                <div className="relative z-10 flex-1">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <ul className="space-y-3 mb-6">
                    {service.prices.map((price, pIdx) => (
                      <li key={pIdx} className="flex items-center text-gold font-semibold text-lg">
                        <CheckIcon className="w-5 h-5 mr-3 text-white" />
                        {price}
                      </li>
                    ))}
                  </ul>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block">
                    <Button variant="secondary" className="px-6 py-2 text-sm">Réserver</Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="bg-white rounded-3xl p-10 lg:p-16 shadow-xl border border-gold/20 text-center">
          <h2 className="text-3xl font-bold text-forest mb-6">Besoin d'un devis sur-mesure ?</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Pour les surfaces supérieures à 80m², les immeubles entiers ou les besoins récurrents, nous proposons des tarifs dégressifs. Contactez-nous pour une proposition personnalisée.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href={CONTACT_PHONE_LINK} className="bg-forest text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center hover:bg-forest/90 transition-all">
              <PhoneIcon className="w-5 h-5 mr-3" /> {CONTACT_PHONE}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-block">
              <Button variant="outline" className="px-8 py-4 text-lg w-full">
                Envoyer un email
              </Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

// --- Home Components ---
const Hero = ({ onNavigate }: { onNavigate: (view: AppView) => void }) => {
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

const Footer = ({ onNavigate }: { onNavigate: (view: AppView) => void }) => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:justify-between lg:items-center mb-12 border-b border-gray-700 pb-12">
          <div><h2 className="text-3xl font-bold mb-2">Prêt à sécuriser votre location ?</h2></div>
          <div className="flex gap-4 mt-6 lg:mt-0">
            <a href={CONTACT_PHONE_LINK} className="inline-block">
              <Button variant="primary" className="font-bold">{CONTACT_PHONE}</Button>
            </a>
            <Button variant="outline" className="text-white border-white" onClick={() => onNavigate('services')}>Tarifs</Button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12 text-sm text-gray-400">
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Lille Inventaire</h4>
            <p>Expert en états des lieux indépendants pour particuliers et professionnels.</p>
            <p className="mt-4">SIRET : 910 130 749 00013</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Contact</h4>
            <p className="mb-2">Lille, France</p>
            <p className="mb-2"><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold transition-colors">{CONTACT_EMAIL}</a></p>
            <p>{CONTACT_PHONE}</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Légal</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('legal')} className="hover:text-gold transition-colors">Mentions Légales</button></li>
              <li><button onClick={() => onNavigate('legal')} className="hover:text-gold transition-colors">Médiation & Litiges</button></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const StickyMobileFooter = ({ onNavigate }: { onNavigate: (view: AppView) => void }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex shadow-lg">
      <a href={CONTACT_PHONE_LINK} className="flex-1 bg-forest text-white py-4 flex justify-center items-center font-bold text-sm"><PhoneIcon className="w-4 h-4 mr-2" /> Appeler</a>
      <button onClick={() => onNavigate('services')} className="flex-1 bg-gold text-dark py-4 flex justify-center items-center font-bold text-sm"><ClipboardIcon className="w-4 h-4 mr-2" /> Nos Tarifs</button>
    </div>
  );
};

// --- MAIN APP WITH ROUTING ---
const App = () => {
  const [view, setView] = useState<AppView>('home');

  const handleNavigate = (newView: AppView) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch(view) {
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'legal':
        return <LegalPage onNavigate={handleNavigate} />;
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <section id="services" className="py-20 bg-cream">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                  <div className="relative mb-12 lg:mb-0">
                    <div className="absolute top-0 left-0 -ml-4 -mt-4 w-full h-full bg-gold rounded-lg transform translate-x-4 translate-y-4 opacity-20"></div>
                    <div className="relative bg-white rounded-lg shadow-xl p-8 border-l-4 border-forest">
                      <div className="flex items-center mb-6">
                        <div className="bg-forest/10 p-3 rounded-full mr-4"><ClipboardIcon className="w-8 h-8 text-forest" /></div>
                        <div>
                          <h3 className="text-lg font-bold text-dark">Rapport d'État des Lieux</h3>
                          <p className="text-sm text-gray-500">Document certifié conforme</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {["Inventaire détaillé pièce par pièce", "Relevé des compteurs inclus", "Photos HD illimitées des dégradations", "Signature électronique sécurisée", "Comparatif Entrée / Sortie"].map((item, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckIcon className="w-5 h-5 text-forest mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-forest mb-6">L’état des lieux professionnel : votre meilleure protection locative.</h2>
                    <p className="text-lg text-gray-600 mb-8">Que vous soyez propriétaire bailleur ou administrateur de biens, nous garantissons un constat impartial et exhaustif pour apaiser la relation locataire-propriétaire.</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="font-sans text-dark antialiased bg-white selection:bg-gold selection:text-dark pb-16 md:pb-0">
      <Navbar onNavigate={handleNavigate} currentView={view} />
      <main>{renderView()}</main>
      <Footer onNavigate={handleNavigate} />
      <StickyMobileFooter onNavigate={handleNavigate} />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);