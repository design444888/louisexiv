'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BriefcaseBusiness, Check, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';

type ProFormData = {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  city: string;
  activity: string;
  message: string;
};

const initialFormData: ProFormData = {
  businessName: '',
  contactName: '',
  email: '',
  phone: '',
  city: '',
  activity: '',
  message: '',
};

export default function InscriptionFormulaireContent() {
  const [formData, setFormData] = useState<ProFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialFormData);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="w-full">
      <section className="border-b border-[#8FC7E6]/50 bg-[#F1F8FC] py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 border border-[#B7DFF2]/40 bg-[#E3F1F8] px-3 py-1 font-body text-[11px] uppercase tracking-[0.15em] text-[#2F7EAF]">
              <BriefcaseBusiness size={14} strokeWidth={1.5} />
              Espace Professionnel
            </span>
            <h1 className="mt-5 font-display text-[36px] md:text-[54px] font-medium leading-tight text-[#1F3F52]">
              Inscription <em className="font-display font-normal italic text-[#4496CC]">Pro</em>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-body text-[15px] font-light leading-relaxed text-[#2F7EAF] md:text-[17px]">
              Rejoignez l&apos;univers Louise XIV en tant que salon partenaire, revendeur selectif ou concept store
              et recevez nos conditions professionnelles, notre accompagnement et nos rituels exclusifs.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#8FC7E6]/50 bg-[#E3F1F8] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 md:px-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-4">
            <div className="border border-[#8FC7E6] bg-[#F1F8FC] p-8">
              <span className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.14em] text-[#2F7EAF]">
                <Sparkles size={14} strokeWidth={1.5} className="text-[#4496CC]" />
                Partenariat Premium
              </span>
              <h2 className="mt-3 font-display text-[24px] font-medium text-[#1F3F52]">
                Une ouverture reservee aux professionnels du soin
              </h2>
              <p className="mt-4 font-body text-[14px] font-light leading-relaxed text-[#2F7EAF]">
                Nous etudions chaque demande avec attention pour construire des collaborations coherentes,
                exigeantes et durables.
              </p>
            </div>

            <div className="border border-[#8FC7E6] bg-[#F1F8FC] p-8">
              <h3 className="font-display text-[20px] font-medium text-[#1F3F52]">Ce que vous recevez</h3>
              <div className="mt-5 space-y-4">
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#4496CC]" />
                  <p className="font-body text-[13.5px] font-light leading-relaxed text-[#2F7EAF]">
                    Tarification professionnelle et conditions d&apos;ouverture de compte.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#4496CC]" />
                  <p className="font-body text-[13.5px] font-light leading-relaxed text-[#2F7EAF]">
                    Documentation produit et argumentaires de vente adaptes au point de vente.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#4496CC]" />
                  <p className="font-body text-[13.5px] font-light leading-relaxed text-[#2F7EAF]">
                    Accompagnement de lancement et recommandations de gamme sur-mesure.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-[#8FC7E6] bg-[#F1F8FC] p-8">
              <h3 className="font-display text-[20px] font-medium text-[#1F3F52]">Contact direct</h3>
              <div className="mt-5 space-y-4 font-body text-[13.5px] text-[#2F7EAF]">
                <div className="flex items-start gap-3">
                  <Mail size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#4496CC]" />
                  <span>pro@louisexiv-apothicaire.ch</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#4496CC]" />
                  <span>+41 (0) 22 546 89 90</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#4496CC]" />
                  <span>Geneve, Suisse</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border border-[#8FC7E6] bg-[#F1F8FC] p-8 md:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="font-body text-[11px] uppercase tracking-[0.14em] text-[#2F7EAF]">
                    Formulaire d&apos;ouverture
                  </span>
                  <h2 className="mt-2 font-display text-[26px] font-medium text-[#1F3F52]">
                    Parlez-nous de votre structure
                  </h2>
                </div>
                <Link href="/boutique" className="btn-secondary px-5 py-2.5 text-[11px]">
                  Voir la boutique
                </Link>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5 font-body">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="businessName" className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-[#2F7EAF]">
                      Nom du salon / entreprise
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full border border-[#B7DFF2] bg-[#F1F8FC] px-3.5 py-2.5 text-[13px] text-[#1F3F52] outline-none transition-colors focus:border-[#4496CC]"
                      placeholder="Maison Exemple"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contactName" className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-[#2F7EAF]">
                      Nom du contact
                    </label>
                    <input
                      id="contactName"
                      name="contactName"
                      type="text"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="w-full border border-[#B7DFF2] bg-[#F1F8FC] px-3.5 py-2.5 text-[13px] text-[#1F3F52] outline-none transition-colors focus:border-[#4496CC]"
                      placeholder="Camille Martin"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-[#2F7EAF]">
                      Email professionnel
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-[#B7DFF2] bg-[#F1F8FC] px-3.5 py-2.5 text-[13px] text-[#1F3F52] outline-none transition-colors focus:border-[#4496CC]"
                      placeholder="contact@maisonexemple.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-[#2F7EAF]">
                      Telephone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-[#B7DFF2] bg-[#F1F8FC] px-3.5 py-2.5 text-[13px] text-[#1F3F52] outline-none transition-colors focus:border-[#4496CC]"
                      placeholder="+41 ..."
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="city" className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-[#2F7EAF]">
                      Ville / pays
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full border border-[#B7DFF2] bg-[#F1F8FC] px-3.5 py-2.5 text-[13px] text-[#1F3F52] outline-none transition-colors focus:border-[#4496CC]"
                      placeholder="Geneve, Suisse"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="activity" className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-[#2F7EAF]">
                      Type d&apos;activite
                    </label>
                    <select
                      id="activity"
                      name="activity"
                      value={formData.activity}
                      onChange={handleInputChange}
                      className="w-full border border-[#B7DFF2] bg-[#F1F8FC] px-3.5 py-2.5 text-[13px] text-[#1F3F52] outline-none transition-colors focus:border-[#4496CC]"
                      required
                    >
                      <option value="">Selectionner</option>
                      <option value="salon">Salon de coiffure</option>
                      <option value="spa">Spa / institut</option>
                      <option value="retail">Concept store / retail</option>
                      <option value="distributeur">Distributeur</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-[#2F7EAF]">
                    Votre projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full resize-none border border-[#B7DFF2] bg-[#F1F8FC] px-3.5 py-2.5 text-[13px] text-[#1F3F52] outline-none transition-colors focus:border-[#4496CC]"
                    placeholder="Expliquez votre univers, votre clientele et vos attentes."
                    required
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="btn-primary flex items-center justify-center gap-2 px-8 py-3.5 text-[12px]"
                  >
                    <Send size={14} strokeWidth={1.5} />
                    Envoyer la demande
                  </button>
                  <p className="font-body text-[12.5px] font-light text-[#2F7EAF]">
                    Retour sous 24 a 48 heures ouvrees.
                  </p>
                </div>

                {submitted && (
                  <div className="flex items-center gap-2 border border-[#B7DFF2]/20 bg-[#E3F1F8] p-4 text-[#4496CC] animate-fade-in">
                    <Check size={18} strokeWidth={1.5} />
                    <span className="text-[13px] font-semibold">
                      Votre demande professionnelle a bien ete envoyee. Notre equipe revient vers vous tres vite.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
