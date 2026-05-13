import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sharedOG } from "@/lib/metadata";
import { ArrowRight, Leaf } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { advantages, components, cycle, faqs, values } from "./data";
import { env } from "@/env";

export const metadata: Metadata = {
  title: "Despre acvaponie",

  description:
    "Acvaponia combină creșterea peștilor cu cultivarea plantelor — un sistem natural, fără chimicale.",

  openGraph: sharedOG({
    title: "Despre acvaponie",
    description: "Cum funcționează acvaponia, componente și avantaje.",
    type: "website",
  }),
};

export default function DesprePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://u4d6xf5i5b.ufs.sh/f/6kGNuz9TajAx2nEBAA5V4huUtmMeL5kFKlGp2zjxB3vfZi0b"
            alt="Sistem acvaponic"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />
        </div>
        <div className="text-primary-foreground relative mx-auto max-w-5xl px-4 py-24 text-center">
          <span className="bg-background/20 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium backdrop-blur">
            <Leaf className="h-3.5 w-3.5" /> Despre noi
          </span>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Despre sistemele acvaponice
          </h1>
          <p className="text-primary-foreground/90 mx-auto mt-4 max-w-2xl text-lg">
            Acvaponia combină creșterea peștilor cu cultivarea plantelor într-un
            ciclu natural, închis și sustenabil — disponibil acum în orice
            apartament.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-16">
        {/* Story */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold">Povestea noastră</h2>
            <p className="text-muted-foreground mt-4">
              {env.NEXT_PUBLIC_BRAND} s-a născut dintr-o întrebare simplă:{" "}
              <em>
                de ce nu putem avea legume proaspete în apartament, fără sol și
                fără chimicale?
              </em>
            </p>
            <p className="text-muted-foreground mt-3">
              După doi ani de cercetare și sute de teste cu pasionați de
              acvaristică, am creat un kit acvaponic accesibil oricui — care
              folosește apa pe care deja o ai în acvariu pentru a hrăni plantele
              tale preferate.
            </p>
            <p className="text-muted-foreground mt-3">
              Astăzi, peste 1.500 de familii din România cresc salată, roșii,
              căpșuni, mentă și busuioc cu sistemul {env.NEXT_PUBLIC_BRAND}.
            </p>
          </div>
          <div className="bg-muted/50 rounded-2xl p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { v: "2022", l: "Anul fondării" },
                { v: "1.500+", l: `Familii ${env.NEXT_PUBLIC_BRAND}` },
                { v: "5", l: "Plante suportate" },
                { v: "90%", l: "Mai puțină apă" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="border-border bg-background rounded-xl border p-4 text-center"
                >
                  <p className="text-primary text-2xl font-bold">{s.v}</p>
                  <p className="text-muted-foreground text-xs">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cycle */}
        <section className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Cum funcționează ciclul</h2>
            <p className="text-muted-foreground mx-auto mt-3 max-w-2xl">
              Trei elemente lucrează împreună într-un ecosistem perfect
              echilibrat.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {cycle.map((c) => (
              <Card key={c.title} className="h-full">
                <CardHeader>
                  <div className="bg-primary/10 text-primary mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{c.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  {c.desc}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Components */}
        <section className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Componentele kitului</h2>
            <p className="text-muted-foreground mx-auto mt-3 max-w-2xl">
              Fiecare piesă a fost gândită pentru durabilitate și siguranța
              peștilor.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {components.map((c) => (
              <Card key={c.title}>
                <CardHeader>
                  <div className="bg-accent text-accent-foreground mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{c.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  {c.desc}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Advantages */}
        <section className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Avantajele acvaponiei</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="border-border bg-card rounded-xl border p-6"
              >
                <div className="bg-primary/10 text-primary mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{a.title}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="bg-muted/50 mt-20 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Ce ne ghidează</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="bg-primary text-primary-foreground mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">{v.title}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Întrebări frecvente</h2>
          </div>
          <Accordion
            type="single"
            collapsible
            className="mx-auto mt-8 max-w-3xl"
          >
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-6 text-center">
            <Button asChild variant="outline">
              <Link href="/ajutor">
                Vezi toate întrebările <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground mt-20 rounded-2xl px-8 py-12 text-center">
          <h2 className="text-3xl font-bold">Gata să începi?</h2>
          <p className="text-primary-foreground/90 mx-auto mt-3 max-w-2xl">
            Comandă kitul {env.NEXT_PUBLIC_BRAND} și transformă-ți acvariul
            într-o mică grădină în mai puțin de 10 minute.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-background text-primary hover:bg-background/90 mt-6"
          >
            <Link href="/magazin">
              Cumpără kitul <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </section>
      </div>
    </>
  );
}
