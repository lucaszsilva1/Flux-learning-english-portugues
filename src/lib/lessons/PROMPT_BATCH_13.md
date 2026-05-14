# Prompt para Gemini — Gerar batch_85_91.ts

Cole este arquivo inteiro no Gemini. Ele é autocontido — não precisa de nenhum outro arquivo.

---

## Contexto: Projeto FLUX

Sistema de imersão em inglês. Uma página web que exibe lições diárias em sequência. Sem backend, sem rotas adicionais. O usuário pratica uma estrutura gramatical por dia seguindo progressão pedagógica rigorosa.

**Stack**: SvelteKit + TypeScript. Persistência via `localStorage`. Sem autenticação.

---

## O que você vai gerar

O arquivo `src/lib/lessons/batch_85_91.ts` com **7 lições** (dias 85 a 91) + o objeto `BATCH_85_91_SUMMARY` exportado ao final.

Este arquivo será importado em `src/lib/lessons.ts` assim:
```ts
import { lessons as batch13 } from './lessons/batch_85_91'
export const lessons = [...batchesAnteriores, ...batch13]
```

---

## Estruturas dos dias 85-91 (Módulo 8: Nuance e Pragmática - Parte 1)

| Dia | Estrutura | Módulo | Nível |
|-----|-----------|--------|-------|
| 85 | I can't help but think | Nuance e Pragmática | C1 |
| 86 | It occurs to me that | Nuance e Pragmática | C1 |
| 87 | I'm inclined to | Nuance e Pragmática | C1 |
| 88 | It stands to reason | Nuance e Pragmática | C1 |
| 89 | I take it that | Nuance e Pragmática | C1 |
| 90 | I gather that | Nuance e Pragmática | C1 |
| 91 | I dare say | Nuance e Pragmática | C1 |

---

## Interface TypeScript obrigatória

*(Siga a exata e mesma estrutura/tipo da interface `Lesson` habitual)*

---

## BATCH_78_84_SUMMARY — O que já foi ensinado

```ts
{
  range: '78-84',
  theme: 'Fechamento do Módulo 7: O Arsenal Corporativo Definitivo (C1)',
  levels: ['C1'],
  structures: [
    "I would appreciate it if — O 'it' obrigatório da exigência diplomática de luxo (dia 78, C1)",
    'Please find attached — A fórmula canônica, rígida e litúrgica da anexação corporativa (dia 79, C1)',
    'Following up on — O rito da cobrança pacífica e destrancamento de vácuos em mensagens (dia 80, C1)',
    'To clarify — A interrupção incisiva para dissecar fumaça, ambiguidade e forçar compromissos (dia 81, C1)',
    'I look forward to + ING — O fechamento estático e majestoso (oposto frio de looking forward) (dia 82, C1)',
    'Please let me know — A porta aberta permanente da recepção corporativa amigável (dia 83, C1)',
    'On behalf of — A representação diplomática de entidades inteiras. A coroa da liderança C1 (dia 84, C1)'
  ],
  grammar_arcs: [
    'O Fim da Flexibilidade. O aluno compreendeu que, no mais alto escalão de negociação anglo-saxônica, a linguagem não inova. "Please find attached" e "I look forward to" são blocos invioláveis, cujo uso correto atesta senioridade e pertença ao grupo.',
    'Cobranças e Puxões. O aluno aprendeu a gerenciar atritos em calls remotas, substituindo as farpas tupiniquins (Why didn\'t you send?) pelo pacote aveludado C1 (Following up... I would appreciate it if... To clarify...).'
  ],
  key_contrasts_established: [
    'I appreciate you help (Erro fatal sem IT) vs I would appreciate IT if (Estrutura intocável)',
    'I look forward to hear (O erro bilionário) vs I look forward to HEARING (O gerúndio C1 Oculto)',
    'In name of (Magia negra poética) vs On behalf of (Representação corporativa)'
  ],
  vocabulary_themes: [
    'exigências e documentos: appreciate it if, send the files by Friday, attached, report',
    'gestão de crise em chamadas: following up on, clarify, update',
    'embaixadores e recepção: let me know, require further information, on behalf of'
  ],
  connects_to_next: "Batch 13 (dias 85-91): [I can't help but think, It occurs to me that, I'm inclined to, It stands to reason, I take it that, I gather that, I dare say] — [Abertura do Módulo 8: Nuance e Pragmática. Após polir a armadura executiva, entraremos na mente do pensador nativo: como eles criam deduções e compartilham opiniões complexas usando a intuição verbal com expressões como 'Eu não posso deixar de pensar que' e 'Me ocorre que']."
}
```

---

## Regras de densidade para o Batch 13
Este é o **batch 13** — Módulo 8 (Nuance, Intuição e Pragmática C1).
- **3+ estruturas interligadas**. Faça revisões do Módulo 7 (emails e formalidades) e misture com essas novas suposições elegantes.
- **7 drills** que exijam reflexão sutil e interpretação avançada ("I take it that you are angry" vs "Are you angry?").
- `speaking_prompt` voltado para monólogos filosóficos, deduções investigativas e resenhas críticas profundas de filmes/projetos.
- Finalize com `BATCH_85_91_SUMMARY`.

---

## Regras de segurança (resumo)
- Strings com apóstrofo **devem usar aspas duplas**.
- `connects_to` aceita IDs de 1 a 91.
- Atenção às preposições ocultas nas explicações idiomáticas.

Gere o arquivo completo agora.
