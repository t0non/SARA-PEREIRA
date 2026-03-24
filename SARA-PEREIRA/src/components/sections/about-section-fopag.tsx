import Image from 'next/image';
import { CheckCircle, Target, Users, Award } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const advantages = [
  {
    icon: CheckCircle,
    title: "Redução de erros operacionais",
    description: "Processos automatizados e validados eliminam falhas humanas e garantem precisão."
  },
  {
    icon: Target,
    title: "Mais foco no estratégico e menos no operacional",
    description: "Sua equipe se concentra no core business enquanto cuidamos da gestão."
  },
  {
    icon: Users,
    title: "Simplicidade e clareza dos processos",
    description: "Metodologia clara e objetiva com entregas definidas e mensuráveis."
  },
  {
    icon: Award,
    title: "Gestão contínua dos custos",
    description: "Controle total dos custos para reinvestimento em melhorias no negócio."
  },
  {
    icon: CheckCircle,
    title: "Metrificação e Atendimento Personalizado",
    description: "Tomadas de decisões executivas e de gestão baseadas em dados reais."
  }
];

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-sara');

  return (
    <section id="sobre" className="w-full bg-white py-16 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-stretch">
          
          {/* Coluna da esquerda (textos/cards) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <FadeIn direction="up" className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-8">
                  Sobre <span className="text-primary font-semibold">Sara Pereira</span>
                </h2>
                <div className="max-w-2xl">
                  <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
                    Com mais de 10 anos de experiência em gestão de Departamento Pessoal, 
                    sou especialista em transformar processos complexos em soluções eficientes que 
                    impulsionam o crescimento dos meus clientes. Ofereço atendimento pessoal e dedicado.
                  </p>
                </div>
              </div>

              {/* Advantages Grid */}
              <div className="flex flex-col gap-4">
                {advantages.map((advantage, index) => (
                  <FadeIn key={advantage.title} direction="up" delay={0.2 + index * 0.05}>
                    <div className="flex gap-4 py-2">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <advantage.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-base text-foreground mb-1">
                          {advantage.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Coluna da direita (imagem) */}
          <div className="w-full lg:w-1/2 flex items-start justify-center -mt-48">
            <FadeIn direction="right" className="relative w-full">
              <div className="relative w-full rounded-3xl overflow-hidden">
                <img 
                  src="https://files.catbox.moe/p9ibkr.png"
                  alt="Sara Pereira - Especialista em Departamento Pessoal"
                  className="w-full max-w-xl lg:max-w-2xl xl:max-w-3xl object-contain"
                />
                {/* Gradiente overlay para efeito embutido - igual à primeira sessão */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white via-white/80 via-white/40 to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
