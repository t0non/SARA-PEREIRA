import { XCircle } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FadeIn } from '@/components/ui/fade-in';

const painPoints = [
    { text: "Burocracia excessiva que trava a operação." },
    { text: "Risco constante de passivos trabalhistas." },
    { text: "Perda de tempo e foco do time estratégico." },
];

export default function ProblemSection() {
  const problemImage = PlaceHolderImages.find(p => p.id === 'problem-sara');

  return (
    <section id="problema" className="w-full box-border bg-secondary py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto h-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-16 gap-y-8 md:items-end px-4 overflow-x-hidden">
            
            <FadeIn direction="up" className="order-1 md:order-2 md:col-start-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl lg:text-5xl font-medium tracking-tighter text-foreground font-headline text-center md:text-left">O seu DP atual é um gargalo de crescimento?</h2>
            </FadeIn>

            <FadeIn direction="right" className="relative h-[350px] sm:h-[400px] w-full max-w-sm mx-auto md:h-[550px] lg:h-full order-2 md:order-1 md:row-span-2">
                {problemImage && (
                    <Image
                        src={problemImage.imageUrl}
                        alt={problemImage.description}
                        data-ai-hint={problemImage.imageHint}
                        fill
                        className="object-contain object-bottom"
                    />
                )}
                <div 
                  aria-hidden="true" 
                  className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-secondary via-secondary to-transparent"
                />
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="flex flex-col gap-6 sm:gap-8 text-center md:text-left order-3 md:order-3 md:col-start-2">
                <div className="space-y-4">
                    <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-lg mx-auto md:mx-0">
                        Se a sua empresa ainda enxerga o Departamento Pessoal apenas como um gerador de burocracia, é hora de mudar esse jogo.
                    </p>
                    <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 inline-block text-left">
                        {painPoints.map((point, index) => (
                            <li key={index} className="flex items-center gap-3 text-lg">
                                <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-destructive flex-shrink-0" />
                                <span className="text-base sm:text-lg text-foreground/80">{point.text}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-6 sm:mt-8 text-base sm:text-lg text-foreground/70 leading-relaxed max-w-lg mx-auto md:mx-0">
                        Manter um DP ineficiente consome recursos, gera riscos e rouba o tempo que sua equipe deveria usar para focar no que realmente importa: <strong>fazer sua empresa crescer.</strong>
                    </p>
                </div>
            </FadeIn>

        </div>
      </div>
    </section>
  );
}
