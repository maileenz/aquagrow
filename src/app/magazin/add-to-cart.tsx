"use client";

import { Button } from "@/components/ui/button";
import { env } from "@/env";
import { useCart } from "@/stores/cart";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const KIT = {
  id: "kit",
  name: `Kit acvaponic ${env.NEXT_PUBLIC_BRAND}`,
  price: Number(env.NEXT_PUBLIC_KIT_PRICE),
};

export function AddToCart() {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    addItem(KIT, qty);
    toast.success(
      `${qty} ${qty === 1 ? "kit adăugat" : "kituri adăugate"} în coș`,
    );
  };

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <div className="border-input flex items-center rounded-md border">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setQty(Math.max(1, qty - 1))}
          disabled={qty <= 1}
          aria-label="Scade"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-12 text-center font-semibold">{qty}</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setQty(qty + 1)}
          aria-label="Crește"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button size="lg" onClick={handleAdd}>
        <ShoppingCart className="mr-1 h-4 w-4" /> Adaugă în coș
      </Button>
    </div>
  );
}
