import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Cable,
  CalendarClock,
  ClipboardList,
  Database,
  Factory,
  Gauge,
  Headphones,
  MapPin,
  MapPinned,
  Network,
  UsersRound,
  Warehouse,
  Waypoints,
  Workflow,
} from "lucide-react";
import LocalizedText, {
  type LocalizedString,
} from "@/components/LocalizedText";
import { salesUrl } from "@/lib/site-data";
import { heroEnterCopy, heroEnterVisual } from "@/lib/ui-classes";

export const metadata: Metadata = {
  title: "DPLC | Fast One Cambodia",
  description:
    "Domestic Private Leased Circuit services from Fast One Cambodia for connecting business locations through private site-to-site connectivity.",
};

const pageInner =
  "mx-auto w-[min(1240px,calc(100%_-_80px))] max-[980px]:w-[min(100%_-_40px,760px)] max-[640px]:w-[min(100%_-_28px,560px)]";

const copy = {
  heroEyebrow: {
    en: "Fast One DPLC",
    km: "សេវា DPLC របស់ Fast One",
  },
  heroTitleLead: {
    en: "Keep your Cambodia sites",
    km: "រក្សាការតភ្ជាប់ទីតាំងអាជីវកម្មនៅកម្ពុជា",
  },
  heroTitleAccent: {
    en: "on one private path.",
    km: "លើផ្លូវឯកជនតែមួយ",
  },
  heroCopy: {
    en: "Connect offices, branches, and facilities through a domestic leased circuit planned around your locations and operating needs.",
    km: "តភ្ជាប់ការិយាល័យ សាខា និងទីតាំងប្រតិបត្តិការ តាមរយៈខ្សែបណ្តាញឯកជនក្នុងស្រុក ដែលរៀបចំតាមទីតាំង និងតម្រូវការប្រតិបត្តិការរបស់អ្នក",
  },
  planCircuit: {
    en: "Plan your circuit",
    km: "រៀបចំផែនការខ្សែបណ្តាញរបស់អ្នក",
  },
  exploreDplc: {
    en: "See how DPLC connects",
    km: "មើលរបៀបតភ្ជាប់ DPLC",
  },
  blueprint: {
    en: "Private circuit blueprint",
    km: "ប្លង់ខ្សែបណ្តាញឯកជន",
  },
  domestic: { en: "Domestic", km: "ក្នុងស្រុក" },
  siteA: { en: "Site A", km: "ទីតាំង A" },
  headquarters: { en: "Head office", km: "ការិយាល័យកណ្តាល" },
  fastOneDplc: { en: "Fast One DPLC", km: "Fast One DPLC" },
  privateCircuit: { en: "Private circuit", km: "ខ្សែបណ្តាញឯកជន" },
  siteB: { en: "Site B", km: "ទីតាំង B" },
  branch: { en: "Branch / facility", km: "សាខា / ទីតាំងប្រតិបត្តិការ" },
  connection: { en: "Connection", km: "ការតភ្ជាប់" },
  siteToSite: { en: "Site-to-site", km: "ពីទីតាំងទៅទីតាំង" },
  scope: { en: "Scope", km: "វិសាលភាព" },
  planning: { en: "Planning", km: "ការរៀបចំ" },
  locationLed: { en: "Location-led", km: "ផ្អែកតាមទីតាំង" },
  togetherEyebrow: {
    en: "Keep sites working together",
    km: "រក្សាទីតាំងឱ្យធ្វើការរួមគ្នា",
  },
  togetherTitle: {
    en: "A private connection for the systems your teams use across locations.",
    km: "ការតភ្ជាប់ឯកជនសម្រាប់ប្រព័ន្ធដែលក្រុមការងាររបស់អ្នកប្រើនៅតាមទីតាំងផ្សេងៗ",
  },
  togetherCopy: {
    en: "DPLC gives two business locations a private domestic circuit, helping teams exchange operational data without relying only on the public internet path.",
    km: "DPLC ផ្តល់ខ្សែបណ្តាញឯកជនក្នុងស្រុករវាងទីតាំងអាជីវកម្មពីរ ដើម្បីជួយក្រុមការងារផ្លាស់ប្តូរទិន្នន័យប្រតិបត្តិការ ដោយមិនពឹងផ្អែកតែលើផ្លូវអ៊ីនធឺណិតសាធារណៈ",
  },
  architectureEyebrow: {
    en: "How it connects",
    km: "របៀបនៃការតភ្ជាប់",
  },
  architectureTitle: {
    en: "A clear path from one site to another.",
    km: "ផ្លូវតភ្ជាប់ច្បាស់លាស់ពីទីតាំងមួយទៅទីតាំងមួយទៀត",
  },
  architectureCopy: {
    en: "Each request begins with the two endpoints, required capacity, and site conditions. Fast One then reviews availability and the service handoff for each location.",
    km: "រាល់សំណើចាប់ផ្តើមពីទីតាំងចុងទាំងពីរ សមត្ថភាពដែលត្រូវការ និងលក្ខខណ្ឌនៅទីតាំង បន្ទាប់មក Fast One ពិនិត្យលទ្ធភាព និងទម្រង់ប្រគល់សេវានៅទីតាំងនីមួយៗ",
  },
  locationA: { en: "Location A", km: "ទីតាំង A" },
  firstEndpoint: { en: "First endpoint", km: "ទីតាំងចុងទីមួយ" },
  domesticNetwork: { en: "Fast One domestic circuit", km: "ខ្សែបណ្តាញក្នុងស្រុក Fast One" },
  servicePath: { en: "Private service path", km: "ផ្លូវសេវាឯកជន" },
  locationB: { en: "Location B", km: "ទីតាំង B" },
  secondEndpoint: { en: "Second endpoint", km: "ទីតាំងចុងទីពីរ" },
  inputsEyebrow: {
    en: "Plan the right circuit",
    km: "រៀបចំខ្សែបណ្តាញឱ្យត្រូវតាមតម្រូវការ",
  },
  inputsTitle: {
    en: "Start with the details that shape the connection.",
    km: "ចាប់ផ្តើមពីព័ត៌មានដែលកំណត់ការតភ្ជាប់",
  },
  inputsCopy: {
    en: "The clearer the site and operating requirements are, the more useful the first feasibility conversation can be.",
    km: "ព័ត៌មានទីតាំង និងតម្រូវការប្រតិបត្តិការកាន់តែច្បាស់ ការពិភាក្សាលទ្ធភាពដំបូងក៏កាន់តែមានប្រសិទ្ធភាព",
  },
  useCasesEyebrow: {
    en: "Where DPLC fits",
    km: "ករណីប្រើប្រាស់ DPLC",
  },
  useCasesTitle: {
    en: "For operations that span more than one location.",
    km: "សម្រាប់ប្រតិបត្តិការដែលមានច្រើនជាងមួយទីតាំង",
  },
  useCasesCopy: {
    en: "DPLC is useful when two Cambodia sites need a dedicated way to exchange business traffic as part of day-to-day operations.",
    km: "DPLC មានប្រយោជន៍នៅពេលទីតាំងពីរនៅកម្ពុជា ត្រូវការផ្លូវផ្តាច់មុខសម្រាប់ផ្លាស់ប្តូរចរាចរណ៍អាជីវកម្មក្នុងប្រតិបត្តិការប្រចាំថ្ងៃ",
  },
  processEyebrow: {
    en: "A practical service path",
    km: "ដំណើរការសេវាដែលច្បាស់លាស់",
  },
  processTitle: {
    en: "From two addresses to an activation plan.",
    km: "ពីអាសយដ្ឋានពីរ ទៅកាន់ផែនការដំណើរការសេវា",
  },
  ctaEyebrow: {
    en: "Start with your two locations",
    km: "ចាប់ផ្តើមពីទីតាំងទាំងពីររបស់អ្នក",
  },
  ctaTitle: {
    en: "Tell us where the circuit needs to connect.",
    km: "ប្រាប់យើងពីទីតាំងដែលខ្សែបណ្តាញត្រូវតភ្ជាប់",
  },
  ctaCopy: {
    en: "Share the endpoint addresses, capacity requirement, and target timeline. Fast One will review availability and help define the next step.",
    km: "ផ្ញើអាសយដ្ឋានទីតាំងចុង សមត្ថភាពដែលត្រូវការ និងពេលវេលាគោលដៅ Fast One នឹងពិនិត្យលទ្ធភាព និងជួយកំណត់ជំហានបន្ទាប់",
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
    icon: MapPinned,
    title: {
      en: "Built around your site pair",
      km: "រៀបចំតាមគូទីតាំងរបស់អ្នក",
    },
    text: {
      en: "Circuit planning begins with the two locations you need to connect.",
      km: "ការរៀបចំខ្សែបណ្តាញចាប់ផ្តើមពីទីតាំងទាំងពីរដែលអ្នកត្រូវការតភ្ជាប់",
    },
  },
  {
    icon: Waypoints,
    title: {
      en: "Private domestic path",
      km: "ផ្លូវឯកជនក្នុងស្រុក",
    },
    text: {
      en: "A leased connection between selected business locations in Cambodia.",
      km: "ការតភ្ជាប់ឯកជនរវាងទីតាំងអាជីវកម្មដែលបានកំណត់នៅក្នុងប្រទេសកម្ពុជា",
    },
  },
  {
    icon: Headphones,
    title: {
      en: "Local service coordination",
      km: "ការសម្របសម្រួលសេវាក្នុងស្រុក",
    },
    text: {
      en: "Feasibility and activation are coordinated with the Fast One team.",
      km: "ការពិនិត្យលទ្ធភាព និងការដំណើរការសេវា ត្រូវបានសម្របសម្រួលជាមួយក្រុម Fast One",
    },
  },
] satisfies Array<{
  icon: typeof MapPinned;
  title: LocalizedString;
  text: LocalizedString;
}>;

const outcomes = [
  {
    icon: Building2,
    title: {
      en: "Connect business locations",
      km: "តភ្ជាប់ទីតាំងអាជីវកម្ម",
    },
    text: {
      en: "Link a head office, branch, facility, or other operating site through a defined circuit.",
      km: "តភ្ជាប់ការិយាល័យកណ្តាល សាខា ទីតាំងប្រតិបត្តិការ ឬទីតាំងអាជីវកម្មផ្សេងទៀត តាមរយៈខ្សែបណ្តាញដែលបានកំណត់",
    },
  },
  {
    icon: ClipboardList,
    title: {
      en: "Plan around operations",
      km: "រៀបចំតាមប្រតិបត្តិការរបស់អ្នក",
    },
    text: {
      en: "Discuss the systems, traffic, and capacity the site pair needs to support.",
      km: "ពិភាក្សាអំពីប្រព័ន្ធ ចរាចរណ៍ និងសមត្ថភាពដែលគូទីតាំងត្រូវការគាំទ្រ",
    },
  },
  {
    icon: UsersRound,
    title: {
      en: "Coordinate locally",
      km: "សម្របសម្រួលជាមួយក្រុមក្នុងស្រុក",
    },
    text: {
      en: "Work through availability, site access, and activation details with Fast One in Cambodia.",
      km: "ធ្វើការជាមួយ Fast One នៅកម្ពុជា លើលទ្ធភាព ការចូលទីតាំង និងព័ត៌មានលម្អិតនៃការដំណើរការ",
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
    title: { en: "Endpoint addresses", km: "អាសយដ្ឋានទីតាំងចុង" },
    text: {
      en: "The exact two locations the private circuit needs to connect.",
      km: "ទីតាំងពិតប្រាកដទាំងពីរដែលខ្សែបណ្តាញឯកជនត្រូវតភ្ជាប់",
    },
  },
  {
    number: "02",
    icon: Gauge,
    title: { en: "Required capacity", km: "សមត្ថភាពដែលត្រូវការ" },
    text: {
      en: "The expected traffic level and capacity your operations require.",
      km: "កម្រិតចរាចរណ៍រំពឹងទុក និងសមត្ថភាពដែលប្រតិបត្តិការរបស់អ្នកត្រូវការ",
    },
  },
  {
    number: "03",
    icon: Workflow,
    title: { en: "Systems and use case", km: "ប្រព័ន្ធ និងករណីប្រើប្រាស់" },
    text: {
      en: "What the two sites need to exchange and how the connection will be used.",
      km: "អ្វីដែលទីតាំងទាំងពីរត្រូវផ្លាស់ប្តូរ និងរបៀបដែលការតភ្ជាប់នឹងត្រូវបានប្រើ",
    },
  },
  {
    number: "04",
    icon: CalendarClock,
    title: { en: "Timeline and site access", km: "ពេលវេលា និងការចូលទីតាំង" },
    text: {
      en: "Your target timing and any practical conditions for accessing each site.",
      km: "ពេលវេលាគោលដៅ និងលក្ខខណ្ឌជាក់ស្តែងសម្រាប់ការចូលទៅកាន់ទីតាំងនីមួយៗ",
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
    icon: Building2,
    title: { en: "Head office and branch", km: "ការិយាល័យកណ្តាល និងសាខា" },
    text: {
      en: "Create a private domestic link between a central office and another business location.",
      km: "បង្កើតការតភ្ជាប់ឯកជនក្នុងស្រុករវាងការិយាល័យកណ្តាល និងទីតាំងអាជីវកម្មមួយទៀត",
    },
  },
  {
    icon: Factory,
    title: { en: "Office and facility", km: "ការិយាល័យ និងទីតាំងប្រតិបត្តិការ" },
    text: {
      en: "Connect administrative teams with a warehouse, factory, or operating facility.",
      km: "តភ្ជាប់ក្រុមរដ្ឋបាលជាមួយឃ្លាំង រោងចក្រ ឬទីតាំងប្រតិបត្តិការ",
    },
  },
  {
    icon: Database,
    title: { en: "Business systems between sites", km: "ប្រព័ន្ធអាជីវកម្មរវាងទីតាំង" },
    text: {
      en: "Provide a defined path for the applications and operational data shared by two locations.",
      km: "ផ្តល់ផ្លូវដែលបានកំណត់សម្រាប់កម្មវិធី និងទិន្នន័យប្រតិបត្តិការដែលទីតាំងទាំងពីរប្រើរួមគ្នា",
    },
  },
] satisfies Array<{
  icon: typeof Building2;
  title: LocalizedString;
  text: LocalizedString;
}>;

const processSteps = [
  {
    number: "01",
    title: { en: "Share both locations", km: "ផ្ញើទីតាំងទាំងពីរ" },
    text: {
      en: "Provide the two endpoint addresses, required capacity, and intended use.",
      km: "ផ្តល់អាសយដ្ឋានទីតាំងចុងទាំងពីរ សមត្ថភាពដែលត្រូវការ និងគោលបំណងប្រើប្រាស់",
    },
  },
  {
    number: "02",
    title: { en: "Review feasibility", km: "ពិនិត្យលទ្ធភាព" },
    text: {
      en: "Fast One reviews location availability, requirements, and practical site conditions.",
      km: "Fast One ពិនិត្យលទ្ធភាពតាមទីតាំង តម្រូវការ និងលក្ខខណ្ឌជាក់ស្តែងនៅទីតាំង",
    },
  },
  {
    number: "03",
    title: { en: "Coordinate activation", km: "សម្របសម្រួលការដំណើរការ" },
    text: {
      en: "Confirm the circuit plan, site access, service handoff, and activation steps.",
      km: "បញ្ជាក់ផែនការខ្សែបណ្តាញ ការចូលទីតាំង ទម្រង់ប្រគល់សេវា និងជំហានដំណើរការ",
    },
  },
] satisfies Array<{
  number: string;
  title: LocalizedString;
  text: LocalizedString;
}>;

function CircuitBlueprint() {
  const facts = [
    [copy.connection, copy.siteToSite],
    [copy.scope, copy.domestic],
    [copy.planning, copy.locationLed],
  ];

  return (
    <div className="relative mx-auto h-[500px] w-full max-w-[620px] max-[640px]:h-[390px]" aria-hidden="true" data-dplc-blueprint>
      <div
        className="pointer-events-none absolute inset-[40px_100px_96px_110px] bg-[#0B93B8]/[0.09] max-[640px]:inset-[50px_64px_100px_74px] max-[520px]:opacity-60"
        style={{
          WebkitMaskImage: "url('/img/cambodia-location-map.svg')",
          WebkitMaskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          maskImage: "url('/img/cambodia-location-map.svg')",
          maskPosition: "center",
          maskRepeat: "no-repeat",
          maskSize: "contain",
        }}
      />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-[#BFDCE8] pb-3">
        <div className="flex items-center gap-2 text-[0.7rem] font-black uppercase tracking-[0.12em] text-[#4C7189] [[lang=km]_&]:tracking-normal">
          <Cable className="size-3.5 text-[#008FB5]" />
          <LocalizedText value={copy.blueprint} />
        </div>
        <div className="flex items-center gap-2 text-[0.7rem] font-bold text-[#087C8A]">
          <span className="size-1.5 rounded-full bg-[#13AFC4]" />
          <LocalizedText value={copy.domestic} />
        </div>
      </div>

      <svg
        className="absolute inset-x-0 top-[38px] h-[350px] w-full max-[640px]:top-[48px] max-[640px]:h-[250px]"
        viewBox="0 0 620 390"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dplcRoute" x1="92" y1="116" x2="534" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0077B9" />
            <stop offset="0.55" stopColor="#00A9C7" />
            <stop offset="1" stopColor="#48CDDD" />
          </linearGradient>
          <radialGradient id="dplcCore" cx="0" cy="0" r="1" gradientTransform="translate(312 205) rotate(90) scale(82)">
            <stop stopColor="#08A9CC" stopOpacity="0.2" />
            <stop offset="1" stopColor="#08A9CC" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="312" cy="205" r="82" fill="url(#dplcCore)" />
        <path d="M92 128C174 128 230 177 282 199C350 228 414 276 534 300" stroke="#AFD1DF" strokeWidth="2" />
        <path d="M95 142C176 140 225 189 279 211C348 241 413 289 531 314" stroke="#D2E5EC" strokeWidth="1.5" />
        <path className="dplc-route" d="M92 128C174 128 230 177 282 199C350 228 414 276 534 300" stroke="url(#dplcRoute)" strokeWidth="3" />
        <path className="dplc-route dplc-route--reverse" d="M95 142C176 140 225 189 279 211C348 241 413 289 531 314" stroke="url(#dplcRoute)" strokeWidth="2" />

        <circle cx="92" cy="128" r="6" fill="#0077B9" />
        <circle cx="312" cy="205" r="11" fill="#08A9CC" />
        <circle cx="312" cy="205" r="4" fill="white" />
        <circle cx="534" cy="300" r="6" fill="#0077B9" />
      </svg>

      <div className="absolute left-[2%] top-[20%] flex items-center gap-3 max-[520px]:left-0">
        <span className="dplc-node flex size-14 items-center justify-center rounded-[14px] border border-[#9CCFE1] bg-white text-[#0077B9] max-[640px]:size-12">
          <Building2 className="size-6 max-[640px]:size-5" />
        </span>
        <span>
          <strong className="block text-[0.78rem] font-black text-[#0A3159]">
            <LocalizedText value={copy.siteA} />
          </strong>
          <small className="mt-0.5 block text-[0.68rem] font-bold text-[#668197]">
            <LocalizedText value={copy.headquarters} />
          </small>
        </span>
      </div>

      <div className="absolute left-1/2 top-[42%] -translate-x-1/2 text-center max-[640px]:top-[38%]">
        <span className="dplc-node mx-auto flex size-[74px] items-center justify-center rounded-full border border-[#6CC3D9] bg-white text-[#0089AE] max-[640px]:size-[62px]">
          <Network className="size-8 max-[640px]:size-7" />
        </span>
        <strong className="mt-3 block whitespace-nowrap text-[0.76rem] font-black text-[#0A3159]">
          <LocalizedText value={copy.fastOneDplc} />
        </strong>
        <small className="mt-0.5 block whitespace-nowrap text-[0.66rem] font-bold text-[#648096]">
          <LocalizedText value={copy.privateCircuit} />
        </small>
      </div>

      <div className="absolute right-[1%] top-[63%] flex items-center gap-3 max-[640px]:top-[60%] max-[520px]:right-0" data-dplc-site-b>
        <span className="text-right">
          <strong className="block text-[0.78rem] font-black text-[#0A3159]">
            <LocalizedText value={copy.siteB} />
          </strong>
          <small className="mt-0.5 block text-[0.68rem] font-bold text-[#668197]">
            <LocalizedText value={copy.branch} />
          </small>
        </span>
        <span className="dplc-node flex size-14 items-center justify-center rounded-[14px] border border-[#9CCFE1] bg-white text-[#0077B9] max-[640px]:size-12">
          <Warehouse className="size-6 max-[640px]:size-5" />
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 border-t border-[#BFDCE8]" data-dplc-facts>
        {facts.map(([label, value], index) => (
          <div
            className={`px-4 py-3.5 max-[520px]:px-2 max-[520px]:py-3 ${index > 0 ? "border-l border-[#D2E5EC]" : ""}`}
            key={(label as { en: string }).en}
          >
            <p className="m-0 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-[#70899C] [[lang=km]_&]:tracking-normal">
              <LocalizedText value={label} />
            </p>
            <p className="mb-0 mt-1 text-[0.76rem] font-black text-[#0A3159]">
              <LocalizedText value={value} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DplcPage() {
  return (
    <main className="overflow-hidden bg-white text-brand-ink">
      <section className="relative isolate overflow-hidden border-b border-brand-border-subtle bg-brand-surface-hero">
        <div className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(circle_at_77%_24%,rgba(0,190,218,0.18),transparent_31%),linear-gradient(120deg,#FFFFFF_0%,#F5FAFF_48%,#E3F6FB_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-20 opacity-45 [background-image:linear-gradient(rgba(0,119,185,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,119,185,0.06)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:linear-gradient(to_right,transparent,black_46%,black)]" />
        <div className="pointer-events-none absolute -bottom-44 -left-28 -z-10 size-[480px] rounded-full bg-[#38BDF8]/10 blur-[110px]" />

        <div className={`${pageInner} grid min-h-[680px] grid-cols-[minmax(0,0.92fr)_minmax(440px,0.88fr)] items-center gap-[72px] py-[72px] max-[1080px]:grid-cols-1 max-[1080px]:gap-12 max-[1080px]:py-[68px] max-[640px]:py-[52px]`}>
          <div className={`${heroEnterCopy} max-w-[670px]`}>
            <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-brand-border bg-white/70 px-4 py-2 text-[0.72rem] font-black uppercase tracking-[0.13em] text-brand-accent shadow-[0_8px_24px_rgba(11,94,137,0.06)] [[lang=km]_&]:tracking-normal">
              <span className="size-1.5 rounded-full bg-[#08A9CC] shadow-[0_0_12px_rgba(8,169,204,0.45)]" />
              <LocalizedText value={copy.heroEyebrow} />
            </p>

            <h1 className="m-0 text-[clamp(2.7rem,5.2vw,4.65rem)] font-black leading-[1.12] tracking-[-0.01em] text-brand-ink [text-wrap:balance] [[lang=km]_&]:leading-[1.5] [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.heroTitleLead} />{" "}
              <span className="text-brand-highlight">
                <LocalizedText value={copy.heroTitleAccent} />
              </span>
            </h1>

            <p className="mb-0 mt-6 max-w-[610px] text-[1.08rem] leading-[1.72] text-brand-copy max-[640px]:text-[1rem]">
              <LocalizedText value={copy.heroCopy} />
            </p>

            <div className="mt-8 flex flex-wrap gap-3 max-[520px]:grid max-[520px]:grid-cols-1">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] bg-brand-primary px-6 text-[0.94rem] font-black text-white shadow-[0_16px_34px_rgba(0,103,172,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2"
                href={salesUrl}
                target="_blank"
                rel="noreferrer"
              >
                <LocalizedText value={copy.planCircuit} />
                <ArrowRight className="size-4.5" />
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] border border-brand-border bg-white/70 px-6 text-[0.94rem] font-bold text-brand-link transition duration-200 hover:-translate-y-0.5 hover:border-brand-border-hover hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2"
                href="#how-dplc-connects"
              >
                <LocalizedText value={copy.exploreDplc} />
              </a>
            </div>
          </div>

          <div className={heroEnterVisual}>
            <CircuitBlueprint />
          </div>
        </div>
      </section>

      <section className="border-b border-brand-border-subtle bg-white" aria-label="DPLC service values">
        <div className={`${pageInner} grid grid-cols-3 max-[860px]:grid-cols-1`}>
          {valueRail.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className={`flex min-h-[176px] gap-4 px-8 py-9 max-[980px]:px-5 max-[860px]:min-h-0 max-[860px]:px-0 ${index > 0 ? "border-l border-[#DDE9F2] max-[860px]:border-l-0 max-[860px]:border-t" : ""}`}
                key={item.title.en}
              >
                <span className="flex size-11 flex-none items-center justify-center rounded-[10px] bg-brand-soft text-brand-accent">
                  <Icon className="size-[22px]" />
                </span>
                <div>
                  <h2 className="m-0 text-[1.05rem] font-black leading-[1.38] text-brand-heading [[lang=km]_&]:leading-[1.58]">
                    <LocalizedText value={item.title} />
                  </h2>
                  <p className="mb-0 mt-2 text-[0.9rem] leading-[1.64] text-brand-copy">
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
          <div className="max-w-[520px]">
            <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-brand-accent [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.togetherEyebrow} />
            </p>
            <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.25rem)] font-black leading-[1.16] tracking-[-0.015em] text-[#071D3B] [text-wrap:balance] [[lang=km]_&]:leading-[1.55] [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.togetherTitle} />
            </h2>
            <p className="mb-0 mt-6 text-[1rem] leading-[1.74] text-[#58718D]">
              <LocalizedText value={copy.togetherCopy} />
            </p>
          </div>

          <div className="border-t border-[#BFD4E4]">
            {outcomes.map((item) => {
              const Icon = item.icon;

              return (
                <article className="grid grid-cols-[52px_minmax(0,1fr)] gap-5 border-b border-[#D9E5ED] py-7" key={item.title.en}>
                  <span className="flex size-[52px] items-center justify-center rounded-full border border-brand-border text-brand-accent">
                    <Icon className="size-[22px]" />
                  </span>
                  <div>
                    <h3 className="m-0 text-[1.12rem] font-black leading-[1.4] text-[#092448] [[lang=km]_&]:leading-[1.58]">
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

      <section className="scroll-mt-[90px] bg-brand-surface-soft py-[108px] max-[640px]:py-[74px]" id="how-dplc-connects">
        <div className={pageInner}>
          <div className="grid grid-cols-[minmax(0,0.78fr)_minmax(400px,1fr)] items-end gap-16 max-[980px]:grid-cols-1 max-[980px]:gap-8">
            <div>
              <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-brand-accent [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.architectureEyebrow} />
              </p>
              <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.16] tracking-[-0.015em] text-[#071D3B] [text-wrap:balance] [[lang=km]_&]:leading-[1.55] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.architectureTitle} />
              </h2>
            </div>
            <p className="m-0 max-w-[590px] text-[1rem] leading-[1.74] text-[#58718D]">
              <LocalizedText value={copy.architectureCopy} />
            </p>
          </div>

          <div className="mt-14 border-y border-[#C6DDE7] bg-white/65">
            <div className="grid min-h-[290px] grid-cols-[1fr_110px_1fr_110px_1fr] items-center px-[clamp(24px,5vw,72px)] py-12 max-[800px]:grid-cols-1 max-[800px]:gap-5">
              {[
                { icon: Building2, title: copy.locationA, label: copy.firstEndpoint },
                { icon: Cable, title: copy.domesticNetwork, label: copy.servicePath },
                { icon: Warehouse, title: copy.locationB, label: copy.secondEndpoint },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div className="contents" key={(item.title as { en: string }).en}>
                    {index > 0 && (
                      <div className="relative flex items-center max-[800px]:h-10 max-[800px]:justify-center" aria-hidden="true">
                        <span className="h-px w-full bg-[#82C9DC] max-[800px]:h-full max-[800px]:w-px" />
                        <span className="absolute right-0 size-2 rotate-45 border-r-2 border-t-2 border-[#0899BA] max-[800px]:bottom-0 max-[800px]:right-auto max-[800px]:rotate-[135deg]" />
                      </div>
                    )}
                    <article className="text-center">
                      <span className="mx-auto flex size-[76px] items-center justify-center rounded-full border border-brand-border bg-brand-soft text-brand-accent">
                        <Icon className="size-8" />
                      </span>
                      <h3 className="mb-0 mt-5 text-[1.08rem] font-black leading-[1.4] text-[#092448] [[lang=km]_&]:leading-[1.58]">
                        <LocalizedText value={item.title} />
                      </h3>
                      <p className="mb-0 mt-2 text-[0.78rem] font-bold uppercase tracking-[0.08em] text-[#7890A3] [[lang=km]_&]:tracking-normal">
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

      <section className="py-[112px] max-[640px]:py-[76px]">
        <div className={pageInner}>
          <div className="grid grid-cols-[minmax(0,0.82fr)_minmax(320px,0.55fr)] items-end gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-6">
            <div>
              <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-brand-accent [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.inputsEyebrow} />
              </p>
              <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.16] tracking-[-0.015em] text-[#071D3B] [text-wrap:balance] [[lang=km]_&]:leading-[1.55] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.inputsTitle} />
              </h2>
            </div>
            <p className="m-0 text-[1rem] leading-[1.74] text-[#58718D]">
              <LocalizedText value={copy.inputsCopy} />
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 border-l border-t border-[#D4E2EB] max-[760px]:grid-cols-1">
            {planningInputs.map((item) => {
              const Icon = item.icon;

              return (
                <article className="relative min-h-[286px] border-b border-r border-[#D4E2EB] p-[clamp(26px,4vw,46px)] transition-colors duration-200 hover:bg-[#F5FAFC] max-[760px]:min-h-0" key={item.number}>
                  <div className="flex items-start justify-between gap-6">
                    <span className="flex size-12 items-center justify-center rounded-[10px] bg-brand-soft text-brand-accent">
                      <Icon className="size-6" />
                    </span>
                    <span className="text-[0.76rem] font-black tracking-[0.12em] text-[#9CB0C1]">{item.number}</span>
                  </div>
                  <h3 className="mb-0 mt-9 text-[1.3rem] font-black leading-[1.4] text-[#092448] [[lang=km]_&]:leading-[1.58]">
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

      <section className="bg-brand-dark py-[108px] text-white max-[640px]:py-[74px]">
        <div className={pageInner}>
          <div className="grid grid-cols-[minmax(280px,0.7fr)_minmax(0,1.1fr)] gap-[88px] max-[980px]:grid-cols-1 max-[980px]:gap-12">
            <div>
              <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-brand-dark-accent [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.useCasesEyebrow} />
              </p>
              <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.16] tracking-[-0.015em] [text-wrap:balance] [[lang=km]_&]:leading-[1.55] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.useCasesTitle} />
              </h2>
              <p className="mb-0 mt-6 text-[1rem] leading-[1.74] text-brand-dark-copy">
                <LocalizedText value={copy.useCasesCopy} />
              </p>
            </div>

            <div className="border-t border-white/16">
              {useCases.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article className="grid grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-5 border-b border-white/16 py-7 max-[520px]:grid-cols-[44px_minmax(0,1fr)]" key={item.title.en}>
                    <span className="flex size-11 items-center justify-center rounded-[10px] bg-white/[0.07] text-brand-dark-accent">
                      <Icon className="size-[21px]" />
                    </span>
                    <div>
                      <h3 className="m-0 text-[1.08rem] font-black leading-[1.4] text-white [[lang=km]_&]:leading-[1.58]">
                        <LocalizedText value={item.title} />
                      </h3>
                      <p className="mb-0 mt-2 text-[0.92rem] leading-[1.6] text-[#AFC4D7]">
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

      <section className="bg-brand-surface-alt py-[108px] max-[640px]:py-[74px]">
        <div className={pageInner}>
          <div className="max-w-[740px]">
            <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-brand-accent [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.processEyebrow} />
            </p>
            <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.16] tracking-[-0.015em] text-[#071D3B] [text-wrap:balance] [[lang=km]_&]:leading-[1.55] [[lang=km]_&]:tracking-normal">
              <LocalizedText value={copy.processTitle} />
            </h2>
          </div>

          <ol className="m-0 mt-14 grid list-none grid-cols-3 border-t border-[#B8D0DF] p-0 max-[800px]:grid-cols-1">
            {processSteps.map((step, index) => (
              <li className={`relative pt-8 ${index > 0 ? "border-l border-[#D3E2EB] pl-8 max-[800px]:border-l-0 max-[800px]:border-t max-[800px]:pl-0" : "pr-8 max-[800px]:pr-0"} ${index === 1 ? "pr-8 max-[800px]:pr-0" : ""} max-[800px]:py-8`} key={step.number}>
                <span className="absolute -top-[5px] left-0 size-2.5 rounded-full border-2 border-brand-surface-alt bg-[#0AAACA] shadow-[0_0_0_2px_#0AAACA] max-[800px]:hidden" />
                <span className="text-[0.72rem] font-black tracking-[0.12em] text-brand-accent">{step.number}</span>
                <h3 className="mb-0 mt-4 text-[1.18rem] font-black leading-[1.4] text-[#092448] [[lang=km]_&]:leading-[1.58]">
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
          <div className="relative isolate grid min-h-[330px] grid-cols-[minmax(0,1fr)_auto] items-center gap-12 overflow-hidden bg-brand-dark-cta px-[clamp(28px,6vw,76px)] py-14 text-white shadow-[0_28px_70px_rgba(8,49,89,0.2)] max-[820px]:grid-cols-1">
            <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_35%,rgba(62,223,238,0.2),transparent_26%),linear-gradient(112deg,#082744,#0A4772)]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-1/2 opacity-20 [background-image:linear-gradient(rgba(125,211,252,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.13)_1px,transparent_1px)] [background-size:38px_38px]" />
            <div className="max-w-[720px]">
              <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.13em] text-[#6FE5EE] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.ctaEyebrow} />
              </p>
              <h2 className="mb-0 mt-4 text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.16] tracking-[-0.015em] [text-wrap:balance] [[lang=km]_&]:leading-[1.55] [[lang=km]_&]:tracking-normal">
                <LocalizedText value={copy.ctaTitle} />
              </h2>
              <p className="mb-0 mt-6 max-w-[650px] text-[1rem] leading-[1.72] text-[#C0D7E6]">
                <LocalizedText value={copy.ctaCopy} />
              </p>
            </div>
            <div className="grid min-w-[250px] gap-3 max-[820px]:min-w-0">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] bg-white px-6 text-[0.94rem] font-black text-brand-link transition duration-200 hover:-translate-y-0.5 hover:bg-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark-cta"
                href={salesUrl}
                target="_blank"
                rel="noreferrer"
              >
                <LocalizedText value={copy.contactSales} />
                <ArrowRight className="size-4.5" />
              </a>
              <Link
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[8px] border border-white/22 px-6 text-[0.94rem] font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark-cta"
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
