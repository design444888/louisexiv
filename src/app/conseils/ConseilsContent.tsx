'use client';

import React, { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ARTICLES, FAQS } from '@/data/mockData';
import ArticleCard from '@/components/ArticleCard';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import { Star, MessageSquareQuote, ArrowLeft, BookOpen } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  hairType: string;
  text: string;
}

const CUSTOMER_REVIEWS: Review[] = [
  {
    id: 'r1',
    name: "Clara V.",
    rating: 5,
    date: "14 Mai 2026",
    hairType: "Cuir chevelu très sensible",
    text: "Une révélation absolue ! Je faisais des réactions allergiques répétées aux colorations chimiques. Avec L'Or Végétal, aucune démangeaison, une odeur divine d'herbes de montagne, et mes cheveux n'ont jamais été aussi brillants et volumineux."
  },
  {
    id: 'r2',
    name: "Marc-Antoine D.",
    rating: 5,
    date: "29 Avril 2026",
    hairType: "Cheveux secs & pointes abîmées",
    text: "L'Élixir Suprême est magique. Ayant des cheveux épais et un peu rebelles, 2 gouttes suffisent à discipliner mes longueurs et leur redonner vie après mon shampooing. Je recommande sans hésitation."
  },
  {
    id: 'r3',
    name: "Éléonore R.",
    rating: 5,
    date: "11 Avril 2026",
    hairType: "Cheveux fins décolorés",
    text: "Le rituel nocturne avec le Baume d'Eugénia est mon secret de beauté. Je l'applique deux fois par semaine. Mes pointes sèches ont totalement disparu, mes cheveux fins ont retrouvé de la matière sans être alourdis."
  }
];

export default function ConseilsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get('id');
  const selectedArticleId = id && ARTICLES.some((article) => article.id === id) ? id : null;

  useEffect(() => {
    if (selectedArticleId) {
      const el = document.getElementById('blog-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedArticleId]);

  const handleCloseArticle = () => {
    router.push('/conseils');
  };

  const selectedArticle = ARTICLES.find((article) => article.id === selectedArticleId);

  return (
    <div className="w-full">
      {/* SECTION 1: INTRO (Background #FFFAFA) */}
      <section className="bg-[#FFFAFA] py-12 md:py-20 border-b border-[#E4D3C8]/50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 text-center">
          <div className="inline-flex items-center justify-center gap-2 border border-[#C8A893]/40 bg-[#F8F0EB] px-3 py-1 rounded-none mb-6">
            <BookOpen size={14} strokeWidth={1.5} className="text-[#6E4226]" />
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-[#6E4226]">
              L&apos;Écriture de l&apos;Apothicaire
            </span>
          </div>

          <h1 className="font-display text-[34px] md:text-[48px] font-medium text-[#573119] mb-4">
            Conseils <em className="font-display italic text-[#6E4226] font-normal">d&apos;Apothicaire</em>
          </h1>

          <p className="font-body text-[15px] font-light text-[#6E4226] max-w-xl mx-auto leading-relaxed">
            Prenez soin de vous grâce aux rituels naturels. Retrouvez les recommandations exclusives de notre laboratoire, nos dossiers scientifiques et nos réponses personnalisées.
          </p>
        </div>
      </section>

      {/* SECTION 2: BLOG CARDS (Background #F8F0EB - Surface) */}
      <section id="blog-section" className="bg-[#F8F0EB] py-16 md:py-24 border-b border-[#E4D3C8]/50 scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-[#6E4226]">
              Le Dossier Capillaire
            </span>
            <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-[#402312] mt-2 leading-tight">
              Dossiers &amp; <em className="font-display italic text-[#573119] font-normal">Rituels</em>
            </h2>
            <div className="w-12 h-[1px] bg-[#C8A893] mx-auto mt-4"></div>
          </div>

          {/* Renders dynamic article details reading layout if an article is selected */}
          {selectedArticle ? (
            <div className="max-w-3xl mx-auto bg-[#FFFAFA] rounded-none border border-[#E4D3C8] shadow-none p-6 md:p-10 animate-fade-in mb-12">
              <button 
                onClick={handleCloseArticle}
                className="inline-flex items-center gap-2 text-[12px] font-body font-semibold uppercase tracking-wider text-[#573119] hover:text-[#6E4226] mb-8 cursor-pointer"
              >
                <ArrowLeft size={16} strokeWidth={1.5} />
                Retour aux dossiers
              </button>

              <div className="flex items-center gap-3 font-body text-[11px] text-[#C8A893] mb-4">
                <span className="bg-[#F8F0EB] text-[#6E4226] px-2 py-0.5 rounded-none font-medium">
                  {selectedArticle.category}
                </span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h2 className="font-display text-[26px] md:text-[36px] font-medium text-[#402312] leading-snug mb-6">
                {selectedArticle.title}
              </h2>

              <div className="aspect-[16/9] w-full rounded-none overflow-hidden border border-[#E4D3C8] mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="font-body text-[15px] font-light text-[#6E4226] leading-[1.8] space-y-6">
                {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-[#E4D3C8] flex justify-between items-center">
                <p className="font-display italic text-[14px] text-[#6E4226]">Rédigé par la Maison Louise XIV</p>
                <button 
                  onClick={handleCloseArticle}
                  className="btn-secondary py-2.5 px-6 text-[12px]"
                >
                  Fermer la lecture
                </button>
              </div>
            </div>
          ) : null}

          {/* List of articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: FAQ ACCORDION (Background #FFFAFA) */}
      <section id="faq-section" className="bg-[#FFFAFA] py-16 md:py-24 border-b border-[#E4D3C8]/50 scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-[#6E4226]">
              Des questions sur vos cheveux ?
            </span>
            <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-[#402312] mt-2 leading-tight">
              Foire <em className="font-display italic text-[#573119] font-normal">Aux Questions</em>
            </h2>
            <p className="font-body text-[14px] text-[#6E4226] font-light mt-2">
              Retrouvez les interrogations les plus fréquentes reçues par notre laboratoire de Genève.
            </p>
            <div className="w-12 h-[1px] bg-[#C8A893] mx-auto mt-4"></div>
          </div>

          <FAQAccordion items={FAQS} />

        </div>
      </section>

      {/* SECTION 4: AVIS CLIENTS CARDS (Background #F8F0EB - Surface) */}
      <section id="reviews-section" className="bg-[#F8F0EB] py-16 md:py-24 border-b border-[#E4D3C8]/50 scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-[#6E4226]">
              Témoignages de la Communauté
            </span>
            <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-[#402312] mt-2 leading-tight">
              Avis <em className="font-display italic text-[#573119] font-normal">Clients</em>
            </h2>
            <div className="w-12 h-[1px] bg-[#C8A893] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CUSTOMER_REVIEWS.map((review) => (
              <div 
                key={review.id} 
                className="bg-[#FFFAFA] p-8 rounded-none border border-[#E4D3C8] shadow-none relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-8 text-[#E4D3C8] opacity-60">
                  <MessageSquareQuote size={32} strokeWidth={1.5} />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4 text-[#573119]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" strokeWidth={1.5} />
                  ))}
                </div>

                {/* Content */}
                <p className="font-body text-[13.5px] font-light text-[#6E4226] leading-relaxed mb-6 italic">
                  &quot;{review.text}&quot;
                </p>

                {/* Reviewer info */}
                <div className="pt-4 border-t border-[#E4D3C8]/50">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display text-[15px] font-semibold text-[#402312]">
                      {review.name}
                    </h4>
                    <span className="font-body text-[10px] text-[#C8A893]">
                      {review.date}
                    </span>
                  </div>
                  
                  {/* Hair Type Badge */}
                  <div className="inline-block mt-2 bg-[#F8F0EB] text-[#C8A893] px-2 py-0.5 rounded-none">
                    <span className="font-body text-[10px] font-semibold uppercase tracking-wider">
                      {review.hairType}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="text-center mt-12 max-w-sm mx-auto p-4 rounded-none border border-[#E4D3C8] bg-[#FFFAFA]/50">
            <p className="font-body text-[13px] text-[#6E4226]">
              Note moyenne globale de la Maison : <span className="font-bold text-[#402312]">4.9/5</span> basée sur plus de 1200 avis vérifiés.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 5: CTA TO BOUTIQUE (Dark Brown) */}
      <CTASection 
        title="Trouvez le soin parfait pour vos cheveux"
        italicTitle="dès aujourd'hui"
        description="Faites l'expérience du luxe végétal Louise XIV et commencez votre transition capillaire biologique dès maintenant."
        buttonText="Accéder à la boutique"
        buttonLink="/boutique"
      />
    </div>
  );
}


