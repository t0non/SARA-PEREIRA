import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Instagram, Mail, Phone, ArrowUp, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { WHATSAPP_LINK } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FadeIn } from '@/components/ui/fade-in';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const logoImage = PlaceHolderImages.find(p => p.id === 'logo');

  return (
    <footer className="relative w-full bg-slate-950 text-slate-100 pt-24 pb-12 overflow-hidden border-t-4 border-primary">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -top-60 -left-60 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <FadeIn direction="up" className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 max-w-7xl mx-auto">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            <Link href="/" className="inline-block hover:scale-[1.02] transition-transform">
              {logoImage ? (
                <Image
                    src={logoImage.imageUrl}
                    alt={logoImage.description}
                    width={180}
                    height={48}
                    className="object-contain"
                />
              ) : (
                <span className="text-2xl font-bold font-headline text-slate-900 tracking-tight">Sara Pereira <span className="text-primary">DP</span></span>
              )}
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm text-lg font-light">
              Especialista em Departamento Pessoal Estratégico. Transformando a gestão de pessoas em um diferencial competitivo para o seu negócio através de consultoria e terceirização.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-sm font-medium text-slate-500 uppercase tracking-widest mr-2">Siga-me</span>
              <a href="https://www.linkedin.com/in/sara-pereira-dp/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group hover:bg-primary transition-all duration-300 border border-primary/20 hover:shadow-lg hover:shadow-primary/20">
                <Linkedin className="w-5 h-5 group-hover:text-white transition-colors" />
              </a>
              <a href="https://www.instagram.com/sarapereiradp/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group hover:bg-primary transition-all duration-300 border border-primary/20 hover:shadow-lg hover:shadow-primary/20">
                <Instagram className="w-5 h-5 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Quick Links */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            <h3 className="text-lg font-semibold text-white tracking-wide">Navegação</h3>
            <ul className="space-y-4">
              {['Home', 'Sobre', 'Serviços', 'Blog', 'Contato'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-primary transition-colors flex items-center gap-3 group w-max py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Contact Details */}
          <div className="flex flex-col gap-8 lg:col-span-3">
            <h3 className="text-lg font-semibold text-white tracking-wide">Fale Diretamente</h3>
            <ul className="space-y-6">
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0 border border-white/5 group-hover:border-primary">
                    <Phone className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">WhatsApp</p>
                    <p className="text-slate-400 text-sm mt-0.5">+55 (31) 9138-7705</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:sa.silva.pereira88@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0 border border-white/5 group-hover:border-primary">
                    <Mail className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">E-mail</p>
                    <p className="text-slate-400 text-sm mt-0.5 break-all">sa.silva.pereira88@gmail.com</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-4 group">
                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-medium text-white">Atendimento</p>
                    <p className="text-slate-400 text-sm mt-0.5">Online para todo o Brasil</p>
                  </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
          <p className="text-slate-500 text-sm text-center md:text-left font-light">
            &copy; {currentYear} <span className="font-medium text-slate-400">Sara Pereira DP Estratégico</span>. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-600 text-sm hidden sm:block">Foco em Resultados</span>
            <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full w-12 h-12 bg-white/5 border-white/10 text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-md"
                asChild
            >
              <Link href="#home">
                <ArrowUp className="w-5 h-5" />
                <span className="sr-only">Voltar ao topo</span>
              </Link>
            </Button>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
