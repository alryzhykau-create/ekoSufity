import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EkoSufity | Sufity napinane Wrocław",
  description:
    "Sufity napinane we Wrocławiu i okolicach do 100 km. Bezpłatny pomiar, szybki montaż i uczciwa wycena.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
