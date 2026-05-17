import { Droplets, Fish, Leaf, Recycle, Sprout, Sun } from "lucide-react";

export const benefits = [
    { icon: Leaf, title: "100% natural", desc: "Fără pesticide, fără fertilizatori chimici." },
    { icon: Droplets, title: "Economic", desc: "Folosește cu 90% mai puțină apă decât grădina clasică." },
    { icon: Sun, title: "Pentru apartament", desc: "Funcționează lângă o fereastră, fără spațiu suplimentar." },
    { icon: Recycle, title: "Sustenabil", desc: "Ciclu închis: peștii hrănesc plantele, plantele curăță apa." },
];


export const plants = [
    { name: "Salată", time: "30 zile", emoji: "🥬" },
    { name: "Roșii cherry", time: "70 zile", emoji: "🍅" },
    { name: "Căpșuni", time: "90 zile", emoji: "🍓" },
    { name: "Mentă", time: "25 zile", emoji: "🌿" },
    { name: "Busuioc", time: "35 zile", emoji: "🌱" },
];

export const steps = [
    { n: "1", icon: Fish, title: "Montezi suportul", desc: "Se prinde în câteva secunde pe marginea acvariului." },
    { n: "2", icon: Sprout, title: "Plantezi semințele", desc: "Pui semințele în buretele de turbă și aștepți germinarea." },
    { n: "3", icon: Leaf, title: "Recoltezi", desc: "În câteva săptămâni ai prima recoltă proaspătă." },
];

export const testimonials = [
    { name: "Andreea M.", role: "București", text: "Am salată proaspătă de 3 luni, fără efort. Copiii adoră să o recolteze!" },
    { name: "Mihai P.", role: "Cluj", text: "Cel mai simplu sistem acvaponic pe care l-am încercat. Recomand cu drag." },
    { name: "Ioana V.", role: "Iași", text: "Nu am mai cumpărat busuioc din magazin de când am kitul. Aroma e incredibilă." },
];