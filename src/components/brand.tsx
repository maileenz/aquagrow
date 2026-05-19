import { env } from "@/env";
import { cn } from "@/lib/utils";

const brand = env.NEXT_PUBLIC_BRAND.toLocaleLowerCase();
const first = brand.slice(0, 4);
const last = brand.slice(4);

export function Brand({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "font-comfortaa bg-linear-to-r from-blue-600 to-green-600 bg-clip-text font-bold text-transparent",
        className,
      )}
    >
      {first}
      {last}
    </div>
  );
}
