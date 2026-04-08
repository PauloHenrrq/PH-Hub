export interface Tool {
  icon: string;
  tag: string;
  name: string;
  description: string;
  usage: string;
}

export const tools: Tool[] = [
  {
    icon: '⌨️',
    tag: 'IDE',
    name: 'Cursor',
    description: 'Meu cockpit de desenvolvimento. IDE com IA integrada onde todo código nasce, é testado e refinado em pair programming com modelos em tempo real.',
    usage: 'Escrever código, debugar, refatorar e fazer code review assistido por IA direto no editor.',
  },
  {
    icon: '🧠',
    tag: 'IA',
    name: 'Claude',
    description: 'O parceiro de pensamento. Análise profunda de arquitetura, refinamento de prompts complexos e discussões técnicas com raciocínio longo.',
    usage: 'Refinar prompts, analisar decisões de arquitetura e resolver problemas que exigem raciocínio estruturado.',
  },
  {
    icon: '⚡',
    tag: 'IA',
    name: 'ChatGPT',
    description: 'A ferramenta multiuso. Brainstorming, geração de conteúdo, revisão e exploração de ideias. O canivete suíço da rotina criativa.',
    usage: 'Ideação rápida, geração de conteúdo, tradução e pesquisa exploratória de conceitos novos.',
  },
  {
    icon: '📋',
    tag: 'Organização',
    name: 'Notion',
    description: 'O segundo cérebro. Documentação, roadmap, anotações e biblioteca de referências. A base organizacional por trás de tudo que é publicado.',
    usage: 'Documentar projetos, manter checklists, organizar prompts antes de publicar e planejar sprints.',
  },
  {
    icon: '🎨',
    tag: 'Design',
    name: 'Figma',
    description: 'Onde ideias viram interfaces. Prototipagem visual, testes de layout e consistência de design antes de qualquer linha de código.',
    usage: 'Criar wireframes, prototipar UIs e manter um design system visual antes de implementar.',
  },
  {
    icon: '🔧',
    tag: 'DevOps',
    name: 'GitHub',
    description: 'O registro oficial. Versionamento, code review e publicação. Todo projeto do hub passa por aqui antes de ver a luz do dia.',
    usage: 'Versionar código, gerenciar PRs, manter issues organizadas e automatizar deploys.',
  },
  {
    icon: '🚀',
    tag: 'Cloud',
    name: 'Vercel',
    description: 'Implantação e escalonamento contínuo. Edge functions perfeitamente integradas com frameworks modernos.',
    usage: 'Deploys automatizados, preview environments e monitoramento de performance.',
  },
  {
    icon: '⚛️',
    tag: 'Core',
    name: 'Next.js',
    description: 'A fundação das aplicações modernas. Roteamento App Router, Server Actions e renderizações otimizadas.',
    usage: 'Criação de aplicações React em Server-side Rendering com alta performance.',
  },
  {
    icon: '🌀',
    tag: 'Design',
    name: 'Tailwind CSS',
    description: 'Estilização ágil via utilitários. Permite cristalizar interfaces diretamente no JSX com flexibilidade.',
    usage: 'Criar layouts responsivos diretamente no frontend, e manter o design system modular.',
  },
];
