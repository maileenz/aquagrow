import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Fish, Leaf, Recycle, Sprout, Waves } from "lucide-react";

export default function DesprePage() {
  const cycle = [
    {
      icon: Fish,
      title: "Pești",
      desc: "Produc deșeuri organice în apa acvariului.",
    },
    {
      icon: Recycle,
      title: "Bacterii",
      desc: "Transformă deșeurile în nutrienți utili.",
    },
    {
      icon: Sprout,
      title: "Plante",
      desc: "Absorb nutrienții și curăță apa în mod natural.",
    },
  ];
  const components = [
    {
      icon: Waves,
      title: "Acvariu",
      desc: "Sursa nutrienților pentru plante.",
    },
    {
      icon: Droplets,
      title: "Pompă",
      desc: "Circulă apa între acvariu și ghivece.",
    },
    {
      icon: Leaf,
      title: "Suport plante",
      desc: "Se fixează ușor pe marginea acvariului.",
    },
    {
      icon: Sprout,
      title: "Substrat",
      desc: "Turbă pentru germinare, argilă pentru dezvoltare.",
    },
  ];
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          Despre sistemele acvaponice
        </h1>
        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
          Acvaponia este un sistem care combină creșterea peștilor cu cultivarea
          plantelor într-un ciclu natural, închis și sustenabil.
        </p>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">Cum funcționează</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {cycle.map((c) => (
            <Card key={c.title}>
              <CardHeader>
                <div className="bg-primary/10 text-primary mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg">
                  <c.icon className="h-5 w-5" />
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

      <section className="mt-16">
        <h2 className="text-2xl font-bold">Componentele kitului</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="bg-muted/50 mt-16 rounded-2xl p-8">
        <h2 className="text-2xl font-bold">Avantaje</h2>
        <ul className="text-foreground mt-4 grid gap-3 sm:grid-cols-3">
          <li className="flex items-start gap-2">
            <Leaf className="text-primary mt-0.5 h-5 w-5" /> Fără fertilizatori
            chimici
          </li>
          <li className="flex items-start gap-2">
            <Droplets className="text-primary mt-0.5 h-5 w-5" /> Consum redus de
            apă
          </li>
          <li className="flex items-start gap-2">
            <Recycle className="text-primary mt-0.5 h-5 w-5" /> Sistem natural,
            sustenabil
          </li>
        </ul>
      </section>
    </div>
  );
}
