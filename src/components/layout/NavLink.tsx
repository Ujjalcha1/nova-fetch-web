"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors duration-300 hover:text-violet-400",
        pathname === href ? "text-violet-400" : "text-gray-300",
      )}
    >
      {label}
    </Link>
  );
}
