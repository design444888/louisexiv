'use client';

import React from 'react';
import Link from 'next/link';
import { Leaf, Droplets, Sparkles, ShoppingBag } from 'lucide-react';
import { Category } from '@/data/mockData';

// Map icon names to Lucide icon components
const iconMap: Record<string, React.ComponentType<{ size: number; strokeWidth: number; className?: string }>> = {
  Leaf: Leaf,
  Droplets: Droplets,
  Sparkles: Sparkles,
  ShoppingBag: ShoppingBag
};

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = iconMap[category.iconName];

  return (
    <Link 
      href={`/boutique?cat=${category.slug}`}
      className="group block p-7 rounded-none border border-[#E8D8CC] bg-[#FFFFFF] hover:bg-[#F8F0EB] transition-all duration-300 shadow-none"
    >
      {/* Icon Area */}
      <div className="mb-6 flex items-center justify-start h-12">
        {category.iconName === 'M' ? (
          <span className="font-display italic text-[28px] font-bold text-[#573119] select-none">
            M
          </span>
        ) : IconComponent ? (
          <IconComponent size={28} strokeWidth={1.5} className="text-[#573119]" />
        ) : (
          <Sparkles size={28} strokeWidth={1.5} className="text-[#573119]" />
        )}
      </div>

      {/* Title */}
      <h3 className="font-display text-[20px] font-medium text-[#2C1A0E] mb-2 leading-tight group-hover:text-[#573119] transition-colors">
        {category.name}
      </h3>

      {/* Copy */}
      <p className="font-body text-[13px] font-light text-[#7A5C46] leading-relaxed">
        {category.description}
      </p>
      
      {/* Action link indicator */}
      <div className="mt-5 flex items-center text-[12px] font-body font-semibold uppercase tracking-wider text-[#573119]">
        Découvrir la gamme
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">→</span>
      </div>
    </Link>
  );
}
