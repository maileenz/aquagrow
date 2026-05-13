import type { FAQ } from "./data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq(props: (typeof FAQ)[number]) {
  const { items, title } = props;
  return (
    <div>
      <h3 className="text-primary mb-2 text-lg font-semibold">{title}</h3>
      <Accordion
        type="single"
        collapsible
        className="bg-card rounded-lg border px-4"
      >
        {items.map(({ a, q }, i) => (
          <AccordionItem
            key={i}
            value={`${title}-${i}`}
            className="border-b last:border-0"
          >
            <AccordionTrigger className="text-left">{q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
