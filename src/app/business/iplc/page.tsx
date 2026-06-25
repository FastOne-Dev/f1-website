import type { Metadata } from "next";
import NavDetailPage from "@/components/NavDetailPage";
import { businessDetailPages } from "@/lib/nav-page-content";

const content = businessDetailPages.iplc;

export const metadata: Metadata = content.metadata;

export default function IplcPage() {
  return <NavDetailPage content={content} />;
}
