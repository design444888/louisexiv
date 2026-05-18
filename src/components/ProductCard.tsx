'use client';

import React from 'react';
import Link from 'next/link';
import { Plus, ShoppingBag } from 'lucide-react';
import { Product } from '@/data/mockData';

interface ProductCardProps {
  product: Product;
  variant?: 'surface' | 'bg';
}

export default function ProductCard({ product, variant = 'surface' }: ProductCardProps) {
  const bgClass = variant === 'surface' ? 'bg-[#FFFAFA]' : 'bg-[#F8F0EB]';
  const imgBgClass = variant === 'surface' ? 'bg-[#F8F0EB]' : 'bg-[#F2E6DC]';

  return (
    <div 
      className={`group flex flex-col h-full rounded-none border border-[#E8D8CC] ${bgClass} overflow-hidden shadow-[0_2px_16px_rgba(87,49,25,0.07)] hover:shadow-[0_8px_28px_rgba(87,49,25,0.13)] transition-all duration-300 hover:-translate-y-[3px]`}
    >
      {/* Image Container - 4:5 Aspect Ratio */}
      <div className={`relative aspect-[4/5] w-full ${imgBgClass} overflow-hidden`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-[#FFFAFA] border border-[#E8D8CC] px-2 py-0.5 rounded-none">
          <span className="font-body text-[11px] font-medium tracking-wide text-[#7A5C46]">
            {product.volumeOrSize}
          </span>
        </div>
      </div>

      {/* Info Container */}
      <div className="flex flex-col flex-grow p-5">
        <span className="font-body text-[11px] uppercase tracking-[0.08em] text-[#7A5C46] mb-1.5">
          {product.category}
        </span>
        
        <h3 className="font-display text-[18px] font-medium text-[#2C1A0E] mb-2 leading-tight group-hover:text-[#573119] transition-colors">
          {product.name}
        </h3>
        
        <p className="font-body text-[13px] font-light text-[#7A5C46] mb-5 line-clamp-2 flex-grow leading-relaxed">
          {product.description}
        </p>

        {/* Action Container */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#E8D8CC]/50">
          <span className="font-display text-[17px] font-semibold text-[#573119]">
            {product.price},00 €
          </span>
          
          <button 
            className="flex items-center justify-center bg-[#573119] text-[#FFFFFF] border border-[#573119] hover:bg-[#3E2110] hover:border-[#3E2110] w-[34px] h-[34px] rounded-[4px] transition-all duration-220 cursor-pointer"
            title="Ajouter au panier"
            onClick={(e) => {
              e.preventDefault();
              // Trigger a local storage or state update event for cart count
              const event = new CustomEvent('add-to-cart');
              window.dispatchEvent(event);
            }}
          >
            <Plus size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
