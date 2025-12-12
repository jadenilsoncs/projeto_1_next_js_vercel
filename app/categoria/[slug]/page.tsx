import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ui/ProductCard';

async function getCategoria(slug: string) {
  try {
    const categoria = await prisma.categoria.findUnique({
      where: {
        slug: slug,
        ativo: true,
      },
      include: {
        produtos: {
          where: {
            disponivel: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });

    return categoria;
  } catch (error) {
    console.error('Erro ao buscar categoria:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const categoria = await getCategoria(slug);
  
  if (!categoria) {
    return {
      title: 'Categoria não encontrada',
    };
  }

  return {
    title: `${categoria.nome} - Detalhe Móveis`,
    description: categoria.descricao || `Produtos da categoria ${categoria.nome}`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const categoria = await getCategoria(slug);

  if (!categoria) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="mx-2">/</span>
            <a href="/produtos" className="hover:text-primary">Produtos</a>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">{categoria.nome}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {categoria.nome}
          </h1>
          {categoria.descricao && (
            <p className="text-gray-600 text-lg">{categoria.descricao}</p>
          )}
          <p className="text-gray-500 mt-2">
            {categoria.produtos.length} produto{categoria.produtos.length !== 1 ? 's' : ''} encontrado{categoria.produtos.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Products Grid */}
        {categoria.produtos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoria.produtos.map((produto) => (
              <ProductCard
                key={produto.id}
                id={produto.id}
                name={produto.nome}
                price={produto.preco || 0}
                image={produto.imagemUrl || ''}
                category={categoria.nome}
                slug={produto.slug}
                description={produto.descricao || ''}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <svg className="w-24 h-24 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="text-xl text-gray-500">Nenhum produto encontrado nesta categoria</p>
            <p className="text-gray-400 mt-2">Volte em breve para ver nossos novos produtos</p>
          </div>
        )}
      </div>
    </div>
  );
}
