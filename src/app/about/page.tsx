import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight as ArrowIcon } from "lucide-react";
import LocalizedText from "@/components/LocalizedText";
import PageHero from "@/components/PageHero";
import { qualities, salesUrl } from "@/lib/site-data";
import {
  eyebrow,
  primaryButton,
  section,
  sectionInner,
  softSection,
  splitHeading,
  splitLayout,
} from "@/lib/ui-classes";

export const metadata: Metadata = {
  title: "About Fast One | Internet Service Provider Cambodia",
  description: "Learn about Fast One Cambodia, its mission, vision, and local internet service focus.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Fast One"
        title="A local ISP focused on affordable, reliable internet."
        copy="FAST ONE (CAM), Co., Ltd. started operations in 2010 with the idea of offering reliable internet service to people and businesses looking for fair, accessible pricing."
        imageSrc="/img/fastone_mini_logo.png"
        imageAlt="Fast One logo mark"
      >
        <a className={primaryButton} href={salesUrl} target="_blank" rel="noreferrer">
          <LocalizedText value="Connect with us" />
          <ArrowIcon />
        </a>
      </PageHero>

      <section className={section} id="company-profile">
        <div className={splitLayout}>
          <div>
            <p className={eyebrow}>
              <LocalizedText value="Company profile" />
            </p>
            <h2 className={splitHeading}>
              <LocalizedText value="Proud to serve the communities where we live and work." />
            </h2>
            <p className="mt-[18px] max-w-[620px] leading-[1.65] text-[#0F172A]/80">
              <LocalizedText value="Fast One provides affordable and reliable internet service to help build Cambodia's digital community. The company serves homes, SMEs, enterprises, and organizations with both broadband and dedicated connectivity." />
            </p>
          </div>
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-[8px] border border-[#38BDF8] bg-[#38BDF8] max-[640px]:grid-cols-1">
            {qualities.map((quality) => (
              <div className="flex min-h-[130px] flex-col justify-center bg-[#081120] p-[22px] text-[#F8FAFC]" key={quality.label}>
                <strong className="text-[2rem] text-[#F8FAFC]">{quality.value}</strong>
                <span className="mt-2 font-extrabold text-[#38BDF8]">
                  <LocalizedText value={quality.label} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={softSection}>
        <div className={`${sectionInner} grid grid-cols-2 gap-[18px] max-[980px]:grid-cols-1`}>
          {[
            {
              id: "mission",
              eyebrow: "Mission",
              title: "Make high quality internet accessible.",
              copy: "To provide affordable, reliable, and high-quality internet services that connect communities, empower businesses, and help individuals fully participate in the digital world.",
            },
            {
              id: "vision",
              eyebrow: "Vision",
              title: "Bridge Cambodia's digital divide.",
              copy: "To be one of Cambodia's most trusted and innovative internet service providers, recognized for quality, reliability, and customer satisfaction.",
            },
            {
              id: "career",
              eyebrow: "Career",
              title: "Build Cambodia's connected future with us.",
              copy: "Fast One welcomes people who care about reliable networks, practical service, and helping homes and businesses stay connected.",
            },
          ].map((item) => (
            <article className="min-h-[330px] rounded-[8px] border border-[#38BDF8] bg-[#F8FAFC] p-8" id={item.id} key={item.eyebrow}>
              <p className={eyebrow}>
                <LocalizedText value={item.eyebrow} />
              </p>
              <h2 className="m-0 text-[2rem] leading-[1.1] text-[#081120]">
                <LocalizedText value={item.title} />
              </h2>
              <p className="mt-[18px] leading-[1.65] text-[#0F172A]/80">
                <LocalizedText value={item.copy} />
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative min-h-[360px] overflow-hidden">
        <Image className="object-cover" src="/img/phnom_penh_photo.jpg" alt="Phnom Penh city skyline and river" fill sizes="100vw" />
      </section>
    </main>
  );
}
