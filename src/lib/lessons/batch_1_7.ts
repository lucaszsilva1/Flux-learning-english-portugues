import type { Lesson } from '../types'

export const lessons: Lesson[] = [
  // ─── DIA 1 ────────────────────────────────────────────────────────────────
  {
    id: 1,
    level: 'A1',
    module: 1,
    moduleTitle: 'Present Structures',
    structure: "I'm working on it right now",
    translation: 'Estou trabalhando nisso agora',
    explanation: 'Use o Present Continuous para falar sobre ações que estão acontecendo neste exato momento ou neste período atual. É formado com am/is/are + verbo-ing.',
    why_it_matters: 'Esta é a estrutura #1 para descrever o que você está fazendo agora em qualquer conversa. Dominar o -ing é fundamental para soar natural em inglês.',
    pronunciation: "I'm /aɪm/ — uma sílaba, nunca 'I am' em fala casual",
    stress_tip: "Estresse o verbo principal: I'm WOR-king, I'm LEAR-ning — o '-ing' nunca recebe stress",
    pattern: '[Sujeito] + am/is/are + [verbo-ing]',
    breakdown: [
      { piece: "I'm", role: 'Sujeito + am (contraído)' },
      { piece: 'working', role: 'Verbo principal + -ing (ação em progresso)' },
      { piece: 'on it', role: 'Sintagma preposicional (objeto)' },
      { piece: 'right now', role: 'Marcador temporal (momento presente)' }
    ],
    core_vocabulary: [
      { word: 'working on', translation: 'trabalhando em', example: "I'm working on a new project." },
      { word: 'trying to', translation: 'tentando', example: "I'm trying to finish this today." },
      { word: 'looking for', translation: 'procurando', example: "I'm looking for a better solution." },
      { word: 'making progress', translation: 'fazendo progresso', example: "We're making progress every day." }
    ],
    examples: {
      work:   { en: "I'm working on the quarterly report right now.", pt: 'Estou trabalhando no relatório trimestral agora.' },
      travel: { en: "I'm traveling to Lisbon next week for a conference.", pt: 'Estou viajando para Lisboa na semana que vem para uma conferência.' },
      study:  { en: "I'm studying English every day this month.", pt: 'Estou estudando inglês todo dia este mês.' }
    },
    variations: [
      { form: "I'm not [verbo]-ing", note: "Negativa — 'I'm not working today.'" },
      { form: 'Are you [verbo]-ing?', note: "Pergunta — 'Are you working from home?'" },
      { form: "She's / He's [verbo]-ing", note: "Terceira pessoa — 'She's presenting at 3pm.'" }
    ],
    combinations: [
      { phrase: "I'm working on + [noun]", meaning: 'fazendo progresso ativo em algo' },
      { phrase: "I'm trying to + [infinitivo]", meaning: 'fazendo esforço para fazer algo' },
      { phrase: "I'm planning to + [infinitivo]", meaning: 'tenho intenção / está planejado' }
    ],
    collocations: ['working remotely', 'running late', 'getting better', 'trying harder', 'making progress'],
    common_mistakes: [
      { wrong: 'I working on it', right: "I'm working on it", tip: "Nunca omita o 'am/is/are' — o auxiliar é obrigatório" },
      { wrong: 'I am agree', right: 'I agree', tip: 'Verbos estativos (agree, know, want, love) não usam -ing' },
      { wrong: "I'm working since 9am", right: "I've been working since 9am", tip: 'Para duração, use o present perfect continuous — dia 3 cobre isso' }
    ],
    retrieval_context: 'Você está em uma videochamada e seu colega pergunta o que você está fazendo.',
    retrieval_prompt: "Descreva 3 coisas que você está fazendo atualmente — uma no trabalho/estudo, uma pessoal, uma meta. Use 'I'm [verbo]-ing' em cada uma.",
    retrieval_reference: "Exemplo: 'I'm working on a presentation for Friday. I'm reading a book about habits. I'm trying to improve my English every day.'",
    drills: [
      { instruction: 'Complete no Present Continuous', input: 'She ___ (prepare) for the meeting.', answer: 'She is preparing for the meeting.' },
      { instruction: 'Transforme na negativa', input: 'He is working today.', answer: "He isn't working today." },
      { instruction: 'Forme uma pergunta', input: 'You are learning Spanish.', answer: 'Are you learning Spanish?' },
      { instruction: 'Escolha a forma correta (know = verbo estativo)', input: 'I ___ (know) the answer.', answer: "I know the answer. (NÃO: I'm knowing)" }
    ],
    connects_to: [3],
    review_of: '',
    daily_resources: {
      ted: {
        title: 'How language shapes the way we think',
        url: 'https://www.ted.com/talks/lera_boroditsky_how_language_shapes_the_way_we_think',
        tip: 'Observe como a palestrante usa present continuous para descrever pesquisas em andamento.'
      },
      podcast: {
        title: 'ESL Pod — Daily English',
        url: 'https://www.eslpod.com',
        tip: "Ouça e conte quantas vezes ouve 'I'm doing...' e 'I'm going...'."
      },
      onelook_word: 'progress',
      anki_card: {
        front: "Como dizer 'Estou trabalhando nisso agora'?",
        back: "I'm working on it right now. (Sujeito + am/is/are + verbo-ing)"
      },
      speaking_prompt: "Descreva sua rotina de hoje usando 'I'm [verbo]-ing' para pelo menos 5 ações diferentes.",
      game: { label: 'Present Continuous Quiz', url: 'https://www.englishclub.com/grammar/verbs-continuous_present.htm' }
    }
  },

  // ─── DIA 2 ────────────────────────────────────────────────────────────────
  {
    id: 2,
    level: 'A2',
    module: 1,
    moduleTitle: 'Present Structures',
    structure: "I've finished the report",
    translation: 'Terminei o relatório / Eu já terminei o relatório',
    explanation: 'O Present Perfect conecta o passado ao presente — use quando o resultado de uma ação passada importa agora. Formado com have/has + particípio passado.',
    why_it_matters: "Brasileiros frequentemente dizem 'I finished' onde falantes nativos dizem 'I've finished' — esta estrutura sinaliza relevância para o momento presente e soa muito mais natural.",
    pronunciation: "I've /aɪv/ — uma sílaba. Have → /həv/ ou /əv/ em fala casual",
    stress_tip: "Estresse o verbo principal: I've FI-nished, I've SEEn, I've DONE — 'have' é quase inaudível na conversa",
    pattern: '[Sujeito] + have/has + [particípio passado]',
    breakdown: [
      { piece: "I've", role: 'Sujeito + have (contraído)' },
      { piece: 'finished', role: 'Particípio passado (ação completa)' },
      { piece: 'the report', role: 'Objeto (resultado que existe agora)' }
    ],
    core_vocabulary: [
      { word: 'already', translation: 'já', example: "I've already sent the email." },
      { word: 'just', translation: 'acabei de', example: "I've just arrived." },
      { word: 'never', translation: 'nunca', example: "I've never been to Japan." },
      { word: 'ever', translation: 'já (em perguntas)', example: 'Have you ever tried sushi?' },
      { word: 'yet', translation: 'ainda (negativa/pergunta)', example: "I haven't finished yet." }
    ],
    examples: {
      work:   { en: "I've already sent the proposal to the client.", pt: 'Já enviei a proposta para o cliente.' },
      travel: { en: "I've visited 12 countries so far.", pt: 'Já visitei 12 países até agora.' },
      study:  { en: "I've learned 500 new words this year.", pt: 'Aprendi 500 palavras novas este ano.' }
    },
    variations: [
      { form: "I haven't + [pp]", note: "Negativa — 'I haven't finished yet.'" },
      { form: 'Have you + [pp]?', note: "Pergunta — 'Have you seen this movie?'" },
      { form: "She has / She's + [pp]", note: "Terceira pessoa — 'She's already left.'" }
    ],
    combinations: [
      { phrase: "I've just + [pp]", meaning: 'concluído muito recentemente' },
      { phrase: "I've already + [pp]", meaning: 'antes do esperado ou antes do agora' },
      { phrase: "I haven't + [pp] + yet", meaning: 'não completado, mas esperado' }
    ],
    collocations: ['have seen', 'have done', 'have been', 'have made progress', 'have finished'],
    common_mistakes: [
      { wrong: 'I have went there', right: 'I have gone / been there', tip: "'Went' é simple past — sempre use o particípio passado depois de have" },
      { wrong: "I've finished it yesterday", right: 'I finished it yesterday', tip: 'Com tempo passado específico (yesterday, last week) use simple past, não Present Perfect' },
      { wrong: 'Did you ever try?', right: 'Have you ever tried?', tip: "'Ever' para experiências de vida vai com Present Perfect, não past simple" }
    ],
    retrieval_context: 'Você está se atualizando com um amigo que não vê há algum tempo.',
    retrieval_prompt: "Conte 3 coisas que você fez recentemente (experiências, mudanças, conquistas). Use 'I've [pp]' para cada uma.",
    retrieval_reference: "Exemplo: 'I've started a new job. I've been traveling a lot lately. I've learned so much this year.'",
    drills: [
      { instruction: 'Complete com Present Perfect', input: '___ you ever ___ (eat) sushi?', answer: 'Have you ever eaten sushi?' },
      { instruction: 'Transforme na negativa', input: 'I have finished the homework.', answer: "I haven't finished the homework yet." },
      { instruction: 'Corrija o erro', input: 'She has went to Paris last year.', answer: 'She went to Paris last year. (tempo passado específico = simple past)' },
      { instruction: "Complete com 'just'", input: 'I ___ just ___ (arrive).', answer: "I've just arrived." }
    ],
    connects_to: [3],
    review_of: '',
    daily_resources: {
      ted: {
        title: 'How to speak so that people want to listen',
        url: 'https://www.ted.com/talks/julian_treasure_how_to_speak_so_that_people_want_to_listen',
        tip: "Conte quantas vezes o palestrante usa 'I've' e 'I have' para construir sobre experiências."
      },
      podcast: {
        title: 'ESL Pod — Present Perfect',
        url: 'https://www.eslpod.com',
        tip: "Foque no contraste entre 'I did' e 'I've done'."
      },
      onelook_word: 'experience',
      anki_card: {
        front: 'Como expressar uma conquista recente em inglês?',
        back: "I've [particípio passado] — ex: I've finally finished the project!"
      },
      speaking_prompt: "Fale por 2 minutos sobre 3 experiências que você já teve na vida usando 'I've [pp]'.",
      game: { label: 'Present Perfect Quiz', url: 'https://www.englishclub.com/grammar/verbs-tenses_present-perfect.htm' }
    }
  },

  // ─── DIA 3 ────────────────────────────────────────────────────────────────
  {
    id: 3,
    level: 'A2',
    module: 1,
    moduleTitle: 'Present Structures',
    structure: "I've been learning English for years",
    translation: 'Estou aprendendo inglês há anos',
    explanation: 'O Present Perfect Continuous enfatiza a duração e continuidade de uma ação que começou no passado e ainda continua. Formado com have/has + been + verbo-ing.',
    why_it_matters: "Em português dizemos 'Estou fazendo isso há X tempo' com o presente simples. Em inglês, esta estrutura expressa exatamente esse significado — muito usada em conversas sobre progresso e rotina.",
    pronunciation: "I've been /aɪv bɪn/ — fluido, sem pausa. 'Been' é /bɪn/, não /biːn/ em fala casual",
    stress_tip: "Estresse o verbo no -ing: I've been LEAR-ning, I've been WOR-king — 'been' é quase átono",
    pattern: '[Sujeito] + have/has + been + [verbo-ing]',
    breakdown: [
      { piece: "I've been", role: 'Sujeito + have + been (auxiliares)' },
      { piece: 'learning', role: 'Verbo principal + -ing (ação contínua)' },
      { piece: 'English', role: 'Objeto' },
      { piece: 'for years', role: 'Duração (for = período, since = ponto inicial)' }
    ],
    core_vocabulary: [
      { word: 'for', translation: 'há / por (duração)', example: "I've been studying for two hours." },
      { word: 'since', translation: 'desde (ponto no tempo)', example: "I've been working here since 2020." },
      { word: 'lately', translation: 'ultimamente', example: "I've been feeling great lately." },
      { word: 'recently', translation: 'recentemente', example: "I've been reading a lot recently." }
    ],
    examples: {
      work:   { en: "I've been working on this feature for three days.", pt: 'Estou trabalhando nesta funcionalidade há três dias.' },
      travel: { en: "I've been planning this trip since January.", pt: 'Estou planejando esta viagem desde janeiro.' },
      study:  { en: "I've been practicing English for six months and I can feel the improvement.", pt: 'Estou praticando inglês há seis meses e consigo sentir o progresso.' }
    },
    variations: [
      { form: "I haven't been + [verbo]-ing", note: "Negativa — 'I haven't been sleeping well.'" },
      { form: 'Have you been + [verbo]-ing?', note: "Pergunta — 'Have you been waiting long?'" },
      { form: "She has been / She's been + [verbo]-ing", note: "Terceira pessoa — 'She's been working overtime.'" }
    ],
    combinations: [
      { phrase: "I've been trying to + [infinitivo]", meaning: 'esforço contínuo ainda em andamento' },
      { phrase: "I've been thinking about + [noun/-ing]", meaning: 'consideração ativa ao longo do tempo' },
      { phrase: "I've been meaning to + [infinitivo]", meaning: 'intenção postergada' }
    ],
    collocations: ['been working on', 'been thinking about', 'been trying to', 'been waiting for', 'been meaning to'],
    common_mistakes: [
      { wrong: "I've been work here for 5 years", right: "I've been working here for 5 years", tip: "Sempre use verbo-ing depois de 'been'" },
      { wrong: "I'm working here since 2020", right: "I've been working here since 2020", tip: "Com 'since/for' para duração contínua, use Present Perfect Continuous, não Present Simple" },
      { wrong: "I've been knowing him for years", right: "I've known him for years", tip: 'Verbos estativos (know, love, want) não usam a forma contínua' }
    ],
    retrieval_context: 'Você está em uma entrevista de emprego e o entrevistador pergunta sobre sua experiência recente.',
    retrieval_prompt: "Descreva 2 coisas que você tem feito continuamente: uma de estudo/trabalho, outra pessoal. Use 'I've been [verbo]-ing + for/since'.",
    retrieval_reference: "Exemplo: 'I've been studying English for six months. I've been working on my communication skills since I started this course.'",
    drills: [
      { instruction: 'Complete com Present Perfect Continuous', input: 'She ___ (study) all day. She looks tired.', answer: "She's been studying all day." },
      { instruction: "Use 'for' ou 'since'?", input: "I've been waiting ___ 3 o'clock / ___ two hours.", answer: "since 3 o'clock / for two hours" },
      { instruction: 'Corrija o erro (verbo estativo)', input: "I've been knowing this song for years.", answer: "I've known this song for years. (know é estativo)" },
      { instruction: 'Transforme para indicar duração', input: 'I started learning guitar in 2022. I still play.', answer: "I've been learning guitar since 2022." }
    ],
    connects_to: [1, 2],
    review_of: 'Conecta dia 1 (present continuous) + dia 2 (present perfect)',
    daily_resources: {
      ted: {
        title: 'The first 20 hours — how to learn anything',
        url: 'https://www.ted.com/talks/josh_kaufman_the_first_20_hours_how_to_learn_anything',
        tip: "Observe como o palestrante usa 'I've been' para descrever jornadas de aprendizado contínuo."
      },
      podcast: {
        title: 'ESL Pod — Talking About Duration',
        url: 'https://www.eslpod.com',
        tip: "Foque na diferença entre 'I did' (simples), 'I've done' (perfect) e 'I've been doing' (continuous)."
      },
      onelook_word: 'persistence',
      anki_card: {
        front: "Como dizer 'Estou estudando inglês há 6 meses'?",
        back: "I've been studying English for 6 months. (have/has + been + verbo-ing + for/since)"
      },
      speaking_prompt: "Descreva sua jornada de aprendizado de inglês: quando começou, o que tem feito, o que tem melhorado. Use 'I've been [verbo]-ing' pelo menos 4 vezes.",
      game: { label: 'Perfect vs. Continuous Quiz', url: 'https://www.englishclub.com/grammar/verbs-tenses.htm' }
    }
  },

  // ─── DIA 4 ────────────────────────────────────────────────────────────────
  {
    id: 4,
    level: 'A2',
    module: 1,
    moduleTitle: 'Present Structures',
    structure: "I'm going to start a new project next week",
    translation: 'Vou começar um novo projeto na semana que vem',
    explanation: "Use 'going to' para planos já decididos e previsões baseadas em evidências presentes. Diferente de 'will', expressa intenção pré-existente — a decisão já foi tomada antes da fala.",
    why_it_matters: "'Going to' é a forma mais comum de falar sobre o futuro em inglês informal. Brasileiros frequentemente usam 'will' onde nativos usam 'going to' — dominar essa diferença muda completamente a naturalidade.",
    pronunciation: "Em fala casual: 'going to' → 'gonna' /ˈɡɒnə/. Formal: /ˈɡoʊɪŋ tuː/",
    stress_tip: "Estresse o verbo principal: I'm gonna START, I'm gonna LEARN. 'Gonna' é sempre átono",
    pattern: '[Sujeito] + am/is/are + going to + [infinitivo]',
    breakdown: [
      { piece: "I'm", role: 'Sujeito + am (contraído)' },
      { piece: 'going to', role: 'Marcador de futuro (plano pré-existente)' },
      { piece: 'start', role: 'Verbo principal (infinitivo, sem to)' },
      { piece: 'a new project', role: 'Objeto' },
      { piece: 'next week', role: 'Marcador temporal (futuro)' }
    ],
    core_vocabulary: [
      { word: 'plan to', translation: 'planejo / tenho planos de', example: "I plan to finish this by tomorrow." },
      { word: 'looking forward to', translation: 'ansioso para / aguardando', example: "I'm looking forward to the meeting." },
      { word: 'about to', translation: 'prestes a (imediatamente)', example: "I'm about to send the email." },
      { word: 'intend to', translation: 'pretendo', example: "I intend to improve my results this quarter." }
    ],
    examples: {
      work:   { en: "I'm going to present the results at the board meeting tomorrow.", pt: 'Vou apresentar os resultados na reunião do conselho amanhã.' },
      travel: { en: "I'm going to visit Portugal this summer — I've already booked the flight.", pt: 'Vou visitar Portugal neste verão — já reservei o voo.' },
      study:  { en: "I'm going to practice English for 30 minutes every morning starting today.", pt: 'Vou praticar inglês por 30 minutos toda manhã a partir de hoje.' }
    },
    variations: [
      { form: "I'm not going to + [inf]", note: "Negativa — 'I'm not going to give up.'" },
      { form: 'Are you going to + [inf]?', note: "Pergunta — 'Are you going to apply for the job?'" },
      { form: "She/He is going to + [inf]", note: "Terceira pessoa — 'She's going to lead the project.'" }
    ],
    combinations: [
      { phrase: "I'm going to try to + [inf]", meaning: 'esforço planejado' },
      { phrase: "I'm going to need + [noun/inf]", meaning: 'necessidade futura prevista' },
      { phrase: "It's going to be + [adj]", meaning: 'previsão baseada em evidência' }
    ],
    collocations: ['going to be', 'going to have to', 'going to need', 'going to try', 'going to happen'],
    common_mistakes: [
      { wrong: "I will present tomorrow, I already planned it", right: "I'm going to present tomorrow", tip: "Use 'going to' para planos já decididos. 'Will' é para decisões espontâneas no momento da fala" },
      { wrong: "I'm going study tomorrow", right: "I'm going to study tomorrow", tip: "Nunca omita o 'to' — 'going study' não existe" },
      { wrong: "I'm going to go to there", right: "I'm going to go there", tip: "'There' não leva preposição 'to' antes dele" }
    ],
    retrieval_context: 'Você está planejando a semana com um colega em uma segunda-feira.',
    retrieval_prompt: "Descreva 3 planos concretos que você tem para os próximos dias. Use 'I'm going to [verbo]' para cada um, adicionando quando ou como.",
    retrieval_reference: "Exemplo: 'I'm going to review my notes tonight before the class. I'm going to send that proposal by Wednesday. I'm going to start waking up earlier this week.'",
    drills: [
      { instruction: "Complete no futuro com 'going to'", input: 'She ___ (present) at the conference next month.', answer: "She's going to present at the conference next month." },
      { instruction: 'Transforme na negativa', input: "I'm going to cancel the subscription.", answer: "I'm not going to cancel the subscription." },
      { instruction: 'Corrija o erro', input: "I'm going study all weekend.", answer: "I'm going to study all weekend. (não esqueça o 'to')" },
      { instruction: "'going to' ou 'will'? (decisão espontânea)", input: 'Your friend asks for help. You decide right now to help.', answer: "I'll help you! (decisão espontânea usa 'will', não 'going to')" }
    ],
    connects_to: [1, 5],
    review_of: '',
    daily_resources: {
      ted: {
        title: 'The puzzle of motivation',
        url: 'https://www.ted.com/talks/dan_pink_the_puzzle_of_motivation',
        tip: "Observe como o palestrante usa 'going to' para antecipar seus próximos pontos e estruturar o discurso."
      },
      podcast: {
        title: 'ESL Pod — Making Plans',
        url: 'https://www.eslpod.com',
        tip: "Foque na diferença entre 'I'm going to...' (plano) e 'I'll...' (espontâneo) nos diálogos."
      },
      onelook_word: 'intention',
      anki_card: {
        front: 'Como falar de um plano já decidido em inglês?',
        back: "I'm going to [infinitivo] — ex: I'm going to start a new project next week."
      },
      speaking_prompt: "Fale sobre seus 3 maiores planos para os próximos 30 dias. Use 'I'm going to...' para cada um e explique por que cada plano é importante.",
      game: { label: 'Future Plans Quiz', url: 'https://www.englishclub.com/grammar/verbs-tenses_future-going-to.htm' }
    }
  },

  // ─── DIA 5 ────────────────────────────────────────────────────────────────
  {
    id: 5,
    level: 'A1',
    module: 1,
    moduleTitle: 'Present Structures',
    structure: "I want to improve my communication skills",
    translation: 'Quero melhorar minhas habilidades de comunicação',
    explanation: "'Want to' expressa desejo e intenção pessoal. É uma das estruturas mais usadas para falar sobre metas, aspirações e o que você busca em situações reais.",
    why_it_matters: "'Want to' é onipresente em inglês conversacional e profissional. Combinado com 'going to' (dia 4) e 'need to' (dia 6), você cobre o espectro completo de intenção: desejo → plano → obrigação.",
    pronunciation: "'Want to' → 'wanna' /ˈwɒnə/ em fala casual. 'Wanna' é informal — evite em contextos formais escritos.",
    stress_tip: "Em fala formal: 'I WANT to go'. Em casual: 'I wanna GO'. O stress muda o tom, não o significado.",
    pattern: '[Sujeito] + want/wants + to + [infinitivo]',
    breakdown: [
      { piece: 'I', role: 'Sujeito' },
      { piece: 'want to', role: 'Verbo + to (desejo + intenção)' },
      { piece: 'improve', role: 'Verbo principal (ação desejada)' },
      { piece: 'my communication skills', role: 'Objeto (o que se quer melhorar)' }
    ],
    core_vocabulary: [
      { word: "I'd like to", translation: 'gostaria de (mais formal)', example: "I'd like to schedule a meeting." },
      { word: 'hope to', translation: 'espero / tenho esperança de', example: "I hope to finish this project soon." },
      { word: 'wish I could', translation: 'queria poder (irrealidade)', example: "I wish I could travel more." },
      { word: 'aim to', translation: 'pretendo / meu objetivo é', example: "I aim to become fluent in English." }
    ],
    examples: {
      work:   { en: "I want to develop my leadership skills this year.", pt: 'Quero desenvolver minhas habilidades de liderança este ano.' },
      travel: { en: "I want to explore Southeast Asia before I turn 35.", pt: 'Quero explorar o Sudeste Asiático antes de fazer 35 anos.' },
      study:  { en: "I want to be able to have real conversations in English without hesitating.", pt: 'Quero ser capaz de ter conversas reais em inglês sem hesitar.' }
    },
    variations: [
      { form: "I don't want to + [inf]", note: "Negativa — 'I don't want to rush this decision.'" },
      { form: 'Do you want to + [inf]?', note: "Pergunta — 'Do you want to join us for lunch?'" },
      { form: "She/He wants to + [inf]", note: "Terceira pessoa — 'He wants to apply for the position.'" }
    ],
    combinations: [
      { phrase: "I want to be able to + [inf]", meaning: 'desejo de desenvolver uma capacidade' },
      { phrase: "I want to make sure + [clause]", meaning: 'querer garantir algo' },
      { phrase: "I really want to + [inf]", meaning: 'ênfase no desejo — urgência maior' }
    ],
    collocations: ['want to know', 'want to make', 'want to be', 'want to feel', 'want to try'],
    common_mistakes: [
      { wrong: 'I want go home', right: 'I want to go home', tip: "Depois de 'want', sempre use 'to' antes do verbo — é obrigatório" },
      { wrong: 'I wanting to learn', right: 'I want to learn', tip: "'Want' é verbo estativo — nunca use -ing. 'I'm wanting' não existe" },
      { wrong: 'She want to come', right: 'She wants to come', tip: "Terceira pessoa do singular: 'wants', não 'want'" }
    ],
    retrieval_context: 'Você está numa conversa sobre metas de desenvolvimento pessoal e profissional.',
    retrieval_prompt: "Descreva 3 coisas que você genuinamente quer alcançar: uma profissional, uma pessoal, uma sobre inglês. Use 'I want to + [verbo]' e explique brevemente o porquê.",
    retrieval_reference: "Exemplo: 'I want to give better presentations at work — I get nervous and want to feel more confident. I want to read more books this year. I want to have a full conversation in English without switching to Portuguese.'",
    drills: [
      { instruction: "Complete com 'want to'", input: 'He ___ (learn) to code in Python.', answer: 'He wants to learn to code in Python.' },
      { instruction: 'Corrija o erro', input: 'I want go to the gym tomorrow.', answer: "I want to go to the gym tomorrow. (precisa do 'to')" },
      { instruction: 'Transforme na negativa', input: 'I want to miss the deadline.', answer: "I don't want to miss the deadline." },
      { instruction: 'Forme uma pergunta', input: 'You want to try the new restaurant.', answer: 'Do you want to try the new restaurant?' }
    ],
    connects_to: [4, 6],
    review_of: '',
    daily_resources: {
      ted: {
        title: 'How to find work you love',
        url: 'https://www.ted.com/talks/scott_dinsmore_how_to_find_work_you_love',
        tip: "Preste atenção como o palestrante expressa desejos e aspirações — quantas vezes ouve 'want to' e 'want + noun'?"
      },
      podcast: {
        title: 'ESL Pod — Goals and Desires',
        url: 'https://www.eslpod.com',
        tip: "Observe a diferença entre 'want to' (desejo imediato) e 'hope to' (aspiração mais distante)."
      },
      onelook_word: 'aspiration',
      anki_card: {
        front: 'Como expressar um desejo ou meta em inglês?',
        back: "I want to [infinitivo] — ex: I want to improve my communication skills."
      },
      speaking_prompt: "Fale por 2 minutos sobre o que você mais quer realizar nos próximos 12 meses. Use 'I want to' pelo menos 5 vezes e conecte com 'because' para explicar o motivo.",
      game: { label: 'Want / Need / Would Like Quiz', url: 'https://www.englishclub.com/grammar/verbs-modal_would-like.htm' }
    }
  },

  // ─── DIA 6 ────────────────────────────────────────────────────────────────
  {
    id: 6,
    level: 'A2',
    module: 1,
    moduleTitle: 'Present Structures',
    structure: "I need to finish this report by Friday",
    translation: 'Preciso terminar este relatório até sexta',
    explanation: "'Need to' expressa necessidade ou obrigação. Pode vir de pressão externa (prazo, regra) ou interna (responsabilidade). É mais suave que 'must' e mais urgente que 'should'.",
    why_it_matters: "Em ambientes de trabalho e estudo, 'need to' é onipresente. Com o trio 'want to' (desejo) → 'going to' (plano) → 'need to' (obrigação), você cobre toda a gama de intenção em inglês.",
    pronunciation: "'Need to' → 'needa' /ˈniːdə/ em fala rápida. 'I need to go' → 'I needa go'",
    stress_tip: "Estresse o verbo principal: I NEED to FINISH, I need to TALK to you. 'Need' também pode ser estressado para ênfase emocional.",
    pattern: '[Sujeito] + need/needs + to + [infinitivo]',
    breakdown: [
      { piece: 'I', role: 'Sujeito' },
      { piece: 'need to', role: 'Verbo (necessidade/obrigação)' },
      { piece: 'finish', role: 'Verbo principal (ação necessária)' },
      { piece: 'this report', role: 'Objeto' },
      { piece: 'by Friday', role: 'Prazo (by + data = deadline)' }
    ],
    core_vocabulary: [
      { word: 'by [date]', translation: 'até [data] (prazo)', example: "I need to submit this by Monday." },
      { word: 'as soon as possible', translation: 'o mais rápido possível (ASAP)', example: "I need to respond ASAP." },
      { word: 'urgently', translation: 'urgentemente', example: "I need to fix this urgently." },
      { word: 'right away', translation: 'imediatamente', example: "I need to call her right away." }
    ],
    examples: {
      work:   { en: "I need to review the contract before we sign anything.", pt: 'Preciso revisar o contrato antes de assinarmos qualquer coisa.' },
      travel: { en: "I need to renew my passport — it expires in two months.", pt: 'Preciso renovar meu passaporte — ele vence em dois meses.' },
      study:  { en: "I need to practice speaking more — reading alone isn't enough.", pt: 'Preciso praticar mais a fala — só leitura não é suficiente.' }
    },
    variations: [
      { form: "I don't need to + [inf]", note: "Negativa — 'You don't need to explain.'" },
      { form: 'Do you need to + [inf]?', note: "Pergunta — 'Do you need to leave early today?'" },
      { form: "She/He needs to + [inf]", note: "Terceira pessoa — 'He needs to call the client back.'" }
    ],
    combinations: [
      { phrase: "I need to make sure + [clause]", meaning: 'necessidade de confirmar/garantir algo' },
      { phrase: "I need to talk to + [person] about + [topic]", meaning: 'necessidade de uma conversa específica' },
      { phrase: "I need to + [inf] before + [clause/time]", meaning: 'necessidade com prazo implícito' }
    ],
    collocations: ['need to know', 'need to be', 'need to get', 'need to check', 'need to make sure'],
    common_mistakes: [
      { wrong: 'I need finish this today', right: 'I need to finish this today', tip: "Assim como 'want', 'need' sempre pede 'to' antes do próximo verbo" },
      { wrong: 'I must to go', right: 'I must go / I need to go', tip: "'Must' nunca usa 'to'. 'Need to' sempre usa 'to'. Não misture os dois" },
      { wrong: "I'm needing to study", right: 'I need to study', tip: "'Need' é estativo na maioria dos contextos — evite a forma -ing" }
    ],
    retrieval_context: 'Você está no final da semana de trabalho pensando no que ainda precisa fazer.',
    retrieval_prompt: "Liste 3 coisas que você genuinamente precisa fazer esta semana. Use 'I need to [verbo]' e adicione um prazo ou motivo para cada uma.",
    retrieval_reference: "Exemplo: 'I need to send my weekly report by end of day Friday. I need to review my English notes before the weekend. I need to reply to that email — it's been two days.'",
    drills: [
      { instruction: "Complete com 'need to'", input: 'She ___ (submit) the form before Thursday.', answer: 'She needs to submit the form before Thursday.' },
      { instruction: 'Corrija o erro', input: 'I must to finish this by noon.', answer: "I must finish / I need to finish this by noon. ('must' não usa 'to')" },
      { instruction: 'Transforme na negativa', input: 'You need to worry about this.', answer: "You don't need to worry about this." },
      { instruction: "'need to / want to / should'? (obrigação por prazo)", input: 'The deadline is tomorrow. You ___ submit tonight.', answer: "You need to submit tonight. (obrigação real = 'need to')" }
    ],
    connects_to: [5, 7],
    review_of: '',
    daily_resources: {
      ted: {
        title: 'Inside the mind of a master procrastinator',
        url: 'https://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator',
        tip: "Observe como 'need to' aparece nas situações de prazo e urgência — o palestrante usa isso com ironia."
      },
      podcast: {
        title: 'ESL Pod — At the Office',
        url: 'https://www.eslpod.com',
        tip: "Ouça a diferença entre 'need to' (obrigação) e 'want to' (desejo) nos contextos de trabalho."
      },
      onelook_word: 'urgency',
      anki_card: {
        front: 'Como expressar uma necessidade ou obrigação em inglês?',
        back: "I need to [infinitivo] — ex: I need to finish this report by Friday."
      },
      speaking_prompt: "Descreva 5 coisas que você precisa fazer esta semana. Para cada uma, use 'I need to' e adicione quando ou por quê. Pratique o ritmo natural de fala.",
      game: { label: 'Modal Verbs Quiz', url: 'https://www.englishclub.com/grammar/verbs-modal_need.htm' }
    }
  },

  // ─── DIA 7 ────────────────────────────────────────────────────────────────
  {
    id: 7,
    level: 'A2',
    module: 1,
    moduleTitle: 'Present Structures',
    structure: "I think this approach makes more sense",
    translation: 'Acho que essa abordagem faz mais sentido',
    explanation: "'I think' é o marcador de opinião mais comum em inglês. Suaviza afirmações, convida ao diálogo e sinaliza que você está compartilhando uma perspectiva, não um fato.",
    why_it_matters: "Brasileiros às vezes fazem afirmações muito diretas em inglês por não usarem 'I think'. Isso muda o tom de 'You are wrong' para 'I think there might be a better way' — crucial em ambientes profissionais.",
    pronunciation: "I think /aɪ θɪŋk/ — o 'th' é interdental: língua toca os dentes superiores suavemente. Nunca 'I tink' ou 'I fink'.",
    stress_tip: "'Think' pode receber stress para ênfase: 'I THINK we should wait.' Sem stress especial, flui naturalmente no início da frase.",
    pattern: 'I think + [clause] / I think + [noun phrase]',
    breakdown: [
      { piece: 'I think', role: 'Marcador de opinião (suaviza a afirmação)' },
      { piece: 'this approach', role: 'Sujeito da cláusula de opinião' },
      { piece: 'makes', role: 'Verbo (terceira pessoa, presente simples)' },
      { piece: 'more sense', role: 'Predicado (comparação)' }
    ],
    core_vocabulary: [
      { word: 'I believe', translation: 'acredito que (mais formal/convicto)', example: "I believe we can do better." },
      { word: 'In my opinion', translation: 'na minha opinião', example: "In my opinion, we should wait." },
      { word: "I'm not sure, but", translation: 'não tenho certeza, mas', example: "I'm not sure, but I think it might work." },
      { word: 'As far as I know', translation: 'pelo que eu sei', example: "As far as I know, the meeting is at 3pm." }
    ],
    examples: {
      work:   { en: "I think we should schedule a follow-up meeting to discuss the results.", pt: 'Acho que deveríamos agendar uma reunião de acompanhamento para discutir os resultados.' },
      travel: { en: "I think the best time to visit there is in the spring — the weather is perfect.", pt: 'Acho que a melhor época para visitar lá é na primavera — o clima é perfeito.' },
      study:  { en: "I think consistency is more important than intensity when learning a language.", pt: 'Acho que a consistência é mais importante do que a intensidade ao aprender um idioma.' }
    },
    variations: [
      { form: "I don't think + [clause]", note: "Negativa — 'I don't think that's a good idea.' (NÃO: I think that's not...)" },
      { form: 'Do you think + [clause]?', note: "Pergunta — 'Do you think we have enough time?'" },
      { form: "I think so / I don't think so", note: "Curtas — 'Will it work?' → 'I think so.'" }
    ],
    combinations: [
      { phrase: "I think we should + [inf]", meaning: 'opinião sobre o que fazer' },
      { phrase: "I think it would be better to + [inf]", meaning: 'sugestão gentil e diplomática' },
      { phrase: "I think + [clause], but I'm not sure", meaning: 'opinião com humildade epistêmica' }
    ],
    collocations: ['think about', 'think of', 'think so', 'think that', 'think we should'],
    common_mistakes: [
      { wrong: "I think that's not a good idea", right: "I don't think that's a good idea", tip: "Em inglês, a negação sobe para o verbo principal: 'I don't think' (não: 'I think... not')" },
      { wrong: "I am thinking this is correct", right: "I think this is correct", tip: "'Think' no sentido de opinião é estativo — não use -ing" },
      { wrong: "I think this is more better", right: "I think this is better", tip: "'More better' não existe — 'better' já é o comparativo de 'good'" }
    ],
    retrieval_context: 'Você está numa discussão de equipe sobre como resolver um problema técnico ou organizacional.',
    retrieval_prompt: "Compartilhe 3 opiniões genuínas suas: uma sobre trabalho/estudo, uma sobre aprender inglês, uma sobre qualquer assunto. Use 'I think [clause]' e também 'I don't think [clause]' pelo menos uma vez.",
    retrieval_reference: "Exemplo: 'I think the best way to learn English is to use it every day in real situations. I don't think memorizing grammar rules alone works. I think consistency matters more than talent.'",
    drills: [
      { instruction: 'Expresse a opinião oposta com negação correta', input: "Discorde de: 'I think this is a bad idea.'", answer: "I don't think this is a bad idea. (não: 'I think this is not...')" },
      { instruction: 'Corrija o erro de negação', input: "I think this plan is not going to work.", answer: "I don't think this plan is going to work. (negação sobe para 'think')" },
      { instruction: 'Resposta curta: concorde', input: "'Will the project be finished on time?' (você acha que sim)", answer: "I think so." },
      { instruction: "Suavize a afirmação direta usando 'I think'", input: "'This method is wrong.'", answer: "I think there might be a better method. / I don't think this method is working." }
    ],
    connects_to: [6],
    review_of: '',
    daily_resources: {
      ted: {
        title: 'The danger of a single story',
        url: 'https://www.ted.com/talks/chimamanda_ngozi_adichie_the_danger_of_a_single_story',
        tip: "Preste atenção em como a palestrante expressa perspectivas e opiniões. Ouça os marcadores além de 'I think'."
      },
      podcast: {
        title: 'ESL Pod — Sharing Opinions',
        url: 'https://www.eslpod.com',
        tip: "Foque nos marcadores de opinião: 'I think', 'I believe', 'In my opinion', 'As far as I know'."
      },
      onelook_word: 'perspective',
      anki_card: {
        front: 'Como expressar uma opinião com nuance em inglês?',
        back: "I think [clause] — ex: I think this approach makes more sense. Negação: I don't think [clause]."
      },
      speaking_prompt: "Escolha um assunto sobre o qual você tem opinião forte. Fale por 2 minutos usando 'I think', 'I don't think', 'I believe' e 'In my opinion' pelo menos uma vez cada.",
      game: { label: 'Expressing Opinions Practice', url: 'https://www.englishclub.com/speaking/agreeing-disagreeing.htm' }
    }
  }
]

// ─── CONTEXT SUMMARY — usar como prompt de contexto ao gerar batch_8_14.ts ──
export const BATCH_1_7_SUMMARY = {
  range: '1-7',
  theme: 'Present Structures I',
  structures: [
    'am/is/are + ing (Present Continuous)',
    'have + pp (Present Perfect)',
    "I've been + ing (Present Perfect Continuous)",
    'going to (futuro planejado)',
    'want to (desejo/intenção)',
    'need to (necessidade/obrigação)',
    'I think (opinião)'
  ],
  grammar_arcs: [
    'Dias 1-3: tríade de aspecto (continuous → perfect → perfect continuous) — apresenta for/since, verbos estativos',
    'Dias 4-5: intenção futura (going to = plano pré-existente vs want to = desejo)',
    'Dias 6-7: necessidade e perspectiva (need to = obrigação real; I think = marcador de opinião)'
  ],
  key_contrasts_established: [
    'present continuous vs verbos estativos (know, want, agree, love)',
    'simple past (tempo específico) vs present perfect (relevância presente)',
    'for (duração) vs since (ponto inicial)',
    'going to (decisão prévia) vs will (decisão espontânea)',
    'want to (desejo) vs need to (obrigação) vs going to (plano)',
    "I think [clause] vs I don't think [clause] (negação sobe para 'think')"
  ],
  vocabulary_themes: [
    'progresso e trabalho em andamento (working on, making progress)',
    'experiências e conquistas (already, just, never, ever, yet)',
    'duração e continuidade (for, since, lately, recently)',
    'planejamento (going to, plan to, about to, intend to)',
    'desejo e aspiração (want to, hope to, aim to)',
    'urgência e prazo (need to, by [date], ASAP, right away)',
    'opinião e perspectiva (I think, I believe, in my opinion)'
  ],
  connects_to_next: 'Batch 2 (dias 8-14): I know · I feel · let me · was/were + ing · did (simple past) · used to · had. Continuidade: dias 8-10 fecham o módulo Present Structures; dias 11-14 iniciam Past Structures com contraste direto com o present perfect do dia 2.'
}
