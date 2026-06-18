type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="mx-auto grid min-h-[54vh] w-full max-w-6xl items-end px-6 py-20 sm:px-8">
      <div className="max-w-3xl">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.36em] text-amber-200/70">
          {eyebrow}
        </p>
        <h1 className="text-5xl font-semibold tracking-[-0.05em] text-stone-50 sm:text-7xl">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
          {description}
        </p>
        <div className="mt-12 border-l border-amber-200/30 pl-6 text-sm uppercase tracking-[0.28em] text-stone-500">
          Placeholder page
        </div>
      </div>
    </section>
  );
}
