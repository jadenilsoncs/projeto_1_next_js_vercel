'use client'

import { useState } from 'react'
import { Filter, Grid, List, ChevronRight } from 'lucide-react'

export default function ProdutosPage() {
  const [viewMode, setViewMode] = useState('grid')
  const [selectedCategory, setSelectedCategory] = useState('todos')

  const categorias = [
    { id: 'todos', nome: 'Todos os Produtos' },
    { id: 'cozinhas', nome: 'Cozinhas' },
    { id: 'banheiros', nome: 'Banheiros' },
    { id: 'area-gourmet', nome: 'Área Gourmet' },
    { id: 'escritorio', nome: 'Escritório' },
    { id: 'closet', nome: 'Closet' },
  ]

  const produtos = [
    {
      id: 1,
      nome: 'Cozinha Linear Moderna',
      categoria: 'cozinhas',
      descricao: 'Cozinha planejada em alumínio com iluminação LED',
      preco: 12500.00,
      imagem: '🏠',
      destaque: true
    },
    {
      id: 2,
      nome: 'Banheiro Master',
      categoria: 'banheiros',
      descricao: 'Móveis para banheiro em alumínio com espelho',
      preco: 8500.00,
      imagem: '🚿',
      destaque: false
    },
    {
      id: 3,
      nome: 'Churrasqueira com Bancada',
      categoria: 'area-gourmet',
      descricao: 'Conjunto para área gourmet em alumínio',
      preco: 9200.00,
      imagem: '🍖',
      destaque: true
    },
    {
      id: 4,
      nome: 'Escritório Executivo',
      categoria: 'escritorio',
      descricao: 'Mesa e armários para escritório',
      preco: 7800.00,
      imagem: '💼',
      destaque: false
    },
    {
      id: 5,
      nome: 'Cozinha Americana',
      categoria: 'cozinhas',
      descricao: 'Cozinha integrada com ilha central',
      preco: 15800.00,
      imagem: '🏠',
      destaque: true
    },
    {
      id: 6,
      nome: 'Closet Casal',
      categoria: 'closet',
      descricao: 'Closet planejado com sistema de corrediças',
      preco: 11200.00,
      imagem: '👕',
      destaque: false
    },
    {
      id: 7,
      nome: 'Banheiro Social',
      categoria: 'banheiros',
      descricao: 'Móveis para banheiro de visita',
      preco: 6500.00,
      imagem: '🚿',
      destaque: false
    },
    {
      id: 8,
      nome: 'Home Office',
      categoria: 'escritorio',
      descricao: 'Estação de trabalho completa',
      preco: 8900.00,
      imagem: '💼',
      destaque: true
    },
  ]

  const filteredProducts = selectedCategory === 'todos' 
    ? produtos 
    : produtos.filter(p => p.categoria === selectedCategory)

  return (
    <div className="pt-8 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-azul-escuro to-blue-900 text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            NOSSOS <span className="text-laranja">PRODUTOS</span>
          </h1>
          <p className="text-xl max-w-3xl">
            Conheça nossa linha completa de móveis planejados em alumínio
          </p>
        </div>
      </section>

      {/* Filtros e Controles - IDÊNTICO ao original */}
      <section className="py-8 bg-gray-50 border-b border-cinza-claro">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Filter className="text-laranja mr-2" size={20} />
              <span className="font-medium text-cinza-escuro mr-4">Filtrar por:</span>
              <div className="flex flex-wrap gap-2">
                {categorias.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-laranja text-white'
                        : 'bg-white text-cinza-escuro hover:bg-gray-100 border border-cinza-claro'
                    }`}
                  >
                    {cat.nome}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-cinza-escuro mr-2">Visualização:</span>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${
                  viewMode === 'grid' ? 'bg-laranja text-white' : 'bg-white text-cinza-escuro'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${
                  viewMode === 'list' ? 'bg-laranja text-white' : 'bg-white text-cinza-escuro'
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Produtos */}
      <section className="py-12">
        <div className="container">
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
              : 'space-y-6'
          }`}>
            {filteredProducts.map((produto) => (
              <div 
                key={produto.id} 
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                <div className={`${
                  viewMode === 'list' 
                    ? 'w-1/3 h-64' 
                    : 'h-48'
                } bg-gradient-to-br from-cinza-claro to-gray-200 flex items-center justify-center text-6xl`}>
                  {produto.imagem}
                  {produto.destaque && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">
                      DESTAQUE
                    </div>
                  )}
                </div>
                
                <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-medium text-laranja bg-orange-50 px-3 py-1 rounded-full">
                      {produto.categoria.toUpperCase()}
                    </span>
                    {produto.destaque && viewMode === 'list' && (
                      <span className="text-sm font-bold text-red-500">DESTAQUE</span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-azul-escuro mb-2">{produto.nome}</h3>
                  <p className="text-cinza-escuro mb-4">{produto.descricao}</p>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-azul-escuro">
                        R$ {produto.preco.toFixed(2).replace('.', ',')}
                      </div>
                      <div className="text-sm text-cinza-escuro">Orçamento personalizado</div>
                    </div>
                    <button className="flex items-center text-laranja hover:text-orange-700 font-medium">
                      Detalhes
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mensagem se não houver produtos */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">📦</div>
              <h3 className="text-2xl font-bold text-azul-escuro mb-4">Nenhum produto encontrado</h3>
              <p className="text-cinza-escuro">Tente selecionar outra categoria</p>
            </div>
          )}

          {/* Contador */}
          <div className="mt-12 pt-8 border-t border-cinza-claro text-center text-cinza-escuro">
            Mostrando {filteredProducts.length} de {produtos.length} produtos
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-laranja text-white">
        <div className="container text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            NÃO ENCONTROU O QUE PROCURAVA?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato para um projeto personalizado
          </p>
          <a 
            href="/contato" 
            className="inline-block bg-white text-laranja px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors"
          >
            Solicitar Projeto Personalizado
          </a>
        </div>
      </section>
    </div>
  )
}
