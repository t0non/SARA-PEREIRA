import Image from 'next/image';
import { ArrowRight, CheckCircle, FileText, Shield, Clock, Users, TrendingUp, Award, Target, BarChart3 } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';
import { WHATSAPP_LINK } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    id: 'dp-terceirizado',
    icon: FileText,
    title: "Terceirização do Departamento Pessoal",
    description: "Gestão completa e terceirizada do DP com processos automatizados e entrega pontual.",
    features: [
      "Processos automatizados",
      "Equipe especializada", 
      "Redução de custos operacionais",
      "Conformidade trabalhista garantida"
    ],
    image: "https://files.catbox.moe/exz3g9.jpg"
  },
  {
    id: 'consultoria-trabalhista',
    icon: Shield,
    title: "Consultoria e auditoria trabalhista", 
    description: "Análise completa da situação trabalhista da empresa com identificação de riscos e oportunidades.",
    features: [
      "Diagnóstico trabalhista",
      "Identificação de passivos",
      "Prevenção de autuações",
      "Plano de regularização"
    ],
    image: "https://files.catbox.moe/cz3d2g.webp"
  },
  {
    id: 'migracao-folha',
    icon: TrendingUp,
    title: "Migração e implementação de sistemas de folha de pagamento",
    description: "Transição suave para sistemas modernos de folha de pagamento com zero perda de dados.",
    features: [
      "Migração de dados segura",
      "Implementação personalizada",
      "Treinamento da equipe",
      "Suporte pós-implementação"
    ],
    image: "https://files.catbox.moe/emdhea.jpg"
  },
  {
    id: 'esocial',
    icon: Users,
    title: "Implantação do eSocial do zero",
    description: "Implementação completa do eSocial desde o planejamento até a operação plena.",
    features: [
      "Análise de impacto",
      "Configuração de eventos",
      "Treinamento completo",
      "Acompanhamento mensal"
    ],
    image: "https://files.catbox.moe/fzxq94.jfif"
  },
  {
    id: 'gestao-contratos',
    icon: Clock,
    title: "Gestão de contratos domésticos",
    description: "Administração completa de empregados domésticos com conformidade garantida.",
    features: [
      "Contratação regularizada",
      "Folha de pagamento mensal",
      "Guia de recolhimento",
      "Rescisão contratual"
    ],
    image: "https://files.catbox.moe/po2wc0.jpg"
  },
  {
    id: 'treinamentos',
    icon: Award,
    title: "Treinamentos corporativos sob medida",
    description: "Capacitação personalizada para equipes de RH e gestores.",
    features: [
      "Gestão de pessoas",
      "Legislação trabalhista",
      "Liderança equilibrada",
      "Comunicação eficaz"
    ],
    image: "https://files.catbox.moe/oz2edw.jpg"
  },
  {
    id: 'mentoria',
    icon: Target,
    title: "Mentoria e cursos especializados",
    description: "Acompanhamento personalizado e cursos focados em gestão de DP.",
    features: [
      "Mentoria individual",
      "Cursos online",
      "Workshops presenciais",
      "Material didático exclusivo"
    ],
    image: "https://files.catbox.moe/dm27fz.jpg"
  },
  {
    id: 'pacotes-servicos',
    icon: BarChart3,
    title: "Montagem de pacotes de serviços",
    description: "Criação de propostas personalizadas com pacotes adaptados às necessidades do cliente.",
    features: [
      "Pleno Controle DP",
      "Master DP",
      "DP Estratégico Premium",
      "Serviços sob medida"
    ],
    image: "https://files.catbox.moe/lrhw7n.jpeg"
  }
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="w-full bg-gradient-to-br from-slate-50 to-white py-16 lg:py-24">
      
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col gap-16">
          
          <FadeIn direction="up" className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforme seu Departamento Pessoal com soluções completas e especializadas
            </p>
          </FadeIn>

          <FadeIn direction="up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group h-full flex flex-col border border-slate-100/50">
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 w-full h-full"
                  />
                </div>
                
                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-foreground mb-4 line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary/10 group rounded-full">
                      Saiba Mais
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </FadeIn>

          <FadeIn direction="up" className="text-center">
            <div className="bg-gradient-to-r from-primary/90 to-primary/80 backdrop-blur-sm rounded-3xl p-16 text-white border border-primary/20">
              <h3 className="text-2xl font-light text-foreground mb-4">
                Pronta para <span className="font-semibold">transformar</span> seu Departamento Pessoal?
              </h3>
              <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                Fale comigo diretamente e descubra como posso otimizar seus processos
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-slate-50 text-base px-8 py-3 rounded-full">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Falar com Sara
                  </a>
                </Button>
                <Button size="lg" className="bg-white text-primary hover:bg-slate-50 text-base px-8 py-3 shadow-md rounded-full">
                  Solicitar Proposta
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
