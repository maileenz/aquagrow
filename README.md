# 🌿 AquaGrow

> Kit acvaponic pentru apartament — crește salată, roșii și căpșuni direct din acvariu, fără chimicale.

AquaGrow is a Romanian e-commerce and education platform for apartment-scale aquaponics kits. The app lets customers learn about aquaponics, browse and purchase kits, follow a guided plant-growth calendar, and get help from an AI-powered chatbot (AquaBot).

---

## ✨ Features

- **Home** — landing page with product benefits, how it works, plant catalog, and testimonials
- **Magazin** — product listing with 3D kit preview and cart
- **Despre** — educational explainer on the aquaponics nutrient cycle
- **Calendar** — day-by-day growing guide for each supported plant
- **Ajutor** — FAQ and issue-reporting page
- **AquaBot** — AI chatbot (GPT-4o-mini) that answers aquaponics questions in Romanian
- **Order emails** — automated payment confirmation emails via Nodemailer + React Email

---

## 🛠 Tech Stack

| Layer           | Technology                                               |
| --------------- | -------------------------------------------------------- |
| Framework       | [Next.js 15](https://nextjs.org) (App Router, Turbopack) |
| Language        | TypeScript 5                                             |
| Styling         | Tailwind CSS 4 + shadcn/ui                               |
| 3D              | React Three Fiber + Drei                                 |
| AI              | Vercel AI SDK 6 + OpenAI GPT-4o-mini                     |
| State           | Zustand                                                  |
| Email           | Nodemailer + React Email                                 |
| Env validation  | @t3-oss/env-nextjs + Zod                                 |
| Package manager | pnpm                                                     |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+
- An Gemini API key

### Installation

```bash
# Clone the repo
git clone https://github.com/maileenz/aquagrow.git
cd aquagrow

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
```

### Environment Variables

Edit `.env` and fill in all required values:

```env
# Server-side
OPENAI_API_KEY=sk-...          # Required for AquaBot (GPT-4o-mini)

# Client-side (exposed to browser)
NEXT_PUBLIC_BRAND=AquaGrow     # Brand name displayed throughout the app
NEXT_PUBLIC_KIT_PRICE=299      # Kit price shown in the shop (RON)
```

> To skip env validation during Docker builds, set `SKIP_ENV_VALIDATION=1`.

### Development

```bash
pnpm dev        # Start dev server with Turbopack at http://localhost:3000
pnpm check      # Lint + typecheck
pnpm format:write  # Auto-format all files
```

### Production

```bash
pnpm build      # Build for production
pnpm start      # Start production server

# Or preview locally
pnpm preview    # build + start in one command
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/chat/route.ts       # AquaBot streaming API (POST /api/chat)
│   ├── ajutor/                 # FAQ & issue reporting page
│   ├── calendar/               # Plant growth calendar
│   ├── cosul-meu/              # Shopping cart page
│   ├── despre/                 # About / how aquaponics works
│   ├── magazin/                # Shop page
│   └── page.tsx                # Home page
├── components/
│   ├── chatbot.tsx             # AquaBot floating chat widget
│   ├── header.tsx
│   ├── footer.tsx
│   └── scenes/kit/             # 3D kit model (Three.js)
├── emails/                     # React Email templates
├── lib/                        # Shared utilities and plant data
├── stores/                     # Zustand state (cart)
└── styles/globals.css
```

---

## 🌱 Supported Plants

| Plant           | Harvest time |
| --------------- | ------------ |
| 🥬 Salată       | ~30 days     |
| 🍅 Roșii cherry | ~70 days     |
| 🍓 Căpșuni      | ~90 days     |
| 🌿 Mentă        | ~25 days     |
| 🌱 Busuioc      | ~35 days     |

---

## 🤖 AquaBot

AquaBot is a streaming AI assistant powered by GPT-4o-mini. It answers questions in Romanian about kit installation, plant care, fish compatibility, water parameters, and troubleshooting. It is accessible from all pages via the floating chat button.

The chatbot API lives at `POST /api/chat` and uses the Vercel AI SDK's `streamText` with `toUIMessageStreamResponse()`.

---

## 📄 License

Private — all rights reserved © AquaGrow.
