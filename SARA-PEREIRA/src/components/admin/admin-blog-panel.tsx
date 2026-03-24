"use client";

import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

export default function AdminBlogPanel() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<Partial<BlogPost>>({});
  const [loading, setLoading] = useState(true);

  // Carregar posts do localStorage
  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // Posts iniciais de exemplo
      const initialPosts: BlogPost[] = [
        {
          id: '1',
          title: "Como a Terceirização do DP pode Impulsionar seu Negócio",
          excerpt: "Descubra como empresas estão reduzindo custos e aumentando eficiência ao terceirizar o Departamento Pessoal.",
          content: `# Como a Terceirização do DP pode Impulsionar seu Negócio

A terceirização do Departamento Pessoal tornou-se uma estratégia essencial para empresas que buscam otimização e crescimento.

## Benefícios Principais

### 1. Redução de Custos Operacionais
- Eliminação de custos com infraestrutura
- Redução de despesas com pessoal especializado
- Economia de escala em processos

### 2. Foco no Core Business
- Tempo dedicado ao que realmente importa
- Equipe estratégica focada em crescimento
- Melhor alocação de recursos

### 3. Conformidade e Segurança
- Especialistas atualizados com a legislação
- Redução de riscos trabalhistas
- Processos auditados e validados

## Como Implementar

A implementação deve ser feita de forma gradual, garantindo a transição suave das operações...`,
          author: "Sara Pereira",
          date: "15 de Março, 2024",
          readTime: "5 min",
          category: "BPO",
          image: "https://files.catbox.moe/hviug4.png",
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ];
      setPosts(initialPosts);
      localStorage.setItem('blogPosts', JSON.stringify(initialPosts));
    }
    setLoading(false);
  }, []);

  // Salvar posts no localStorage
  const savePosts = (updatedPosts: BlogPost[]) => {
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  };

  // Criar ou editar post
  const savePost = () => {
    if (!currentPost.title || !currentPost.excerpt || !currentPost.content) {
      alert('Preencha todos os campos obrigatórios');
      return;
    }

    if (currentPost.id) {
      // Editar post existente
      const updatedPosts = posts.map(post => 
        post.id === currentPost.id 
          ? { 
              ...currentPost as BlogPost, 
              updatedAt: new Date().toISOString() 
            }
          : post
      );
      savePosts(updatedPosts);
    } else {
      // Criar novo post
      const newPost: BlogPost = {
        ...currentPost as BlogPost,
        id: Date.now().toString(),
        author: "Sara Pereira",
        date: new Date().toLocaleDateString('pt-BR', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric' 
        }),
        readTime: "5 min",
        category: currentPost.category || "BPO",
        image: currentPost.image || "https://files.catbox.moe/hviug4.png",
        published: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      savePosts([...posts, newPost]);
    }

    resetForm();
  };

  // Excluir post
  const deletePost = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este post?')) {
      const updatedPosts = posts.filter(post => post.id !== id);
      savePosts(updatedPosts);
    }
  };

  // Toggle publicado
  const togglePublished = (id: string) => {
    const updatedPosts = posts.map(post => 
      post.id === id 
        ? { ...post, published: !post.published, updatedAt: new Date().toISOString() }
        : post
    );
    savePosts(updatedPosts);
  };

  // Resetar formulário
  const resetForm = () => {
    setCurrentPost({});
    setIsEditing(false);
  };

  // Editar post
  const editPost = (post: BlogPost) => {
    setCurrentPost(post);
    setIsEditing(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Painel de Blogs</h1>
              <p className="text-gray-600 mt-1">Gerencie os artigos do seu site</p>
            </div>
            <Button 
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Novo Post
            </Button>
          </div>
        </div>

        {/* Formulário de Edição */}
        {isEditing && (
          <Card className="mb-6">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>
                  {currentPost.id ? 'Editar Post' : 'Novo Post'}
                </CardTitle>
                <Button variant="ghost" onClick={resetForm}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Título *
                  </label>
                  <Input
                    value={currentPost.title || ''}
                    onChange={(e) => setCurrentPost({...currentPost, title: e.target.value})}
                    placeholder="Título do post"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Categoria
                  </label>
                  <Input
                    value={currentPost.category || ''}
                    onChange={(e) => setCurrentPost({...currentPost, category: e.target.value})}
                    placeholder="Categoria"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resumo *
                </label>
                <Textarea
                  value={currentPost.excerpt || ''}
                  onChange={(e) => setCurrentPost({...currentPost, excerpt: e.target.value})}
                  placeholder="Resumo do post (aparece na listagem)"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  URL da Imagem
                </label>
                <Input
                  value={currentPost.image || ''}
                  onChange={(e) => setCurrentPost({...currentPost, image: e.target.value})}
                  placeholder="https://exemplo.com/imagem.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Conteúdo *
                </label>
                <Textarea
                  value={currentPost.content || ''}
                  onChange={(e) => setCurrentPost({...currentPost, content: e.target.value})}
                  placeholder="Contúdo completo do post (suporta Markdown)"
                  rows={12}
                />
              </div>

              <div className="flex gap-2">
                <Button onClick={savePost} className="bg-green-600 hover:bg-green-700">
                  <Save className="w-4 h-4 mr-2" />
                  Salvar
                </Button>
                <Button variant="outline" onClick={resetForm}>
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Lista de Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className={`${!post.published ? 'opacity-60' : ''}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{post.category}</p>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => togglePublished(post.id)}
                      className={post.published ? 'text-green-600' : 'text-gray-400'}
                    >
                      {post.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => editPost(post)}
                    className="flex-1"
                  >
                    <Edit2 className="w-3 h-3 mr-1" />
                    Editar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => deletePost(post.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {posts.length === 0 && !isEditing && (
          <div className="text-center py-12">
            <p className="text-gray-500">Nenhum post encontrado. Crie seu primeiro post!</p>
          </div>
        )}
      </div>
    </div>
  );
}
