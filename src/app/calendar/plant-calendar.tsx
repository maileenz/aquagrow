"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  computeStage,
  daysUntilHarvest,
  nextMilestone,
  nextStage,
  plants,
} from "@/lib/plants";
import {
  AlertTriangle,
  Bell,
  CalendarIcon,
  Check,
  CheckCircle2,
  Droplets,
  Eye,
  Flag,
  Salad,
  Sparkles,
  Sun,
  Thermometer,
} from "lucide-react";
import { useMemo } from "react";
import { usePlantCalendar } from "./store";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export function PlantCalendar() {
  const plantId = usePlantCalendar((s) => s.plantId);
  const date = usePlantCalendar((s) => s.date);
  const setDate = usePlantCalendar((s) => s.setDate);
  const setPlantId = usePlantCalendar((s) => s.setPlant);

  const plant = plants.find((p) => p.id === plantId)!;

  const result = useMemo(() => {
    const planted = new Date(date);
    const today = new Date();
    planted.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    const day =
      Math.floor((today.getTime() - planted.getTime()) / 86_400_000) + 1;
    if (day < 1) return { day, future: true } as const;

    const stage = computeStage(plant, day);
    const next = nextStage(plant, day);
    const milestone = nextMilestone(plant, day);
    const toHarvest = daysUntilHarvest(plant, day);
    const stageEnd = stage.to ?? plant.harvestTo;
    const stageSpan = stageEnd - stage.from + 1;
    const stageDayIndex = day - stage.from + 1;
    const stageProgress = Math.min(
      100,
      Math.round((stageDayIndex / stageSpan) * 100),
    );
    const overallProgress = Math.min(
      100,
      Math.round((day / plant.harvestFrom) * 100),
    );
    const harvestDate = new Date(planted);
    harvestDate.setDate(harvestDate.getDate() + plant.harvestFrom - 1);

    return {
      day,
      future: false,
      stage,
      next,
      milestone,
      toHarvest,
      stageProgress,
      overallProgress,
      stageDayIndex,
      stageSpan,
      harvestDate,
      isHarvest: stage.name === "Recoltă",
    } as const;
  }, [plant, date]);

  return (
    <>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Detaliile plantării</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Plantă</Label>
            <Select value={plantId} onValueChange={setPlantId}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {plants.map((p) => (
                  <SelectItem key={p.id} value={p.id}>
                    {p.emoji} {p.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Data plantării</Label>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              max={new Date().toISOString().slice(0, 10)}
            />
          </div>
        </CardContent>
      </Card>

      {result.future ? (
        <Card className="border-accent mt-6">
          <CardContent className="text-muted-foreground pt-6">
            Data este în viitor. Alege o dată din trecut sau de azi.
          </CardContent>
        </Card>
      ) : (
        <div className="mt-6 grid gap-4">
          {/* Status header */}
          <Card>
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <CardTitle>
                  Ziua {result.day} • Etapa: {result.stage.name}
                </CardTitle>
                <span className="text-3xl">{plant.emoji}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              {/* Overall progress to harvest */}
              <div>
                <div className="text-muted-foreground mb-1 flex justify-between text-xs">
                  <span>Progres total până la recoltă</span>
                  <span>{result.overallProgress}%</span>
                </div>
                <Progress value={result.overallProgress} />
              </div>

              {/* Stage progress */}
              <div>
                <div className="text-muted-foreground mb-1 flex justify-between text-xs">
                  <span>
                    Etapa „{result.stage.name}&rdquo; — ziua{" "}
                    {result.stageDayIndex} din {result.stageSpan}
                  </span>
                  <span>{result.stageProgress}%</span>
                </div>
                <Progress value={result.stageProgress} />
              </div>

              {/* Harvest countdown */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="border-border flex items-center gap-3 rounded-lg border p-3">
                  <Salad className="text-primary h-8 w-8" />
                  <div>
                    <p className="text-muted-foreground text-xs">
                      Până la recoltă
                    </p>
                    <p className="font-semibold">
                      {result.isHarvest
                        ? "Recoltează acum!"
                        : result.toHarvest === 0
                          ? "Azi"
                          : `${result.toHarvest} zile`}
                    </p>
                  </div>
                </div>
                <div className="border-border flex items-center gap-3 rounded-lg border p-3">
                  <CalendarIcon className="text-primary h-8 w-8" />
                  <div>
                    <p className="text-muted-foreground text-xs">
                      Data estimată recoltă
                    </p>
                    <p className="font-semibold">
                      {result.harvestDate.toLocaleDateString("ro-RO", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Today's action + tips */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Sparkles className="h-5 w-5" /> Ce ai de făcut azi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="font-medium">{result.stage.action}</p>

              <div>
                <p className="mb-2 text-sm font-semibold">
                  Sfaturi pentru această etapă:
                </p>
                <ul className="space-y-2">
                  {result.stage.tips.map((tip, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground flex items-start gap-2 text-sm"
                    >
                      <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent/30 flex items-start gap-2 rounded-lg p-3 text-sm">
                <Eye className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <p className="font-semibold">La ce să te uiți</p>
                  <p className="text-muted-foreground">{result.stage.watch}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conditions reminder */}
          <Card>
            <CardHeader>
              <CardTitle>Condiții ideale acum</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-3">
              <Cond icon={Sun} label="Lumină" value={plant.light} />
              <Cond icon={Droplets} label="Apă" value={plant.water} />
              <Cond icon={Thermometer} label="Temperatură" value={plant.temp} />
            </CardContent>
          </Card>

          {/* Next milestone & next stage */}
          <div className="grid gap-4 md:grid-cols-2">
            {result.milestone && result.milestone.day >= result.day && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Flag className="text-primary h-4 w-4" /> Următorul
                    milestone
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="font-semibold">
                    {result.milestone.title}
                    <span className="text-muted-foreground ml-2">
                      (în {Math.max(0, result.milestone.day - result.day)} zile)
                    </span>
                  </p>
                  <p className="text-muted-foreground mt-1">
                    {result.milestone.description}
                  </p>
                </CardContent>
              </Card>
            )}

            {result.next && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Bell className="text-primary h-4 w-4" /> Urmează etapa:{" "}
                    {result.next.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="text-muted-foreground">
                    Începe din ziua{" "}
                    <span className="text-foreground font-semibold">
                      {result.next.from}
                    </span>{" "}
                    (în {Math.max(0, result.next.from - result.day)} zile).
                  </p>
                  <p className="mt-1">{result.next.action}</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Full timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Cronologia completă</CardTitle>
            </CardHeader>
            <CardContent className="pl-5">
              <ol className="border-border relative space-y-4 border-l-2 pl-5">
                {plant.stages.map((s) => {
                  const isCurrent = s.name === result.stage.name;
                  const isPast = result.day > (s.to ?? Infinity);
                  return (
                    <li key={s.name} className="relative">
                      <span
                        className={`absolute left-[-33px] flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                          isCurrent
                            ? "border-primary bg-primary text-primary-foreground"
                            : isPast
                              ? "border-primary bg-primary text-white"
                              : "border-border bg-background text-muted-foreground"
                        }`}
                      >
                        {isPast ? (
                          <Check className="h-3.5 w-3.5" />
                        ) : (
                          <span className="text-xs">●</span>
                        )}
                      </span>
                      <p
                        className={`font-semibold ${isCurrent ? "text-primary" : ""}`}
                      >
                        {s.name}{" "}
                        <span className="text-muted-foreground text-xs font-normal">
                          (ziua {s.from}
                          {s.to ? `–${s.to}` : "+"})
                        </span>
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {s.action}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </CardContent>
          </Card>

          {/* Harvest info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Salad className="text-primary h-5 w-5" /> Estimare recoltă
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <p className="text-muted-foreground">Fereastră de recoltare</p>
                <p className="font-semibold">
                  Ziua {plant.harvestFrom} – {plant.harvestTo}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Producție așteptată</p>
                <p className="font-semibold">{plant.yield}</p>
              </div>
            </CardContent>
          </Card>

          {/* Slow growth warning */}
          {result.day > plant.harvestFrom + 7 && !result.isHarvest && (
            <Card className="border-destructive/40 bg-destructive/5">
              <CardContent className="flex items-start gap-2 pt-6 text-sm">
                <AlertTriangle className="text-destructive mt-0.5 h-4 w-4" />
                <p>
                  Ar fi trebuit deja să fii în etapa de recoltă. Verifică
                  lumina, temperatura apei și pompa. Consultă pagina{" "}
                  <span className="font-semibold">Ajutor</span> pentru
                  diagnosticare.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </>
  );
}

function Cond({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Sun;
  label: string;
  value: string;
}) {
  return (
    <div className="border-border rounded-lg border p-3">
      <div className="text-primary flex items-center gap-2">
        <Icon className="h-4 w-4" />
        <span className="text-sm font-semibold">{label}</span>
      </div>
      <p className="text-muted-foreground mt-1 text-xs">{value}</p>
    </div>
  );
}
