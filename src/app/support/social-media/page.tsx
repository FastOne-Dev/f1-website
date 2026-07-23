import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Heart,
  Megaphone,
  MessageCircle,
  PhoneCall,
  Radio,
  Router,
  Sparkles,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa6";
import LocalizedText, {
  type LocalizedString,
} from "@/components/LocalizedText";
import { salesUrl, socialUrls } from "@/lib/site-data";
import { heroEnterCopy, heroEnterVisual } from "@/lib/ui-classes";

export const metadata: Metadata = {
  title: "Social Media | Fast One Cambodia",
  description:
    "Find Fast One Cambodia on Facebook, TikTok, Telegram, Instagram, and LinkedIn, with a clear path for sales and service contact.",
};

const pageInner =
  "mx-auto w-[min(1240px,calc(100%_-_80px))] max-[980px]:w-[min(100%_-_40px,760px)] max-[640px]:w-[min(100%_-_28px,560px)]";

const copy = {
  heroEyebrow: { en: "Fast One social", km: "បណ្តាញសង្គម Fast One" },
  heroTitleLead: { en: "Follow the signal.", km: "តាមដានសញ្ញា" },
  heroTitleAccent: {
    en: "Stay close to Fast One.",
    km: "នៅជិត Fast\u00A0One ជានិច្ច",
  },
  heroCopy: {
    en: "Follow offers, service news, careers, and Cambodia moments across the channels Fast One shares with the public.",
    km: "តាមដានការផ្តល់ជូន ព័ត៌មានសេវា ឱកាសការងារ និងព្រឹត្តិការណ៍នៅកម្ពុជា តាមបណ្តាញសាធារណៈរបស់ Fast One",
  },
  facebookCta: { en: "Follow on Facebook", km: "តាមដានលើ Facebook" },
  tiktokCta: { en: "Watch on TikTok", km: "មើលលើ TikTok" },
  browseChannels: {
    en: "Browse every channel",
    km: "មើលបណ្តាញទាំងអស់",
  },
  constellationTitle: {
    en: "Fast One signal map",
    km: "ផែនទីបណ្តាញ Fast One",
  },
  constellationDescription: {
    en: "Fast One connects to Facebook, TikTok, Telegram, Instagram, and LinkedIn for offers, careers, and community moments.",
    km: "Fast One តភ្ជាប់ទៅ Facebook TikTok Telegram Instagram និង LinkedIn សម្រាប់ការផ្តល់ជូន ការងារ និងព្រឹត្តិការណ៍។",
  },
  fiveChannels: { en: "5 channels", km: "៥ បណ្តាញ" },
  offers: { en: "Offers", km: "ការផ្តល់ជូន" },
  careers: { en: "Careers", km: "ការងារ" },
  moments: { en: "Moments", km: "ព្រឹត្តិការណ៍" },
  directoryEyebrow: {
    en: "Fast One channel directory",
    km: "បញ្ជីបណ្តាញ Fast One",
  },
  directoryTitle: {
    en: "One signal. Five ways to follow.",
    km: "សញ្ញាតែមួយ ជម្រើសតាមដានប្រាំបែប",
  },
  directoryCopy: {
    en: "Open each channel directly to see current posts at the source.",
    km: "បើកបណ្តាញនីមួយៗដោយផ្ទាល់ ដើម្បីមើលការបង្ហោះបច្ចុប្បន្នពីប្រភព",
  },
  facebookRole: {
    en: "Community & announcements",
    km: "សហគមន៍ និងសេចក្តីជូនដំណឹង",
  },
  facebookDescription: {
    en: "Open the Fast One Facebook page for public updates, offers, and community posts.",
    km: "បើកទំព័រ Facebook របស់ Fast One សម្រាប់ព័ត៌មានសាធារណៈ ការផ្តល់ជូន និងការបង្ហោះសហគមន៍",
  },
  tiktokRole: { en: "Short-form video", km: "វីដេអូខ្លី" },
  tiktokDescription: {
    en: "Go to the Fast One TikTok profile for short videos and campaign content.",
    km: "ចូលទៅកាន់ប្រវត្តិរូប TikTok របស់ Fast One សម្រាប់វីដេអូខ្លី និងមាតិកាយុទ្ធនាការ",
  },
  telegramRole: { en: "Public updates channel", km: "បណ្តាញព័ត៌មានសាធារណៈ" },
  telegramDescription: {
    en: "View the public Fast One Cambodia channel on Telegram.",
    km: "មើលបណ្តាញសាធារណៈ Fast One Cambodia នៅលើ Telegram",
  },
  instagramRole: { en: "Instagram profile", km: "ប្រវត្តិរូប Instagram" },
  instagramDescription: {
    en: "Open the @fastonecambodia profile on Instagram.",
    km: "បើកប្រវត្តិរូប @fastonecambodia នៅលើ Instagram",
  },
  linkedinRole: { en: "Company & careers", km: "ក្រុមហ៊ុន និងការងារ" },
  linkedinDescription: {
    en: "Follow company news and professional updates on LinkedIn.",
    km: "តាមដានព័ត៌មានក្រុមហ៊ុន និងព័ត៌មានវិជ្ជាជីវៈនៅលើ LinkedIn",
  },
  tagOffers: { en: "Offers", km: "ការផ្តល់ជូន" },
  tagCommunity: { en: "Community", km: "សហគមន៍" },
  tagShortVideo: { en: "Short video", km: "វីដេអូខ្លី" },
  tagCampaigns: { en: "Campaigns", km: "យុទ្ធនាការ" },
  tagPublicChannel: { en: "Public channel", km: "បណ្តាញសាធារណៈ" },
  tagUpdates: { en: "Updates", km: "ព័ត៌មានថ្មី" },
  tagVisual: { en: "Profile", km: "ប្រវត្តិរូប" },
  tagHighlights: { en: "Fast One", km: "Fast One" },
  tagCompany: { en: "Company", km: "ក្រុមហ៊ុន" },
  tagCareers: { en: "Careers", km: "ការងារ" },
  openChannel: { en: "Open channel", km: "បើកបណ្តាញ" },
  opensNewTab: {
    en: "(opens in a new tab)",
    km: "(បើកក្នុងផ្ទាំងថ្មី)",
  },
  topicsEyebrow: { en: "What we share", km: "អ្វីដែលយើងចែករំលែក" },
  topicsTitle: {
    en: "More than a feed. A window into Fast One.",
    km: "លើសពីព័ត៌មានលើអេក្រង់ ជាបង្អួចមួយទៅកាន់ Fast One",
  },
  topicsCopy: {
    en: "The public channels bring together practical service information, company stories, and moments that matter to the community.",
    km: "បណ្តាញសាធារណៈរួមបញ្ចូលព័ត៌មានសេវាជាក់ស្តែង រឿងរ៉ាវក្រុមហ៊ុន និងព្រឹត្តិការណ៍ដែលមានន័យសម្រាប់សហគមន៍",
  },
  offersTitle: { en: "Offers & service news", km: "ការផ្តល់ជូន និងព័ត៌មានសេវា" },
  offersText: {
    en: "Look for plan highlights, promotions, and service information shared by Fast One.",
    km: "ស្វែងរកចំណុចសំខាន់នៃគម្រោង ប្រូម៉ូសិន និងព័ត៌មានសេវាដែល Fast One ចែករំលែក",
  },
  internetTitle: { en: "Internet updates", km: "ព័ត៌មានអ៊ីនធឺណិត" },
  internetText: {
    en: "Keep useful connectivity and coverage conversations close at hand.",
    km: "រក្សាការពិភាក្សាអំពីការតភ្ជាប់ និងតំបន់សេវាឱ្យងាយស្រួលតាមដាន",
  },
  careerTitle: { en: "Team & opportunities", km: "ក្រុមការងារ និងឱកាស" },
  careerText: {
    en: "See company moments and career announcements when Fast One shares them.",
    km: "មើលសកម្មភាពក្រុមហ៊ុន និងសេចក្តីជូនដំណឹងការងារ នៅពេល Fast One ចែករំលែក",
  },
  cultureTitle: { en: "Cambodia moments", km: "ព្រឹត្តិការណ៍នៅកម្ពុជា" },
  cultureText: {
    en: "Join messages that recognize Cambodian culture, holidays, and community moments.",
    km: "ចូលរួមសារដែលអបអរសាទរវប្បធម៌ ពិធីបុណ្យ និងព្រឹត្តិការណ៍សហគមន៍នៅកម្ពុជា",
  },
  decisionEyebrow: { en: "Follow or contact?", km: "តាមដាន ឬទាក់ទង?" },
  decisionTitle: {
    en: "Take the route that matches what you need.",
    km: "ជ្រើសរើសផ្លូវដែលសមនឹងអ្វីដែលអ្នកត្រូវការ",
  },
  decisionCopy: {
    en: "Public channels are for following updates. Sales and service questions have their own direct paths.",
    km: "បណ្តាញសាធារណៈសម្រាប់តាមដានព័ត៌មាន ចំណែកសំណួរផ្នែកលក់ និងសេវាមានផ្លូវទំនាក់ទំនងផ្ទាល់រៀងៗខ្លួន",
  },
  followAnnouncements: { en: "Follow announcements", km: "តាមដានសេចក្តីជូនដំណឹង" },
  followAnnouncementsText: {
    en: "Open the @fastonecambodia public Telegram channel.",
    km: "បើកបណ្តាញ Telegram សាធារណៈ @fastonecambodia",
  },
  askNewService: { en: "Ask about new service", km: "សួរអំពីសេវាថ្មី" },
  askNewServiceText: {
    en: "Message the Fast One sales channel on Telegram.",
    km: "ផ្ញើសារទៅផ្នែកលក់ Fast One តាម Telegram",
  },
  existingServiceHelp: { en: "Existing-service help", km: "ជំនួយសម្រាប់សេវាកំពុងប្រើ" },
  existingServiceHelpText: {
    en: "See the published phone numbers and contact options.",
    km: "មើលលេខទូរស័ព្ទ និងជម្រើសទំនាក់ទំនងដែលបានផ្សព្វផ្សាយ",
  },
} satisfies Record<string, LocalizedString>;

const channels = [
  {
    key: "facebook",
    name: "Facebook",
    handle: "@Fastonecambodia",
    href: socialUrls.facebook,
    icon: FaFacebook,
    role: copy.facebookRole,
    description: copy.facebookDescription,
    tags: [copy.tagOffers, copy.tagCommunity],
    layout:
      "col-span-7 min-h-[330px] max-[900px]:col-span-1 max-[620px]:col-span-1 max-[620px]:min-h-[285px]",
    surface:
      "bg-[radial-gradient(circle_at_88%_15%,rgba(68,176,255,0.28),transparent_30%),linear-gradient(145deg,#0A2B56,#0B447E)]",
    iconStyle: "bg-[#1877F2] text-white",
    compactMobile: false,
  },
  {
    key: "tiktok",
    name: "TikTok",
    handle: "@fastonecambodia",
    href: socialUrls.tiktok,
    icon: FaTiktok,
    role: copy.tiktokRole,
    description: copy.tiktokDescription,
    tags: [copy.tagShortVideo, copy.tagCampaigns],
    layout:
      "col-span-5 min-h-[330px] max-[900px]:col-span-1 max-[620px]:col-span-1 max-[620px]:min-h-[285px]",
    surface:
      "bg-[radial-gradient(circle_at_84%_18%,rgba(37,244,238,0.18),transparent_27%),radial-gradient(circle_at_16%_92%,rgba(254,44,85,0.16),transparent_30%),linear-gradient(145deg,#06101D,#11243C)]",
    iconStyle: "bg-white text-[#07111F]",
    compactMobile: false,
  },
  {
    key: "telegram",
    name: "Telegram",
    handle: "@fastonecambodia",
    href: socialUrls.telegram,
    icon: FaTelegram,
    role: copy.telegramRole,
    description: copy.telegramDescription,
    tags: [copy.tagPublicChannel, copy.tagUpdates],
    layout:
      "col-span-4 min-h-[245px] max-[900px]:col-span-1 max-[620px]:col-span-1 max-[620px]:min-h-0",
    surface:
      "bg-[radial-gradient(circle_at_88%_18%,rgba(41,182,246,0.24),transparent_32%),linear-gradient(145deg,#08294D,#0A3C69)]",
    iconStyle: "bg-[#28A8E9] text-white",
    compactMobile: true,
  },
  {
    key: "instagram",
    name: "Instagram",
    handle: "@fastonecambodia",
    href: socialUrls.instagram,
    icon: FaInstagram,
    role: copy.instagramRole,
    description: copy.instagramDescription,
    tags: [copy.tagVisual, copy.tagHighlights],
    layout:
      "col-span-4 min-h-[245px] max-[900px]:col-span-1 max-[620px]:col-span-1 max-[620px]:min-h-0",
    surface:
      "bg-[radial-gradient(circle_at_86%_20%,rgba(255,84,142,0.2),transparent_30%),linear-gradient(145deg,#0A294D,#153C63)]",
    iconStyle:
      "bg-[linear-gradient(135deg,#6A54D9,#D52F78,#F6A13A)] text-white",
    compactMobile: true,
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    handle: "Fast One Cambodia",
    href: socialUrls.linkedin,
    icon: FaLinkedinIn,
    role: copy.linkedinRole,
    description: copy.linkedinDescription,
    tags: [copy.tagCompany, copy.tagCareers],
    layout:
      "col-span-4 min-h-[245px] max-[900px]:col-span-2 max-[620px]:col-span-1 max-[620px]:min-h-0",
    surface:
      "bg-[radial-gradient(circle_at_88%_18%,rgba(72,167,255,0.2),transparent_30%),linear-gradient(145deg,#092849,#123A61)]",
    iconStyle: "bg-[#0A66C2] text-white",
    compactMobile: true,
  },
] as const;

const topics = [
  {
    number: "01",
    icon: Megaphone,
    title: copy.offersTitle,
    text: copy.offersText,
    layout:
      "col-span-7 row-span-2 min-h-[430px] max-[860px]:col-span-1 max-[860px]:row-span-1 max-[860px]:min-h-[300px]",
    surface:
      "bg-[radial-gradient(circle_at_82%_22%,rgba(50,220,231,0.24),transparent_27%),linear-gradient(145deg,#082A4E,#075B82)] text-white",
    iconStyle: "bg-white/10 text-brand-dark-accent",
    mutedStyle: "text-[#C2D7E5]",
  },
  {
    number: "02",
    icon: Router,
    title: copy.internetTitle,
    text: copy.internetText,
    layout: "col-span-5 min-h-[205px] max-[860px]:col-span-1",
    surface: "bg-brand-soft text-brand-heading",
    iconStyle: "bg-white text-brand-accent",
    mutedStyle: "text-brand-copy",
  },
  {
    number: "03",
    icon: BriefcaseBusiness,
    title: copy.careerTitle,
    text: copy.careerText,
    layout: "col-span-5 min-h-[205px] max-[860px]:col-span-1",
    surface: "border border-brand-border-subtle bg-white text-brand-heading",
    iconStyle: "bg-brand-soft text-brand-accent",
    mutedStyle: "text-brand-copy",
  },
  {
    number: "04",
    icon: Heart,
    title: copy.cultureTitle,
    text: copy.cultureText,
    layout: "col-span-12 min-h-[230px] max-[860px]:col-span-1",
    surface:
      "bg-[radial-gradient(circle_at_10%_90%,rgba(22,180,205,0.18),transparent_26%),linear-gradient(110deg,#F2F8FC,#E9F6FC)] text-brand-heading",
    iconStyle: "bg-white text-brand-accent",
    mutedStyle: "text-brand-copy",
  },
] as const;

const decisionPaths = [
  {
    number: "01",
    icon: FaTelegram,
    title: copy.followAnnouncements,
    text: copy.followAnnouncementsText,
    href: socialUrls.telegram,
    external: true,
  },
  {
    number: "02",
    icon: MessageCircle,
    title: copy.askNewService,
    text: copy.askNewServiceText,
    href: salesUrl,
    external: true,
  },
  {
    number: "03",
    icon: PhoneCall,
    title: copy.existingServiceHelp,
    text: copy.existingServiceHelpText,
    href: "/support/hotline",
    external: false,
  },
] as const;

function ExternalNotice() {
  return (
    <span className="sr-only">
      <LocalizedText value={copy.opensNewTab} />
    </span>
  );
}

function SocialConstellation() {
  const nodes = [
    {
      name: "Facebook",
      icon: FaFacebook,
      position: "left-1/2 top-[17%] max-[640px]:top-[22%]",
      color: "bg-[#1877F2]",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      position: "left-[82%] top-[37%] max-[640px]:top-[39%]",
      color: "bg-[#07111F]",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      position: "left-[70%] top-[74%]",
      color: "bg-[linear-gradient(135deg,#6A54D9,#D52F78,#F6A13A)]",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      position: "left-[30%] top-[74%]",
      color: "bg-[#0A66C2]",
    },
    {
      name: "Telegram",
      icon: FaTelegram,
      position: "left-[18%] top-[37%] max-[640px]:top-[39%]",
      color: "bg-[#28A8E9]",
    },
  ] as const;

  return (
    <div
      aria-describedby="social-signal-description"
      aria-labelledby="social-signal-title"
      className="relative mx-auto h-[540px] w-full max-w-[610px] max-[640px]:h-[420px] max-[640px]:w-[calc(100%_-_20px)]"
      role="img"
    >
      <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-[#B8D9E8] pb-3">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#3F6683] [[lang=km]_&]:tracking-normal" id="social-signal-title">
          <Radio className="size-4 text-brand-accent" />
          <LocalizedText value={copy.constellationTitle} />
        </div>
        <span className="flex items-center gap-2 text-xs font-black text-brand-accent max-[420px]:hidden">
          <span className="social-signal-dot size-1.5 rounded-full bg-[#16B8CB]" />
          <LocalizedText value={copy.fiveChannels} />
        </span>
      </div>

      <p className="sr-only" id="social-signal-description">
        <LocalizedText value={copy.constellationDescription} />
      </p>

      <svg aria-hidden="true" className="absolute inset-x-0 top-[48px] h-[420px] w-full max-[640px]:h-[310px]" fill="none" viewBox="0 0 620 440">
        <circle cx="310" cy="210" r="106" stroke="#B8DDEB" strokeDasharray="3 10" />
        <circle cx="310" cy="210" r="162" stroke="#D0E7F0" />
      </svg>

      <svg aria-hidden="true" className="absolute inset-x-0 top-[48px] h-[420px] w-full max-[640px]:h-[310px]" fill="none" preserveAspectRatio="none" viewBox="0 0 620 440">
        <defs>
          <linearGradient id="socialRoute" x1="80" x2="550" y1="70" y2="390" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0AAFD0" />
            <stop offset="1" stopColor="#2677D8" />
          </linearGradient>
        </defs>
        <path className="social-route" d="M310 210L310 35M310 210L510 145M310 210L435 355M310 210L185 355M310 210L110 145" stroke="url(#socialRoute)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        <path className="social-route-pulse" d="M310 210L310 35M310 210L510 145M310 210L435 355M310 210L185 355M310 210L110 145" stroke="#B7F7FF" strokeWidth="5" vectorEffect="non-scaling-stroke" />
      </svg>

      <div aria-hidden="true" className="absolute left-1/2 top-[48%] flex size-[168px] -translate-x-1/2 -translate-y-1/2 items-center justify-center max-[640px]:size-[112px]">
        <span className="social-core absolute inset-0 rounded-full border border-[#5ACBDE]/50 bg-white/38" />
        <span className="absolute inset-[14%] rounded-full border border-[#A7D8E9] bg-white/75 shadow-[0_24px_65px_rgba(8,105,157,0.15)]" />
        <span className="social-signal-wave absolute size-[56%] rounded-full border border-[#27C6DA]/70" />
        <span className="social-signal-wave social-signal-wave--delay absolute size-[56%] rounded-full border border-[#27C6DA]/70" />
        <span className="relative z-10 flex size-[92px] items-center justify-center rounded-full border border-[#B7DCEB] bg-white shadow-[0_18px_40px_rgba(8,117,183,0.2)] max-[640px]:size-[72px]">
          <Image
            alt=""
            className="h-auto w-[58px] object-contain max-[640px]:w-[45px]"
            height={47}
            src="/img/fastone_mini_logo.png"
            width={62}
            quality={100}
            sizes="58px"
          />
        </span>
      </div>

      {nodes.map(({ name, icon: Icon, position, color }, index) => (
        <div className={`absolute ${position} -translate-x-1/2 -translate-y-1/2`} key={name}>
          <div className="social-node flex flex-col items-center gap-2" style={{ animationDelay: `${index * -0.55}s` }}>
            <span className={`flex size-[70px] items-center justify-center rounded-[18px] border-4 border-white text-white shadow-[0_18px_40px_rgba(12,55,91,0.16)] max-[640px]:size-14 max-[640px]:rounded-[14px] ${color}`}>
              <Icon className="size-6 max-[640px]:size-5" />
            </span>
            <strong className="rounded-full bg-white/90 px-2.5 py-1 text-[0.62rem] font-black text-[#173C5D] shadow-[0_8px_20px_rgba(17,65,101,0.08)]">
              {name}
            </strong>
          </div>
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 border-t border-[#B8D9E8]">
        {[copy.offers, copy.careers, copy.moments].map((label, index) => (
          <div className={`flex items-center justify-center gap-2 px-3 py-3 text-[0.7rem] font-black text-[#466B85] ${index ? "border-l border-[#D3E5EC]" : ""}`} key={index}>
            <span className="size-1.5 rounded-full bg-[#13AFC4]" />
            <LocalizedText value={label} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ChannelCard({ channel }: { channel: (typeof channels)[number] }) {
  const Icon = channel.icon;

  return (
    <li className={`flex ${channel.layout}`}>
      <a
        className={`group relative isolate flex flex-1 overflow-hidden p-8 text-white transition duration-300 hover:-translate-y-1 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark-accent focus-visible:ring-offset-4 focus-visible:ring-offset-brand-dark motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${channel.compactMobile ? "max-[620px]:p-5" : "max-[620px]:p-6"} ${channel.surface}`}
        href={channel.href}
        rel="noreferrer"
        target="_blank"
      >
      <span aria-hidden="true" className="absolute -right-20 -top-20 -z-10 size-64 rounded-full border border-white/10" />
      <span aria-hidden="true" className="absolute -right-10 -top-10 -z-10 size-36 rounded-full border border-white/10" />

      <div className={`w-full flex-col ${channel.compactMobile ? "flex max-[620px]:hidden" : "flex"}`}>
        <div className="flex items-start justify-between gap-5">
          <span className={`flex size-12 items-center justify-center rounded-[14px] ${channel.iconStyle}`}>
            <Icon className="size-5" />
          </span>
          <span className="text-xs font-black uppercase tracking-[0.1em] text-white/85 [[lang=km]_&]:tracking-normal">
            <LocalizedText value={channel.role} />
          </span>
        </div>

        <div className="mt-auto pt-12 max-[620px]:pt-8">
          <h3 className="m-0 text-[clamp(1.55rem,2.6vw,2.25rem)] font-black leading-[1.15] tracking-[-0.01em] [[lang=km]_&]:leading-[1.55] [[lang=km]_&]:tracking-normal">
            {channel.name}
          </h3>
          <p className="mb-0 mt-2 text-[0.78rem] font-bold text-brand-dark-accent" dir="ltr">
            {channel.handle}
          </p>
          <p className="mb-0 mt-4 max-w-[540px] text-[0.88rem] leading-[1.65] text-white/72">
            <LocalizedText value={channel.description} />
          </p>

          <div className="mt-6 flex flex-wrap items-end justify-between gap-5 border-t border-white/15 pt-5">
            <div className="flex flex-wrap gap-2">
              {channel.tags.map((tag, index) => (
                <span className="border border-white/18 bg-white/[0.05] px-2.5 py-1.5 text-[0.68rem] font-black text-white/78" key={index}>
                  <LocalizedText value={tag} />
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 text-[0.72rem] font-black text-brand-dark-accent">
              <LocalizedText value={copy.openChannel} />
              <ArrowRight className="size-4 transition group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
              <ExternalNotice />
            </span>
          </div>
        </div>
      </div>

      {channel.compactMobile ? (
        <div className="hidden w-full grid-cols-[44px_minmax(0,1fr)_32px] items-center gap-4 max-[620px]:grid">
          <span className={`flex size-11 items-center justify-center rounded-[12px] ${channel.iconStyle}`}>
            <Icon className="size-[18px]" />
          </span>
          <span className="min-w-0">
            <span className="block text-[0.68rem] font-black uppercase tracking-[0.08em] text-white/85 [[lang=km]_&]:tracking-normal">
              <LocalizedText value={channel.role} />
            </span>
            <strong className="mt-1.5 block text-[1.15rem] font-black leading-[1.35] [[lang=km]_&]:leading-[1.58]">
              {channel.name}
            </strong>
            <span className="mt-1 block text-[0.72rem] font-bold text-brand-dark-accent" dir="ltr">
              {channel.handle}
            </span>
            <span className="mt-2 block text-[0.78rem] leading-[1.55] text-white/70">
              <LocalizedText value={channel.description} />
            </span>
          </span>
          <span className="flex size-8 items-center justify-center rounded-full border border-white/20 text-brand-dark-accent">
            <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
          </span>
          <ExternalNotice />
        </div>
      ) : null}
      </a>
    </li>
  );
}

function TopicCard({ topic }: { topic: (typeof topics)[number] }) {
  const Icon = topic.icon;

  return (
    <article className={`relative isolate overflow-hidden p-8 max-[620px]:p-6 ${topic.layout} ${topic.surface}`}>
      <span aria-hidden="true" className="absolute -bottom-16 -right-10 -z-10 text-[11rem] font-black leading-none opacity-[0.045]">
        {topic.number}
      </span>
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-6">
          <span className={`flex size-12 items-center justify-center rounded-[14px] ${topic.iconStyle}`}>
            <Icon className="size-[21px]" />
          </span>
          <span aria-hidden="true" className={`text-[0.68rem] font-black tracking-[0.12em] ${topic.mutedStyle}`}>
            {topic.number}
          </span>
        </div>
        <div className="mt-auto pt-10">
          <h3 className="m-0 text-[clamp(1.35rem,2.7vw,2.15rem)] font-black leading-[1.2] tracking-[-0.01em] [[lang=km]_&]:leading-[1.55] [[lang=km]_&]:tracking-normal">
            <LocalizedText value={topic.title} />
          </h3>
          <p className={`mb-0 mt-4 max-w-[590px] text-[0.92rem] leading-[1.68] ${topic.mutedStyle}`}>
            <LocalizedText value={topic.text} />
          </p>
        </div>
      </div>
    </article>
  );
}

function DecisionCard({ item }: { item: (typeof decisionPaths)[number] }) {
  const Icon = item.icon;
  const content = (
    <>
      <span className="flex size-12 flex-none items-center justify-center rounded-[14px] bg-brand-soft text-brand-accent shadow-[0_12px_30px_rgba(8,87,132,0.08)]">
        <Icon className="size-[21px]" />
      </span>
      <span className="min-w-0 flex-1">
        <strong className="block text-[1rem] font-black leading-[1.45] text-brand-heading [[lang=km]_&]:leading-[1.62]">
          <LocalizedText value={item.title} />
        </strong>
        <span className="mt-2 block text-[0.84rem] leading-[1.58] text-brand-copy">
          <LocalizedText value={item.text} />
        </span>
      </span>
      <span className="flex size-10 flex-none items-center justify-center rounded-full border border-brand-border text-brand-accent transition group-hover:border-brand-accent group-hover:bg-brand-primary group-hover:text-white motion-reduce:transition-none">
        <ArrowRight className="size-4 transition group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
      </span>
      {item.external ? <ExternalNotice /> : null}
    </>
  );
  const className =
    "group grid min-h-[124px] grid-cols-[48px_minmax(0,1fr)_40px] items-center gap-5 border-b border-brand-border-subtle py-6 transition hover:border-brand-border-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2 motion-reduce:transition-none";

  if (item.external) {
    return (
      <a className={className} href={item.href} rel="noreferrer" target="_blank">
        {content}
      </a>
    );
  }

  return (
    <Link className={className} href={item.href}>
      {content}
    </Link>
  );
}

export default function SocialMediaPage() {
  return (
    <main className="overflow-hidden bg-white text-brand-ink">
      <section className="relative isolate overflow-hidden border-b border-brand-border-subtle bg-brand-surface-hero">
        <div className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(circle_at_79%_25%,rgba(0,190,218,0.17),transparent_31%),linear-gradient(120deg,#FFFFFF_0%,#F7FBFF_48%,#E7F7FC_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-20 opacity-40 [background-image:linear-gradient(rgba(0,119,185,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,119,185,0.06)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:linear-gradient(to_right,transparent,black_48%,black)]" />
        <div className={`${pageInner} grid min-h-[760px] grid-cols-[minmax(0,0.92fr)_minmax(460px,0.88fr)] items-center gap-[76px] py-[72px] max-[1080px]:grid-cols-1 max-[1080px]:gap-12 max-[640px]:py-[54px]`}>
          <div className={`${heroEnterCopy} max-w-[660px]`}>
            <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-brand-border bg-white/78 px-4 py-2 text-[0.72rem] font-black uppercase tracking-[0.13em] text-brand-accent shadow-[0_8px_24px_rgba(11,94,137,0.06)] [[lang=km]_&]:tracking-normal">
              <Sparkles className="size-3.5" />
              <LocalizedText value={copy.heroEyebrow} />
            </p>

            <h1 className="m-0 text-[clamp(2.75rem,5.2vw,4.7rem)] font-black leading-[1.12] tracking-[-0.01em] text-brand-ink [text-wrap:balance] [[lang=km]_&]:leading-[1.5] [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.heroTitleLead} />{" "}
              <span className="text-brand-highlight">
                <LocalizedText value={copy.heroTitleAccent} />
              </span>
            </h1>

            <p className="mb-0 mt-6 max-w-[610px] text-[1.05rem] leading-[1.76] text-brand-copy max-[640px]:text-[1rem]">
              <LocalizedText value={copy.heroCopy} />
            </p>

            <div className="mt-8 flex flex-wrap gap-3 max-[520px]:grid max-[520px]:grid-cols-1">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] bg-brand-primary px-6 py-3 text-center text-[0.94rem] font-black text-white shadow-[0_16px_34px_rgba(0,103,172,0.2)] transition hover:-translate-y-0.5 hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                href={socialUrls.facebook}
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebook className="size-[18px]" />
                <LocalizedText value={copy.facebookCta} />
                <ExternalNotice />
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] border border-brand-border bg-white/78 px-6 py-3 text-center text-[0.94rem] font-bold text-brand-link transition hover:-translate-y-0.5 hover:border-brand-border-hover hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                href={socialUrls.tiktok}
                rel="noreferrer"
                target="_blank"
              >
                <FaTiktok className="size-[18px]" />
                <LocalizedText value={copy.tiktokCta} />
                <ExternalNotice />
              </a>
            </div>

            <a className="mt-3 inline-flex min-h-11 items-center gap-2 py-2 text-[0.82rem] font-black text-brand-link hover:text-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2" href="#social-channels">
              <LocalizedText value={copy.browseChannels} />
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className={heroEnterVisual}>
            <SocialConstellation />
          </div>
        </div>
      </section>

      <section className="scroll-mt-[90px] bg-brand-dark py-[108px] text-white max-[640px]:py-[74px]" id="social-channels">
        <div className={pageInner}>
          <div className="grid grid-cols-[minmax(280px,0.72fr)_minmax(0,0.78fr)] items-end justify-between gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-6">
            <div>
              <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-brand-dark-accent [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.directoryEyebrow} />
              </p>
              <h2 className="mb-0 mt-4 text-[clamp(2.1rem,4vw,3.45rem)] font-black leading-[1.18] tracking-[-0.015em] [text-wrap:balance] [[lang=km]_&]:leading-[1.58] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.directoryTitle} />
              </h2>
            </div>
            <p className="m-0 max-w-[590px] text-[1rem] leading-[1.72] text-brand-dark-copy">
              <LocalizedText value={copy.directoryCopy} />
            </p>
          </div>

          <ul className="m-0 mt-14 grid list-none grid-cols-12 gap-3 p-0 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
            {channels.map((channel) => (
              <ChannelCard channel={channel} key={channel.key} />
            ))}
          </ul>
        </div>
      </section>

      <section className="py-[112px] max-[640px]:py-[76px]">
        <div className={pageInner}>
          <div className="grid grid-cols-[minmax(280px,0.8fr)_minmax(0,0.72fr)] items-end gap-20 max-[900px]:grid-cols-1 max-[900px]:gap-6">
            <div>
              <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-brand-accent [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.topicsEyebrow} />
              </p>
              <h2 className="mb-0 mt-4 text-[clamp(2.05rem,4vw,3.35rem)] font-black leading-[1.18] tracking-[-0.015em] text-[#071D3B] [text-wrap:balance] [[lang=km]_&]:leading-[1.58] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.topicsTitle} />
              </h2>
            </div>
            <p className="m-0 text-[1rem] leading-[1.74] text-[#58718D]">
              <LocalizedText value={copy.topicsCopy} />
            </p>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-4 max-[860px]:grid-cols-1">
            {topics.map((topic) => (
              <TopicCard key={topic.number} topic={topic} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface-soft py-[108px] max-[640px]:py-[74px]">
        <div className={`${pageInner} grid grid-cols-[minmax(280px,0.72fr)_minmax(0,1.08fr)] items-start gap-[88px] max-[980px]:grid-cols-1 max-[980px]:gap-10`}>
          <div className="max-w-[510px]">
            <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-brand-accent [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.decisionEyebrow} />
            </p>
            <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.18] tracking-[-0.015em] text-[#071D3B] [text-wrap:balance] [[lang=km]_&]:leading-[1.58] [[lang=km]_&]:tracking-normal" id="social-decision-title">
              <LocalizedText value={copy.decisionTitle} />
            </h2>
            <p className="mb-0 mt-6 text-[1rem] leading-[1.74] text-[#58718D]">
              <LocalizedText value={copy.decisionCopy} />
            </p>
          </div>

          <nav aria-labelledby="social-decision-title">
            <ol className="m-0 list-none border-t border-[#B9D5E2] p-0">
              {decisionPaths.map((item) => (
                <li key={item.number}>
                  <DecisionCard item={item} />
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>
    </main>
  );
}
