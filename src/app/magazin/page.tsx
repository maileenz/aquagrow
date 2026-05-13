"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { env } from "@/env";
import { Check, Truck, ShieldCheck, Home as HomeIcon } from "lucide-react";
import { toast } from "sonner";

export default function Magazin() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="bg-muted/50 rounded-2xl p-6">
          <img
            src="/images/kit-product.jpg"
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
          <p className="text-primary mt-2 text-3xl font-bold">199 lei</p>
          <p className="text-muted-foreground mt-4">
            Tot ce ai nevoie pentru a transforma acvariul tău într-o mică
            grădină. Se montează în câteva minute, fără unelte.
          </p>

          <div className="mt-6 space-y-2">
            <h3 className="font-semibold">Conținutul kitului</h3>
            <ul className="text-foreground space-y-1 text-sm">
              <li className="flex gap-2">
                <Check className="text-primary h-4 w-4" /> Suport de prindere
                universal
              </li>
              <li className="flex gap-2">
                <Check className="text-primary h-4 w-4" /> Ghiveci mic cu turbă
                (germinare)
              </li>
              <li className="flex gap-2">
                <Check className="text-primary h-4 w-4" /> Ghiveci mare cu
                argilă expandată
              </li>
              <li className="flex gap-2">
                <Check className="text-primary h-4 w-4" /> Ghid de utilizare
              </li>
            </ul>
          </div>

          <Button
            size="lg"
            className="mt-8 w-full sm:w-auto"
            onClick={() =>
              toast.success(
                "Comanda a fost înregistrată! Te contactăm în curând.",
              )
            }
          >
            Comandă acum
          </Button>

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
              d: "Pune semințele în ghiveciul cu turbă.",
            },
            {
              n: "3",
              t: "Recoltează",
              d: "Mută în argilă și bucură-te de plante proaspete.",
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

function Info({ icon: Icon, title }: { icon: any; title: string }) {
  return (
    <div className="border-border flex items-center gap-2 rounded-lg border p-3 text-sm">
      <Icon className="text-primary h-4 w-4" /> {title}
    </div>
  );
}
