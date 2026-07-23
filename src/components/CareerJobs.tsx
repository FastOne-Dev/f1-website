"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Flame,
  MapPin,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { useLanguage } from "@/lib/language";
import {
  careerJobs,
  getCareerJobContent,
  type CareerJob,
} from "@/lib/career-jobs";
import { hrTelegramHandle, hrTelegramUrl } from "@/lib/site-data";
import { cx, sectionInner } from "@/lib/ui-classes";

const CLOSING_SOON_DAYS = 14;

const khmerMonths = [
  "មករា",
  "កុម្ភៈ",
  "មីនា",
  "មេសា",
  "ឧសភា",
  "មិថុនា",
  "កក្កដា",
  "សីហា",
  "កញ្ញា",
  "តុលា",
  "វិច្ឆិកា",
  "ធ្នូ",
] as const;

const khmerDigits = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"] as const;

const columns = "grid-cols-[minmax(0,2.3fr)_minmax(0,1.5fr)_minmax(0,0.85fr)_minmax(0,0.95fr)]";

const boardCopy = {
  en: {
    eyebrow: "Current opportunities",
    title: "Find your place at Fast One.",
    intro:
      "Search our open roles and choose the opportunity that fits your experience, interests, and next step.",
    searchPlaceholder: "Search job title or keyword",
    allDepartments: "All departments",
    allLocations: "All locations",
    clear: "Clear filters",
    showing: "Showing",
    position: "position",
    positions: "positions",
    colTitle: "Job title",
    colDepartment: "Department",
    colLocation: "Location",
    colDeadline: "Deadline",
    applyBy: "Apply by",
    new: "New",
    closingSoon: "Closing soon",
    noMatch: "No roles match those filters.",
    noMatchCopy: "Try a different keyword or clear your filters to see every opening.",
    clearAll: "View all roles",
    openDetails: "Open job details",
    generalApplication: "Looking for something else?",
    emailCv: "Send your CV for future opportunities",
    whatYouDo: "What you'll do",
    lookingFor: "What we're looking for",
    applicationNote:
      "Message our HR team on Telegram with the job title. We'll reach out to shortlisted candidates.",
    apply: "Apply for this position",
    close: "Close job details",
  },
  km: {
    eyebrow: "ឱកាសការងារបច្ចុប្បន្ន",
    title: "ស្វែងរកការងាររបស់អ្នកនៅ Fast One",
    intro:
      "ស្វែងរកតួនាទីដែលកំពុងបើក និងជ្រើសរើសឱកាសដែលសមនឹងបទពិសោធន៍ ចំណាប់អារម្មណ៍ និងជំហានបន្ទាប់របស់អ្នក",
    searchPlaceholder: "ស្វែងរកចំណងជើងការងារ ឬពាក្យគន្លឹះ",
    allDepartments: "គ្រប់ផ្នែក",
    allLocations: "គ្រប់ទីតាំង",
    clear: "លុបតម្រង",
    showing: "កំពុងបង្ហាញ",
    position: "តួនាទី",
    positions: "តួនាទី",
    colTitle: "ចំណងជើងការងារ",
    colDepartment: "ផ្នែក",
    colLocation: "ទីតាំង",
    colDeadline: "ថ្ងៃផុតកំណត់",
    applyBy: "ដាក់ពាក្យមុន",
    new: "ថ្មី",
    closingSoon: "ជិតផុតកំណត់",
    noMatch: "មិនមានតួនាទីត្រូវនឹងតម្រងនេះទេ",
    noMatchCopy: "សាកល្បងពាក្យគន្លឹះផ្សេង ឬលុបតម្រងដើម្បីមើលការងារទាំងអស់",
    clearAll: "មើលការងារទាំងអស់",
    openDetails: "បើកព័ត៌មានលម្អិត",
    generalApplication: "កំពុងស្វែងរកតួនាទីផ្សេងទៀត?",
    emailCv: "ផ្ញើ CV សម្រាប់ឱកាសការងារនាពេលអនាគត",
    whatYouDo: "ការងារដែលអ្នកនឹងធ្វើ",
    lookingFor: "លក្ខណៈដែលយើងកំពុងស្វែងរក",
    applicationNote:
      "សូមផ្ញើសារទៅក្រុមធនធានមនុស្សរបស់យើងតាម Telegram ដោយបញ្ជាក់ចំណងជើងការងារ យើងនឹងទាក់ទងទៅបេក្ខជនដែលត្រូវបានជ្រើសរើស",
    apply: "ដាក់ពាក្យសម្រាប់តួនាទីនេះ",
    close: "បិទព័ត៌មានការងារ",
  },
} as const;

function readableDate(value: string, locale: string) {
  const date = new Date(`${value}T00:00:00`);

  if (locale === "km-KH") {
    const localizeNumber = (number: number) =>
      String(number).replace(/\d/g, (digit) => khmerDigits[Number(digit)]);

    return `${localizeNumber(date.getDate())} ${khmerMonths[date.getMonth()]} ${localizeNumber(date.getFullYear())}`;
  }

  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function daysUntilDeadline(value: string) {
  const deadline = new Date(`${value}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return Math.ceil((deadline.getTime() - today.getTime()) / (24 * 60 * 60 * 1000));
}

export default function CareerJobs() {
  const { language } = useLanguage();
  const copy = boardCopy[language];
  const locale = language === "km" ? "km-KH" : "en-US";
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [selectedJob, setSelectedJob] = useState<CareerJob | null>(null);

  const departments = useMemo(
    () =>
      [...new Map(
        careerJobs.map((job) => [
          job.department,
          getCareerJobContent(job, language).department,
        ]),
      ).entries()].map(([value, label]) => ({ value, label })),
    [language],
  );
  const locations = useMemo(
    () =>
      [...new Map(
        careerJobs.map((job) => [
          job.location,
          getCareerJobContent(job, language).location,
        ]),
      ).entries()].map(([value, label]) => ({ value, label })),
    [language],
  );

  const jobs = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return careerJobs.filter((job) => {
      const localizedJob = getCareerJobContent(job, language);
      const searchableText = [
        job.title,
        job.department,
        job.location,
        job.type,
        job.summary,
        localizedJob.title,
        localizedJob.department,
        localizedJob.location,
        localizedJob.type,
        localizedJob.summary,
      ]
        .join(" ")
        .toLowerCase();

      return (
        (!needle || searchableText.includes(needle)) &&
        (!department || job.department === department) &&
        (!location || job.location === location)
      );
    });
  }, [department, language, location, query]);

  const hasFilters = Boolean(query || department || location);
  const selectedJobContent = selectedJob
    ? getCareerJobContent(selectedJob, language)
    : null;

  useEffect(() => {
    if (!selectedJob) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedJob(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedJob]);

  const reset = () => {
    setQuery("");
    setDepartment("");
    setLocation("");
  };

  const inputBase =
    "h-12 w-full rounded-[10px] border border-brand-border-subtle bg-white text-[0.9rem] font-medium text-brand-heading transition focus:border-brand-highlight focus:outline-none focus:ring-2 focus:ring-brand-highlight/15";

  return (
    <section className="scroll-mt-[76px] bg-white py-24 max-[820px]:py-16" id="open-positions">
      <div className={sectionInner}>
        <div className="max-w-[720px]">
          <p className="m-0 flex items-center gap-3 text-[0.75rem] font-black uppercase tracking-[0.14em] text-brand-accent">
            <span className="h-px w-9 bg-brand-highlight" aria-hidden="true" />
            {copy.eyebrow}
          </p>
          <h2 className="mb-0 mt-4 text-[clamp(2.1rem,3.8vw,3.1rem)] font-black leading-[1.05] tracking-[-0.03em] text-brand-ink [text-wrap:balance] [[lang=km]_&]:leading-[1.42] [[lang=km]_&]:tracking-normal">
            {copy.title}
          </h2>
          <p className="mb-0 mt-4 text-[0.98rem] leading-[1.7] text-brand-copy [[lang=km]_&]:leading-[1.9]">
            {copy.intro}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)] gap-3 max-[720px]:grid-cols-1">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-brand-accent" />
            <input
              className={cx(inputBase, "pl-11 pr-4 placeholder:font-normal placeholder:text-brand-muted")}
              placeholder={copy.searchPlaceholder}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label={copy.searchPlaceholder}
            />
          </div>

          <div className="relative">
            <BriefcaseBusiness className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-brand-accent" />
            <select
              className={cx(inputBase, "appearance-none pl-11 pr-10")}
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
              aria-label={copy.colDepartment}
            >
              <option value="">{copy.allDepartments}</option>
              {departments.map((item) => (
                <option value={item.value} key={item.value}>{item.label}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-brand-muted" />
          </div>

          <div className="relative">
            <MapPin className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-brand-accent" />
            <select
              className={cx(inputBase, "appearance-none pl-11 pr-10")}
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              aria-label={copy.colLocation}
            >
              <option value="">{copy.allLocations}</option>
              {locations.map((item) => (
                <option value={item.value} key={item.value}>{item.label}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-brand-muted" />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="m-0 text-[0.82rem] font-semibold text-brand-copy">
            {copy.showing} <span className="font-black text-brand-heading">{jobs.length}</span>{" "}
            {jobs.length === 1 ? copy.position : copy.positions}
          </p>
          {hasFilters && (
            <button
              className="text-[0.78rem] font-bold text-brand-link underline decoration-brand-link/35 underline-offset-4 transition hover:text-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2"
              type="button"
              onClick={reset}
            >
              {copy.clear}
            </button>
          )}
        </div>

        <div className="mt-4 overflow-hidden rounded-[14px] border border-brand-border-subtle">
          <div className={cx("grid gap-6 bg-brand-surface-hero px-5 py-3.5 text-[0.72rem] font-black uppercase tracking-[0.07em] text-brand-accent max-[760px]:hidden", columns)}>
            <span>{copy.colTitle}</span>
            <span>{copy.colDepartment}</span>
            <span>{copy.colLocation}</span>
            <span>{copy.colDeadline}</span>
          </div>

          {jobs.length ? (
            jobs.map((job, index) => {
              const localizedJob = getCareerJobContent(job, language);
              const daysLeft = daysUntilDeadline(job.deadline);
              const closingSoon = daysLeft >= 0 && daysLeft <= CLOSING_SOON_DAYS;

              return (
                <button
                  className={cx(
                    "group grid w-full cursor-pointer items-center gap-6 border-t border-brand-border-subtle px-5 py-[18px] text-left transition-colors hover:bg-brand-surface-hero focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-highlight/40 max-[760px]:flex max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-2.5",
                    columns,
                    index % 2 === 1 ? "bg-brand-surface-alt/50" : "bg-white",
                  )}
                  type="button"
                  key={job.id}
                  aria-label={`${copy.openDetails}: ${localizedJob.title}`}
                  aria-haspopup="dialog"
                  onClick={() => setSelectedJob(job)}
                >
                  <span className="flex min-w-0 flex-wrap items-center gap-2">
                    <span className="text-[0.98rem] font-black leading-snug tracking-[-0.01em] text-brand-ink transition-colors group-hover:text-brand-link">
                      {localizedJob.title}
                    </span>
                    {job.isNew && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#E7F0FF] px-2 py-0.5 text-[0.58rem] font-black uppercase tracking-[0.08em] text-[#0066FF]">
                        <Sparkles className="size-3" />
                        {copy.new}
                      </span>
                    )}
                    {closingSoon && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF1E0] px-2 py-0.5 text-[0.58rem] font-black uppercase tracking-[0.08em] text-[#C2620C]">
                        <Flame className="size-3" />
                        {copy.closingSoon}
                      </span>
                    )}
                  </span>

                  <span className="flex items-center gap-2 text-[0.86rem] font-semibold text-brand-copy-secondary">
                    <BriefcaseBusiness className="hidden size-3.5 flex-none text-brand-accent max-[760px]:block" />
                    {localizedJob.department}
                  </span>

                  <span className="flex items-center gap-2 text-[0.86rem] text-brand-copy-secondary">
                    <MapPin className="hidden size-3.5 flex-none text-brand-accent max-[760px]:block" />
                    {localizedJob.location}
                  </span>

                  <span className="flex items-center gap-2 text-[0.86rem] text-brand-copy-secondary">
                    <CalendarDays className="hidden size-3.5 flex-none text-brand-accent max-[760px]:block" />
                    {readableDate(job.deadline, locale)}
                  </span>
                </button>
              );
            })
          ) : (
            <div className="border-t border-brand-border-subtle bg-white py-16 text-center">
              <Search className="mx-auto size-8 text-brand-muted" strokeWidth={1.5} />
              <h3 className="mb-0 mt-5 text-xl font-black text-brand-ink">{copy.noMatch}</h3>
              <p className="mx-auto mb-0 mt-2 max-w-[440px] text-sm leading-6 text-brand-copy">{copy.noMatchCopy}</p>
              <button
                className="mt-5 text-sm font-bold text-brand-link underline underline-offset-4 transition hover:text-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2"
                type="button"
                onClick={reset}
              >
                {copy.clearAll}
              </button>
            </div>
          )}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.85rem]">
          <span className="font-bold text-brand-copy-secondary">{copy.generalApplication}</span>
          <a
            className="inline-flex items-center gap-1.5 font-bold text-brand-link underline decoration-brand-link/35 underline-offset-4 transition hover:text-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2"
            href={hrTelegramUrl}
            target="_blank"
            rel="noreferrer"
          >
            {copy.emailCv}
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>

      {selectedJob && selectedJobContent && (
        <div
          className="fixed inset-0 z-[80] flex animate-in items-center justify-center bg-brand-dark/60 p-4 backdrop-blur-[3px] fade-in animation-duration-200 fill-mode-both motion-reduce:animate-none max-[560px]:p-0"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedJob(null);
          }}
        >
          <div
            className="flex max-h-[86vh] w-full max-w-[640px] animate-in flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_40px_90px_rgba(7,30,62,0.4)] fade-in zoom-in-95 slide-in-from-bottom-4 animation-duration-300 ease-out fill-mode-both motion-reduce:animate-none max-[560px]:h-full max-[560px]:max-h-full max-[560px]:rounded-none"
            role="dialog"
            aria-modal="true"
            aria-labelledby="job-dialog-title"
          >
            <header className="relative border-b border-brand-border-subtle px-8 pb-6 pt-7 max-[560px]:px-6">
              <button
                className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full text-brand-muted transition hover:bg-brand-soft hover:text-brand-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2"
                type="button"
                aria-label={copy.close}
                autoFocus
                onClick={() => setSelectedJob(null)}
              >
                <X className="size-5" />
              </button>

              <p className="m-0 pr-12 text-[0.68rem] font-black uppercase tracking-[0.13em] text-brand-accent">
                {selectedJobContent.department}
              </p>
              <h3
                className="mb-0 mt-2.5 pr-8 text-[clamp(1.5rem,3vw,2.05rem)] font-black leading-[1.12] tracking-[-0.02em] text-brand-ink"
                id="job-dialog-title"
              >
                {selectedJobContent.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5 text-[0.8rem] font-semibold text-brand-copy-secondary">
                <span className="flex items-center gap-1.5"><MapPin className="size-4 text-brand-accent" />{selectedJobContent.location}</span>
                <span className="flex items-center gap-1.5"><Clock3 className="size-4 text-brand-accent" />{selectedJobContent.type}</span>
                <span className="flex items-center gap-1.5"><CalendarDays className="size-4 text-brand-accent" />{copy.applyBy} {readableDate(selectedJob.deadline, locale)}</span>
              </div>
            </header>

            <div className="flex-1 overflow-y-auto px-8 py-7 max-[560px]:px-6">
              <p className="m-0 rounded-[12px] bg-brand-surface-hero px-5 py-4 text-[0.95rem] leading-7 text-brand-copy-secondary">
                {selectedJobContent.summary}
              </p>

              {[
                { title: copy.whatYouDo, items: selectedJobContent.responsibilities },
                { title: copy.lookingFor, items: selectedJobContent.requirements },
              ].map((block) => (
                <section className="mt-8" key={block.title}>
                  <h4 className="m-0 text-[1.05rem] font-black text-brand-heading">{block.title}</h4>
                  <ul className="mb-0 mt-4 grid list-none gap-3.5 p-0">
                    {block.items.map((item) => (
                      <li className="flex gap-3 text-[0.9rem] leading-6 text-brand-copy-secondary" key={item}>
                        <span className="mt-0.5 flex size-5 flex-none items-center justify-center rounded-full bg-brand-soft text-brand-accent">
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <footer className="border-t border-brand-border-subtle px-8 py-5 max-[560px]:px-6">
              <p className="m-0 text-[0.78rem] leading-6 text-brand-muted">
                {copy.applicationNote}{" "}
                <span className="font-bold text-brand-link">{hrTelegramHandle}</span>
              </p>
              <a
                className="group mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-[10px] bg-brand-primary px-6 text-[0.9rem] font-black text-white shadow-[0_14px_30px_rgba(0,103,172,0.28)] transition duration-150 hover:-translate-y-px hover:bg-brand-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight focus-visible:ring-offset-2"
                href={hrTelegramUrl}
                target="_blank"
                rel="noreferrer"
              >
                {copy.apply}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </footer>
          </div>
        </div>
      )}
    </section>
  );
}
