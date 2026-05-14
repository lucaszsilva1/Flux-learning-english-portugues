import type { Lesson } from '../types'

export const lessons: Lesson[] = [
  {
    id: 15,
    level: 'B1',
    module: 2,
    moduleTitle: 'Past Structures',
    structure: "I would always check my emails before the stand-up.",
    translation: 'Eu costumava sempre checar meus emails antes da reunião diária.',
    explanation: 'Usamos "would" para narrar hábitos e rotinas repetitivas no passado. É semelhante a "used to", mas focado na repetição nostálgica ou narrativa de comportamentos típicos, não para estados.',
    why_it_matters: 'Enquanto "used to" é mais factual, "would" soa muito mais natural e fluente ao contar histórias sobre como as coisas funcionavam na sua equipe anterior ou em projetos antigos.',
    pronunciation: '/wʊd/ (O "L" é mudo, soa como "wud")',
    stress_tip: 'Na fala rápida, "would" costuma ser contraído para \'d (ex: I\'d always check).',
    pattern: '[Sujeito] + would (always/often) + [verbo base]',
    breakdown: [
      { piece: 'I would', role: 'Marcador de hábito no passado' },
      { piece: 'always check', role: 'Ação repetitiva' },
      { piece: 'my emails', role: 'Objeto da ação' },
      { piece: 'before the stand-up', role: 'Contexto de tempo recorrente' }
    ],
    core_vocabulary: [
      { word: 'always', translation: 'sempre', example: 'I would always arrive early.' },
      { word: 'often', translation: 'frequentemente', example: 'We would often work late.' },
      { word: 'stand-up', translation: 'reunião diária', example: "Let's discuss this at the stand-up." },
      { word: 'first thing', translation: 'primeira coisa (logo de cara)', example: "I'll do it first thing in the morning." }
    ],
    examples: {
      work: { en: "In my old job, we would deploy on Fridays.", pt: 'No meu emprego antigo, nós costumávamos fazer deploy às sextas-feiras.' },
      travel: { en: "Whenever we traveled, we would wake up early.", pt: 'Sempre que viajávamos, costumávamos acordar cedo.' },
      study: { en: "I would spend hours debugging simple code.", pt: 'Eu costumava passar horas corrigindo código simples.' }
    },
    variations: [
      { form: "I'd often go", note: 'Contração de would para \'d. Muito comum em narrações.' },
      { form: "Would you go?", note: 'Para perguntar sobre comportamentos habituais no passado.' },
      { form: "Never would", note: 'Para enfatizar que um comportamento nunca ocorria.' }
    ],
    combinations: [
      { phrase: "would always + verbo", meaning: 'Rotina constante no passado' },
      { phrase: "would never + verbo", meaning: 'Hábito de nunca fazer algo' },
      { phrase: "Every day, I would", meaning: 'Introduzindo uma narrativa diária do passado' }
    ],
    collocations: ['would always', 'would often', 'would never', 'would just', 'would usually'],
    common_mistakes: [
      { wrong: 'I would be a developer.', right: 'I used to be a developer.', tip: 'Não use "would" para estados ou características duradouras, apenas para ações repetitivas.' },
      { wrong: 'I would to go.', right: 'I would go.', tip: 'Nunca use "to" depois de modals como "would".' },
      { wrong: 'I would checked.', right: 'I would check.', tip: 'O verbo que segue "would" fica sempre na forma base.' }
    ],
    retrieval_context: 'Durante uma entrevista, você está descrevendo sua rotina em um projeto que já terminou, focando nas práticas diárias do time.',
    retrieval_prompt: 'Explique que você sempre testava o código antes de enviar.',
    retrieval_reference: "Exemplo: 'I would always test the code before pushing it.'",
    drills: [
      { instruction: 'Traduza o hábito narrativo passado.', input: 'Eu costumava sempre testar.', answer: 'I would always test.' },
      { instruction: 'Adicione o contexto.', input: 'I would always test...', answer: 'I would always test the code.' },
      { instruction: 'Forme uma frase sobre seu time anterior.', input: 'Nós frequentemente trabalhávamos até tarde.', answer: 'We would often work late.' },
      { instruction: 'Revisão (Dia 13): Contraste com used to (estado vs ação).', input: 'Eu morava no Rio e eu sempre ia à praia. (used to / would)', answer: 'I used to live in Rio and I would always go to the beach.' },
      { instruction: 'Faça a contração (\'d).', input: 'I would always check my emails.', answer: "I'd always check my emails." }
    ],
    connects_to: [13],
    review_of: "Contrasta com 'used to' (dia 13), especificando 'would' para repetição de ações (não estados).",
    daily_resources: {
      ted: { title: 'The secret to learning a new language', url: 'https://www.ted.com/talks/lydia_machova_the_secret_to_learning_a_new_language', tip: 'Observe o uso de narrativas passadas para rotinas de estudo.' },
      podcast: { title: 'ESL Podcast - Telling Stories', url: 'https://www.eslpod.com', tip: 'Ouça como os nativos contam memórias usando would frequentemente.' },
      onelook_word: 'often',
      anki_card: { front: 'Como dizer "Nós costumávamos sempre fazer deploy às sextas" de forma narrativa?', back: 'We would always deploy on Fridays.' },
      speaking_prompt: "Conte uma breve memória de como era sua rotina no seu primeiro emprego usando 'Every day, I would...'"
    }
  },
  {
    id: 16,
    level: 'B1',
    module: 2,
    moduleTitle: 'Past Structures',
    structure: "I wish we had more time to finish this feature.",
    translation: 'Eu queria que tivéssemos mais tempo para terminar esta funcionalidade.',
    explanation: '"I wish" + passado simples é usado para expressar o desejo de que o presente fosse diferente (uma hipótese irreal no presente). Em português dizemos "eu queria que fosse", no inglês usamos "I wish it was/were".',
    why_it_matters: 'No trabalho, coisas dão errado. Requisitos mudam, prazos encurtam. Expressar desejos sobre cenários que não são reais ("queria que fosse mais rápido", "queria que tivéssemos orçamento") é algo que se faz toda semana.',
    pronunciation: '/aɪ wɪʃ/',
    stress_tip: 'O stress principal fica no "wish", demonstrando o anseio.',
    pattern: 'I wish + [sujeito] + [verbo no passado] + [complemento]',
    breakdown: [
      { piece: 'I wish', role: 'Expressão de desejo irreal (eu queria que)' },
      { piece: 'we had', role: 'Verbo no passado simples (para uma hipótese no presente)' },
      { piece: 'more time', role: 'O objeto do desejo' },
      { piece: 'to finish this feature', role: 'A finalidade' }
    ],
    core_vocabulary: [
      { word: 'wish', translation: 'desejar/querer (hipótese)', example: 'I wish I knew the answer.' },
      { word: 'feature', translation: 'funcionalidade', example: 'This is a key feature.' },
      { word: 'budget', translation: 'orçamento', example: 'I wish we had a bigger budget.' },
      { word: 'knew', translation: 'soubesse (passado de know)', example: 'I wish I knew how to do this.' }
    ],
    examples: {
      work: { en: "I wish I knew how to fix this bug.", pt: 'Eu queria saber como consertar esse bug.' },
      travel: { en: "I wish we were staying in a better hotel.", pt: 'Eu queria que estivéssemos ficando num hotel melhor.' },
      study: { en: "I wish this article wasn't so long.", pt: 'Eu queria que este artigo não fosse tão longo.' }
    },
    variations: [
      { form: "I wish I could", note: 'Para expressar "eu queria poder" fazer algo.' },
      { form: "Do you wish...?", note: 'Para perguntar se alguém tem um desejo irreal.' },
      { form: "I wish I were", note: 'Na norma culta, usa-se "were" em vez de "was" para "I/he/she/it" com "wish".' }
    ],
    combinations: [
      { phrase: "I wish + I could", meaning: 'Desejo sobre habilidade/permissão' },
      { phrase: "I wish + we had", meaning: 'Desejo sobre posse/recursos' },
      { phrase: "I wish + I knew", meaning: 'Desejo sobre conhecimento' }
    ],
    collocations: ['wish I knew', 'wish I could', 'wish we had', 'wish it was', 'wish it were'],
    common_mistakes: [
      { wrong: 'I wish I have more time.', right: 'I wish I had more time.', tip: 'Para um desejo sobre o presente, o verbo principal deve estar no passado.' },
      { wrong: 'I wish to can do it.', right: 'I wish I could do it.', tip: 'Após "wish", use "could" para expressar "poder/conseguir".' },
      { wrong: 'I wish he help me.', right: 'I wish he helped me.', tip: 'Sempre coloque o verbo da oração no passado simples.' }
    ],
    retrieval_context: 'O prazo do sprint está acabando e ainda faltam testes. Você desabafa com um colega sobre a falta de tempo.',
    retrieval_prompt: 'Expresse o desejo de que vocês tivessem mais tempo.',
    retrieval_reference: "Exemplo: 'I wish we had more time.'",
    drills: [
      { instruction: 'Forme o desejo com o verbo ter no passado.', input: 'Eu queria ter mais recursos.', answer: 'I wish I had more resources.' },
      { instruction: 'Mude o verbo para saber (knew).', input: 'Eu queria saber a resposta.', answer: 'I wish I knew the answer.' },
      { instruction: 'Use a variação com poder (could).', input: 'Eu queria poder ajudar.', answer: 'I wish I could help.' },
      { instruction: 'Negativa (não fosse).', input: 'Eu queria que não fosse tão caro.', answer: "I wish it wasn't so expensive." },
      { instruction: 'Revisão (Dia 12): Use o passado correto após wish.', input: 'Eu queria que nós terminássemos hoje. (finish)', answer: 'I wish we finished today.' }
    ],
    connects_to: [12],
    review_of: "Exige o uso consciente do Simple Past (dia 12) para criar um cenário irreal no presente.",
    daily_resources: {
      ted: { title: 'The history of our world in 18 minutes', url: 'https://www.ted.com/talks/david_christian_the_history_of_our_world_in_18_minutes', tip: 'Observe como desejos e hipóteses moldam as narrativas.' },
      podcast: { title: 'ESL Podcast - Expressing Regret', url: 'https://www.eslpod.com', tip: 'Preste atenção ao verbo no passado que sempre segue o "wish".' },
      onelook_word: 'wish',
      anki_card: { front: 'Traduza: Eu queria saber a resposta.', back: 'I wish I knew the answer.' },
      speaking_prompt: "Faça uma lista verbal de 3 coisas que você queria mudar no seu trabalho atual: 'I wish my boss was... I wish we had... I wish I could...'"
    }
  },
  {
    id: 17,
    level: 'B1',
    module: 2,
    moduleTitle: 'Past Structures',
    structure: "I should have tested the code before deploying it.",
    translation: 'Eu deveria ter testado o código antes de fazer o deploy.',
    explanation: '"Should have" + verbo no particípio é usado para expressar um arrependimento, crítica ou uma recomendação retroativa sobre algo que NÃO aconteceu no passado.',
    why_it_matters: 'O ambiente corporativo é feito de feedbacks e post-mortems. "Nós deveríamos ter feito X" é a estrutura número um para assumir responsabilidade de um erro sem soar agressivo ou informal demais.',
    pronunciation: '/ʃʊd hæv/ (frequentemente contraído para "shoulda" /ˈʃʊdə/ na fala casual)',
    stress_tip: 'O stress cai no "should" e no verbo principal ("tested"). O "have" fica fraco.',
    pattern: '[Sujeito] + should have + [particípio passado]',
    breakdown: [
      { piece: 'I should have', role: 'Modal de conselho no passado (Eu deveria ter)' },
      { piece: 'tested', role: 'Ação que não ocorreu (particípio passado)' },
      { piece: 'the code', role: 'Objeto direto' },
      { piece: 'before deploying it', role: 'Marcador de tempo/contexto' }
    ],
    core_vocabulary: [
      { word: 'deploy', translation: 'colocar em produção', example: 'We deployed the new app.' },
      { word: 'should have', translation: 'deveria ter', example: 'You should have called me.' },
      { word: 'test', translation: 'testar', example: 'Did you test this?' },
      { word: 'realize', translation: 'perceber', example: 'I should have realized sooner.' }
    ],
    examples: {
      work: { en: "We should have communicated this to the client earlier.", pt: 'Nós deveríamos ter comunicado isso ao cliente mais cedo.' },
      travel: { en: "I should have booked the flight in advance.", pt: 'Eu deveria ter reservado o voo com antecedência.' },
      study: { en: "You shouldn't have skipped that lecture.", pt: 'Você não deveria ter faltado àquela aula.' }
    },
    variations: [
      { form: "Shouldn't have", note: 'Negativa: crítica sobre algo que FOI feito (não deveria ter feito).' },
      { form: "Should we have...?", note: 'Pergunta: questionando uma decisão passada.' },
      { form: "I really should have", note: 'Com "really" para dar muita ênfase ao arrependimento.' }
    ],
    combinations: [
      { phrase: "should have + known", meaning: 'Deveria saber / Era óbvio' },
      { phrase: "should have + told", meaning: 'Deveria ter avisado/contado' },
      { phrase: "should never have", meaning: 'Nunca deveria ter (forte arrependimento)' }
    ],
    collocations: ['should have told', 'should have known', 'should have seen', 'should have done', 'should not have'],
    common_mistakes: [
      { wrong: 'I should test it yesterday.', right: 'I should have tested it yesterday.', tip: 'Se for passado, "should" exige o "have" + particípio. "Should" sozinho é conselho para o presente.' },
      { wrong: 'I should have test.', right: 'I should have tested.', tip: 'O verbo precisa estar no particípio (geralmente com -ed).' },
      { wrong: 'I should of tested.', right: 'I should have tested.', tip: 'Muitos nativos escrevem "should of" porque soa igual a "should\'ve". É um erro gramatical gravíssimo.' }
    ],
    retrieval_context: 'O sistema quebrou na sexta-feira à noite porque um desenvolvedor subiu uma alteração sem rodar os testes automatizados.',
    retrieval_prompt: 'Assuma a responsabilidade dizendo que você deveria ter rodado os testes antes.',
    retrieval_reference: "Exemplo: 'I should have run the tests before.'",
    drills: [
      { instruction: 'Monte a estrutura de arrependimento.', input: 'Eu deveria ter checado.', answer: 'I should have checked.' },
      { instruction: 'Use o verbo no particípio (tested).', input: 'Eu deveria ter testado o código.', answer: 'I should have tested the code.' },
      { instruction: 'Crie uma crítica na negativa (não deveria ter feito).', input: 'Nós não deveríamos ter feito o deploy na sexta.', answer: "We shouldn't have deployed on Friday." },
      { instruction: 'Revisão (Dia 14): O particípio (had started -> should have started).', input: 'Nós deveríamos ter começado mais cedo.', answer: 'We should have started earlier.' },
      { instruction: 'Combinação (Dia 16): Adicione o desejo irreal.', input: 'Eu queria ter tido tempo, eu deveria ter começado mais cedo.', answer: 'I wish I had time, I should have started earlier.' }
    ],
    connects_to: [14, 16],
    review_of: "Exige o uso do particípio (visto no dia 14 com Past Perfect) e se conecta conceitualmente ao sentimento de desejo irreal (dia 16).",
    daily_resources: {
      ted: { title: 'How to make hard choices', url: 'https://www.ted.com/talks/ruth_chang_how_to_make_hard_choices', tip: 'Observe como ela fala sobre decisões passadas e os julgamentos sobre elas.' },
      podcast: { title: 'ESL Podcast - Admitting Mistakes', url: 'https://www.eslpod.com', tip: 'Aprenda a admitir erros no trabalho usando "should have".' },
      onelook_word: 'should',
      anki_card: { front: 'Traduza: Eu deveria ter te avisado.', back: 'I should have told you.' },
      speaking_prompt: "Pense no seu maior erro no trabalho esta semana e fale em voz alta: 'I made a mistake. I should have...'"
    }
  },
  {
    id: 18,
    level: 'B1',
    module: 2,
    moduleTitle: 'Past Structures',
    structure: "We could have lost all our data.",
    translation: 'Nós poderíamos ter perdido todos os nossos dados.',
    explanation: '"Could have" + particípio descreve uma possibilidade no passado que NÃO se concretizou. É excelente para falar sobre riscos que foram evitados ou oportunidades que foram perdidas.',
    why_it_matters: 'Profissionais experientes analisam riscos. Falar sobre o que "poderia ter dado errado" ou "o que poderíamos ter feito melhor" é essencial em reuniões estratégicas.',
    pronunciation: '/kʊd hæv/ (frequentemente contraído para "coulda" /ˈkʊdə/ ou "could\'ve")',
    stress_tip: 'A ênfase vai para o verbo de ação ("lost"), o "could have" serve como auxiliar.',
    pattern: '[Sujeito] + could have + [particípio passado]',
    breakdown: [
      { piece: 'We could have', role: 'Modal de possibilidade passada que não ocorreu' },
      { piece: 'lost', role: 'Verbo principal no particípio passado' },
      { piece: 'all our data', role: 'Objeto da frase' }
    ],
    core_vocabulary: [
      { word: 'lose', translation: 'perder (passado/particípio: lost)', example: 'We lost the connection.' },
      { word: 'data', translation: 'dados (pronúncia: /ˈdeɪtə/)', example: 'The data is secure.' },
      { word: 'avoid', translation: 'evitar', example: 'We managed to avoid the error.' },
      { word: 'risk', translation: 'risco', example: 'It was a huge risk.' }
    ],
    examples: {
      work: { en: "You could have asked me for help.", pt: 'Você poderia ter me pedido ajuda.' },
      travel: { en: "We could have missed the flight due to the traffic.", pt: 'Nós poderíamos ter perdido o voo por causa do trânsito.' },
      study: { en: "I could have gotten a better grade if I studied more.", pt: 'Eu poderia ter tirado uma nota melhor se tivesse estudado mais.' }
    },
    variations: [
      { form: "Couldn't have", note: 'Negativa: era impossível de acontecer (Nós não poderíamos ter feito isso).' },
      { form: "Could you have...?", note: 'Pergunta sobre uma habilidade/possibilidade teórica no passado.' }
    ],
    combinations: [
      { phrase: "could have + been", meaning: 'Poderia ter sido' },
      { phrase: "could have + done", meaning: 'Poderia ter feito (oportunidade perdida)' },
      { phrase: "we could have + lost", meaning: 'Alerta sobre um risco grave evitado' }
    ],
    collocations: ['could have been', 'could have done', 'could have won', 'could have gone', 'could not have'],
    common_mistakes: [
      { wrong: 'I could helped you.', right: 'I could have helped you.', tip: 'Faltou o "have". "Could" + particípio diretamente está incorreto.' },
      { wrong: 'We could of won.', right: 'We could have won.', tip: 'Assim como "should of", "could of" é um erro fatal de escrita. Use "could have" ou "could\'ve".' },
      { wrong: 'It can have been worse.', right: 'It could have been worse.', tip: 'Para possibilidades passadas irreais, usamos "could", não "can".' }
    ],
    retrieval_context: 'Um backup salvou a empresa de um ataque de ransomware que deletou servidores inteiros.',
    retrieval_prompt: 'Comente sobre o risco extremo que vocês evitaram: que a empresa poderia ter perdido tudo.',
    retrieval_reference: "Exemplo: 'We could have lost everything.'",
    drills: [
      { instruction: 'Forme a possibilidade no passado.', input: 'Nós poderíamos ter perdido.', answer: 'We could have lost.' },
      { instruction: 'Expresse uma oportunidade que você deixou passar.', input: 'Eu poderia ter perguntado.', answer: 'I could have asked.' },
      { instruction: 'Negativa de impossibilidade.', input: 'Nós não poderíamos ter vencido.', answer: "We couldn't have won." },
      { instruction: 'Revisão (Dia 17): Contraste conselho vs possibilidade. Traduza: "Eu poderia ter ajudado" vs "Eu deveria ter ajudado".', input: 'I ___ (could/should) vs I ___ (could/should)', answer: 'I could have helped vs I should have helped.' },
      { instruction: 'Complete a frase reflexiva.', input: 'Isso poderia ter sido pior.', answer: 'It could have been worse.' }
    ],
    connects_to: [17],
    review_of: "Contrasta com 'should have' (dia 17): 'could have' foca em possibilidade irrealizada, 'should have' em crítica/dever.",
    daily_resources: {
      ted: { title: 'What we learn from our mistakes', url: 'https://www.ted.com/talks/brian_goldman_doctors_make_mistakes_can_we_talk_about_that', tip: 'Observe como ele fala sobre diagnósticos que poderiam ter sido diferentes.' },
      podcast: { title: 'ESL Podcast - Missed Opportunities', url: 'https://www.eslpod.com', tip: 'Aprenda expressões relacionadas a perder a chance de fazer algo.' },
      onelook_word: 'could',
      anki_card: { front: 'Como se diz "Poderia ter sido pior"?', back: 'It could have been worse.' },
      speaking_prompt: "Lembre-se de uma vez em que você se safou de um problema sério no trabalho. Descreva o que poderia ter acontecido: 'It was crazy. We could have...'"
    }
  },
  {
    id: 19,
    level: 'A2',
    module: 2,
    moduleTitle: 'Past Structures',
    structure: "I didn't know you were already working on this.",
    translation: 'Eu não sabia que você já estava trabalhando nisso.',
    explanation: '"I didn\'t know" é a maneira padrão de expressar desconhecimento no passado. Usamos frequentemente para justificar uma ação, desculpar-se por ter feito algo repetido ou interrompido alguém.',
    why_it_matters: 'Muitos problemas corporativos surgem de falta de comunicação. Dizer "Eu não sabia" suavemente, conectando com o que o outro estava fazendo, é chave para apaziguar tensões.',
    pronunciation: '/aɪ ˈdɪdənt noʊ/',
    stress_tip: 'Em conversas normais, a última sílaba de "didn\'t" quase some e o "k" de "know" é mudo. Soa como "I didn\' know".',
    pattern: 'I didn\'t know + [cláusula (ex: you were...)]',
    breakdown: [
      { piece: "I didn't know", role: 'Expressão de ignorância passada (Simple Past)' },
      { piece: 'you were', role: 'Início da cláusula subordinada indicando o estado passado do outro' },
      { piece: 'already working on this', role: 'Ação que estava em progresso (Past Continuous)' }
    ],
    core_vocabulary: [
      { word: 'know', translation: 'saber/conhecer', example: 'Do you know him?' },
      { word: 'already', translation: 'já', example: "I've already finished." },
      { word: 'working on', translation: 'trabalhando em', example: 'Who is working on the UI?' },
      { word: 'realize', translation: 'perceber/notar', example: "I didn't realize that." }
    ],
    examples: {
      work: { en: "I didn't know the meeting had been canceled.", pt: 'Eu não sabia que a reunião tinha sido cancelada.' },
      travel: { en: "I didn't know we needed a visa for this country.", pt: 'Eu não sabia que precisávamos de visto para este país.' },
      study: { en: "I didn't know the assignment was due today.", pt: 'Eu não sabia que a tarefa era para hoje.' }
    },
    variations: [
      { form: "I had no idea", note: 'Versão mais forte ("Eu não fazia ideia").' },
      { form: "I didn't realize", note: 'Muito comum no trabalho para "Eu não notei/percebi".' },
      { form: "Did you know...?", note: 'Pergunta para checar se a pessoa possuía a informação.' }
    ],
    combinations: [
      { phrase: "I didn't know + that", meaning: 'Ignorância de um fato' },
      { phrase: "I didn't know + how to", meaning: 'Ignorância de uma habilidade' },
      { phrase: "I had no idea + about", meaning: 'Completa ignorância de um assunto' }
    ],
    collocations: ["didn't know", "didn't realize", "had no idea", "didn't think", "didn't expect"],
    common_mistakes: [
      { wrong: 'I didn\'t knew.', right: 'I didn\'t know.', tip: 'O passado já está no "didn\'t", o verbo principal fica na forma base.' },
      { wrong: 'I not know.', right: 'I didn\'t know.', tip: 'Sempre use o auxiliar "did" para negar verbos no passado.' },
      { wrong: 'I haven\'t known.', right: 'I didn\'t know.', tip: 'Present Perfect foca na duração (eu não o conheço há anos). Para o fato puntual, use o Simple Past.' }
    ],
    retrieval_context: 'Você resolveu um bug no código, mas quando foi abrir o Pull Request, viu que seu colega já tinha submetido a correção horas antes. Ele te pergunta por que você fez o trabalho dobrado.',
    retrieval_prompt: 'Justifique pacificamente que você não sabia que ele já estava consertando aquilo.',
    retrieval_reference: "Exemplo: 'I didn't know you were fixing it.'",
    drills: [
      { instruction: 'Forme a negação no passado.', input: 'Eu não sabia.', answer: "I didn't know." },
      { instruction: 'Adicione a justificativa.', input: "I didn't know...", answer: "I didn't know you were working on this." },
      { instruction: 'Use o sinônimo (realize).', input: 'Eu não percebi.', answer: "I didn't realize." },
      { instruction: 'Revisão (Dia 8): Contraste Presente e Passado.', input: 'Eu não sei disso. / Eu não sabia disso.', answer: "I don't know that. / I didn't know that." },
      { instruction: 'Revisão (Dia 11): Adicione a ação que estava em progresso.', input: 'Eu não sabia que você estava esperando.', answer: "I didn't know you were waiting." }
    ],
    connects_to: [8, 11],
    review_of: "Contrasta com a afirmação presente de 'I know' (dia 8) e se conecta intimamente com o Past Continuous (dia 11) para descrever a ação que estava em curso sem o seu conhecimento.",
    daily_resources: {
      ted: { title: 'The danger of a single story', url: 'https://www.ted.com/talks/chimamanda_ngozi_adichie_the_danger_of_a_single_story', tip: 'Observe como a autora descreve preconceitos usando estruturas de desconhecimento passado.' },
      podcast: { title: 'ESL Podcast - Apologizing', url: 'https://www.eslpod.com', tip: 'Ouça justificativas em contextos de desculpas.' },
      onelook_word: 'already',
      anki_card: { front: 'Traduza: Eu não fazia ideia.', back: 'I had no idea.' },
      speaking_prompt: "Pense em uma novidade que você descobriu hoje. Fale: 'I didn't know that...'"
    }
  },
  {
    id: 20,
    level: 'A2',
    module: 2,
    moduleTitle: 'Past Structures',
    structure: "I was trying to fix the bug, but I made it worse.",
    translation: 'Eu estava tentando consertar o bug, mas eu piorei a situação.',
    explanation: 'A estrutura "I was trying to" é a melhor forma de justificar uma intenção que não deu certo. O Past Continuous foca no esforço ou na intenção da ação, muitas vezes contrastado por um resultado ruim no Simple Past.',
    why_it_matters: 'Você vai quebrar coisas. Servidores, pipelines, deploys. Saber dizer "eu estava tentando fazer X, mas Y aconteceu" mostra iniciativa, honestidade e separa a má intenção do erro acidental.',
    pronunciation: '/aɪ wəz ˈtraɪɪŋ tu/',
    stress_tip: 'O stress primário recai sobre o verbo "try", prolongando o som: /traa-ying/.',
    pattern: '[Sujeito] + was/were trying to + [verbo base] + (but + [resultado inesperado])',
    breakdown: [
      { piece: 'I was trying to', role: 'Intenção ou esforço em progresso no passado' },
      { piece: 'fix the bug', role: 'O objetivo pretendido' },
      { piece: 'but', role: 'Conjunção de contraste (quebra de expectativa)' },
      { piece: 'I made it worse', role: 'O resultado real não intencional (Simple Past)' }
    ],
    core_vocabulary: [
      { word: 'try', translation: 'tentar', example: "I'm trying to help." },
      { word: 'fix', translation: 'consertar', example: 'Can you fix this error?' },
      { word: 'make worse', translation: 'piorar', example: 'Don\'t touch it, you\'ll make it worse.' },
      { word: 'mean', translation: 'ter a intenção (passado: meant)', example: 'I didn\'t mean to do that.' }
    ],
    examples: {
      work: { en: "I was trying to optimize the database when it crashed.", pt: 'Eu estava tentando otimizar o banco de dados quando ele caiu.' },
      travel: { en: "We were trying to find the hotel, but we got lost.", pt: 'Nós estávamos tentando achar o hotel, mas nos perdemos.' },
      study: { en: "She was trying to study, but the neighbor was too loud.", pt: 'Ela estava tentando estudar, mas o vizinho estava fazendo muito barulho.' }
    },
    variations: [
      { form: "I didn't mean to", note: 'Expressão clássica para "Eu não tive a intenção / Foi sem querer".' },
      { form: "I was just trying to", note: 'O "just" adiciona um tom de defesa passiva ("Eu só estava tentando...").' },
      { form: "Were you trying to...?", note: 'Pergunta sobre as intenções de alguém.' }
    ],
    combinations: [
      { phrase: "I was trying to + help", meaning: 'Defesa de uma boa intenção' },
      { phrase: "but it didn't work", meaning: 'Declaração de falha do método' },
      { phrase: "I was trying to + figure out", meaning: 'Tentativa de entender ou resolver algo mentalmente' }
    ],
    collocations: ['was trying to', 'were trying to', 'trying to find', 'trying to fix', 'trying to help'],
    common_mistakes: [
      { wrong: 'I tryed to fix it yesterday.', right: 'I tried to fix it yesterday.', tip: 'No Simple Past, a ortografia é "tried". Porém, para descrever o processo em andamento, prefira "was trying".' },
      { wrong: 'I was trying fix.', right: 'I was trying to fix.', tip: 'Não esqueça o "to" antes do verbo de ação.' },
      { wrong: 'I made worse.', right: 'I made it worse.', tip: 'Faltou o objeto "it". Você piorou *aquilo*.' }
    ],
    retrieval_context: 'Um diretor pergunta por que o site principal ficou fora do ar por 5 minutos à tarde. Você precisa explicar que o objetivo original era bom (uma atualização rápida de CSS), mas acabou dando um erro imprevisto.',
    retrieval_prompt: 'Explique a sua intenção de atualizar o site e como isso causou o problema acidentalmente.',
    retrieval_reference: "Exemplo: 'I was trying to update the CSS, but it broke the homepage.'",
    drills: [
      { instruction: 'Traduza o esforço passado.', input: 'Eu estava tentando ajudar.', answer: 'I was trying to help.' },
      { instruction: 'Adicione o resultado falho.', input: 'Eu estava tentando ajudar, mas eu piorei a situação.', answer: 'I was trying to help, but I made it worse.' },
      { instruction: 'Revisão (Dia 19): Combine a falta de conhecimento com a intenção errada.', input: 'Eu não sabia que era frágil, eu só estava tentando consertar.', answer: "I didn't know it was fragile, I was just trying to fix it." },
      { instruction: 'Formule a defesa clássica ("Foi sem querer").', input: 'Eu não tive a intenção de quebrar isso.', answer: "I didn't mean to break it." },
      { instruction: 'Revisão (Dia 11): Use o Past Continuous para a intenção, como no Dia 11.', input: 'O que você estava tentando fazer quando caiu?', answer: 'What were you trying to do when it crashed?' }
    ],
    connects_to: [11, 19],
    review_of: "Uma aplicação direta do Past Continuous (dia 11) especificamente focado no verbo 'try', e combinado com a justificativa de ignorância 'I didn't know' (dia 19).",
    daily_resources: {
      ted: { title: 'Success, failure and the drive to keep creating', url: 'https://www.ted.com/talks/elizabeth_gilbert_success_failure_and_the_drive_to_keep_creating', tip: 'Observe a fala sobre tentativas fracassadas e resiliência.' },
      podcast: { title: 'ESL Podcast - Explaining Actions', url: 'https://www.eslpod.com', tip: 'Preste atenção em como o "trying to" é pronunciado rapidamente como "tryin\' a".' },
      onelook_word: 'worse',
      anki_card: { front: 'Traduza: Eu só estava tentando ajudar.', back: 'I was just trying to help.' },
      speaking_prompt: "Conte sobre a última vez que você tentou cozinhar algo novo e deu muito errado. 'I was trying to make a cake, but...'"
    }
  },
  {
    id: 21,
    level: 'B1',
    module: 3,
    moduleTitle: 'Modals e Alto Impacto',
    structure: "Could you send me the report when it's ready?",
    translation: 'Você poderia me enviar o relatório quando estiver pronto?',
    explanation: 'Abre o Módulo 3. O modal "could" é o passado de "can" (poder/conseguir), mas é incrivelmente usado no presente/futuro para fazer pedidos muito mais polidos, profissionais e suaves do que o direto "Can you...".',
    why_it_matters: 'No mundo corporativo, pedir favores com "can you" soa impaciente, como uma ordem disfarçada ou dúvida sobre a capacidade física. "Could you" é elegante, demonstra respeito ao tempo do outro e reduz atritos.',
    pronunciation: '/kʊd ju/ (na fala soa como "cudja" /ˈkʊdʒə/)',
    stress_tip: 'O "could" é suave. O stress da frase cai no verbo de ação ("send") e no objeto ("report").',
    pattern: 'Could you + [verbo base] + [complemento]?',
    breakdown: [
      { piece: 'Could you', role: 'Pedido modal educado (Você poderia)' },
      { piece: 'send me', role: 'Verbo principal na forma base + beneficiário' },
      { piece: 'the report', role: 'Objeto direto' },
      { piece: "when it's ready", role: 'Condição de tempo (quando estiver pronto)' }
    ],
    core_vocabulary: [
      { word: 'could', translation: 'poderia / podia', example: 'Could you help me?' },
      { word: 'send', translation: 'enviar', example: 'I will send it later.' },
      { word: 'ready', translation: 'pronto', example: "Let me know when it's ready." },
      { word: 'favor', translation: 'favor', example: 'Could you do me a favor?' }
    ],
    examples: {
      work: { en: "Could you take a look at my code?", pt: 'Você poderia dar uma olhada no meu código?' },
      travel: { en: "Could you call a taxi for us, please?", pt: 'Você poderia chamar um táxi para nós, por favor?' },
      study: { en: "Could you explain that concept one more time?", pt: 'Você poderia explicar esse conceito mais uma vez?' }
    },
    variations: [
      { form: "Would you mind... + -ing?", note: 'Ainda mais polido ("Você se importaria de..."). Exige o verbo seguinte em -ing.' },
      { form: "Can you...?", note: 'Mais casual/informal. Use com amigos próximos.' },
      { form: "Could I...?", note: 'Para pedir permissão para VOCÊ fazer algo (Eu poderia...?).' }
    ],
    combinations: [
      { phrase: "Could you please", meaning: 'Reforçando a educação do pedido' },
      { phrase: "Could you let me know", meaning: 'Pedido padrão para retorno de comunicação' },
      { phrase: "Could you take a look", meaning: 'Pedido amigável de revisão' }
    ],
    collocations: ['could you please', 'could you send', 'could you help', 'could you explain', 'could you tell me'],
    common_mistakes: [
      { wrong: 'Could you to send me?', right: 'Could you send me?', tip: 'Nunca use "to" depois de um modal verb como "could".' },
      { wrong: 'You could send me?', right: 'Could you send me?', tip: 'Em perguntas com modals, a ordem deve ser invertida: Modal + Sujeito.' },
      { wrong: 'Can you doing that?', right: 'Could you do that?', tip: 'A forma base ("do") é sempre necessária, nada de "-ing" após can/could.' }
    ],
    retrieval_context: 'Você está atolado de tarefas e precisa que a designer da equipe te envie os assets assim que ela finalizar, pois você não pode ficar checando o Figma toda hora.',
    retrieval_prompt: 'Faça o pedido de forma educada e profissional, solicitando que ela te avise ou te envie quando estiver pronto.',
    retrieval_reference: "Exemplo: 'Could you let me know when the assets are ready?'",
    drills: [
      { instruction: 'Forme o pedido polido.', input: 'Você pode me ajudar? (Use a forma polida)', answer: 'Could you help me?' },
      { instruction: 'Peça para a pessoa avisar.', input: 'Você poderia me avisar?', answer: 'Could you let me know?' },
      { instruction: 'Revisão (Dia 10): Combine pedido com a oferta de checagem. "Você poderia me dar um momento? Deixa eu checar."', answer: 'Could you give me a moment? Let me check.' },
      { instruction: 'Adicione a condição temporal.', input: 'Could you send it to me...', answer: "Could you send it to me when it's ready?" },
      { instruction: 'Transforme o informal em formal.', input: 'Can you review this PR?', answer: 'Could you review this PR?' }
    ],
    connects_to: [10],
    review_of: "Conecta-se com 'let me check/know' (dia 10) pois ambos são os pilares da comunicação assíncrona educada (pedir polidamente e avisar/checar polidamente).",
    daily_resources: {
      ted: { title: 'The power of introverts', url: 'https://www.ted.com/talks/susan_cain_the_power_of_introverts', tip: 'Observe a cadência elegante e os pedidos/sugestões feitos ao longo da palestra.' },
      podcast: { title: 'ESL Podcast - Making Requests', url: 'https://www.eslpod.com', tip: 'Identifique o uso de Could you, Would you mind, etc.' },
      onelook_word: 'could',
      anki_card: { front: 'Como transformar "Can you review this?" em uma forma mais educada no ambiente de trabalho?', back: 'Could you review this?' },
      speaking_prompt: "Faça 3 pedidos imaginários ao seu chefe em voz alta: 'Could you approve this? Could you review my promotion? Could you...'"
    }
  }
]

export const BATCH_15_21_SUMMARY = {
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
