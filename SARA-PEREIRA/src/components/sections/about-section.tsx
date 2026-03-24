import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FadeIn } from '@/components/ui/fade-in';

const authorityPoints = [
    "Criação de DPs do zero e reestruturação completa de times.",
    "Implantação do eSocial do zero e internalização contábil.",
    "Migrações seguras de PJ para CLT e de sistemas de folha de pagamento."
]

export default function AboutSection() {
    const aboutImage = PlaceHolderImages.find(p => p.id === 'about-sara');

    return (
        <section id="sobre" className="relative box-border w-full bg-foreground py-12 sm:py-16 md:py-20 lg:py-24 text-background overflow-clip">
          <div className="container relative mx-auto h-full w-full">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-8 lg:items-end px-4 overflow-x-hidden">
                
                <FadeIn direction="up" className="lg:col-start-2 text-center lg:text-left order-1 lg:order-none">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tighter font-headline">
                        <span className="text-primary">Mais de 10 anos</span> de experiência blindando e escalando empresas.
                    </h2>
                </FadeIn>
    
                <FadeIn direction="right" className="relative h-[350px] sm:h-[450px] w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 md:h-[550px] lg:h-[700px] lg:col-start-1 lg:row-start-1 lg:row-span-2 flex items-end justify-center order-2 lg:order-none">
                    {aboutImage && (
                        <Image
                            src={aboutImage.imageUrl}
                            alt={aboutImage.description}
                            data-ai-hint={aboutImage.imageHint}
                            fill
                            className="object-contain object-bottom"
                        />
                    )}
                    <div 
                      aria-hidden="true" 
                      className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-foreground via-foreground to-transparent"
                    />
                </FadeIn>
                
                <FadeIn direction="up" delay={0.2} className="lg:col-start-2 space-y-6 text-center lg:text-left order-3 lg:order-none">
                    <div className="text-base sm:text-lg text-background/80 space-y-4 leading-relaxed">
                        <p className="max-w-lg mx-auto lg:mx-0">
                           Olá, eu sou a Sara! Trago na bagagem mais de uma década de atuação com folha de pagamento de ponta a ponta, legislação trabalhista e relações sindicais. Já atuei em startups, multinacionais e empresas de médio e grande porte.
                        </p>
                        <ul className="space-y-3 pt-2 inline-block text-left max-w-lg">
                           {authorityPoints.map((point, i) => (
                             <li key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-1" />
                                <span className="text-sm sm:text-base">{point}</span>
                             </li>
                           ))}
                        </ul>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <Button asChild variant="outline" className="border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground group text-sm sm:text-base w-full sm:w-auto">
                            <a href="#solucoes">
                                Conhecer Minha Metodologia
                                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </a>
                        </Button>
                    </div>
                </FadeIn>
            </div>

          </div>
        </section>
      );
}
