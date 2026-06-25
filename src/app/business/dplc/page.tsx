import type { Metadata } from "next";
import NavDetailPage from "@/components/NavDetailPage";
import { businessDetailPages } from "@/lib/nav-page-content";

const content = businessDetailPages.dplc;

export const metadata: Metadata = content.metadata;

export default function DplcPage() {
  return <NavDetailPage content={content} />;
}
