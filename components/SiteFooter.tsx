import Link from "next/link";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-24 w-full max-w-6xl border-t border-white/10 px-6 py-8 text-xs uppercase tracking-[0.24em] text-stone-500 sm:px-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} SubliminalEd Films</p>
        <div className="flex flex-wrap gap-4">
          {siteConfig.navigation.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-stone-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
