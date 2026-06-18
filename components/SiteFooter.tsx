import Link from "next/link";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-28 w-full max-w-6xl border-t border-white/10 px-6 py-10 text-sm text-stone-500 sm:px-8">
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-200">
            SubliminalEd Films
          </p>
          <p className="mt-4 max-w-sm leading-7">
            Independent cinema, works in progress, and conversations.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
            Contact
          </p>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="mt-4 block transition-colors hover:text-stone-100"
          >
            {siteConfig.contactEmail}
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
            Social
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
            {siteConfig.socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-stone-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.22em] text-stone-600 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} SubliminalEd Films</p>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-stone-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
