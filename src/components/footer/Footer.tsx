import Link from "next/link";

import Container from "@/components/ui/Container";

import { footerColumns } from "@/data/footer";

import FooterColumn from "./FooterColumn";
import SocialLinks from "./SocialLinks";
import AuroraBackground from "@/components/reactbits/AuroraBackground";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-20">
      <Container>
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-black text-white">
              Nova Fetch
            </Link>

            <p className="mt-6 max-w-md leading-8 text-gray-400">
              A beautiful Windows desktop application for downloading videos,
              playlists, subtitles and audio from hundreds of supported
              websites.
            </p>

            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:col-span-3">
            {footerColumns.map((column) => (
              <FooterColumn key={column.title} {...column} />
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Nova Fetch. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Built with ❤️ using Next.js & Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  );
}
