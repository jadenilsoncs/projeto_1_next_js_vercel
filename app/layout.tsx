import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Detalhe Móveis - Móveis de Fibra Sintética e Alumínio",
  description: "Móveis de fibra sintética, alumínio fundido, luminárias e postes coloniais. Fabricação própria com os melhores preços.",
  keywords: "móveis fibra sintética, móveis alumínio, luminárias coloniais, postes, espreguiçadeiras, kit piscina",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}