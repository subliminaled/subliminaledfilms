import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { developmentProjects } from "@/data/developmentProjects";

type DevelopmentProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProject(slug: string) {
  return developmentProjects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return developmentProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: DevelopmentProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.logline,
  };
}

export default async function DevelopmentProjectPage({
  params,
}: DevelopmentProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16 sm:px-8">
      <Link
        href="/in-development"
        className="text-xs uppercase tracking-[0.28em] text-stone-500 transition hover:text-stone-100"
      >
        Back to in development
      </Link>

      <header className="mt-14 grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-amber-100/60">
            {project.format} — {project.status}
          </p>
          <h1 className="text-6xl leading-[0.9] tracking-[-0.06em] text-stone-50 sm:text-8xl">
            {project.title}
          </h1>
        </div>
        <p className="max-w-2xl text-xl leading-9 text-stone-300">
          {project.logline}
        </p>
      </header>

      <section className="grid gap-10 border-b border-white/10 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div
          role="img"
          aria-label={project.image}
          className="relative min-h-[26rem] overflow-hidden border border-white/10 bg-stone-950"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_24%,rgba(245,245,244,0.22),transparent_26rem),linear-gradient(135deg,rgba(120,89,52,0.42),rgba(8,8,6,0.34)_45%,rgba(0,0,0,0.92))]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
          <span className="absolute bottom-6 left-6 right-6 text-[0.65rem] uppercase tracking-[0.22em] text-stone-400">
            {project.image}
          </span>
        </div>

        <div className="flex flex-col justify-between gap-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                Format
              </p>
              <p className="mt-3 text-stone-200">{project.format}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                Status
              </p>
              <p className="mt-3 text-stone-200">{project.status}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                Genre
              </p>
              <p className="mt-3 text-stone-200">{project.genre}</p>
            </div>
          </div>

          <Link
            href={project.ctaHref}
            className="inline-flex items-center justify-center border border-amber-100/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-100 transition hover:border-amber-100/70 hover:bg-amber-100/10"
          >
            {project.ctaLabel}
          </Link>
        </div>
      </section>

      <section className="grid gap-10 border-b border-white/10 py-16 lg:grid-cols-[0.7fr_1.3fr]">
        <p className="text-xs uppercase tracking-[0.28em] text-amber-100/60">
          Project Notes
        </p>
        <p className="max-w-3xl text-lg leading-8 text-stone-300">
          {project.description}
        </p>
      </section>

      <section className="py-16">
        <p className="text-xs uppercase tracking-[0.28em] text-amber-100/60">
          Themes
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.themes.map((theme) => (
            <span
              key={theme}
              className="border border-white/10 px-4 py-3 text-xs uppercase tracking-[0.22em] text-stone-400"
            >
              {theme}
            </span>
          ))}
        </div>
      </section>
    </article>
  );
}
