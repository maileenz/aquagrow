import { sharedOG } from "@/lib/metadata";
import type { Metadata } from "next";
import { Cart } from "./cart";
import { env } from "@/env";

export const metadata: Metadata = {
  title: "Coșul meu",

  description: `Vezi produsele din coș și finalizează comanda kitului acvaponic ${env.NEXT_PUBLIC_BRAND}.`,

  openGraph: sharedOG({
    title: "Coșul meu",
    description: "Finalizează comanda pentru kitul tău acvaponic.",
  }),

  robots: {
    index: false,
    follow: false,
  },
};

export default function CartPage() {
  return <Cart />;
}
