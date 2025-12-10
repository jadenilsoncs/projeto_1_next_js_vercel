interface ProductCardProps {
  id: number
  nome: string
  categoria: string
  preco: number
  descricao: string
  imagem?: string
  destaque?: boolean
}

export default function ProductCard({
  id,
  nome,
  categoria,
  preco,
  descricao,
  imagem = '🛋️',
  destaque = false
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {destaque && (
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
          Destaque
        </div>
      )}
      
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl">
        {imagem}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {categoria}
          </span>
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            ❤️
          </button>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{nome}</h3>
        <p className="text-gray-600 mb-4">{descricao}</p>
        
        <div className="flex justify-between items-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">
              R$ {preco.toFixed(2).replace('.', ',')}
            </div>
            <div className="text-sm text-gray-500">Em até 12x sem juros</div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Ver Detalhes
          </button>
        </div>
      </div>
    </div>
  )
}
