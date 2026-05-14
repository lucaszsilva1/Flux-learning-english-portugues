# Prompt para Gemini — Gerar batch_22_28.ts

Cole este arquivo inteiro no Gemini. Ele é autocontido — não precisa de nenhum outro arquivo.

---

## Contexto: Projeto FLUX

Sistema de imersão em inglês. Uma página web que exibe lições diárias em sequência. Sem backend, sem rotas adicionais. O usuário pratica uma estrutura gramatical por dia seguindo progressão pedagógica rigorosa.

**Stack**: SvelteKit + TypeScript. Persistência via `localStorage`. Sem autenticação.

---

## O que você vai gerar

O arquivo `src/lib/lessons/batch_22_28.ts` com **7 lições** (dias 22 a 28) + o objeto `BATCH_22_28_SUMMARY` exportado ao final.

Este arquivo será importado em `src/lib/lessons.ts` assim:
```ts
import { lessons as batch4 } from './lessons/batch_22_28'
export const lessons = [...batch1, ...batch2, ...batch3, ...batch4]
```

---

## Estruturas dos dias 22-28 (segundo o currículo)

| Dia | Estrutura | Módulo | Nível |
|-----|-----------|--------|-------|
| 22 | should | Modals e Alto Impacto | B1 |
| 23 | might | Modals e Alto Impacto | B1 |
| 24 | must | Modals e Alto Impacto | B1 |
| 25 | I'd like to | Modals e Alto Impacto | B1 |
| 26 | I'd rather | Modals e Alto Impacto | B1 |
| 27 | I'm not sure | Modals e Alto Impacto | B1 |
| 28 | it depends | Modals e Alto Impacto | B1 |

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
  pattern: string              // fórmula abstrata
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
  connects_to: number[]         // apenas IDs 1-28 que já existem
  review_of:   string           // Obrigatório e substantivo
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

## BATCH_15_21_SUMMARY — O que já foi ensinado

```ts
{
  range: '15-21',
  theme: 'Hipóteses, Arrependimentos e Introdução à Polidez',
  levels: ['A2', 'B1'],
  structures: [
    'would — Hábitos e narrativas passadas (dia 15, B1)',
    'I wish — Desejos irreais no presente (dia 16, B1)',
    'I should have — Arrependimento e crítica (dia 17, B1)',
    'I could have — Possibilidade irrealizada no passado (dia 18, B1)',
    "I didn't know — Justificativa / desconhecimento (dia 19, A2)",
    'I was trying to — Intenção frustrada (dia 20, A2)',
    'can/could — Pedidos polidos (dia 21, B1)'
  ],
  grammar_arcs: [
    'Dias 15-20: O ápice do passado. Migramos das narrativas factuais (did, used to) para o campo das ideias irreais: o que desejamos (wish), o que deveríamos ter feito (should have) e o que queríamos fazer mas falhamos (trying to). A proficiência em B1 se solidifica aqui.',
    'Dia 21: Transição suave para o Módulo 3. Após dominar como justificar falhas (past structures), o aluno entra no mundo de como gerenciar as pessoas ao redor no presente/futuro com modals de polidez (could).'
  ],
  key_contrasts_established: [
    'used to (estados/fatos) vs would (comportamento narrativo repetitivo)',
    'I should have (crítica/dever irreal) vs I could have (possibilidade irreal)',
    'I was trying (foco na intenção) vs did (resultado factual, muitas vezes falho)',
    'can you (informal) vs could you (polido e seguro corporativamente)'
  ],
  vocabulary_themes: [
    'justificativas de falhas no trabalho: I wish we had, I should have tested, I didn\'t know, I was trying to fix',
    'gestão de crise: avoid risk, realize, meant to, data, budget',
    'comunicação polida: could you send me, let me know, when it\'s ready'
  ],
  connects_to_next: 'Batch 4 (dias 22-28): [should, might, must, I\'d like to, I\'d rather, I\'m not sure, it depends] — [Aprofundamento total em Modals e Expressões de Alto Impacto (B1), capacitando o aluno a expressar níveis variados de certeza, conselho e preferência no ambiente de trabalho sem precisar de vocabulário complexo].'
}
```

---

## Regras de densidade para o Batch 4
Este é o **batch 4** — cada lição deve:
- Ensinar **2 estruturas integradas**
- Lições devem ser desenhadas assumindo que o aluno precisa usar as duas juntas (ex: "Should" e "Might" aparecem interligadas pedagogicamente, mesmo que o foco primário de uma seja X e outra seja Y, elas combinam nas frases).
- Ter **5 a 6 drills**. O `retrieval_prompt` deve passar a exigir o uso de **2 estruturas simultaneamente** (ex: usando a estrutura do dia + estrutura do passado).

---

## Regras de segurança (resumo)
- Strings com apóstrofo **devem usar aspas duplas**: `"I don't know"` ✓ — `'I don't know'` ✗ (quebra TypeScript)
- `connects_to` aceita apenas IDs que já existem (1 a 28).

---

Gere o arquivo completo agora.
