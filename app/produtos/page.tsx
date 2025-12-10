export default function ProdutosPage() {
  const produtos = [
    { id: 1, nome: "Sofá Confort Plus", categoria: "Sofás", preco: 2899.90, imagem: "🛋️", descricao: "Sofá 3 lugares em couro sintético" },
    { id: 2, nome: "Mesa de Jantar Redonda", categoria: "Mesas", preco: 1899.90, imagem: "🍽️", descricao: "Mesa para 6 pessoas em madeira maciça" },
    { id: 3, nome: "Cama King Size Box", categoria: "Camas", preco: 3299.90, imagem: "🛏️", descricao: "Cama box casal com cabeceira estofada" },
    { id: 4, nome: "Cadeira Executiva Premium", categoria: "Cadeiras", preco: 899.90, imagem: "💺", descricao: "Cadeira ergonômica para escritório" },
    { id: 5, nome: "Rack para TV 55''", categoria: "Estantes", preco: 1299.90, imagem: "📺", descricao: "Rack em MDF com prateleiras" },
    { id: 6, nome: "Guarda-Roupa Casal", categoria: "Armários", preco: 2599.90, imagem: "👕", descricao: "Guarda-roupa 6 portas espelhado" },
  ]

  return (
    <div className="min-h-screen pt-8 pb-20">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nossos Produtos</h1>
          <p className="text-xl text-gray-600">Encontre o móvel perfeito para cada ambiente</p>
        </div>
      </div>

      {/* Filtros */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium">Todos</button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">Sofás</button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">Camas</button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">Mesas</button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">Cadeiras</button>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto) => (
            <div key={produto.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl">
                {produto.imagem}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{produto.categoria}</span>
                  <button className="text-gray-400 hover:text-blue-600">❤️</button>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{produto.nome}</h3>
                <p className="text-gray-600 mb-4">{produto.descricao}</p>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-gray-900">R$ {produto.preco.toFixed(2).replace('.', ',')}</div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">
                    Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
