'use client';

import React from 'react';
import Link from 'next/link';
import { Leaf, Sparkles, ShieldCheck } from 'lucide-react';
import { PRODUCTS, CATEGORIES, ARTICLES } from '@/data/mockData';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import ArticleCard from '@/components/ArticleCard';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  // Get all 3 articles
  const blogPreview = ARTICLES.slice(0, 3);

  // Scroll Reveal Observer for "Les Créations Signatures"
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      {/* SECTION 1: HERO (Background #FAFCFD) */}
      <section className="bg-[#FAFCFD] py-16 md:py-24 border-b border-[#A8D5E2]/50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-5">

            {/* Header Block: Title, Slogan & Vegan Logo */}
            <div className="space-y-2">
              <h1 className="font-display text-[38px] sm:text-[48px] lg:text-[58px] font-medium text-[#7CB7CC] leading-[1.1] tracking-tight">
                Qualité premium<br />
                <em className="font-display italic text-[#4F8FA8] font-normal">100% professionnelle</em>
              </h1>
              <p className="font-body text-[16px] sm:text-[18px] font-light text-[#7CB7CC] tracking-wide">
                L’engagement d’une beauté durable
              </p>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-vegan.webp"
                  alt="Logo Certified Vegan"
                  className="h-[52px] w-auto opacity-85 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            {/* Action Block: Description & Buttons closely bound */}
            <div className="space-y-4">
              <p className="font-body text-[15px] sm:text-[16px] font-light text-[#4F8FA8] max-w-xl leading-relaxed">
                Maison suisse de prestige dédiée à la haute formulation capillaire. Nos colorations 100% végétales et nos soins d&apos;exception infusent la pureté alpine au cœur de votre fibre capillaire pour un éclat absolu.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/boutique" className="btn-primary">
                  Voir la boutique
                </Link>
                <Link href="/a-propos" className="btn-secondary">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Quick Badges (Auto-Layout Horizontal Scroll on Mobile) */}
            <div className="flex items-center justify-start md:justify-between gap-6 overflow-x-auto no-scrollbar whitespace-nowrap pt-8 border-t border-[#A8D5E2]/50 max-w-lg">
              <div className="flex items-center gap-2 flex-shrink-0">
                <Leaf size={16} strokeWidth={1.5} className="text-[#7CB7CC]" />
                <span className="font-body text-[12px] text-[#4F8FA8]">100% Végétal</span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Sparkles size={16} strokeWidth={1.5} className="text-[#7CB7CC]" />
                <span className="font-body text-[12px] text-[#4F8FA8]">Éclat Intense</span>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <ShieldCheck size={16} strokeWidth={1.5} className="text-[#7CB7CC]" />
                <span className="font-body text-[12px] text-[#4F8FA8]">Cuir Chevelu Sain</span>
              </div>
            </div>
          </div>

          {/* Right Image Column - Warm, organic premium feel */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-none overflow-hidden border border-[#A8D5E2] shadow-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
                alt="Louise XIV Nature"
                className="object-cover w-full h-full transform hover:scale-102 transition-transform duration-700"
              />
              {/* Floating aesthetic stamp */}
              <div className="absolute bottom-5 right-5 bg-[#FAFCFD]/95 border border-[#89C2D9] px-4 py-3 rounded-none backdrop-blur-xs text-center">
                <p className="font-display italic text-[14px] text-[#7CB7CC]">Maison Louise XIV</p>
                <p className="font-body text-[9px] uppercase tracking-widest text-[#4F8FA8] mt-0.5">Suisse • Genève</p>
              </div>
            </div>
            {/* Soft decorative element behind the image */}
            <div className="absolute -inset-2 bg-[#EAF3F6] -z-10 rounded-none transform rotate-1"></div>
          </div>

        </div>
      </section>

      {/* SECTION 2: CATEGORY GRID (Background #EAF3F6 - Surface) */}
      <section className="bg-[#EAF3F6] py-20 border-b border-[#A8D5E2]/50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">

          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-[#4F8FA8]">
              Collections Botaniques
            </span>
            <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-[#2D4650] mt-2 leading-tight">
              Trouvez <em className="font-display italic text-[#7CB7CC] font-normal">votre</em> rituel beauté
            </h2>
            <div className="w-12 h-[1px] bg-[#89C2D9] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: BEST SELLERS (Background #FAFCFD) */}
      <section className="bg-[#FAFCFD] py-20 border-b border-[#A8D5E2]/50 overflow-hidden">
        <div className="w-full">

          <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div>
              <span className="font-body text-[11px] uppercase tracking-[0.15em] text-[#4F8FA8]">
                Les Favoris de la Maison
              </span>
              <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-[#2D4650] mt-2 leading-tight">
                Les Créations <em className="font-display italic text-[#7CB7CC] font-normal">Signatures</em>
              </h2>
            </div>
            <Link href="/boutique" className="btn-secondary text-[12px] tracking-[0.08em] px-6 py-3">
              Voir la boutique
            </Link>
          </div>

          {/* Infinite Auto-Scrolling Luxury Gallery (Centered & Contained) */}
          <div className="max-w-[1200px] mx-auto px-6 md:px-8">
            <div 
              ref={sectionRef}
              className={`animate-marquee-container py-4 reveal-scroll-box ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="animate-marquee-track">
                {/* First Copy */}
                {PRODUCTS.map((product) => (
                  <div key={`copy1-${product.id}`} className="w-[280px] sm:w-[320px] flex-shrink-0 px-3">
                    <ProductCard product={product} variant="bg" />
                  </div>
                ))}
                {/* Second Copy */}
                {PRODUCTS.map((product) => (
                  <div key={`copy2-${product.id}`} className="w-[280px] sm:w-[320px] flex-shrink-0 px-3">
                    <ProductCard product={product} variant="bg" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: BRAND PROMISE (Background #EAF3F6 - Surface, Alternating!) */}
      <section className="bg-[#EAF3F6] py-20 border-b border-[#A8D5E2]/50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Image Column */}
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="relative w-full h-[400px] lg:h-[720px] rounded-none overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800"
                  alt="Apothecary Ingredients"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-body text-[11px] uppercase tracking-[0.15em] text-[#4F8FA8]">
                Engagements et Excellence
              </span>

              <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-[#2D4650] leading-tight">
                L’élégance <em className="font-display italic text-[#7CB7CC] font-normal">du soin naturel</em>
              </h2>

              <p className="font-body text-[14.5px] font-light text-[#4F8FA8] leading-relaxed">
                Chez Louise XIV, nous pensons que la beauté capillaire ne doit pas compromettre votre santé, ni celle de l&apos;environnement. C&apos;est pourquoi notre laboratoire situé au cœur des Alpes suisses élabore des formules d&apos;exception qui allient l&apos;exigence de l&apos;apothicaire traditionnel à la recherche scientifique moderne.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-none bg-[#EAF3F6] flex items-center justify-center text-[#89C2D9]">
                    ⚜
                  </div>
                  <div>
                    <h4 className="font-display text-[15px] font-medium text-[#2D4650]">Sourcing Botanique Responsable</h4>
                    <p className="font-body text-[13px] text-[#4F8FA8] font-light mt-0.5">Des plantes cultivées biologiquement et récoltées à maturité pour garantir une concentration maximale en principes actifs.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-none bg-[#EAF3F6] flex items-center justify-center text-[#89C2D9]">
                    ⚜
                  </div>
                  <div>
                    <h4 className="font-display text-[15px] font-medium text-[#2D4650]">Technologie Alpine Suisse</h4>
                    <p className="font-body text-[13px] text-[#4F8FA8] font-light mt-0.5">Eau pure de glaciers alpins et procédés d&apos;extraction écologiques brevetés pour préserver l&apos;intégrité moléculaire des plantes.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/a-propos#engagements" className="btn-secondary">
                  Nos engagements
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: ADVICE PREVIEW (Background #FAFCFD) */}
      <section className="bg-[#FAFCFD] py-20 border-b border-[#A8D5E2]/50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">

          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-[#4F8FA8]">
              Partage de Savoir-Faire
            </span>
            <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-[#2D4650] mt-2 leading-tight">
              Les Secrets <em className="font-display italic text-[#7CB7CC] font-normal">de l&apos;Apothicaire</em>
            </h2>
            <p className="font-body text-[14px] font-light text-[#4F8FA8] mt-2">
              Explorez nos dossiers exclusifs sur le cheveu organique, nos diagnostics et nos conseils d&apos;experts.
            </p>
            <div className="w-12 h-[1px] bg-[#89C2D9] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPreview.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/conseils" className="btn-secondary">
              Découvrir tous les conseils
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 6: CTA BANNER (Dark Brown, alternating rhythm complete) */}
      <CTASection />
    </div>
  );
}


