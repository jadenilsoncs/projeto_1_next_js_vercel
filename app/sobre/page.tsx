export default function SobrePage() {
  return (
    <div className="min-h-screen pt-8 pb-20">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nossa História</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Há mais de uma década transformando espaços com móveis que unem design, qualidade e conforto.
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quem Somos</h2>
            <p className="text-gray-700 mb-6">
              A <span className="font-semibold text-blue-600">MóveisPremium</span> nasceu em 2010 com uma missão simples: 
              oferecer móveis de alta qualidade que transformam não apenas espaços, mas também a forma como as pessoas vivem.
            </p>
            <p className="text-gray-700 mb-8">
              Começamos como uma pequena marcenaria familiar e hoje somos referência no mercado de móveis premium, 
              atendendo clientes em todo o Brasil com produtos que unem design contemporâneo, durabilidade e conforto.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-gray-700">Anos de Experiência</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600">5K+</div>
                <div className="text-gray-700">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
          <div className="h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
            <div className="text-white text-center p-8">
              <div className="text-6xl mb-4">🏢</div>
              <p className="text-2xl font-bold">Nossa Loja Principal</p>
            </div>
          </div>
        </div>

        {/* Missão, Visão, Valores */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-4">Missão</h3>
            <p className="text-gray-600">Oferecer móveis premium que unem design, conforto e durabilidade, superando expectativas.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">👁️</div>
            <h3 className="text-xl font-bold mb-4">Visão</h3>
            <p className="text-gray-600">Ser referência nacional em móveis de qualidade até 2030, expandindo para toda América Latina.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-bold mb-4">Valores</h3>
            <p className="text-gray-600">Qualidade, transparência, inovação e respeito ao cliente e ao meio ambiente.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
