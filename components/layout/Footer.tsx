export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-2xl font-bold mb-4">MóveisPremium</p>
        <p className="text-gray-400 mb-8">Transformando espaços desde 2010</p>
        <div className="border-t border-gray-800 pt-8 text-gray-500">
          <p>© {new Date().getFullYear()} MóveisPremium. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
