import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, MapPin, Send } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';
import { FadeIn } from '@/components/ui/fade-in';

export default function ContactSection() {
  return (
    <section id="contato" className="w-full bg-white py-16 lg:py-24">
      
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col gap-16">
          
          {/* Header */}
          <FadeIn direction="up" className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Quer um DP mais estratégico, eficiente e seguro? Vamos juntos transformar o futuro do seu negócio!
            </p>
          </FadeIn>

          {/* Contact Content */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left Column - Contact Info */}
            <div className="w-full lg:w-1/2">
              <FadeIn direction="up" className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Vamos conversar?
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Fale comigo diretamente e descubra como posso otimizar seus processos de Departamento Pessoal.
                  </p>
                </div>

                {/* Contact Items */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-100/50">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Telefone</h4>
                      <p className="text-muted-foreground">(31) 91387-705</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-100/50">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">E-mail</h4>
                      <p className="text-muted-foreground">contato@sarapereira.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-100/50">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Localização</h4>
                      <p className="text-muted-foreground">São Paulo - SP</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600 text-base px-8 py-3 shadow-lg shadow-orange-500/30 rounded-full w-full">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Falar com a Sara no WhatsApp
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </FadeIn>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-full lg:w-1/2">
              <FadeIn direction="up" className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-100/50 p-8 lg:p-10">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Envie sua mensagem
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white/60"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white/60"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white/60"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white/60"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Serviço de interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white/60"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="dp-terceirizado">Terceirização do Departamento Pessoal</option>
                      <option value="consultoria">Consultoria e auditoria trabalhista</option>
                      <option value="migracao">Migração de sistemas de folha</option>
                      <option value="esocial">Implantação do eSocial</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white/60 resize-none"
                      placeholder="Descreva suas necessidades..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-orange-500 text-white hover:bg-orange-600 text-base px-8 py-3 shadow-lg shadow-orange-500/30 rounded-full w-full"
                  >
                    Enviar mensagem
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
