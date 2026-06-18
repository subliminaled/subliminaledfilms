import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { pages } from "@/data/site";

const page = pages.contact;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function ContactPage() {
  return <PageIntro {...page} />;
}
