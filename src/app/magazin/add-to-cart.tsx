"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function AddToCart() {
  return (
    <Button
      size="lg"
      className="mt-8 w-full sm:w-auto"
      onClick={() =>
        toast.success("Comanda a fost înregistrată! Te contactăm în curând.")
      }
    >
      Comandă acum
    </Button>
  );
}
