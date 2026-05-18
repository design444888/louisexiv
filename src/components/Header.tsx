'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronDown, 
  Leaf, 
  Sparkles, 
  Droplets, 
  BookOpen, 
  HelpCircle, 
  MessageSquare,
  Users,
  Sprout,
  Lightbulb,
  Mail,
  MoreHorizontal
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  
  // Cart state
  const [cartCount, setCartCount] = useState(0);
  const [showCartAlert, setShowCartAlert] = useState(false);

  // Refs for closing dropdowns on outside click
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Listen for custom "add-to-cart" event
    const handleAddToCart = () => {
      setCartCount(prev => prev + 1);
      setShowCartAlert(true);
      setTimeout(() => setShowCartAlert(false), 2000);
    };

    window.addEventListener('add-to-cart', handleAddToCart);
    return () => window.removeEventListener('add-to-cart', handleAddToCart);
  }, []);

  useEffect(() => {
    // Close dropdowns on click outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const toggleMobileAccordion = (name: string) => {
    if (mobileAccordion === name) {
      setMobileAccordion(null);
    } else {
      setMobileAccordion(name);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFFAFA]/60 backdrop-blur-md border-b border-[#C9AA95]/50 shadow-none">
      {/* Mini Cart notification toast inside Header */}
      {showCartAlert && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-[#6B8F5E] text-[#FFFFFF] px-4 py-2 rounded-none shadow-none font-body text-[13px] tracking-wide animate-fade-in z-50">
          Produit ajouté au panier !
        </div>
      )}

      {/* Responsive layout:
          - Mobile/Tablet: 2-column flex (Left: Menu trigger + Logo, Right: Cart)
          - Desktop: 3-column grid for perfect mathematical balance */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 h-20 flex md:grid md:grid-cols-3 items-center justify-between">
        
        {/* LEFT COLUMN: Mobile trigger & Logo */}
        <div className="flex items-center gap-4 justify-start">
          {/* Mobile Menu Trigger */}
          <button 
            className="md:hidden text-[#573119] hover:text-[#3E2110] cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>

          {/* LOGO AREA */}
          <Link href="/" className="flex items-center group py-1 select-none hover:scale-102 transition-transform duration-300">
            {/* Desktop Logo */}
            <Image
              src="/logo.svg"
              alt="Louise XIV"
              width={64}
              height={53}
              priority
              className="hidden md:block object-contain"
            />
            {/* Mobile/Tablet Logo */}
            <Image
              src="/logo.svg"
              alt="Louise XIV"
              width={52}
              height={43}
              priority
              className="block md:hidden object-contain"
            />
          </Link>
        </div>

        {/* CENTER COLUMN: Perfectly Centered Navigation (Desktop only) */}
        <nav ref={dropdownRef} className="hidden md:flex items-center justify-center gap-8 relative h-full">
          
          {/* Dropdown 1: Boutique */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('boutique')}
              className={`flex items-center gap-1 font-body text-[13px] font-semibold uppercase tracking-[0.15em] text-[#573119] hover:text-[#3E2110] transition-colors cursor-pointer py-2 ${pathname.startsWith('/boutique') ? 'underline underline-offset-[6px]' : ''}`}
            >
              Boutique
              <ChevronDown size={14} strokeWidth={1.5} className={`transition-transform duration-300 ${activeDropdown === 'boutique' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'boutique' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[280px] bg-[#F8F0EB] border border-[#E8D8CC] rounded-none shadow-none p-4 animate-slide-down">
                <div className="space-y-1">
                  <Link 
                    href="/boutique#colorations" 
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 p-2.5 rounded-none hover:bg-[#F2E6DC] text-[#2C1A0E] hover:text-[#573119] transition-all"
                  >
                    <Leaf size={18} strokeWidth={1.5} className="text-[#573119]" />
                    <div className="text-left">
                      <div className="font-display text-[14px] font-medium">Colorations Naturelles</div>
                      <div className="font-body text-[11px] text-[#7A5C46] font-light">Pigments botaniques et soins</div>
                    </div>
                  </Link>
                  <Link 
                    href="/boutique#soins" 
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 p-2.5 rounded-none hover:bg-[#F2E6DC] text-[#2C1A0E] hover:text-[#573119] transition-all"
                  >
                    <Droplets size={18} strokeWidth={1.5} className="text-[#573119]" />
                    <div className="text-left">
                      <div className="font-display text-[14px] font-medium">Soins Capillaires</div>
                      <div className="font-body text-[11px] text-[#7A5C46] font-light">Rituels hydratants des Alpes</div>
                    </div>
                  </Link>

                  <Link 
                    href="/boutique#accessoires" 
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 p-2.5 rounded-none hover:bg-[#F2E6DC] text-[#2C1A0E] hover:text-[#573119] transition-all"
                  >
                    <Sparkles size={18} strokeWidth={1.5} className="text-[#573119]" />
                    <div className="text-left">
                      <div className="font-display text-[14px] font-medium">Accessoires</div>
                      <div className="font-body text-[11px] text-[#7A5C46] font-light">Outils artisanaux en bois noble</div>
                    </div>
                  </Link>
                  <div className="border-t border-[#E8D8CC]/50 my-1 pt-1.5">
                    <Link 
                       href="/boutique" 
                       onClick={() => setActiveDropdown(null)}
                       className="flex items-center gap-3 p-2.5 rounded-none hover:bg-[#F2E6DC] text-[#2C1A0E] hover:text-[#573119] transition-all font-body text-[12px] font-semibold uppercase tracking-wider"
                    >
                      <MoreHorizontal size={18} strokeWidth={1.5} className="text-[#573119]" />
                      Voir tous les produits
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Dropdown 2: Conseils */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('conseils')}
              className={`flex items-center gap-1 font-body text-[13px] font-semibold uppercase tracking-[0.15em] text-[#573119] hover:text-[#3E2110] transition-colors cursor-pointer py-2 ${pathname.startsWith('/conseils') ? 'underline underline-offset-[6px]' : ''}`}
            >
              Conseils
              <ChevronDown size={14} strokeWidth={1.5} className={`transition-transform duration-300 ${activeDropdown === 'conseils' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'conseils' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[240px] bg-[#F8F0EB] border border-[#E8D8CC] rounded-none shadow-none p-4 animate-slide-down">
                <div className="space-y-1 text-left">
                  <Link 
                    href="/conseils#blog-section" 
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 p-2 rounded-none hover:bg-[#F2E6DC] text-[#2C1A0E] hover:text-[#573119] transition-all"
                  >
                    <BookOpen size={16} strokeWidth={1.5} className="text-[#573119]" />
                    <span className="font-body text-[13.5px]">Le Blog Officiel</span>
                  </Link>
                  <Link 
                    href="/conseils#faq-section" 
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 p-2 rounded-none hover:bg-[#F2E6DC] text-[#2C1A0E] hover:text-[#573119] transition-all"
                  >
                    <HelpCircle size={16} strokeWidth={1.5} className="text-[#573119]" />
                    <span className="font-body text-[13.5px]">Foire Aux Questions</span>
                  </Link>
                  <Link 
                    href="/conseils#reviews-section" 
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 p-2 rounded-none hover:bg-[#F2E6DC] text-[#2C1A0E] hover:text-[#573119] transition-all"
                  >
                    <MessageSquare size={16} strokeWidth={1.5} className="text-[#573119]" />
                    <span className="font-body text-[13.5px]">Avis Clients</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Dropdown 3: À Propos */}
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('a-propos')}
              className={`flex items-center gap-1 font-body text-[13px] font-semibold uppercase tracking-[0.15em] text-[#573119] hover:text-[#3E2110] transition-colors cursor-pointer py-2 ${pathname.startsWith('/a-propos') ? 'underline underline-offset-[6px]' : ''}`}
            >
              À Propos
              <ChevronDown size={14} strokeWidth={1.5} className={`transition-transform duration-300 ${activeDropdown === 'a-propos' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'a-propos' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[240px] bg-[#F8F0EB] border border-[#E8D8CC] rounded-none shadow-none p-4 animate-slide-down">
                <div className="space-y-1 text-left">
                  <Link 
                    href="/a-propos#histoire" 
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 p-2 rounded-none hover:bg-[#F2E6DC] text-[#2C1A0E] hover:text-[#573119] transition-all"
                  >
                    <Users size={16} strokeWidth={1.5} className="text-[#573119]" />
                    <span className="font-body text-[13.5px]">Notre Histoire</span>
                  </Link>
                  <Link 
                    href="/a-propos#engagements" 
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 p-2 rounded-none hover:bg-[#F2E6DC] text-[#2C1A0E] hover:text-[#573119] transition-all"
                  >
                    <Sprout size={16} strokeWidth={1.5} className="text-[#573119]" />
                    <span className="font-body text-[13.5px]">Nos Engagements</span>
                  </Link>
                  <Link 
                    href="/a-propos#innovation" 
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 p-2 rounded-none hover:bg-[#F2E6DC] text-[#2C1A0E] hover:text-[#573119] transition-all"
                  >
                    <Lightbulb size={16} strokeWidth={1.5} className="text-[#573119]" />
                    <span className="font-body text-[13.5px]">Innovation Suisse</span>
                  </Link>
                  <Link 
                    href="/a-propos#contact" 
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 p-2 rounded-none hover:bg-[#F2E6DC] text-[#2C1A0E] hover:text-[#573119] transition-all"
                  >
                    <Mail size={16} strokeWidth={1.5} className="text-[#573119]" />
                    <span className="font-body text-[13.5px]">Contact & Salon</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* RIGHT COLUMN: Actions / Cart only */}
        <div className="flex items-center justify-end">
          {/* Cart Button "Panier" */}
          <button 
            className="text-[#573119] hover:text-[#3E2110] transition-all cursor-pointer relative flex items-center justify-center p-1.5 hover:scale-105"
            onClick={() => {
              alert(`Votre panier contient actuellement ${cartCount} produit(s). Le système de paiement de démonstration s'activera prochainement.`);
            }}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 bg-[#573119] text-[#FFFFFF] text-[9px] w-4.5 h-4.5 flex items-center justify-center rounded-full font-body font-semibold">
              {cartCount}
            </span>
          </button>
        </div>

      </div>

      {/* MOBILE ACCORDION NAVIGATION OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#2C1A0E]/60 backdrop-blur-xs flex justify-start md:hidden transition-all duration-300">
          <div className="w-[300px] h-full bg-[#FFFAFA] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-slide-right">
            
            <div>
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#C9AA95]/40">
                <Link href="/" className="block py-1 relative w-[52px] h-[43px] hover:scale-102 transition-transform duration-300" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/logo.svg"
                    alt="Louise XIV"
                    fill
                    priority
                    className="object-contain"
                  />
                </Link>
                <button 
                  className="text-[#573119]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>

              {/* Mobile Navigation Accordions */}
              <div className="space-y-4 font-body">
                
                {/* Accordion 1: Boutique */}
                <div className="border-b border-[#E8D8CC]/50 pb-2">
                  <button
                    onClick={() => toggleMobileAccordion('boutique')}
                    className="flex items-center justify-between w-full text-left py-2 font-body text-[13px] font-semibold uppercase tracking-wider text-[#573119]"
                  >
                    Boutique
                    <ChevronDown size={16} className={`transition-transform duration-300 ${mobileAccordion === 'boutique' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileAccordion === 'boutique' && (
                    <div className="mt-2 ml-3 space-y-2.5 border-l border-[#E8D8CC] pl-3 py-1 animate-slide-down">
                      <Link href="/boutique#colorations" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#7A5C46] hover:text-[#573119]">
                        Colorations Naturelles
                      </Link>
                      <Link href="/boutique#soins" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#7A5C46] hover:text-[#573119]">
                        Soins Capillaires
                      </Link>

                      <Link href="/boutique#accessoires" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#7A5C46] hover:text-[#573119]">
                        Accessoires
                      </Link>
                      <Link href="/boutique" onClick={() => setMobileMenuOpen(false)} className="block text-[13px] text-[#573119] font-semibold uppercase tracking-wider pt-1">
                        Tous les produits
                      </Link>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Conseils */}
                <div className="border-b border-[#E8D8CC]/50 pb-2">
                  <button
                    onClick={() => toggleMobileAccordion('conseils')}
                    className="flex items-center justify-between w-full text-left py-2 font-body text-[13px] font-semibold uppercase tracking-wider text-[#573119]"
                  >
                    Conseils
                    <ChevronDown size={16} className={`transition-transform duration-300 ${mobileAccordion === 'conseils' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileAccordion === 'conseils' && (
                    <div className="mt-2 ml-3 space-y-2.5 border-l border-[#E8D8CC] pl-3 py-1 animate-slide-down">
                      <Link href="/conseils#blog-section" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#7A5C46] hover:text-[#573119]">
                        Blog
                      </Link>
                      <Link href="/conseils#faq-section" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#7A5C46] hover:text-[#573119]">
                        FAQ
                      </Link>
                      <Link href="/conseils#reviews-section" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#7A5C46] hover:text-[#573119]">
                        Avis clients
                      </Link>
                    </div>
                  )}
                </div>

                {/* Accordion 3: À Propos */}
                <div className="border-b border-[#E8D8CC]/50 pb-2">
                  <button
                    onClick={() => toggleMobileAccordion('a-propos')}
                    className="flex items-center justify-between w-full text-left py-2 font-body text-[13px] font-semibold uppercase tracking-wider text-[#573119]"
                  >
                    À Propos
                    <ChevronDown size={16} className={`transition-transform duration-300 ${mobileAccordion === 'a-propos' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {mobileAccordion === 'a-propos' && (
                    <div className="mt-2 ml-3 space-y-2.5 border-l border-[#E8D8CC] pl-3 py-1 animate-slide-down">
                      <Link href="/a-propos#histoire" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#7A5C46] hover:text-[#573119]">
                        Notre histoire
                      </Link>
                      <Link href="/a-propos#engagements" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#7A5C46] hover:text-[#573119]">
                        Nos engagements
                      </Link>
                      <Link href="/a-propos#innovation" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#7A5C46] hover:text-[#573119]">
                        Innovation
                      </Link>
                      <Link href="/a-propos#contact" onClick={() => setMobileMenuOpen(false)} className="block text-[13.5px] text-[#7A5C46] hover:text-[#573119]">
                        Contact
                      </Link>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Mobile Footer Area */}
            <div className="pt-6 border-t border-[#C9AA95]/40 text-center font-body text-[11px] text-[#7A5C46]">
              <p>Maison Louise XIV — Suisse</p>
              <p className="mt-1 font-light">Rituels botaniques de prestige</p>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
