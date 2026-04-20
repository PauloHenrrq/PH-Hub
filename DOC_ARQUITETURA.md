# 🚀 PH Hub: Documentação Técnica e Histórico de Evolução

Este documento serve como um guia completo sobre a arquitetura do projeto PH Hub, detalhando como a estrutura foi construída, o propósito de cada arquivo e os marcos principais da nossa jornada de desenvolvimento.

---

## ⏳ A Jornada: Como chegamos aqui

O **PH Hub** nasceu como um portal centralizador para ferramentas de IA, Prompts e Workflows. Ao longo do desenvolvimento, passamos por fases críticas de amadurecimento técnico:

1.  **Fundação e Design System**: Estabelecemos uma identidade visual futurista baseada em *Glassmorphism*. Criamos o sistema de `Particles` e `useCardSpotlight` para garantir um "efeito WOW" imediato.
2.  **Migração Next.js 15**: Atualizamos o projeto para a versão mais recente do Next.js, aproveitando o **App Router** e otimizando a hidratação de componentes.
3.  **Desacoplamento Client/Server**: Realizamos uma auditoria de performance para transformar componentes pesados em *Server Components*, reduzindo o bundle enviado ao navegador.
4.  **Sistema Bilíngue e Expansão de Conteúdo**: Implementamos suporte parcial e estrutural para PT-BR/EN, especialmente na seção de Prompts, e padronizamos a visualização de detalhes (slugs dinâmicos).
5.  **Padronização de MCPs e Tools**: Estruturamos os cartões de ferramentas e protocolos (MCPs) com uma lógica de carrossel e filtros inteligentes.

---

## 📂 Mapa de Diretórios e Arquivos

### 🌐 Raiz do Projeto (`/`)
Arquivos de configuração e metadados.
- `package.json`: Manifesto do projeto com dependências (Next.js 16, React 19, TypeScript 5).
- `tsconfig.json`: Configurações do TypeScript.
- `next.config.ts`: Configurações do motor Next.js.
- `globals.css`: Variáveis de cores (HSL) e estilos globais de reset e animação.
- `README.md`: Documentação básica de instalação e execução.

### 🏗️ Camada de Interface (`/components`)

#### 🧱 `components/ui/` (Design System)
Componentes atômicos reutilizáveis com foco em estética.
- `McpCard.tsx`: Cartão especializado para Model Context Protocols com efeitos de hover.
- `ToolCard.tsx`: Cartão para ferramentas de IA, otimizado para legibilidade.
- `Particles.tsx`: Sistema de fundo animado para criar profundidade visual.
- `Carousel.tsx`: Mecanismo de navegação horizontal para as ferramentas.
- `EnergyConnector.tsx`: Elemento visual decorativo para conexões neurais/tecnológicas.
- `ScrollToTop.tsx`: Utilitário de UX para facilitar a navegação.

#### 🏛️ `components/layout/` (Estrutura Global)
- `Navbar.tsx`: Menu de navegação principal com links dinâmicos e efeito de transparência.
- `Footer.tsx`: Rodapé com informações de copyright e links sociais.

#### 📦 `components/sections/` (Seções de Página)
Cada seção da Home é um módulo independente.
- `HeroSection.tsx`: O cartão de visitas. Título principal e chamada à ação.
- `AboutSection.tsx`: Explicação institucional do propósito do PH Hub.
- `WorkflowsSection.tsx`: Vitrine dos fluxos de trabalho automatizados.
- `ToolsSection.tsx`: Lista de ferramentas integradas.
- `PromptsSection.tsx`: Galeria de prompts otimizados.
- `McpsSection.tsx`: Explicação e listagem de protocolos MCP.
- `CtaSection.tsx`: Seção final para conversão ou contato.

#### 📝 `components/prompt/` e `workflow/`
Lógica específica para visualização detalhada.
- `PromptView.tsx` / `PromptClient.tsx`: Gerencia a exibição e interação (como cópia de prompt) em páginas individuais.
- `WorkflowClient.tsx`: Adaptador para os detalhes de workflows.

---

### 🚀 Caminhos de Roteamento (`/app`)
Utiliza o **Next.js App Router**.

- `layout.tsx`: O layout mestre que envolve todo o site.
- `page.tsx`: A página inicial (Home) que monta todas as `Sections`.
- `workflows/[slug]/page.tsx`: Rota dinâmica que gera uma página única para cada fluxo de trabalho.
- `prompts/[slug]/page.tsx`: Rota dinâmica para detalhes de prompts.
- `tools/page.tsx` & `mcps/page.tsx`: Páginas de listagem completa.

---

### 💾 Camada de Dados e Lógica (`/lib` & `/hooks`)

#### `lib/data/` (A Base de Conhecimento)
Centralização de dados para facilitar manutenção.
- `workflows.ts`: Banco de dados de objetos para cada Workflow.
- `prompts.ts`: Lista exaustiva de prompts com categorias e descrições.
- `tools.ts`: Dados das ferramentas recomendadas.
- `mcps.ts`: Catálogo de protocolos Model Context.

#### `hooks/` (Inteligência Visual)
- `useCardSpotlight.ts`: Cria o efeito de lanterna que segue o mouse nos cartões.
- `useRevealEngine.ts`: Controla as animações de entrada (fade-in) conforme o scroll.

---

## 🛠️ Tecnologias de Suporte
- **CSS Modules**: Para isolar estilos específicos de páginas e evitar conflitos de escopo.
- **requestAnimationFrame**: Engine de animações procedurais (partículas, spotlight) sem dependência de libs externas.
- **Custom Hooks**: Lógica visual complexa (`useCardSpotlight`, `useRevealEngine`) desacoplada dos componentes.
