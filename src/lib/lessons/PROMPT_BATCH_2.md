# Prompt para Gemini — Gerar batch_8_14.ts

Cole este arquivo inteiro no Gemini. Ele é autocontido — não precisa de nenhum outro arquivo.

---

## Contexto: Projeto FLUX

Sistema de imersão em inglês. Uma página web que exibe lições diárias em sequência. Sem backend, sem rotas adicionais. O usuário pratica uma estrutura gramatical por dia seguindo progressão pedagógica rigorosa.

**Stack**: SvelteKit + TypeScript. Persistência via `localStorage`. Sem autenticação.

---

## O que você vai gerar

O arquivo `src/lib/lessons/batch_8_14.ts` com **7 lições** (dias 8 a 14) + o objeto `BATCH_8_14_SUMMARY` exportado ao final.

Este arquivo será importado em `src/lib/lessons.ts` assim:
```ts
import { lessons as batch2 } from './lessons/batch_8_14'
export const lessons = [...batch1, ...batch2]
```

---

## Estruturas dos dias 8-14 (segundo o currículo)

| Dia | Estrutura | Módulo |
|-----|-----------|--------|
| 8 | I know | Present Structures (fecha módulo 1) |
| 9 | I feel | Present Structures (fecha módulo 1) |
| 10 | let me | Present Structures (fecha módulo 1) |
| 11 | was/were + ing | Past Structures (abre módulo 2) |
| 12 | did (Simple Past) | Past Structures |
| 13 | used to | Past Structures |
| 14 | had (Past Perfect) | Past Structures |

---

## Interface TypeScript obrigatória

```ts
export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

interface Lesson {
  id: number
  level: CefrLevel
  module: number
  moduleTitle: string
  structure: string            // frase real de fala natural
  translation: string          // PT-BR
  explanation: string          // PT-BR
  why_it_matters: string       // PT-BR — por que brasileiros precisam disso
  pronunciation: string        // com IPA quando relevante
  stress_tip: string
  pattern: string              // ex: '[Sujeito] + know + [objeto/cláusula]'
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
  retrieval_context:   string   // PT-BR
  retrieval_prompt:    string   // PT-BR
  retrieval_reference: string   // começa com: Exemplo: '...'
  drills: { instruction: string; input: string; answer: string }[]
  connects_to: number[]         // apenas IDs 1-14 que já existem
  review_of:   string           // OBRIGATÓRIO no batch 2 — não deixe vazio
  daily_resources: {
    ted:     { title: string; url: string; tip: string }
    podcast: { title: string; url: string; tip: string }
    onelook_word: string        // uma palavra, sem espaço
    anki_card:    { front: string; back: string }
    speaking_prompt: string     // PT-BR
    game?: { label: string; url: string }
  }
}
```

---

## BATCH_1_7_SUMMARY — O que já foi ensinado

```ts
{
  range: '1-7',
  theme: 'Present Structures I',
  levels: ['A1', 'A2'],
  structures: [
    'am/is/are + ing — Present Continuous (dia 1, A1)',
    'have + pp — Present Perfect (dia 2, A2)',
    "I've been + ing — Present Perfect Continuous (dia 3, A2)",
    'going to — futuro planejado (dia 4, A2)',
    'want to — desejo/intenção (dia 5, A1)',
    'need to — necessidade/obrigação (dia 6, A2)',
    'I think — marcador de opinião (dia 7, A2)'
  ],
  grammar_arcs: [
    'Dias 1-3: tríade de aspecto — continuous → perfect → perfect continuous. Introduziu: for/since, verbos estativos (know, want, agree, love)',
    'Dias 4-5: intenção futura — going to (plano pré-existente) vs will (espontâneo). Introduziu: want to vs hope to vs aim to',
    'Dias 6-7: necessidade e perspectiva — need to (obrigação), I think (opinião com negação invertida)'
  ],
  key_contrasts_established: [
    'present continuous vs verbos estativos',
    'simple past (tempo específico) vs present perfect (relevância presente)',
    'for (duração) vs since (ponto no tempo)',
    'going to (decisão prévia) vs will (decisão espontânea)',
    'want to (desejo) vs need to (obrigação) vs going to (plano)',
    "I think [clause] vs I don't think [clause] — negação sobe para think"
  ],
  vocabulary_themes: [
    'progresso e trabalho: working on, making progress, trying to',
    'experiências: already, just, never, ever, yet, so far',
    'duração: for, since, lately, recently',
    'planejamento: going to, plan to, about to, intend to, looking forward to',
    'desejo: want to, hope to, aim to, wish I could',
    'urgência: need to, by [date], ASAP, right away, urgently',
    'opinião: I think, I believe, in my opinion, as far as I know'
  ]
}
```

---

## Regras de densidade para o Batch 2

Este é o **batch 2** — cada lição deve:
- Ter **1 estrutura nova** como foco principal
- Referenciar **explicitamente** pelo menos 1 estrutura do batch 1 (campo `review_of` não vazio)
- Ter **4 a 5 drills** (mínimo 4, sendo o drill extra de review de estrutura anterior)
- O `retrieval_prompt` deve mencionar ao menos 1 contraste com o batch 1 quando relevante
- O `connects_to` deve incluir IDs do batch 1 quando há conexão pedagógica real

---

## Regras de qualidade (resumo)

**Exemplos**: frases reais — trabalho contemporâneo (remoto, reuniões, projetos), viagem (aeroporto, hotel, imigração), estudo (aprendizado, pesquisa)

**Drills**: variedade obrigatória — completar lacuna, transformar (negativa/pergunta), corrigir erro, escolher entre formas. Dificuldade crescente dentro da lição.

**Vocabulário**: progresso gradual — não introduza B2+ em lições A2

**TED Talks**: use apenas URLs reais de `ted.com/talks/` com slugs existentes

**speaking_prompt**: instrução acionável em 2 minutos de prática solo, em PT-BR

---

## Regras de segurança (resumo)

- Strings com apóstrofo **devem usar aspas duplas**: `"I don't know"` ✓ — `'I don't know'` ✗ (quebra TypeScript)
- `connects_to` aceita apenas IDs de 1 a 14 (os que existirão ao final deste batch)
- `review_of` deve descrever a conexão pedagógica — não deixe vazio
- `retrieval_reference` deve começar com `"Exemplo: '..."` e usar a estrutura pedida no prompt
- `breakdown` analisa exatamente as palavras que aparecem em `structure`

---

## Níveis CEFR esperados

| Dia | Estrutura | Nível esperado |
|-----|-----------|---------------|
| 8 | I know | A2 |
| 9 | I feel | A2 |
| 10 | let me | A2 |
| 11 | was/were + ing | A2 |
| 12 | did (Simple Past) | A2 |
| 13 | used to | B1 |
| 14 | had (Past Perfect) | B1 |

---

## Formato de saída esperado

```ts
import type { Lesson } from '../types'

export const lessons: Lesson[] = [
  // DIA 8 ... DIA 14
]

export const BATCH_8_14_SUMMARY = {
  range: '8-14',
  theme: '...',
  levels: ['A2', 'B1'],
  structures: [ /* 7 entradas */ ],
  grammar_arcs: [ /* arcos internos ao batch */ ],
  key_contrasts_established: [ /* novos contrastes introduzidos */ ],
  vocabulary_themes: [ /* temas cobertos */ ],
  connects_to_next: 'Batch 3 (dias 15-21): [estruturas] — [justificativa pedagógica]'
}
```

---

Gere o arquivo completo agora.
