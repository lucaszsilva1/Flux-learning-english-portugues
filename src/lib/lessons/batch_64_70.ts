import type { Lesson } from '../types'

export const lessons: Lesson[] = [
  {
    id: 64,
    level: 'B2',
    module: 6,
    moduleTitle: 'Expressões de Alta Frequência',
    structure: "I'd rather not discuss the budget at this moment.",
    translation: 'Eu preferiria não discutir o orçamento neste momento.',
    explanation: 'Nós já aprendemos "I\'d rather" no dia 26 para expressar preferência ("Eu preferiria X a Y"). Agora, focamos no uso isolado da negativa curta: "I\'d rather not". É o escudo de Titânio corporativo para dizer "NÃO" sem usar a palavra "Não", rejeitando convites educadamente.',
    why_it_matters: 'Para esquivar-se de intrigas de escritório, adiar discussões perigosas ou negar favores educadamente. Dizer "I don\'t want to" soa como birra de criança. Dizer "I\'d rather not" soa como um executivo que tem limites claros e respeito pela situação.',
    pronunciation: '/aɪd ˈræðər nɑt/',
    stress_tip: 'O bloco "RATHER-NOT" é quase uma palavra só, dita de forma firme mas gentil.',
    pattern: 'I\'d rather not + Verbo Base (sem "to")',
    breakdown: [
      { piece: "I'd rather not", role: 'Expressão de recusa polida (Eu preferiria não)' },
      { piece: 'discuss', role: 'Ação evitada (VERBO BASE, NUNCA COM TO)' },
      { piece: 'the budget', role: 'Contexto / O quê' },
      { piece: 'at this moment', role: 'Contexto de tempo' }
    ],
    core_vocabulary: [
      { word: "I'd rather not", translation: 'eu preferiria não (fazer)', example: 'Do you want to go? I\'d rather not.' },
      { word: 'discuss', translation: 'discutir (conversar seriamente)', example: 'We need to discuss this.' },
      { word: 'at this moment', translation: 'neste momento', example: 'Not at this moment.' }
    ],
    examples: {
      work: { en: "I'd rather not make a decision without all the data.", pt: 'Eu preferiria não tomar uma decisão sem todos os dados.' },
      travel: { en: "I'm tired, so I'd rather not go out tonight.", pt: 'Estou cansado, então preferiria não sair esta noite.' },
      study: { en: "I'd rather not guess the answer.", pt: 'Eu preferiria não adivinhar a resposta.' }
    },
    variations: [
      { form: "I'd prefer not to", note: 'Sinônimo perfeito, com a chatice de que "prefer" exige a preposição "to" no final.' },
      { form: "I'd rather wait", note: 'Usando afirmativamente para impor a sua vontade de pausa.' }
    ],
    combinations: [
      { phrase: "If you don't mind, I'd rather not", meaning: 'A recusa definitiva ultra-polida (Se você não se importa...)' }
    ],
    collocations: ["I'd rather not", "rather not say", "prefer not to"],
    common_mistakes: [
      { wrong: "I'd rather not TO discuss.", right: "I'd rather not discuss.", tip: 'REGRA C1: "Rather" ODEIA a preposição "To". NUNCA coloque "to" perto dele. Vá direto para o verbo puro.' },
      { wrong: "I wouldn't rather.", right: "I'd rather not.", tip: 'A negativa vai no NOT, não no auxiliar do passado (would).' }
    ],
    retrieval_context: 'Um colega fofoqueiro tenta te arrancar a sua opinião sobre o novo chefe, querendo te colocar numa fria.',
    retrieval_prompt: 'Esquive-se educadamente: diga que você "preferiria não comentar" (comment).',
    retrieval_reference: "Exemplo: 'I'd rather not comment.'",
    drills: [
      { instruction: 'Forme a recusa polida sem verbo no final.', input: 'Você quer ir? Eu preferiria não.', answer: "Do you want to go? I'd rather not." },
      { instruction: 'Forme com verbo mantendo a ausência de TO.', input: 'Eu preferiria não falar sobre isso.', answer: "I'd rather not talk about it." },
      { instruction: 'Corrija o erro do TO.', input: "I'd rather not to do it.", answer: "I'd rather not do it." },
      { instruction: 'Revisão (Dia 58): Junte com a Má Notícia.', input: 'Sinto muito, mas eu preferiria não participar.', answer: "I'm afraid I'd rather not participate." },
      { instruction: 'SÍNTESE: Una Justificativa de Risco (Dia 62) e Recusa.', input: 'Nós não podemos nos dar ao luxo de errar (afford); portanto, eu preferiria não lançar hoje.', answer: "We can't afford to make mistakes; therefore, I'd rather not launch today." },
      { instruction: 'SÍNTESE: Inevitável (Dia 61) e Recusa.', input: 'Eu não pude evitar (couldn\'t help) rir, mas eu preferiria não explicar por quê.', answer: "I couldn't help laughing, but I'd rather not explain why." },
      { instruction: 'Traduza o sinônimo completo (prefer).', input: 'Eu preferiria não (prefer not to) ir.', answer: "I'd prefer not to go." }
    ],
    connects_to: [26, 58, 61, 62],
    review_of: "Exige a retenção do distanciamento do 'To' e sua intersecção de uso com a empatia corporativa de recusa ensinada nos dias 58 e 62.",
    daily_resources: {
      ted: { title: 'The art of saying no', url: 'https://www.ted.com/talks/kenny_nguyen_the_art_of_saying_no', tip: 'Observe a dignidade mantida por quem recusa usando estruturas elegantes.' },
      podcast: { title: 'ESL Podcast - Declining Invitations', url: 'https://www.eslpod.com', tip: 'Treine a voz caindo no "not", sinalizando limite imposto.' },
      onelook_word: 'rather',
      anki_card: { front: 'Traduza de forma diplomática sem usar WANT: Eu não quero participar. (Eu preferiria não)', back: "I'd rather not participate." },
      speaking_prompt: "Entreviste a si mesmo rejeitando todos os convites absurdos: 'Eat a bug? I'd rather not. Jump off a cliff? I'd rather not.'"
    }
  },
  {
    id: 65,
    level: 'B2',
    module: 6,
    moduleTitle: 'Expressões de Alta Frequência',
    structure: "I'm used to waking up early, so the 7 AM meeting is fine.",
    translation: 'Eu estou acostumado a acordar cedo, então a reunião das 7 da manhã está ok.',
    explanation: 'Não confunda com o "Used to" do passado (Dia 13). Lá era "Eu costumava". Aqui, com o Verbo To Be na frente ("I AM used to"), o sentido é presente e definitivo: "Eu ESTOU acostumado". E o maior pega-ratão da fluência em inglês: DEPOIS de "I am used to", o verbo VAI PARA O GERÚNDIO (-ING).',
    why_it_matters: 'Para provar resiliência ou aceitar desafios em entrevistas. O recrutador diz: "O ritmo aqui é insano". Você responde: "Don\'t worry, I\'m used to working under pressure". Isso é música para os ouvidos deles.',
    pronunciation: '/aɪm just tu/',
    stress_tip: 'O "used to" soa como "YUSTA" falado rápido. A sílaba seguinte (-ING) é que ganha destaque.',
    pattern: 'Subject + TO BE + used to + Verbo-ING / Substantivo',
    breakdown: [
      { piece: "I'm used to", role: 'Declaração de costume (Eu estou acostumado com)' },
      { piece: 'waking up', role: 'Ação rotineira obrigatoriamente em -ING' },
      { piece: 'early', role: 'O advérbio atrelado' }
    ],
    core_vocabulary: [
      { word: 'be used to', translation: 'estar acostumado a/com', example: 'I am used to the cold.' },
      { word: 'wake up early', translation: 'acordar cedo', example: 'Do you wake up early?' },
      { word: 'pressure', translation: 'pressão', example: 'I work well under pressure.' }
    ],
    examples: {
      work: { en: "She is used to dealing with angry customers.", pt: 'Ela está acostumada a lidar com clientes irritados.' },
      travel: { en: "I'm not used to driving on the left side of the road.", pt: 'Não estou acostumado a dirigir do lado esquerdo da estrada.' },
      study: { en: "We are used to studying until midnight.", pt: 'Nós estamos acostumados a estudar até meia-noite.' }
    },
    variations: [
      { form: "Get used to", note: 'Ação de ADQUIRIR o costume ("You will get used to it" = Você vai se acostumar).' },
      { form: "I am accustomed to", note: 'Versão super formal e polida do "I am used to".' }
    ],
    combinations: [
      { phrase: "I'm still getting used to", meaning: 'Eu ainda estou me acostumando a (transição)' },
      { phrase: "I'll never get used to", meaning: 'Eu nunca vou me acostumar a (frustração)' }
    ],
    collocations: ["used to working", "get used to it", "used to dealing with"],
    common_mistakes: [
      { wrong: "I am used to wake up early.", right: "I am used to WAKING up early.", tip: 'O ERRO CAMPEÃO DO BRASILEIRO. Se o "used to" está acompanhado do verbo TO BE (I am), o verbo seguinte OBRIGATORIAMENTE tem que ter ING.' },
      { wrong: "I used to waking up.", right: "I used to wake up (passado) ou I AM used to waking up (presente).", tip: 'Misturar a regra do passado com a do presente.' }
    ],
    retrieval_context: 'Um gringo pede desculpas pelo excesso de pressão no projeto e acha que você vai espanar. Você sorri e mostra que é casca grossa.',
    retrieval_prompt: 'Mostre resiliência inquebrável: diga "Eu estou acostumado a trabalhar sob pressão (working under pressure)".',
    retrieval_reference: "Exemplo: 'I'm used to working under pressure.'",
    drills: [
      { instruction: 'Forme o estado de costume presente OBRIGANDO O ING.', input: 'Nós estamos acostumados a dormir (sleep) pouco.', answer: "We are used to sleeping little." },
      { instruction: 'Faça a negativa de estado.', input: 'Eu não estou acostumado a perder (lose).', answer: "I'm not used to losing." },
      { instruction: 'Contraste com o Passado Simples (Dia 13) sem ING.', input: 'Eu costumava trabalhar (work). Eu estou acostumado a trabalhar (working).', answer: "I used to work. I am used to working." },
      { instruction: 'Forme o estado de mudança (GET).', input: 'Eu me acostumarei com isso (it).', answer: "I will get used to it." },
      { instruction: 'SÍNTESE: Concessão (Dia 44/45).', input: 'Embora (although) seja difícil, eu estou acostumado a lidar com isso (dealing with it).', answer: "Although it is difficult, I am used to dealing with it." },
      { instruction: 'SÍNTESE: Junte Expectativa Positiva (Dia 63).', input: 'Eu não estou acostumado a programar (coding), mas eu estou ansioso para aprender (learning).', answer: "I'm not used to coding, but I'm looking forward to learning." },
      { instruction: 'Traduza o sinônimo formal.', input: 'Eu estou acostumado a (accustomed to) atrasos.', answer: "I am accustomed to delays." }
    ],
    connects_to: [13, 44, 45, 63],
    review_of: "Exige que o aluno rompa de vez a confusão cognitiva entre 'Eu costumava fazer (I used to do)' e 'Eu estou acostumado a fazer (I am used to doing)'. E conecta com a dupla camada de -ING do 'looking forward to'.",
    daily_resources: {
      ted: { title: 'How to build resilience', url: 'https://www.ted.com/talks/lucy_hone_the_3_secrets_of_resilient_people', tip: 'Observe como hábitos duros são relatados pelas pessoas (Getting used to the pain).' },
      podcast: { title: 'ESL Podcast - New Environments', url: 'https://www.eslpod.com', tip: 'Treine os ouvidos para o verbo no ING que sempre flutua no final da frase.' },
      onelook_word: 'used',
      anki_card: { front: 'Conserte a frase fatal de entrevista: I am used to work under pressure.', back: 'I am used to WORKING under pressure. (ING obrigatório)' },
      speaking_prompt: "Diga 3 coisas desagradáveis que você já aceitou na vida: 'I'm used to waking up early. I'm used to paying bills...'"
    }
  },
  {
    id: 66,
    level: 'B2',
    module: 6,
    moduleTitle: 'Expressões de Alta Frequência',
    structure: "Hold on, I'm about to join the call.",
    translation: 'Pera aí, eu estou prestes a / quase entrando na call.',
    explanation: '"I\'m about to" expressa o Futuro Imediato Extremo. Não é algo que vai acontecer amanhã ou depois. É algo que vai acontecer nos próximos segundos ou minutos. Substitui inteiramente a bagunça que os brasileiros fazem tentando dizer "I am almost doing".',
    why_it_matters: 'Num Slack remoto ou no balcão de um aeroporto, avisar iminência de ação salva vidas. O cliente grita que o servidor está pegando fogo, você diz: "Relax, I\'m about to push the fix". Traz paz imediata ao caos.',
    pronunciation: '/aɪm əˈbaʊt tu/',
    stress_tip: 'O "ABOUT" dita o ritmo, mas o "to" é engolido, conectando logo ao verbo de ação (about-ta-join).',
    pattern: 'Subject + TO BE + about to + Verbo Base',
    breakdown: [
      { piece: 'Hold on,', role: 'Pedido de espera (Espera/Segura)' },
      { piece: "I'm about to", role: 'Expressão de futuro imediato (eu estou prestes a / estou quase)' },
      { piece: 'join the call', role: 'Ação iminente' }
    ],
    core_vocabulary: [
      { word: 'be about to', translation: 'estar prestes a / estar quase fazendo', example: 'I am about to leave.' },
      { word: 'hold on', translation: 'pera aí / aguarde um momento', example: 'Hold on a second.' },
      { word: 'join', translation: 'juntar-se / entrar (na chamada)', example: 'Join the meeting.' }
    ],
    examples: {
      work: { en: "We are about to launch the new website.", pt: 'Nós estamos prestes a lançar o novo site.' },
      travel: { en: "Hurry up! The train is about to leave.", pt: 'Apresse-se! O trem está prestes a partir.' },
      study: { en: "I was about to ask the exact same question.", pt: 'Eu estava prestes a fazer exatamente a mesma pergunta.' }
    },
    variations: [
      { form: "Just about to", note: 'Adicionar "just" aumenta a agressividade do milissegundo: "Eu ia EXATAMENTE fazer isso agora".' },
      { form: "On the verge of", note: 'Versão mais literária/poética (À beira de...).' }
    ],
    combinations: [
      { phrase: "I was just about to", meaning: 'Eu ia agorinha mesmo (Ação interrompida do passado)' },
      { phrase: "Don't bother, I'm about to", meaning: 'Não se preocupe/esforce, eu já estou quase fazendo isso' }
    ],
    collocations: ["about to leave", "was about to", "just about to"],
    common_mistakes: [
      { wrong: 'I am almost finishing.', right: 'I am about to finish.', tip: 'Não use "almost + ING" para intenções de ação de futuro imediato. O idiomático é "about to".' },
      { wrong: 'I am about leaving.', right: 'I am about to leave.', tip: 'Diferente das lições anteriores, "about to" usa o infinitivo normal, e NÃO o ING.' }
    ],
    retrieval_context: 'Sua mãe te liga para cobrar se você lavou a louça, no exato segundo em que você estava pegando a esponja.',
    retrieval_prompt: 'Defenda-se usando o passado interrompido dramático: "Eu estava exatamente (just) prestes a lavar os pratos (wash the dishes)."',
    retrieval_reference: "Exemplo: 'I was just about to wash the dishes.'",
    drills: [
      { instruction: 'Forme o aviso imediato.', input: 'Eu estou prestes a sair (leave).', answer: "I'm about to leave." },
      { instruction: 'Forme no passado interrompido.', input: 'Nós estávamos prestes a fechar o negócio.', answer: "We were about to close the deal." },
      { instruction: 'Corrija o "almost" brasileiro.', input: 'I am almost going.', answer: "I'm about to go." },
      { instruction: 'Revisão (Dia 60): Da Iminência para o Desfecho Real.', input: 'Nós estávamos prestes a lançar, mas nós acabamos (ended up) cancelando.', answer: "We were about to launch, but we ended up canceling." },
      { instruction: 'SÍNTESE: Una Revelação (Dia 59) e Iminência.', input: 'Acontece que (It turns out) o servidor estava prestes a cair.', answer: "It turns out the server was about to crash." },
      { instruction: 'SÍNTESE 2: O Risco Iminente (Dia 62).', input: 'Ele está prestes a falhar, e nós não podemos nos dar ao luxo (afford) de perder dinheiro.', answer: "He is about to fail, and we can't afford to lose money." },
      { instruction: 'Aviso urgente no chat.', input: 'Espera (Hold on), eu estou quase mandando (send) o email.', answer: "Hold on, I'm about to send the email." }
    ],
    connects_to: [59, 60, 62],
    review_of: "Exige o distanciamento da estrutura do gerúndio focada nas aulas passadas e volta ao infinitivo, unindo o conceito de iminência de 'about to' com as fatalidades e riscos ensinados no Módulo 6.",
    daily_resources: {
      ted: { title: '10 things you didn\'t know about orgasm', url: 'https://www.ted.com/talks/mary_roach_10_things_you_didn_t_know_about_orgasm', tip: 'A iminência de que a palestra vai ficar estranha/engraçada é pautada nos "about to".' },
      podcast: { title: 'ESL Podcast - Interruptions', url: 'https://www.eslpod.com', tip: 'Treine a entonação de defesa com "I was JUST about to".' },
      onelook_word: 'about',
      anki_card: { front: 'Traduza de forma idiomática: "Eu ia exatamente fazer isso agora!".', back: "I was just about to do it." },
      speaking_prompt: "Faça o narrador do seu próprio apocalipse zumbi: 'Look, the zombie is about to bite him! I'm about to run!'"
    }
  },
  {
    id: 67,
    level: 'B2',
    module: 6,
    moduleTitle: 'Expressões de Alta Frequência',
    structure: "I keep getting this error message every time I compile.",
    translation: 'Eu continuo recebendo (não paro de receber) esta mensagem de erro toda vez que eu compilo.',
    explanation: 'O verbo "keep" significa guardar/manter. Mas seguido de OUTRO VERBO com -ING, ele se transforma num modal de repetição exaustiva: "Ficar fazendo algo o tempo todo / Não parar de fazer". É a forma de demonstrar persistência ou irritação contínua.',
    why_it_matters: 'Brasileiros travam tentando traduzir o verbo "ficar" (Fico lembrando, fico pensando, o app fica travando). Não tente traduzir "ficar" (stay). O "ficar fazendo repetidamente" em inglês se resolve sempre e inteiramente com "Keep + ING".',
    pronunciation: '/aɪ kip ˈgɛtɪŋ/',
    stress_tip: 'O verbo no ING após o KEEP é o que carrega a emoção pesada. O keep é rápido.',
    pattern: 'Subject + keep(s) + Verbo-ING',
    breakdown: [
      { piece: 'I keep getting', role: 'Ação repetitiva incessante (Eu não paro de receber / Fico recebendo)' },
      { piece: 'this error message', role: 'O objeto de irritação' },
      { piece: 'every time I compile', role: 'Condição de recorrência' }
    ],
    core_vocabulary: [
      { word: 'keep + ing', translation: 'ficar fazendo algo / continuar / não parar', example: 'I keep forgetting it.' },
      { word: 'get an error', translation: 'receber um erro (tecnologia)', example: 'Did you get an error?' },
      { word: 'every time', translation: 'toda vez que', example: 'Every time I go, it rains.' }
    ],
    examples: {
      work: { en: "The client keeps asking for new features.", pt: 'O cliente não para de pedir / fica pedindo novas funcionalidades.' },
      travel: { en: "My luggage keeps getting lost.", pt: 'Minha bagagem fica se perdendo / não para de se perder.' },
      study: { en: "If you keep practicing, you will eventually master it.", pt: 'Se você continuar praticando, você eventualmente dominará isso.' }
    },
    variations: [
      { form: "Keep on + ING", note: 'Adicionar "on" dá uma ênfase de insistência maior ou de determinação ("Keep on fighting").' },
      { form: "Keep it up", note: 'O elogio oficial do gerente ("Continue assim / Mantenha o bom trabalho").' }
    ],
    combinations: [
      { phrase: "Why do you keep", meaning: 'Por que você fica/não para de (questionamento irritado)' },
      { phrase: "If it keeps happening", meaning: 'Se isso continuar acontecendo (prelúdio de ação drástica)' }
    ],
    collocations: ["keep forgetting", "keep asking", "keep going"],
    common_mistakes: [
      { wrong: 'I stay thinking about it.', right: 'I keep thinking about it.', tip: 'Não traduza "ficar" como "stay" (ficar físico em um lugar). O ficar mental/repetitivo é KEEP.' },
      { wrong: 'I keep to forget.', right: 'I keep forgetting.', tip: 'O verbo após keep é sempre no -ING.' }
    ],
    retrieval_context: 'Sua internet está péssima durante a videochamada. Seus amigos dizem que a sua tela congela a cada 5 segundos.',
    retrieval_prompt: 'Peça desculpas e declare a falha repetitiva usando "keep": diga que a conexão "fica caindo" (dropping).',
    retrieval_reference: "Exemplo: 'Sorry, the connection keeps dropping.'",
    drills: [
      { instruction: 'Forme a ação chata e repetida.', input: 'Meu computador não para de travar (crashing).', answer: "My computer keeps crashing." },
      { instruction: 'Traduza o nosso verbo "ficar".', input: 'Eu fico esquecendo o nome dele.', answer: "I keep forgetting his name." },
      { instruction: 'Corrija o falso cognato do Stay.', input: 'Why do you stay complaining?', answer: "Why do you keep complaining?" },
      { instruction: 'Revisão (Dia 61): A Luta contra o Vício.', input: 'Eu não consigo evitar comer doces (can\'t help). Eu não paro de tentar (keep trying).', answer: "I can't help eating sweets. I keep trying." },
      { instruction: 'SÍNTESE: Junte Frequência com O Risco Fatal (Dia 62).', input: 'Se ele não parar (keep failing) de falhar, o projeto morrerá. Nós não podemos nos dar ao luxo (afford) disso.', answer: "If he keeps failing, the project will die. We can't afford that." },
      { instruction: 'Revisão (Dia 49): Conclusão Lógica e Repetição.', input: 'O app fica caindo (crashing); portanto, nós precisamos arrumar.', answer: "The app keeps crashing; therefore, we need to fix it." },
      { instruction: 'Incentivo do Gerente.', input: 'Se você continuar trabalhando duro, você vencerá.', answer: "If you keep working hard, you will win." }
    ],
    connects_to: [49, 61, 62],
    review_of: "Exige que o aluno consolide a tradução nativa do verbo 'ficar' e domine completamente a estrutura de gerúndio (ING) contínuo, entrelaçando com os ultimatos e confissões do Módulo 6.",
    daily_resources: {
      ted: { title: 'Why we keep making the same mistakes', url: 'https://www.ted.com/talks/laurie_santos_a_monkey_economy_as_irrational_as_ours', tip: 'Preste atenção nos comportamentos que persistem sem lógica aparente.' },
      podcast: { title: 'ESL Podcast - Complaining about habits', url: 'https://www.eslpod.com', tip: 'Ouça o tom de exaustão toda vez que "keeps doing" é pronunciado.' },
      onelook_word: 'keep',
      anki_card: { front: 'Como se diz "Ele não para de pedir dinheiro / Fica pedindo dinheiro" em inglês fluente?', back: 'He keeps asking for money.' },
      speaking_prompt: "Faça uma lista de reclamações do seu dia a dia: 'My neighbor keeps playing music... My dog keeps barking...'"
    }
  },
  {
    id: 68,
    level: 'B2',
    module: 6,
    moduleTitle: 'Expressões de Alta Frequência',
    structure: "I tend to agree with the client when it comes to the UI.",
    translation: 'Eu costumo/tendo a concordar com o cliente quando se trata da interface.',
    explanation: '"Tend to" é a alternativa de ouro para o básico "Usually" ou "Normally". Expressa o seu "vício de comportamento" ou a inclinação natural de uma pessoa ou sistema. O grande lance do "tend to" é que ele remove a culpa: "não é que eu seja mau, é que os sistemas costumam falhar".',
    why_it_matters: 'Para suavizar opiniões fortes. "I agree with you" é um martelo batendo. "I tend to agree with you" mostra que você pensou um pouco antes de tomar um lado da discussão (te faz soar como um líder ponderado).',
    pronunciation: '/aɪ tɛnd tu/',
    stress_tip: 'O "TEND" é suave. O "to" cola no verbo principal (ten-ta-agree).',
    pattern: 'Subject + tend(s) to + Verbo Base',
    breakdown: [
      { piece: 'I tend to agree', role: 'Inclinação natural suavizada (Eu costumo/tendo a concordar)' },
      { piece: 'with the client', role: 'O objeto da concordância' },
      { piece: 'when it comes to the UI', role: 'A cláusula de condição' }
    ],
    core_vocabulary: [
      { word: 'tend to', translation: 'costumar (no presente) / ter a tendência a', example: 'I tend to sleep late.' },
      { word: 'agree', translation: 'concordar', example: 'Do you agree?' },
      { word: 'when it comes to', translation: 'quando se trata de (expressão idiomática avançada)', example: 'When it comes to money, be careful.' }
    ],
    examples: {
      work: { en: "Junior developers tend to write complex code.", pt: 'Desenvolvedores juniores costumam escrever códigos complexos.' },
      travel: { en: "Flights tend to be cheaper on Tuesdays.", pt: 'Voos costumam ser mais baratos às terças.' },
      study: { en: "I tend to forget things if I don't write them down.", pt: 'Eu costumo esquecer as coisas se não anotá-las.' }
    },
    variations: [
      { form: "Have a tendency to", note: 'Sinônimo formal e mais longo, comum na escrita acadêmica.' },
      { form: "Usually", note: 'O sinônimo de nível A2 (Básico).' }
    ],
    combinations: [
      { phrase: "I tend to think that", meaning: 'Eu tendo a achar que (forma super polida de introduzir uma opinião oposta)' },
      { phrase: "People tend to forget", meaning: 'As pessoas costumam esquecer (Fato universal da humanidade)' }
    ],
    collocations: ["tend to agree", "tend to be", "when it comes to"],
    common_mistakes: [
      { wrong: 'I use to go there.', right: 'I usually go there (ou I tend to go there).', tip: 'ERRO FATAL: NUNCA use "used to" (Dia 13) no presente para dizer que você "costuma" fazer algo hoje em dia. Used to = Só no passado.' },
      { wrong: 'I tend agree.', right: 'I tend TO agree.', tip: 'A preposição TO é cimentada na estrutura do verbo tend.' }
    ],
    retrieval_context: 'Uma pesquisa mostra que 80% dos usuários desistem do cadastro porque é longo. Você explica isso para os designers, afirmando que pessoas têm o hábito de fugir de fricção.',
    retrieval_prompt: 'Mostre a tendência universal humana: "As pessoas costumam desistir (give up)."',
    retrieval_reference: "Exemplo: 'People tend to give up.'",
    drills: [
      { instruction: 'Forme a tendência polida.', input: 'Eu costumo concordar.', answer: "I tend to agree." },
      { instruction: 'Traduza o padrão humano universal.', input: 'As pessoas costumam confiar nela.', answer: "People tend to trust her." },
      { instruction: 'Corrija o terrível erro de presente.', input: 'I use to sleep late (no presente).', answer: "I tend to sleep late. (Ou: I usually sleep late)." },
      { instruction: 'SÍNTESE: Una "Keep" e "Tend" e a Quebra Diabólica (Dias 67, 59, 44).', input: 'Eu fico esquecendo (keep). Acabou que (turns out) eu estou velho. Embora (although) eu costumava ser (used to be) rápido, eu costumo (tend to) ser lento agora.', answer: "I keep forgetting. It turns out I am old. Although I used to be fast, I tend to be slow now." },
      { instruction: 'SÍNTESE: "Quando se trata de" + "In Contrast" (Dia 51).', input: 'Quando se trata de frontend, nós somos fortes. Em contraste, nós costumamos falhar no backend.', answer: "When it comes to frontend, we are strong. In contrast, we tend to fail on the backend." },
      { instruction: 'Afirme a inclinação de opinião.', input: 'Eu tendo a achar que ele está certo.', answer: "I tend to think that he is right." },
      { instruction: 'Refine a afirmação com Obviedade (Dia 56).', input: 'Nem precisa dizer, o sistema costuma cair.', answer: "Needless to say, the system tends to crash." }
    ],
    connects_to: [13, 44, 51, 56, 59, 67],
    review_of: "Exige uma limpeza definitiva do trauma de misturar 'used to' com rotinas de presente, alinhando a inclinação do 'tend' com o idiomático 'when it comes to'.",
    daily_resources: {
      ted: { title: 'The hidden power of smiling', url: 'https://www.ted.com/talks/ron_gutman_the_hidden_power_of_smiling', tip: 'Identifique afirmações comportamentais ("Humans tend to...").' },
      podcast: { title: 'ESL Podcast - Making Generalizations', url: 'https://www.eslpod.com', tip: 'Treine falar a expressão com naturalidade, sem pausar depois do tend.' },
      onelook_word: 'tend',
      anki_card: { front: 'Conserte a frase sobre seu hábito presente: I use to wake up late on Sundays.', back: 'I tend to wake up late on Sundays. (Ou: I usually...)' },
      speaking_prompt: "Faça um mapa psicológico rápido seu e do seu time: 'I tend to overthink. John tends to act fast. We tend to...'"
    }
  },
  {
    id: 69,
    level: 'B2',
    module: 6,
    moduleTitle: 'Expressões de Alta Frequência',
    structure: "I'm willing to negotiate, provided that we sign an NDA.",
    translation: 'Eu estou disposto a negociar, desde que nós assinemos um termo de confidencialidade.',
    explanation: 'Substituto B2 do "I want" ou "I agree". "Willing to" expressa prontidão, flexibilidade e disposição. Mostra que você está com o espírito aberto para abraçar uma ideia, fazer uma concessão ou meter a mão na massa (mesmo não sendo sua obrigação direta).',
    why_it_matters: 'Numa negociação, dizer "I can do this" soa robótico. Dizer "I\'m willing to help" (Estou disposto a ajudar) muda completamente o clima. Pessoas dispostas ("willing") são promovidas e respeitadas na cultura de negócios americana.',
    pronunciation: '/aɪm ˈwɪlɪŋ tu/',
    stress_tip: 'WILLING recebe forte entonação nas duas sílabas. Sooa como "wí-ling".',
    pattern: 'Subject + TO BE + willing to + Verbo Base',
    breakdown: [
      { piece: "I'm willing to", role: 'Expressão de disposição / flexibilidade mental (Estou disposto a)' },
      { piece: 'negotiate,', role: 'A ação concedida' },
      { piece: 'provided that', role: 'Condicional restritiva (desde que)' },
      { piece: 'we sign an NDA', role: 'A exigência para ativar a disposição' }
    ],
    core_vocabulary: [
      { word: 'be willing to', translation: 'estar disposto a', example: 'Are you willing to travel?' },
      { word: 'negotiate', translation: 'negociar', example: 'We must negotiate.' },
      { word: 'sign', translation: 'assinar', example: 'Sign the contract.' },
      { word: 'NDA', translation: 'Termo de Confidencialidade (Non-Disclosure Agreement)', example: 'Please, sign the NDA.' }
    ],
    examples: {
      work: { en: "He is willing to work on weekends to finish the project.", pt: 'Ele está disposto a trabalhar nos fins de semana para terminar o projeto.' },
      travel: { en: "I'm willing to pay extra for a window seat.", pt: 'Estou disposto a pagar extra por um assento na janela.' },
      study: { en: "She is not willing to give up her dream.", pt: 'Ela não está disposta a desistir do sonho dela.' }
    },
    variations: [
      { form: "Unwilling to", note: 'A versão contrária agressiva ("Não estar disposto a / Estar relutante em").' },
      { form: "Prepared to", note: 'Sinônimo levemente mais formal e bélico ("Estou preparado para...").' }
    ],
    combinations: [
      { phrase: "Are you willing to", meaning: 'A pergunta matadora de RH e Negociações ("Você está disposto a...?")' },
      { phrase: "I'm more than willing to", meaning: 'A submissão alegre de serviço ("Eu estou mais que disposto a... / Faço com o maior prazer")' }
    ],
    collocations: ["willing to negotiate", "willing to help", "more than willing"],
    common_mistakes: [
      { wrong: 'I have the will to help.', right: 'I am willing to help.', tip: 'Tradução literal de "tenho a vontade". O nativo diz apenas "I am willing to".' },
      { wrong: 'I willing to go.', right: 'I am willing to go.', tip: 'Falta do verbo To Be na frente. Sempre puxe o "am/is/are".' }
    ],
    retrieval_context: 'No meio de um impasse de negociação de salário, o RH te pergunta se você aceita um modelo híbrido ao invés de full remoto.',
    retrieval_prompt: 'Aja de forma flexível: diga "Nós podemos conversar. Eu estou disposto a transigir (compromise)."',
    retrieval_reference: "Exemplo: 'We can talk. I am willing to compromise.'",
    drills: [
      { instruction: 'Demonstre a flexibilidade.', input: 'Eu estou disposto a esperar.', answer: "I'm willing to wait." },
      { instruction: 'Forme a pergunta clássica.', input: 'Você está disposto a aprender?', answer: "Are you willing to learn?" },
      { instruction: 'Forme a relutância negativa.', input: 'Ele não está disposto a ouvir.', answer: "He is not willing to listen." },
      { instruction: 'Revisão (Dia 35 e 64): A barganha final.', input: 'Eu preferiria não (rather not) assinar, mas eu estou disposto a assinar desde que (provided that) vocês paguem.', answer: "I'd rather not sign, but I am willing to sign provided that you pay." },
      { instruction: 'SÍNTESE: Junte com o Risco de Iminência (Dia 66) e Frequência (Dia 67).', input: 'Eles não param (keep) de mentir. O projeto está prestes (about to) falhar, mas eles estão dispostos a tentar de novo.', answer: "They keep lying. The project is about to fail, but they are willing to try again." },
      { instruction: 'Exaltação (Dia 52).', input: 'Ele é brilhante; além do mais (what\'s more), ele está disposto a ajudar.', answer: "He is brilliant; what's more, he is willing to help." },
      { instruction: 'Acelere a subserviência.', input: 'Estou mais que disposto a fazê-lo.', answer: "I am more than willing to do it." }
    ],
    connects_to: [35, 52, 64, 66, 67],
    review_of: "Exige o emparelhamento com restrições e rejeições fortes dos dias anteriores, demonstrando como se abre a porta diplomaticamente logo após negá-la, mesclando com o 'Provided that'.",
    daily_resources: {
      ted: { title: 'The power of vulnerability', url: 'https://www.ted.com/talks/brene_brown_the_power_of_vulnerability', tip: 'Observe como a "vontade de sentir dor" é construída com "willing to".' },
      podcast: { title: 'ESL Podcast - Workplace Negotiations', url: 'https://www.eslpod.com', tip: 'Treine responder perguntas ríspidas de forma relaxada com o "I\'m willing to".' },
      onelook_word: 'willing',
      anki_card: { front: 'Traduza o trunfo da entrevista: Eu estou disposto a me mudar (relocate).', back: 'I am willing to relocate.' },
      speaking_prompt: "Faça um acordo consigo mesmo sobre seus sacrifícios atuais: 'I want success. I am willing to wake up early. I am willing to...'"
    }
  },
  {
    id: 70,
    level: 'B2',
    module: 6,
    moduleTitle: 'Expressões de Alta Frequência',
    structure: "The system is supposed to be automated, but it requires manual work.",
    translation: 'O sistema deveria / era para ser automatizado, mas requer trabalho manual.',
    explanation: '"Supposed to" expressa a grande quebra entre a EXPECTATIVA e a REALIDADE. Ele tem dois usos absolutos: 1) O projeto deveria ser algo, mas falhou em sê-lo. 2) A sua obrigação na empresa ("Espera-se que eu faça..."). É o nosso famoso "é/era pra ser".',
    why_it_matters: 'No mundo tech, 90% das reuniões giram em torno de coisas que "deviam" funcionar e não funcionam. Dizer "It should work" acusa um erro moral. Dizer "It is supposed to work" acusa que o roteiro da vida não está sendo seguido pela máquina.',
    pronunciation: '/səˈpoʊzd tu/',
    stress_tip: 'O D do final de supposed e o T de "to" viram uma letra só (supous-ta).',
    pattern: 'Subject + TO BE + supposed to + Verbo Base',
    breakdown: [
      { piece: 'The system is supposed to be', role: 'A expectativa original frustrada (Era para o sistema ser / Supõe-se que ele é)' },
      { piece: 'automated,', role: 'O atributo esperado' },
      { piece: 'but it requires manual work', role: 'A triste realidade que destrói a expectativa' }
    ],
    core_vocabulary: [
      { word: 'be supposed to', translation: 'deveria (expectativa) / é pra ser / espera-se que', example: 'I am supposed to be there.' },
      { word: 'automated', translation: 'automatizado', example: 'Fully automated.' },
      { word: 'require', translation: 'requerer / precisar', example: 'This requires time.' },
      { word: 'manual work', translation: 'trabalho manual', example: 'We hate manual work.' }
    ],
    examples: {
      work: { en: "I'm supposed to send the report by 5 PM.", pt: 'Eu tenho que / espera-se que eu envie o relatório até as 17h.' },
      travel: { en: "The train was supposed to leave an hour ago.", pt: 'Era para o trem ter saído uma hora atrás.' },
      study: { en: "This test is supposed to be easy, but it's not.", pt: 'Era pra esse teste ser fácil, mas não é.' }
    },
    variations: [
      { form: "Was supposed to", note: 'No passado, consolida a falha ou perda trágica ("Nós devíamos ter nos casado... mas não rolou").' },
      { form: "Meant to be", note: 'Versão mais mística do destino ("Era o destino ser assim").' }
    ],
    combinations: [
      { phrase: "What am I supposed to do?", meaning: 'O que diabos eu devo/posso fazer agora? (Expressão de frustração ou confusão absoluta)' },
      { phrase: "How is it supposed to work?", meaning: 'Como raios isso devia funcionar?' }
    ],
    collocations: ["supposed to be", "was supposed to", "what am I supposed to"],
    common_mistakes: [
      { wrong: 'I supposed to do.', right: 'I AM supposed to do.', tip: 'Não existe supposed to sem verbo To Be na frente. É uma voz passiva ("Eu sou suposto a").' },
      { wrong: 'It was to be automated.', right: 'It was supposed to be automated.', tip: 'Tentativa de traduzir o "era para ser" literalmente. Use sempre "supposed to".' }
    ],
    retrieval_context: 'Um cliente te manda mensagem indignado dizendo que o app dele não abre no celular antigo dele.',
    retrieval_prompt: 'Explique tecnicamente que o aplicativo novo não "foi desenhado" para dispositivos antigos. Diga "Não era para ele funcionar (work) no seu telefone".',
    retrieval_reference: "Exemplo: 'It's not supposed to work on your phone.'",
    drills: [
      { instruction: 'Traduza o roteiro esperado (era para ser).', input: 'Era para estar quente hoje.', answer: "It was supposed to be hot today." },
      { instruction: 'Expresse sua obrigação de cargo.', input: 'Espera-se que eu (era para eu) escrever o código.', answer: "I am supposed to write the code." },
      { instruction: 'Forme a pergunta de indignação.', input: 'O que era para eu fazer?', answer: "What was I supposed to do?" },
      { instruction: 'Revisão (Dia 59 e 60): Descobertas tristes.', input: 'Era pra funcionar. Acabou que (it turns out) quebrou, então nós acabamos chorando (ended up).', answer: "It was supposed to work. It turns out it broke, so we ended up crying." },
      { instruction: 'SÍNTESE EXTREMA: Suposição e Obviedade (Dia 56) e Risco Mínimo (Dia 62).', input: 'Nem precisa dizer, o banco era pra estar seguro. Nós não podemos nos dar ao luxo de vazamentos (leaks).', answer: "Needless to say, the database was supposed to be secure. We can't afford leaks." },
      { instruction: 'Revisão (Dia 65 e 68): Tendências e Acostumar-se.', input: 'Eu tendo a (tend to) achar que é pra ser lento, mas eu estou acostumado com isso (used to it).', answer: "I tend to think it is supposed to be slow, but I am used to it." },
      { instruction: 'Revisão das Conclusões Formais (Dia 53 e 54).', input: 'Era pra ser rápido. Dito isso (Having said that), é seguro. Resumindo (To sum up), não reclame.', answer: "It was supposed to be fast. Having said that, it is secure. To sum up, don't complain." }
    ],
    connects_to: [53, 54, 56, 59, 60, 62, 65, 68],
    review_of: "Este drill de encerramento do Módulo 6 fecha as pontas com todos os chunks idiotmáticos recentes. O aluno consolida a tristeza do 'supposed to' emparelhando com desfechos ('ended up') e reviravoltas ('turns out'), completando a mochila de 14 chunks de Alta Frequência.",
    daily_resources: {
      ted: { title: 'Do schools kill creativity?', url: 'https://www.ted.com/talks/sir_ken_robinson_do_schools_kill_creativity', tip: 'Preste atenção nos relatos de como a educação "was supposed to be".' },
      podcast: { title: 'ESL Podcast - Workplace Expectations', url: 'https://www.eslpod.com', tip: 'Treine a fala rápida "what am I sa-pozd-ta do?".' },
      onelook_word: 'supposed',
      anki_card: { front: 'Como dizer "Era pra isso estar funcionando" com dor e frustração?', back: 'It was supposed to be working.' },
      speaking_prompt: "Faça um tour pelas suas frustrações da semana: 'I was supposed to exercise. The weather was supposed to be good. What am I supposed to do?'"
    }
  }
]

export const BATCH_64_70_SUMMARY = {
  range: '64-70',
  theme: 'Fechamento do Módulo 6: Expressões Idiomáticas B2',
  levels: ['B2'],
  structures: [
    "I'd rather not — A recusa polida como escudo de titânio (dia 64, B2)",
    "I'm used to — Acostumar-se com algo (exige ING, difere do Passado) (dia 65, B2)",
    "I'm about to — O futuro imediato extremo de ações iminentes (dia 66, B2)",
    "I keep + ing — Repetição exaustiva e persistência (dia 67, B2)",
    "I tend to — Hábitos generalistas e opiniões cuidadosas (dia 68, B2)",
    "I'm willing to — Flexibilidade e disposição para acordos (dia 69, B2)",
    "I'm supposed to — Expectativa vs realidade e quebras de acordo (dia 70, B2)"
  ],
  grammar_arcs: [
    'A Batalha do To Be. Ao longo deste bloco, o aluno enfrentou expressões que EXIGEM o uso inicial do am/is/are ou de terminações raras. Destravar que "used to", "willing to", "supposed to" e "about to" não vivem sem o To Be inicial foi a meta suprema.',
    'O Falso To e O Gerúndio. Continuamos forçando a compreensão de que há exceções onde o TO leva ING ("I am used to waking up") e exceções onde o TO some de vez ("I\'d rather not discuss"). O aluno atinge o nível onde as "regrinhas mágicas" já não fazem sentido, dando lugar à retenção de som (idiomismo puro).'
  ],
  key_contrasts_established: [
    'I used to work (passado simples, rotina morta) vs I AM used to working (presente permanente)',
    'I almost go (tradução inoperável) vs I am about to go (Ação iminente corporativa)',
    'It is to be (tradução literal) vs It is supposed to be (A expectativa quebrada)',
    'I don\'t want to (birra infantil) vs I\'d rather not (elegância defensiva C1)'
  ],
  vocabulary_themes: [
    'rotina e frustração: pressure, complain, wake up early',
    'acordos de negócios: sign an NDA, negotiate, compromise',
    'desculpas e recusas: budget, participate, manual work'
  ],
  connects_to_next: "Batch 11 (dias 71-77): [I'd like to propose, I would suggest, It is worth noting, I'd like to draw your attention to, I'm pleased to inform, With regard to, As discussed] — [Abertura do Módulo 7: Registro Formal. Após descer ao mundo sujo, rápido e cheio de regras ocultas dos Idioms cotidianos, o aluno agora será vestido de terno corporativo C1. Irá aprender a redigir e-mails para Board de Diretores, propondo ideias, chamando a atenção para métricas e referenciando reuniões de alto escalão de forma fria, inquestionável e imponente]."
}
