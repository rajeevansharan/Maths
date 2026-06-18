import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Quote, Trophy, Star, Award, GraduationCap, PlayCircle } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHero } from "./about";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Apex Mathematics Institute" },
      { name: "description", content: "Student testimonials, parent feedback, top grades and academic achievements at Apex Mathematics." },
      { property: "og:title", content: "Apex Mathematics — Student Success Stories" },
      { property: "og:description", content: "See the students, results and stories we're proud of." },
      { property: "og:url", content: "/success-stories" },
    ],
    links: [{ rel: "canonical", href: "/success-stories" }],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title="Real results, real students, real growth."
        subtitle="Behind every statistic is a student who showed up, worked hard, and was supported every step of the way."
      />
      <StatsRow />
      <StudentTestimonials />
      <ParentTestimonials />
      <Achievements />
      <Gallery />
      <VideoSection />
    </>
  );
}

function StatsRow() {
  const items = [
    { n: "96%", l: "Examination Pass Rate" },
    { n: "62%", l: "Distinction Rate (A grades)" },
    { n: "180+", l: "Top Grade Achievers" },
    { n: "90+", l: "University Admissions" },
  ];
  return (
    <section className="py-20 bg-primary-soft/50">
      <div className="container-page grid gap-y-10 grid-cols-2 lg:grid-cols-4 text-center">
        {items.map((s) => (
          <div key={s.l}>
            <div className="font-display text-4xl md:text-5xl font-semibold text-primary">{s.n}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StudentTestimonials() {
  const items = [
    { name: "Senuri F.", role: "A/L Combined · A pass", quote: "I joined the Zoom class from Dubai. The teaching is so structured that I never felt left behind. I got an A in Combined Mathematics." },
    { name: "Dinith R.", role: "O/L · A pass", quote: "Sir takes the time to make sure every concept clicks. I went from struggling to scoring an A in O/L." },
    { name: "Imasha P.", role: "A/L Pure · A pass", quote: "The past-paper workshops in the final months made all the difference. I felt fully prepared on exam day." },
    { name: "Kavindu S.", role: "A/L Combined · B → A", quote: "I came in with a B average and left with an A. The teachers actually care about your progress." },
    { name: "Tashini W.", role: "O/L · A pass", quote: "Mathematics used to be my weakest subject. Now it's my favourite." },
    { name: "Anjana D.", role: "A/L Applied · A pass", quote: "Mechanics finally made sense. The teaching is patient and visual — exactly what I needed." },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Student Testimonials"
          title="Words from our students."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-7 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <Quote className="mt-4 h-6 w-6 text-primary/40" />
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-0.5">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ParentTestimonials() {
  const items = [
    { name: "Mrs. Perera", role: "Parent of an A/L student", quote: "My son went from a C to an A in A/L Combined Mathematics. The teaching is patient, structured and never rushed." },
    { name: "Mr. Fernando", role: "Parent of an O/L student", quote: "We chose Apex for our daughter and we have never looked back. The communication with parents is exceptional." },
    { name: "Mrs. Jayasinghe", role: "Parent (Zoom student)", quote: "Living overseas, the live Zoom classes have been a lifeline. My daughter is thriving." },
  ];
  return (
    <section className="py-24 lg:py-32 bg-primary-deep text-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Parent Testimonials"
          title="Trusted by parents across Sri Lanka and beyond."
          invert
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <Quote className="h-7 w-7 text-gold" />
              <blockquote className="mt-4 text-base leading-relaxed text-white/85">"{t.quote}"</blockquote>
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-white/55 mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const list = [
    { Icon: Trophy, title: "Island Rank in A/L Combined Mathematics", body: "Multiple students placed in the top 100 island-ranked candidates." },
    { Icon: Award, title: "Distinction Honour Roll", body: "Over 60% of our A/L students consistently secure an A grade." },
    { Icon: GraduationCap, title: "University Placements", body: "Apex alumni admitted to Colombo, Moratuwa, Peradeniya and overseas universities." },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Academic Achievements"
          title="Milestones we celebrate."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {list.map(({ Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-8">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-gold text-gold-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const tiles = [
    "Top Scorers Honour Ceremony",
    "A/L Distinction Awards 2024",
    "Annual Mathematics Olympiad",
    "Director's Recognition Event",
    "Inter-school Mathematics Quiz",
    "Graduation & Farewell",
  ];
  return (
    <section className="py-24 lg:py-32 bg-primary-soft/50">
      <div className="container-page">
        <SectionHeading
          eyebrow="Achievement Gallery"
          title="Moments from our classrooms and award nights."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t, i) => (
            <div
              key={t}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-primary to-primary-deep border border-border"
            >
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,_white_0,_transparent_60%)]" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <Award className="h-6 w-6 text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/55">Event {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-1 font-display text-xl font-semibold leading-tight">{t}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Video Testimonials"
          title="Hear from our students — coming soon."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group aspect-video rounded-2xl border border-border bg-gradient-to-br from-primary-deep via-primary to-primary-deep grid place-items-center text-white cursor-pointer hover:opacity-95"
            >
              <PlayCircle className="h-14 w-14 text-gold transition-transform group-hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}