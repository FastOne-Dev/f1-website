import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ExternalLink,
  Headphones,
  MapPin,
} from "lucide-react";
import LocalizedText from "@/components/LocalizedText";
import { aboutDetailPages } from "@/lib/nav-page-content";
import {
  address,
  officeMapUrl,
  salesUrl,
} from "@/lib/site-data";

const content = aboutDetailPages.companyProfile;

export const metadata: Metadata = content.metadata;

const container =
  "mx-auto w-[min(1180px,calc(100%_-_80px))] max-[820px]:w-[calc(100%_-_40px)] max-[520px]:w-[calc(100%_-_28px)]";

const heroCards = [
  {
    number: "01",
    title: "Home internet",
    text: "Simple fiber packages for families, students, creators, and remote workers who need stable day-to-day internet.",
    imageSrc: "/img/hea_sna.png",
    imageAlt: "",
    href: "/plans",
    imageClass: "object-contain object-center",
  },
  {
    number: "02",
    title: "Business connectivity",
    text: "Dedicated bandwidth and private circuit options for offices, banks, hotels, operators, and multi-site teams.",
    imageSrc: "/img/IMG_4888.png",
    imageAlt: "",
    href: "/business/ip-transit",
    imageClass: "object-contain",
  },
  {
    number: "03",
    title: "Local support",
    text: "Local customer care and technical support when you need help.",
    imageSrc: "/img/b-seanglin.png",
    imageAlt: "",
    href: "/coverage",
    imageClass: "object-contain object-bottom",
  },
] as const;

export default function CompanyProfilePage() {
  return (
    <main className="overflow-hidden bg-white text-[#08244A]">
      <section className="overflow-hidden bg-[#FCFDFE] pb-20 pt-10 max-[820px]:pb-14 max-[820px]:pt-11">
        <div className={container}>
          <div className="mx-auto max-w-[900px] text-center">
            <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.28em] text-[#8496A8] [[lang=km]_&]:leading-[1.6] [[lang=km]_&]:tracking-normal">
              <LocalizedText value="About Fast One" />
            </p>
            <h1 className="mb-0 mt-5 text-[3.85rem] font-semibold leading-[1.18] tracking-[-0.03em] text-[#07172C] [text-wrap:balance] [[lang=km]_&]:leading-[1.45] [[lang=km]_&]:tracking-normal max-[760px]:text-[3rem] max-[480px]:text-[2.35rem]">
              <span className="mr-[0.2em] inline-block text-[#087CFA]">
                Fast One
              </span>
              <LocalizedText value="keeps Cambodia connected." />
            </h1>
            {/* <p className="mx-auto mb-0 mt-6 max-w-[660px] text-[0.98rem] leading-[1.7] text-[#5E7083]">
              <LocalizedText value={content.copy} />
            </p> */}
          </div>

          <div className="mx-auto mt-12 grid max-w-[1030px] grid-cols-3 items-start gap-7 max-[900px]:grid-cols-1 max-[900px]:gap-5">
            {heroCards.map((card, index) => (
              <Link
                className={`group relative rounded-[10px] border border-[#DFE7E8] bg-white shadow-[0_12px_28px_rgba(29,54,74,0.06)] transition hover:-translate-y-1 hover:border-[#AFCFE6] hover:shadow-[0_18px_38px_rgba(29,54,74,0.1)] ${index === 1 ? "mt-16 max-[900px]:mt-10" : "mt-10"}`}
                href={card.href}
                key={card.number}
              >
                <div className={`relative ${index === 1 ? "h-[300px]" : "h-[260px]"}`}>
                  <div className="absolute -top-8 bottom-0 left-4 right-4 rounded-[8px]">
                    <Image
                      className={card.imageClass}
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      fill
                      priority={index === 1}
                      sizes="(max-width: 900px) 100vw, 34vw"
                    />
                  </div>
                </div>
                <div className="flex h-9 items-center justify-between bg-[#E7F3FB] px-5 text-[0.74rem] font-black text-[#153A5C]">
                  <span>{card.number}</span>
                  <ArrowRight className="size-4 text-[#087CFA] transition group-hover:translate-x-1" />
                </div>
                <div className={`px-5 py-5 ${index === 1 ? "pb-7" : ""}`}>
                  <h2 className="m-0 text-[1.12rem] font-bold tracking-[-0.015em] text-[#10243A] [[lang=km]_&]:leading-[1.55] [[lang=km]_&]:tracking-normal">
                    <LocalizedText value={card.title} />
                  </h2>
                  <p className="mb-0 mt-3 text-[0.78rem] leading-[1.65] text-[#667788] [[lang=km]_&]:leading-[1.8]">
                    <LocalizedText value={card.text} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="company-story-heading"
        className="relative isolate scroll-mt-[74px] overflow-hidden border-y border-[#DCE9F2] bg-[linear-gradient(180deg,#F9FCFE_0%,#EEF6FB_100%)] py-24 max-[820px]:py-16 max-[640px]:scroll-mt-[66px]"
        id="company-story"
      >
        <div className="pointer-events-none absolute -right-48 top-16 size-[520px] rounded-full bg-[#16BCE1]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-48 bottom-0 size-[440px] rounded-full bg-[#087CFA]/8 blur-3xl" />

        <div className={`${container} relative`}>
          <div className="grid grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)] items-end gap-10 max-[900px]:grid-cols-1 max-[900px]:gap-7">
            <div>
              <p className="m-0 flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.17em] text-[#0066CC] [[lang=km]_&]:leading-[1.6] [[lang=km]_&]:tracking-normal">
                <span className="h-px w-8 bg-[#0066CC]" aria-hidden="true" />
                <LocalizedText value={content.intro.eyebrow} />
              </p>
              <h2
                className="mb-0 mt-5 max-w-[760px] text-[3.35rem] font-semibold leading-[1.08] tracking-[-0.045em] text-[#071D38] [text-wrap:balance] [[lang=km]_&]:leading-[1.4] [[lang=km]_&]:tracking-normal max-[620px]:text-[2.35rem]"
                id="company-story-heading"
              >
                <LocalizedText value={content.intro.title} />
              </h2>
            </div>

            <p className="mb-1 border-l border-[#BED6E7] pl-8 text-[1rem] leading-[1.8] text-[#526B82] max-[900px]:m-0 max-[900px]:max-w-[720px] max-[900px]:border-l-0 max-[900px]:pl-0">
              <LocalizedText value={content.intro.copy} />
            </p>
          </div>

          <div className="relative mt-14 max-[650px]:mt-10">
            <div className="relative h-[430px] overflow-hidden rounded-[20px] bg-[#0A3158] shadow-[0_26px_70px_rgba(6,37,70,0.16)] max-[780px]:h-[390px] max-[560px]:h-[330px]">
              <Image
                className="object-cover object-center"
                src="/img/phnom_penh_photo.jpg"
                alt=""
                fill
                sizes="(max-width: 520px) calc(100vw - 28px), (max-width: 820px) calc(100vw - 40px), (max-width: 1260px) calc(100vw - 80px), 1180px"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,22,43,0.18)_0%,rgba(3,25,48,0.26)_52%,rgba(3,22,43,0.66)_100%)]" />

              <div
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]"
                aria-hidden="true"
              >
                <svg
                  className="company-signal-map h-full w-full"
                  viewBox="0 0 1180 430"
                  preserveAspectRatio="xMidYMid slice"
                  fill="none"
                >
                  <defs>
                    <linearGradient
                      id="company-signal-gradient"
                      x1="44"
                      y1="330"
                      x2="1138"
                      y2="112"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#73EAFF" stopOpacity="0.32" />
                      <stop offset="0.48" stopColor="#D9FCFF" />
                      <stop offset="1" stopColor="#4DBBFF" stopOpacity="0.72" />
                    </linearGradient>
                    <filter
                      id="company-signal-glow"
                      x="-30%"
                      y="-30%"
                      width="160%"
                      height="160%"
                    >
                      <feGaussianBlur stdDeviation="3.6" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <path
                    className="company-signal-route-base"
                    d="M44 338C170 292 267 318 390 254C512 191 630 315 820 208C954 132 1035 205 1138 156"
                    stroke="url(#company-signal-gradient)"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    className="company-signal-route company-signal-route--primary"
                    d="M44 338C170 292 267 318 390 254C512 191 630 315 820 208C954 132 1035 205 1138 156"
                    stroke="url(#company-signal-gradient)"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    className="company-signal-route-base"
                    d="M118 205C246 154 352 224 515 170C650 125 760 154 894 194C1000 226 1082 168 1158 102"
                    stroke="url(#company-signal-gradient)"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    className="company-signal-route company-signal-route--secondary"
                    d="M118 205C246 154 352 224 515 170C650 125 760 154 894 194C1000 226 1082 168 1158 102"
                    stroke="url(#company-signal-gradient)"
                    vectorEffect="non-scaling-stroke"
                  />

                  {(
                    [
                      [160, 303, "-0.4s"],
                      [390, 254, "-1.8s"],
                      [615, 273, "-0.9s"],
                      [820, 208, "-2.3s"],
                      [1040, 187, "-1.2s"],
                    ] as const
                  ).map(([cx, cy, delay]) => (
                    <g key={`${cx}-${cy}`} filter="url(#company-signal-glow)">
                      <circle
                        className="company-signal-ring"
                        cx={cx}
                        cy={cy}
                        r="15"
                        style={{ animationDelay: delay }}
                      />
                      <circle
                        className="company-signal-core"
                        cx={cx}
                        cy={cy}
                        r="4.5"
                        style={{ animationDelay: delay }}
                      />
                      <circle cx={cx} cy={cy} r="1.7" fill="white" />
                    </g>
                  ))}

                  <g
                    className="company-signal-beacon"
                    filter="url(#company-signal-glow)"
                  >
                    <path
                      className="company-signal-arc company-signal-arc--outer"
                      d="M968 112Q1030 50 1092 112"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      className="company-signal-arc company-signal-arc--middle"
                      d="M988 112Q1030 70 1072 112"
                      vectorEffect="non-scaling-stroke"
                    />
                    <path
                      className="company-signal-arc company-signal-arc--inner"
                      d="M1008 112Q1030 90 1052 112"
                      vectorEffect="non-scaling-stroke"
                    />
                    <circle cx="1030" cy="117" r="4.5" fill="#8FF3FF" />
                  </g>
                </svg>

                <span className="company-photo-signal-frame absolute inset-0 rounded-[20px]" />
              </div>

              <div className="absolute bottom-8 left-8 flex items-center gap-6 rounded-[14px] border border-white/15 bg-[#061D3B]/92 px-6 py-5 text-white shadow-[0_14px_35px_rgba(1,15,34,0.24)] backdrop-blur-md max-[650px]:bottom-5 max-[650px]:left-5 max-[650px]:right-5 max-[650px]:gap-4 max-[650px]:px-5">
                <div className="relative h-9 w-[138px] flex-none max-[420px]:w-[112px]">
                  <Image
                    className="object-contain object-left"
                    src="/img/Fast_One_Logo.png"
                    alt=""
                    fill
                    sizes="138px"
                  />
                </div>
                <span className="h-10 w-px flex-none bg-white/20" aria-hidden="true" />
                <div>
                  <p className="m-0 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#8FE5F4] [[lang=km]_&]:leading-[1.6] [[lang=km]_&]:tracking-normal">
                    <LocalizedText value="Company profile" />
                  </p>
                  <p className="mb-0 mt-1 text-[0.9rem] font-semibold">
                    <LocalizedText value="Fast One Cambodia" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[#CBDDE9]" aria-hidden="true" />
            <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[#5F778C] [[lang=km]_&]:leading-[1.6] [[lang=km]_&]:tracking-normal">
              <LocalizedText value="Company details" />
            </p>
            <span className="h-px flex-1 bg-[#CBDDE9]" aria-hidden="true" />
          </div>

          <dl className="mb-0 mt-2 grid grid-cols-[0.8fr_1.2fr] max-[760px]:grid-cols-1">
            <div className="flex items-start gap-4 py-7 pr-10 max-[760px]:pr-0">
              <span className="flex size-10 flex-none items-center justify-center rounded-full border border-[#C9DDEA] bg-white text-[#087CFA]">
                <Building2 className="size-[18px]" strokeWidth={1.8} />
              </span>
              <div>
                <dt className="text-[0.7rem] font-bold uppercase tracking-[0.11em] text-[#5F778C] [[lang=km]_&]:leading-[1.6] [[lang=km]_&]:tracking-normal">
                  <LocalizedText value="Legal name" />
                </dt>
                <dd className="mb-0 ml-0 mt-2 text-[0.9rem] font-semibold text-[#183C5C]">
                  FAST ONE (CAM), Co., Ltd.
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-4 border-l border-[#CBDDE9] py-7 pl-10 max-[760px]:border-l-0 max-[760px]:border-t max-[760px]:pl-0">
              <span className="flex size-10 flex-none items-center justify-center rounded-full border border-[#C9DDEA] bg-white text-[#087CFA]">
                <MapPin className="size-[18px]" strokeWidth={1.8} />
              </span>
              <div>
                <dt className="text-[0.7rem] font-bold uppercase tracking-[0.11em] text-[#5F778C] [[lang=km]_&]:leading-[1.6] [[lang=km]_&]:tracking-normal">
                  <LocalizedText value="Head office" />
                </dt>
                <dd className="mb-0 ml-0 mt-2 max-w-[650px] text-[0.84rem] leading-[1.6] text-[#526B82]">
                  <a
                    className="group/address inline-flex items-start gap-2 transition-colors hover:text-[#0066CC] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087CFA]"
                    href={officeMapUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <LocalizedText value={address} />
                    </span>
                    <span className="sr-only">
                      {" "}
                      (<LocalizedText value="Open in Google Maps" />)
                    </span>
                    <ExternalLink className="mt-0.5 size-3.5 flex-none transition-transform group-hover/address:-translate-y-0.5 group-hover/address:translate-x-0.5" />
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </section>

      <section className="bg-white py-24 max-[820px]:py-16">
        <div className={`${container} rounded-[16px] border border-[#CFE4F4] bg-[#F0F8FE] px-14 py-14 max-[700px]:px-7 max-[700px]:py-10`}>
          <div className="flex items-center justify-between gap-12 max-[800px]:grid">
            <div className="max-w-[720px]">
              <p className="m-0 text-[0.74rem] font-black uppercase tracking-[0.13em] text-[#1288F8] [[lang=km]_&]:leading-[1.6] [[lang=km]_&]:tracking-normal">
                <LocalizedText value="Connect with Fast One" />
              </p>
              <h2 className="mb-0 mt-3 text-[2.65rem] font-black leading-[1.1] tracking-[-0.035em] text-[#06204A] [[lang=km]_&]:leading-[1.45] [[lang=km]_&]:tracking-normal max-[620px]:text-[2rem]">
                <LocalizedText value="Let's find the right connection for you." />
              </h2>
              <p className="mb-0 mt-4 leading-[1.7] text-[#55708D]">
                <LocalizedText value="Whether you are choosing home fiber or planning a business circuit, the Fast One team can help confirm availability and the right next step." />
              </p>
            </div>
            <a
              className="inline-flex min-h-12 flex-none items-center justify-center gap-2.5 rounded-[8px] bg-[#1288F8] px-6 font-black text-white shadow-[0_15px_32px_rgba(18,136,248,0.22)] transition hover:-translate-y-0.5 hover:bg-[#087CFA] max-[520px]:w-full"
              href={salesUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Headphones className="size-5" />
              <LocalizedText value="Contact sales" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
