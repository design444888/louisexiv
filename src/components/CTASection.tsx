'use client';

import React from 'react';
import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  italicTitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({
  title = "Sublimez votre beauté",
  italicTitle = "naturellement",
  description = "Rejoignez le cercle Louise XIV et bénéficiez de conseils personnalisés, d'offres exclusives et de rituels sur-mesure conçus en Suisse pour la santé de vos cheveux.",
  buttonText = "Découvrir la boutique",
  buttonLink = "/boutique"
}: CTASectionProps) {
  return (
    <section className="bg-[#3C2210] border-y border-[#C9AA95]/30 text-[#FFFAFA] py-20 px-6 md:px-12 text-center relative overflow-hidden">
      {/* Delicate floral/organic design element (fleur-de-lis backdrop mock) */}
      <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none select-none">
        <span className="font-display italic text-[240px] font-bold text-[#FFFAFA]">
          XIV
        </span>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">


        <h2 className="font-display text-[28px] md:text-[38px] font-medium mb-4 leading-tight">
          <span className="text-[#FFFFFF]/60">{title}</span> <br className="hidden sm:inline" />
          <em className="font-display italic text-[#D4B99A] font-normal">{italicTitle}</em>
        </h2>

        <p className="font-body text-[14px] md:text-[15px] font-light text-[#D4B99A] mb-8 max-w-xl mx-auto leading-relaxed">
          {description}
        </p>

        <div>
          <Link href={buttonLink} className="btn-secondary !border-[#D4B99A] !text-[#D4B99A] hover:!bg-[#D4B99A] hover:!text-[#3C2210] px-8 py-3.5 text-[12px] tracking-[0.08em]">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
