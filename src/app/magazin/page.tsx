import { Card, CardContent } from "@/components/ui/card";
import { env } from "@/env";
import { Check, Truck, ShieldCheck, Home as HomeIcon } from "lucide-react";
import type { Metadata } from "next";
import { AddToCart } from "./add-to-cart";

export const metadata: Metadata = {
  title: "Kit acvaponic",

  description:
    "Comandă kitul acvaponic: suport, ghiveci de turbă și ghiveci de argilă. Ușor de instalat pe orice acvariu.",

  openGraph: {
    title: `Magazin — Kit acvaponic ${env.NEXT_PUBLIC_BRAND}`,

    description:
      "Kit complet, gata de montat. Livrare rapidă, garanție 12 luni.",

    images: [
      {
        url: "https://u4d6xf5i5b.ufs.sh/f/6kGNuz9TajAxGizr9StE9f1MbKPkjgwFNnTzopSUue5JQ3GW",
        width: 1024,
        height: 1024,
        alt: `Kit acvaponic ${env.NEXT_PUBLIC_BRAND} montat pe acvariu`,
      },
    ],
    type: "website",
  },
};

export default function Magazin() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="bg-muted/50 rounded-2xl p-6">
          <img
            src="https://u4d6xf5i5b.ufs.sh/f/6kGNuz9TajAxGizr9StE9f1MbKPkjgwFNnTzopSUue5JQ3GW"
            alt={`Kit acvaponic ${env.NEXT_PUBLIC_BRAND}`}
            width={1024}
            height={1024}
            loading="eager"
            className="mx-auto h-auto w-full max-w-md rounded-xl object-cover"
          />
        </div>
        <div>
          <span className="text-primary text-sm font-medium">
            Kit {env.NEXT_PUBLIC_BRAND}
          </span>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Kit acvaponic complet
          </h1>
          <p className="text-primary mt-2 text-3xl font-bold">
            {env.NEXT_PUBLIC_KIT_PRICE} lei
          </p>
          <p className="text-muted-foreground mt-4">
            Tot ce ai nevoie pentru a transforma acvariul tău într-o mică
            grădină. Se montează în câteva minute, fără unelte.
          </p>

          <div className="mt-6 space-y-2">
            <h3 className="font-semibold">Conținutul kitului</h3>
            <ol className="space-y-1">
              <li>
                1. Suport de prindere universal format din:
                <ul className="text-foreground space-y-1 text-sm">
                  <li className="flex gap-2">
                    <Check className="text-primary h-4 w-4" /> Ghiveci mic cu
                    burete de turbă
                  </li>
                  <li className="flex gap-2">
                    <Check className="text-primary h-4 w-4" /> Ghiveci mare cu
                    argică expandată
                  </li>
                </ul>
              </li>
              <li>2. Semințe pentru plante</li>
              <li>3. Cameră pentru monitorizare de la distanță</li>
            </ol>
          </div>

          <AddToCart />

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Info icon={Truck} title="Livrare 2-4 zile" />
            <Info icon={ShieldCheck} title="Garanție 12 luni" />
            <Info icon={HomeIcon} title="Ideal pentru apartament" />
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">Cum se utilizează</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              n: "1",
              t: "Montează",
              d: "Fixează suportul pe marginea acvariului.",
            },
            {
              n: "2",
              t: "Plantează",
              d: "Pune semințele în ghiveciul mic, în buretele de turbă.",
            },
            {
              n: "3",
              t: "Recoltează",
              d: "Mută răsadul în cosulețul mare, plantează rădăcina adânc în argila expandată și bucură-te de plante proaspete.",
            },
          ].map((s) => (
            <Card key={s.n}>
              <CardContent className="pt-6">
                <div className="bg-primary text-primary-foreground mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full font-bold">
                  {s.n}
                </div>
                <h3 className="font-semibold">{s.t}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{s.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

function Info({ icon: Icon, title }: { icon: typeof Check; title: string }) {
  return (
    <div className="border-border flex items-center gap-2 rounded-lg border p-3 text-sm">
      <Icon className="text-primary h-4 w-4" /> {title}
    </div>
  );
}
