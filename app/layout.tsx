import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dewa United — Digital Platform Concept",
  description: "Independent concept for a unified Dewa United digital experience across football, basketball, esports, content, ticketing and merchandise.",
  robots: { index: false, follow: false },
  icons: { icon: "https://dewaunited.com/logo.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // suppressHydrationWarning: ekstensi browser (mis. ColorZilla menambah
  // cz-shortcut-listen) menyuntik atribut ke <body> sebelum React hydrate.
  // Hanya berlaku untuk atribut <body> itu sendiri, bukan isinya -- mismatch
  // asli di dalam pohon komponen tetap dilaporkan.
  return <html lang="en"><body suppressHydrationWarning>{children}</body></html>;
}
