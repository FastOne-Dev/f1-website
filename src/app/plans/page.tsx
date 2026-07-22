import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Cable,
  Check,
  CircleDollarSign,
  Clock3,
  Gauge,
  Gamepad2,
  Headset,
  MapPin,
  MonitorPlay,
  Send,
  Wifi,
} from "lucide-react";
import Faq from "@/components/shadcn-space/blocks/faq-01/faq";
import LocalizedText from "@/components/LocalizedText";
import { plans, salesUrl } from "@/lib/site-data";
import { cx, sectionInner } from "@/lib/ui-classes";

export const metadata: Metadata = {
  title: "Home Internet Plans | Fast One Cambodia",
  description:
    "Compare Fast One home fiber plans from 35 to 100 Mbps and ask our team to confirm coverage and installation.",
};

const planMeta = [
  {
    icon: MonitorPlay,
    label: { en: "Everyday", km: "ប្រើប្រាស់ប្រចាំថ្ងៃ" },
    accent: "bg-[#67C9F3]",
    iconStyle: "bg-[#E8F8FF] text-[#087FB6]",
  },
  {
    icon: Gamepad2,
    label: { en: "Busy homes", km: "គេហដ្ឋានប្រើប្រាស់ច្រើន" },
    accent: "bg-[#0066FF]",
    iconStyle: "bg-[#EAF3FF] text-[#0066FF]",
  },
  {
    icon: Gauge,
    label: { en: "High demand", km: "តម្រូវការខ្ពស់" },
    accent: "bg-[#061B46]",
    iconStyle: "bg-[#E9EEF6] text-[#061B46]",
  },
] as const;

const sharedPlanBenefits = [
  { en: "Premium bandwidth", km: "បណ្ដាញគុណភាពខ្ពស់" },
  { en: "Router-ready setup", km: "ការរៀបចំសម្រាប់រ៉ោតទ័រ" },
  { en: "Local support", km: "ជំនួយក្នុងស្រុក" },
] as const;

const planTerms = [
  {
    icon: Clock3,
    value: { en: "3–5 days", km: "៣–៥ ថ្ងៃ" },
    title: { en: "Typical installation", km: "រយៈពេលដំឡើងជាទូទៅ" },
    text: {
      en: "After payment and coverage confirmation.",
      km: "បន្ទាប់ពីការទូទាត់ និងបញ្ជាក់ថាទីតាំងមានសេវា។",
    },
  },
  {
    icon: CircleDollarSign,
    value: { en: "$50", km: "$50" },
    title: { en: "Installation fee", km: "ថ្លៃដំឡើង" },
    text: {
      en: "The standard installation fee for home plans.",
      km: "ថ្លៃដំឡើងស្តង់ដារសម្រាប់កញ្ចប់គេហដ្ឋាន។",
    },
  },
  {
    icon: Cable,
    value: { en: "Over 350 m", km: "លើស ៣៥០ ម៉ែត្រ" },
    title: { en: "Long cable routes", km: "ផ្លូវខ្សែចម្ងាយឆ្ងាយ" },
    text: {
      en: "Additional cable charges apply.",
      km: "មានការគិតថ្លៃខ្សែបន្ថែម។",
    },
  },
] as const;

function getPlanSalesUrl(planName: string) {
  return `${salesUrl}?text=${encodeURIComponent(planName)}`;
}

export default function PlansPage() {
  return (
    <main className="overflow-x-clip bg-white text-[#061B46]">
      <section className="relative isolate overflow-hidden bg-[#F5FAFF] pb-[88px] pt-20 max-[820px]:pb-14 max-[820px]:pt-11">
        <div
          className="pointer-events-none absolute left-1/2 top-[-260px] -z-10 h-[560px] w-[1020px] -translate-x-1/2 rounded-full bg-[#D9ECFF]/80 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-40 top-10 -z-10 size-[430px] rounded-full border-[86px] border-[#0066FF]/[0.035]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-[-210px] -z-10 size-[390px] rounded-full bg-[#38BDF8]/10 blur-[90px]"
          aria-hidden="true"
        />

        <div className={sectionInner}>
          <div className="grid grid-cols-[minmax(0,0.92fr)_minmax(460px,1.08fr)] items-center gap-[clamp(42px,6vw,76px)] max-[980px]:grid-cols-1 max-[980px]:gap-11">
            <div>
              <p className="m-0 flex items-center gap-3 text-[0.8rem] font-black uppercase tracking-[0.14em] text-[#0066FF]">
                <span className="h-px w-9 bg-[#0066FF]" aria-hidden="true" />
                <LocalizedText
                  value={{ en: "Home fiber plans", km: "កញ្ចប់ហ្វាយបឺរសម្រាប់គេហដ្ឋាន" }}
                />
              </p>

              <h1 className="mb-0 mt-5 text-[clamp(2.65rem,5vw,4.25rem)] font-black leading-[1.02] tracking-[-0.045em] text-[#061B46] [text-wrap:balance] max-[640px]:text-[2.35rem] [[lang=km]_&]:leading-[1.35] [[lang=km]_&]:tracking-normal">
                <span className="block">
                  <LocalizedText
                    value={{ en: "Home internet,", km: "អ៊ីនធឺណិតសម្រាប់ផ្ទះ" }}
                  />
                </span>
                <span className="block text-[#0066FF]">
                  <LocalizedText
                    value={{ en: "made simple.", km: "សាមញ្ញ និងច្បាស់លាស់" }}
                  />
                </span>
              </h1>

              <p className="mb-0 mt-6 max-w-[550px] text-[1.02rem] leading-[1.75] text-[#526C8D] [[lang=km]_&]:leading-[1.9]">
                <LocalizedText
                  value={{
                    en: "Choose from three clear home plans. We’ll check your location, help you find the right speed, and guide your installation.",
                    km: "ជ្រើសរើសពីកញ្ចប់អ៊ីនធឺណិតផ្ទះចំនួនបីដែលមានតម្លៃច្បាស់លាស់។ យើងនឹងពិនិត្យទីតាំង ជួយអ្នកជ្រើសរើសល្បឿនសមស្រប និងណែនាំអំពីការដំឡើង។",
                  }}
                />
              </p>

              <div className="mt-8 flex flex-wrap gap-3 max-[520px]:grid">
                <a
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-[9px] bg-[#0066FF] px-6 text-[0.94rem] font-black text-white shadow-[0_16px_34px_rgba(0,102,255,0.28)] transition duration-150 hover:-translate-y-0.5 hover:bg-[#008DFF]"
                  href="#plans"
                >
                  <LocalizedText value={{ en: "Compare plans", km: "ប្រៀបធៀបកញ្ចប់" }} />
                  <ArrowRight className="size-[18px] transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-[9px] border border-[#BED8EB] bg-white px-6 text-[0.94rem] font-black text-[#061B46] transition duration-150 hover:-translate-y-0.5 hover:border-[#0066FF] hover:text-[#0066FF]"
                  href="/coverage"
                >
                  <LocalizedText value={{ en: "Check coverage", km: "ពិនិត្យតំបន់សេវា" }} />
                  <MapPin className="size-[18px] text-[#0066FF]" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D5E6F5] bg-white px-4 py-2 text-[0.78rem] font-bold text-[#365B80]">
                  <Wifi className="size-3.5 text-[#0066FF]" />
                  35–100 Mbps
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D5E6F5] bg-white px-4 py-2 text-[0.78rem] font-bold text-[#365B80]">
                  <CircleDollarSign className="size-3.5 text-[#0066FF]" />
                  <LocalizedText value={{ en: "From $15/month", km: "ចាប់ពី $15/ខែ" }} />
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D5E6F5] bg-white px-4 py-2 text-[0.78rem] font-bold text-[#365B80]">
                  <Headset className="size-3.5 text-[#0066FF]" />
                  <LocalizedText value={{ en: "Local support", km: "ជំនួយក្នុងស្រុក" }} />
                </span>
              </div>
            </div>

            <div className="relative isolate min-w-0">
              <div
                className="pointer-events-none absolute inset-[10%] -z-10 rounded-[42%] bg-white/95 blur-[42px]"
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute inset-x-[8%] bottom-[2%] -z-10 h-[28%] rounded-full bg-[#9DD8FF]/35 blur-[48px]" aria-hidden="true" />
              <div className="relative h-[520px] max-[980px]:h-[470px] max-[640px]:h-[390px]">
                <Image
                  className="object-contain object-center drop-shadow-[0_24px_32px_rgba(6,27,70,0.1)]"
                  src="/img/b-daniel.png"
                  alt=""
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 980px) 100vw, 50vw"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse 94% 94% at 50% 48%, black 64%, rgba(0, 0, 0, 0.94) 76%, rgba(0, 0, 0, 0.38) 90%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 94% 94% at 50% 48%, black 64%, rgba(0, 0, 0, 0.94) 76%, rgba(0, 0, 0, 0.38) 90%, transparent 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-[90px] bg-white py-[104px] max-[640px]:py-[68px]"
        id="plans"
      >
        <div className={sectionInner}>
          <div className="mx-auto max-w-[760px] text-center">
            <p className="m-0 flex items-center justify-center gap-3 text-[0.78rem] font-black uppercase tracking-[0.16em] text-[#0066FF]">
              <span className="h-px w-9 bg-[#0066FF]" aria-hidden="true" />
              <LocalizedText value={{ en: "Compare plans", km: "ប្រៀបធៀបកញ្ចប់" }} />
              <span className="h-px w-9 bg-[#0066FF]" aria-hidden="true" />
            </p>
            <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.15rem)] font-black leading-[1.08] tracking-[-0.035em] text-[#061B46] [text-wrap:balance] [[lang=km]_&]:leading-[1.4] [[lang=km]_&]:tracking-normal">
              <LocalizedText
                value={{
                  en: "Choose the speed that feels right at home.",
                  km: "ជ្រើសរើសល្បឿនដែលសមស្របសម្រាប់ផ្ទះរបស់អ្នក",
                }}
              />
            </h2>
            <p className="mx-auto mb-0 mt-5 max-w-[680px] text-[0.98rem] leading-[1.75] text-[#526C8D] [[lang=km]_&]:leading-[1.9]">
              <LocalizedText
                value={{
                  en: "Every plan comes with premium bandwidth, local support, and router-ready setup. Pick a starting point and our team will help confirm the fit.",
                  km: "គ្រប់កញ្ចប់មានបណ្ដាញគុណភាពខ្ពស់ ជំនួយក្នុងស្រុក និងការរៀបចំសម្រាប់រ៉ោតទ័រ។ ជ្រើសរើសកញ្ចប់មួយ ហើយក្រុមការងាររបស់យើងនឹងជួយបញ្ជាក់ភាពសមស្រប។",
                }}
              />
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[28px] border border-[#D5E6F5] bg-[#F2F8FD] p-2 shadow-[0_24px_64px_rgba(6,27,70,0.09)] max-[640px]:mt-9 max-[640px]:overflow-visible max-[640px]:rounded-none max-[640px]:border-0 max-[640px]:bg-transparent max-[640px]:p-0 max-[640px]:shadow-none">
            <div className="flex items-center justify-between gap-6 px-5 py-4 max-[820px]:items-start max-[820px]:flex-col max-[820px]:gap-3 max-[640px]:hidden">
              <div className="flex items-center gap-3">
                <span className="flex size-10 flex-none items-center justify-center rounded-[11px] bg-white text-[#0066FF] shadow-[0_7px_18px_rgba(6,27,70,0.07)] ring-1 ring-[#D9E7F3]">
                  <Wifi className="size-[18px]" />
                </span>
                <div>
                  <p className="m-0 text-[0.82rem] font-black text-[#173B65]">
                    <LocalizedText
                      value={{ en: "Included with every home plan", km: "មានក្នុងគ្រប់កញ្ចប់គេហដ្ឋាន" }}
                    />
                  </p>
                  <p className="mb-0 mt-0.5 text-[0.72rem] text-[#526C8D]">
                    <LocalizedText
                      value={{ en: "The speed changes. The service essentials stay.", km: "ល្បឿនខុសគ្នា ប៉ុន្តែសេវាសំខាន់ៗនៅដដែល" }}
                    />
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 max-[640px]:pl-1">
                {sharedPlanBenefits.map((benefit) => (
                  <span
                    className="inline-flex items-center gap-2 text-[0.75rem] font-bold text-[#365B80]"
                    key={benefit.en}
                  >
                    <span className="flex size-[18px] items-center justify-center rounded-full bg-white text-[#0066FF] ring-1 ring-[#CFE1F0]">
                      <Check className="size-3" strokeWidth={2.8} />
                    </span>
                    <LocalizedText value={benefit} />
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-2 max-[640px]:gap-3">
              {plans.map((plan, index) => {
                const meta = planMeta[index];
                const Icon = meta.icon;

                return (
                  <a
                    className="group relative grid min-h-[168px] grid-cols-[150px_150px_minmax(200px,1fr)_140px] items-center gap-6 overflow-hidden rounded-[20px] border border-[#DFEAF4] bg-white px-7 py-6 shadow-[0_9px_24px_rgba(6,27,70,0.035)] transition duration-200 hover:-translate-y-0.5 hover:border-[#8CCAF8] hover:bg-[#FBFDFF] hover:shadow-[0_18px_38px_rgba(6,27,70,0.09)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2 max-[980px]:min-h-0 max-[980px]:grid-cols-[minmax(0,1fr)_auto] max-[980px]:gap-x-5 max-[980px]:gap-y-4 max-[640px]:gap-x-4 max-[640px]:gap-y-4 max-[640px]:rounded-[20px] max-[640px]:border-[#D5E6F5] max-[640px]:px-5 max-[640px]:py-5 max-[640px]:shadow-[0_14px_34px_rgba(6,27,70,0.065)]"
                    href={getPlanSalesUrl(plan.name)}
                    target="_blank"
                    rel="noreferrer"
                    key={plan.name}
                  >
                    <span
                      className={cx(
                        "absolute inset-y-0 left-0 w-1.5 transition-all duration-200 group-hover:w-2",
                        meta.accent,
                      )}
                      aria-hidden="true"
                    />

                    <div className="max-[980px]:col-start-1 max-[980px]:row-start-1">
                      <div className="flex items-center gap-3">
                        <span
                          className={cx(
                            "flex size-11 flex-none items-center justify-center rounded-[12px] max-[640px]:size-10 max-[640px]:rounded-[10px]",
                            meta.iconStyle,
                          )}
                        >
                          <Icon className="size-5 max-[640px]:size-[18px]" />
                        </span>
                        <div>
                          <h3 className="m-0 text-[1.02rem] font-black text-[#061B46]">
                            <LocalizedText value={plan.name} />
                          </h3>
                          <p className="mb-0 mt-1 text-[0.7rem] font-bold text-[#607890]">
                            <LocalizedText value={meta.label} />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="max-[980px]:col-span-2 max-[980px]:col-start-1 max-[980px]:row-start-2 max-[640px]:rounded-[14px] max-[640px]:bg-[#F4F9FE] max-[640px]:px-4 max-[640px]:py-4">
                      <p className="m-0 whitespace-nowrap text-[3.2rem] font-black leading-none tracking-[-0.055em] text-[#061B46] max-[640px]:text-[2.7rem]">
                        {plan.speed.replace(" Mbps", "")}
                        <span className="ml-2 text-[0.8rem] font-black tracking-normal text-[#0066FF]">Mbps</span>
                      </p>
                    </div>

                    <div className="max-[980px]:col-span-2 max-[980px]:col-start-1 max-[980px]:row-start-3 max-[640px]:border-t max-[640px]:border-[#E1ECF5] max-[640px]:pt-4">
                      <p className="m-0 text-[0.7rem] font-black uppercase tracking-[0.1em] text-[#0066FF] max-[640px]:hidden">
                        <LocalizedText value={{ en: "Best for", km: "សមស្របសម្រាប់" }} />
                      </p>
                      <p className="mb-0 mt-2 max-w-[300px] text-[0.86rem] leading-[1.6] text-[#526C8D] [[lang=km]_&]:leading-[1.85] max-[980px]:max-w-none max-[640px]:mt-0">
                        <LocalizedText value={plan.note} />
                      </p>
                    </div>

                    <div className="flex min-h-[112px] min-w-[140px] flex-col items-center justify-center rounded-[16px] border border-[#CFE3F5] bg-[linear-gradient(145deg,#F4FAFF,#E8F4FF)] px-4 py-3 text-center shadow-[0_10px_24px_rgba(0,102,255,0.08)] transition duration-200 group-hover:border-[#8CCAF8] group-hover:shadow-[0_14px_30px_rgba(0,102,255,0.14)] max-[980px]:col-start-2 max-[980px]:row-start-1 max-[640px]:min-h-0 max-[640px]:min-w-0 max-[640px]:rounded-none max-[640px]:border-0 max-[640px]:bg-none max-[640px]:bg-transparent max-[640px]:p-0 max-[640px]:text-right max-[640px]:shadow-none">
                      <p className="m-0 whitespace-nowrap text-[2.55rem] font-black leading-none tracking-[-0.05em] text-[#0066FF] max-[640px]:text-[2.2rem]">
                        {plan.price}
                      </p>
                      <p className="mb-0 mt-1.5 text-[0.7rem] font-bold text-[#526C8D]">
                        <LocalizedText value={{ en: "per month", km: "ក្នុងមួយខែ" }} />
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[22px] border border-[#D7E7F5] bg-[#F5FAFF] shadow-[0_16px_40px_rgba(6,27,70,0.06)]">
            <div className="flex items-center gap-3 border-b border-[#D7E7F5] bg-white/70 px-6 py-4 max-[640px]:px-5">
              <span className="flex size-9 items-center justify-center rounded-[9px] bg-[#E8F4FF] text-[#0066FF]">
                <Cable className="size-[18px]" />
              </span>
              <div>
                <h3 className="m-0 text-[0.94rem] font-black text-[#061B46]">
                  <LocalizedText value={{ en: "Simple terms, shared upfront", km: "លក្ខខណ្ឌសាមញ្ញ បង្ហាញច្បាស់ជាមុន" }} />
                </h3>
                <p className="mb-0 mt-0.5 text-[0.76rem] font-medium text-[#526C8D]">
                  <LocalizedText
                    value={{
                      en: "Coverage and router setup are confirmed before activation.",
                      km: "តំបន់សេវា និងការរៀបចំរ៉ោតទ័រត្រូវបានបញ្ជាក់មុនពេលដំណើរការ។",
                    }}
                  />
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-[#D7E7F5] max-[740px]:grid-cols-1 max-[740px]:divide-x-0 max-[740px]:[&>*]:border-b max-[740px]:[&>*:last-child]:border-b-0">
              {planTerms.map((term) => (
                <article className="p-6 max-[640px]:p-5" key={term.title.en}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex size-10 items-center justify-center rounded-[10px] bg-white text-[#0066FF] shadow-[0_7px_18px_rgba(6,27,70,0.07)] ring-1 ring-[#DCEAF6]">
                      <term.icon className="size-[18px]" />
                    </span>
                    <span className="text-[1rem] font-black text-[#0066FF]">
                      <LocalizedText value={term.value} />
                    </span>
                  </div>
                  <h4 className="mb-0 mt-5 text-[0.9rem] font-black text-[#173B65]">
                    <LocalizedText value={term.title} />
                  </h4>
                  <p className="mb-0 mt-2 text-[0.78rem] leading-[1.6] text-[#526C8D] [[lang=km]_&]:leading-[1.85]">
                    <LocalizedText value={term.text} />
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <section className="bg-white py-[92px] max-[640px]:py-[64px]">
        <div className={sectionInner}>
          <div className="relative isolate overflow-hidden rounded-[24px] bg-[linear-gradient(112deg,#061B46_0%,#082E68_58%,#075A8F_100%)] px-[clamp(26px,5vw,58px)] py-[clamp(38px,5vw,54px)] text-white shadow-[0_28px_68px_rgba(6,27,70,0.24)]">
            <div
              className="pointer-events-none absolute -right-24 -top-32 -z-10 size-[330px] rounded-full bg-[#00AEEF]/22 blur-[85px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-32 left-[34%] -z-10 size-[290px] rounded-full bg-[#0066FF]/30 blur-[85px]"
              aria-hidden="true"
            />

            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-10 max-[900px]:grid-cols-1 max-[900px]:gap-7">
              <div>
                <div className="flex items-center gap-2.5 text-[0.75rem] font-black uppercase tracking-[0.15em] text-[#7DD3FC]">
                  <Headset className="size-4" />
                  <LocalizedText value={{ en: "Need a recommendation?", km: "ត្រូវការការណែនាំមែនទេ?" }} />
                </div>
                <h2 className="mb-0 mt-3 max-w-[680px] text-[clamp(1.9rem,3.5vw,2.75rem)] font-black leading-[1.14] tracking-[-0.025em] [text-wrap:balance] [[lang=km]_&]:leading-[1.45] [[lang=km]_&]:tracking-normal">
                  <LocalizedText
                    value={{
                      en: "Tell us how your home uses the internet.",
                      km: "ប្រាប់យើងពីរបៀបដែលផ្ទះរបស់អ្នកប្រើប្រាស់អ៊ីនធឺណិត",
                    }}
                  />
                </h2>
                <p className="mb-0 mt-4 max-w-[620px] text-[0.93rem] leading-[1.7] text-white/70 [[lang=km]_&]:leading-[1.9]">
                  <LocalizedText
                    value={{
                      en: "Share your location and the activities you use most. Fast One sales will help confirm coverage and a suitable plan.",
                      km: "ផ្ញើទីតាំង និងប្រាប់ពីសកម្មភាពដែលអ្នកប្រើញឹកញាប់។ ផ្នែកលក់ Fast One នឹងជួយបញ្ជាក់តំបន់សេវា និងកញ្ចប់សមស្រប។",
                    }}
                  />
                </p>
              </div>

              <div className="flex flex-col gap-3 max-[520px]:w-full">
                <a
                  className="group inline-flex min-h-12 min-w-[235px] items-center justify-center gap-3 rounded-[9px] bg-[#0066FF] px-6 text-[0.92rem] font-black text-white shadow-[0_16px_34px_rgba(0,102,255,0.34)] transition duration-150 hover:-translate-y-0.5 hover:bg-[#00AEEF] max-[520px]:min-w-0 max-[520px]:w-full"
                  href={salesUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Send className="size-[18px]" />
                  <LocalizedText value={{ en: "Ask Fast One sales", km: "សួរផ្នែកលក់ Fast One" }} />
                  <ArrowRight className="size-[18px] transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  className="inline-flex min-h-12 min-w-[235px] items-center justify-center gap-3 rounded-[9px] border border-white/25 bg-white/10 px-6 text-[0.9rem] font-black text-white transition duration-150 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/15 max-[520px]:min-w-0 max-[520px]:w-full"
                  href="/coverage"
                >
                  <MapPin className="size-[18px] text-[#7DD3FC]" />
                  <LocalizedText value={{ en: "Check coverage", km: "ពិនិត្យតំបន់សេវា" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
