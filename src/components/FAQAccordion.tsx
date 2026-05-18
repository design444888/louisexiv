'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '@/data/mockData';

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div 
            key={item.id} 
            className="border border-[#8FC7E6] rounded-none bg-[#F1F8FC] overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="flex items-center justify-between w-full p-5 text-left bg-transparent transition-colors hover:bg-[#E3F1F8]/40 cursor-pointer"
            >
              <span className="font-display text-[16px] font-medium text-[#1F3F52] pr-4">
                {item.question}
              </span>
              <ChevronDown 
                size={18} 
                strokeWidth={1.5} 
                className={`text-[#4496CC] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] border-t border-[#8FC7E6]/40' : 'max-h-0'} overflow-hidden`}
            >
              <div className="p-5 font-body text-[14px] font-light text-[#2F7EAF] leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


