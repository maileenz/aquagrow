import { AlertTriangle } from "lucide-react";
import { FAQ, ISSUES } from "./data";
import { Issue } from "./issue";
import { Faq } from "./faq";
import type { Metadata } from "next";
import { sharedOG } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Ajutor & Q&A",

  description:
    "Soluții detaliate pentru probleme frecvente, ghid de diagnoză și întrebări frecvente despre acvaponie.",

  openGraph: sharedOG({
    title: "Ajutor & Q&A",
    description: "Probleme frecvente, cauze, și soluții.",
    type: "article",
  }),
};

export default function Ajutor() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold md:text-5xl">
        Ajutor & Întrebări frecvente
      </h1>
      <p className="text-muted-foreground mt-3 max-w-2xl">
        Diagnoză detaliată pentru cele mai întâlnite probleme și răspunsuri
        complete la întrebările tale despre acvaponie.
      </p>

      <section className="mt-12">
        <div className="flex items-center gap-2">
          <AlertTriangle className="text-primary h-5 w-5" />
          <h2 className="text-2xl font-bold">Diagnoză probleme frecvente</h2>
        </div>
        <p className="text-muted-foreground mt-2 text-sm">
          Recunoaște simptomele, înțelege cauzele și aplică soluțiile potrivite.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {ISSUES.map((issue) => (
            <Issue {...issue} key={issue.problem} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">Întrebări frecvente</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          Răspunsuri organizate pe categorii.
        </p>

        <div className="mt-6 space-y-8">
          {FAQ.map((faq) => (
            <Faq {...faq} key={faq.title} />
          ))}
        </div>
      </section>

      <section className="from-primary/5 mt-16 rounded-xl border bg-linear-to-br to-transparent p-8 text-center">
        <h2 className="text-xl font-bold">Nu ai găsit răspunsul?</h2>
        <p className="text-muted-foreground mt-2 text-sm">
          Scrie-ne pe email la{" "}
          <span className="text-foreground font-medium">
            aquagrow@gmail.com
          </span>{" "}
          sau pe WhatsApp +40 750 752 781. Răspundem în maxim 24h.
        </p>
      </section>
    </div>
  );
}
