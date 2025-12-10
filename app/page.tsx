import Link from 'next/link'
import { ArrowRight, Star, Shield, Truck, Award } from 'lucide-react'
import ProductCard from '@/components/ui/ProductCard'

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      nome: "Sofá Milano em Veludo",
      categoria: "Sala de Estar",
      preco: 5899.90,
      descricao: "Sofá italiano em veludo premium com estrutura em madeira maciça",
      imagem: "🛋️",
      destaque: true,
      rating: 4.9
    },
    {
      id: 2,
      nome: "Mesa de Jantar Nobre",
      categoria: "Jantar",
      preco: 4299.90,
      descricao: "Mesa extensível em mármore Carrara com base em aço escovado",
      imagem: "🍽️",
      destaque: true,
      rating: 4.8
    },
    {
      id: 3,
      nome: "Cama King Ortopédica",
      categoria: "Quarto",
      preco: 6899.90,
      descricao: "Cama box king size com sistema ortopédico e cabeceira em couro",
      imagem: "🛏️",
      destaque: true,
      rating: 5.0
    },
  ]

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Design Award",
      description: "Prêmios internacionais de design"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantia Vitalícia",
      description: "Estrutura com garantia permanente"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Montagem Inclusa",
      description: "Instalação profissional gratuita"
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        
        <div className="container relative mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Coleção Primavera/Verão 2024
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-900 leading-tight mb-6">
                Design que <span className="text-accent-500">Inspira</span> Vidas
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 max-w-2xl">
                Móveis exclusivos assinados por designers renomados. Cada peça é uma obra de arte funcional, 
                criada para transformar seu espaço em um refúgio de elegância e conforto.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/colecoes" 
                  className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 group"
                >
                  Explorar Coleção
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/agendamento" 
                  className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 transition-all duration-300"
                >
                  Agendar Visita
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 opacity-20"></div>
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                  <div className="text-center p-12">
                    <div className="text-8xl mb-6">🛋️</div>
                    <p className="text-2xl font-serif text-gray-800">Imagem do Produto em Destaque</p>
                    <p className="text-gray-600 mt-2">(Fotografia profissional)</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-elegant max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center">
                    <span className="text-accent-600 text-2xl">⭐</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Avaliação 4.9/5</div>
                    <div className="text-sm text-gray-600">+5.000 clientes satisfeitos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-b from-white to-primary-50 shadow-card hover:shadow-elegant transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-primary-900 mb-4">
              Peças <span className="text-accent-500">Exclusivas</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Descubra nossa seleção de móveis premium, onde cada peça conta uma história de artesanato refinado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/colecoes" 
              className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium group"
            >
              Ver Coleção Completa
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-secondary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Agende uma <span className="text-accent-400">Visita ao Showroom</span>
          </h2>
          <p className="text-xl text-primary-200 mb-10 max-w-3xl mx-auto">
            Experimente pessoalmente a qualidade e o conforto de nossos móveis.
          </p>
          <Link 
            href="/agendamento" 
            className="inline-flex items-center justify-center bg-accent-500 text-white px-10 py-4 rounded-lg font-medium hover:bg-accent-600 transition-colors text-lg"
          >
            Agendar Visita Presencial
          </Link>
        </div>
      </section>
    </>
  )
}
