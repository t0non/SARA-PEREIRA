import dynamic from 'next/dynamic';
import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section-fopag';
import AboutSection from '@/components/sections/about-section-fopag';
import ServicesSection from '@/components/sections/services-section-fopag';
import CtaBanner from '@/components/sections/cta-banner';
import TestimonialsSection from '@/components/sections/testimonials-section';
import BlogSection from '@/components/sections/blog-section-educational';
import Footer from '@/components/layout/footer';

const ContactSection = dynamic(() => import('@/components/sections/contact-section'));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <CtaBanner />
        <ServicesSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
