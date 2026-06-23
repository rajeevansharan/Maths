import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
    title: "Services & Programs | Raj Mathematics Institute",
    description: "Mathematics programs designed around real exam success. Classroom programs in Jaffna and live Zoom classes across Sri Lanka.",
};

export default function ServicesPage() {
    return <ServicesContent />;
}
