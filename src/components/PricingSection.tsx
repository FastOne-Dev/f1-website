"use client";

import { useState } from "react";
import {
  Briefcase as BriefcaseIcon,
  Check as CheckIcon,
  Crown as CrownIcon,
  Rocket as RocketIcon,
} from "lucide-react";
import LocalizedText from "@/components/LocalizedText";
import { plans, salesUrl } from "@/lib/site-data";
import { cx } from "@/lib/ui-classes";

const yearlyDiscount = 0.2;

const pricingPlanMeta = [
  {
    audience: "For everyday homes:",
    icon: RocketIcon,
  },
  {
    audience: "For busy households:",
    icon: BriefcaseIcon,
  },
  {
    audience: "For power users:",
    icon: CrownIcon,
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
    <section className="bg-white py-[92px] max-[640px]:py-[66px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="m-0 text-[2.4rem] font-black leading-[1.08] text-[#061B46] max-[640px]:text-[1.85rem]">
            <LocalizedText value="Choose your right" />{" "}
            <span className="text-[#0066FF]">
              <LocalizedText value="plan!" />
            </span>
          </h2>
          <p className="mx-auto mb-0 mt-5 max-w-[640px] text-[1.2rem] leading-[1.45] text-[#666A73] max-[640px]:text-[1rem]">
            <LocalizedText value="Select from best plans, ensuring a perfect match. Need more or less? Customize your subscription for a seamless fit!" />
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <div
              className="inline-flex items-center rounded-[8px] bg-white p-1 shadow-[0_10px_28px_rgba(15,23,42,0.06)]"
              aria-label="Billing frequency"
            >
              <button
                className={cx(
                  "inline-flex min-h-8 items-center rounded-[8px] px-3 text-[0.86rem] font-black transition",
                  billingCycle === "monthly"
                    ? "bg-[#F0F0F0] text-[#0066FF]"
                    : "text-[#061B46]",
                )}
                type="button"
                aria-pressed={billingCycle === "monthly"}
                onClick={() => setBillingCycle("monthly")}
              >
                <LocalizedText value="Monthly" />
              </button>
              <button
                className={cx(
                  "inline-flex min-h-8 items-center rounded-[8px] px-3 text-[0.86rem] font-black transition",
                  isYearly ? "bg-[#F0F0F0] text-[#0066FF]" : "text-[#061B46]",
                )}
                type="button"
                aria-pressed={isYearly}
                onClick={() => setBillingCycle("yearly")}
              >
                <LocalizedText value="Yearly" />
              </button>
            </div>
            <span className="inline-flex min-h-6 items-center rounded-full border border-[#0066FF] px-3 text-[0.8rem] font-bold text-[#0066FF]">
              <LocalizedText value={isYearly ? "20% off" : "Monthly rate"} />
            </span>
          </div>
        </div>

        <div className="mt-[78px] grid grid-cols-3 gap-6 px-12 max-[980px]:mt-12 max-[980px]:grid-cols-1">
          {plans.map((plan, index) => {
            const featured = index === 1;
            const meta = pricingPlanMeta[index];
            const Icon = meta.icon;
            const monthlyAmount = getPlanAmount(plan.price);
            const displayAmount = isYearly
              ? monthlyAmount * (1 - yearlyDiscount)
              : monthlyAmount;

            return (
              <article
                className={cx(
                  "relative grid min-h-[458px] overflow-hidden rounded-xl border bg-white p-6 text-[#061B46] shadow-[0_16px_38px_rgba(15,23,42,0.04)] max-[640px]:min-h-0",
                  featured
                    ? "border-2 border-[#061B46] shadow-[0_8px_18px_rgba(15,23,42,0.2)]"
                    : "border-[#D8D8D8]",
                )}
                key={plan.name}
              >
                <span className="pointer-events-none absolute -right-7 -top-9 h-[135px] w-[135px] rounded-full bg-[#f2f2f2]" />
                <div className="relative z-10 ">
                  <span className="absolute -right-1 -top-2 text-[#061B46]">
                    <Icon className="size-11" strokeWidth={1.4} />
                  </span>

                  <h3 className="m-0 pr-16 text-[1.48rem] font-black leading-none text-[#0066FF]">
                    <LocalizedText value={plan.name} />
                  </h3>

                  <div className="mt-6 flex items-end gap-1.5">
                    <span className="pb-[1.55rem] text-[1.1rem] font-medium leading-none text-[#59616D]">
                      $
                    </span>
                    <p className="m-0 text-[4.05rem] font-black leading-[0.82] tracking-normal text-[#061B46] max-[640px]:text-[3.45rem]">
                      {formatPlanAmount(displayAmount)}
                    </p>
                    <span className="mb-1.5 inline-flex min-h-6 items-center rounded-[8px] bg-[#E9E9E9] px-2.5 text-[0.76rem] font-black leading-none text-[#0066FF]">
                      <LocalizedText value={isYearly ? "20% off" : "Monthly"} />
                    </span>
                  </div>

                  <p className="mb-0 mt-6 text-[1rem] leading-[1.5] text-[#59616D]">
                    <LocalizedText
                      value={
                        isYearly
                          ? "per month, billed yearly"
                          : "per month, billed monthly"
                      }
                    />
                  </p>

                  <a
                    className={cx(
                      "mt-7 inline-flex min-h-8 w-full items-center justify-center rounded-[8px] px-4 text-[0.9rem] font-bold transition duration-150 hover:-translate-y-px",
                      featured
                        ? "bg-[#061B46] text-white hover:bg-black"
                        : "bg-[#E7E7E7] text-[#061B46] hover:bg-[#DCDCDC]",
                    )}
                    href={salesUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LocalizedText value="Purchase Now" />
                  </a>

                  <div className="mt-7">
                    <p className="m-0 text-[1.05rem] font-black leading-tight text-[#061B46]">
                      <LocalizedText value={meta.audience} />
                    </p>

                    <ul className="mt-6 grid gap-4 p-0">
                      {[`Up to ${plan.speed}`, ...plan.features].map(
                        (feature) => (
                          <li
                            className="flex items-start gap-3 text-[0.98rem] font-bold leading-[1.35] text-[#061B46]"
                            key={feature}
                          >
                            <CheckIcon className="mt-0.5 size-4 flex-none text-[#0066FF]" />
                            <LocalizedText value={feature} />
                          </li>
                        ),
                      )}
                    </ul>
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
