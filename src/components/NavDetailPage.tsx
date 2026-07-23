import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight as ArrowIcon,
  Check as CheckIcon,
} from "lucide-react";
import LocalizedText, {
  type LocalizedString,
} from "@/components/LocalizedText";
import PageHero from "@/components/PageHero";
import type {
  DetailPageAction,
  DetailPageContent,
} from "@/lib/nav-page-content";
import {
  eyebrow,
  heading2,
  imagePanel,
  primaryButton,
  secondaryButton,
  section,
  sectionInner,
  softSection,
  splitHeading,
  splitLayout,
} from "@/lib/ui-classes";

type ActionLinkProps = {
  action: DetailPageAction;
  variant?: "primary" | "secondary";
};

function ActionLink({ action, variant = "primary" }: ActionLinkProps) {
  const className = variant === "primary" ? primaryButton : secondaryButton;
  const content = (
    <>
      <LocalizedText value={action.label} />
      <ArrowIcon />
    </>
  );

  if (action.external) {
    return (
      <a className={className} href={action.href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className={className} href={action.href}>
      {content}
    </Link>
  );
}

type NavDetailPageProps = {
  content: DetailPageContent;
};

function localizedKey(value: LocalizedString) {
  return typeof value === "string" ? value : value.en;
}

export default function NavDetailPage({ content }: NavDetailPageProps) {
  return (
    <main>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        copy={content.copy}
        imageSrc={content.imageSrc}
        imageAlt={content.imageAlt}
      >
        <ActionLink action={content.action} />
        {content.secondaryAction && (
          <ActionLink action={content.secondaryAction} variant="secondary" />
        )}
      </PageHero>

      <section className={section}>
        <div className={splitLayout}>
          <div>
            <p className={eyebrow}>
              <LocalizedText value={content.intro.eyebrow} />
            </p>
            <h2 className={splitHeading}>
              <LocalizedText value={content.intro.title} />
            </h2>
            <p className="mt-[18px] max-w-[620px] leading-[1.65] text-brand-copy">
              <LocalizedText value={content.intro.copy} />
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {content.highlights.map((item) => (
              <div
                className="flex min-h-14 items-center gap-2.5 rounded-[8px] bg-brand-soft p-3 font-extrabold text-brand-heading"
                key={localizedKey(item)}
              >
                <CheckIcon className="text-brand-accent" />
                <span>
                  <LocalizedText value={item} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={softSection}>
        <div className={`${sectionInner} grid grid-cols-3 gap-[18px] max-[980px]:grid-cols-1`}>
          {content.cards.map((card) => (
            <article
              className="min-h-[230px] rounded-[8px] border border-brand-border-subtle bg-white p-7"
              key={localizedKey(card.title)}
            >
              <h2 className="m-0 text-xl font-bold text-brand-heading">
                <LocalizedText value={card.title} />
              </h2>
              <p className="mt-[18px] leading-[1.6] text-brand-copy-secondary">
                <LocalizedText value={card.text} />
              </p>
            </article>
          ))}
        </div>
      </section>

      {content.closing && (
        <section className={section}>
          <div className={splitLayout}>
            <div>
              <p className={eyebrow}>
                <LocalizedText value={content.closing.eyebrow} />
              </p>
              <h2 className={heading2}>
                <LocalizedText value={content.closing.title} />
              </h2>
              <p className="mt-[18px] max-w-[620px] leading-[1.65] text-brand-copy">
                <LocalizedText value={content.closing.copy} />
              </p>
              {content.closing.action && (
                <div className="mt-[30px] flex flex-wrap gap-3">
                  <ActionLink action={content.closing.action} />
                </div>
              )}
            </div>
            {content.closing.imageSrc && (
              <div className={imagePanel}>
                <Image
                  className="h-auto max-h-[320px] w-[min(100%,560px)] object-contain"
                  src={content.closing.imageSrc}
                  alt={content.closing.imageAlt ?? ""}
                  width={640}
                  height={420}
                  quality={100}
                  sizes="(max-width: 640px) calc(100vw - 28px), (max-width: 980px) min(720px, calc(100vw - 40px)), 560px"
                />
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
