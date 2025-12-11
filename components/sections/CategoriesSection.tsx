import Image from 'next/image';
import Link from 'next/link';

interface Categoria {
  id: string;
  nome: string;
  slug: string;
  imagemUrl: string | null;
  _count: {
    produtos: number;
  };
}

interface CategoriesSectionProps {
  title: string;
  subtitle: string;
  categorias: Categoria[];
  gridCols: string;
  bgColor: string;
}

export default function CategoriesSection({
  title,
  subtitle,
  categorias,
  gridCols,
  bgColor,
}: CategoriesSectionProps) {
  if (categorias.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className={`grid ${gridCols} gap-6`}>
          {categorias.map((categoria) => (
            <Link
              key={categoria.id}
              href={`/categoria/${categoria.slug}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                {categoria.imagemUrl ? (
                  <Image
                    src={categoria.imagemUrl}
                    alt={categoria.nome}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Sem imagem</span>
                  </div>
                )}
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{categoria.nome}</h3>
                <span className="text-accent font-medium text-sm group-hover:underline">
                  {categoria._count.produtos > 0 
                    ? `${categoria._count.produtos} PRODUTO${categoria._count.produtos > 1 ? 'S' : ''}`
                    : 'MAIS PRODUTOS'
                  }
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

