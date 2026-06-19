import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/data/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Page Not Found",
  description:
    "The requested SubliminalEd Films page could not be found.",
  path: "/404",
});

export default function NotFound() {
  return (
    <section className="mx-auto grid min-h-[60vh] w-full max-w-6xl items-end px-6 pb-24 pt-16 sm:px-8">
      <div className="max-w-3xl">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.36em] text-amber-200/70">
          404
        </p>
        <h1 className="text-5xl tracking-[-0.04em] text-stone-50 sm:text-7xl">
          Page not found.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
          This page may have moved, or the link may no longer be available.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center border border-amber-100/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-100 transition hover:border-amber-100/70 hover:bg-amber-100/10"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
