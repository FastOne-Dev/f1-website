import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Cable,
  CalendarClock,
  ClipboardList,
  Database,
  Gauge,
  Globe2,
  Handshake,
  Headphones,
  MapPin,
  Network,
  Server,
  Waypoints,
  Workflow,
} from "lucide-react";
import LocalizedText, {
  type LocalizedString,
} from "@/components/LocalizedText";
import { salesUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "IPLC | Fast One Cambodia",
  description:
    "International Private Leased Circuit services from Fast One Cambodia, planned around your Cambodia origin, international destination, and business requirements.",
};

const pageInner =
  "mx-auto w-[min(1240px,calc(100%_-_80px))] max-[980px]:w-[min(100%_-_40px,760px)] max-[640px]:w-[min(100%_-_28px,560px)]";

const copy = {
  heroEyebrow: {
    en: "Fast One IPLC",
    km: "សេវា IPLC របស់ Fast One",
  },
  heroTitleLead: {
    en: "A private path from Cambodia",
    km: "ផ្លូវឯកជនពីកម្ពុជា",
  },
  heroTitleAccent: {
    en: "to the destination that matters.",
    km: "ទៅកាន់គោលដៅដែលសំខាន់សម្រាប់អាជីវកម្មរបស់អ្នក",
  },
  heroCopy: {
    en: "Plan a private international leased circuit around your origin, destination, required capacity, and operating needs.",
    km: "រៀបចំខ្សែបណ្តាញជួលឯកជនអន្តរជាតិ តាមទីតាំងដើម ទីតាំងគោលដៅ សមត្ថភាពដែលត្រូវការ និងតម្រូវការប្រតិបត្តិការរបស់អ្នក",
  },
  planCircuit: {
    en: "Plan an international circuit",
    km: "រៀបចំខ្សែបណ្តាញអន្តរជាតិ",
  },
  exploreIplc: {
    en: "See the connection path",
    km: "មើលផ្លូវនៃការតភ្ជាប់",
  },
  blueprint: {
    en: "International circuit map",
    km: "ផែនទីខ្សែបណ្តាញអន្តរជាតិ",
  },
  originToDestination: {
    en: "Origin to destination",
    km: "ពីទីតាំងដើមទៅគោលដៅ",
  },
  cambodia: { en: "Cambodia", km: "កម្ពុជា" },
  originSite: { en: "Origin site", km: "ទីតាំងដើម" },
  fastOneIplc: { en: "Fast One IPLC", km: "Fast One IPLC" },
  plannedPath: { en: "Planned service path", km: "ផ្លូវសេវាដែលបានរៀបចំ" },
  international: { en: "International", km: "អន្តរជាតិ" },
  destinationSite: { en: "Destination", km: "ទីតាំងគោលដៅ" },
  origin: { en: "Origin", km: "ទីតាំងដើម" },
  serviceLink: { en: "Service link", km: "ការតភ្ជាប់សេវា" },
  privateLeasedCircuit: {
    en: "Private leased circuit",
    km: "ខ្សែបណ្តាញជួលឯកជន",
  },
  destination: { en: "Destination", km: "ទីតាំងគោលដៅ" },
  beyondEyebrow: {
    en: "Built for cross-border operations",
    km: "រៀបចំសម្រាប់ប្រតិបត្តិការឆ្លងដែន",
  },
  beyondTitle: {
    en: "Plan the route around the systems it must support.",
    km: "រៀបចំផ្លូវតាមប្រព័ន្ធដែលការតភ្ជាប់ត្រូវគាំទ្រ",
  },
  beyondCopy: {
    en: "IPLC planning starts with the two endpoints and the systems that need to communicate between them. The route, capacity, and service handoff are then reviewed around that requirement.",
    km: "ការរៀបចំ IPLC ចាប់ផ្តើមពីទីតាំងចុងទាំងពីរ និងប្រព័ន្ធដែលត្រូវការទំនាក់ទំនងរវាងគ្នា បន្ទាប់មកផ្លូវ សមត្ថភាព និងទម្រង់ប្រគល់សេវា ត្រូវបានពិនិត្យតាមតម្រូវការនោះ",
  },
  architectureEyebrow: {
    en: "How IPLC connects",
    km: "របៀបនៃការតភ្ជាប់ IPLC",
  },
  architectureTitle: {
    en: "From a Cambodia site to the destination your operations depend on.",
    km: "ពីទីតាំងនៅកម្ពុជា ទៅកាន់គោលដៅដែលប្រតិបត្តិការរបស់អ្នកត្រូវការ",
  },
  architectureCopy: {
    en: "The service design is shaped by the origin, international destination, technical requirements, and availability at both endpoints.",
    km: "ការរៀបចំសេវាត្រូវបានកំណត់ដោយទីតាំងដើម ទីតាំងគោលដៅអន្តរជាតិ តម្រូវការបច្ចេកទេស និងលទ្ធភាពនៅទីតាំងចុងទាំងពីរ",
  },
  cambodiaEndpoint: { en: "Cambodia endpoint", km: "ទីតាំងចុងនៅកម្ពុជា" },
  customerHandoff: { en: "Customer handoff", km: "ចំណុចប្រគល់សេវាអតិថិជន" },
  internationalCircuit: {
    en: "International circuit",
    km: "ខ្សែបណ្តាញអន្តរជាតិ",
  },
  requirementLedRoute: {
    en: "Requirement-led path",
    km: "ផ្លូវតាមតម្រូវការ",
  },
  overseasEndpoint: { en: "International endpoint", km: "ទីតាំងចុងអន្តរជាតិ" },
  destinationHandoff: { en: "Destination handoff", km: "ចំណុចប្រគល់សេវានៅគោលដៅ" },
  inputsEyebrow: {
    en: "Plan the right international path",
    km: "រៀបចំផ្លូវអន្តរជាតិឱ្យត្រូវតាមតម្រូវការ",
  },
  inputsTitle: {
    en: "Start with the details that define the circuit.",
    km: "ចាប់ផ្តើមពីព័ត៌មានដែលកំណត់ខ្សែបណ្តាញ",
  },
  inputsCopy: {
    en: "Clear endpoint and operating information helps make the first feasibility review more useful.",
    km: "ព័ត៌មានច្បាស់លាស់អំពីទីតាំងចុង និងប្រតិបត្តិការ ជួយឱ្យការពិនិត្យលទ្ធភាពដំបូងកាន់តែមានប្រសិទ្ធភាព",
  },
  useCasesEyebrow: {
    en: "Where IPLC fits",
    km: "ករណីប្រើប្រាស់ IPLC",
  },
  useCasesTitle: {
    en: "For business systems that need to work across borders.",
    km: "សម្រាប់ប្រព័ន្ធអាជីវកម្មដែលត្រូវដំណើរការឆ្លងកាត់ព្រំដែន",
  },
  useCasesCopy: {
    en: "IPLC can be considered when a Cambodia operation needs a defined private circuit to an international office, facility, partner, or service location.",
    km: "IPLC អាចត្រូវបានពិចារណា នៅពេលប្រតិបត្តិការនៅកម្ពុជា ត្រូវការខ្សែបណ្តាញឯកជនដែលបានកំណត់ ទៅកាន់ការិយាល័យ ទីតាំងប្រតិបត្តិការ ដៃគូ ឬទីតាំងសេវានៅបរទេស",
  },
  processEyebrow: {
    en: "A practical service path",
    km: "ដំណើរការសេវាដែលច្បាស់លាស់",
  },
  processTitle: {
    en: "From an international requirement to an activation plan.",
    km: "ពីតម្រូវការអន្តរជាតិ ទៅកាន់ផែនការដំណើរការសេវា",
  },
  ctaEyebrow: {
    en: "Start with the two endpoints",
    km: "ចាប់ផ្តើមពីទីតាំងចុងទាំងពីរ",
  },
  ctaTitle: {
    en: "Tell us where your international circuit needs to go.",
    km: "ប្រាប់យើងពីទីតាំងដែលខ្សែបណ្តាញអន្តរជាតិរបស់អ្នកត្រូវតភ្ជាប់",
  },
  ctaCopy: {
    en: "Share the Cambodia origin, international destination, capacity requirement, and target timeline. Fast One will review the request and help define the next step.",
    km: "ផ្ញើទីតាំងដើមនៅកម្ពុជា ទីតាំងគោលដៅអន្តរជាតិ សមត្ថភាពដែលត្រូវការ និងពេលវេលាគោលដៅ Fast One នឹងពិនិត្យសំណើ និងជួយកំណត់ជំហានបន្ទាប់",
  },
  contactSales: {
    en: "Contact Fast One sales",
    km: "ទាក់ទងផ្នែកលក់ Fast One",
  },
  businessOverview: {
    en: "View all business services",
    km: "មើលសេវាអាជីវកម្មទាំងអស់",
  },
} satisfies Record<string, LocalizedString>;

const valueRail = [
  {
    icon: Waypoints,
    title: {
      en: "Designed around both endpoints",
      km: "រៀបចំតាមទីតាំងចុងទាំងពីរ",
    },
    text: {
      en: "The circuit conversation begins with the Cambodia origin and international destination.",
      km: "ការពិភាក្សាអំពីខ្សែបណ្តាញចាប់ផ្តើមពីទីតាំងដើមនៅកម្ពុជា និងទីតាំងគោលដៅអន្តរជាតិ",
    },
  },
  {
    icon: Globe2,
    title: {
      en: "Private international link",
      km: "ការតភ្ជាប់ឯកជនអន្តរជាតិ",
    },
    text: {
      en: "A leased connectivity option planned for a defined cross-border requirement.",
      km: "ជម្រើសការតភ្ជាប់ជួល ដែលរៀបចំសម្រាប់តម្រូវការឆ្លងដែនដែលបានកំណត់",
    },
  },
  {
    icon: Headphones,
    title: {
      en: "Local planning coordination",
      km: "ការសម្របសម្រួលផែនការក្នុងស្រុក",
    },
    text: {
      en: "Work with the Fast One team in Cambodia through feasibility and activation planning.",
      km: "ធ្វើការជាមួយក្រុម Fast One នៅកម្ពុជា ក្នុងការពិនិត្យលទ្ធភាព និងរៀបចំផែនការដំណើរការសេវា",
    },
  },
] satisfies Array<{
  icon: typeof Waypoints;
  title: LocalizedString;
  text: LocalizedString;
}>;

const outcomes = [
  {
    icon: Building2,
    title: {
      en: "Connect an international location",
      km: "តភ្ជាប់ទីតាំងអន្តរជាតិ",
    },
    text: {
      en: "Plan a defined link between a Cambodia site and an office, branch, facility, or other overseas endpoint.",
      km: "រៀបចំការតភ្ជាប់ដែលបានកំណត់ រវាងទីតាំងនៅកម្ពុជា និងការិយាល័យ សាខា ទីតាំងប្រតិបត្តិការ ឬទីតាំងចុងនៅបរទេស",
    },
  },
  {
    icon: Database,
    title: {
      en: "Support cross-border systems",
      km: "គាំទ្រប្រព័ន្ធឆ្លងដែន",
    },
    text: {
      en: "Discuss the applications, data flows, and operating traffic the two endpoints need to exchange.",
      km: "ពិភាក្សាអំពីកម្មវិធី លំហូរទិន្នន័យ និងចរាចរណ៍ប្រតិបត្តិការ ដែលទីតាំងចុងទាំងពីរត្រូវផ្លាស់ប្តូរ",
    },
  },
  {
    icon: ClipboardList,
    title: {
      en: "Plan around technical needs",
      km: "រៀបចំតាមតម្រូវការបច្ចេកទេស",
    },
    text: {
      en: "Bring capacity, latency objectives, interface needs, and timing into the feasibility discussion.",
      km: "បញ្ចូលសមត្ថភាព គោលដៅ latency តម្រូវការចំណុចប្រទាក់ និងពេលវេលា ក្នុងការពិភាក្សាលទ្ធភាព",
    },
  },
] satisfies Array<{
  icon: typeof Building2;
  title: LocalizedString;
  text: LocalizedString;
}>;

const planningInputs = [
  {
    number: "01",
    icon: MapPin,
    title: { en: "Origin and destination", km: "ទីតាំងដើម និងគោលដៅ" },
    text: {
      en: "The exact Cambodia location and the international endpoint the circuit needs to reach.",
      km: "ទីតាំងពិតប្រាកដនៅកម្ពុជា និងទីតាំងចុងអន្តរជាតិដែលខ្សែបណ្តាញត្រូវតភ្ជាប់",
    },
  },
  {
    number: "02",
    icon: Gauge,
    title: { en: "Capacity and performance goals", km: "សមត្ថភាព និងគោលដៅដំណើរការ" },
    text: {
      en: "Required capacity, expected traffic, and any latency or service expectations to review.",
      km: "សមត្ថភាពដែលត្រូវការ ចរាចរណ៍រំពឹងទុក និងគោលដៅ latency ឬការរំពឹងទុកសេវាដែលត្រូវពិនិត្យ",
    },
  },
  {
    number: "03",
    icon: Workflow,
    title: { en: "Systems and traffic", km: "ប្រព័ន្ធ និងចរាចរណ៍" },
    text: {
      en: "What the endpoints need to exchange and how the international connection will be used.",
      km: "អ្វីដែលទីតាំងចុងទាំងពីរត្រូវផ្លាស់ប្តូរ និងរបៀបដែលការតភ្ជាប់អន្តរជាតិនឹងត្រូវបានប្រើ",
    },
  },
  {
    number: "04",
    icon: CalendarClock,
    title: { en: "Handoff and timeline", km: "ការប្រគល់សេវា និងពេលវេលា" },
    text: {
      en: "Interface requirements, site access conditions, and the target activation schedule.",
      km: "តម្រូវការចំណុចប្រទាក់ លក្ខខណ្ឌចូលទីតាំង និងកាលវិភាគគោលដៅសម្រាប់ដំណើរការសេវា",
    },
  },
] satisfies Array<{
  number: string;
  icon: typeof MapPin;
  title: LocalizedString;
  text: LocalizedString;
}>;

const useCases = [
  {
    icon: BriefcaseBusiness,
    title: { en: "Regional offices", km: "ការិយាល័យក្នុងតំបន់" },
    text: {
      en: "Connect a Cambodia operation with an international head office, branch, or regional hub.",
      km: "តភ្ជាប់ប្រតិបត្តិការនៅកម្ពុជា ជាមួយការិយាល័យកណ្តាល សាខា ឬមជ្ឈមណ្ឌលក្នុងតំបន់នៅបរទេស",
    },
  },
  {
    icon: Server,
    title: { en: "Business systems", km: "ប្រព័ន្ធអាជីវកម្ម" },
    text: {
      en: "Create a defined international path for systems and operational data used across locations.",
      km: "បង្កើតផ្លូវអន្តរជាតិដែលបានកំណត់ សម្រាប់ប្រព័ន្ធ និងទិន្នន័យប្រតិបត្តិការដែលប្រើនៅតាមទីតាំងផ្សេងៗ",
    },
  },
  {
    icon: Handshake,
    title: { en: "Partner connectivity", km: "ការតភ្ជាប់ជាមួយដៃគូ" },
    text: {
      en: "Plan connectivity to a partner, facility, or service endpoint outside Cambodia.",
      km: "រៀបចំការតភ្ជាប់ទៅកាន់ដៃគូ ទីតាំងប្រតិបត្តិការ ឬទីតាំងសេវានៅក្រៅប្រទេសកម្ពុជា",
    },
  },
] satisfies Array<{
  icon: typeof BriefcaseBusiness;
  title: LocalizedString;
  text: LocalizedString;
}>;

const processSteps = [
  {
    number: "01",
    title: { en: "Share the route requirement", km: "ផ្ញើតម្រូវការផ្លូវតភ្ជាប់" },
    text: {
      en: "Provide the Cambodia origin, international destination, capacity, and intended use.",
      km: "ផ្តល់ទីតាំងដើមនៅកម្ពុជា ទីតាំងគោលដៅអន្តរជាតិ សមត្ថភាព និងគោលបំណងប្រើប្រាស់",
    },
  },
  {
    number: "02",
    title: { en: "Review feasibility", km: "ពិនិត្យលទ្ធភាព" },
    text: {
      en: "Fast One reviews availability, endpoint conditions, and the technical requirements for the request.",
      km: "Fast One ពិនិត្យលទ្ធភាព លក្ខខណ្ឌនៅទីតាំងចុង និងតម្រូវការបច្ចេកទេសសម្រាប់សំណើ",
    },
  },
  {
    number: "03",
    title: { en: "Coordinate the service plan", km: "សម្របសម្រួលផែនការសេវា" },
    text: {
      en: "Confirm the proposed circuit, service handoffs, site access, and activation steps.",
      km: "បញ្ជាក់ខ្សែបណ្តាញដែលបានស្នើ ចំណុចប្រគល់សេវា ការចូលទីតាំង និងជំហានដំណើរការ",
    },
  },
] satisfies Array<{
  number: string;
  title: LocalizedString;
  text: LocalizedString;
}>;

function GlobalCircuitMap() {
  const facts = [
    [copy.origin, copy.cambodia],
    [copy.serviceLink, copy.privateLeasedCircuit],
    [copy.destination, copy.international],
  ];

  return (
    <div
      className="relative mx-auto h-[510px] w-full max-w-[640px] max-[640px]:h-[390px]"
      aria-hidden="true"
      data-iplc-map
    >
      <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-[#B8D9E8] pb-3">
        <div className="flex items-center gap-2 text-[0.7rem] font-black uppercase tracking-[0.12em] text-[#3F6683] [[lang=km]_&]:tracking-normal">
          <Globe2 className="size-3.5 text-[#167FC1]" />
          <LocalizedText value={copy.blueprint} />
        </div>
        <div className="flex items-center gap-2 text-[0.7rem] font-bold text-[#126D9D] max-[360px]:hidden">
          <span className="size-1.5 rounded-full bg-[#12AFC5] shadow-[0_0_10px_rgba(18,175,197,0.5)]" />
          <LocalizedText value={copy.originToDestination} />
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[73px] size-[330px] -translate-x-1/2 rounded-full border border-[#A8D4E4]/45 max-[640px]:top-[48px] max-[640px]:size-[250px]">
        <span className="absolute inset-[15%] rounded-full border border-[#A8D4E4]/35" />
        <span className="absolute inset-y-0 left-1/2 w-[38%] -translate-x-1/2 rounded-[50%] border-x border-[#A8D4E4]/35" />
        <span className="absolute left-[7%] right-[7%] top-1/2 h-[42%] -translate-y-1/2 rounded-[50%] border-y border-[#A8D4E4]/35" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[109px] size-[258px] -translate-x-1/2 rounded-full bg-[#22C0D8]/[0.08] blur-[2px] max-[640px]:top-[73px] max-[640px]:size-[200px]" />

      <svg
        className="absolute inset-x-0 top-[42px] h-[365px] w-full max-[640px]:top-[42px] max-[640px]:h-[270px]"
        viewBox="0 0 640 390"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="iplcRoute" x1="64" y1="286" x2="570" y2="86" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0878BC" />
            <stop offset="0.52" stopColor="#09B3CA" />
            <stop offset="1" stopColor="#4158D8" />
          </linearGradient>
          <radialGradient id="iplcCore" cx="0" cy="0" r="1" gradientTransform="translate(320 188) rotate(90) scale(92)">
            <stop stopColor="#0BAFC8" stopOpacity="0.22" />
            <stop offset="1" stopColor="#0BAFC8" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="320" cy="188" r="92" fill="url(#iplcCore)" />
        <path d="M64 286C158 286 214 216 320 180C408 150 470 105 570 86" stroke="#A8CDDE" strokeWidth="2" />
        <path className="iplc-route" d="M64 286C158 286 214 216 320 180C408 150 470 105 570 86" stroke="url(#iplcRoute)" strokeWidth="3" />

        <circle cx="64" cy="286" r="7" fill="#0878BC" />
        <circle cx="320" cy="180" r="12" fill="#09AFC7" />
        <circle cx="320" cy="180" r="4" fill="white" />
        <circle cx="570" cy="86" r="7" fill="#4158D8" />
      </svg>

      <div className="absolute left-0 top-[55%] flex w-[120px] flex-col items-center gap-2 text-center max-[640px]:top-[55%] max-[640px]:w-[108px]">
        <span className="iplc-node flex size-14 items-center justify-center rounded-[14px] border border-[#96CBE1] bg-white text-[#0878BC] max-[640px]:size-12">
          <Building2 className="size-6 max-[640px]:size-5" />
        </span>
        <span>
          <strong className="block text-[0.78rem] font-black text-[#092E56]">
            <LocalizedText value={copy.cambodia} />
          </strong>
          <small className="mt-0.5 block text-[0.68rem] font-bold text-[#668197]">
            <LocalizedText value={copy.originSite} />
          </small>
        </span>
      </div>

      <div className="absolute left-1/2 top-[35%] -translate-x-1/2 text-center max-[640px]:top-[37%]">
        <span className="iplc-node mx-auto flex size-14 items-center justify-center rounded-full border border-[#89D3DE] bg-[#E9FAFC] text-[#059BB8] max-[640px]:size-12">
          <Network className="size-6 max-[640px]:size-5" />
        </span>
        <strong className="mt-2.5 block whitespace-nowrap text-[0.74rem] font-black text-[#087287]">
          <LocalizedText value={copy.fastOneIplc} />
        </strong>
        <small className="mt-0.5 block whitespace-nowrap text-[0.64rem] font-bold text-[#71899C] max-[520px]:hidden">
          <LocalizedText value={copy.plannedPath} />
        </small>
      </div>

      <div className="absolute right-[-1%] top-[18%] flex w-[130px] flex-col-reverse items-center gap-2 text-center max-[640px]:top-[20%] max-[640px]:w-[112px]">
        <span>
          <strong className="block text-[0.78rem] font-black text-[#092E56]">
            <LocalizedText value={copy.international} />
          </strong>
          <small className="mt-0.5 block text-[0.68rem] font-bold text-[#668197]">
            <LocalizedText value={copy.destinationSite} />
          </small>
        </span>
        <span className="iplc-node flex size-14 items-center justify-center rounded-[14px] border border-[#A8B6E9] bg-white text-[#4158D8] max-[640px]:size-12">
          <Globe2 className="size-6 max-[640px]:size-5" />
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 border-t border-[#B8D9E8]" data-iplc-facts>
        {facts.map(([label, value], index) => (
          <div
            className={`px-4 py-3.5 max-[520px]:px-2 max-[520px]:py-3 ${index > 0 ? "border-l border-[#D2E5EC]" : ""}`}
            key={(label as { en: string }).en}
          >
            <p className="m-0 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-[#70899C] [[lang=km]_&]:tracking-normal">
              <LocalizedText value={label} />
            </p>
            <p className="mb-0 mt-1 text-[0.76rem] font-black leading-[1.35] text-[#092E56]">
              <LocalizedText value={value} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function IplcPage() {
  return (
    <main className="overflow-hidden bg-white text-[#081B37]">
      <section className="relative isolate overflow-hidden border-b border-[#CCE2EE] bg-[#F6FAFF]">
        <div className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(circle_at_78%_23%,rgba(75,96,218,0.13),transparent_27%),radial-gradient(circle_at_68%_44%,rgba(0,190,218,0.16),transparent_31%),linear-gradient(120deg,#FFFFFF_0%,#F5FAFF_50%,#EAF5FF_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-20 opacity-40 [background-image:linear-gradient(rgba(0,119,185,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,119,185,0.06)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:linear-gradient(to_right,transparent,black_45%,black)]" />
        <div className="pointer-events-none absolute -bottom-48 -left-32 -z-10 size-[500px] rounded-full bg-[#38BDF8]/10 blur-[110px]" />

        <div className={`${pageInner} grid min-h-[700px] grid-cols-[minmax(0,0.92fr)_minmax(460px,0.92fr)] items-center gap-[68px] py-[72px] max-[1080px]:grid-cols-1 max-[1080px]:gap-12 max-[1080px]:py-[68px] max-[640px]:gap-8 max-[640px]:py-[52px]`}>
          <div className="max-w-[680px]">
            <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#A8D4E9] bg-white/75 px-4 py-2 text-[0.72rem] font-black uppercase tracking-[0.13em] text-[#096DA4] shadow-[0_8px_24px_rgba(11,94,137,0.06)] [[lang=km]_&]:tracking-normal">
              <span className="size-1.5 rounded-full bg-[#13AFC5] shadow-[0_0_12px_rgba(19,175,197,0.5)]" />
              <LocalizedText value={copy.heroEyebrow} />
            </p>

            <h1 className="m-0 text-[clamp(2.7rem,5.2vw,4.65rem)] font-black leading-[1.12] tracking-[-0.01em] text-[#071D3B] [text-wrap:balance] [[lang=km]_&]:leading-[1.5] [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.heroTitleLead} />{" "}
              <span className="bg-gradient-to-r from-[#0878BC] via-[#009FBF] to-[#4158D8] bg-clip-text text-transparent">
                <LocalizedText value={copy.heroTitleAccent} />
              </span>
            </h1>

            <p className="mb-0 mt-6 max-w-[615px] text-[1.08rem] leading-[1.72] text-[#526F8D] max-[640px]:text-[1rem]">
              <LocalizedText value={copy.heroCopy} />
            </p>

            <div className="mt-8 flex flex-wrap gap-3 max-[520px]:grid max-[520px]:grid-cols-1">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] bg-[#086FAF] px-6 text-[0.94rem] font-black text-white shadow-[0_16px_34px_rgba(0,103,172,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#008FC1]"
                href={salesUrl}
                target="_blank"
                rel="noreferrer"
              >
                <LocalizedText value={copy.planCircuit} />
                <ArrowRight className="size-4.5" />
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] border border-[#9FCDE2] bg-white/75 px-6 text-[0.94rem] font-bold text-[#075A85] transition duration-200 hover:-translate-y-0.5 hover:border-[#50B4D1] hover:bg-white"
                href="#how-iplc-connects"
              >
                <LocalizedText value={copy.exploreIplc} />
              </a>
            </div>
          </div>

          <GlobalCircuitMap />
        </div>
      </section>

      <section className="border-b border-[#DDE9F2] bg-white" aria-label="IPLC service values">
        <div className={`${pageInner} grid grid-cols-3 max-[860px]:grid-cols-1`}>
          {valueRail.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className={`flex min-h-[178px] gap-4 px-8 py-9 max-[980px]:px-5 max-[860px]:min-h-0 max-[860px]:px-0 ${index > 0 ? "border-l border-[#DDE9F2] max-[860px]:border-l-0 max-[860px]:border-t" : ""}`}
                key={item.title.en}
              >
                <span className="flex size-11 flex-none items-center justify-center rounded-[10px] bg-[#E9F6FB] text-[#0878BC]">
                  <Icon className="size-[22px]" />
                </span>
                <div>
                  <h2 className="m-0 text-[1.05rem] font-black leading-[1.4] text-[#092448] [[lang=km]_&]:leading-[1.6]">
                    <LocalizedText value={item.title} />
                  </h2>
                  <p className="mb-0 mt-2 text-[0.9rem] leading-[1.64] text-[#58738B]">
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
          <div className="max-w-[540px]">
            <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-[#087BAD] [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.beyondEyebrow} />
            </p>
            <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.25rem)] font-black leading-[1.18] tracking-[-0.015em] text-[#071D3B] [text-wrap:balance] [[lang=km]_&]:leading-[1.58] [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.beyondTitle} />
            </h2>
            <p className="mb-0 mt-6 text-[1rem] leading-[1.74] text-[#58718D]">
              <LocalizedText value={copy.beyondCopy} />
            </p>
          </div>

          <div className="border-t border-[#BFD4E4]">
            {outcomes.map((item) => {
              const Icon = item.icon;

              return (
                <article className="grid grid-cols-[52px_minmax(0,1fr)] gap-5 border-b border-[#D9E5ED] py-7" key={item.title.en}>
                  <span className="flex size-[52px] items-center justify-center rounded-full border border-[#B9D6E8] text-[#0878BC]">
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
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="scroll-mt-[90px] bg-[#071E3E] py-[108px] text-white max-[640px]:py-[74px]" id="how-iplc-connects">
        <div className={pageInner}>
          <div className="grid grid-cols-[minmax(0,0.82fr)_minmax(400px,0.9fr)] items-end gap-16 max-[980px]:grid-cols-1 max-[980px]:gap-8">
            <div>
              <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-[#6DE1EC] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.architectureEyebrow} />
              </p>
              <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.18] tracking-[-0.015em] [text-wrap:balance] [[lang=km]_&]:leading-[1.58] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.architectureTitle} />
              </h2>
            </div>
            <p className="m-0 max-w-[590px] text-[1rem] leading-[1.74] text-[#B8CCDE]">
              <LocalizedText value={copy.architectureCopy} />
            </p>
          </div>

          <div className="relative mt-14 overflow-hidden border-y border-white/16">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(125,211,252,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
            <div className="relative grid min-h-[300px] grid-cols-[1fr_120px_1fr_120px_1fr] items-center px-[clamp(24px,5vw,72px)] py-12 max-[800px]:grid-cols-1 max-[800px]:gap-5">
              {[
                { icon: Building2, title: copy.cambodiaEndpoint, label: copy.customerHandoff },
                { icon: Cable, title: copy.internationalCircuit, label: copy.requirementLedRoute },
                { icon: Globe2, title: copy.overseasEndpoint, label: copy.destinationHandoff },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div className="contents" key={(item.title as { en: string }).en}>
                    {index > 0 && (
                      <div className="relative flex items-center max-[800px]:h-10 max-[800px]:justify-center" aria-hidden="true">
                        <span className="h-px w-full bg-gradient-to-r from-[#44C7D9]/35 via-[#6EE7F2] to-[#6E7CE5]/45 max-[800px]:h-full max-[800px]:w-px" />
                        <span className="absolute right-0 size-2 rotate-45 border-r-2 border-t-2 border-[#77E5EC] max-[800px]:bottom-0 max-[800px]:right-auto max-[800px]:rotate-[135deg]" />
                      </div>
                    )}
                    <article className="text-center">
                      <span className="mx-auto flex size-[78px] items-center justify-center rounded-full border border-white/18 bg-white/[0.07] text-[#72E3ED] shadow-[0_0_36px_rgba(31,196,216,0.08)]">
                        <Icon className="size-8" />
                      </span>
                      <h3 className="mb-0 mt-5 text-[1.08rem] font-black leading-[1.42] text-white [[lang=km]_&]:leading-[1.6]">
                        <LocalizedText value={item.title} />
                      </h3>
                      <p className="mb-0 mt-2 text-[0.78rem] font-bold uppercase tracking-[0.08em] text-[#8EAAC1] [[lang=km]_&]:tracking-normal">
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

      <section className="bg-[#F4F9FC] py-[112px] max-[640px]:py-[76px]">
        <div className={pageInner}>
          <div className="grid grid-cols-[minmax(0,0.82fr)_minmax(320px,0.55fr)] items-end gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-6">
            <div>
              <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-[#087BAD] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.inputsEyebrow} />
              </p>
              <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.18] tracking-[-0.015em] text-[#071D3B] [text-wrap:balance] [[lang=km]_&]:leading-[1.58] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.inputsTitle} />
              </h2>
            </div>
            <p className="m-0 text-[1rem] leading-[1.74] text-[#58718D]">
              <LocalizedText value={copy.inputsCopy} />
            </p>
          </div>

          <div className="mt-14 border-t border-[#C9DCE8]">
            {planningInputs.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="grid min-h-[158px] grid-cols-[56px_minmax(220px,0.68fr)_minmax(0,1fr)_48px] items-center gap-7 border-b border-[#D1E1EB] px-[clamp(18px,3vw,34px)] py-7 transition-colors duration-200 hover:bg-white max-[820px]:grid-cols-[48px_minmax(0,1fr)_auto] max-[820px]:gap-x-5 max-[820px]:gap-y-2"
                  key={item.number}
                >
                  <span className="flex size-12 items-center justify-center rounded-[10px] bg-[#E8F5FA] text-[#0878BC] max-[820px]:size-11">
                    <Icon className="size-6 max-[820px]:size-[22px]" />
                  </span>
                  <h3 className="m-0 text-[1.18rem] font-black leading-[1.42] text-[#092448] [[lang=km]_&]:leading-[1.6]">
                    <LocalizedText value={item.title} />
                  </h3>
                  <p className="m-0 max-w-[580px] text-[0.94rem] leading-[1.68] text-[#5A738E] max-[820px]:col-[2/-1]">
                    <LocalizedText value={item.text} />
                  </p>
                  <span className="justify-self-end text-[0.76rem] font-black tracking-[0.12em] text-[#9CB0C1]">{item.number}</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-[108px] max-[640px]:py-[74px]">
        <div className={pageInner}>
          <div className="grid grid-cols-[minmax(280px,0.72fr)_minmax(0,1.08fr)] gap-[88px] max-[980px]:grid-cols-1 max-[980px]:gap-12">
            <div>
              <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-[#087BAD] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.useCasesEyebrow} />
              </p>
              <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.18] tracking-[-0.015em] text-[#071D3B] [text-wrap:balance] [[lang=km]_&]:leading-[1.58] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.useCasesTitle} />
              </h2>
              <p className="mb-0 mt-6 text-[1rem] leading-[1.74] text-[#58718D]">
                <LocalizedText value={copy.useCasesCopy} />
              </p>
            </div>

            <div className="border-t border-[#BFD4E4]">
              {useCases.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article className="grid grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-5 border-b border-[#D8E5ED] py-7 max-[520px]:grid-cols-[44px_minmax(0,1fr)]" key={item.title.en}>
                    <span className="flex size-11 items-center justify-center rounded-[10px] bg-[#EAF6FA] text-[#0878BC]">
                      <Icon className="size-[21px]" />
                    </span>
                    <div>
                      <h3 className="m-0 text-[1.08rem] font-black leading-[1.42] text-[#092448] [[lang=km]_&]:leading-[1.6]">
                        <LocalizedText value={item.title} />
                      </h3>
                      <p className="mb-0 mt-2 text-[0.92rem] leading-[1.62] text-[#5A738E]">
                        <LocalizedText value={item.text} />
                      </p>
                    </div>
                    <span className="text-[0.7rem] font-black text-[#9CB0C1] max-[520px]:hidden">0{index + 1}</span>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F9FB] py-[108px] max-[640px]:py-[74px]">
        <div className={pageInner}>
          <div className="max-w-[760px]">
            <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-[#087BAD] [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.processEyebrow} />
            </p>
            <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.18] tracking-[-0.015em] text-[#071D3B] [text-wrap:balance] [[lang=km]_&]:leading-[1.58] [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.processTitle} />
            </h2>
          </div>

          <ol className="m-0 mt-14 grid list-none grid-cols-3 border-t border-[#B8D0DF] p-0 max-[800px]:grid-cols-1">
            {processSteps.map((step, index) => (
              <li className={`relative pt-8 ${index > 0 ? "border-l border-[#D3E2EB] pl-8 max-[800px]:border-l-0 max-[800px]:border-t max-[800px]:pl-0" : "pr-8 max-[800px]:pr-0"} ${index === 1 ? "pr-8 max-[800px]:pr-0" : ""} max-[800px]:py-8`} key={step.number}>
                <span className="absolute -top-[5px] left-0 size-2.5 rounded-full border-2 border-[#F4F9FB] bg-[#0BAFC7] shadow-[0_0_0_2px_#0BAFC7] max-[800px]:hidden" />
                <span className="text-[0.72rem] font-black tracking-[0.12em] text-[#087FA8]">{step.number}</span>
                <h3 className="mb-0 mt-4 text-[1.18rem] font-black leading-[1.42] text-[#092448] [[lang=km]_&]:leading-[1.6]">
                  <LocalizedText value={step.title} />
                </h3>
                <p className="mb-0 mt-3 text-[0.94rem] leading-[1.66] text-[#5A738E]">
                  <LocalizedText value={step.text} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-[96px] max-[640px]:py-[64px]">
        <div className={pageInner}>
          <div className="relative isolate grid min-h-[340px] grid-cols-[minmax(0,1fr)_auto] items-center gap-12 overflow-hidden bg-[#092F58] px-[clamp(28px,6vw,76px)] py-14 text-white shadow-[0_28px_70px_rgba(8,49,89,0.2)] max-[820px]:grid-cols-1">
            <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_35%,rgba(77,105,229,0.27),transparent_27%),radial-gradient(circle_at_70%_70%,rgba(62,223,238,0.16),transparent_28%),linear-gradient(112deg,#082744,#0B416D)]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-1/2 opacity-20 [background-image:linear-gradient(rgba(125,211,252,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.13)_1px,transparent_1px)] [background-size:38px_38px]" />
            <div className="max-w-[720px]">
              <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-[#72E5ED] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.ctaEyebrow} />
              </p>
              <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.18] tracking-[-0.015em] [text-wrap:balance] [[lang=km]_&]:leading-[1.58] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.ctaTitle} />
              </h2>
              <p className="mb-0 mt-6 max-w-[650px] text-[1rem] leading-[1.72] text-[#C0D7E6]">
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
