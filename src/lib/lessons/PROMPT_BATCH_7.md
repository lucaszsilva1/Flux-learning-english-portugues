# Prompt para Gemini — Gerar batch_43_49.ts

Cole este arquivo inteiro no Gemini. Ele é autocontido — não precisa de nenhum outro arquivo.

---

## Contexto: Projeto FLUX

Sistema de imersão em inglês. Uma página web que exibe lições diárias em sequência. Sem backend, sem rotas adicionais. O usuário pratica uma estrutura gramatical por dia seguindo progressão pedagógica rigorosa.

**Stack**: SvelteKit + TypeScript. Persistência via `localStorage`. Sem autenticação.

---

## O que você vai gerar

O arquivo `src/lib/lessons/batch_43_49.ts` com **7 lições** (dias 43 a 49) + o objeto `BATCH_43_49_SUMMARY` exportado ao final.

Este arquivo será importado em `src/lib/lessons.ts` assim:
```ts
import { lessons as batch7 } from './lessons/batch_43_49'
export const lessons = [...batch1, ...batch2, ...batch3, ...batch4, ...batch5, ...batch6, ...batch7]
```

---

## Estruturas dos dias 43-49 (segundo o currículo)

| Dia | Estrutura | Módulo | Nível |
|-----|-----------|--------|-------|
| 43 | however | Discourse Markers | B2 |
| 44 | although | Discourse Markers | B2 |
| 45 | despite | Discourse Markers | B2 |
| 46 | on the other hand | Discourse Markers | B2 |
| 47 | in addition | Discourse Markers | B2 |
| 48 | as a result | Discourse Markers | B2 |
| 49 | therefore | Discourse Markers | B2 |

---

## Interface TypeScript obrigatória

```ts
export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

interface Lesson {
  id: number
  level: CefrLevel
  module: number
  moduleTitle: string
  structure: string            // frase real de fala natural/escrita B2
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
  connects_to: number[]         // apenas IDs 1-49 que já existem
  review_of:   string           // Obrigatório e substantivo
  daily_resources: {
    ted:     { title: string; url: string; tip: string }
    podcast: { title: string; url: string; tip: string }
    onelook_word: string        // uma palavra, sem espaço
    anki_card:    { front: string; back: string }
    speaking_prompt: string     // PT-BR. DEVE exigir o uso combinado de múltiplas estruturas!
    game?: { label: string; url: string }
  }
}
```

---

## BATCH_36_42_SUMMARY — O que já foi ensinado

```ts
{
  range: '36-42',
  theme: 'Registro e Exceções Extremos das Condicionais',
  levels: ['B1', 'B2'],
  structures: [
    'in case — Prevenção e antecipação de riscos (dia 36, B1)',
    'supposing — Experimentos mentais criativos no B2 (dia 37, B2)',
    'even if — Futilidade e resiliência (condição nula) (dia 38, B2)',
    'whether or not — Dicotomia inevitável e tomada de decisão (dia 39, B2)',
    'what if — Sugestão provocativa com suspensão de descrença (dia 40, B1-B2)',
    'only if — Barganha de exclusão absoluta e agressiva (dia 41, B2)',
    'otherwise — Consequência alternativa, alerta técnico e ultimato (dia 42, B2)'
  ],
  grammar_arcs: [
    'Dias 36-37: O domínio da antecipação (In Case vs Supposing). O aluno aprende a diferença entre tomar uma atitude preventiva concreta no mundo real (in case) versus especular uma catástrofe ou cenário hipotético para desenhar soluções criativas (supposing).',
    'Dias 38-42: O fechamento retumbante do Módulo 4 (Condicionais B2). O aluno entende que não basta dominar "IF". A língua corporativa lida com coisas que não importam (even if), que são inevitáveis de qualquer lado (whether or not), sugestões casuais (what if) e ameaças cruas e inegociáveis de fluxo lógico (only if / otherwise).'
  ],
  key_contrasts_established: [
    'If (reação temporal direta) vs In case (prevenção imediata)',
    'As long as (acordo condicional pacífico) vs Whether or not (inevitabilidade tratoradora)',
    'Provided that (exigência formal contratual) vs Only if (exigência restritiva extrema em fala)',
    'Unless (faça isso se quiser prosseguir) vs Even if (mesmo que faça isso, não adiantará)'
  ],
  vocabulary_themes: [
    'riscos e suposições: backup, crash, scenario, suppose',
    'futilidade e limites: all night, matter, whether, decide',
    'barganhas e ultimatos: MVP, lower, sign, fix, otherwise'
  ],
  connects_to_next: "Batch 7 (dias 43-49): [however, although, despite, on the other hand, in addition, as a result, therefore] — [Abertura do Módulo 5 (Discourse Markers B2). Agora que o aluno sabe impor condições e projetar consequências de alto nível, ele precisa organizar seu pensamento e escrita técnica em parágrafos coerentes, unindo contraste, soma e resolução de argumentos de forma sofisticada]."
}
```

---

## Regras de densidade para o Batch 7
Este é o **batch 7** — cada lição deve ter:
- **3 estruturas integradas** e foco na fluidez textual e argumentação (sintaxe de parágrafos).
- Produção livre (speaking prompt e drills de síntese) DEVE exigir as 3 estruturas juntas (ex: montar uma frase de conclusão com contraste).
- **6 a 7 drills**.
- `review_of` precisa amarrar fortemente os discourse markers atuais com as condicionais passadas (Module 4) e modals (Module 3).

---

## Regras de segurança (resumo)
- Strings com apóstrofo **devem usar aspas duplas**.
- `connects_to` aceita apenas IDs que já existem (1 a 49).
- Finalize com `BATCH_43_49_SUMMARY` detalhado.

Gere o arquivo completo agora.
