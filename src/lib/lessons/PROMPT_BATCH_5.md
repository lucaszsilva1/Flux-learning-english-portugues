# Prompt para Gemini — Gerar batch_29_35.ts

Cole este arquivo inteiro no Gemini. Ele é autocontido — não precisa de nenhum outro arquivo.

---

## Contexto: Projeto FLUX

Sistema de imersão em inglês. Uma página web que exibe lições diárias em sequência. Sem backend, sem rotas adicionais. O usuário pratica uma estrutura gramatical por dia seguindo progressão pedagógica rigorosa.

**Stack**: SvelteKit + TypeScript. Persistência via `localStorage`. Sem autenticação.

---

## O que você vai gerar

O arquivo `src/lib/lessons/batch_29_35.ts` com **7 lições** (dias 29 a 35) + o objeto `BATCH_29_35_SUMMARY` exportado ao final.

Este arquivo será importado em `src/lib/lessons.ts` assim:
```ts
import { lessons as batch5 } from './lessons/batch_29_35'
export const lessons = [...batch1, ...batch2, ...batch3, ...batch4, ...batch5]
```

---

## Estruturas dos dias 29-35 (segundo o currículo)

| Dia | Estrutura | Módulo | Nível |
|-----|-----------|--------|-------|
| 29 | that's why | Modals e Alto Impacto | B1 |
| 30 | as long as | Modals e Alto Impacto | B1 |
| 31 | if I were | Conditionals e Hipótese | B1-B2 |
| 32 | if I had | Conditionals e Hipótese | B1-B2 |
| 33 | I would have | Conditionals e Hipótese | B1-B2 |
| 34 | unless | Conditionals e Hipótese | B1-B2 |
| 35 | provided that | Conditionals e Hipótese | B1-B2 |

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
  connects_to: number[]         // apenas IDs 1-35 que já existem
  review_of:   string           // Obrigatório e substantivo
  daily_resources: {
    ted:     { title: string; url: string; tip: string }
    podcast: { title: string; url: string; tip: string }
    onelook_word: string        // uma palavra, sem espaço
    anki_card:    { front: string; back: string }
    speaking_prompt: string     // PT-BR. DEVE especificar estruturas obrigatórias a usar!
    game?: { label: string; url: string }
  }
}
```

---

## BATCH_22_28_SUMMARY — O que já foi ensinado

```ts
{
  range: '22-28',
  theme: 'Modals, Diplomacia e Tomada de Decisão em B1',
  levels: ['B1'],
  structures: [
    'should — Conselho e recomendação suavizada (dia 22)',
    'might — Possibilidades e incertezas polidas (dia 23)',
    'must — Forte dedução baseada em evidências (dia 24)',
    "I'd like to — Desejo polido, substituto do 'I want' (dia 25)",
    "I'd rather — Preferência idiomática e forte (dia 26)",
    "I'm not sure — Hesitação calculada e respeitosa (dia 27)",
    'It depends on — Condicionamento prático de decisões (dia 28)'
  ],
  grammar_arcs: [
    'Dias 22-24: Modals puros no ambiente de trabalho. Transição da certeza rígida para a flexibilidade avaliativa. O aluno aprende a julgar contextos com should (fazer), might (acontecer) e must (ser).',
    'Dias 25-28: Alto impacto diplomático. Estruturas-chave para navegar em reuniões de design/decisão sem impor ideias de forma agressiva. O aluno consegue expressar o que prefere, o que não garante, e os fatores limitantes das decisões, usando o "I\'d (would)" de modo extensivo.'
  ],
  key_contrasts_established: [
    'must (dedução de alta certeza) vs might (baixa certeza)',
    "I'd like to (desejo direto polido) vs I'd rather (comparação/preferência restrita)",
    'should have (conselho passado, Dia 17) vs should (conselho presente, Dia 22)',
    "I don't think we should (negação no think) vs we shouldn't (desaconselhamento direto)"
  ],
  vocabulary_themes: [
    'aprovação e atrasos: deadline, delay, approval, budget',
    'comparação e preferência: overkill, approach, rather, than',
    'incertezas sistêmicas: evidence, bug, data, figure out'
  ],
  connects_to_next: "Batch 5 (dias 29-35): [that's why, as long as, if I were, if I had, I would have, unless, provided that] — [Introdução agressiva ao Modo Condicional. Após aprender a condicionar usando palavras como 'depends' ou modals vagos, o aluno aprenderá a criar as lógicas de SE (If/Unless) que dominam o código e a argumentação corporativa B2]."
}
```

---

## Regras de densidade para o Batch 5
Este é o **batch 5** — cada lição deve ter:
- **2 estruturas integradas** por lição + **1 exercício de síntese** nos drills.
- **6 drills** ao todo. Os drills devem forçar o aluno a combinar pelo menos 2 estruturas na mesma resposta (ex: usar "if I were" junto com "I would").
- O campo `speaking_prompt` agora é mais rigoroso: deve **especificar quais estruturas obrigatórias** o aluno deve praticar em voz alta na simulação de 2 minutos.

---

## Regras de segurança (resumo)
- Strings com apóstrofo **devem usar aspas duplas**: `"I don't know"` ✓ — `'I don't know'` ✗ (quebra TypeScript)
- `connects_to` aceita apenas IDs que já existem (1 a 35).

---

Gere o arquivo completo agora.
