export const siteConfig = {
  name: "SubliminalEd Films",
  url: "https://subliminaledfilms.com",
  description:
    "SubliminalEd Films is an independent film studio for restrained, cinematic stories in release, development, and conversation.",
  contactEmail: "ed@subliminaledfilms.com",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Films", href: "/films" },
    { label: "In Development", href: "/in-development" },
    { label: "Interviews", href: "/interviews" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { label: "YouTube", href: "https://youtube.com/@subliminaledfilms" },
  ],
};

export const pages = {
  films: {
    eyebrow: "Catalogue",
    title: "Films",
    description:
      "A quiet archive for completed work, festival selections, and future releases.",
  },
  inDevelopment: {
    eyebrow: "Slate",
    title: "In Development",
    description:
      "Projects taking shape through research, visual language, and early production work.",
  },
  interviews: {
    eyebrow: "Conversations",
    title: "Interviews",
    description:
      "Director notes, long-form interviews, and conversations around the work.",
  },
  about: {
    eyebrow: "Studio",
    title: "About",
    description:
      "SubliminalEd Films creates patient, atmospheric cinema with a focus on texture, memory, and character.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact",
    description:
      "For general inquiries, collaborators, funding conversations, press, and interviews.",
  },
} as const;
