# Prompt para Gemini — Gerar batch_36_42.ts

Cole este arquivo inteiro no Gemini. Ele é autocontido — não precisa de nenhum outro arquivo.

---

## Contexto: Projeto FLUX

Sistema de imersão em inglês. Uma página web que exibe lições diárias em sequência. Sem backend, sem rotas adicionais. O usuário pratica uma estrutura gramatical por dia seguindo progressão pedagógica rigorosa.

**Stack**: SvelteKit + TypeScript. Persistência via `localStorage`. Sem autenticação.

---

## O que você vai gerar

O arquivo `src/lib/lessons/batch_36_42.ts` com **7 lições** (dias 36 a 42) + o objeto `BATCH_36_42_SUMMARY` exportado ao final.

Este arquivo será importado em `src/lib/lessons.ts` assim:
```ts
import { lessons as batch6 } from './lessons/batch_36_42'
export const lessons = [...batch1, ...batch2, ...batch3, ...batch4, ...batch5, ...batch6]
```

---

## Estruturas dos dias 36-42 (segundo o currículo)

| Dia | Estrutura | Módulo | Nível |
|-----|-----------|--------|-------|
| 36 | in case | Conditionals e Hipótese | B1-B2 |
| 37 | supposing | Conditionals e Hipótese | B2 |
| 38 | even if | Conditionals e Hipótese | B2 |
| 39 | whether or not | Conditionals e Hipótese | B2 |
| 40 | what if | Conditionals e Hipótese | B1-B2 |
| 41 | only if | Conditionals e Hipótese | B2 |
| 42 | otherwise | Conditionals e Hipótese | B2 |

---

## Interface TypeScript obrigatória

*(Use a mesma interface `Lesson` habitual)*

---

## BATCH_29_35_SUMMARY — O que já foi ensinado

```ts
{
  range: '29-35',
  theme: 'Causalidade, Negociação e O Mundo Hipotético B2',
  levels: ['B1', 'B2'],
  structures: [
    "that's why — Conector de causa e consequência prática (dia 29, B1)",
    'as long as — Condição limite essencial / barganha (dia 30, B1)',
    'if I were — A 2ª Condicional no subjuntivo formal (dia 31, B2)',
    'if I had — A 2ª Condicional da posse irreal de recursos (dia 32, B2)',
    'I would have — A 3ª Condicional e o arrependimento absoluto / post-mortem (dia 33, B2)',
    'unless — Bloqueio de fluxo condicional negativo (dia 34, B2)',
    'provided that — A versão executiva e contratual de as long as (dia 35, B2)'
  ],
  grammar_arcs: [
    'Dias 29-30: O fechamento prático do Módulo 3. O aluno consolida como explicar por que algo ocorreu e como impor restrições rápidas de trabalho antes de avançar.',
    'Dias 31-35: O salto para a maturidade B2 (Módulo 4). A gramática sai do mundo real tangível para o "Mundo das Sombras". Se o tempo é insuficiente e os bugs abundam, o aluno precisa saber especular cenários irreais com precisão, manipulando passados irreais (were/had), passados sobre passados (had + pp -> would have + pp) e criando ultimatums de exceção absolutos com unless e provided that.'
  ],
  key_contrasts_established: [
    "that's why (ação ligada a passado fixo) vs unless (condição de fuga futura)",
    'as long as (condição comum de trabalho) vs provided that (condição B2B burocrática e inegociável)',
    "if I were (irreal presente de estado) vs if I had known (irreal irreversível de culpa)",
    "should have tested (Ato de dever irreal) vs would have crashed (Ato de resultado irreal)"
  ],
  vocabulary_themes: [
    'crashes, atrasos e post-mortems: delay, launch, crash, refactor, entire',
    'contratos e bloqueios: meet the deadline, approve, contract, terms',
    'hipóteses interpessoais: if I were you, manager, experience'
  ],
  connects_to_next: "Batch 6 (dias 36-42): [in case, supposing, even if, whether or not, what if, only if, otherwise] — [Finalização absoluta de Conditionals. Após aprender as regras duras de negociação (unless, provided that), o aluno passa a explorar exceções e dúvidas extremas: 'E se? Mesmo que? Em todo caso'. O domínio de escopos de incerteza B2 no ambiente tech]."
}
```

---

## Regras de densidade para o Batch 6
Este é o **batch 6** — cada lição deve ter:
- **2 a 3 estruturas integradas**, com forte foco em formalidade/informalidade (registro corporativo).
- Pelo menos um contraste de registro ("Isso soa formal", "Na fala do dia a dia diríamos assim").
- **6 drills** complexos.
- `review_of` obrigatório detalhando interconexão semântica profunda.

---

## Regras de segurança (resumo)
- Strings com apóstrofo **devem usar aspas duplas**.
- `connects_to` aceita apenas IDs que já existem (1 a 42).
- Finalize com `BATCH_36_42_SUMMARY` detalhado.

Gere o arquivo completo agora.
