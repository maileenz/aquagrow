"use client";

import { useCart } from "@/stores/cart";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export function CartButton({ onClick }: { onClick?: () => void }) {
  const { count } = useCart();
  return (
    <Link
      href="/cosul-meu"
      onClick={onClick}
      className="text-foreground hover:bg-muted relative inline-flex h-9 w-9 items-center justify-center rounded-md"
      aria-label="Coșul meu"
    >
      <ShoppingCart className="h-5 w-5" />
      {count > 0 && (
        <span className="bg-primary text-primary-foreground absolute -top-1 -right-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold">
          {count}
        </span>
      )}
    </Link>
  );
}
