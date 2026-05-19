'use client';

import React from 'react';
import Link from 'next/link';
import { Article } from '@/data/mockData';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group flex flex-col h-full rounded-none border border-[#E4D3C8] bg-[#FFFAFA] overflow-hidden transition-all duration-300 hover:-translate-y-[2px]">
      {/* Image Container - 16:10 Aspect Ratio */}
      <div className="relative aspect-[16/10] w-full bg-[#F8F0EB] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.image}
          alt={article.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-103"
        />
        <div className="absolute top-3 left-3 bg-[#FFFAFA] border border-[#E4D3C8] px-2 py-0.5 rounded-none">
          <span className="font-body text-[11px] font-medium tracking-wide text-[#6E4226]">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center gap-3 font-body text-[11px] text-[#C8A893] mb-3">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        
        <h3 className="font-display text-[18px] font-medium text-[#402312] mb-3 leading-snug group-hover:text-[#573119] transition-colors line-clamp-2">
          {article.title}
        </h3>
        
        <p className="font-body text-[13.5px] font-light text-[#6E4226] mb-5 line-clamp-3 flex-grow leading-relaxed">
          {article.excerpt}
        </p>

        <div className="mt-auto pt-4 border-t border-[#E4D3C8]/30">
          <Link 
            href={`/conseils?id=${article.id}#blog-section`}
            className="btn-ghost inline-flex items-center text-[12px]"
          >
            Lire le guide
          </Link>
        </div>
      </div>
    </article>
  );
}


