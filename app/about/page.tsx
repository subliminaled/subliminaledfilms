import type { Metadata } from "next";
import { pages } from "@/data/site";

const page = pages.about;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16 sm:px-8">
      <section className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.36em] text-amber-200/70">
            {page.eyebrow}
          </p>
          <h1 className="text-5xl tracking-[-0.04em] text-stone-50 sm:text-7xl">
            {page.title}
          </h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl lg:justify-self-end">
          Personal stories, difficult truths, and the quiet pressure of what
          people carry.
        </p>
      </section>

      <section className="grid gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div
          role="img"
          aria-label="Placeholder portrait image of Ed Castaneda"
          className="relative min-h-[34rem] overflow-hidden border border-white/10 bg-stone-950"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_20%,rgba(245,245,244,0.18),transparent_18rem),linear-gradient(145deg,rgba(120,89,52,0.38),rgba(8,8,6,0.2)_42%,rgba(0,0,0,0.92))]" />
          <div className="absolute left-1/2 top-24 h-48 w-36 -translate-x-1/2 rounded-full border border-white/10 bg-stone-700/20" />
          <div className="absolute bottom-0 left-1/2 h-64 w-72 -translate-x-1/2 rounded-t-full border border-white/10 bg-black/30" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 to-transparent" />
          <span className="absolute bottom-6 left-6 right-6 text-[0.65rem] uppercase tracking-[0.22em] text-stone-400">
            Placeholder portrait image
          </span>
        </div>

        <div className="space-y-8 text-lg leading-8 text-stone-300">
          <p>
            Ed Castañeda is a writer, director, and producer drawn to intimate,
            real-life stories about flawed people facing the moments they can't
            control. His work explores mortality, obsession, fear, empathy, and
            the private struggles people carry quietly.
          </p>

          <p>
            Through SubliminalEd Films, he has written, directed, and/or
            produced a body of short films across drama, horror, comedy, and
            documentary. His work is grounded in human complexity, with a focus
            on stories that feel specific, uncomfortable, and emotionally true.
          </p>

          <p>
            SubliminalEd Films is currently developing new narrative and
            documentary projects, including the short drama My Fat Feet, the
            psychological horror feature Monica, and the documentary webseries
            Belongings.
          </p>
        </div>
      </section>
    </div>
  );
}
