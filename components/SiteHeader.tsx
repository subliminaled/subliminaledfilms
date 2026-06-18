import Link from "next/link";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-10">
      <Link
        href="/"
        className="text-sm font-semibold uppercase tracking-[0.32em] text-stone-100"
      >
        SubliminalEd Films
      </Link>
      <nav
        aria-label="Primary navigation"
        className="flex flex-wrap gap-x-5 gap-y-3 text-[0.68rem] uppercase tracking-[0.2em] text-stone-500 sm:gap-x-7 lg:justify-end"
      >
        {siteConfig.navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition-colors hover:text-stone-100 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-stone-300"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
