import Logo from "./Logo";
import NavLink from "./NavLink";
import { navigation } from "@/data/navigation";
import { Button } from "@/components/ui";
import { DOWNLOAD_URL } from "@/lib/downloads";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-2xl">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        <Button asChild className="hidden md:flex">
          <a href={DOWNLOAD_URL}>Download</a>
        </Button>
      </div>
    </header>
  );
}
