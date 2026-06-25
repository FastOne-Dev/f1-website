import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight as ArrowIcon,
  Check as CheckIcon,
  MapPin as PinIcon,
} from "lucide-react";
import LocalizedText from "@/components/LocalizedText";
import { salesUrl } from "@/lib/site-data";
import {
  eyebrow,
  section,
  sectionInner,
  secondaryButton,
  softSection,
  splitHeading,
  splitLayout,
} from "@/lib/ui-classes";

export const metadata: Metadata = {
  title: "Coverage | Fast One Cambodia",
  description: "Fast One fiber coverage and service availability in Cambodia.",
};

const coverageNotes = [
  "Phnom Penh service focus",
  "Residential and business availability checks",
  "Expansion for Cambodia's digital economy",
  "Installation guidance before payment",
];

export default function CoveragePage() {
  return (
    <main>
      <section className="relative isolate flex min-h-[calc(100svh-76px)] items-end overflow-hidden">
        <Image className="-z-20 object-cover" src="/img/phnom_penh_photo.jpg" alt="Phnom Penh city skyline and river" fill sizes="100vw" priority />
        <div className="absolute inset-0 -z-10 bg-[#081120]/70 max-[640px]:bg-[#081120]/80" />
        <div className="mx-auto w-[min(1120px,calc(100%_-_80px))] pb-[70px] text-[#F8FAFC] max-[980px]:w-[min(100%_-_40px,720px)] max-[640px]:w-[min(100%_-_28px,560px)]">
          <p className="m-0 mb-3.5 text-[0.82rem] font-black uppercase text-[#38BDF8]">
            <LocalizedText value="Coverage" />
          </p>
          <h1 className="m-0 max-w-[780px] text-[3.5rem] leading-none text-[#F8FAFC] max-[640px]:text-[2.2rem]">
            <LocalizedText value="Fast One coverage for Phnom Penh and expanding communities." />
          </h1>
          <p className="mt-[18px] max-w-[620px] leading-[1.65] text-[#F8FAFC]">
            <LocalizedText value="Confirm your exact location with Fast One sales before choosing a plan. The team will check service availability, installation timing, and cable requirements." />
          </p>
          <a
            className="mt-7 inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-[8px] bg-[#0066FF] px-[18px] font-extrabold text-[#F8FAFC] transition duration-150 hover:-translate-y-px hover:bg-[#00C2FF] max-[640px]:w-full"
            href={salesUrl}
            target="_blank"
            rel="noreferrer"
          >
            <LocalizedText value="Check availability" />
            <ArrowIcon />
          </a>
        </div>
      </section>

      <section className={section}>
        <div className={splitLayout}>
          <div>
            <p className={eyebrow}>
              <LocalizedText value="Service area" />
            </p>
            <h2 className={splitHeading}>
              <LocalizedText value="Local network, practical installation checks." />
            </h2>
            <p className="mt-[18px] max-w-[620px] leading-[1.65] text-[#0F172A]/80">
              <LocalizedText value="Fast One grew from a local mission to make reliable internet more affordable. Availability can vary by street, building, and cable path, so every request starts with a location check." />
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 rounded-[8px] border border-[#38BDF8] bg-[#F8FAFC] p-[22px] max-[640px]:grid-cols-1">
            {coverageNotes.map((item) => (
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

      <section className={softSection}>
        <div className={`${sectionInner} grid grid-cols-[minmax(280px,0.55fr)_minmax(0,1fr)] items-center gap-[34px] overflow-hidden rounded-[8px] border border-[#38BDF8] bg-[#F8FAFC] p-[30px] max-[980px]:grid-cols-1 max-[640px]:p-4`}>
          <div className="p-4">
            <PinIcon className="box-content !size-[42px] rounded-[8px] bg-[#38BDF8] p-2.5 text-[#0066FF]" />
            <h2 className="mb-3 mt-[22px] text-[1.8rem] font-bold text-[#081120]">
              <LocalizedText value="Request a coverage check" />
            </h2>
            <p className="mb-6 leading-relaxed text-[#0F172A]/80">
              <LocalizedText value="Send your home or office location to Fast One sales and the team will confirm the best available service option." />
            </p>
            <a className={secondaryButton} href={salesUrl} target="_blank" rel="noreferrer">
              <LocalizedText value="Send location" />
              <ArrowIcon />
            </a>
          </div>
          <Image className="h-[360px] w-full rounded-[8px] object-cover max-[640px]:h-[260px]" src="/img/map_bg.png" alt="" width={760} height={420} />
        </div>
      </section>
    </main>
  );
}
