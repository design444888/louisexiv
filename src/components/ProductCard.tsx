'use client';

import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '@/data/mockData';

interface ProductCardProps {
  product: Product;
  variant?: 'surface' | 'bg';
  showTechnicalSheetOnHover?: boolean;
}

export default function ProductCard({
  product,
  variant = 'surface',
  showTechnicalSheetOnHover = false,
}: ProductCardProps) {
  const bgClass = variant === 'surface' ? 'bg-[#FAFCFD]' : 'bg-[#EAF3F6]';
  const imgBgClass = variant === 'surface' ? 'bg-[#EAF3F6]' : 'bg-[#A8D5E2]';

  return (
    <div 
      className={`group relative flex h-full flex-col overflow-hidden rounded-none border border-[#A8D5E2] ${bgClass} shadow-[0_2px_16px_rgba(45,70,80,0.07)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_8px_28px_rgba(45,70,80,0.13)]`}
    >
      {/* Image Container - 4:5 Aspect Ratio */}
      <div className={`relative aspect-[4/5] w-full ${imgBgClass} overflow-hidden`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-[#FAFCFD] border border-[#A8D5E2] px-2 py-0.5 rounded-none">
          <span className="font-body text-[11px] font-medium tracking-wide text-[#4F8FA8]">
            {product.volumeOrSize}
          </span>
        </div>
      </div>

      {/* Info Container */}
      <div className="flex flex-col flex-grow p-5">
        <span className="font-body text-[11px] uppercase tracking-[0.08em] text-[#4F8FA8] mb-1.5">
          {product.category}
        </span>
        
        <h3 className="font-display text-[18px] font-medium text-[#2D4650] mb-2 leading-tight group-hover:text-[#7CB7CC] transition-colors">
          {product.name}
        </h3>
        
        <p className="font-body text-[13px] font-light text-[#4F8FA8] mb-5 line-clamp-2 flex-grow leading-relaxed">
          {product.description}
        </p>

        {/* Action Container */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#A8D5E2]/50">
          <span className="font-display text-[17px] font-semibold text-[#7CB7CC]">
            {product.price},00 €
          </span>
          
          <button 
            className="flex items-center justify-center bg-[#7CB7CC] text-[#FAFCFD] border border-[#7CB7CC] hover:bg-[#4F8FA8] hover:border-[#4F8FA8] w-[34px] h-[34px] rounded-[4px] transition-all duration-220 cursor-pointer"
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

      {showTechnicalSheetOnHover && (
        <div
          className="pointer-events-none absolute inset-0 flex translate-y-3 flex-col justify-between bg-[linear-gradient(180deg,rgba(250,252,253,0.94)_0%,rgba(234,243,246,0.985)_100%)] p-5 opacity-0 backdrop-blur-[2px] transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100"
          aria-hidden="true"
        >
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3 border-b border-[#89C2D9]/40 pb-3">
              <div>
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4F8FA8]">
                  Fiche Technique
                </p>
                <h4 className="mt-1 font-display text-[20px] font-medium leading-tight text-[#2D4650]">
                  {product.name}
                </h4>
              </div>
              {product.volumeOrSize && (
                <span className="shrink-0 border border-[#A8D5E2] bg-[#FAFCFD] px-2 py-1 font-body text-[11px] font-medium tracking-wide text-[#4F8FA8]">
                  {product.volumeOrSize}
                </span>
              )}
            </div>

            <p className="font-body text-[11px] uppercase tracking-[0.12em] text-[#4F8FA8]">
              {product.category}
            </p>

            <ul className="space-y-2.5">
              {product.details.slice(0, 4).map((detail) => (
                <li key={detail} className="flex gap-2.5 font-body text-[12.5px] font-light leading-relaxed text-[#7CB7CC]">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#7CB7CC]" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[#89C2D9]/40 pt-3">
            <p className="font-body text-[10.5px] uppercase tracking-[0.14em] text-[#4F8FA8]">
              Prix
            </p>
            <p className="mt-1 font-display text-[21px] font-semibold text-[#7CB7CC]">
              {product.price},00 €
            </p>
          </div>
        </div>
      )}
    </div>
  );
}


