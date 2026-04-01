import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FadeIn } from '@/components/ui/fade-in';

export default function HeroImageSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-sara');

  return (
    <section className="relative w-full bg-slate-50 py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 flex items-center justify-center">
          </div>
          
          {/* Main Image Container */}
          <div className="relative z-10 flex justify-center">
            <div className="relative">
              {/* Frame/Background for the image */}
              <div className="absolute -inset-4 bg-white rounded-3xl shadow-2xl transform rotate-1" />
              
              {/* Image */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    data-ai-hint={heroImage.imageHint}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                )}
                
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full opacity-80" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full opacity-60" />
            </div>
          </div>
          
        </FadeIn>
      </div>
    </section>
  );
}
