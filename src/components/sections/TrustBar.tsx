'use client';

import { Droplets, ShieldCheck, Wrench, Headphones } from 'lucide-react';

const items = [
  { icon: Droplets, label: 'Free Water Analysis' },
  { icon: ShieldCheck, label: 'NSF & FDA Certified' },
  { icon: Wrench, label: 'American-Made Valves' },
  { icon: Headphones, label: 'Dedicated Support' },
];

export default function TrustBar() {
  return (
    <section className="py-6 bg-white border-y border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3">
          {items.map((item, i) => (
            <button
              key={i}
              className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-text-mid hover:border-cyan hover:text-cyan hover:bg-cyan/5 transition-all duration-200 cursor-default"
            >
              <item.icon size={16} className="text-text-light group-hover:text-cyan transition-colors" />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
