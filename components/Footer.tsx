import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
        <circle cx="16.806" cy="7.207" r="1.078" />
        <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.952-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
    </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
);

export function Footer() {
    return (
        <footer className="bg-primary-deep text-primary-foreground/85 mt-24">
            <div className="container-page py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <div className="flex items-center gap-2.5">
                        <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-white">
                            <Image
                                src="/Logo.jpeg"
                                alt="Raj Mathematics Logo"
                                fill
                                className="object-cover"
                            />
                        </span>
                        <span className="font-display text-xl font-semibold text-white">
                            Raj Mathematics
                        </span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
                        A premier mathematics institution shaping confident problem solvers
                        through expert teaching, in classrooms and live online.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-display text-base mb-4">Quick Links</h4>
                    <ul className="space-y-2.5 text-sm">
                        {[
                            ["/", "Home"],
                            ["/about", "About Us"],
                            ["/services", "Services"],
                            ["/success-stories", "Success Stories"],
                            ["/contact", "Contact"],
                        ].map(([to, label]) => (
                            <li key={to}>
                                <Link href={to} className="hover:text-gold transition-colors">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-display text-base mb-4">Contact</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex gap-2.5"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> +94 77 123 4567</li>
                        <li className="flex gap-2.5"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> hello@Rajmath.lk</li>
                        <li className="flex gap-2.5"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> 24 Galle Road, Colombo 03, Sri Lanka</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-display text-base mb-4">Follow Us</h4>
                    <div className="flex gap-3">
                        {[
                            { Icon: FacebookIcon, label: "Facebook" },
                            { Icon: InstagramIcon, label: "Instagram" },
                            { Icon: YoutubeIcon, label: "YouTube" },
                        ].map(({ Icon, label }) => (
                            <a
                                key={label}
                                href="#"
                                aria-label={label}
                                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-gold hover:text-gold transition-colors"
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                    <p className="mt-6 text-xs text-primary-foreground/55">
                        Live Zoom classes every weekday. Recordings included.
                    </p>
                </div>
            </div>
            <div className="border-t border-white/10">
                <div className="container-page py-6 text-xs text-primary-foreground/55 flex flex-col md:flex-row gap-2 justify-between">
                    <span>© {new Date().getFullYear()} Raj Mathematics Institute. All rights reserved.</span>
                    <span>Built for excellence in mathematics education.</span>
                </div>
            </div>
        </footer>
    );
}
