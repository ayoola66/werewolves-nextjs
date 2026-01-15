import type { Metadata } from "next";
import { Cinzel_Decorative, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Werewolves Village - Social Deduction Game",
  description:
    "Werewolves Village - A thrilling multiplayer social deduction game of strategy, deception, and survival. Forged in Moonlight.",
  icons: {
    icon: "/logo/Werewolves-Village-t1-logo-sq-nobg-main.png",
    apple: "/logo/Werewolves-Village-t1-logo-sq-nobg-main.png",
  },
  openGraph: {
    title: "Werewolves Village",
    description:
      "A thrilling multiplayer social deduction game. Forged in Moonlight.",
    images: ["/logo/Werewolves-Village-t1-logo-sq-nobg-main.png"],
    type: "website",
  },
  themeColor: "#1A1A1D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${montserrat.variable} ${cinzel.variable} antialiased bg-deep-slate text-parchment`}
      >
        {children}
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
