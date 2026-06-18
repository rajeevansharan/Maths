import { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Apex Mathematics Institute — Excellence in Mathematics Education",
  description: "Premier mathematics institution. O/L, A/L Combined, Pure & Applied Mathematics with experienced teachers, classroom and live Zoom programs.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Apex Mathematics Institute",
    description: "Excellence in Mathematics Education — classroom & live Zoom programs.",
    url: "/",
  }
};

export default function Page() {
  return <HomePage />;
}
