import type { Metadata } from "next";
import NavDetailPage from "@/components/NavDetailPage";
import { supportDetailPages } from "@/lib/nav-page-content";

const content = supportDetailPages.hotline;

export const metadata: Metadata = content.metadata;

export default function HotlinePage() {
  return <NavDetailPage content={content} />;
}
