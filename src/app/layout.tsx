import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'DP Estratégico',
  description: 'Transformando o Departamento Pessoal em um parceiro estratégico para o seu negócio.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth scroll-pt-32">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrumental+Sans:wght@700&family=Montserrat:wght@300;400;500;700&family=Caveat:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body font-light antialiased")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
