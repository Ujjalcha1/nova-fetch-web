interface Props {
  qualities: string[];
  selected: string;
  onChange: (q: string) => void;
}

export default function QualitySelector({
  qualities,
  selected,
  onChange,
}: Props) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {qualities.map((q) => (
        <button
          key={q}
          onClick={() => onChange(q)}
          className={`rounded-full px-5 py-2 transition ${
            selected === q
              ? "bg-violet-600 text-white"
              : "bg-white/5 text-gray-400"
          }`}
        >
          {q}
        </button>
      ))}
    </div>
  );
}
