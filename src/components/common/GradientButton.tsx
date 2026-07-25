import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function GradientButton({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="
      inline-flex
      items-center
      justify-center
      rounded-full
      bg-gradient-to-r
      from-violet-600
      to-fuchsia-500
      px-7
      py-3
      font-semibold
      text-white
      transition
      hover:scale-105
      duration-300"
    >
      {children}
    </Link>
  );
}
