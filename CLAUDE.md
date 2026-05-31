## Project Configuration

- **Language**: TypeScript
- **Package Manager**: npm
- **Add-ons**: none

> **Ver também:** [`VOCAB.md`](./VOCAB.md) — módulo de vocabulário: as 1000 palavras mais comuns do inglês com flashcard SRS, quiz e browse.

---

# CLAUDE.md — FLUX

Sistema operacional pessoal de fluência em inglês.
Ambiente de imersão e prática intensiva diária — não é um curso, não é um app de idiomas.

---

## O que é este projeto

Uma única página web que cresce para baixo conforme os dias passam.
Cada dia desbloqueado pelo calendário real adiciona uma nova lição ao final da página.
O usuário rola para baixo para avançar, para cima para revisar.
Sem rotas. Sem backend. Sem login.

---

## Stack

- **SvelteKit** com `@sveltejs/adapter-static`
- **TypeScript** em todos os arquivos
- **localStorage** para toda a persistência de dados do usuário
- **Sem** banco de dados, autenticação, SSR, ou API routes

---

## Estrutura do projeto

```
src/
  lib/
    lessons.ts          # fonte única de verdade das 30 lições
    types.ts            # interfaces Lesson, UserData, DailyResources
    store.ts            # Svelte stores: userdata, currentDay, streak
    utils.ts            # helpers: getDaysSinceStart, calculateStreak, formatDate
  components/
    Sidebar.svelte       # sidebar fixa, colapsável, lista de dias
    LessonBlock.svelte   # bloco completo de uma lição (renderizado N vezes)
    blocks/
      Structure.svelte   # bloco 1 — estrutura, tradução, why it matters
      Phonetics.svelte   # bloco 2 — pronúncia, stress tip
      Anatomy.svelte     # bloco 3 — pattern, breakdown
      Vocabulary.svelte  # bloco 4 — vocabulário essencial
      Examples.svelte    # bloco 5 — 3 exemplos contextualizados
      Expansion.svelte   # bloco 6 — variações, combinações, collocations
      Mistakes.svelte    # bloco 7 — armadilhas comuns
      Retrieval.svelte   # bloco 8 — retrieval prompt interativo
      Drills.svelte      # bloco 9 — drills com revelar resposta
      Workspace.svelte   # bloco 10 — produção livre + notas
      Resources.svelte   # bloco 11 — TED, podcast, Anki, speaking, jogo
  routes/
    +page.svelte         # única rota — monta a página infinita
    +layout.svelte       # layout global, importa design system
static/
  design-system.css      # fornecido separadamente — não editar
```

---

## Tipos principais

Definidos em `src/lib/types.ts`. Nunca duplicar inline.

```ts
interface Lesson {
  id: number
  module: number
  moduleTitle: string
  structure: string
  translation: string
  explanation: string
  why_it_matters: string
  pronunciation: string
  stress_tip: string
  pattern: string
  breakdown: { piece: string; role: string }[]
  core_vocabulary: { word: string; translation: string; example: string }[]
  examples: {
    work:   { en: string; pt: string }
    travel: { en: string; pt: string }
    study:  { en: string; pt: string }
  }
  variations:      { form: string; note: string }[]
  combinations:    { phrase: string; meaning: string }[]
  collocations:    string[]
  common_mistakes: { wrong: string; right: string; tip: string }[]
  retrieval_context:   string
  retrieval_prompt:    string
  retrieval_reference: string
  drills: { instruction: string; input: string; answer: string }[]
  connects_to: number[]
  review_of:   string
  daily_resources: DailyResources
}

interface DailyResources {
  ted:     { title: string; url: string; tip: string }
  podcast: { title: string; url: string; tip: string }
  onelook_word:    string
  anki_card:       { front: string; back: string }
  speaking_prompt: string
  game?: { label: string; url: string }
}

interface UserData {
  start_date: string
  [key: string]: string | boolean | Record<number, string>
}
```

---

## Persistência — regras de localStorage

Chave global: `flux_userdata` — um único objeto JSON.

Campos por lição (prefixo `{id}_`):

| Campo                    | Tipo                       | Descrição                          |
|--------------------------|----------------------------|------------------------------------|
| `{id}_retrieval`         | `string`                   | Resposta ao retrieval prompt       |
| `{id}_drills`            | `Record<number, string>`   | Respostas por índice de drill      |
| `{id}_drill_revealed`    | `Record<number, boolean>`  | Se revelou a resposta do drill     |
| `{id}_retrieval_revealed`| `boolean`                  | Se revelou a referência            |
| `{id}_production`        | `string`                   | Produção livre                     |
| `{id}_notes`             | `string`                   | Notas pessoais                     |
| `{id}_practiced_at`      | `string` (ISO)             | Timestamp ao marcar como praticado |
| `{id}_anki_exported`     | `boolean`                  | Se copiou o card Anki              |
| `{id}_speaking_done`     | `boolean`                  | Se marcou speaking como feito      |

Toda escrita no localStorage passa pelo store `userdata` em `store.ts`.
Nunca acessar `localStorage` diretamente nos componentes.

---

## Lógica de desbloqueio de dias

Definida em `utils.ts`, nunca inline nos componentes.

```ts
// Retorna quantos dias estão disponíveis hoje
function getAvailableDays(startDate: string): number {
  const start = new Date(startDate)
  const today = new Date()
  const diff = Math.floor((today.getTime() - start.getTime()) / 86400000)
  return Math.min(diff + 1, TOTAL_LESSONS) // dia 1 disponível no dia 0
}

// Retorna se um id de lição está disponível
function isUnlocked(id: number, startDate: string): boolean {
  return id <= getAvailableDays(startDate)
}
```

Se `start_date` não existe no localStorage, o primeiro acesso define como `new Date().toISOString()`.

---

## Scroll e âncoras

Cada lição renderizada tem `id="dia-{id}"` no seu elemento raiz.

Ao carregar a página:
```ts
onMount(() => {
  const todayId = getAvailableDays(startDate)
  const el = document.getElementById(`dia-${todayId}`)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
})
```

A sidebar usa `scrollIntoView` para navegação entre dias — sem mudança de URL.

---

## Streak

Calculado em `utils.ts`:

```ts
function calculateStreak(userData: UserData): number {
  let streak = 0
  const today = new Date()
  for (let i = 1; ; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() - (i - 1))
    const dateStr = date.toISOString().split('T')[0]
    const practiced = Object.keys(userData)
      .filter(k => k.endsWith('_practiced_at'))
      .some(k => userData[k]?.toString().startsWith(dateStr))
    if (!practiced) break
    streak++
  }
  return streak
}
```

---

## Comportamento dos blocos interativos

### Retrieval (bloco 8)
1. Exibe `retrieval_context` e `retrieval_prompt`
2. Textarea para resposta em inglês — salva em tempo real
3. Botão "Ver referência" aparece **somente após** o usuário digitar algo
4. Ao clicar, revela `retrieval_reference` e salva `retrieval_revealed: true`
5. Estado de revelação persiste (não some ao recarregar)

### Drills (bloco 9)
1. Cada drill é independente
2. Textarea por drill — salva em tempo real
3. Botão "Ver resposta" aparece **somente após** digitar algo naquele drill
4. Estado de revelação persiste por drill

### Anki (bloco 11 — Resources)
1. Botão "Copiar card"
2. Copia para clipboard: `Q: {front}\nA: {back}`
3. Salva `anki_exported: true`
4. Botão muda para "Card copiado ✓" — estado persiste

### Speaking (bloco 11 — Resources)
1. Exibe `speaking_prompt` em PT
2. Botão "Marquei como feito" salva `speaking_done: true`
3. Estado persiste — não volta ao estado inicial

---

## Arquitetura de lições — Mini-Monolitos

Lições organizadas em batches de 7 por arquivo. Cada batch cobre uma semana de estudo.

```
src/lib/
  lessons.ts                  # entry point — combina todos os batches
  lessons/
    batch_1_7.ts              # dias 1-7 + BATCH_1_7_SUMMARY
    batch_8_14.ts             # dias 8-14 + BATCH_8_14_SUMMARY (futuro)
    ...
```

### Entry point (`lessons.ts`)
```ts
import { lessons as batch1 } from './lessons/batch_1_7'
export const lessons = [...batch1]
```
Todos os imports existentes de `$lib/lessons` continuam funcionando.

### BATCH_SUMMARY
Cada arquivo termina com um objeto `BATCH_N_M_SUMMARY` exportado.
**Ao gerar um novo batch, forneça o BATCH_SUMMARY do anterior como contexto.**
Ele contém: estruturas cobiertas, arcos gramaticais, contrastes estabelecidos, vocabulário e gancho para o próximo batch.

### Como expandir
1. Criar `src/lib/lessons/batch_N_M.ts` com 7 lições + `BATCH_N_M_SUMMARY`
2. Adicionar `import` no `lessons.ts` e concatenar no array
3. Atualizar `TOTAL_LESSONS` em `src/lib/utils.ts`

### Estado atual dos batches
| Arquivo | Dias | Status |
|---------|------|--------|
| `batch_1_7.ts` | 1-7 | ✅ Completo |
| `batch_8_14.ts` | 8-14 | — |
| `batch_15_21.ts` | 15-21 | — |
| `batch_22_28.ts` | 22-28 | — |
| `batch_29_35.ts` | 29-35 | — |

---

## Conteúdo — lessons.ts

30 lições em `src/lib/lessons.ts`. Progressão:

- **Dias 1–10** — present structures
  `am/is/are + ing` · `have + pp` · `I've been` · `going to` · `want to` · `need to` · `I think` · `I know` · `I feel` · `let me`

- **Dias 11–20** — past structures
  `was/were + ing` · `did` · `used to` · `had` · `would` · `I wish` · `I should have` · `I could have` · `I didn't know` · `I was trying`

- **Dias 21–30** — modals e alto impacto
  `can/could` · `should` · `might` · `must` · `I'd like to` · `I'd rather` · `I'm not sure` · `it depends` · `that's why` · `as long as`

Cada lição tem `daily_resources` curados para a estrutura do dia — não genéricos.

Fontes dos recursos:
- TED: `ted.com`
- Podcast: `eslpod.com`
- Dicionário: `onelook.com/?w={palavra}`
- Jogos: `englishclub.com/esl-games` · `rong-chang.com/game.htm`
- Speaking: `italki.com`
- Anki: `ankisrs.net`

---

## Sidebar

- Lista todos os dias de 1 até o total de lições (30, extensível a 180)
- Dias disponíveis: clicáveis, scroll até âncora
- Dias com `practiced_at`: exibe ícone de check
- Dia atual: destacado visualmente
- Dias futuros: aparece na lista com cadeado, não clicáveis
- Streak no topo
- Colapsável via botão — estado salvo em localStorage (`sidebar_collapsed`)

---

## Regras gerais de código

- **Nunca** acessar `localStorage` fora de `store.ts`
- **Nunca** colocar lógica de negócio em componentes — vai em `utils.ts`
- **Nunca** duplicar tipos — importar sempre de `types.ts`
- **Nunca** criar rotas adicionais — tudo em `+page.svelte`
- Cada bloco de lição é um componente separado em `components/blocks/`
- `LessonBlock.svelte` é apenas compositor — sem lógica própria
- Todo texto de UI visível ao usuário em português brasileiro
- Todo conteúdo das lições em inglês (com traduções PT onde especificado)

---

## O que não existe neste projeto

- Rotas além de `/`
- SSR (usar `export const prerender = true` e `export const ssr = false`)
- API routes
- Banco de dados
- Autenticação
- Dashboard ou landing page
- Testes automatizados
- Gamificação além do streak

---

## Design system

O arquivo de referência é `design_system_agnostic_llm_spec_learny_style.md`, na raiz do projeto.

O FLUX é um **workspace de estudo** — não uma landing page. O design system foi concebido para landing pages educacionais, então aplicar com as adaptações abaixo.

---

### Tokens obrigatórios

Definir como variáveis CSS globais em `src/app.css`:

```css
:root {
  --color-sand-100:    #E9BD69;
  --color-mint-100:    #CFE4DA;
  --color-neutral-50:  #EEF0EF;
  --color-orange-500:  #F26A2E;
  --color-navy-900:    #0D1225;
  --color-blue-500:    #3D7CFF;
  --color-purple-400:  #8A4D9E;
  --color-green-300:   #8AA676;
  --radius-sm:   8px;
  --radius-md:   16px;
  --radius-lg:   24px;
  --radius-xl:   32px;
  --radius-pill: 999px;
  --shadow-sm: 0 4px 12px rgba(0,0,0,0.06);
  --shadow-md: 0 12px 32px rgba(0,0,0,0.08);
  --transition: 220ms cubic-bezier(0.22, 1, 0.36, 1);
}
```

---

### Fundo da página

```css
background: var(--color-neutral-50);
```

---

### Tipografia

Importar no `+layout.svelte`:

```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap" rel="stylesheet">
```

```css
body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-navy-900);
}
```

| Elemento                   | Estilo                                                      |
|----------------------------|-------------------------------------------------------------|
| Estrutura principal (h1)   | `font-size: 32px; font-weight: 800; letter-spacing: -0.03em`|
| Label de bloco             | `font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase` |
| Corpo explicação           | `font-size: 16px; font-weight: 400; line-height: 1.7`       |
| Código / padrão estrutural | `font-family: monospace; font-size: 14px`                   |
| Número do dia              | `font-size: 11px; font-weight: 600; monospace`              |

---

### Cards e superfícies

```css
/* Card de lição — container principal */
.lesson-card {
  background: #F5ECD9;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: var(--radius-lg);
  padding: 40px;
  margin-bottom: 48px;
}

/* Sub-card — blocos internos */
.block-card {
  background: white;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: var(--radius-md);
  padding: 20px 24px;
}

/* Workspace — retrieval, produção, notas */
.workspace-card {
  background: var(--color-mint-100);
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: var(--radius-md);
  padding: 24px;
}
```

---

### Botões

```css
.btn-primary {
  background: var(--color-orange-500);
  color: white;
  padding: 12px 24px;
  border-radius: var(--radius-pill);
  font-weight: 600;
  font-size: 14px;
  border: none;
  cursor: pointer;
  box-shadow: 0 6px 0 rgba(0,0,0,0.08);
  transition: var(--transition);
}
.btn-primary:hover { transform: translateY(-2px); }

.btn-secondary {
  background: var(--color-blue-500);
  color: white;
  padding: 10px 20px;
  border-radius: var(--radius-pill);
  font-weight: 600;
  font-size: 13px;
  border: none;
  cursor: pointer;
  transition: var(--transition);
}

.btn-ghost {
  background: transparent;
  color: var(--color-navy-900);
  border: 1.5px solid rgba(0,0,0,0.15);
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  font-size: 13px;
  cursor: pointer;
  transition: var(--transition);
}
.btn-ghost:hover { background: rgba(0,0,0,0.04); }
```

---

### Pills e badges

```css
.pill {
  display: inline-block;
  padding: 6px 14px;
  border-radius: var(--radius-pill);
  background: #F7E7B5;
  font-weight: 600;
  font-size: 12px;
  color: var(--color-navy-900);
}

.badge-done   { background: var(--color-green-300); color: white; font-size: 11px; padding: 3px 10px; border-radius: var(--radius-pill); }
.badge-locked { background: rgba(0,0,0,0.06); color: rgba(13,18,37,0.35); }
```

---

### Textareas

```css
textarea {
  width: 100%;
  background: white;
  border: 1.5px solid rgba(0,0,0,0.12);
  border-radius: var(--radius-md);
  padding: 16px;
  font-family: inherit;
  font-size: 15px;
  line-height: 1.7;
  color: var(--color-navy-900);
  resize: vertical;
  transition: border-color var(--transition);
}
textarea:focus {
  outline: none;
  border-color: var(--color-orange-500);
}
```

---

### Separador entre lições

```css
.lesson-separator {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 48px 0;
  color: rgba(13,18,37,0.3);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
}
.lesson-separator::before,
.lesson-separator::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(0,0,0,0.1);
}
```

---

### Highlight de estrutura em texto

```css
.highlight {
  position: relative;
  display: inline-block;
}
.highlight::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--color-green-300);
  border-radius: 6px;
  transform: rotate(-1deg) scaleX(1.02);
  z-index: -1;
  opacity: 0.4;
}
```

---

### Sidebar

```css
.sidebar { background: white; border-right: 1px solid rgba(0,0,0,0.08); width: 220px; }

.sidebar-day         { padding: 8px 16px; border-left: 3px solid transparent; font-size: 13px; font-weight: 500; cursor: pointer; transition: var(--transition); }
.sidebar-day.active  { border-left-color: var(--color-orange-500); background: rgba(242,106,46,0.06); color: var(--color-orange-500); }
.sidebar-day.locked  { color: rgba(13,18,37,0.3); cursor: default; }
```

---

### O que aplicar vs. ignorar do design system original

| Elemento do DS             | Aplicação no FLUX                               |
|----------------------------|-------------------------------------------------|
| Paleta pastel + navy       | ✅ Aplicar integralmente                        |
| Plus Jakarta Sans 400/600/800 | ✅ Aplicar                                   |
| Cards com border 1px       | ✅ Lição = card grande, blocos = sub-cards      |
| Pills e badges             | ✅ Vocabulário, status, módulo                  |
| Botões pill com shadow     | ✅ Primário laranja, secundário azul            |
| Textareas com foco laranja | ✅ Workspace                                    |
| Micro-decorações / doodles | ⚠️ Usar com moderação, apenas entre módulos    |
| Hero 72px / section 56px  | ❌ Não é landing page                           |
| Layout assimétrico editorial | ❌ Layout é sidebar + scroll único            |
| Grid 12 colunas            | ❌ Main é coluna única                          |
| Ilustrações flat           | ⚠️ Opcional — apenas separadores de módulo     |
| Seções alternadas          | ❌ Estrutura linear por lição                   |
