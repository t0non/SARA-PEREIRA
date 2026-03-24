import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import type { Package } from '@/lib/types';
import { WHATSAPP_LINK } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { FadeIn } from '@/components/ui/fade-in';

const packages: Package[] = [
  {
    name: "Pleno Controle DP",
    price: "Ideal para começar",
    description: "Para pequenas empresas que precisam de um DP funcional e em conformidade.",
    features: [
      "Processamento de folha",
      "Gestão de benefícios básicos",
      "Obrigações legais (eSocial)",
      "Suporte operacional"
    ],
    cta: "Quero o Pleno"
  },
  {
    name: "Master DP",
    price: "O mais popular",
    description: "Para empresas em crescimento que buscam otimização e mais controle.",
    features: [
      "Tudo do Pleno",
      "Relatórios gerenciais",
      "Otimização de processos",
      "Consultoria pontual"
    ],
    cta: "Quero o Master"
  },
  {
    name: "DP Estratégico Premium",
    price: "Solução completa",
    description: "Para empresas que veem o DP como um parceiro estratégico essencial.",
    features: [
      "Tudo do Master",
      "Análise de dados (Analytics)",
      "Planejamento estratégico de RH",
      "Consultoria dedicada"
    ],
    cta: "Quero o Premium"
  }
];

export default function PackagesSection() {
  return (
    <section id="pacotes" className="box-border flex min-h-dvh w-full flex-col items-center justify-center bg-secondary py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto h-full w-full">
        <div className="flex h-full w-full flex-col items-center justify-center">
            <FadeIn direction="up" className="text-center max-w-2xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tighter font-headline text-foreground">Pacotes flexíveis desenhados para a sua realidade</h2>
            <p className="mt-4 text-base sm:text-lg text-foreground/70 leading-relaxed">
                Não entregamos soluções engessadas. Antes de mais nada, focamos em entender quais são as suas dores e como podemos ajudar. Trabalhamos com propostas personalizadas e planos escaláveis.
            </p>
            </FadeIn>
            <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center px-4 pt-8">
            {packages.map((pkg, index) => (
                <FadeIn key={pkg.name} direction="up" delay={index * 0.15} className="h-full">
                    <Card className={cn(
                        "flex flex-col rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-full bg-card", 
                        index === 1 && 'border-2 border-primary shadow-primary/20 lg:scale-105 relative'
                    )}>
                    {index === 1 && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                            Mais Escolhido
                        </div>
                    )}
                    <CardHeader className="text-center p-4 sm:p-6 lg:p-8">
                        <CardTitle className="text-xl sm:text-2xl font-headline text-foreground">{pkg.name}</CardTitle>
                        <CardDescription className="text-primary font-semibold">{pkg.price}</CardDescription>
                        <p className="text-foreground/70 pt-2">{pkg.description}</p>
                    </CardHeader>
                    <CardContent className="flex-1 px-4 sm:px-6 lg:px-8">
                        <ul className="space-y-4">
                        {pkg.features.map(feature => (
                            <li key={feature} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <span className="text-foreground/90">{feature}</span>
                            </li>
                        ))}
                        </ul>
                    </CardContent>
                    <CardFooter className="p-4 sm:p-6 lg:p-8">
                        <Button asChild size="default" className={cn("w-full text-sm sm:text-base", index !== 1 && 'bg-accent hover:bg-accent/90')}>
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">{pkg.cta}</a>
                        </Button>
                    </CardFooter>
                    </Card>
                </FadeIn>
            ))}
            </div>
            <p className="text-center text-sm text-foreground/60 mt-12">
                <strong>Nota de Transparência:</strong> Nossa precificação é baseada na quantidade de funcionários e particularidades do seu CNPJ, tudo formalizado em contrato para sua total segurança.
            </p>
        </div>
      </div>
    </section>
  );
}
