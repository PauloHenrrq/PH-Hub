export interface CliVariant {
  name: string;
  command: string;
  description: string;
  url: string;
  benefit: string;
}

export interface Mcp {
  id: string;
  name: string;
  description: string;
  tag: string;
  referenceUrl: string;
  icon: string | React.ReactNode;
  cliVariant?: CliVariant;
  detailedContent?: {
    overview: string;
    features: string[];
    useCase: string;
  };
}

export const mcps: Mcp[] = [
  {
    id: 'context7',
    name: 'Context7',
    description: 'Servidor MCP dedicado à busca de documentação atualizada de frameworks e bibliotecas. Elimina o risco de alucinações injetando guias oficiais no contexto.',
    tag: 'Docs & Setup',
    referenceUrl: 'https://context7.com/docs/resources/all-clients',
    icon: '📚',
    cliVariant: {
      name: 'Context7 CLI & Feeds',
      command: 'npx @context7/cli fetch --docs',
      description: 'Download e consulta direta de documentações oficiais em Markdown sem a necessidade de manter um servidor de contexto ativo.',
      url: 'https://context7.com',
      benefit: 'Cache estático local de guias oficiais, permitindo consulta offline e economia total de tokens de protocolo.'
    },
    detailedContent: {
      overview: 'O Context7 atinge a raiz do problema crônico da quebra de APIs em IAs estáticas. Ele intercepta perguntas contextuais e consome documentações oficiais ao vivo.',
      features: [
        'Integração live com documentações robustas (Next.js, Stripe, React, Prisma).',
        'Elimina resíduos arquiteturais vindos do "cutoff date" do LLM principal.',
        'Busca síncrona diretamente no hub mantendo as instâncias limpas do raciocínio da IA.'
      ],
      useCase: 'Bootstrapping de setups recém lançados, updates críticos em pacotes majoritários e busca de sintaxe exata naquelas bibliotecas de terceiros que quebram com frequência.',
    }
  },
  {
    id: 'github',
    name: 'GitHub',
    description: 'Integração de leitura e escrita inteligente. Permite varrer repositórios, abrir PRs, gerenciar branches e interagir massivamente com Issues via agente local.',
    tag: 'Versionamento',
    referenceUrl: 'https://github.com/github/github-mcp-server',
    icon: '🐙',
    cliVariant: {
      name: 'GitHub CLI (gh)',
      command: 'gh pr create --fill | gh issue list | gh repo clone',
      description: 'A ferramenta de linha de comando oficial do GitHub para interagir com o repositório, issues, PRs e GitHub Actions diretamente pelo terminal.',
      url: 'https://cli.github.com/',
      benefit: 'Execução local instantânea, autenticação segura nativa com o Git e comandos sem custo de tokens de protocolo intermediário.'
    },
    detailedContent: {
      overview: 'Este servidor transcende a busca em código e passa para a governança direta. O GitHub MCP engata na nuvem analisando o histórico bruto e as threads da organização.',
      features: [
        'Automação do ciclo de vida issue-PR-Review de ponta a ponta sem script blocks.',
        'Capacidade nativa de clonagem seletiva, checkouts e pesquisa sem ter repos local.',
        'Leitura cirúrgica de diffs abertos entre Pull Requests não unificadas.'
      ],
      useCase: 'Refatoração contínua de Code Reviews lentos e revisão macro-estrutural de issues antigas atreladas a reboots de repositórios herdados (Legacy Code).',
    }
  },
  {
    id: 'filesystem',
    name: 'File System',
    description: 'A ponte definitiva entre a IA e seu SO. Permite navegação autônoma em diretórios, leitura de múltiplos documentos em massa e escavação de logs cruzados.',
    tag: 'Sistema',
    referenceUrl: 'https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem',
    icon: '📂',
    cliVariant: {
      name: 'Ripgrep & Shell Nativo (rg / fd)',
      command: 'rg "pattern" | fd -e ts | tree -L 2',
      description: 'Utilitários nativos de alta performance em Rust e shell para busca de expressões regulares, listagem de arquivos e inspeção de árvore.',
      url: 'https://github.com/BurntSushi/ripgrep',
      benefit: 'Velocidade incomparável em monorepos massivos com centenas de milhares de linhas e zero consumo de memória em segundo plano.'
    },
    detailedContent: {
      overview: 'A infraestrutura matriz que extingue o isolamento da IA em nuvem. Este host local injeta nos agentes a liberdade de explorar os metadados do disco rígido local e manipular os caminhos sistêmicos reais.',
      features: [
        'Leituras densas em massa, busca pattern-fuzzy e grepping assíncrono interno da máquina.',
        'Modificação multi-arcos permitindo edição e reconstrução de pacotes sem recriar os arquivos.',
        'Analisadores de permissões profundas e árvores recursivas automáticas.'
      ],
      useCase: 'Edição pesada em escopos full-stack monorepo, auditoria forense por dezenas de arquivos desconhecidos e injeção do background contextual diretamente do vscode pro Agente.',
    }
  },
  {
    id: 'postgres',
    name: 'Postgres',
    description: 'Automação profunda de bancos de dados. Autoriza o modelo a analisar schemas, executar queries controladas e sugerir otimizações lendo dados limpos.',
    tag: 'Database',
    referenceUrl: 'https://github.com/crystaldba/postgres-mcp?tab=readme-ov-file',
    icon: '🐘',
    cliVariant: {
      name: 'PostgreSQL CLI (psql & pg_dump)',
      command: 'psql "$DATABASE_URL" -c "EXPLAIN ANALYZE SELECT ..."',
      description: 'O cliente de terminal padrão e robusto para PostgreSQL. Execução de comandos DDL, transações atômicas, migrações e rotinas de backup.',
      url: 'https://www.postgresql.org/docs/current/app-psql.html',
      benefit: 'Acesso nativo a comandos de metadados (\\d+, \\dn), execução de migrações complexas em lote e controle transacional total sem timeouts de bridge.'
    },
    detailedContent: {
      overview: 'Conexão visceral diretamente aos canos do DB relacional. Proporciona habilidade estrutural de analisar dados ou propor índices otimizados baseado nas anomalias reportadas nos logs isolados.',
      features: [
        'Executa leituras read-only focadas no mapeamento cru do SQL e Data Definition lógicas.',
        'Análise macro das estatísticas ativas e afunilamentos do sistema de locks dinamicamente.',
        'Checagens iterativas que constroem visualmente as dependências entre dezenas de Constraints/Relations complexas.'
      ],
      useCase: 'Refatorações orientadas a banco no meio ao back-end que preveem quebras invisíveis nos models, mitigando os side-effects comuns durante grandes DB migrations do zero.',
    }
  },
  {
    id: 'playwright',
    name: 'Playwright',
    description: 'Automação de navegador para e2e. O agente navega visualmente na interface, preenche formulários, executa rotinas de teste e raspa dados do canvas web vivo.',
    tag: 'Browser & E2E',
    referenceUrl: 'https://github.com/microsoft/playwright-mcp',
    icon: '🎭',
    cliVariant: {
      name: 'Playwright Test CLI (@playwright/test)',
      command: 'npx playwright test --ui | npx playwright codegen localhost:3000',
      description: 'Framework de testes end-to-end e automação de navegador da Microsoft executado diretamente no terminal e CI/CD.',
      url: 'https://playwright.dev/docs/intro',
      benefit: 'Execução paralela ultrarrápida, gravação de traces em vídeo, visualizador interativo em HTML e geração de código de teste em tempo real via codegen.'
    },
    detailedContent: {
      overview: 'Habilidades táteis visuais implementadas diretamente no processamento do agente. Traz poder para navegar DOM e instanciar instâncias reais baseadas em chromium na IDE.',
      features: [
        'Renderização cross-browser em loop com preenchimento iterativo form-to-database automatizado.',
        'Visualização instantânea e scraping flexível lidando com iframes ou Shadow DOM em tempo real.',
        'Conexão multimodal injetando visualmente screenshots ao fluxo criativo para iterações do web-design.'
      ],
      useCase: 'QA Autônomo para test cases imersivos: raspa layouts inacessíveis por chaves-API estáticas baseados nos delays do frontend em SPA interativos.',
    }
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'Centro de comando em grupo. Permite aos agentes intervir em threads, escutar suporte da eng e notificar gargalos em tempo real via canais de build e CI.',
    tag: 'Operacional',
    referenceUrl: 'https://github.com/korotovsky/slack-mcp-server?tab=readme-ov-file',
    icon: '💬',
    cliVariant: {
      name: 'Slack Webhooks & API cURL',
      command: 'curl -X POST -H "Content-type: application/json" --data \'{"text":"Build Sucesso"}\' $SLACK_WEBHOOK_URL',
      description: 'Disparo direto de notificações, mensagens formatadas e relatórios de esteira via webhooks de uma linha ou CLI.',
      url: 'https://api.slack.com/messaging/webhooks',
      benefit: 'Notificações instantâneas em esteiras de deploy e scripts de finalização sem necessidade de conexão bidirecional pesada.'
    },
    detailedContent: {
      overview: 'Interface orquestradora corporativa que eleva status de scripts terminais mudos para membros integrados ativamente nas rotinas ágeis e pipelines do desenvolvimento Slack-driven.',
      features: [
        'Postagem formatada de erros ou patches vindos das esteiras ativas automatizadas nos CI/CD pipelines da aplicação.',
        'Possibilita "Listen" de feeds ou threads onde o fluxo da eng é destrinchando o projeto taticamente humano.',
        'Dinamização assíncrona gerando pequenos resumos táticos diários na subrotina de finalização de PR.'
      ],
      useCase: 'Emissão assíncrona de sumários quando branches gigantes explodem erros na pipe, reportando a origem técnica com os logs formatados limpos sem a gerência precisar garimpar GitHub actions.',
    }
  },
  {
    id: 'googlemaps',
    name: 'Google Maps',
    description: 'Mapeamento espacial. Capacidade avançada de roteamento, cálculo Matrix de distância e integração com coordenadas lat/long via Places API estendida.',
    tag: 'GeoAPI',
    referenceUrl: 'https://github.com/modelcontextprotocol/servers-archived/tree/main/src/google-maps',
    icon: '🗺️',
    cliVariant: {
      name: 'Google Maps Node SDK / REST cURL',
      command: 'curl "https://maps.googleapis.com/maps/api/geocode/json?address=Sao+Paulo&key=$MAPS_KEY"',
      description: 'Consumo direto das APIs de geocodificação, rotas e lugares via cURL ou SDK oficial Node.js.',
      url: 'https://developers.google.com/maps/documentation',
      benefit: 'Controle de payloads brutos, cache determinístico de respostas e economia de faturamento em requisições repetitivas.'
    },
    detailedContent: {
      overview: 'Geoprocessamento infra-estrutural tático injetado no modelo lógico, concedendo percepção linear entre vetores globais ou locais, conectando-se na API massiva de localidades estelares do google.',
      features: [
        'Bypass simplificado e ágil à geocodificação direta reversa inter-lógica (cruzamentos lat x adress string).',
        'Geração paramétrica pesada cruzando métricas viárias complexas focadas em Matriz Distancial em escala.',
        'Busca fluida sem onerar a cota de uso desnecessariamente do front-end apenas para queries teóricas pre-deployment.'
      ],
      useCase: 'Alimentar painéis locais do ambiente ou testar logísticas operacionais de um software last-mile mockando rotas difíceis para validar modelos antes de commitar dados pesados.',
    }
  },
  {
    id: 'figma',
    name: 'Figma',
    description: 'Integração de design inteligente. Extração direta de tokens, layouts e assets das pranchetas do Figma, viabilizando traduções rápidas e limpas UI para código.',
    tag: 'Design & UX',
    referenceUrl: 'https://github.com/glips/figma-context-mcp',
    icon: '🎨',
    cliVariant: {
      name: 'Figma Tokens CLI (figma-export)',
      command: 'npx figma-export use-config .figma-export.js',
      description: 'Ferramenta de automação para extrair ícones SVG, estilos e design tokens diretamente do Figma para o repositório.',
      url: 'https://github.com/marcomontalbano/figma-export',
      benefit: 'Sincronização estática e versionável de assets e tokens CSS/Tailwind sem intervenção conversacional.'
    },
    detailedContent: {
      overview: 'Reduz agressivamente a ponte interpretativa entre a direção de arte das pranchetas conceituais Figma com a renderização sintética nos compilações flexíveis do código limpo.',
      features: [
        'Injeção direta nos nodes vetoriais do Figma dentro da máquina como arrays hierárquicas contextualizadas matemáticas.',
        'Alinhamento e tradução nativa para padronizar margin/padding e paletas hex antes da transcrição final manual ao Frontend.',
        'Download direto sem onerar abas adjacentes para gerar mockups baseados nas definições estáticas do board design.'
      ],
      useCase: 'Absolutamente essencial em rotinas Pixel-perfect. Quando se necessita estruturar um wireframe complexo e garantir traduções limpas sem chuts métricos da IA, lendo exatamente os design tokens declarados no Figma e os escrevendo nas folhas de estilo globais (Tawilwind, UI components) nativamente local-to-remote.'
    }
  },
  {
    id: 'serena',
    name: 'Serena',
    description: 'MCP de referência universal para automações lógicas profundas. Adiciona controle massivo em shell e atua como pilar invisível no gerenciamento sistêmico.',
    tag: 'Automação Central',
    referenceUrl: 'https://github.com/oraios/serena',
    icon: '⚙️',
    cliVariant: {
      name: 'Terminal Shell Nativo (PowerShell / Bash)',
      command: 'powershell -Command "..." | bash -c "..."',
      description: 'Execução de subprocessos, scripts de automação e pipelines diretamente no interpretador do sistema operacional.',
      url: 'https://learn.microsoft.com/powershell/',
      benefit: 'Controle irrestrito sobre pipes, variáveis de ambiente, processos de suporte em background e chamadas diretas de kernel.'
    },
    detailedContent: {
      overview: 'A Serena orquestra a central de conexões. Uma interface primária e super-responsiva modelada especialmente sob o capô para coordenar o gerenciador global que mantêm o acesso cross-CLI funcional.',
      features: [
        'Backdoor blindada focado apenas em comandos operacionais do bash shell local de baixo nível (Pipes genéricos restritos).',
        'Fallack fallback inter-operacional invisível agnóstico à máquina conectada em nuvens híbridas locais em containers e VPS.',
        'Integração focada na mitigação de crash loop permitindo inspeções manuais por baixo do protocolo alto.'
      ],
      useCase: 'Pilar sistêmico, útil indiretamente na maioria dos setups baseline por coordenar subprocessos globais sem explodir tokens quando algo estrutural dá erro entre diferentes MCPs simultâneos.'
    }
  },
  {
    id: 'neon',
    name: 'Neon',
    description: 'Banco de dados serverless com branching instantâneo. Permite criar ramificações isoladas do banco para testar migrações, queries e deploys sem afetar a produção.',
    tag: 'Database & Branching',
    referenceUrl: 'https://neon.tech/docs/introduction',
    icon: '⚡',
    cliVariant: {
      name: 'Neon CLI (neonctl)',
      command: 'neonctl branches create --name feature-sandbox | neonctl connection-string',
      description: 'Linha de comando oficial do Neon para gerenciamento de banco serverless, ramificações sob demanda e credenciais efêmeras.',
      url: 'https://neon.tech/docs/reference/cli-install',
      benefit: 'Criação e deleção de ramificações do banco de dados em segundos para esteiras de CI e testes isolados sem abrir o navegador.'
    },
    detailedContent: {
      overview: 'O Neon estende o Postgres padrão com branching de banco de dados na velocidade de ramificações do Git. O agente pode criar ramificações isoladas (compute e storage) dinamicamente para rodar migrações de dados pesadas ou testar queries em ambientes de sandbox.',
      features: [
        'Criação e remoção de branches de banco de dados instantâneos via chamadas de API.',
        'Provisionamento automático de conexões isoladas e seguras para cada branch de desenvolvimento.',
        'Histórico completo de auditoria e monitoramento de queries lentas diretamente no console.'
      ],
      useCase: 'Ideal para automação de CI/CD, testes de estresse em migrações antes de rodar em produção e garantia de sandboxes isoladas para cada agente ou desenvolvedor programando em paralelo.'
    }
  },
  {
    id: 'stitch',
    name: 'Stitch',
    description: 'Orquestrador de design e prototipagem inteligente. Permite criar, carregar e atualizar sistemas de design e layouts de tela usando IA direto do prompt.',
    tag: 'Design & UI',
    referenceUrl: 'https://stitch.withgoogle.com/',
    icon: '🎨',
    cliVariant: {
      name: 'Stitch CLI / Design Prototyper',
      command: 'npx @google/stitch-cli init --theme dark',
      description: 'Utilitário de linha de comando para scaffold e sincronização de protótipos de tela gerados por IA com o frontend.',
      url: 'https://stitch.withgoogle.com/',
      benefit: 'Scaffold direto de estruturas de componentes na árvore de arquivos local.'
    },
    detailedContent: {
      overview: 'O Stitch simplifica a ponte entre a concepção de ideias visuais e a criação de layouts, permitindo que a IA manipule tokens e telas diretamente. Integra-se ao design system para gerar novas variantes de telas e documentar decisões de design.',
      features: [
        'Geração de telas a partir de prompts descritivos estruturados.',
        'Edição e atualização iterativa de design systems e layouts de tela.',
        'Mapeamento semântico de componentes para facilitar a exportação ao frontend.'
      ],
      useCase: 'Desenvolvimento ágil de interfaces, criação de protótipos de alta fidelidade sem a necessidade de desenhar cada elemento manualmente e validação de fluxos de navegação.'
    }
  },
  {
    id: 'paper',
    name: 'Paper MCP',
    description: 'Servidor MCP bidirecional para design visual nativo em HTML/CSS. Permite que agentes (Cursor, Claude Code) leiam, criem frames, ajustem estilos e sincronizem layouts diretamente no canvas.',
    tag: 'Design & Canvas HTML',
    referenceUrl: 'https://paper.design',
    icon: '📐',
    cliVariant: {
      name: 'Paper Exporter CLI',
      command: 'npx paper-design export --format html-css',
      description: 'Exportação e sincronização estática de telas e componentes HTML/CSS a partir de pranchetas do Paper.',
      url: 'https://paper.design',
      benefit: 'Tradução direta de tela para código limpo sem depender de conexões persistentes de socket.'
    },
    detailedContent: {
      overview: 'O Paper constrói telas sobre os padrões fundamentais da web (HTML/CSS) em vez de formatos proprietários em WebGL. Seu servidor MCP oferece uma via de mão dupla real: a IA pode não apenas inspecionar a interface, mas criar layouts responsivos, alterar propriedades visuais e gerar código com custo reduzido de tokens.',
      features: [
        'Manipulação bidirecional: agentes podem ler, criar e alterar frames e estilos em tempo real.',
        'Estrutura nativa em HTML/CSS, garantindo fidelidade absoluta na tradução de design para componentes frontend.',
        'Integração com Claude Code e Cursor, viabilizando o fluxo de "vibe-designing" conversacional.'
      ],
      useCase: 'Prototipagem rápida de interfaces de usuário, criação de design systems sincronizados com código real e geração de telas diretamente via agentes sem necessidade de desenho vetorial manual.'
    }
  }
];


