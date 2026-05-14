import type { Lesson } from '../types'

export const lessons: Lesson[] = [
  {
    id: 22,
    level: 'B1',
    module: 3,
    moduleTitle: 'Modals e Alto Impacto',
    structure: "I think we should wait for the client's approval.",
    translation: 'Eu acho que nós deveríamos esperar pela aprovação do cliente.',
    explanation: '"Should" é o principal modal para dar conselhos, sugestões e recomendações no ambiente de trabalho. Fica extremamente natural quando combinado com "I think" ou "I feel like" para suavizar o tom.',
    why_it_matters: 'Para não soar como um ditador ("We need to wait" ou "We must wait"), o "should" oferece uma direção firme, porém aberta a discussões. É a essência do trabalho em equipe.',
    pronunciation: '/ʃʊd/ (O "L" é mudo, soa como "shud")',
    stress_tip: 'O "should" é geralmente fraco, e a ênfase da frase cai no verbo principal ("wait").',
    pattern: '(I think) + [Sujeito] + should + [verbo base]',
    breakdown: [
      { piece: 'I think', role: 'Abertura para suavizar a sugestão' },
      { piece: 'we should', role: 'Modal de recomendação/conselho' },
      { piece: 'wait', role: 'Verbo base (nunca acompanhado de "to")' },
      { piece: "for the client's approval", role: 'O objeto do conselho' }
    ],
    core_vocabulary: [
      { word: 'approval', translation: 'aprovação', example: "We're waiting for approval." },
      { word: 'wait for', translation: 'esperar por', example: 'I should wait for you.' },
      { word: 'review', translation: 'revisar/análise', example: 'We should review the code.' },
      { word: 'update', translation: 'atualizar', example: 'You should update your system.' }
    ],
    examples: {
      work: { en: "I don't think we should release this feature yet.", pt: 'Eu não acho que deveríamos lançar esta funcionalidade ainda.' },
      travel: { en: "You should definitely visit the museum.", pt: 'Você definitivamente deveria visitar o museu.' },
      study: { en: "We should focus on the main topic first.", pt: 'Nós deveríamos focar no tópico principal primeiro.' }
    },
    variations: [
      { form: "Should we...?", note: 'Para pedir opiniões (Nós deveríamos...?).' },
      { form: "You shouldn't", note: 'Negativa para forte desaconselhamento.' },
      { form: "Maybe we should", note: 'Ainda mais suave que "I think".' }
    ],
    combinations: [
      { phrase: "I think we should", meaning: 'Dar uma recomendação suave' },
      { phrase: "What should we do?", meaning: 'Pedir direcionamento' },
      { phrase: "We probably should", meaning: 'Concordar com uma necessidade' }
    ],
    collocations: ['think we should', 'maybe we should', 'probably should', 'should focus', 'should wait'],
    common_mistakes: [
      { wrong: 'We should to wait.', right: 'We should wait.', tip: 'Nunca use "to" depois de um modal verb como "should".' },
      { wrong: 'I think we shouldn\'t wait.', right: 'I don\'t think we should wait.', tip: 'Em inglês, a negação sobe para o "think" (eu não acho que...).' },
      { wrong: 'We should waiting.', right: 'We should wait.', tip: 'Sempre use a forma base do verbo após "should", sem -ing.' }
    ],
    retrieval_context: 'A equipe quer subir uma alteração de código na sexta à tarde. Você acha isso arriscado e prefere esperar até segunda.',
    retrieval_prompt: 'Combine sua opinião ("I think") com uma recomendação ("should") para esperar até segunda.',
    retrieval_reference: "Exemplo: 'I think we should wait until Monday.'",
    drills: [
      { instruction: 'Forme o conselho.', input: 'Nós deveríamos testar.', answer: 'We should test.' },
      { instruction: 'Combine com a abertura.', input: 'Eu acho que nós deveríamos testar.', answer: 'I think we should test.' },
      { instruction: 'Revisão (Dia 9): Use intuição ao invés de pensamento racional.', input: 'Eu sinto que deveríamos esperar.', answer: 'I feel like we should wait.' },
      { instruction: 'Mova a negação para o "think" (Dia 7).', input: 'Eu acho que nós não deveríamos fazer isso.', answer: "I don't think we should do this." },
      { instruction: 'Revisão (Dia 17): Contraste conselho presente com crítica passada.', input: 'Nós deveríamos esperar (agora). Nós deveríamos ter esperado (no passado).', answer: 'We should wait. We should have waited.' },
      { instruction: 'Peça conselho (pergunta).', input: 'Nós deveríamos ligar para ele?', answer: 'Should we call him?' }
    ],
    connects_to: [7, 9, 17],
    review_of: "Exige o uso simultâneo de 'I think/I feel like' (dias 7 e 9) para formar uma estrutura comum de sugestão no trabalho, e contrasta com 'should have' (dia 17).",
    daily_resources: {
      ted: { title: 'What makes a good life?', url: 'https://www.ted.com/talks/robert_waldinger_what_makes_a_good_life_lessons_from_the_longest_study_on_happiness', tip: 'Observe como ele dá conselhos baseados nos dados.' },
      podcast: { title: 'ESL Podcast - Giving Advice', url: 'https://www.eslpod.com', tip: 'Preste atenção em como o should nunca é seguido de "to".' },
      onelook_word: 'should',
      anki_card: { front: 'Traduza: Eu não acho que nós deveríamos fazer o deploy hoje.', back: "I don't think we should deploy today." },
      speaking_prompt: "Dê 3 conselhos em voz alta para alguém que está aprendendo inglês: 'You should... You shouldn't... I think you should...'"
    }
  },
  {
    id: 23,
    level: 'B1',
    module: 3,
    moduleTitle: 'Modals e Alto Impacto',
    structure: "We might need to change the deadline, so we should talk to them.",
    translation: 'Talvez a gente precise mudar o prazo, então deveríamos falar com eles.',
    explanation: '"Might" é essencial para falar de possibilidades e incertezas. É a palavra perfeita para evitar promessas absolutas no ambiente de trabalho. Fica ótimo quando ligado a "should" (se X for possível, deveríamos fazer Y).',
    why_it_matters: 'Brasileiros abusam de "maybe" (Maybe we need...). "Might" age como um verbo modal auxiliar e soa 10x mais nativo, maduro e fluido. "We might need" soa como um profissional avaliando cenários.',
    pronunciation: '/maɪt/ (O "t" final geralmente é segurado/engolido, "migh-")',
    stress_tip: 'A ênfase cai no "might" e no verbo principal ("need/change").',
    pattern: '[Sujeito] + might + [verbo base]',
    breakdown: [
      { piece: 'We might', role: 'Modal de possibilidade (Talvez nós)' },
      { piece: 'need to change', role: 'Verbos em sequência (precisar mudar)' },
      { piece: 'the deadline', role: 'O objeto da possibilidade' },
      { piece: 'so we should talk to them', role: 'Recomendação baseada na possibilidade' }
    ],
    core_vocabulary: [
      { word: 'deadline', translation: 'prazo', example: 'We missed the deadline.' },
      { word: 'delay', translation: 'atrasar/atraso', example: 'There might be a delay.' },
      { word: 'issue', translation: 'problema/questão', example: 'We might have an issue here.' },
      { word: 'talk to', translation: 'falar com', example: 'You should talk to him.' }
    ],
    examples: {
      work: { en: "I might be late for the meeting.", pt: 'Talvez eu me atrase para a reunião.' },
      travel: { en: "It might rain later, we should take an umbrella.", pt: 'Pode ser que chova mais tarde, deveríamos levar um guarda-chuva.' },
      study: { en: "This concept might seem hard, but it's actually simple.", pt: 'Esse conceito pode parecer difícil, mas na verdade é simples.' }
    },
    variations: [
      { form: "Might not", note: 'Negativa de possibilidade (Talvez não...). Ex: We might not finish today.' },
      { form: "May", note: 'Sinônimo de "might", ligeiramente mais formal (We may need...).' },
      { form: "Might be -ing", note: 'Para possibilidades ocorrendo agora (He might be sleeping).' }
    ],
    combinations: [
      { phrase: "we might need to", meaning: 'Talvez a gente precise' },
      { phrase: "there might be", meaning: 'Pode ser que haja / Talvez tenha' },
      { phrase: "I might not be able to", meaning: 'Recusa polida (Talvez eu não consiga)' }
    ],
    collocations: ['might be', 'might need', 'might have', 'might want to', 'might not'],
    common_mistakes: [
      { wrong: 'Maybe we need to change.', right: 'We might need to change.', tip: '"Maybe" não está gramaticalmente errado, mas usar "might" eleva muito a naturalidade e fluência.' },
      { wrong: 'We might to need.', right: 'We might need.', tip: 'Novamente, modals (might, should, can, would) nunca levam "to" logo em seguida.' },
      { wrong: 'It might rains.', right: 'It might rain.', tip: 'O verbo após um modal sempre volta para a forma base absoluta, ignorando o "s" da terceira pessoa.' }
    ],
    retrieval_context: 'Um cliente pediu uma nova feature enorme de última hora. Você vê que isso pode estourar o orçamento e precisa avisar o gerente, sugerindo uma reunião.',
    retrieval_prompt: 'Use "might" para dizer que talvez isso passe do orçamento e conecte com "should" para recomendar que vocês conversem.',
    retrieval_reference: "Exemplo: 'This might go over budget, so we should talk.'",
    drills: [
      { instruction: 'Traduza usando o modal "might".', input: 'Talvez nós precisemos de mais tempo.', answer: 'We might need more time.' },
      { instruction: 'Formule uma negativa (talvez não).', input: 'Talvez eu não vá para o escritório.', answer: 'I might not go to the office.' },
      { instruction: 'Combine "might" e "should".', input: 'Isso pode dar erro, então nós deveríamos testar.', answer: 'This might fail, so we should test it.' },
      { instruction: 'Revisão (Dia 22): Contraste a possibilidade com o conselho embutido.', input: 'Eu acho que nós deveríamos avisar o cliente porque pode haver um atraso.', answer: 'I think we should tell the client because there might be a delay.' },
      { instruction: 'Aviso polido.', input: 'Talvez eu me atrase.', answer: 'I might be late.' },
      { instruction: 'Revisão (Dia 6): Incorpore o "need to" junto ao "might".', input: 'Talvez nós precisemos refazer isso.', answer: 'We might need to redo this.' }
    ],
    connects_to: [6, 22],
    review_of: "Exige a combinação sintática 'might + should' e utiliza ativamente o 'need to' (dia 6) e o 'should' (dia 22) para formar justificativas complexas de forma fluente.",
    daily_resources: {
      ted: { title: 'The surprising habits of original thinkers', url: 'https://www.ted.com/talks/adam_grant_the_surprising_habits_of_original_thinkers', tip: 'Observe o uso da incerteza e possibilidade na fala.' },
      podcast: { title: 'ESL Podcast - Expressing Possibility', url: 'https://www.eslpod.com', tip: 'Perceba a diferença de ritmo entre usar "maybe" e "might".' },
      onelook_word: 'might',
      anki_card: { front: 'Como se diz "Talvez a gente precise..." de forma corporativa e natural?', back: 'We might need to...' },
      speaking_prompt: "Fale em voz alta três cenários para hoje: 'It might rain, so I should... I might be busy later, so I should...'"
    }
  },
  {
    id: 24,
    level: 'B1',
    module: 3,
    moduleTitle: 'Modals e Alto Impacto',
    structure: "There must be a bug in the system, because it's not working.",
    translation: 'Deve ter um bug no sistema, porque não está funcionando.',
    explanation: '"Must" tem dois papéis: obrigação (Você DEVE fazer isso - raro e autoritário no trabalho) e dedução lógica. Aqui ensinamos a dedução: quando você tem muita certeza de algo baseado em evidências.',
    why_it_matters: 'Para "debugar" situações. Quando um servidor cai, você deduz coisas: "It must be the database". É o nível máximo de certeza, contrastando com "might" (talvez seja).',
    pronunciation: '/mʌst/ (O "t" final geralmente cai antes de consoantes: "mus be")',
    stress_tip: 'O stress principal fica no "must" para indicar forte convicção.',
    pattern: '[Sujeito] + must be + [dedução] + (because + [evidência])',
    breakdown: [
      { piece: 'There must be', role: 'Forte dedução (Deve haver / Deve ter)' },
      { piece: 'a bug in the system', role: 'A conclusão lógica' },
      { piece: 'because', role: 'A conexão com a evidência' },
      { piece: "it's not working", role: 'A evidência em si (Present Continuous)' }
    ],
    core_vocabulary: [
      { word: 'must be', translation: 'deve ser / deve estar', example: 'You must be tired.' },
      { word: 'there must be', translation: 'deve haver / deve ter', example: 'There must be a way.' },
      { word: 'evidence', translation: 'evidência/prova', example: 'What is the evidence?' },
      { word: 'work (machine)', translation: 'funcionar', example: "It's not working." }
    ],
    examples: {
      work: { en: "You must be exhausted after that long meeting.", pt: 'Você deve estar exausto depois daquela reunião longa.' },
      travel: { en: "This must be the wrong gate, there's nobody here.", pt: 'Esse deve ser o portão errado, não tem ninguém aqui.' },
      study: { en: "There must be a typo in this code.", pt: 'Deve ter um erro de digitação neste código.' }
    },
    variations: [
      { form: "Must have + participle", note: 'Dedução sobre o PASSADO (Alguém deve ter deletado: Somebody must have deleted).' },
      { form: "Can't be", note: 'A dedução negativa não é "must not be", mas "can\'t be" (Não pode ser ele!).' },
      { form: "Must do", note: 'Forma de obrigação (You must sign this) - evite ao dar ordens a colegas.' }
    ],
    combinations: [
      { phrase: "there must be a way", meaning: 'Tem que haver um jeito (determinação)' },
      { phrase: "must have been", meaning: 'Deve ter sido (dedução passada)' },
      { phrase: "must be kidding", meaning: 'Deve estar brincando (incredulidade)' }
    ],
    collocations: ['must be', 'there must be', 'must have', 'must do', 'must know'],
    common_mistakes: [
      { wrong: 'It must to be a bug.', right: 'It must be a bug.', tip: 'Nenhum modal verb aceita "to" em seguida.' },
      { wrong: 'It must not be a bug.', right: 'It can\'t be a bug.', tip: 'Para dedução de que algo é IMPOSSÍVEL, use "can\'t be". "Must not" indica proibição.' },
      { wrong: 'Have a bug.', right: 'There must be a bug.', tip: 'Brasileiros usam o verbo "ter" (have) para existir. Em inglês, use "there is / there must be".' }
    ],
    retrieval_context: 'Sua senha está sendo recusada e o caps-lock está desligado. Você chega à conclusão de que sua conta expirou.',
    retrieval_prompt: 'Faça a forte dedução lógica de que a conta expirou e conclua dizendo que você precisa falar com o suporte.',
    retrieval_reference: "Exemplo: 'My account must be expired, I need to talk to support.'",
    drills: [
      { instruction: 'Faça a dedução presente.', input: 'Isso deve ser um erro.', answer: 'This must be a mistake.' },
      { instruction: 'Dedução usando o equivalente a "haver".', input: 'Deve haver / Deve ter uma solução.', answer: 'There must be a solution.' },
      { instruction: 'Revisão (Dia 23): Contraste forte vs fraco.', input: 'Pode ser (might) a rede, mas deve ser (must) o servidor.', answer: 'It might be the network, but it must be the server.' },
      { instruction: 'Dedução no Present Continuous (Dia 1).', input: 'Eles devem estar dormindo agora.', answer: 'They must be sleeping right now.' },
      { instruction: 'Combine "must be" com conselho (Dia 22).', input: 'Você deve estar cansado, você deveria descansar.', answer: 'You must be tired, you should rest.' },
      { instruction: 'Revisão de negativa lógica (impossibilidade).', input: 'Isso não pode ser verdade.', answer: "This can't be true." }
    ],
    connects_to: [1, 22, 23],
    review_of: "Exige alternar rapidamente a certeza entre 'might' (dia 23) e 'must', e integra-se perfeitamente aos tempos contínuos do dia 1 e aos conselhos do dia 22.",
    daily_resources: {
      ted: { title: 'The art of misdirection', url: 'https://www.ted.com/talks/apollo_robbins_the_art_of_misdirection', tip: 'Veja como a dedução visual falha quando somos enganados.' },
      podcast: { title: 'ESL Podcast - Making Logical Deductions', url: 'https://www.eslpod.com', tip: 'Preste atenção ao uso de must be e can\'t be em situações cotidianas.' },
      onelook_word: 'evidence',
      anki_card: { front: 'Complete: [Deve ter] a bug. -> ___ a bug.', back: 'There must be' },
      speaking_prompt: "Olhe para fora ou para um colega. Faça deduções: 'It must be raining. He must be stressed. There must be an issue.'"
    }
  },
  {
    id: 25,
    level: 'B1',
    module: 3,
    moduleTitle: 'Modals e Alto Impacto',
    structure: "I'd like to schedule a meeting, but it depends on your availability.",
    translation: 'Eu gostaria de agendar uma reunião, mas isso depende da sua disponibilidade.',
    explanation: '"I\'d like to" (I would like to) é a versão madura e polida de "I want". É a chave universal para expressar desejo em e-mails, com clientes ou superiores. O "it depends" funciona perfeitamente junto para adicionar condicionantes amigáveis.',
    why_it_matters: 'Dizer "I want to schedule" soa como uma exigência de criança. Dizer "I\'d like to" mostra classe e respeito pelo outro no ambiente profissional.',
    pronunciation: '/aɪd laɪk tu/',
    stress_tip: 'O foco vai na palavra principal da ação ("schedule"), enquanto "I\'d like to" flui rápido.',
    pattern: "I'd like to + [verbo base] + (but it depends on + [fator])",
    breakdown: [
      { piece: "I'd like to", role: 'Desejo polido (Eu gostaria de)' },
      { piece: 'schedule', role: 'Verbo da ação na forma base' },
      { piece: 'a meeting', role: 'Objeto direto' },
      { piece: 'but it depends on', role: 'Adicionando uma condição/respeito ao tempo do outro' }
    ],
    core_vocabulary: [
      { word: 'schedule', translation: 'agendar', example: "I'd like to schedule a call." },
      { word: 'availability', translation: 'disponibilidade', example: 'Let me know your availability.' },
      { word: 'discuss', translation: 'discutir/conversar sobre', example: "I'd like to discuss the project." },
      { word: 'depends on', translation: 'depende de', example: 'It depends on the weather.' }
    ],
    examples: {
      work: { en: "I'd like to request a couple of days off.", pt: 'Eu gostaria de solicitar uns dois dias de folga.' },
      travel: { en: "I'd like to book a room for two nights.", pt: 'Eu gostaria de reservar um quarto para duas noites.' },
      study: { en: "I'd like to ask a question about the assignment.", pt: 'Eu gostaria de fazer uma pergunta sobre a tarefa.' }
    },
    variations: [
      { form: "Would you like to...?", note: 'Para convidar alguém de forma polida.' },
      { form: "I wouldn't like to", note: 'Forma negativa (raro, prefere-se "I\'d rather not").' },
      { form: "I'd love to", note: 'Resposta entusiasmada ou desejo mais intenso.' }
    ],
    combinations: [
      { phrase: "I'd like to + know", meaning: 'Eu gostaria de saber (Maneira educada de perguntar)' },
      { phrase: "Would you like me to + verbo", meaning: 'Oferecer-se para fazer algo' },
      { phrase: "I'd like to + discuss", meaning: 'Abertura comum de reuniões' }
    ],
    collocations: ["I'd like to know", "I'd like to see", "I'd like to discuss", "would you like to", "I'd love to"],
    common_mistakes: [
      { wrong: 'I like to go now.', right: 'I\'d like to go now.', tip: '"I like to go" significa "Eu gosto de ir" (hábito). Com "I\'d" vira "Eu gostaria de ir" (vontade no momento).' },
      { wrong: 'I want schedule.', right: 'I\'d like to schedule.', tip: 'Além de soar rude, faltaria o "to" depois de want. Mas priorize "I\'d like to".' },
      { wrong: 'It depends of you.', right: 'It depends ON you.', tip: 'A preposição após depend é SEMPRE "on".' }
    ],
    retrieval_context: 'Você quer que o time adote uma nova ferramenta, mas sabe que a decisão não é só sua e depende da aprovação do gerente.',
    retrieval_prompt: 'Expresse seu desejo polido de tentar a nova ferramenta e reconheça a condição.',
    retrieval_reference: "Exemplo: 'I'd like to try the new tool, but it depends on the manager's approval.'",
    drills: [
      { instruction: 'Forme o desejo polido.', input: 'Eu quero falar com ele (polido).', answer: "I'd like to talk to him." },
      { instruction: 'Ofereça algo a alguém.', input: 'Você gostaria de um café?', answer: 'Would you like some coffee?' },
      { instruction: 'Combine com a condição.', input: 'Eu gostaria de ir, mas depende do prazo.', answer: "I'd like to go, but it depends on the deadline." },
      { instruction: 'Revisão (Dia 21): Combine o desejo polido com o pedido polido.', input: 'Eu gostaria de analisar o relatório. Você poderia me enviar?', answer: "I'd like to review the report. Could you send it to me?" },
      { instruction: 'Revisão (Dia 10): Combine desejo com ação controlada.', input: 'Eu gostaria de ver isso. Deixa eu checar.', answer: "I'd like to see that. Let me check." },
      { instruction: 'Destaque a preposição certa.', input: 'Depende de você.', answer: 'It depends on you.' }
    ],
    connects_to: [10, 21],
    review_of: "Exige o emparelhamento de 'I'd like to' com 'Could you' (dia 21) para formar a sequência perfeita de pedido em e-mails corporativos.",
    daily_resources: {
      ted: { title: 'How to save the world (or at least yourself) from bad meetings', url: 'https://www.ted.com/talks/david_grady_how_to_save_the_world_or_at_least_yourself_from_bad_meetings', tip: 'Veja como propostas educadas mudam o tom de reuniões desnecessárias.' },
      podcast: { title: 'ESL Podcast - Business Communication', url: 'https://www.eslpod.com', tip: 'Ouça o uso de "would you like" em ofertas diretas no telefone.' },
      onelook_word: 'schedule',
      anki_card: { front: 'Traduza o convite formal: Você gostaria de vir com a gente?', back: 'Would you like to come with us?' },
      speaking_prompt: "Finja começar uma reunião importante: 'Hello everyone. Today, I'd like to discuss...'"
    }
  },
  {
    id: 26,
    level: 'B1',
    module: 3,
    moduleTitle: 'Modals e Alto Impacto',
    structure: "I'd rather use React, but I feel like it might be overkill.",
    translation: 'Eu preferiria usar React, mas sinto que talvez seja exagero.',
    explanation: '"I\'d rather" (I would rather) é a estrutura suprema para expressar preferências de forma assertiva e educada. Substitui o excessivamente formal "I prefer to". O "overkill" é um bônus vocabular para "exagero tecnológico/solução grande demais".',
    why_it_matters: 'Tomar decisões de tecnologia ou de escopo exige escolher entre caminhos. Dizer "I prefer this" é correto, mas "I\'d rather do this" é idiomático, soa nativo e constrói argumentos muito fortes quando ligado a "might" (riscos).',
    pronunciation: '/aɪd ˈræðər/',
    stress_tip: 'O foco vai para o "rather" e para a alternativa escolhida ("React").',
    pattern: "I'd rather + [verbo base] + (than + [outra opção])",
    breakdown: [
      { piece: "I'd rather", role: 'Expressão idiomática de preferência (Eu prefiro/preferiria)' },
      { piece: 'use React', role: 'Verbo SEM "to" + o objeto da escolha' },
      { piece: 'but I feel like', role: 'Início do contraponto suave' },
      { piece: 'it might be overkill', role: 'Possibilidade (might) de exagero desnecessário' }
    ],
    core_vocabulary: [
      { word: 'rather', translation: 'preferir (junto com would)', example: "I'd rather stay home." },
      { word: 'overkill', translation: 'exagero desnecessário/solução complexa demais', example: 'Using AI for this is overkill.' },
      { word: 'approach', translation: 'abordagem', example: "I'd rather take a different approach." },
      { word: 'than', translation: 'do que (comparação)', example: "I'd rather walk than drive." }
    ],
    examples: {
      work: { en: "I'd rather discuss this over a call than via chat.", pt: 'Eu prefiro discutir isso numa ligação do que pelo chat.' },
      travel: { en: "I'd rather take the train, it's faster.", pt: 'Eu prefiro pegar o trem, é mais rápido.' },
      study: { en: "I'd rather not take the exam today.", pt: 'Eu preferiria não fazer a prova hoje.' }
    },
    variations: [
      { form: "I'd rather not", note: 'A recusa polida perfeita ("Eu prefiro não fazer"). Ex: I\'d rather not say.' },
      { form: "Would you rather...?", note: 'Pergunta para forçar a pessoa a escolher entre opções.' },
      { form: "I prefer doing", note: 'A versão mais tradicional, que leva o verbo em -ing ou com to.' }
    ],
    combinations: [
      { phrase: "I'd rather + not", meaning: 'Recusa educada' },
      { phrase: "would you rather + A or B?", meaning: 'Pergunta de escolha' },
      { phrase: "I'd rather + wait", meaning: 'Escolha de pausar/adiar' }
    ],
    collocations: ["I'd rather not", "would you rather", "I'd rather wait", "I'd rather go", "I'd rather die"],
    common_mistakes: [
      { wrong: 'I\'d rather to go.', right: 'I\'d rather go.', tip: 'Atenção máxima: NUNCA coloque "to" depois de "rather". É direto para o verbo.' },
      { wrong: 'I rather go.', right: 'I\'d rather go.', tip: 'Faltou a contração do "would" (\'d). "I rather" sozinho soa estranho.' },
      { wrong: 'I prefer go.', right: 'I prefer going / I prefer to go.', tip: 'Se for usar prefer, lembre-se do -ing ou do "to". Mas priorize "I\'d rather".' }
    ],
    retrieval_context: 'Um colega sugere usar uma biblioteca gigante para animar um botão, mas você acha que é um exagero desnecessário e prefere usar CSS puro.',
    retrieval_prompt: 'Expresse sua preferência por CSS puro usando "I\'d rather", e justifique que a biblioteca pode ser "overkill".',
    retrieval_reference: "Exemplo: 'I'd rather use CSS, that library might be overkill.'",
    drills: [
      { instruction: 'Forme a preferência no trabalho.', input: 'Eu prefiro usar CSS.', answer: "I'd rather use CSS." },
      { instruction: 'Faça a recusa polida (not).', input: 'Eu prefiro não falar sobre isso.', answer: "I'd rather not talk about it." },
      { instruction: 'Introduza uma comparação com "than".', input: 'Eu prefiro andar do que dirigir.', answer: "I'd rather walk than drive." },
      { instruction: 'Revisão (Dias 9 e 23): Junte a preferência com a intuição e a possibilidade.', input: 'Eu prefiro esperar, porque eu sinto que isso pode dar erro.', answer: "I'd rather wait, because I feel like this might fail." },
      { instruction: 'Faça a pergunta clássica de preferência.', input: 'Você preferiria ficar aqui ou sair?', answer: 'Would you rather stay here or go out?' },
      { instruction: 'Traduza o exagero.', input: 'Isso é exagero (complexo demais).', answer: "That's overkill." }
    ],
    connects_to: [9, 23],
    review_of: "Consolida 'I feel like' (dia 9) e 'might' (dia 23) servindo como contraponto reflexivo à preferência escolhida.",
    daily_resources: {
      ted: { title: 'The paradox of choice', url: 'https://www.ted.com/talks/barry_schwartz_the_paradox_of_choice', tip: 'Escute atentamente as frases de escolhas relativas e preferências.' },
      podcast: { title: 'ESL Podcast - Making Choices', url: 'https://www.eslpod.com', tip: 'Treine o ouvido para notar a ausência de "to" após o rather.' },
      onelook_word: 'rather',
      anki_card: { front: 'Como se diz "Eu prefiro não responder"?', back: "I'd rather not answer." },
      speaking_prompt: "Faça o jogo 'Would you rather' sozinho em voz alta: 'Would I rather work remote or in the office? I'd rather...'"
    }
  },
  {
    id: 27,
    level: 'B1',
    module: 3,
    moduleTitle: 'Modals e Alto Impacto',
    structure: "I'm not sure if this is the right approach, we might need more data.",
    translation: 'Eu não tenho certeza se essa é a abordagem certa, talvez a gente precise de mais dados.',
    explanation: 'Dizer "I don\'t know" em contexto profissional pode passar insegurança total. "I\'m not sure if" demonstra hesitação calculada, que combinada com "might", soa como prudência e pensamento analítico.',
    why_it_matters: 'Descartar uma ideia imediatamente com "No, that\'s wrong" é abrasivo. "I\'m not sure if" levanta uma bandeira de dúvida amigável, convidando a pessoa a repensar sem gerar conflito.',
    pronunciation: '/aɪm nɑt ʃʊr ɪf/',
    stress_tip: 'O foco vai em "sure". O "not" também ganha força se a dúvida for muito grande.',
    pattern: "I'm not sure if + [fato em discussão] + (we might...)",
    breakdown: [
      { piece: "I'm not sure if", role: 'Expressão de hesitação (Não tenho certeza se)' },
      { piece: 'this is the right approach', role: 'O tópico sobre o qual existe dúvida' },
      { piece: 'we might need', role: 'Ação possível baseada na dúvida' },
      { piece: 'more data', role: 'A evidência a buscar' }
    ],
    core_vocabulary: [
      { word: 'sure', translation: 'certo/com certeza', example: 'Are you sure about this?' },
      { word: 'approach', translation: 'abordagem/caminho', example: "That's a good approach." },
      { word: 'data', translation: 'dados (também lido /ˈdætə/)', example: 'We need to analyze the data.' },
      { word: 'figure out', translation: 'descobrir/entender como fazer', example: "Let's figure it out." }
    ],
    examples: {
      work: { en: "I'm not sure if we have the budget for this tool.", pt: 'Não tenho certeza se temos orçamento para esta ferramenta.' },
      travel: { en: "I'm not sure if the train leaves from platform 3.", pt: 'Não tenho certeza se o trem sai da plataforma 3.' },
      study: { en: "I'm not sure if I understood the last part.", pt: 'Não tenho certeza se entendi a última parte.' }
    },
    variations: [
      { form: "Are you sure?", note: 'Pergunta para checar confirmação.' },
      { form: "I'm pretty sure", note: 'Quando você está QUASE certo (Tenho quase certeza).' },
      { form: "I'm not entirely sure", note: 'Para soar extremamente polido ("Não tenho total certeza").' }
    ],
    combinations: [
      { phrase: "I'm not sure if + we should", meaning: 'Duvidar de uma ação sugerida' },
      { phrase: "I'm not sure + how to", meaning: 'Duvidar da própria habilidade/processo' },
      { phrase: "I'm pretty sure + it's", meaning: 'Declaração de alta probabilidade' }
    ],
    collocations: ["I'm not sure if", "are you sure", "I'm pretty sure", "make sure", "not entirely sure"],
    common_mistakes: [
      { wrong: 'I have not sure.', right: 'I\'m not sure.', tip: 'Em inglês não "temos" certeza, nós "estamos" certos (verbo To Be).' },
      { wrong: 'I doubt if.', right: 'I doubt that. / I\'m not sure if.', tip: 'É mais comum e natural usar "I\'m not sure if" do que o verbo literal "doubt".' },
      { wrong: 'I don\'t sure.', right: 'I\'m not sure.', tip: '"Sure" é adjetivo, então deve ser acompanhado do verbo To Be, e não do verbo To Do.' }
    ],
    retrieval_context: 'Um gerente sugere mudar toda a arquitetura de banco de dados hoje. Você acha precipitado e crê que é melhor analisar o sistema primeiro.',
    retrieval_prompt: 'Expresse cautela: diga que não tem certeza se é uma boa ideia, e que vocês deveriam esperar.',
    retrieval_reference: "Exemplo: 'I'm not sure if it's a good idea, we should wait.'",
    drills: [
      { instruction: 'Forme a dúvida polida.', input: 'Eu não sei se nós podemos.', answer: "I'm not sure if we can." },
      { instruction: 'Declare alta certeza com "pretty".', input: 'Eu tenho quase certeza que é amanhã.', answer: "I'm pretty sure it's tomorrow." },
      { instruction: 'Revisão (Dias 22 e 23): Combine dúvida com a modalidade.', input: 'Eu não tenho certeza se nós deveríamos fazer isso. Talvez seja um erro.', answer: "I'm not sure if we should do this. It might be a mistake." },
      { instruction: 'Crie a dúvida sobre o passado (Simple Past - Dia 12).', input: 'Eu não tenho certeza se ele enviou o email.', answer: "I'm not sure if he sent the email." },
      { instruction: 'Adicione "how to".', input: 'Eu não tenho certeza de como consertar isso.', answer: "I'm not sure how to fix this." },
      { instruction: 'Corrija o erro do verbo Ter.', input: 'I have no sure.', answer: "I'm not sure." }
    ],
    connects_to: [12, 22, 23],
    review_of: "Exige o emparelhamento da dúvida ('not sure') com os julgamentos modais de conselho ('should', dia 22) e possibilidade ('might', dia 23) aprendidos anteriormente.",
    daily_resources: {
      ted: { title: 'Thinking, Fast and Slow', url: 'https://www.ted.com/talks/daniel_kahneman_the_riddle_of_experience_vs_memory', tip: 'Observe como profissionais falam de vieses analíticos e hesitações estatísticas.' },
      podcast: { title: 'ESL Podcast - Expressing Doubt', url: 'https://www.eslpod.com', tip: 'Note as sutilezas de "I am not entirely sure".' },
      onelook_word: 'approach',
      anki_card: { front: 'Como se diz "Tenho quase certeza"?', back: "I'm pretty sure." },
      speaking_prompt: "Alguém te perguntou onde estão as chaves, e você não sabe exatamente, mas tem um palpite. Fale: 'I'm not sure, but they might be...'"
    }
  },
  {
    id: 28,
    level: 'B1',
    module: 3,
    moduleTitle: 'Modals e Alto Impacto',
    structure: "It depends on the budget, but I'd like to start next week.",
    translation: 'Isso depende do orçamento, mas eu gostaria de começar na semana que vem.',
    explanation: 'Terminamos o Módulo 3 ancorando decisões em condições práticas. "It depends on" afasta o extremismo "sim/não". Combinado com a intenção "I\'d like to" (eu gostaria), a frase delimita regras amigáveis de avanço de projeto.',
    why_it_matters: 'Respostas prontas não sobrevivem no mundo tech/corporativo real. A resposta mais honesta de engenheiros ou gestores frente a um planejamento é "It depends". É essencial dominar essa preposição que os brasileiros erram muito ("depends of").',
    pronunciation: '/ɪt dɪˈpɛndz ɑn/',
    stress_tip: 'O stress sobe em "pends" e conecta o "s" diretamente na vogal do "on" (di-PEN-zon).',
    pattern: 'It depends on + [fator externo] + (but + [intenção])',
    breakdown: [
      { piece: 'It depends', role: 'A cláusula principal condicionante' },
      { piece: 'on the budget', role: 'A preposição obrigatória "on" + o fator da condição' },
      { piece: 'but', role: 'Conjunção estabelecendo a meta caso a condição se cumpra' },
      { piece: "I'd like to start next week", role: 'O desejo polido (I would like to)' }
    ],
    core_vocabulary: [
      { word: 'depend on', translation: 'depender de', example: 'Everything depends on this decision.' },
      { word: 'budget', translation: 'orçamento', example: "We don't have the budget for it." },
      { word: 'timeline', translation: 'cronograma', example: 'What is the timeline?' },
      { word: 'next week', translation: 'semana que vem', example: 'Let\'s schedule it for next week.' }
    ],
    examples: {
      work: { en: "It depends on the client's feedback, but we might finish by Friday.", pt: 'Depende do feedback do cliente, mas talvez terminemos na sexta.' },
      travel: { en: "It depends on the weather, but we'd like to go to the beach.", pt: 'Depende do clima, mas gostaríamos de ir para a praia.' },
      study: { en: "It depends on the teacher, some exams are really hard.", pt: 'Depende do professor, algumas provas são bem difíceis.' }
    },
    variations: [
      { form: "That depends", note: 'Pode ser dito isoladamente como resposta curta ("Isso depende").' },
      { form: "Depending on", note: 'Forma gerúndia para iniciar cláusulas (Depending on the budget, we will...).' },
      { form: "It doesn't depend on me", note: 'Para retirar de si o poder de decisão.' }
    ],
    combinations: [
      { phrase: "It depends on + what / how / when", meaning: 'Depende do quê/como/quando (Ex: It depends on how much time we have)' },
      { phrase: "It depends on + the situation", meaning: 'Depende da situação' },
      { phrase: "Well, it depends", meaning: 'O clássico preenchedor de pausa analítica' }
    ],
    collocations: ['it depends on', 'depending on', 'that depends', 'budget', 'timeline'],
    common_mistakes: [
      { wrong: 'It depends of the context.', right: 'It depends ON the context.', tip: 'A preposição atrelada a "depend" em inglês é 100% das vezes "on", nunca "of".' },
      { wrong: 'Depend on the client.', right: 'IT depends on the client.', tip: 'Sempre forneça o sujeito oculto "It" na frente para sentenças completas em inglês.' },
      { wrong: 'It depends of how.', right: 'It depends on how.', tip: 'Mesmo quando atrelado a "how/what", use "on".' }
    ],
    retrieval_context: 'O CEO pergunta se a equipe consegue dobrar a meta de vendas para o trimestre. Você não quer dizer um "não", mas também sabe que depende da quantidade de marketing envolvida.',
    retrieval_prompt: 'Comece respondendo de forma madura que "isso depende" do investimento, e emende com uma dúvida: "Não tenho certeza se vamos conseguir".',
    retrieval_reference: "Exemplo: 'It depends on the budget, I'm not sure if we can do it.'",
    drills: [
      { instruction: 'Formule a base e reforce a preposição.', input: 'Isso depende do projeto.', answer: 'It depends on the project.' },
      { instruction: 'Construa a resposta condicional (Dia 25).', input: 'Depende do preço, mas eu gostaria de comprar.', answer: "It depends on the price, but I'd like to buy it." },
      { instruction: 'Revisão (Dia 23): Use "might" para um desfecho de possibilidade.', input: 'Depende do trânsito, mas eu talvez me atrase.', answer: 'It depends on the traffic, but I might be late.' },
      { instruction: 'Revisão (Dia 27): Agrupe com hesitação total.', input: 'Bem, isso depende. Eu não tenho certeza se nós deveríamos.', answer: "Well, it depends. I'm not sure if we should." },
      { instruction: 'Introduza as question words.', input: 'Depende de quanto custa.', answer: 'It depends on how much it costs.' },
      { instruction: 'Negativa para si mesmo.', input: 'A decisão não depende de mim.', answer: "The decision doesn't depend on me." }
    ],
    connects_to: [23, 25, 27],
    review_of: "Exige a fusão do condicionamento ('depends') com o desejo de agir ('I'd like to', dia 25), a possibilidade ('might', dia 23) e a incerteza ('not sure', dia 27). É o ápice da diplomacia corporativa B1.",
    daily_resources: {
      ted: { title: 'How to disagree productively', url: 'https://www.ted.com/talks/julia_dhar_how_to_disagree_productively_and_find_common_ground', tip: 'Preste atenção em como as opiniões são condicionadas a fatores externos.' },
      podcast: { title: 'ESL Podcast - Making Conditions', url: 'https://www.eslpod.com', tip: 'Treine a fusão sonora "di-pen-zon".' },
      onelook_word: 'depends',
      anki_card: { front: 'Traduza o erro comum: Isso depende *do* clima.', back: 'It depends ON the weather.' },
      speaking_prompt: "Alguém pergunta se você vai sair hoje à noite. Responda condicionando a algo: 'Well, it depends on... If I have energy, I might...'"
    }
  }
]

export const BATCH_22_28_SUMMARY = {
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
