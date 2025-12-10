import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Detalhe Móveis - Móveis de Fibra Sintética e Alumínio',
  description: 'Móveis sobre medidas para área externa e interna, resistente ao clima. Alumínio fundido e luminárias.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Fontes simples como original */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans text-cinza-escuro bg-branco">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
