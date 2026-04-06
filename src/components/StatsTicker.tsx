"use client";

const stats = [
  { label: "Orange Romania Revenue", value: "€1.416B" },
  { label: "Mobile Subscribers", value: "9.3M" },
  { label: "Group AI Target by 2028", value: "€600M" },
  { label: "Djia Success Rate", value: "52%" },
  { label: "Contracts Expiring Monthly", value: "Millions" },
  { label: "WhatsApp Users in Romania", value: "10M+" },
  { label: "Combined Team Experience", value: "40+ yrs" },
  { label: "Enterprise Repos in Production", value: "73+" },
];

const items = [...stats, ...stats];

export default function StatsTicker() {
  return (
    <div className="bg-[#1d1d1f] py-4 overflow-hidden border-y border-[#2d2d2f]">
      <div className="flex items-center gap-0 animate-ticker whitespace-nowrap w-max">
        {items.map((stat, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-8">
            <span className="text-[#ff7900] font-bold text-[15px]">{stat.value}</span>
            <span className="text-[#86868b] text-[13px] uppercase tracking-widest font-medium">{stat.label}</span>
            <span className="text-[#3d3d3f] mx-4 select-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
