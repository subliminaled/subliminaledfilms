export type DevelopmentProject = {
  slug: string;
  title: string;
  format: string;
  status: string;
  genre: string;
  logline: string;
  description: string;
  themes: string[];
  image: string;
  ctaLabel: string;
  ctaHref: string;
};

export const developmentProjects: DevelopmentProject[] = [
  {
    slug: "monica",
    title: "Monica",
    format: "Feature",
    status: "In Development",
    genre: "Drama",
    logline:
      "A woman returns to the place she left behind and confronts the life that kept moving without her.",
    description:
      "A character-driven drama about memory, absence, and the emotional cost of starting over.",
    themes: ["Family", "Memory", "Return"],
    image: "Placeholder still of a woman near a quiet window",
    ctaLabel: "View development slate",
    ctaHref: "/in-development",
  },
  {
    slug: "belongings",
    title: "Belongings",
    format: "Feature",
    status: "In Development",
    genre: "Drama",
    logline:
      "After a death in the family, a box of ordinary objects exposes what everyone chose not to say.",
    description:
      "A restrained ensemble story about inheritance, grief, and the private meanings attached to what remains.",
    themes: ["Grief", "Inheritance", "Family"],
    image: "Placeholder still of packed boxes in low light",
    ctaLabel: "View development slate",
    ctaHref: "/in-development",
  },
];
