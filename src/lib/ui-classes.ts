export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const section = "py-[92px] max-[640px]:py-[66px]";

export const softSection = `${section} bg-[#F8FAFC]`;

export const sectionInner =
  "mx-auto w-[min(1120px,calc(100%_-_80px))] max-[980px]:w-[min(100%_-_40px,720px)] max-[640px]:w-[min(100%_-_28px,560px)]";

export const eyebrow =
  "m-0 mb-3.5 text-[0.82rem] font-black uppercase text-[#0066FF]";

export const heading2 =
  "m-0 text-[2.4rem] leading-[1.08] text-[#081120] max-[640px]:text-[1.85rem]";

export const splitHeading =
  "m-0 max-w-[640px] text-[2.35rem] leading-[1.1] text-[#081120] max-[640px]:text-[1.85rem]";

export const bodyCopy = "m-0 text-[#0F172A]/80 leading-[1.65]";

export const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] font-extrabold transition duration-150 hover:-translate-y-px";

export const primaryButton =
  `${buttonBase} bg-[#0066FF] px-[18px] text-[#F8FAFC] hover:bg-[#00C2FF] max-[640px]:w-full`;

export const secondaryButton =
  `${buttonBase} border border-[#38BDF8] bg-[#F8FAFC]/75 px-[18px] text-[#081120] hover:border-[#0066FF] max-[640px]:w-full`;

export const sectionHeader =
  "mb-[34px] grid grid-cols-[minmax(0,0.85fr)_minmax(260px,0.55fr)] items-end gap-12 max-[980px]:grid-cols-1 max-[980px]:gap-[18px]";

export const sectionHeaderEyebrow =
  `${eyebrow} col-span-full -mb-7 max-[980px]:mb-0`;

export const sectionHeaderCopy = "m-0 text-[#0F172A]/80 leading-[1.65]";

export const splitLayout =
  `${sectionInner} grid grid-cols-[minmax(0,0.9fr)_minmax(320px,0.75fr)] items-center gap-[52px] max-[980px]:grid-cols-1`;

export const imagePanel =
  "flex min-h-[340px] items-center justify-center overflow-hidden rounded-[8px] bg-[#F8FAFC]";
