import Link from "next/link";
import {
  ArrowRight as ArrowRightIcon,
  CircleHelp as CircleHelpIcon,
  Headset as HeadsetIcon,
  Plus as PlusIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LocalizedText from "@/components/LocalizedText";
import { faqs } from "@/lib/site-data";

export default function Faq() {
  return (
    <section
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#F5FAFF] py-[104px] text-[#061B46] max-[640px]:py-[66px]"
      id="faq"
    >
      <div className="pointer-events-none absolute -left-40 top-12 -z-10 size-[440px] rounded-full bg-[#DCEEFF]/70 blur-[110px]" />
      <div className="pointer-events-none absolute -right-28 bottom-8 -z-10 size-[300px] rounded-full border-[54px] border-[#0066FF]/[0.035]" />

      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="grid grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)] items-start gap-[clamp(44px,7vw,96px)] max-[980px]:grid-cols-1">
          <div className="min-[981px]:sticky min-[981px]:top-[112px]">
            <p className="m-0 inline-flex min-h-9 items-center gap-2 rounded-full border border-[#C9E0F5] bg-white/80 px-3.5 text-[0.74rem] font-black text-[#0066FF] shadow-[0_8px_24px_rgba(6,27,70,0.05)] backdrop-blur-sm">
              <CircleHelpIcon className="size-4" strokeWidth={2.2} />
              <LocalizedText value="FAQ" />
            </p>

            <h2 className="mb-0 mt-5 max-w-[470px] text-[clamp(2.15rem,3.5vw,3.25rem)] font-black leading-[1.04] tracking-[-0.04em] text-[#061B46] [text-wrap:balance] [[lang=km]_&]:font-bold [[lang=km]_&]:leading-[1.35] [[lang=km]_&]:tracking-normal">
              <LocalizedText
                value={{
                  en: "Got questions? We’ve got answers ready",
                  km: "មានសំណួរ? យើងមានចម្លើយសម្រាប់អ្នក",
                }}
              />
            </h2>

            <p className="mb-0 mt-5 max-w-[470px] text-[1rem] leading-[1.75] text-[#526C8D] [[lang=km]_&]:leading-[1.9]">
              <LocalizedText value="Answers to common questions about coverage, installation, and plans." />
            </p>

            <div className="mt-8 flex max-w-[390px] items-center gap-4 rounded-[16px] border border-[#D2E5F5] bg-white p-4 shadow-[0_14px_34px_rgba(6,27,70,0.07)]">
              <span className="flex size-11 flex-none items-center justify-center rounded-[12px] bg-[#E9F5FF] text-[#0066FF]">
                <HeadsetIcon className="size-5" strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="m-0 text-[0.82rem] font-bold text-[#6A819B]">
                  <LocalizedText value="Still have questions?" />
                </p>
                <Link
                  className="mt-1 inline-flex items-center gap-2 text-[0.9rem] font-black text-[#0066FF] transition hover:gap-2.5 hover:text-[#008DFF] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF]/35"
                  href="/support"
                >
                  <LocalizedText value="Get support" />
                  <ArrowRightIcon className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          <Accordion
            className="w-full overflow-hidden rounded-[24px] border border-[#D3E4F2] bg-white shadow-[0_24px_60px_rgba(6,27,70,0.1)]"
            defaultValue={["item-0"]}
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={`item-${index}`}
                value={`item-${index}`}
                className="group/faq-item relative flex flex-col gap-0 border-[#DCEAF6] bg-white transition-colors duration-300 before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:origin-center before:scale-y-0 before:bg-[linear-gradient(180deg,#0066FF,#00B8F5)] before:transition-transform before:duration-300 data-open:bg-[linear-gradient(90deg,#F2F8FF_0%,#FFFFFF_72%)] data-open:before:scale-y-100"
              >
                <AccordionTrigger className="cursor-pointer items-center gap-4 border-0 px-6 py-5 text-[1.02rem] font-black leading-[1.45] text-[#061B46] hover:no-underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0066FF]/35 [[lang=km]_&]:font-bold [[lang=km]_&]:leading-[1.75] max-[640px]:min-h-16 max-[640px]:gap-3 max-[640px]:px-4 max-[640px]:py-4 **:data-[slot=accordion-trigger-icon]:hidden">
                  <span className="flex min-w-0 flex-1 items-center gap-4 max-[640px]:gap-3">
                    <span className="flex size-10 flex-none items-center justify-center rounded-[11px] bg-[#EAF5FF] text-[0.72rem] font-black text-[#0066FF] transition-colors duration-200 group-aria-expanded/accordion-trigger:bg-[#0066FF] group-aria-expanded/accordion-trigger:text-white max-[640px]:size-9">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <LocalizedText value={faq.question} />
                    </span>
                  </span>
                  <span className="flex size-10 flex-none items-center justify-center rounded-full border border-[#D4E5F3] bg-white text-[#0066FF] shadow-[0_6px_16px_rgba(6,27,70,0.06)] transition duration-200 group-aria-expanded/accordion-trigger:border-[#0066FF] group-aria-expanded/accordion-trigger:bg-[#0066FF] group-aria-expanded/accordion-trigger:text-white max-[640px]:size-9">
                    <PlusIcon className="size-5 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="max-w-[690px] pb-6 pl-[60px] pr-8 text-[0.95rem] font-normal leading-[1.75] text-[#526C8D] [[lang=km]_&]:leading-[1.95] max-[640px]:pb-5 max-[640px]:pl-12 max-[640px]:pr-4">
                  <LocalizedText value={faq.answer} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
