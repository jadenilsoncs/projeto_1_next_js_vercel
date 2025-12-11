import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const tipo = searchParams.get('tipo')
    const ativo = searchParams.get('ativo')

    const where: any = {}
    
    if (tipo) {
      where.tipo = tipo
    }

    if (ativo !== null) {
      where.ativo = ativo === 'true'
    } else {
      where.ativo = true // Por padrão, só categorias ativas
    }

    const categorias = await prisma.categoria.findMany({
      where,
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
    })

    return NextResponse.json({ categorias })
  } catch (error) {
    console.error('Erro ao buscar categorias:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar categorias' },
      { status: 500 }
    )
  }
}

