import { Star } from "lucide-react";

interface Props {
  rating: number;
}

export default function Rating({ rating }: Props) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5`}>
      {Array.from({ length: rating }).map((_, i) => (
        <Star
          key={i}
          size={18}
          className="fill-yellow-400 text-yellow-400"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
