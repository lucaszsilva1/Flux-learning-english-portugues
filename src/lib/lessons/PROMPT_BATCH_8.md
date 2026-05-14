# Prompt para Gemini — Gerar batch_50_56.ts

Cole este arquivo inteiro no Gemini. Ele é autocontido — não precisa de nenhum outro arquivo.

---

## Contexto: Projeto FLUX

Sistema de imersão em inglês. Uma página web que exibe lições diárias em sequência. Sem backend, sem rotas adicionais. O usuário pratica uma estrutura gramatical por dia seguindo progressão pedagógica rigorosa.

**Stack**: SvelteKit + TypeScript. Persistência via `localStorage`. Sem autenticação.

---

## O que você vai gerar

O arquivo `src/lib/lessons/batch_50_56.ts` com **7 lições** (dias 50 a 56) + o objeto `BATCH_50_56_SUMMARY` exportado ao final.

Este arquivo será importado em `src/lib/lessons.ts` assim:
```ts
import { lessons as batch8 } from './lessons/batch_50_56'
export const lessons = [...batch1, ...batch2, ...batch3, ...batch4, ...batch5, ...batch6, ...batch7, ...batch8]
```

---

## Estruturas dos dias 50-56 (segundo o currículo)

| Dia | Estrutura | Módulo | Nível |
|-----|-----------|--------|-------|
| 50 | for instance | Discourse Markers | B2 |
| 51 | in contrast | Discourse Markers | B2 |
| 52 | what's more | Discourse Markers | B2 |
| 53 | having said that | Discourse Markers | B2 |
| 54 | to sum up | Discourse Markers | B2 |
| 55 | not only... but also | Discourse Markers | B2 |
| 56 | needless to say | Discourse Markers | B2 |

---

## Interface TypeScript obrigatória

*(Siga a exata e mesma estrutura/tipo da interface `Lesson` habitual)*

---

## BATCH_43_49_SUMMARY — O que já foi ensinado

```ts
{
  range: '43-49',
  theme: 'Discourse Markers — Da Argumentação à Conclusão (B2)',
  levels: ['B2'],
  structures: [
    'however — O contraste ponderado corporativo (dia 43, B2)',
    'although — Concessão fluida e superação de falhas (dia 44, B2)',
    'despite — Concessão enxuta via substantivo/gerúndio (dia 45, B2)',
    'on the other hand — Equilíbrio diplomático de trade-offs (dia 46, B2)',
    'in addition — Escalada de argumentação por soma (dia 47, B2)',
    'as a result — Relatórios causais e impessoalidade (dia 48, B2)',
    'therefore — O veredito técnico irrevogável (dia 49, B2)'
  ],
  grammar_arcs: [
    'Dias 43-46: Os Quatro Cavaleiros do Contraste. O aluno abandonou os simples "but". Aprendeu a quebrar frases ao meio (However), antecipar problemas heroicamente (Although), focar no substantivo (Despite) e pesar pros e contras mantendo empatia (On the other hand).',
    'Dias 47-49: O Dossiê da Execução. Passa do contraste para a soma de agravantes (In addition), rastreia a culpa sistêmica (As a result) e profere a sentença de bloqueio final usando a lógica matemática (Therefore). A produção deixa de ser "uma frase" e passa a ser "a construção de um parágrafo complexo".'
  ],
  key_contrasts_established: [
    'but (casual) vs however (formal e pontuado)',
    'although (exige oração Sujeito+Verbo) vs despite (exige apenas Noun/-ING)',
    'even if (condição de futilidade futura) vs although (obstáculo real no presente)',
    "that's why (motivo de algo ocorrer) vs as a result (laudo de processo desencadeado)",
    "otherwise (ameaça técnica) vs therefore (veredito lógico e jurídico)"
  ],
  vocabulary_themes: [
    'reuniões de crise e prazos: tight deadline, deliver, core, delay',
    'argumentos de sucesso x falha: success, issue, lack, essential',
    'trade-offs técnicos: steep learning curve, fast, slow'
  ],
  connects_to_next: "Batch 8 (dias 50-56): [for instance, in contrast, what's more, having said that, to sum up, not only... but also, needless to say] — [Fechamento absoluto do Módulo 5 e consolidação do B2. Após aprender as transições pesadas de causa/consequência e contraste, o aluno polirá o discurso com conectores de nuance fina, exemplos elegantes, resumos executivos e estruturas correlativas extremas (Not only X, but also Y)]."
}
```

---

## Regras de densidade para o Batch 8
Este é o **batch 8** — o aluno está dominando B2 fluente. Cada lição deve ter:
- **3+ estruturas interligadas** de aulas passadas servindo de suporte para a nova (muito foco em reuso das estruturas dos dias 43-49 para fixar os marcadores de parágrafo).
- **7 drills** exigindo extrema tradução idiomática e combinação complexa (sínteses contínuas de 3 frases).
- `speaking_prompt` focado em "Monólogos Corporativos", ou seja, defesa ininterrupta de 2 minutos que obrigue uso das transições.
- Finalize com `BATCH_50_56_SUMMARY` detalhado indicando o início do módulo de Expressões (Módulo 6).

---

## Regras de segurança (resumo)
- Strings com apóstrofo **devem usar aspas duplas** (crucial).
- `connects_to` aceita IDs de 1 a 56.

Gere o arquivo completo agora.
