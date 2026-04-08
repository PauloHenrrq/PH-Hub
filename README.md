# PH.hub ◈

O laboratório pessoal onde IA, código e design se encontram. Este "projeto zero" serve como base central para experimentação técnica, publicação de prompts avançados e curadoria de ferramentas que alimentam o fluxo de trabalho.

## 🚀 Tecnologias

Migrado completamente de um ambiente estático (HTML/CSS/JS) para uma aplicação moderna e escalável:

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript (Configurado em Flexible Mode)
- **Estilização:** CSS puro via design system central (`globals.css`)
- **UI/UX:** Glassmorphism, animações fluídas, e interação em tempo real (Intersection Observer API)

## 📁 Estrutura do Projeto

A arquitetura foi redesenhada usando princípios de Clean Architecture adaptados ao ecossistema moderno do React:

```text
/
├── app/                      # Next.js App Router (Páginas e Layouts raízes)
│   ├── globals.css           # Design system e tokens globais
│   ├── layout.tsx            # Root layout com SEO e Partículas
│   ├── page.tsx              # Página inicial unificada (Landing Page)
│   └── prompts/              # Rotas dinâmicas/estáticas de prompts
├── components/               # Sistema de Componentes React
│   ├── layout/               # Elementos estruturais (Navbar, Footer)
│   ├── sections/             # Seções modulares da página (Hero, About, etc.)
│   ├── ui/                   # Micro-componentes reutilizáveis (Carousel, Particles)
│   └── prompt/               # UI específica para exibição de prompts
├── hooks/                    # Lógica isolada do Vanilla JS
│   ├── useCardSpotlight.ts   # Efeito interativo de luz nos cards
│   └── useRevealEngine.ts    # Engine de scroll animation (IntersectionObserver)
├── lib/data/                 # "Data Layer" simulada (Tipagens e Arrays constantes)
│   ├── projects.ts           # Banco de dados estático de projetos
│   ├── prompts.ts            # Banco de dados estático de prompts
│   └── tools.ts              # Banco de dados estático de ferramentas
└── public/                   # Estáticos globais
    ├── images/               # Backgrounds e assets
    └── videos/               # Vídeos do Hero principal
```

## 🛠 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/en) (V20+ Recomendado)
- Gerenciador de dependências (NPM, Yarn ou PNPM)

### Instalação

1. Clone o repositório
\`\`\`bash
git clone <url-do-repositorio>
cd PH-Hub
\`\`\`

2. Instale as dependências
\`\`\`bash
npm install
\`\`\`

3. Inicie o servidor de desenvolvimento
\`\`\`bash
npm run dev
\`\`\`

4. Acesse \`http://localhost:3000\` no seu navegador.

## 🎨 Design System

A infraestrutura visual original foi rigorosamente documentada e transcrita para o novo ambiente, preservando a identidade "Cyber-Glass":
- Cores dinâmicas geridas primariamente em tons Púrpuras (`var(--purple-*)`) e texturas de fundo profundas (`var(--bg-deep)`).
- Componentes reativos (Cards com Spotlight).
- Efeitos visuais mantidos sem necessidade imediata de bibliotecas pesadas externas (Sem Tailwind nesta versão base, privilegiando total controle no CSS puro criado).

## 🔮 Roadmap / Próximos Passos

- Integração CI/CD automatizada.
- Migração de estado dos Arrays Estáticos para banco de dados real com ORM (Prisma).
- Implementação de Headless CMS para curadoria assíncrona dos conteúdos (Prompts & Ferramentas).
