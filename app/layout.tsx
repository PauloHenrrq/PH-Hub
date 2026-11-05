import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Particles from '@/components/ui/Particles';
import ScrollToTop from '@/components/ui/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-variable',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono-variable',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading-variable',
});

export const metadata: Metadata = {
  title: 'PH.hub — Laboratório de IA, Código e Design',
  description:
    'Um hub de experimentação pessoal: prompts de engenharia, ferramentas curadas e projetos que nascem da interseção entre tecnologia e design profissional.',
  keywords: ['IA', 'prompts', 'engenharia de prompts', 'Next.js', 'laboratório', 'design'],
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'PH.hub — Laboratório de IA, Código e Design',
    description: 'Prompts de engenharia, ferramentas curadas e projetos experimentais de alta performance.',
    url: 'https://ph-hub.vercel.app',
    siteName: 'PH.hub',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PH.hub — Laboratório de IA, Código e Design',
    description: 'Experimentação técnica e design na era da Inteligência Artificial.',
    creator: '@paulohenrrq',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="pt-BR" 
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className={inter.className}>
        <Particles />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
