import Badge from "./Badge";

interface HeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function Heading({
  badge,
  title,
  description,
  center = true,
}: HeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {badge && <Badge>{badge}</Badge>}

      <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-400">{description}</p>
      )}
    </div>
  );
}
