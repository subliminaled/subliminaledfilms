import type { Metadata } from "next";
import { createPageMetadata } from "@/data/metadata";
import { pages } from "@/data/site";

const page = pages.contact;
const email = "ed@subliminaledfilms.com";

const contactSections = [
  {
    title: "General inquiries",
    description:
      "For screenings, availability, and general questions about SubliminalEd Films.",
    subject: "General inquiry",
  },
  {
    title: "Collaborators",
    description:
      "For actors, crew, producers, artists, and creative partners interested in future work.",
    subject: "Collaboration inquiry",
  },
  {
    title: "Funding / investor inquiries",
    description:
      "For partners interested in supporting narrative, documentary, or development-stage projects.",
    subject: "Funding inquiry",
  },
  {
    title: "Press / interviews",
    description:
      "For press, interviews, programming notes, and conversations around the films.",
    subject: "Press inquiry",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: page.title,
  description: page.description,
  path: "/contact",
});

export default function ContactPage() {
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
          For thoughtful inquiries, collaborations, press, and support
          conversations.
        </p>
      </section>

      <section className="grid gap-6 py-16 md:grid-cols-2">
        {contactSections.map((section) => (
          <article key={section.title} className="border border-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-amber-100/60">
              {section.title}
            </p>
            <p className="mt-5 min-h-20 text-base leading-7 text-stone-300">
              {section.description}
            </p>
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(section.subject)}`}
              className="mt-8 inline-flex items-center justify-center border border-amber-100/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-100 transition hover:border-amber-100/70 hover:bg-amber-100/10"
            >
              {email}
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
