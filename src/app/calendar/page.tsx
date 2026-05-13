import type { Metadata } from "next";
import { PlantCalendar } from "./plant-calendar";
import { sharedOG } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Calendar de dezvoltare",

  description:
    "De la germinare la recoltă: etapă, acțiuni zilnice, milestone-uri și estimare exactă a recoltei.",

  openGraph: sharedOG({
    title: "Calendar de dezvoltare",
    description: "Asistent inteligent pentru fiecare zi a plantelor tale.",
    type: "website",
  }),
};

export default function CalendarPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-bold md:text-5xl">Calendar de dezvoltare</h1>
      <p className="text-muted-foreground mt-3">
        Selectează planta și data plantării — îți arătăm exact unde ești și ce
        urmează, până la recoltă.
      </p>

      <PlantCalendar />
    </div>
  );
}
