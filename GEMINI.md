# GEMINI.md — Instruções para Geração de Lesson Batches

> Este arquivo é o prompt-base para o Google Gemini (ou qualquer LLM) gerar novos batches de lições para o projeto **FLUX**. Leia tudo antes de gerar qualquer lição.

---

## 1. O que é o FLUX

FLUX é um sistema pessoal de imersão em inglês. Uma página web única que cresce para baixo conforme os dias passam — sem rotas, sem backend, sem login. O usuário pratica uma estrutura por dia (ou mais, conforme avança) seguindo uma progressão pedagógica rigorosa.

- **Stack**: SvelteKit + TypeScript + localStorage
- **Persistência**: Apenas `localStorage` — nunca referencie backend ou APIs
- **Língua do conteúdo**: Inglês (com traduções PT-BR onde especificado no schema)
- **Língua da UI**: Português brasileiro

---

## 2. Arquitetura de Batches

```
src/lib/
  lessons.ts                # entry point — importa e concatena todos os batches
  lessons/
    batch_1_7.ts            # ✅ Completo — dias 1-7
    batch_8_14.ts           # A gerar — dias 8-14
    batch_15_21.ts          # A gerar — dias 15-21
    ...
```

Cada arquivo segue este esqueleto:

```ts
import type { Lesson } from '../types'

export const lessons: Lesson[] = [
  // 7 lições aqui
]

export const BATCH_N_M_SUMMARY = {
  // resumo de contexto — ver seção 5
}
```

Após criar um batch, adicione ao `lessons.ts`:

```ts
import { lessons as batchN } from './lessons/batch_N_M'
export const lessons = [...batch1, ...batchN]
```

E atualize `TOTAL_LESSONS` em `src/lib/utils.ts`.

---

## 3. Passo a Passo para Gerar um Novo Batch

1. **Leia o `BATCH_SUMMARY` do batch anterior** — ele é o único contexto que você precisa do conteúdo passado
2. **Verifique o número do próximo batch** (`batch_N_M.ts`) e os IDs das lições (`N` a `M`)
3. **Siga a tabela de densidade** (seção 6) para saber quantas estruturas por lição e quantos drills
4. **Siga o mapa CEFR** (seção 4) para atribuir o `level` correto
5. **Execute o checklist de qualidade** (seção 8) antes de entregar
6. **Termine sempre com um `BATCH_N_M_SUMMARY`** exportado — é o contexto para o próximo batch

---

## 4. Níveis CEFR — Mapa dos 180 Dias

O campo `level` de cada `Lesson` segue o padrão internacional CEFR:

| Nível | Descrição | Dias |
|-------|-----------|------|
| `A1` | Iniciante — estruturas básicas, vocabulário essencial | 1–7 |
| `A2` | Básico — estruturas frequentes, conversação simples | 8–21 |
| `B1` | Intermediário — estruturas complexas, fluência inicial | 22–56 |
| `B2` | Intermediário-Superior — nuance, registro, expressões idiomáticas | 57–112 |
| `C1` | Avançado — discurso sofisticado, coesão, pragmática | 113–154 |
| `C2` | Maestria — expressão nativa, ambiguidade, estilo | 155–180 |

**Regra**: O nível deve refletir o que um falante nativo esperaria de um aluno ao usar aquela estrutura com propriedade — não apenas reconhecê-la.

### Níveis por Batch (referência rápida)

| Batch | Dias | Nível predominante |
|-------|------|--------------------|
| 1 | 1-7 | A1–A2 |
| 2 | 8-14 | A2 |
| 3 | 15-21 | A2–B1 |
| 4 | 22-28 | B1 |
| 5 | 29-35 | B1 |
| 6 | 36-42 | B1–B2 |
| 7 | 43-49 | B2 |
| 8 | 50-56 | B2 |
| 9+ | 57+ | B2→C1→C2 |

---

## 5. Formato do BATCH_SUMMARY

Todo batch **deve** terminar com este objeto exportado. Ele é o único contexto que o próximo gerador receberá — seja preciso e completo.

```ts
export const BATCH_N_M_SUMMARY = {
  range: 'N-M',
  theme: 'Nome do tema do batch',
  levels: ['A1', 'A2'],            // níveis CEFR cobertos no batch
  structures: [
    'estrutura dia N (verbo/padrão)',
    'estrutura dia N+1 ...',
    // uma entrada por lição
  ],
  grammar_arcs: [
    // descreva os arcos pedagógicos internos ao batch
    // ex: 'Dias 1-3: tríade de aspecto (continuous → perfect → perfect continuous)'
  ],
  key_contrasts_established: [
    // contrastes explicitamente ensinados — evite repeti-los no próximo batch
    // ex: 'simple past vs present perfect'
  ],
  vocabulary_themes: [
    // temas semânticos cobertos — para evitar repetição excessiva
  ],
  connects_to_next: 'Batch X+1 (dias M+1 a M+7): [estruturas previstas] — [por que vêm agora]'
}
```

---

## 6. Escala de Densidade — Mais Estruturas por Dia a Cada 7 Dias

A cada novo batch, aumente progressivamente a densidade de conteúdo por lição:

| Batch | Dias | Estruturas/lição | Drills | Característica principal |
|-------|------|-----------------|--------|--------------------------|
| 1 | 1-7 | 1 | 4 | Introdução limpa — uma estrutura, foco total |
| 2 | 8-14 | 1 + 1 review explícita | 4–5 | Cada lição referencia e drilla 1 estrutura anterior |
| 3 | 15-21 | 1 primária + 1 secundária | 5 | Combinações explícitas entre estruturas |
| 4 | 22-28 | 2 estruturas integradas | 5–6 | Lições ensinam 2 estruturas que se usam juntas |
| 5 | 29-35 | 2 + exercício de síntese | 6 | Drills exigem combinar 2+ estruturas numa resposta |
| 6 | 36-42 | 2–3, com foco em registro | 6 | Formal vs. informal explícito em cada bloco |
| 7 | 43-49 | 3 integradas | 6–7 | Produção livre exige as 3 estruturas juntas |
| 8+ | 50+ | 3+ com variações avançadas | 7 | Síntese contínua, foco em fluência e naturalidade |

**Como implementar o aumento:**
- **Batch 2+**: o campo `review_of` passa a ser obrigatório e substantivo (não vazio)
- **Batch 3+**: adicione um bloco `secondary_drill` nos drills que combine com estrutura anterior
- **Batch 4+**: o `retrieval_prompt` deve exigir o uso de 2 estruturas simultaneamente
- **Batch 5+**: o `speaking_prompt` deve especificar estruturas obrigatórias a usar
- **Batch 7+**: `combinations` deve incluir pelo menos 2 entradas que integrem estruturas de batches anteriores

---

## 7. Schema Completo da Lição

Use exatamente esta interface TypeScript. **Não adicione campos extras, não omita campos obrigatórios.**

```ts
// Tipos definidos em src/lib/types.ts
export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

interface Lesson {
  id: number                   // sequencial, nunca repetir
  level: CefrLevel             // nível CEFR da estrutura principal
  module: number               // número do módulo temático
  moduleTitle: string          // título do módulo (ex: 'Present Structures')
  structure: string            // frase-exemplo da estrutura (fala natural, não padrão abstrato)
  translation: string          // tradução PT-BR da structure
  explanation: string          // explicação em PT-BR — clara, sem jargão excessivo
  why_it_matters: string       // por que brasileiros precisam disso especificamente
  pronunciation: string        // guia fonético prático, com notação IPA ou aproximação
  stress_tip: string           // onde cai o stress — específico e acionável
  pattern: string              // fórmula abstrata: [Sujeito] + verbo + ...
  breakdown: {                 // análise morfossintática da structure-exemplo
    piece: string              // fragmento exato da structure
    role: string               // função gramatical/pragmática em PT-BR
  }[]
  core_vocabulary: {           // 4-6 palavras/chunks de alta frequência
    word: string
    translation: string
    example: string            // exemplo de uso real em inglês
  }[]
  examples: {                  // 3 exemplos em contextos distintos
    work:   { en: string; pt: string }
    travel: { en: string; pt: string }
    study:  { en: string; pt: string }
  }
  variations: {                // 3 formas alternativas da estrutura
    form: string               // formulação — use aspas duplas se contiver apóstrofo
    note: string               // quando/como usar
  }[]
  combinations: {              // 3 combinações produtivas de alto impacto
    phrase: string
    meaning: string
  }[]
  collocations: string[]       // 5 collocations naturais — apenas o chunk, sem exemplo
  common_mistakes: {           // 3 erros típicos de falantes de PT-BR
    wrong: string
    right: string
    tip: string                // explicação do porquê do erro em PT-BR
  }[]
  retrieval_context: string    // cenário realista em PT-BR que motiva o retrieval
  retrieval_prompt: string     // instrução de produção — específica, acionável
  retrieval_reference: string  // resposta de referência completa — use "Exemplo: '...'"
  drills: {                    // 4-7 drills (ver tabela de densidade)
    instruction: string        // instrução em PT-BR
    input: string              // o que o usuário recebe
    answer: string             // resposta correta + explicação se necessário
  }[]
  connects_to: number[]        // IDs de lições relacionadas (já existentes)
  review_of: string            // vazio no batch 1; substantivo no batch 2+
  daily_resources: {
    ted: { title: string; url: string; tip: string }     // TED real, URL válida
    podcast: { title: string; url: string; tip: string } // ESL Pod ou similar
    onelook_word: string       // uma palavra (sem espaço) para onelook.com/?w=
    anki_card: { front: string; back: string }
    speaking_prompt: string    // em PT-BR — o que praticar em voz alta
    game?: { label: string; url: string }               // opcional
  }
}
```

---

## 8. Regras de Qualidade

### 8.1 Exemplos e Contexto
- **Exemplos devem ser reais**: frases que uma pessoa real diria em trabalho, viagem ou estudo
- **Nada de frases de livro didático** como "The cat is on the mat" ou "John goes to school"
- **Contextos progressivos**: trabalho (reuniões, projetos, e-mails), viagem (voos, hotéis, imigração), estudo (aprendizado, pesquisa, feedback)
- **Exemplos de trabalho** devem refletir ambientes contemporâneos: remoto, startups, apresentações, Slack

### 8.2 Vocabulário
- **Progresso gradual**: não introduza vocabulário acima do nível da lição sem explicação
- **Evite repetição excessiva**: verifique o `vocabulary_themes` do batch anterior
- **Chunks > palavras isoladas**: prefira "make progress" a "progress" sozinho
- **Collocations naturais**: testadas em corpus — não invente combinações raras

### 8.3 Drills
- **Variedade de tipo**: completar lacuna, transformar (negativa/pergunta), corrigir erro, escolher entre opções
- **Dificuldade crescente dentro da lição**: drill 1 é o mais fácil, último é o mais desafiador
- **Respostas inequívocas**: só uma resposta correta por drill (ou explique quando há variação)
- **Nunca use "___" sem instrução clara** sobre o que preencher

### 8.4 Recursos (daily_resources)
- **URLs de TED Talks**: use apenas URLs reais do `ted.com/talks/` — não invente slugs
- **ESL Pod**: URL base `https://www.eslpod.com` é suficiente se não souber o episódio exato
- **onelook_word**: uma única palavra em inglês, sem espaço, que aparece na lição
- **Tip de TED/Podcast**: deve ser específico — o que ouvir/observar, não "ouça com atenção"
- **Speaking prompt**: deve ser acionável em 2 minutos de prática solo em voz alta

### 8.5 Pronunciation e Stress
- **IPA onde relevante**: `/aɪv/`, `/ˈɡɒnə/`
- **Aproximações para português**: "soa como 'ai-v'" quando necessário
- **Stress tip**: sempre mencione qual palavra/sílaba recebe o stress e por quê

---

## 9. Regras de Segurança e Coerência

### 9.1 Nunca repita estrutura principal
- Cada lição tem **uma estrutura nova** como foco
- Verificar `structures` do BATCH_SUMMARY anterior antes de definir as 7 do novo batch
- Revisão de estruturas anteriores é **explícita** (via `review_of`, `connects_to`, drills de review) — nunca implícita

### 9.2 Nunca quebre a progressão
- Estruturas complexas pressupõem as simples: não ensine B1 antes de consolidar A2
- Se uma lição referencia outra (`connects_to`), o ID referenciado **deve existir**
- Não introduza conteúdo de C1+ antes do dia 113

### 9.3 Coerência entre campos
- `structure` deve ser **uma frase real de fala** — não o `pattern` abstrato
- `breakdown` deve analisar exatamente as palavras que aparecem em `structure`
- `retrieval_reference` deve usar as mesmas estruturas que o `retrieval_prompt` pede
- `drills` devem exercitar a `structure` do dia — não estruturas aleatórias

### 9.4 Consistência de língua
- Explicações (`explanation`, `why_it_matters`, `stress_tip`, tips de drill) → **PT-BR**
- Conteúdo em inglês (`structure`, `example`, drills `input`/`answer`, TED tip) → **inglês**
- Nunca misture idiomas dentro de um mesmo campo

### 9.5 Aspas e TypeScript
- Strings com apóstrofo (don't, I'm, I've, She's) **devem usar aspas duplas**: `"I don't think"`
- Nunca use aspas simples para strings que contenham `'`
- Teste mentalmente cada string antes de escrever: *"essa string tem apóstrofo?"* → use `"`
- O TypeScript vai falhar silenciosamente se strings mal-formadas passarem pelo editor

### 9.6 connects_to
- Liste apenas IDs de lições que **já existem** (≤ ID atual)
- Máximo de 3 conexões por lição
- IDs devem ser pedagogicamente relevantes — não liste conexões forçadas

---

## 10. Progressão dos 180 Dias (Mapa Completo)

### Módulo 1: Present Structures (dias 1-10) — A1-A2
`am/is/are + ing` · `have + pp` · `I've been` · `going to` · `want to` · `need to` · `I think` · `I know` · `I feel` · `let me`

### Módulo 2: Past Structures (dias 11-20) — A2-B1
`was/were + ing` · `did` · `used to` · `had` · `would` · `I wish` · `I should have` · `I could have` · `I didn't know` · `I was trying`

### Módulo 3: Modals e Alto Impacto (dias 21-30) — B1
`can/could` · `should` · `might` · `must` · `I'd like to` · `I'd rather` · `I'm not sure` · `it depends` · `that's why` · `as long as`

### Módulo 4: Conditionals e Hipótese (dias 31-42) — B1-B2
`if I were` · `if I had` · `I would have` · `unless` · `provided that` · `in case` · `supposing` · `even if` · `whether or not` · `what if` · `only if` · `as long as you`

### Módulo 5: Discourse Markers (dias 43-56) — B2
`however` · `although` · `despite` · `on the other hand` · `in addition` · `as a result` · `therefore` · `for instance` · `in contrast` · `what's more` · `having said that` · `to sum up` · `not only... but also` · `needless to say`

### Módulo 6: Expressões de Alta Frequência (dias 57-70) — B2
`I was wondering` · `I'm afraid` · `it turns out` · `I ended up` · `I couldn't help` · `I can't afford to` · `I'm looking forward to` · `I'd rather not` · `I'm used to` · `I'm about to` · `I keep + ing` · `I tend to` · `I'm willing to` · `I'm supposed to`

### Módulo 7: Registro Formal e Profissional (dias 71-84) — B2-C1
`I'd like to propose` · `I would suggest` · `It is worth noting` · `I'd like to draw your attention to` · `I'm pleased to inform` · `With regard to` · `As discussed` · `I would appreciate` · `Please find attached` · `Following up on` · `To clarify` · `I look forward to`

### Módulo 8: Nuance e Pragmática (dias 85-98) — C1
`I can't help but think` · `It occurs to me that` · `I'm inclined to` · `It stands to reason` · `I take it that` · `I gather that` · `I dare say` · `It's fair to say` · `I'm bound to` · `I'm convinced that` · `I have to admit` · `It goes without saying` · `I have a feeling` · `I can't quite put my finger on`

### Módulo 9: Idioms e Expressões Nativas (dias 99-112) — C1
`hit the ground running` · `cut to the chase` · `bear in mind` · `keep in mind` · `it's a long shot` · `on the same page` · `get the ball rolling` · `wrap your head around` · `take it with a grain of salt` · `read between the lines` · `think outside the box` · `the bottom line` · `bite the bullet` · `a blessing in disguise`

### Módulos 10-14: C1-C2 (dias 113-180)
Estruturas avançadas de coesão, estilo, registro acadêmico, ironia, ambiguidade e expressão nativa.
*(Detalhes a definir com base nos BATCH_SUMMARYs acumulados)*

---

## 11. Template de Batch (Copie e Preencha)

```ts
import type { Lesson } from '../types'

export const lessons: Lesson[] = [
  // ─── DIA N ──────────────────────────────────────────────────────────────
  {
    id: N,
    level: 'A2',           // ver seção 4
    module: X,
    moduleTitle: 'Nome do Módulo',
    structure: "Frase real que um nativo diria",
    translation: 'Tradução natural em PT-BR',
    explanation: 'Explicação em PT-BR — o que é, quando usar.',
    why_it_matters: 'Por que brasileiros especificamente precisam disso.',
    pronunciation: 'Guia fonético com IPA e aproximação.',
    stress_tip: 'Qual sílaba/palavra recebe stress e por quê.',
    pattern: '[Sujeito] + verbo + ...',
    breakdown: [
      { piece: 'fragmento exato da structure', role: 'função em PT-BR' },
      // ...
    ],
    core_vocabulary: [
      { word: 'chunk', translation: 'tradução', example: 'Frase em inglês.' },
      // 4-6 entradas
    ],
    examples: {
      work:   { en: 'Frase de trabalho em inglês.', pt: 'Tradução PT-BR.' },
      travel: { en: 'Frase de viagem em inglês.', pt: 'Tradução PT-BR.' },
      study:  { en: 'Frase de estudo em inglês.', pt: 'Tradução PT-BR.' }
    },
    variations: [
      { form: "Forma variante — use aspas duplas se tiver apóstrofo", note: 'Quando usar.' },
      // 3 entradas
    ],
    combinations: [
      { phrase: "chunk + [tipo]", meaning: 'significado prático' },
      // 3 entradas
    ],
    collocations: ['chunk1', 'chunk2', 'chunk3', 'chunk4', 'chunk5'],
    common_mistakes: [
      { wrong: 'Erro típico de falante PT-BR', right: 'Forma correta', tip: 'Por quê.' },
      // 3 entradas
    ],
    retrieval_context: 'Cenário realista em PT-BR.',
    retrieval_prompt: 'Instrução de produção específica.',
    retrieval_reference: "Exemplo: 'Resposta completa de referência em inglês.'",
    drills: [
      { instruction: 'Instrução em PT-BR.', input: 'O que o usuário recebe.', answer: 'Resposta correta.' },
      // 4-7 drills (ver tabela de densidade)
    ],
    connects_to: [1, 2],  // IDs que já existem
    review_of: '',         // vazio no batch 1; substantivo no batch 2+
    daily_resources: {
      ted: {
        title: 'Título real do TED Talk',
        url: 'https://www.ted.com/talks/slug_real_do_talk',
        tip: 'O que observar especificamente neste talk.'
      },
      podcast: {
        title: 'Nome do episódio/série',
        url: 'https://www.eslpod.com',
        tip: 'O que ouvir especificamente.'
      },
      onelook_word: 'umapalavra',
      anki_card: {
        front: 'Pergunta do card em PT-BR ou inglês.',
        back: 'Resposta com a estrutura completa.'
      },
      speaking_prompt: 'O que praticar em voz alta — em PT-BR, acionável em 2 min.',
      game: { label: 'Nome do jogo', url: 'https://www.englishclub.com/...' }
    }
  },
]

export const BATCH_N_M_SUMMARY = {
  range: 'N-M',
  theme: 'Tema do batch',
  levels: ['A2', 'B1'],
  structures: ['estrutura 1', 'estrutura 2', /* ... 7 total */],
  grammar_arcs: ['Arco 1', 'Arco 2'],
  key_contrasts_established: ['contraste 1', 'contraste 2'],
  vocabulary_themes: ['tema 1', 'tema 2'],
  connects_to_next: 'Batch X+1 (dias M+1 a M+7): [estruturas] — [por que agora]'
}
```

---

## 12. Checklist antes de Entregar o Batch

- [ ] 7 lições com IDs sequenciais corretos
- [ ] Campo `level` preenchido em todas as lições (seguindo seção 4)
- [ ] Nenhuma string com apóstrofo usando aspas simples
- [ ] Todos os `connects_to` referenciam IDs existentes (≤ ID atual)
- [ ] `review_of` preenchido no batch 2+ (não vazio)
- [ ] Drills na quantidade correta para o batch (ver seção 6)
- [ ] `retrieval_reference` começa com `"Exemplo: '..."` e usa a estrutura pedida
- [ ] URLs de TED Talks são reais (não inventadas)
- [ ] `onelook_word` é uma única palavra sem espaços
- [ ] `BATCH_N_M_SUMMARY` exportado ao final com todos os campos preenchidos
- [ ] `connects_to_next` descreve o próximo batch com estruturas e justificativa
- [ ] Compilação TypeScript sem erros (sem `'` dentro de `'...'`)
