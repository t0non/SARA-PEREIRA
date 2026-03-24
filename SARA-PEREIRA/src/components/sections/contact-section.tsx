import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';
import { FadeIn } from '@/components/ui/fade-in';

export default function ContactSection() {
  return (
    <section id="contato" className="box-border flex w-full flex-col items-center justify-center bg-secondary pb-8 sm:pb-10 md:pb-20 pt-0">
      <div className="container mx-auto h-full w-full">
        <div className="flex h-full w-full items-center justify-center">
            <FadeIn direction="up" className="text-center max-w-2xl mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tighter font-headline text-foreground">Quer um DP mais estratégico, eficiente e seguro?</h2>
                <p className="mt-4 text-base sm:text-lg text-foreground/70 leading-relaxed">
                    Vamos juntos transformar o futuro do seu negócio! Fale comigo e descubra como posso te ajudar.
                </p>
                <Button asChild size="default" className="mt-6 sm:mt-8 text-base sm:text-lg group w-full sm:w-auto">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                        Falar com a Sara no WhatsApp agora
                        <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                </Button>
            </FadeIn>
        </div>
      </div>
    </section>
  );
}
