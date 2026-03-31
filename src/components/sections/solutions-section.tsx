import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, FileText, GitBranchPlus, GraduationCap } from "lucide-react";
import { FadeIn } from '@/components/ui/fade-in';

const solutions = [
    {
        icon: Briefcase,
        title: "Terceirização de DP",
        content: "Cuidamos da sua folha de ponta a ponta e de todas as obrigações legais, garantindo gestão completa sem a necessidade de um time interno."
    },
    {
        icon: FileText,
        title: "Consultoria e Auditoria",
        content: "Suporte especializado e orientações baseadas na legislação vigente para dar segurança, agilidade e precisão ao seu DP."
    },
    {
        icon: GitBranchPlus,
        title: "Migração e Implantação",
        content: "Te ajudo a migrar sistemas de folha ou implantar o eSocial do zero (desde o diagnóstico até o envio de eventos), com total segurança e sem retrabalho."
    },
    {
        icon: GraduationCap,
        title: "Treinamentos e Mentorias",
        content: "Cursos sob medida para capacitar sua equipe em eSocial, legislação e boas práticas."
    }
]

export default function SolutionsSection() {
  return (
    <section id="solucoes" className="box-border flex min-h-dvh w-full flex-col items-center justify-center bg-secondary py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto h-full w-full">
        <div className="flex h-full w-full flex-col items-center justify-center">
            <FadeIn direction="up" className="text-center max-w-2xl mx-auto border-b border-primary/20 pb-4 px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tighter font-headline text-foreground">Soluções inteligentes para um DP eficiente e seguro</h2>
            </FadeIn>
            <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-4">
                {solutions.map((solution, i) => (
                    <FadeIn key={solution.title} direction="up" delay={i * 0.15}>
                        <Card className="text-left bg-card p-4 sm:p-6 rounded-lg h-full shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary">
                            <CardHeader className="flex flex-row items-start gap-3 sm:gap-4 p-0">
                                <div className="bg-primary/10 p-3 sm:p-4 rounded-full">
                                <solution.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                                </div>
                                <div>
                                    <CardTitle className="font-headline text-lg sm:text-xl text-foreground">{solution.title}</CardTitle>
                                    <CardDescription className="mt-2 text-sm sm:text-base text-foreground/70 leading-relaxed">{solution.content}</CardDescription>
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
