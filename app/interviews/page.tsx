import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { pages } from "@/data/site";

const page = pages.interviews;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function InterviewsPage() {
  return <PageIntro {...page} />;
}
