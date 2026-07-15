import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight as ArrowIcon,
  ChevronDown as ChevronDownIcon,
  CircleCheck as CircleCheckIcon,
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
  Smartphone as SmartphoneIcon,
  Star as StarIcon,
  Video as VideoIcon,
  Wifi as WifiIcon,
  Zap as ZapIcon,
} from "lucide-react";
import LocalizedText from "@/components/LocalizedText";
import PricingSection from "@/components/PricingSection";
import {
  address,
  businessServices,
  connectionSteps,
  qualities,
  salesUrl,
  testimonials,
} from "@/lib/site-data";
import { cx } from "@/lib/ui-classes";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";

const wideInner =
  "mx-auto w-[min(1380px,calc(100%_-_96px))] max-[980px]:w-[min(100%_-_40px,760px)] max-[640px]:w-[min(100%_-_28px,560px)]";

const officeMapQuery = encodeURIComponent(`Fast One Cambodia, ${address}`);
const officeDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${officeMapQuery}`;

const cambodiaMapBounds = {
  north: 14.8,
  south: 9.9,
  west: 102.2,
  east: 107.9,
};

const coverageLocations = [
  { name: "Phnom Penh", latitude: 11.5564, longitude: 104.9282 },
  { name: "Preah Sihanouk", latitude: 10.625, longitude: 103.523 },
  { name: "Kampot", latitude: 10.6104, longitude: 104.1814 },
  { name: "Osmach", latitude: 14.4248, longitude: 103.6957 },
  { name: "Chrey Thom", latitude: 10.9449, longitude: 105.0792 },
  { name: "Anlong Chrey", latitude: 11.6348, longitude: 105.8287 },
  { name: "Poi Pet", latitude: 13.6564, longitude: 102.5622 },
  { name: "Banteay Meanchey", latitude: 13.5858, longitude: 102.9736 },
  { name: "Koh Kong", latitude: 11.6175, longitude: 102.9849 },
  { name: "Trapeang Phlong", latitude: 11.6982, longitude: 105.9587 },
] as const;

const coverageMarkerShifts: Record<string, string> = {
  "Anlong Chrey": "-translate-x-3 translate-y-2",
  "Trapeang Phlong": "translate-x-3 -translate-y-2",
  "Poi Pet": "-translate-x-1 -translate-y-1",
  "Banteay Meanchey": "translate-x-1 translate-y-1",
};

function getCambodiaMapPosition(latitude: number, longitude: number) {
  return {
    left: `${((longitude - cambodiaMapBounds.west) / (cambodiaMapBounds.east - cambodiaMapBounds.west)) * 100}%`,
    top: `${((cambodiaMapBounds.north - latitude) / (cambodiaMapBounds.north - cambodiaMapBounds.south)) * 100}%`,
  };
}

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
                src="/img/home-fiber-family-hero.webp"
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

      <section className="bg-[#F5FAFF] pb-[92px] max-[640px]:pb-[66px]">
        <div className={wideInner}>
          <div className="relative isolate grid min-h-[500px] grid-cols-[1.05fr_0.95fr] items-center overflow-hidden  bg-[linear-gradient(115deg,#061B46_0%,#082E68_58%,#075A8F_100%)] text-white shadow-[0_24px_64px_rgba(6,27,70,0.2)] max-[900px]:grid-cols-1">
            <div className="absolute inset-0 -z-20 opacity-20 [background-image:linear-gradient(rgba(125,211,252,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.22)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_right,black,transparent_72%)]" />
            <div className="absolute -right-24 -top-36 -z-10 size-[430px] rounded-full bg-[#06B6D4]/25 blur-[80px]" />
            <div className="absolute bottom-[-180px] left-[35%] -z-10 size-[420px] rounded-full bg-[#0066FF]/35 blur-[90px]" />

            <div className="relative z-10 px-[clamp(34px,6vw,82px)] py-16 max-[640px]:px-7 max-[640px]:py-11">
              <p className="m-0 inline-flex min-h-8 items-center rounded-full border border-[#7DD3FC]/35 bg-[#7DD3FC]/10 px-3.5 text-[0.7rem] font-black uppercase tracking-[0.13em] text-[#9EE8FA]">
                <LocalizedText value={{ en: "Who we are", km: "យើងជានរណា" }} />
              </p>
              <h2 className="mb-0 mt-5 max-w-[650px] text-[2.75rem] font-black leading-[1.1] tracking-[-0.035em] [text-wrap:balance] max-[640px]:text-[2rem]">
                <LocalizedText
                  value={{
                    en: "Reliable internet. Practical prices. Local support.",
                    km: "អ៊ីនធឺណិតដែលអាចទុកចិត្តបាន។ តម្លៃសមរម្យ។ ជំនួយក្នុងស្រុក។",
                  }}
                />
              </h2>
              <p className="mb-0 mt-5 max-w-[580px] text-[1rem] leading-[1.7] text-white/68">
                <LocalizedText
                  value={{
                    en: "Fast One keeps homes and businesses connected with dependable fiber service and a team that understands Cambodia.",
                    km: "Fast One រក្សាការតភ្ជាប់សម្រាប់គេហដ្ឋាន និងអាជីវកម្ម ជាមួយសេវាហ្វាយបឺរដែលអាចទុកចិត្តបាន និងក្រុមការងារដែលយល់ពីកម្ពុជា។",
                  }}
                />
              </p>

              <ul className="m-0 mt-7 grid list-none gap-3 p-0">
                {[
                  {
                    en: "Home and business internet solutions",
                    km: "ដំណោះស្រាយអ៊ីនធឺណិតសម្រាប់ផ្ទះ និងអាជីវកម្ម",
                  },
                  {
                    en: "Quality service at a practical price",
                    km: "សេវាកម្មមានគុណភាពក្នុងតម្លៃសមរម្យ",
                  },
                  {
                    en: "Local technical support available 24/7",
                    km: "ជំនួយបច្ចេកទេសក្នុងស្រុក 24/7",
                  },
                ].map((item) => (
                  <li
                    className="flex items-center gap-3 text-[0.92rem] font-bold text-white/82"
                    key={item.en}
                  >
                    <CircleCheckIcon className="size-5 flex-none text-[#5EE7F2]" />
                    <LocalizedText value={item} />
                  </li>
                ))}
              </ul>

              <Link
                className="mt-9 inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] bg-white px-6 text-[0.94rem] font-black text-[#0757C7] shadow-[0_14px_30px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:bg-[#EAF7FF]"
                href="/about/company-profile"
              >
                <LocalizedText
                  value={{ en: "Discover Fast One", km: "ស្វែងយល់ពី Fast One" }}
                />
                <ArrowIcon className="size-5" />
              </Link>
            </div>

            <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden max-[900px]:min-h-[390px] max-[900px]:border-t max-[900px]:border-white/10">
              <div className="absolute size-[360px] rounded-full border border-[#7DD3FC]/15" />
              <div className="absolute size-[270px] rounded-full border border-[#7DD3FC]/20" />
              <div className="absolute size-[185px] rounded-full bg-[#0EA5E9]/15 blur-xl" />

              <span className="absolute left-[18%] top-[24%] size-2 rounded-full bg-[#A5F3FC] shadow-[0_0_14px_#67E8F9]" />
              <span className="absolute right-[17%] top-[29%] size-1.5 rounded-full bg-white shadow-[0_0_12px_white]" />
              <span className="absolute bottom-[23%] left-[24%] size-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_12px_#38BDF8]" />
              <span className="absolute bottom-[18%] right-[20%] size-2 rounded-full bg-[#67E8F9] shadow-[0_0_14px_#67E8F9]" />

              <div className="relative mt-16 h-[270px] w-[142px] rotate-[7deg] rounded-[28px] border-[4px] border-[#A5F3FC] bg-[linear-gradient(155deg,#0B3D78,#061B46)] p-2 shadow-[0_0_28px_rgba(103,232,249,0.48),0_30px_48px_rgba(0,0,0,0.34)]">
                <div className="absolute left-1/2 top-2 z-10 h-2 w-12 -translate-x-1/2 rounded-full bg-[#061B46]" />
                <div className="relative h-full overflow-hidden rounded-[21px] border border-white/10 bg-[radial-gradient(circle_at_68%_24%,rgba(94,234,242,0.42),transparent_27%),linear-gradient(160deg,#0B52A1,#071B42)]">
                  <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(125,211,252,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.22)_1px,transparent_1px)] [background-size:18px_18px]" />
                  <div className="absolute inset-x-0 bottom-8 flex justify-center">
                    <SmartphoneIcon
                      className="size-12 text-white/25"
                      strokeWidth={1}
                    />
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 top-[14%] -translate-x-1/2 text-[#A5F3FC] drop-shadow-[0_0_18px_rgba(103,232,249,0.8)]">
                <WifiIcon className="size-24" strokeWidth={1.7} />
              </div>
              <div className="absolute bottom-[12%] h-2 w-48 rounded-full bg-[#38BDF8]/55 blur-md" />
            </div>
          </div>
        </div>
      </section>

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
                <figcaption className="flex items-center gap-3.5 pt-6">
                  <span
                    className="flex size-11 flex-none items-center justify-center rounded-full bg-[linear-gradient(135deg,#0066FF,#06B6D4)] text-[0.78rem] font-black text-white shadow-[0_8px_18px_rgba(0,102,255,0.2)] ring-4 ring-[#EAF6FF]"
                    aria-hidden="true"
                  >
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <div>
                    <p className="m-0 text-[0.98rem] font-black text-[#061B46]">
                      {testimonial.name}
                    </p>
                    <p className="mb-0 mt-1 text-[0.85rem] font-bold text-[#56708F]">
                      <LocalizedText value={testimonial.role} />
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-white py-[100px] max-[640px]:py-[66px]">
        <div className="relative">
          <div
            className={`${wideInner} relative grid grid-cols-[0.88fr_1.12fr] items-center gap-[clamp(40px,6vw,92px)] max-[980px]:grid-cols-1`}
          >
            <div className="flex flex-col justify-center">
              <p className="m-0 flex items-center gap-3 text-[0.76rem] font-black uppercase tracking-[0.16em] text-[#0066FF]">
                <span className="h-px w-9 bg-[#0066FF]" />
                <LocalizedText value="Coverage" />
              </p>
              <h2 className="mb-0 mt-5 max-w-[590px] text-[clamp(2.15rem,3.4vw,3.6rem)] font-black leading-[1.02] tracking-[-0.045em] text-[#061B46] [text-wrap:balance]">
                <LocalizedText value="Built for Phnom Penh and Cambodia's growing digital economy." />
              </h2>
              <p className="mb-0 mt-6 max-w-[560px] text-[1rem] leading-[1.75] text-[#526C8D]">
                <LocalizedText value="Fast One started with a local mission: make high quality internet more affordable and more accessible for the people and businesses building Cambodia's future." />
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                <span className="rounded-full border border-[#D5E6F5] bg-[#F4F9FD] px-4 py-2 text-[0.78rem] font-bold text-[#365B80]">
                  <LocalizedText value="10 network locations" />
                </span>
                <span className="rounded-full border border-[#D5E6F5] bg-[#F4F9FD] px-4 py-2 text-[0.78rem] font-bold text-[#365B80]">
                  <LocalizedText value="Local support" />
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 max-[520px]:grid">
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[10px] bg-[#087FF5] px-6 text-[0.94rem] font-black text-white shadow-[0_14px_30px_rgba(0,102,255,0.3)] transition hover:-translate-y-0.5 hover:bg-[#1395FF]"
                  href={salesUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LocalizedText value="Send location" />
                  <MapPinIcon className="size-5" />
                </a>
                <Link
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[10px] border border-[#BED8EB] bg-white px-6 text-[0.94rem] font-black text-[#061B46] transition hover:-translate-y-0.5 hover:border-[#0066FF] hover:bg-[#F7FBFF]"
                  href="/coverage"
                >
                  <LocalizedText value="Explore coverage" />
                  <ArrowIcon className="size-5 text-[#0066FF]" />
                </Link>
              </div>

              <div className="mt-9 flex items-start gap-3 border-t border-[#DCE9F3] pt-6">
                <MapPinIcon className="mt-0.5 size-5 flex-none text-[#0066FF]" />
                <div>
                  <strong className="block text-[0.82rem] font-black text-[#173B65]">
                    <LocalizedText
                      value={{
                        en: "Fast One office",
                        km: "ការិយាល័យ Fast One",
                      }}
                    />
                  </strong>
                  <p className="mb-0 mt-1 max-w-[520px] text-[0.76rem] font-bold leading-[1.55] text-[#607890]">
                    {address}
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-1.5 text-[0.75rem] font-black text-[#0066FF] hover:underline"
                    href={officeDirectionsUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LocalizedText
                      value={{
                        en: "Open in Google Maps",
                        km: "បើកក្នុង Google Maps",
                      }}
                    />
                    <ArrowIcon className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex min-h-[620px] items-center max-[980px]:min-h-0">
              <div className="relative mx-auto aspect-[1346/1215] w-full max-w-[720px] overflow-visible">
                <Image
                  className="object-contain opacity-90 saturate-[0.82] drop-shadow-[0_18px_24px_rgba(6,27,70,0.1)]"
                  src="/img/cambodia-location-map.svg"
                  alt="Map of Cambodia showing Fast One network locations"
                  fill
                  sizes="(max-width: 900px) 100vw, 54vw"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse 88% 84% at center, black 58%, rgba(0, 0, 0, 0.82) 76%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 88% 84% at center, black 58%, rgba(0, 0, 0, 0.82) 76%, transparent 100%)",
                  }}
                />

                <a
                  className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  href={officeDirectionsUrl}
                  style={getCambodiaMapPosition(
                    coverageLocations[0].latitude,
                    coverageLocations[0].longitude,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Fast One Cambodia office in Google Maps"
                >
                  <span className="relative flex size-8 items-center justify-center rounded-full border-2 border-white bg-white p-1 shadow-[0_4px_12px_rgba(6,27,70,0.32)] transition duration-150 group-hover:scale-125 group-focus-visible:scale-125 max-[520px]:size-7">
                    <Image
                      className="h-auto w-full"
                      src="/img/fastone_mini_logo.png"
                      alt=""
                      width={24}
                      height={18}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 w-max -translate-x-1/2 rounded-[6px] bg-[#061B46] px-2.5 py-1.5 text-white opacity-0 shadow-[0_8px_20px_rgba(6,27,70,0.24)] transition group-hover:opacity-100 group-focus-visible:opacity-100">
                    <strong className="block text-[0.78rem] font-black">
                      <LocalizedText
                        value={{
                          en: "Fast One office",
                          km: "ការិយាល័យ Fast One",
                        }}
                      />
                    </strong>
                    <small className="mt-0.5 block text-[0.66rem] font-bold text-white/70">
                      <LocalizedText value="Phnom Penh" />
                    </small>
                  </span>
                </a>

                {coverageLocations.slice(1).map((location) => (
                  <a
                    className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                    href={`https://www.google.com/maps/search/?api=1&query=${location.latitude}%2C${location.longitude}`}
                    style={getCambodiaMapPosition(
                      location.latitude,
                      location.longitude,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${location.name} in Google Maps`}
                    key={location.name}
                  >
                    <span
                      className={cx(
                        "relative flex size-8 items-center justify-center rounded-full border-2 border-white bg-white p-1 shadow-[0_4px_12px_rgba(6,27,70,0.32)] transition duration-150 group-hover:scale-125 group-focus-visible:scale-125 max-[520px]:size-7",
                        coverageMarkerShifts[location.name],
                      )}
                    >
                      <Image
                        className="h-auto w-full"
                        src="/img/fastone_mini_logo.png"
                        alt=""
                        width={24}
                        height={18}
                        aria-hidden="true"
                      />
                    </span>
                    <span className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 w-max -translate-x-1/2 rounded-[6px] bg-[#061B46] px-2.5 py-1.5 text-[0.68rem] font-black text-white opacity-0 shadow-[0_8px_20px_rgba(6,27,70,0.24)] transition group-hover:opacity-100 group-focus-visible:opacity-100">
                      {location.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
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

      <Faq />

    </main>
  );
}
