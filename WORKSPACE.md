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
│   ├── prompts/              # Módulo de visualização e cópia de prompts
│   ├── workflows/            # Detalhamento de roteiros de automação
│   ├── tools/                # Diretório de curadoria de ferramentas
│   └── mcps/                 # Listagem de servidores MCP cadastrados
├── components/               # Componentes de interface do usuário
│   ├── layout/               # Elementos estruturais (Navbar, Footer)
│   ├── sections/             # Seções da página inicial (Hero, About, Prompts, Portfolio...)
│   └── ui/                   # Cartões, botões e elementos modais reutilizáveis
├── lib/
│   └── data/                 # Camada de Dados Estáticos (A fonte de conteúdo do Hub)
│       ├── prompts.ts        # Base de prompts e traduções
│       ├── workflows.ts      # Roteiros estruturados da IDE
│       ├── mcps.ts           # Servidores Model Context Protocol locais/globais
│       └── tools.ts          # Curadoria de ferramentas e links
└── WORKSPACE.md              # Este arquivo de governança
```

---

## 📐 Regras de Desenvolvimento e Commits
1. **Commits Atômicos**: Cada commit deve representar uma única unidade lógica de alteração. Seguir a hierarquia de commits (Dependencies -> Database -> Core -> Features -> UI -> Style -> Docs).
2. **Proibido `git add .`**: Adicione arquivos explicitamente usando `git add <path>` ou patch staging para manter o controle absoluto das modificações.
3. **Tratamento de Erros**: Sempre trate erros e evite strings vazias em logs ou retornos nulos sem justificativa.
4. **Preservação de Estilo**: Mantenha a estética escura baseada em Glassmorphism e não adicione estilos globais sem consentimento ou coerência com as variáveis HSL existentes.
