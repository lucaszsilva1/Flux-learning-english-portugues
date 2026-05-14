import type { Lesson } from '../types'

export const lessons: Lesson[] = [
  {
    id: 29,
    level: 'B1',
    module: 3,
    moduleTitle: 'Modals e Alto Impacto',
    structure: "The server crashed, and that's why we need to delay the launch.",
    translation: 'O servidor caiu, e é por isso que nós precisamos adiar o lançamento.',
    explanation: '"That\'s why" é o conector causal supremo do inglês falado e corporativo. Ele une um fato ou evidência anterior à consequência lógica. É infinitamente mais natural do que usar "Because of this" ou tentar inverter a frase com "Because".',
    why_it_matters: 'Para relatar problemas, você descreve o que deu errado e, imediatamente depois, a sua ação ou conclusão. "That\'s why" te permite pensar em cadeia (Problema -> Consequência) sem precisar planejar a frase inteira de antemão.',
    pronunciation: '/ðæts waɪ/',
    stress_tip: 'O foco vai fortemente no "why", servindo como uma ponte dramática entre as duas partes da frase.',
    pattern: '[Fato anterior] + (and) that\'s why + [consequência/ação]',
    breakdown: [
      { piece: 'The server crashed', role: 'Fato anterior / Problema' },
      { piece: "and that's why", role: 'Conector de causalidade (e é por isso que)' },
      { piece: 'we need to delay', role: 'A obrigação/consequência lógica (need to)' },
      { piece: 'the launch', role: 'Objeto direto' }
    ],
    core_vocabulary: [
      { word: "that's why", translation: 'é por isso que', example: "He was sick, that's why he didn't come." },
      { word: 'delay', translation: 'adiar/atrasar', example: 'We have to delay the meeting.' },
      { word: 'crash', translation: 'cair/parar de funcionar (sistema)', example: 'My computer crashed.' },
      { word: 'launch', translation: 'lançamento', example: 'The product launch is tomorrow.' }
    ],
    examples: {
      work: { en: "We are over budget, that's why we can't hire anyone right now.", pt: 'Estouramos o orçamento, é por isso que não podemos contratar ninguém agora.' },
      travel: { en: "The flight was canceled, that's why we are still here.", pt: 'O voo foi cancelado, é por isso que ainda estamos aqui.' },
      study: { en: "I didn't study, that's why I failed.", pt: 'Eu não estudei, é por isso que eu reprovei.' }
    },
    variations: [
      { form: "Which is why", note: 'Versão um pouco mais formal e gramaticalmente subordinada.' },
      { form: "That's the reason why", note: 'Mais longo, usado para dar muita ênfase à razão.' },
      { form: "Is that why...?", note: 'Para confirmar uma suspeita (É por isso que...?).' }
    ],
    combinations: [
      { phrase: "that's why we should", meaning: 'É por isso que nós deveríamos (Conselho pós-problema)' },
      { phrase: "that's why I'd rather", meaning: 'Justificando uma preferência' },
      { phrase: "that's why it must be", meaning: 'Justificando uma dedução forte' }
    ],
    collocations: ["that's why I", "that's why we", "and that's why", "which is why"],
    common_mistakes: [
      { wrong: 'Is for this that we...', right: "That's why we...", tip: 'Tradução literal terrível do português ("é por isso que").' },
      { wrong: 'Because this we...', right: "Because of this, we... / That's why we...", tip: '"Because" pede uma oração completa depois dele, não apenas "this". Mas prefira "that\'s why".' },
      { wrong: 'That\'s why to go.', right: "That's why we go.", tip: '"That\'s why" precisa ser seguido por uma oração completa (Sujeito + Verbo), não por verbo no infinitivo.' }
    ],
    retrieval_context: 'O cliente está cobrando a nova funcionalidade, mas sua equipe encontrou bugs críticos. Você precisa explicar a relação entre o erro e o atraso na entrega.',
    retrieval_prompt: 'Explique que existem bugs críticos e conclua que "é por isso que" vocês precisam de mais tempo.',
    retrieval_reference: "Exemplo: 'There are critical bugs, and that's why we need more time.'",
    drills: [
      { instruction: 'Traduza o conector.', input: 'É por isso que nós precisamos esperar.', answer: "That's why we need to wait." },
      { instruction: 'Forme a cadeia lógica (Causa -> Consequência).', input: 'Ele estava doente, é por isso que ele não foi.', answer: "He was sick, that's why he didn't go." },
      { instruction: 'Revisão (Dia 22): Combine com o conselho.', input: 'O sistema é antigo, é por isso que deveríamos atualizá-lo.', answer: "The system is old, that's why we should update it." },
      { instruction: 'Revisão (Dia 24): Combine com dedução forte.', input: 'Isso não está funcionando, é por isso que deve ter um bug.', answer: "It's not working, that's why there must be a bug." },
      { instruction: 'Revisão (Dia 26): Combine com preferência.', input: 'É arriscado, é por isso que eu preferiria usar o outro método.', answer: "It's risky, that's why I'd rather use the other method." },
      { instruction: 'SÍNTESE: Faça a pergunta confirmando a suspeita de dedução passada (Dia 14).', input: 'É por isso que a reunião já tinha começado?', answer: "Is that why the meeting had already started?" }
    ],
    connects_to: [14, 22, 24, 26],
    review_of: "Exige o uso de Modals (should, must, I'd rather) como consequência lógica após o conector 'that's why'.",
    daily_resources: {
      ted: { title: 'Start with why', url: 'https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action', tip: 'Preste atenção em como líderes conectam causa e propósito usando why.' },
      podcast: { title: 'ESL Podcast - Explaining Reasons', url: 'https://www.eslpod.com', tip: 'Observe como o tom de voz cai no final da frase após o that\'s why.' },
      onelook_word: 'why',
      anki_card: { front: 'Qual a melhor forma de traduzir "é por causa disso que nós... "?', back: "That's why we..." },
      speaking_prompt: "Explique em voz alta 3 escolhas suas de hoje usando o padrão: 'I was [fato], that's why I [ação].' (Ex: I was tired, that's why I drank coffee). Obrigações: use 'should' e 'might'."
    }
  },
  {
    id: 30,
    level: 'B1',
    module: 3,
    moduleTitle: 'Modals e Alto Impacto',
    structure: "We can deploy today, as long as all the tests pass.",
    translation: 'Podemos fazer o deploy hoje, contanto que todos os testes passem.',
    explanation: 'Terminamos o Módulo 3 ancorando promessas condicionais. "As long as" significa "contanto que" / "desde que". Estabelece uma regra limite absoluta para que uma possibilidade (can/might) ou conselho (should) seja válido.',
    why_it_matters: 'O corporativo exige barganha: "Eu te dou X, se você me der Y". Ao contrário de "if" (se), "as long as" traz o tom de negociação garantida. Demonstra firmeza nas condições impostas.',
    pronunciation: '/æz lɔŋ æz/',
    stress_tip: 'A palavra "long" carrega o stress principal da expressão.',
    pattern: '[Ação principal/Modal] + as long as + [Condição limitante no presente]',
    breakdown: [
      { piece: 'We can deploy today', role: 'Possibilidade ou concessão (Modal Can)' },
      { piece: 'as long as', role: 'Conector condicional limitante (contanto que)' },
      { piece: 'all the tests pass', role: 'A exigência ou condição (Simple Present)' }
    ],
    core_vocabulary: [
      { word: 'as long as', translation: 'contanto que / desde que', example: 'You can go, as long as you finish your work.' },
      { word: 'deploy', translation: 'lançar/implementar', example: 'When do we deploy?' },
      { word: 'pass', translation: 'passar (em um teste)', example: 'Did the code pass all tests?' },
      { word: 'agree', translation: 'concordar', example: 'As long as we agree on the price.' }
    ],
    examples: {
      work: { en: "I don't mind working late as long as I get paid overtime.", pt: 'Não me importo em trabalhar até tarde, contanto que receba hora extra.' },
      travel: { en: "We can take the bus as long as it's not too crowded.", pt: 'Podemos pegar o ônibus desde que não esteja muito cheio.' },
      study: { en: "You will pass the exam as long as you study this chapter.", pt: 'Você vai passar na prova contanto que estude este capítulo.' }
    },
    variations: [
      { form: "So long as", note: 'Sinônimo idêntico e muito comum na fala nativa.' },
      { form: "Provided that", note: 'Versão mais formal e burocrática para contratos.' }
    ],
    combinations: [
      { phrase: "I'd like to + as long as", meaning: 'Desejo condicionado' },
      { phrase: "we should + as long as", meaning: 'Recomendação condicionada' },
      { phrase: "it might work + as long as", meaning: 'Possibilidade condicionada' }
    ],
    collocations: ["as long as you", "as long as it", "as long as we", "so long as"],
    common_mistakes: [
      { wrong: 'Since that we test, we can deploy.', right: 'As long as we test, we can deploy.', tip: '"Since that" soa como "já que/visto que" no passado, e não "desde que" no sentido condicional.' },
      { wrong: 'As long as it will work.', right: 'As long as it works.', tip: 'A oração após "as long as" (que expressa a condição) fica sempre no presente, mesmo se o resultado for futuro.' }
    ],
    retrieval_context: 'O cliente pede para incluir uma nova página no projeto. Você aceita, mas quer impor um limite claro para que o orçamento não estoure.',
    retrieval_prompt: 'Concorde educadamente ("We can do that"), impondo a condição de que o cliente não mude o design aprovado.',
    retrieval_reference: "Exemplo: 'We can do that as long as you don't change the design.'",
    drills: [
      { instruction: 'Forme a barganha condicional.', input: 'Você pode ir, contanto que você termine.', answer: 'You can go, as long as you finish.' },
      { instruction: 'Inverta a ordem.', input: 'Desde que nós concordemos, eu farei isso.', answer: 'As long as we agree, I will do it.' },
      { instruction: 'Revisão (Dia 25): Condicione um desejo polido.', input: 'Eu gostaria de começar, contanto que nós tenhamos os dados.', answer: "I'd like to start, as long as we have the data." },
      { instruction: 'Revisão (Dia 28): Substitua "It depends on" pela condição explícita.', input: 'Podemos lançar hoje, desde que o chefe aprove.', answer: 'We can launch today, as long as the boss approves.' },
      { instruction: 'Revisão (Dia 23): Adicione possibilidade incerta à condição.', input: 'Isso pode (might) funcionar, contanto que nós sejamos rápidos.', answer: 'This might work, as long as we are fast.' },
      { instruction: 'SÍNTESE: Junte Dúvida Polida (Dia 27), Preferência (Dia 26) e Condição.', input: 'Não tenho certeza, eu preferiria esperar, desde que nós tenhamos tempo.', answer: "I'm not sure, I'd rather wait, as long as we have time." }
    ],
    connects_to: [23, 25, 26, 27, 28],
    review_of: "Exige o domínio absoluto de modais polidos e de intenção (I'd like to, I'd rather, might) sendo agora subjugados a uma forte condicional de controle ('as long as').",
    daily_resources: {
      ted: { title: 'The art of negotiation', url: 'https://www.ted.com/talks/william_ury_the_walk_from_no_to_yes', tip: 'Observe como diplomatas usam estruturas de barganha (if, as long as) para encontrar o "sim".' },
      podcast: { title: 'ESL Podcast - Making Agreements', url: 'https://www.eslpod.com', tip: 'Perceba o uso forte de "as long as" em negociações salariais ou de prazo.' },
      onelook_word: 'agree',
      anki_card: { front: 'Como se diz "contanto que / desde que" no sentido de impor uma condição?', back: 'As long as...' },
      speaking_prompt: "Faça duas exigências justas ao seu chefe atual usando: 'I don't mind working hard, as long as...'. Estruturas obrigatórias: 'as long as', 'would'."
    }
  },
  {
    id: 31,
    level: 'B2',
    module: 4,
    moduleTitle: 'Conditionals e Hipótese',
    structure: "If I were the manager, I'd rather hire someone with more experience.",
    translation: 'Se eu fosse o gerente, eu preferiria contratar alguém com mais experiência.',
    explanation: 'Abre o Módulo 4 (Avançado). A 2ª Condicional projeta hipóteses totalmente irreais no presente. O detalhe fundamental é que, na norma culta e na linguagem corporativa refinada, o verbo "To Be" no passado para "I / he / she / it" vira SEMPRE "were" (subjuntivo), não "was".',
    why_it_matters: 'Para dar pitacos e conselhos elegantes sem ofender quem tem o cargo. Falar "If I was" soa comum/baixo. Falar "If I were you..." é o topo da polidez consultiva.',
    pronunciation: '/ɪf aɪ wɜr/',
    stress_tip: 'O tom de voz costuma subir em "were" e descer no final da frase, marcando a hipótese.',
    pattern: 'If + [sujeito] + were + [hipótese], [Sujeito] + would/could/might + [consequência]',
    breakdown: [
      { piece: 'If I were', role: 'Condicional irreal no subjuntivo (Se eu fosse)' },
      { piece: 'the manager', role: 'O papel ou estado hipotético' },
      { piece: "I'd rather hire", role: 'Consequência preferencial (Eu preferiria contratar)' },
      { piece: 'someone with more experience', role: 'O objeto da escolha' }
    ],
    core_vocabulary: [
      { word: 'if I were you', translation: 'se eu fosse você', example: "If I were you, I'd accept." },
      { word: 'hire', translation: 'contratar', example: 'We need to hire a developer.' },
      { word: 'experience', translation: 'experiência', example: 'She has a lot of experience.' },
      { word: 'manager', translation: 'gerente', example: 'Speak to the manager.' }
    ],
    examples: {
      work: { en: "If the system were faster, we could process more data.", pt: 'Se o sistema fosse mais rápido, nós poderíamos processar mais dados.' },
      travel: { en: "If I were rich, I would travel first class.", pt: 'Se eu fosse rico, viajaria de primeira classe.' },
      study: { en: "If it were easy, everyone would do it.", pt: 'Se fosse fácil, todo mundo faria.' }
    },
    variations: [
      { form: "If he were here", note: 'Observe o "were" com a terceira pessoa do singular (He/She/It).' },
      { form: "Were I you...", note: 'Inversão altamente formal, comum na escrita acadêmica (Se eu fosse você).' }
    ],
    combinations: [
      { phrase: "If I were you, I would", meaning: 'Conselho clássico hipótetico' },
      { phrase: "If it were up to me", meaning: 'Se dependesse de mim (transferência de culpa)' },
      { phrase: "If I were in your shoes", meaning: 'Empatia extrema (se eu estivesse na sua pele)' }
    ],
    collocations: ["if I were you", "if it were", "if I were to", "if it were up to me"],
    common_mistakes: [
      { wrong: 'If I was you...', right: 'If I were you...', tip: 'A gramática coloquial aceita "If I was", mas no ambiente corporativo e no nível B2+, o "were" demonstra domínio superior do idioma.' },
      { wrong: 'If I am the boss, I would...', right: 'If I were the boss, I would...', tip: 'Se é irreal no presente, a oração condicional precisa usar o subjuntivo/passado ("were"), nunca o presente.' }
    ],
    retrieval_context: 'Seu colega foi promovido, mas está tomando más decisões arquiteturais. Ele pede sua opinião informalmente sobre um projeto.',
    retrieval_prompt: 'Dê um conselho educado projetando-se no lugar dele ("Se eu fosse você...") e indique o que faria usando "I would".',
    retrieval_reference: "Exemplo: 'If I were you, I would rewrite that component.'",
    drills: [
      { instruction: 'Forme o conselho clássico.', input: 'Se eu fosse você, eu esperaria.', answer: 'If I were you, I would wait.' },
      { instruction: 'Aplique na terceira pessoa neutra.', input: 'Se isso fosse verdade, nós saberíamos.', answer: 'If it were true, we would know.' },
      { instruction: 'Revisão (Dia 26): Misture com preferência madura.', input: 'Se eu fosse você, eu preferiria não dizer nada.', answer: "If I were you, I'd rather not say anything." },
      { instruction: 'Revisão (Dia 21): Misture com possibilidade na resposta.', input: 'Se eu fosse o chefe, nós poderíamos (could) mudar as regras.', answer: 'If I were the boss, we could change the rules.' },
      { instruction: 'Traduza o empurrão de empatia.', input: 'Se dependesse de mim, eu ajudaria.', answer: "If it were up to me, I would help." },
      { instruction: 'SÍNTESE: Combine Hipótese e Incerteza (Dia 27).', input: 'Se eu fosse você, eu não teria certeza se essa é uma boa ideia.', answer: "If I were you, I'm not sure if this is a good idea." }
    ],
    connects_to: [21, 26, 27],
    review_of: "Força o uso de modals (would, could, I'd rather) como consequência direta de uma hipótese irreal no subjuntivo (If I were).",
    daily_resources: {
      ted: { title: 'Do schools kill creativity?', url: 'https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity', tip: 'Observe quantas vezes educadores usam "If we were" para projetar melhorias.' },
      podcast: { title: 'ESL Podcast - Giving Advice', url: 'https://www.eslpod.com', tip: 'Preste atenção no ritmo fonético de "If I were you, I\'d...".' },
      onelook_word: 'were',
      anki_card: { front: 'Se fosse fácil, todo mundo faria.', back: 'If it were easy, everyone would do it.' },
      speaking_prompt: "Faça o papel de CEO por 1 minuto. 'If I were the CEO of my company, I would... I would never... I'd rather...'. Estruturas obrigatórias: 'If I were', 'I would', 'I'd rather'."
    }
  },
  {
    id: 32,
    level: 'B2',
    module: 4,
    moduleTitle: 'Conditionals e Hipótese',
    structure: "If I had more time, I'd like to refactor this entire component.",
    translation: 'Se eu tivesse mais tempo, eu gostaria de refatorar este componente inteiro.',
    explanation: 'A 2ª Condicional não exige só o verbo To Be (were). Ela engloba a projeção de qualquer verbo para o passado para falar de algo que NÃO é real agora. "If I had" foca na falta atual de recursos, tempo ou informações.',
    why_it_matters: 'O maior clichê de desenvolvimento de software e gestão de projetos é a falta de tempo/dinheiro. Dominar "If we had the budget, we could..." é a forma madura de explicar escopos reduzidos aos clientes e diretores.',
    pronunciation: '/ɪf aɪ hæd/',
    stress_tip: 'A ênfase é no substantivo que falta ("time", "budget", "money").',
    pattern: 'If + [sujeito] + had + [recurso], [Sujeito] + would/could + [ação]',
    breakdown: [
      { piece: 'If I had', role: 'Condicional de posse irreal no presente (Se eu tivesse)' },
      { piece: 'more time', role: 'O recurso que está em falta' },
      { piece: "I'd like to refactor", role: 'Desejo polido ativado caso a condição fosse real' },
      { piece: 'this entire component', role: 'O objeto da ação' }
    ],
    core_vocabulary: [
      { word: 'refactor', translation: 'refatorar/reescrever (código)', example: 'We need to refactor this class.' },
      { word: 'entire', translation: 'inteiro/completo', example: 'The entire system is down.' },
      { word: 'resource', translation: 'recurso', example: 'We lack the resources.' },
      { word: 'budget', translation: 'orçamento', example: 'If we had the budget, we would buy it.' }
    ],
    examples: {
      work: { en: "If we had access to the database, we could fix the issue faster.", pt: 'Se tivéssemos acesso ao banco de dados, poderíamos consertar o problema mais rápido.' },
      travel: { en: "If I had my passport with me, I would cross the border.", pt: 'Se eu tivesse meu passaporte comigo, cruzaria a fronteira.' },
      study: { en: "If he had the answer key, he would share it.", pt: 'Se ele tivesse o gabarito, ele o compartilharia.' }
    },
    variations: [
      { form: "If I didn't have", note: 'Hipótese negativa: "Se eu não tivesse (esse problema agora), faria X".' },
      { form: "Had I", note: 'Inversão poética/formal que oculta o "If" (Had I the time...). Raro na fala corporativa moderna.' }
    ],
    combinations: [
      { phrase: "If I had the chance, I would", meaning: 'Declaração de desejo frente a uma oportunidade irreal' },
      { phrase: "If we had more, we could", meaning: 'Projeção de escalabilidade irreal' }
    ],
    collocations: ["if I had more", "if we had", "if I didn't have"],
    common_mistakes: [
      { wrong: 'If I have time, I would do it.', right: 'If I had time, I would do it.', tip: 'As condicionais devem ser síncronas. Se a consequência está no mundo irreal (would), a condição também deve estar no passado (had).' },
      { wrong: 'If I would have time...', right: 'If I had time...', tip: 'O erro mais comum de nativos americanos: não coloque "would" na cláusula do "If" (a não ser em pedidos extremos).' }
    ],
    retrieval_context: 'O escopo foi cortado porque não há engenheiros suficientes no projeto. O cliente pergunta por que a feature de IA foi deixada de fora.',
    retrieval_prompt: 'Justifique a omissão afirmando que se vocês tivessem mais desenvolvedores, vocês a fariam.',
    retrieval_reference: "Exemplo: 'If we had more developers, we would build the AI feature.'",
    drills: [
      { instruction: 'Forme a hipótese de recurso.', input: 'Se nós tivéssemos dinheiro, nós faríamos.', answer: 'If we had money, we would do it.' },
      { instruction: 'Adicione "could" (poderíamos).', input: 'Se eu tivesse a senha, eu poderia logar.', answer: 'If I had the password, I could log in.' },
      { instruction: 'Revisão (Dia 25): Combine posse com desejo polido.', input: 'Se eu tivesse mais dados, eu gostaria de investigar isso.', answer: "If I had more data, I'd like to investigate this." },
      { instruction: 'Crie a hipótese negativa.', input: 'Se eu não tivesse tantas reuniões, eu codaria mais.', answer: "If I didn't have so many meetings, I would code more." },
      { instruction: 'Revisão (Dia 22): Combine hipótese de posse com conselho.', input: 'Se você tivesse a chave, você deveria usá-la.', answer: 'If you had the key, you should use it.' },
      { instruction: 'SÍNTESE: (Dias 24 e 29).', input: 'Ele deve ter muito dinheiro. É por isso que ele viaja tanto.', answer: "He must have a lot of money. That's why he travels so much." }
    ],
    connects_to: [22, 24, 25, 29],
    review_of: "Exige o entrelaçamento constante das hipóteses passadas com os resultados modais do B1 (would, could, should, I'd like to).",
    daily_resources: {
      ted: { title: 'What if we could look inside the brain?', url: 'https://www.ted.com/talks/moran_cerf_this_hacker_can_see_inside_your_brain', tip: 'Observe as hipóteses científicas e imaginativas de falta de limites.' },
      podcast: { title: 'ESL Podcast - Making Excuses', url: 'https://www.eslpod.com', tip: 'Preste atenção ao "If I had" sendo usado como desculpa polida.' },
      onelook_word: 'resource',
      anki_card: { front: 'Traduza o erro comum: Se eu ter tempo, eu faria.', back: 'If I had time, I would do it.' },
      speaking_prompt: "Faça uma promessa imaginária para a equipe: 'If we had a bigger budget, I'd like to... We could... We would...' Estruturas obrigatórias: 'If we had', 'could'."
    }
  },
  {
    id: 33,
    level: 'B2',
    module: 4,
    moduleTitle: 'Conditionals e Hipótese',
    structure: "If we had tested it, the system wouldn't have crashed.",
    translation: 'Se nós tivéssemos testado isso, o sistema não teria caído.',
    explanation: 'A temida 3ª Condicional. É o passado 100% irreversível. Usamos para chorar o leite derramado: se a condição passada (had + pp) tivesse sido diferente, o resultado passado (would have + pp) também teria sido. É a evolução do "I should have".',
    why_it_matters: 'O ápice da análise de causa-raiz (Post-Mortem corporativo). Saber discutir como um erro no passado impactou diretamente uma queda no sistema é o diferencial definitivo entre o B1 (intermediário) e o B2 (avançado).',
    pronunciation: '/wʊdənt hæv/ (frequentemente contraído para "wouldna" na fala rápida)',
    stress_tip: 'Os particípios ("tested", "crashed") carregam toda a força dramática da frase.',
    pattern: 'If + [sujeito] + had + [particípio], [sujeito] + would have + [particípio]',
    breakdown: [
      { piece: 'If we had tested it', role: 'Condição não realizada no passado (Past Perfect)' },
      { piece: 'the system', role: 'Sujeito da consequência' },
      { piece: "wouldn't have crashed", role: 'Resultado que, infelizmente, ocorreu (Irreal no passado)' }
    ],
    core_vocabulary: [
      { word: 'crash', translation: 'cair/travar (sistema)', example: 'The app crashed again.' },
      { word: 'test', translation: 'testar', example: 'Have you tested this feature?' },
      { word: 'would have', translation: 'teria', example: 'I would have gone.' },
      { word: 'realize', translation: 'perceber', example: 'If I had realized, I would have stopped.' }
    ],
    examples: {
      work: { en: "If you had told me earlier, I would have prepared the slides.", pt: 'Se você tivesse me avisado mais cedo, eu teria preparado os slides.' },
      travel: { en: "We wouldn't have missed the flight if we had left on time.", pt: 'Nós não teríamos perdido o voo se tivéssemos saído na hora.' },
      study: { en: "If I had studied the right chapters, I would have passed.", pt: 'Se eu tivesse estudado os capítulos certos, teria passado.' }
    },
    variations: [
      { form: "If I hadn't...", note: 'Condição negativa (Se eu não tivesse... feito algo).' },
      { form: "Could have / Might have", note: 'Pode substituir o "would" para expressar "poderia ter" ou "talvez tivesse" (ex: If we had tested, it might have worked).' }
    ],
    combinations: [
      { phrase: "If I had known, I would have", meaning: 'A declaração universal de ignorância justificadora' },
      { phrase: "We would have + pp, if it hadn't been for", meaning: 'Teríamos feito X, se não fosse por Y' }
    ],
    collocations: ["if I had known", "I would have", "wouldn't have happened", "if we had seen"],
    common_mistakes: [
      { wrong: 'If I would have known, I would have gone.', right: 'If I had known, I would have gone.', tip: 'A regra de ouro (e que nativos erram muito): NUNCA coloque "would" na cláusula do IF.' },
      { wrong: 'If I had know...', right: 'If I had known...', tip: 'O verbo precisa estar obrigatoriamente no particípio passado (3ª coluna).' }
    ],
    retrieval_context: 'Durante uma reunião tensa sobre um bug em produção, tentam culpar sua equipe. Você se defende argumentando que, se o cliente tivesse fornecido os requisitos completos desde o início, o erro não teria acontecido.',
    retrieval_prompt: 'Descreva a realidade alternativa passada (Se o cliente tivesse fornecido os requisitos, o erro não teria acontecido).',
    retrieval_reference: "Exemplo: 'If the client had provided the requirements, the bug wouldn't have happened.'",
    drills: [
      { instruction: 'Traduza o padrão clichê de desculpa.', input: 'Se eu soubesse, eu teria ido.', answer: 'If I had known, I would have gone.' },
      { instruction: 'Forme a negativa.', input: 'Se nós não tivéssemos perdido os dados, nós teríamos lançado.', answer: "If we hadn't lost the data, we would have launched." },
      { instruction: 'Revisão (Dia 18): Troque "would have" por "could have" (possibilidade).', input: 'Se você tivesse ajudado, nós poderíamos ter vencido.', answer: 'If you had helped, we could have won.' },
      { instruction: 'Revisão (Dia 19 e 29): Justifique e adicione consequência.', input: 'Eu não sabia; é por isso que se eu soubesse, eu teria avisado você.', answer: "I didn't know; that's why if I had known, I would have warned you." },
      { instruction: 'Inverta a ordem das cláusulas.', input: 'Eu teria consertado se eu tivesse visto.', answer: 'I would have fixed it if I had seen it.' },
      { instruction: 'SÍNTESE: Junte arrependimento (Dia 17) com a 3ª condicional.', input: 'Eu deveria ter testado. Se eu tivesse testado, o sistema não teria caído.', answer: "I should have tested it. If I had tested it, the system wouldn't have crashed." }
    ],
    connects_to: [17, 18, 19, 29],
    review_of: "Exige uma fusão total do particípio passado consolidado no 'should have' (dia 17) com a ignorância de 'didn't know' (dia 19) elevada à escala hipotética.",
    daily_resources: {
      ted: { title: 'The beauty of data visualization', url: 'https://www.ted.com/talks/david_mccandless_the_beauty_of_data_visualization', tip: 'Perceba o uso das condições irreais para demonstrar o que "poderia ter sido descoberto" com dados melhores.' },
      podcast: { title: 'ESL Podcast - Analyzing Failures', url: 'https://www.eslpod.com', tip: 'Identifique o "would have" camuflado ("woulda") nas discussões de incidentes.' },
      onelook_word: 'crash',
      anki_card: { front: 'Traduza a regra cardinal: Se eu soubesse, eu teria ajudado.', back: 'If I had known, I would have helped.' },
      speaking_prompt: "Faça o post-mortem do seu maior erro na vida. Fale em voz alta: 'I made a huge mistake. If I hadn't done that, I would have... I wouldn't have...'. Estruturas obrigatórias: 'If I had', 'would have'."
    }
  },
  {
    id: 34,
    level: 'B2',
    module: 4,
    moduleTitle: 'Conditionals e Hipótese',
    structure: "We won't meet the deadline unless we work this weekend.",
    translation: 'Nós não atingiremos o prazo a menos que trabalhemos neste fim de semana.',
    explanation: '"Unless" significa "a menos que" / "a não ser que". Ele carrega a mesma força de um "If not" condicional, estabelecendo a ÚNICA condição sob a qual o evento negativo anterior será evitado.',
    why_it_matters: 'Para criar ultimatos profissionais e definir bloqueios de fluxo. "Nós não podemos fazer o deploy a menos que o QA aprove" ("...unless QA approves"). É crucial para a clareza e autoridade.',
    pronunciation: '/ənˈlɛs/',
    stress_tip: 'A ênfase é quase toda na sílaba final "-LESS", sublinhando a exceção imposta.',
    pattern: '[Sentença/Ação negativa] + unless + [condição positiva/exceção]',
    breakdown: [
      { piece: "We won't meet the deadline", role: 'Resultado negativo base' },
      { piece: 'unless', role: 'Conector de exclusão/limite (a menos que)' },
      { piece: 'we work this weekend', role: 'A única condição que reverte a ação base' }
    ],
    core_vocabulary: [
      { word: 'unless', translation: 'a menos que / a não ser que', example: 'I will fail unless I study.' },
      { word: 'meet the deadline', translation: 'cumprir o prazo', example: 'Did we meet the deadline?' },
      { word: 'approve', translation: 'aprovar', example: 'You cannot go unless they approve.' },
      { word: 'weekend', translation: 'fim de semana', example: 'Are you working this weekend?' }
    ],
    examples: {
      work: { en: "Don't push to production unless the tests pass.", pt: 'Não suba para produção a não ser que os testes passem.' },
      travel: { en: "You can't board the plane unless you show your ID.", pt: 'Você não pode embarcar no avião a menos que mostre sua identidade.' },
      study: { en: "Unless you understand this concept, the rest will be hard.", pt: 'A não ser que você entenda este conceito, o resto será difícil.' }
    },
    variations: [
      { form: "Not unless", note: 'Resposta curta forte ("Não, a não ser que..."). Ex: "Can I go?" "Not unless you finish".' },
      { form: "Except if", note: 'Significado idêntico, um pouco menos idiomático que unless.' }
    ],
    combinations: [
      { phrase: "I won't + do X + unless", meaning: 'Recusa baseada em condição' },
      { phrase: "Unless you want to", meaning: 'Sarcasmo / opção negativa ("a menos que você queira")' },
      { phrase: "we can't proceed unless", meaning: 'Bloqueio de projeto explícito' }
    ],
    collocations: ["won't work unless", "can't go unless", "unless you have", "unless it's"],
    common_mistakes: [
      { wrong: 'Unless we don\'t work...', right: 'Unless we work...', tip: 'Aviso severo: "Unless" já possui o valor de "não" embutido ("if not"). Usar "unless" com uma frase negativa cria uma dupla negativa confusa ("a menos que não trabalhemos"). A oração após unless é sempre afirmativa.' },
      { wrong: 'Unless it will rain.', right: 'Unless it rains.', tip: 'Assim como "if" e "as long as", a condição que segue o "unless" é sempre no presente, mesmo se o resultado futuro for óbvio.' }
    ],
    retrieval_context: 'Um fornecedor quer que você aprove o orçamento, mas falta um documento crítico de segurança. Você precisa enviar um e-mail impondo esse bloqueio para a aprovação.',
    retrieval_prompt: 'Proíba o andamento do processo: afirme que você não pode aprovar "a menos que" eles enviem o documento.',
    retrieval_reference: "Exemplo: 'I can't approve it unless you send the security document.'",
    drills: [
      { instruction: 'Traduza a restrição base.', input: 'Nós não podemos prosseguir a menos que você concorde.', answer: "We can't proceed unless you agree." },
      { instruction: 'Forme um ultimato no futuro (won\'t).', input: 'Eu não farei isso a menos que você me pague.', answer: "I won't do it unless you pay me." },
      { instruction: 'Revisão (Dia 30): Compare com a condição positiva.', input: 'Eu farei isso desde que você concorde. Eu NÃO farei isso a menos que você concorde.', answer: "I will do it as long as you agree. I won't do it unless you agree." },
      { instruction: 'Revisão (Dia 24): Dedução ligada à condição negativa.', input: 'Deve ser seguro, a menos que haja um bug oculto.', answer: 'It must be safe, unless there is a hidden bug.' },
      { instruction: 'Crie uma exceção na terceira pessoa (usando -s).', input: 'Não funciona a menos que comece de novo.', answer: "It doesn't work unless it starts again." },
      { instruction: 'SÍNTESE: Junte o passado narrativo (Dia 15) com o bloqueio (Dia 34).', input: 'Ele costumava (would) ficar muito bravo a menos que nós tivéssemos feito o backup.', answer: "He would get very angry unless we had done the backup." }
    ],
    connects_to: [15, 24, 30],
    review_of: "Exige contraste rigoroso de lógica matemática entre a condição afirmativa obrigatória ('as long as', dia 30) e a condição negativa de exceção ('unless').",
    daily_resources: {
      ted: { title: 'A guide to collaborative leadership', url: 'https://www.ted.com/talks/lorna_davis_a_guide_to_collaborative_leadership', tip: 'Preste atenção nos ultimatos suaves de liderança colaborativa.' },
      podcast: { title: 'ESL Podcast - Setting Boundaries', url: 'https://www.eslpod.com', tip: 'Treine a audição para detectar o "unless" como demarcador de limites corporativos.' },
      onelook_word: 'unless',
      anki_card: { front: 'Traduza o aviso de bug: Isso não vai funcionar a não ser que nós consertemos isso.', back: "It won't work unless we fix it." },
      speaking_prompt: "Pense em limites pessoais no seu ambiente de trabalho. Crie 3 ultimatos usando: 'I won't accept this project unless... I won't answer emails after 6 unless...' Estrutura obrigatória: 'unless'."
    }
  },
  {
    id: 35,
    level: 'B2',
    module: 4,
    moduleTitle: 'Conditionals e Hipótese',
    structure: "We will sign the contract, provided that you agree to our terms.",
    translation: 'Nós assinaremos o contrato, desde que você concorde com os nossos termos.',
    explanation: '"Provided that" (ou apenas "provided") é a versão altamente sofisticada, formal e legal de "as long as". Transforma qualquer acordo em algo documentado, transacional e extremamente sério no mundo B2B.',
    why_it_matters: 'Numa entrevista com nível executivo ou numa negociação de compliance/SLA, usar "as long as" soa informal. "Provided that" eleva a sua comunicação a de um gestor maduro que impõe premissas inegociáveis de negócio.',
    pronunciation: '/prəˈvaɪdɪd ðæt/',
    stress_tip: 'O peso recai em "VI" (proVIded), e o "that" muitas vezes é omitido na fala, mantendo a força formal.',
    pattern: '[Ação acordada] + provided (that) + [A Premissa Exigida]',
    breakdown: [
      { piece: 'We will sign the contract', role: 'A promessa base da negociação' },
      { piece: 'provided that', role: 'Conector de premissa estrita (desde que / sob a condição de que)' },
      { piece: 'you agree to our terms', role: 'A exigência da premissa para a execução' }
    ],
    core_vocabulary: [
      { word: 'provided that', translation: 'desde que / contanto que (formal)', example: 'I will go, provided that you pay.' },
      { word: 'contract', translation: 'contrato', example: 'Did you review the contract?' },
      { word: 'terms', translation: 'termos/condições', example: 'We accept your terms.' },
      { word: 'agree to', translation: 'concordar com (uma proposta/documento)', example: 'Do you agree to this?' }
    ],
    examples: {
      work: { en: "We can approve the budget provided that we see the ROI forecast.", pt: 'Podemos aprovar o orçamento, contanto que vejamos a previsão de ROI.' },
      travel: { en: "You may enter the country provided that your visa is valid.", pt: 'Você pode entrar no país desde que o seu visto seja válido.' },
      study: { en: "The scholarship will be renewed provided that you maintain good grades.", pt: 'A bolsa de estudos será renovada contanto que você mantenha boas notas.' }
    },
    variations: [
      { form: "Providing that", note: 'Variante com o mesmo sentido e nível de formalidade.' },
      { form: "On the condition that", note: 'Ainda mais burocrático e restritivo.' }
    ],
    combinations: [
      { phrase: "we can proceed provided that", meaning: 'Gatilho de avanço de projeto formal' },
      { phrase: "will be approved provided that", meaning: 'Aprovação com ressalva exigida' }
    ],
    collocations: ["provided that", "can proceed provided", "agree provided that"],
    common_mistakes: [
      { wrong: 'Provide that you agree...', right: 'Provided that you agree...', tip: 'A expressão correta exige o sufixo "-ed" (Provided). Literalmente significa "Provido o fato de que...".' },
      { wrong: 'Provided that you will agree...', right: 'Provided that you agree...', tip: 'Assim como no "If", no "Unless" e no "As long as", a condição exigida que segue o "Provided" fica sempre no presente, não no futuro.' }
    ],
    retrieval_context: 'A sua empresa aceitou uma integração de software com um parceiro, mas existe uma regra de compliance. O parceiro pergunta se vocês podem começar o desenvolvimento amanhã.',
    retrieval_prompt: 'Use a diplomacia formal: diga que vocês podem começar, "contanto que" (forma sofisticada) eles assinem o Acordo de Confidencialidade (NDA).',
    retrieval_reference: "Exemplo: 'We can start tomorrow provided that you sign the NDA.'",
    drills: [
      { instruction: 'Forme a premissa de negócio.', input: 'Nós podemos prosseguir, desde que você pague.', answer: 'We can proceed, provided that you pay.' },
      { instruction: 'Revisão (Dia 30): Contraste a formalidade. Substitua "as long as" pela forma contratual.', input: 'You can deploy as long as tests pass.', answer: 'You can deploy provided that tests pass.' },
      { instruction: 'Revisão (Dia 28): Condicione o andamento ("It depends") e resolva com a promessa estrita.', input: 'Depende de você. Nós aceitaremos desde que você garanta a segurança.', answer: 'It depends on you. We will accept provided that you guarantee the security.' },
      { instruction: 'Revisão (Dia 29): Adicione causa e consequência.', input: 'O risco é alto, e é por isso que nós só prosseguiremos desde que eles assinem.', answer: "The risk is high, and that's why we will only proceed provided that they sign." },
      { instruction: 'SÍNTESE: Junte hesitação (Dia 27), preferência (Dia 26) e exigência legal.', input: 'Não tenho certeza. Eu preferiria esperar. Nós assinaremos desde que você concorde.', answer: "I'm not sure. I'd rather wait. We will sign provided that you agree." }
    ],
    connects_to: [26, 27, 28, 29, 30],
    review_of: "Aperta a rigidez das condições casuais ensinadas no 'as long as' (dia 30) e 'depends on' (dia 28), finalizando a jornada de negociação do B1 em nível sênior B2.",
    daily_resources: {
      ted: { title: 'How to build trust', url: 'https://www.ted.com/talks/frances_frei_how_to_build_and_rebuild_trust', tip: 'Observe como a confiança corporativa é pautada por exigências e premissas firmes.' },
      podcast: { title: 'ESL Podcast - Formal Business Deals', url: 'https://www.eslpod.com', tip: 'Identifique o uso burocrático e a pronúncia de "provided that".' },
      onelook_word: 'provided',
      anki_card: { front: 'Como dizer "contanto que / desde que" de forma extremamente formal e contratual?', back: 'Provided that...' },
      speaking_prompt: "Faça uma simulação de negócio como Diretor. Estabeleça 3 termos contratuais para um fornecedor: 'We will buy your product provided that...'. Estruturas obrigatórias: 'provided that', 'We will'."
    }
  }
]

export const BATCH_29_35_SUMMARY = {
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
