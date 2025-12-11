import { prisma } from '@/lib/prisma';
import ProductCard from '@/components/ui/ProductCard';
import Link from 'next/link';

async function getProdutos() {
  try {
    const produtos = await prisma.produto.findMany({
      where: {
        disponivel: true,
      },
      include: {
        categoria: {
          select: {
            id: true,
            nome: true,
            slug: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return produtos;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
}

async function getCategorias() {
  try {
    const categorias = await prisma.categoria.findMany({
      where: {
        ativo: true,
      },
      orderBy: {
        nome: 'asc',
      },
    });

    return categorias;
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return [];
  }
}

export const metadata = {
  title: 'Produtos - Detalhe Móveis',
  description: 'Conheça nossa linha completa de móveis em fibra sintética, alumínio fundido, luminárias e postes coloniais.',
};

export default async function ProdutosPage() {
  const produtos = await getProdutos();
  const categorias = await getCategorias();

  return (
    <div className="pt-8 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            NOSSOS <span className="text-accent">PRODUTOS</span>
          </h1>
          <p className="text-xl max-w-3xl">
            Conheça nossa linha completa de móveis de fibra sintética, alumínio fundido, luminárias e postes coloniais
          </p>
        </div>
      </section>

      {/* Filtros de Categoria */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/produtos"
              className="px-6 py-2 rounded-full text-sm font-medium bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Todos os Produtos
            </Link>
            {categorias.map((categoria) => (
              <Link
                key={categoria.id}
                href={`/categoria/${categoria.slug}`}
                className="px-6 py-2 rounded-full text-sm font-medium bg-white text-gray-700 hover:bg-primary hover:text-white transition-colors border border-gray-200"
              >
                {categoria.nome}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Produtos */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {produtos.length > 0 ? (
            <>
              <div className="mb-8">
                <p className="text-gray-600">
                  Mostrando <strong>{produtos.length}</strong> produto{produtos.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {produtos.map((produto) => (
                  <ProductCard
                    key={produto.id}
                    id={produto.id}
                    name={produto.nome}
                    price={produto.preco || 0}
                    image={produto.imagemUrl || ''}
                    category={produto.categoria.nome}
                    slug={produto.slug}
                    description={produto.descricao || ''}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">📦</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nenhum produto encontrado</h3>
              <p className="text-gray-600">Volte em breve para ver nossos produtos</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            NÃO ENCONTROU O QUE PROCURAVA?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato para um projeto personalizado
          </p>
          <Link
            href="/contato"
            className="inline-block bg-white text-accent px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Solicitar Projeto Personalizado
          </Link>
        </div>
      </section>
    </div>
  );
}
