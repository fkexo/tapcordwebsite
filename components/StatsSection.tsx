import StatCard from "./StatCard";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "24/7", label: "Support Available" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-[#0B132B] border-y border-[#8A99B4]/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}