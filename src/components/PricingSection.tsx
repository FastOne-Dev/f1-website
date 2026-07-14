"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight as ArrowRightIcon,
  Check as CheckIcon,
  Sparkles as SparklesIcon,
} from "lucide-react";
import LocalizedText from "@/components/LocalizedText";
import { plans, salesUrl } from "@/lib/site-data";
import { cx } from "@/lib/ui-classes";

const yearlyDiscount = 0.2;

const pricingPlanMeta = [
  {
    audience: "For everyday homes:",
  },
  {
    audience: "For busy households:",
  },
  {
    audience: "For power users:",
  },
];

type BillingCycle = "monthly" | "yearly";

function getPlanAmount(price: string) {
  return Number(price.replace(/[^0-9.]/g, ""));
}

function formatPlanAmount(amount: number) {
  return Number.isInteger(amount) ? String(amount) : amount.toFixed(2);
}

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("yearly");
  const isYearly = billingCycle === "yearly";

  return (
    <section className="relative isolate overflow-hidden bg-[#F6FAFF] py-[104px] max-[640px]:py-[72px]">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[460px] w-[900px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/70 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 top-24 -z-10 size-[360px] rounded-full border-[70px] border-[#0066FF]/[0.035]" />

      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mx-auto max-w-[720px] text-center">
          {/* <p className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-[#CDE2FA] bg-white/80 px-4 py-2 text-[0.72rem] font-black uppercase tracking-[0.14em] text-[#0066FF] shadow-[0_8px_24px_rgba(6,27,70,0.05)] backdrop-blur-sm">
            <span className="size-2 rounded-full bg-[#008DFF] shadow-[0_0_0_4px_rgba(0,141,255,0.12)]" />
            <LocalizedText value="Home fiber plans" />
          </p> */}
          <h2 className="m-0 text-[clamp(2.15rem,4vw,3.35rem)] font-black leading-[1.04] tracking-[-0.04em] text-[#061B46]">
            <LocalizedText value="Choose your right" />{" "}
            <span className="text-[#0066FF]">
              <LocalizedText value="plan!" />
            </span>
          </h2>
          <p className="mx-auto mb-0 mt-5 max-w-[620px] text-[1.02rem] leading-[1.7] text-[#526C8D] max-[640px]:text-[0.95rem]">
            <LocalizedText value="Select from best plans, ensuring a perfect match. Need more or less? Customize your subscription for a seamless fit!" />
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div
              className="inline-flex items-center rounded-[12px] border border-[#D6E6F5] bg-white p-1.5 shadow-[0_10px_28px_rgba(6,27,70,0.07)]"
              aria-label="Billing frequency"
            >
              <button
                className={cx(
                  "inline-flex min-h-9 items-center rounded-[8px] px-4 text-[0.82rem] font-black transition",
                  billingCycle === "monthly"
                    ? "bg-[#061B46] text-white shadow-sm"
                    : "text-[#526C8D] hover:text-[#0066FF]",
                )}
                type="button"
                aria-pressed={billingCycle === "monthly"}
                onClick={() => setBillingCycle("monthly")}
              >
                <LocalizedText value="Monthly" />
              </button>
              <button
                className={cx(
                  "inline-flex min-h-9 items-center rounded-[8px] px-4 text-[0.82rem] font-black transition",
                  isYearly
                    ? "bg-[#061B46] text-white shadow-sm"
                    : "text-[#526C8D] hover:text-[#0066FF]",
                )}
                type="button"
                aria-pressed={isYearly}
                onClick={() => setBillingCycle("yearly")}
              >
                <LocalizedText value="Yearly" />
              </button>
            </div>
            <span className="inline-flex min-h-8 items-center rounded-full bg-[#E4F2FF] px-3.5 text-[0.76rem] font-black text-[#0066FF] ring-1 ring-inset ring-[#0066FF]/10">
              <LocalizedText value={isYearly ? "20% off" : "Monthly rate"} />
            </span>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-3 items-stretch gap-5 max-[980px]:mx-auto max-[980px]:max-w-[620px] max-[980px]:grid-cols-1">
          {plans.map((plan, index) => {
            const featured = index === 1;
            const meta = pricingPlanMeta[index];
            const monthlyAmount = getPlanAmount(plan.price);
            const displayAmount = isYearly
              ? monthlyAmount * (1 - yearlyDiscount)
              : monthlyAmount;

            return (
              <article
                className={cx(
                  "group relative grid min-h-[510px] overflow-hidden rounded-[20px] border bg-white p-7 text-[#061B46] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(6,27,70,0.13)] max-[640px]:min-h-0 max-[640px]:p-6",
                  featured
                    ? "border-[#0066FF] shadow-[0_22px_54px_rgba(0,102,255,0.16)]"
                    : "border-[#D9E7F4] shadow-[0_14px_38px_rgba(6,27,70,0.06)]",
                )}
                key={plan.name}
              >
                <span className={cx("absolute inset-x-0 top-0 h-1", featured ? "bg-[linear-gradient(90deg,#0066FF,#00B8F5)]" : "bg-[#DDE9F5]")} />
                <Image
                  className="pointer-events-none absolute -right-25 -top-15 h-auto w-[300px] select-none opacity-[0.09] transition duration-300 group-hover:scale-110 group-hover:opacity-[0.14]"
                  src="/img/fastone_mini_logo.png"
                  alt=""
                  width={190}
                  height={144}
                  aria-hidden="true"
                  draggable={false}
                />
                {/* {featured && (
                  <span className="pointer-events-none absolute right-5 top-5 z-20 inline-flex min-h-8 items-center gap-2 rounded-full border border-white/35 bg-[linear-gradient(135deg,#061B46_0%,#0066FF_70%,#00AEEF_100%)] px-3.5 text-[0.74rem] font-black tracking-[0.02em] text-white shadow-[0_10px_24px_rgba(0,102,255,0.28)]">
                    <SparklesIcon
                      className="size-3.5 fill-[#7EE7FF] text-[#7EE7FF]"
                      strokeWidth={1.8}
                    />
                    <LocalizedText value="Recommended" />
                  </span>
                )} */}
                
                <div className="relative z-10 flex h-full flex-col">
                  <h3 className="mb-0 mt-2 text-[1.7rem] font-black leading-none text-[#061B46]">
                    <LocalizedText value={plan.name} />
                  </h3>

                  <p className="mb-0 mt-2 text-[0.84rem] font-bold text-[#6A819B]">
                    <LocalizedText value={meta.audience} />
                  </p>

                  <div className="mt-7 flex items-end gap-1.5 border-b border-[#E3EDF6] pb-7">
                    <span className="pb-[1.2rem] text-[1.2rem] font-black leading-none text-[#0066FF]">
                      $
                    </span>
                    <p className="m-0 text-[3.75rem] font-black leading-[0.82] tracking-[-0.05em] text-[#061B46] max-[640px]:text-[3.35rem]">
                      {formatPlanAmount(displayAmount)}
                    </p>
                    <span className="mb-0.5 text-[0.76rem] font-bold leading-[1.3] text-[#71869E]">
                      <LocalizedText value={isYearly ? "per month, billed yearly" : "per month, billed monthly"} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col pt-6">
                    <ul className="m-0 grid list-none gap-3.5 p-0">
                      {[`Up to ${plan.speed}`, ...plan.features].map(
                        (feature) => (
                          <li
                            className="flex items-start gap-3 text-[0.9rem] font-bold leading-[1.45] text-[#36516F]"
                            key={feature}
                          >
                            <span className="mt-px flex size-5 flex-none items-center justify-center rounded-full bg-[#E8F4FF] text-[#0066FF]">
                              <CheckIcon className="size-3.5" strokeWidth={3} />
                            </span>
                            <LocalizedText value={feature} />
                          </li>
                        ),
                      )}
                    </ul>
                    <a
                      className={cx(
                        "mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] px-4 pt-px text-[0.9rem] font-black transition duration-150 hover:-translate-y-px",
                        featured
                          ? "bg-[#0066FF] text-white shadow-[0_12px_26px_rgba(0,102,255,0.24)] hover:bg-[#008DFF]"
                          : "border border-[#C8DCEC] bg-[#F5FAFF] text-[#061B46] hover:border-[#0066FF] hover:text-[#0066FF]",
                      )}
                      href={salesUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LocalizedText value="Learn More" />
                      <ArrowRightIcon className="size-4" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
