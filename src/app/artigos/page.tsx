'use client';

import { Calendar, Clock, ArrowRight, User, Send, Mail, Phone, MessageSquare } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "Como a Terceirização do DP pode Impulsionar seu Negócio",
    excerpt: "Descubra como empresas estão reduzindo custos e aumentando eficiência ao terceirizar o Departamento Pessoal. Neste artigo completo, exploramos os benefícios, desafios e melhores práticas para implementar uma estratégia de BPO bem-sucedida.",
    author: "Sara Pereira",
    date: "15 de Março, 2024",
    readTime: "5 min",
    category: "BPO",
    image: "https://files.catbox.moe/hviug4.png",
    featured: true,
    content: `
      <h2>O que é Terceirização de DP?</h2>
      <p>A terceirização do Departamento Pessoal, também conhecida como BPO (Business Process Outsourcing), é a prática de contratar uma empresa especializada para gerenciar todas ou parte das funções de RH...</p>
      
      <h2>Principais Benefícios</h2>
      <ul>
        <li>Redução de custos operacionais</li>
        <li>Acesso a especialistas qualificados</li>
        <li>Conformidade legal garantida</li>
        <li>Foco no core business</li>
      </ul>
      
      <h2>Como Implementar</h2>
      <p>Para implementar com sucesso, é fundamental escolher o parceiro certo e estabelecer processos claros...</p>
    `
  },
  {
    id: 2,
    title: "Guia Completo de Folha de Pagamento 2024",
    excerpt: "Tudo que você precisa saber sobre gestão de folha de pagamento, obrigações legais e melhores práticas. Este guia abrangente cobre desde os conceitos básicos até as tendências mais recentes.",
    author: "Sara Pereira",
    date: "10 de Março, 2024", 
    readTime: "8 min",
    category: "Folha de Pagamento",
    image: "https://files.catbox.moe/l2w790.png",
    featured: false,
    content: `
      <h2>Introdução à Folha de Pagamento</h2>
      <p>A folha de pagamento é um dos processos mais críticos do Departamento Pessoal...</p>
      
      <h2>Componentes Essenciais</h2>
      <ul>
        <li>Cálculo de salários e benefícios</li>
        <li>Descontos e encargos</li>
        <li>Admissões e demissões</li>
        <li>Relatórios obrigatórios</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "Benefícios Corporativos: Como Atrair e Reter Talentos",
    excerpt: "Estratégias eficazes para criar um pacote de benefícios que faz a diferença na satisfação dos colaboradores e no posicionamento da sua empresa no mercado.",
    author: "Sara Pereira",
    date: "5 de Março, 2024",
    readTime: "6 min", 
    category: "Benefícios",
    image: "https://files.catbox.moe/espcgk.png",
    featured: false,
    content: `
      <h2>A Importância dos Benefícios</h2>
      <p>Em um mercado competitivo, os benefícios corporativos se tornaram um diferencial estratégico...</p>
      
      <h2>Tipos de Benefícios</h2>
      <ul>
        <li>Planos de saúde e odontológicos</li>
        <li>Previdência privada</li>
        <li>Programas de bem-estar</li>
        <li>Educação e desenvolvimento</li>
      </ul>
    `
  },
  {
    id: 4,
    title: "eSocial: Guia Prático para Empresas",
    excerpt: "Entenda como funciona o eSocial, quais são suas obrigações e como garantir a conformidade com as novas regras do governo.",
    author: "Sara Pereira",
    date: "28 de Fevereiro, 2024",
    readTime: "7 min",
    category: "eSocial",
    image: "https://files.catbox.moe/hviug4.png",
    featured: false,
    content: `
      <h2>O que é eSocial?</h2>
      <p>O eSocial é um projeto do governo federal para unificar o envio de informações trabalhistas...</p>
      
      <h2>Principais Desafios</h2>
      <ul>
        <li>Adaptação dos sistemas internos</li>
        <li>Treinamento da equipe</li>
        <li>Garantia da qualidade dos dados</li>
      </ul>
    `
  },
  {
    id: 5,
    title: "Gestão de Performance: KPIs Essenciais",
    excerpt: "Descubra quais são os indicadores-chave de performance que toda empresa deve acompanhar para otimizar seus processos de RH.",
    author: "Sara Pereira",
    date: "20 de Fevereiro, 2024",
    readTime: "5 min",
    category: "Gestão",
    image: "https://files.catbox.moe/l2w790.png",
    featured: false,
    content: `
      <h2>KPIs para Departamento Pessoal</h2>
      <p>Os indicadores de performance são essenciais para medir a eficácia das estratégias de RH...</p>
      
      <h2>Principais Métricas</h2>
      <ul>
        <li>Turnover rate</li>
        <li>Tempo médio de contratação</li>
        <li>Custo por contratação</li>
        <li>Satisfação dos colaboradores</li>
      </ul>
    `
  },
  {
    id: 6,
    title: "Segurança do Trabalho: Responsabilidade e Cuidado",
    excerpt: "Como implementar um programa eficaz de segurança do trabalho que proteja seus colaboradores e evite multas e penalidades.",
    author: "Sara Pereira",
    date: "15 de Fevereiro, 2024",
    readTime: "6 min",
    category: "Segurança",
    image: "https://files.catbox.moe/espcgk.png",
    featured: false,
    content: `
      <h2>Importância da Segurança do Trabalho</h2>
      <p>A segurança do trabalho é uma obrigação legal e um investimento no seu maior ativo...</p>
      
      <h2>Componentes Essenciais</h2>
      <ul>
        <li>Análise de riscos</li>
        <li>Treinamentos regulares</li>
        <li>EPIs adequados</li>
        <li>Cultura de segurança</li>
      </ul>
    `
  }
];

export default function ArtigosPage() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="w-full bg-gradient-to-r from-primary to-primary/90 py-20">
        <div className="container mx-auto px-8">
          <FadeIn direction="up" className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">
              Blog <span className="font-semibold">Sara Pereira</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Conteúdo especializado para transformar sua gestão de Departamento Pessoal
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="w-full py-16">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <FadeIn key={post.id} direction="up" delay={index * 0.1}>
                <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col">
                  {/* 2. Imagem agora livre para preencher 100% de ponta a ponta */}
                  <div className="relative h-48 w-full flex-shrink-0">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="object-cover group-hover:scale-105 transition-transform duration-700 w-full h-full"
                    />
                  </div>
                  
                  {/* 3. Padding aplicado APENAS na área de conteúdo */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-slate-500 text-sm">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-slate-600" />
                        </div>
                        <span className="text-sm text-slate-500">{post.author}</span>
                      </div>
                      
                      <Button variant="ghost" className="text-primary hover:text-primary/80 p-2">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full bg-slate-50 py-20">
        <div className="container mx-auto px-8">
          <FadeIn direction="up" className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-6">
                Fale <span className="font-semibold text-primary">Conosco</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Tem dúvidas sobre nossos serviços? Quer saber como podemos ajudar sua empresa? 
                Entre em contato e nossa equipe retornará o mais breve possível.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Serviço de Interesse
                  </label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                    <option value="">Selecione um serviço</option>
                    <option value="dp-terceirizado">Terceirização de DP</option>
                    <option value="consultoria">Consultoria Trabalhista</option>
                    <option value="folha">Folha de Pagamento</option>
                    <option value="esocial">eSocial</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Descreva sua necessidade ou dúvida..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" size="lg" className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-4">
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                  <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4">
                    <Phone className="w-5 h-5 mr-2" />
                    Ligar Agora
                  </Button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Back to Home */}
      <section className="w-full py-12">
        <div className="container mx-auto px-8 text-center">
          <Link href="/">
            <Button variant="ghost" size="lg" className="text-primary hover:text-primary/80">
              <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
              Voltar para Página Inicial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
