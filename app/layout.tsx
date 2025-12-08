import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Seu Nome - Desenvolvedor',
  description: 'Site pessoal e portfólio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-white`}>
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="text-xl font-bold">SeuNome</a>
            <div className="flex gap-6">
              <a href="/" className="hover:text-blue-600">Início</a>
              <a href="/sobre" className="hover:text-blue-600">Sobre</a>
              <a href="/contato" className="hover:text-blue-600">Contato</a>
            </div>
          </div>
        </nav>
        
        <main className="pt-16">
          {children}
        </main>

        <footer className="bg-gray-100 py-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com Next.js e Tailwind CSS</p>
        </footer>
      </body>
    </html>
  );
}