'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar mensagem')
      }

      setIsSubmitted(true)
      setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' })
    } catch (error) {
      console.error('Erro ao enviar contato:', error)
      alert(error instanceof Error ? error.message : 'Erro ao enviar mensagem. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const assuntos = [
    'Orçamento de Produtos',
    'Dúvida Técnica',
    'Reclamação',
    'Sugestão',
    'Trabalhe Conosco',
    'Outro'
  ]

  return (
    <div className="pt-8 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-azul-escuro to-blue-900 text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ENTRE EM <span className="text-laranja">CONTATO</span>
          </h1>
          <p className="text-xl max-w-3xl">
            Estamos prontos para atender você e tirar todas as suas dúvidas
          </p>
        </div>
      </section>

      <div className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato - IDÊNTICO */}
          <div>
            <h2 className="text-2xl font-bold text-azul-escuro mb-8">
              INFORMAÇÕES DE CONTATO
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-laranja text-white rounded-lg flex items-center justify-center mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-azul-escuro mb-2">Telefone</h3>
                  <p className="text-cinza-escuro">+55 (37) 9 9957-1010 (VIVO)</p>
                  <p className="text-cinza-escuro">WhatsApp: +55 (37) 9 9957-1010</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-laranja text-white rounded-lg flex items-center justify-center mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-azul-escuro mb-2">E-mail</h3>
                  <p className="text-cinza-escuro">contatodetalhemoveis@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-laranja text-white rounded-lg flex items-center justify-center mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-azul-escuro mb-2">Endereço da Fábrica</h3>
                  <p className="text-cinza-escuro">Estr. Corumbá, s/n - Povoado do Corumbá</p>
                  <p className="text-cinza-escuro">Cláudio - MG</p>
                  <p className="text-cinza-escuro">CEP: 35530-000</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-laranja text-white rounded-lg flex items-center justify-center mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-azul-escuro mb-2">Horário de Funcionamento</h3>
                  <p className="text-cinza-escuro">Segunda a Sexta: 08:30 às 18:00</p>
                  <p className="text-cinza-escuro">Sábado: 08:30 às 12:00</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button - IDÊNTICO */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-green-800 mb-4">Atendimento Rápido</h3>
              <p className="text-green-700 mb-6">
                Prefere um atendimento mais rápido? Clique abaixo para falar diretamente no WhatsApp.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5537999571010&text=Atendimento Site Pergunta:"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors w-full"
              >
                <Phone size={20} className="mr-2" />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* Formulário - IDÊNTICO */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-azul-escuro mb-6">
              ENVIE SUA MENSAGEM
            </h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-azul-escuro mb-4">Mensagem Enviada!</h3>
                <p className="text-cinza-escuro mb-8">
                  Obrigado pelo seu contato. Retornaremos em até 24 horas.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Enviar Nova Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cinza-escuro mb-2 font-medium">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-cinza-claro rounded-lg focus:outline-none focus:border-laranja focus:ring-2 focus:ring-orange-100"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-cinza-escuro mb-2 font-medium">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-cinza-claro rounded-lg focus:outline-none focus:border-laranja focus:ring-2 focus:ring-orange-100"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cinza-escuro mb-2 font-medium">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-cinza-claro rounded-lg focus:outline-none focus:border-laranja focus:ring-2 focus:ring-orange-100"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-cinza-escuro mb-2 font-medium">
                      Assunto *
                    </label>
                    <select
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-cinza-claro rounded-lg focus:outline-none focus:border-laranja focus:ring-2 focus:ring-orange-100"
                    >
                      <option value="">Selecione um assunto</option>
                      {assuntos.map((assunto) => (
                        <option key={assunto} value={assunto}>{assunto}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-cinza-escuro mb-2 font-medium">
                    Mensagem *
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-cinza-claro rounded-lg focus:outline-none focus:border-laranja focus:ring-2 focus:ring-orange-100"
                    placeholder="Descreva sua dúvida ou solicitação..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary inline-flex items-center justify-center disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Mapa - IDÊNTICO */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-azul-escuro mb-8 text-center">
            NOSSA LOCALIZAÇÃO
          </h2>
          <div className="h-96 bg-gradient-to-br from-cinza-claro to-gray-300 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-xl text-cinza-escuro">Mapa de Localização</p>
              <p className="text-sm text-gray-500 mt-2">
                (Integrar Google Maps com endereço real)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
