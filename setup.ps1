# setup.ps1 - Execute no PowerShell como Administrador
Write-Host "🎯 CRIANDO ESTRUTURA COMPLETA DO SITE DE MÓVEIS..." -ForegroundColor Green

# 1. PASTAS PRINCIPAIS
$folders = @(
    "app",
    "app/produtos",
    "app/produtos/[id]",
    "app/sobre",
    "app/blog",
    "app/blog/[slug]",
    "app/contato",
    "app/admin",
    "app/api/produtos",
    "app/api/contato",
    "components",
    "components/ui",
    "components/layout",
    "components/sections",
    "components/produtos",
    "lib",
    "prisma",
    "public/images",
    "public/images/produtos",
    "public/icons",
    "styles",
    "utils"
)

foreach ($folder in $folders) {
    if (!(Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
        Write-Host "✓ Criada pasta: $folder" -ForegroundColor Cyan
    }
}

# 2. ARQUIVOS DE CONFIGURAÇÃO
Write-Host "`n📁 CRIANDO ARQUIVOS DE CONFIGURAÇÃO..." -ForegroundColor Yellow

# Tailwind config simplificado
@"
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {'50': '#eff6ff', '100': '#dbeafe', '200': '#bfdbfe', '300': '#93c5fd', '400': '#60a5fa', '500': '#3b82f6', '600': '#2563eb', '700': '#1d4ed8', '800': '#1e40af', '900': '#1e3a8a'},
        secondary: {'50': '#f8fafc', '100': '#f1f5f9', '200': '#e2e8f0', '300': '#cbd5e1', '400': '#94a3b8', '500': '#64748b', '600': '#475569', '700': '#334155', '800': '#1e293b', '900': '#0f172a'},
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
}
export default config
"@ | Out-File -FilePath "tailwind.config.ts" -Encoding UTF8

# Globals.css limpo
@"
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 15, 23, 42;
  --background-rgb: 248, 250, 252;
}

body {
  color: rgb(var(--foreground-rgb));
  background: rgb(var(--background-rgb));
  font-family: 'Inter', system-ui, sans-serif;
}

/* Custom classes */
.btn-primary {
  @apply bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors;
}

.btn-secondary {
  @apply bg-secondary-200 text-secondary-800 px-6 py-3 rounded-lg font-semibold hover:bg-secondary-300 transition-colors;
}

.card-hover {
  @apply transition-all duration-300 hover:shadow-xl hover:-translate-y-1;
}
"@ | Out-File -FilePath "app/globals.css" -Encoding UTF8

Write-Host "✓ Arquivos de config criados" -ForegroundColor Green

# 3. LAYOUT PRINCIPAL
Write-Host "`n🏗️ CRIANDO LAYOUT PRINCIPAL..." -ForegroundColor Yellow

@"
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Móveis Premium - Móveis de Alta Qualidade para seu Lar',
  description: 'Encontre os melhores móveis para sua casa com design, conforto e durabilidade. Sofás, mesas, camas e muito mais.',
  keywords: 'móveis, sofá, cama, mesa, decoração, casa, lar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={\`\${inter.className} antialiased\`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
"@ | Out-File -FilePath "app/layout.tsx" -Encoding UTF8

Write-Host "✓ Layout principal criado" -ForegroundColor Green

Write-Host "`n🎉 ESTRUTURA CRIADA COM SUCESSO!" -ForegroundColor Green
Write-Host "Próximo passo: Executar os comandos de banco de dados" -ForegroundColor Yellow