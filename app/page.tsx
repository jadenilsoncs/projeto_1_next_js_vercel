// app/page.tsx - PÁGINA PRINCIPAL DO SEU SITE
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Olá, eu sou <span className="text-blue-600">[SEU NOME]</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Desenvolvedor especializado em criar sites e sistemas modernos para empresas.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/contato" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Entrar em Contato
          </Link>
          <Link 
            href="/projetos" 
            className="px-8 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Ver Projetos
          </Link>
        </div>
      </section>

      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meus Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Sites Institucionais</h3>
              <p className="text-gray-600">Sites modernos para sua empresa se destacar online.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Sistemas Web</h3>
              <p className="text-gray-600">Sistemas personalizados para gestão do seu negócio.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Consultoria Tech</h3>
              <p className="text-gray-600">Ajuda na escolha da melhor tecnologia para seu projeto.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Vamos trabalhar juntos?</h2>
          <p className="text-gray-300 mb-10">Entre em contato e vamos conversar sobre seu projeto.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="mailto:seuemail@exemplo.com" className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700">
              Enviar Email
            </a>
            <a href="https://wa.me/5511999999999" className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}