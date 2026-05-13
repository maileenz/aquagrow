import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CalendarDays,
  HelpCircle,
  Leaf,
  ShoppingBag,
  Sprout,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-aquaponic.jpg"
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

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Tot ce ai nevoie, într-un loc
          </h2>
          <p className="text-muted-foreground mt-3">
            Explorează platforma — de la primul ghiveci până la prima recoltă.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link key={s.to} href={s.to} className="group">
              <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                <CardHeader>
                  <div className="bg-primary/10 text-primary mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="flex items-center justify-between">
                    {s.title}
                    <ArrowRight className="text-muted-foreground h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </CardTitle>
                  <CardDescription>{s.desc}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold">Natural. Simplu. Sustenabil.</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
            Peștii hrănesc plantele, plantele curăță apa. Un ciclu natural care
            îți aduce verdețuri proaspete acasă, cu efort minim.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/magazin">Comandă acum</Link>
          </Button>
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
