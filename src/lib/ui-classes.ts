export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const heroEnterCopy =
  "animate-in fade-in slide-in-from-left-6 animation-duration-700 ease-out fill-mode-both motion-reduce:animate-none";

export const heroEnterVisual =
  "animate-in zoom-in-95 slide-in-from-right-4 animation-duration-700 delay-150 ease-out fill-mode-both motion-reduce:animate-none";

export const heroEnterUp =
  "animate-in fade-in slide-in-from-bottom-6 animation-duration-700 ease-out fill-mode-both motion-reduce:animate-none";

export const section = "py-[92px] max-[640px]:py-[66px]";

export const softSection = `${section} bg-brand-surface-soft`;

export const sectionInner =
  "mx-auto w-[min(1120px,calc(100%_-_80px))] max-[980px]:w-[min(100%_-_40px,720px)] max-[640px]:w-[min(100%_-_28px,560px)]";

export const eyebrow =
  "m-0 mb-3.5 text-[0.82rem] font-black uppercase text-brand-accent";

export const heading2 =
  "m-0 text-[2.4rem] leading-[1.08] text-brand-ink max-[640px]:text-[1.85rem]";

export const splitHeading =
  "m-0 max-w-[640px] text-[2.35rem] leading-[1.1] text-brand-ink max-[640px]:text-[1.85rem]";

export const bodyCopy = "m-0 leading-[1.65] text-brand-copy";

export const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] font-extrabold transition duration-150 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2";

export const primaryButton =
  `${buttonBase} bg-brand-primary px-[18px] text-white shadow-[0_16px_34px_rgba(0,103,172,0.2)] hover:bg-brand-primary-hover max-[640px]:w-full`;

export const secondaryButton =
  `${buttonBase} border border-brand-border bg-white/70 px-[18px] text-brand-link hover:border-brand-border-hover hover:bg-white max-[640px]:w-full`;

export const sectionHeader =
  "mb-[34px] grid grid-cols-[minmax(0,0.85fr)_minmax(260px,0.55fr)] items-end gap-12 max-[980px]:grid-cols-1 max-[980px]:gap-[18px]";

export const sectionHeaderEyebrow =
  `${eyebrow} col-span-full -mb-7 max-[980px]:mb-0`;

export const sectionHeaderCopy = "m-0 leading-[1.65] text-brand-copy";

export const splitLayout =
  `${sectionInner} grid grid-cols-[minmax(0,0.9fr)_minmax(320px,0.75fr)] items-center gap-[52px] max-[980px]:grid-cols-1`;

export const imagePanel =
  "flex min-h-[340px] items-center justify-center overflow-hidden rounded-[8px] bg-brand-surface-hero";
