import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Instagram, Mail, Phone, ArrowUp } from 'lucide-react';
import { Button } from '../ui/button';
import { WHATSAPP_LINK } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FadeIn } from '@/components/ui/fade-in';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const logoImage = PlaceHolderImages.find(p => p.id === 'logo');

  return (
    <footer className="box-border flex min-h-dvh w-full flex-col items-center justify-center bg-secondary py-12 sm:py-16 md:py-20 lg:py-24 text-foreground">
      <FadeIn direction="up" className="container mx-auto flex h-full w-full flex-col items-center justify-center px-4">
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 overflow-x-hidden">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <Link href="/" className="flex items-center">
              {logoImage ? (
                <Image
                    src={logoImage.imageUrl}
                    alt={logoImage.description}
                    width={120}
                    height={24}
                    className="object-contain dark:filter dark:invert w-20 h-auto mx-auto md:mx-0"
                />
              ) : (
                <span className="text-lg sm:text-xl font-bold font-headline text-foreground mx-auto md:mx-0">DP Estratégico</span>
              )}
            </Link>
            <p className="text-sm text-foreground/80">
              Transformando o Departamento Pessoal em um parceiro estratégico para o seu negócio.
            </p>
          </div>
          <div className="md:mx-auto text-center md:text-left">
            <h3 className="font-semibold mb-4 font-headline text-foreground">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:sa.silva.pereira88@gmail.com" className="relative group">
                  <span>sa.silva.pereira88@gmail.com</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="relative group">
                  <span>+55 (31) 9138-7705</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="md:ml-auto text-center md:text-left">
            <h3 className="font-semibold mb-4 font-headline text-foreground">Siga-nos</h3>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a href="https://www.linkedin.com/in/sara-pereira-dp/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/sarapereiradp/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-foreground/60 w-full gap-4">
          <p>&copy; {currentYear && `${currentYear} `}DP Estratégico. Todos os direitos reservados.</p>
          <Button asChild variant="outline" size="icon" className="bg-transparent border-foreground/20 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary">
            <a href="#home">
              <ArrowUp className="w-4 h-4"/>
              <span className="sr-only">Voltar ao topo</span>
            </a>
          </Button>
        </div>
      </FadeIn>
    </footer>
  );
}
