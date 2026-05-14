# Prompt para Gemini — Gerar batch_57_63.ts

Cole este arquivo inteiro no Gemini. Ele é autocontido — não precisa de nenhum outro arquivo.

---

## Contexto: Projeto FLUX

Sistema de imersão em inglês. Uma página web que exibe lições diárias em sequência. Sem backend, sem rotas adicionais. O usuário pratica uma estrutura gramatical por dia seguindo progressão pedagógica rigorosa.

**Stack**: SvelteKit + TypeScript. Persistência via `localStorage`. Sem autenticação.

---

## O que você vai gerar

O arquivo `src/lib/lessons/batch_57_63.ts` com **7 lições** (dias 57 a 63) + o objeto `BATCH_57_63_SUMMARY` exportado ao final.

Este arquivo será importado em `src/lib/lessons.ts` assim:
```ts
import { lessons as batch9 } from './lessons/batch_57_63'
export const lessons = [...batch1, ...batch2, ...batch3, ...batch4, ...batch5, ...batch6, ...batch7, ...batch8, ...batch9]
```

---

## Estruturas dos dias 57-63 (Módulo 6: Expressões de Alta Frequência)

| Dia | Estrutura | Módulo | Nível |
|-----|-----------|--------|-------|
| 57 | I was wondering | Expressões de Alta Frequência | B2 |
| 58 | I'm afraid | Expressões de Alta Frequência | B2 |
| 59 | it turns out | Expressões de Alta Frequência | B2 |
| 60 | I ended up | Expressões de Alta Frequência | B2 |
| 61 | I couldn't help | Expressões de Alta Frequência | B2 |
| 62 | I can't afford to | Expressões de Alta Frequência | B2 |
| 63 | I'm looking forward to | Expressões de Alta Frequência | B2 |

---

## Interface TypeScript obrigatória

*(Siga a exata e mesma estrutura/tipo da interface `Lesson` habitual)*

---

## BATCH_50_56_SUMMARY — O que já foi ensinado

```ts
{
  range: '50-56',
  theme: 'A Elegância Final dos Discourse Markers (B2 / C1)',
  levels: ['B2'],
  structures: [
    'for instance — A exemplificação inteligente como amostra (dia 50, B2)',
    'in contrast — Oposição direta rigorosa e formal (dia 51, B2)',
    "what's more — A soma de fatos com entusiasmo conversacional (dia 52, B2)",
    'having said that — A concessão de líder, assumindo riscos de forma diplomática (dia 53, B2)',
    'to sum up — O corte de ruído (TL;DR) no discurso executivo (dia 54, B2)',
    'not only... but also — A soma exponencial C1 com inversão gramatical (dia 55, B2-C1)',
    'needless to say — A garantia e demarcação da obviedade inquestionável (dia 56, B2)'
  ],
  grammar_arcs: [
    'Dias 50-54: Refinando o Discurso. O aluno aprende a dar os contrapontos da vida real com "having said that" para não parecer agressivo e a "sumarizar" argumentos depois de usar toda aquela sintaxe densa que ele aprendeu.',
    'Dias 55-56: Fluência Nativa C1 e Fechamento. O uso da inversão gramatical após "Not only" quebra o bloqueio de B2 do brasileiro, obrigando o uso do "did/do/is/have" antes do sujeito, criando o formato retórico supremo do inglês nativo (E o "needless to say" garante a autoridade final).'
  ],
  key_contrasts_established: [
    'for instance (exemplo de uma ideia) vs such as (lista direta de substantivos)',
    "in addition (soma neutra em papel) vs what's more (soma emocionada na fala)",
    'although (mesma frase e fluxo constante) vs having said that (pausa longa e quebra de fluxo lógico)',
    'Not only he is (erro coloquial) vs Not only IS HE (norma culta nativa e imponente)'
  ],
  vocabulary_themes: [
    'desempenho e falhas: load, crash, fast, slow, fluent, skilled',
    'gestão e sumarização: tight budget, sum up, try, hire',
    'contratos ocultos: provide, support, transition, needless'
  ],
  connects_to_next: "Batch 9 (dias 57-63): [I was wondering, I'm afraid, it turns out, I ended up, I couldn't help, I can't afford to, I'm looking forward to] — [Abertura do Módulo 6: Alta Frequência. Agora que o aluno já domina Condicionais e Conectores Textuais maduros, ele sai do campo gramatical pesado e entra nos Chunks Idiomáticos do dia a dia nativo; as expressões que encurtam frases e destravam a fala de rua e de escritório]."
}
```

---

## Regras de densidade para o Batch 9
Este é o **batch 9** — A entrada no mundo dos "Idioms" e expressões curtas. Cada lição deve ter:
- **3+ estruturas interligadas** de aulas passadas. Use extensivamente as transições textuais recém-aprendidas (however, what's more, therefore).
- **7 drills** que foquem nos falsos cognatos dessas expressões (ex: I ended up não é "Eu finalizei pra cima").
- `speaking_prompt` focado em narrativas pessoais informais.
- Finalize com `BATCH_57_63_SUMMARY`.

---

## Regras de segurança (resumo)
- Strings com apóstrofo **devem usar aspas duplas**.
- Atenção máxima ao gerúndio: expressões como "I ended up" ou "looking forward to" exigem verbo com **-ing** depois. Destaque isso no *breakdown* e nos erros comuns.
- `connects_to` aceita IDs de 1 a 63.

Gere o arquivo completo agora.
