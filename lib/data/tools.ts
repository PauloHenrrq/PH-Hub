export interface Tool {
  icon: string;
  tag: string;
  name: string;
  description: string;
  usage: string;
  url: string;
  detailedContent?: {
    overview: string;
    features: string[];
    useCase: string;
  };
}

export const tools: Tool[] = [
  {
    icon: '⌨️',
    tag: 'IA / IDE',
    name: 'Antigravity',
    description: 'Um ambiente de desenvolvimento completo (IDE) que já vem com inteligência artificial e recursos avançados (Agentes e MCPs) embutidos.',
    usage: 'Criar e editar códigos enquanto a IA trabalha junto com você, conectada às suas pastas locais.',
    url: 'https://antigravity.google/',
    detailedContent: {
      overview: 'O Antigravity é como um editor de código superpoderoso. Nele, a inteligência artificial não é apenas um chat separado, mas um assistente que "mora" nos seus arquivos do computador, ajudando a escrever, corrigir e organizar projetos inteiros rapidamente.',
      features: [
        'Editor de código com IA nativa que entende as regras do seu projeto.',
        'Agentes inteligentes (Agents) que podem realizar tarefas completas praticamente sozinhos.',
        'Sistema de integrações (MCPs) para plugar bancos de dados, navegadores e outras ferramentas diretamente na IA.'
      ],
      useCase: 'Utilizado quando você precisa programar de verdade, criar sites estruturados ou fazer alterações trabalhosas sem sair da mesma janela e mantendo todo o fluxo.',
    }
  },
  {
    icon: '🧠',
    tag: 'IA / Raciocínio',
    name: 'Claude',
    description: 'Um assistente voltado para programação avançada. Especialista em entregar códigos prontos e pensar com a lógica de um desenvolvedor Sênior.',
    usage: 'Pedir lógicas complexas, revisar projetos inteiros e ajudar na estruturação de software.',
    url: 'https://claude.ai',
    detailedContent: {
      overview: 'O Claude é muito elogiado por ter uma capacidade gigante de "ler" arquivos de uma só vez (chamado de janela de contexto). Isso permite que você envie o código de dezenas de páginas para ele e ele consiga entender a lógica central e achar problemas difíceis que um programador Júnior demoraria horas.',
      features: [
        'Consegue reter muitos documentos ou uma pasta enorme de códigos na memória.',
        'Fornece códigos precisos e limpos para resolver tarefas avançadas.',
        'Tem um tom mais racional e seguro, ajudando a escolher a "melhor forma de montar o esqueleto" do seu projeto.'
      ],
      useCase: 'Ideal para quando você trava em um problema muito chato de programação ou precisa que ele estude um projeto pronto e explique o que está falhando.',
    }
  },
  {
    icon: '⚡',
    tag: 'IA / Dinâmico',
    name: 'ChatGPT',
    description: 'Ideal para pesquisas no dia a dia, tirar dúvidas gerais, gerar ideias rápidas e ajudar a criar comandos (prompts) melhores.',
    usage: 'Fazer buscas, elaborar textos, solicitar explicações criativas e formatar ideias soltas.',
    url: 'https://chat.openai.com',
    detailedContent: {
      overview: 'O modelo inteligente mais versátil que temos. Funciona como um conselheiro rápido. Ele é focado numa conversa muito fluida, excelente para pensar junto com você na hora de redigir um documento e criar comandos eficazes que outras IAs possam entender melhor.',
      features: [
        'Dá respostas quase instantâneas para tirar qualquer confusão diária ou gerar rascunhos práticos.',
        'É ótimo para desenvolver ideias difusas no papel: e-mails, listas descritivas e lógicas rasas de site.',
        'Ajuda massivamente a desenhar comandos precisos (prompts fortes) para usar até mesmo no Antigravity ou no Claude posteriormente.'
      ],
      useCase: 'Sempre que sua cabeça tiver uma dúvida geral repentina, precisar organizar um texto bagunçado ou formatar pedidos (prompts). É a porta de entrada mais leve e diária.',
    }
  },
  {
    icon: '🔍',
    tag: 'IA / Operacional',
    name: 'Perplexity',
    description: 'Motor de buscas movido a Inteligência Artificial. Ele faz pesquisas profundas na internet e sempre entrega o conteúdo linkado com as fontes verdadeiras.',
    usage: 'Fazer pesquisas avançadas que exigem documentação sólida, resumos de eventos recentes e evitar mentiras das IAs.',
    url: 'https://perplexity.ai',
    detailedContent: {
      overview: 'O Perplexity atua exatamente como um "Google do futuro". Em vez de só apontar listas de sites para você abrir, ele entra nesses links por você, junta e resume o que achou de mais vital, e o principal: marca com números exatos de onde ele tirou o pedaço de informação.',
      features: [
        'Se conecta ativamente à internet para ler notícias ou documentações do dia presente.',
        'Oferece conteúdo respaldado estritamente por fontes, evitando invenções por parte das máquinas (alucinação controlada).',
        'Entrega um relatório explicativo com cara de resumo, o que facilita o aprendizado do zero.'
      ],
      useCase: 'Quando for procurar manuais complexos na biblioteca daquele software, descobrir que erro bizarro tá dando no sistema ou simplesmente fazer pesquisa forte exigindo checagem de fontes.',
    }
  },
  {
    icon: '📋',
    tag: 'SÍNTESE',
    name: 'NotebookLM',
    description: 'Uma ferramenta incrível para estudos assistidos por IA. Transforma os materiais que você colocar nela em guias, podcasts e perguntas.',
    usage: 'Carregar seus cadernos de anotação, PDFs e ver a IA criar ferramentas extras para fixar o conhecimento (áudio falado, linha do tempo).',
    url: 'https://notebooklm.google.com/',
    detailedContent: {
      overview: 'Essa é a central particular de estudo do Google. Diferente do ChatGPT que sabe de tudo na internet, o NotebookLM lê SÓ os arquivos e PDFs que você sobe. Assim, você não corre o risco de obter fatos misturados: você vai discutir de forma particular apenas o manual ou livro que tem em mãos.',
      features: [
        'Gera opções extras incríveis, como simular um "podcast" (áudio estilo rádio de 2 IAs conversando e te ensinando o documento).',
        'Faz você economizar semanas se tiver que digerir dezenas de capítulos de um edital ou guia.',
        'Capacidade de sugerir perguntas de prova pra testar seu cérebro de forma dinâmica baseada no tema das páginas.'
      ],
      useCase: 'Leitura de toneladas de PDFs chatos do trabalho ou escola, ou transformar anotações bagunçadas de reuniões em um "Audiobook" fácil de consumir.',
    }
  },
  {
    icon: '🎨',
    tag: 'DESIGN',
    name: 'Stitch',
    description: 'Ferramenta visual para desenhar protótipos rápidos de tela de forma amigável e limpa.',
    usage: 'Rascunhar visuais de aplicativos só ditando a ideia em linguagem comum, sem virar noites com o pincel do designer.',
    url: 'https://stitch.withgoogle.com/',
    detailedContent: {
      overview: 'O Stitch atua traduzindo do jeito mais orgânico possível o que você imagina da aparência do app para a tela digital. Você conversa e dita a interface e ele formata layouts sem precisar "codar do zero".',
      features: [
        'Geração e edição visual por Inteligência Artificial muito rápida, removendo o pesadelo da "página em branco".',
        'Oferece componentes super práticos que depois casam certinho as referências para os programadores usarem no projeto.',
        'Diminui violentamente o tempo para bater o martelo na fisionomia e sentimento do seu website novo.'
      ],
      useCase: 'Quando seu projeto sair da ideia do papel e você necessitar rascunhos polidos da disposição e fluxo das telas antes do programador iniciar os trabalhos lógicos.',
    }
  },
  {
    icon: '🚀',
    tag: 'MÍDIA',
    name: 'Gamma',
    description: 'Cria apresentações ricas, gerando layouts de slides inteiros com IA a partir apenas de uma frase de pedido ou de um artigo velho.',
    usage: 'Obter apresentações impactantes e visualmente estontantes em segundos baseados no esquema mais adequado ao que se pede.',
    url: 'https://gamma.app',
    detailedContent: {
      overview: 'Se o PowerPoint exigia horas alinhandos os blocos para ficar legível, o Gamma constrói os decks automaticamente. Você explica uma vez o tema (prompt) ou fornece um texto solto, e ele modela tudo num piscar de olhos, trazendo inclusive moldes prontos que valorizam as palavras.',
      features: [
        'Diagramação instantânea (ele sabe arrumar sozinhos imagens, colunas, marcadores).',
        'Insere fotografias ou pequenos ícones automaticamente ao lado que combinam sensivelmente com o assunto.',
        'Gera slides inteiros, páginas modernas parecidas com wikis prontas para reuniões, relatórios ou portfólios.'
      ],
      useCase: 'O time finalizou o projeto e tem que exibir em cinco minutos para o chefe; você clica no Gamma, aponta sobre o projeto e a IA desenrola o deck espetacular e apresentável da feature.',
    }
  },
  {
    icon: '⚛️',
    tag: 'LABORATÓRIO',
    name: 'Flow',
    description: 'Software de geração de vídeos interativos usando quadros detalhados, para quem precisa extrair visuais únicos em movimento.',
    usage: 'Tirar uma ideia ou foto e modelar em um fluxo de gravação de forma sequencial ou frame por frame.',
    url: 'https://labs.google/fx/pt/tools/flow',
    detailedContent: {
      overview: 'Ferramenta altamente artística e focal do universo do Google que permite destrinchar manipulações ricas na criação de vídeos sob demanda. Perfeito se você busca elevar esteticamente sites pesados de design moderno.',
      features: [
        'Pode atuar frame ou quadro focado em construções detalhistas para fluir em vídeo sequencial.',
        'Mapeia a profundidade das ideias ajudando a fundar animações envolventes na tela de sites super novos.',
        'Lida graciosamente gerando arquivos onde arte abstrata mescla de forma fluida e sem travar nos movimentos de câmera contínuos.'
      ],
      useCase: 'Fazer o fundo majestoso em clipe de abertura ou gerar imagens que reagem em um loop 3D contínuo e orgânico. Excelente pra elevar um hub digital aos padrões estéticos de sites "premiados".',
    }
  },
];
