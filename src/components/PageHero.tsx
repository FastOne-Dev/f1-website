import Image from "next/image";
import type { ReactNode } from "react";
import LocalizedText, { type LocalizedString } from "@/components/LocalizedText";
import {
  eyebrow as eyebrowClass,
  heroEnterCopy,
  heroEnterVisual,
  sectionInner,
} from "@/lib/ui-classes";

type PageHeroProps = {
  eyebrow: LocalizedString;
  title: LocalizedString;
  copy: LocalizedString;
  imageSrc?: string;
  imageAlt?: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, copy, imageSrc, imageAlt = "", children }: PageHeroProps) {
  return (
    <section className="overflow-hidden border-b border-brand-border-subtle bg-brand-surface-hero">
      <div
        className={`${sectionInner} grid min-h-[520px] items-center gap-[52px] py-16 max-[980px]:min-h-0 max-[980px]:grid-cols-1 max-[980px]:gap-6 max-[980px]:py-[52px] ${
          imageSrc
            ? "grid-cols-[minmax(0,0.95fr)_minmax(320px,0.75fr)]"
            : "grid-cols-[minmax(0,760px)]"
        }`}
      >
        <div className={heroEnterCopy}>
          <p className={eyebrowClass}>
            <LocalizedText value={eyebrow} />
          </p>
          <h1 className="m-0 max-w-[760px] text-[3.65rem] leading-none text-brand-ink max-[980px]:text-[2.85rem] max-[640px]:text-[2.2rem]">
            <LocalizedText value={title} />
          </h1>
          <p className="mt-5 max-w-[640px] text-[1.08rem] leading-[1.65] text-brand-copy">
            <LocalizedText value={copy} />
          </p>
          {children && <div className="mt-[30px] flex flex-wrap gap-3">{children}</div>}
        </div>
        {imageSrc && (
          <div className={`${heroEnterVisual} flex min-h-[360px] items-center justify-center max-[640px]:min-h-[270px]`}>
            <Image
              className="h-auto w-[min(100%,520px)] object-contain"
              src={imageSrc}
              alt={imageAlt}
              width={760}
              height={560}
              priority
              quality={100}
              sizes="(max-width: 640px) calc(100vw - 28px), (max-width: 980px) min(720px, calc(100vw - 40px)), 520px"
            />
          </div>
        )}
      </div>
    </section>
  );
}
