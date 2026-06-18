import Link from "next/link";
import { siteConfig } from "@/data/site";

const highlights = [
  "Atmospheric cinema",
  "Independent production",
  "Essays and interviews",
];

export default function Home() {
  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col justify-end px-6 py-20 sm:px-8">
      <div className="max-w-4xl">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.42em] text-amber-200/70">
          Independent film studio
        </p>
        <h1 className="max-w-4xl text-6xl font-semibold leading-[0.88] tracking-[-0.07em] text-stone-50 sm:text-8xl lg:text-9xl">
          Stories held in shadow and light.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
          SubliminalEd Films develops and presents restrained cinematic work
          across finished films, works in progress, and conversations with
          artists.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/films"
            className="inline-flex items-center justify-center border border-amber-100/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-100 transition hover:border-amber-100/70 hover:bg-amber-100/10"
          >
            View films
          </Link>
          <Link
            href="/in-development"
            className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-400 transition hover:text-stone-100"
          >
            In development
          </Link>
        </div>
      </div>

      <div className="mt-24 grid gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.26em] text-stone-500 sm:grid-cols-3">
        {highlights.map((highlight) => (
          <p key={highlight}>{highlight}</p>
        ))}
      </div>

      <nav
        aria-label="Secondary navigation"
        className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-xs uppercase tracking-[0.22em] text-stone-500 md:hidden"
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
    </section>
  );
}
