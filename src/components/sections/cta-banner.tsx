'use client';

import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';
import { WHATSAPP_LINK } from '@/lib/constants';

export default function CtaBanner() {
  return (
    <section className="w-full py-8 md:py-16 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="bg-slate-950 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden max-w-6xl mx-auto border border-white/5">
            {/* Background decoration from hero section */}
            <img 
              src="https://files.catbox.moe/7aurrh.png" 
              alt="" 
              aria-hidden="true"
              className="absolute -bottom-32 -right-24 w-[400px] md:w-[550px] opacity-25 md:opacity-30 rotate-12 pointer-events-none"
            />
            
            <div className="flex-1 z-10 text-center lg:text-left flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight">
                Dê o próximo passo com o <span className="text-primary block mt-1">DP Estratégico</span>
              </h2>
              <p className="text-slate-300 text-lg md:text-xl font-light">
                Tire qualquer dúvida sobre nossos serviços:
              </p>
            </div>
            
            <div className="w-full lg:w-[480px] z-10">
              <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP_LINK, '_blank'); }}>
                <div>
                    <input 
                      type="text" 
                      placeholder="Nome" 
                      className="w-full bg-transparent border border-white/20 text-white px-6 py-4 rounded-full focus:outline-none focus:border-primary focus:bg-white/5 transition-all placeholder:text-slate-400"
                      required
                    />
                </div>
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex-1">
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full bg-transparent border border-white/20 text-white px-6 py-4 rounded-full focus:outline-none focus:border-primary focus:bg-white/5 transition-all placeholder:text-slate-400"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <input 
                      type="tel" 
                      placeholder="WhatsApp" 
                      className="w-full bg-transparent border border-white/20 text-white px-6 py-4 rounded-full focus:outline-none focus:border-primary focus:bg-white/5 transition-all placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full mt-2 py-7 text-base rounded-full font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]">
                  Entre em Contato
                </Button>
              </form>
            </div>
            
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
