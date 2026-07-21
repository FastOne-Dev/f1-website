import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import CareerJobs from "@/components/CareerJobs";
import LocalizedText from "@/components/LocalizedText";
import { aboutDetailPages } from "@/lib/nav-page-content";
import { careerJobs } from "@/lib/career-jobs";
import { address, hrTelegramHandle, hrTelegramUrl, officeMapUrl } from "@/lib/site-data";
import { eyebrow as eyebrowClass, sectionInner } from "@/lib/ui-classes";

const content = aboutDetailPages.career;

export const metadata: Metadata = content.metadata;

export default function CareerPage() {
  return (
    <main className="overflow-x-clip bg-white text-[#061B46]">
      <section className="relative isolate overflow-hidden bg-[#F5FAFF] pb-16 pt-14 max-[820px]:pb-12 max-[820px]:pt-10">
        <div
          className="pointer-events-none absolute left-1/2 top-[-220px] -z-10 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/70 blur-[110px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-32 top-16 -z-10 size-[360px] rounded-full border-[70px] border-[#0066FF]/[0.035]"
          aria-hidden="true"
        />

        <div className={sectionInner}>
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-[56px] max-[980px]:grid-cols-1 max-[980px]:gap-10">
            <div>
              <p className="m-0 flex items-center gap-3 text-[0.8rem] font-black uppercase tracking-[0.14em] text-[#0066FF]">
                <span className="h-px w-9 bg-[#0066FF]" aria-hidden="true" />
                <LocalizedText value="Careers at Fast One" />
              </p>

              <h1 className="mb-0 mt-5 text-[clamp(2.6rem,5vw,4.15rem)] font-black leading-[1.03] tracking-[-0.04em] text-[#061B46] [text-wrap:balance] max-[640px]:text-[2.35rem] [[lang=km]_&]:leading-[1.35] [[lang=km]_&]:tracking-normal">
                <span className="block">
                  <LocalizedText
                    value={{ en: "Join Our Team,", km: "ចូលរួមជាមួយក្រុមការងាររបស់យើង" }}
                  />
                </span>
                <span className="block text-[#0066FF]">
                  <LocalizedText
                    value={{ en: "connect Cambodia.", km: "ដើម្បីអភិវឌ្ឍន៍កម្ពុជា" }}
                  />
                </span>
              </h1>

              <p className="mb-0 mt-5 max-w-[520px] text-[1.02rem] leading-[1.7] text-[#526C8D] [[lang=km]_&]:leading-[1.9]">
                <LocalizedText
                  value={{
                    en: "Bring your ideas, your curiosity, and your care for customers. Together, we build reliable connections for homes and businesses across Cambodia.",
                    km: "នាំយកគំនិត ការចង់ដឹងចង់ឃើញ និងការយកចិត្តទុកដាក់ចំពោះអតិថិជនរបស់អ្នក យើងរួមគ្នាកសាងការតភ្ជាប់ដែលអាចទុកចិត្តបានសម្រាប់គេហដ្ឋាន និងអាជីវកម្មទូទាំងកម្ពុជា",
                  }}
                />
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 max-[470px]:grid max-[470px]:gap-3">
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[8px] bg-[#0066FF] px-6 text-[0.95rem] font-black text-white shadow-[0_18px_36px_rgba(0,102,255,0.24)] transition duration-150 hover:-translate-y-px hover:bg-[#008DFF]"
                  href="#open-positions"
                >
                  <LocalizedText
                    value={{ en: "Explore open roles", km: "មើលតួនាទីកំពុងបើក" }}
                  />
                  <ArrowRight className="size-[18px]" />
                </a>
                <a
                  className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] border border-[#BED8EB] bg-white px-6 text-[0.95rem] font-black text-[#061B46] transition duration-150 hover:-translate-y-px hover:border-[#0066FF] hover:text-[#0066FF]"
                  href={hrTelegramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LocalizedText value={{ en: "Send your CV", km: "ផ្ញើ CV របស់អ្នក" }} />
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center rounded-full border border-[#D5E6F5] bg-white px-4 py-2 text-[0.78rem] font-bold text-[#365B80]">
                  <strong className="mr-1.5 font-black text-[#061B46]">
                    {careerJobs.length}
                  </strong>
                  <LocalizedText value={{ en: "open roles", km: "តួនាទីកំពុងបើក" }} />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D5E6F5] bg-white px-4 py-2 text-[0.78rem] font-bold text-[#365B80]">
                  <MapPin className="size-3.5 text-[#0066FF]" />
                  <LocalizedText value={{ en: "Phnom Penh HQ", km: "ការិយាល័យកណ្តាល ភ្នំពេញ" }} />
                </span>
              </div>
            </div>

            <div className="relative w-fit max-[980px]:hidden">
              <div
                className="pointer-events-none absolute -inset-x-6 -inset-y-6 -z-10 rounded-[28px] bg-[linear-gradient(140deg,#E3F2FF,#F5FAFF)]"
                aria-hidden="true"
              />
              <div className="rounded-[26px] bg-white p-4 shadow-[0_24px_64px_rgba(6,27,70,0.18)] ring-1 ring-[#0C254E]/[0.06] max-[640px]:p-3">
                <Image
                  className="h-[500px] w-auto rounded-[16px] max-[980px]:h-[440px] max-[640px]:h-[340px]"
                  src="/img/IMG_4890.png"
                  alt="Fast One colleagues collaborating around a laptop in a Phnom Penh office"
                  width={1969}
                  height={2679}
                  priority
                  quality={90}
                  sizes="(max-width: 640px) 70vw, 360px"
                />
              </div>

              <div className="absolute -right-3 -top-5 animate-[chip-float_5.5s_ease-in-out_infinite] max-[560px]:right-2 max-[560px]:top-2">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-[#8FCBFF] bg-[linear-gradient(135deg,#E3F2FF,#BFE0FF)] px-4 py-2.5 text-[0.8rem] font-black text-[#0053D6] shadow-[0_16px_38px_rgba(0,141,255,0.36)] ring-1 ring-white/60 backdrop-blur-md">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0066FF] text-white shadow-[0_4px_12px_rgba(0,102,255,0.5)]">
                    <Sparkles className="size-3.5" />
                  </span>
                  <LocalizedText
                    value={{ en: "We're hiring", km: "កំពុងជ្រើសរើសបុគ្គលិក" }}
                  />
                </span>
              </div>

              <div className="absolute -bottom-5 left-6 border-l border-t border-white/70 bg-white/95 px-5 py-3 shadow-[0_14px_30px_rgba(6,27,70,0.12)] backdrop-blur-sm max-[560px]:left-4 max-[560px]:px-4 max-[560px]:py-2.5">
                <p className="m-0 text-[0.64rem] font-black uppercase tracking-[0.14em] text-[#0066FF]">
                  <LocalizedText
                    value={{
                      en: "Local team · Real impact",
                      km: "ក្រុមការងារក្នុងស្រុក · ផលប៉ះពាល់ពិតប្រាកដ",
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CareerJobs />

      <section className="bg-[#F5FAFF] py-20 max-[820px]:py-14">
        <div className={`${sectionInner} mx-auto max-w-[760px] text-center`}>
          <p className={eyebrowClass}>
            <LocalizedText value={content.intro.eyebrow} />
          </p>
          <h2 className="m-0 mt-3 text-[clamp(1.7rem,3vw,2.5rem)] font-black leading-[1.18] tracking-[-0.02em] text-[#061B46] [text-wrap:balance]">
            <LocalizedText value={content.intro.title} />
          </h2>
          <p className="mx-auto mb-0 mt-4 max-w-[600px] text-[1rem] leading-[1.7] text-[#526C8D]">
            <LocalizedText value={content.intro.copy} />
          </p>
        </div>
      </section>

      {content.closing && (
        <section className="bg-[#F5FAFF] pb-20 max-[820px]:pb-14">
          <div className={sectionInner}>
            <div className="relative isolate overflow-hidden rounded-[20px] bg-[linear-gradient(115deg,#061B46_0%,#082E68_58%,#075A8F_100%)] px-[clamp(28px,5vw,64px)] py-[clamp(40px,5vw,58px)] text-white shadow-[0_28px_68px_rgba(6,27,70,0.28)]">
              <div
                className="pointer-events-none absolute -right-28 -top-40 -z-10 size-[380px] rounded-full bg-[#00AEEF]/20 blur-[90px]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -left-16 bottom-[-160px] -z-10 size-[320px] rounded-full bg-[#0066FF]/25 blur-[90px]"
                aria-hidden="true"
              />

              <div className="relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-12 max-[820px]:grid-cols-1 max-[820px]:gap-8">
                <div>
                  <p className="m-0 text-[0.75rem] font-black uppercase tracking-[0.16em] text-[#7DD3FC]">
                    <LocalizedText value={content.closing.eyebrow} />
                  </p>
                  <h2 className="mb-0 mt-3 max-w-[640px] text-[clamp(1.9rem,3.4vw,2.75rem)] font-black leading-[1.14] tracking-[-0.02em] [text-wrap:balance]">
                    <LocalizedText value={content.closing.title} />
                  </h2>
                  <p className="mb-0 mt-4 max-w-[600px] text-[0.95rem] leading-[1.7] text-white/70">
                    <LocalizedText value={content.closing.copy} />
                  </p>
                  {content.secondaryAction && (
                    <a
                      className="group mt-5 inline-flex items-center gap-2 text-[0.85rem] font-bold text-[#7DD3FC] underline decoration-[#7DD3FC]/50 underline-offset-4 transition hover:text-white"
                      href={content.secondaryAction.href}
                    >
                      <LocalizedText value={content.secondaryAction.label} />
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                </div>

                <div className="flex min-w-[250px] flex-col gap-3 max-[820px]:min-w-0 max-[820px]:flex-row max-[560px]:flex-col">
                  <a
                    className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] bg-[#0066FF] px-6 text-[0.9rem] font-black text-white shadow-[0_16px_34px_rgba(0,102,255,0.32)] transition duration-150 hover:-translate-y-px hover:bg-[#008DFF]"
                    href={hrTelegramUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Mail className="size-[17px]" />
                    <LocalizedText value={{ en: "Send your CV", km: "ផ្ញើ CV របស់អ្នក" }} />
                    <span className="sr-only"> — Telegram {hrTelegramHandle}</span>
                  </a>
                  <a
                    className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] border border-white/25 px-5 text-[0.88rem] font-black text-white transition duration-150 hover:-translate-y-px hover:border-[#7DD3FC] hover:text-[#7DD3FC]"
                    href={officeMapUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MapPin className="size-[17px]" />
                    <LocalizedText value="Visit our head office" />
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    <span className="sr-only"> — {address}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
