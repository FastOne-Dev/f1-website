import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ClipboardList,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  Router,
  Send,
  Wrench,
} from "lucide-react";
import LocalizedText, {
  type LocalizedString,
} from "@/components/LocalizedText";
import { address, officeMapUrl, salesUrl } from "@/lib/site-data";
import { heroEnterCopy, heroEnterVisual } from "@/lib/ui-classes";

export const metadata: Metadata = {
  title: "Hotline | Fast One Cambodia",
  description:
    "Find Fast One Cambodia's published phone numbers, Telegram sales channel, email address, and office location, plus what to prepare before reaching out.",
};

const pageInner =
  "mx-auto w-[min(1240px,calc(100%_-_80px))] max-[980px]:w-[min(100%_-_40px,760px)] max-[640px]:w-[min(100%_-_28px,560px)]";

const phoneOne = {
  display: "089 222 551",
  href: "tel:+85589222551",
};

const phoneTwo = {
  display: "069 709 900",
  href: "tel:+85569709900",
};

const email = {
  display: "fastone_info@fastone.com.kh",
  href: "mailto:fastone_info@fastone.com.kh",
};

const copy = {
  heroEyebrow: {
    en: "Hotline & contact",
    km: "Hotline និងទំនាក់ទំនង",
  },
  heroTitleLead: {
    en: "The right help starts with",
    km: "ជំនួយត្រឹមត្រូវចាប់ផ្តើមពី",
  },
  heroTitleAccent: {
    en: "one clear conversation.",
    km: "ការសន្ទនាច្បាស់លាស់មួយ",
  },
  heroCopy: {
    en: "Ask about home internet, business connectivity, coverage, installation, or an existing service. Bring your location and service details so the team can guide the next step.",
    km: "សួរអំពីអ៊ីនធឺណិតផ្ទះ ការតភ្ជាប់អាជីវកម្ម តំបន់សេវា ការដំឡើង ឬសេវាដែលកំពុងប្រើ សូមត្រៀមទីតាំង និងព័ត៌មានសេវា ដើម្បីឱ្យក្រុមការងារអាចណែនាំជំហានបន្ទាប់",
  },
  callPrimary: {
    en: "View phone numbers",
    km: "មើលលេខទូរស័ព្ទ",
  },
  messageTelegram: {
    en: "Message sales on Telegram",
    km: "ផ្ញើសារទៅផ្នែកលក់តាម Telegram",
  },
  consoleTitle: {
    en: "Fast One contact channels",
    km: "បណ្តាញទំនាក់ទំនង Fast One",
  },
  chooseChannel: {
    en: "Choose a channel",
    km: "ជ្រើសរើសបណ្តាញ",
  },
  hotline: { en: "Hotline", km: "លេខទូរស័ព្ទ" },
  contactDesk: {
    en: "Fast One phone lines",
    km: "លេខទូរស័ព្ទ Fast One",
  },
  phoneOne: { en: "Phone 01", km: "ទូរស័ព្ទ ០១" },
  phoneTwo: { en: "Phone 02", km: "ទូរស័ព្ទ ០២" },
  phone: { en: "Phone", km: "ទូរស័ព្ទ" },
  directConversation: {
    en: "Direct conversation",
    km: "ការសន្ទនាផ្ទាល់",
  },
  telegram: { en: "Telegram", km: "Telegram" },
  shareLocation: { en: "Share location", km: "ផ្ញើទីតាំង" },
  email: { en: "Email", km: "អ៊ីមែល" },
  writtenDetails: { en: "Written details", km: "ព័ត៌មានជាលាយលក្ខណ៍អក្សរ" },
  routerEyebrow: {
    en: "Choose your starting point",
    km: "ជ្រើសរើសចំណុចចាប់ផ្តើម",
  },
  routerTitle: {
    en: "Start with what you need to share.",
    km: "ចាប់ផ្តើមពីអ្វីដែលអ្នកត្រូវការចែករំលែក",
  },
  routerCopy: {
    en: "Use the closest starting point to organize the details for your conversation.",
    km: "ប្រើចំណុចចាប់ផ្តើមដែលសមបំផុត ដើម្បីរៀបចំព័ត៌មានសម្រាប់ការសន្ទនារបស់អ្នក",
  },
  prepareEyebrow: {
    en: "Before you contact",
    km: "មុនពេលទាក់ទង",
  },
  prepareTitle: {
    en: "A useful request starts with four simple details.",
    km: "សំណើដែលមានប្រយោជន៍ ចាប់ផ្តើមពីព័ត៌មានសាមញ្ញចំនួនបួន",
  },
  prepareCopy: {
    en: "You do not need a technical script. A location, service type, short description, and relevant timing give the team a practical place to begin.",
    km: "អ្នកមិនត្រូវការព័ត៌មានបច្ចេកទេសស្មុគស្មាញទេ ទីតាំង ប្រភេទសេវា សេចក្តីពិពណ៌នាខ្លី និងពេលវេលាដែលពាក់ព័ន្ធ ផ្តល់ចំណុចចាប់ផ្តើមជាក់ស្តែងដល់ក្រុមការងារ",
  },
  briefTitle: {
    en: "Message starter",
    km: "គំរូចាប់ផ្តើមសារ",
  },
  usefulFirstMessage: {
    en: "Put the essentials into one clear message.",
    km: "ដាក់ព័ត៌មានសំខាន់ៗក្នុងសារច្បាស់លាស់មួយ",
  },
  exampleGreeting: {
    en: "Hello Fast One, I would like to ask about…",
    km: "សួស្តី Fast One ខ្ញុំចង់សួរអំពី…",
  },
  exampleLocation: {
    en: "My location is…",
    km: "ទីតាំងរបស់ខ្ញុំគឺ…",
  },
  exampleNeed: {
    en: "The service or issue is…",
    km: "សេវា ឬបញ្ហាគឺ…",
  },
  contactEyebrow: {
    en: "Contact Fast One",
    km: "ទាក់ទង Fast One",
  },
  contactTitle: {
    en: "Choose the channel that fits what you need to share.",
    km: "ជ្រើសរើសបណ្តាញដែលសមស្របនឹងព័ត៌មានដែលអ្នកត្រូវផ្ញើ",
  },
  contactCopy: {
    en: "The published options include two phone numbers, Telegram sales, an email address, and the office map.",
    km: "ជម្រើសដែលបានផ្សព្វផ្សាយរួមមាន លេខទូរស័ព្ទពីរ Telegram ផ្នែកលក់ អាសយដ្ឋានអ៊ីមែល និងផែនទីការិយាល័យ",
  },
  phoneNumbers: { en: "Phone numbers", km: "លេខទូរស័ព្ទ" },
  twoPublishedNumbers: {
    en: "Fast One's listed contact numbers",
    km: "លេខទំនាក់ទំនងដែលបានបង្ហាញរបស់ Fast One",
  },
  telegramSales: { en: "Telegram sales", km: "Telegram ផ្នែកលក់" },
  sharePinAndDetails: {
    en: "Share a map pin and service details",
    km: "ផ្ញើទីតាំងលើផែនទី និងព័ត៌មានសេវា",
  },
  generalEmail: { en: "Email address", km: "អាសយដ្ឋានអ៊ីមែល" },
  officeLocation: { en: "Office location", km: "ទីតាំងការិយាល័យ" },
  openMap: { en: "Open office map", km: "បើកផែនទីការិយាល័យ" },
  socialContact: {
    en: "View social contact options",
    km: "មើលជម្រើសទំនាក់ទំនងតាមបណ្តាញសង្គម",
  },
  opensNewTab: {
    en: "(opens in a new tab)",
    km: "(បើកក្នុងផ្ទាំងថ្មី)",
  },
  chooseContactChannel: {
    en: "Choose a contact channel",
    km: "ជ្រើសរើសបណ្តាញទំនាក់ទំនង",
  },
} satisfies Record<string, LocalizedString>;

const requestTypes = [
  {
    number: "01",
    icon: Router,
    title: { en: "New connection", km: "ការតភ្ជាប់ថ្មី" },
    text: {
      en: "Ask about home plans, address availability, cable requirements, and installation planning.",
      km: "សួរអំពីកញ្ចប់ផ្ទះ លទ្ធភាពតាមអាសយដ្ឋាន តម្រូវការខ្សែ និងការរៀបចំការដំឡើង",
    },
    note: { en: "Bring your location", km: "ត្រៀមទីតាំងរបស់អ្នក" },
  },
  {
    number: "02",
    icon: Building2,
    title: { en: "Business connectivity", km: "ការតភ្ជាប់អាជីវកម្ម" },
    text: {
      en: "Start a conversation about dedicated internet, DPLC, IPLC, or IP Transit requirements.",
      km: "ចាប់ផ្តើមការពិភាក្សាអំពីតម្រូវការអ៊ីនធឺណិតផ្តាច់មុខ DPLC IPLC ឬ IP Transit",
    },
    note: {
      en: "Bring sites and capacity needs",
      km: "ត្រៀមទីតាំង និងសមត្ថភាពដែលត្រូវការ",
    },
  },
  {
    number: "03",
    icon: Wrench,
    title: { en: "Existing service", km: "សេវាកំពុងប្រើ" },
    text: {
      en: "Describe the service concern and location clearly when you contact the team.",
      km: "ពិពណ៌នាអំពីបញ្ហាសេវា និងទីតាំងឱ្យបានច្បាស់ នៅពេលអ្នកទាក់ទងក្រុមការងារ",
    },
    note: {
      en: "Bring the service location and issue",
      km: "ត្រៀមទីតាំងសេវា និងបញ្ហា",
    },
  },
] satisfies Array<{
  number: string;
  icon: typeof Router;
  title: LocalizedString;
  text: LocalizedString;
  note: LocalizedString;
}>;

const preparationItems = [
  {
    number: "01",
    icon: MapPin,
    title: { en: "Location", km: "ទីតាំង" },
    text: {
      en: "Share a map pin or the complete service address.",
      km: "ផ្ញើទីតាំងលើផែនទី ឬអាសយដ្ឋានសេវាពេញលេញ",
    },
  },
  {
    number: "02",
    icon: Router,
    title: { en: "Service type", km: "ប្រភេទសេវា" },
    text: {
      en: "Say whether the request is for home, business, or an existing service.",
      km: "បញ្ជាក់ថាសំណើគឺសម្រាប់ផ្ទះ អាជីវកម្ម ឬសេវាដែលកំពុងប្រើ",
    },
  },
  {
    number: "03",
    icon: ClipboardList,
    title: { en: "Request or concern", km: "សំណើ ឬបញ្ហា" },
    text: {
      en: "Summarize what you need or what is happening in one clear description.",
      km: "សង្ខេបអ្វីដែលអ្នកត្រូវការ ឬអ្វីដែលកំពុងកើតឡើង ជាសេចក្តីពិពណ៌នាច្បាស់លាស់មួយ",
    },
  },
  {
    number: "04",
    icon: Headphones,
    title: { en: "Relevant timing", km: "ពេលវេលាដែលពាក់ព័ន្ធ" },
    text: {
      en: "Include a target date or timing detail when it matters to the request.",
      km: "បញ្ចូលកាលបរិច្ឆេទគោលដៅ ឬព័ត៌មានពេលវេលា នៅពេលវាពាក់ព័ន្ធនឹងសំណើ",
    },
  },
] satisfies Array<{
  number: string;
  icon: typeof MapPin;
  title: LocalizedString;
  text: LocalizedString;
}>;

function HotlineConsole() {
  const phoneLinks: Array<{
    label: LocalizedString;
    phone: { display: string; href: string };
  }> = [
    { label: copy.phoneOne, phone: phoneOne },
    { label: copy.phoneTwo, phone: phoneTwo },
  ];
  const facts: Array<{
    icon: typeof PhoneCall;
    label: LocalizedString;
    value: LocalizedString;
  }> = [
    { icon: PhoneCall, label: copy.phone, value: copy.directConversation },
    { icon: MessageCircle, label: copy.telegram, value: copy.shareLocation },
    { icon: Mail, label: copy.email, value: copy.writtenDetails },
  ];

  return (
    <div
      aria-labelledby="hotline-console-title"
      className="relative mx-auto h-[500px] w-full max-w-[620px] max-[640px]:h-[360px]"
      data-hotline-console
      role="group"
    >
      <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-[#B9D8E8] pb-3">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#3F6683] [[lang=km]_&]:tracking-normal" id="hotline-console-title">
          <Headphones className="size-3.5 text-brand-accent" />
          <LocalizedText value={copy.consoleTitle} />
        </div>
        <div className="flex items-center gap-2 text-[0.7rem] font-bold text-[#126D9D] max-[420px]:hidden">
          <span className="size-1.5 rounded-full bg-[#12AFC5]" />
          <LocalizedText value={copy.chooseChannel} />
        </div>
      </div>

      <div className="absolute left-1/2 top-[74px] flex size-[208px] -translate-x-1/2 items-center justify-center max-[640px]:top-[64px] max-[640px]:size-[170px]" aria-hidden="true">
        <span className="hotline-signal-ring absolute inset-0 rounded-full border border-[#63C7DE]/45" />
        <span className="hotline-signal-ring hotline-signal-ring--delay absolute inset-[18%] rounded-full border border-[#459DD6]/45" />
        <span className="absolute inset-[33%] rounded-full bg-[#DDF5FA] shadow-[0_0_42px_rgba(19,175,197,0.18)]" />
        <span className="hotline-handset relative flex size-[76px] items-center justify-center rounded-full bg-brand-primary text-white shadow-[0_18px_38px_rgba(0,103,172,0.24)] max-[640px]:size-[66px]">
          <PhoneCall className="size-8 max-[640px]:size-7" />
        </span>
      </div>

      <div className="absolute inset-x-0 top-[270px] text-center max-[640px]:top-[224px]">
        <p className="m-0 text-[0.68rem] font-black uppercase tracking-[0.12em] text-[#1485A7] [[lang=km]_&]:tracking-normal">
          <LocalizedText value={copy.hotline} />
        </p>
        <p className="mb-0 mt-1 text-[0.92rem] font-black text-[#092E56]">
          <LocalizedText value={copy.contactDesk} />
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-[76px] grid grid-cols-2 gap-3 max-[640px]:bottom-0">
        {phoneLinks.map(({ label, phone }) => (
          <a
            className="group flex min-h-[72px] items-center gap-3 rounded-[10px] border border-brand-border bg-white/85 px-4 transition duration-200 hover:-translate-y-0.5 hover:border-brand-border-hover hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2 max-[480px]:gap-2 max-[480px]:px-3"
            href={phone.href}
            key={phone.display}
          >
            <span className="flex size-10 flex-none items-center justify-center rounded-full bg-brand-soft text-brand-accent group-hover:bg-brand-primary group-hover:text-white">
              <PhoneCall className="size-[18px]" />
            </span>
            <span className="min-w-0">
              <small className="block text-xs font-black uppercase tracking-[0.08em] text-[#4C7189] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={label} />
              </small>
              <strong className="mt-1 block whitespace-nowrap text-[0.86rem] font-black text-[#092E56] max-[420px]:text-[0.78rem]" dir="ltr">
                {phone.display}
              </strong>
            </span>
          </a>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 border-t border-[#B9D8E8] max-[640px]:hidden">
        {facts.map(({ icon: Icon, label, value }, index) => (
          <div className={`px-3 py-3 max-[480px]:px-2 ${index ? "border-l border-[#D2E5EC]" : ""}`} key={index}>
            <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.08em] text-[#4C7189] [[lang=km]_&]:tracking-normal">
              <Icon className="size-3 text-brand-accent" />
              <LocalizedText value={label} />
            </div>
            <p className="mb-0 mt-1 text-[0.72rem] font-bold leading-[1.4] text-[#173C5D]">
              <LocalizedText value={value} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactBrief() {
  return (
    <div className="relative isolate overflow-hidden bg-[#082B50] p-[clamp(26px,4vw,44px)] text-white shadow-[0_26px_60px_rgba(7,35,67,0.16)]">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_18%,rgba(60,221,235,0.18),transparent_27%),linear-gradient(145deg,#082847,#0A3E68)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(rgba(125,211,252,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.12)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="flex items-center justify-between gap-5 border-b border-white/18 pb-4">
        <div className="flex items-center gap-2.5 text-[0.72rem] font-black uppercase tracking-[0.12em] text-[#6FE3EB] [[lang=km]_&]:tracking-normal">
          <Send className="size-4" />
          <LocalizedText value={copy.briefTitle} />
        </div>
        <span aria-hidden="true" className="text-[0.65rem] font-black text-white/40">01—04</span>
      </div>

      <p className="mb-0 mt-7 max-w-[440px] text-[1.18rem] font-black leading-[1.4] text-white [[lang=km]_&]:leading-[1.65]">
        <LocalizedText value={copy.usefulFirstMessage} />
      </p>

      <div className="mt-7 bg-white/[0.07] p-5">
        <p className="m-0 text-[0.86rem] leading-[1.65] text-[#D8E8F1]">
          <LocalizedText value={copy.exampleGreeting} />
          <br />
          <LocalizedText value={copy.exampleLocation} />
          <br />
          <LocalizedText value={copy.exampleNeed} />
        </p>
      </div>

      <a
        className="mt-4 inline-flex min-h-11 items-center gap-2 py-2 text-[0.82rem] font-black text-brand-dark-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#082B50]"
        href="#contact-channels"
      >
        <LocalizedText value={copy.chooseContactChannel} />
        <ArrowRight className="size-4 -rotate-90" />
      </a>
    </div>
  );
}

export default function HotlinePage() {
  return (
    <main className="overflow-hidden bg-white text-brand-ink">
      <section className="relative isolate overflow-hidden border-b border-brand-border-subtle bg-brand-surface-hero">
        <div className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(circle_at_78%_28%,rgba(0,190,218,0.18),transparent_30%),linear-gradient(120deg,#FFFFFF_0%,#F5FAFF_49%,#E6F6FC_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-20 opacity-42 [background-image:linear-gradient(rgba(0,119,185,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,119,185,0.06)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:linear-gradient(to_right,transparent,black_46%,black)]" />
        <div className="pointer-events-none absolute -bottom-48 -left-28 -z-10 size-[490px] rounded-full bg-[#38BDF8]/10 blur-[110px]" />

        <div className={`${pageInner} grid min-h-[700px] grid-cols-[minmax(0,0.94fr)_minmax(450px,0.86fr)] items-center gap-[74px] py-[72px] max-[1080px]:grid-cols-1 max-[1080px]:gap-10 max-[1080px]:py-[68px] max-[640px]:py-[52px]`}>
          <div className={`${heroEnterCopy} max-w-[680px]`}>
            <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-brand-border bg-white/75 px-4 py-2 text-[0.72rem] font-black uppercase tracking-[0.13em] text-brand-accent shadow-[0_8px_24px_rgba(11,94,137,0.06)] [[lang=km]_&]:tracking-normal">
              <span className="size-1.5 rounded-full bg-[#08A9CC] shadow-[0_0_12px_rgba(8,169,204,0.45)]" />
              <LocalizedText value={copy.heroEyebrow} />
            </p>

            <h1 className="m-0 text-[clamp(2.75rem,5.2vw,4.7rem)] font-black leading-[1.12] tracking-[-0.01em] text-brand-ink [text-wrap:balance] [[lang=km]_&]:leading-[1.5] [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.heroTitleLead} />{" "}
              <span className="text-brand-highlight">
                <LocalizedText value={copy.heroTitleAccent} />
              </span>
            </h1>

            <p className="mb-0 mt-6 max-w-[620px] text-[1.06rem] leading-[1.74] text-brand-copy max-[640px]:text-[1rem]">
              <LocalizedText value={copy.heroCopy} />
            </p>

            <div className="mt-8 flex flex-wrap gap-3 max-[520px]:grid max-[520px]:grid-cols-1">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] bg-brand-primary px-6 py-3 text-center text-[0.94rem] font-black leading-[1.4] text-white shadow-[0_16px_34px_rgba(0,103,172,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2"
                href="#contact-channels"
              >
                <PhoneCall className="size-[18px]" />
                <LocalizedText value={copy.callPrimary} />
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] border border-brand-border bg-white/75 px-6 py-3 text-center text-[0.94rem] font-bold leading-[1.4] text-brand-link transition duration-200 hover:-translate-y-0.5 hover:border-brand-border-hover hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2"
                href={salesUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-[18px]" />
                <LocalizedText value={copy.messageTelegram} />
                <span className="sr-only">
                  <LocalizedText value={copy.opensNewTab} />
                </span>
              </a>
            </div>
          </div>

          <div className={heroEnterVisual}>
            <HotlineConsole />
          </div>
        </div>
      </section>

      <section className="py-[112px] max-[640px]:py-[76px]">
        <div className={`${pageInner} grid grid-cols-[minmax(280px,0.72fr)_minmax(0,1.08fr)] items-start gap-[88px] max-[980px]:grid-cols-1 max-[980px]:gap-12`}>
          <div className="max-w-[520px]">
            <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-brand-accent [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.routerEyebrow} />
            </p>
            <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.25rem)] font-black leading-[1.18] tracking-[-0.015em] text-[#071D3B] [text-wrap:balance] [[lang=km]_&]:leading-[1.58] [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.routerTitle} />
            </h2>
            <p className="mb-0 mt-6 text-[1rem] leading-[1.74] text-[#58718D]">
              <LocalizedText value={copy.routerCopy} />
            </p>
          </div>

          <ol className="m-0 list-none border-t border-[#BFD4E4] p-0">
            {requestTypes.map((item) => {
              const Icon = item.icon;

              return (
                <li className="grid grid-cols-[52px_minmax(0,1fr)_auto] items-center gap-5 border-b border-[#D9E5ED] py-7 max-[620px]:grid-cols-[48px_minmax(0,1fr)]" key={item.number}>
                  <span className="flex size-[52px] items-center justify-center rounded-full border border-brand-border text-brand-accent max-[620px]:size-12">
                    <Icon className="size-[22px]" />
                  </span>
                  <div>
                    <h3 className="m-0 text-[1.12rem] font-black leading-[1.42] text-[#092448] [[lang=km]_&]:leading-[1.6]">
                      <LocalizedText value={item.title} />
                    </h3>
                    <p className="mb-0 mt-2 text-[0.94rem] leading-[1.66] text-[#5A738E]">
                      <LocalizedText value={item.text} />
                    </p>
                  </div>
                  <div className="min-w-[170px] text-right max-[620px]:col-[2] max-[620px]:min-w-0 max-[620px]:text-left">
                    <span aria-hidden="true" className="text-[0.68rem] font-black tracking-[0.12em] text-[#6F899D]">{item.number}</span>
                    <p className="mb-0 mt-2 text-[0.72rem] font-black leading-[1.45] text-brand-accent">
                      <LocalizedText value={item.note} />
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="scroll-mt-[90px] bg-brand-dark py-[72px] text-white max-[640px]:py-[58px]" id="contact-channels">
        <div className={pageInner}>
          <div className="grid grid-cols-[minmax(280px,0.8fr)_minmax(0,1fr)] items-end gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-6">
            <div>
              <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-brand-dark-accent [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.contactEyebrow} />
              </p>
              <h2 className="mb-0 mt-4 text-[clamp(2rem,3.4vw,2.9rem)] font-black leading-[1.18] tracking-[-0.015em] [text-wrap:balance] [[lang=km]_&]:leading-[1.58] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.contactTitle} />
              </h2>
            </div>
            <div>
              <p className="m-0 max-w-[600px] text-[0.96rem] leading-[1.7] text-brand-dark-copy">
                <LocalizedText value={copy.contactCopy} />
              </p>
              <Link
                className="mt-3 inline-flex min-h-11 items-center gap-2 py-2 text-[0.86rem] font-black text-brand-dark-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
                href="/support/social-media"
              >
                <LocalizedText value={copy.socialContact} />
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-12 gap-px bg-white/15 p-px max-[900px]:grid-cols-2 max-[620px]:grid-cols-1">
            <article className="col-span-4 bg-brand-dark p-6 max-[900px]:col-span-2 max-[620px]:col-span-1">
              <span className="flex size-11 items-center justify-center rounded-[10px] bg-white/[0.07] text-brand-dark-accent">
                <PhoneCall className="size-[21px]" />
              </span>
              <h3 className="mb-0 mt-5 text-[1.05rem] font-black leading-[1.42]">
                <LocalizedText value={copy.phoneNumbers} />
              </h3>
              <p className="mb-0 mt-2 text-[0.82rem] text-[#AFC4D6]">
                <LocalizedText value={copy.twoPublishedNumbers} />
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {[phoneOne, phoneTwo].map((phone) => (
                  <a
                    className="inline-flex min-h-11 items-center gap-2 border border-white/20 px-3.5 text-[0.86rem] font-black text-white transition hover:border-brand-dark-accent hover:text-brand-dark-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
                    dir="ltr"
                    href={phone.href}
                    key={phone.display}
                  >
                    <PhoneCall className="size-4" />
                    {phone.display}
                  </a>
                ))}
              </div>
            </article>

            <a
              className="group col-span-2 bg-brand-dark p-6 transition hover:bg-brand-dark-cta focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-dark-accent max-[900px]:col-span-1"
              href={salesUrl}
              rel="noreferrer"
              target="_blank"
            >
              <span className="flex size-11 items-center justify-center rounded-[10px] bg-white/[0.07] text-[#71E2EC]">
                <MessageCircle className="size-[21px]" />
              </span>
              <h3 className="mb-0 mt-5 text-[1.02rem] font-black leading-[1.42]">
                <LocalizedText value={copy.telegramSales} />
              </h3>
              <span className="sr-only">
                <LocalizedText value={copy.opensNewTab} />
              </span>
              <p className="mb-0 mt-2 text-[0.82rem] leading-[1.55] text-[#AFC4D6]">
                <LocalizedText value={copy.sharePinAndDetails} />
              </p>
              <ArrowRight className="mt-5 size-4 text-brand-dark-accent transition group-hover:translate-x-1" />
            </a>

            <a
              className="group col-span-3 bg-brand-dark p-6 transition hover:bg-brand-dark-cta focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-dark-accent max-[900px]:col-span-1"
              href={email.href}
            >
              <span className="flex size-11 items-center justify-center rounded-[10px] bg-white/[0.07] text-[#71E2EC]">
                <Mail className="size-[21px]" />
              </span>
              <h3 className="mb-0 mt-5 text-[1.02rem] font-black leading-[1.42]">
                <LocalizedText value={copy.generalEmail} />
              </h3>
              <p className="mb-0 mt-2 break-all text-[0.82rem] leading-[1.55] text-[#AFC4D6]">{email.display}</p>
              <ArrowRight className="mt-5 size-4 text-brand-dark-accent transition group-hover:translate-x-1" />
            </a>

            <a
              className="group col-span-3 bg-brand-dark p-6 transition hover:bg-brand-dark-cta focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-dark-accent max-[900px]:col-span-2 max-[620px]:col-span-1"
              href={officeMapUrl}
              rel="noreferrer"
              target="_blank"
            >
              <span className="flex size-11 items-center justify-center rounded-[10px] bg-white/[0.07] text-[#71E2EC]">
                <MapPin className="size-[21px]" />
              </span>
              <h3 className="mb-0 mt-5 text-[1.02rem] font-black leading-[1.42]">
                <LocalizedText value={copy.officeLocation} />
              </h3>
              <span className="sr-only">
                <LocalizedText value={copy.opensNewTab} />
              </span>
              <p className="mb-0 mt-2 text-[0.82rem] leading-[1.55] text-[#AFC4D6]">
                <LocalizedText
                  value={{
                    en: address,
                    km: "ផ្ទះលេខ ២៩ មហាវិថីម៉ៅសេទុង សង្កាត់ទួលទំពូងទី២ ខណ្ឌចំការមន រាជធានីភ្នំពេញ",
                  }}
                />
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-[0.74rem] font-black text-[#71E2EC]">
                <LocalizedText value={copy.openMap} />
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
