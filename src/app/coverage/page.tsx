import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  House,
  MapPin,
  MapPinned,
  Network,
  Router,
  Send,
  Wifi,
  Zap,
} from "lucide-react";
import LocalizedText from "@/components/LocalizedText";
import { connectionSteps, officeMapUrl, salesUrl } from "@/lib/site-data";
import {
  heroEnterCopy,
  heroEnterVisual,
  sectionInner,
} from "@/lib/ui-classes";

export const metadata: Metadata = {
  title: "Network Coverage | Fast One Cambodia",
  description:
    "Explore Fast One network locations in Cambodia and request an availability check for your home or business.",
};

type CoverageLocation = {
  name: {
    en: string;
    km: string;
  };
  mapName: string;
  latitude: number;
  longitude: number;
};

const cambodiaMapBounds = {
  north: 14.8,
  south: 9.9,
  west: 102.2,
  east: 107.9,
};

const coverageLocations: CoverageLocation[] = [
  {
    name: { en: "Phnom Penh", km: "ភ្នំពេញ" },
    mapName: "Phnom Penh",
    latitude: 11.5564,
    longitude: 104.9282,
  },
  {
    name: { en: "Preah Sihanouk", km: "ព្រះសីហនុ" },
    mapName: "Preah Sihanouk",
    latitude: 10.625,
    longitude: 103.523,
  },
  {
    name: { en: "Kampot", km: "កំពត" },
    mapName: "Kampot",
    latitude: 10.6104,
    longitude: 104.1814,
  },
  {
    name: { en: "Osmach", km: "អូរស្មាច់" },
    mapName: "Osmach",
    latitude: 14.4248,
    longitude: 103.6957,
  },
  {
    name: { en: "Chrey Thom", km: "ជ្រៃធំ" },
    mapName: "Chrey Thom",
    latitude: 10.9449,
    longitude: 105.0792,
  },
  {
    name: { en: "Anlong Chrey", km: "អន្លង់ជ្រៃ" },
    mapName: "Anlong Chrey",
    latitude: 11.6348,
    longitude: 105.8287,
  },
  {
    name: { en: "Poi Pet", km: "ប៉ោយប៉ែត" },
    mapName: "Poi Pet",
    latitude: 13.6564,
    longitude: 102.5622,
  },
  {
    name: { en: "Banteay Meanchey", km: "បន្ទាយមានជ័យ" },
    mapName: "Banteay Meanchey",
    latitude: 13.5858,
    longitude: 102.9736,
  },
  {
    name: { en: "Koh Kong", km: "កោះកុង" },
    mapName: "Koh Kong",
    latitude: 11.6175,
    longitude: 102.9849,
  },
  {
    name: { en: "Trapeang Phlong", km: "ត្រពាំងផ្លុង" },
    mapName: "Trapeang Phlong",
    latitude: 11.6982,
    longitude: 105.9587,
  },
];

const markerShifts: Record<string, string> = {
  "Anlong Chrey": "-translate-x-3 translate-y-2",
  "Trapeang Phlong": "translate-x-3 -translate-y-2",
  "Poi Pet": "-translate-x-1 -translate-y-1",
  "Banteay Meanchey": "translate-x-1 translate-y-1",
};

const stepIcons = [MapPin, Wifi, Router, Zap];

const stepNumbers = [
  { en: "01", km: "០១" },
  { en: "02", km: "០២" },
  { en: "03", km: "០៣" },
  { en: "04", km: "០៤" },
] as const;

function getCambodiaMapPosition(latitude: number, longitude: number): CSSProperties {
  return {
    left: `${
      ((longitude - cambodiaMapBounds.west) /
        (cambodiaMapBounds.east - cambodiaMapBounds.west)) *
      100
    }%`,
    top: `${
      ((cambodiaMapBounds.north - latitude) /
        (cambodiaMapBounds.north - cambodiaMapBounds.south)) *
      100
    }%`,
  };
}

function locationMapUrl(location: CoverageLocation) {
  if (location.mapName === "Phnom Penh") {
    return officeMapUrl;
  }

  return `https://www.google.com/maps/search/?api=1&query=${location.latitude}%2C${location.longitude}`;
}

export default function CoveragePage() {
  return (
    <main className="overflow-x-clip bg-white text-brand-ink">
      <section className="relative isolate overflow-hidden bg-brand-surface-hero pb-[88px] pt-20 max-[820px]:pb-14 max-[820px]:pt-11">
        <div
          className="pointer-events-none absolute left-1/2 top-[-260px] -z-10 h-[560px] w-[1020px] -translate-x-1/2 rounded-full bg-brand-soft/80 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-40 top-10 -z-10 size-[430px] rounded-full border-[86px] border-brand-highlight/[0.035]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-[-210px] -z-10 size-[390px] rounded-full bg-brand-highlight/10 blur-[90px]"
          aria-hidden="true"
        />

        <div className={sectionInner}>
          <div className="grid grid-cols-[minmax(0,0.92fr)_minmax(460px,1.08fr)] items-center gap-[clamp(42px,6vw,76px)] max-[980px]:grid-cols-1 max-[980px]:gap-11">
            <div className={heroEnterCopy}>
              <p className="m-0 flex items-center gap-3 text-[0.8rem] font-black uppercase tracking-[0.14em] text-brand-accent">
                <span className="h-px w-9 bg-brand-highlight" aria-hidden="true" />
                <LocalizedText
                  value={{ en: "Network coverage", km: "តំបន់គ្របដណ្តប់បណ្ដាញ" }}
                />
              </p>

              <h1 className="mb-0 mt-5 text-[clamp(2.65rem,5vw,4.25rem)] font-black leading-[1.02] tracking-[-0.045em] text-brand-ink [text-wrap:balance] max-[640px]:text-[2.35rem] [[lang=km]_&]:leading-[1.35] [[lang=km]_&]:tracking-normal">
                <span className="block">
                  <LocalizedText
                    value={{ en: "Coverage starts", km: "ការពិនិត្យតំបន់សេវា" }}
                  />
                </span>
                <span className="block text-brand-highlight">
                  <LocalizedText
                    value={{
                      en: "with your location.",
                      km: "ចាប់ផ្តើមពីទីតាំងរបស់អ្នក",
                    }}
                  />
                </span>
              </h1>

              <p className="mb-0 mt-6 max-w-[540px] text-[1.02rem] leading-[1.75] text-brand-copy [[lang=km]_&]:leading-[1.9]">
                <LocalizedText
                  value={{
                    en: "Send us your home or office pin. Our team will confirm availability for your street, building, and cable route before you choose a plan.",
                    km: "ផ្ញើទីតាំងផ្ទះ ឬការិយាល័យរបស់អ្នកមកយើង ក្រុមការងារនឹងបញ្ជាក់សេវាសម្រាប់ផ្លូវ អគារ និងផ្លូវខ្សែរបស់អ្នក មុនពេលអ្នកជ្រើសរើសកញ្ចប់",
                  }}
                />
              </p>

              <div className="mt-8 flex flex-wrap gap-3 max-[520px]:grid">
                <a
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-[9px] bg-brand-primary px-6 text-[0.94rem] font-black text-white shadow-[0_16px_34px_rgba(0,103,172,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2"
                  href={salesUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LocalizedText
                    value={{ en: "Check my location", km: "ពិនិត្យទីតាំងរបស់ខ្ញុំ" }}
                  />
                  <ArrowRight className="size-[18px] transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-[9px] border border-brand-border bg-white px-6 text-[0.94rem] font-black text-brand-link transition duration-200 hover:-translate-y-0.5 hover:border-brand-border-hover hover:text-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2"
                  href="#network-map"
                >
                  <LocalizedText
                    value={{ en: "Explore the network", km: "មើលបណ្ដាញរបស់យើង" }}
                  />
                  <MapPin className="size-[18px] text-brand-accent" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-border-subtle bg-white px-4 py-2 text-[0.78rem] font-bold text-brand-copy-secondary">
                  <House className="size-3.5 text-brand-accent" />
                  <LocalizedText
                    value={{ en: "Homes & businesses", km: "ផ្ទះ និងអាជីវកម្ម" }}
                  />
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-border-subtle bg-white px-4 py-2 text-[0.78rem] font-bold text-brand-copy-secondary">
                  <MapPinned className="size-3.5 text-brand-accent" />
                  <LocalizedText
                    value={{ en: "Address-level check", km: "ពិនិត្យតាមអាសយដ្ឋាន" }}
                  />
                </span>
              </div>
            </div>

            <div className={`${heroEnterVisual} relative min-w-0`}>
              <div
                className="pointer-events-none absolute -inset-5 -z-10 rounded-[30px] bg-gradient-to-br from-brand-soft to-brand-surface-hero"
                aria-hidden="true"
              />
              <div className="rounded-[26px] bg-white p-4 shadow-[0_26px_70px_rgba(6,27,70,0.16)] ring-1 ring-brand-border-subtle max-[640px]:p-3">
                <div className="relative h-[480px] overflow-hidden rounded-[18px] max-[980px]:h-[440px] max-[640px]:h-[330px]">
                  <Image
                    className="object-cover object-center"
                    src="/img/network-coverage-hero-v2.png"
                    alt=""
                    fill
                    priority
                    quality={100}
                    sizes="(max-width: 980px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,27,70,0.04)_15%,rgba(6,27,70,0.58)_100%)]"
                    aria-hidden="true"
                  />

                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3.5 py-2 text-[0.72rem] font-black uppercase tracking-[0.1em] text-brand-accent shadow-[0_8px_22px_rgba(6,27,70,0.12)] backdrop-blur-md max-[640px]:left-4 max-[640px]:top-4">
                    <MapPinned className="size-3.5 text-brand-highlight" aria-hidden="true" />
                    <LocalizedText
                      value={{ en: "Request a location check", km: "ស្នើពិនិត្យទីតាំង" }}
                    />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-[14px] border border-white/40 bg-white/95 p-4 shadow-[0_14px_34px_rgba(6,27,70,0.22)] backdrop-blur-md max-[640px]:bottom-4 max-[640px]:left-4 max-[640px]:right-4 max-[640px]:items-start max-[640px]:p-3.5">
                    <span className="flex size-11 flex-none items-center justify-center rounded-[10px] bg-brand-soft text-brand-accent">
                      <MapPinned className="size-5" />
                    </span>
                    <div>
                      <p className="m-0 text-[0.82rem] font-black text-brand-heading">
                        <LocalizedText
                          value={{
                            en: "Availability is confirmed by address",
                            km: "សេវាត្រូវបានបញ្ជាក់តាមអាសយដ្ឋាន",
                          }}
                        />
                      </p>
                      <p className="mb-0 mt-1 text-[0.75rem] font-medium leading-[1.5] text-brand-copy-secondary">
                        <LocalizedText
                          value={{
                            en: "Share your pin for the most accurate answer.",
                            km: "ផ្ញើទីតាំងរបស់អ្នកដើម្បីទទួលបានចម្លើយត្រឹមត្រូវបំផុត",
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-[90px] bg-white py-[100px] max-[640px]:py-[68px]"
        id="network-map"
      >
        <div className={sectionInner}>
          <div className="mx-auto mb-11 max-w-[760px] text-center max-[640px]:mb-8">
            <p className="m-0 flex items-center justify-center gap-3 text-[0.78rem] font-black uppercase tracking-[0.16em] text-brand-accent">
              <span className="h-px w-9 bg-brand-highlight" aria-hidden="true" />
              <LocalizedText value={{ en: "Our network", km: "បណ្ដាញរបស់យើង" }} />
              <span className="h-px w-9 bg-brand-highlight" aria-hidden="true" />
            </p>
            <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.15rem)] font-black leading-[1.08] tracking-[-0.035em] text-brand-ink [text-wrap:balance] [[lang=km]_&]:leading-[1.4] [[lang=km]_&]:tracking-normal">
              <LocalizedText
                value={{
                  en: "Connected across key network locations.",
                  km: "តភ្ជាប់តាមទីតាំងបណ្ដាញសំខាន់ៗ",
                }}
              />
            </h2>
            <p className="mx-auto mb-0 mt-5 max-w-[680px] text-[0.98rem] leading-[1.75] text-brand-copy [[lang=km]_&]:leading-[1.9]">
              <LocalizedText
                value={{
                  en: "These markers show Fast One network locations. Home and business availability can still vary by street, building, and cable path.",
                  km: "សញ្ញាទាំងនេះបង្ហាញទីតាំងបណ្ដាញ Fast One សេវាសម្រាប់ផ្ទះ និងអាជីវកម្មអាចខុសគ្នាតាមផ្លូវ អគារ និងផ្លូវខ្សែ",
                }}
              />
            </p>
          </div>

          <div className="grid grid-cols-[minmax(0,1.25fr)_minmax(300px,0.55fr)] items-stretch gap-6 max-[980px]:grid-cols-1">
            <div className="relative isolate min-w-0 overflow-hidden rounded-[24px] border border-brand-border-subtle bg-brand-surface-hero shadow-[0_22px_54px_rgba(6,27,70,0.09)]">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-border/45 blur-[85px]"
                aria-hidden="true"
              />
              <div className="flex items-center justify-between gap-4 border-b border-brand-border-subtle px-6 py-4 max-[640px]:px-4">
                <div className="flex items-center gap-2.5 text-[0.78rem] font-black text-brand-heading">
                  <Network className="size-4 text-brand-accent" />
                  <LocalizedText value={{ en: "Cambodia network view", km: "ផែនទីបណ្ដាញកម្ពុជា" }} />
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[0.68rem] font-black text-brand-copy-secondary ring-1 ring-brand-border-subtle">
                  <span className="size-2 rounded-full bg-[#19C37D]" />
                  <LocalizedText value={{ en: "Network location", km: "ទីតាំងបណ្ដាញ" }} />
                </span>
              </div>

              <div className="relative mx-auto aspect-[1346/1215] w-[94%] max-w-[720px] max-[640px]:w-full">
                <Image
                  className="object-contain opacity-95 drop-shadow-[0_18px_24px_rgba(6,27,70,0.09)]"
                  src="/img/cambodia-location-map.svg"
                  alt=""
                  fill
                  sizes="(max-width: 980px) 100vw, 62vw"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse 88% 84% at center, black 58%, rgba(0, 0, 0, 0.82) 76%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 88% 84% at center, black 58%, rgba(0, 0, 0, 0.82) 76%, transparent 100%)",
                  }}
                />

                {coverageLocations.map((location) => (
                  <a
                    className="group absolute z-10 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2"
                    href={locationMapUrl(location)}
                    style={getCambodiaMapPosition(location.latitude, location.longitude)}
                    target="_blank"
                    rel="noreferrer"
                    key={location.mapName}
                  >
                    <span className="sr-only">
                      <LocalizedText
                        value={{
                          en: `Open ${location.name.en} in Google Maps`,
                          km: `បើកទីតាំង ${location.name.km} ក្នុង Google Maps`,
                        }}
                      />
                    </span>
                    <span
                      className={`relative flex size-8 items-center justify-center rounded-full border-2 border-white bg-white p-1 shadow-[0_5px_14px_rgba(6,27,70,0.34)] transition duration-150 group-hover:scale-125 group-focus-visible:scale-125 max-[520px]:size-7 ${markerShifts[location.mapName] ?? ""}`}
                    >
                      <Image
                        className="h-auto w-full"
                        src="/img/fastone_mini_logo.png"
                        alt=""
                        width={24}
                        height={18}
                        quality={100}
                        sizes="24px"
                        aria-hidden="true"
                      />
                    </span>
                    <span
                      className="pointer-events-none absolute bottom-[calc(100%+3px)] left-1/2 w-max -translate-x-1/2 rounded-[7px] bg-brand-dark px-2.5 py-1.5 text-[0.68rem] font-black text-white opacity-0 shadow-[0_9px_22px_rgba(6,27,70,0.24)] transition group-hover:opacity-100 group-focus-visible:opacity-100 max-[640px]:hidden"
                      aria-hidden="true"
                    >
                      <LocalizedText value={location.name} />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <aside className="flex flex-col rounded-[24px] border border-brand-border-subtle bg-white p-6 shadow-[0_18px_46px_rgba(6,27,70,0.07)] max-[640px]:p-5">
              <div className="flex items-center justify-between gap-4">
                <span className="flex size-11 items-center justify-center rounded-[11px] bg-brand-soft text-brand-accent">
                  <MapPin className="size-5" />
                </span>
                <span className="rounded-full bg-brand-soft px-3 py-1.5 text-[0.7rem] font-black text-brand-accent">
                  <LocalizedText
                    value={{
                      en: `${coverageLocations.length} locations`,
                      km: "ទីតាំង ១០ កន្លែង",
                    }}
                  />
                </span>
              </div>

              <h3 className="mb-0 mt-5 text-[1.35rem] font-black leading-[1.2] text-brand-heading">
                <LocalizedText value={{ en: "Network locations", km: "ទីតាំងបណ្ដាញ" }} />
              </h3>

              <ul className="mb-0 mt-5 grid list-none grid-cols-2 gap-x-4 gap-y-3 p-0 max-[460px]:grid-cols-1">
                {coverageLocations.map((location) => (
                  <li key={location.mapName}>
                    <a
                      className="group flex min-h-7 items-center gap-2 text-[0.77rem] font-bold leading-[1.35] text-brand-link transition hover:text-brand-primary-hover focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2"
                      href={locationMapUrl(location)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="size-1.5 flex-none rounded-full bg-brand-highlight transition group-hover:scale-125" aria-hidden="true" />
                      <LocalizedText value={location.name} />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-brand-border-subtle pt-6 max-[980px]:mt-7">
                <p className="m-0 text-[0.78rem] font-black uppercase tracking-[0.1em] text-brand-accent">
                  <LocalizedText
                    value={{ en: "Your address still matters", km: "អាសយដ្ឋានរបស់អ្នកនៅតែសំខាន់" }}
                  />
                </p>
                <p className="mb-0 mt-3 text-[0.83rem] leading-[1.65] text-brand-copy-secondary">
                  <LocalizedText
                    value={{
                      en: "A marker shows network presence, not guaranteed service at every nearby address. Send your pin for confirmation.",
                      km: "សញ្ញាលើផែនទីបង្ហាញទីតាំងបណ្ដាញ មិនមែនធានាសេវានៅគ្រប់អាសយដ្ឋានក្បែរនោះទេ សូមផ្ញើទីតាំងរបស់អ្នកដើម្បីបញ្ជាក់",
                    }}
                  />
                </p>
                <a
                  className="group mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2.5 rounded-[9px] bg-brand-primary px-5 text-[0.86rem] font-black text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2"
                  href={salesUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LocalizedText value={{ en: "Send my location", km: "ផ្ញើទីតាំងរបស់ខ្ញុំ" }} />
                  <Send className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface-hero py-[96px] max-[640px]:py-[68px]">
        <div className={sectionInner}>
          <div className="mx-auto max-w-[760px] text-center">
            <p className="m-0 flex items-center justify-center gap-3 text-[0.78rem] font-black uppercase tracking-[0.16em] text-brand-accent">
              <span className="h-px w-9 bg-brand-highlight" aria-hidden="true" />
              <LocalizedText value="How it works" />
              <span className="h-px w-9 bg-brand-highlight" aria-hidden="true" />
            </p>
            <h2 className="mb-0 mt-4 text-[clamp(2rem,3.6vw,3rem)] font-black leading-[1.08] tracking-[-0.035em] text-brand-ink [text-wrap:balance] [[lang=km]_&]:leading-[1.4] [[lang=km]_&]:tracking-normal">
              <LocalizedText value="Get connected in four simple steps." />
            </h2>
            <p className="mx-auto mb-0 mt-4 max-w-[620px] text-[0.96rem] leading-[1.75] text-brand-copy [[lang=km]_&]:leading-[1.9]">
              <LocalizedText value="From location check to activation, Fast One keeps every step clear and simple." />
            </p>
          </div>

          <div className="mt-11 grid grid-cols-4 gap-5 max-[980px]:grid-cols-2 max-[640px]:mt-8 max-[640px]:grid-cols-1">
            {connectionSteps.map((step, index) => {
              const Icon = stepIcons[index];

              return (
                <article
                  className="group relative overflow-hidden rounded-[18px] border border-brand-border-subtle bg-white p-6 shadow-[0_16px_38px_rgba(6,27,70,0.055)] transition duration-200 hover:-translate-y-1 hover:border-brand-border-hover hover:shadow-[0_22px_48px_rgba(6,27,70,0.1)]"
                  key={step.title}
                >
                  <span className="absolute right-5 top-4 text-[2.7rem] font-black leading-none text-brand-soft" aria-hidden="true">
                    <LocalizedText value={stepNumbers[index]} />
                  </span>
                  <span className="relative flex size-12 items-center justify-center rounded-[12px] bg-brand-soft text-brand-accent transition group-hover:bg-brand-primary group-hover:text-white">
                    <Icon className="size-[22px]" />
                  </span>
                  <h3 className="mb-0 mt-6 text-[1.12rem] font-black text-brand-heading">
                    <LocalizedText value={step.title} />
                  </h3>
                  <p className="mb-0 mt-3 text-[0.88rem] leading-[1.7] text-brand-copy-secondary [[lang=km]_&]:leading-[1.9]">
                    <LocalizedText value={step.text} />
                  </p>
                </article>
              );
            })}
          </div>

          <div className="relative isolate mt-10 overflow-hidden rounded-[22px] bg-[linear-gradient(112deg,#071E3E_0%,#082744_58%,#0A4772_100%)] px-[clamp(26px,5vw,58px)] py-[clamp(34px,5vw,50px)] text-white shadow-[0_28px_70px_rgba(8,49,89,0.2)]">
            <div
              className="pointer-events-none absolute -right-24 -top-32 -z-10 size-[330px] rounded-full bg-brand-dark-accent/20 blur-[85px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-32 left-[34%] -z-10 size-[290px] rounded-full bg-brand-highlight/30 blur-[85px]"
              aria-hidden="true"
            />

            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-10 max-[820px]:grid-cols-1 max-[820px]:gap-7">
              <div>
                <div className="flex items-center gap-2.5 text-[0.75rem] font-black uppercase tracking-[0.15em] text-brand-dark-accent">
                  <Building2 className="size-4" />
                  <LocalizedText value={{ en: "Home or business", km: "ផ្ទះ ឬអាជីវកម្ម" }} />
                </div>
                <h2 className="mb-0 mt-3 max-w-[650px] text-[clamp(1.9rem,3.5vw,2.75rem)] font-black leading-[1.14] tracking-[-0.025em] [text-wrap:balance] [[lang=km]_&]:leading-[1.45] [[lang=km]_&]:tracking-normal">
                  <LocalizedText
                    value={{ en: "Ready to check your address?", km: "ត្រៀមពិនិត្យអាសយដ្ឋានរបស់អ្នកហើយឬនៅ?" }}
                  />
                </h2>
                <p className="mb-0 mt-4 max-w-[580px] text-[0.93rem] leading-[1.7] text-brand-dark-copy [[lang=km]_&]:leading-[1.9]">
                  <LocalizedText
                    value={{
                      en: "Share your map pin with Fast One sales and we will guide you through the next step.",
                      km: "ផ្ញើទីតាំងផែនទីរបស់អ្នកទៅផ្នែកលក់ Fast One ហើយយើងនឹងណែនាំអ្នកអំពីជំហានបន្ទាប់",
                    }}
                  />
                </p>
              </div>

              <a
                className="group inline-flex min-h-12 min-w-[230px] items-center justify-center gap-3 rounded-[9px] bg-brand-primary px-6 text-[0.92rem] font-black text-white shadow-[0_16px_34px_rgba(0,103,172,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark max-[520px]:min-w-0 max-[520px]:w-full"
                href={salesUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Send className="size-[18px]" />
                <LocalizedText
                  value={{ en: "Send location on Telegram", km: "ផ្ញើទីតាំងតាម Telegram" }}
                />
                <ArrowRight className="size-[18px] transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
