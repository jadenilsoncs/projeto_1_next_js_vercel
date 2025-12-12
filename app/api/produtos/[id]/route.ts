import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    const produto = await prisma.produto.findUnique({
      where: {
        id: id,
        disponivel: true,
      },
      include: {
        categoria: {
          select: {
            id: true,
            nome: true,
            slug: true,
            tipo: true,
          },
        },
      },
    })

    if (!produto) {
      return NextResponse.json(
        { error: 'Produto não encontrado' },
        { status: 404 }
      )
    }

    // Buscar produtos relacionados da mesma categoria
    const produtosRelacionados = await prisma.produto.findMany({
      where: {
        categoriaId: produto.categoriaId,
        disponivel: true,
        id: {
          not: produto.id,
        },
      },
      take: 4,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        categoria: {
          select: {
            nome: true,
            slug: true,
          },
        },
      },
    })

    return NextResponse.json({
      produto,
      produtosRelacionados,
    })
  } catch (error) {
    console.error('Erro ao buscar produto:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar produto' },
      { status: 500 }
    )
  }
}

