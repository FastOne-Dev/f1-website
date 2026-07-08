import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa6";

type FooterData = {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
};

const footerSections: FooterData[] = [
  {
    title: "Company",
    links: [
      {
        title: "Company Profile",
        href: "/about/company-profile",
      },
      {
        title: "Mission",
        href: "/about/mission",
      },
      {
        title: "Vision",
        href: "/about/vision",
      },
      {
        title: "Network Coverage",
        href: "/coverage",
      },
      {
        title: "Career",
        href: "/about/career",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        title: "Internet Packages",
        href: "/plans",
      },
      {
        title: "IP Transit",
        href: "/business/ip-transit",
      },
      {
        title: "DPLC",
        href: "/business/dplc",
      },
      {
        title: "IPLC",
        href: "/business/iplc",
      },
      {
        title: "Hotline Support",
        href: "/support/hotline",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-[#38BDF8] bg-gradient-to-r from-[#0067AC] to-[#01c7ea] py-6 text-white">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto ">
        <div className="flex flex-col gap-6  ">
          <div className="py-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-12 gap-x-6 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full lg:col-span-4">
              <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                {/* Logo */}
                <Link href="/" aria-label="Fast One home">
                  <Image
                    src="/img/Fast_One_Logo.png"
                    alt="Fast One"
                    width={64}
                    height={64}
                    className="h-15 w-50 object-contain"
                  />
                </Link>

                <p className="text-base font-normal text-white/80">
                  Delivers reliable high-speed internet and business
                  connectivity across Cambodia.
                </p>

                {/* social links */}
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.facebook.com/Fastonecambodia"
                    aria-label="Facebook"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/80 transition-colors hover:border-white/45 hover:bg-white/20 hover:text-white"
                  >
                    <FaFacebook className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href="https://www.instagram.com/fastonecambodia?igsh=cHE4Z215NHBpaGJ2"
                    aria-label="Instagram"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/80 transition-colors hover:border-white/45 hover:bg-white/20 hover:text-white"
                  >
                    <FaInstagram className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/fastonecambodia/posts/?feedView=all"
                    aria-label="LinkedIn"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/80 transition-colors hover:border-white/45 hover:bg-white/20 hover:text-white"
                  >
                    <FaLinkedinIn className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href="https://t.me/fastonecambodia"
                    aria-label="Telegram"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/80 transition-colors hover:border-white/45 hover:bg-white/20 hover:text-white"
                  >
                    <FaTelegram className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@fastonecambodia?_t=8lQgxDKLA94&_r=1"
                    aria-label="TikTok"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/80 transition-colors hover:border-white/45 hover:bg-white/20 hover:text-white"
                  >
                    <FaTiktok className="h-4.5 w-4.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-1 lg:block hidden "></div>

            {footerSections.map(({ title, links }) => (
              <div key={title} className="col-span-2 ">
                <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                  <p className="text-lg font-semibold text-white">{title}</p>
                  <ul className="flex flex-col gap-3">
                    {links.map(({ title, href }) => (
                      <li key={title}>
                        <Link
                          href={href}
                          className="text-base font-normal text-white/80 hover:text-white"
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="col-span-3">
              <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                <p className="text-lg font-semibold text-white">Location</p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a
                      href="https://maps.app.goo.gl/H4gJkNtFVhPhi8db8"
                      target="_blank"
                      rel="noreferrer"
                      className="block text-base font-normal text-white/80 hover:text-white"
                    >
                      #29, Mao Tse Toung Blvd, Sangkat Toul Tompoung II, Khan
                      Chamkarmorn, Phnom Penh
                    </a>
                  </li>
                  <li className="flex flex-row gap-1">
                    <p className="font-semibold"> Email :</p>
                    <a
                      href="mailto:contact@example.com"
                      className="text-base font-normal text-white/80 hover:text-white"
                    >
                      fastone_info@fastone.com.kh
                    </a>
                  </li>
                  <li className="flex flex-row gap-1 ">
                    <p className="font-semibold">Phone :</p>
                    <a
                      href="tel:+85589222551"
                      className="text-base font-normal text-white/80 hover:text-white"
                    >
                      089 222 551
                    </a>{" "}
                    /{" "}
                    <a
                      href="tel:+85569709900"
                      className="text-base font-normal text-white/80 hover:text-white"
                    >
                      069 709 900
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator orientation="horizontal" className="bg-white/25" />
          <p className=" text-sm font-normal text-white/75 text-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
            &copy;2026 Fast One (Cambodia). All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
