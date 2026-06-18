import type { Metadata } from "next";
import Link from "next/link";
import { developmentProjects } from "@/data/developmentProjects";
import { pages } from "@/data/site";

const page = pages.inDevelopment;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function InDevelopmentPage() {
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
        <p className="max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl lg:justify-self-end">
          {page.description}
        </p>
      </section>

      <section className="grid gap-8 py-16 md:grid-cols-2 xl:grid-cols-3">
        {developmentProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/in-development/${project.slug}`}
            className="group block"
          >
            <article className="flex h-full flex-col border border-white/10 p-6 transition duration-500 group-hover:border-amber-100/30">
              <div
                role="img"
                aria-label={project.image}
                className="relative mb-8 aspect-[16/11] overflow-hidden border border-white/10 bg-stone-950"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(245,245,244,0.22),transparent_24rem),linear-gradient(135deg,rgba(120,89,52,0.42),rgba(8,8,6,0.34)_45%,rgba(0,0,0,0.92))]" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute bottom-5 left-5 right-5 text-[0.65rem] uppercase tracking-[0.22em] text-stone-400">
                  {project.image}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <h2 className="text-3xl tracking-[-0.04em] text-stone-50">
                  {project.title}
                </h2>
                <p className="text-right text-xs uppercase tracking-[0.22em] text-stone-500">
                  {project.status}
                </p>
              </div>

              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-amber-100/60">
                {project.format} — {project.genre}
              </p>
              <p className="mt-6 flex-1 text-sm leading-6 text-stone-400">
                {project.logline}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.themes.map((theme) => (
                  <span
                    key={theme}
                    className="border border-white/10 px-3 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-stone-500"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </section>
    </div>
  );
}
