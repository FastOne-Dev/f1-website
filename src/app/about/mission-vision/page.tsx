import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Eye,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Target,
} from "lucide-react";
import LocalizedText from "@/components/LocalizedText";
import { aboutDetailPages } from "@/lib/nav-page-content";
import { qualities } from "@/lib/site-data";

const mission = aboutDetailPages.mission;
const vision = aboutDetailPages.vision;

export const metadata: Metadata = {
  title: "Mission, Vision & Values | Fast One Cambodia",
  description:
    "Explore Fast One Cambodia's mission, vision, values, and commitment to reliable connectivity.",
};

const container =
  "mx-auto w-[min(1120px,calc(100%_-_64px))] max-[760px]:w-[calc(100%_-_32px)] max-[480px]:w-[calc(100%_-_24px)]";

const values = [
  { icon: ShieldCheck, ...vision.cards[0] },
  { icon: Lightbulb, ...vision.cards[1] },
  { icon: HeartHandshake, ...vision.cards[2] },
];

export default function MissionVisionPage() {
  return (
    <main className="bg-white text-[#061B46]">
      {/* 01 — Introduction */}
      <section className="relative isolate overflow-hidden bg-white py-[clamp(4.5rem,8vw,7.5rem)] text-[#061B46]">
        <div
          className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_24%,rgba(0,150,255,0.12),transparent_34%),linear-gradient(125deg,#ffffff_0%,#ffffff_58%,#f1f8ff_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 opacity-[0.3] [background-image:linear-gradient(rgba(0,102,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,.1)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_right,transparent,black_55%)]"
          aria-hidden="true"
        />
        <div className={container}>
          <div className="grid min-h-[570px] grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)] items-center gap-[clamp(3rem,7vw,7.5rem)] max-[900px]:min-h-0 max-[900px]:grid-cols-1">
            <div className="relative z-10 max-w-[650px]">
              <div className="flex items-center gap-3 text-[0.75rem] font-black uppercase tracking-[0.18em] text-[#0066FF] [[lang=km]_&]:tracking-normal">
                <span className="flex size-9 items-center justify-center rounded-full border border-[#0066FF]/15 bg-[#0066FF]/[0.07] text-[0.67rem] text-[#0066FF]">
                  01
                </span>
                <span>
                  <LocalizedText
                    value={{ en: "Our purpose", km: "គោលបំណងរបស់យើង" }}
                  />
                </span>
              </div>

              <h1 className="mb-0 mt-7 text-[clamp(3.15rem,5.5vw,5.15rem)] font-black leading-[0.98] tracking-[-0.055em] text-[#061B46] [text-wrap:balance] [[lang=km]_&]:font-bold [[lang=km]_&]:leading-[1.4] [[lang=km]_&]:tracking-normal max-[640px]:text-[2.65rem]">
                <LocalizedText
                  value={{
                    en: "Connection should move everyone forward.",
                    km: "ការតភ្ជាប់គួរតែនាំមនុស្សគ្រប់គ្នាឆ្ពោះទៅមុខ។",
                  }}
                />
              </h1>

              <p className="mb-0 mt-7 max-w-[570px] text-[1.08rem] leading-[1.72] text-[#526C8D] [[lang=km]_&]:leading-[1.9] max-[640px]:text-[0.98rem] max-[640px]:leading-[1.75]">
                <LocalizedText value={mission.copy} />
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#087CFA] px-6 text-[0.88rem] font-black text-white shadow-[0_12px_28px_rgba(0,102,255,0.28)] transition hover:-translate-y-0.5 hover:bg-[#168BFF]"
                  href="#mission-vision"
                >
                  Explore our direction
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <span className="inline-flex items-center px-3 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-[#7189A7]">
                  Cambodia · Connected
                </span>
              </div>
            </div>

            <div className="relative mx-auto h-[560px] w-full max-w-[500px] max-[900px]:h-[480px] max-[900px]:max-w-[620px] max-[560px]:h-[370px]">
              <div className="absolute inset-[6%_0_2%_8%] rounded-[2rem] border border-[#CFE4F8] bg-white/70 shadow-[0_28px_90px_rgba(8,57,111,0.12)] backdrop-blur-sm" />
              <div className="absolute left-0 top-[13%] z-10 flex items-center gap-3 rounded-2xl border border-[#D5E8F8] bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md">
                <span className="flex size-9 items-center justify-center rounded-xl bg-[#087CFA] text-white">
                  <Target className="size-4" />
                </span>
                <span>
                  <strong className="block text-[0.75rem] font-black uppercase tracking-[0.12em] text-[#061B46]">
                    Mission
                  </strong>
                  <small className="text-[0.72rem] text-[#607793]">
                    Access for everyone
                  </small>
                </span>
              </div>
              <div className="absolute bottom-[9%] right-[-2%] z-10 flex items-center gap-3 rounded-2xl border border-white/15 bg-white px-4 py-3 text-[#061B46] shadow-2xl">
                <span className="flex size-9 items-center justify-center rounded-xl bg-[#E7F5FF] text-[#087CFA]">
                  <Eye className="size-4" />
                </span>
                <span>
                  <strong className="block text-[0.75rem] font-black uppercase tracking-[0.12em]">
                    Vision
                  </strong>
                  <small className="text-[0.72rem] text-[#607793]">
                    A connected Cambodia
                  </small>
                </span>
              </div>
              <div className="relative h-full p-[8%]">
                <Image
                  className="object-contain drop-shadow-[0_30px_35px_rgba(0,0,0,0.25)]"
                  src="/img/mission-vision-test.png"
                  alt="A Cambodian network specialist helping a student and local business owner get connected"
                  fill
                  sizes="(max-width: 560px) calc(100vw - 48px), (max-width: 900px) 620px, 500px"
                  quality={82}
                  preload
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Mission and Vision */}
      <section
        id="mission-vision"
        className="relative scroll-mt-20 overflow-hidden bg-[#F5FAFF] py-20 max-[760px]:py-14"
      >
        <div className={container}>
          <div className="mx-auto max-w-[720px] text-center">
            <p className="m-0 text-[0.82rem] font-black uppercase tracking-[0.1em] text-[#0066FF] [[lang=km]_&]:tracking-normal">
              Mission &amp; Vision
            </p>

            <h2 className="mb-0 mt-3 text-[clamp(2rem,3.2vw,2.65rem)] font-black leading-[1.12] tracking-[-0.035em] text-[#061B46] [text-wrap:balance] [[lang=km]_&]:font-bold [[lang=km]_&]:leading-[1.4] [[lang=km]_&]:tracking-normal max-[640px]:text-[1.85rem]">
              <LocalizedText
                value={{
                  en: "One purpose. One direction.",
                  km: "គោលបំណងតែមួយ។ ទិសដៅតែមួយ។",
                }}
              />
            </h2>
          </div>

          <div className="relative mx-auto mt-10 min-h-[480px] max-w-[960px] max-[820px]:flex max-[820px]:min-h-0 max-[820px]:flex-col max-[820px]:gap-5">
            <div
              className="absolute left-1/2 top-1/2 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C9E0F7] max-[820px]:hidden"
              aria-hidden="true"
            />
            <div
              className="absolute left-1/2 top-1/2 size-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#BFD9EF] max-[820px]:hidden"
              aria-hidden="true"
            />

            <div className="absolute left-1/2 top-1/2 z-10 flex size-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center bg-transparent text-center max-[820px]:relative max-[820px]:left-auto max-[820px]:top-auto max-[820px]:mx-auto max-[820px]:translate-x-0 max-[820px]:translate-y-0">
              <Image
                className="h-auto w-[86px] drop-shadow-[0_12px_18px_rgba(0,122,168,0.16)]"
                src="/img/fastone_mini_logo.png"
                alt="Fast One"
                width={1143}
                height={864}
                sizes="86px"
              />
              <span className="mt-3 text-[0.72rem] font-black uppercase tracking-[0.14em] text-[#0066FF]/65 [[lang=km]_&]:tracking-normal">
                Our purpose
              </span>
            </div>

            <article className="absolute left-0 top-1/2 z-20 flex h-[430px] w-[42%] -translate-y-1/2 flex-col rounded-[8px] border border-[#D8E8F8] bg-white p-[clamp(1.25rem,2vw,1.75rem)] shadow-[0_16px_36px_rgba(13,39,77,0.07)] max-[820px]:relative max-[820px]:top-auto max-[820px]:mx-auto max-[820px]:h-auto max-[820px]:w-full max-[820px]:max-w-[580px] max-[820px]:translate-y-0">
              <div className="flex items-center justify-between mb-5">
                <span className="flex size-11 items-center justify-center rounded-[8px] bg-[#EAF6FF] text-[#0066FF]">
                  <Target className="size-5" />
                </span>
                <span className="text-[0.72rem] font-black uppercase tracking-[0.1em] text-[#0066FF] [[lang=km]_&]:tracking-normal">
                  Our Mission
                </span>
              </div>

              <h3 className="mb-0 mt-3 text-[clamp(1.75rem,2.35vw,2.15rem)] font-black leading-[1.1] tracking-[-0.035em] text-[#061B46] [text-wrap:balance] [[lang=km]_&]:font-bold [[lang=km]_&]:leading-[1.45] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={mission.title} />
              </h3>

              <p className="mb-0 mt-4 text-[0.94rem] leading-[1.6] text-[#526C8D] [[lang=km]_&]:leading-[1.9]">
                <LocalizedText value={mission.intro.copy} />
              </p>
            </article>

            <article className="absolute right-0 top-1/2 z-20 flex h-[430px] w-[42%] -translate-y-1/2 flex-col rounded-[8px] border border-[#D8E8F8] bg-white p-[clamp(1.25rem,2vw,1.75rem)] text-[#061B46] shadow-[0_16px_36px_rgba(13,39,77,0.07)] max-[820px]:relative max-[820px]:top-auto max-[820px]:mx-auto max-[820px]:h-auto max-[820px]:w-full max-[820px]:max-w-[580px] max-[820px]:translate-y-0">
              <div className="flex items-center justify-between mb-5">
                <span className="flex size-11 items-center justify-center rounded-[8px] bg-[#EAF6FF] text-[#0066FF]">
                  <Eye className="size-5" />
                </span>
                <span className="text-[0.72rem] font-black uppercase tracking-[0.1em] text-[#0066FF] [[lang=km]_&]:tracking-normal">
                  Our Vision
                </span>
              </div>

              <h3 className="mb-0 mt-3 text-[clamp(1.75rem,2.35vw,2.15rem)] font-black leading-[1.1] tracking-[-0.035em] text-[#061B46] [text-wrap:balance] [[lang=km]_&]:font-bold [[lang=km]_&]:leading-[1.45] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={vision.title} />
              </h3>

              <p className="mb-0 mt-4 text-[0.94rem] leading-[1.6] text-[#526C8D] [[lang=km]_&]:leading-[1.9]">
                <LocalizedText value={vision.intro.copy} />
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 03 — Values and progress */}
      <section className="overflow-hidden bg-white py-[100px] max-[640px]:py-[68px]">
        <div className={container}>
          <div className="flex items-end justify-between gap-10 max-[760px]:flex-col max-[760px]:items-start">
            <div>
              <div className="flex items-center gap-4 text-[0.76rem] font-black uppercase tracking-[0.16em] text-[#0066FF] [[lang=km]_&]:tracking-normal">
                <span>03</span>
                <span className="h-px w-10 bg-[#0066FF]" />
                <LocalizedText
                  value={{ en: "Our Values", km: "គុណតម្លៃរបស់យើង" }}
                />
              </div>

              <h2 className="mb-0 mt-5 max-w-[680px] text-[clamp(2.5rem,5vw,4.75rem)] font-black leading-[0.95] tracking-[-0.06em] text-[#061B46] [[lang=km]_&]:font-bold [[lang=km]_&]:leading-[1.35] [[lang=km]_&]:tracking-normal">
                <LocalizedText
                  value={{
                    en: "The principles behind every connection.",
                    km: "គោលការណ៍នៅពីក្រោយរាល់ការតភ្ជាប់។",
                  }}
                />
              </h2>
            </div>

            <p className="m-0 max-w-[350px] text-[0.96rem] leading-[1.8] text-[#526C8D] [[lang=km]_&]:leading-[1.9]">
              <LocalizedText
                value={{
                  en: "A clear set of values keeps our people, technology and progress moving in one direction.",
                  km: "គុណតម្លៃច្បាស់លាស់ជួយឱ្យមនុស្ស បច្ចេកវិទ្យា និងវឌ្ឍនភាពរបស់យើងឆ្ពោះទៅទិសដៅតែមួយ។",
                }}
              />
            </p>
          </div>

          <div className="relative mt-20">
            <span
              className="absolute left-[8%] right-[8%] top-8 h-px bg-gradient-to-r from-transparent via-[#9EC9F6] to-transparent max-[760px]:bottom-8 max-[760px]:left-8 max-[760px]:right-auto max-[760px]:top-8 max-[760px]:h-auto max-[760px]:w-px"
              aria-hidden="true"
            />

            <div className="grid grid-cols-3 gap-12 max-[760px]:grid-cols-1 max-[760px]:gap-10">
              {values.map(({ icon: Icon, title, text }, index) => (
                <article
                  className="group relative text-center max-[760px]:grid max-[760px]:grid-cols-[64px_1fr] max-[760px]:gap-6 max-[760px]:text-left"
                  key={typeof title === "string" ? title : title.en}
                >
                  <div className="relative z-10 mx-auto flex size-16 items-center justify-center rounded-full border-[6px] border-white bg-[#EAF4FF] text-[#0066FF] shadow-[0_12px_30px_rgba(0,102,255,0.16)] transition duration-300 group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white max-[760px]:mx-0">
                    <Icon className="size-5" />
                  </div>

                  <div>
                    <span className="mt-5 inline-block text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#8DA4BB] max-[760px]:mt-0">
                      Principle {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mb-0 mt-3 text-[1.3rem] font-black text-[#061B46] [[lang=km]_&]:font-bold [[lang=km]_&]:leading-[1.6]">
                      <LocalizedText value={title} />
                    </h3>

                    <p className="mx-auto mb-0 mt-3 max-w-[320px] text-[0.94rem] leading-[1.75] text-[#526C8D] [[lang=km]_&]:leading-[1.9] max-[760px]:mx-0 max-[760px]:max-w-[580px]">
                      <LocalizedText value={text} />
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative mt-20 overflow-hidden rounded-[30px] bg-[#F0F7FF] p-[clamp(1.5rem,4vw,3.5rem)]">
            <div
              className="absolute -right-24 -top-32 size-[420px] rounded-full border-[70px] border-[#0066FF]/[0.04]"
              aria-hidden="true"
            />

            <div className="relative grid grid-cols-[1fr_auto] items-center gap-10 max-[760px]:grid-cols-1">
              <div>
                <p className="m-0 text-[0.74rem] font-black uppercase tracking-[0.16em] text-[#0066FF]">
                  <LocalizedText
                    value={{ en: "Our progress", km: "វឌ្ឍនភាពរបស់យើង" }}
                  />
                </p>

                <h3 className="mb-0 mt-3 max-w-[650px] text-[clamp(1.65rem,3vw,2.8rem)] font-black leading-[1.08] tracking-[-0.04em] text-[#061B46] [[lang=km]_&]:leading-[1.45] [[lang=km]_&]:tracking-normal">
                  <LocalizedText
                    value={vision.closing?.title ?? vision.title}
                  />
                </h3>
              </div>

              <a
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#0066FF] px-6 font-black text-white transition hover:bg-[#1684FF] max-[480px]:w-full"
                href={mission.action.href}
                target="_blank"
                rel="noreferrer"
              >
                <LocalizedText value={mission.action.label} />
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="relative mt-10 grid grid-cols-3 overflow-hidden rounded-2xl border border-[#D6E8FA] bg-white max-[620px]:grid-cols-1">
              {qualities.map((quality, index) => (
                <article
                  className={`px-6 py-7 ${
                    index
                      ? "border-l border-[#D6E8FA] max-[620px]:border-l-0 max-[620px]:border-t"
                      : ""
                  }`}
                  key={quality.label}
                >
                  <span className="text-[clamp(2.2rem,4vw,3.5rem)] font-black leading-none tracking-[-0.05em] text-[#0066FF]">
                    {quality.value}
                  </span>

                  <p className="mb-0 mt-3 text-[0.88rem] font-bold text-[#526C8D]">
                    <LocalizedText value={quality.label} />
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
