import { env } from "@/env";
import { Droplets, Fish, Globe, Heart, Leaf, Lightbulb, Recycle, Sprout, Target, Users } from "lucide-react";

export const cycle = [
    { icon: Fish, title: "1. Peștii", desc: "Hrăniți zilnic, peștii elibereaza deșeuri organice (amoniac) în apa acvariului." },
    { icon: Recycle, title: "2. Bacteriile", desc: "Bacteriile nitrificatoare transformă amoniacul în nitriți, apoi în nitrați — nutrienți pentru plante." },
    { icon: Sprout, title: "3. Plantele", desc: "Rădăcinile absorb nitrații, planta se dezvoltă, curățând apa care se întoarce limpede în acvariu." },
];
export const components = [
    { icon: Leaf, title: "Suport plante", desc: "Construit din material rezistent la apă, se fixează ușor pe marginea acvariului." },
    { icon: Sprout, title: "Substrat dublu", desc: "Burete de turbă pentru germinare, argilă expandată pentru dezvoltare și recoltă." },
];
export const advantages = [
    { icon: Leaf, title: "Fără chimicale", desc: "Plante 100% naturale, sigure pentru copii și animale." },
    { icon: Droplets, title: "−90% consum apă", desc: "Apa recirculă în sistem închis, nu se pierde prin evaporare în sol." },
    { icon: Recycle, title: "Sistem sustenabil", desc: "Niciun deșeu — totul devine nutrient pentru ciclul următor." },
    { icon: Heart, title: "Bun pentru pești", desc: "Apa filtrată natural reduce frecvența schimburilor de apă." },
    { icon: Globe, title: "Impact redus", desc: "Reduce amprenta de carbon a alimentelor pe care le consumi." },
    { icon: Lightbulb, title: "Educativ", desc: "Învață copiii despre ecosisteme, biologie și agricultură." },
];
export const values = [
    { icon: Target, title: "Misiune", desc: "Aducem agricultura naturală în fiecare locatie din România." },
    { icon: Users, title: "Comunitate", desc: `Peste 100 de oameni cresc deja plante cu ${env.NEXT_PUBLIC_BRAND}.` },
    { icon: Lightbulb, title: "Educație", desc: "Ghiduri detaliate, calendare și suport pentru fiecare client." },
];
export const faqs = [
    { q: "Acvaponia e potrivită pentru începători?", a: `Da. Sistemul ${env.NEXT_PUBLIC_BRAND} a fost gândit special pentru oameni fără experiență. Ai nevoie doar de un acvariu cu pești și kitul nostru.` },
    { q: "Trebuie să cumpăr fertilizator?", a: "Nu. Peștii și bacteriile produc toți nutrienții necesari plantelor. Adăugarea de fertilizatori chimici poate dăuna peștilor." },
    { q: "Câtă lumină au nevoie plantele?", a: "Majoritatea plantelor au nevoie de 4-8 ore de lumină pe zi. O fereastră bine iluminată sau o lampă LED de creștere sunt suficiente." },
    { q: "Funcționează cu orice tip de pește?", a: "Da, cu cei mai mulți. Recomandăm pești de apă dulce comuni: guppy, neon, betta, scalari, cichlide mici." },
];