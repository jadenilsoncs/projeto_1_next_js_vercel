import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nome, email, telefone, assunto, mensagem } = body

    // Validação básica
    if (!nome || !email || !assunto || !mensagem) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: nome, email, assunto e mensagem' },
        { status: 400 }
      )
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Criar contato no banco
    const contato = await prisma.contato.create({
      data: {
        nome,
        email,
        telefone: telefone || null,
        assunto,
        mensagem,
      },
    })

    // Aqui você pode adicionar envio de email, notificação, etc.

    return NextResponse.json(
      {
        success: true,
        message: 'Mensagem enviada com sucesso! Retornaremos em breve.',
        id: contato.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Erro ao processar contato:', error)
    return NextResponse.json(
      { error: 'Erro ao processar sua mensagem. Tente novamente.' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const lido = searchParams.get('lido')
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    const where: any = {}
    if (lido !== null) {
      where.lido = lido === 'true'
    }

    const [contatos, total] = await Promise.all([
      prisma.contato.findMany({
        where,
        orderBy: {
          createdAt: 'desc',
        },
        take: limit,
        skip: offset,
      }),
      prisma.contato.count({ where }),
    ])

    return NextResponse.json({
      contatos,
      total,
      limit,
      offset,
    })
  } catch (error) {
    console.error('Erro ao buscar contatos:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar contatos' },
      { status: 500 }
    )
  }
}

