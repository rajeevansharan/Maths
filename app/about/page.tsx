import { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
    title: "About Us | Raj Mathematics Institute",
};

export default function AboutPage() {
    return <AboutClient />;
}
