import { Metadata } from "next";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Calculator, GraduationCap, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | Apex Mathematics Institute",
};

export default function AboutPage() {
    return (
        <main className="py-20 lg:py-32">
            <div className="container-page">
                <SectionHeading
                    eyebrow="Our Story"
                    title="Shaping the Future of Mathematics Education"
                    subtitle="Since 2008, Apex Mathematics Institute has been a beacon of excellence, empowering thousands of students to exceed their expectations and achieve academic brilliance in O/L and A/L Mathematics."
                    align="center"
                />

                <div className="mt-20 grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl border border-border bg-card text-center">
                        <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary-soft text-primary mx-auto">
                            <GraduationCap className="h-6 w-6" />
                        </div>
                        <h3 className="mt-6 font-display text-xl font-bold">Expert Faculty</h3>
                        <p className="mt-3 text-muted-foreground text-sm">Led by visionary mathematics educators with decades of combined pedagogical experience.</p>
                    </div>
                    <div className="p-8 rounded-2xl border border-border bg-card text-center">
                        <div className="grid h-14 w-14 place-items-center rounded-xl bg-gold/20 text-gold mx-auto">
                            <Clock className="h-6 w-6" />
                        </div>
                        <h3 className="mt-6 font-display text-xl font-bold">15+ Years Legacy</h3>
                        <p className="mt-3 text-muted-foreground text-sm">A proud track record of producing top-island ranks and remarkable academic transformations.</p>
                    </div>
                    <div className="p-8 rounded-2xl border border-border bg-card text-center">
                        <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary-deep/10 text-primary-deep mx-auto">
                            <GraduationCap className="h-6 w-6" />
                        </div>
                        <h3 className="mt-6 font-display text-xl font-bold">Holistic Approach</h3>
                        <p className="mt-3 text-muted-foreground text-sm">Beyond rote learning—we instill an intuitive understanding of complex mathematical frameworks.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
