import type { Metadata } from "next";
import Link from "next/link";
import { interviews } from "@/data/interviews";
import { createPageMetadata } from "@/data/metadata";
import { pages } from "@/data/site";

const page = pages.interviews;

export const metadata: Metadata = createPageMetadata({
  title: page.title,
  description: page.description,
  path: "/interviews",
});

export default function InterviewsPage() {
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

      {interviews.length > 0 ? (
        <section className="divide-y divide-white/10">
          {interviews.map((interview) => (
            <article
              key={`${interview.outlet}-${interview.title}`}
              className="grid gap-8 py-12 lg:grid-cols-[0.75fr_1.25fr]"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                  {interview.outlet}
                </p>
                <time className="mt-3 block text-sm text-stone-500">
                  {interview.date}
                </time>
              </div>

              <div>
                <h2 className="text-3xl tracking-[-0.04em] text-stone-50 sm:text-5xl">
                  {interview.title}
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-stone-300">
                  {interview.description}
                </p>
                <Link
                  href={interview.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center justify-center border border-amber-100/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-100 transition hover:border-amber-100/70 hover:bg-amber-100/10"
                >
                  Read interview
                </Link>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <section className="py-20">
          <div className="border border-white/10 px-6 py-12 sm:px-10">
            <p className="max-w-xl text-2xl leading-10 tracking-[-0.03em] text-stone-200 sm:text-4xl">
              Interviews and press links coming soon.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
