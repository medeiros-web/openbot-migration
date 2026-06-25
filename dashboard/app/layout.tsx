import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medeiros Assessoria — Painel IA",
  description: "Painel de controle do Assistente Virtual Jurídico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
