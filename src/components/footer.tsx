import { env } from "@/env";
import { getCurrentYear } from "@/lib/utils";
import { Logo } from "./logo";
import { Brand } from "./brand";

export function Footer() {
  return (
    <footer className="border-border bg-muted/40 border-t">
      <div className="text-muted-foreground mx-auto max-w-6xl px-4 py-8 text-sm">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="text-primary flex items-center gap-2">
            <Logo className="h-6 w-6" />
            <Brand className="text-lg" />
          </div>
          <p>
            © {getCurrentYear()} {env.NEXT_PUBLIC_BRAND}. Plante naturale din
            acvariul tău.
          </p>
        </div>
      </div>
    </footer>
  );
}
