import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

import { FadeIn } from '@/components/ui/fade-in';

const benefits = [
    {
        title: "Redução de custos operacionais,",
        description: "eliminando encargos trabalhistas, despesas com infraestrutura, equipamentos e treinamentos."
    },
    {
        title: "Transferência de responsabilidade,",
        description: "garantindo que todas as obrigações trabalhistas sejam cumpridas pelo contratado."
    },
    {
        title: "Mão de obra altamente especializada,",
        description: "aumentando a eficiência, reduzindo passivos e minimizando riscos trabalhistas."
    },
    {
        title: "Mais tempo para crescer,",
        description: "pois sua equipe pode focar no que realmente importa, enquanto o DP é gerenciado com segurança e organização."
    }
];

export default function WhyOutsourceSection() {
    const outsourceImage = PlaceHolderImages.find(p => p.id === 'why-outsource-image');

    return (
        <section id="terceirizar" className="box-border w-full bg-secondary py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="container mx-auto">
                <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tighter font-headline text-foreground">Por que terceirizar o DP?</h2>
                </FadeIn>
                <div className="grid lg:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-12 items-center px-4 overflow-x-hidden">
                    <FadeIn direction="right" className="relative h-80 sm:h-96 w-full max-w-sm mx-auto md:h-[550px] lg:h-[700px] lg:max-w-none">
                        {outsourceImage && (
                            <Image
                                src={outsourceImage.imageUrl}
                                alt={outsourceImage.description}
                                data-ai-hint={outsourceImage.imageHint}
                                fill
                                className="object-contain object-bottom"
                            />
                        )}
                        <div 
                            aria-hidden="true" 
                            className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-secondary via-secondary to-transparent"
                        />
                    </FadeIn>
                    <div className="text-center lg:text-left">
                        <ul className="space-y-6 sm:space-y-8 inline-block text-left">
                            {benefits.map((item, index) => (
                                <FadeIn key={index} direction="up" delay={index * 0.15}>
                                    <li className="flex items-start gap-3 sm:gap-4">
                                        <Image
                                            src="https://files.catbox.moe/7aurrh.png"
                                            alt="Ícone de check"
                                            width={24}
                                            height={24}
                                            className="flex-shrink-0 mt-1 w-5 h-5 sm:w-6 sm:h-6"
                                        />
                                        <div>
                                            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                                                <strong className="text-foreground font-semibold">{item.title}</strong> {item.description}
                                            </p>
                                        </div>
                                    </li>
                                </FadeIn>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
