# WORKSPACE.md — PH Hub Configuration

Este arquivo serve como a fonte da verdade ("True North") e referência de contexto para o desenvolvimento do **PH Hub**.

---

## ◈ Objetivos do Projeto
O **PH Hub** é um laboratório pessoal de engenharia de software e engenharia de prompts. Serve como curadoria viva de ferramentas de inteligência artificial, templates estratégicos de prompts, fluxos de trabalho do Antigravity (workflows) e servidores MCP ativos, além de atuar como portal de atalho para o portfólio do desenvolvedor.

---

## 🛠 Stack Técnico & Rigor
- **Framework**: Next.js 16 (App Router)
- **Biblioteca**: React 19
- **Estilização**: Vanilla CSS (CSS Modules)
- **Tipagem**: TypeScript 5 (Nível: Flexible TS)
- **Design System**: Glassmorphism premium, paleta HSL escura, animações suaves e fontes modernas (Outfit/Inter).

---

## 🧭 True North: Mapa do Diretório
Aqui estão localizados os principais arquivos para leitura e alteração rápida:

```
PH Hub/
├── app/                      # Roteamento e páginas da aplicação
│   ├── page.tsx              # Página inicial unificada (Landing Page)
│   ├── frameworks/           # Seção e catálogo de frameworks agênticos (GSD, Ponytail, Caveman, etc.)
│   ├── prompts/              # Módulo de visualização e cópia de prompts
│   ├── workflows/            # Detalhamento de roteiros de automação
│   ├── tools/                # Diretório de curadoria de ferramentas de IA e CLIs diretos
│   └── mcps/                 # Listagem de servidores MCP e variantes CLI diretas
├── components/               # Componentes de interface do usuário
│   ├── layout/               # Elementos estruturais (Navbar, Footer)
│   ├── sections/             # Seções da página inicial (Hero, Frameworks, Tools, Prompts, MCPs...)
│   └── ui/                   # Cartões, modais (FrameworkCard, McpCard, ToolCard) e botões
├── lib/
│   └── data/                 # Camada de Dados Estáticos (A fonte de conteúdo do Hub)
│       ├── frameworks.ts     # Frameworks agênticos de ponta (GSD-Core, Ponytail, Caveman, etc.)
│       ├── prompts.ts        # Base de prompts e traduções
│       ├── workflows.ts      # Roteiros estruturados da IDE
│       ├── mcps.ts           # Servidores Model Context Protocol e variantes CLI diretas
│       └── tools.ts          # Curadoria de ferramentas de IA, IDEs e CLIs
└── WORKSPACE.md              # Este arquivo de governança
```

---

## 📐 Regras de Desenvolvimento e Commits
1. **Commits Atômicos**: Cada commit deve representar uma única unidade lógica de alteração. Seguir a hierarquia de commits (Dependencies -> Database -> Core -> Features -> UI -> Style -> Docs).
2. **Proibido `git add .`**: Adicione arquivos explicitamente usando `git add <path>` ou patch staging para manter o controle absoluto das modificações.
3. **Tratamento de Erros**: Sempre trate erros e evite strings vazias em logs ou retornos nulos sem justificativa.
4. **Preservação de Estilo**: Mantenha a estética escura baseada em Glassmorphism e não adicione estilos globais sem consentimento ou coerência com as variáveis HSL existentes.

---

## 📋 Progress Log

<!-- LOG_START -->
### [2026-11-05] — feat/update: Sincronização de Workflows, Skills, Frameworks e Variantes CLI
- **O que foi feito**:
  - Adicionado módulo completo de **Frameworks & Skills Agênticas** (`lib/data/frameworks.ts`, `components/ui/FrameworkCard.tsx`, `components/sections/FrameworksSection.tsx`, `app/frameworks/page.tsx`), incluindo GSD-Core, Ponytail, Caveman, Superpowers, OpenSpec, DSPy, LangGraph e o ecossistema proprietário Behavior Core & Agent Orchestrator.
  - Sincronizados os **19 Workflows** em `lib/data/workflows.ts` com as versões atuais do ecossistema Antigravity (inclusão do `/chat` Anti-Ambiguidade, atualização do `/gate` Dual-Execution 7 Vertentes + Anti-Overengineering, `/commit` com bloqueio obrigatório do Gate, `/build` com Kombai Wireframes, `/experience` DXE Obsidian, `/governance` com scripts Python FinOps/SLA, `/po` MoSCoW/BDD e `/prompt` Governança Absoluta).
  - Atualizado o catálogo de **Prompts** (`lib/data/prompts.ts`) com o Analista de Escopo de Alta Precisão (`/chat`), Quality Gate Dual-Execution, PRD/BDD, Governança FinOps, DXE, Code Review Sênior, DevOps, Banco de Dados e UX/WCAG.
  - Expandido o catálogo de **MCPs** (`lib/data/mcps.ts` e `components/ui/McpCard.tsx`) com a 2ª Opção Melhorada em Modo Direto (variantes CLI nativas sem custo de protocolo) e **Tools** (`lib/data/tools.ts`) com Claude Code, Cursor, GitHub CLI, Playwright CLI, Neon CLI e PostgreSQL CLI.
- **Workflows Executados**: `/gate` → `/commit`
<!-- LOG_END -->
