import { env } from "@/env";
import { cn } from "@/lib/utils";

export function Brand({ className }: { className?: string }) {
  return (
    <div className={cn("font-comfortaa font-bold", className)}>
      {env.NEXT_PUBLIC_BRAND.toLowerCase()}
    </div>
  );
}
