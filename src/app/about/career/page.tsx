import type { Metadata } from "next";
import NavDetailPage from "@/components/NavDetailPage";
import { aboutDetailPages } from "@/lib/nav-page-content";

const content = aboutDetailPages.career;

export const metadata: Metadata = content.metadata;

export default function CareerPage() {
  return <NavDetailPage content={content} />;
}
