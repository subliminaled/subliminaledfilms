export type Film = {
  slug: string;
  title: string;
  year: string;
  runtime: string;
  roles: string[];
  genre: string;
  status: string;
  logline: string;
  description: string;
  image: string;
  videoUrl: string | null;
  featured: boolean;
  externalLinks: {
    label: string;
    url: string;
  }[];
  laurels: string[];
};

export const films: Film[] = [
  {
    slug: "my-fat-feet",
    title: "My Fat Feet",
    year: "2026",
    runtime: "17 min",
    roles: ["Writer", "Director"],
    genre: "Short Film",
    status: "In Post",
    logline:
      "An elderly woman in hospice refuses her fate as her children argue on how best to care for her in her final days.",
    description:
      "A chamber drama about family, dignity, and the emotional weight of care at the end of life.",
    image: "Placeholder cinematic still of a quiet hospice room at dusk",
    videoUrl: null,
    featured: true,
    externalLinks: [],
    laurels: [],
  },
  {
    slug: "after-the-visit",
    title: "After the Visit",
    year: "2025",
    runtime: "12 min",
    roles: ["Director"],
    genre: "Drama",
    status: "Placeholder",
    logline:
      "Two relatives sit with the silence that follows an impossible conversation.",
    description:
      "A placeholder narrative short entry for future catalogue expansion.",
    image: "Two figures seated apart in a muted living room",
    videoUrl: null,
    featured: false,
    externalLinks: [],
    laurels: [],
  },
  {
    slug: "small-hours",
    title: "Small Hours",
    year: "2024",
    runtime: "9 min",
    roles: ["Producer"],
    genre: "Narrative Short",
    status: "Placeholder",
    logline:
      "A quiet night becomes a reckoning for someone trying not to go home.",
    description:
      "A placeholder film entry for the selected work section.",
    image: "Night exterior still with a single porch light",
    videoUrl: null,
    featured: false,
    externalLinks: [],
    laurels: [],
  },
];

export const featuredProject = films.find((film) => film.featured) ?? films[0];

export const selectedFilms = films.slice(0, 3);
