import { env } from "@/env";
import { cn } from "@/lib/utils";

const brand = env.NEXT_PUBLIC_BRAND.toLocaleLowerCase();
const first = brand.slice(0, 4);
const last = brand.slice(4);

export function Brand({ className }: { className?: string }) {
  return (
    <div className={cn("font-comfortaa font-bold", className)}>
      <span className="text-blue-500">{first}</span>
      {last}
    </div>
  );
}
