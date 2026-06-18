import { Metadata } from "next";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
    title: "Success Stories | Apex Mathematics Institute",
};

export default function SuccessStoriesPage() {
    const items = [
        {
            quote: "My son went from a C to an A in A/L Combined Mathematics. The teaching is patient, structured and never rushed.",
            author: "Mrs. Perera",
            role: "Parent",
        },
        {
            quote: "The Zoom classes feel exactly like the classroom. I never felt I was missing out, even from abroad.",
            author: "Senuri F.",
            role: "A/L Student, Dubai",
        },
        {
            quote: "Sir explains every concept until it clicks. Mathematics finally makes sense to me after struggling for years.",
            author: "Dinith R.",
            role: "O/L Student",
        },
        {
            quote: "Achieving an Island Rank in Mathematics felt impossible until I joined the revision prep seminars here.",
            author: "Kavindu M.",
            role: "A/L Student, Colombo",
        },
        {
            quote: "The constant assessments really show exactly where you stand. There's no guessing involved.",
            author: "Dr. Samaranayake",
            role: "Parent",
        },
        {
            quote: "I highly recommend the Foundation Course. It cleared all my doubts from previous grades.",
            author: "Nethmi L.",
            role: "O/L Student",
        }
    ];

    return (
        <main className="py-20 lg:py-32 bg-primary-soft/30 min-h-screen">
            <div className="container-page">
                <SectionHeading
                    eyebrow="Testimonials"
                    title="Journeys of Academic Triumph"
                    subtitle="Read the transformation stories of our students who redefined their mathematical boundaries."
                    align="center"
                />

                <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((t, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-card border border-border shadow-sm">
                            <Quote className="h-8 w-8 text-gold opacity-80 mb-6" />
                            <blockquote className="text-lg leading-relaxed text-foreground">
                                "{t.quote}"
                            </blockquote>
                            <div className="mt-8 pt-6 border-t border-border">
                                <div className="font-semibold text-foreground">{t.author}</div>
                                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
