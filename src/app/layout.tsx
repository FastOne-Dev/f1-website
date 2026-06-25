/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { LanguageProvider } from "@/lib/language";
import "./globals.css";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";

const englishFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fast One Cambodia | Fiber Internet Service Provider",
  description:
    "Modern fiber internet, dedicated business connectivity, and technical support from Fast One Cambodia.",
  icons: {
    icon: "/img/fastone_mini_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("scroll-smooth", "font-sans", englishFont.variable)}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F8FAFC] font-sans text-[#081120] tracking-normal">
        <LanguageProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
