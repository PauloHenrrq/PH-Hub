export interface Framework {
  id: string;
  icon: string;
  tag: string;
  name: string;
  motto: string;
  description: string;
  installCommand?: string;
  usage: string;
  url: string;
  detailedContent?: {
    overview: string;
    features: string[];
    useCase: string;
  };
}

export const frameworks: Framework[] = [
  {
    id: 'gsd-core',
    icon: '🎯',
    tag: 'SPEC-DRIVEN / SUBAGENTS',
    name: 'GSD-Core',
    motto: 'Git. Ship. Done.',
    description: 'Framework de meta-prompting e Spec-Driven Development (SDD) para conduzir coding agents em entregas estruturadas e previsíveis.',
    installCommand: 'npx @opengsd/gsd-core@latest',
    usage: 'Orquestrar desenvolvimento em 5 fases (Discuss → Plan → Execute → Verify → Ship) isolando subagentes com contexto limpo.',
    url: 'https://github.com/open-gsd/gsd-core',
    detailedContent: {
      overview: 'O GSD-Core (anteriormente GSD / Get Shit Done) transforma sessões caóticas de chat em esteiras de engenharia determinísticas. Ele gerencia o estado da sessão em arquivos locais legíveis (.planning/STATE.md, CONTEXT.md) e despacha subagentes com contexto limpo para tarefas pesadas, eliminando o apodrecimento de contexto (context rot).',
      features: [
        'Ciclo obrigatório de 5 fases com checkpoints de validação em cada etapa.',
        'Persistência em disco do estado do projeto, permitindo retomar sessões sem perda de histórico.',
        'Subagentes efêmeros isolados para tarefas de alto consumo de tokens, mantendo a janela mestre limpa.',
        'Diagnósticos automatizados antes de considerar qualquer fase como concluída.'
      ],
      useCase: 'Desenvolvimento de features complexas do zero (zero-to-one) onde múltiplos arquivos são criados e é exigida validação automatizada antes da entrega.'
    }
  },
  {
    id: 'ponytail',
    icon: '👱‍♂️',
    tag: 'ANTI-OVERENGINEERING',
    name: 'Ponytail',
    motto: 'The best code is the code you never wrote',
    description: 'Framework para agentes de código baseado na filosofia do "desenvolvedor sênior preguiçoso", combatendo ativamente o over-engineering.',
    installCommand: 'git clone https://github.com/DietrichGebert/ponytail',
    usage: 'Injetar a "Ladder of Laziness" em 7 níveis para forçar o agente a reutilizar APIs nativas e utilitários existentes antes de codar.',
    url: 'https://github.com/DietrichGebert/ponytail',
    detailedContent: {
      overview: 'O Ponytail combate a tendência natural dos LLMs de gerar bibliotecas extras, wrappers redundantes e classes desnecessárias. Ele injeta diretrizes estritas que forçam o agente a esgotar soluções nativas e reutilizar o ecossistema existente.',
      features: [
        'Sistema "Ladder of Laziness" (7 níveis) para poda ativa de código redundante antes da digitação.',
        'Compatibilidade com mais de 20 agentes (Claude Code, Cursor, Windsurf, Aider, Cline).',
        'Prevenção contra dependências fantasmas e proliferação de pacotes npm/pip desnecessários.',
        'Redução direta de linhas de código geradas e de custos de manutenção de longo prazo.'
      ],
      useCase: 'Codebases consolidadas onde novas funcionalidades devem respeitar estritamente o código legado e as convenções internas sem inflar a dívida técnica.'
    }
  },
  {
    id: 'caveman',
    icon: '🦴',
    tag: 'TOKEN EFFICIENCY',
    name: 'Caveman',
    motto: 'Why use many token when few token do trick',
    description: 'Proxy local e skill de compressão heurística extrema de contexto para coding agents, cortando até 65% de consumo de tokens.',
    installCommand: 'npx caveman-ai proxy',
    usage: 'Eliminar prolixidade conversacional, aplicar YAGNI agressivo e comprimir logs volumosos de terminal antes da re-injeção no LLM.',
    url: 'https://github.com/JuliusBrussee/caveman',
    detailedContent: {
      overview: 'O Caveman ataca a raiz do desperdício de tokens em coding agents. Ele intercepta conversas e saídas de ferramentas, forçando respostas ultra-concisas e telegráficas, além de comprimir logs volumosos de compilação antes de re-injetá-los no LLM, sem alterar a sintaxe ou a execução do código.',
      features: [
        'Compressão heurística de respostas e raciocínio intermediário sem alterar comandos de código.',
        'Filtro inteligente de logs e saídas de terminal volumosas com economia de até 65% de tokens por iteração.',
        'Redução drástica de latência e custo operacional em sessões longas de desenvolvimento agêntico.',
        'Compatibilidade direta com Claude Code, Cursor, Gemini CLI e OpenAI Codex.'
      ],
      useCase: 'Essencial em fluxos automatizados com loops contínuos de terminal, agentes de testes e sessões intensivas com modelos de ponta.'
    }
  },
  {
    id: 'superpowers',
    icon: '🦸',
    tag: 'TDD & AGENTIC SKILLS',
    name: 'Superpowers',
    motto: 'Discipline & TDD for Coding Agents',
    description: 'Metodologia de engenharia agêntica em SKILL.md criada por Jesse Vincent. Força o modelo a seguir práticas rigorosas de engenheiro sênior.',
    installCommand: 'npx superpowers-skills install',
    usage: 'Impor refinamento de especificações, ciclo de TDD estrito (Red-Green-Refactor) e isolamento em Git worktrees.',
    url: 'https://github.com/obra/superpowers',
    detailedContent: {
      overview: 'Criado por Jesse Vincent e Prime Radiant, o Superpowers cura a tendência das IAs de pular direto para a escrita de código sem planejamento. Ele estrutura o ciclo de vida completo do software através de skills modulares, obrigando o modelo a refinar especificações, validar com o desenvolvedor, criar testes que falhem antes do código (TDD estrito) e isolar o trabalho em worktrees seguros.',
      features: [
        'Brainstorming e refinamento interativo de especificações antes de qualquer edição.',
        'Ciclo de TDD estrito (Red-Green-Refactor) onde os testes devem obrigatoriamente falhar antes da implementação.',
        'Planejamento granular em micro-tarefas (2 a 5 minutos) com validação e subagentes isolados.',
        'Debugging sistemático em 4 fases e isolamento seguro de workspace via Git worktrees.'
      ],
      useCase: 'Desenvolvimento guiado por testes rigorosos e projetos de alta criticidade onde código mal planejado ou sem cobertura de testes é inaceitável.'
    }
  },
  {
    id: 'openspec',
    icon: '📋',
    tag: 'SPEC-DRIVEN / BROWNFIELD',
    name: 'OpenSpec',
    motto: 'Spec-Driven Development for AI',
    description: 'Framework de Spec-Driven Development (SDD) para assistentes de IA em repositórios maduros, substituindo o vibe coding por contratos claros.',
    installCommand: 'npx openspec-cli init',
    usage: 'Utilizar comandos /opsx no repositório (/opsx:explore, /opsx:propose, /opsx:apply, /opsx:verify) para versionar decisões técnicas em arquivos Markdown vivos.',
    url: 'https://github.com/Fission-AI/OpenSpec',
    detailedContent: {
      overview: 'O OpenSpec (Fission-AI) traz governança e previsibilidade para o desenvolvimento com agentes em bases de código existentes (brownfield). Em vez de conversas efêmeras no chat, ele gera artefatos versionados no repositório (proposal.md, spec.md, design.md, tasks.md) que servem como contrato entre o desenvolvedor humano e o agente antes de qualquer linha ser digitada.',
      features: [
        'Ciclo formal de desenvolvimento: explore → propose → apply → verify → archive.',
        'Documentação viva e versionada junto ao código, sem dependências de APIs externas.',
        'Compatibilidade nativa com mais de 30 assistentes (Claude Code, Cursor, Copilot, Gemini CLI).',
        'Foco em bases de código consolidadas (brownfield-first) sem lock-in de fornecedor.'
      ],
      useCase: 'Equipes e desenvolvedores lidando com repositórios legados ou complexos que exigem alinhamento arquitetural prévio e histórico auditável de decisões de design.'
    }
  },
  {
    id: 'dspy',
    icon: '🔮',
    tag: 'PROGRAMAÇÃO DE PROMPTS',
    name: 'DSPy',
    motto: 'Programming—not prompting—foundation models',
    description: 'Framework da Universidade de Stanford que substitui prompts artesanais por módulos programáveis e otimizadores automáticos orientados a métricas.',
    installCommand: 'pip install dspy-ai',
    usage: 'Compilar pipelines de LLM, otimizando automaticamente instruções e demonstrações few-shot sem ajuste manual de texto.',
    url: 'https://github.com/stanfordnlp/dspy',
    detailedContent: {
      overview: 'O DSPy revoluciona a interação com LLMs ao tratar prompts não como strings frágeis, mas como parâmetros compiláveis. Desenvolvedores definem assinaturas e módulos (como ChainOfThought ou ReAct) e o compilador otimiza as instruções e exemplos para maximizar uma métrica de validação definida.',
      features: [
        'Separação rigorosa entre a lógica do programa e as instruções/exemplos do prompt.',
        'Otimizadores automáticos (BootstrapFewShot, MIPRO) que refinam prompts através de busca guiada.',
        'Portabilidade entre modelos: troque de LLM sem precisar reescrever prompts manualmente.',
        'Avaliação sistemática orientada a assertivas e métricas de acurácia.'
      ],
      useCase: 'Aplicações corporativas complexas de extração de dados, agentes multi-etapa e pipelines de RAG que demandam alta confiabilidade e previsibilidade estatística.'
    }
  },
  {
    id: 'langgraph',
    icon: '🕸️',
    tag: 'ORQUESTRAÇÃO / GRAFOS',
    name: 'LangGraph',
    motto: 'Cyclic graph-based multi-agent workflows',
    description: 'Framework de orquestração de sistemas multi-agentes baseado em grafos com suporte a ciclos, persistência de estado e controle humano.',
    installCommand: 'npm install @langchain/langgraph',
    usage: 'Construir agentes autônomos robustos com memória de longo prazo, bifurcações condicionais e intervenção humana (human-in-the-loop).',
    url: 'https://github.com/langchain-ai/langgraph',
    detailedContent: {
      overview: 'Diferente de cadeias lineares (DAGs), o LangGraph permite que agentes operem em loops contínuos de raciocínio, reflexão e auto-correção. Oferece tolerância a falhas com checkpoints de estado automáticos e suporte de primeira classe para pausas e aprovações humanas.',
      features: [
        'Arquitetura em grafos cíclicos com nós, arestas condicionais e estado compartilhado tipado.',
        'Checkpoints integrados para time-travel debugging e recuperação automática após falhas.',
        'Human-in-the-loop nativo: pause a execução para inspeção ou edição de estado pelo operador.',
        'Suporte a streaming de eventos em tempo real para interfaces interativas.'
      ],
      useCase: 'Agentes autônomos de longa duração, assistentes de suporte complexos e sistemas de triagem que exigem supervisão humana em etapas críticas.'
    }
  },
  {
    id: 'behavior-core-skills',
    icon: '🧬',
    tag: 'ORQUESTRAÇÃO DE SKILLS / AGENTES',
    name: 'Behavior Core & Agent Orchestrator',
    motto: 'Context → Decision → Structure → Execution',
    description: 'Ecossistema proprietário de governança cognitiva e mais de 1000 SKILLS especializadas (DXE, FinOps, Multi-Tenant Cloud, MCP Orchestrator, Quality Gate).',
    installCommand: '/skill suggest | /gate | /experience',
    usage: 'Impor a ordem de raciocínio Contexto → Decisão → Estrutura → Execução e rotear tarefas entre agentes especialistas e scripts determinísticos.',
    url: '#workflows',
    detailedContent: {
      overview: 'O Behavior Core governa como os agentes analisam, decidem e constroem dentro do workspace. Combinado ao Agent Orchestrator, MCP Orchestrator e DXE Orchestrator, ele coordena mais de 1000 skills locais (incluindo cálculos determinísticos em Python para FinOps/SLA, auditoria multi-agente com "O Agente Chato" e prototipagem visual Obsidian).',
      features: [
        'Ordem de raciocínio obrigatória (Context → Decision → Structure → Execution) que bloqueia geração precipitada de código.',
        'Roteamento inteligente de SKILLS: DXE Suite (8 especialistas visuais), Cloud Multi-Tenant, FinOps, API Contract Designer e Chat Anti-Ambiguidade.',
        'Governança deliberada de MCPs (mcp-orchestrator + context7-auto-research) priorizando CLIs diretos quando há economia de tokens.',
        'Integração nativa com o Dual-Execution Quality Gate (/gate) para garantir sobriedade técnica e zero over-engineering.'
      ],
      useCase: 'Padronização de engenharia full-stack sênior, criação de documentos executivos C-Level auditados, arquitetura SaaS multi-tenant e governança de commits atômicos.'
    }
  }
];
