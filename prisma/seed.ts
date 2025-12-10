import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Limpar tabelas existentes
  await prisma.produto.deleteMany()
  await prisma.usuario.deleteMany()

  // Criar produtos
  const produtos = await prisma.produto.createMany({
    data: [
      {
        nome: 'Sofá Confort Premium 3 Lugares',
        descricao: 'Sofá em couro sintético de alta resistência, com assento reclinável e apoio de braço ajustável.',
        preco: 2899.90,
        categoria: 'Sofás',
        imagemUrl: '/images/sofa.jpg',
        destaque: true,
      },
      {
        nome: 'Mesa de Jantar Redonda em Madeira',
        descricao: 'Mesa redonda para 6 pessoas, feita em madeira de reflorestamento com acabamento envernizado.',
        preco: 1899.90,
        categoria: 'Mesas',
        imagemUrl: '/images/mesa.jpg',
        destaque: true,
      },
      {
        nome: 'Cama King Size Box Colchão Ortobom',
        descricao: 'Cama box casal king size com cabeceira estofada em tecido antialérgico e colchão incluso.',
        preco: 3299.90,
        categoria: 'Camas',
        imagemUrl: '/images/cama.jpg',
        destaque: true,
      },
      {
        nome: 'Cadeira Executiva Ergonômica',
        descricao: 'Cadeira para escritório com ajuste de altura, apoio lombar e braços reguláveis.',
        preco: 899.90,
        categoria: 'Cadeiras',
        imagemUrl: '/images/cadeira.jpg',
        destaque: false,
      },
      {
        nome: 'Guarda-Roupa Casal 6 Portas',
        descricao: 'Guarda-roupa em MDF com 6 portas, espelho e gavetas com corrediças soft-close.',
        preco: 2599.90,
        categoria: 'Armários',
        imagemUrl: '/images/guarda-roupa.jpg',
        destaque: false,
      },
      {
        nome: 'Rack para TV 55" com Painel',
        descricao: 'Rack moderno com espaço para TV de até 55", painel lateral para componentes e prateleiras.',
        preco: 1299.90,
        categoria: 'Estantes',
        imagemUrl: '/images/rack.jpg',
        destaque: true,
      },
    ],
  })

  // Criar usuário admin
  await prisma.usuario.create({
    data: {
      email: 'admin@moveispremium.com',
      nome: 'Administrador',
      senha: 'admin123', // Em produção, usar hash!
      admin: true,
    },
  })

  console.log(`✅ Seed concluído! ${produtos.count} produtos criados.`)
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
