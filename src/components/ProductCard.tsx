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
  const bgClass = variant === 'surface' ? 'bg-[#F1F8FC]' : 'bg-[#E3F1F8]';
  const imgBgClass = variant === 'surface' ? 'bg-[#E3F1F8]' : 'bg-[#8FC7E6]';

  return (
    <div 
      className={`group relative flex h-full flex-col overflow-hidden rounded-none border border-[#8FC7E6] ${bgClass} shadow-[0_2px_16px_rgba(31,63,82,0.07)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_8px_28px_rgba(31,63,82,0.13)]`}
    >
      {/* Image Container - 4:5 Aspect Ratio */}
      <div className={`relative aspect-[4/5] w-full ${imgBgClass} overflow-hidden`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-[#F1F8FC] border border-[#8FC7E6] px-2 py-0.5 rounded-none">
          <span className="font-body text-[11px] font-medium tracking-wide text-[#2F7EAF]">
            {product.volumeOrSize}
          </span>
        </div>
      </div>

      {/* Info Container */}
      <div className="flex flex-col flex-grow p-5">
        <span className="font-body text-[11px] uppercase tracking-[0.08em] text-[#2F7EAF] mb-1.5">
          {product.category}
        </span>
        
        <h3 className="font-display text-[18px] font-medium text-[#1F3F52] mb-2 leading-tight group-hover:text-[#4496CC] transition-colors">
          {product.name}
        </h3>
        
        <p className="font-body text-[13px] font-light text-[#2F7EAF] mb-5 line-clamp-2 flex-grow leading-relaxed">
          {product.description}
        </p>

        {/* Action Container */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#8FC7E6]/50">
          <span className="font-display text-[17px] font-semibold text-[#4496CC]">
            {product.price},00 €
          </span>
          
          <button 
            className="flex items-center justify-center bg-[#4496CC] text-[#F1F8FC] border border-[#4496CC] hover:bg-[#2F7EAF] hover:border-[#2F7EAF] w-[34px] h-[34px] rounded-[4px] transition-all duration-220 cursor-pointer"
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
            <div className="flex items-start justify-between gap-3 border-b border-[#B7DFF2]/40 pb-3">
              <div>
                <p className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2F7EAF]">
                  Fiche Technique
                </p>
                <h4 className="mt-1 font-display text-[20px] font-medium leading-tight text-[#1F3F52]">
                  {product.name}
                </h4>
              </div>
              {product.volumeOrSize && (
                <span className="shrink-0 border border-[#8FC7E6] bg-[#F1F8FC] px-2 py-1 font-body text-[11px] font-medium tracking-wide text-[#2F7EAF]">
                  {product.volumeOrSize}
                </span>
              )}
            </div>

            <p className="font-body text-[11px] uppercase tracking-[0.12em] text-[#2F7EAF]">
              {product.category}
            </p>

            <ul className="space-y-2.5">
              {product.details.slice(0, 4).map((detail) => (
                <li key={detail} className="flex gap-2.5 font-body text-[12.5px] font-light leading-relaxed text-[#4496CC]">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4496CC]" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[#B7DFF2]/40 pt-3">
            <p className="font-body text-[10.5px] uppercase tracking-[0.14em] text-[#2F7EAF]">
              Prix
            </p>
            <p className="mt-1 font-display text-[21px] font-semibold text-[#4496CC]">
              {product.price},00 €
            </p>
          </div>
        </div>
      )}
    </div>
  );
}


