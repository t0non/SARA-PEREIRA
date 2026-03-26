'use client';

import { Star, Quote } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';

const testimonials = [
  {
    id: 1,
    name: "Gustavo Miranda",
    role: "Head Of Innovation Andrade Miranda Advogados",
    content: `A Sara é uma profissional extraordinária e uma pessoa incrível para se trabalhar. Está sempre por dentro das constantes mudanças que afetam a sua área, e procura entender a fundo como elas podem impactar a empresa.\n\nÉ a profissional que lidera os debates e gerencia a evolução dos projetos com muita leveza e eficiência. Faz uma excelente ponte entre recursos humanos e jurídico, o que é algo raro de acontecer nas empresas.\n\nCertamente é um talento muito valioso para qualquer equipe ou organização, trazendo consigo uma riqueza de conhecimentos e habilidades, além do compromisso com a excelência.`,
    rating: 5,
  }
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="w-full bg-slate-50 py-16 lg:py-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-6">
            O que <span className="text-primary font-semibold">nossos clientes</span> dizem
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A satisfação dos nossos parceiros é o maior reflexo do nosso compromisso com a excelência.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-1 max-w-4xl mx-auto gap-8">
          {testimonials.map((testimonial) => (
            <FadeIn key={testimonial.id} direction="up" delay={0.1}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 relative">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 rotate-180" />
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{testimonial.name}</h3>
                    <p className="text-primary font-medium text-sm mt-1">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-500" />
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4 relative z-10">
                  {testimonial.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-slate-600 leading-relaxed text-lg italic">
                      "{paragraph}"
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
