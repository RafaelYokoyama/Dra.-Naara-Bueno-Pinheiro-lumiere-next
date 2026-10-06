import type { Metadata, Viewport } from "next";
import { Cormorant, Jost } from "next/font/google";
import "./globals.css";

const display = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumière Esthétique · Dra. Naara Pinheiro",
  description:
    "Dra. Naara Pinheiro, biomédica esteta em Bragança Paulista. Botox, preenchedores, bioestimuladores, limpeza de pele e mais. Nota 5,0 no Google. Agende pelo WhatsApp.",
  openGraph: {
    title: "Lumière Esthétique · Dra. Naara Pinheiro",
    description: "Biomédica esteta em Bragança Paulista. Agende sua avaliação pelo WhatsApp.",
    images: ["/img/naara-hero.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F4EF" },
    { media: "(prefers-color-scheme: dark)", color: "#16120F" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
