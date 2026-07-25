interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ badge, title, subtitle }: Props) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {badge && (
        <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-400">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-5xl font-black text-white">{title}</h2>

      {subtitle && <p className="mt-6 text-lg text-gray-400">{subtitle}</p>}
    </div>
  );
}
