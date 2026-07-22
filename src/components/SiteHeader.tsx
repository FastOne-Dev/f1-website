"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness as CareerIcon,
  Building2 as CompanyIcon,
  Cable as CableIcon,
  ChevronDown as ChevronDownIcon,
  Globe2 as GlobeIcon,
  Headphones as HotlineIcon,
  MapPinned as CoverageIcon,
  MessageCircle as SocialIcon,
  Network as NetworkIcon,
  Target as MissionIcon,
  Wifi as WifiIcon,
  X as CloseIcon,
  Menu,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { type FocusEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { languages, useLanguage } from "@/lib/language";

const languageCopy = {
  en: {
    home: "Home",
    about: "About Us",
    companyProfile: "Company Profile",
    companyProfileDescription: "Learn about Fast One",
    missionVision: "Mission & Vision",
    missionVisionDescription: "Our purpose and direction",
    networkCoverage: "Network Coverage",
    networkCoverageDescription: "Coverage and availability",
    career: "Career",
    careerDescription: "Join Fast One",
    productService: "Product and Service",
    internetPackage: "Internet Package",
    internetPackageDescription: "Home internet plans",
    ipTransit: "IP Transit",
    ipTransitDescription: "Carrier-grade connectivity",
    dplc: "DPLC",
    dplcDescription: "Domestic private circuit",
    iplc: "IPLC",
    iplcDescription: "International private circuit",
    contact: "Contact Us",
    hotline: "Hotline",
    hotlineDescription: "Call Fast One support",
    socialMedia: "Social Media",
    socialMediaDescription: "Follow and message us",
  },
  km: {
    home: "ទំព័រដើម",
    about: "អំពីយើង",
    companyProfile: "ប្រវត្តិក្រុមហ៊ុន",
    companyProfileDescription: "ស្វែងយល់អំពី Fast One",
    missionVision: "បេសកកម្ម និងចក្ខុវិស័យ",
    missionVisionDescription: "គោលបំណង និងទិសដៅរបស់យើង",
    networkCoverage: "គ្របដណ្ដប់បណ្តាញ",
    networkCoverageDescription: "តំបន់សេវាកម្ម",
    career: "អាជីព",
    careerDescription: "ចូលរួមជាមួយ Fast One",
    productService: "ផលិតផល និងសេវាកម្ម",
    internetPackage: "កញ្ចប់អ៊ីនធឺណិត",
    internetPackageDescription: "គម្រោងអ៊ីនធឺណិតផ្ទះ",
    ipTransit: "IP Transit",
    ipTransitDescription: "ការតភ្ជាប់កម្រិតអាជីវកម្ម",
    dplc: "DPLC",
    dplcDescription: "ខ្សែឯកជនក្នុងស្រុក",
    iplc: "IPLC",
    iplcDescription: "ខ្សែឯកជនអន្តរជាតិ",
    contact: "ទំនាក់ទំនង",
    hotline: "លេខទូរស័ព្ទ",
    hotlineDescription: "ទូរស័ព្ទទៅផ្នែកជំនួយ",
    socialMedia: "បណ្ដាញសង្គម",
    socialMediaDescription: "តាមដាន និងផ្ញើសារ",
  },
} as const;

type CopyKey = keyof (typeof languageCopy)["en"];

type NavLinkDefinition = {
  labelKey: CopyKey;
  descriptionKey: CopyKey;
  href: string;
  icon: LucideIcon;
};

type NavLink = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

type DropdownKey = "about" | "productService" | "contact";
type MobileDropdownKey = "about" | "productService" | "contact";

const homeLink = { labelKey: "home", href: "/" } as const;

const aboutLinkDefinitions = [
  {
    labelKey: "companyProfile",
    descriptionKey: "companyProfileDescription",
    href: "/about/company-profile",
    icon: CompanyIcon,
  },
  {
    labelKey: "missionVision",
    descriptionKey: "missionVisionDescription",
    href: "/about/mission-vision",
    icon: MissionIcon,
  },
  {
    labelKey: "networkCoverage",
    descriptionKey: "networkCoverageDescription",
    href: "/coverage",
    icon: CoverageIcon,
  },
  {
    labelKey: "career",
    descriptionKey: "careerDescription",
    href: "/about/career",
    icon: CareerIcon,
  },
] satisfies NavLinkDefinition[];

const productServiceLinkDefinitions = [
  {
    labelKey: "internetPackage",
    descriptionKey: "internetPackageDescription",
    href: "/plans",
    icon: WifiIcon,
  },
  {
    labelKey: "ipTransit",
    descriptionKey: "ipTransitDescription",
    href: "/business/ip-transit",
    icon: NetworkIcon,
  },
  {
    labelKey: "dplc",
    descriptionKey: "dplcDescription",
    href: "/business/dplc",
    icon: CableIcon,
  },
  {
    labelKey: "iplc",
    descriptionKey: "iplcDescription",
    href: "/business/iplc",
    icon: GlobeIcon,
  },
] satisfies NavLinkDefinition[];

const contactLinkDefinitions = [
  {
    labelKey: "hotline",
    descriptionKey: "hotlineDescription",
    href: "/support/hotline",
    icon: HotlineIcon,
  },
  {
    labelKey: "socialMedia",
    descriptionKey: "socialMediaDescription",
    href: "/support/social-media",
    icon: SocialIcon,
  },
] satisfies NavLinkDefinition[];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(
    null,
  );
  const [activeMobileDropdown, setActiveMobileDropdown] =
    useState<MobileDropdownKey | null>("about");
  const [portalReady, setPortalReady] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = languageCopy[language];

  const aboutLinks = aboutLinkDefinitions.map((item) => ({
    label: t[item.labelKey],
    description: t[item.descriptionKey],
    href: item.href,
    icon: item.icon,
  }));
  const productServiceLinks = productServiceLinkDefinitions.map((item) => ({
    label: t[item.labelKey],
    description: t[item.descriptionKey],
    href: item.href,
    icon: item.icon,
  }));
  const contactLinks = contactLinkDefinitions.map((item) => ({
    label: t[item.labelKey],
    description: t[item.descriptionKey],
    href: item.href,
    icon: item.icon,
  }));

  useEffect(() => {
    function syncHash() {
      setCurrentHash(window.location.hash);
    }

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setPortalReady(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  function splitHref(href: string) {
    const [path, hash = ""] = href.split("#");
    return { path, hash: hash ? `#${hash}` : "" };
  }

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    const { path } = splitHref(href);
    return pathname.startsWith(path);
  }

  function isExactActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    const { path, hash } = splitHref(href);

    if (hash) {
      return pathname === path && currentHash === hash;
    }

    return pathname === path;
  }

  function isGroupActive(links: NavLink[]) {
    return links.some((item) => isActive(item.href));
  }

  function closeDesktopDropdown() {
    setActiveDropdown(null);

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  function dropdownGroupProps(key: DropdownKey) {
    return {
      onMouseEnter: () => setActiveDropdown(key),
      onMouseLeave: () => setActiveDropdown(null),
      onFocusCapture: () => setActiveDropdown(key),
      onBlurCapture: (event: FocusEvent<HTMLDivElement>) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setActiveDropdown(null);
        }
      },
    };
  }

  function navLinkClasses(active: boolean) {
    return cx(
      "relative inline-flex min-h-[38px] cursor-pointer items-center gap-[5px] px-[14px] text-[18px] transition-colors duration-200 focus-visible:outline-none",
      language === "km" ? "tracking-normal" : "tracking-[0.01em]",
      active
        ? "font-semibold text-white after:absolute after:bottom-[5px] after:left-4 after:right-4 after:h-[2px] after:rounded-full after:bg-[#38BDF8]"
        : "font-medium text-white/[0.78] after:absolute after:bottom-[5px] after:left-1/2 after:right-1/2 after:h-[2px] after:rounded-full after:bg-[#38BDF8] after:opacity-0 after:transition-all after:duration-200 hover:text-white hover:after:left-4 hover:after:right-4 hover:after:opacity-80 focus-visible:text-white focus-visible:after:left-4 focus-visible:after:right-4 focus-visible:after:opacity-80",
    );
  }

  function mobileLinkClasses(active: boolean) {
    return cx(
      "relative flex min-h-10 items-center rounded-[8px] border px-3 text-[0.92rem] transition-colors duration-150",
      language === "km" ? "tracking-normal" : "tracking-[0.005em]",
      active
        ? "border-white/15 bg-white/[0.12] font-semibold text-white shadow-[inset_3px_0_0_#38BDF8]"
        : "border-transparent font-medium text-white/80 hover:border-white/10 hover:bg-white/[0.09] hover:text-white",
    );
  }

  function mobileSectionButtonClasses(active: boolean, open = false) {
    return cx(
      "flex min-h-12 w-full items-center justify-between rounded-[8px] border px-3 text-left text-[1rem] font-semibold transition-colors duration-150",
      language === "km" ? "tracking-normal" : "tracking-[0.005em]",
      active
        ? "border-white/15 bg-white/[0.12] text-white shadow-[inset_3px_0_0_#38BDF8]"
        : open
          ? "border-white/10 bg-white/[0.08] text-white"
          : "border-transparent text-white/[0.84] hover:border-white/10 hover:bg-white/[0.09] hover:text-white",
    );
  }

  function renderMobileSection(
    key: MobileDropdownKey,
    label: string,
    links: NavLink[],
  ) {
    const open = activeMobileDropdown === key;
    const active = isGroupActive(links);

    return (
      <div>
        <button
          className={mobileSectionButtonClasses(active, open)}
          type="button"
          aria-expanded={open}
          onClick={() =>
            setActiveMobileDropdown((current) => (current === key ? null : key))
          }
        >
          <span>{label}</span>
          <ChevronDownIcon
            className={cx(
              "size-4 transition-transform duration-150",
              open && "rotate-180",
            )}
          />
        </button>
        <div className={cx("grid gap-1 pl-2", open ? "mt-1" : "hidden")}>
          {links.map((item) => (
            <Link
              className={mobileLinkClasses(isExactActive(item.href))}
              key={`${item.label}-mobile-drawer`}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  function renderDropdownLinks(links: NavLink[]) {
    return links.map((item) => {
      const Icon = item.icon;
      const active = isExactActive(item.href);

      return (
        <Link
          className={cx(
            "group grid min-h-[58px] grid-cols-[42px_minmax(0,1fr)] items-center gap-2.5 rounded-[10px] border p-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]/40",
            active
              ? "border-[#38BDF8]/30 bg-[#38BDF8]/[0.10]"
              : "border-transparent bg-transparent hover:border-[#38BDF8]/20 hover:bg-[#38BDF8]/[0.06]",
          )}
          key={`${item.label}-${item.href}`}
          href={item.href}
          onClick={closeDesktopDropdown}
        >
          <span
            className={cx(
              "inline-flex h-10 w-10 flex-none items-center justify-center rounded-[8px] transition-colors duration-150 [&_svg]:h-[18px] [&_svg]:w-[18px]",
              active
                ? "bg-[#0067AC] text-[#F8FAFC]"
                : "bg-[#0067AC]/10 text-[#0067AC] group-hover:bg-[#0067AC] group-hover:text-[#F8FAFC]",
            )}
          >
            <Icon />
          </span>
          <span>
            <strong
              className={cx(
                "block text-[0.9rem] font-semibold leading-tight text-[#081120]",
                language === "km" ? "tracking-normal" : "tracking-[0.005em]",
              )}
            >
              {item.label}
            </strong>
            <small className="mt-0.5 block text-[0.76rem] font-medium leading-tight text-[#0F172A]/70">
              {item.description}
            </small>
          </span>
        </Link>
      );
    });
  }

  const mobileDrawer = (
    <div
      className={cx(
        "fixed inset-0 z-[999] min-[981px]:hidden ",
        language === "km" ? "font-['Kantumruy_Pro',sans-serif]" : "font-sans",
        menuOpen ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!menuOpen}
    >
      <button
        className={cx(
          "absolute inset-0 cursor-default bg-[#081120]/20 backdrop-blur-sm transition-opacity duration-200 text-white",
          menuOpen ? "opacity-100" : "opacity-0",
        )}
        type="button"
        aria-label="Close navigation menu"
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={cx(
          "absolute bottom-0 right-0 top-0 flex w-[min(330px,calc(100vw-32px))] flex-col overflow-y-auto rounded-l-[8px] bg-[#04395c] p-5 shadow-2xl transition-transform duration-200 max-[420px]:w-[calc(100vw-28px)]",
          menuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            className="inline-flex min-w-0 items-center gap-2.5 font-extrabold"
            href="/"
            aria-label="Fast One home"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/img/Fast_One_Logo.png"
              alt=""
              width={36}
              height={30}
              className="h-auto w-36"
            />
          </Link>
          <button
            className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#0067AC] text-[#F8FAFC] transition-colors hover:bg-[#0067AC]"
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          >
            <CloseIcon className="size-5" />
          </button>
        </div>

        <nav className="grid" aria-label="Mobile navigation">
          <Link
            className={mobileSectionButtonClasses(isExactActive(homeLink.href))}
            href={homeLink.href}
            onClick={() => setMenuOpen(false)}
          >
            {t[homeLink.labelKey]}
          </Link>
          {renderMobileSection("about", t.about, aboutLinks)}
          {renderMobileSection(
            "productService",
            t.productService,
            productServiceLinks,
          )}
          {renderMobileSection("contact", t.contact, contactLinks)}
        </nav>

        <a
          className={cx(
            "mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-[8px] bg-[#0067AC] px-5 text-[0.95rem] font-semibold text-[#F8FAFC] transition-colors hover:bg-[#0067AC]",
            language === "km" ? "tracking-normal" : "tracking-[0.01em]",
          )}
          href="/support/hotline"
          onClick={() => setMenuOpen(false)}
        >
          {t.contact}
        </a>
      </div>
    </div>
  );

  return (
    <>
      <header
        className={cx(
          "sticky top-0 z-50 grid min-h-[74px] grid-cols-[minmax(180px,1fr)_auto_minmax(180px,1fr)] items-center gap-8 bg-gradient-to-r from-[#0067AC] to-[#01c7ea] px-[clamp(24px,8vw,124px)] antialiased backdrop-blur-[16px] max-[980px]:grid-cols-[minmax(0,1fr)_auto] max-[980px]:px-6 max-[640px]:min-h-[66px] max-[640px]:gap-3.5 max-[640px]:px-[18px]",
          language === "km" ? "font-['Kantumruy_Pro',sans-serif]" : "font-sans",
        )}
      >
        <Link
          className="inline-flex justify-self-start whitespace-nowrap"
          href="/"
          aria-label="Fast One home"
        >
          <span className="inline-flex w-[154px] flex-none items-center justify-center overflow-hidden rounded-[8px] max-[640px]:h-9 max-[640px]:w-[134px] max-[640px]:px-2.5">
            <Image
              src="/img/Fast_One_Logo.png"
              alt="Fast One"
              width={154}
              height={40}
              className="h-auto w-full"
              priority
            />
          </span>
        </Link>
        <nav
          className="flex items-center justify-self-center gap-10 max-[980px]:hidden"
          aria-label="Main navigation"
        >
          <Link
            className={navLinkClasses(isExactActive(homeLink.href))}
            href={homeLink.href}
          >
            {t[homeLink.labelKey]}
          </Link>
          <div className="relative" {...dropdownGroupProps("about")}>
            <button
              className={navLinkClasses(isGroupActive(aboutLinks))}
              type="button"
              aria-haspopup="true"
              aria-expanded={activeDropdown === "about"}
              onClick={() => setActiveDropdown("about")}
            >
              {t.about}
              <span
                className={cx(
                  "transition-transform duration-150 [&_svg]:h-3.5 [&_svg]:w-3.5",
                  activeDropdown === "about" && "rotate-180",
                )}
              >
                <ChevronDownIcon />
              </span>
            </button>
            <div
              className={cx(
                "absolute left-1/2 top-full w-[min(520px,calc(100vw-48px))] -translate-x-1/2 pt-2 transition-opacity duration-150",
                activeDropdown === "about"
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0",
              )}
            >
              <div className="rounded-[8px] border border-[#cbcbcb] bg-[#F8FAFC] p-2">
                <p
                  className={cx(
                    "m-0 border-b border-[#cbcbcb] px-[9px] pb-3.5 pt-[11px] text-[0.8rem] font-semibold uppercase text-[#0F172A]",
                    language === "km" ? "tracking-normal" : "tracking-[0.08em]",
                  )}
                >
                  {t.about}
                </p>
                <div className="grid grid-cols-2 gap-2 pt-3">
                  {renderDropdownLinks(aboutLinks)}
                </div>
              </div>
            </div>
          </div>
          <div className="relative" {...dropdownGroupProps("productService")}>
            <button
              className={navLinkClasses(isGroupActive(productServiceLinks))}
              type="button"
              aria-haspopup="true"
              aria-expanded={activeDropdown === "productService"}
              onClick={() => setActiveDropdown("productService")}
            >
              {t.productService}
              <span
                className={cx(
                  "transition-transform duration-150 [&_svg]:h-3.5 [&_svg]:w-3.5",
                  activeDropdown === "productService" && "rotate-180",
                )}
              >
                <ChevronDownIcon />
              </span>
            </button>
            <div
              className={cx(
                "absolute left-1/2 top-full w-[min(450px,calc(100vw-48px))] -translate-x-1/2 pt-2 transition-opacity duration-150",
                activeDropdown === "productService"
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0",
              )}
            >
              <div className="rounded-[8px] border border-[#cbcbcb] bg-[#F8FAFC] p-2">
                <p
                  className={cx(
                    "m-0 border-b border-[#cbcbcb] px-[9px] pb-3.5 pt-[11px] text-[0.8rem] font-semibold uppercase text-[#0F172A]",
                    language === "km" ? "tracking-normal" : "tracking-[0.08em]",
                  )}
                >
                  {t.productService}
                </p>
                <div className="grid grid-cols-2 gap-2 pt-3">
                  {renderDropdownLinks(productServiceLinks)}
                </div>
              </div>
            </div>
          </div>
          <div className="relative" {...dropdownGroupProps("contact")}>
            <button
              className={navLinkClasses(isGroupActive(contactLinks))}
              type="button"
              aria-haspopup="true"
              aria-expanded={activeDropdown === "contact"}
              onClick={() => setActiveDropdown("contact")}
            >
              {t.contact}
              <span
                className={cx(
                  "transition-transform duration-150 [&_svg]:h-3.5 [&_svg]:w-3.5",
                  activeDropdown === "contact" && "rotate-180",
                )}
              >
                <ChevronDownIcon />
              </span>
            </button>
            <div
              className={cx(
                "absolute left-1/2 top-full w-[min(240px,calc(100vw-48px))] -translate-x-1/2 pt-2 transition-opacity duration-150",
                activeDropdown === "contact"
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0",
              )}
            >
              <div className="rounded-[8px] border border-[#cbcbcb] bg-[#F8FAFC] p-2">
                <p
                  className={cx(
                    "m-0 border-b border-[#cbcbcb] px-[9px] pb-3.5 pt-[11px] text-[0.8rem] font-semibold uppercase text-[#0F172A]",
                    language === "km" ? "tracking-normal" : "tracking-[0.08em]",
                  )}
                >
                  {t.contact}
                </p>
                <div className="grid grid-cols-1 gap-2 pt-3">
                  {renderDropdownLinks(contactLinks)}
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex items-center justify-self-end gap-2.5">
          <div
            className="inline-flex items-center gap-3 px-1.5 py-1"
            aria-label="Language switcher"
          >
            {languages.map((item) => {
              return (
                <button
                  className={cx(
                    "inline-flex h-9 w-9 items-center justify-center rounded-full p-0.5 transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8FAFC]",
                    language === item.code
                      ? "bg-[#F8FAFC] ring-1 ring-[#F8FAFC]"
                      : "bg-[#38BDF8] opacity-80 hover:opacity-100",
                  )}
                  key={item.code}
                  type="button"
                  aria-label={`Switch to ${item.label}`}
                  aria-pressed={language === item.code}
                  title={item.label}
                  onClick={() => setLanguage(item.code)}
                >
                  <span className="inline-flex h-full w-full overflow-hidden rounded-full">
                    <Image
                      src={item.flagSrc}
                      alt={`${item.label} flag`}
                      width={36}
                      height={36}
                      className="h-full w-full object-cover"
                    />
                  </span>
                </button>
              );
            })}
          </div>
          {/* <a
            className={cx(
              "inline-flex min-h-[42px] items-center justify-center gap-2 rounded-[8px] bg-[#0cb7d5] px-5 text-[0.94rem] font-semibold text-[#F8FAFC] transition duration-150 hover:-translate-y-px max-[640px]:hidden",
              language === "km" ? "tracking-normal" : "tracking-[0.01em]",
            )}
            href="/support/hotline"
          >
            {t.hotline}
          </a> */}
          <button
            className="hidden h-10 w-10 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full border border-[#38BDF8] bg-[#F8FAFC] text-[#081120] max-[980px]:inline-flex"
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu className="h-5" />
          </button>
        </div>
      </header>
      {portalReady ? createPortal(mobileDrawer, document.body) : null}
    </>
  );
}
