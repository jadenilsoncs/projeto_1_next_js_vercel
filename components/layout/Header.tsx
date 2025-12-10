'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, User, ShoppingBag, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Coleções', href: '/colecoes', submenu: [
      { label: 'Sala de Estar', href: '/categoria/sala' },
      { label: 'Quarto', href: '/categoria/quarto' },
      { label: 'Escritório', href: '/categoria/escritorio' },
      { label: 'Jardim', href: '/categoria/jardim' },
    ]},
    { label: 'Designers', href: '/designers' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-900 text-primary-100 text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>Frete grátis para compras acima de R$ 2.500</div>
          <div className="flex items-center space-x-4">
            <Link href="/atendimento" className="hover:text-white">Atendimento</Link>
            <span>|</span>
            <Link href="/rastreio" className="hover:text-white">Rastrear Pedido</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-elegant">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">ME</span>
              </div>
              <div>
                <h1 className="font-serif text-2xl font-bold text-primary-900">Móveis Elegance</h1>
                <p className="text-xs text-gray-500 -mt-1">by Studio Design</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link 
                    href={item.href}
                    className="flex items-center text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  >
                    {item.label}
                    {item.submenu && <ChevronDown size={16} className="ml-1" />}
                  </Link>
                  {item.submenu && (
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-lg shadow-elegant py-2 min-w-[200px]">
                        {item.submenu.map((sub) => (
                          <Link 
                            key={sub.label}
                            href={sub.href}
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-700"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <button className="text-gray-600 hover:text-primary-600">
                <Search size={20} />
              </button>
              <button className="text-gray-600 hover:text-primary-600">
                <User size={20} />
              </button>
              <button className="relative text-gray-600 hover:text-primary-600">
                <ShoppingBag size={20} />
                <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </button>
              <button 
                className="lg:hidden text-gray-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t animate-slide-up">
            <div className="container mx-auto px-4 py-6">
              {menuItems.map((item) => (
                <div key={item.label} className="py-2 border-b border-gray-100">
                  <Link 
                    href={item.href}
                    className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  )
}
