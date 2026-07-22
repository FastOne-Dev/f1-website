import { salesUrl } from "@/lib/site-data";
import type { LocalizedString } from "@/components/LocalizedText";

export type DetailPageAction = {
  label: LocalizedString;
  href: string;
  external?: boolean;
};
export type DetailPageContent = {
  metadata: {
    title: string;
    description: string;
  };
  eyebrow: LocalizedString;
  title: LocalizedString;
  copy: LocalizedString;
  imageSrc: string;
  imageAlt: string;
  action: DetailPageAction;
  secondaryAction?: DetailPageAction;
  intro: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    copy: LocalizedString;
  };
  highlights: LocalizedString[];
  cards: Array<{
    title: LocalizedString;
    text: LocalizedString;
  }>;
  closing?: {
    eyebrow: LocalizedString;
    title: LocalizedString;
    copy: LocalizedString;
    imageSrc?: string;
    imageAlt?: string;
    action?: DetailPageAction;
  };
};

const contactSales = {
  label: "Contact sales",
  href: salesUrl,
  external: true,
};
const careerInquiry = {
  label: "Ask about opportunities",
  href: "mailto:fastone_info@fastone.com.kh",
};

export const aboutDetailPages: Record<
  "companyProfile" | "mission" | "vision" | "career",
  DetailPageContent
> = {
  companyProfile: {
    metadata: {
      title: "Company Profile | Fast One Cambodia",
      description:
        "Learn about Fast One Cambodia, a local internet service provider serving homes, SMEs, and organizations.",
    },
    eyebrow: "Company profile",
    title: "A Cambodia ISP built around practical, reliable connectivity.",
    copy:
      "Fast One has served Cambodia since 2010 with home internet, dedicated business connectivity, and local support for customers who need dependable access.",
    imageSrc: "/img/fastone_mini_logo.png",
    imageAlt: "Fast One logo mark",
    action: contactSales,
    secondaryAction: {
      label: "View coverage",
      href: "/coverage",
    },
    intro: {
      eyebrow: "Who we are",
      title: "Connecting communities, every day.",
      copy:
        "FAST ONE (CAM), Co., Ltd. provides affordable, reliable internet service for homes, SMEs, enterprises, and organizations across its service areas.",
    },
    highlights: [
      "Operating in Cambodia since 2010",
      "Residential fiber and business connectivity",
      "Dedicated internet, DPLC, IPLC, and IP Transit services",
      "Local sales and support teams",
    ],
    cards: [
      {
        title: "Home customers",
        text: "Simple fiber packages for families, students, creators, and remote workers who need stable day-to-day internet.",
      },
      {
        title: "Business customers",
        text: "Dedicated bandwidth and private circuit options for offices, banks, hotels, operators, and multi-site teams.",
      },
      {
        title: "Service approach",
        text: "Fast One confirms coverage, installation needs, and service fit before activation so customers can choose with confidence.",
      },
    ],
    closing: {
      eyebrow: "Fast One Cambodia",
      title: "Local network knowledge, clear service conversations, and practical internet options.",
      copy:
        "Whether you are choosing home fiber or planning a business circuit, the Fast One team can help confirm availability and the right next step.",
      imageSrc: "/img/phnom_penh_photo.jpg",
      imageAlt: "Phnom Penh skyline",
      action: contactSales,
    },
  },
  mission: {
    metadata: {
      title: "Mission | Fast One Cambodia",
      description:
        "Fast One Cambodia mission for affordable, reliable, and high-quality internet access.",
    },
    eyebrow: "Mission",
    title: "Make high quality internet accessible to more people and businesses.",
    copy:
      "Fast One works to connect communities, support growing companies, and make reliable internet easier to reach at fair, practical pricing.",
    imageSrc: "/img/tech_earth.png",
    imageAlt: "Connected globe illustration",
    action: contactSales,
    secondaryAction: {
      label: "See plans",
      href: "/plans",
    },
    intro: {
      eyebrow: "Purpose",
      title: "A connection should feel dependable before it feels complicated.",
      copy:
        "The mission is to provide affordable, reliable, and high-quality internet services that help individuals and businesses participate fully in Cambodia's digital future.",
    },
    highlights: [
      "Affordable internet options",
      "Reliable service for daily use",
      "High-quality connectivity for homes and offices",
      "Support for Cambodia's digital growth",
    ],
    cards: [
      {
        title: "For communities",
        text: "Fast One helps families, students, and workers stay connected to learning, entertainment, and online services.",
      },
      {
        title: "For businesses",
        text: "Dedicated services give teams the capacity and predictability they need for cloud tools, communication, and operations.",
      },
      {
        title: "For the future",
        text: "Reliable local internet infrastructure helps Cambodia's digital economy grow with stronger everyday access.",
      },
    ],
    closing: {
      eyebrow: "Service promise",
      title: "Clear choices, useful guidance, and connectivity that supports real work.",
      copy:
        "Fast One keeps its service conversations grounded in availability, installation needs, and the customer outcome.",
      imageSrc: "/img/router_1.png",
      imageAlt: "Fiber router illustration",
      action: contactSales,
    },
  },
  vision: {
    metadata: {
      title: "Vision | Fast One Cambodia",
      description:
        "Fast One Cambodia vision for trusted, innovative, and reliable internet service.",
    },
    eyebrow: "Vision",
    title: "Bridge Cambodia's digital divide with trusted connectivity.",
    copy:
      "Fast One aims to be one of Cambodia's most trusted internet providers, recognized for service quality, reliability, and customer satisfaction.",
    imageSrc: "/img/global-network.png",
    imageAlt: "Global network icon illustration",
    action: contactSales,
    secondaryAction: {
      label: "Explore coverage",
      href: "/coverage",
    },
    intro: {
      eyebrow: "Direction",
      title: "Reliable access should keep pace with the way Cambodia works and lives.",
      copy:
        "The company vision is rooted in practical innovation: stronger services, clearer support, and network options that help more customers connect confidently.",
    },
    highlights: [
      "Trusted ISP for Cambodia",
      "Reliable service quality",
      "Customer-focused support",
      "Ongoing service improvement",
    ],
    cards: [
      {
        title: "Trust",
        text: "Customers need to know what service is available, what setup requires, and how to get help when it matters.",
      },
      {
        title: "Innovation",
        text: "Fast One continues to support modern connectivity needs across home internet, private circuits, and carrier-grade services.",
      },
      {
        title: "Satisfaction",
        text: "Good service is measured by stable connections, useful guidance, and support that understands local needs.",
      },
    ],
    closing: {
      eyebrow: "Digital Cambodia",
      title: "A stronger internet foundation for homes, teams, and operators.",
      copy:
        "Fast One's vision is practical and long-term: better access, better reliability, and better service for the customers it serves.",
      imageSrc: "/img/map_bg.png",
      imageAlt: "Network coverage map illustration",
      action: contactSales,
    },
  },
  career: {
    metadata: {
      title: "Career | Fast One Cambodia",
      description:
        "Career information for people interested in building Cambodia's connected future with Fast One.",
    },
    eyebrow: "Careers at Fast One",
    title: "Build what keeps Cambodia connected.",
    copy:
      "Fast One welcomes practical, service-minded people who care about networks, customer support, and helping homes and organizations stay connected.",
    imageSrc: "/img/support.png",
    imageAlt: "Support team illustration",
    action: careerInquiry,
    secondaryAction: {
      label: "Company profile",
      href: "/about/company-profile",
    },
    intro: {
      eyebrow: "Work with purpose",
      title: "Good internet starts with people who solve real problems.",
      copy:
        "From sales conversations to installation support and network operations, Fast One's work centers on helping customers get connected clearly and reliably.",
    },
    highlights: [
      "Put customers first",
      "Think in networks",
      "Know Cambodia",
      "Solve what matters",
    ],
    cards: [
      {
        title: "Customer care",
        text: "Help customers understand plans, coverage, installation timing, and the best next step for their location.",
      },
      {
        title: "Technical support",
        text: "Support stable service by investigating connection questions and coordinating practical fixes.",
      },
      {
        title: "Network operations",
        text: "Contribute to the systems and processes behind dependable connectivity for homes and businesses.",
      },
    ],
    closing: {
      eyebrow: "Career conversations",
      title: "Interested in Fast One? Start with a conversation.",
      copy:
        "Share your background and the kind of work that interests you with the Fast One team.",
      imageSrc: "/img/img_for_contact_us.png",
      imageAlt: "Fast One contact illustration",
      action: careerInquiry,
    },
  },
};

export const businessDetailPages: Record<
  "ipTransit" | "dplc" | "iplc",
  DetailPageContent
> = {
  ipTransit: {
    metadata: {
      title: "IP Transit | Fast One Cambodia",
      description:
        "Carrier-grade IP Transit connectivity from Fast One Cambodia for businesses and network operators.",
    },
    eyebrow: "IP Transit",
    title: "Carrier-grade upstream connectivity for demanding networks.",
    copy:
      "Fast One IP Transit supports businesses and operators that need reliable routing, scalable capacity, and dependable upstream access.",
    imageSrc: "/img/global-network.png",
    imageAlt: "Global network illustration",
    action: contactSales,
    secondaryAction: {
      label: "Business overview",
      href: "/business",
    },
    intro: {
      eyebrow: "Service fit",
      title: "For organizations that need more control than shared internet can offer.",
      copy:
        "IP Transit is suited to operators, data-heavy businesses, and organizations that need carrier-grade connectivity with routing support and predictable service discussions.",
    },
    highlights: [
      "Carrier-grade upstream service",
      "Routing support for operators and businesses",
      "Capacity planning based on demand",
      "Local technical conversation before activation",
    ],
    cards: [
      {
        title: "Routing support",
        text: "Plan upstream connectivity with technical guidance for network requirements and operational needs.",
      },
      {
        title: "Scalable capacity",
        text: "Discuss bandwidth requirements that can support growth, heavy usage, and critical applications.",
      },
      {
        title: "Business continuity",
        text: "Use a dedicated service conversation to reduce uncertainty around performance, availability, and support.",
      },
    ],
    closing: {
      eyebrow: "Start planning",
      title: "Share your network requirement and expected capacity.",
      copy:
        "Fast One sales can help route the request to the right technical conversation for IP Transit service planning.",
      imageSrc: "/img/tech_earth.png",
      imageAlt: "Technology earth illustration",
      action: contactSales,
    },
  },
  dplc: {
    metadata: {
      title: "DPLC | Fast One Cambodia",
      description:
        "Domestic Private Leased Circuit services from Fast One Cambodia for secure site-to-site connectivity.",
    },
    eyebrow: "DPLC",
    title: "Domestic private leased circuits for connected Cambodia sites.",
    copy:
      "Fast One DPLC helps organizations connect local offices, branches, and facilities through private domestic circuits.",
    imageSrc: "/img/dplc_logo.png",
    imageAlt: "DPLC service icon",
    action: contactSales,
    secondaryAction: {
      label: "Business overview",
      href: "/business",
    },
    intro: {
      eyebrow: "Domestic circuit",
      title: "Private site-to-site communication for teams that need control.",
      copy:
        "DPLC is designed for secure domestic connectivity across Cambodia, helping organizations move data between sites with more predictable network behavior.",
    },
    highlights: [
      "Private domestic circuit service",
      "Site-to-site business connectivity",
      "Designed for secure data movement",
      "Availability checked by location",
    ],
    cards: [
      {
        title: "Branch connectivity",
        text: "Connect multiple offices or service locations with a private circuit designed around your operating footprint.",
      },
      {
        title: "Operational control",
        text: "Use dedicated domestic connectivity when shared internet is not enough for sensitive or critical workflows.",
      },
      {
        title: "Practical planning",
        text: "Fast One confirms locations, circuit requirements, and feasibility before moving toward activation.",
      },
    ],
    closing: {
      eyebrow: "Plan a DPLC",
      title: "Bring the addresses and business requirement.",
      copy:
        "Fast One can review the site pair, service availability, and installation needs for your domestic private circuit.",
      imageSrc: "/img/cable.png",
      imageAlt: "Fiber cable illustration",
      action: contactSales,
    },
  },
  iplc: {
    metadata: {
      title: "IPLC | Fast One Cambodia",
      description:
        "International Private Leased Circuit services from Fast One Cambodia for protected global connectivity.",
    },
    eyebrow: "IPLC",
    title: "International private circuits for predictable global connectivity.",
    copy:
      "Fast One IPLC supports organizations that need protected international capacity, predictable latency, and private connectivity beyond Cambodia.",
    imageSrc: "/img/iplc_icon.png",
    imageAlt: "IPLC service icon",
    action: contactSales,
    secondaryAction: {
      label: "Business overview",
      href: "/business",
    },
    intro: {
      eyebrow: "International circuit",
      title: "A private path for cross-border systems and critical communication.",
      copy:
        "IPLC is suited to businesses that need international private leased capacity for branch systems, global partners, or latency-sensitive applications.",
    },
    highlights: [
      "International private leased circuit",
      "Protected capacity for global operations",
      "Predictable latency discussion",
      "Business-grade planning and support",
    ],
    cards: [
      {
        title: "Global reach",
        text: "Support international business systems with a private connectivity option planned around the destination and usage.",
      },
      {
        title: "Predictable performance",
        text: "Discuss latency, bandwidth, and service expectations before committing to the circuit design.",
      },
      {
        title: "Critical workloads",
        text: "Use IPLC for applications where privacy, consistency, and cross-border stability matter.",
      },
    ],
    closing: {
      eyebrow: "Plan an IPLC",
      title: "Share the origin, destination, and required capacity.",
      copy:
        "Fast One sales can help start the feasibility conversation for international private connectivity.",
      imageSrc: "/img/global-network.png",
      imageAlt: "Global network illustration",
      action: contactSales,
    },
  },
};
