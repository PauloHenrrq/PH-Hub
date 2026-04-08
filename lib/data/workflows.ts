export type WorkflowType = 'primary' | 'analysis' | 'action';

export interface Workflow {
  command: string;
  title: string;
  description: string;
  type: WorkflowType;
  tags: string[];
}

export const workflows: Workflow[] = [
  {
    command: '/init',
    title: 'Project Initialization',
    description: 'Protocolo de fundação: scaffold estrutural, definição de tipagem progressiva, instalação de dependências validadas e criação de README e regras globais de projeto.',
    type: 'primary',
    tags: ['Arquitetura', 'Scaffold', 'Typescript']
  },
  {
    command: '/build',
    title: 'Zero-to-One Builder',
    description: 'Algoritmo mestre de desenvolvimento iterativo. Desenvolve a arquitetura de features do zero até o deploy inicial.',
    type: 'action',
    tags: ['Iterativo', 'TDD', 'Feature']
  },
  {
    command: '/review',
    title: 'Adaptive PR Review',
    description: 'Senhoridade sob demanda: análise adaptável ao seu nível de TypeScript que sugere melhorias profundas sem policiar desnecessariamente.',
    type: 'analysis',
    tags: ['Qualidade', 'Segurança', 'Mentor']
  },
  {
    command: '/refactor',
    title: 'Arquitetura & Clean Code',
    description: 'Reconstrução seletiva e segura: divide o refactoring complexo em planos de ação de prioridade alta, média e baixa. Execução em blocos testáveis.',
    type: 'action',
    tags: ['Clean Architecture', 'SOLID']
  },
  {
    command: '/debug',
    title: 'Diagnóstico & Fixes',
    description: 'Detetive avançado do terminal. Lê erros de ambiente, classifica a gravidade, explora *root causes* e sugere correções documentadas.',
    type: 'analysis',
    tags: ['Root Cause', 'Terminal']
  },
  {
    command: '/commit',
    title: 'Release & Git',
    description: 'Saúde pré-commit: gera logs semânticos automáticos (Semantic Commits), passa por heurísticas leves de verificação e consolida os checkpoints.',
    type: 'action',
    tags: ['Git', 'Semantic', 'Release']
  },
  {
    command: '/test',
    title: 'Testes & Cobertura',
    description: 'Análise de coverage gaps, sugestão de testes unitários por camada e comandos de validação automatizados.',
    type: 'analysis',
    tags: ['Jest', 'Vitest', 'Coverage']
  },
  {
    command: '/audit',
    title: 'Auditoria de Segurança',
    description: 'Security audit focada: OWASP, detecção superficial de secrets, dependências vulneráveis e problemas de CORS/SSRF.',
    type: 'analysis',
    tags: ['Segurança', 'OWASP']
  },
  {
    command: '/doc',
    title: 'Documentação Automática',
    description: 'Detecta assinaturas de rotas e gera JSDoc, Server Actions API docs ou README. Entrega blocos prontos para o código.',
    type: 'primary',
    tags: ['JSDoc', 'Docs']
  }
];
