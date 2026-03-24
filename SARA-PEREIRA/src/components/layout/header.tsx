"use client";

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { WHATSAPP_LINK } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#blog', label: 'Blog' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const logoImage = PlaceHolderImages.find(p => p.id === 'logo');

  React.useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
        "fixed top-0 left-0 right-0 z-[998] w-full",
    )}>
      <div className={cn(
          "flex h-16 items-center justify-between px-24 transition-all duration-300 w-full",
          isScrolled 
            ? "bg-primary shadow-lg border border-primary/20" 
            : "bg-primary shadow-lg border border-primary/20"
      )}>
        <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              {logoImage ? (
                <Image
                    src={logoImage.imageUrl}
                    alt={logoImage.description}
                    width={120}
                    height={24}
                    className="object-contain w-20 h-auto sm:w-28 sm:h-auto"
                    priority
                />
              ) : (
                <span className="text-xl font-bold font-headline text-primary-foreground">Sara Pereira</span>
              )}
            </Link>
        </div>
        
        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <div className="whitespace-nowrap text-sm sm:text-base font-medium text-primary-foreground hover:text-primary-foreground/80 transition-colors py-2 cursor-pointer">
                {link.label}
              </div>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[999]">
                <div className="py-2">
                  {link.label === 'Serviços' && (
                    <div className="py-1">
                      <div className="px-3 py-2 text-xs font-semibold text-gray-500 border-b border-gray-100">Serviços</div>
                      <Link href="#dp-terceirizado" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary whitespace-nowrap">
                        Terceirização DP
                      </Link>
                      <Link href="#consultoria-trabalhista" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary whitespace-nowrap">
                        Consultoria Trabalhista
                      </Link>
                      <Link href="#migracao-folha" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary whitespace-nowrap">
                        Migração de Sistemas de Folha
                      </Link>
                      <Link href="#esocial" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary whitespace-nowrap">
                        eSocial
                      </Link>
                    </div>
                  )}
                  
                  {link.label === 'Sobre' && (
                    <div className="py-1">
                      <div className="px-3 py-2 text-xs font-semibold text-gray-500 border-b border-gray-100">Sobre</div>
                      <Link href="#sobre" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary whitespace-nowrap">
                        Minha História
                      </Link>
                      <Link href="#sobre" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary whitespace-nowrap">
                        Diferenciais
                      </Link>
                    </div>
                  )}
                  
                  {link.label === 'Blog' && (
                    <div className="py-1">
                      <div className="px-3 py-2 text-xs font-semibold text-gray-500 border-b border-gray-100">Blog</div>
                      <Link href="#blog" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary whitespace-nowrap">
                        Artigos
                      </Link>
                      <Link href="#blog" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary whitespace-nowrap">
                        Categorias
                      </Link>
                    </div>
                  )}
                  
                  {link.label === 'Contato' && (
                    <div className="py-1">
                      <div className="px-3 py-2 text-xs font-semibold text-gray-500 border-b border-gray-100">Contato</div>
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary whitespace-nowrap">
                        WhatsApp
                      </a>
                      <Link href="#contato" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary whitespace-nowrap">
                        Formulário
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="flex items-center">
          <Button asChild className="hidden md:flex group text-xs sm:text-sm px-3 sm:px-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Fale com a Sara
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-background">
              <div className="p-6">
                 <div className="flex items-center justify-between mb-8">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                      {logoImage ? (
                        <Image
                            src={logoImage.imageUrl}
                            alt={logoImage.description}
                            width={120}
                            height={24}
                            className="object-contain w-20 h-auto"
                        />
                      ) : (
                        <span className="text-lg font-bold font-headline text-foreground">Sara Pereira</span>
                      )}
                    </Link>
                 </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      {link.label}
                    </Link>
                  ))}
                   <Button asChild size="default" className="mt-4 group text-sm w-full">
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                          Fale com a Sara
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </a>
                   </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
