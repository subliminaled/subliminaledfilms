import Link from "next/link";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
      <Link
        href="/"
        className="text-sm font-semibold uppercase tracking-[0.36em] text-stone-100"
      >
        SubliminalEd
      </Link>
      <nav
        aria-label="Primary navigation"
        className="hidden items-center gap-6 text-xs uppercase tracking-[0.22em] text-stone-400 md:flex"
      >
        {siteConfig.navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition hover:text-stone-100"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
