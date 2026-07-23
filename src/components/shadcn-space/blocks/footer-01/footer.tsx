"use client";

import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/lib/language";
import { socialUrls } from "@/lib/site-data";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa6";

const footerCopy = {
  en: {
    description:
      "Delivers reliable high-speed internet and business connectivity across Cambodia.",
    company: "Company",
    companyProfile: "Company Profile",
    missionVision: "Mission & Vision",
    networkCoverage: "Network Coverage",
    career: "Career",
    services: "Services",
    internetPackages: "Internet Packages",
    ipTransit: "IP Transit",
    dplc: "DPLC",
    iplc: "IPLC",
    hotlineSupport: "Hotline Support",
    location: "Location",
    address:
      "#29, Mao Tse Toung Blvd, Sangkat Toul Tompoung II, Khan Chamkarmorn, Phnom Penh",
    email: "Email",
    phone: "Phone",
    copyright: "©2026 Fast One (Cambodia). All Rights Reserved",
  },
  km: {
    description:
      "ផ្តល់ជូនសេវាអ៊ីនធឺណិតល្បឿនលឿនដែលអាចទុកចិត្តបាន និងការតភ្ជាប់អាជីវកម្មទូទាំងប្រទេសកម្ពុជា",
    company: "ក្រុមហ៊ុន",
    companyProfile: "ប្រវត្តិក្រុមហ៊ុន",
    missionVision: "បេសកកម្ម និងចក្ខុវិស័យ",
    networkCoverage: "តំបន់គ្របដណ្តប់",
    career: "អាជីព",
    services: "សេវាកម្ម",
    internetPackages: "កញ្ចប់អ៊ីនធឺណិត",
    ipTransit: "IP Transit",
    dplc: "DPLC",
    iplc: "IPLC",
    hotlineSupport: "ជំនួយតាមទូរស័ព្ទ",
    location: "ទីតាំង",
    address:
      "អគារលេខ ២៩, មហាវិថីម៉ៅសេទុង ភូមិ ៣, សង្កាត់ទូលទំពូង ២, ខណ្ឌចំការមន, រាជធានីភ្នំពេញ",
    email: "អ៊ីមែល",
    phone: "ទូរស័ព្ទ",
    copyright: "©2026 Fast One (Cambodia). រក្សាសិទ្ធិគ្រប់យ៉ាង",
  },
} as const;

type FooterCopyKey = keyof (typeof footerCopy)["en"];

type FooterData = {
  titleKey: FooterCopyKey;
  links: {
    titleKey: FooterCopyKey;
    href: string;
  }[];
};

const footerSections: FooterData[] = [
  {
    titleKey: "company",
    links: [
      {
        titleKey: "companyProfile",
        href: "/about/company-profile",
      },
      {
        titleKey: "missionVision",
        href: "/about/mission-vision",
      },
      {
        titleKey: "networkCoverage",
        href: "/coverage",
      },
      {
        titleKey: "career",
        href: "/about/career",
      },
    ],
  },
  {
    titleKey: "services",
    links: [
      {
        titleKey: "internetPackages",
        href: "/plans",
      },
      {
        titleKey: "ipTransit",
        href: "/business/ip-transit",
      },
      {
        titleKey: "dplc",
        href: "/business/dplc",
      },
      {
        titleKey: "iplc",
        href: "/business/iplc",
      },
      {
        titleKey: "hotlineSupport",
        href: "/support/hotline",
      },
    ],
  },
];

const Footer = () => {
  const { language } = useLanguage();
  const t = footerCopy[language];
  const bodyTextClass = "text-[0.98rem] leading-[1.6]";
  const socialLinkClass =
    "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/80 transition-colors hover:border-white/45 hover:bg-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none";

  return (
    <footer className="bg-gradient-to-r from-brand-primary to-brand-primary-hover py-6 text-white">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto ">
        <div className="flex flex-col gap-6  ">
          <div className="py-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-12 gap-x-6 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full lg:col-span-4">
              <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-10 animation-duration-1000 delay-100 ease-in-out fill-mode-both motion-reduce:animate-none">
                {/* Logo */}
                <Link href="/" aria-label="Fast One home">
                  <Image
                    src="/img/Fast_One_Logo.png"
                    alt="Fast One"
                    width={200}
                    height={52}
                    className="h-auto w-50 object-contain"
                    quality={100}
                    sizes="200px"
                  />
                </Link>

                <p className={`${bodyTextClass} font-normal text-white/80`}>
                  {t.description}
                </p>

                {/* social links */}
                <div className="flex items-center gap-2">
                  <a
                    href={socialUrls.facebook}
                    aria-label="Facebook"
                    className={socialLinkClass}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaFacebook className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href={socialUrls.instagram}
                    aria-label="Instagram"
                    className={socialLinkClass}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaInstagram className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href={socialUrls.linkedin}
                    aria-label="LinkedIn"
                    className={socialLinkClass}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaLinkedinIn className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href={socialUrls.telegram}
                    aria-label="Telegram"
                    className={socialLinkClass}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaTelegram className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href={socialUrls.tiktok}
                    aria-label="TikTok"
                    className={socialLinkClass}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaTiktok className="h-4.5 w-4.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-1 lg:block hidden "></div>

            {footerSections.map(({ titleKey, links }) => (
              <div key={titleKey} className="col-span-2 ">
                <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-10 animation-duration-1000 delay-100 ease-in-out fill-mode-both motion-reduce:animate-none">
                  <p className="text-lg font-semibold text-white">
                    {t[titleKey]}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {links.map(({ titleKey, href }) => (
                      <li key={titleKey}>
                        <Link
                          href={href}
                          className={`${bodyTextClass} font-normal text-white/80 hover:text-white`}
                        >
                          {t[titleKey]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="col-span-3">
              <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-10 animation-duration-1000 delay-100 ease-in-out fill-mode-both motion-reduce:animate-none">
                <p className="text-lg font-semibold text-white">{t.location}</p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a
                      href="https://maps.app.goo.gl/H4gJkNtFVhPhi8db8"
                      target="_blank"
                      rel="noreferrer"
                      className={`block ${bodyTextClass} font-normal text-white/80 hover:text-white`}
                    >
                      {t.address}
                    </a>
                  </li>
                  <li
                    className={`flex flex-wrap items-baseline gap-x-1 gap-y-1 ${bodyTextClass} text-white/80`}
                  >
                    <span className="shrink-0 font-semibold text-white">
                      {t.email}:
                    </span>
                    <a
                      href="mailto:fastone_info@fastone.com.kh"
                      className="min-w-0 break-all font-normal hover:text-white"
                    >
                      fastone_info@fastone.com.kh
                    </a>
                  </li>
                  <li
                    className={`flex flex-wrap items-baseline gap-x-1 gap-y-1 ${bodyTextClass} text-white/80`}
                  >
                    <span className="shrink-0 font-semibold text-white">
                      {t.phone}:
                    </span>
                    <a
                      href="tel:+85589222551"
                      className="font-normal hover:text-white"
                    >
                      089 222 551
                    </a>{" "}
                    /{" "}
                    <a
                      href="tel:+85569709900"
                      className="font-normal hover:text-white"
                    >
                      069 709 900
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator orientation="horizontal" className="bg-white/25" />
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-sm font-normal text-white/75 animate-in fade-in slide-in-from-bottom-10 animation-duration-1000 delay-100 ease-in-out fill-mode-both motion-reduce:animate-none">
            <p className="m-0">{t.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
