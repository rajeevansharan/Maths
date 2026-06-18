import { Metadata } from "next";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | Apex Mathematics Institute",
};

export default function ContactPage() {
    return (
        <main className="py-20 lg:py-32">
            <div className="container-page max-w-5xl">
                <SectionHeading
                    eyebrow="Get in touch"
                    title="We're here to answer your questions"
                    subtitle="Ready to begin your mathematical journey? Reach out to our admissions team for personalized guidance and enrollment information."
                    align="center"
                />

                <div className="mt-20 grid lg:grid-cols-2 gap-12 bg-card rounded-3xl border border-border overflow-hidden shadow-xl">
                    <div className="p-10 lg:p-14 bg-primary-deep text-white">
                        <h3 className="text-3xl font-display font-semibold mb-8">Contact Information</h3>
                        <div className="space-y-8">
                            <div className="flex gap-4 items-start">
                                <Phone className="mt-1 h-6 w-6 text-gold" />
                                <div>
                                    <div className="font-semibold text-lg">Call Us</div>
                                    <div className="text-white/80 mt-1">+94 77 123 4567</div>
                                    <div className="text-white/80">+94 11 234 5678</div>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <Mail className="mt-1 h-6 w-6 text-gold" />
                                <div>
                                    <div className="font-semibold text-lg">Email Us</div>
                                    <div className="text-white/80 mt-1">hello@apexmath.lk</div>
                                    <div className="text-white/80">admissions@apexmath.lk</div>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <MapPin className="mt-1 h-6 w-6 text-gold" />
                                <div>
                                    <div className="font-semibold text-lg">Visit Us</div>
                                    <div className="text-white/80 mt-1">24 Galle Road, Colombo 03<br />Sri Lanka</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10 lg:p-14 flex flex-col justify-center">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                                <input type="text" id="name" className="w-full rounded-md border border-border px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="John Doe" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                                <input type="email" id="email" className="w-full rounded-md border border-border px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message Course Inquiry</label>
                                <textarea id="message" rows={4} className="w-full rounded-md border border-border px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white rounded-md py-3.5 font-semibold transition hover:bg-primary-deep">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
