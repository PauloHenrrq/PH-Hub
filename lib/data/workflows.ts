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
    title: 'Zero-to-One Builder',
    description: 'Algoritmo mestre de desenvolvimento iterativo. Desenvolve a arquitetura de features do zero até o deploy inicial.',
    type: 'action',
    tags: ['Iterativo', 'TDD', 'Feature'],
    content: {
      en: `# Workflow: /build

<meta>
  <trigger>/build</trigger>
  <description>Master orchestration engine for zero-to-one project construction or heavy feature development. Chains planning, modeling, and iterative coding in a controlled flow.</description>
</meta>

## Step 1 — Context & Planning
Reads Workspace MD to adapt language and technical rigor. Creates a detailed structural plan including entity modeling, architectural patterns, and API contracts.

## Step 2 — Iterative Build Loop
Layer-by-layer construction:
1. **Persistence**: Data models and migrations.
2. **Business Rules**: Services and core logic.
3. **Controllers/Actions**: Routes and request processing.
4. **Interface**: UI components and final integration.

## Step 3 — Validation Checklist
Final scan for forgotten logs, explicit error handling, and compliance with the project's TypeScript level.`,
      pt: `# Workflow: /build

<meta>
  <trigger>/build</trigger>
  <description>Motor de orquestração mestre para construção de projetos do zero ou desenvolvimento de grandes features. Encadeia planejamento, modelagem e codificação iterativa em um fluxo controlado.</description>
</meta>

## Step 1 — Contexto e Planejamento
Leitura do Workspace MD para adaptar a linguagem e o rigor técnico. Criação de um plano estrutural detalhado incluindo modelagem de entidades, padrões arquiteturais e contrato de API.

## Step 2 — Loop de Construção Iterativo
Construção camada por camada:
1. **Persistência**: Modelos de dados e migrações.
2. **Regras de Negócio**: Serviços e lógica central.
3. **Controladores/Actions**: Rotas e processamento de requests.
4. **Interface**: Componentes UI e integração final.

## Step 3 — Checklist de Validação
Varredura final por logs esquecidos, tratamento de erros explícito e conformidade com o nível de TypeScript do projeto.`
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
    title: 'Release & Git',
    description: 'Saúde pré-commit: gera logs semânticos automáticos (Semantic Commits), passa por heurísticas leves de verificação e consolida os checkpoints.',
    type: 'action',
    tags: ['Git', 'Semantic', 'Release'],
    content: {
      en: `# Workflow: /commit

<meta>
  <trigger>/commit</trigger>
  <description>Scans changes, reviews code health, and generates semantic messages.</description>
</meta>

## Step 1 — Pre-Commit Health Check
Quick scan for forgotten logs, lint alerts, unresolved TODOs, and critical risks like exposed credentials in the code.

## Step 2 — Semantic Suggestion
Classification of changes according to the Conventional Commits standard (feat, fix, refactor, chore, etc.) and generation of a clear, concise message.

## Step 3 — Execution & Next Steps
Git command confirmation and recommendation of the next action (push, opening a PR, or progress log).`,
      pt: `# Workflow: /commit

<meta>
  <trigger>/commit</trigger>
  <description>Varre alterações, revisa a saúde do código e gera mensagens semânticas.</description>
</meta>

## Step 1 — Pre-Commit Health Check
Varredura rápida em busca de logs esquecidos, alertas de lint, TODOs não resolvidos e riscos críticos como credenciais expostas no código.

## Step 2 — Sugestão Semântica
Classificação da mudança de acordo com o padrão Conventional Commits (feat, fix, refactor, chore, etc) e geração de uma mensagem clara e concisa.

## Step 3 — Execução e Próximos Passos
Confirmação do comando git e recomendação da próxima ação (push, abertura de PR ou log de progresso).`
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
  }
];
