import Badge from "./Badge";

interface HeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
  /** Semantic heading level. Use 1 for the page's single H1. Defaults to 2. */
  level?: 1 | 2 | 3;
}

export default function Heading({
  badge,
  title,
  description,
  center = true,
  level = 2,
}: HeadingProps) {
  const Tag = level === 1 ? "h1" : level === 3 ? "h3" : "h2";

  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {badge && <Badge>{badge}</Badge>}

      <Tag className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
        {title}
      </Tag>

      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-400">{description}</p>
      )}
    </div>
  );
}
