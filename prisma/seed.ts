import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Limpar tabelas existentes
  await prisma.produto.deleteMany()
  await prisma.categoria.deleteMany()
  await prisma.contato.deleteMany()
  await prisma.usuario.deleteMany()

  // Criar categorias de Fibra Sintética
  const catJogoMesas = await prisma.categoria.create({
    data: {
      nome: 'Jogo de Mesas',
      slug: 'jogo-de-mesas',
      descricao: 'Jogos de mesa e cadeiras em fibra sintética para área externa',
      tipo: 'fibra-sintetica',
      ordem: 1,
      imagemUrl: 'https://www.detalhemoveisaluminios.com.br/img/jogo-de-mesa-e-cadeiras-em-fibra-sintetica-para-varada.jpg',
    },
  })

  const catBanquetas = await prisma.categoria.create({
    data: {
      nome: 'Banquetas',
      slug: 'banquetas',
      descricao: 'Banquetas altas em fibra sintética',
      tipo: 'fibra-sintetica',
      ordem: 2,
      imagemUrl: 'https://www.detalhemoveisaluminios.com.br/img/banquetas-altas-fibra-sintetica.jpg',
    },
  })

  const catCadeiras = await prisma.categoria.create({
    data: {
      nome: 'Cadeiras e Poltronas',
      slug: 'cadeiras-e-poltronas',
      descricao: 'Cadeiras e poltronas em fibra sintética',
      tipo: 'fibra-sintetica',
      ordem: 3,
      imagemUrl: 'https://www.detalhemoveisaluminios.com.br/img/cadeiras-de-fibra-sintetica.jpg',
    },
  })

  const catEspreguicadeiras = await prisma.categoria.create({
    data: {
      nome: 'Espreguiçadeiras',
      slug: 'espreguicadeiras',
      descricao: 'Espreguiçadeiras para piscina em tela sling',
      tipo: 'fibra-sintetica',
      ordem: 4,
      imagemUrl: 'https://www.detalhemoveisaluminios.com.br/img/espreguicadeiras-chaise-para-piscinas.jpg',
    },
  })

  const catKitPiscina = await prisma.categoria.create({
    data: {
      nome: 'Kit Piscina',
      slug: 'kit-piscina',
      descricao: 'Kits completos para piscina',
      tipo: 'fibra-sintetica',
      ordem: 5,
      imagemUrl: 'https://www.detalhemoveisaluminios.com.br/img/kits-para-piscinas-completo-móveis-em-fibra-sintetica.jpg',
    },
  })

  const catAparador = await prisma.categoria.create({
    data: {
      nome: 'Aparador',
      slug: 'aparador',
      descricao: 'Aparadores em fibra sintética',
      tipo: 'fibra-sintetica',
      ordem: 6,
      imagemUrl: 'https://www.detalhemoveisaluminios.com.br/img/aparador-sala-fibra-sintetica.jpg',
    },
  })

  const catPuff = await prisma.categoria.create({
    data: {
      nome: 'Puff',
      slug: 'puff',
      descricao: 'Puffs em fibra sintética',
      tipo: 'fibra-sintetica',
      ordem: 7,
      imagemUrl: 'https://www.detalhemoveisaluminios.com.br/img/puff-vime-em-fibra-sintetica-e-aluminio.jpg',
    },
  })

  const catNamoradeiras = await prisma.categoria.create({
    data: {
      nome: 'Namoradeiras',
      slug: 'namoradeiras',
      descricao: 'Namoradeiras em tela sling e alumínio',
      tipo: 'fibra-sintetica',
      ordem: 8,
      imagemUrl: 'https://www.detalhemoveisaluminios.com.br/img/namoradeiras-em-tela-sling-e-aluminio-fibra-sintetica.jpg',
    },
  })

  // Categorias de Alumínio
  const catAluminio = await prisma.categoria.create({
    data: {
      nome: 'Móveis em Alumínio Fundido',
      slug: 'moveis-aluminio-fundido',
      descricao: 'Móveis em alumínio fundido',
      tipo: 'aluminio',
      ordem: 1,
      imagemUrl: 'https://www.detalhemoveisaluminios.com.br/img/conjunto-em-aluminio-fundido.jpg',
    },
  })

  const catPostes = await prisma.categoria.create({
    data: {
      nome: 'Postes Coloniais',
      slug: 'postes-coloniais',
      descricao: 'Postes coloniais em alumínio',
      tipo: 'postes',
      ordem: 1,
      imagemUrl: 'https://www.detalhemoveisaluminios.com.br/img/postes-coloniais.jpg',
    },
  })

  const catLuminarias = await prisma.categoria.create({
    data: {
      nome: 'Luminárias Coloniais',
      slug: 'luminarias-coloniais',
      descricao: 'Luminárias coloniais',
      tipo: 'luminarias',
      ordem: 1,
      imagemUrl: 'https://www.detalhemoveisaluminios.com.br/img/luminarias-coloniais.jpg',
    },
  })

  const catLustres = await prisma.categoria.create({
    data: {
      nome: 'Lustres e Pendentes Contemporâneos',
      slug: 'lustres-e-pendentes',
      descricao: 'Lustres e pendentes contemporâneos',
      tipo: 'luminarias',
      ordem: 2,
      imagemUrl: 'https://www.detalhemoveisaluminios.com.br/img/pendente-e-lustres-contemporaneo.jpg',
    },
  })

  // Criar produtos de exemplo
  await prisma.produto.createMany({
    data: [
      {
        nome: 'Conjunto de Mesa e 4 Cadeiras em Fibra Sintética',
        slug: 'conjunto-mesa-4-cadeiras-fibra',
        descricao: 'Mesa 120x80cm com 4 cadeiras, estrutura em alumínio e fibra sintética resistente ao clima',
        descricaoLonga: 'Conjunto completo para área externa. Mesa com tampo em fibra sintética e estrutura em alumínio fundido. Cadeiras confortáveis com encosto ergonômico. Ideal para varandas, áreas gourmet e jardins.',
        preco: 2499.90,
        categoriaId: catJogoMesas.id,
        imagemUrl: 'https://www.detalhemoveisaluminios.com.br/img/conjunto-de-mesa-e-cadeiras-fibra-sintetica-aluminio.jpg',
        imagens: [
          'https://www.detalhemoveisaluminios.com.br/img/conjunto-de-mesa-e-cadeiras-fibra-sintetica-aluminio.jpg',
        ],
        destaque: true,
        disponivel: true,
        tags: ['mesa', 'cadeiras', 'fibra sintética', 'alumínio', 'área externa'],
      },
      {
        nome: 'Espreguiçadeira Tela Sling Premium',
        slug: 'espreguicadeira-tela-sling-premium',
        descricao: 'Espreguiçadeira reclinável em 5 posições, tela sling resistente',
        descricaoLonga: 'Espreguiçadeira com estrutura em alumínio e tela sling de alta qualidade. Reclina em 5 posições diferentes. Perfeita para área de piscina.',
        preco: 899.90,
        categoriaId: catEspreguicadeiras.id,
        imagemUrl: 'https://www.detalhemoveisaluminios.com.br/img/espreguicadeira-tela-sling.jpg',
        imagens: [
          'https://www.detalhemoveisaluminios.com.br/img/espreguicadeira-tela-sling.jpg',
        ],
        destaque: true,
        disponivel: true,
        tags: ['espreguiçadeira', 'tela sling', 'piscina', 'reclinável'],
      },
      {
        nome: 'Banqueta Alta Fibra Sintética',
        slug: 'banqueta-alta-fibra-sintetica',
        descricao: 'Banqueta alta ideal para área gourmet, altura 75cm',
        preco: 449.90,
        categoriaId: catBanquetas.id,
        imagemUrl: 'https://www.detalhemoveisaluminios.com.br/img/banquetas-altas-fibra-sintetica.jpg',
        imagens: [
          'https://www.detalhemoveisaluminios.com.br/img/banquetas-altas-fibra-sintetica.jpg',
        ],
        destaque: false,
        disponivel: true,
        tags: ['banqueta', 'área gourmet', 'fibra sintética'],
      },
      {
        nome: 'Kit Piscina Completo - 4 Espreguiçadeiras',
        slug: 'kit-piscina-4-espreguicadeiras',
        descricao: 'Kit com 4 espreguiçadeiras + mesinha de apoio',
        preco: 3299.90,
        categoriaId: catKitPiscina.id,
        imagemUrl: 'https://www.detalhemoveisaluminios.com.br/img/kits-para-piscinas-completo-móveis-em-fibra-sintetica.jpg',
        imagens: [
          'https://www.detalhemoveisaluminios.com.br/img/kits-para-piscinas-completo-móveis-em-fibra-sintetica.jpg',
        ],
        destaque: true,
        disponivel: true,
        tags: ['kit', 'piscina', 'espreguiçadeiras', 'completo'],
      },
      {
        nome: 'Aparador em Fibra Sintética 150cm',
        slug: 'aparador-fibra-sintetica-150cm',
        descricao: 'Aparador decorativo com tampo de vidro temperado',
        preco: 1299.90,
        categoriaId: catAparador.id,
        imagemUrl: 'https://www.detalhemoveisaluminios.com.br/img/aparador-sala-fibra-sintetica.jpg',
        imagens: [
          'https://www.detalhemoveisaluminios.com.br/img/aparador-sala-fibra-sintetica.jpg',
        ],
        destaque: false,
        disponivel: true,
        tags: ['aparador', 'sala', 'fibra sintética'],
      },
      {
        nome: 'Conjunto em Alumínio Fundido Premium',
        slug: 'conjunto-aluminio-fundido-premium',
        descricao: 'Conjunto completo em alumínio fundido para área externa',
        preco: 4599.90,
        categoriaId: catAluminio.id,
        imagemUrl: 'https://www.detalhemoveisaluminios.com.br/img/conjunto-em-aluminio-fundido.jpg',
        imagens: [
          'https://www.detalhemoveisaluminios.com.br/img/conjunto-em-aluminio-fundido.jpg',
        ],
        destaque: true,
        disponivel: true,
        tags: ['alumínio fundido', 'conjunto', 'área externa'],
      },
    ],
  })

  // Criar usuário admin
  const hashedPassword = await bcrypt.hash('admin123', 10)
  await prisma.usuario.create({
    data: {
      email: 'admin@detalhemoveis.com.br',
      nome: 'Administrador',
      senha: hashedPassword,
      admin: true,
    },
  })

  console.log('✅ Seed concluído!')
  console.log(`   - ${await prisma.categoria.count()} categorias criadas`)
  console.log(`   - ${await prisma.produto.count()} produtos criados`)
  console.log(`   - 1 usuário admin criado`)
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
