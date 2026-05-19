'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BriefcaseBusiness, Check, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';

type ProFormData = {
  societe: string;
  nom: string;
  prenom: string;
  email: string;
  telPortable: string;
  telFixe: string;
  address: string;
  codePostal: string;
  city: string;
  instagram: string;
};

const initialFormData: ProFormData = {
  societe: '',
  nom: '',
  prenom: '',
  email: '',
  telPortable: '',
  telFixe: '',
  address: '',
  codePostal: '',
  city: '',
  instagram: '',
};

export default function InscriptionFormulaireContent() {
  const [formData, setFormData] = useState<ProFormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      <section className="border-b border-[#E4D3C8]/50 bg-[#FFFAFA] py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 border border-[#C8A893]/40 bg-[#F8F0EB] px-3 py-1 font-body text-[11px] uppercase tracking-[0.15em] text-[#6E4226]">
              <BriefcaseBusiness size={14} strokeWidth={1.5} />
              Espace Professionnel
            </span>
            <h1 className="mt-5 font-display text-[36px] font-medium leading-tight text-[#402312] md:text-[54px]">
              Inscription <em className="font-display font-normal italic text-[#573119]">Pro</em>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-body text-[15px] font-light leading-relaxed text-[#6E4226] md:text-[17px]">
              Rejoignez l&apos;univers Louise XIV en tant que salon partenaire, revendeur selectif ou concept store
              et recevez nos conditions professionnelles, notre accompagnement et nos rituels exclusifs.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E4D3C8]/50 bg-[#F8F0EB] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 md:px-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-4">
            <div className="border border-[#E4D3C8] bg-[#FFFAFA] p-8">
              <span className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.14em] text-[#6E4226]">
                <Sparkles size={14} strokeWidth={1.5} className="text-[#573119]" />
                Partenariat Premium
              </span>
              <h2 className="mt-3 font-display text-[24px] font-medium text-[#402312]">
                Une ouverture reservee aux professionnels du soin
              </h2>
              <p className="mt-4 font-body text-[14px] font-light leading-relaxed text-[#6E4226]">
                Nous etudions chaque demande avec attention pour construire des collaborations coherentes,
                exigeantes et durables.
              </p>
            </div>

            <div className="border border-[#E4D3C8] bg-[#FFFAFA] p-8">
              <h3 className="font-display text-[20px] font-medium text-[#402312]">Ce que vous recevez</h3>
              <div className="mt-5 space-y-4">
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#573119]" />
                  <p className="font-body text-[13.5px] font-light leading-relaxed text-[#6E4226]">
                    Tarification professionnelle et conditions d&apos;ouverture de compte.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#573119]" />
                  <p className="font-body text-[13.5px] font-light leading-relaxed text-[#6E4226]">
                    Documentation produit et argumentaires de vente adaptes au point de vente.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#573119]" />
                  <p className="font-body text-[13.5px] font-light leading-relaxed text-[#6E4226]">
                    Accompagnement de lancement et recommandations de gamme sur-mesure.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-[#E4D3C8] bg-[#FFFAFA] p-8">
              <h3 className="font-display text-[20px] font-medium text-[#402312]">Contact direct</h3>
              <div className="mt-5 space-y-4 font-body text-[13.5px] text-[#6E4226]">
                <div className="flex items-start gap-3">
                  <Mail size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#573119]" />
                  <span>pro@louisexiv-apothicaire.ch</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#573119]" />
                  <span>+41 (0) 22 546 89 90</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#573119]" />
                  <span>Geneve, Suisse</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border border-[#E4D3C8] bg-[#FFFAFA] p-8 md:p-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="font-body text-[11px] uppercase tracking-[0.14em] text-[#6E4226]">
                    Formulaire d&apos;ouverture
                  </span>
                  <h2 className="mt-2 font-display text-[26px] font-medium text-[#402312]">
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
                    <label
                      htmlFor="societe"
                      className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-[#6E4226]"
                    >
                      Societe
                    </label>
                    <input
                      id="societe"
                      name="societe"
                      type="text"
                      value={formData.societe}
                      onChange={handleInputChange}
                      className="w-full border border-[#C8A893] bg-[#FFFAFA] px-3.5 py-2.5 text-[13px] text-[#402312] outline-none transition-colors focus:border-[#573119]"
                      placeholder="Maison Exemple"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="nom"
                      className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-[#6E4226]"
                    >
                      Nom
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      value={formData.nom}
                      onChange={handleInputChange}
                      className="w-full border border-[#C8A893] bg-[#FFFAFA] px-3.5 py-2.5 text-[13px] text-[#402312] outline-none transition-colors focus:border-[#573119]"
                      placeholder="Martin"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="prenom"
                      className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-[#6E4226]"
                    >
                      Prenom
                    </label>
                    <input
                      id="prenom"
                      name="prenom"
                      type="text"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      className="w-full border border-[#C8A893] bg-[#FFFAFA] px-3.5 py-2.5 text-[13px] text-[#402312] outline-none transition-colors focus:border-[#573119]"
                      placeholder="Camille"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-[#6E4226]"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-[#C8A893] bg-[#FFFAFA] px-3.5 py-2.5 text-[13px] text-[#402312] outline-none transition-colors focus:border-[#573119]"
                      placeholder="contact@maisonexemple.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="telPortable"
                      className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-[#6E4226]"
                    >
                      Tel portable
                    </label>
                    <input
                      id="telPortable"
                      name="telPortable"
                      type="tel"
                      value={formData.telPortable}
                      onChange={handleInputChange}
                      className="w-full border border-[#C8A893] bg-[#FFFAFA] px-3.5 py-2.5 text-[13px] text-[#402312] outline-none transition-colors focus:border-[#573119]"
                      placeholder="+41 ..."
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telFixe"
                      className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-[#6E4226]"
                    >
                      Tel fixe
                    </label>
                    <input
                      id="telFixe"
                      name="telFixe"
                      type="tel"
                      value={formData.telFixe}
                      onChange={handleInputChange}
                      className="w-full border border-[#C8A893] bg-[#FFFAFA] px-3.5 py-2.5 text-[13px] text-[#402312] outline-none transition-colors focus:border-[#573119]"
                      placeholder="+41 ..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="address"
                      className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-[#6E4226]"
                    >
                      Adress
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full border border-[#C8A893] bg-[#FFFAFA] px-3.5 py-2.5 text-[13px] text-[#402312] outline-none transition-colors focus:border-[#573119]"
                      placeholder="12 rue Exemple"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="codePostal"
                      className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-[#6E4226]"
                    >
                      Code postale
                    </label>
                    <input
                      id="codePostal"
                      name="codePostal"
                      type="text"
                      value={formData.codePostal}
                      onChange={handleInputChange}
                      className="w-full border border-[#C8A893] bg-[#FFFAFA] px-3.5 py-2.5 text-[13px] text-[#402312] outline-none transition-colors focus:border-[#573119]"
                      placeholder="1201"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="city"
                      className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-[#6E4226]"
                    >
                      Ville
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full border border-[#C8A893] bg-[#FFFAFA] px-3.5 py-2.5 text-[13px] text-[#402312] outline-none transition-colors focus:border-[#573119]"
                      placeholder="Geneve"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="instagram"
                      className="mb-2 block text-[12px] font-semibold uppercase tracking-wider text-[#6E4226]"
                    >
                      Instagram
                    </label>
                    <input
                      id="instagram"
                      name="instagram"
                      type="text"
                      value={formData.instagram}
                      onChange={handleInputChange}
                      className="w-full border border-[#C8A893] bg-[#FFFAFA] px-3.5 py-2.5 text-[13px] text-[#402312] outline-none transition-colors focus:border-[#573119]"
                      placeholder="@votrecompte"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="btn-primary flex items-center justify-center gap-2 px-8 py-3.5 text-[12px]"
                  >
                    <Send size={14} strokeWidth={1.5} />
                    Envoyer la demande
                  </button>
                  <p className="font-body text-[12.5px] font-light text-[#6E4226]">
                    Retour sous 24 a 48 heures ouvrees.
                  </p>
                </div>

                {submitted && (
                  <div className="animate-fade-in flex items-center gap-2 border border-[#C8A893]/20 bg-[#F8F0EB] p-4 text-[#573119]">
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
