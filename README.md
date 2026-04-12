# PH.hub ◈ Laboratório de Futuro

O **PH Hub** é um laboratório pessoal de experimentação técnica onde Inteligência Artificial, código e design profissional se conectam. Este projeto serve como um hub centralizado para a publicação de prompts de engenharia fina, curadoria de ferramentas e automação de fluxos de trabalho modernos.

---

## 🧪 O Projeto

O PH Hub nasceu da necessidade de um espaço unificado para documentar a evolução da engenharia de prompts e ferramentas de produtividade. Originalmente concebido como uma página estática, foi totalmente remodelado para o **Next.js 15**, trazendo robustez, performance e escalabilidade.

### 🚀 Stack Técnico
- **Core**: Next.js 15 (App Router) + React 19.
- **Linguagem**: TypeScript para integridade de dados e clareza estrutural.
- **Performance**: Renderização Híbrida (Server/Client), carregamento de fontes otimizado e engine de animações leve via `requestAnimationFrame`.
- **Estilização**: CSS Puro (Vanilla) com sistema de Design Tokens centralizado em variáveis globais.
- **SEO & A11y**: Metadados avançados e conformidade com padrões de acessibilidade ARIA.

---

## 📁 Estrutura de Navegação (True North)

Para desenvolvedores e colaboradores, aqui está o guia de onde encontrar cada parte vital do código:

*   **`app/page.tsx`**: A orquestração principal da Landing Page.
*   **`app/globals.css`**: O coração visual do projeto, contendo todos os tokens de cores, glassmorphism e utilitários.
*   **`components/ui/`**: Micro-componentes reutilizáveis que garantem a interação consistente.
*   **`lib/data/`**: A camada de dados estáticos onde vive a inteligência dos prompts, workflows e ferramentas.

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js (v20+ recomendado)
- NPM ou Yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/PauloHenrrq/PH-Hub.git
cd PH-Hub
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse `http://localhost:3000` e explore a experiência.

---

## 🛸 Roadmap de Evolução

- [x] Migração de Performance (Server Components).
- [x] SEO & Metadados Avançados.
- [ ] Integração com Headless CMS para gerenciamento remoto de prompts.
- [ ] Expansão do sistema de internacionalização (i18n) completo.

---

## 🎨 Contribuição & Licença

Este é um laboratório pessoal, mas feedbacks e insights sobre engenharia de prompts são sempre bem-vindos via Issues ou discussões.

Criado com paixão por **Paulo Henrique**.
