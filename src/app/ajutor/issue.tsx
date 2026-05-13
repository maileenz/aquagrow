import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ISSUES } from "./data";

export function Issue(props: (typeof ISSUES)[number]) {
  const {
    causes,
    icon: Icon,
    prevention,
    problem,
    solutions,
    symptoms,
  } = props;
  return (
    <div className="min-h-0 break-inside-avoid">
      <Card className="gap-0 overflow-hidden pt-0">
        <CardHeader className="bg-muted/40">
          <CardTitle className="flex h-14 items-center gap-2 text-lg">
            <Icon className="text-primary h-5 w-5" />
            {problem}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-5 text-sm">
          <div>
            <p className="text-muted-foreground mb-1 text-xs font-semibold tracking-wide uppercase">
              Simptome
            </p>
            <ul className="text-foreground/90 ml-4 list-disc space-y-1">
              {symptoms.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-muted-foreground mb-1 text-xs font-semibold tracking-wide uppercase">
              Cauze posibile
            </p>
            <ul className="text-muted-foreground ml-4 list-disc space-y-1">
              {causes.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-primary mb-1 text-xs font-semibold tracking-wide uppercase">
              Soluții pas cu pas
            </p>
            <ol className="text-foreground/90 ml-4 list-decimal space-y-1">
              {solutions.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
          <div className="border-primary/20 bg-primary/5 rounded-md border p-3">
            <p className="text-primary text-xs font-semibold">Prevenire</p>
            <p className="text-muted-foreground mt-1">{prevention}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
