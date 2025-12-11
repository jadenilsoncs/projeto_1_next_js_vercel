import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const categoria = await prisma.categoria.findUnique({
      where: {
        slug: params.slug,
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
    })

    if (!categoria) {
      return NextResponse.json(
        { error: 'Categoria não encontrada' },
        { status: 404 }
      )
    }

    return NextResponse.json({ categoria })
  } catch (error) {
    console.error('Erro ao buscar categoria:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar categoria' },
      { status: 500 }
    )
  }
}

