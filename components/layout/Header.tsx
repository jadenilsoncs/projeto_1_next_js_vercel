'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart, Search, ChevronDown } from 'lucide-react';
import { useCartStore } from '@/components/ui/cartStore';
import Cart from '@/components/ui/Cart';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { toggleCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Empresa', href: '/empresa' },
    {
      title: 'PRODUTOS',
      submenu: [
        {
          title: 'Móveis de Fibra Sintética e Tela Sling',
          items: [
            { title: 'Jogo de Mesas', href: '/categoria/jogo-de-mesas' },
            { title: 'Banquetas', href: '/categoria/banquetas' },
            { title: 'Cadeiras e Poltronas', href: '/categoria/cadeiras-e-poltronas' },
            { title: 'Jogo de Sófa e Poltronas', href: '/categoria/jogo-de-sofa-e-poltronas' },
            { title: 'Espreguiçadeiras', href: '/categoria/espreguicadeiras' },
            { title: 'Kit Piscina', href: '/categoria/kit-piscina' },
            { title: 'Aparador', href: '/categoria/aparador' },
            { title: 'Puff', href: '/categoria/puff' },
            { title: 'Balanços', href: '/categoria/balancos' },
            { title: 'Namoradeiras', href: '/categoria/namoradeiras' },
          ],
        },
        {
          title: 'Móveis de Alumínio Fundido',
          items: [
            { title: 'Móveis em Alumínio Fundido', href: '/categoria/moveis-aluminio-fundido' },
            { title: 'Mesas', href: '/categoria/mesas' },
            { title: 'Mesas de Alumínio e Madeira', href: '/categoria/mesas-aluminio-madeira' },
            { title: 'Ombrelone', href: '/categoria/ombrelone' },
          ],
        },
        {
          title: 'Postes Coloniais',
          items: [
            { title: 'Postes Alumínio Fundido', href: '/categoria/postes-aluminio' },
            { title: 'Postes Alumínio Fundido e Tubo', href: '/categoria/postes-tubo' },
            { title: 'Postes Suporte para Placa', href: '/categoria/postes-placa' },
          ],
        },
        {
          title: 'Luminárias Coloniais',
          items: [
            { title: 'Luminárias Para Parede', href: '/categoria/luminarias-parede' },
            { title: 'Luminárias Para Teto', href: '/categoria/luminarias-teto' },
            { title: 'Lustres Coloniais', href: '/categoria/lustres' },
            { title: 'Luminárias Para Muro', href: '/categoria/luminarias-muro' },
          ],
        },
      ],
    },
    { title: 'Contato', href: '/contato' },
  ];

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-40">
        {/* Top Bar */}
        <div className="bg-primary text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex gap-4">
              <a href="https://www.instagram.com/detalhemoveisoficial/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/Detalhe-M%C3%B3veis-292514194927327/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
            <span>Atendimento: 08:30 às 18:00</span>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Detalhe Móveis</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => (
                <div key={item.title} className="relative group">
                  {item.submenu ? (
                    <>
                      <button className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium transition-colors">
                        {item.title}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <div className="absolute left-0 top-full pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all">
                        <div className="bg-white shadow-lg rounded-lg p-4 w-64 max-h-96 overflow-y-auto">
                          {item.submenu.map((section) => (
                            <div key={section.title} className="mb-4">
                              <h3 className="font-semibold text-primary mb-2">{section.title}</h3>
                              <ul className="space-y-1">
                                {section.items.map((subItem) => (
                                  <li key={subItem.title}>
                                    <Link href={subItem.href} className="text-sm text-gray-600 hover:text-accent block py-1">
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link href={item.href} className="text-gray-700 hover:text-primary font-medium transition-colors">
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button onClick={() => setSearchOpen(!searchOpen)} className="text-gray-700 hover:text-primary">
                <Search className="w-5 h-5" />
              </button>
              
              <button onClick={toggleCart} className="relative text-gray-700 hover:text-primary">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-gray-700">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="mt-4">
              <input
                type="text"
                placeholder="Pesquisar produtos..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <div key={item.title}>
                  {item.submenu ? (
                    <details className="group">
                      <summary className="font-medium text-gray-700 cursor-pointer list-none">
                        {item.title}
                      </summary>
                      <div className="mt-2 ml-4 space-y-2">
                        {item.submenu.map((section) => (
                          <div key={section.title}>
                            <h4 className="font-semibold text-primary text-sm mb-1">{section.title}</h4>
                            <ul className="ml-4 space-y-1">
                              {section.items.map((subItem) => (
                                <li key={subItem.title}>
                                  <Link href={subItem.href} className="text-sm text-gray-600 hover:text-accent">
                                    {subItem.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link href={item.href} className="block font-medium text-gray-700 hover:text-primary">
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>

      <Cart />
    </>
  );
}