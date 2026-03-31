import Image from 'next/image';
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Clock } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';
import { WHATSAPP_LINK } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const benefits = [
  {
    icon: TrendingUp,
    title: "Crescimento Sustentável",
    description: "Transforme seu DP em um motor de crescimento para o negócio"
  },
  {
    icon: Shield, 
    title: "Segurança e Conformidade",
    description: "Processos 100% compatíveis com a legislação trabalhista"
  },
  {
    icon: Clock,
    title: "Eficiência Comprovada",
    description: "Reduza tempo e custos com automação inteligente"
  }
];

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-sara');

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 80%, hsl(var(--accent) 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          
          {/* Content */}
          <FadeIn direction="up" className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-tight">
                Transforme seu <span className="font-semibold text-primary">Departamento Pessoal</span>
                <br />
                em vantagem competitiva
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                Especialistas em BPO com mais de 10 anos de experiência. 
                Otimizamos processos, reduzimos custos e liberamos seu time para focar no estratégico.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <FadeIn key={benefit.title} direction="up" delay={0.2 + index * 0.1}>
                  <div className="text-center lg:text-left space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto lg:mx-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* CTA */}
            <FadeIn direction="up" delay={0.5} className="pt-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 shadow-lg shadow-primary/30">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Falar com Especialista
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground/5 text-lg px-8 py-4">
                  Conhecer Serviços
                </Button>
              </div>
            </FadeIn>
          </FadeIn>

          {/* Image */}
          <FadeIn direction="right" className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            
            {/* Image container with frame */}
            <div className="relative">
              {/* Background frame */}
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl transform rotate-2" />
              
              {/* Main image */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-foreground/10">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    data-ai-hint={heroImage.imageHint}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                )}
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-30" />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                10+ Anos
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-3 py-2 rounded-full text-xs font-semibold shadow-lg">
                Especialista
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
