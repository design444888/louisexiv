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
      className="group block p-7 rounded-none border border-[#8FC7E6] bg-[#F1F8FC] hover:bg-[#E3F1F8] transition-all duration-300 shadow-none"
    >
      {/* Icon Area */}
      <div className="mb-6 flex items-center justify-start h-12">
        {category.iconName === 'M' ? (
          <span className="font-display italic text-[28px] font-bold text-[#4496CC] select-none">
            M
          </span>
        ) : IconComponent ? (
          <IconComponent size={28} strokeWidth={1.5} className="text-[#4496CC]" />
        ) : (
          <Sparkles size={28} strokeWidth={1.5} className="text-[#4496CC]" />
        )}
      </div>

      {/* Title */}
      <h3 className="font-display text-[20px] font-medium text-[#1F3F52] mb-2 leading-tight group-hover:text-[#4496CC] transition-colors">
        {category.name}
      </h3>

      {/* Copy */}
      <p className="font-body text-[13px] font-light text-[#2F7EAF] leading-relaxed">
        {category.description}
      </p>
      
      {/* Action link indicator */}
      <div className="mt-5 flex items-center text-[12px] font-body font-semibold uppercase tracking-wider text-[#4496CC]">
        Découvrir la gamme
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">→</span>
      </div>
    </Link>
  );
}


