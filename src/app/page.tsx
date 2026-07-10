import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight as ArrowIcon,
  BadgeCheck as BadgeCheckIcon,
  ChevronDown as ChevronDownIcon,
  Download as DownloadIcon,
  Gamepad2 as GamepadIcon,
  Gauge as GaugeIcon,
  Headset as HeadsetIcon,
  MapPin as MapPinIcon,
  MonitorPlay as MonitorPlayIcon,
  Network as NetworkIcon,
  Phone as PhoneIcon,
  Router as RouterIcon,
  ShieldCheck as ShieldIcon,
  Star as StarIcon,
  Video as VideoIcon,
  Wifi as WifiIcon,
  Zap as ZapIcon,
} from "lucide-react";
import LocalizedText from "@/components/LocalizedText";
import PricingSection from "@/components/PricingSection";
import {
  businessServices,
  connectionSteps,
  faqs,
  qualities,
  salesUrl,
  testimonials,
} from "@/lib/site-data";
import { cx } from "@/lib/ui-classes";

const wideInner =
  "mx-auto w-[min(1380px,calc(100%_-_96px))] max-[980px]:w-[min(100%_-_40px,760px)] max-[640px]:w-[min(100%_-_28px,560px)]";

const heroStats = [
  ["35-100 Mbps", "Home fiber plans"],
  ["3-5 days", "Typical installation"],
  ["24/7", "Technical support"],
];

const heroChips = [
  {
    label: "4K streaming",
    icon: MonitorPlayIcon,
    className: "right-[6%] top-[15%]",
    delay: "0s",
  },
  {
    label: "Online gaming",
    icon: GamepadIcon,
    className: "right-[43%] top-[40%]",
    delay: "1.1s",
  },
  {
    label: "Super fast downloads",
    icon: DownloadIcon,
    className: "bottom-[16%] right-[26%]",
    delay: "2.2s",
  },
  {
    label: "Video calls",
    icon: VideoIcon,
    className: "bottom-[30%] right-[5%]",
    delay: "3.3s",
  },
];

const featureHighlights = [
  {
    title: "Ultra-fast speed",
    text: "Blazing fiber internet for browsing, streaming, work, and play.",
    icon: GaugeIcon,
  },
  {
    title: "Reliable connection",
    text: "Stable service designed for always-on home and business use.",
    icon: ShieldIcon,
  },
  {
    title: "24/7 support",
    text: "Local customer care and technical support when you need help.",
    icon: HeadsetIcon,
  },
  {
    title: "Easy setup",
    text: "Availability checks, installation guidance, and router-ready plans.",
    icon: RouterIcon,
  },
];

const serviceIcons = [GaugeIcon, ShieldIcon, NetworkIcon, MapPinIcon];

const stepIcons = [MapPinIcon, WifiIcon, RouterIcon, ZapIcon];

const serviceHrefs: Record<string, string> = {
  "Dedicated Internet": "/business",
  DPLC: "/business/dplc",
  IPLC: "/business/iplc",
  "IP Transit": "/business/ip-transit",
};

function SplitTitle() {
  return (
    <>
      <LocalizedText value="Why Choose" />
      <br />
      <span className="text-[#0066FF]">
        <LocalizedText value="Fast One ?" />
      </span>
    </>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden  text-[#071735]">
      <section className="relative isolate mx-auto w-full max-w-[1440px] overflow-visible  max-[980px]:w-[calc(100%_-_40px)] max-[640px]:w-[calc(100%_-_28px)]">
        <div className="relative min-h-[700px] max-[980px]:min-h-[680px] max-[640px]:min-h-[650px]">
          <div className="absolute inset-0 -z-30  ">
            <div className="absolute inset-y-0 left-[30%] right-[calc(50%_-_50vw)] max-[980px]:left-0 max-[980px]:right-0">
              <Image
                className="object-cover object-[50%] max-[980px]:object-cover max-[980px]:object-[62%_44%]"
                src="/img/home-fiber-family-hero.png"
                alt="Family using Fast One fiber internet at home"
                fill
                sizes="(max-width: 1440px) 100vw, 1440px"
                priority
              />
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 right-[calc(50%_-_50vw)] -z-20 bg-[linear-gradient(90deg,#F8FBFF_0%,rgba(248,251,255,0.84)_30%,rgba(248,251,255,0.1)_55%,rgba(248,251,255,0)_100%)] max-[980px]:right-0 max-[980px]:bg-[linear-gradient(180deg,#F8FBFF_0%,rgba(248,251,255,0.92)_38%,rgba(248,251,255,0.22)_100%)]" />
          <div className="absolute bottom-0 left-0 right-[calc(50%_-_50vw)] -z-10 h-[36%] bg-[linear-gradient(0deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)] max-[980px]:right-0" />
          <div className="pointer-events-none absolute inset-0 z-10 max-[980px]:hidden">
            {heroChips.map((chip) => {
              const Icon = chip.icon;

              return (
                <div
                  className={cx(
                    "absolute animate-[chip-float_5.5s_ease-in-out_infinite]",
                    chip.className,
                  )}
                  style={{ animationDelay: chip.delay }}
                  key={chip.label}
                >
                  <span className="pointer-events-auto relative inline-flex cursor-default items-center gap-2.5 overflow-hidden rounded-full border border-[#8FCBFF] bg-[linear-gradient(135deg,#E3F2FF,#BFE0FF)] px-4 py-2.5 text-[0.85rem] font-black text-[#0053D6] shadow-[0_16px_38px_rgba(0,141,255,0.36)] ring-1 ring-white/60 backdrop-blur-md before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:bg-[linear-gradient(180deg,rgba(255,255,255,0.6),transparent)]">
                    <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#0066FF] text-white shadow-[0_4px_12px_rgba(0,102,255,0.5)]">
                      <Icon className="size-4" />
                    </span>
                    <span className="relative">
                      <LocalizedText value={chip.label} />
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
          <div
            className={`${wideInner} relative z-10 flex min-h-[720px] items-center pb-[110px] pt-16 max-[980px]:items-start max-[980px]:pb-[128px] max-[980px]:pt-10 max-[640px]:min-h-[690px] max-[640px]:pb-[118px]`}
          >
            <div className="max-w-[670px]">
              {/* <p className="mb-3 inline-flex min-h-9 items-center rounded-full border border-[#C9E0F7] bg-white/78 px-4 text-[0.78rem] font-black uppercase tracking-[0.08em] text-[#005EEE] shadow-[0_12px_28px_rgba(0,102,255,0.08)] backdrop-blur-md max-[640px]:mb-5 max-[640px]:text-[0.68rem]">
                <LocalizedText value="High speed. Reliable. Always connected." />
              </p> */}

              <h1 className="m-0 text-[4.65rem] font-black leading-[1.02] text-[#061B46] [text-wrap:balance] max-[1180px]:text-[4rem] max-[980px]:max-w-[620px] max-[980px]:text-[3.35rem] max-[640px]:text-[2.45rem] max-[640px]:leading-[1.08]">
                <SplitTitle />
              </h1>

              <p className="mt-5 max-w-[540px] text-[1.08rem] leading-[1.64] text-[#335077] max-[640px]:mt-4 max-[640px]:text-[0.98rem] max-[640px]:leading-[1.56]">
                <LocalizedText value="Dedicated Cable Infrastructure, Guaranteed Bandwidth, and Professional 24/7 Technical Support — delivering a fast, stable, and reliable network experience for your business." />
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 max-[640px]:mt-6 max-[640px]:grid max-[640px]:grid-cols-1">
                <Link
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[8px] bg-[#0066FF] px-6 text-[1rem] font-black text-white shadow-[0_18px_36px_rgba(0,102,255,0.24)] transition duration-150 hover:-translate-y-px hover:bg-[#008DFF]"
                  href="/plans"
                >
                  <LocalizedText value="View plans" />
                  <ArrowIcon className="size-5" />
                </Link>
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[8px] border border-[#0066FF] bg-white/80 px-6 text-[1rem] font-black text-[#005EEE] shadow-[0_16px_32px_rgba(9,31,72,0.06)] backdrop-blur-md transition duration-150 hover:-translate-y-px hover:bg-white"
                  href={salesUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LocalizedText value="Check availability" />
                  <MapPinIcon className="size-5" />
                </a>
              </div>

              {/* <dl className="mt-10 grid w-[min(580px,100%)] grid-cols-3 gap-3 max-[640px]:mt-8 max-[520px]:grid-cols-1">
                {heroStats.map(([value, label]) => (
                  <div
                    className="rounded-[8px] border border-[#D8E8F8] bg-white/72 p-4 shadow-[0_12px_26px_rgba(16,45,82,0.06)] backdrop-blur-md"
                    key={value}
                  >
                    <dt className="text-[1.08rem] font-black text-[#061B46]">
                      {value}
                    </dt>
                    <dd className="mt-1 text-[0.78rem] font-bold leading-snug text-[#56708F]">
                      <LocalizedText value={label} />
                    </dd>
                  </div>
                ))}
              </dl> */}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative z-20 -mt-[76px] pb-[74px] max-[640px]:-mt-[54px] max-[640px]:pb-[58px]"
        aria-label="Service highlights"
      >
        <div className={wideInner}>
          <div className="grid grid-cols-4 overflow-hidden rounded-[10px] bg-white shadow-[0_1px_2px_rgba(12,37,78,0.04),0_18px_44px_-12px_rgba(12,37,78,0.20)] ring-1 ring-[#0C254E]/[0.06] max-[1120px]:grid-cols-2 max-[640px]:grid-cols-1">
            {featureHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  className={cx(
                    "border-[#0C254E]/[0.06] p-7 max-[640px]:p-6",
                    index > 0 && "min-[1121px]:border-l",
                    index % 2 === 1 && "max-[1120px]:min-[641px]:border-l",
                    index > 1 && "max-[1120px]:min-[641px]:border-t",
                    index > 0 && "max-[640px]:border-t",
                  )}
                  key={item.title}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[13px] bg-[linear-gradient(140deg,#EDF5FF,#D9EAFF)] text-[#0066FF] ring-1 ring-inset ring-white/80">
                      <Icon className="size-[22px]" />
                    </span>
                    <h2 className="m-0 text-[1.0625rem] font-semibold leading-[1.25] tracking-[-0.01em] text-[#0A2240]">
                      <LocalizedText value={item.title} />
                    </h2>
                  </div>
                  <p className="mt-3.5 text-[0.9rem] leading-[1.6] text-[#5B7593]">
                    <LocalizedText value={item.text} />
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <PricingSection />

      <section className="bg-[#F5FAFF] py-[92px] max-[640px]:py-[66px]">
        <div className={wideInner}>
          <div className="mx-auto mb-10 max-w-[720px] text-center max-[640px]:mb-7">
            <p className="m-0 text-[0.82rem] font-black uppercase tracking-[0.1em] text-[#0066FF]">
              <LocalizedText value="How it works" />
            </p>
            <h2 className="mb-0 mt-3 text-[2.35rem] font-black leading-[1.1] text-[#061B46] max-[640px]:text-[1.85rem]">
              <LocalizedText value="Get connected in four simple steps." />
            </h2>
            <p className="mx-auto mb-0 mt-3 max-w-[600px] text-[1rem] leading-[1.6] text-[#526C8D]">
              <LocalizedText value="From location check to activation, Fast One keeps every step clear and simple." />
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6 max-[1120px]:grid-cols-2 max-[640px]:grid-cols-1">
            {connectionSteps.map((step, index) => {
              const Icon = stepIcons[index];

              return (
                <article
                  className="rounded-[8px] border border-[#D8E8F8] bg-white p-7 shadow-[0_16px_36px_rgba(13,39,77,0.07)]"
                  key={step.title}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#EAF6FF] text-[#0066FF]">
                      <Icon className="size-6" />
                    </span>
                    <span className="text-[2rem] font-black leading-none text-[#C9E0F7]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mb-0 mt-6 text-[1.12rem] font-black text-[#061B46]">
                    <LocalizedText value={step.title} />
                  </h3>
                  <p className="mb-0 mt-3 text-[0.94rem] leading-[1.55] text-[#526C8D]">
                    <LocalizedText value={step.text} />
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-[92px] max-[640px]:py-[66px]">
        <div
          className={`${wideInner} grid grid-cols-[minmax(320px,0.78fr)_minmax(0,1fr)] items-start gap-12 max-[980px]:grid-cols-1`}
        >
          <div>
            <p className="m-0 text-[0.82rem] font-black uppercase tracking-[0.1em] text-[#0066FF]">
              <LocalizedText value="Business connectivity" />
            </p>
            <h2 className="mb-0 mt-3 text-[2.35rem] font-black leading-[1.1] text-[#061B46] max-[640px]:text-[1.85rem]">
              <LocalizedText value="Private, reliable networks for serious operations." />
            </h2>
            <p className="mb-0 mt-5 max-w-[560px] text-[1rem] leading-[1.65] text-[#526C8D]">
              <LocalizedText value="From a single office to multi-site enterprise networks, Fast One provides dedicated services designed for lower risk, better control, and dependable uptime." />
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-3 max-[520px]:grid-cols-1">
              {qualities.map((quality) => (
                <div
                  className="rounded-[8px] border border-[#D8E8F8] bg-white p-4 shadow-[0_14px_32px_rgba(13,39,77,0.06)]"
                  key={quality.label}
                >
                  <dt className="text-[1.35rem] font-black text-[#061B46]">
                    {quality.value}
                  </dt>
                  <dd className="mt-1 text-[0.82rem] font-bold text-[#526C8D]">
                    <LocalizedText value={quality.label} />
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-[8px] bg-[#081F4D] px-6 text-[0.98rem] font-black text-white shadow-[0_16px_34px_rgba(8,31,77,0.18)] transition duration-150 hover:-translate-y-px hover:bg-[#0B327D] max-[640px]:w-full"
              href="/business"
            >
              <LocalizedText value="Business service" />
              <ArrowIcon className="size-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5 max-[640px]:grid-cols-1">
            {businessServices.map((service, index) => {
              const Icon = serviceIcons[index];

              return (
                <Link
                  className="group grid min-h-[226px] rounded-[8px] border border-[#D8E8F8] bg-white p-6 shadow-[0_16px_36px_rgba(13,39,77,0.07)] transition duration-150 hover:-translate-y-1 hover:border-[#0066FF]"
                  href={serviceHrefs[service.title] ?? "/business"}
                  key={service.title}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#EAF6FF] text-[#0066FF]">
                    <Icon className="size-6" />
                  </span>
                  <span>
                    <h3 className="mb-0 mt-6 text-[1.12rem] font-black text-[#061B46]">
                      <LocalizedText value={service.title} />
                    </h3>
                    <p className="mb-0 mt-3 text-[0.94rem] leading-[1.55] text-[#526C8D]">
                      <LocalizedText value={service.text} />
                    </p>
                  </span>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.88rem] font-black text-[#0066FF]">
                    <LocalizedText value="Explore service" />
                    <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F5FAFF] py-[92px] max-[640px]:py-[66px]">
        <div className={wideInner}>
          <div className="mx-auto mb-10 max-w-[720px] text-center max-[640px]:mb-7">
            <p className="m-0 text-[0.82rem] font-black uppercase tracking-[0.1em] text-[#0066FF]">
              <LocalizedText value="Testimonials" />
            </p>
            <h2 className="mb-0 mt-3 text-[2.35rem] font-black leading-[1.1] text-[#061B46] max-[640px]:text-[1.85rem]">
              <LocalizedText value="Trusted by homes and businesses across Phnom Penh." />
            </h2>
            <p className="mx-auto mb-0 mt-3 max-w-[600px] text-[1rem] leading-[1.6] text-[#526C8D]">
              <LocalizedText value="Real experiences from Fast One customers." />
            </p>
          </div>

          <div className="grid grid-cols-3 gap-7 max-[980px]:grid-cols-1">
            {testimonials.map((testimonial) => (
              <figure
                className="m-0 grid grid-rows-[auto_1fr_auto] rounded-[8px] border border-[#D8E8F8] bg-white p-7 shadow-[0_16px_36px_rgba(13,39,77,0.07)]"
                key={testimonial.name}
              >
                <div
                  className="flex items-center gap-1 text-[#F5A623]"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <StarIcon className="size-4 fill-current" key={starIndex} />
                  ))}
                </div>
                <blockquote className="m-0 pt-5 text-[1rem] leading-[1.65] text-[#334E6F]">
                  “<LocalizedText value={testimonial.quote} />”
                </blockquote>
                <figcaption className="pt-6">
                  <p className="m-0 text-[0.98rem] font-black text-[#061B46]">
                    {testimonial.name}
                  </p>
                  <p className="mb-0 mt-1 text-[0.85rem] font-bold text-[#56708F]">
                    <LocalizedText value={testimonial.role} />
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[92px] max-[640px]:py-[66px]">
        <div
          className={`${wideInner} grid grid-cols-[minmax(0,0.82fr)_minmax(320px,0.68fr)] items-center gap-12 max-[980px]:grid-cols-1`}
        >
          <div>
            <p className="m-0 text-[0.82rem] font-black uppercase tracking-[0.1em] text-[#0066FF]">
              <LocalizedText value="Coverage" />
            </p>
            <h2 className="mb-0 mt-3 max-w-[720px] text-[2.35rem] font-black leading-[1.1] text-[#061B46] max-[640px]:text-[1.85rem]">
              <LocalizedText value="Built for Phnom Penh and Cambodia's growing digital economy." />
            </h2>
            <p className="mb-0 mt-5 max-w-[620px] text-[1rem] leading-[1.65] text-[#526C8D]">
              <LocalizedText value="Fast One started with a local mission: make high quality internet more affordable and more accessible for the people and businesses building Cambodia's future." />
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 max-[640px]:grid max-[640px]:grid-cols-1">
              <Link
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[8px] bg-[#0066FF] px-6 text-[0.98rem] font-black text-white shadow-[0_16px_34px_rgba(0,102,255,0.22)] transition duration-150 hover:-translate-y-px hover:bg-[#008DFF]"
                href="/coverage"
              >
                <LocalizedText value="Explore coverage" />
                <ArrowIcon className="size-5" />
              </Link>
              <a
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[8px] border border-[#C9E0F7] bg-white px-6 text-[0.98rem] font-black text-[#061B46] shadow-[0_12px_28px_rgba(13,39,77,0.06)] transition duration-150 hover:-translate-y-px hover:border-[#0066FF]"
                href={salesUrl}
                target="_blank"
                rel="noreferrer"
              >
                <LocalizedText value="Send location" />
                <MapPinIcon className="size-5 text-[#0066FF]" />
              </a>
            </div>
          </div>

          <div className="relative min-h-[390px] overflow-hidden rounded-[8px] border border-[#D8E8F8] shadow-[0_18px_44px_rgba(13,39,77,0.08)] max-[640px]:min-h-[290px]">
            <Image
              className="object-cover"
              src="/img/map_bg.png"
              alt="Fast One coverage map"
              fill
              sizes="(max-width: 980px) 100vw, 42vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(6,27,70,0.86)_0%,rgba(6,27,70,0)_100%)] p-6 text-white">
              <div className="flex items-center gap-2.5 text-[0.95rem] font-black">
                <BadgeCheckIcon className="size-5 text-[#5EEAD4]" />
                <LocalizedText value="Installation guidance before payment" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5FAFF] py-[92px] max-[640px]:py-[66px]">
        <div className={wideInner}>
          <div className="mx-auto mb-10 max-w-[720px] text-center max-[640px]:mb-7">
            <p className="m-0 text-[0.82rem] font-black uppercase tracking-[0.1em] text-[#0066FF]">
              <LocalizedText value="FAQ" />
            </p>
            <h2 className="mb-0 mt-3 text-[2.35rem] font-black leading-[1.1] text-[#061B46] max-[640px]:text-[1.85rem]">
              <LocalizedText value="Frequently asked questions" />
            </h2>
            <p className="mx-auto mb-0 mt-3 max-w-[600px] text-[1rem] leading-[1.6] text-[#526C8D]">
              <LocalizedText value="Answers to common questions about coverage, installation, and plans." />
            </p>
          </div>

          <div className="mx-auto grid w-[min(860px,100%)] gap-4">
            {faqs.map((faq) => (
              <details
                className="group rounded-[8px] border border-[#D8E8F8] bg-white shadow-[0_14px_32px_rgba(13,39,77,0.05)] open:border-[#0066FF]"
                key={faq.question}
              >
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-[1.02rem] font-black text-[#061B46] [&::-webkit-details-marker]:hidden">
                  <LocalizedText value={faq.question} />
                  <ChevronDownIcon className="size-5 flex-none text-[#0066FF] transition-transform duration-150 group-open:rotate-180" />
                </summary>
                <p className="m-0 px-6 pb-5 text-[0.96rem] leading-[1.6] text-[#526C8D]">
                  <LocalizedText value={faq.answer} />
                </p>
              </details>
            ))}
          </div>

          <p className="mb-0 mt-8 text-center text-[0.96rem] font-bold text-[#526C8D]">
            <LocalizedText value="Still have questions?" />{" "}
            <a
              className="font-black text-[#0066FF] hover:underline"
              href={salesUrl}
              target="_blank"
              rel="noreferrer"
            >
              <LocalizedText value="Contact sales" />
            </a>
          </p>
        </div>
      </section>

      <section className="bg-[#061B46] py-[68px] text-white max-[640px]:py-[54px]">
        <div
          className={`${wideInner} flex items-center justify-between gap-8 max-[780px]:grid`}
        >
          <div>
            <p className="m-0 text-[0.82rem] font-black uppercase tracking-[0.1em] text-[#7DD3FC]">
              <LocalizedText value="Ready to connect?" />
            </p>
            <h2 className="mb-0 mt-3 text-[2rem] font-black leading-[1.15] max-[640px]:text-[1.65rem]">
              <LocalizedText value="Check your location and get the right Fast One plan." />
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 max-[640px]:grid max-[640px]:grid-cols-1">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[8px] bg-white px-6 text-[0.98rem] font-black text-[#0066FF] transition duration-150 hover:-translate-y-px"
              href={salesUrl}
              target="_blank"
              rel="noreferrer"
            >
              <PhoneIcon className="size-5" />
              <LocalizedText value="Contact sales" />
            </a>
            <Link
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[8px] border border-white/24 px-6 text-[0.98rem] font-black text-white transition duration-150 hover:-translate-y-px hover:border-white/60"
              href="/support/hotline"
            >
              <ZapIcon className="size-5 text-[#7DD3FC]" />
              <LocalizedText value="Get support" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
