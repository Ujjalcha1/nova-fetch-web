import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logos/logo.png"
        alt="Nova Fetch logo"
        width={44}
        height={44}
        priority
        className="h-11 w-11 shrink-0 rounded-xl object-cover"
      />

      <div>
        <p className="text-lg font-bold text-white">Nova Fetch</p>

        <p className="text-xs text-gray-400">Video Downloader</p>
      </div>
    </Link>
  );
}
