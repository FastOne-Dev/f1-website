import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Eye,
  Headphones,
  Home,
  MapPin,
  Network,
  Target,
} from "lucide-react";
import LocalizedText from "@/components/LocalizedText";
import { aboutDetailPages } from "@/lib/nav-page-content";
import { qualities, salesUrl } from "@/lib/site-data";

const content = aboutDetailPages.companyProfile;

export const metadata: Metadata = content.metadata;

const container =
  "mx-auto w-[min(1160px,calc(100%_-_80px))] max-[820px]:w-[calc(100%_-_40px)] max-[520px]:w-[calc(100%_-_28px)]";

const customerIcons = [Home, Building2, Network];

export default function CompanyProfilePage() {
  return (
    <main className="overflow-hidden bg-white text-[#081F46]">
      <section className="relative bg-[linear-gradient(135deg,#F5FBFF_0%,#EAF6FF_100%)] py-20 max-[820px]:py-14">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(#8CC8F8_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_right,transparent,black)]" />
        <div
          className={`${container} relative grid grid-cols-[1.05fr_0.95fr] items-center gap-16 max-[940px]:grid-cols-1 max-[940px]:gap-12`}
        >
          <div className="max-w-[650px]">
            <p className="m-0 text-[0.78rem] font-black uppercase tracking-[0.13em] text-[#087CFA]">
              <LocalizedText value={content.eyebrow} />
            </p>
            <h1 className="mb-0 mt-4 text-[3.8rem] font-black leading-[1.04] tracking-[-0.04em] text-[#061B46] [text-wrap:balance] max-[620px]:text-[2.65rem]">
              <LocalizedText value={content.title} />
            </h1>
            <p className="mb-0 mt-6 max-w-[600px] text-[1.06rem] leading-[1.7] text-[#526D8D]">
              <LocalizedText value={content.copy} />
            </p>
            <div className="mt-8 flex flex-wrap gap-3 max-[520px]:grid">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] bg-[#087CFA] px-6 font-black text-white shadow-[0_14px_28px_rgba(8,124,250,0.22)] transition hover:-translate-y-0.5 hover:bg-[#006DE8]"
                href={salesUrl}
                target="_blank"
                rel="noreferrer"
              >
                <LocalizedText value={content.action.label} />
                <ArrowRight className="size-5" />
              </a>
              <Link
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] border border-[#AFCDE5] bg-white px-6 font-black text-[#0B315E] transition hover:-translate-y-0.5 hover:border-[#087CFA]"
                href="/coverage"
              >
                <LocalizedText value="View coverage" />
                <MapPin className="size-5 text-[#087CFA]" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative min-h-[420px] overflow-hidden rounded-[18px] bg-[#D6EAFB] shadow-[0_24px_60px_rgba(7,41,86,0.16)] max-[620px]:min-h-[330px]">
              <Image
                className="object-cover object-center"
                src="/img/phnom_penh_photo.jpg"
                alt="Phnom Penh skyline and river"
                fill
                priority
                sizes="(max-width: 940px) 100vw, 46vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(4,27,65,0.78)_100%)]" />
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-5 text-white">
                <div>
                  <p className="m-0 text-[0.7rem] font-black uppercase tracking-[0.13em] text-[#84E0F6]">
                    <LocalizedText value="Fast One Cambodia" />
                  </p>
                  <p className="mb-0 mt-1.5 text-[1.15rem] font-black">
                    <LocalizedText value="Local network knowledge" />
                  </p>
                </div>
                <BadgeCheck className="size-7 flex-none text-[#84E0F6]" />
              </div>
            </div>
            <div className="absolute -left-7 -top-7 rounded-[12px] border border-[#C9E1F3] bg-white px-5 py-4 shadow-[0_16px_34px_rgba(7,41,86,0.12)] max-[620px]:-left-2 max-[620px]:-top-4">
              <strong className="block text-[1.75rem] font-black leading-none text-[#087CFA]">
                2010
              </strong>
              <span className="mt-1.5 block text-[0.72rem] font-bold text-[#627A95]">
                <LocalizedText value="Operating since" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#DCE9F4] bg-white">
        <div
          className={`${container} grid grid-cols-3 max-[620px]:grid-cols-1`}
        >
          {qualities.map((quality, index) => (
            <div
              className={`px-8 py-7 text-center ${index > 0 ? "border-l border-[#DCE9F4] max-[620px]:border-l-0 max-[620px]:border-t" : ""}`}
              key={quality.label}
            >
              <strong className="block text-[2rem] font-black leading-none text-[#061B46]">
                {quality.value}
              </strong>
              <span className="mt-2 block text-[0.78rem] font-black uppercase tracking-[0.08em] text-[#688099]">
                <LocalizedText value={quality.label} />
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 max-[820px]:py-16">
        <div
          className={`${container} grid grid-cols-[0.9fr_1.1fr] gap-20 max-[900px]:grid-cols-1 max-[900px]:gap-10`}
        >
          <div>
            <p className="m-0 text-[0.78rem] font-black uppercase tracking-[0.13em] text-[#087CFA]">
              <LocalizedText value={content.intro.eyebrow} />
            </p>
            <h2 className="mb-0 mt-4 text-[2.8rem] font-black leading-[1.1] tracking-[-0.035em] text-[#061B46] max-[620px]:text-[2.1rem]">
              <LocalizedText value={content.intro.title} />
            </h2>
            <p className="mb-0 mt-5 text-[1rem] leading-[1.72] text-[#536D8C]">
              <LocalizedText value={content.intro.copy} />
            </p>
          </div>
          <div className="grid gap-3">
            {content.highlights.map((highlight) => (
              <div
                className="flex items-center gap-4 rounded-[10px] border border-[#D7E7F4] bg-[#F8FBFE] p-5"
                key={typeof highlight === "string" ? highlight : highlight.en}
              >
                <span className="flex size-9 flex-none items-center justify-center rounded-full bg-[#E4F3FF] text-[#087CFA]">
                  <Check className="size-5" strokeWidth={3} />
                </span>
                <span className="font-bold leading-[1.45] text-[#173B65]">
                  <LocalizedText value={highlight} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F9FD] py-24 max-[820px]:py-16">
        <div className={container}>
          <div className="mx-auto max-w-[700px] text-center">
            <p className="m-0 text-[0.78rem] font-black uppercase tracking-[0.13em] text-[#087CFA]">
              <LocalizedText value="Who we serve" />
            </p>
            <h2 className="mb-0 mt-4 text-[2.65rem] font-black leading-[1.1] tracking-[-0.035em] text-[#061B46] max-[620px]:text-[2rem]">
              <LocalizedText value="Connectivity for every kind of customer." />
            </h2>
          </div>
          <div className="mt-11 grid grid-cols-3 gap-5 max-[860px]:grid-cols-1">
            {content.cards.map((card, index) => {
              const Icon = customerIcons[index];
              return (
                <article
                  className="rounded-[12px] border border-[#D5E6F3] bg-white p-8 shadow-[0_12px_30px_rgba(7,41,86,0.055)]"
                  key={
                    typeof card.title === "string" ? card.title : card.title.en
                  }
                >
                  <span className="flex size-12 items-center justify-center rounded-[10px] bg-[#E6F4FF] text-[#087CFA]">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mb-0 mt-7 text-[1.3rem] font-black text-[#061B46]">
                    <LocalizedText value={card.title} />
                  </h3>
                  <p className="mb-0 mt-3 leading-[1.68] text-[#58718D]">
                    <LocalizedText value={card.text} />
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 max-[820px]:py-16">
        <div
          className={`${container} grid grid-cols-2 overflow-hidden rounded-[16px] shadow-[0_20px_50px_rgba(7,41,86,0.12)] max-[760px]:grid-cols-1`}
        >
          <article className="bg-[#E9F6FF] p-12 max-[620px]:p-8">
            <span className="flex size-12 items-center justify-center rounded-[10px] bg-white text-[#087CFA] shadow-sm">
              <Target className="size-6" />
            </span>
            <p className="mb-0 mt-8 text-[0.76rem] font-black uppercase tracking-[0.12em] text-[#087CFA]">
              <LocalizedText value="Mission" />
            </p>
            <h2 className="mb-0 mt-3 text-[2rem] font-black leading-[1.15] text-[#061B46]">
              <LocalizedText value="Make high quality internet accessible." />
            </h2>
            <p className="mb-0 mt-4 leading-[1.68] text-[#526D8D]">
              <LocalizedText value={aboutDetailPages.mission.intro.copy} />
            </p>
            <Link
              className="mt-7 inline-flex items-center gap-2 font-black text-[#087CFA] hover:underline"
              href="/about/mission"
            >
              <LocalizedText value="Our mission" />
              <ArrowRight className="size-4" />
            </Link>
          </article>

          <article className="bg-[#061B46] p-12 text-white max-[620px]:p-8">
            <span className="flex size-12 items-center justify-center rounded-[10px] bg-white/10 text-[#70DFF6]">
              <Eye className="size-6" />
            </span>
            <p className="mb-0 mt-8 text-[0.76rem] font-black uppercase tracking-[0.12em] text-[#70DFF6]">
              <LocalizedText value="Vision" />
            </p>
            <h2 className="mb-0 mt-3 text-[2rem] font-black leading-[1.15]">
              <LocalizedText value="Bridge Cambodia's digital divide." />
            </h2>
            <p className="mb-0 mt-4 leading-[1.68] text-white/68">
              <LocalizedText value={aboutDetailPages.vision.intro.copy} />
            </p>
            <Link
              className="mt-7 inline-flex items-center gap-2 font-black text-[#70DFF6] hover:underline"
              href="/about/vision"
            >
              <LocalizedText value="Our vision" />
              <ArrowRight className="size-4" />
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-[#F4F9FD] pb-24 max-[820px]:pb-16">
        <div
          className={`${container} flex items-center justify-between gap-10 rounded-[16px] bg-[#087CFA] px-12 py-11 text-white shadow-[0_18px_42px_rgba(8,124,250,0.2)] max-[760px]:grid max-[620px]:px-7 max-[620px]:py-9`}
        >
          <div className="max-w-[720px]">
            <p className="m-0 text-[0.74rem] font-black uppercase tracking-[0.13em] text-[#BCEEFF]">
              <LocalizedText value="Fast One Cambodia" />
            </p>
            <h2 className="mb-0 mt-3 text-[2.15rem] font-black leading-[1.15] max-[620px]:text-[1.7rem]">
              <LocalizedText value="Let's find the right connection for you." />
            </h2>
            <p className="mb-0 mt-3 leading-[1.6] text-white/75">
              <LocalizedText value="Share your location and our team will confirm coverage and recommend the right next step." />
            </p>
          </div>
          <a
            className="inline-flex min-h-12 flex-none items-center justify-center gap-2.5 rounded-[8px] bg-white px-6 font-black text-[#087CFA] transition hover:-translate-y-0.5 max-[520px]:w-full"
            href={salesUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Headphones className="size-5" />
            <LocalizedText value="Contact sales" />
          </a>
        </div>
      </section>
    </main>
  );
}
