import type { Lesson } from '../types'

export const lessons: Lesson[] = [
  {
    id: 8,
    level: 'A2',
    module: 1,
    moduleTitle: 'Present Structures',
    structure: "I know we're behind schedule, but we need to do this right.",
    translation: 'Eu sei que estamos atrasados, mas precisamos fazer isso direito.',
    explanation: 'Usamos "I know" para reconhecer um fato, concordar com alguém ou validar uma preocupação antes de apresentar um contraponto (geralmente com "but"). É mais assertivo que "I think".',
    why_it_matters: 'Brasileiros tendem a usar "I know" apenas para conhecimento literal. No ambiente corporativo, é fundamental para demonstrar empatia e controle da situação antes de dar más notícias ou mudar o rumo da conversa.',
    pronunciation: '/aɪ noʊ/',
    stress_tip: 'O stress cai na palavra "know". O "k" é totalmente mudo.',
    pattern: 'I know + [fato/cláusula] + (but + [contraponto])',
    breakdown: [
      { piece: 'I know', role: 'Reconhecimento do fato/validação' },
      { piece: "we're behind schedule", role: 'O fato reconhecido' },
      { piece: 'but', role: 'Conjunção adversativa para o contraponto' },
      { piece: 'we need to do this right', role: 'A necessidade real' }
    ],
    core_vocabulary: [
      { word: 'behind schedule', translation: 'atrasado (cronograma)', example: "We're a bit behind schedule on this project." },
      { word: 'on time', translation: 'no prazo', example: 'We managed to deliver everything on time.' },
      { word: 'ahead of schedule', translation: 'adiantado', example: "Great news, we're ahead of schedule." },
      { word: 'make sure', translation: 'garantir/certificar-se', example: 'I know it takes time, but we must make sure it works.' }
    ],
    examples: {
      work: { en: "I know you're busy, but could you review this PR?", pt: 'Eu sei que você está ocupado, mas poderia revisar este PR?' },
      travel: { en: "I know it's late, but is room service still available?", pt: 'Eu sei que é tarde, mas o serviço de quarto ainda está disponível?' },
      study: { en: "I know this topic is hard, but it's essential for the exam.", pt: 'Eu sei que este tópico é difícil, mas é essencial para a prova.' }
    },
    variations: [
      { form: "I know what you mean", note: 'Para validar a opinião ou sentimento de alguém' },
      { form: "As far as I know", note: 'Para dar informação com ressalva (até onde eu sei)' },
      { form: "I completely know", note: 'Incomum. Prefira "I completely understand"' }
    ],
    combinations: [
      { phrase: "I know + I should", meaning: 'Reconhecer um erro ou dever não cumprido' },
      { phrase: "I know + it's hard", meaning: 'Demonstrar empatia perante dificuldade' },
      { phrase: "I know + you're busy", meaning: 'Ser educado antes de pedir um favor' }
    ],
    collocations: ['know exactly', 'know for sure', 'know better', 'let me know', 'as far as I know'],
    common_mistakes: [
      { wrong: "I know you are busy, but...", right: "I know you're busy, but...", tip: "Em fala natural, contraia sempre 'you are' para 'you're'." },
      { wrong: "I have knowledge that...", right: "I know that...", tip: 'Tradução literal de "eu tenho conhecimento". Use "I know".' },
      { wrong: "I know to fix this.", right: "I know how to fix this.", tip: 'Sempre use "how to" após "know" ao falar de habilidades.' }
    ],
    retrieval_context: 'Você precisa pedir para um colega revisar um código urgente, mas sabe que ele está cheio de trabalho hoje. Você precisa validar o tempo dele antes de pedir (lembre-se do dia 6: need to).',
    retrieval_prompt: 'Comece reconhecendo que ele está ocupado e, em seguida, expresse a necessidade de ele revisar o PR.',
    retrieval_reference: "Exemplo: 'I know you're busy, but I need you to review this PR.'",
    drills: [
      { instruction: 'Traduza o reconhecimento de fato.', input: 'Eu sei que estamos atrasados.', answer: "I know we're behind schedule." },
      { instruction: 'Adicione a conjunção de contraponto "but".', input: "I know we're behind schedule.", answer: "I know we're behind schedule, but..." },
      { instruction: 'Revisão (Dia 6): Adicione a obrigação.', input: "I know we're behind schedule, but...", answer: "I know we're behind schedule, but we need to do this right." },
      { instruction: 'Forme a frase de empatia.', input: 'Eu sei que você está ocupado, mas precisamos conversar.', answer: "I know you're busy, but we need to talk." }
    ],
    connects_to: [6, 7],
    review_of: "Revisa 'need to' (dia 6) como contraponto após o reconhecimento com 'I know'.",
    daily_resources: {
      ted: { title: 'The power of vulnerability', url: 'https://www.ted.com/talks/brene_brown_the_power_of_vulnerability', tip: 'Observe como ela usa "I know" para conectar-se com a plateia antes de fazer uma afirmação contundente.' },
      podcast: { title: 'ESL Podcast - Business Meetings', url: 'https://www.eslpod.com', tip: 'Preste atenção em como as pessoas validam a opinião umas das outras antes de discordarem.' },
      onelook_word: 'schedule',
      anki_card: { front: 'Como você diz "Eu sei que você está ocupado, mas..."?', back: "I know you're busy, but..." },
      speaking_prompt: "Grave um áudio de 30 segundos imaginando que está pedindo ajuda a um colega ocupado. Use 'I know you're busy, but I need...'"
    }
  },
  {
    id: 9,
    level: 'A2',
    module: 1,
    moduleTitle: 'Present Structures',
    structure: "I feel like we should focus on the main features first.",
    translation: 'Eu sinto que / Eu acho que deveríamos focar nas funcionalidades principais primeiro.',
    explanation: 'Usamos "I feel like" para expressar uma intuição, opinião suave ou sugestão de forma menos direta e confrontacional do que "I think" ou "I know". É muito comum em inglês falado para suavizar discordâncias.',
    why_it_matters: 'Para não soar muito direto ou agressivo em reuniões, nativos usam "I feel like" para introduzir ideias. Brasileiros frequentemente usam "I think" para tudo, o que pode parecer rígido.',
    pronunciation: '/aɪ fil laɪk/',
    stress_tip: 'O stress principal fica em "feel".',
    pattern: 'I feel like + [sujeito] + [verbo]',
    breakdown: [
      { piece: 'I feel like', role: 'Introdução suave da opinião/intuição' },
      { piece: 'we should focus on', role: 'A sugestão (verbo modal)' },
      { piece: 'the main features', role: 'O objeto de foco' },
      { piece: 'first', role: 'Advérbio de tempo/prioridade' }
    ],
    core_vocabulary: [
      { word: 'focus on', translation: 'focar em', example: 'We need to focus on quality right now.' },
      { word: 'main features', translation: 'funcionalidades principais', example: "Let's list the main features for the MVP." },
      { word: 'point of view', translation: 'ponto de vista', example: "From my point of view, that's a mistake." },
      { word: 'gut feeling', translation: 'intuição/pressentimento', example: 'I have a gut feeling about this.' }
    ],
    examples: {
      work: { en: "I feel like we're moving too fast with this deployment.", pt: 'Eu sinto que estamos indo rápido demais com esse deploy.' },
      travel: { en: "I feel like we should leave for the airport now.", pt: 'Eu acho que deveríamos sair para o aeroporto agora.' },
      study: { en: "I feel like I'm finally understanding this topic.", pt: 'Eu sinto que finalmente estou entendendo este assunto.' }
    },
    variations: [
      { form: "I don't feel like", note: 'Seguido de verbo com -ing significa não estar com vontade de algo.' },
      { form: "I just feel like", note: 'Adiciona "just" para suavizar ainda mais a frase.' },
      { form: "It feels like", note: 'Usado para falar sobre a sensação geral do ambiente ou situação.' }
    ],
    combinations: [
      { phrase: "I feel like + we should", meaning: 'Dar uma sugestão suave' },
      { phrase: "I feel like + I'm", meaning: 'Expressar uma sensação pessoal' },
      { phrase: "I don't feel like + doing", meaning: 'Estar sem vontade de fazer algo' }
    ],
    collocations: ['feel like', 'feel free', 'feel better', 'gut feeling', 'mixed feelings'],
    common_mistakes: [
      { wrong: 'I feel that we should...', right: 'I feel like we should...', tip: '"I feel that" soa muito formal ou literal. Na fala do dia a dia, use "I feel like".' },
      { wrong: 'I feel me happy.', right: 'I feel happy.', tip: 'Não use "me" após "feel" para emoções em inglês.' },
      { wrong: 'I think like...', right: 'I feel like...', tip: 'Não misture "think" com "like" dessa forma.' }
    ],
    retrieval_context: 'Na reunião de planejamento, a equipe quer adicionar muitas ideias ao projeto. Você, instintivamente, acha que isso vai atrasar tudo e sugere focar apenas no essencial.',
    retrieval_prompt: 'Expresse sua intuição/opinião suavemente de que vocês deveriam focar no principal.',
    retrieval_reference: "Exemplo: 'I feel like we should focus on the main features.'",
    drills: [
      { instruction: 'Traduza a introdução de opinião suave.', input: 'Eu sinto que / Eu acho que...', answer: 'I feel like...' },
      { instruction: 'Adicione a sugestão.', input: 'I feel like...', answer: 'I feel like we should focus on the main features.' },
      { instruction: 'Revisão (Dia 8): Contraste a certeza com a intuição.', input: 'Eu sei que é importante, mas eu sinto que...', answer: "I know it's important, but I feel like..." },
      { instruction: 'Revisão (Dia 4): Expresse um plano futuro baseado na intuição.', input: 'Eu sinto que vai chover.', answer: "I feel like it's going to rain." },
      { instruction: 'Expresse falta de vontade (negativa com -ing).', input: 'Eu não estou com vontade de sair.', answer: "I don't feel like going out." }
    ],
    connects_to: [4, 8],
    review_of: "Contraste explícito entre 'I know' (certeza, dia 8) e 'I feel like' (intuição, dia 9), além de resgatar 'going to' (dia 4).",
    daily_resources: {
      ted: { title: 'How to make stress your friend', url: 'https://www.ted.com/talks/kelly_mcgonigal_how_to_make_stress_your_friend', tip: 'Observe o uso do verbo "feel" para descrever a percepção humana.' },
      podcast: { title: 'ESL Podcast - Expressing Opinions', url: 'https://www.eslpod.com', tip: 'Identifique os momentos em que "I feel like" é usado em vez de "I think".' },
      onelook_word: 'features',
      anki_card: { front: 'Como suavizar a sugestão "Eu acho que deveríamos..."?', back: 'I feel like we should...' },
      speaking_prompt: 'Fale por 1 minuto sobre uma intuição que você tem para a sua carreira neste ano, começando com "I feel like I should..."'
    }
  },
  {
    id: 10,
    level: 'A2',
    module: 1,
    moduleTitle: 'Present Structures',
    structure: "Let me check my calendar and I'll get back to you.",
    translation: 'Deixa eu checar minha agenda e eu te dou um retorno.',
    explanation: '"Let me" é a forma padrão e extremamente comum de se oferecer para fazer algo ou pedir um momento para realizar uma ação, como verificar algo. Fecha o ciclo das estruturas de presente por focar em interações imediatas.',
    why_it_matters: 'Brasileiros tendem a dizer "I will check" ou "Wait, I check". "Let me" soa natural, educado e é o padrão-ouro no ambiente corporativo para ganhar tempo e assumir o controle da ação.',
    pronunciation: '/ˈlɛt mi/ (na fala rápida soa como "lemme" /ˈlɛmi/)',
    stress_tip: 'Em discursos rápidos, as duas palavras se fundem em "lemme", mas em ambientes profissionais é melhor articular "let me" com ênfase no verbo seguinte.',
    pattern: 'Let me + [verbo base] + [complemento]',
    breakdown: [
      { piece: 'Let me', role: 'Pedido educado/oferta de ação' },
      { piece: 'check', role: 'O verbo de ação no infinitivo sem "to"' },
      { piece: 'my calendar', role: 'O objeto' },
      { piece: "and I'll get back to you", role: 'Promessa de ação futura' }
    ],
    core_vocabulary: [
      { word: 'calendar', translation: 'agenda', example: "Let me check my calendar for next week." },
      { word: 'get back to you', translation: 'te dar um retorno', example: "I'll get back to you on that later." },
      { word: 'double-check', translation: 'conferir novamente', example: 'Let me double-check the figures.' },
      { word: 'take a look', translation: 'dar uma olhada', example: 'Let me take a look at the code.' }
    ],
    examples: {
      work: { en: "Let me share my screen with you.", pt: 'Deixa eu compartilhar minha tela com você.' },
      travel: { en: "Let me grab my passport.", pt: 'Deixa eu pegar meu passaporte.' },
      study: { en: "Let me read the instructions again.", pt: 'Deixa eu ler as instruções de novo.' }
    },
    variations: [
      { form: "Let me know", note: 'Imperativo para pedir que a pessoa te avise.' },
      { form: "Let me see", note: 'Usado como preenchedor de pausa, "deixe-me ver/pensar".' },
      { form: "Let's", note: 'Contração de "let us" para fazer propostas ao grupo.' }
    ],
    combinations: [
      { phrase: "Let me + get back to you", meaning: 'Ganhar tempo para responder depois' },
      { phrase: "Let me + check", meaning: 'Verificar algo no momento' },
      { phrase: "Let me + know if you need", meaning: 'Oferecer disponibilidade futura' }
    ],
    collocations: ['let me know', 'let me see', 'let me think', 'let me check', 'let me show you'],
    common_mistakes: [
      { wrong: 'Let me to check.', right: 'Let me check.', tip: 'Nunca use "to" depois de "let me". O verbo seguinte vai na forma base.' },
      { wrong: 'I let you know.', right: "I'll let you know.", tip: 'Para o futuro, deve-se usar "will" (I\'ll let you know).' },
      { wrong: 'Let I check.', right: 'Let me check.', tip: 'Use o pronome oblíquo "me" com o verbo "let".' }
    ],
    retrieval_context: 'Um cliente te pergunta o prazo de entrega de uma feature. Você precisa olhar a ferramenta de gestão do projeto antes de responder, e não quer deixá-lo no vácuo.',
    retrieval_prompt: 'Diga que vai checar e que retornará para ele em seguida.',
    retrieval_reference: "Exemplo: 'Let me check the system and I'll get back to you.'",
    drills: [
      { instruction: 'Peça permissão para verificar algo.', input: 'Deixa eu checar...', answer: 'Let me check...' },
      { instruction: 'Adicione a promessa de retorno.', input: 'Let me check...', answer: "Let me check and I'll get back to you." },
      { instruction: 'Troque o verbo para compartilhar tela.', input: 'Deixa eu checar...', answer: 'Let me share my screen.' },
      { instruction: 'Revisão (Dia 6): Adicione a obrigação de retornar depois.', input: 'Deixa eu checar...', answer: "Let me check, I need to get back to you on this." }
    ],
    connects_to: [6],
    review_of: "Retoma a ideia de obrigação usando 'need to' (dia 6) como motivo após pedir para checar com 'let me'.",
    daily_resources: {
      ted: { title: '10 ways to have a better conversation', url: 'https://www.ted.com/talks/celeste_headlee_10_ways_to_have_a_better_conversation', tip: 'Observe como fluem as conversas naturais, com pausas para checar informações.' },
      podcast: { title: 'ESL Podcast - Office Talk', url: 'https://www.eslpod.com', tip: 'Note a frequência de "let me know" nos fechamentos de mensagens.' },
      onelook_word: 'calendar',
      anki_card: { front: 'Traduza: Deixa eu compartilhar minha tela.', back: 'Let me share my screen.' },
      speaking_prompt: "Simule atender o telefone, ouvir uma pergunta difícil e usar 'Let me check... and I'll get back to you' para ganhar tempo."
    }
  },
  {
    id: 11,
    level: 'A2',
    module: 2,
    moduleTitle: 'Past Structures',
    structure: "I was working on the report when you called.",
    translation: 'Eu estava trabalhando no relatório quando você ligou.',
    explanation: 'O Past Continuous (was/were + -ing) descreve uma ação que estava em progresso em um momento específico do passado, frequentemente interrompida por outra ação mais curta (Simple Past).',
    why_it_matters: 'Essencial para contar histórias, relatar status e explicar por que você não pôde atender uma solicitação no momento exato em que ocorreu.',
    pronunciation: '/aɪ wəz ˈwɜrkɪŋ/',
    stress_tip: 'O verbo auxiliar "was" costuma ser reduzido para o som fraco /wəz/, enquanto o verbo principal ("working") recebe o stress.',
    pattern: '[Sujeito] + was/were + [verbo com -ing] + (when + [cláusula no passado])',
    breakdown: [
      { piece: 'I was working', role: 'Ação longa em progresso no passado (Past Continuous)' },
      { piece: 'on the report', role: 'Objeto da ação' },
      { piece: 'when', role: 'Conjunção indicando interrupção ou ponto no tempo' },
      { piece: 'you called', role: 'Ação curta que ocorreu durante o progresso (Simple Past)' }
    ],
    core_vocabulary: [
      { word: 'work on', translation: 'trabalhar em (tarefa/projeto)', example: "I was working on a bug fix." },
      { word: 'when', translation: 'quando', example: "He arrived when I was leaving." },
      { word: 'while', translation: 'enquanto', example: "I listened to the podcast while I was driving." },
      { word: 'report', translation: 'relatório', example: 'The weekly report is due today.' }
    ],
    examples: {
      work: { en: "We were discussing the budget when the internet went down.", pt: 'Estávamos discutindo o orçamento quando a internet caiu.' },
      travel: { en: "I was looking for my gate when they announced the delay.", pt: 'Eu estava procurando meu portão quando anunciaram o atraso.' },
      study: { en: "She was studying in the library all afternoon.", pt: 'Ela estava estudando na biblioteca a tarde toda.' }
    },
    variations: [
      { form: "Were you working?", note: 'Inversão para pergunta (Was/Were + Sujeito + -ing).' },
      { form: "I wasn't working", note: 'Negativa para descrever que não havia ação em progresso.' },
      { form: "While I was working", note: 'Usar "while" (enquanto) foca mais na duração paralela.' }
    ],
    combinations: [
      { phrase: "I was just + ing", meaning: 'Eu estava justamente fazendo algo (coincidência)' },
      { phrase: "I was wondering", meaning: 'Expressão educada para fazer um pedido (Eu estava me perguntando/gostaria de saber)' },
      { phrase: "What were you doing", meaning: 'Pergunta comum sobre o passado em progresso' }
    ],
    collocations: ['was working', 'were talking', 'was thinking', 'was looking', 'was wondering'],
    common_mistakes: [
      { wrong: 'I working yesterday.', right: 'I was working yesterday.', tip: 'Não esqueça o auxiliar "was" ou "were". O "-ing" sozinho não indica tempo.' },
      { wrong: 'You was talking.', right: 'You were talking.', tip: 'Lembre-se: I/he/she/it was. You/we/they were.' },
      { wrong: 'I was worked.', right: 'I was working.', tip: 'Para ação em progresso, o verbo principal usa "-ing", não "-ed".' }
    ],
    retrieval_context: 'Seu chefe enviou uma mensagem no Slack perguntando por que você demorou a responder um cliente às 10 da manhã.',
    retrieval_prompt: 'Justifique que você estava no meio de uma reunião importante naquele momento.',
    retrieval_reference: "Exemplo: 'I was having an important meeting when the client messaged.'",
    drills: [
      { instruction: 'Descreva a ação em progresso.', input: 'Eu estava trabalhando.', answer: 'I was working.' },
      { instruction: 'Adicione a interrupção.', input: 'I was working...', answer: 'I was working when you called.' },
      { instruction: 'Mude o sujeito para "We".', input: 'I was working when you called.', answer: 'We were working when you called.' },
      { instruction: 'Revisão (Dia 1): Contraste Presente e Passado em progresso.', input: 'Eu estou trabalhando agora. Eu estava trabalhando ontem.', answer: "I'm working right now. I was working yesterday." },
      { instruction: 'Faça uma pergunta sobre a ação.', input: 'Você estava trabalhando?', answer: 'Were you working?' }
    ],
    connects_to: [1],
    review_of: "Contraste entre a ação em progresso no presente (am/is/are + ing, dia 1) e no passado (was/were + ing).",
    daily_resources: {
      ted: { title: 'Inside the mind of a master procrastinator', url: 'https://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator', tip: 'Observe como ele conta histórias intercalando eventos contínuos no passado e pontos de interrupção.' },
      podcast: { title: 'ESL Podcast - Daily Life', url: 'https://www.eslpod.com', tip: 'Ouça o relato do dia e perceba as ações descritas com was/were + ing.' },
      onelook_word: 'report',
      anki_card: { front: 'Como dizer "Eu estava trabalhando quando..."?', back: 'I was working when...' },
      speaking_prompt: 'Relate o que você estava fazendo ontem às 8 da noite.'
    }
  },
  {
    id: 12,
    level: 'A2',
    module: 2,
    moduleTitle: 'Past Structures',
    structure: "Did you receive the email I sent yesterday?",
    translation: 'Você recebeu o email que eu enviei ontem?',
    explanation: 'O Simple Past é usado para ações completas no passado. Para fazer perguntas no passado com verbos normais, usamos o auxiliar "did". Em negações, "didn\'t". Quando "did/didn\'t" aparece, o verbo principal volta para a forma original (sem -ed).',
    why_it_matters: 'O uso correto do "did" é uma das marcas de fluência básica, permitindo que você extraia informações essenciais (o que aconteceu, quando, onde) no ambiente de trabalho.',
    pronunciation: '/dɪd ju rɪˈsiv/',
    stress_tip: 'Na fala rápida, "did you" se junta e soa quase como "didja" (/ˈdɪdʒə/).',
    pattern: 'Did + [sujeito] + [verbo base] + [complemento]?',
    breakdown: [
      { piece: 'Did you', role: 'Auxiliar de pergunta no passado + sujeito' },
      { piece: 'receive', role: 'Verbo principal na forma base (infinitivo)' },
      { piece: 'the email I sent', role: 'O objeto da frase (notar que sent está no passado na oração subordinada)' },
      { piece: 'yesterday', role: 'Marcador temporal indicando ação concluída' }
    ],
    core_vocabulary: [
      { word: 'receive', translation: 'receber', example: "I didn't receive the notification." },
      { word: 'send', translation: 'enviar (passado: sent)', example: 'Who sent this message?' },
      { word: 'yesterday', translation: 'ontem', example: 'We fixed that bug yesterday.' },
      { word: 'last week', translation: 'semana passada', example: 'She finished the course last week.' }
    ],
    examples: {
      work: { en: "Did you talk to the manager about the deadline?", pt: 'Você falou com o gerente sobre o prazo?' },
      travel: { en: "Did they cancel our flight?", pt: 'Eles cancelaram nosso voo?' },
      study: { en: "Did you understand the last chapter?", pt: 'Você entendeu o último capítulo?' }
    },
    variations: [
      { form: "I didn't receive", note: 'Negativa: o auxiliar indica o passado e o verbo continua na base.' },
      { form: "Where did you go?", note: 'Com question words (Wh-), o "did" vem logo após a palavra.' },
      { form: "Yes, I did.", note: 'Short answer (resposta curta) afirmando.' }
    ],
    combinations: [
      { phrase: "Did you + get", meaning: 'Perguntar se a pessoa recebeu/entendeu' },
      { phrase: "Did you + happen to", meaning: 'Por acaso você... (mais polido)' },
      { phrase: "Why did you +", meaning: 'Investigar motivos passados' }
    ],
    collocations: ['did you know', 'did you get', 'did you see', 'what did you', 'how did you'],
    common_mistakes: [
      { wrong: 'Did you received...?', right: 'Did you receive...?', tip: 'Erro clássico: nunca use "did" e o verbo com "-ed" na mesma estrutura.' },
      { wrong: 'You received the email?', right: 'Did you receive the email?', tip: 'No inglês escrito e na fala padrão, sempre inicie a pergunta com o auxiliar "Did".' },
      { wrong: "I didn't went.", right: "I didn't go.", tip: 'A mesma regra vale para verbos irregulares. Após "didn\'t", volte à base.' }
    ],
    retrieval_context: 'Após um dia sem resposta, você quer checar se o fornecedor recebeu as especificações técnicas enviadas por email na terça-feira.',
    retrieval_prompt: 'Faça uma pergunta direta para saber se eles receberam o email.',
    retrieval_reference: "Exemplo: 'Did you receive the email with the specs?'",
    drills: [
      { instruction: 'Transforme em pergunta.', input: 'You received the email.', answer: 'Did you receive the email?' },
      { instruction: 'Forme a negativa.', input: 'I sent the email.', answer: "I didn't send the email." },
      { instruction: 'Use o auxiliar correto.', input: '___ you talk to him?', answer: 'Did you talk to him?' },
      { instruction: 'Revisão (Dia 2): Contraste com Present Perfect. Qual foca na ação concluída num tempo específico?', input: 'Have you sent the email? vs Did you send the email yesterday?', answer: 'Did you send the email yesterday?' },
      { instruction: 'Revisão (Dia 11): Interrupção vs Ação Completa.', input: 'Você ligou enquanto eu estava trabalhando?', answer: 'Did you call while I was working?' }
    ],
    connects_to: [2, 11],
    review_of: "Contraste direto com o Present Perfect (have + pp, dia 2) para entender a diferença entre tempo marcado ('yesterday') e relevância contínua, e usa o Past Continuous (dia 11) nas combinações.",
    daily_resources: {
      ted: { title: 'Do schools kill creativity?', url: 'https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity', tip: 'Observe como ele descreve eventos da infância e fatos completos usando Simple Past.' },
      podcast: { title: 'ESL Podcast - Asking Questions', url: 'https://www.eslpod.com', tip: 'Foque nas perguntas iniciando com "Did you...".' },
      onelook_word: 'yesterday',
      anki_card: { front: 'Como perguntar "Você recebeu o email?" no passado?', back: 'Did you receive the email?' },
      speaking_prompt: "Pergunte em voz alta a si mesmo o que você fez ontem à noite: 'What did I do last night? I didn't...'"
    }
  },
  {
    id: 13,
    level: 'B1',
    module: 2,
    moduleTitle: 'Past Structures',
    structure: "We used to have weekly meetings, but now we just use Slack.",
    translation: 'Nós costumávamos ter reuniões semanais, mas agora nós só usamos o Slack.',
    explanation: '"Used to" serve para falar de hábitos, rotinas ou estados no passado que não são mais verdade no presente. É uma estrutura que estabelece um forte contraste de tempo.',
    why_it_matters: 'Para explicar mudanças de processo ("como fazíamos" vs "como fazemos"), evoluções da carreira e refatorações no trabalho, essa estrutura é indispensável para soar maduro.',
    pronunciation: '/just tu/ (o "d" não é pronunciado, soa como a palavra "use" + "to")',
    stress_tip: 'A pronúncia se junta quase como "yoostuh" (/ˈjustə/). A força cai no "use".',
    pattern: '[Sujeito] + used to + [verbo base] + (but now...)',
    breakdown: [
      { piece: 'We used to', role: 'Indicador de hábito passado abandonado' },
      { piece: 'have', role: 'Verbo base do hábito passado' },
      { piece: 'weekly meetings', role: 'Objeto do hábito' },
      { piece: 'but now', role: 'Transição contrastiva para o presente' },
      { piece: 'we just use Slack', role: 'O novo hábito/estado atual' }
    ],
    core_vocabulary: [
      { word: 'weekly', translation: 'semanal', example: 'We have a weekly check-in.' },
      { word: 'but now', translation: 'mas agora', example: 'I used to commute, but now I work remotely.' },
      { word: 'process', translation: 'processo', example: 'We changed our deploy process.' },
      { word: 'no longer', translation: 'não mais', example: 'We no longer use that software.' }
    ],
    examples: {
      work: { en: "The server used to crash all the time before the update.", pt: 'O servidor costumava cair o tempo todo antes da atualização.' },
      travel: { en: "I used to travel for work every month.", pt: 'Eu costumava viajar a trabalho todo mês.' },
      study: { en: "She used to study French, but switched to Spanish.", pt: 'Ela estudava francês, mas trocou para espanhol.' }
    },
    variations: [
      { form: "Didn't use to", note: 'Negativa para algo que NÃO era hábito, mas agora é (repare que o "d" de used cai).' },
      { form: "Did you use to?", note: 'Pergunta sobre hábitos passados (perde o "d").' },
      { form: "Would + verbo", note: 'Para ações repetidas no passado (narrativa), também se usa "would".' }
    ],
    combinations: [
      { phrase: "used to + be", meaning: 'Para estados passados (costumava ser/era)' },
      { phrase: "used to + think", meaning: 'Para crenças passadas superadas' },
      { phrase: "never used to", meaning: 'Forma mais natural de negativa (nunca costumava)' }
    ],
    collocations: ['used to be', 'used to have', 'used to go', 'used to think', 'used to work'],
    common_mistakes: [
      { wrong: 'I use to go there yesterday.', right: 'I went there yesterday.', tip: 'Não use "used to" para algo pontual que aconteceu uma vez no passado.' },
      { wrong: 'I am used to work.', right: 'I used to work.', tip: 'Não confunda "I used to" (eu costumava) com "I am used to doing" (estou acostumado a).' },
      { wrong: "Didn't used to.", right: "Didn't use to.", tip: 'Ao usar o auxiliar "didn\'t", o verbo volta para "use" (sem -d).' }
    ],
    retrieval_context: 'Um funcionário novo pergunta por que não há uma reunião diária no calendário. Você explica que antigamente existia esse hábito, mas foi substituído por atualizações no sistema.',
    retrieval_prompt: 'Diga que a equipe costumava ter "daily stand-ups", mas que a prática mudou.',
    retrieval_reference: "Exemplo: 'We used to have daily stand-ups, but now we update everything on Slack.'",
    drills: [
      { instruction: 'Expresse um hábito passado.', input: 'Eu trabalhava no escritório (e não trabalho mais).', answer: 'I used to work in the office.' },
      { instruction: 'Adicione o contraste presente.', input: 'I used to work in the office...', answer: 'I used to work in the office, but now I work from home.' },
      { instruction: 'Faça a negativa (não costumava).', input: 'We ___ (not / use to) have this feature.', answer: "We didn't use to have this feature." },
      { instruction: 'Revisão (Dia 12): Use o Simple Past para a mudança de estado que encerrou o hábito.', input: 'We used to use Skype, then we (move) ___ to Teams.', answer: 'We used to use Skype, then we moved to Teams.' },
      { instruction: 'Revisão (Dia 8): Confirme que entende o estado atual e relembre o passado.', input: 'Eu sei que nós mudamos, mas nós costumávamos ser mais rápidos.', answer: "I know we changed, but we used to be faster." }
    ],
    connects_to: [8, 12],
    review_of: "Exige o Simple Past (dia 12) nos exercícios para indicar o evento pontual que encerrou o hábito, e I know (dia 8) para concessão.",
    daily_resources: {
      ted: { title: 'The surprising habits of original thinkers', url: 'https://www.ted.com/talks/adam_grant_the_surprising_habits_of_original_thinkers', tip: 'Perceba a transição constante entre como as coisas eram (used to) e como elas são feitas pelos criativos.' },
      podcast: { title: 'ESL Podcast - Changing Habits', url: 'https://www.eslpod.com', tip: 'Identifique a pronúncia do verbo e se ela reduz de "used to" para "use to".' },
      onelook_word: 'weekly',
      anki_card: { front: 'Qual é a estrutura para expressar "Eu costumava..."?', back: 'I used to...' },
      speaking_prompt: "Fale 3 frases sobre hábitos que sua empresa/equipe tinha há 5 anos atrás: 'We used to..., we used to..., we didn't use to...'"
    }
  },
  {
    id: 14,
    level: 'B1',
    module: 2,
    moduleTitle: 'Past Structures',
    structure: "By the time I arrived, the meeting had already started.",
    translation: 'Quando eu cheguei, a reunião já tinha começado.',
    explanation: 'O Past Perfect (had + particípio) é o "passado do passado". Usamos para deixar claro que uma ação ocorreu *antes* de outro evento no passado. É essencial para estabelecer cronologia e evitar mal-entendidos.',
    why_it_matters: 'Num post-mortem ou debug de sistema, a cronologia precisa ser perfeita: "O servidor *tinha caído* (had crashed) antes que eu *pudesse* (could) consertar". O B1 exige precisão no sequenciamento de eventos.',
    pronunciation: "/hæd/ (mas na fala é comum contrair: I'd, they'd /aɪd, ðeɪd/)",
    stress_tip: 'O auxiliar "had" costuma ser fraco, enfatiza-se o verbo principal no particípio (ex: STARTED).',
    pattern: '[Ação 2 - Simple Past] + by the time/when + [Ação 1 - Past Perfect (had + pp)]',
    breakdown: [
      { piece: 'By the time', role: 'Expressão de tempo (no momento em que)' },
      { piece: 'I arrived', role: 'Ação 2 (mais recente) no Simple Past' },
      { piece: 'the meeting', role: 'Sujeito da Ação 1' },
      { piece: 'had already started', role: 'Ação 1 (mais antiga) no Past Perfect' }
    ],
    core_vocabulary: [
      { word: 'by the time', translation: 'no momento que / na hora que', example: 'By the time we fixed it, it was too late.' },
      { word: 'already', translation: 'já', example: 'I had already left.' },
      { word: 'just', translation: 'recém/agora pouco', example: 'They had just finished the deploy.' },
      { word: 'realize', translation: 'perceber/dar-se conta', example: 'I realized I had made a mistake.' }
    ],
    examples: {
      work: { en: "I realized I had forgotten to attach the file.", pt: 'Eu percebi que tinha esquecido de anexar o arquivo.' },
      travel: { en: "When we got to the airport, the flight had already left.", pt: 'Quando chegamos no aeroporto, o voo já tinha partido.' },
      study: { en: "She had never used Python before joining this course.", pt: 'Ela nunca tinha usado Python antes de entrar neste curso.' }
    },
    variations: [
      { form: "I hadn't seen", note: 'Negativa (had not).' },
      { form: "Had you finished?", note: 'Pergunta sobre o "passado do passado".' },
      { form: "I'd already done it", note: 'Contração super comum ("I\'d" = "I had" neste contexto).' }
    ],
    combinations: [
      { phrase: "I realized I had", meaning: 'Descrever uma constatação de um erro/fato anterior' },
      { phrase: "Before I could, it had", meaning: 'Explicar algo que ocorreu rápido demais' },
      { phrase: "had never been", meaning: 'Descrever falta de experiência até um momento passado' }
    ],
    collocations: ['had already', 'had just', 'had never', 'had finished', 'had decided'],
    common_mistakes: [
      { wrong: 'I arrived, but the meeting started.', right: 'When I arrived, the meeting had started.', tip: 'O Simple Past sozinho pode não deixar clara a ordem cronológica correta de eventos sequenciais.' },
      { wrong: 'I have forgotten to send it yesterday.', right: 'I had forgotten to send it yesterday.', tip: 'Para o passado do passado num contexto já concluído, não use o Present Perfect ("have").' },
      { wrong: "I'd go there.", right: "I'd gone there.", tip: "Não confunda a contração 'I'd' (I would) com 'I'd' (I had). Se o próximo verbo for particípio, é 'had'." }
    ],
    retrieval_context: 'Um erro em produção aconteceu. Você foi investigar os logs e descobriu que, antes mesmo do usuário clicar no botão de "Comprar", a sessão dele expirou.',
    retrieval_prompt: 'Descreva cronologicamente o evento, enfatizando o que aconteceu primeiro (a sessão ter expirado).',
    retrieval_reference: "Exemplo: 'When the user clicked, his session had already expired.'",
    drills: [
      { instruction: 'Transforme o verbo no "passado do passado".', input: 'The meeting ___ (already/start).', answer: 'The meeting had already started.' },
      { instruction: 'Junte as duas partes cronologicamente.', input: 'I arrived. The meeting started before.', answer: 'By the time I arrived, the meeting had already started.' },
      { instruction: 'Faça a contração (I had).', input: 'I had finished.', answer: "I'd finished." },
      { instruction: 'Revisão (Dia 12): Use o Simple Past para a ação mais recente.', input: 'I realized that I ___ (forget) my password.', answer: 'I realized that I had forgotten my password.' },
      { instruction: 'Negativa (não tinha visto).', input: 'Eu percebi que não tinha visto o email.', answer: "I realized I hadn't seen the email." }
    ],
    connects_to: [12],
    review_of: "Exige o domínio do Simple Past (dia 12) como a 'âncora temporal' para o Past Perfect (a ação mais distante no passado).",
    daily_resources: {
      ted: { title: 'How algorithms shape our world', url: 'https://www.ted.com/talks/kevin_slavin_how_algorithms_shape_our_world', tip: 'Observe o uso do passado cronológico ao relatar eventos e quebras sistêmicas causadas por código.' },
      podcast: { title: 'ESL Podcast - Telling a Story', url: 'https://www.eslpod.com', tip: "Preste atenção nas contrações 'd em falas sobre o passado." },
      onelook_word: 'already',
      anki_card: { front: 'Complete com o passado do passado: Eu percebi que tinha cometido um erro. -> I realized I ___ a mistake.', back: 'had made' },
      speaking_prompt: "Grave-se narrando uma sequência de 3 eventos desastrosos. 'By the time I woke up, the alarm had failed. When I arrived, the meeting had started...'"
    }
  }
]

export const BATCH_8_14_SUMMARY = {
  range: '8-14',
  theme: 'Fechamento de Presente e Introdução às Narrativas Passadas',
  levels: ['A2', 'B1'],
  structures: [
    'I know — Reconhecimento e concessão (dia 8, A2)',
    'I feel like — Opinião suavizada/intuição (dia 9, A2)',
    'let me — Oferta educada de ação / controle (dia 10, A2)',
    'was/were + ing — Past continuous / Ação interrompida (dia 11, A2)',
    'did (Simple Past) — Ações concluídas (dia 12, A2)',
    'used to — Hábitos e estados passados (dia 13, B1)',
    'had + pp (Past Perfect) — O passado do passado / cronologia (dia 14, B1)'
  ],
  grammar_arcs: [
    'Dias 8-10: Funções pragmáticas no presente. Validação, opinião suave e iniciativa (fechando o Módulo 1).',
    'Dias 11-14: O esqueleto narrativo do passado (Módulo 2). Começando com o contínuo vs interrupção, consolidando o uso prático de perguntas (did), comparando com hábitos abandonados (used to) e sequenciando eventos para evitar ambiguidades no trabalho (Past Perfect).'
  ],
  key_contrasts_established: [
    'I know (certeza/fato) vs I feel like (intuição/opinião subjetiva)',
    'Present Continuous (dia 1) vs Past Continuous (dia 11)',
    'Present Perfect (dia 2) vs Simple Past (dia 12) para tempo determinado',
    'used to (hábito abandonado) vs Simple Past (ação pontual)',
    'Simple Past (ação 2 mais recente) vs Past Perfect (ação 1 mais antiga)'
  ],
  vocabulary_themes: [
    'opiniões e concessões corporativas: I know but, I feel like we should, let me check',
    'tempo e cronologia passado: yesterday, while, when, by the time, already, used to',
    'erros e debug: realized, forgot, crashed, fixed'
  ],
  connects_to_next: 'Batch 3 (dias 15-21): [I wish, I should have, I could have] — [Expansão do uso do passado para o mundo das hipóteses e arrependimentos, elevando do B1 para o limite entre estruturas descritivas reais para cenários irrealizados e feedbacks de trabalho].'
}
