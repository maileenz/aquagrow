import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { env } from "@/env";
import "@/styles/globals.css";
import NextTopLoader from "nextjs-toploader";
import { type Metadata } from "next";
import { Comfortaa, Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  weight: "600",
});

export const metadata: Metadata = {
  title: {
    template: `%s — ${env.NEXT_PUBLIC_BRAND}`,
    default: `${env.NEXT_PUBLIC_BRAND} — Plante naturale din acvariul tău`,
  },
  description: "Sisteme acvaponice sustenabile pentru apartament.",
  icons: [
    {
      rel: "icon",
      url: "https://u4d6xf5i5b.ufs.sh/f/6kGNuz9TajAxVWp9ugXd3jevOSJ6P9mHTRZngrulifVbLp4Q",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ro"
      className={`${geist.variable} ${comfortaa.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <NextTopLoader showSpinner={false} color="#278733" />
        <div className="flex min-h-svh flex-col">
          <Header />
          <div className="grow">{children}</div>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
