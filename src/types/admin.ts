// Tipos para o painel administrativo

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  published: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  metaTitle?: string;
  metaDescription?: string;
  tags?: string[];
}

export interface SiteConfig {
  title: string;
  description: string;
  logo: string;
  favicon: string;
  primaryColor: string;
  secondaryColor: string;
  contactEmail: string;
  contactPhone: string;
  whatsappNumber: string;
  address: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  seo: {
    defaultMetaTitle: string;
    defaultMetaDescription: string;
    googleAnalyticsId?: string;
  };
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor';
  avatar?: string;
  createdAt: string;
  lastLoginAt?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  postCount: number;
}

export interface DashboardStats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalViews: number;
  recentPosts: BlogPost[];
  popularPosts: BlogPost[];
}

export interface MediaFile {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'video' | 'document';
  size: number;
  createdAt: string;
}
