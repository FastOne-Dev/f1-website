import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight as ArrowIcon,
  Cable as CableIcon,
  Check as CheckIcon,
  Clock as ClockIcon,
  Headset as HeadsetIcon,
} from "lucide-react";
import LocalizedText from "@/components/LocalizedText";
import PageHero from "@/components/PageHero";
import { plans, salesUrl } from "@/lib/site-data";
import {
  cx,
  eyebrow,
  imagePanel,
  primaryButton,
  section,
  sectionHeader,
  sectionHeaderCopy,
  sectionHeaderEyebrow,
  sectionInner,
  softSection,
  splitHeading,
  splitLayout,
} from "@/lib/ui-classes";

export const metadata: Metadata = {
  title: "Internet Plans | Fast One Cambodia",
  description: "Compare Fast One home fiber internet plans for Cambodia.",
};

const planDetails = [
  {
    icon: CableIcon,
    title: "Fiber installation",
    text: "Installation is usually completed within 3-5 days after payment and availability confirmation.",
  },
  {
    icon: ClockIcon,
    title: "Clear contract",
    text: "Home packages require a minimum one year contract, keeping the monthly price simple and predictable.",
  },
  {
    icon: HeadsetIcon,
    title: "Support included",
    text: "Fast One sales and technical teams help with plan selection, activation, and service questions.",
  },
];

export default function PlansPage() {
  return (
    <main>
      <PageHero
        eyebrow="Home internet"
        title="Fiber plans for everyday streaming, work, and gaming."
        copy="Pick a simple home package and connect with Fast One sales to confirm coverage, installation timing, and router setup."
        imageSrc="/img/router_1.png"
        imageAlt="Fiber router and digital city illustration"
      >
        <a className={primaryButton} href={salesUrl} target="_blank" rel="noreferrer">
          <LocalizedText value="Ask sales" />
          <ArrowIcon />
        </a>
      </PageHero>

      <section className={section}>
        <div className={sectionInner}>
          <div className={sectionHeader}>
            <p className={sectionHeaderEyebrow}>
              <LocalizedText value="Packages" />
            </p>
            <h2 className="m-0 text-[2.4rem] leading-[1.08] text-[#081120] max-[640px]:text-[1.85rem]">
              <LocalizedText value="Choose the right speed for your home." />
            </h2>
            <p className={sectionHeaderCopy}>
              <LocalizedText value="Each package uses premium bandwidth and is designed for a stable fiber experience." />
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[18px] max-[980px]:grid-cols-1">
            {plans.map((plan, index) => (
              <article
                className={cx(
                  "flex min-h-[474px] flex-col rounded-[8px] border border-[#38BDF8] bg-[#F8FAFC] p-6 max-[640px]:min-h-0",
                  index === 1 && "border-[#0066FF]",
                )}
                key={plan.name}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="m-0 text-[1.35rem] font-bold text-[#081120]">
                      <LocalizedText value={plan.name} />
                    </h3>
                    <p className="mt-1.5 font-black text-[#0066FF]">{plan.speed}</p>
                  </div>
                  {index === 1 && (
                    <span className="rounded-full border border-[#38BDF8] bg-[#00C2FF] px-2.5 py-1.5 text-[0.78rem] font-black text-[#081120]">
                      <LocalizedText value="Popular" />
                    </span>
                  )}
                </div>
                <p className="mt-7 text-[3.1rem] font-black leading-none text-[#081120]">
                  {plan.price}
                  <span className="text-[0.95rem] font-bold text-[#0F172A]/80">
                    <LocalizedText value="/month" />
                  </span>
                </p>
                <p className="mt-[18px] min-h-14 leading-normal text-[#0F172A]/80">
                  <LocalizedText value={plan.note} />
                </p>
                <ul className="my-[22px] grid gap-3 p-0">
                  {plan.features.map((feature) => (
                    <li className="flex items-start gap-2.5 leading-snug text-[#0F172A]" key={feature}>
                      <CheckIcon className="mt-px text-[#00C2FF]" />
                      <LocalizedText value={feature} />
                    </li>
                  ))}
                </ul>
                <a
                  className={cx(
                    "mt-auto inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[8px] border border-[#38BDF8] bg-[#F8FAFC] font-extrabold text-[#0066FF] transition duration-150 hover:-translate-y-px",
                    index === 1 && "border-[#0066FF] bg-[#0066FF] text-[#F8FAFC]",
                  )}
                  href={salesUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LocalizedText value="Choose plan" />
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={softSection}>
        <div className={`${sectionInner} grid grid-cols-3 gap-[18px] max-[980px]:grid-cols-1`}>
          {planDetails.map((item) => (
            <article className="min-h-60 rounded-[8px] border border-[#38BDF8] bg-[#F8FAFC] p-7" key={item.title}>
              <item.icon className="!size-9 text-[#0066FF]" />
              <h2 className="mb-2.5 mt-7 text-xl font-bold text-[#081120]">
                <LocalizedText value={item.title} />
              </h2>
              <p className="m-0 leading-[1.55] text-[#0F172A]/80">
                <LocalizedText value={item.text} />
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className={section}>
        <div className={splitLayout}>
          <div>
            <p className={eyebrow}>
              <LocalizedText value="What to expect" />
            </p>
            <h2 className={splitHeading}>
              <LocalizedText value="Simple setup from inquiry to activation." />
            </h2>
            <p className="mt-[18px] max-w-[620px] leading-[1.65] text-[#0F172A]/80">
              <LocalizedText value="Fast One confirms service availability, installation requirements, cable length, and router setup before activation. Additional installation charges may apply for cable lengths exceeding 350 meters." />
            </p>
          </div>
          <div className={imagePanel}>
            <Image className="h-auto w-[min(100%,560px)] object-contain" src="/img/cable.png" alt="Fiber cable illustration" width={640} height={420} />
          </div>
        </div>
      </section>
    </main>
  );
}
