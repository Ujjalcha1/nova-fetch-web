interface Props {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40">
      <h3 className="text-4xl font-bold text-white">{value}</h3>
      <p className="mt-3 text-gray-400">{label}</p>
    </div>
  );
}
