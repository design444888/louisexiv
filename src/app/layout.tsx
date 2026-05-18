import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

export const metadata: Metadata = {
  title: "Louise XIV — Rituels Capillaires Botaniques d'Exception",
  description: "Découvrez l'apothicaire suisse Louise XIV. Des colorations naturelles haut de gamme et des soins d'exception formulés à partir d'ingrédients biologiques et alpins.",
  keywords: ["Louise XIV", "soins capillaires", "coloration naturelle", "coloration végétale", "apothicaire suisse", "cosmétique bio"],
  openGraph: {
    title: "Louise XIV — Soins Capillaires Naturels de Prestige",
    description: "Sublimez vos cheveux grâce à l'excellence des rituels botaniques suisses. Ingrédients biologiques certifiés et formulations d'exception.",
    type: "website",
    locale: "fr_CH",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#FAFCFD] text-[#2D4650] antialiased">
        <Header />
        <main id="main-content" className="flex-grow">
          <PageTransitionWrapper>
            {children}
          </PageTransitionWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}


