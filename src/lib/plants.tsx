export type PlantId = "salata" | "rosii" | "capsuni" | "menta" | "busuioc";

export type StageName =
  | "Germinare"
  | "Răsad"
  | "Dezvoltare"
  | "Înflorire"
  | "Recoltă";

export interface Milestone {
  day: number;
  title: string;
  description: string;
}

export type Plant = (typeof plants)[number];
export type Stage = Plant["stages"][number];
export const plants = [
  {
    id: "salata",
    name: "Salată",
    emoji: "🥬",
    light: "Lumină naturală indirectă, 8-10h/zi",
    water: "Apă curată din acvariu, oxigenată",
    temp: "18-22°C constant",
    healthy: "Frunze verzi, ferme, creștere vizibilă săptămânal",
    problems: "Frunze galbene → lumină slabă; stagnare → verifică pompa",
    transplant: "Mută în argilă când apar 4-5 frunzulițe (ziua ~7)",
    harvestFrom: 30,
    harvestTo: 55,
    yield: "5-8 frunze/săptămână per plantă",
    stages: [
      {
        name: "Germinare",
        from: 1,
        to: 5,
        action: "Menține turba umedă, ține la lumină indirectă.",
        tips: [
          "Stropește turba zilnic cu pulverizator fin",
          "Acoperă cu folie transparentă primele 3 zile",
          "Temperatura ideală: 18-20°C",
        ],
        watch: "Așteaptă să apară primele 2 frunzulițe (cotiledoane).",
      },
      {
        name: "Răsad",
        from: 6,
        to: 12,
        action: "Verifică rădăcinile. Pregătește mutarea în argilă.",
        tips: [
          "Crește treptat expunerea la lumină",
          "Verifică zilnic dacă rădăcinile au ieșit prin turbă",
          "Mută în argilă când are 4-5 frunzulițe",
        ],
        watch: "Rădăcini albe, sănătoase, lungi de 2-3 cm.",
      },
      {
        name: "Dezvoltare",
        from: 13,
        to: 29,
        action: "Lasă planta să crească viguros. Verifică oxigenarea apei.",
        tips: [
          "Asigură-te că pompa funcționează 24/7",
          "Curăță săptămânal argila de depuneri",
          "Îndepărtează frunzele bolnave imediat",
        ],
        watch: "Rozeta de frunze ar trebui să aibă 8-12 cm diametru.",
      },
      {
        name: "Recoltă",
        from: 30,
        to: null,
        action:
          "Recoltează frunzele exterioare — cele din centru continuă să crească.",
        tips: [
          "Taie frunzele dimineața, când sunt cele mai crocante",
          "Folosește foarfecă curată, nu rupe cu mâna",
          "Recoltează 2-3 frunze odată, lasă minim 4 pe plantă",
        ],
        watch:
          "Poți recolta continuu 3-4 săptămâni înainte ca planta să-și piardă din vigoare.",
      },
    ],
    milestones: [
      {
        day: 3,
        title: "Primele răsărituri",
        description: "Cotiledoanele (primele 2 frunzulițe) ar trebui să apară.",
      },
      {
        day: 7,
        title: "Transplantare",
        description: "Mută din turbă în argilă expandată.",
      },
      {
        day: 14,
        title: "Rozetă formată",
        description: "Planta are 6-8 frunze adevărate.",
      },
      {
        day: 30,
        title: "Prima recoltă",
        description: "Recoltează frunzele exterioare.",
      },
    ],
  },
  {
    id: "rosii",
    name: "Roșii cherry",
    emoji: "🍅",
    light: "Lumină directă 6-8h/zi",
    water: "Apă oxigenată constant, fără variații",
    temp: "20-26°C",
    healthy: "Tulpină groasă, frunze verde închis",
    problems: "Frunze galbene → exces de apă; pete → lumină insuficientă",
    transplant: "Transplantează în argilă în jurul zilei 14",
    harvestFrom: 70,
    harvestTo: 120,
    yield: "20-40 roșii cherry per plantă, recoltare săptămânală",
    stages: [
      {
        name: "Germinare",
        from: 1,
        to: 7,
        action: "Ține semințele la cald, turba ușor umedă.",
        tips: [
          "Temperatura ideală: 22-25°C",
          "Pune semințele la 0.5 cm adâncime",
          "Acoperă cu folie până apar primele frunzulițe",
        ],
        watch: "Răsărire în 5-8 zile.",
      },
      {
        name: "Răsad",
        from: 8,
        to: 20,
        action: "Mută în argilă, asigură suport pentru tulpină.",
        tips: [
          "Pune un bețișor de bambus ca suport",
          "Asigură 6+ ore de lumină directă",
          "Verifică temperatura apei (min. 18°C)",
        ],
        watch: "Tulpina trebuie să fie dreaptă, nu lungă și subțire.",
      },
      {
        name: "Dezvoltare",
        from: 21,
        to: 44,
        action: "Stimulează ramificarea, copilește lăstarii laterali.",
        tips: [
          "Îndepărtează lăstarii care apar la baza frunzelor",
          "Leagă tulpina principală de suport",
          "Verifică zilnic semnele de stres hidric",
        ],
        watch: "Plantă bogată, cu 5-7 ramuri principale.",
      },
      {
        name: "Înflorire",
        from: 45,
        to: 69,
        action:
          "Polenizează manual florile cu un pensulă fină sau scuturând ușor planta.",
        tips: [
          "Polenizează între ora 10-14, când florile sunt deschise",
          "Scutură ușor planta zilnic pentru polenizare naturală",
          "Apar primele fructe verzi după 7-10 zile de la floare",
        ],
        watch: "Buchete de 5-10 flori galbene, urmate de fructe mici verzi.",
      },
      {
        name: "Recoltă",
        from: 70,
        to: null,
        action:
          "Recoltează roșiile când sunt complet roșii — gust dulce maxim.",
        tips: [
          "Răsucește fructul, nu trage de el",
          "Recoltează la 2-3 zile pentru roșii la maturitate optimă",
          "Continuă să polenizezi florile noi pentru recoltă prelungită",
        ],
        watch: "Producție continuă 6-10 săptămâni.",
      },
    ],
    milestones: [
      { day: 7, title: "Răsărire", description: "Primele frunzulițe apar." },
      {
        day: 14,
        title: "Transplantare",
        description: "Mută în argilă cu suport.",
      },
      {
        day: 45,
        title: "Primele flori",
        description: "Începe polenizarea manuală.",
      },
      {
        day: 60,
        title: "Primele fructe verzi",
        description: "Apar roșiile mici și verzi.",
      },
      { day: 70, title: "Prima recoltă", description: "Roșiile devin roșii." },
    ],
  },
  {
    id: "capsuni",
    name: "Căpșuni",
    emoji: "🍓",
    light: "Lumină directă 6h/zi",
    water: "Apă curată, fără exces",
    temp: "15-25°C",
    healthy: "Frunze verzi lucioase, stoloni vizibili",
    problems: "Frunze maro → apă în exces; lipsă fructe → lumină insuficientă",
    transplant: "Mută în argilă după 10-14 zile",
    harvestFrom: 60,
    harvestTo: 150,
    yield: "10-20 căpșuni per plantă, în valuri de 2-3 săptămâni",
    stages: [
      {
        name: "Germinare",
        from: 1,
        to: 10,
        action: "Răbdare — căpșunii pornesc lent. Menține turba umedă.",
        tips: [
          "Pune semințele la frigider 2 săptămâni înainte (stratificare)",
          "Nu acoperi semințele — au nevoie de lumină",
          "Răsărire neuniformă, 7-21 zile",
        ],
        watch: "Primele frunzulițe mici și delicate apar treptat.",
      },
      {
        name: "Răsad",
        from: 11,
        to: 25,
        action: "Mută în argilă, fertilizare naturală din apa acvariului.",
        tips: [
          "Atenție la transplantare — rădăcinile sunt fragile",
          "Pune coronița (baza) la nivelul argilei, nu mai jos",
          "Asigură 6+ ore de lumină directă",
        ],
        watch: "3-5 frunze adevărate, plantă compactă.",
      },
      {
        name: "Dezvoltare",
        from: 26,
        to: 39,
        action: "Lasă planta să formeze rozeta și stolonii.",
        tips: [
          "Îndepărtează stolonii pentru a încuraja fructificarea",
          "Verifică să nu apară putregai pe frunze",
          "Temperatura sub 25°C ziua",
        ],
        watch: "Rozetă deasă cu 6-10 frunze sănătoase.",
      },
      {
        name: "Înflorire",
        from: 40,
        to: 59,
        action: "Polenizează florile cu pensulă fină — esențial pentru fructe.",
        tips: [
          "Atinge ușor centrul fiecărei flori cu pensula",
          "Repetă polenizarea 2-3 zile la rând per floare",
          "Fructele apar la 4-6 săptămâni după floare",
        ],
        watch: "Flori albe cu centru galben, apoi mici fructe verzi.",
      },
      {
        name: "Recoltă",
        from: 60,
        to: null,
        action:
          "Recoltează când fructele sunt roșii intense, complet colorate.",
        tips: [
          "Lasă fructele să se coloreze complet pe plantă",
          "Recoltează cu codiță, nu trage de fruct",
          "Producție în valuri — pauze între recolte",
        ],
        watch: "Fiecare plantă produce 2-3 valuri de fructe pe sezon.",
      },
    ],
    milestones: [
      {
        day: 10,
        title: "Răsărire",
        description: "Primele frunzulițe apar (răbdare!).",
      },
      {
        day: 25,
        title: "Transplantare",
        description: "Mută cu grijă în argilă.",
      },
      {
        day: 40,
        title: "Primele flori",
        description: "Începe polenizarea manuală.",
      },
      {
        day: 60,
        title: "Prima recoltă",
        description: "Primele căpșuni roșii.",
      },
    ],
  },
  {
    id: "menta",
    name: "Mentă",
    emoji: "🌿",
    light: "Lumină indirectă, 4-6h/zi",
    water: "Apă oxigenată din acvariu, umiditate constantă",
    temp: "18-24°C",
    healthy: "Frunze verzi intense, aromă puternică, creștere rapidă",
    problems:
      "Frunze palide → lumină slabă; tulpini lungi și subțiri → caută lumina, mută mai aproape",
    transplant:
      "Mută în argilă după 10-12 zile, când are 3-4 perechi de frunze",
    harvestFrom: 30,
    harvestTo: 365,
    yield: "Recoltare continuă tot anul, ~10g frunze/săptămână per plantă",
    stages: [
      {
        name: "Germinare",
        from: 1,
        to: 8,
        action:
          "Menține turba umedă, lumină indirectă, răbdare — menta germinează lent.",
        tips: [
          "Semințele foarte mici — nu le acoperi, doar presează ușor",
          "Acoperă cu folie pentru umiditate",
          "Răsărire în 7-14 zile",
        ],
        watch: "Cotiledoane mici, verzi-deschis.",
      },
      {
        name: "Răsad",
        from: 9,
        to: 18,
        action: "Mută în argilă, asigură circulație bună a apei.",
        tips: [
          "Manipulează tulpinițele cu grijă",
          "Lumină indirectă — evită soare puternic direct",
          "Pinch (ciupește) vârful la 3-4 perechi de frunze",
        ],
        watch: "Plantă compactă, 3-4 perechi de frunze.",
      },
      {
        name: "Dezvoltare",
        from: 19,
        to: 29,
        action: "Stimulează ramificarea — ciupește vârfurile săptămânal.",
        tips: [
          "Ciupește 1-2 cm din vârf în fiecare săptămână",
          "Fiecare ciupire = 2 ramuri noi",
          "Menta crește foarte rapid când e fericită",
        ],
        watch: "Tufă densă cu multiple ramuri laterale.",
      },
      {
        name: "Recoltă",
        from: 30,
        to: null,
        action:
          "Recoltează frunzele de sus — planta continuă să producă luni de zile.",
        tips: [
          "Recoltează dimineața pentru aromă maximă",
          "Nu lua mai mult de 1/3 din plantă odată",
          "Folosește proaspătă sau usucă pentru ceai",
        ],
        watch: "Recoltare continuă — planta îți va dura ani de zile.",
      },
    ],
    milestones: [
      { day: 5, title: "Răsărire", description: "Cotiledoane mici apar." },
      { day: 12, title: "Transplantare", description: "Mută în argilă." },
      {
        day: 20,
        title: "Prima ciupire",
        description: "Ciupește vârful pentru ramificare.",
      },
      {
        day: 30,
        title: "Prima recoltă",
        description: "Recoltează primele frunze aromate.",
      },
    ],
  },
  {
    id: "busuioc",
    name: "Busuioc",
    emoji: "🌱",
    light: "Lumină directă 6-8h/zi",
    water: "Apă constantă, fără să se usuce turba",
    temp: "20-26°C, ferește de frig",
    healthy: "Frunze mari, verzi, aromă intensă, tulpină dreaptă",
    problems:
      "Frunze galbene → frig sau exces de apă; pete negre → temperatură sub 15°C",
    transplant:
      "Mută în argilă după 12-15 zile, când are 2-3 perechi de frunze adevărate",
    harvestFrom: 35,
    harvestTo: 120,
    yield: "Recoltare săptămânală, ~15g frunze/săptămână per plantă",
    stages: [
      {
        name: "Germinare",
        from: 1,
        to: 7,
        action: "Ține semințele la cald (22-25°C), turba ușor umedă.",
        tips: [
          "Pune semințele la suprafață, acoperă ușor cu turbă",
          "Temperatura ESTE critică — minim 20°C",
          "Răsărire în 5-10 zile",
        ],
        watch: "Cotiledoane mici, verzi-închise.",
      },
      {
        name: "Răsad",
        from: 8,
        to: 20,
        action: "Mută în argilă, asigură lumină directă și căldură.",
        tips: [
          "Lumină directă obligatorie",
          "Nu lăsa apa să scadă sub 18°C",
          "Așteaptă 2-3 perechi de frunze adevărate înainte de transplant",
        ],
        watch: "Plantă verticală, frunze parfumate când le atingi.",
      },
      {
        name: "Dezvoltare",
        from: 21,
        to: 34,
        action: "Ciupește vârfurile pentru a obține o plantă stufoasă.",
        tips: [
          "Ciupește deasupra perechii a 4-a de frunze",
          "Repetă la fiecare ramură nouă care apare",
          "Îndepărtează imediat orice floare — opresc producția de frunze",
        ],
        watch: "Tufă densă, frunze mari și aromate.",
      },
      {
        name: "Recoltă",
        from: 35,
        to: null,
        action: "Recoltează frunzele regulat — planta continuă să producă.",
        tips: [
          "Taie deasupra unei perechi de frunze, nu de jos",
          "Recoltează 1/3 din plantă maxim odată",
          "Îndepărtează florile imediat ce apar",
        ],
        watch: "Recoltă continuă 2-3 luni dacă previi înflorirea.",
      },
    ],
    milestones: [
      { day: 5, title: "Răsărire", description: "Cotiledoane verzi apar." },
      {
        day: 15,
        title: "Transplantare",
        description: "Mută în argilă cu lumină directă.",
      },
      {
        day: 25,
        title: "Prima ciupire",
        description: "Ciupește vârful pentru ramificare.",
      },
      {
        day: 35,
        title: "Prima recoltă",
        description: "Frunze aromate gata de cules.",
      },
    ],
  },
] as const;

export function computeStage(plant: Plant, day: number): Stage {
  const stage = plant.stages.find(
    (s) => day >= s.from && (s.to === null || day <= s.to),
  );
  return stage ?? plant.stages[plant.stages.length - 1]!;
}

export function nextStage(plant: Plant, day: number): Stage {
  const idx = plant.stages.findIndex(
    (s) => day >= s.from && (s.to === null || day <= s.to),
  );
  return plant.stages[idx + 1]!;
}

export function nextMilestone(plant: Plant, day: number) {
  return plant.milestones.find((m) => m.day >= day);
}

export function daysUntilHarvest(plant: Plant, day: number) {
  if (day >= plant.harvestFrom) return 0;
  return plant.harvestFrom - day;
}

export function totalCycle(plant: Plant) {
  return plant.harvestTo;
}
