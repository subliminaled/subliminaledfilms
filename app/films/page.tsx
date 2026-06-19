import type { Metadata } from "next";
import Link from "next/link";
import { films } from "@/data/films";
import { createPageMetadata } from "@/data/metadata";
import { pages } from "@/data/site";

const page = pages.films;

export const metadata: Metadata = createPageMetadata({
  title: page.title,
  description: page.description,
  path: "/films",
});

export default function FilmsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16 sm:px-8">
      <section className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.36em] text-amber-200/70">
            {page.eyebrow}
          </p>
          <h1 className="text-5xl tracking-[-0.04em] text-stone-50 sm:text-7xl">
            {page.title}
          </h1>
        </div>
        <div className="max-w-2xl lg:justify-self-end">
          <p className="text-lg leading-8 text-stone-300 sm:text-xl">
            {page.description}
          </p>
          <Link
            href="https://youtube.com/@subliminaledfilms"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center border border-amber-100/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-100 transition hover:border-amber-100/70 hover:bg-amber-100/10"
          >
            See films on YouTube channel
          </Link>
        </div>
      </section>

      <section className="grid gap-10 py-16 md:grid-cols-2 xl:grid-cols-3">
        {films.map((film) => (
          <Link
            key={film.slug}
            href={`/films/${film.slug}`}
            className="group block"
          >
            <article>
              <div
                role="img"
                aria-label={film.image}
                className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-stone-950 transition duration-500 group-hover:border-amber-100/30"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(245,245,244,0.22),transparent_24rem),linear-gradient(135deg,rgba(120,89,52,0.42),rgba(8,8,6,0.34)_45%,rgba(0,0,0,0.92))]" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute bottom-5 left-5 right-5 text-[0.65rem] uppercase tracking-[0.22em] text-stone-400">
                  {film.image}
                </span>
              </div>

              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-3xl tracking-[-0.04em] text-stone-50">
                    {film.title}
                  </h2>
                  <p className="mt-2 text-sm text-stone-500">
                    {film.roles.join(" / ")}
                  </p>
                </div>
                <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                  {film.year}
                </p>
              </div>

              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-amber-100/60">
                {film.genre} — {film.status}
              </p>
              <p className="mt-5 text-sm leading-6 text-stone-400">
                {film.logline}
              </p>
            </article>
          </Link>
        ))}
      </section>
    </div>
  );
}
