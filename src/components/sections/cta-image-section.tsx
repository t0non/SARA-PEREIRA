import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function CtaImageSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-sara');

  return (
    <section className="box-border w-full bg-secondary py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative h-[140px] w-full sm:h-[180px] md:h-[220px] lg:h-[260px] xl:h-[300px] overflow-hidden">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              data-ai-hint={heroImage.imageHint}
              fill
              className="object-contain object-center"
              priority
            />
          )}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white via-white/80 via-white/40 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
