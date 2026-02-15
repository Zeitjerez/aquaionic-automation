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
    <section className="py-8 md:py-10 bg-ghost">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-gray-100 hover:border-cyan/30 hover:shadow-md transition-all duration-200"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/15 transition-colors duration-200">
                <item.icon size={24} className="text-cyan" strokeWidth={2} />
              </div>
              <span className="text-[13px] font-semibold text-deep-blue text-center leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
