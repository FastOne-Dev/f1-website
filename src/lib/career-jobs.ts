export type CareerJobContent = {
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export type CareerJob = CareerJobContent & {
  id: string;
  type: "Full-time" | "Part-time" | "Internship";
  deadline: string;
  isNew?: boolean;
  km: CareerJobContent;
};

export function getCareerJobContent(
  job: CareerJob,
  language: "en" | "km",
): CareerJobContent {
  if (language === "km") return job.km;

  return {
    title: job.title,
    department: job.department,
    location: job.location,
    type: job.type,
    summary: job.summary,
    responsibilities: job.responsibilities,
    requirements: job.requirements,
  };
}

// Add or remove vacancies here. Each vacancy includes its Khmer translation.
export const careerJobs: CareerJob[] = [
  {
    id: "noc-engineer",
    title: "Network Operations Center Engineer",
    department: "Network Operations",
    location: "Phnom Penh",
    type: "Full-time",
    deadline: "2026-08-31",
    isNew: true,
    summary:
      "Monitor Fast One's network, respond to incidents, and help keep customers connected around the clock.",
    responsibilities: [
      "Monitor network health, alerts, and service performance.",
      "Troubleshoot incidents and coordinate escalation with field teams.",
      "Maintain clear incident records and shift handovers.",
    ],
    requirements: [
      "Degree or diploma in IT, networking, or a related field.",
      "Basic knowledge of TCP/IP, routing, and network monitoring.",
      "Willingness to work rotating shifts and communicate clearly.",
    ],
    km: {
      title: "វិស្វករមជ្ឈមណ្ឌលប្រតិបត្តិការបណ្តាញ",
      department: "ប្រតិបត្តិការបណ្តាញ",
      location: "ភ្នំពេញ",
      type: "ពេញម៉ោង",
      summary:
        "តាមដានបណ្តាញរបស់ Fast One ឆ្លើយតបទៅនឹងបញ្ហាបច្ចេកទេស និងជួយរក្សាការតភ្ជាប់របស់អតិថិជនគ្រប់ពេលវេលា",
      responsibilities: [
        "តាមដានស្ថានភាពបណ្តាញ ការជូនដំណឹង និងប្រសិទ្ធភាពសេវាកម្ម",
        "វិភាគ និងដោះស្រាយបញ្ហា ព្រមទាំងសម្របសម្រួលការបញ្ជូនបញ្ហាទៅក្រុមការងារតាមទីតាំង",
        "កត់ត្រាបញ្ហាឱ្យបានច្បាស់លាស់ និងប្រគល់ព័ត៌មានរវាងវេនការងារ",
      ],
      requirements: [
        "បរិញ្ញាបត្រ ឬសញ្ញាបត្រផ្នែកព័ត៌មានវិទ្យា បណ្តាញ ឬជំនាញពាក់ព័ន្ធ",
        "មានចំណេះដឹងមូលដ្ឋានអំពី TCP/IP, routing និងការតាមដានបណ្តាញ",
        "អាចធ្វើការប្តូរវេន និងមានជំនាញទំនាក់ទំនងច្បាស់លាស់",
      ],
    },
  },
  {
    id: "fiber-technician",
    title: "Fiber Installation Technician",
    department: "Technical Operations",
    location: "Phnom Penh",
    type: "Full-time",
    deadline: "2026-08-24",
    isNew: true,
    summary:
      "Install and maintain reliable fiber connections for homes and businesses across Phnom Penh.",
    responsibilities: [
      "Install, test, and troubleshoot fiber-optic connections.",
      "Complete site checks and explain equipment setup to customers.",
      "Follow safety, quality, and service documentation standards.",
    ],
    requirements: [
      "Hands-on technical experience; fiber experience is preferred.",
      "Able to travel to customer sites and work safely at height.",
      "Customer-friendly attitude and practical problem-solving skills.",
    ],
    km: {
      title: "អ្នកបច្ចេកទេសដំឡើងខ្សែកាបអុបទិក",
      department: "ប្រតិបត្តិការបច្ចេកទេស",
      location: "ភ្នំពេញ",
      type: "ពេញម៉ោង",
      summary:
        "ដំឡើង និងថែទាំការតភ្ជាប់ខ្សែកាបអុបទិកដែលអាចទុកចិត្តបានសម្រាប់គេហដ្ឋាន និងអាជីវកម្មនៅទូទាំងរាជធានីភ្នំពេញ",
      responsibilities: [
        "ដំឡើង សាកល្បង និងដោះស្រាយបញ្ហាការតភ្ជាប់ខ្សែកាបអុបទិក",
        "ចុះពិនិត្យទីតាំង និងពន្យល់អំពីការរៀបចំឧបករណ៍ដល់អតិថិជន",
        "អនុវត្តតាមស្តង់ដារសុវត្ថិភាព គុណភាព និងការកត់ត្រាព័ត៌មានសេវាកម្ម",
      ],
      requirements: [
        "មានបទពិសោធន៍ការងារបច្ចេកទេសជាក់ស្តែង ហើយបទពិសោធន៍ផ្នែកខ្សែកាបអុបទិកគឺជាអាទិភាព",
        "អាចធ្វើដំណើរទៅទីតាំងអតិថិជន និងធ្វើការនៅទីខ្ពស់ដោយសុវត្ថិភាព",
        "មានអាកប្បកិរិយារួសរាយរាក់ទាក់ចំពោះអតិថិជន និងជំនាញដោះស្រាយបញ្ហាជាក់ស្តែង",
      ],
    },
  },
  {
    id: "customer-care-officer",
    title: "Customer Care Officer",
    department: "Customer Experience",
    location: "Phnom Penh",
    type: "Full-time",
    deadline: "2026-08-15",
    summary:
      "Support customers across phone and digital channels with timely, friendly, and accurate answers.",
    responsibilities: [
      "Respond to service questions and create support cases.",
      "Guide customers through basic troubleshooting steps.",
      "Follow up on open cases and capture useful customer feedback.",
    ],
    requirements: [
      "Strong Khmer communication and working English.",
      "Comfortable with computers and customer support tools.",
      "Patient, organized, and calm under pressure.",
    ],
    km: {
      title: "មន្ត្រីសេវាអតិថិជន",
      department: "បទពិសោធន៍អតិថិជន",
      location: "ភ្នំពេញ",
      type: "ពេញម៉ោង",
      summary:
        "គាំទ្រអតិថិជនតាមទូរស័ព្ទ និងបណ្តាញឌីជីថល ដោយផ្តល់ចម្លើយបានទាន់ពេលវេលា រួសរាយរាក់ទាក់ និងត្រឹមត្រូវ",
      responsibilities: [
        "ឆ្លើយតបសំណួរអំពីសេវាកម្ម និងបង្កើតករណីស្នើសុំជំនួយ",
        "ណែនាំអតិថិជនអំពីជំហានមូលដ្ឋានក្នុងការដោះស្រាយបញ្ហា",
        "តាមដានករណីដែលមិនទាន់បិទ និងកត់ត្រាមតិយោបល់មានប្រយោជន៍ពីអតិថិជន",
      ],
      requirements: [
        "មានជំនាញទំនាក់ទំនងជាភាសាខ្មែរល្អ និងអាចប្រើភាសាអង់គ្លេសក្នុងការងារបាន",
        "អាចប្រើកុំព្យូទ័រ និងឧបករណ៍គាំទ្រអតិថិជនបានយ៉ាងងាយស្រួល",
        "មានភាពអត់ធ្មត់ រៀបចំការងារបានល្អ និងរក្សាភាពស្ងប់ស្ងាត់ក្រោមសម្ពាធ",
      ],
    },
  },
  {
    id: "enterprise-sales-executive",
    title: "Enterprise Sales Executive",
    department: "Business Sales",
    location: "Phnom Penh",
    type: "Full-time",
    deadline: "2026-09-05",
    summary:
      "Help Cambodian organizations choose dedicated connectivity solutions that fit their operations.",
    responsibilities: [
      "Build relationships with new and existing business customers.",
      "Prepare connectivity proposals with technical teams.",
      "Manage opportunities, forecasts, and commercial follow-up.",
    ],
    requirements: [
      "Experience in B2B sales, telecom, or technology services.",
      "Confident presentation and negotiation skills.",
      "Self-motivated with strong account management habits.",
    ],
    km: {
      title: "មន្ត្រីផ្នែកលក់សហគ្រាស",
      department: "ផ្នែកលក់អាជីវកម្ម",
      location: "ភ្នំពេញ",
      type: "ពេញម៉ោង",
      summary:
        "ជួយស្ថាប័ននៅកម្ពុជាជ្រើសរើសដំណោះស្រាយតភ្ជាប់ឯកជនដែលសមស្របនឹងប្រតិបត្តិការរបស់ពួកគេ",
      responsibilities: [
        "កសាងទំនាក់ទំនងជាមួយអតិថិជនអាជីវកម្មថ្មី និងអតិថិជនដែលមានស្រាប់",
        "រៀបចំសំណើដំណោះស្រាយតភ្ជាប់ជាមួយក្រុមបច្ចេកទេស",
        "គ្រប់គ្រងឱកាសលក់ ការព្យាករណ៍ និងការតាមដានផ្នែកពាណិជ្ជកម្ម",
      ],
      requirements: [
        "មានបទពិសោធន៍ផ្នែកលក់ B2B ទូរគមនាគមន៍ ឬសេវាបច្ចេកវិទ្យា",
        "មានទំនុកចិត្តក្នុងការធ្វើបទបង្ហាញ និងចរចា",
        "មានទឹកចិត្តធ្វើការដោយខ្លួនឯង និងទម្លាប់ល្អក្នុងការគ្រប់គ្រងគណនីអតិថិជន",
      ],
    },
  },
  {
    id: "marketing-intern",
    title: "Digital Marketing Intern",
    department: "Marketing",
    location: "Phnom Penh",
    type: "Internship",
    deadline: "2026-08-20",
    isNew: true,
    summary:
      "Support social content, campaigns, and customer stories while learning in a fast-moving local team.",
    responsibilities: [
      "Help plan and publish social media content.",
      "Support campaign reporting and competitor research.",
      "Coordinate simple creative and community tasks.",
    ],
    requirements: [
      "Current student or recent graduate in marketing or communications.",
      "Good writing skills and interest in digital content.",
      "Curious, reliable, and ready to learn.",
    ],
    km: {
      title: "អ្នកហាត់ការផ្នែកទីផ្សារឌីជីថល",
      department: "ទីផ្សារ",
      location: "ភ្នំពេញ",
      type: "ហាត់ការ",
      summary:
        "គាំទ្រការបង្កើតមាតិកាបណ្តាញសង្គម យុទ្ធនាការ និងរឿងរ៉ាវរបស់អតិថិជន ព្រមទាំងរៀនសូត្រជាមួយក្រុមការងារក្នុងស្រុកដែលមានភាពសកម្ម",
      responsibilities: [
        "ជួយរៀបចំផែនការ និងផ្សព្វផ្សាយមាតិកាបណ្តាញសង្គម",
        "គាំទ្រការរៀបចំរបាយការណ៍យុទ្ធនាការ និងស្រាវជ្រាវអំពីដៃគូប្រកួតប្រជែង",
        "សម្របសម្រួលការងារច្នៃប្រឌិត និងការងារសហគមន៍មូលដ្ឋាន",
      ],
      requirements: [
        "កំពុងសិក្សា ឬទើបបញ្ចប់ការសិក្សាផ្នែកទីផ្សារ ឬទំនាក់ទំនង",
        "មានជំនាញសរសេរល្អ និងចាប់អារម្មណ៍លើមាតិកាឌីជីថល",
        "មានការចង់ដឹងចង់ឃើញ អាចទុកចិត្តបាន និងត្រៀមខ្លួនរៀនសូត្រ",
      ],
    },
  },
];
