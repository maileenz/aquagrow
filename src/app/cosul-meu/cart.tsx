"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { env } from "@/env";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/stores/cart";
import {
  CheckCircle2,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Trash2,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const SHIPPING = 19;
const FREE_SHIPPING_THRESHOLD = 300;

export function Cart() {
  const { items, updateQty, removeItem, total, clear, count } = useCart();
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState({
    nume: "",
    email: "",
    telefon: "",
    adresa: "",
    oras: "",
    cod: "",
  });

  const shipping =
    total >= FREE_SHIPPING_THRESHOLD || total === 0 ? 0 : SHIPPING;
  const grand = total + shipping;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nume || !form.email || !form.telefon || !form.adresa) {
      toast.error("Completează toate câmpurile obligatorii.");
      return;
    }
    setPlaced(true);
    clear();
    toast.success("Comanda a fost plasată!");
  };

  if (placed) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <CheckCircle2 className="text-primary mx-auto h-16 w-16" />
        <h1 className="mt-6 text-3xl font-bold">Mulțumim pentru comandă!</h1>
        <p className="text-muted-foreground mt-3">
          Ți-am trimis un email de confirmare. Te contactăm în maxim 24 de ore
          pentru livrare.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Înapoi acasă</Link>
        </Button>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <ShoppingBag className="text-muted-foreground mx-auto h-16 w-16" />
        <h1 className="mt-6 text-3xl font-bold">Coșul tău este gol</h1>
        <p className="text-muted-foreground mt-3">
          Adaugă kitul {env.NEXT_PUBLIC_BRAND} și începe-ți mica grădină.
        </p>
        <Button asChild className="mt-8">
          <Link href="/magazin">Vezi magazinul</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold md:text-4xl">Coșul meu</h1>
      <p className="text-muted-foreground mt-2">
        {count} {count === 1 ? "produs" : "produse"} în coș
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-semibold">
                    {item.name} {item.id}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.price} lei / buc
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="border-input flex items-center rounded-md border">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => updateQty(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => updateQty(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="w-20 text-right font-semibold">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                    aria-label="Elimină"
                  >
                    <Trash2 className="text-destructive h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeader>
              <CardTitle>Date de livrare</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                id="checkout-form"
                onSubmit={submit}
                className="grid gap-4 sm:grid-cols-2"
              >
                <Field
                  label="Nume complet *"
                  value={form.nume}
                  onChange={(v) => setForm({ ...form, nume: v })}
                />
                <Field
                  label="Email *"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />
                <Field
                  label="Telefon *"
                  value={form.telefon}
                  onChange={(v) => setForm({ ...form, telefon: v })}
                />
                <Field
                  label="Oraș"
                  value={form.oras}
                  onChange={(v) => setForm({ ...form, oras: v })}
                />
                <div className="sm:col-span-2">
                  <Field
                    label="Adresă *"
                    value={form.adresa}
                    onChange={(v) => setForm({ ...form, adresa: v })}
                  />
                </div>
                <Field
                  label="Cod poștal"
                  value={form.cod}
                  onChange={(v) => setForm({ ...form, cod: v })}
                />
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>Sumar comandă</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Row label="Subtotal" value={formatPrice(total)} />
              <Row
                label="Livrare"
                value={shipping === 0 ? "Gratuită" : `${shipping} lei`}
              />
              {total < FREE_SHIPPING_THRESHOLD && (
                <p className="text-muted-foreground text-xs">
                  Mai adaugă {Math.floor(FREE_SHIPPING_THRESHOLD - total)} lei
                  pentru livrare gratuită.
                </p>
              )}
              <Row label="Total" value={formatPrice(grand)} bold />
              <Button
                form="checkout-form"
                type="submit"
                size="lg"
                className="w-full"
              >
                Plasează comanda
              </Button>
              <div className="text-muted-foreground space-y-2 pt-2 text-sm">
                <p className="flex items-center gap-2">
                  <Truck className="text-primary h-4 w-4" /> Livrare în 2-4 zile
                  lucrătoare
                </p>
                <p className="flex items-center gap-2">
                  <ShieldCheck className="text-primary h-4 w-4" /> Garanție 12
                  luni
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div className="grid gap-1.5">
      <Label>{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function Row({
  label,
  value,
  bold,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div
      className={`flex justify-between ${bold ? "text-lg font-bold" : "text-sm"}`}
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
