import Image from "next/image";
import { Quote } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FadeIn } from '@/components/ui/fade-in';

export default function HumanTouchSection() {
  const quoteImage = PlaceHolderImages.find(p => p.id === 'quote-sara');
  const logoImage = PlaceHolderImages.find(p => p.id === 'logo');

  return (
    <section id="diferencial" className="box-border flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-secondary py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto h-full w-full">
        <div className="flex h-full w-full items-center justify-center">
            <div className="relative mx-auto max-w-4xl rounded-lg bg-card p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg px-4">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary/10 -z-10 md:-top-4 md:-left-4 lg:-top-8 lg:-left-6 lg:w-24 lg:h-24" />
                <div className="grid md:grid-cols-3 gap-6 sm:gap-8 items-center overflow-x-hidden">
                    <FadeIn direction="right" className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64">
                        {quoteImage && (
                            <Image
                                src={quoteImage.imageUrl}
                                alt={quoteImage.description}
                                data-ai-hint={quoteImage.imageHint}
                                fill
                                className="rounded-lg object-cover"
                            />
                        )}
                        <div 
                            aria-hidden="true"
                            className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-card to-transparent"
                        />
                    </FadeIn>
                    <FadeIn direction="up" delay={0.2} className="md:col-span-2 space-y-4 text-center md:text-left">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter font-headline text-foreground">
                            Nosso maior diferencial: As Pessoas.
                        </h2>
                        <blockquote className="text-base sm:text-lg text-foreground/80 leading-relaxed italic md:border-l-4 border-primary md:pl-6">
                            "Quem disse que o Departamento Pessoal não cuida de gente? Você pode ter certeza de que vamos sempre priorizar o atendimento aos seus funcionários. Seja líder, executivo ou colaborador, nosso objetivo é que você jamais sinta que o seu DP foi terceirizado."
                        </blockquote>
                        {logoImage ? (
                          <div className="pt-2 flex justify-center md:justify-start">
                            <Image
                                src={logoImage.imageUrl}
                                alt={logoImage.description}
                                width={120}
                                height={24}
                                className="object-contain dark:filter dark:invert w-20 h-auto sm:w-24 sm:h-auto"
                            />
                          </div>
                        ) : (
                          <p className="font-signature text-3xl sm:text-4xl text-foreground pt-2">Sara Pereira</p>
                        )}
                    </FadeIn>
                </div>
                <Quote className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary/10 -z-10 transform rotate-180 md:-bottom-4 md:-right-4 lg:-bottom-8 lg:-right-6 lg:w-24 lg:h-24" />
            </div>
        </div>
      </div>
    </section>
  );
}
