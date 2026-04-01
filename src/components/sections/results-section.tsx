import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, TrendingUp, Zap } from "lucide-react";
import { FadeIn } from '@/components/ui/fade-in';

const results = [
    {
        icon: TrendingUp,
        title: "Recuperação de Dinheiro",
        description: "Análise criteriosa em impostos da folha para recuperar créditos trabalhistas."
    },
    {
        icon: ShieldCheck,
        title: "Proteção Jurídica",
        description: "Transição de PJ para CLT mitigando riscos e garantindo compliance."
    },
    {
        icon: Zap,
        title: "Eficiência Operacional",
        description: "Automatização de processos e criação de rotinas estruturadas para reduzir tempo e custos."
    },
]

export default function ResultsSection() {
  return (
    <section id="resultados" className="box-border w-full bg-secondary py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto h-full w-full">
        <div className="flex h-full w-full flex-col items-center justify-center">
            <FadeIn direction="up" className="text-center max-w-2xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tighter font-headline text-foreground">Resultados práticos que impactam direto no seu caixa</h2>
            </FadeIn>
            <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-4">
                {results.map((item, i) => (
                    <FadeIn key={item.title} direction="up" delay={i * 0.15}>
                        <Card className="bg-card border-t-4 border-primary rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full p-4 sm:p-6">
                            <CardHeader className="flex flex-col items-start gap-3 sm:gap-4 p-0">
                                <div className="bg-primary/10 p-3 sm:p-5 rounded-full">
                                    <item.icon className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
                                </div>
                                <div>
                                    <CardTitle className="font-headline text-foreground text-lg sm:text-xl">{item.title}</CardTitle>
                                    <CardDescription className="text-sm sm:text-base text-foreground/70 mt-2 leading-relaxed">{item.description}</CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    </FadeIn>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
