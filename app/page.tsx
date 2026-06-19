import type { Metadata } from "next";
import Link from "next/link";
import {
  featuredProject,
  selectedFilms,
  type Film,
} from "@/data/films";
import { developmentProjects } from "@/data/developmentProjects";
import { createPageMetadata } from "@/data/metadata";
import { siteConfig } from "@/data/site";

const buttonClass =
  "inline-flex items-center justify-center border border-amber-100/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-100 transition hover:border-amber-100/70 hover:bg-amber-100/10";

export const metadata: Metadata = createPageMetadata({
  title: "Independent Narrative Films",
  description: siteConfig.description,
});

function CinematicStill({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden border border-white/10 bg-stone-950 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(245,245,244,0.22),transparent_24rem),linear-gradient(135deg,rgba(120,89,52,0.42),rgba(8,8,6,0.34)_45%,rgba(0,0,0,0.92))]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08)_48%,transparent_51%)] opacity-30" />
      <span className="sr-only">
        {label}
      </span>
    </div>
  );
}

function FilmCard({ film }: { film: Film }) {
  return (
    <article className="group">
      <CinematicStill
        label={film.image}
        className="aspect-[4/5] transition duration-500 group-hover:border-amber-100/30"
      />
      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl tracking-[-0.03em] text-stone-50">
            {film.title}
          </h3>
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
    </article>
  );
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10 sm:px-8">
      <section
        id="hero"
        className="grid min-h-[72vh] items-end gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
      >
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.42em] text-amber-200/70">
            Independent Narrative Films
          </p>
          <h1 className="max-w-3xl text-6xl leading-[0.9] tracking-[-0.06em] text-stone-50 sm:text-8xl">
            SubliminalEd Films
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
            Character-driven stories rooted in real life, human complexity, and
            the things we carry.
          </p>
        </div>
        <CinematicStill
          label="Abstract cinematic still image"
          className="aspect-[16/11] lg:aspect-[4/5]"
        />
      </section>

      <section id="featured-project" className="border-t border-white/10 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-amber-100/60">
              Featured Project
            </p>
            <h2 className="mt-5 text-5xl tracking-[-0.04em] text-stone-50 sm:text-7xl">
              {featuredProject.title}
            </h2>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.24em] text-stone-500">
              <span>
                {featuredProject.genre} — {featuredProject.status}
              </span>
              <span>{featuredProject.runtime}</span>
            </div>
            <p className="mt-8 max-w-xl text-lg leading-8 text-stone-300">
              {featuredProject.logline}
            </p>
            <Link
              href={`/films/${featuredProject.slug}`}
              className={`mt-10 ${buttonClass}`}
            >
              View project
            </Link>
          </div>
          <CinematicStill
            label={featuredProject.image}
            className="aspect-[16/10]"
          />
        </div>
      </section>

      <section id="selected-films" className="border-t border-white/10 py-20">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-amber-100/60">
              Selected Films
            </p>
            <h2 className="mt-5 text-4xl tracking-[-0.04em] text-stone-50 sm:text-6xl">
              Selected work
            </h2>
          </div>
          <Link
            href="/films"
            className="text-xs uppercase tracking-[0.28em] text-stone-400 transition hover:text-stone-100"
          >
            All films
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {selectedFilms.map((film) => (
            <FilmCard key={film.title} film={film} />
          ))}
        </div>
      </section>

      <section
        id="in-development-preview"
        className="border-t border-white/10 py-20"
      >
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-amber-100/60">
              In Development
            </p>
            <h2 className="mt-5 text-4xl tracking-[-0.04em] text-stone-50 sm:text-6xl">
              Stories taking shape.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {developmentProjects.map((project) => (
              <article
                key={project.title}
                className="border border-white/10 p-6"
              >
                <h3 className="text-3xl tracking-[-0.03em] text-stone-50">
                  {project.title}
                </h3>
                <p className="mt-4 text-xs uppercase tracking-[0.24em] text-stone-500">
                  {project.status}
                </p>
              </article>
            ))}
          </div>
        </div>
        <Link href="/in-development" className={`mt-10 ${buttonClass}`}>
          View development slate
        </Link>
      </section>

      <section id="contact-cta" className="border-t border-white/10 py-20">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.34em] text-amber-100/60">
            Contact
          </p>
          <h2 className="mt-5 text-4xl tracking-[-0.04em] text-stone-50 sm:text-6xl">
            Collaborators, partners, and funding inquiries are welcome.
          </h2>
          <Link href="/contact" className={`mt-10 ${buttonClass}`}>
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
