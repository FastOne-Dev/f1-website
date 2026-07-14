import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import LocalizedText from "@/components/LocalizedText";
import { PlusIcon } from "lucide-react";
import { faqs } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function Faq() {
  return (
    <section className="text-[#061B46]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:py-24 py-8 flex flex-col gap-16">
        <div className="flex flex-col gap-4 items-center animate-in fade-in slide-in-from-top-10 duration-1000 delay-100 ease-in-out fill-mode-both">
          <Badge
            variant="outline"
            className="h-auto border-0 px-3 py-1 text-[0.76rem] font-black uppercase tracking-[0.12em] text-[#0066FF] outline outline-border"
          >
            FAQs
          </Badge>
          <h2 className="max-w-lg text-center text-[2.35rem] font-black leading-[1.1] tracking-[-0.025em] text-[#061B46] [[lang=km]_&]:font-bold [[lang=km]_&]:leading-[1.35] [[lang=km]_&]:tracking-normal max-[640px]:text-[1.85rem]">
            <LocalizedText
              value={{
                en: "Got questions? We’ve got answers ready",
                km: "មានសំណួរ? យើងមានចម្លើយសម្រាប់អ្នក",
              }}
            />
          </h2>
        </div>
        <div>
          <Accordion className="w-full flex flex-col gap-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={`item-${index}`}
                value={`item-${index}`}
                className={cn(
                  "p-6 border border-border rounded-2xl flex flex-col gap-3 group/item data-[open]:bg-accent transition-colors animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both",
                  index === 0 && "delay-100",
                  index === 1 && "delay-200",
                  index === 2 && "delay-300",
                  index === 3 && "delay-400",
                  index === 4 && "delay-500",
                )}
              >
                <AccordionTrigger className="cursor-pointer p-0 text-[1.02rem] font-black leading-[1.4] text-[#061B46] hover:no-underline [[lang=km]_&]:font-bold [[lang=km]_&]:leading-[1.7] **:data-[slot=accordion-trigger-icon]:hidden">
                  <LocalizedText value={faq.question} />
                  <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                </AccordionTrigger>
                <AccordionContent className="p-0 text-[0.95rem] font-normal leading-[1.7] text-[#526C8D] [[lang=km]_&]:leading-[1.9]">
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
