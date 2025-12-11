# 🛋 Detalhe Móveis - E-commerce Next.js

Site completo de e-commerce para móveis de fibra sintética e alumínio, recriado em *Next.js 15 + TypeScript + Tailwind CSS + PostgreSQL (Neon)*.

## 🚀 Stack Tecnológica

- *Framework:* Next.js 15 (App Router)
- *Linguagem:* TypeScript
- *Estilização:* Tailwind CSS
- *Banco de Dados:* PostgreSQL (Neon)
- *ORM:* Prisma
- *Estado Global:* Zustand (carrinho de compras)
- *Ícones:* Lucide React

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone <seu-repositorio>
cd projeto_1_next_js_vercel
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

1. Crie uma conta no [Neon](https://neon.tech) (ou use outro PostgreSQL)
2. Crie um novo projeto e copie a string de conexão
3. Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://usuario:senha@host:porta/database?sslmode=require"
```

### 4. Configure o Prisma

```bash
# Gerar o cliente Prisma
npm run db:generate

# Criar as tabelas no banco
npm run db:push

# Popular o banco com dados iniciais
npm run db:seed
```

### 5. Execute o projeto

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🗄️ Banco de Dados

O projeto usa **PostgreSQL** com **Prisma ORM**. O schema está em `prisma/schema.prisma`.

### Estrutura do Banco

- **Categoria**: Categorias de produtos (fibra sintética, alumínio, luminárias, etc.)
- **Produto**: Produtos com informações completas
- **Contato**: Mensagens do formulário de contato
- **Usuario**: Usuários do sistema (admin)

### Scripts Disponíveis

```bash
npm run db:generate  # Gerar cliente Prisma
npm run db:push      # Sincronizar schema com banco
npm run db:migrate   # Criar migração
npm run db:seed      # Popular banco com dados iniciais
npm run db:studio    # Abrir Prisma Studio (interface visual)
```

## 🎨 Funcionalidades Implementadas

### ✅ Homepage
- Carrossel automático com 3 slides
- Grid de categorias de móveis de fibra sintética (busca do banco)
- Grid de categorias de alumínio e luminárias (busca do banco)
- Banner "Só quem fabrica pode vender a preço baixo"
- Design responsivo (mobile, tablet, desktop)
- **Dados dinâmicos do banco de dados**

### ✅ Header
- Menu desktop com dropdown de categorias
- Menu mobile responsivo
- Barra de pesquisa toggle
- Contador de itens no carrinho
- Links para redes sociais
- Sticky no scroll

### ✅ Carrinho de Compras
- Sidebar lateral que abre/fecha
- Adicionar/remover produtos
- Aumentar/diminuir quantidade
- Cálculo automático do total
- Persistência com localStorage (via Zustand)
- Animações suaves

### ✅ Página de Categoria
- **Busca produtos do banco de dados**
- Grid de produtos responsivo
- Breadcrumb de navegação
- Contador de produtos por categoria
- Página dinâmica baseada no slug da categoria

### ✅ Card de Produto
- Imagem com hover zoom
- Botão de favoritar
- Badge de categoria
- Preço parcelado
- Botão "Adicionar ao carrinho" com feedback
- Link para página do produto

### ✅ Footer
- Links organizados por seções
- Redes sociais
- Botão WhatsApp
- Logos de pagamento (PagSeguro)
- Botão flutuante do WhatsApp
- Copyright

## 🔧 Próximos Passos

### 1. *Baixar Imagens Localmente* (Recomendado)

Atualmente as imagens usam URLs do site original. Para melhor performance:

bash
# Criar pasta de imagens
mkdir -p public/images

# Baixar as imagens do site antigo e salvar em public/images
# Depois atualizar os caminhos nos componentes de:
# https://www.detalhemoveisaluminios.com.br/img/...
# para:
# /images/...


### 2. *APIs Implementadas*

✅ **Já implementado:**
- `/api/produtos` - Listar produtos (com filtros)
- `/api/produtos/[id]` - Detalhes do produto
- `/api/categorias` - Listar categorias
- `/api/categorias/[slug]` - Detalhes da categoria
- `/api/contato` - Enviar mensagem de contato

### 3. *Páginas Implementadas*

✅ **Já implementado:**
- `/` - Homepage com categorias dinâmicas
- `/produtos` - Lista de todos os produtos
- `/categoria/[slug]` - Página de categoria dinâmica
- `/contato` - Formulário de contato (salva no banco)
- `/empresa` - Página sobre a empresa

⏳ **Pendente:**
- `/produtos/[slug]` - Página individual do produto
- `/carrinho` - Página completa do carrinho
- `/checkout` - Finalização de compra

### 4. *Integrações*

- *Pagamento:* PagSeguro, Mercado Pago, Stripe
- *Analytics:* Google Analytics, Meta Pixel
- *Email:* Nodemailer, SendGrid (notificações)
- *Busca:* Algolia (busca de produtos)

### 5. *SEO e Performance*

- Adicionar meta tags dinâmicas
- Sitemap automático
- Robots.txt
- Otimização de imagens com next/image
- PWA (Progressive Web App)

## 🎯 Deploy

### Vercel (Recomendado)

bash
# 1. Commitar no GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Conectar ao Vercel
# Acesse vercel.com e conecte seu repositório
# Deploy automático a cada push!


### Netlify

bash
npm run build
# Upload da pasta .next para o Netlify


## 📱 Responsividade

O site está 100% responsivo:

- *Mobile:* < 640px
- *Tablet:* 640px - 1024px
- *Desktop:* > 1024px

## 🛠 Customização

### Cores

Edite tailwind.config.ts:

typescript
colors: {
  primary: '#2c5f2d',  // Verde principal
  accent: '#ff6b35',   // Laranja destaque
}


### Fontes

Edite src/app/layout.tsx para mudar a fonte padrão.

## 📞 Suporte

- *WhatsApp:* (37) 99957-1010
- *Email:* contatodetalhemoveis@gmail.com

---

*Desenvolvido com ❤ usando Next.js 15*