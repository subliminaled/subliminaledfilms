export type FilmCard = {
  title: string;
  year: string;
  role: string;
  genreStatus: string;
  image: string;
};

export const featuredProject = {
  title: "My Fat Feet",
  label: "Short Film — In Post",
  runtime: "17 min",
  description:
    "An elderly woman in hospice refuses her fate as her children argue on how best to care for her in her final days.",
  href: "/films/my-fat-feet",
  image: "Placeholder cinematic still of a quiet hospice room at dusk",
};

export const selectedFilms: FilmCard[] = [
  {
    title: "My Fat Feet",
    year: "2026",
    role: "Writer / Director",
    genreStatus: "Short Film — In Post",
    image: "Dim hallway still with soft window light",
  },
  {
    title: "After the Visit",
    year: "2025",
    role: "Director",
    genreStatus: "Drama — Placeholder",
    image: "Two figures seated apart in a muted living room",
  },
  {
    title: "Small Hours",
    year: "2024",
    role: "Producer",
    genreStatus: "Narrative Short — Placeholder",
    image: "Night exterior still with a single porch light",
  },
];

export const developmentProjects = [
  {
    title: "Monica",
    status: "In Development",
  },
  {
    title: "Belongings",
    status: "In Development",
  },
];
