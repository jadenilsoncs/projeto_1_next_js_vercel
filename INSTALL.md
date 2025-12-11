# 🚀 Guia de Instalação Rápida

## Passo 1: Organize os arquivos

Crie a seguinte estrutura na sua pasta do projeto:


seu-projeto/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Copie aqui
│   │   ├── page.tsx             ← Copie aqui
│   │   ├── globals.css          ← Copie aqui
│   │   └── categoria/
│   │       └── [slug]/
│   │           └── page.tsx     ← Copie aqui
│   │
│   ├── components/
│   │   ├── Header.tsx           ← Copie aqui
│   │   ├── Footer.tsx           ← Copie aqui
│   │   ├── Cart.tsx             ← Copie aqui
│   │   └── ProductCard.tsx      ← Copie aqui
│   │
│   └── store/
│       └── cartStore.ts         ← Copie aqui
│
├── package.json                 ← Copie aqui
├── tailwind.config.ts           ← Copie aqui
├── tsconfig.json                ← Copie aqui
├── postcss.config.js            ← Copie aqui
├── next.config.js               ← Copie aqui
└── README.md                    ← Copie aqui


## Passo 2: Instale as dependências

Abra o terminal na pasta do projeto e execute:

bash
npm install


Isso vai instalar todas as bibliotecas necessárias:
- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Zustand (gerenciamento de estado)
- Lucide React (ícones)
- Embla Carousel

## Passo 3: Execute o projeto

bash
npm run dev


Pronto! Acesse *http://localhost:3000* no navegador 🎉

## Passo 4: Veja se está funcionando

Você deve ver:
- ✅ Homepage com carrossel
- ✅ Header com menu
- ✅ Grid de produtos
- ✅ Footer completo
- ✅ Carrinho funcionando
- ✅ Design idêntico ao site original

## 🔧 Comandos úteis

bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Rodar em produção
npm start

# Checar erros
npm run lint


## ⚠ Problemas comuns

### Erro: Module not found

Se aparecer erro de módulo não encontrado:

bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install


### Erro: Port 3000 already in use

Se a porta 3000 estiver ocupada:

bash
# Use outra porta
npm run dev -- -p 3001


### Imagens não carregam

As imagens estão usando URLs do site original. Funcionam temporariamente, mas recomendo baixar para /public/images depois.

## 📱 Testando Responsividade

Abra as DevTools do Chrome (F12) e:
1. Clique no ícone de celular (Ctrl+Shift+M)
2. Teste diferentes resoluções
3. Tudo deve funcionar perfeitamente!

## 🚀 Próximo Passo: Deploy

Quando estiver pronto para colocar online:

1. Suba para o GitHub
2. Conecte no Vercel (vercel.com)
3. Deploy automático! ✨

---

*Dúvidas?* Me chama que eu ajudo! 🤝
