interface Props {
  title: string;
}

export default function Badge({ title }: Props) {
  return (
    <span
      className="
      rounded-full
      border
      border-violet-500/30
      bg-violet-500/10
      px-4
      py-1
      text-sm
      text-violet-300"
    >
      {title}
    </span>
  );
}
