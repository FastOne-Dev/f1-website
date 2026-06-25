import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight as ArrowIcon, Check as CheckIcon } from "lucide-react";
import LocalizedText from "@/components/LocalizedText";
import PageHero from "@/components/PageHero";
import { businessServices, qualities, salesUrl } from "@/lib/site-data";
import {
  eyebrow,
  heading2,
  primaryButton,
  section,
  sectionInner,
  splitHeading,
  splitLayout,
} from "@/lib/ui-classes";

export const metadata: Metadata = {
  title: "Business Internet | Fast One Cambodia",
  description: "Dedicated internet, DPLC, IPLC, and IP Transit services from Fast One Cambodia.",
};

const useCases = ["SME offices", "Hotels and banks", "Government offices", "Corporate sites", "ISPs and operators", "Multi-branch teams"];

const serviceAnchors: Record<string, string> = {
  "IP Transit": "ip-transit",
  DPLC: "dplc",
  IPLC: "iplc",
};

export default function BusinessPage() {
  return (
    <main>
      <PageHero
        eyebrow="Business connectivity"
        title="Dedicated services for teams that cannot afford downtime."
        copy="Fast One supports private circuits, guaranteed bandwidth, and international connectivity for organizations that need controlled, reliable network performance."
        imageSrc="/img/tech_earth.png"
        imageAlt="Network globe illustration"
      >
        <a className={primaryButton} href={salesUrl} target="_blank" rel="noreferrer">
          <LocalizedText value="Discuss a circuit" />
          <ArrowIcon />
        </a>
      </PageHero>

      <section className={`${section} bg-[#F8FAFC]`}>
        <div className={`${sectionInner} grid grid-cols-[minmax(280px,0.62fr)_minmax(0,1fr)] items-start gap-12 max-[980px]:grid-cols-1`}>
          <div className="sticky top-28 max-[980px]:static">
            <p className={eyebrow}>
              <LocalizedText value="Services" />
            </p>
            <h2 className={heading2}>
              <LocalizedText value="Private, scalable, and monitored connectivity." />
            </h2>
            <p className="mt-[18px] leading-[1.65] text-[#0F172A]/80">
              <LocalizedText value="Build a more dependable network foundation with service options that fit a single office, multi-site operation, or carrier requirement." />
            </p>
            <div className="mt-[34px] grid grid-cols-3 gap-px overflow-hidden rounded-[8px] border border-[#38BDF8] bg-[#38BDF8] max-[640px]:grid-cols-1">
              {qualities.map((quality) => (
                <div className="flex min-h-24 flex-col justify-center bg-[#F8FAFC] p-4" key={quality.label}>
                  <strong className="text-[1.35rem] text-[#081120]">{quality.value}</strong>
                  <span className="mt-1 text-[0.86rem] font-bold text-[#0F172A]/80">
                    <LocalizedText value={quality.label} />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
            {businessServices.map((service) => (
              <article className="min-h-[230px] rounded-[8px] border border-[#38BDF8] bg-[#F8FAFC] p-6" id={serviceAnchors[service.title]} key={service.title}>
                <Image className="size-[54px] object-contain" src={service.icon} alt="" width={54} height={54} />
                <h3 className="mb-2.5 mt-[26px] text-xl font-bold text-[#081120]">
                  <LocalizedText value={service.title} />
                </h3>
                <p className="m-0 leading-[1.55] text-[#0F172A]/80">
                  <LocalizedText value={service.text} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={splitLayout}>
          <div>
            <p className={eyebrow}>
              <LocalizedText value="Who uses it" />
            </p>
            <h2 className={splitHeading}>
              <LocalizedText value="Connectivity for organizations that run on stable internet." />
            </h2>
            <p className="mt-[18px] max-w-[620px] leading-[1.65] text-[#0F172A]/80">
              <LocalizedText value="Dedicated services are ideal when shared broadband is not enough for cloud systems, video conferencing, branch connectivity, payment systems, and critical applications." />
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 rounded-[8px] border border-[#38BDF8] bg-[#F8FAFC] p-[22px] max-[640px]:grid-cols-1">
            {useCases.map((item) => (
              <div className="flex min-h-14 items-center gap-2.5 rounded-[8px] bg-[#38BDF8] p-3 font-extrabold text-[#081120]" key={item}>
                <CheckIcon className="text-[#0066FF]" />
                <span>
                  <LocalizedText value={item} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
