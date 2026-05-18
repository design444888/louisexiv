'use client';

import React, { useState } from 'react';
import { 
  Users, 
  Sprout, 
  Lightbulb, 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Check, 
  Send,
  Award,
  Crown
} from 'lucide-react';
import CTASection from '@/components/CTASection';

export default function AProposPage() {
  // Contact Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="w-full">
      {/* SECTION 1: HERO & BRAND STORY (Background #FAFCFD) */}
      <section className="bg-[#FAFCFD] py-16 md:py-24 border-b border-[#A8D5E2]/50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center gap-2 border border-[#89C2D9]/40 bg-[#EAF3F6] px-3 py-1 rounded-none mb-6">
            <Crown size={14} strokeWidth={1.5} className="text-[#4F8FA8]" />
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-[#4F8FA8]">
              L&apos;Héritage Helvetique
            </span>
          </div>

          <h1 className="font-display text-[38px] md:text-[54px] font-medium text-[#7CB7CC] mb-6 leading-tight">
            La Maison <em className="font-display italic text-[#4F8FA8] font-normal">Louise XIV</em>
          </h1>

          <p className="font-body text-[16px] md:text-[18px] font-light text-[#4F8FA8] leading-relaxed mb-8">
            Fondée à Genève, Louise XIV est née de l&apos;ambition de redéfinir la beauté des cheveux à travers le prisme de la haute apothicairerie naturelle. Nous marions la noblesse de la flore alpine à la rigueur de la recherche suisse pour des formules d&apos;une efficacité et d&apos;une pureté absolues.
          </p>

          <div className="w-16 h-[1px] bg-[#89C2D9] mx-auto"></div>
        </div>
      </section>

      {/* SECTION 2: NOTRE HISTOIRE (Background #EAF3F6 - Surface) */}
      <section id="histoire" className="bg-[#EAF3F6] py-20 border-b border-[#A8D5E2]/50 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-none overflow-hidden border border-[#A8D5E2] shadow-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
                  alt="Eugénia M Fondatrice"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAFCFD]/95 border border-[#89C2D9] p-3 rounded-none text-center">
                  <p className="font-display italic text-[14px] text-[#7CB7CC]">Eugénia M.</p>
                  <p className="font-body text-[9px] uppercase tracking-widest text-[#4F8FA8]">Fondatrice &amp; Maître Trichologue</p>
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-[#7CB7CC]">
                <Users size={18} strokeWidth={1.5} />
                <span className="font-body text-[11px] uppercase tracking-[0.15em] font-semibold">Origines &amp; Transmission</span>
              </div>

              <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-[#2D4650]">
                Notre <em className="font-display italic text-[#7CB7CC] font-normal">Histoire</em>
              </h2>

              <p className="font-body text-[14.5px] font-light text-[#4F8FA8] leading-relaxed">
                L&apos;histoire de Louise XIV commence avec Eugénia M, biologiste passionnée de phytothérapie et de beauté holistique. Constatant les ravages cutanés et capillaires des colorations d&apos;oxydation chimiques en salon de coiffure, elle décide de consacrer sa carrière à la formulation d&apos;alternatives pures et bienveillantes.
              </p>
              
              <p className="font-body text-[14.5px] font-light text-[#4F8FA8] leading-relaxed">
                Après des années de recherche en laboratoire à Genève et de collaboration avec des paysans herboristes du Valais, elle met au point le procédé signature de Louise XIV : une encapsulation unique de pigments botaniques dans une base huileuse thermorégulée. Une innovation qui dépose la couleur sans forcer la cuticule, soignant le cheveu au lieu de l&apos;altérer. Aujourd&apos;hui, la Maison allie cette méthode historique aux standards du luxe moderne pour sublimer les chevelures du monde entier.
              </p>

              <div className="border-l-2 border-[#89C2D9] pl-4 py-1 italic font-display text-[15px] text-[#7CB7CC] font-medium">
                &quot;Soigner le cheveu n&apos;est pas une question d&apos;artifice, c&apos;est une question de respect et de physiologie.&quot;
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: NOS ENGAGEMENTS (Background #FAFCFD) */}
      <section id="engagements" className="bg-[#FAFCFD] py-20 border-b border-[#A8D5E2]/50 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-[#4F8FA8]">
              Notre charte éthique
            </span>
            <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-[#2D4650] mt-2 leading-tight">
              Nos <em className="font-display italic text-[#7CB7CC] font-normal">Engagements</em>
            </h2>
            <div className="w-12 h-[1px] bg-[#89C2D9] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-[#EAF3F6] p-8 rounded-none border border-[#A8D5E2] shadow-none hover:bg-[#A8D5E2] transition-all duration-300">
              <div className="w-12 h-12 rounded-none bg-[#EAF3F6] flex items-center justify-center text-[#89C2D9] mb-6">
                <Sprout size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-[18px] font-medium text-[#2D4650] mb-3">Pureté Biologique</h3>
              <p className="font-body text-[13.5px] font-light text-[#4F8FA8] leading-relaxed">
                Toutes nos matières premières sont certifiées bio. Nous excluons formellement les silicones, sulfates, parabènes, phtalates et ammoniaques qui altèrent l&apos;équilibre du cuir chevelu.
              </p>
            </div>

            <div className="bg-[#EAF3F6] p-8 rounded-none border border-[#A8D5E2] shadow-none hover:bg-[#A8D5E2] transition-all duration-300">
              <div className="w-12 h-12 rounded-none bg-[#EAF3F6] flex items-center justify-center text-[#89C2D9] mb-6">
                <Award size={24} strokeWidth={1.5} className="text-[#89C2D9]" />
              </div>
              <h3 className="font-display text-[18px] font-medium text-[#2D4650] mb-3">Fabrication Suisse</h3>
              <p className="font-body text-[13.5px] font-light text-[#4F8FA8] leading-relaxed">
                Nos produits sont pensés, formulés et conditionnés dans notre laboratoire suisse. Ce ancrage local nous permet de contrôler l&apos;excellence de chaque lot de production artisanale.
              </p>
            </div>

            <div className="bg-[#EAF3F6] p-8 rounded-none border border-[#A8D5E2] shadow-none hover:bg-[#A8D5E2] transition-all duration-300">
              <div className="w-12 h-12 rounded-none bg-[#EAF3F6] flex items-center justify-center text-[#89C2D9] mb-6">
                <Users size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-[18px] font-medium text-[#2D4650] mb-3">Transparence Totale</h3>
              <p className="font-body text-[13.5px] font-light text-[#4F8FA8] leading-relaxed">
                Nous croyons en une beauté consciente. Nous listons en toute transparence 100% de nos ingrédients en français clair sur nos emballages, expliquant le rôle de chaque extrait végétal.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: INNOVATION SUISSE (Background #EAF3F6 - Surface, alternating rhythm) */}
      <section id="innovation" className="bg-[#EAF3F6] py-20 border-b border-[#A8D5E2]/50 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-[#7CB7CC]">
                <Lightbulb size={18} strokeWidth={1.5} />
                <span className="font-body text-[11px] uppercase tracking-[0.15em] font-semibold">Recherche &amp; Formulation</span>
              </div>

              <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-[#2D4650]">
                L&apos;Apothicairerie <em className="font-display italic text-[#7CB7CC] font-normal">Innovante</em>
              </h2>

              <p className="font-body text-[14.5px] font-light text-[#4F8FA8] leading-relaxed">
                La nature recèle de trésors technologiques. Nos bio-chimistes isolent les molécules les plus actives de la flore de haute montagne suisse — edelweiss protecteur, gentiane fortifiante, mélisse calmante — et les combinent à des actifs capillaires naturels de pointe comme le collagène végétal ou l&apos;acide hyaluronique issu de fermentations végétales.
              </p>

              <p className="font-body text-[14.5px] font-light text-[#4F8FA8] leading-relaxed">
                Nos études cliniques démontrent que la nature, lorsqu&apos;elle est formulée de manière rigoureuse, surpasse les composés de synthèse en termes de brillance durable, d&apos;hydratation et de respect du microbiote du cuir chevelu.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex gap-2">
                  <Check size={16} strokeWidth={1.5} className="text-[#89C2D9] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-display text-[14px] font-semibold text-[#2D4650]">Tests sous contrôle dermatologique</h4>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Check size={16} strokeWidth={1.5} className="text-[#89C2D9] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-display text-[14px] font-semibold text-[#2D4650]">Flacons recyclables sans phtalates</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Photo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-square rounded-none overflow-hidden border border-[#A8D5E2]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800"
                  alt="Laboratoire Suisse"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACT BLOCK & FORM (Background #FAFCFD) */}
      <section id="contact" className="bg-[#FAFCFD] py-20 border-b border-[#A8D5E2]/50 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-[#4F8FA8]">
              Prendre contact ou réserver
            </span>
            <h2 className="font-display text-[28px] sm:text-[34px] font-medium text-[#2D4650] mt-2 leading-tight">
              Contact &amp; <em className="font-display italic text-[#7CB7CC] font-normal">Prestations Salon</em>
            </h2>
            <div className="w-12 h-[1px] bg-[#89C2D9] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Info & Address */}
            <div className="lg:col-span-5 space-y-8 bg-[#EAF3F6] p-8 rounded-none border border-[#A8D5E2] shadow-none">
              
              <div>
                <h3 className="font-display text-[20px] font-medium text-[#2D4650] mb-4">
                  Le Salon &amp; Showroom
                </h3>
                <p className="font-body text-[13.5px] font-light text-[#4F8FA8] leading-relaxed mb-6">
                  Vivez l&apos;expérience des rituels Louise XIV lors d&apos;un soin ou d&apos;une coloration végétale d&apos;exception dans notre salon confidentiel de Genève.
                </p>
              </div>

              <div className="space-y-4 font-body text-[13.5px] text-[#4F8FA8]">
                <div className="flex items-start gap-3">
                  <MapPin size={18} strokeWidth={1.5} className="text-[#7CB7CC] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#2D4650]">Maison Louise XIV — Genève</p>
                    <p className="font-light">Rue du Rhône 14, 1204 Genève, Suisse</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} strokeWidth={1.5} className="text-[#7CB7CC] flex-shrink-0" />
                  <p className="font-light">+41 (0) 22 546 89 90</p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} strokeWidth={1.5} className="text-[#7CB7CC] flex-shrink-0" />
                  <p className="font-light">contact@louisexiv-apothicaire.ch</p>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#89C2D9]/20">
                  <Clock size={18} strokeWidth={1.5} className="text-[#7CB7CC] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#2D4650]">Heures d&apos;Ouverture</p>
                    <p className="font-light">Lundi - Vendredi : 09:00 - 19:00</p>
                    <p className="font-light">Samedi : 10:00 - 18:00</p>
                    <p className="font-light text-[#89C2D9] mt-1">Sur rendez-vous uniquement</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-[#FAFCFD] p-8 rounded-[10px] border border-[#A8D5E2] shadow-xs">
              <h3 className="font-display text-[20px] font-medium text-[#2D4650] mb-6">
                Écrire à <em className="font-display italic text-[#7CB7CC] font-normal">notre laboratoire</em>
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-5 font-body">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[12px] font-semibold uppercase tracking-wider text-[#4F8FA8] mb-2">
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAFCFD] border border-[#89C2D9] text-[#2D4650] text-[13px] px-3.5 py-2.5 rounded-none focus:outline-none focus:border-[#7CB7CC]"
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[12px] font-semibold uppercase tracking-wider text-[#4F8FA8] mb-2">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#FAFCFD] border border-[#89C2D9] text-[#2D4650] text-[13px] px-3.5 py-2.5 rounded-none focus:outline-none focus:border-[#7CB7CC]"
                      placeholder="jean.dupont@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[12px] font-semibold uppercase tracking-wider text-[#4F8FA8] mb-2">
                    Sujet de votre message
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-[#FAFCFD] border border-[#89C2D9] text-[#2D4650] text-[13px] px-3.5 py-2.5 rounded-none focus:outline-none focus:border-[#7CB7CC]"
                    placeholder="Conseil diagnostic coloration, réservation salon..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[12px] font-semibold uppercase tracking-wider text-[#4F8FA8] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-[#FAFCFD] border border-[#89C2D9] text-[#2D4650] text-[13px] px-3.5 py-2.5 rounded-none focus:outline-none focus:border-[#7CB7CC] resize-none"
                    placeholder="Décrivez votre type de cheveux ou votre question..."
                    required
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 cursor-pointer text-[12px]"
                  >
                    <Send size={14} />
                    Envoyer le Message
                  </button>
                </div>

                {submitted && (
                  <div className="p-4 bg-[#EAF3F6] text-[#89C2D9] rounded-none flex items-center gap-2 border border-[#89C2D9]/20 animate-fade-in">
                    <Check size={18} />
                    <span className="text-[13px] font-semibold">Message envoyé avec succès ! Notre laboratoire vous répondra sous 24h ouvrées.</span>
                  </div>
                )}
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: CTA BANNER (Dark Brown) */}
      <CTASection 
        title="Faites l'expérience du rituel Louise XIV"
        italicTitle="dès à présent"
        description="Parcourez notre catalogue et offrez à votre chevelure le soin botanique de prestige qu'elle mérite."
        buttonText="Découvrir les soins"
        buttonLink="/boutique"
      />
    </div>
  );
}


