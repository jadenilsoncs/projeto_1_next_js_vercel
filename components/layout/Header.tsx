'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-branco border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo - IDÊNTICO ao original */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-laranja">DETALHE</span>
              <span className="text-cinza-escuro">MÓVEIS</span>
            </div>
          </Link>

          {/* WhatsApp Button - EXATAMENTE igual */}
          <div className="flex items-center">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors font-medium"
            >
              <Phone size={18} className="mr-2" />
              <span className="hidden sm:inline">Converse no Whatsapp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
            
            {/* Menu Mobile Button (simples) */}
            <button
              className="ml-4 lg:hidden text-cinza-escuro"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Simples (se necessário) */}
        {isMenuOpen && (
          <div className="lg:hidden bg-branco border-t py-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-cinza-escuro hover:text-laranja py-2">
                Home
              </Link>
              <a 
                href="#linhas" 
                className="text-cinza-escuro hover:text-laranja py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Linhas de Móveis
              </a>
              <a 
                href="#aluminio" 
                className="text-cinza-escuro hover:text-laranja py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Alumínio Fundido
              </a>
              <a 
                href="#contato" 
                className="text-cinza-escuro hover:text-laranja py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
      
      {/* Barra de horário - IDÊNTICA */}
      <div className="bg-cinza-claro text-cinza-escuro text-sm py-2 text-center border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          Atendimento: 08:30 às 18:00
        </div>
      </div>
    </header>
  )
}
