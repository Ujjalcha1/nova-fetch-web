import Link from "next/link";

interface Props {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

export default function FooterColumn({ title, links }: Props) {
  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold text-white">{title}</h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-gray-400 transition hover:text-violet-400"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
