import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight as ArrowIcon,
  Check as CheckIcon,
  Headset as HeadsetIcon,
  MapPin as PinIcon,
  Wifi as WifiIcon,
} from "lucide-react";
import LocalizedText from "@/components/LocalizedText";
import PageHero from "@/components/PageHero";
import { address, salesUrl } from "@/lib/site-data";
import {
  eyebrow,
  heading2,
  primaryButton,
  section,
  sectionInner,
  softSection,
} from "@/lib/ui-classes";

export const metadata: Metadata = {
  title: "Support | Fast One Cambodia",
  description: "Contact Fast One Cambodia sales and support for internet service.",
};

const supportTopics = ["New home connection", "Business circuit inquiry", "Coverage confirmation", "Installation timing", "Plan recommendation", "Service questions"];

export default function SupportPage() {
  return (
    <main>
      <PageHero
        eyebrow="Support"
        title="Talk with Fast One about your next connection."
        copy="Get help choosing a home internet plan, checking coverage, or preparing a dedicated business connectivity request."
        imageSrc="/img/img_for_contact_us.png"
        imageAlt="Fast One support representative"
      >
        <a className={primaryButton} href={salesUrl} target="_blank" rel="noreferrer">
          <LocalizedText value="Contact sales" />
          <ArrowIcon />
        </a>
      </PageHero>

      <section className={section}>
        <div className={`${sectionInner} grid grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] items-center gap-[54px] max-[980px]:grid-cols-1`}>
          <div className="flex min-h-[430px] items-end justify-center overflow-hidden rounded-[8px] bg-[#F8FAFC] max-[640px]:min-h-[270px]">
            <Image className="h-auto w-full object-contain" src="/img/support.png" alt="Support icon illustration" width={520} height={420} />
          </div>
          <div>
            <p className={eyebrow}>
              <LocalizedText value="Contact details" />
            </p>
            <h2 className={heading2}>
              <LocalizedText value="Bring your location and service needs." />
            </h2>
            <p className="mt-[18px] leading-[1.65] text-[#0F172A]/80">
              <LocalizedText value="For the fastest answer, share your location, desired package, building type, and whether this is for home or business use." />
            </p>
            <div className="my-7 grid gap-3.5">
              <div className="grid grid-cols-[42px_1fr] items-start gap-3">
                <PinIcon className="box-content !size-[22px] rounded-[8px] bg-[#38BDF8] p-2.5 text-[#0066FF]" />
                <p className="m-0 text-[#0F172A]">{address}</p>
              </div>
              <div className="grid grid-cols-[42px_1fr] items-start gap-3" id="hotline">
                <HeadsetIcon className="box-content !size-[22px] rounded-[8px] bg-[#38BDF8] p-2.5 text-[#0066FF]" />
                <p className="m-0 text-[#0F172A]">
                  <LocalizedText value="Hotline: contact Fast One support" />
                </p>
              </div>
              <div className="grid grid-cols-[42px_1fr] items-start gap-3" id="social-media">
                <WifiIcon className="box-content !size-[22px] rounded-[8px] bg-[#38BDF8] p-2.5 text-[#0066FF]" />
                <p className="m-0 text-[#0F172A]">
                  <LocalizedText value="Telegram sales: fastonecambodiasale" />
                </p>
              </div>
            </div>
            <a className={primaryButton} href={salesUrl} target="_blank" rel="noreferrer">
              <LocalizedText value="Open Telegram" />
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className={softSection}>
        <div className={`${sectionInner} grid grid-cols-3 gap-[18px] max-[980px]:grid-cols-1`}>
          {supportTopics.map((topic) => (
            <article className="flex min-h-[120px] items-center gap-3.5 rounded-[8px] border border-[#38BDF8] bg-[#F8FAFC] p-[22px]" key={topic}>
              <CheckIcon className="!size-6 text-[#00C2FF]" />
              <h2 className="m-0 text-base font-bold text-[#081120]">
                <LocalizedText value={topic} />
              </h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
