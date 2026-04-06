"use client";

const stats = [
  { label: "Orange Revenue", value: "€1.416B" },
  { label: "Mobile Subscribers", value: "9.3M" },
  { label: "AI Value Target", value: "€600M" },
  { label: "Djia Success Rate", value: "52%" },
  { label: "APEX Repos", value: "73+" },
  { label: "Students Trained", value: "100K+" },
  { label: "Agents Active", value: "6" },
  { label: "Skills Deployed", value: "70+" },
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
