import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const categoriaSlug = searchParams.get('categoria')
    const categoriaId = searchParams.get('categoriaId')
    const destaque = searchParams.get('destaque')
    const tipo = searchParams.get('tipo')
    const busca = searchParams.get('busca')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    const where: any = {
      disponivel: true,
    }

    if (categoriaSlug) {
      where.categoria = {
        slug: categoriaSlug,
      }
    }

    if (categoriaId) {
      where.categoriaId = categoriaId
    }

    if (destaque === 'true') {
      where.destaque = true
    }

    if (tipo) {
      where.categoria = {
        ...where.categoria,
        tipo: tipo,
      }
    }

    if (busca) {
      where.OR = [
        { nome: { contains: busca, mode: 'insensitive' } },
        { descricao: { contains: busca, mode: 'insensitive' } },
        { tags: { has: busca } },
      ]
    }

    const [produtos, total] = await Promise.all([
      prisma.produto.findMany({
        where,
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
        orderBy: {
          createdAt: 'desc',
        },
        take: limit,
        skip: offset,
      }),
      prisma.produto.count({ where }),
    ])

    return NextResponse.json({
      produtos,
      total,
      limit,
      offset,
    })
  } catch (error) {
    console.error('Erro ao buscar produtos:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar produtos' },
      { status: 500 }
    )
  }
}
