'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  ChevronDown,
  Droplets,
  HelpCircle,
  Leaf,
  Lightbulb,
  Mail,
  Menu,
  MessageSquare,
  MoreHorizontal,
  ShoppingBag,
  Sparkles,
  Sprout,
  Users,
  X,
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [showCartAlert, setShowCartAlert] = useState(false);

  useEffect(() => {
    const handleAddToCart = () => {
      setCartCount((prev) => prev + 1);
      setShowCartAlert(true);
      setTimeout(() => setShowCartAlert(false), 2000);
    };

    window.addEventListener('add-to-cart', handleAddToCart);
    return () => window.removeEventListener('add-to-cart', handleAddToCart);
  }, []);

  const handleDesktopDropdownBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setActiveDropdown(null);
    }
  };

  const toggleMobileAccordion = (name: string) => {
    setMobileAccordion((current) => (current === name ? null : name));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#89C2D9]/50 bg-[#F1F8FC]/60 shadow-none backdrop-blur-md">
      {showCartAlert && (
        <div className="absolute top-full left-1/2 z-50 mt-4 -translate-x-1/2 rounded-none bg-[#89C2D9] px-4 py-2 font-body text-[13px] tracking-wide text-[#F1F8FC] shadow-none animate-fade-in">
          Produit ajoute au panier !
        </div>
      )}

      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 md:grid md:grid-cols-3 md:px-8">
        <div className="flex items-center justify-start gap-4">
          <button
            className="cursor-pointer text-[#4496CC] hover:text-[#2F7EAF] md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>

          <Link href="/" className="flex items-center group py-1 select-none transition-transform duration-300 hover:scale-102">
            <Image
              src="/logo.svg"
              alt="Louise XIV"
              width={64}
              height={53}
              priority
              className="hidden object-contain md:block"
            />
            <Image
              src="/logo.svg"
              alt="Louise XIV"
              width={52}
              height={43}
              priority
              className="block object-contain md:hidden"
            />
          </Link>
        </div>

        <nav className="relative hidden h-full items-center justify-center gap-8 md:flex">
          <div
            className="relative flex h-full items-center"
            onMouseEnter={() => setActiveDropdown('boutique')}
            onMouseLeave={() => setActiveDropdown(null)}
            onFocus={() => setActiveDropdown('boutique')}
            onBlur={handleDesktopDropdownBlur}
          >
            <Link
              href="/boutique"
              className={`flex cursor-pointer items-center gap-1 py-2 font-body text-[13px] font-semibold uppercase tracking-[0.15em] transition-colors hover:text-[#1F3F52] ${pathname.startsWith('/boutique') || activeDropdown === 'boutique' ? 'text-[#1F3F52] underline underline-offset-[6px]' : 'text-[#4496CC]'}`}
            >
              Boutique
              <ChevronDown
                size={14}
                strokeWidth={1.5}
                className={`transition-transform duration-200 ${activeDropdown === 'boutique' ? 'rotate-180' : ''}`}
              />
            </Link>

            <div
              className={`absolute top-full left-1/2 z-20 w-[280px] -translate-x-1/2 border border-[#8FC7E6] bg-[#E3F1F8] p-4 shadow-none before:absolute before:-top-4 before:left-0 before:h-4 before:w-full transition-all duration-200 ease-out ${
                activeDropdown === 'boutique'
                  ? 'visible translate-y-0 opacity-100 pointer-events-auto'
                  : 'invisible translate-y-2 opacity-0 pointer-events-none'
              }`}
            >
              <div className="space-y-1">
                <Link
                  href="/boutique#colorations"
                  onClick={() => setActiveDropdown(null)}
                  className="group flex items-center gap-3 rounded-none p-2.5 text-[#1F3F52] transition-all hover:bg-[#4496CC] hover:text-white"
                >
                  <Leaf size={18} strokeWidth={1.5} className="text-[#4496CC] transition-colors group-hover:text-white" />
                  <div className="text-left">
                    <div className="font-display text-[14px] font-medium">Colorations Naturelles</div>
                    <div className="font-body text-[11px] font-light text-[#2F7EAF] transition-colors group-hover:text-white">
                      Pigments botaniques et soins
                    </div>
                  </div>
                </Link>
                <Link
                  href="/boutique#soins"
                  onClick={() => setActiveDropdown(null)}
                  className="group flex items-center gap-3 rounded-none p-2.5 text-[#1F3F52] transition-all hover:bg-[#4496CC] hover:text-white"
                >
                  <Droplets size={18} strokeWidth={1.5} className="text-[#4496CC] transition-colors group-hover:text-white" />
                  <div className="text-left">
                    <div className="font-display text-[14px] font-medium">Soins Capillaires</div>
                    <div className="font-body text-[11px] font-light text-[#2F7EAF] transition-colors group-hover:text-white">
                      Rituels hydratants des Alpes
                    </div>
                  </div>
                </Link>
                <Link
                  href="/boutique#accessoires"
                  onClick={() => setActiveDropdown(null)}
                  className="group flex items-center gap-3 rounded-none p-2.5 text-[#1F3F52] transition-all hover:bg-[#4496CC] hover:text-white"
                >
                  <Sparkles size={18} strokeWidth={1.5} className="text-[#4496CC] transition-colors group-hover:text-white" />
                  <div className="text-left">
                    <div className="font-display text-[14px] font-medium">Accessoires</div>
                    <div className="font-body text-[11px] font-light text-[#2F7EAF] transition-colors group-hover:text-white">
                      Outils artisanaux en bois noble
                    </div>
                  </div>
                </Link>
                <div className="my-1 border-t border-[#8FC7E6]/50 pt-1.5">
                  <Link
                    href="/boutique"
                    onClick={() => setActiveDropdown(null)}
                    className="group flex items-center gap-3 rounded-none p-2.5 font-body text-[12px] font-semibold uppercase tracking-wider text-[#1F3F52] transition-all hover:bg-[#4496CC] hover:text-white"
                  >
                    <MoreHorizontal size={18} strokeWidth={1.5} className="text-[#4496CC] transition-colors group-hover:text-white" />
                    Voir tous les produits
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative flex h-full items-center"
            onMouseEnter={() => setActiveDropdown('conseils')}
            onMouseLeave={() => setActiveDropdown(null)}
            onFocus={() => setActiveDropdown('conseils')}
            onBlur={handleDesktopDropdownBlur}
          >
            <Link
              href="/conseils"
              className={`flex cursor-pointer items-center gap-1 py-2 font-body text-[13px] font-semibold uppercase tracking-[0.15em] transition-colors hover:text-[#1F3F52] ${pathname.startsWith('/conseils') || activeDropdown === 'conseils' ? 'text-[#1F3F52] underline underline-offset-[6px]' : 'text-[#4496CC]'}`}
            >
              Conseils
              <ChevronDown
                size={14}
                strokeWidth={1.5}
                className={`transition-transform duration-200 ${activeDropdown === 'conseils' ? 'rotate-180' : ''}`}
              />
            </Link>

            <div
              className={`absolute top-full left-1/2 z-20 w-[240px] -translate-x-1/2 border border-[#8FC7E6] bg-[#E3F1F8] p-4 shadow-none before:absolute before:-top-4 before:left-0 before:h-4 before:w-full transition-all duration-200 ease-out ${
                activeDropdown === 'conseils'
                  ? 'visible translate-y-0 opacity-100 pointer-events-auto'
                  : 'invisible translate-y-2 opacity-0 pointer-events-none'
              }`}
            >
              <div className="space-y-1 text-left">
                <Link
                  href="/conseils#blog-section"
                  onClick={() => setActiveDropdown(null)}
                  className="group flex items-center gap-3 rounded-none p-2 text-[#1F3F52] transition-all hover:bg-[#4496CC] hover:text-white"
                >
                  <BookOpen size={16} strokeWidth={1.5} className="text-[#4496CC] transition-colors group-hover:text-white" />
                  <span className="font-body text-[13.5px]">Le Blog Officiel</span>
                </Link>
                <Link
                  href="/conseils#faq-section"
                  onClick={() => setActiveDropdown(null)}
                  className="group flex items-center gap-3 rounded-none p-2 text-[#1F3F52] transition-all hover:bg-[#4496CC] hover:text-white"
                >
                  <HelpCircle size={16} strokeWidth={1.5} className="text-[#4496CC] transition-colors group-hover:text-white" />
                  <span className="font-body text-[13.5px]">Foire Aux Questions</span>
                </Link>
                <Link
                  href="/conseils#reviews-section"
                  onClick={() => setActiveDropdown(null)}
                  className="group flex items-center gap-3 rounded-none p-2 text-[#1F3F52] transition-all hover:bg-[#4496CC] hover:text-white"
                >
                  <MessageSquare size={16} strokeWidth={1.5} className="text-[#4496CC] transition-colors group-hover:text-white" />
                  <span className="font-body text-[13.5px]">Avis Clients</span>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="relative flex h-full items-center"
            onMouseEnter={() => setActiveDropdown('a-propos')}
            onMouseLeave={() => setActiveDropdown(null)}
            onFocus={() => setActiveDropdown('a-propos')}
            onBlur={handleDesktopDropdownBlur}
          >
            <Link
              href="/a-propos"
              className={`flex cursor-pointer items-center gap-1 py-2 font-body text-[13px] font-semibold uppercase tracking-[0.15em] transition-colors hover:text-[#1F3F52] ${pathname.startsWith('/a-propos') || activeDropdown === 'a-propos' ? 'text-[#1F3F52] underline underline-offset-[6px]' : 'text-[#4496CC]'}`}
            >
              A Propos
              <ChevronDown
                size={14}
                strokeWidth={1.5}
                className={`transition-transform duration-200 ${activeDropdown === 'a-propos' ? 'rotate-180' : ''}`}
              />
            </Link>

            <div
              className={`absolute top-full left-1/2 z-20 w-[240px] -translate-x-1/2 border border-[#8FC7E6] bg-[#E3F1F8] p-4 shadow-none before:absolute before:-top-4 before:left-0 before:h-4 before:w-full transition-all duration-200 ease-out ${
                activeDropdown === 'a-propos'
                  ? 'visible translate-y-0 opacity-100 pointer-events-auto'
                  : 'invisible translate-y-2 opacity-0 pointer-events-none'
              }`}
            >
              <div className="space-y-1 text-left">
                <Link
                  href="/a-propos#histoire"
                  onClick={() => setActiveDropdown(null)}
                  className="group flex items-center gap-3 rounded-none p-2 text-[#1F3F52] transition-all hover:bg-[#4496CC] hover:text-white"
                >
                  <Users size={16} strokeWidth={1.5} className="text-[#4496CC] transition-colors group-hover:text-white" />
                  <span className="font-body text-[13.5px]">Notre Histoire</span>
                </Link>
                <Link
                  href="/a-propos#engagements"
                  onClick={() => setActiveDropdown(null)}
                  className="group flex items-center gap-3 rounded-none p-2 text-[#1F3F52] transition-all hover:bg-[#4496CC] hover:text-white"
                >
                  <Sprout size={16} strokeWidth={1.5} className="text-[#4496CC] transition-colors group-hover:text-white" />
                  <span className="font-body text-[13.5px]">Nos Engagements</span>
                </Link>
                <Link
                  href="/a-propos#innovation"
                  onClick={() => setActiveDropdown(null)}
                  className="group flex items-center gap-3 rounded-none p-2 text-[#1F3F52] transition-all hover:bg-[#4496CC] hover:text-white"
                >
                  <Lightbulb size={16} strokeWidth={1.5} className="text-[#4496CC] transition-colors group-hover:text-white" />
                  <span className="font-body text-[13.5px]">Innovation Suisse</span>
                </Link>
                <Link
                  href="/a-propos#contact"
                  onClick={() => setActiveDropdown(null)}
                  className="group flex items-center gap-3 rounded-none p-2 text-[#1F3F52] transition-all hover:bg-[#4496CC] hover:text-white"
                >
                  <Mail size={16} strokeWidth={1.5} className="text-[#4496CC] transition-colors group-hover:text-white" />
                  <span className="font-body text-[13.5px]">Contact & Salon</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center justify-end gap-4">
          <Link
            href="/inscription-formulaire"
            className="hidden md:inline-flex items-center justify-center rounded-[4px] bg-[#4496CC] px-4 py-2 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-[#F1F8FC] transition-all duration-200 hover:bg-[#2F7EAF] hover:-translate-y-[1px]"
          >
            Inscription Pro
          </Link>

          <button
            className="relative flex items-center justify-center p-1.5 text-[#4496CC] transition-all hover:scale-105 hover:text-[#2F7EAF]"
            onClick={() => {
              alert(`Votre panier contient actuellement ${cartCount} produit(s). Le systeme de paiement de demonstration s'activera prochainement.`);
            }}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#4496CC] font-body text-[9px] font-semibold text-[#F1F8FC]">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-start bg-[#1F3F52]/60 backdrop-blur-xs transition-all duration-300 md:hidden">
          <div className="flex h-full w-[300px] flex-col justify-between overflow-y-auto bg-[#F1F8FC] p-6 shadow-2xl animate-slide-right">
            <div>
              <div className="mb-8 flex items-center justify-between border-b border-[#89C2D9]/40 pb-4">
                <Link
                  href="/"
                  className="relative block h-[43px] w-[52px] py-1 transition-transform duration-300 hover:scale-102"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Image
                    src="/logo.svg"
                    alt="Louise XIV"
                    fill
                    priority
                    className="object-contain"
                  />
                </Link>
                <button className="text-[#4496CC]" onClick={() => setMobileMenuOpen(false)}>
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>

              <div className="space-y-4 font-body">
                <Link
                  href="/inscription-formulaire"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-[4px] bg-[#4496CC] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F1F8FC] transition-all duration-200 hover:bg-[#2F7EAF]"
                >
                  Inscription Pro
                </Link>

                <div className="border-b border-[#8FC7E6]/50 pb-2">
                  <button
                    onClick={() => toggleMobileAccordion('boutique')}
                    className="flex w-full items-center justify-between py-2 text-left font-body text-[13px] font-semibold uppercase tracking-wider text-[#4496CC]"
                  >
                    Boutique
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${mobileAccordion === 'boutique' ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {mobileAccordion === 'boutique' && (
                    <div className="mt-2 ml-3 space-y-2.5 border-l border-[#8FC7E6] py-1 pl-3 animate-slide-down">
                      <Link href="/boutique#colorations" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#2F7EAF] hover:text-[#4496CC]">
                        Colorations Naturelles
                      </Link>
                      <Link href="/boutique#soins" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#2F7EAF] hover:text-[#4496CC]">
                        Soins Capillaires
                      </Link>
                      <Link href="/boutique#accessoires" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#2F7EAF] hover:text-[#4496CC]">
                        Accessoires
                      </Link>
                      <Link href="/boutique" onClick={() => setMobileMenuOpen(false)} className="block pt-1 text-[13px] font-semibold uppercase tracking-wider text-[#4496CC]">
                        Tous les produits
                      </Link>
                    </div>
                  )}
                </div>

                <div className="border-b border-[#8FC7E6]/50 pb-2">
                  <button
                    onClick={() => toggleMobileAccordion('conseils')}
                    className="flex w-full items-center justify-between py-2 text-left font-body text-[13px] font-semibold uppercase tracking-wider text-[#4496CC]"
                  >
                    Conseils
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${mobileAccordion === 'conseils' ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {mobileAccordion === 'conseils' && (
                    <div className="mt-2 ml-3 space-y-2.5 border-l border-[#8FC7E6] py-1 pl-3 animate-slide-down">
                      <Link href="/conseils#blog-section" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#2F7EAF] hover:text-[#4496CC]">
                        Blog
                      </Link>
                      <Link href="/conseils#faq-section" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#2F7EAF] hover:text-[#4496CC]">
                        FAQ
                      </Link>
                      <Link href="/conseils#reviews-section" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#2F7EAF] hover:text-[#4496CC]">
                        Avis clients
                      </Link>
                    </div>
                  )}
                </div>

                <div className="border-b border-[#8FC7E6]/50 pb-2">
                  <button
                    onClick={() => toggleMobileAccordion('a-propos')}
                    className="flex w-full items-center justify-between py-2 text-left font-body text-[13px] font-semibold uppercase tracking-wider text-[#4496CC]"
                  >
                    A Propos
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${mobileAccordion === 'a-propos' ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {mobileAccordion === 'a-propos' && (
                    <div className="mt-2 ml-3 space-y-2.5 border-l border-[#8FC7E6] py-1 pl-3 animate-slide-down">
                      <Link href="/a-propos#histoire" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#2F7EAF] hover:text-[#4496CC]">
                        Notre histoire
                      </Link>
                      <Link href="/a-propos#engagements" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#2F7EAF] hover:text-[#4496CC]">
                        Nos engagements
                      </Link>
                      <Link href="/a-propos#innovation" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#2F7EAF] hover:text-[#4496CC]">
                        Innovation
                      </Link>
                      <Link href="/a-propos#contact" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#2F7EAF] hover:text-[#4496CC]">
                        Contact
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t border-[#89C2D9]/40 pt-6 text-center font-body text-[11px] text-[#2F7EAF]">
              <p>Maison Louise XIV - Suisse</p>
              <p className="mt-1 font-light">Rituels botaniques de prestige</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


