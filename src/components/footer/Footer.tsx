import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

import Container from "@/components/ui/Container";

import { footerColumns } from "@/data/footer";
import { siteConfig } from "@/lib/site";

import FooterColumn from "./FooterColumn";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-20">
      <Container>
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logos/logo.png"
                alt="Nova Fetch logo"
                width={44}
                height={44}
                className="h-11 w-11 rounded-xl object-cover"
              />

              <span className="text-3xl font-black text-white">
                {siteConfig.name}
              </span>
            </Link>

            <p className="mt-6 max-w-md leading-8 text-gray-400">
              A beautiful Windows desktop application for downloading videos,
              audio and subtitles from hundreds of supported websites.
            </p>

            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="mt-6 inline-flex items-center gap-3 text-gray-400 transition hover:text-violet-400"
            >
              <Mail className="h-5 w-5 text-violet-400" aria-hidden="true" />

              <span className="font-medium">{siteConfig.supportEmail}</span>
            </a>
          </div>

          <div className="lg:col-span-3">
            {footerColumns.map((column) => (
              <FooterColumn key={column.title} {...column} />
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-gray-500">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
