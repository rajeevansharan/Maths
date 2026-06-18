import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Users,
  Video,
  MessageCircle,
  BarChart3,
  CheckSquare,
  UserCheck,
  Calculator,
  LineChart,
  Target,
  BookOpen,
  Award,
  Sparkles,
  ArrowRight,
  PhoneCall,
  ClipboardList,
  UserPlus,
  CalendarCheck,
  Rocket,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "./about";
import classroomImg from "@/assets/classroom.jpg";
import zoomImg from "@/assets/zoom-class.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Apex Mathematics Institute" },
      { name: "description", content: "Classroom programs, live Zoom online classes, revision and exam preparation across O/L and A/L Mathematics." },
      { property: "og:title", content: "Mathematics Programs at Apex" },
      { property: "og:description", content: "Classroom & online programs across O/L and A/L Mathematics." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Mathematics programs designed around real exam success."
        subtitle="Classroom programs in Colombo and live Zoom classes worldwide — built for serious learners."
      />
      <Modes />
      <Subjects />
      <Process />
    </>
  );
}

function Modes() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <ModeCard
          img={classroomImg}
          tag="Physical Classroom"
          title="In-person classes in Colombo"
          items={[
            { Icon: Users, text: "Small group classes (max 25 students)" },
            { Icon: BookOpen, text: "Intensive revision classes" },
            { Icon: Award, text: "Examination preparation series" },
            { Icon: UserCheck, text: "One-on-one attention sessions" },
          ]}
        />
        <ModeCard
          img={zoomImg}
          tag="Online Zoom"
          title="Live online mathematics programs"
          items={[
            { Icon: Video, text: "Live interactive Zoom teaching" },
            { Icon: MessageCircle, text: "Real-time Q&A and homework help" },
            { Icon: BarChart3, text: "Progress tracking & weekly tests" },
            { Icon: CheckSquare, text: "Virtual assessments & mentoring" },
          ]}
        />
      </div>
    </section>
  );
}

function ModeCard({
  img,
  tag,
  title,
  items,
}: {
  img: string;
  tag: string;
  title: string;
  items: { Icon: React.ComponentType<{ className?: string }>; text: string }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-shadow"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={img} alt={title} loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-gold px-3 py-1 text-[11px] uppercase tracking-widest font-semibold text-gold-foreground">
            {tag}
          </span>
        </div>
      </div>
      <div className="p-8">
        <h3 className="font-display text-2xl md:text-3xl font-semibold">{title}</h3>
        <ul className="mt-6 space-y-3.5">
          {items.map(({ Icon, text }) => (
            <li key={text} className="flex items-center gap-3 text-sm">
              <div className="grid h-8 w-8 place-items-center rounded-md bg-primary-soft text-primary">
                <Icon className="h-4 w-4" />
              </div>
              {text}
            </li>
          ))}
        </ul>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-deep">
          Inquire about this program <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}

function Subjects() {
  const subjects = [
    { Icon: Calculator, title: "O/L Mathematics", desc: "Complete syllabus coverage with weekly tutorials and model papers." },
    { Icon: LineChart, title: "A/L Combined Mathematics", desc: "Both Pure and Applied taught by senior subject specialists." },
    { Icon: Target, title: "A/L Pure Mathematics", desc: "Deep mastery of algebra, calculus, vectors and analysis." },
    { Icon: Sparkles, title: "A/L Applied Mathematics", desc: "Mechanics and statistics taught with intuition and visual clarity." },
    { Icon: BookOpen, title: "Foundation Mathematics", desc: "Build a fluent base before stepping up to O/L or A/L work." },
    { Icon: Award, title: "Revision Programs", desc: "Targeted topic revision and past-paper workshops." },
    { Icon: Rocket, title: "Intensive Exam Prep", desc: "Final-month sprint with mock exams and paper-class series." },
  ];
  return (
    <section className="py-24 lg:py-32 bg-primary-soft/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Subjects"
          title="Every program, every level."
          subtitle="Choose by exam, by subject, or by goal — we'll match you with the right teacher and class size."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {subjects.map(({ Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-border bg-card p-7 hover:border-primary hover:shadow-lg transition-all">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { Icon: PhoneCall, title: "Submit Inquiry", desc: "Reach out through the form or call us directly." },
    { Icon: ClipboardList, title: "Consultation", desc: "We learn about the student and recommend the right program." },
    { Icon: UserPlus, title: "Registration", desc: "Simple paperwork and a welcome pack with class details." },
    { Icon: CalendarCheck, title: "Class Enrollment", desc: "Schedule confirmed for classroom or live Zoom sessions." },
    { Icon: Rocket, title: "Start Learning", desc: "Begin classes, track progress and grow with confidence." },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Enrollment Process"
          title="From inquiry to first class — five clear steps."
          align="center"
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {steps.map(({ Icon, title, desc }, i) => (
            <div key={title} className="relative rounded-xl border border-border bg-card p-6 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-xs uppercase tracking-widest text-gold font-semibold">Step {i + 1}</div>
              <h3 className="mt-2 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
            Start your inquiry <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}