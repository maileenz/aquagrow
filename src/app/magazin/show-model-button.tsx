"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { lazy, Suspense } from "react";

const KitPreview = lazy(() => import("@/components/scenes/kit"));

export function ShowModelButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="absolute top-2 right-2"
          size="icon"
          variant="outline"
        >
          <Eye className="size-5!" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-muted aspect-square w-full sm:max-w-4xl">
        <DialogTitle className="hidden">Kit acvaponic 3d</DialogTitle>
        <Suspense>
          <KitPreview />
        </Suspense>
      </DialogContent>
    </Dialog>
  );
}
