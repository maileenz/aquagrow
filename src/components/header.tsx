"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Logo } from "./logo";
import { Brand } from "./brand";
import { CartButton } from "./cart-button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-border bg-background/80 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link
          href="/"
          className="text-primary flex items-center gap-2 font-semibold"
        >
          <Logo className="w-7" />
          <Brand className="text-2xl" />
        </Link>
        <nav className="hidden grow items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md px-3 py-2 text-sm transition-colors"
              //activeProps={{
              //  className:
              //    "rounded-md px-3 py-2 text-sm font-medium text-primary bg-muted",
              //}}
              //activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-x-3">
          <CartButton />
          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link href="/magazin">Cumpără kitul</Link>
            </Button>
          </div>
        </div>
        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Meniu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-border border-t md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className="text-foreground py-2 text-sm"
                //activeProps={{
                //  className: "py-2 text-sm font-medium text-primary",
                //}}
                //activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

const navLinks = [
  { to: "/", label: "Acasă" },
  { to: "/despre", label: "Despre" },
  { to: "/magazin", label: "Magazin" },
  { to: "/calendar", label: "Calendar" },
  { to: "/ajutor", label: "Ajutor" },
] as const;
