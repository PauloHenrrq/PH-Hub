import type { Metadata } from 'next';
import './globals.css';
import Particles from '@/components/ui/Particles';

export const metadata: Metadata = {
  title: 'PH.hub — Laboratório de IA, Código e Design',
  description:
    'Um hub de experimentação pessoal: prompts de engenharia, ferramentas curadas e projetos que nascem da interseção entre tecnologia e design.',
  keywords: ['IA', 'prompts', 'engenharia de prompts', 'Next.js', 'laboratório', 'design'],
  openGraph: {
    title: 'PH.hub — Laboratório de IA, Código e Design',
    description: 'Prompts de engenharia, ferramentas curadas e projetos experimentais.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Particles />
        {children}
      </body>
    </html>
  );
}
