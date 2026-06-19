import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
    title: "Services & Programs | Raj Mathematics Institute",
    description: "Mathematics programs designed around real exam success. Classroom programs in Colombo and live Zoom classes worldwide.",
};

export default function ServicesPage() {
    return <ServicesContent />;
}
