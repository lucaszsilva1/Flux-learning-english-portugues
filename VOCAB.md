# VOCAB.md — Módulo de Vocabulário

As 1000 palavras mais comuns do inglês integradas ao FLUX.
Micro-learning: sessões curtas, feedback imediato, progresso persistido em localStorage.

---

## O que é este módulo

Uma nova seção `/vocab` dentro do FLUX existente.
Todas as 1000 palavras disponíveis de imediato — sem desbloqueio por dia.
4 modos de aprendizado independentes que compartilham o mesmo progresso.
Sem backend, sem login, sem SSR. Tudo em localStorage.

---

## Stack

Idêntica ao FLUX principal:

- **SvelteKit** com `@sveltejs/adapter-static`
- **TypeScript** em todos os arquivos
- **localStorage** para toda a persistência
- **CSS tokens** do FLUX — sem instalar nada novo

---

## Modos de micro-learning

| Modo | O que é | Sessão típica |
|------|---------|---------------|
| **Flashcard SRS-lite** | Palavra → vira o card → "Já sei / Preciso revisar" → algoritmo decide próxima revisão | 5–10 min (20 cards) |
| **Browse & Learn** | Lista navegável das 1000 palavras com busca e filtro por categoria; clique abre card detalhado | livre |
| **Sprint Quiz** | 10 questões de múltipla escolha cronometradas → resultado com acertos/erros e revisão | 3–5 min |
| **Dashboard** | Progresso geral: % palavras conhecidas, streak, palavras a revisar hoje, histórico de quiz | — |

---

## Estrutura de arquivos

```
src/
  routes/
    vocab/
      +page.svelte              # Dashboard — progresso, streak, CTA para cada modo
      +layout.svelte            # Layout do módulo: VocabNav + slot
      browse/
        +page.svelte            # Lista e busca de todas as palavras
      flashcard/
        +page.svelte            # Sessão SRS-lite
      quiz/
        +page.svelte            # Sprint quiz 10 questões
  lib/
    vocab/
      words.ts                  # Entry point — combina todos os batches
      types.ts                  # Word, WordProgress, VocabUserData
      store.ts                  # vocab_store — único ponto de escrita no localStorage
      srs.ts                    # SRS-lite: seleção de cards, atualização de status
      utils.ts                  # filterByCategory, getQuizOptions, calcVocabStreak
      words/
        batch_1_100.ts          # palavras rank 1–100
        batch_101_200.ts        # palavras rank 101–200
        batch_201_300.ts
        batch_301_400.ts
        batch_401_500.ts
        batch_501_600.ts
        batch_601_700.ts
        batch_701_800.ts
        batch_801_900.ts
        batch_901_1000.ts
  components/
    vocab/
      WordCard.svelte           # Card detalhado de uma palavra (usado no browse e no flashcard revelado)
      FlashcardSession.svelte   # Sessão completa: fila, flip, botões, resultado
      QuizSession.svelte        # Sessão de quiz: questão, opções, feedback, resultado
      WordListItem.svelte       # Linha na lista de browse
      ProgressBar.svelte        # Barra de progresso por categoria ou geral
      VocabNav.svelte           # Tabs: Dashboard / Browse / Flashcard / Quiz
```

---

## Tipos principais

Definidos em `src/lib/vocab/types.ts`. Nunca duplicar inline.

```ts
export interface Word {
  id: number
  word: string
  translation: string        // pt-br, concisa
  pos: 'noun' | 'verb' | 'adjective' | 'adverb' | 'preposition' | 'conjunction' | 'pronoun' | 'other'
  category: string           // grupo temático, ex: "basic verbs", "time & numbers"
  example: string            // frase de exemplo em inglês
  example_pt: string         // tradução da frase
  frequency_rank: number     // 1–1000 (1 = mais comum)
  pronunciation?: string     // fonética simplificada, ex: /θɪŋk/
}

export interface WordProgress {
  status: 'new' | 'learning' | 'known'
  next_review: string | null // ISO date string ou null
  reviews: number            // total de revisões
  correct: number            // acertos acumulados
}

export interface VocabUserData {
  words: Record<number, WordProgress>  // chave = word.id
  streak: number
  last_studied: string | null          // ISO date da última sessão
  quiz_history: {
    date: string   // ISO date
    score: number  // acertos
    total: number  // total de questões
  }[]
}
```

---

## Persistência — regras de localStorage

Chave global: `vocab_userdata` — um único objeto JSON do tipo `VocabUserData`.

Toda leitura e escrita passa pelo store `vocab_store` em `src/lib/vocab/store.ts`.
**Nunca** acessar `localStorage` diretamente nos componentes.

### Inicialização

Se `vocab_userdata` não existe no localStorage, inicializar com:

```ts
const defaultVocabUserData: VocabUserData = {
  words: {},
  streak: 0,
  last_studied: null,
  quiz_history: []
}
```

Palavras ausentes em `words` são tratadas como `status: 'new'` implicitamente.

### Store (`src/lib/vocab/store.ts`)

```ts
import { writable } from 'svelte/store'
import type { VocabUserData } from './types'

const STORAGE_KEY = 'vocab_userdata'

function createVocabStore() {
  const initial: VocabUserData = loadFromStorage()
  const { subscribe, update, set } = writable(initial)

  return {
    subscribe,
    markKnown(wordId: number) {
      update(data => {
        const prev = data.words[wordId]
        data.words[wordId] = {
          status: 'known',
          next_review: nextReviewDate(7),
          reviews: (prev?.reviews ?? 0) + 1,
          correct: (prev?.correct ?? 0) + 1
        }
        persist(data)
        return data
      })
    },
    markLearning(wordId: number) {
      update(data => {
        const prev = data.words[wordId]
        data.words[wordId] = {
          status: 'learning',
          next_review: nextReviewDate(1),
          reviews: (prev?.reviews ?? 0) + 1,
          correct: prev?.correct ?? 0
        }
        persist(data)
        return data
      })
    },
    recordQuiz(score: number, total: number) {
      update(data => {
        data.quiz_history.push({ date: todayISO(), score, total })
        data.last_studied = todayISO()
        persist(data)
        return data
      })
    },
    updateStreak() {
      update(data => {
        data.streak = calcVocabStreak(data)
        data.last_studied = todayISO()
        persist(data)
        return data
      })
    }
  }
}

export const vocabStore = createVocabStore()

function loadFromStorage(): VocabUserData {
  if (typeof localStorage === 'undefined') return defaultData()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : defaultData()
  } catch {
    return defaultData()
  }
}

function persist(data: VocabUserData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

function defaultData(): VocabUserData {
  return { words: {}, streak: 0, last_studied: null, quiz_history: [] }
}

function todayISO(): string {
  return new Date().toISOString().split('T')[0]
}

function nextReviewDate(days: number): string {
  const d = new Date()
  d.setDate(d.getDate() + days)
  return d.toISOString().split('T')[0]
}
```

---

## SRS-lite (`src/lib/vocab/srs.ts`)

3 estados apenas. Sem SM-2 completo.

| Ação | Novo status | Próxima revisão |
|------|------------|-----------------|
| "Já sei" | `known` | hoje + 7 dias |
| "Preciso revisar" | `learning` | hoje + 1 dia |

### Seleção de cards para a sessão

```ts
import type { Word, VocabUserData } from './types'

const SESSION_SIZE = 20

export function getSessionCards(words: Word[], userData: VocabUserData): Word[] {
  const today = new Date().toISOString().split('T')[0]

  const due = words.filter(w => {
    const prog = userData.words[w.id]
    if (!prog || prog.status === 'new') return true
    if (prog.status === 'learning' && prog.next_review && prog.next_review <= today) return true
    if (prog.status === 'known' && prog.next_review && prog.next_review <= today) return true
    return false
  })

  // Prioridade: learning due > new > known due
  const learning = due.filter(w => userData.words[w.id]?.status === 'learning')
  const fresh    = due.filter(w => !userData.words[w.id] || userData.words[w.id].status === 'new')
  const known    = due.filter(w => userData.words[w.id]?.status === 'known')

  const queue = [...learning, ...fresh, ...known].slice(0, SESSION_SIZE)
  return shuffled(queue)
}

function shuffled<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}
```

---

## Utils (`src/lib/vocab/utils.ts`)

```ts
import type { Word, VocabUserData } from './types'

// Retorna palavras filtradas por categoria
export function filterByCategory(words: Word[], category: string): Word[] {
  return words.filter(w => w.category === category)
}

// Retorna todas as categorias únicas
export function getCategories(words: Word[]): string[] {
  return [...new Set(words.map(w => w.category))].sort()
}

// Gera 4 opções para o quiz (1 correta + 3 distractoras)
export function getQuizOptions(correct: Word, allWords: Word[]): string[] {
  const distractors = allWords
    .filter(w => w.id !== correct.id && w.pos === correct.pos)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(w => w.translation)
  return shuffled([correct.translation, ...distractors])
}

// Calcula streak de dias consecutivos com estudo
export function calcVocabStreak(userData: VocabUserData): number {
  if (!userData.last_studied) return 0
  const last = new Date(userData.last_studied)
  const today = new Date()
  const diff = Math.floor((today.getTime() - last.getTime()) / 86400000)
  if (diff > 1) return 0
  return userData.streak + (diff === 0 ? 0 : 1)
}

// Total de palavras por status
export function countByStatus(userData: VocabUserData) {
  let known = 0, learning = 0, fresh = 0
  Object.values(userData.words).forEach(p => {
    if (p.status === 'known') known++
    else if (p.status === 'learning') learning++
    else fresh++
  })
  return { known, learning, new: 1000 - known - learning - fresh }
}

function shuffled<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}
```

---

## Dados — `words.ts` e batches

### Entry point (`src/lib/vocab/words.ts`)

```ts
import { words as batch1 }   from './words/batch_1_100'
import { words as batch2 }   from './words/batch_101_200'
// ... demais batches
import { words as batch10 }  from './words/batch_901_1000'

export const words: Word[] = [
  ...batch1, ...batch2, /* ... */ ...batch10
]

export const TOTAL_WORDS = 1000
```

### Formato de cada batch (`src/lib/vocab/words/batch_1_100.ts`)

```ts
import type { Word } from '../types'

export const words: Word[] = [
  {
    id: 1,
    word: "the",
    translation: "o / a / os / as",
    pos: "other",
    category: "articles & determiners",
    example: "The sun rises in the east.",
    example_pt: "O sol nasce no leste.",
    frequency_rank: 1,
    pronunciation: "/ðə/"
  },
  {
    id: 2,
    word: "be",
    translation: "ser / estar",
    pos: "verb",
    category: "basic verbs",
    example: "I want to be a better version of myself.",
    example_pt: "Eu quero ser uma versão melhor de mim mesmo.",
    frequency_rank: 2,
    pronunciation: "/biː/"
  },
  // ... 98 palavras restantes
]
```

### Categorias temáticas sugeridas (~20 grupos)

| Categoria | Exemplos |
|-----------|---------|
| `articles & determiners` | the, a, an, this, that, these |
| `basic verbs` | be, have, do, say, get, make, go, know, take, see |
| `pronouns` | I, you, he, she, it, we, they, me, him, her |
| `prepositions` | in, on, at, to, for, of, with, by, from, about |
| `conjunctions` | and, or, but, if, that, when, because, as, while |
| `time & frequency` | now, then, always, often, never, today, year, time |
| `numbers & quantity` | one, two, first, many, more, some, all, any, no |
| `common adjectives` | good, new, first, last, long, great, little, own |
| `common adverbs` | up, so, out, just, also, well, back, even, still |
| `question words` | what, which, who, how, where, when, why |
| `action verbs` | come, give, look, use, find, tell, ask, seem, feel |
| `modal verbs` | can, will, would, could, should, may, might, must |
| `movement verbs` | go, come, move, run, walk, turn, leave, follow |
| `communication verbs` | say, tell, ask, call, speak, write, show, describe |
| `mental verbs` | think, know, want, need, believe, remember, understand |
| `nouns: people` | man, woman, child, people, person, family, friend |
| `nouns: places` | world, country, city, home, school, place, area |
| `nouns: abstract` | time, way, life, day, thing, part, case, problem |
| `nouns: objects` | hand, eye, word, work, system, group, point, fact |
| `emotional & social` | like, love, want, help, try, hope, feel, care |

---

## Componentes

### `WordCard.svelte`

Recebe `word: Word` e `progress: WordProgress | undefined`.
Exibe: palavra, pronuncia, categoria (pill), tradução, frase de exemplo PT/EN, status atual.
Usado em: browse (ao clicar em um item) e flashcard (ao revelar o verso).

### `FlashcardSession.svelte`

Props: `cards: Word[]` (fila gerada por `getSessionCards`).

Fluxo interno:
1. Exibe frente: só a palavra em inglês + botão "Revelar"
2. Ao revelar: exibe `WordCard` completo + 2 botões — "Já sei" e "Preciso revisar"
3. Ao clicar: chama `vocabStore.markKnown(id)` ou `vocabStore.markLearning(id)` → avança para o próximo card
4. Ao terminar a fila: exibe tela de resultado (X palavras revisadas, Y marcadas como conhecidas)
5. Chama `vocabStore.updateStreak()` ao completar a sessão

### `QuizSession.svelte`

Props: `words: Word[]` (10 selecionadas aleatoriamente de `learning` + `new`).

Fluxo interno:
1. Exibe a palavra em inglês
2. Exibe 4 opções de tradução (geradas por `getQuizOptions`)
3. Ao selecionar: feedback imediato (verde/vermelho) + próxima questão após 800ms
4. Ao terminar: tela de resultado com pontuação e lista de erros
5. Chama `vocabStore.recordQuiz(score, total)` ao finalizar

Sem timer por questão — o sprint é psicológico (sequência rápida), não cronometrado.

### `WordListItem.svelte`

Props: `word: Word`, `progress: WordProgress | undefined`.

Linha clicável: palavra EN | tradução PT | categoria (pill) | status badge (Novo / Aprendendo / Conhecido).
Ao clicar: emite evento `select` para o pai abrir `WordCard` em modal ou painel lateral.

### `ProgressBar.svelte`

Props: `value: number` (0–100), `label: string`, `color?: string`.

Barra de progresso simples com label e percentual.
Usada no Dashboard para progresso geral e por categoria.

### `VocabNav.svelte`

Tabs horizontais fixas no topo do layout `/vocab`:
- Dashboard (`/vocab`)
- Browse (`/vocab/browse`)
- Flashcard (`/vocab/flashcard`)
- Quiz (`/vocab/quiz`)

Tab ativa destacada com `--color-orange-500`.

---

## Rotas

### `/vocab` — Dashboard (`+page.svelte`)

Exibe:
- Streak atual + último dia de estudo
- Barra de progresso geral (palavras conhecidas / 1000)
- Cards CTA para cada modo com estatística:
  - Flashcard: "X palavras para revisar hoje"
  - Quiz: "Último quiz: Y/10"
  - Browse: "Z palavras conhecidas"
- Mini-histórico dos últimos 7 quizzes

### `/vocab/browse` — Lista (`+page.svelte`)

Exibe:
- Campo de busca (filtra por `word` ou `translation`)
- Dropdown de categoria (filtra por `category`)
- Lista paginada ou virtualizada de `WordListItem`
- Ao clicar no item: abre `WordCard` em painel lateral ou modal

### `/vocab/flashcard` — SRS (`+page.svelte`)

Ao montar:
1. Busca `words` e `vocabUserData` do store
2. Chama `getSessionCards(words, userData)` para montar fila de até 20 cards
3. Se fila vazia: exibe mensagem "Nenhuma palavra para revisar agora. Volte amanhã ou estude no Browse."
4. Renderiza `FlashcardSession` com a fila

### `/vocab/quiz` — Sprint (`+page.svelte`)

Ao montar:
1. Seleciona 10 palavras aleatórias com status `new` ou `learning` (priorizando erros recentes)
2. Se menos de 4 palavras disponíveis para gerar opções: exibe aviso
3. Renderiza `QuizSession` com as 10 palavras

---

## Design

Reutilizar integralmente os tokens de `src/app.css` — sem criar novas variáveis CSS.

### Superfícies

| Elemento | Classe/estilo |
|----------|--------------|
| Container principal | `.lesson-card` (fundo `#F5ECD9`) |
| Card de palavra | `.block-card` (branco, borda, radius-md) |
| Flashcard frente | `.block-card` com palavra em `font-size: 48px; font-weight: 800` centralizada |
| Flashcard verso | `.block-card` expandido com `WordCard` completo |
| Opção de quiz correta | `background: var(--color-green-300); color: white` |
| Opção de quiz errada | `background: #E57373; color: white` |

### Status badges

```css
.badge-new      { background: rgba(0,0,0,0.06); color: rgba(13,18,37,0.5); }
.badge-learning { background: var(--color-sand-100); color: var(--color-navy-900); }
.badge-known    { background: var(--color-green-300); color: white; }
```

### Botões da sessão de flashcard

```
"Já sei"          → .btn-primary   (laranja)
"Preciso revisar" → .btn-ghost     (borda neutra)
```

---

## Layout (`src/routes/vocab/+layout.svelte`)

```svelte
<script lang="ts">
  import VocabNav from '$components/vocab/VocabNav.svelte'
</script>

<div class="vocab-layout">
  <VocabNav />
  <main class="vocab-main">
    <slot />
  </main>
</div>

<style>
  .vocab-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: var(--color-neutral-50);
  }
  .vocab-main {
    max-width: 720px;
    margin: 0 auto;
    padding: 32px 24px;
    width: 100%;
  }
</style>
```

---

## Regras gerais de código

- **Nunca** acessar `localStorage` fora de `src/lib/vocab/store.ts`
- **Nunca** colocar lógica de negócio em componentes — vai em `utils.ts` ou `srs.ts`
- **Nunca** duplicar tipos — importar sempre de `src/lib/vocab/types.ts`
- Todo texto de UI visível ao usuário em **português brasileiro**
- Todo conteúdo das palavras em **inglês** (com tradução PT onde especificado)
- Sem rotas adicionais além das 4 definidas (`/vocab`, `/vocab/browse`, `/vocab/flashcard`, `/vocab/quiz`)
- Componentes de vocab ficam exclusivamente em `src/components/vocab/`
- Sem importações cruzadas entre o módulo vocab e o módulo FLUX (lições)

---

## O que não existe neste módulo

- Áudio de pronúncia (só texto fonético)
- Sincronização em nuvem
- Modo multiplayer ou ranking
- Desbloqueio progressivo por dia
- Animações complexas (apenas transições CSS simples)
- Testes automatizados

---

## Como expandir

Para adicionar mais palavras além de 1000:
1. Criar `src/lib/vocab/words/batch_N_M.ts` com as novas palavras
2. Importar e concatenar em `src/lib/vocab/words.ts`
3. Atualizar `TOTAL_WORDS` em `src/lib/vocab/words.ts`

Para adicionar novo modo de aprendizado:
1. Criar nova rota em `src/routes/vocab/<modo>/+page.svelte`
2. Criar componente em `src/components/vocab/`
3. Adicionar tab em `VocabNav.svelte`

---

## Verificação

1. `npm run check` — zero erros TypeScript
2. `npm run dev` → acessar `/vocab` e confirmar Dashboard renderiza
3. Navegar para `/vocab/flashcard` → sessão inicia com cards `new`
4. Clicar "Já sei" → card avança → ao final exibe resultado
5. Navegar para `/vocab/quiz` → 10 questões aparecem em sequência → resultado exibido
6. Navegar para `/vocab/browse` → busca por "go" filtra corretamente → clicar em palavra abre `WordCard`
7. Recarregar página → progresso persiste (localStorage mantém `vocab_userdata`)
8. Marcar 5 palavras como conhecidas → Dashboard atualiza contadores
