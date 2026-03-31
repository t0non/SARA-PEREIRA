import Image from 'next/image';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Carregar posts do localStorage
    if (typeof window !== 'undefined') {
      const savedPosts = localStorage.getItem('blogPosts');
      if (savedPosts) {
        const posts = JSON.parse(savedPosts);
        // Apenas posts publicados
        setBlogPosts(posts.filter((post: BlogPost) => post.published));
      } else {
        // Posts padrão se não houver nada no localStorage
        const defaultPosts: BlogPost[] = [
          {
            id: '1',
            title: "Como a Terceirização do DP pode Impulsionar seu Negócio",
            excerpt: "Descubra como empresas estão reduzindo custos e aumentando eficiência ao terceirizar o Departamento Pessoal.",
            author: "Sara Pereira",
            date: "15 de Março, 2024",
            readTime: "5 min",
            category: "BPO",
            image: "https://files.catbox.moe/hviug4.png",
            published: true,
            content: "",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '2',
            title: "Guia Completo de Folha de Pagamento 2024",
            excerpt: "Tudo que você precisa saber sobre gestão de folha de pagamento, obrigações legais e melhores práticas.",
            author: "Sara Pereira",
            date: "10 de Março, 2024", 
            readTime: "8 min",
            category: "Folha de Pagamento",
            image: "https://files.catbox.moe/l2w790.png",
            published: true,
            content: "",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '3',
            title: "Benefícios Corporativos: Como Atrair e Reter Talentos",
            excerpt: "Estratégias eficazes para criar um pacote de benefícios que faz a diferença na satisfação dos colaboradores.",
            author: "Sara Pereira",
            date: "5 de Março, 2024",
            readTime: "6 min", 
            category: "Benefícios",
            image: "https://files.catbox.moe/espcgk.png",
            published: true,
            content: "",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        ];
        setBlogPosts(defaultPosts);
      }
    }
  }, []);

  // Ordenar posts por data (mais recentes primeiro)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const featuredPost = sortedPosts[0];
  const otherPosts = sortedPosts.slice(1);

  return (
    <section id="blog" className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn direction="up" className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-6">
            <span className="font-semibold">Blog</span> e Artigos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conteúdo especializado para transformar sua gestão de Departamento Pessoal
          </p>
        </FadeIn>

        {sortedPosts.length > 0 ? (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <FadeIn direction="up" className="mb-16">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 lg:h-full min-h-[400px]">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-contain"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Em Destaque
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                          {featuredPost.category}
                        </span>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-semibold text-slate-900 mb-4 leading-tight">
                        {featuredPost.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-slate-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">{featuredPost.author}</p>
                            <p className="text-sm text-slate-500">{featuredPost.date}</p>
                          </div>
                        </div>
                        
                        <Button variant="ghost" className="text-primary hover:text-primary/80 p-2">
                          <ArrowRight className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Grid Posts */}
            {otherPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {otherPosts.map((post, index) => (
                  <FadeIn key={post.id} direction="up" delay={index * 0.1}>
                    <article className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-100">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
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
            )}

            {/* CTA */}
            <FadeIn direction="up" className="text-center">
              <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-8 py-4">
                Ver Todos os Artigos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </FadeIn>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-slate-500">Nenhum artigo publicado ainda. Volte em breve!</p>
          </div>
        )}
      </div>
    </section>
  );
}
