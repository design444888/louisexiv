'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer
      className="bg-[var(--color-footer)] text-[#8FC7E6] border-t border-[#B7DFF2]/20 font-body"
      style={{ backgroundColor: '#1F3F52' }}
    >
      
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* COLUMN 1: Logo & Partners (Span 5) */}
        <div className="md:col-span-5 space-y-5 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Logo - White */}
          <Link href="/" className="block py-1 relative w-[130px] h-[65px] hover:scale-102 transition-transform duration-300">
            <Image
              src="/logo.svg"
              alt="Louise XIV"
              fill
              priority
              className="object-contain invert"
            />
          </Link>
          
          <p className="text-[13px] text-[#8FC7E6]/85 font-light leading-relaxed max-w-sm">
            Coloration végétale – coloration 100% naturelle
          </p>

          {/* Partner logos banner */}
          <div className="relative w-[280px] h-[95px] bg-[#F1F8FC] border border-[#B7DFF2]/30 overflow-hidden flex items-center justify-center p-1.5">
            <Image
              src="/partners.png"
              alt="Partenaires Nouvelle-Aquitaine et Laboratoire ISATIS"
              fill
              className="object-contain p-2"
            />
          </div>

          {/* Disclaimer text */}
          <p className="text-[10px] text-[#8FC7E6]/55 leading-relaxed font-light max-w-[280px]">
            La Région et l&apos;Union Européenne soutiennent le Laboratoire ISATIS dans le cadre du dispositif de relance de l&apos;Union Européenne en réponse à la pandémie de COVID-19 du Programme Opérationnel FEDER/FSE (Aquitaine/Limousin/Poitou-Charentes) 2014-2020
          </p>
        </div>

        {/* COLUMN 2: Informations (Span 3) - Single column with divider lines */}
        <div className="md:col-span-3 text-center md:text-left flex flex-col items-center md:items-start w-full">
          <h3 className="font-display font-medium text-[16px] !text-white mb-5 tracking-wide">
            Informations
          </h3>
          <ul className="space-y-3.5 text-[13.5px] font-light text-[#8FC7E6]/85 w-full flex flex-col items-center md:items-start">
            
            {/* Group 1: Boutique */}
            <li>
              <Link href="/boutique" className="hover:text-[#F1F8FC] transition-colors">
                E-shop
              </Link>
            </li>
            <li>
              <Link href="/boutique#colorations" className="hover:text-[#F1F8FC] transition-colors">
                Colorations végétales
              </Link>
            </li>
            <li>
              <Link href="/boutique#soins" className="hover:text-[#F1F8FC] transition-colors">
                Soins
              </Link>
            </li>
            <li>
              <Link href="/boutique#accessoires" className="hover:text-[#F1F8FC] transition-colors">
                Accessoires
              </Link>
            </li>

            {/* Divider Line 1 */}
            <li className="w-full max-w-[120px] md:max-w-none border-t border-[#B7DFF2]/20 my-2.5 pointer-events-none"></li>

            {/* Group 2: Conseils */}
            <li>
              <Link href="/conseils" className="hover:text-[#F1F8FC] transition-colors">
                Inspirations
              </Link>
            </li>
            <li>
              <Link href="/conseils#blog-section" className="hover:text-[#F1F8FC] transition-colors">
                Nos formations
              </Link>
            </li>

            {/* Divider Line 2 */}
            <li className="w-full max-w-[120px] md:max-w-none border-t border-[#B7DFF2]/20 my-2.5 pointer-events-none"></li>

            {/* Group 3: À propos */}
            <li>
              <Link href="/a-propos#histoire" className="hover:text-[#F1F8FC] transition-colors">
                Trouver un salon
              </Link>
            </li>
            <li>
              <Link href="/a-propos#contact" className="hover:text-[#F1F8FC] transition-colors">
                Contactez-nous
              </Link>
            </li>

          </ul>
        </div>

        {/* COLUMN 3: Newsletter Form (Span 4) */}
        <div className="md:col-span-4 text-center md:text-left flex flex-col items-center md:items-start w-full">
          <h3 className="font-display font-medium text-[16px] !text-white mb-5 tracking-wide">
            Lettre d&apos;information
          </h3>
          
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3 w-full max-w-sm">
            <input
              type="email"
              placeholder="E-mail"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="bg-[#1F3F52]/40 border border-[#B7DFF2]/40 text-[#F1F8FC] font-body text-[13px] px-3.5 py-2.5 rounded-none focus:outline-none focus:border-[#F1F8FC] placeholder-[#8FC7E6]/35 w-full transition-all duration-300"
              required
            />
            <button 
              type="submit" 
              className="bg-[#4496CC] hover:bg-[#2F7EAF] text-[#F1F8FC] font-body text-[12.5px] font-semibold uppercase tracking-wider px-4 py-2.5 rounded-none transition-all duration-200 cursor-pointer w-full"
            >
              s&apos;abonner
            </button>
          </form>
          
          {subscribed && (
            <p className="text-[12px] text-[#B7DFF2] mt-2 font-medium">
              Inscription réussie. Bienvenue dans la Maison.
            </p>
          )}

          <p className="text-[11.5px] text-[#8FC7E6]/70 font-light mt-4 leading-relaxed max-w-xs text-center md:text-left">
            J&apos;accepte de recevoir des emails d&apos;informations, conformément à notre <Link href="/a-propos" className="text-[#4496CC] hover:underline">politique de confidentialité</Link>.
          </p>
        </div>

      </div>

      {/* Bottom Bar: Copyright & legal links */}
      <div
        className="border-t border-[#B7DFF2]/15 py-6 px-6 bg-[var(--color-footer)] text-center text-[12px] text-[#8FC7E6]/55 font-body"
        style={{ backgroundColor: '#1F3F52' }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-center items-center gap-1.5 flex-wrap leading-relaxed">
          <span>
            Réalisation : <a href="https://havetdigital.fr" target="_blank" rel="noopener noreferrer" className="text-[#4496CC] hover:underline font-medium">Havet Digital</a> © Louise XIV Suisse  {new Date().getFullYear()}
          </span>
          <span className="hidden sm:inline text-[#8FC7E6]/30">|</span>
          <Link href="/a-propos" className="hover:text-[#F1F8FC] transition-colors">
            Mentions légales
          </Link>
          <span className="text-[#8FC7E6]/30">|</span>
          <Link href="/a-propos" className="hover:text-[#F1F8FC] transition-colors">
            Confidentialité
          </Link>
          <span className="text-[#8FC7E6]/30">|</span>
          <Link href="/boutique" className="hover:text-[#F1F8FC] transition-colors">
            CGV
          </Link>
          <span className="text-[#8FC7E6]/30">|</span>
          <Link href="/a-propos" className="hover:text-[#F1F8FC] transition-colors">
            Cookies
          </Link>
          <span> <a href="https://louisexiv.com/" target="_blank" rel="noopener noreferrer" className="text-[#4496CC] hover:underline font-medium">Louise XIV france</a></span>
        </div>
      </div>

    </footer>
  );
}


