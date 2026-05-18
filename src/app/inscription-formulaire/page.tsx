import type { Metadata } from 'next';
import InscriptionFormulaireContent from './InscriptionFormulaireContent';

export const metadata: Metadata = {
  title: 'Inscription Pro | Louise XIV',
  description:
    "Formulaire d'inscription professionnelle pour les salons, concept stores et partenaires Louise XIV.",
};

export default function InscriptionFormulairePage() {
  return <InscriptionFormulaireContent />;
}
