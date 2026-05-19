import React, { Suspense } from 'react';
import BoutiqueContent from './BoutiqueContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Boutique Officielle — Maison Louise XIV",
  description: "Découvrez notre boutique de soins capillaires biologiques et colorations 100% végétales élaborées en Suisse pour un cuir chevelu sain et éclatant.",
};

export default function BoutiquePage() {
  return (
    <Suspense 
      fallback={
        <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#FFFAFA] text-[#6E4226] font-body">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border-t-2 border-[#573119] animate-spin mb-4"></div>
          <p className="text-[13px] tracking-widest uppercase">Chargement de l&apos;apothicaire...</p>
        </div>
      }
    >
      <BoutiqueContent />
    </Suspense>
  );
}


