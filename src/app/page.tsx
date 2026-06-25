import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight as ArrowIcon,
  Check as CheckIcon,
  Gauge as GaugeIcon,
  Headset as HeadsetIcon,
  MapPin as MapPinIcon,
  Network as NetworkIcon,
  ShieldCheck as ShieldIcon,
  Wifi as WifiIcon,
} from "lucide-react";
import LocalizedText from "@/components/LocalizedText";
import {
  businessServices,
  homeHighlights,
  plans,
  qualities,
  salesUrl,
} from "@/lib/site-data";
import {
  cx,
  eyebrow,
  primaryButton,
  section,
  sectionHeader,
  sectionHeaderCopy,
  sectionHeaderEyebrow,
  sectionInner,
} from "@/lib/ui-classes";

const heroStats = [
  ["35-100 Mbps", "Home fiber plans"],
  ["3-5 days", "Typical installation"],
  ["24/7", "Technical support"],
];

const highlightIcons = [WifiIcon, ShieldIcon, HeadsetIcon];

const serviceIcons = [GaugeIcon, ShieldIcon, NetworkIcon, MapPinIcon];

const serviceHrefs: Record<string, string> = {
  "Dedicated Internet": "/business",
  DPLC: "/business/dplc",
  IPLC: "/business/iplc",
  "IP Transit": "/business/ip-transit",
};

const planCardClass =
  "grid min-h-[246px] grid-rows-[auto_1fr_auto] rounded-[8px] border border-[#B7DDF0] bg-white p-5 shadow-[0_18px_44px_rgba(8,17,32,0.06)] max-[640px]:min-h-0";

export default function Home() {
  return (
    <main className="bg-[#F8FAFC]">
      <section className="relative isolate flex min-h-[calc(100svh-136px)] overflow-hidden bg-[#07111F] text-[#F8FAFC] max-[980px]:min-h-[calc(100svh-126px)]">
        <Image
          className="-z-30 object-cover"
          src="/img/phnom_penh_photo.jpg"
          alt="Phnom Penh skyline served by Fast One fiber internet"
          fill
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#07111F_0%,rgba(7,17,31,0.94)_36%,rgba(7,17,31,0.68)_66%,rgba(7,17,31,0.84)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(0deg,#07111F_0%,rgba(7,17,31,0)_100%)]" />
        <Image
          className="absolute bottom-[-20px] right-[max(18px,7vw)] -z-10 h-auto w-[min(48vw,620px)] object-contain opacity-95 max-[980px]:right-[-72px] max-[980px]:w-[min(78vw,560px)] max-[980px]:opacity-30 max-[640px]:bottom-[8px] max-[640px]:right-[-92px] max-[640px]:w-[520px] max-[640px]:opacity-20"
          src="/img/router_1.png"
          alt=""
          width={768}
          height={484}
          priority
        />
        <div
          className={`${sectionInner} flex flex-col justify-center py-[64px] max-[640px]:py-10`}
        >
          <p className="m-0 mb-3.5 text-[0.78rem] font-black uppercase tracking-[0.12em] text-[#7DD3FC]">
            <LocalizedText value="Internet Service Provider in Cambodia" />
          </p>
          <h1 className="m-0 max-w-[760px] text-[4.15rem] font-black leading-[0.98] text-white max-[980px]:max-w-[680px] max-[980px]:text-[3.15rem] max-[640px]:text-[2.35rem] max-[640px]:leading-[1.04]">
            <LocalizedText value="Fast fiber internet for home, office, and always-on business." />
          </h1>
          <p className="mt-[22px] max-w-[590px] text-[1.12rem] leading-[1.65] text-white/86 max-[640px]:text-base max-[640px]:leading-[1.55]">
            <LocalizedText value="Fast One delivers affordable, reliable connectivity with dedicated cable, dedicated bandwidth, and support from local engineers." />
          </p>
          <div className="mt-[30px] flex flex-wrap items-center gap-3 max-[640px]:flex-col max-[640px]:items-stretch">
            <Link className={primaryButton} href="/plans">
              <LocalizedText value="View plans" />
              <ArrowIcon />
            </Link>
            <a
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-white/35 bg-white/10 px-[18px] font-extrabold text-white backdrop-blur-sm transition duration-150 hover:-translate-y-px hover:border-[#7DD3FC] hover:bg-white/16 max-[640px]:w-full"
              href={salesUrl}
              target="_blank"
              rel="noreferrer"
            >
              <LocalizedText value="Check availability" />
              <ArrowIcon />
            </a>
          </div>
          <dl className="mt-10 grid w-[min(720px,100%)] grid-cols-3 gap-px overflow-hidden rounded-[8px] border border-white/18 bg-white/18 max-[640px]:grid-cols-1">
            {heroStats.map(([value, label]) => (
              <div
                className="min-h-[96px] bg-[#081120]/62 p-[18px] backdrop-blur-md"
                key={value}
              >
                <dt className="text-[1.15rem] font-black text-white">
                  {value}
                </dt>
                <dd className="mt-2 text-sm font-semibold text-white/76">
                  <LocalizedText value={label} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        className="border-y border-[#B7DDF0] bg-white"
        aria-label="Service highlights"
      >
        <div className={`${sectionInner} grid grid-cols-3 max-[980px]:grid-cols-1`}>
          {homeHighlights.map((item, index) => {
            const Icon = highlightIcons[index];

            return (
              <article
                className={cx(
                  "grid min-h-[178px] grid-cols-[46px_minmax(0,1fr)] gap-4 py-7 text-[#081120] max-[980px]:min-h-0 max-[980px]:border-t max-[980px]:border-[#B7DDF0]",
                  index > 0 &&
                    "border-l border-[#B7DDF0] pl-7 max-[980px]:border-l-0 max-[980px]:pl-0",
                  index < homeHighlights.length - 1 && "pr-7 max-[980px]:pr-0",
                  index === 0 && "max-[980px]:border-t-0",
                )}
                key={item.title}
              >
                <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[8px] bg-[#E0F7FF] text-[#0067AC]">
                  <Icon className="size-6" />
                </span>
                <span>
                  <h2 className="mb-2 mt-0 text-lg font-black text-[#081120]">
                    <LocalizedText value={item.title} />
                  </h2>
                  <p className="m-0 text-[0.95rem] leading-[1.55] text-[#334155]">
                    <LocalizedText value={item.text} />
                  </p>
                </span>
              </article>
            );
          })}
        </div>
      </section>

      <section className={section}>
        <div className={sectionInner}>
          <div className={sectionHeader}>
            <p className={sectionHeaderEyebrow}>
              <LocalizedText value="Home internet" />
            </p>
            <h2 className="m-0 text-[2.55rem] leading-[1.04] text-[#081120] max-[640px]:text-[1.9rem]">
              <LocalizedText value="Simple plans with the speed most homes actually need." />
            </h2>
            <p className={sectionHeaderCopy}>
              <LocalizedText value="Choose a home package, then connect with Fast One sales for availability and installation details." />
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[18px] max-[980px]:grid-cols-1">
            {plans.map((plan, index) => (
              <article
                className={cx(
                  planCardClass,
                  index === 1 &&
                    "border-[#0067AC] shadow-[0_22px_52px_rgba(0,103,172,0.14)]",
                )}
                key={plan.name}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="m-0 text-[1.25rem] font-black text-[#081120]">
                      <LocalizedText value={plan.name} />
                    </h3>
                    <p className="mt-1.5 font-black text-[#0067AC]">
                      {plan.speed}
                    </p>
                  </div>
                  {index === 1 && (
                    <span className="rounded-[8px] bg-[#F59E0B] px-2.5 py-1.5 text-[0.76rem] font-black text-[#081120]">
                      <LocalizedText value="Popular" />
                    </span>
                  )}
                </div>
                <div>
                  <p className="mt-6 text-[2.75rem] font-black leading-none text-[#081120]">
                    {plan.price}
                    <span className="text-[0.92rem] font-bold text-[#64748B]">
                      <LocalizedText value="/month" />
                    </span>
                  </p>
                  <p className="mt-4 min-h-[50px] text-[0.96rem] leading-[1.5] text-[#334155] max-[980px]:min-h-0">
                    <LocalizedText value={plan.note} />
                  </p>
                </div>
                <Link
                  className={cx(
                    "mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[8px] border border-[#B7DDF0] bg-white font-extrabold text-[#0067AC] transition duration-150 hover:-translate-y-px hover:border-[#0067AC]",
                    index === 1 && "border-[#0067AC] bg-[#0067AC] text-white",
                  )}
                  href="/plans"
                >
                  <LocalizedText value="Compare plans" />
                  <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111F] py-[92px] text-white max-[640px]:py-[66px]">
        <div className={`${sectionInner} grid grid-cols-[minmax(280px,0.7fr)_minmax(0,1fr)] items-start gap-12 max-[980px]:grid-cols-1`}>
          <div>
            <p className="m-0 mb-3.5 text-[0.82rem] font-black uppercase tracking-[0.12em] text-[#7DD3FC]">
              <LocalizedText value="Business connectivity" />
            </p>
            <h2 className="m-0 text-[2.55rem] leading-[1.04] text-white max-[640px]:text-[1.9rem]">
              <LocalizedText value="Private, reliable networks for serious operations." />
            </h2>
            <p className="mt-[18px] max-w-[560px] leading-[1.65] text-white/76">
              <LocalizedText value="From a single office to multi-site enterprise networks, Fast One provides dedicated services designed for lower risk, better control, and dependable uptime." />
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-[8px] border border-white/16 bg-white/16 max-[640px]:grid-cols-1">
              {qualities.map((quality) => (
                <div
                  className="min-h-24 bg-white/[0.07] p-4 backdrop-blur-sm"
                  key={quality.label}
                >
                  <dt className="text-[1.35rem] font-black text-white">
                    {quality.value}
                  </dt>
                  <dd className="mt-1 text-[0.84rem] font-bold text-white/72">
                    <LocalizedText value={quality.label} />
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-[#14B8A6] px-[18px] font-extrabold text-[#04111F] transition duration-150 hover:-translate-y-px hover:bg-[#5EEAD4] max-[640px]:w-full"
              href="/business"
            >
              <LocalizedText value="Business service" />
              <ArrowIcon />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
            {businessServices.map((service, index) => {
              const Icon = serviceIcons[index];

              return (
                <Link
                  className="group grid min-h-[232px] rounded-[8px] border border-white/14 bg-white/[0.06] p-6 transition duration-150 hover:-translate-y-1 hover:border-[#7DD3FC] hover:bg-white/[0.1]"
                  href={serviceHrefs[service.title] ?? "/business"}
                  key={service.title}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#E0F7FF] text-[#0067AC]">
                    <Icon className="size-6" />
                  </span>
                  <span>
                    <h3 className="mb-2.5 mt-7 text-xl font-black text-white">
                      <LocalizedText value={service.title} />
                    </h3>
                    <p className="m-0 leading-[1.55] text-white/74">
                      <LocalizedText value={service.text} />
                    </p>
                  </span>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#7DD3FC]">
                    <LocalizedText value="Business service" />
                    <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${section} bg-white`}>
        <div className={`${sectionInner} grid grid-cols-[minmax(0,0.78fr)_minmax(320px,0.72fr)] items-center gap-12 max-[980px]:grid-cols-1`}>
          <div>
            <p className={eyebrow}>
              <LocalizedText value="Coverage" />
            </p>
            <h2 className="m-0 max-w-[720px] text-[2.55rem] leading-[1.04] text-[#081120] max-[640px]:text-[1.9rem]">
              <LocalizedText value="Built for Phnom Penh and Cambodia's growing digital economy." />
            </h2>
            <p className="mt-[18px] max-w-[620px] leading-[1.65] text-[#334155]">
              <LocalizedText value="Fast One started with a local mission: make high quality internet more affordable and more accessible for the people and businesses building Cambodia's future." />
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 max-[640px]:flex-col max-[640px]:items-stretch">
              <Link className={primaryButton} href="/coverage">
                <LocalizedText value="Explore coverage" />
                <ArrowIcon />
              </Link>
              <a
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-[#B7DDF0] bg-white px-[18px] font-extrabold text-[#081120] transition duration-150 hover:-translate-y-px hover:border-[#0067AC] max-[640px]:w-full"
                href={salesUrl}
                target="_blank"
                rel="noreferrer"
              >
                <LocalizedText value="Send location" />
                <MapPinIcon className="size-5" />
              </a>
            </div>
          </div>
          <div className="relative min-h-[390px] overflow-hidden rounded-[8px] border border-[#B7DDF0] max-[640px]:min-h-[280px]">
            <Image
              className="object-cover"
              src="/img/map_bg.png"
              alt="Fast One coverage map"
              fill
              sizes="(max-width: 980px) 100vw, 44vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(8,17,32,0.86)_0%,rgba(8,17,32,0)_100%)] p-6 text-white">
              <div className="flex items-center gap-2.5 text-[0.95rem] font-black">
                <CheckIcon className="size-5 text-[#5EEAD4]" />
                <LocalizedText value="Installation guidance before payment" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
