export type WorkflowType = 'primary' | 'analysis' | 'action';

export interface Workflow {
  command: string;
  title: string;
  description: string;
  type: WorkflowType;
  tags: string[];
  content: {
    en: string;
    pt: string;
  };
}

export const workflows: Workflow[] = [
  {
    command: '/init',
    title: 'Project Initialization',
    description: 'Protocolo de fundação: scaffold estrutural, definição de tipagem progressiva, instalação de dependências validadas e criação de README e regras globais de projeto.',
    type: 'primary',
    tags: ['Arquitetura', 'Scaffold', 'Typescript'],
    content: {
      en: `# Workflow: /init

<meta>
  <trigger>/init</trigger>
  <description>Runs the full project initialization protocol — collects context, scaffolds proportional structure with progressive typing, installs only confirmed dependencies, generates config files, creates a detailed README with True North, initializes Git, and generates the Workspace MD.</description>
</meta>

## Step 1 — Discovery Protocol
Collect fundamental project information: name, goal, stack (Next.js, Node/Express, etc.), TypeScript rigor level, and architectural preferences.

## Step 2 — Validation and Scaffolding
Folder structure creation based on Step 1 choices. Applies appropriate file extensions (.js vs .ts) and architectural patterns (Layered, Feature-based, or Clean Architecture).

## Step 3 — Dependencies & Toolchain
Selection and installation of core packages and tools like Prisma, NextAuth, or Shadcn/ui, always requesting confirmation before execution.

## Step 4 — Configuration Files
Generation of files like \`.prettierrc\`, \`.eslintrc.json\`, \`tsconfig.json\`, and \`.nvmrc\`, specifically adapted to the technical rigor defined for the project.

## Step 5 — Strategic README & Workspace MD
Delivery of the project's "True North": a navigation guide in the README and context documentation in Workspace MD to ensure AntiGravity understands all repository rules.`,
      pt: `# Workflow: /init

<meta>
  <trigger>/init</trigger>
  <description>Inicia o protocolo completo de inicialização do projeto — coleta contexto, monta a estrutura proporcional com tipagem progressiva, instala apenas dependências confirmadas, gera arquivos de configuração, cria um README detalhado com True North, inicializa o Git e gera o Workspace MD.</description>
</meta>

## Step 1 — Protocolo de Descoberta
Coleta de informações fundamentais sobre o projeto: nome, objetivo, stack (Next.js, Node/Express, etc), nível de rigor de TypeScript e preferências arquiteturais.

## Step 2 — Validação e Scaffold
Criação da estrutura de pastas baseada nas escolhas do Step 1. Aplica extensões de arquivo adequadas (.js vs .ts) e padrões arquiteturais (Layered, Feature-based ou Clean Architecture).

## Step 3 — Dependências e Toolchain
Seleção e instalação de pacotes essenciais e ferramentas como Prisma, NextAuth ou Shadcn/ui, sempre solicitando confirmação antes da execução.

## Step 4 — Arquivos de Configuração
Geração de arquivos como \`.prettierrc\`, \`.eslintrc.json\`, \`tsconfig.json\` e \`.nvmrc\`, adaptados especificamente ao rigor técnico definido para o projeto.

## Step 5 — README Estratégico e Workspace MD
Entrega do "True North" do projeto: um guia de navegação no README e a documentação de contexto no Workspace MD para que o AntiGravity entenda todas as regras do repositório.`
    }
  },
  {
    command: '/build',
    title: 'Zero-to-One Autonomous Builder & Prototyping',
    description: 'Motor de construção autônoma: infere a stack contextual (Next.js/TS ou Python), valida regras de negócio, gera opções de Wireframe HTML (Kombai) e executa engenharia em camadas com Ruthless Audit.',
    type: 'action',
    tags: ['Iterativo', 'Wireframes', 'Kombai', 'Full-Stack'],
    content: {
      en: `# Workflow: /build

<meta>
  <trigger>/build</trigger>
  <description>Master Zero-to-One Autonomous Builder & Prototyping Workflow. Analyzes project context to infer the best stack (Python for RPA/Data Pipelines; Next.js/TypeScript for Web/SaaS/Dashboards), evaluates market-level rigor, generates HTML Lo-Fi Wireframe options, and executes layered engineering with Multi-Agent Ruthless Audit.</description>
</meta>

## Step 1 — Contextual Stack & Market Level Inference
Automatically infers stack selection (Python for RPA/Automation/ML; Next.js App Router + TS + Tailwind v4 + Prisma for Web/SaaS; or Hybrid) and evaluates application rigor (Study/MVP vs B2B Production SaaS).

## Step 2 — Business Rules & Edge Cases Validation
Maps the core happy path, critical edge cases (network failures, invalid states, incomplete data), and external integration points before writing any code.

## Step 3 — Kombai Local Inspiration & Wireframe Prototyping
Queries local design inspirations, selects 2 distinct visual directions, and generates 2 HTML Lo-Fi Wireframe options (\`lofi-wireframe-opcao-1.html\` / \`opcao-2.html\`) with \`[REUSE]\` and \`[NEW]\` component badges.

## Step 4 — Scope & Visual Alignment (Confirm Always)
Presents mapped business rules, selected stack, and interactive wireframe options for explicit user approval before production coding.

## Step 5 — Layered Engineering & Multi-Agent Audit Gate
Executes layered construction (Persistence → Domain Services → Controllers/Actions → UI) and triggers the **Ruthless Code & Arch Auditor** before delivering the True North in \`WORKSPACE.md\`.`,
      pt: `# Workflow: /build

<meta>
  <trigger>/build</trigger>
  <description>Master Zero-to-One Autonomous Builder & Prototyping Workflow. Analisa o contexto do projeto para inferir a melhor stack (Python para RPA/Dados; Next.js/TypeScript para Web/SaaS/Dashboards), avalia o rigor de mercado, gera opções de Wireframe HTML Lo-Fi e executa engenharia em camadas com Multi-Agent Ruthless Audit.</description>
</meta>

## Step 1 — Inferência Contextual de Stack & Rigor de Mercado
Seleciona dinamicamente a stack ideal (Python para RPA/Scraping/ML; Next.js App Router + TS + Tailwind v4 + Prisma para Web/SaaS; ou Híbrido) e classifica o rigor (MVP Rápido vs Produto B2B Enterprise).

## Step 2 — Validação de Regras de Negócio & Casos de Borda
Mapeia o fluxo principal (Happy Path), casos de borda críticos (quedas de rede, estados inválidos, dados incompletos) e integrações antes de codificar.

## Step 3 — Inspiração Kombai & Prototipagem de Wireframes
Consulta referências visuais locais, seleciona 2 direções estéticas distintas e gera 2 opções de Wireframes HTML Lo-Fi (\`lofi-wireframe-opcao-1.html\` / \`opcao-2.html\`) com badges \`[REUSAR]\` e \`[NOVO]\`.

## Step 4 — Alinhamento de Escopo & Visual (Confirm Always)
Apresenta as regras de negócio mapeadas, a stack escolhida e os wireframes interativos para aprovação explícita antes de iniciar o código de produção.

## Step 5 — Engenharia em Camadas & Audit Gate Multi-Agente
Constrói camada por camada (Persistência → Serviços de Domínio → Controllers/Actions → UI) e dispara o **Subagente Auditor (Ruthless Code & Arch Auditor)** antes da entrega com mapa **True North** no \`WORKSPACE.md\`.`
    }
  },
  {
    command: '/review',
    title: 'Adaptive PR Review',
    description: 'Senhoridade sob demanda: análise adaptável ao seu nível de TypeScript que sugere melhorias profundas sem policiar desnecessariamente.',
    type: 'analysis',
    tags: ['Qualidade', 'Segurança', 'Mentor'],
    content: {
      en: `# Workflow: /review

<meta>
  <trigger>/review</trigger>
  <description>Performs an adaptive, context-aware code review based on the project settings.</description>
</meta>

## Step 1 — Scope Definition
Identification of files to be reviewed (current files, git diff, or specific paths).

## Step 2 — Adaptive Analysis
Review based on project context (Workspace MD):
- **Quality**: Readability and logic simplification.
- **Security**: Detection of exposed secrets and vulnerabilities.
- **Performance**: Identifying unnecessary re-renders and inefficient queries.
- **Architecture**: Validating coupling and separation of responsibilities.

## Step 3 — Senior Report
Structured delivery: what's good, what **must** change (blockers), and improvement suggestions, finishing with an educational learning point.`,
      pt: `# Workflow: /review

<meta>
  <trigger>/review</trigger>
  <description>Executa uma revisão de código adaptativa e consciente do contexto baseada nas configurações do projeto.</description>
</meta>

## Step 1 — Definição de Escopo
Identificação dos arquivos a serem revisados (arquivos atuais, diff do git ou caminhos específicos).

## Step 2 — Análise Adaptativa
Revisão baseada no contexto do projeto (Workspace MD):
- **Qualidade**: Legibilidade e simplificação de lógica.
- **Segurança**: Detecção de segredos expostos e vulnerabilidades.
- **Performance**: Identificação de re-renders desnecessários e queries ineficientes.
- **Arquitetura**: Validação de acoplamento e separação de responsabilidades.

## Step 3 — Relatório Senior
Entrega estruturada: o que está bom, o que **precisa** mudar (blockers) e sugestões de melhoria, finalizando com um ponto de aprendizado educativo.`
    }
  },
  {
    command: '/refactor',
    title: 'Arquitetura & Clean Code',
    description: 'Reconstrução seletiva e segura: divide o refactoring complexo em planos de ação de prioridade alta, média e baixa. Execução em blocos testáveis.',
    type: 'action',
    tags: ['Clean Architecture', 'SOLID'],
    content: {
      en: `# Workflow: /refactor

<meta>
  <trigger>/refactor</trigger>
  <description>Analyzes scope, builds a prioritized plan, and suggests changes block-by-block.</description>
</meta>

## Step 1 — Dimensional Analysis
Evaluation of code through 6 dimensions: Logic Simplification, Duplicate Code, Naming, Separation of Responsibilities, Coupling Reduction, and SOLID Patterns.

## Step 2 — Prioritized Plan
Improvements are grouped into High, Medium, and Low priority blocks. The plan is presented for approval before any changes are suggested.

## Step 3 — Assisted Execution
Block-by-block refactoring suggestions, with explanations on the "why" behind the change and impact analysis on other parts of the system.`,
      pt: `# Workflow: /refactor

<meta>
  <trigger>/refactor</trigger>
  <description>Analisa o escopo, constrói um plano priorizado e sugere mudanças bloco a bloco.</description>
</meta>

## Step 1 — Análise de Dimensões
Avaliação do código através de 6 dimensões: Simplificação de lógica, Código Duplicado, Naming, Separação de Responsabilidades, Redução de Acoplamento e Padrões SOLID.

## Step 2 — Plano Priorizado
As melhorias são agrupadas em blocos de prioridade Alta, Média e Baixa. O plano é apresentado para aprovação antes de qualquer alteração ser sugerida.

## Step 3 — Execução Assistida
Sugestão de refatoração bloco a bloco, com explicações sobre o "porquê" da mudança e análise de impacto em outras partes do sistema.`
    }
  },
  {
    command: '/debug',
    title: 'Diagnóstico & Fixes',
    description: 'Detetive avançado do terminal. Lê erros de ambiente, classifica a gravidade, explora *root causes* e sugere correções documentadas.',
    type: 'analysis',
    tags: ['Root Cause', 'Terminal'],
    content: {
      en: `# Workflow: /debug

<meta>
  <trigger>/debug</trigger>
  <description>Identifies error types, explains root causes, and suggests precise solutions.</description>
</meta>

## Step 1 — Capture & Classification
Automatic terminal reading to extract stack traces and identify the error type (Runtime, Build, TypeScript, API, DB, or Security).

## Step 2 — Root Cause Diagnosis
Differentiating between the visible symptom and the actual cause of the bug. Explanation of the technical concept involved to prevent recurrence.

## Step 3 — Security Scan & Fix
Analysis of collateral risks (data leakage, auth gaps) and precise fix suggestions, aligned with project conventions.`,
      pt: `# Workflow: /debug

<meta>
  <trigger>/debug</trigger>
  <description>Identifica tipos de erro, explica causas raízes e sugere soluções precisas.</description>
</meta>

## Step 1 — Captura e Classificação
Leitura automática do terminal para extrair stack traces e identificar o tipo de erro (Runtime, Build, TypeScript, API, DB ou Segurança).

## Step 2 — Diagnóstico de Causa Raiz
Diferenciação entre o sintoma visível e a causa real do bug. Explicação do conceito técnico envolvido para evitar recorrência.

## Step 3 — Scan de Segurança e Fix
Análise de riscos colaterais (vazamento de dados, gaps de autenticação) e sugestão de correção precisa, alinhada com as convenções do projeto.`
    }
  },
  {
    command: '/commit',
    title: 'Atomic Release & Git Governance',
    description: 'Governança estrita de Git: exige aprovação prévia do /gate (🟢 PASS), fragmenta diffs em grupos atômicos por hunk/camada e gera Conventional Commits estruturados (O que foi feito / O que NÃO foi feito / Por quê).',
    type: 'action',
    tags: ['Git Atômico', 'Quality Gate', 'Conventional Commits'],
    content: {
      en: `# Workflow: /commit

<meta>
  <trigger>/commit</trigger>
  <description>Scans changes, validates mandatory Quality Gate (/gate) approval, fragments into atomic commit groups, reviews health, teaches Conventional Commits with Structured Explanations (What was done / What was NOT done / Why), presents the full plan, and executes all commits + push on confirmation.</description>
</meta>

## Step 0 — Mandatory Quality Gate Validator (/gate Enforcement)
Strictly blocks any staging or commit until the \`/gate\` workflow has been executed and approved with \`🟢 PASS\` status. Zero exceptions or overrides permitted.

## Step 1 — Scan & Fragment Into Atomic Commit Groups
Runs \`git status\` and \`git diff -U3\` to split modified files and UI hunks into atomic commit groups following the strict 8-tier priority hierarchy:
1. Dependencies & Config → 2. Database & Schema → 3. Core / Domain → 4. Feature / API → 5. UI / Components → 6. Styling → 7. Tests → 8. Documentation.

## Step 2 — Pre-Commit Health Check
Scans all groups for leftover \`console.log\`/\`debugger\`, ESLint warnings, unresolved TODOs, explicit \`any\` risks, broken imports, or hardcoded secrets.

## Step 3 — Full Commit Plan with Enterprise Descriptions
Presents the complete commit plan where every commit includes a structured body:
- \`- O que foi feito:\` (factual description of changes)
- \`- O que NÃO foi feito:\` (strict scope boundary)
- \`- Por quê:\` (technical rationale)

## Step 4 — Explicit Staging & Sequential Execution
Stages files explicitly via \`git add <file>\` or hunk patches via \`git apply --cached\` (never \`git add .\`), executes sequential local commits, and pushes to the remote branch.`,
      pt: `# Workflow: /commit

<meta>
  <trigger>/commit</trigger>
  <description>Varre alterações, valida a aprovação obrigatória do Quality Gate (/gate), fragmenta em grupos de commits atômicos por hunk, revisa a saúde do código e executa Conventional Commits estruturados (O que foi feito / O que NÃO foi feito / Por quê).</description>
</meta>

## Step 0 — Validador Obrigatório do Quality Gate (/gate Enforcement)
Bloqueia terminantemente qualquer stage ou commit até que o workflow \`/gate\` tenha sido executado e aprovado com status \`🟢 PASS\`. Não existe exceção, bypass ou override.

## Step 1 — Varredura & Fragmentação em Grupos Atômicos
Executa \`git status\` e \`git diff -U3\` para dividir arquivos e hunks em grupos atômicos seguindo a hierarquia de prioridades de 8 níveis:
1. Dependencies & Config → 2. Database & Schema → 3. Core / Domain → 4. Feature / API → 5. UI / Components → 6. Styling → 7. Tests → 8. Documentation.

## Step 2 — Pre-Commit Health Check
Analisa todos os grupos contra \`console.log\`/\`debugger\` esquecidos, erros de ESLint, TODOs pendentes, riscos de tipagem, imports quebrados ou credenciais expostas.

## Step 3 — Plano Completo com Descrições Sóbrias
Apresenta o plano completo de commits exigindo corpo estruturado honesto:
- \`- O que foi feito:\` (descrição factual e sucinta)
- \`- O que NÃO foi feito:\` (delimitação estrita de escopo)
- \`- Por quê:\` (justificativa técnica da decisão)

## Step 4 — Stage Explícito & Execução Sequencial
Realiza stage explícito via \`git add <arquivo>\` ou patch de hunks via \`git apply --cached\` (proibido \`git add .\`), cria os micro-commits locais em sequência e executa \`git push\`.`
    }
  },
  {
    command: '/test',
    title: 'Testes & Cobertura',
    description: 'Análise de coverage gaps, sugestão de testes unitários por camada e comandos de validação automatizados.',
    type: 'analysis',
    tags: ['Jest', 'Vitest', 'Coverage'],
    content: {
      en: `# Workflow: /test

<meta>
  <trigger>/test</trigger>
  <description>Analyzes coverage gaps and suggests tests organized by layer.</description>
</meta>

## Step 1 — Gap Detection
Analysis of source files to identify what is not covered by tests, classifying gaps as Critical, Important, or Recommended.

## Step 2 — Suite Generation
Creation of ready-to-use test code, adapted to the detected framework (Vitest/Jest) and respecting project architecture.

## Step 3 — Execution Commands
Providing exact commands to run tests, check coverage, or enter watch mode.`,
      pt: `# Workflow: /test

<meta>
  <trigger>/test</trigger>
  <description>Analisa lacunas de cobertura e sugere testes organizados por camada.</description>
</meta>

## Step 1 — Detecção de Gaps
Análise dos arquivos de origem para identificar o que não está coberto por testes, classificando os gaps em Críticos, Importantes ou Recomendados.

## Step 2 — Geração de Suítes
Criação de código de teste pronto para uso, adaptado ao framework detectado (Vitest/Jest) e respeitando a arquitetura do projeto.

## Step 3 — Comandos de Execução
Fornecimento dos comandos exatos para rodar os testes, verificar cobertura ou entrar em modo watch.`
    }
  },
  {
    command: '/audit',
    title: 'Auditoria de Segurança',
    description: 'Security audit focada: OWASP, detecção superficial de secrets, dependências vulneráveis e problemas de CORS/SSRF.',
    type: 'analysis',
    tags: ['Segurança', 'OWASP'],
    content: {
      en: `# Workflow: /audit

<meta>
  <trigger>/audit</trigger>
  <description>Security audit focusing on OWASP, secrets, deps, and common vulnerabilities.</description>
</meta>

## Step 1 — Multi-Dimensional Scan
Audit focused on 7 axes: Secrets, Authentication, Injection (SQL/NoSQL), Input Validation, API Security, SSRF, and Dependencies.

## Step 2 — Risk Classification
Assignment of severity (Critical, High, Medium, Low) based on exploitability, exposure, and impact.

## Step 3 — Mitigation Plan
Reasoned correction suggestions and alerts for manual verifications where automated evidence is inconclusive.`,
      pt: `# Workflow: /audit

<meta>
  <trigger>/audit</trigger>
  <description>Auditoria de segurança focada em OWASP, segredos, dependências e vulnerabilidades comuns.</description>
</meta>

## Step 1 — Scan Multi-Dimensional
Auditoria focada em 7 eixos: Segredos, Autenticação, Injeção (SQL/NoSQL), Validação de Input, Segurança de API, SSRF e Dependências.

## Step 2 — Classificação de Risco
Atribuição de severidade (Crítica, Alta, Média, Baixa) com base em explorabilidade, exposição e impacto.

## Step 3 — Plano de Mitigação
Sugestões de correção fundamentadas e alertas para verificações manuais onde a evidência automatizada for inconclusiva.`
    }
  },
  {
    command: '/doc',
    title: 'Documentação Automática',
    description: 'Detecta assinaturas de rotas e gera JSDoc, Server Actions API docs ou README. Entrega blocos prontos para o código.',
    type: 'primary',
    tags: ['JSDoc', 'Docs'],
    content: {
      en: `# Workflow: /doc

<meta>
  <trigger>/doc</trigger>
  <description>Generates JSDoc, API docs, or README based on project context.</description>
</meta>

## Step 1 — Type Detection
Automatic identification if scope requires JSDoc for functions, API route documentation (Next.js/Express), or README updates.

## Step 2 — Block Generation
Delivery of formatted technical documentation ready to be pasted into code, ensuring parameters, returns, and behaviors are mapped.

## Step 3 — Gap Audit
Final report indicating which complex functions or routes still lack documentation in the project.`,
      pt: `# Workflow: /doc

<meta>
  <trigger>/doc</trigger>
  <description>Gera JSDoc, docs de API ou README baseado no contexto do projeto.</description>
</meta>

## Step 1 — Detecção de Tipo
Identificação automática se o escopo exige JSDoc para funções, documentação de rotas de API (Next.js/Express) ou atualização de README.

## Step 2 — Geração de Blocos
Entrega de documentação técnica formatada, pronta para ser colada no código, garantindo que parâmetros, retornos e comportamentos estejam mapeados.

## Step 3 — Auditoria de Lacunas
Relatório final indicando quais funções complexas ou rotas ainda carecem de documentação no projeto.`
    }
  },
  {
    command: '/arch',
    title: 'Mermaid Diagram Generator',
    description: 'Gerador automático de diagramas Mermaid baseados no código real. Mapeia fluxo de dados, estrutura de componentes, banco de dados, rotas de API e fluxos de autenticação.',
    type: 'primary',
    tags: ['Arquitetura', 'Documentação', 'Mermaid'],
    content: {
      en: `# Workflow: /arch

<meta>
  <trigger>/arch</trigger>
  <description>Generates Mermaid diagrams of data flow, component tree, DB schema, API routes, or auth flow — reads actual project code before generating, confirms scope and diagram type, and delivers ready-to-paste Mermaid blocks.</description>
</meta>

## Step 1 — Define Scope and Diagram Type
Selects diagram type: \`data-flow\`, \`component-tree\`, \`db-schema\`, \`api-routes\`, \`auth-flow\` or \`full\`. Scales checking node count to group or split.

## Step 2 — Read Project Context
Scans codebase (routes, components, Prisma schemas, session configs) to ensure the diagram strictly mirrors actual code structure.

## Step 3 — Generate Diagram
Outputs the Mermaid syntax for chosen type, marking any unverified components as \`[unverified]\` to prevent hallucinations.

## Step 4 — Deliver and Adjust
Presents the diagram block and prompts for adjustments or confirmation of accuracy.`,
      pt: `# Workflow: /arch

<meta>
  <trigger>/arch</trigger>
  <description>Gera diagramas Mermaid do fluxo de dados, árvore de componentes, schema de banco de dados, rotas de API ou fluxo de autenticação — lê o código real do projeto antes de gerar, confirma o escopo e o tipo de diagrama, e entrega blocos Mermaid prontos para colar.</description>
</meta>

## Step 1 — Definir Escopo e Tipo de Diagrama
Seleciona o tipo de diagrama: \`data-flow\`, \`component-tree\`, \`db-schema\`, \`api-routes\`, \`auth-flow\` ou \`full\`. Valida a escala para agrupar ou dividir se necessário.

## Step 2 — Ler Contexto do Projeto
Varre o código real (rotas, componentes, schemas Prisma, sessões) para garantir que o diagrama represente fielmente a arquitetura existente.

## Step 3 — Gerar Diagrama
Gera a sintaxe Mermaid baseada apenas no código analisado, marcando nós não resolvidos como \`[unverified]\` para evitar alucinações.

## Step 4 — Entregar e Ajustar
Entrega os blocos prontos e solicita ajustes ou confirmação de precisão.`
    }
  },
  {
    command: '/log',
    title: 'Structured Progress Log',
    description: 'Registro cronológico de evolução do projeto. Atualiza a seção de progresso no Workspace MD mantendo o histórico de decisões e entregas de forma concisa.',
    type: 'primary',
    tags: ['Progresso', 'Documentação', 'Histórico'],
    content: {
      en: `# Workflow: /log

<meta>
  <trigger>/log</trigger>
  <description>Appends a structured progress entry to the project's Workspace MD Progress Log section. Captures what was done, decisions made, and next steps.</description>
</meta>

## Step 1 — Read Workspace MD
Locates the Progress Log markers (\`<!-- LOG_START -->\` / \`<!-- LOG_END -->\`) inside the Workspace MD configuration.

## Step 2 — Collect Entry Context
Collects changes via git diff (\`auto\` mode) or user prompt (\`manual\` / \`milestone\` mode) to capture key metrics.

## Step 3 — Generate Log Entry
Formats a unified progress entry containing: type (feat, fix, refactor, setup, etc.), summary, what was done, decisions, workflows, and next steps.

## Step 4 — Confirm and Append
Presents preview of the entry for user verification before modifying the Markdown file.`,
      pt: `# Workflow: /log

<meta>
  <trigger>/log</trigger>
  <description>Adiciona uma entrada estruturada de progresso na seção Progress Log do Workspace MD do projeto. Captura o que foi feito, as decisões tomadas e os próximos passos.</description>
</meta>

## Step 1 — Ler Workspace MD
Localiza os marcadores de Log (\`<!-- LOG_START -->\` / \`<!-- LOG_END -->\`) dentro da configuração do Workspace MD.

## Step 2 — Coletar Contexto da Entrada
Coleta as alterações via git diff (modo \`auto\`) ou via prompt do usuário (modo \`manual\` / \`milestone\`) para capturar as principais métricas.

## Step 3 — Gerar Entrada do Log
Formata a entrada de progresso unificada contendo: tipo (feat, fix, refactor, setup, etc.), sumário, o que foi feito, decisões, workflows e próximos passos.

## Step 4 — Confirmar e Anexar
Exibe a visualização da entrada para verificação do usuário antes de realizar a escrita real no arquivo Markdown.`
    }
  },
  {
    command: '/perf',
    title: 'Performance Auditor',
    description: 'Análise profunda em 7 dimensões de performance (latência, renderização, queries N+1, bundle, loops, CPU). Classifica impactos e propõe correções precisas baseadas na tipagem progressiva do projeto.',
    type: 'analysis',
    tags: ['Performance', 'Otimização', 'Cultura Sênior'],
    content: {
      en: `# Workflow: /perf

<meta>
  <trigger>/perf</trigger>
  <description>Analyzes the defined scope exclusively for performance issues across all relevant dimensions, prioritizes findings by impact, explains the root cause in depth, and suggests precise fixes.</description>
</meta>

## Step 1 — Define Scope
Specifies the files or folders to analyze. Protects large files (> 800 lines) by analyzing them section-by-section.

## Step 2 — Read Project Context
Reads typescript strictness level and architectural patterns to match suggestions and coding style of the project.

## Step 3 — Analyze Performance
Audits code using the Evidence Gate: Net, Re-renders, DB Queries (N+1), Bundle Size, Blocking IO, CPU loops, Memory, Cache.

## Step 4 — Prioritize and Fix
Groups issues by impact (High, Medium, Low) and suggests exact, code-conforming solutions waiting for block-by-block approval.`,
      pt: `# Workflow: /perf

<meta>
  <trigger>/perf</trigger>
  <description>Analisa o escopo definido exclusivamente para problemas de performance em todas as dimensões relevantes, prioriza descobertas por impacto, explica a causa raiz em detalhes e sugere correções precisas.</description>
</meta>

## Step 1 — Definir Escopo
Especifica os arquivos ou diretórios para análise. Protege arquivos grandes (> 800 linhas) analisando-os por seções.

## Step 2 — Ler Contexto do Projeto
Lê a configuração de rigor do typescript e padrões arquiteturais para alinhar as sugestões de refatoração com o estilo de código do projeto.

## Step 3 — Analisar Performance
Audita o escopo cruzando a barreira de evidência (Evidence Gate): Rede, Re-renderizações, Queries DB (N+1), Tamanho de Bundle, Operações Bloqueantes, Loops CPU, Memória, Cache.

## Step 4 — Priorizar e Corrigir
Agrupa problemas por impacto (Alto, Médio, Baixo) e sugere soluções de código precisas aguardando aprovação bloco a bloco.`
    }
  },
  {
    command: '/skill',
    title: 'Skills Library & Ecosystem Integrator',
    description: 'Varredura e orquestração da biblioteca de +1000 SKILLS (C:\\Users\\paulo\\workspace\\dev\\.agents\\skills) e especialistas DXE/FinOps/Cloud/Multi-Tenant.',
    type: 'action',
    tags: ['Skills', 'Orquestração', 'Melhores Práticas', 'Agentes'],
    content: {
      en: `# Workflow: /skill

<meta>
  <trigger>/skill</trigger>
  <description>Scans the SKILLS library at C:\\Users\\paulo\\workspace\\dev\\.agents\\skills, matches skills to the current project context, presents applicable options, and applies selected skills — never applies without confirmation.</description>
</meta>

## Step 1 — Define Intent
Determines whether to \`browse\` categories, \`search <term>\`, \`apply <name>\` directly, or \`suggest\` automatically based on project context.

## Step 2 — Scan and Filter
Scans \`C:\\Users\\paulo\\workspace\\dev\\.agents\\skills\` (including specialized modules like \`behavior-core\`, \`agent-orchestrator\`, \`mcp-orchestrator\`, \`dxe-orchestrator\`, \`finops-cloud-cost\`, \`cloud-multi-tenant-architect\`, \`api-contract-designer\`, and \`chat\`) and builds a filtered subset.

## Step 3 — Match to Context
Scores relevance by stack match, architectural pattern, and task goals using \`WORKSPACE.md\` as the primary source of truth.

## Step 4 — Preview and Apply
Reads the full \`SKILL.md\`, presents requirements and generated patterns, and adapts placeholders and TypeScript strictness before delivering ready-to-use blocks.`,
      pt: `# Workflow: /skill

<meta>
  <trigger>/skill</trigger>
  <description>Varre a biblioteca SKILLS em C:\\Users\\paulo\\workspace\\dev\\.agents\\skills, cruza as habilidades com o contexto do projeto atual, apresenta as opções aplicáveis e aplica as selecionadas mediante confirmação.</description>
</meta>

## Step 1 — Definir Intenção
Determina se deseja navegar por categorias (\`browse\`), buscar termos (\`search\`), aplicar diretamente (\`apply\`) ou sugerir automaticamente (\`suggest\`) com base no contexto.

## Step 2 — Varrer e Filtrar Biblioteca
Inspeciona \`C:\\Users\\paulo\\workspace\\dev\\.agents\\skills\` (incluindo especialistas como \`behavior-core\`, \`agent-orchestrator\`, \`mcp-orchestrator\`, \`dxe-orchestrator\`, \`finops-cloud-cost\`, \`cloud-multi-tenant-architect\`, \`api-contract-designer\` e \`chat\`) filtrando apenas o subconjunto relevante.

## Step 3 — Cruzar com o Contexto
Calcula a relevância por aderência exata à stack, padrão arquitetural e objetivo da tarefa utilizando o \`WORKSPACE.md\` como fonte da verdade.

## Step 4 — Preview e Aplicação
Lê o \`SKILL.md\` completo, exibe o preview técnico e adapta placeholders e nível de TypeScript antes de entregar os blocos prontos.`
    }
  },
  {
    command: '/gate',
    title: 'Universal Multi-Agent Quality Gate',
    description: 'Protocolo de Dupla Execução (7 Vertentes Técnicas + Auditoria de Sobriedade & Anti-Overengineering). Bloqueia commits sem status 🟢 PASS, impõe Zero Lockfile Churn e exige PRs sobrios sem superlativos.',
    type: 'analysis',
    tags: ['Quality Gate', 'Dual-Execution', 'Anti-Overengineering', 'Release'],
    content: {
      en: `# Workflow: /gate

<meta>
  <trigger>/gate</trigger>
  <description>Universal Multi-Agent Health Check and Quality Gate. Automatically detects project maturity level (Tier 1 Study/MVP vs Tier 2 Professional/Enterprise) and enforces full-spectrum standards through a Dual-Execution Protocol (7 Technical Verticals + Ruthless Proportionality & Anti-Overengineering Audit).</description>
</meta>

## Step 1 — Project Maturity & Context Auto-Detection
Scans repository root and \`WORKSPACE.md\` to classify the project into **Tier 1 (Pragmatic / Study / POC)** or **Tier 2 (Professional / Enterprise — Zero Tolerance)**.

## Step 2 — Execution 1: The Enterprise 7-Vertical Deep Health Check
Routes inspection across specialized SKILLS to audit all 7 engineering verticals:
1. **Business Logic, Edge Cases & Clean Architecture**
2. **HTTP Semantics & API Contracts** (strict 200/201/204/400/401/403/404/409/422 + standardized error payloads)
3. **Security, Multi-Tenancy (Zero IDOR/BOLA) & LGPD**
4. **Database, Versioned Migrations & Fixed-Point Numeric Precision**
5. **Testing, TDD & Regression Proof**
6. **Frontend, Mobile-First (44px+ Touch Targets) & WCAG AA**
7. **Atomic Git, Lockfile Integrity (Zero Lockfile Churn) & PR Sobriety**

## Step 3 — Execution 2: Ruthless Sobriety & Anti-Overengineering Audit ("O Agente Chato")
Second pass with an isolated, skeptical context that evaluates proportionality, cognitive friction on the team, and premature bureaucracy.

## Step 4 — Full-Spectrum Scorecard & Sobriety PR Generator
Outputs the deterministic Health Check Scorecard (\`🟢 LIBERADO\` | \`🟡 RESSALVAS\` | \`🔴 BLOQUEADO\`) and generates the factual Commit & Pull Request specification (explicitly declaring **What was done** and **What was NOT done** with zero marketing superlatives).`,
      pt: `# Workflow: /gate

<meta>
  <trigger>/gate</trigger>
  <description>Universal Multi-Agent Health Check e Quality Gate. Detecta automaticamente a maturidade do projeto (Tier 1 Estudo/MVP vs Tier 2 Profissional/Enterprise) e aplica inspeção de espectro completo via Protocolo de Dupla Execução (7 Vertentes Técnicas + Auditoria Crítica de Sobriedade & Anti-Overengineering).</description>
</meta>

## Step 1 — Detecção Automática de Maturidade e Rigor
Analisa a raiz do repositório e o \`WORKSPACE.md\` para classificar o rigor em **Tier 1 (Pragmático / Estudo / POC)** ou **Tier 2 (Profissional / Enterprise — Tolerância Zero)**.

## Step 2 — Execução 1: Auditoria Técnica nas 7 Vertentes
Aciona o painel multi-agente de SKILLS para auditar as 7 vertentes fundamentais:
1. **Lógica de Negócio, Casos de Borda & Clean Architecture**
2. **Semântica HTTP & Contratos de API** (status codes estritos e erro padronizado)
3. **Segurança, Isolamento Multi-Tenant (Zero IDOR/BOLA) & LGPD**
4. **Banco de Dados, Migrations Versionadas & Precisão Decimal**
5. **Testes, TDD & Prova de Regressão**
6. **Frontend, Mobile-First (Touch Target >= 44px) & WCAG AA**
7. **Git Atômico, Integridade de Lockfile (Zero Lockfile Churn) & Sobriedade de PR**

## Step 3 — Execução 2: Auditoria de Sobriedade & Anti-Overengineering ("O Agente Chato")
Segunda passagem com contexto isolado e olhar 100% cético: avalia se a solução é proporcional ao estágio real do projeto e diagnostica pontos de fricção cognitiva ou burocracia precoce.

## Step 4 — Scorecard Determinístico & Gerador de PR Sóbrio
Emite o Scorecard Executivo (\`🟢 LIBERADO\` | \`🟡 RESSALVAS\` | \`🔴 BLOQUEADO\`) e gera o template de Commit e Pull Request factual (declarando com honestidade cirúrgica **O que foi feito** e **O que NÃO foi feito**, sem superlativos de marketing).`
    }
  },
  {
    command: '/po',
    title: 'Product Management & BDD Specifications',
    description: 'Orquestração de produto com Ruthless PM Audit: converte objetivos de negócio em escopo MoSCoW aprovado, PRDs completos e User Stories INVEST com critérios BDD testáveis.',
    type: 'primary',
    tags: ['Produto', 'PRD', 'BDD', 'MoSCoW'],
    content: {
      en: `# Workflow: /po

<meta>
  <trigger>/po</trigger>
  <description>Master orchestration engine for Product Management, PRD creation, User Stories with BDD acceptance criteria, and MVP prioritization. Chains problem discovery, persona mapping, MoSCoW scope confirmation, Multi-Agent Ruthless Audit, and engineering handoff.</description>
</meta>

## Step 1 — Problem & Context Discovery (Product 3-Question Protocol)
Extracts the core pain point, target persona, and measurable business KPI. Applies the 3-Question Protocol only if critical context cannot be inferred.

## Step 2 — Scope & MoSCoW MVP Proposal (Confirm Always)
Invokes the \`product-manager\` skill and presents a structured MVP boundary (\`Must Have\`, \`Should Have\`, and explicit \`Won't Have / Out-of-Scope\`) for approval before generating the full PRD.

## Step 3 — Full PRD & INVEST User Stories with BDD
Generates the complete Product Requirement Document, INVEST User Stories, and Gherkin BDD acceptance criteria (\`Given / When / Then\`) covering happy paths and edge cases.

## Step 4 — Multi-Agent Ruthless PM Audit Gate
Triggers the **Ruthless PM Auditor** to verify that all BDD criteria are unambiguously testable, Out-of-Scope boundaries prevent scope creep, and KPIs are numeric before delivering with the \`🛡️ Auditado pelo Ruthless PM Auditor: APROVADO\` seal.`,
      pt: `# Workflow: /po

<meta>
  <trigger>/po</trigger>
  <description>Orquestração mestre de Product Management: encadeia descoberta de problema, mapeamento de persona, proposta de escopo MoSCoW (Confirm Always), geração de PRD + User Stories BDD e auditoria implacável via Ruthless PM Auditor.</description>
</meta>

## Step 1 — Descoberta de Problema & Contexto (Protocolo de 3 Perguntas)
Extrai a dor central do usuário, a persona-alvo e a métrica primária de sucesso (KPI), aplicando até 3 perguntas objetivas caso o contexto essencial não esteja definido.

## Step 2 — Proposta de Escopo & Fronteira MoSCoW (Confirm Always)
Aciona a skill \`product-manager\` e declara o plano de MVP (\`Must Have\`, \`Should Have\` e \`Won't Have / Out-of-Scope\`) aguardando aprovação explícita antes de redigir o PRD completo.

## Step 3 — Geração do PRD Completo & User Stories BDD
Gera o Documento de Requisitos de Produto (PRD), histórias de usuário no padrão INVEST e critérios de aceite BDD (\`Dado que / Quando / Então\`) cobrindo fluxos principais e casos de borda.

## Step 4 — Multi-Agent Ruthless PM Audit Gate ("O Agente Chato")
Dispara o **Subagente Auditor (Ruthless PM Auditor)** para validar testabilidade sem ambiguidade, delimitação contra scope creep e métricas numéricas antes da entrega com o selo \`🛡️ Auditado pelo Ruthless PM Auditor: APROVADO\`.`
    }
  },
  {
    command: '/governance',
    title: 'IT Executive Governance & Cloud FinOps',
    description: 'Governança executiva de TI apoiada por scripts determinísticos em Python: cálculo exato de SLA/MTTR, rateio Cloud FinOps por unidade, auditoria anti-jargão e renderização HTML via DXE.',
    type: 'analysis',
    tags: ['Governança', 'FinOps', 'SLA', 'C-Level', 'Python'],
    content: {
      en: `# Workflow: /governance

<meta>
  <trigger>/governance</trigger>
  <description>Master orchestration workflow for IT Executive Reporting, SLA auditing, Cloud FinOps cost allocation, and C-Level reporting. Chains Python deterministic calculation scripts, IT governance translation, Multi-Agent Ruthless Audit, and DXE visual HTML generation.</description>
</meta>

## Step 1 — Data & Metric Ingestion
Ingests incident logs, cloud billing exports, and operational metrics for the target governance period.

## Step 2 — Script-Augmented Deterministic Calculation
Executes Python calculation scripts (\`sla_health_checker.py\`, \`finops_calculator.py\`, \`analyze_data.py\`) to compute exact uptime percentages, MTTR, per-unit cost allocation, and Auto Scaling savings without LLM math hallucinations.

## Step 3 — C-Level Translation & Draft Approval (Confirm Always)
Loads \`it-executive-governance\`, \`finops-cloud-cost\`, and \`data-analyst\` skills to translate technical metrics into C-Level business language and presents the Executive Summary Draft for confirmation.

## Step 4 — Multi-Agent Ruthless Governance Audit & DXE HTML Delivery
Audits the report for zero untranslated technical jargon and 100% numeric parity with Python outputs, then routes to \`dxe-executive-report\` to render a responsive, print-ready HTML artifact.`,
      pt: `# Workflow: /governance

<meta>
  <trigger>/governance</trigger>
  <description>Orquestração mestre para Relatórios Executivos de TI, auditoria de SLA, alocação de custos Cloud FinOps e comunicação C-Level. Encadeia scripts Python determinísticos, tradução executiva, Multi-Agent Ruthless Audit e geração visual HTML via DXE.</description>
</meta>

## Step 1 — Ingestão de Dados e Métricas Operacionais
Identifica logs de incidentes, faturas de nuvem (AWS/GCP/Azure) e volumetria operacional do período avaliado.

## Step 2 — Fase de Cálculo Determinístico via Python
Executa scripts Python (\`sla_health_checker.py\`, \`finops_calculator.py\`, \`analyze_data.py\`) para calcular com precisão exata o Uptime %, MTTR, rateio por clínica/unidade e economia de Auto Scaling, eliminando alucinações numéricas.

## Step 3 — Tradução C-Level & Aprovação de Rascunho (Confirm Always)
Carrega as skills \`it-executive-governance\`, \`finops-cloud-cost\` e \`data-analyst\` para traduzir indicadores técnicos em linguagem executiva de negócios e apresenta o rascunho para confirmação.

## Step 4 — Ruthless Governance Audit & Renderização HTML DXE
Dispara o **Ruthless Governance Auditor** (garantindo zero jargão técnico não traduzido e fidelidade de 100% aos scripts Python) e aciona \`dxe-executive-report\` para entregar o relatório final em HTML responsivo.`
    }
  },
  {
    command: '/experience',
    title: 'DXE Visual Architecture & Concept Prototyping',
    description: 'Orquestrador supremo de Engenharia de Experiência (DXE): roteia entre 8 skills visuais especializadas, aplica padrão Dark Mode Obsidian/Carmesim e valida via Ruthless UX Auditor.',
    type: 'primary',
    tags: ['UI/UX', 'DXE', 'Obsidian Dark', 'Pitch Deck', 'HTML'],
    content: {
      en: `# Workflow: /experience

<meta>
  <trigger>/experience</trigger>
  <description>Master orchestration workflow for UI/UX experience creation, strategic business documents, visual pitch decks, and web interface prototypes. Chains context discovery, SKILL routing, Visual Plan confirmation, and Multi-Agent Ruthless UX Audit.</description>
</meta>

## Step 1 — Context Discovery & Mandatory Obsidian Identity
Extracts target audience, primary goal, and output format. Enforces the default signature visual identity: **Dark Mode Obsidian (\`#0c0c0e\`), Graphite (\`#141417\`), Crimson accent (\`#FF2A2A\`), and Space Grotesk / Inter / JetBrains Mono** typography.

## Step 2 — Specialized DXE SKILL Routing
Routes automatically to the specialized DXE skill in \`C:\\Users\\paulo\\workspace\\dev\\.agents\\skills\`:
- \`dxe-professional-document\`, \`dxe-commercial-proposal\`, \`dxe-executive-dossier\`, \`dxe-executive-report\`, \`dxe-technical-documentation\`, \`dxe-business-presentation\`, \`dxe-business-case-study\`, or \`dxe-concept-prototyper\`.

## Step 3 — Visual & Structural Plan (Confirm Always)
Presents the complete UX & Visual Plan (audience, aesthetic tokens, selected visual components, and section structure) and waits for explicit user approval before generating code.

## Step 4 — Cognitive Load Generation & Ruthless UX Audit Gate
Applies chunking (max 4 lines per text block, benefits before features) and triggers the **Ruthless UX/UI Auditor** to verify WCAG AA contrast, heading hierarchy, and absence of meta-labels before delivering with the \`🟢 Auditado pelo Ruthless UX Auditor: APROVADO\` seal.`,
      pt: `# Workflow: /experience

<meta>
  <trigger>/experience</trigger>
  <description>Orquestração mestre para criação de Experiências UI/UX, documentos estratégicos de negócio, pitch decks visuais e protótipos de interface web. Encadeia descoberta de contexto, roteamento de SKILLS DXE, aprovação de Plano Visual e Multi-Agent Ruthless UX Audit.</description>
</meta>

## Step 1 — Descoberta de Contexto & Identidade Obsidian Obrigatória
Extrai público-alvo, objetivo estratégico e formato de saída. Aplica como referência padrão obrigatória a identidade **Dark Mode Obsidian (\`#0c0c0e\`), Graphite (\`#141417\`), acento Carmesim (\`#FF2A2A\`) e tipografia Space Grotesk / Inter / JetBrains Mono**.

## Step 2 — Roteamento para SKILL DXE Especialista
Seleciona a skill especialista correspondente em \`C:\\Users\\paulo\\workspace\\dev\\.agents\\skills\`:
- \`dxe-professional-document\`, \`dxe-commercial-proposal\`, \`dxe-executive-dossier\`, \`dxe-executive-report\`, \`dxe-technical-documentation\`, \`dxe-business-presentation\`, \`dxe-business-case-study\` ou \`dxe-concept-prototyper\`.

## Step 3 — Plano Visual & Estrutural (Confirm Always)
Declara o plano completo de experiência visual e estrutura de blocos para aprovação explícita do usuário antes de gerar qualquer código HTML/CSS.

## Step 4 — Geração com Carga Cognitiva Controlada & Ruthless UX Audit
Aplica *chunking* (máximo de 4 linhas por bloco, benefícios antes de features) e dispara o **Subagente Auditor (Ruthless UX/UI Auditor)** para validar contraste WCAG AA, hierarquia H1→H2→H3 e ausência de muros de texto antes de entregar com o selo \`🟢 Auditado pelo Ruthless UX Auditor: APROVADO\`.`
    }
  },
  {
    command: '/prompt',
    title: 'Prompt Architecture & Absolute Governance Engine',
    description: 'Motor de governança absoluta e auditoria de PROMPTS e WORKFLOWS: opera com isolamento estrito de escopo, diagnóstico em 5 dimensões, refatoração XML/Guardrails e 5 módulos de stress test.',
    type: 'action',
    tags: ['Prompt Engineering', 'Governança Absoluta', 'Meta-Prompting', 'Auditoria'],
    content: {
      en: `# Workflow: /prompt

<meta>
  <trigger>/prompt</trigger>
  <description>Master orchestration workflow for absolute governance, rigorous structural analysis, objective classification, and technical optimization of PROMPTS and WORKFLOWS. Enforces strict scope isolation, role immutability, multi-dimensional diagnostic evaluation, and cycle closure boundaries.</description>
</meta>

## Step 1 — Absolute Governance & Structural Discovery
Operates strictly as an evaluator of PROMPTS and WORKFLOWS (never executes the analyzed prompt or shifts persona). Extracts artifact type, central objective, target LLM, and declared guardrails.

## Step 2 — Specialized SKILLS Cross-Reference & Maturity Classification
Cross-references against \`prompt-engine\`, \`prompt-engineer\`, and \`llm-prompt-optimizer\`. Classifies maturity into **🔴 Draft**, **🟡 Structured**, or **🟢 Professional**.

## Step 3 — 5-Dimensional Deep Technical Diagnosis
Delivers a rigorous audit across 5 dimensions:
1. Structural Diagnosis (delimiters, input/instruction/output separation)
2. Technical Classification (Role-prompting, Few-Shot, CoT, ReAct, Negative Constraints)
3. Hidden Assumptions
4. Strengths
5. Risk Vectors (injection, ambiguity, cognitive loops, token bloat)

## Step 4 — Unified Strategic Recommendation & Refactored Delivery
Emits a single primary recommendation (**Maintain**, **Spot Fix**, **Strategic Adjustment**, **Restructure**, or **Modularize**), delivers the optimized artifact ready to copy, offers 5 Advanced Stress-Test Modules, and closes with an isolated cycle marker.`,
      pt: `# Workflow: /prompt

<meta>
  <trigger>/prompt</trigger>
  <description>Orquestração mestre para governança absoluta, análise estrutural rigorosa, classificação objetiva e otimização técnica de PROMPTS e WORKFLOWS. Impõe isolamento estrito de escopo, imutabilidade de papel, diagnóstico em 5 dimensões e marcadores de fechamento de ciclo.</description>
</meta>

## Step 1 — Protocolo de Governança Absoluta & Identificação
Opera exclusivamente como avaliador técnico de PROMPTS e WORKFLOWS (jamais executa o prompt analisado ou muda de papel). Extrai tipo do artefato, objetivo central, LLM alvo e estrutura declarada.

## Step 2 — Cruzamento com SKILLS & Classificação de Maturidade
Cruza o artefato com as skills \`prompt-engine\`, \`prompt-engineer\` e \`llm-prompt-optimizer\`, classificando-o em **🔴 Rascunho**, **🟡 Estruturado** ou **🟢 Profissional**.

## Step 3 — Diagnóstico Técnico Profundo em 5 Dimensões
Entrega avaliação detalhada cobrindo:
1. Diagnóstico Estrutural (delimitadores Markdown/XML e separação input/system/output)
2. Classificação Técnica (Role-based, Few-Shot, CoT, ReAct, Restrições Negativas)
3. Suposições Ocultas
4. Pontos Fortes
5. Pontos de Risco (vetores de injeção/jailbreak, ambiguidade, desperdício de tokens)

## Step 4 — Recomendação Estratégica Única & Refatoração Pronta
Emite exatamente uma recomendação primária (**Manter**, **Ajuste Pontual**, **Ajuste Estratégico**, **Reestruturação** ou **Modularização**), entrega a versão otimizada pronta para uso, disponibiliza os 5 Módulos Avançados (Stress Test, Trade-offs, Escala, Multi-Perfil, Benchmarking) e encerra o ciclo com isolamento de contexto.`
    }
  },
  {
    command: '/chat',
    title: 'High-Precision Scope Analyst & Anti-Ambiguity Filter',
    description: 'Filtro anti-ambiguidade de alta precisão: detecta termos vagos ou subjetivos, bloqueia gerações precipitadas e formula de 2 a 3 perguntas cirúrgicas para alinhar Objetivo, Restrições e Formato de Saída.',
    type: 'primary',
    tags: ['Escopo', 'Anti-Ambiguidade', 'Triagem', 'Clareza'],
    content: {
      en: `# Workflow: /chat

<meta>
  <trigger>/chat</trigger>
  <description>Acts as a High-Precision Scope Analyst and anti-ambiguity filter, ensuring no project, study, or task starts with vague, subjective, or incomplete requirements.</description>
  <critical>Execute all steps in exact order. If any gray area exists, BLOCK premature generation of final content and formulate 2 to 3 surgical questions before delivering the result.</critical>
</meta>

## Step 1 — Role & Context
Operates as a **High-Precision Scope Analyst** whose primary function is to act as an **anti-ambiguity filter**, preventing wasted iterations caused by underspecified prompts.

## Step 2 — Operational Protocol (Anti-Ambiguity)
Before processing any final answer, executes three internal checks:
1. **Ambiguity Detection**: Identifies subjective terms (*"fast"*, *"good"*, *"best"*), missing context (*"write a script"*), or omitted constraints (audience, format, platform).
2. **Interaction Mode**: If any gray area exists, **BLOCKS** final content generation immediately.
3. **Scoping Questions**: Formulates **between 2 and 3 surgical multiple-choice questions** focused on extracting **Objective**, **Constraints**, and **Output Format**.

## Step 3 — Standardized Clarification Output
Presents a structured multiple-choice alignment menu (Options A, B, C) for each surgical question and waits for the user's answers before generating the final deliverable.`,
      pt: `# Workflow: /chat

<meta>
  <trigger>/chat</trigger>
  <description>Atua como um Analista de Escopo de Alta Precisão e filtro anti-ambiguidade, garantindo que nenhum projeto, estudo ou tarefa seja iniciado com requisitos vagos, subjetivos ou incompletos.</description>
  <critical>Execute todos os passos na ordem exata. Se houver qualquer área cinzenta, BLOQUEIE a geração do conteúdo final e formule entre 2 e 3 perguntas cirúrgicas antes de entregar o resultado.</critical>
</meta>

## Step 1 — Papel & Contexto
Atua como um **Analista de Escopo de Alta Precisão**, cuja função central é operar como um **filtro anti-ambiguidade**, impedindo que tarefas ou projetos comecem baseados em suposições.

## Step 2 — Protocolo Operacional (Anti-Ambiguidade)
Antes de processar qualquer entrega final, executa internamente:
1. **Detecção de Ambiguidade**: Identifica termos subjetivos (*"rápido"*, *"bom"*, *"melhor"*), falta de contexto (*"fazer um script"*) ou ausência de restrições (público, formato, plataforma).
2. **Modo de Interação**: Se houver qualquer área cinzenta, **BLOQUEIA** imediatamente a geração precipitada do conteúdo final.
3. **Perguntas de Escopo**: Formula **exatamente entre 2 e 3 perguntas cirúrgicas** de múltipla escolha focadas em extrair **Objetivo**, **Restrições** e **Formato de Saída**.

## Step 3 — Modelo Padronizado de Alinhamento
Apresenta um menu objetivo com opções (A, B, C) para cada pergunta cirúrgica e aguarda a confirmação das variáveis críticas antes de entregar o resultado definitivo.`
    }
  }
];

