import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Building2,
  CircleDot,
  Cloud,
  Gauge,
  Globe2,
  Headphones,
  Network,
  Route,
  Server,
  ShieldCheck,
  Waypoints,
} from "lucide-react";
import LocalizedText, {
  type LocalizedString,
} from "@/components/LocalizedText";
import { salesUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "IP Transit | Fast One Cambodia",
  description:
    "Carrier-grade IP Transit from Fast One Cambodia for operators and businesses that need scalable upstream connectivity and local technical support.",
};

const pageInner =
  "mx-auto w-[min(1240px,calc(100%_-_80px))] max-[980px]:w-[min(100%_-_40px,760px)] max-[640px]:w-[min(100%_-_28px,560px)]";

const copy = {
  heroEyebrow: {
    en: "Fast One IP Transit",
    km: "សេវា IP Transit របស់ Fast One",
  },
  heroTitleLead: {
    en: "IP Transit that keeps your",
    km: "IP Transit ដែលរក្សាបណ្តាញរបស់អ្នក",
  },
  heroTitleAccent: {
    en: "network moving.",
    km: "ឱ្យដំណើរការជានិច្ច",
  },
  heroCopy: {
    en: "Reliable upstream connectivity for operators and ambitious businesses—planned around your traffic, capacity, and growth.",
    km: "ការតភ្ជាប់បណ្តាញអន្តរជាតិដែលអាចទុកចិត្តបាន សម្រាប់ប្រតិបត្តិករ និងអាជីវកម្មដែលកំពុងរីកចម្រើន ដោយរៀបចំទៅតាមចរាចរណ៍ សមត្ថភាព និងផែនការរបស់អ្នក",
  },
  talkToSpecialist: {
    en: "Talk to a network specialist",
    km: "ពិគ្រោះជាមួយអ្នកជំនាញបណ្តាញ",
  },
  exploreCapabilities: {
    en: "Explore capabilities",
    km: "ស្វែងយល់ពីសមត្ថភាពសេវា",
  },
  networkPath: { en: "Network path", km: "ផ្លូវបណ្តាញ" },
  online: { en: "Connected", km: "បានតភ្ជាប់" },
  customerNetwork: { en: "Your network", km: "បណ្តាញរបស់អ្នក" },
  fastOneEdge: { en: "Fast One edge", km: "បណ្តាញ Fast One" },
  globalInternet: { en: "Global internet", km: "អ៊ីនធឺណិតសកល" },
  capacity: { en: "Capacity", km: "សមត្ថភាព" },
  scalable: { en: "Scalable", km: "អាចពង្រីកបាន" },
  planning: { en: "Planning", km: "ការរៀបចំ" },
  requirementLed: { en: "Requirement-led", km: "ផ្អែកតាមតម្រូវការ" },
  technicalSupport: { en: "Technical support", km: "ជំនួយបច្ចេកទេស" },
  localTeam: { en: "Local team", km: "ក្រុមការងារក្នុងស្រុក" },
  builtForEyebrow: { en: "Built for critical traffic", km: "សម្រាប់ចរាចរណ៍ទិន្នន័យសំខាន់ៗ" },
  builtForTitle: {
    en: "More control between your network and the internet.",
    km: "គ្រប់គ្រងការតភ្ជាប់រវាងបណ្តាញរបស់អ្នក និងអ៊ីនធឺណិតបានកាន់តែប្រសើរ",
  },
  builtForCopy: {
    en: "Move beyond shared connectivity with an upstream service designed through a direct technical conversation—not a one-size-fits-all package.",
    km: "លើសពីការតភ្ជាប់រួម ជាមួយសេវាបណ្តាញអន្តរជាតិដែលត្រូវបានរៀបចំតាមរយៈការពិភាក្សាបច្ចេកទេសផ្ទាល់ មិនមែនជាកញ្ចប់តែមួយសម្រាប់គ្រប់គ្នាទេ",
  },
  architectureEyebrow: { en: "How it connects", km: "របៀបនៃការតភ្ជាប់" },
  architectureTitle: {
    en: "One clear path from your infrastructure to the wider internet.",
    km: "ផ្លូវតភ្ជាប់ច្បាស់លាស់មួយ ពីហេដ្ឋារចនាសម្ព័ន្ធរបស់អ្នកទៅកាន់អ៊ីនធឺណិតសកល",
  },
  architectureCopy: {
    en: "Fast One connects your network to upstream internet capacity, with the service scope shaped around your locations, traffic profile, and operating priorities.",
    km: "Fast One តភ្ជាប់បណ្តាញរបស់អ្នកទៅកាន់សមត្ថភាពអ៊ីនធឺណិតអន្តរជាតិ ដោយកំណត់សេវាតាមទីតាំង ទម្រង់ចរាចរណ៍ទិន្នន័យ និងអាទិភាពប្រតិបត្តិការរបស់អ្នក",
  },
  yourInfrastructure: { en: "Your infrastructure", km: "ហេដ្ឋារចនាសម្ព័ន្ធរបស់អ្នក" },
  fastOneNetwork: { en: "Fast One network", km: "បណ្តាញ Fast One" },
  upstreamReach: { en: "Upstream reach", km: "ការតភ្ជាប់អន្តរជាតិ" },
  trafficOrigin: { en: "Traffic origin", km: "ប្រភពចរាចរណ៍" },
  engineeredHandoff: { en: "Engineered handoff", km: "ការតភ្ជាប់បច្ចេកទេស" },
  internetDestinations: { en: "Internet destinations", km: "គោលដៅអ៊ីនធឺណិត" },
  capabilitiesEyebrow: { en: "Core capabilities", km: "សមត្ថភាពសេវាស្នូល" },
  capabilitiesTitle: {
    en: "The network foundation behind consistent digital operations.",
    km: "មូលដ្ឋានបណ្តាញសម្រាប់ប្រតិបត្តិការឌីជីថលដែលមានស្ថិរភាព",
  },
  capabilitiesCopy: {
    en: "A practical IP Transit service should match the way your network operates today and leave room for what comes next.",
    km: "សេវា IP Transit ដែលមានប្រសិទ្ធភាព គួរតែសមស្របនឹងរបៀបដំណើរការបណ្តាញរបស់អ្នកសព្វថ្ងៃ និងអាចពង្រីកសម្រាប់អនាគត",
  },
  rightFitEyebrow: { en: "Who it is for", km: "សម្រាប់អង្គភាពណាខ្លះ" },
  rightFitTitle: {
    en: "For teams whose internet connection is infrastructure—not a utility.",
    km: "សម្រាប់ក្រុមដែលចាត់ទុកការតភ្ជាប់អ៊ីនធឺណិតជាហេដ្ឋារចនាសម្ព័ន្ធសំខាន់ មិនមែនគ្រាន់តែជាសេវាទូទៅ",
  },
  rightFitCopy: {
    en: "IP Transit is a strong fit when traffic volume, customer experience, or business continuity depends on a more deliberate upstream connection.",
    km: "IP Transit សមស្របនៅពេលបរិមាណចរាចរណ៍ បទពិសោធន៍អតិថិជន ឬនិរន្តរភាពអាជីវកម្ម ពឹងផ្អែកលើការតភ្ជាប់អន្តរជាតិដែលបានរៀបចំយ៉ាងច្បាស់លាស់",
  },
  processEyebrow: { en: "A practical service path", km: "ដំណើរការសេវាដែលច្បាស់លាស់" },
  processTitle: {
    en: "From requirement to a network-ready plan.",
    km: "ពីតម្រូវការ ទៅកាន់ផែនការបណ្តាញដែលត្រៀមរួចរាល់",
  },
  ctaEyebrow: { en: "Start the technical conversation", km: "ចាប់ផ្តើមការពិភាក្សាបច្ចេកទេស" },
  ctaTitle: {
    en: "Tell us what your network needs to carry.",
    km: "ប្រាប់យើងពីតម្រូវការចរាចរណ៍របស់បណ្តាញអ្នក",
  },
  ctaCopy: {
    en: "Share your locations, expected capacity, and operating priorities. Fast One will help shape the next technical step.",
    km: "ផ្ញើទីតាំង សមត្ថភាពដែលរំពឹងទុក និងអាទិភាពប្រតិបត្តិការរបស់អ្នក Fast One នឹងជួយរៀបចំជំហានបច្ចេកទេសបន្ទាប់",
  },
  contactSales: { en: "Contact Fast One sales", km: "ទាក់ទងផ្នែកលក់ Fast One" },
  businessOverview: { en: "View all business services", km: "មើលសេវាអាជីវកម្មទាំងអស់" },
} satisfies Record<string, LocalizedString>;

const serviceValues = [
  {
    icon: Route,
    title: { en: "Purpose-built routing", km: "ការរៀបចំផ្លូវបណ្តាញតាមតម្រូវការ" },
    text: {
      en: "Start with your network requirement and traffic profile so the service conversation stays technically relevant.",
      km: "ចាប់ផ្តើមពីតម្រូវការបណ្តាញ និងទម្រង់ចរាចរណ៍របស់អ្នក ដើម្បីឱ្យការរៀបចំសេវាមានភាពសមស្របផ្នែកបច្ចេកទេស",
    },
  },
  {
    icon: Gauge,
    title: { en: "Capacity that can grow", km: "សមត្ថភាពដែលអាចពង្រីកបាន" },
    text: {
      en: "Plan bandwidth around current demand while keeping future traffic and service growth in view.",
      km: "រៀបចំកម្រិតបញ្ជូនតាមតម្រូវការបច្ចុប្បន្ន និងគិតគូរពីកំណើនចរាចរណ៍នាពេលអនាគត",
    },
  },
  {
    icon: ShieldCheck,
    title: { en: "Operational confidence", km: "ទំនុកចិត្តក្នុងប្រតិបត្តិការ" },
    text: {
      en: "Define availability, handoff, and support expectations before activation so teams can plan with clarity.",
      km: "កំណត់លទ្ធភាព ទម្រង់តភ្ជាប់ និងការគាំទ្រមុនពេលដំណើរការ ដើម្បីឱ្យក្រុមរបស់អ្នកអាចរៀបចំបានច្បាស់លាស់",
    },
  },
] satisfies Array<{
  icon: typeof Route;
  title: LocalizedString;
  text: LocalizedString;
}>;

const capabilities = [
  {
    number: "01",
    icon: Waypoints,
    title: { en: "Upstream connectivity", km: "ការតភ្ជាប់បណ្តាញអន្តរជាតិ" },
    text: {
      en: "A carrier-grade service path for moving traffic between your network and global internet destinations.",
      km: "ផ្លូវសេវាកម្រិតប្រតិបត្តិករ សម្រាប់បញ្ជូនចរាចរណ៍រវាងបណ្តាញរបស់អ្នក និងគោលដៅអ៊ីនធឺណិតសកល",
    },
  },
  {
    number: "02",
    icon: Activity,
    title: { en: "Traffic-led planning", km: "ការរៀបចំតាមចរាចរណ៍ទិន្នន័យ" },
    text: {
      en: "Capacity discussions informed by usage patterns, growth expectations, and business-critical applications.",
      km: "ការពិភាក្សាសមត្ថភាពដោយផ្អែកលើរបៀបប្រើប្រាស់ កំណើនរំពឹងទុក និងកម្មវិធីសំខាន់ៗរបស់អាជីវកម្ម",
    },
  },
  {
    number: "03",
    icon: Network,
    title: { en: "Clear service handoff", km: "ទម្រង់តភ្ជាប់សេវាច្បាស់លាស់" },
    text: {
      en: "Technical coordination around your site, network edge, and the service handoff needed for activation.",
      km: "ការសម្របសម្រួលបច្ចេកទេសជុំវិញទីតាំង បណ្តាញចុងរបស់អ្នក និងការតភ្ជាប់សេវាដែលត្រូវការសម្រាប់ដំណើរការ",
    },
  },
  {
    number: "04",
    icon: Headphones,
    title: { en: "Local coordination", km: "ការសម្របសម្រួលក្នុងស្រុក" },
    text: {
      en: "Work with a Cambodia-based team through feasibility, service planning, and operational follow-up.",
      km: "ធ្វើការជាមួយក្រុមការងារនៅកម្ពុជា ចាប់ពីការវាយតម្លៃលទ្ធភាព ការរៀបចំសេវា រហូតដល់ការតាមដានប្រតិបត្តិការ",
    },
  },
] satisfies Array<{
  number: string;
  icon: typeof Waypoints;
  title: LocalizedString;
  text: LocalizedString;
}>;

const useCases = [
  {
    icon: Server,
    title: { en: "ISPs & network operators", km: "ISP និងប្រតិបត្តិករបណ្តាញ" },
    text: {
      en: "Add upstream capacity that supports customer traffic and network growth.",
      km: "បន្ថែមសមត្ថភាពអន្តរជាតិដើម្បីគាំទ្រចរាចរណ៍អតិថិជន និងការរីកចម្រើនបណ្តាញ",
    },
  },
  {
    icon: Cloud,
    title: { en: "Digital platforms", km: "វេទិកាឌីជីថល" },
    text: {
      en: "Support data-heavy services, cloud workflows, and customer-facing applications.",
      km: "គាំទ្រសេវាដែលប្រើទិន្នន័យច្រើន ដំណើរការលើ cloud និងកម្មវិធីសម្រាប់អតិថិជន",
    },
  },
  {
    icon: Building2,
    title: { en: "Enterprise networks", km: "បណ្តាញសហគ្រាស" },
    text: {
      en: "Build a stronger upstream foundation for critical sites and business systems.",
      km: "បង្កើតមូលដ្ឋានការតភ្ជាប់អន្តរជាតិដ៏រឹងមាំសម្រាប់ទីតាំង និងប្រព័ន្ធអាជីវកម្មសំខាន់ៗ",
    },
  },
] satisfies Array<{
  icon: typeof Server;
  title: LocalizedString;
  text: LocalizedString;
}>;

const processSteps = [
  {
    number: "01",
    title: { en: "Share the requirement", km: "ផ្ញើតម្រូវការរបស់អ្នក" },
    text: {
      en: "Tell us the locations, expected capacity, traffic profile, and target timeline.",
      km: "ប្រាប់យើងពីទីតាំង សមត្ថភាពរំពឹងទុក ទម្រង់ចរាចរណ៍ និងពេលវេលាដែលចង់បាន",
    },
  },
  {
    number: "02",
    title: { en: "Shape the service", km: "រៀបចំទម្រង់សេវា" },
    text: {
      en: "Fast One reviews feasibility and aligns the proposed service with your network needs.",
      km: "Fast One ពិនិត្យលទ្ធភាព និងរៀបចំសេវាដែលបានស្នើឱ្យស្របនឹងតម្រូវការបណ្តាញរបស់អ្នក",
    },
  },
  {
    number: "03",
    title: { en: "Coordinate activation", km: "សម្របសម្រួលការដំណើរការ" },
    text: {
      en: "Confirm the handoff, implementation details, and support path before going live.",
      km: "បញ្ជាក់ទម្រង់តភ្ជាប់ ព័ត៌មានលម្អិតនៃការអនុវត្ត និងផ្លូវគាំទ្រមុនពេលដំណើរការផ្លូវការ",
    },
  },
] satisfies Array<{
  number: string;
  title: LocalizedString;
  text: LocalizedString;
}>;

function NetworkVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[590px] p-4 max-[640px]:p-3">
      <div className="relative flex items-center justify-between border-b border-[#D2E5EE] px-2 pb-3">
        <div className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#59758C] [[lang=km]_&]:tracking-normal">
          <CircleDot className="size-3.5 text-[#008FB5]" />
          <LocalizedText value={copy.networkPath} />
        </div>
        <div className="flex items-center gap-2 text-[0.72rem] font-bold text-[#087D88]">
          <span className="size-1.5 animate-pulse rounded-full bg-[#19B98A] shadow-[0_0_10px_rgba(25,185,138,0.45)]" />
          <LocalizedText value={copy.online} />
        </div>
      </div>

      <div className="relative h-[360px] max-[640px]:h-[315px]" aria-hidden="true">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 720 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="transitRoute" x1="120" y1="220" x2="640" y2="220" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0077B9" />
              <stop offset="0.55" stopColor="#00A9C7" />
              <stop offset="1" stopColor="#48CDDD" />
            </linearGradient>
            <radialGradient id="transitCore" cx="0" cy="0" r="1" gradientTransform="translate(361 220) rotate(90) scale(76)">
              <stop stopColor="#08A9CC" stopOpacity="0.22" />
              <stop offset="1" stopColor="#08A9CC" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="361" cy="220" r="82" fill="url(#transitCore)" />
          <circle className="ip-transit-ring" cx="361" cy="220" r="48" stroke="#009FC5" strokeOpacity="0.38" />
          <circle className="ip-transit-ring ip-transit-ring--delay" cx="361" cy="220" r="67" stroke="#009FC5" strokeOpacity="0.16" />

          <path d="M116 220C184 220 238 220 310 220" stroke="#A8CAD9" strokeWidth="2" />
          <path d="M412 220C485 220 525 164 607 134" stroke="#A8CAD9" strokeWidth="2" />
          <path d="M412 220C493 220 538 220 624 220" stroke="#A8CAD9" strokeWidth="2" />
          <path d="M412 220C485 220 525 276 607 306" stroke="#A8CAD9" strokeWidth="2" />

          <path className="ip-transit-route" d="M116 220C184 220 238 220 310 220" stroke="url(#transitRoute)" strokeWidth="3" />
          <path className="ip-transit-route ip-transit-route--delay" d="M412 220C485 220 525 164 607 134" stroke="url(#transitRoute)" strokeWidth="3" />
          <path className="ip-transit-route" d="M412 220C493 220 538 220 624 220" stroke="url(#transitRoute)" strokeWidth="3" />
          <path className="ip-transit-route ip-transit-route--delay" d="M412 220C485 220 525 276 607 306" stroke="url(#transitRoute)" strokeWidth="3" />

          <circle cx="116" cy="220" r="6" fill="#008FB5" />
          <circle cx="361" cy="220" r="11" fill="#08A9CC" />
          <circle cx="361" cy="220" r="4" fill="white" />
          <circle cx="607" cy="134" r="6" fill="#008FB5" />
          <circle cx="624" cy="220" r="6" fill="#008FB5" />
          <circle cx="607" cy="306" r="6" fill="#008FB5" />
        </svg>

        <div className="absolute left-[4%] top-1/2 -translate-y-1/2">
          <span className="ip-transit-node flex size-14 items-center justify-center rounded-[14px] border border-[#9FD2E4] bg-[#EAF7FC] text-[#0077B9] shadow-[0_14px_30px_rgba(16,92,130,0.12)] max-[640px]:size-12">
            <Server className="size-6 max-[640px]:size-5" />
          </span>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="ip-transit-node flex size-[76px] items-center justify-center rounded-full border border-[#72CBE0] bg-white text-[#008DB4] shadow-[0_0_44px_rgba(8,169,204,0.18)] max-[640px]:size-[64px]">
            <Network className="size-8 max-[640px]:size-7" />
          </span>
        </div>
        <div className="absolute right-[2%] top-1/2 -translate-y-1/2">
          <span className="ip-transit-node flex size-16 items-center justify-center rounded-full border border-[#9FD2E4] bg-[#EAF7FC] text-[#0077B9] shadow-[0_14px_30px_rgba(16,92,130,0.12)] max-[640px]:size-14">
            <Globe2 className="size-7 max-[640px]:size-6" />
          </span>
        </div>
      </div>

      <div className="relative grid grid-cols-3 overflow-hidden rounded-[10px] border border-[#C8DFE9] bg-[#F1F9FC]/90 max-[520px]:grid-cols-1">
        {[
          [copy.capacity, copy.scalable],
          [copy.planning, copy.requirementLed],
          [copy.technicalSupport, copy.localTeam],
        ].map(([label, value], index) => (
          <div
            className={`px-4 py-3.5 ${index > 0 ? "border-l border-[#D5E7EE] max-[520px]:border-l-0 max-[520px]:border-t" : ""}`}
            key={(label as { en: string }).en}
          >
            <p className="m-0 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[#6C8799] [[lang=km]_&]:tracking-normal">
              <LocalizedText value={label} />
            </p>
            <p className="mb-0 mt-1 text-[0.78rem] font-bold text-[#0A3159]">
              <LocalizedText value={value} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function IpTransitPage() {
  return (
    <main className="overflow-hidden bg-white text-[#081B37]">
      <section className="relative isolate overflow-hidden border-b border-[#CFE3EF] bg-[#F5FAFF] text-[#071D3B]">
        <div className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(circle_at_76%_24%,rgba(0,194,255,0.2),transparent_32%),linear-gradient(120deg,#FFFFFF_0%,#F5FAFF_48%,#DFF4FF_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-20 opacity-50 [background-image:linear-gradient(rgba(0,119,185,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,119,185,0.07)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_right,transparent,black_42%,black)]" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 -z-10 size-[460px] rounded-full bg-[#38BDF8]/12 blur-[100px]" />

        <div className={`${pageInner} grid min-h-[660px] grid-cols-[minmax(0,0.92fr)_minmax(440px,0.88fr)] items-center gap-[72px] py-[72px] max-[1080px]:grid-cols-1 max-[1080px]:gap-12 max-[1080px]:py-[68px] max-[640px]:py-[52px]`}>
          <div className="max-w-[680px]">
            <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#A9D8E9] bg-white/70 px-4 py-2 text-[0.72rem] font-black uppercase tracking-[0.13em] text-[#0077A8] shadow-[0_8px_24px_rgba(11,94,137,0.06)] [[lang=km]_&]:tracking-normal">
              <span className="size-1.5 rounded-full bg-[#08A9CC] shadow-[0_0_12px_rgba(8,169,204,0.5)]" />
              <LocalizedText value={copy.heroEyebrow} />
            </p>

            <h1 className="m-0 text-[clamp(2.7rem,5.4vw,4.75rem)] font-black leading-[1.12] tracking-[-0.01em] text-[#071D3B] [text-wrap:balance] [[lang=km]_&]:leading-[1.5] [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.heroTitleLead} />{" "}
              <span className="text-[#009FC5]">
                <LocalizedText value={copy.heroTitleAccent} />
              </span>
            </h1>

            <p className="mb-0 mt-6 max-w-[620px] text-[1.08rem] leading-[1.72] text-[#526F8D] max-[640px]:text-[1rem]">
              <LocalizedText value={copy.heroCopy} />
            </p>

            <div className="mt-8 flex flex-wrap gap-3 max-[520px]:grid max-[520px]:grid-cols-1">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] bg-[#0067AC] px-6 text-[0.94rem] font-black text-white shadow-[0_16px_34px_rgba(0,103,172,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#008FC1]"
                href={salesUrl}
                target="_blank"
                rel="noreferrer"
              >
                <LocalizedText value={copy.talkToSpecialist} />
                <ArrowRight className="size-4.5" />
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] border border-[#9FCDE2] bg-white/70 px-6 text-[0.94rem] font-bold text-[#075A85] transition duration-200 hover:-translate-y-0.5 hover:border-[#50B4D1] hover:bg-white"
                href="#capabilities"
              >
                <LocalizedText value={copy.exploreCapabilities} />
              </a>
            </div>
          </div>

          <NetworkVisual />
        </div>
      </section>

      <section className="relative z-10 -mt-px border-b border-[#DDE9F2] bg-white" aria-labelledby="service-value-title">
        <div className={`${pageInner} grid grid-cols-3 max-[860px]:grid-cols-1`}>
          {serviceValues.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className={`flex min-h-[176px] gap-4 px-8 py-9 max-[980px]:px-5 max-[860px]:min-h-0 max-[860px]:px-0 ${index > 0 ? "border-l border-[#DDE9F2] max-[860px]:border-l-0 max-[860px]:border-t" : ""}`}
                key={item.title.en}
              >
                <span className="flex size-11 flex-none items-center justify-center rounded-[10px] bg-[#E9F6FC] text-[#0077B9]">
                  <Icon className="size-[22px]" />
                </span>
                <div>
                  <h2 className="m-0 text-[1.05rem] font-black leading-[1.35] text-[#092448] [[lang=km]_&]:leading-[1.55]" id={index === 0 ? "service-value-title" : undefined}>
                    <LocalizedText value={item.title} />
                  </h2>
                  <p className="mb-0 mt-2 text-[0.9rem] leading-[1.62] text-[#56708D]">
                    <LocalizedText value={item.text} />
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-[112px] max-[640px]:py-[76px]">
        <div className={`${pageInner} grid grid-cols-[minmax(280px,0.78fr)_minmax(0,1.12fr)] items-start gap-[88px] max-[980px]:grid-cols-1 max-[980px]:gap-12`}>
          <div className="max-w-[510px]">
            <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-[#0077B9] [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.builtForEyebrow} />
            </p>
            <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.35rem)] font-black leading-[1.14] tracking-[-0.02em] text-[#071D3B] [text-wrap:balance] [[lang=km]_&]:leading-[1.5] [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.builtForTitle} />
            </h2>
            <p className="mb-0 mt-5 text-[1rem] leading-[1.72] text-[#58718D]">
              <LocalizedText value={copy.builtForCopy} />
            </p>
          </div>

          <div className="border-t border-[#BFD4E4]">
            {[
              {
                icon: Activity,
                title: { en: "Predictable service conversations", km: "ការពិភាក្សាសេវាដែលច្បាស់លាស់" },
                text: { en: "Align capacity, technical scope, and expectations before activation.", km: "កំណត់សមត្ថភាព វិសាលភាពបច្ចេកទេស និងការរំពឹងទុកមុនពេលដំណើរការ" },
              },
              {
                icon: Gauge,
                title: { en: "Room for traffic growth", km: "សមត្ថភាពសម្រាប់កំណើនចរាចរណ៍" },
                text: { en: "Plan for today's demand without losing sight of tomorrow's network.", km: "រៀបចំសម្រាប់តម្រូវការថ្ងៃនេះ ដោយមិនរំលងផែនការបណ្តាញថ្ងៃអនាគត" },
              },
              {
                icon: Headphones,
                title: { en: "A local technical path", km: "ផ្លូវគាំទ្របច្ចេកទេសក្នុងស្រុក" },
                text: { en: "Keep service planning and operational follow-up close to your team.", km: "រក្សាការរៀបចំសេវា និងការតាមដានប្រតិបត្តិការឱ្យនៅជិតក្រុមរបស់អ្នក" },
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article className="grid grid-cols-[52px_minmax(0,1fr)] gap-5 border-b border-[#D9E5ED] py-7" key={item.title.en}>
                  <span className="flex size-[52px] items-center justify-center rounded-full border border-[#B9D6E8] text-[#0077B9]">
                    <Icon className="size-[22px]" />
                  </span>
                  <div>
                    <h3 className="m-0 text-[1.12rem] font-black leading-[1.35] text-[#092448] [[lang=km]_&]:leading-[1.55]">
                      <LocalizedText value={item.title} />
                    </h3>
                    <p className="mb-0 mt-2 text-[0.94rem] leading-[1.62] text-[#5A738E]">
                      <LocalizedText value={item.text} />
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F2F8FC] py-[108px] max-[640px]:py-[74px]">
        <div className={pageInner}>
          <div className="grid grid-cols-[minmax(0,0.78fr)_minmax(400px,1fr)] items-end gap-16 max-[980px]:grid-cols-1 max-[980px]:gap-8">
            <div>
              <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-[#0077B9] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.architectureEyebrow} />
              </p>
              <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.14] tracking-[-0.02em] text-[#071D3B] [text-wrap:balance] [[lang=km]_&]:leading-[1.5] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.architectureTitle} />
              </h2>
            </div>
            <p className="m-0 max-w-[590px] text-[1rem] leading-[1.72] text-[#58718D]">
              <LocalizedText value={copy.architectureCopy} />
            </p>
          </div>

          <div className="mt-14 overflow-hidden border border-[#CCDDE8] bg-white shadow-[0_24px_60px_rgba(18,62,98,0.08)]">
            <div className="grid min-h-[280px] grid-cols-[1fr_100px_1fr_100px_1fr] items-center px-[clamp(24px,5vw,72px)] py-12 max-[800px]:grid-cols-1 max-[800px]:gap-5">
              {[
                { icon: Server, title: copy.yourInfrastructure, label: copy.trafficOrigin },
                { icon: Network, title: copy.fastOneNetwork, label: copy.engineeredHandoff },
                { icon: Globe2, title: copy.upstreamReach, label: copy.internetDestinations },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div className="contents" key={(item.title as { en: string }).en}>
                    {index > 0 && (
                      <div className="relative flex items-center max-[800px]:h-10 max-[800px]:justify-center" aria-hidden="true">
                        <span className="h-px w-full bg-[#8DCDE5] max-[800px]:h-full max-[800px]:w-px" />
                        <span className="absolute right-0 size-2 rotate-45 border-r-2 border-t-2 border-[#129BC4] max-[800px]:bottom-0 max-[800px]:right-auto max-[800px]:rotate-[135deg]" />
                      </div>
                    )}
                    <article className="text-center">
                      <span className="mx-auto flex size-[76px] items-center justify-center rounded-full border border-[#A9D7E8] bg-[#EDF8FC] text-[#007DB3]">
                        <Icon className="size-8" />
                      </span>
                      <h3 className="mb-0 mt-5 text-[1.08rem] font-black leading-[1.35] text-[#092448] [[lang=km]_&]:leading-[1.55]">
                        <LocalizedText value={item.title} />
                      </h3>
                      <p className="mb-0 mt-1.5 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-[#7990A7] [[lang=km]_&]:tracking-normal">
                        <LocalizedText value={item.label} />
                      </p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-[90px] py-[112px] max-[640px]:py-[76px]" id="capabilities">
        <div className={pageInner}>
          <div className="grid grid-cols-[minmax(0,0.82fr)_minmax(320px,0.55fr)] items-end gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-6">
            <div>
              <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-[#0077B9] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.capabilitiesEyebrow} />
              </p>
              <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.14] tracking-[-0.02em] text-[#071D3B] [text-wrap:balance] [[lang=km]_&]:leading-[1.5] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.capabilitiesTitle} />
              </h2>
            </div>
            <p className="m-0 text-[1rem] leading-[1.72] text-[#58718D]">
              <LocalizedText value={copy.capabilitiesCopy} />
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 border-l border-t border-[#D4E2EB] max-[760px]:grid-cols-1">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article className="relative min-h-[300px] border-b border-r border-[#D4E2EB] p-[clamp(26px,4vw,46px)] transition-colors duration-200 hover:bg-[#F5FAFD] max-[760px]:min-h-0" key={item.number}>
                  <div className="flex items-start justify-between gap-6">
                    <span className="flex size-12 items-center justify-center rounded-[10px] bg-[#E8F6FB] text-[#007EB5]">
                      <Icon className="size-6" />
                    </span>
                    <span className="text-[0.76rem] font-black tracking-[0.12em] text-[#9CB0C1]">{item.number}</span>
                  </div>
                  <h3 className="mb-0 mt-9 text-[1.35rem] font-black leading-[1.35] text-[#092448] [[lang=km]_&]:leading-[1.55]">
                    <LocalizedText value={item.title} />
                  </h3>
                  <p className="mb-0 mt-3 max-w-[460px] text-[0.96rem] leading-[1.68] text-[#5A738E]">
                    <LocalizedText value={item.text} />
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#071E3E] py-[108px] text-white max-[640px]:py-[74px]">
        <div className={pageInner}>
          <div className="grid grid-cols-[minmax(280px,0.7fr)_minmax(0,1.1fr)] gap-[88px] max-[980px]:grid-cols-1 max-[980px]:gap-12">
            <div>
              <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-[#69E1EC] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.rightFitEyebrow} />
              </p>
              <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.14] tracking-[-0.02em] [text-wrap:balance] [[lang=km]_&]:leading-[1.5] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.rightFitTitle} />
              </h2>
              <p className="mb-0 mt-5 text-[1rem] leading-[1.72] text-[#B8CCDE]">
                <LocalizedText value={copy.rightFitCopy} />
              </p>
            </div>

            <div className="border-t border-white/16">
              {useCases.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article className="grid grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-5 border-b border-white/16 py-7 max-[520px]:grid-cols-[44px_minmax(0,1fr)]" key={item.title.en}>
                    <span className="flex size-11 items-center justify-center rounded-[10px] bg-white/[0.07] text-[#71E2EC]">
                      <Icon className="size-[21px]" />
                    </span>
                    <div>
                      <h3 className="m-0 text-[1.08rem] font-black leading-[1.35] text-white [[lang=km]_&]:leading-[1.55]">
                        <LocalizedText value={item.title} />
                      </h3>
                      <p className="mb-0 mt-1.5 text-[0.92rem] leading-[1.58] text-[#AFC4D7]">
                        <LocalizedText value={item.text} />
                      </p>
                    </div>
                    <span className="text-[0.7rem] font-black text-white/30 max-[520px]:hidden">0{index + 1}</span>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F9FC] py-[108px] max-[640px]:py-[74px]">
        <div className={pageInner}>
          <div className="max-w-[720px]">
            <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-[#0077B9] [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.processEyebrow} />
            </p>
            <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.14] tracking-[-0.02em] text-[#071D3B] [text-wrap:balance] [[lang=km]_&]:leading-[1.5] [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.processTitle} />
            </h2>
          </div>

          <ol className="m-0 mt-14 grid list-none grid-cols-3 border-t border-[#B8D0DF] p-0 max-[800px]:grid-cols-1">
            {processSteps.map((step, index) => (
              <li className={`relative pt-8 ${index > 0 ? "border-l border-[#D3E2EB] pl-8 max-[800px]:border-l-0 max-[800px]:border-t max-[800px]:pl-0" : "pr-8 max-[800px]:pr-0"} ${index === 1 ? "pr-8 max-[800px]:pr-0" : ""} max-[800px]:py-8`} key={step.number}>
                <span className="absolute -top-[5px] left-0 size-2.5 rounded-full border-2 border-[#F4F9FC] bg-[#0AAACA] shadow-[0_0_0_2px_#0AAACA] max-[800px]:hidden" />
                <span className="text-[0.72rem] font-black tracking-[0.12em] text-[#0099BC]">{step.number}</span>
                <h3 className="mb-0 mt-4 text-[1.18rem] font-black leading-[1.35] text-[#092448] [[lang=km]_&]:leading-[1.55]">
                  <LocalizedText value={step.title} />
                </h3>
                <p className="mb-0 mt-3 text-[0.94rem] leading-[1.65] text-[#5A738E]">
                  <LocalizedText value={step.text} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-[96px] max-[640px]:py-[64px]">
        <div className={pageInner}>
          <div className="relative isolate grid min-h-[330px] grid-cols-[minmax(0,1fr)_auto] items-center gap-12 overflow-hidden bg-[#0A3159] px-[clamp(28px,6vw,76px)] py-14 text-white shadow-[0_28px_70px_rgba(8,49,89,0.2)] max-[820px]:grid-cols-1">
            <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_35%,rgba(62,223,238,0.2),transparent_26%),linear-gradient(112deg,#082744,#0A4772)]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-1/2 opacity-20 [background-image:linear-gradient(rgba(125,211,252,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.13)_1px,transparent_1px)] [background-size:38px_38px]" />
            <div className="max-w-[720px]">
              <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-[#6FE5EE] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.ctaEyebrow} />
              </p>
              <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.14] tracking-[-0.02em] [text-wrap:balance] [[lang=km]_&]:leading-[1.5] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.ctaTitle} />
              </h2>
              <p className="mb-0 mt-5 max-w-[650px] text-[1rem] leading-[1.7] text-[#C0D7E6]">
                <LocalizedText value={copy.ctaCopy} />
              </p>
            </div>
            <div className="grid min-w-[250px] gap-3 max-[820px]:min-w-0">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] bg-white px-6 text-[0.94rem] font-black text-[#075A85] transition duration-200 hover:-translate-y-0.5 hover:bg-[#E9FBFD]"
                href={salesUrl}
                target="_blank"
                rel="noreferrer"
              >
                <LocalizedText value={copy.contactSales} />
                <ArrowRight className="size-4.5" />
              </a>
              <Link
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] border border-white/22 px-6 text-[0.94rem] font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/45"
                href="/business"
              >
                <LocalizedText value={copy.businessOverview} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
