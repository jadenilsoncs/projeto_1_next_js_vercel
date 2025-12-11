import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import HomeCarousel from '@/components/sections/HomeCarousel';
import CategoriesSection from '@/components/sections/CategoriesSection';

async function getCategories() {
  try {
    const categorias = await prisma.categoria.findMany({
      where: {
        ativo: true,
      },
      include: {
        _count: {
          select: {
            produtos: {
              where: {
                disponivel: true,
              },
            },
          },
        },
      },
      orderBy: [
        { ordem: 'asc' },
        { nome: 'asc' },
      ],
    });
    return categorias;
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return [];
  }
}

export default async function Home() {
  const categorias = await getCategories();
  
  const fibraCategories = categorias.filter(cat => cat.tipo === 'fibra-sintetica');
  const aluminioCategories = categorias.filter(cat => cat.tipo === 'aluminio');
  const luminariasCategories = categorias.filter(cat => cat.tipo === 'luminarias' || cat.tipo === 'postes');


  return (
    <main>
      <HomeCarousel />

      <CategoriesSection
        title="LINHAS MÓVEIS DE FIBRA SINTÉTICA"
        subtitle="Móveis sobre medidas para área externa e interna, resistente ao clima seja no sol e chuva"
        categorias={fibraCategories}
        gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        bgColor="bg-gray-50"
      />

      {/* Factory Banner */}
      <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-white">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 16h3v5H4v-5zm5 0h3v5H9v-5zm-5-7h3v5H4V9zm5 0h3v5H9V9zm5 7h3v5h-3v-5zm0-7h3v5h-3V9zm5 7h3v5h-3v-5zm0-7h3v5h-3V9zM2 4h20v2H2V4z"/>
            </svg>
            <p className="text-xl md:text-2xl font-bold">
              SÓ QUEM FABRICA PODE VENDER A PREÇO BAIXO!!
            </p>
          </div>
        </div>
      </section>

      <CategoriesSection
        title="LINHAS DE MÓVEIS EM ALUMÍNIO E LUMINÁRIAS"
        subtitle="Decore seu ambiente com nossos produtos em alumínio fundido"
        categorias={[...aluminioCategories, ...luminariasCategories]}
        gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        bgColor="bg-white"
      />
    </main>
  );
}