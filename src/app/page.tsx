import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CalendarDays,
  HelpCircle,
  Leaf,
  Quote,
  ShoppingBag,
  Sprout,
  Star,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { benefits, plants, steps, testimonials } from "./data";
import { env } from "@/env";

export const metadata: Metadata = {
  description:
    "Kit acvaponic simplu pentru apartament. Crește salată, roșii și căpșuni direct din acvariu, fără chimicale.",
  openGraph: {
    description:
      "Kit acvaponic simplu pentru apartament — fără chimicale, sustenabil.",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://u4d6xf5i5b.ufs.sh/f/6kGNuz9TajAx2nEBAA5V4huUtmMeL5kFKlGp2zjxB3vfZi0b"
            alt="Acvariu cu plante crescute deasupra"
            width={1536}
            height={1024}
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-36">
          <div className="text-primary-foreground max-w-2xl">
            <span className="bg-background/20 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium backdrop-blur">
              <Sprout className="h-3.5 w-3.5" /> Acvaponie pentru apartament
            </span>
            <h1 className="mt-4 text-4xl leading-tight font-bold md:text-6xl">
              Crește plante naturale
              <br />
              direct din acvariul tău
            </h1>
            <p className="text-primary-foreground/90 mt-4 text-lg md:text-xl">
              Salată, roșii cherry și căpșuni — fără fertilizatori chimici, cu
              un kit simplu care se montează în câteva minute.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90"
              >
                <Link href="/magazin">
                  Cumpără kitul <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/40 bg-background/10 text-primary-foreground hover:bg-background/20"
              >
                <Link href="/despre">Vezi cum funcționează</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-border bg-background border-b">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 md:grid-cols-4">
          {[
            { v: "1.500+", l: "Kituri vândute" },
            { v: "5", l: "Plante compatibile" },
            { v: "90%", l: "Mai puțină apă" },
            { v: "12 luni", l: "Garanție" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-primary text-3xl font-bold">{s.v}</p>
              <p className="text-muted-foreground mt-1 text-sm">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            De ce {env.NEXT_PUBLIC_BRAND}?
          </h2>
          <p className="text-muted-foreground mt-3">
            Avantajele unui sistem acvaponic gândit pentru oameni reali.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <Card key={b.title} className="h-full">
              <CardHeader>
                <div className="bg-primary/10 text-primary mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg">
                  <b.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{b.title}</CardTitle>
                <CardDescription>{b.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              3 pași până la prima recoltă
            </h2>
            <p className="text-muted-foreground mt-3">
              Simplu de instalat, ușor de întreținut.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="border-border bg-background relative rounded-xl border p-6"
              >
                <div className="bg-primary text-primary-foreground absolute -top-3 left-6 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                  {s.n}
                </div>
                <s.icon className="text-primary mt-3 h-8 w-8" />
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plants */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Ce poți cultiva</h2>
          <p className="text-muted-foreground mt-3">
            5 plante compatibile cu sistemul, cu ghid pas cu pas pentru fiecare.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {plants.map((p) => (
            <div
              key={p.name}
              className="border-border bg-card hover:shadow-soft rounded-xl border p-6 text-center transition-all hover:-translate-y-1"
            >
              <div className="text-5xl">{p.emoji}</div>
              <h3 className="mt-3 font-semibold">{p.name}</h3>
              <p className="text-muted-foreground mt-1 text-xs">
                Recoltă în ~{p.time}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/calendar">
              Vezi ghidul complet <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Ce spun clienții</h2>
            <div className="text-primary mt-3 flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
              <span className="text-muted-foreground ml-2 text-sm">
                4.9/5 din 320+ recenzii
              </span>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name}>
                <CardContent className="pt-2">
                  <Quote className="text-primary/40 h-6 w-6" />
                  <p className="mt-2 text-sm">{t.text}</p>
                  <div className="mt-4 text-sm">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Tot ce ai nevoie, într-un loc
          </h2>
          <p className="text-muted-foreground mt-3">
            Explorează platforma — de la primul ghiveci până la prima recoltă.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {sections.map((s) => (
            <Link key={s.to} href={s.to} className="group">
              <Card className="hover:shadow-soft flex h-full flex-row items-center p-4 transition-all hover:-translate-y-1">
                <div className="bg-primary/10 text-primary inline-flex h-10 w-10 items-center justify-center rounded-lg">
                  <s.icon className="h-5 w-5" />
                </div>
                <CardHeader className="grow">
                  <CardTitle className="flex items-center justify-between">
                    {s.title}
                  </CardTitle>
                  <CardDescription>{s.desc}</CardDescription>
                </CardHeader>
                <ArrowRight className="text-muted-foreground h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:py-24">
          <h2 className="text-3xl font-bold md:text-4xl">
            Începe-ți mica grădină azi
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
            Peștii hrănesc plantele, plantele curăță apa. Un ciclu natural care
            îți aduce verdețuri proaspete acasă, cu efort minim.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/magazin">Comandă acum</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/ajutor">Întrebări frecvente</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

const sections = [
  {
    to: "/despre",
    icon: Leaf,
    title: "Despre",
    desc: "Cum funcționează acvaponia, simplu explicat.",
  },
  {
    to: "/magazin",
    icon: ShoppingBag,
    title: "Magazin",
    desc: "Kitul complet, gata de montat pe acvariu.",
  },
  {
    to: "/calendar",
    icon: CalendarDays,
    title: "Calendar",
    desc: "Află ce ai de făcut în fiecare zi.",
  },
  {
    to: "/ajutor",
    icon: HelpCircle,
    title: "Ajutor",
    desc: "Soluții la probleme frecvente.",
  },
] as const;
