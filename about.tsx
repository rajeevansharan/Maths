import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Compass,
  Telescope,
  Trophy,
  ShieldCheck,
  Sparkles,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import director from "@/assets/director.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Apex Mathematics Institute" },
      { name: "description", content: "Meet the team behind Apex Mathematics — our director, our teachers, and the values guiding our approach to mathematics education." },
      { property: "og:title", content: "About Apex Mathematics" },
      { property: "og:description", content: "Our mission, our director, our teaching staff and core values." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A mathematics institution built on patience, rigour and results."
        subtitle="Since 2008 we've been guiding students towards confident, fluent mathematical thinking — at school, in exams, and beyond."
      />
      <Overview />
      <Director />
      <Teachers />
      <Values />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-primary-deep text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="container-page relative py-20 md:py-28">
        <motion.div initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-xs uppercase tracking-[0.22em] text-gold font-semibold">{eyebrow}</div>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] max-w-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base md:text-lg text-white/75">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Overview() {
  const blocks = [
    { Icon: Compass, title: "Our Mission", body: "Make rigorous mathematics education accessible, structured, and genuinely enjoyable for every student." },
    { Icon: Telescope, title: "Our Vision", body: "To be Sri Lanka's most trusted mathematics institution — known equally for results and for character." },
    { Icon: Sparkles, title: "Our Philosophy", body: "Understanding before memorisation. Practice before pressure. Confidence before exams." },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="container-page grid lg:grid-cols-[1fr_1.2fr] gap-14">
        <SectionHeading
          eyebrow="Our Institution"
          title="Two decades of building mathematical minds."
          subtitle="Apex began in 2008 with a small group of A/L students and a simple promise — every learner deserves a teacher who has time to explain. Today we serve hundreds of students in Colombo and across the world via live Zoom classes."
        />
        <div className="grid gap-5">
          {blocks.map(({ Icon, title, body }) => (
            <div key={title} className="flex gap-5 rounded-xl border border-border bg-card p-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Director() {
  return (
    <section className="py-24 lg:py-32 bg-primary-soft/50">
      <div className="container-page grid lg:grid-cols-[1fr_1.4fr] gap-14 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 to-gold/20 blur-2xl" />
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
            <img src={director} alt="Director portrait" width={800} height={1000} loading="lazy" className="w-full h-auto object-cover" />
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Director's Message</div>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            "Every student can master mathematics — with the right teacher."
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            For over twenty years I've taught mathematics to thousands of students across Sri Lanka.
            What I've learned is simple: mathematics rewards patience. Our role isn't to rush
            students through the syllabus — it's to make sure that when they sit the exam,
            they understand what they're doing and why.
          </p>
          <div className="mt-8 border-t border-border pt-6">
            <div className="font-display text-xl font-semibold">Dr. Nuwan Jayawardena</div>
            <div className="text-sm text-muted-foreground mt-1">
              Founder & Director · BSc (Hons) Mathematics, PhD in Applied Mathematics
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Teachers() {
  const team = [
    { name: "Mr. Ashan Wijesekara", role: "Senior Lecturer · A/L Pure Mathematics", qual: "MSc Mathematics, University of Colombo · 18 years", initials: "AW" },
    { name: "Ms. Tharindi Silva", role: "Senior Lecturer · A/L Combined Mathematics", qual: "BSc (Hons) Mathematics · 12 years", initials: "TS" },
    { name: "Mr. Rashmika Bandara", role: "Lecturer · O/L Mathematics", qual: "BSc Mathematics & Education · 9 years", initials: "RB" },
    { name: "Ms. Hiruni Perera", role: "Lecturer · Foundation Mathematics", qual: "BSc Mathematics · 7 years", initials: "HP" },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Teachers"
          title="Teachers who explain, not just lecture."
          subtitle="Every member of our team has years of classroom experience and is deeply familiar with the demands of national examinations."
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-primary to-primary-deep flex items-end p-6 relative">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,_white_0,_transparent_60%)]" />
                <div className="relative">
                  <div className="grid h-20 w-20 place-items-center rounded-full bg-gold font-display text-2xl font-semibold text-gold-foreground shadow-lg">
                    {t.initials}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">{t.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-primary font-semibold">{t.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{t.qual}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  const values = [
    { Icon: Trophy, title: "Academic Excellence", body: "We measure ourselves by our students' results — and we never settle." },
    { Icon: ShieldCheck, title: "Integrity", body: "Honest teaching, honest feedback, honest expectations." },
    { Icon: GraduationCap, title: "Student Success", body: "Every decision we make starts with what's best for the learner." },
    { Icon: Sparkles, title: "Innovation", body: "Modern tools and methods, blended with traditional mathematical rigour." },
    { Icon: BookOpen, title: "Continuous Learning", body: "Our teachers keep growing — so our students keep growing." },
    { Icon: Compass, title: "Discipline", body: "Consistency in practice is the quiet engine behind every distinction." },
  ];
  return (
    <section className="py-24 lg:py-32 bg-primary-deep text-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Values"
          title="What we stand for."
          invert
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map(({ Icon, title, body }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-7 backdrop-blur">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-gold text-gold-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}