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
      <div className={`relative aspect-[4/5] w-full ${imgBgClass} overflow-hidden`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-grow flex-col p-5">
        <span className="mb-1.5 font-body text-[11px] uppercase tracking-[0.08em] text-[#2F7EAF]">
          {product.category}
        </span>

        <h3 className="mb-2 font-display text-[18px] font-medium leading-tight text-[#1F3F52] transition-colors group-hover:text-[#4496CC]">
          {product.name}
        </h3>

        <p className="mb-5 flex-grow font-body text-[13px] font-light leading-relaxed text-[#2F7EAF] line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-[#8FC7E6]/50 pt-3">
          <span className="font-display text-[17px] font-semibold text-[#4496CC]">
            {product.price},00 €
          </span>

          <button
            className="flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-[4px] border border-[#4496CC] bg-[#4496CC] text-[#F1F8FC] transition-all duration-220 hover:border-[#2F7EAF] hover:bg-[#2F7EAF]"
            title="Ajouter au panier"
            onClick={(e) => {
              e.preventDefault();
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
          className="pointer-events-none absolute inset-0 translate-y-3 overflow-y-auto bg-[linear-gradient(180deg,rgba(241,248,252,0.94)_0%,rgba(227,241,248,0.985)_100%)] p-5 opacity-0 backdrop-blur-[2px] transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100"
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
            </div>

            <p className="font-body text-[11px] uppercase tracking-[0.12em] text-[#2F7EAF]">
              {product.category}
            </p>

            <ul className="space-y-2.5">
              {product.details.slice(0, 4).map((detail) => (
                <li
                  key={detail}
                  className="flex gap-2.5 font-body text-[12.5px] font-light leading-relaxed text-[#4496CC]"
                >
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#4496CC]" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
