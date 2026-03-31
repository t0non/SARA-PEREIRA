import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { WHATSAPP_LINK } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, CheckCircle, TrendingUp, Zap } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';

const FloatingCard = ({ iconSrc, text, className }: { iconSrc: string, text: string, className?: string }) => {
    return (
        <div className={`absolute bg-white/95 backdrop-blur-md border border-white/20 rounded-xl lg:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-3 py-2 lg:px-5 lg:py-3 flex items-center gap-2 lg:gap-3 z-20 ${className}`}>
            <Image src={iconSrc} alt="Ícone" width={24} height={24} className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6" />
            <span className="text-[12px] lg:text-[15px] font-bold text-slate-900 tracking-tight">{text}</span>
        </div>
    )
}

export default function HeroSection() {
  return (
    <section id="home" className="relative box-border flex w-full min-h-dvh flex-col items-center justify-center bg-secondary pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background/5 to-transparent z-0"
      />

      <div className="container h-full w-full">
        <div className="flex h-full w-full items-center">
            <div className="grid w-full lg:grid-cols-2 gap-6 lg:gap-16 items-center z-10 overflow-x-hidden">
                <FadeIn direction="up" className="space-y-6 text-center lg:text-left">
                    
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-medium tracking-tighter text-foreground font-headline leading-tight">
                        Transforme seu DP em um <span className="text-primary italic">diferencial competitivo</span>.
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Ajudo empresas a otimizar processos, reduzir custos operacionais e transformar o DP em um setor 100% estratégico e alinhado ao crescimento do negócio.
                    </p>
                    <div className="flex flex-col gap-4 justify-center lg:justify-start pt-4">
                        <Button asChild size="lg" className="text-base sm:text-lg group shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 w-full sm:w-auto">
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                            Quero um DP Estratégico Agora
                            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </a>
                        </Button>
                    </div>
                </FadeIn>

                <div className="relative h-[50vh] sm:h-[60vh] w-full max-w-sm lg:h-[85vh] lg:max-w-none mx-auto mt-6 lg:mt-0">
                    <FadeIn direction="up" delay={0.2} className="relative w-full h-full">
                        <Image
                            src="https://files.catbox.moe/n1wkuc.png"
                            alt="Foto da Sara Pereira - Especialista em DP"
                            fill
                            className="object-contain object-bottom"
                            priority
                        />
                    </FadeIn>
                    <div 
                      aria-hidden="true" 
                      className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-secondary via-secondary to-transparent"
                    />
                    <FadeIn direction="up" delay={0.4} className="absolute inset-0 z-20 pointer-events-none">
                        <FloatingCard iconSrc="https://files.catbox.moe/7aurrh.png" text="Redução de Custos" className="flex bottom-[10%] left-[-0.5rem] sm:-left-2 lg:-left-12 xl:-left-20 pointer-events-auto" />
                        <FloatingCard iconSrc="https://files.catbox.moe/7aurrh.png" text="10+ Anos" className="flex top-[25%] right-[-0.5rem] sm:-right-2 lg:-right-8 xl:-right-16 pointer-events-auto" />
                        <FloatingCard iconSrc="https://files.catbox.moe/7aurrh.png" text="Eficiência" className="flex top-[5%] left-[-0.5rem] sm:-left-2 lg:-left-6 xl:-left-12 pointer-events-auto" />
                    </FadeIn>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
