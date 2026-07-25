interface Props {
  title: string;
  value: string;
}

export default function Counter({ title, value }: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
      <h3 className="text-4xl font-black text-white">{value}</h3>

      <p className="mt-2 text-gray-400">{title}</p>
    </div>
  );
}
