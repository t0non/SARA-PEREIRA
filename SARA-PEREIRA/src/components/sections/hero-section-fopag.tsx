import Image from 'next/image';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';
import { WHATSAPP_LINK } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const stats = [
  { number: "500+", label: "Empresas Atendidas" },
  { number: "10+", label: "Anos de Experiência" },
  { number: "99%", label: "Satisfação" },
  { number: "24/7", label: "Suporte" }
];

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-sara');

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 to-white py-12 lg:py-20">

  {/* ========================================================= */}
  {/* COLOQUE ESTAS DUAS IMAGENS AQUI, LOGO NO COMEÇO DA SECTION */}
  <img 
    src="https://files.catbox.moe/7aurrh.png" 
    alt="" 
    aria-hidden="true"
    className="absolute -bottom-32 -right-20 w-[500px] lg:w-[800px] opacity-30 rotate-45 pointer-events-none"
  />
  {/* ========================================================= */}

  {/* 2. GARANTA QUE O SEU CONTAINER TEM O relative z-10 */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
    
    {/* Metade Esquerda: Textos (Exatamente 50% do espaço) */}
    <div className="w-full lg:w-1/2 flex flex-col justify-start">
      <FadeIn direction="up" className="space-y-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-tight">
              Soluções em <span className="text-primary font-semibold">BPO</span><br />por <span className="text-primary font-semibold">Sara Pereira</span>
            </h1>
            <div className="max-w-2xl">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Meu trabalho é pautado pela <strong>confiabilidade</strong>, <strong>processos transparentes</strong>, 
                <strong>métricas objetivas</strong>, adoção de <strong>tecnologias de ponta</strong> e 
                <strong>suporte contínuo</strong> e pessoal, tudo isso com o objetivo de 
                <strong>impulsionar o seu negócio</strong> de forma consistente e eficiente.
              </p>
            </div>
          </div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-3 shadow-lg shadow-primary/20 rounded-full">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Fale com a Sara
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground/5 text-base px-8 py-3 rounded-full">
              Conhecer Serviços
            </Button>
          </div>
        </div>
      </FadeIn>
    </div>

    {/* Metade Direita: Imagem da Sara (Exatamente 50% do espaço) */}
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
      <FadeIn direction="right" className="relative w-full h-[500px] lg:h-[600px]">
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          <img 
            src="https://files.catbox.moe/jf6gav.png"
            alt="Gêmeas DP - Profissionais de Departamento Pessoal"
            className="w-full h-full object-contain"
          />
          {/* Gradiente overlay para efeito embutido - mais forte */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-50 via-slate-50/80 via-slate-50/40 to-transparent" />
        </div>
      </FadeIn>
    </div>

  </div>
</section>
  );
}
