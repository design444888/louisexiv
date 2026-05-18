'use client';

import React, { useEffect } from 'react';
import { PRODUCTS } from '@/data/mockData';
import ProductCard from '@/components/ProductCard';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import { Leaf, Droplets, Scissors } from 'lucide-react';

export default function BoutiqueContent() {
  // Group products by category slug
  const colorationsProducts = PRODUCTS.filter(p => p.categorySlug === 'colorations');
  const soinsProducts = PRODUCTS.filter(p => p.categorySlug === 'soins');
  const accessoiresProducts = PRODUCTS.filter(p => p.categorySlug === 'accessoires');

  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger smooth scroll on hash change or direct url entrance with hash
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 150);
        }
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  // Small local FAQ items for Boutique page
  const boutiqueFAQs = [
    {
      id: 'bfaq1',
      question: "Quels sont les délais et conditions de livraison ?",
      answer: "Nous livrons gratuitement en France et en Suisse à partir de 60€ d'achat. Les commandes sont expédiées sous 24 à 48 heures ouvrées dans un emballage éco-conçu et sécurisé. La livraison standard à domicile prend généralement 2 à 4 jours ouvrables."
    },
    {
      id: 'bfaq2',
      question: "Comment choisir ma teinte pour la coloration végétale ?",
      answer: "Nos fiches produits détaillent les bases de départ recommandées pour chaque coloration végétale. Si vous hésitez ou souhaitez un diagnostic personnalisé gratuit, vous pouvez nous écrire via notre page Contact ou nous rendre visite à notre salon de Genève."
    },
    {
      id: 'bfaq3',
      question: "Vos produits sont-ils adaptés aux femmes enceintes ou allaitantes ?",
      answer: "Oui, notre gamme de colorations végétales et nos soins classiques sont formulés uniquement à base de plantes et d'extraits naturels certifiés bio, sans aucun composant chimique perturbateur endocrinien ou solvant nocif. Ils sont donc parfaitement sûrs et fortement recommandés durant la grossesse et l'allaitement."
    }
  ];

  return (
    <div className="w-full">
      
      {/* SECTION 1: HERO (Background #FAFCFD) */}
      <section className="bg-[#FAFCFD] py-16 md:py-24 border-b border-[#A8D5E2]/50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 text-center space-y-6">

          
          <h1 className="font-display text-[38px] md:text-[54px] font-medium text-[#7CB7CC] leading-tight">
            Boutique <em className="font-display italic text-[#4F8FA8] font-normal">Louise XIV</em>
          </h1>
          
          <p className="font-body text-[15px] sm:text-[16px] font-light text-[#4F8FA8] max-w-xl mx-auto leading-relaxed">
            Explorez nos collections botaniques d&apos;exception. Des formulations pures et actives élaborées au cœur des Alpes suisses pour un rituel capillaire haut de gamme absolu.
          </p>
        </div>
      </section>

      {/* SECTION 2: FLOATING JUMP LINKS MENU (Background #EAF3F6 - Surface) */}
      <section className={`bg-[#EAF3F6] border-b border-[#A8D5E2]/50 py-5 sticky top-20 z-40 shadow-xs transition-all duration-500 ease-in-out ${isScrolled ? 'opacity-70 hover:opacity-100' : 'opacity-100'}`}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="flex items-center justify-start md:justify-center gap-6 md:gap-8 overflow-x-auto no-scrollbar whitespace-nowrap font-body text-[12px] font-semibold uppercase tracking-wider text-[#4F8FA8]">
            <a 
              href="#colorations" 
              onClick={(e) => scrollToSection(e, 'colorations')}
              className="px-2 py-1.5 hover:text-[#4F8FA8] text-[#7CB7CC] transition-all cursor-pointer flex items-center gap-2 flex-shrink-0 hover:scale-102 hover:underline underline-offset-[6px]"
            >
              <Leaf size={14} /> Colorations
            </a>
            <a 
              href="#soins" 
              onClick={(e) => scrollToSection(e, 'soins')}
              className="px-2 py-1.5 hover:text-[#4F8FA8] text-[#7CB7CC] transition-all cursor-pointer flex items-center gap-2 flex-shrink-0 hover:scale-102 hover:underline underline-offset-[6px]"
            >
              <Droplets size={14} /> Soins Capillaires
            </a>
            <a 
              href="#accessoires" 
              onClick={(e) => scrollToSection(e, 'accessoires')}
              className="px-2 py-1.5 hover:text-[#4F8FA8] text-[#7CB7CC] transition-all cursor-pointer flex items-center gap-2 flex-shrink-0 hover:scale-102 hover:underline underline-offset-[6px]"
            >
              <Scissors size={14} /> Accessoires
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: COLORATIONS NATURELLES (Background #FAFCFD - white cream) */}
      <section id="colorations" className="bg-[#FAFCFD] py-20 border-b border-[#A8D5E2]/50 scroll-mt-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-[#4F8FA8] flex items-center justify-center gap-2">
              <Leaf size={14} /> Pigments Botaniques
            </span>
            <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-[#2D4650] mt-2 leading-tight">
              Colorations <em className="font-display italic text-[#7CB7CC] font-normal">Naturelles</em>
            </h2>
            <p className="font-body text-[14px] font-light text-[#4F8FA8] mt-2 leading-relaxed">
              Une couvrance parfaite des cheveux blancs et des reflets vibrants en transparence, sans aucune agression chimique.
            </p>
            <div className="w-12 h-[1px] bg-[#89C2D9] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {colorationsProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="surface" showTechnicalSheetOnHover />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: SOINS CAPILLAIRES (Background #EAF3F6 - soft crème) */}
      <section id="soins" className="bg-[#EAF3F6] py-20 border-b border-[#A8D5E2]/50 scroll-mt-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-[#4F8FA8] flex items-center justify-center gap-2">
              <Droplets size={14} /> Rituels Hydratants
            </span>
            <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-[#2D4650] mt-2 leading-tight">
              Soins <em className="font-display italic text-[#7CB7CC] font-normal">Capillaires</em>
            </h2>
            <p className="font-body text-[14px] font-light text-[#4F8FA8] mt-2 leading-relaxed">
              Des baumes et élixirs précieux infusés d’eau des glaciers suisses et d’actifs alpins pour nourrir et régénérer.
            </p>
            <div className="w-12 h-[1px] bg-[#89C2D9] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {soinsProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="bg" showTechnicalSheetOnHover />
            ))}
          </div>

        </div>
      </section>



      {/* SECTION 6: ACCESSOIRES (Background #EAF3F6 - soft crème) */}
      <section id="accessoires" className="bg-[#EAF3F6] py-20 border-b border-[#A8D5E2]/50 scroll-mt-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-[#4F8FA8] flex items-center justify-center gap-2">
              <Scissors size={14} /> Outils de Coiffage
            </span>
            <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-[#2D4650] mt-2 leading-tight">
              Accessoires <em className="font-display italic text-[#7CB7CC] font-normal">Artisanaux</em>
            </h2>
            <p className="font-body text-[14px] font-light text-[#4F8FA8] mt-2 leading-relaxed">
              Brosses en soie naturelle et peignes sculptés dans des essences de bois nobles pour un coiffage sain et voluptueux.
            </p>
            <div className="w-12 h-[1px] bg-[#89C2D9] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {accessoiresProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="bg" showTechnicalSheetOnHover />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: FAQ MINI BLOCK (Background #FAFCFD) */}
      <section className="bg-[#FAFCFD] py-20 border-b border-[#A8D5E2]/50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-[#4F8FA8]">
              Des questions sur vos achats ?
            </span>
            <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-[#2D4650] mt-2 leading-tight">
              Aide &amp; <em className="font-display italic text-[#7CB7CC] font-normal">Conseils Boutique</em>
            </h2>
            <div className="w-12 h-[1px] bg-[#89C2D9] mx-auto mt-4"></div>
          </div>

          <FAQAccordion items={boutiqueFAQs} />

        </div>
      </section>

      {/* SECTION 8: CTA BANNER */}
      <CTASection 
        title="Besoin d'un diagnostic personnalisé ?"
        italicTitle="Écrivez-nous"
        description="Nos experts capillaires et coloristes sont à votre entière disposition pour concevoir votre rituel sur-mesure Louise XIV."
        buttonText="Contacter la Maison"
        buttonLink="/a-propos#contact"
      />
    </div>
  );
}


