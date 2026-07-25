interface Props {
  value: string;
  onChange: (value: string) => void;
  onFetch: () => void;
}

export default function UrlInput({ value, onChange, onFetch }: Props) {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste YouTube URL..."
        className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none"
      />

      <button
        onClick={onFetch}
        className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-semibold text-white"
      >
        Fetch
      </button>
    </div>
  );
}
