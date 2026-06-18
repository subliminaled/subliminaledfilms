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
    slug: "my-fat-feet",
    title: "My Fat Feet",
    format: "Short Film",
    status: "In Post",
    genre: "Drama",
    logline:
      "An elderly woman in hospice refuses her fate as her children argue on how best to care for her in her final days.",
    description:
      "A restrained chamber piece about care, dignity, and family decisions made under pressure.",
    themes: ["End-of-life care", "Family", "Dignity"],
    image: "Placeholder still of a quiet hospice room at dusk",
    ctaLabel: "Discuss the film",
    ctaHref: "/contact",
  },
  {
    slug: "moth-stories",
    title: "Moth Stories",
    format: "Short Film Series",
    status: "Coming Soon",
    genre: "Narrative",
    logline:
      "A collection of intimate stories drawn to memory, shadow, and the fragile light people move toward.",
    description:
      "An early-stage project container for smaller narrative pieces connected by atmosphere, confession, and transformation.",
    themes: ["Memory", "Transformation", "Secrets"],
    image: "Placeholder still of moths circling a porch light",
    ctaLabel: "Ask about the slate",
    ctaHref: "/contact",
  },
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
    ctaLabel: "Discuss the project",
    ctaHref: "/contact",
  },
];
