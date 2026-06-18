import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { films } from "@/data/films";

type FilmPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getFilm(slug: string) {
  return films.find((film) => film.slug === slug);
}

function getEmbedUrl(videoUrl: string) {
  try {
    const url = new URL(videoUrl);

    if (url.hostname.includes("youtube.com")) {
      const videoId = url.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : videoUrl;
    }

    if (url.hostname.includes("youtu.be")) {
      const videoId = url.pathname.replace("/", "");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : videoUrl;
    }

    if (url.hostname.includes("vimeo.com")) {
      const videoId = url.pathname.split("/").filter(Boolean).at(-1);
      return videoId ? `https://player.vimeo.com/video/${videoId}` : videoUrl;
    }

    return videoUrl;
  } catch {
    return videoUrl;
  }
}

export function generateStaticParams() {
  return films.map((film) => ({
    slug: film.slug,
  }));
}

export async function generateMetadata({
  params,
}: FilmPageProps): Promise<Metadata> {
  const { slug } = await params;
  const film = getFilm(slug);

  if (!film) {
    return {};
  }

  return {
    title: film.title,
    description: film.logline,
  };
}

export default async function FilmDetailPage({ params }: FilmPageProps) {
  const { slug } = await params;
  const film = getFilm(slug);

  if (!film) {
    notFound();
  }

  const embedUrl = film.videoUrl ? getEmbedUrl(film.videoUrl) : null;

  return (
    <article className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16 sm:px-8">
      <Link
        href="/films"
        className="text-xs uppercase tracking-[0.28em] text-stone-500 transition hover:text-stone-100"
      >
        Back to films
      </Link>

      <header className="mt-14 grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-amber-100/60">
            {film.genre} — {film.status}
          </p>
          <h1 className="text-6xl leading-[0.9] tracking-[-0.06em] text-stone-50 sm:text-8xl">
            {film.title}
          </h1>
        </div>
        <p className="max-w-2xl text-xl leading-9 text-stone-300">
          {film.logline}
        </p>
      </header>

      <section className="grid gap-10 border-b border-white/10 py-14 md:grid-cols-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
            Year
          </p>
          <p className="mt-3 text-stone-200">{film.year}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
            Runtime
          </p>
          <p className="mt-3 text-stone-200">{film.runtime}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
            Roles
          </p>
          <p className="mt-3 text-stone-200">{film.roles.join(" / ")}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
            Genre / Status
          </p>
          <p className="mt-3 text-stone-200">
            {film.genre} / {film.status}
          </p>
        </div>
      </section>

      {embedUrl ? (
        <section className="border-b border-white/10 py-16">
          <div className="aspect-video overflow-hidden border border-white/10 bg-black">
            <iframe
              title={`${film.title} video`}
              src={embedUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </section>
      ) : null}

      <section className="grid gap-10 border-b border-white/10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-amber-100/60">
            About
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            {film.description}
          </p>
        </div>
        <div
          role="img"
          aria-label={film.image}
          className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-stone-950"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(245,245,244,0.22),transparent_24rem),linear-gradient(135deg,rgba(120,89,52,0.42),rgba(8,8,6,0.34)_45%,rgba(0,0,0,0.92))]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
          <span className="absolute bottom-5 left-5 right-5 text-[0.65rem] uppercase tracking-[0.22em] text-stone-400">
            {film.image}
          </span>
        </div>
      </section>

      {film.laurels.length > 0 ? (
        <section className="border-b border-white/10 py-12">
          <p className="text-xs uppercase tracking-[0.28em] text-amber-100/60">
            Laurels / Festival Notes
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-stone-300 sm:grid-cols-2">
            {film.laurels.map((laurel) => (
              <li key={laurel} className="border-l border-amber-100/30 pl-4">
                {laurel}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {film.externalLinks.length > 0 ? (
        <section className="py-12">
          <p className="text-xs uppercase tracking-[0.28em] text-amber-100/60">
            External Links
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {film.externalLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 px-5 py-3 text-xs uppercase tracking-[0.24em] text-stone-300 transition hover:border-amber-100/40 hover:text-stone-50"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
