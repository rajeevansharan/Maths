import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    align?: "left" | "center" | "right";
}

export function SectionHeading({
    eyebrow,
    title,
    subtitle,
    align = "left",
    className,
    ...props
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "flex flex-col max-w-2xl",
                align === "center" && "mx-auto text-center items-center",
                align === "right" && "ml-auto text-right items-end",
                className
            )}
            {...props}
        >
            {eyebrow && (
                <span className="text-secondary-foreground uppercase tracking-widest text-xs font-semibold mb-3">
                    {eyebrow}
                </span>
            )}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
