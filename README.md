# FLUX — Sistema de Imersão em Inglês

[![Licença: MIT](https://img.shields.io/badge/Licen%C3%A7a-MIT-blue.svg)](LICENSE)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-5-orange.svg)](https://svelte.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black.svg)](https://vercel.com)

> Workspace pessoal de imersão em inglês — uma lição por dia, prática deliberada, sem distrações.

---

## O que é o FLUX?

O FLUX não é um curso. Não é um app de idiomas. É um **ambiente de trabalho** para quem quer aprender inglês de verdade.

Cada dia desbloqueado pelo calendário adiciona uma nova lição ao final da página. Você rola para baixo para avançar, para cima para revisar. Sem gamificação, sem anúncios, sem login — só você e a língua.

**84 lições disponíveis** (expandindo até 180), organizadas em 3 módulos:

| Módulo | Dias | Foco |
|--------|------|------|
| Present Structures | 1–35 | Estruturas do presente e futuro próximo |
| Past & Modal | 36–70 | Passado, modais e estruturas de opinião |
| Advanced Use | 71–180 | Conectores, nuance e fluência avançada |

---

## Funcionalidades

### Lições (`/`)
- **11 blocos por lição** — estrutura, fonética, anatomia, vocabulário, exemplos, variações, erros comuns, retrieval, drills, produção livre e recursos diários
- **Sidebar colapsável** — lista todos os dias, mostra streak e pin de posição
- **Pin de posição** — lembra exatamente onde você parou na última sessão

### Vocabulário (`/vocab`)
- **100 palavras mais comuns do inglês** (expandindo até 1000) com SRS integrado
- **Flashcard** — revisão com espaçamento repetido
- **Quiz** — 10 questões rápidas por sessão
- **Browse** — explorar e marcar palavras como conhecidas

### Navegação global
- **Navbar responsiva** — alterna entre Lições e Vocabulário em qualquer tela
- **Mobile-first** — hambúrguer abre o índice de lições; layout adaptado para celular

### Persistência
- **Progresso no localStorage** — sem backend, sem conta, sem nuvem. Seus dados ficam no seu browser.
- **Streak** — contador de dias consecutivos de prática

---

## Tecnologias

- [SvelteKit](https://svelte.dev) com `@sveltejs/adapter-static`
- [TypeScript](https://www.typescriptlang.org) em todos os arquivos
- `localStorage` para toda a persistência — sem banco de dados, sem autenticação, sem API

---

## Como usar localmente

```bash
git clone https://github.com/lucaszsilva1/Flux-learning-english-portugues.git
cd Flux-learning-english-portugues
npm install
npm run dev
```

Acesse `http://localhost:5173`.

Para verificar tipos e build:

```bash
npm run check   # TypeScript + Svelte
npm run build   # build estático em /build
npm run preview # pré-visualizar o build
```

---

## Deploy no Vercel

O projeto inclui `vercel.json` configurado para o adapter-static. Zero configuração extra necessária.

1. Faça push do repositório para o GitHub
2. Acesse [vercel.com/new](https://vercel.com/new)
3. Importe o repositório
4. Clique em **Deploy**

O Vercel detecta automaticamente o `vercel.json` e faz o build correto.

---

## Adicionando mais lições

As lições são organizadas em batches de 7 dias por arquivo TypeScript em `src/lib/lessons/`.

```
src/lib/lessons/
  batch_1_7.ts      # dias 1-7
  batch_8_14.ts     # dias 8-14
  ...
```

Para expandir o conteúdo com IA:

1. Consulte `GEMINI.md` — instruções completas para o Google Gemini gerar novos batches
2. Cada batch gerado inclui um `PROMPT_BATCH_N.md` pronto para a próxima rodada
3. Após gerar, adicione o import em `src/lib/lessons.ts` e atualize `TOTAL_LESSONS` em `src/lib/utils.ts`

Para o módulo de vocabulário, consulte `VOCAB.md`.

---

## Estrutura do projeto

```
src/
  lib/
    lessons.ts          # entry point — agrega todos os batches
    lessons/            # um arquivo por semana de lições
    types.ts            # interfaces TypeScript
    store.ts            # stores Svelte (userdata, currentDay, streak, mobileMenuOpen)
    utils.ts            # helpers e lógica de negócio
    vocab/              # módulo de vocabulário (srs, store, types, words)
  components/
    Navbar.svelte       # navbar global responsiva
    Sidebar.svelte      # índice de dias (colapsável, drawer no mobile)
    LessonBlock.svelte
    WelcomeHeader.svelte
    blocks/             # 11 componentes de bloco de lição
    vocab/              # componentes de flashcard, quiz, browse
  routes/
    +page.svelte        # página de lições
    +layout.svelte      # layout raiz com Navbar
    vocab/              # rotas /vocab, /vocab/browse, /vocab/flashcard, /vocab/quiz
static/
  home.svg
GEMINI.md               # instruções para gerar lições com IA
VOCAB.md                # especificação do módulo de vocabulário
CLAUDE.md               # instruções para Claude Code
```

---

## Licença

[MIT](LICENSE) — use, modifique e distribua livremente.
