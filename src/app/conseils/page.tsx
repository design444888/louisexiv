import React, { Suspense } from 'react';
import ConseilsContent from './ConseilsContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conseils & Rituels Botaniques — Maison Louise XIV",
  description: "Explorez les dossiers de l'apothicaire suisse Louise XIV : l'art de la coloration végétale, les rituels de soins de nuit, et les avis de notre communauté.",
};

export default function ConseilsPage() {
  return (
    <Suspense 
      fallback={
        <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#FAFCFD] text-[#4F8FA8] font-body">
          <div className="flex items-center justify-center w-8 h-8 rounded-full border-t-2 border-[#7CB7CC] animate-spin mb-4"></div>
          <p className="text-[13px] tracking-widest uppercase">Chargement des conseils...</p>
        </div>
      }
    >
      <ConseilsContent />
    </Suspense>
  );
}


