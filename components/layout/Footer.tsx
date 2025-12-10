export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-cinza-escuro text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          {/* Texto de copyright - IDÊNTICO */}
          <p className="mb-4">
            © 2019-{currentYear} Detalhe Móveis. Todos os direitos reservados.
          </p>
          
          {/* Texto de desenvolvimento - IDÊNTICO */}
          <p className="text-sm text-gray-400">
            Desenvolvido por Viusite.com.br
          </p>
          
          {/* Versão Next.js (adicional) */}
          <p className="text-xs text-gray-500 mt-4">
            Versão Next.js + Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
