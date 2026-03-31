import Image from 'next/image';
import { CheckCircle, Clock, Shield, Users, TrendingUp, BarChart3 } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';
import { WHATSAPP_LINK } from '@/lib/constants';

const services = [
  {
    icon: CheckCircle,
    title: "Folha de Pagamento",
    description: "Gestão completa da folha de pagamento com processos automatizados, cálculos precisos e entrega pontual. Reduza erros e otimize o tempo da sua equipe.",
    features: ["Cálculos automáticos", "Emissão de holerites", "Relatórios detalhados", "Conformidade trabalhista"]
  },
  {
    icon: Shield,
    title: "Gestão de Benefícios",
    description: "Administração completa de benefícios corporativos com foco em satisfação dos colaboradores e controle de custos para a empresa.",
    features: ["Plano de saúde", "Vale transporte", "Seguros", "Programas de bem-estar"]
  },
  {
    icon: Clock,
    title: "Controle de Ponto",
    description: "Sistema moderno de controle de ponto integrado à folha, garantindo precisão nos cálculos e conformidade com a legislação.",
    features: ["Relógios de ponto", "App mobile", "Jornada flexível", "Integração completa"]
  }
];

const howItWorks = [
  {
    step: "1",
    title: "Diagnóstico",
    description: "Analisamos seus processos atuais e identificamos oportunidades de melhoria."
  },
  {
    step: "2", 
    title: "Planejamento",
    description: "Criamos um plano personalizado com as soluções ideais para seu negócio."
  },
  {
    step: "3",
    title: "Implementação",
    description: "Instalamos e configuramos todos os sistemas com treinamento da equipe."
  },
  {
    step: "4",
    title: "Suporte Contínuo",
    description: "Acompanhamos e otimizamos os processos continuamente."
  }
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="w-full bg-gradient-to-br from-slate-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn direction="up" className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 mb-6">
            Soluções em <span className="font-semibold text-primary">BPO</span> para empresas
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Transforme sua gestão de Departamento Pessoal com processos eficientes, 
            tecnologia de ponta e resultados comprovados.
          </p>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {services.map((service, index) => (
            <FadeIn key={service.title} direction="up" delay={index * 0.1}>
              <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 p-8 lg:p-10 border border-slate-100 hover:border-primary/20">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* How It Works */}
        <FadeIn direction="up" className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 mb-6">
              Como <span className="font-semibold">Funciona</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Um processo simples e transparente para transformar sua gestão
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-semibold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn direction="up" className="text-center">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 lg:p-16 text-white">
            <h2 className="text-3xl sm:text-4xl font-light mb-6">
              Pronto para transformar sua gestão?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Fale com nossos especialistas e descubra como podemos otimizar seus processos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-slate-50 text-lg px-8 py-4">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Falar com Especialista
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Solicitar Proposta
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
