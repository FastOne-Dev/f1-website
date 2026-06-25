import type { Metadata } from "next";
import NavDetailPage from "@/components/NavDetailPage";
import { businessDetailPages } from "@/lib/nav-page-content";

const content = businessDetailPages.ipTransit;

export const metadata: Metadata = content.metadata;

export default function IpTransitPage() {
  return <NavDetailPage content={content} />;
}
