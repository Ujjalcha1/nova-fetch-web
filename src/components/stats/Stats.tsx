import { stats } from "@/data/stats";
import StatCard from "./StatCard";

export default function Stats() {
  return (
    <section className="section-container py-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <StatCard key={item.label} value={item.value} label={item.label} />
        ))}
      </div>
    </section>
  );
}
