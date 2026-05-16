import { env } from "@/env";
import { Bug, Droplets, Fish, Leaf, Sun, Thermometer } from "lucide-react";


export const ISSUES = [
    {
        icon: Leaf,
        problem: "Frunze galbene (cloroză)",
        symptoms: [
            "Frunze deschise la culoare, aproape gălbui",
            "Începe de la frunzele bătrâne sau de la vârfuri",
            "Creștere încetinită",
        ],
        causes: [
            "Lipsă de azot — peștii nu produc suficienți nutrienți",
            "Lumină insuficientă (sub 4h pe zi)",
            "pH în afara intervalului 6.5-7.2",
            "Apă prea rece (sub 18°C)",
        ],
        solutions: [
            "Verifică hrănirea peștilor — adaugă 1-2 sesiuni mici suplimentar",
            "Mută acvariul lângă o fereastră luminoasă sau adaugă LED de creștere",
            "Testează pH-ul săptămânal cu picături sau strip-uri",
            "Adaugă chelat de fier (Fe-EDTA) — doar 0.5 ml la 10 L o dată la 2 săptămâni",
        ],
        prevention:
            "Menține un raport de 1 pește la 4-5 plante și hrănește regulat de 2 ori pe zi.",
    },
    {
        icon: Droplets,
        problem: "Rădăcini maro / mucegăite",
        symptoms: [
            "Culoare maronie sau neagră",
            "Miros neplăcut",
            "Rădăcini moi și sfărâmicioase",
        ],
        causes: [
            "Lipsă de oxigen în apă (pompă slabă/oprită)",
            "Apă stagnantă în zona rădăcinilor",
            "Suprapopulare bacteriană (Pythium / putrezire)",
            "Temperatura apei prea ridicată (>26°C)",
        ],
        solutions: [
            "Verifică pompa și curăță-i intrarea de impurități",
            "Adaugă un airstone pentru oxigenare suplimentară",
            "Taie rădăcinile afectate cu o foarfecă sterilizată",
            "Schimbă 30% din apă și clătește mediul de creștere (argilă/perlit)",
        ],
        prevention:
            "Asigură circulație 24/7 și menține temperatura apei între 20-24°C.",
    },
    {
        icon: Sun,
        problem: "Creștere lentă sau stagnare",
        symptoms: [
            "Planta nu mai crește vizibil 1-2 săptămâni",
            "Frunze mici și subțiri",
            "Tulpini alungite și fragile (etiolare)",
        ],
        causes: [
            "Lumină slabă — planta se întinde după sursă",
            "Densitate prea mare a plantelor",
            "Lipsă de potasiu sau fosfor",
            "Temperatură ambientală scăzută (sub 16°C noaptea)",
        ],
        solutions: [
            "Adaugă o lampă LED full-spectrum 15-20W la 20 cm deasupra",
            "Răsădește la 8-12 cm distanță între plante",
            "Suplimentează cu compost lichid acvaponic (1:100)",
            "Mută sistemul într-o cameră cu 18-22°C constant",
        ],
        prevention:
            "Programare lumină 12-14h/zi cu timer; verifică temperatura zilnic.",
    },
    {
        icon: Bug,
        problem: "Dăunători pe plante",
        symptoms: [
            "Mici puncte albe/verzi pe spatele frunzelor (afide)",
            "Pânze fine (acarieni)",
            "Frunze găurite",
        ],
        causes: [
            "Aer uscat și fără ventilație",
            "Plante stresate, vulnerabile",
            "Contaminare de la plante exterioare",
        ],
        solutions: [
            "Spală frunzele cu apă călduță și o picătură de săpun de Marsilia",
            "Folosește săpun potasic horticol (NU insecticide chimice — distrug peștii)",
            "Introdu lăcuste verzi sau buburuze ca prădători naturali",
            "Izolează plantele afectate timp de 7 zile",
        ],
        prevention:
            "Inspectează săptămânal partea inferioară a frunzelor și ține fereastra puțin întredeschisă.",
    },
    {
        icon: Fish,
        problem: "Peștii par stresați",
        symptoms: ["Stau la suprafață și gâfâie", "Culori palide", "Nu mănâncă"],
        causes: [
            "Oxigen insuficient (apă prea caldă sau pompă slabă)",
            "Amoniac ridicat (peste 0.25 ppm)",
            "Schimbare bruscă de temperatură sau pH",
        ],
        solutions: [
            "Pornește airstone-ul imediat și verifică pompa",
            "Testează amoniacul — dacă e ridicat, schimbă 25% din apă",
            "Nu hrăni 24h pentru a reduce încărcătura de azot",
        ],
        prevention: "Testează lunar amoniac/nitriți/nitrați; nu hrăni excesiv.",
    },
    {
        icon: Thermometer,
        problem: "Alge verzi pe pereții acvariului",
        symptoms: [
            "Strat verde pe sticlă",
            "Apă verzuie / tulbure",
            "Miros de iaz",
        ],
        causes: [
            "Lumină directă a soarelui prea multă",
            "Exces de nutrienți (suprahrănire)",
            "Lipsă de plante consumatoare",
        ],
        solutions: [
            "Mută acvariul departe de soare direct — lumină indirectă e suficientă",
            "Reduce hrana cu 30% timp de 2 săptămâni",
            "Adaugă mai multe plante cu creștere rapidă (mentă, salată)",
            "Curăță sticla cu un magnet sau burete acvaristic",
        ],
        prevention:
            "6-8h lumină/zi maxim; nu lăsa hrană necunsumată mai mult de 5 minute.",
    },
] as const;


export const FAQ = [
    {
        title: "Început & instalare",
        items: [
            {
                q: "Cât durează montarea kitului?",
                a: "Aproximativ 20-30 de minute. Suportul se fixează pe marginea acvariului fără găurire, conectezi pompa la priză, adaugi mediul de creștere (argilă expandată sau perlit) și plantezi semințele/răsadurile. Nu necesită cunoștințe tehnice.",
            },
            {
                q: "Pot folosi orice acvariu?",
                a: "Da. Suportul universal se prinde pe acvarii cu margine între 5 și 15 mm grosime și volum minim de 40 L. Pentru acvarii mai mari de 200 L recomandăm 2 unități pentru o aprovizionare echilibrată de nutrienți.",
            },
            {
                q: "Am nevoie de un anumit tip de pește?",
                a: "Funcționează cu majoritatea peștilor de apă dulce: guppy, neon, betta, scalari, pești-aurii, platy. Evită speciile foarte mari (oscar, arowana) care produc deșeuri în cantități greu de procesat de plante.",
            },
            {
                q: "Cât consumă pompa?",
                a: "Pompa standard consumă 3-5W, similar cu o veioză LED. Costul anual estimat: 30-50 lei la curent.",
            },
        ],
    },
    {
        title: "Plante & creștere",
        items: [
            {
                q: "Ce plante sunt potrivite?",
                a: "Salată, roșii cherry, căpșuni, busuioc, mentă. Evitați plantele cu rădăcini extinse (morcovi, cartofi).",
            },
            {
                q: "Cât durează până la recoltă?",
                a: "Salată: 30-40 zile. Mentă/busuioc: 35-50 zile. Rucola: 25-30 zile. Roșii cherry: 60-80 zile până la primele fructe. Căpșuni: 90-120 zile (apoi produc continuu).",
            },
            {
                q: "Pot porni din semințe sau am nevoie de răsaduri?",
                a: "Ambele variante funcționează. Semințele germinează în 3-10 zile în mediu umed. Răsadurile dau recoltă mai rapid (cu 10-14 zile). Kiturile noastre sunt dotate cu semințe.",
            },
            {
                q: "Câte plante încap într-un kit?",
                a: "Kit-ul standard susține un singur tip de plantă.",
            },
            {
                q: "Plantele au nevoie de îngrășământ suplimentar?",
                a: "În mod normal nu — deșeurile peștilor furnizează 90% din nutrienți. Doar dacă apar simptome de deficiență (frunze galbene), adaugă chelat de fier sau compost acvaponic în doze mici.",
            },
        ],
    },
    {
        title: "Întreținere & întrebări tehnice",
        items: [
            {
                q: "Cum întrețin sistemul?",
                a: "Săptămânal: clătește pre-filtrul pompei, verifică nivelul apei, inspectează plantele, schimbă 20% din apă cu apă lăsată la decantat 24h, curăță sticla, testează parametrii (pH, amoniac).",
            },
            {
                q: "Ce parametri ai apei trebuie să verific?",
                a: "pH ideal: 6.5-7.2. Amoniac: <0.25 ppm. Nitriți: <0.5 ppm. Nitrați: 20-80 ppm (bun pentru plante). Temperatură: 20-24°C. Folosește un kit de testare cu picături pentru rezultate exacte.",
            },
            {
                q: "Ce fac dacă plec în vacanță?",
                a: "Pentru 7-10 zile: hrănește peștii înainte cu un bloc de hrană automată, lasă pompa pornită, plantele se descurcă. Pentru perioade mai lungi, cere unui prieten să verifice o dată pe săptămână.",
            },
            {
                q: "Pot folosi apă de la robinet?",
                a: "Da, dar las-o să stea la decantat 24-48h pentru evaporarea clorului. Alternativ, folosește un dechlorinator (1 picătură per litru).",
            },
            {
                q: "Cât de zgomotos este sistemul?",
                a: "Pompele moderne sunt aproape silențioase (sub 25 dB). Se aude doar un bâzâit fin, comparabil cu un frigider.",
            },
        ],
    },
    {
        title: "Comercial & garanție",
        items: [
            {
                q: "Kit-ul include semințe și plante?",
                a: "Da. Pachetul standard include semințe de salată, roșii cherry, căpșuni, busuioc și mentă. Răsadurile se livrează separat (opțional).",
            },
            {
                q: "Ce garanție are produsul?",
                a: "Garanție 24 de luni pentru pompă și componentele electrice, 12 luni pentru suport și carcasă. Returnare gratuită în 14 zile dacă nu ești mulțumit.",
            },
            {
                q: "Livrarea este gratuită?",
                a: "Da, în toată România pentru comenzi peste 250 lei. Termen de livrare: 2-4 zile lucrătoare.",
            },
            {
                q: "Oferiți suport după achiziție?",
                a: `Da. Ai acces la consultanță gratuită prin email și WhatsApp în primele 3 luni, plus acces la comunitatea ${env.NEXT_PUBLIC_BRAND} pentru sfaturi de la alți utilizatori.`,
            },
        ],
    },
];