import type { Lesson } from '../types'

export const lessons: Lesson[] = [
  {
    id: 57,
    level: 'B2',
    module: 6,
    moduleTitle: 'Expressões de Alta Frequência',
    structure: "I was wondering if you could help me with this project.",
    translation: 'Eu estava me perguntando se você poderia me ajudar com este projeto.',
    explanation: 'Abre o Módulo 6 (Expressões Idiomáticas). "I was wondering" é a forma mais polida do universo corporativo para fazer um pedido. É muito melhor que dizer "Can you help me?". Usa-se o passado ("was wondering") apenas por cortesia, para não soar impositivo, embora a ação seja no presente.',
    why_it_matters: 'Pedir coisas diretamente ("I want", "Can you") soa mandão. Usar "I was wondering if" tira toda a pressão da outra pessoa, mostrando respeito pelo tempo dela.',
    pronunciation: '/aɪ wəz ˈwʌndərɪŋ ɪf/',
    stress_tip: 'O foco é no WONDER. O "if" é colado na frase rapidamente.',
    pattern: 'I was wondering if + [Sujeito] + [Modal (could/would)] + [Verbo]',
    breakdown: [
      { piece: 'I was wondering', role: 'Abertura polida e hesitante (Eu estava imaginando/me perguntando)' },
      { piece: 'if you could help me', role: 'O pedido real mascarado de condicional (se você poderia me ajudar)' },
      { piece: 'with this project', role: 'Contexto do pedido' }
    ],
    core_vocabulary: [
      { word: 'wondering', translation: 'imaginando / me perguntando', example: 'I am wondering what to do.' },
      { word: 'if', translation: 'se (condicional introduzindo o pedido)', example: 'I wonder if it works.' },
      { word: 'could', translation: 'poderia (modal de polidez)', example: 'Could you help?' }
    ],
    examples: {
      work: { en: "I was wondering if we could reschedule the meeting.", pt: 'Eu estava me perguntando se nós poderíamos reagendar a reunião.' },
      travel: { en: "I was wondering if I could get a late checkout.", pt: 'Eu estava me perguntando se eu poderia fazer um late checkout.' },
      study: { en: "I was wondering if you had time to review my code.", pt: 'Eu estava me perguntando se você teria tempo para revisar meu código.' }
    },
    variations: [
      { form: "I wonder if", note: 'Versão no presente. Ligeiramente mais direta, mas ainda polida.' },
      { form: "I was hoping", note: 'Mesma utilidade ("Eu estava esperando que...").' }
    ],
    combinations: [
      { phrase: "I was wondering if you", meaning: 'Fazer um pedido a alguém' },
      { phrase: "I was wondering why", meaning: 'Fazer uma pergunta indireta sobre um motivo' }
    ],
    collocations: ["I was wondering if", "reschedule the meeting", "late checkout"],
    common_mistakes: [
      { wrong: 'I was wandering if...', right: 'I was wondering if...', tip: 'Cuidado com a grafia e pronúncia. "Wandering" significa vagar/andar sem rumo. "Wondering" é se perguntar/imaginar.' },
      { wrong: 'I was wondering if can you help me.', right: 'I was wondering if you could help me.', tip: 'Não inverta o verbo (can you). A frase já foi introduzida por "I was wondering", então a segunda parte é afirmativa normal ("you could").' }
    ],
    retrieval_context: 'Você precisa pedir um favor grande para um colega de outra equipe que está muito ocupado.',
    retrieval_prompt: 'Seja extremamente polido: use "eu estava me perguntando se" para perguntar se ele poderia (could) dar uma olhada (take a look) no código.',
    retrieval_reference: "Exemplo: 'I was wondering if you could take a look at the code.'",
    drills: [
      { instruction: 'Forme o pedido polido.', input: 'Eu estava me perguntando se nós poderíamos conversar.', answer: 'I was wondering if we could talk.' },
      { instruction: 'Traduza o pedido de reagendamento.', input: 'Eu estava me perguntando se você poderia reagendar.', answer: 'I was wondering if you could reschedule.' },
      { instruction: 'Corrija a pergunta dupla.', input: 'I was wondering if would you go.', answer: 'I was wondering if you would go.' },
      { instruction: 'Revisão (Dia 25): Substitua o I\'d like por I was wondering.', input: 'Eu gostaria de pedir um favor.', answer: 'I was wondering if I could ask a favor.' },
      { instruction: 'SÍNTESE: Junte com Contraste (Dia 43).', input: 'Eu estava me perguntando se você poderia ajudar. No entanto (however), eu sei que você está ocupado.', answer: 'I was wondering if you could help. However, I know you are busy.' },
      { instruction: 'Faça uma pergunta indireta (why).', input: 'Eu estava me perguntando por que o servidor caiu.', answer: 'I was wondering why the server crashed.' },
      { instruction: 'SÍNTESE 2: O Contraponto (Dia 46).', input: 'Por um lado, eu estava me perguntando se eu deveria ir. Por outro lado, eu não tenho tempo.', answer: 'On the one hand, I was wondering if I should go. On the other hand, I have no time.' }
    ],
    connects_to: [25, 43, 46],
    review_of: "Exige a fusão do 'could' (Dia 21/25) em uma nova moldura diplomática, quebrando a mania de fazer perguntas diretas.",
    daily_resources: {
      ted: { title: 'The power of asking', url: 'https://www.ted.com/talks/amanda_palmer_the_art_of_asking', tip: 'Observe como pedidos vulneráveis usam aberturas longas.' },
      podcast: { title: 'ESL Podcast - Asking for Favors', url: 'https://www.eslpod.com', tip: 'Preste atenção em como as palavras "wondering" e "if" se grudam (wondering-if).' },
      onelook_word: 'wondering',
      anki_card: { front: 'Transforme num pedido hiper-polido: Can you help me?', back: 'I was wondering if you could help me.' },
      speaking_prompt: "Faça 3 pedidos impossíveis usando a estrutura polida. Ex: 'I was wondering if you could give me a million dollars...'"
    }
  },
  {
    id: 58,
    level: 'B2',
    module: 6,
    moduleTitle: 'Expressões de Alta Frequência',
    structure: "I'm afraid we can't meet the deadline this week.",
    translation: 'Eu temo que nós não possamos cumprir o prazo esta semana.',
    explanation: '"I\'m afraid" não significa "Eu estou com medo" neste contexto corporativo. É a expressão clássica para entregar más notícias ("Temo que..." / "Sinto muito, mas..."). É como se você estivesse arrependido antecipadamente pelo que vai dizer.',
    why_it_matters: 'Dizer "No, we can\'t" é seco e rude. "I\'m afraid we can\'t" mostra empatia. É obrigatório em atendimentos a clientes, recusas de propostas ou alertas de atraso.',
    pronunciation: '/aɪm əˈfreɪd/',
    stress_tip: 'O "-FRAID" ganha o tom condescendente de quem dá uma má notícia.',
    pattern: 'I\'m afraid + [Má Notícia (Sujeito + Verbo)]',
    breakdown: [
      { piece: "I'm afraid", role: 'Abertura polida para má notícia (Temo que / Infelizmente)' },
      { piece: "we can't meet", role: 'A incapacidade real' },
      { piece: 'the deadline', role: 'O objeto da falha' },
      { piece: 'this week', role: 'Advento de tempo' }
    ],
    core_vocabulary: [
      { word: "I'm afraid", translation: 'temo que / sinto muito, mas', example: 'I\'m afraid I have to go.' },
      { word: 'meet the deadline', translation: 'cumprir o prazo', example: 'We will meet the deadline.' },
      { word: 'afraid of', translation: 'com medo de (sentido literal)', example: 'I am afraid of spiders.' }
    ],
    examples: {
      work: { en: "I'm afraid he is not in the office right now.", pt: 'Sinto muito, mas ele não está no escritório no momento.' },
      travel: { en: "I'm afraid your flight has been canceled.", pt: 'Temo que o seu voo tenha sido cancelado.' },
      study: { en: "I'm afraid I didn't understand the question.", pt: 'Temo não ter entendido a pergunta.' }
    },
    variations: [
      { form: "Unfortunately", note: 'Sinônimo perfeito, mas mais formal e impessoal ("Infelizmente").' },
      { form: "I'm sorry, but", note: 'Mais conversacional, porém o "I\'m afraid" soa mais executivo.' }
    ],
    combinations: [
      { phrase: "I'm afraid not", meaning: 'Resposta curta e polida para "Não"' },
      { phrase: "I'm afraid so", meaning: 'Resposta curta e polida confirmando uma má notícia ("Temo que sim")' }
    ],
    collocations: ["I'm afraid", "meet the deadline", "I'm afraid not"],
    common_mistakes: [
      { wrong: 'I have afraid...', right: 'I am afraid...', tip: 'Medo em inglês é uma condição de estar, não de ter. Usa-se sempre o verbo To Be.' },
      { wrong: 'I am afraid that we cancel.', right: 'I am afraid we have to cancel.', tip: 'Não esqueça os verbos modais. A má notícia geralmente envolve um "não posso" (can\'t) ou "tenho que" (have to).' }
    ],
    retrieval_context: 'Um cliente liga perguntando se a feature já está pronta. O deploy falhou.',
    retrieval_prompt: 'Dê a má notícia com polidez: "Temo que" não está pronto ainda (ready yet).',
    retrieval_reference: "Exemplo: 'I'm afraid it is not ready yet.'",
    drills: [
      { instruction: 'Entregue a má notícia.', input: 'Temo que nós estejamos atrasados.', answer: "I'm afraid we are late." },
      { instruction: 'Forme a resposta curta de confirmação ruim.', input: 'Nós perdemos os dados? Temo que sim.', answer: "Did we lose the data? I'm afraid so." },
      { instruction: 'Traduza cumprir o prazo.', input: 'Temo que nós não possamos cumprir o prazo.', answer: "I'm afraid we can't meet the deadline." },
      { instruction: 'Revisão (Dia 48 e 49): Má notícia + Consequência.', input: 'Temo que o banco de dados caiu; como resultado (as a result), o site está offline.', answer: "I'm afraid the database crashed; as a result, the site is offline." },
      { instruction: 'Revisão (Dia 53): Concessão após má notícia.', input: 'Temo que nós falhamos. Dito isso (Having said that), nós aprendemos muito.', answer: "I'm afraid we failed. Having said that, we learned a lot." },
      { instruction: 'SÍNTESE: Una "Afraid" com Condicional (Dia 34).', input: 'Temo que o projeto morra a menos que (unless) a gente consiga dinheiro.', answer: "I'm afraid the project will die unless we get money." },
      { instruction: 'Substitua pela versão formal.', input: 'Infelizmente, eu tenho que sair.', answer: 'Unfortunately, I have to leave.' }
    ],
    connects_to: [34, 48, 49, 53],
    review_of: "Exige que o aluno consiga abrir frases com impacto emocional suave antes de despejar a lógica pesada e as consequências restritivas (unless, therefore) vistas nos módulos passados.",
    daily_resources: {
      ted: { title: 'How to deliver bad news', url: 'https://www.ted.com/talks/joan_z_borysenko_how_to_deliver_bad_news', tip: 'Perceba o tom de voz calmo que acompanha expressões atenuantes.' },
      podcast: { title: 'ESL Podcast - Giving Bad News', url: 'https://www.eslpod.com', tip: 'Treine a resposta curta: I\'m afraid so.' },
      onelook_word: 'afraid',
      anki_card: { front: 'Como você responde de forma executiva a um "O projeto vai atrasar?" (Temo que sim)', back: "I'm afraid so." },
      speaking_prompt: "Faça o papel de um médico de plantão ou mecânico dando más notícias: 'I'm afraid the engine is broken. I'm afraid you need surgery...'"
    }
  },
  {
    id: 59,
    level: 'B2',
    module: 6,
    moduleTitle: 'Expressões de Alta Frequência',
    structure: "It turns out the bug was in the old code, not the new one.",
    translation: 'Acontece que / Acabou que o bug estava no código antigo, não no novo.',
    explanation: 'A expressão absoluta das reviravoltas. "It turns out" é usado quando você descobre algo novo, surpreendente ou contrário ao que todos achavam. É a tradução perfeita para o nosso "acabou que..." ou "no fim das contas...".',
    why_it_matters: 'Para explicar resultados de investigações (debugging). Você passa horas caçando um erro e, na daily, você diz: "Achei que era o banco de dados, mas it turns out era o cache".',
    pronunciation: '/ɪt tɜrnz aʊt/',
    stress_tip: 'O "turns out" é falado como uma palavra só, com forte ênfase no OUT.',
    pattern: 'It turns out (that) + [A Descoberta / O Fato Surpreendente]',
    breakdown: [
      { piece: 'It turns out', role: 'Marcador de revelação (Acabou que / Descobriu-se que)' },
      { piece: 'the bug was in the old code,', role: 'O fato revelado que contraria a crença anterior' },
      { piece: 'not the new one', role: 'A correção da expectativa' }
    ],
    core_vocabulary: [
      { word: 'it turns out', translation: 'acabou que / no fim das contas', example: 'It turns out she was right.' },
      { word: 'turn out', translation: 'resultar / acabar sendo', example: 'How did the event turn out?' },
      { word: 'bug', translation: 'erro no sistema', example: 'Fix the bug.' }
    ],
    examples: {
      work: { en: "We worried about the presentation, but it turned out great.", pt: 'Nós nos preocupamos com a apresentação, mas acabou sendo ótima.' },
      travel: { en: "It turns out the museum is closed on Mondays.", pt: 'Acontece que o museu fecha às segundas.' },
      study: { en: "It turns out I didn't need to read the whole book.", pt: 'Acabou que eu não precisava ler o livro todo.' }
    },
    variations: [
      { form: "As it turns out", note: 'Um pouco mais alongado ("Como se viu...").' },
      { form: "It turned out that", note: 'No passado absoluto ("Acabou que...").' }
    ],
    combinations: [
      { phrase: "It turns out that we", meaning: 'Revelação de fato' },
      { phrase: "Turned out to be", meaning: 'Acabou sendo (It turned out to be a disaster)' }
    ],
    collocations: ["it turns out", "as it turns out", "turned out to be"],
    common_mistakes: [
      { wrong: 'In the end, happened that...', right: 'It turns out that...', tip: 'Brasileiros tentam traduzir "acontece que" literalmente (happens that). Nativos sempre usam "It turns out".' },
      { wrong: 'It turn out...', right: 'It turns out...', tip: 'Não esqueça o "S" no turns, pois o sujeito é "It".' }
    ],
    retrieval_context: 'Todos achavam que o servidor gringo caiu, mas na verdade a internet do escritório inteiro é que falhou.',
    retrieval_prompt: 'Use a expressão de revelação para dizer que "acabou que" foi a nossa internet.',
    retrieval_reference: "Exemplo: 'It turns out it was our internet.'",
    drills: [
      { instruction: 'Faça a revelação surpreendente.', input: 'Acabou que ele estava mentindo.', answer: 'It turns out he was lying.' },
      { instruction: 'Forme a estrutura com "to be".', input: 'A ideia acabou sendo (turned out to be) um sucesso.', answer: 'The idea turned out to be a success.' },
      { instruction: 'Corrija a tradução literal.', input: 'Happens that it was true.', answer: 'It turns out it was true.' },
      { instruction: 'Revisão (Dia 44): Junte a revelação à concessão.', input: 'Acabou que estava chovendo. Embora (although) chovesse, nós fomos.', answer: 'It turns out it was raining. Although it rained, we went.' },
      { instruction: 'Revisão (Dia 58): A má notícia seguida da revelação.', input: 'Temo que nós perdemos a conta. Acabou que ele deletou.', answer: "I'm afraid we lost the account. It turns out he deleted it." },
      { instruction: 'SÍNTESE: Revelação e Sumarização (Dia 54).', input: 'Descobriu-se que o código é velho. Para resumir (To sum up), nós refatoraremos.', answer: 'It turns out the code is old. To sum up, we will refactor.' },
      { instruction: 'Revisão (Dia 31): Contrafactual pós-revelação.', input: 'Acabou que eles estavam mentindo. Se eu soubesse, não teria comprado.', answer: 'It turns out they were lying. If I had known, I wouldn\'t have bought it.' }
    ],
    connects_to: [31, 44, 54, 58],
    review_of: "Exige o emparelhamento com ferramentas de má notícia e sumário, criando pequenas histórias de causa, surpresa e conclusão (storytelling técnico).",
    daily_resources: {
      ted: { title: 'The surprising science of happiness', url: 'https://www.ted.com/talks/dan_gilbert_the_surprising_science_of_happiness', tip: 'Observe quantas vezes a ciência quebra paradigmas usando "It turns out".' },
      podcast: { title: 'ESL Podcast - Solving Mysteries', url: 'https://www.eslpod.com', tip: 'Note a ênfase vocal em "turns out", que marca a descoberta.' },
      onelook_word: 'turns',
      anki_card: { front: 'Qual é o Idiom exato para "No fim das contas / Acabou que..."?', back: 'It turns out...' },
      speaking_prompt: "Conte um segredo do seu código ou da sua rotina: 'We thought X was the problem, but it turns out...'"
    }
  },
  {
    id: 60,
    level: 'B2',
    module: 6,
    moduleTitle: 'Expressões de Alta Frequência',
    structure: "We planned to use Python, but we ended up using Node.js.",
    translation: 'Nós planejamos usar Python, mas nós acabamos usando Node.js.',
    explanation: 'A expressão-irmã do "it turns out". Enquanto "turn out" é uma descoberta externa, "ended up" é uma AÇÃO final que você tomou, diferente do plano inicial. Detalhe crucial: Qualquer verbo que venha depois de "ended up" OBRIGATORIAMENTE tem que estar no gerúndio (-ING).',
    why_it_matters: 'É a frase mais usada em retrospectivas ágeis ("O que fizemos hoje?"). Mostra adaptação. Nativos usam o tempo todo para justificar mudanças de rota.',
    pronunciation: '/ɛndɪd ʌp/',
    stress_tip: 'A conexão D-U é vital: soa como "en-di-dap".',
    pattern: '[Plano Original], but + [Sujeito] + ended up + Verbo-ING',
    breakdown: [
      { piece: 'We planned to use Python,', role: 'A intenção original frustrada' },
      { piece: 'but we ended up', role: 'Marcador de desfecho de ação não planejada (acabamos por)' },
      { piece: 'using', role: 'Verbo da ação final obrigando o -ING' },
      { piece: 'Node.js', role: 'O objeto final' }
    ],
    core_vocabulary: [
      { word: 'end up', translation: 'acabar (fazendo algo) / ir parar (em algum lugar)', example: 'Where will we end up?' },
      { word: 'plan', translation: 'planejar', example: 'We planned this.' },
      { word: 'use', translation: 'usar', example: 'We ended up using it.' }
    ],
    examples: {
      work: { en: "The meeting dragged on, and I ended up working late.", pt: 'A reunião se arrastou, e eu acabei trabalhando até tarde.' },
      travel: { en: "We got lost and ended up in a dangerous neighborhood.", pt: 'Nós nos perdemos e acabamos num bairro perigoso.' },
      study: { en: "I couldn't fix the bug, so I ended up rewriting everything.", pt: 'Eu não consegui consertar o bug, então acabei reescrevendo tudo.' }
    },
    variations: [
      { form: "End up + [Lugar]", note: 'Também serve para destino geográfico ("We ended up in Paris").' },
      { form: "End up + [Adjetivo]", note: 'Para estado final ("He ended up broke" - acabou falido).' }
    ],
    combinations: [
      { phrase: "I ended up having to", meaning: 'Eu acabei tendo que (dupla obrigação)' },
      { phrase: "We will end up losing", meaning: 'Projeção futura de desastre ("Nós vamos acabar perdendo")' }
    ],
    collocations: ["ended up using", "ended up going", "ended up in"],
    common_mistakes: [
      { wrong: 'I ended up to work late.', right: 'I ended up working late.', tip: 'O ERRO MAIS MORTAL. "End up" abomina infinitivos com "to". Exige sempre o verbo no -ING depois dele.' },
      { wrong: 'I finished up working...', right: 'I ended up working...', tip: 'Nunca traduza o "acabei" do português como "finished". O idiomático para desfecho de caminho é "ended up".' }
    ],
    retrieval_context: 'Você queria comprar um carro barato, mas a lábia do vendedor foi tanta que você saiu da loja com um SUV caríssimo.',
    retrieval_prompt: 'Diga que você queria um barato, mas "acabou comprando" (buying) um SUV.',
    retrieval_reference: "Exemplo: 'I wanted a cheap one, but I ended up buying an SUV.'",
    drills: [
      { instruction: 'Forme o desfecho com verbo.', input: 'Eu acabei pagando (pay) a conta.', answer: 'I ended up paying the bill.' },
      { instruction: 'Lembre-se do -ING obrigatório.', input: 'Nós acabamos ficando (stay) em casa.', answer: 'We ended up staying home.' },
      { instruction: 'Forme com destino (sem ING).', input: 'Nós nos perdemos e acabamos em Tóquio.', answer: 'We got lost and ended up in Tokyo.' },
      { instruction: 'Revisão (Dia 59): Descobriu vs Fez.', input: 'Acabou que (it turns out) era quebrado, então eu acabei consertando (end up fixing).', answer: 'It turns out it was broken, so I ended up fixing it.' },
      { instruction: 'SÍNTESE: Junte com Contraste Extremo (Dia 51) e Sumário (Dia 54).', input: 'Em contraste, eles acabaram falhando. Resumindo, nós vencemos.', answer: 'In contrast, they ended up failing. To sum up, we won.' },
      { instruction: 'Projeção Futura.', input: 'Se nós formos, nós acabaremos gastando dinheiro.', answer: 'If we go, we will end up spending money.' },
      { instruction: 'Revisão (Dia 29 e 45): Apesar do problema, o motivo.', input: 'Apesar do atraso, eu acabei indo, e é por isso que estou cansado.', answer: "Despite the delay, I ended up going, and that's why I am tired." }
    ],
    connects_to: [29, 45, 51, 54, 59],
    review_of: "Exige o policiamento rigoroso do gerúndio (-ING) enquanto contrasta com 'It turns out' e conecta com sumários textuais.",
    daily_resources: {
      ted: { title: 'Inside the mind of a master procrastinator', url: 'https://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator', tip: 'Observe as ações de procrastinação ("I ended up watching YouTube...").' },
      podcast: { title: 'ESL Podcast - Changing Plans', url: 'https://www.eslpod.com', tip: 'Ouça o link fonético constante do ended up com o verbo em ING.' },
      onelook_word: 'ended',
      anki_card: { front: 'Acerte o erro fatal: We ended up to buy the server.', back: 'We ended up BUYING the server. (Sempre ING!).' },
      speaking_prompt: "Conte como foi o seu final de semana: planos originais vs realidade. 'I planned to sleep, but I ended up...'"
    }
  },
  {
    id: 61,
    level: 'B2',
    module: 6,
    moduleTitle: 'Expressões de Alta Frequência',
    structure: "I know it's expensive, but I couldn't help buying it.",
    translation: 'Eu sei que é caro, mas eu não pude evitar comprar.',
    explanation: 'Uma expressão idiomática belíssima e um pouco confusa no início. "Can\'t help" não significa "não posso ajudar". Significa "Não consigo evitar / Não consigo me conter". E assim como o "ended up", ELA EXIGE O VERBO EM -ING NA SEQUÊNCIA.',
    why_it_matters: 'Perfeita para confessar vícios, justificativas de humor ou reações emocionais incontroláveis. "I couldn\'t help laughing" soa imensamente mais nativo do que "I could not avoid to laugh".',
    pronunciation: '/aɪ ˈkʊdənt hɛlp/',
    stress_tip: 'A pronúncia do "couldn\'t" ignora a letra L. Soa como "CÚD-nt". O peso cai em HELP.',
    pattern: 'I can\'t/couldn\'t help + Verbo-ING',
    breakdown: [
      { piece: "I know it's expensive,", role: 'A confissão racional' },
      { piece: "but I couldn't help", role: 'Expressão de falta de contenção (eu não pude evitar)' },
      { piece: 'buying it', role: 'A ação incontrolável (exige -ING)' }
    ],
    core_vocabulary: [
      { word: "can't help", translation: 'não conseguir evitar/conter', example: 'I can\'t help eating chocolate.' },
      { word: "couldn't help", translation: 'não pude evitar', example: 'I couldn\'t help crying.' },
      { word: 'expensive', translation: 'caro', example: 'It is too expensive.' }
    ],
    examples: {
      work: { en: "When the CEO tripped, I couldn't help laughing.", pt: 'Quando o CEO tropeçou, eu não pude evitar rir.' },
      travel: { en: "The view was so beautiful, I couldn't help taking photos.", pt: 'A vista era tão linda, não pude evitar tirar fotos.' },
      study: { en: "The puzzle was addictive, I couldn't help playing it all night.", pt: 'O quebra-cabeça era viciante, não pude evitar jogar a noite toda.' }
    },
    variations: [
      { form: "I can't help but [verb]", note: 'Uma variação mais poética/dramática que não usa ING ("I can\'t help but wonder..."). Mas para ações normais, prefira a com ING.' }
    ],
    combinations: [
      { phrase: "I couldn't help noticing", meaning: 'Eu não pude deixar de notar (muito usado para puxar assunto com desconhecidos)' }
    ],
    collocations: ["couldn't help noticing", "can't help but", "couldn't help laughing"],
    common_mistakes: [
      { wrong: 'I could not avoid to laugh.', right: 'I couldn\'t help laughing.', tip: '"Avoid" é usado para evitar perigos (avoid an accident). Para comportamentos/impulsos que você não contém, é "can\'t help".' },
      { wrong: 'I can\'t help to look.', right: 'I can\'t help looking.', tip: 'A regra de ouro: can\'t help + ING.' }
    ],
    retrieval_context: 'Você estava olhando a tela de um colega sem querer e viu um erro gravíssimo no código dele. Você se intromete para avisar.',
    retrieval_prompt: 'Aja polidamente: diga "Eu não pude deixar de notar" (noticing) o erro.',
    retrieval_reference: "Exemplo: 'I couldn't help noticing the error.'",
    drills: [
      { instruction: 'Forme a expressão de não se conter.', input: 'Eu não consigo evitar chorar (cry).', answer: "I can't help crying." },
      { instruction: 'Lembre-se do -ING.', input: 'Eu não pude evitar pensar (think) sobre isso.', answer: "I couldn't help thinking about it." },
      { instruction: 'Traduzindo o "avoid" falso.', input: 'Eu não pude deixar de rir.', answer: "I couldn't help laughing." },
      { instruction: 'Revisão (Dia 60): Desfecho e Inevitabilidade.', input: 'Eu não pude evitar falar, e acabei (ended up) arruinando tudo.', answer: "I couldn't help speaking, and I ended up ruining everything." },
      { instruction: 'SÍNTESE: Una "Afraid" (Dia 58) com Inevitável.', input: 'Temo que o prazo falhe. Eu não consigo evitar me preocupar (worrying).', answer: "I'm afraid the deadline will fail. I can't help worrying." },
      { instruction: 'Revisão (Dia 52 e 55): Exaltação extrema.', input: 'Não só é incrível, mas eu também não pude evitar comprar. E ainda por cima (what\'s more), foi barato.', answer: "Not only is it amazing, but I also couldn't help buying it. What's more, it was cheap." },
      { instruction: 'Puxe assunto (noticing).', input: 'Eu não pude deixar de notar a sua camisa.', answer: "I couldn't help noticing your shirt." }
    ],
    connects_to: [52, 55, 58, 60],
    review_of: "Exige o domínio fonético da negativa modal e a persistência do foco no gerúndio (ING) herdado do 'ended up', além da conexão com expressões de emoção extrema.",
    daily_resources: {
      ted: { title: 'The art of misdirection', url: 'https://www.ted.com/talks/apollo_robbins_the_art_of_misdirection', tip: 'Note como ilusões forçam nossa atenção ("You can\'t help looking at...").' },
      podcast: { title: 'ESL Podcast - Making Confessions', url: 'https://www.eslpod.com', tip: 'Treine a fluidez de "couldn\'t-help-noticing".' },
      onelook_word: 'help',
      anki_card: { front: 'Conserte a frase: I couldn\'t avoid to cry.', back: 'I couldn\'t help crying.' },
      speaking_prompt: "Faça uma confissão dos seus hábitos ruins da madrugada: 'I know I need to sleep, but I can't help scrolling...'"
    }
  },
  {
    id: 62,
    level: 'B2',
    module: 6,
    moduleTitle: 'Expressões de Alta Frequência',
    structure: "The market is too unstable right now; we can't afford to take risks.",
    translation: 'O mercado está muito instável agora; nós não podemos nos dar ao luxo de correr riscos.',
    explanation: 'Originalmente, "afford" significa "ter dinheiro para comprar algo". No entanto, o Idiom "can\'t afford TO" no ambiente corporativo evoluiu para "não ter margem de erro/não poder se dar ao luxo de". É a declaração máxima de gestão de riscos e cautela.',
    why_it_matters: 'Para argumentações lógicas imbatíveis. Quando o seu chefe sugere um prazo louco, você não diz "Isso é ruim". Você diz "We can\'t afford to fail", transferindo a discussão para o terreno da sobrevivência do projeto.',
    pronunciation: '/kænt əˈfɔrd tu/',
    stress_tip: 'O "-FFORD" ganha muita força, alongando o "O".',
    pattern: 'Subject + can\'t/couldn\'t afford to + Verbo Base',
    breakdown: [
      { piece: 'The market is too unstable', role: 'Fato preocupante / Contexto' },
      { piece: "we can't afford to", role: 'Marcador de risco crítico (não temos margem para / não podemos nos dar ao luxo)' },
      { piece: 'take risks', role: 'A ação proibitiva' }
    ],
    core_vocabulary: [
      { word: "can't afford to", translation: 'não se dar ao luxo de / não poder arriscar', example: 'We can\'t afford to wait.' },
      { word: 'afford', translation: 'ter condições financeiras para (literal)', example: 'I can\'t afford a Ferrari.' },
      { word: 'unstable', translation: 'instável', example: 'The connection is unstable.' },
      { word: 'take risks', translation: 'correr riscos', example: 'Entrepreneurs take risks.' }
    ],
    examples: {
      work: { en: "With the deadline so close, we can't afford to make mistakes.", pt: 'Com o prazo tão perto, nós não podemos nos dar ao luxo de cometer erros.' },
      travel: { en: "I can't afford to miss this flight; it's the last one.", pt: 'Eu não posso me dar ao luxo de perder este voo; é o último.' },
      study: { en: "You can't afford to skip classes if you want to graduate.", pt: 'Você não pode se dar ao luxo de faltar aulas se quer se formar.' }
    },
    variations: [
      { form: "We simply cannot afford", note: 'Adicionando o "simply" e abrindo o can\'t para dar um drama inquestionável na mesa de reunião.' }
    ],
    combinations: [
      { phrase: "can't afford to lose", meaning: 'Não pode perder (tempo/dinheiro/clientes)' },
      { phrase: "can't afford to ignore", meaning: 'Não se pode dar ao luxo de ignorar (sinal de alerta)' }
    ],
    collocations: ["can't afford to", "take risks", "afford to lose"],
    common_mistakes: [
      { wrong: 'We can\'t risk to lose...', right: 'We can\'t afford to lose...', tip: 'Embora a primeira seja compreensível, o idioma nativo corporativo confia integralmente na estrutura "afford to" para gerir riscos.' },
      { wrong: 'I afford to do it.', right: 'I can afford to do it.', tip: '"Afford" quase nunca vem sem o auxiliar "can" (ou be able to). Não se conjuga "afford" puro como um verbo de ação normal.' }
    ],
    retrieval_context: 'Um competidor lançou uma feature matadora. Seu time quer adiar o seu próprio lançamento. Você diz que o mercado não perdoa, e dá um ultimato estratégico.',
    retrieval_prompt: 'Proíba a inação: diga que "nós não podemos nos dar ao luxo" de perder clientes (lose clients).',
    retrieval_reference: "Exemplo: 'We can't afford to lose clients.'",
    drills: [
      { instruction: 'Forme o alerta de risco.', input: 'Nós não podemos nos dar ao luxo de esperar.', answer: "We can't afford to wait." },
      { instruction: 'Traduza o sentido literal (dinheiro).', input: 'Eu não tenho condições de comprar esta casa.', answer: "I can't afford to buy this house." },
      { instruction: 'SÍNTESE: Junte o Risco com a Conclusão Suprema (Dia 49).', input: 'Nós não podemos nos dar ao luxo de errar; portanto (therefore), testaremos duas vezes.', answer: "We can't afford to make mistakes; therefore, we will test it twice." },
      { instruction: 'Revisão (Dia 60 e 61): Tríade das Expressões B2.', input: 'Eu não pude evitar notar. Acabou que ele falhou. Nós não podemos nos dar ao luxo de perdê-lo.', answer: "I couldn't help noticing. It turns out he failed. We can't afford to lose him." },
      { instruction: 'Revisão (Dia 45): Apesar de...', input: 'Apesar do preço (Despite the price), nós não podemos nos dar ao luxo de não comprá-lo.', answer: "Despite the price, we can't afford not to buy it." },
      { instruction: 'Projeção futura dramática.', input: 'Se você sair agora, você não poderá se dar ao luxo de voltar.', answer: "If you leave now, you won't be able to afford to come back." },
      { instruction: 'SÍNTESE 2: Junte com Necessidade Óbvia (Dia 56).', input: 'Nem precisa dizer, nós não podemos nos dar ao luxo de ignorar isso.', answer: "Needless to say, we can't afford to ignore it." }
    ],
    connects_to: [45, 49, 56, 60, 61],
    review_of: "Exige o encadeamento do alerta máximo com o 'therefore' e 'needless to say', gerando um discurso executivo impecável para defender orçamentos e prazos.",
    daily_resources: {
      ted: { title: 'The urgency of intersectionality', url: 'https://www.ted.com/talks/kimberle_crenshaw_the_urgency_of_intersectionality', tip: 'Observe como o palestrante trata a inação social como um risco inaceitável ("We can\'t afford to...").' },
      podcast: { title: 'ESL Podcast - Making Difficult Decisions', url: 'https://www.eslpod.com', tip: 'Treine a entonação do CAN\'T, que tem que ser forte e clara para a negação.' },
      onelook_word: 'afford',
      anki_card: { front: 'Como dizer "Não podemos nos dar ao luxo de cometer erros" em inglês?', back: 'We can\'t afford to make mistakes.' },
      speaking_prompt: "Avise a si mesmo num espelho dos riscos de não estudar: 'You can't afford to be lazy... You can't afford to waste time...'"
    }
  },
  {
    id: 63,
    level: 'B2',
    module: 6,
    moduleTitle: 'Expressões de Alta Frequência',
    structure: "I'm looking forward to working with you on this project.",
    translation: 'Estou ansioso para / no aguardo de trabalhar com você neste projeto.',
    explanation: 'A expressão absoluta para fechar e-mails profissionais com educação e entusiasmo. Significa que você vê o futuro de forma positiva e está "olhando para frente". ATENÇÃO GRAMATICAL C1: O "to" no final dessa expressão é uma PREPOSIÇÃO, não o marcador do infinitivo. Isso significa que o verbo logo a seguir TEM QUE ESTAR NO -ING.',
    why_it_matters: 'O maior erro de brasileiros (até mesmo de nível Avançado) é escrever "Looking forward to work". Isso causa sangramento nos olhos de qualquer gerente estrangeiro. Consertar o -ING aqui é o polimento definitivo da sua imagem profissional escrita.',
    pronunciation: '/lʊkɪŋ ˈfɔrwərd tu/',
    stress_tip: 'A força principal está na primeira sílaba do FORward.',
    pattern: 'Looking forward to + Substantivo ou Verbo-ING',
    breakdown: [
      { piece: "I'm looking forward to", role: 'Expressão de antecipação animada (Estou ansioso por)' },
      { piece: 'working with you', role: 'Ação futura OBRIGATORIAMENTE no gerúndio (ING)' },
      { piece: 'on this project', role: 'Contexto da ação' }
    ],
    core_vocabulary: [
      { word: 'looking forward to', translation: 'ansioso por / no aguardo de', example: 'I look forward to our meeting.' },
      { word: 'work', translation: 'trabalhar', example: 'I look forward to working.' },
      { word: 'hear from you', translation: 'receber notícias suas', example: 'I look forward to hearing from you.' }
    ],
    examples: {
      work: { en: "We are looking forward to receiving your proposal.", pt: 'Estamos ansiosos para receber sua proposta.' },
      travel: { en: "I'm looking forward to relaxing on the beach.", pt: 'Estou ansioso para relaxar na praia.' },
      study: { en: "She is looking forward to graduating next year.", pt: 'Ela está ansiosa para se formar no ano que vem.' }
    },
    variations: [
      { form: "I look forward to", note: 'A versão no Presente Simples. É ainda mais formal. Extremamente comum no fecho de Cartas Cover/Resumes.' },
      { form: "Looking forward to it", note: 'Resposta curta e rápida para aprovar planos na hora do café.' }
    ],
    combinations: [
      { phrase: "Looking forward to hearing from you", meaning: 'A despedida universal para e-mails onde você espera uma resposta' }
    ],
    collocations: ["look forward to", "looking forward to seeing", "looking forward to hearing"],
    common_mistakes: [
      { wrong: 'I look forward to see you.', right: 'I look forward to SEEING you.', tip: 'A ARMADILHA C1: Aprenda a tatuar na alma que "Looking forward TO" é seguido de -ING.' },
      { wrong: 'I am anxious to work with you.', right: 'I am looking forward to working with you.', tip: '"Anxious" em inglês carrega o significado patológico de ansiedade (medo, pânico). Para "ansiedade boa/empolgação", é "look forward to".' }
    ],
    retrieval_context: 'Fim da entrevista de emprego com o CTO gringo. Tudo foi ótimo. Ele diz que te manda a resposta amanhã. Você quer soar profissional, animado e fluente.',
    retrieval_prompt: 'Despeça-se com o clássico "Estou ansioso para ter notícias suas" (hearing from you).',
    retrieval_reference: "Exemplo: 'I am looking forward to hearing from you.'",
    drills: [
      { instruction: 'Forme a saudação padrão com o ING OBRIGATÓRIO.', input: 'Estou ansioso para trabalhar com vocês.', answer: "I'm looking forward to working with you." },
      { instruction: 'Use a versão ainda mais formal (I look).', input: 'Eu anseio receber (receive) os dados.', answer: 'I look forward to receiving the data.' },
      { instruction: 'Corrija o erro clássico.', input: 'I am looking forward to go.', answer: "I am looking forward to going." },
      { instruction: 'Apenas substantivos (sem verbo, logo, sem ING).', input: 'Estou ansioso para a festa.', answer: "I'm looking forward to the party." },
      { instruction: 'Revisão (Dia 58): Quebre o clima e despeça-se.', input: 'Sinto muito, mas temo que (I\'m afraid) eu tenha que sair. Estou ansioso para ver vocês amanhã.', answer: "I'm afraid I have to leave. I'm looking forward to seeing you tomorrow." },
      { instruction: 'Revisão (Dia 53): Concessão no e-mail.', input: 'O prazo é apertado. Dito isso, estou ansioso para começar (starting).', answer: "The deadline is tight. Having said that, I'm looking forward to starting." },
      { instruction: 'Revisão Geral do ING Oculto (Dias 45, 60, 61, 63).', input: 'Apesar de (despite) falhar, eu acabei rindo (ended up), e eu não pude evitar tentar de novo (couldn\'t help). Estou ansioso para vencer.', answer: "Despite failing, I ended up laughing, and I couldn't help trying again. I'm looking forward to winning." }
    ],
    connects_to: [45, 53, 58, 60, 61],
    review_of: "Exige a consolidação máxima de todas as armadilhas de Gerúndio embutidas em Idioms (-ING após conectores e preposições fixas).",
    daily_resources: {
      ted: { title: 'How to build (and rebuild) trust', url: 'https://www.ted.com/talks/frances_frei_how_to_build_and_rebuild_trust', tip: 'No fim de palestras e pitchs, observe a expectativa positiva.' },
      podcast: { title: 'ESL Podcast - Writing Business Emails', url: 'https://www.eslpod.com', tip: 'A principal aula de e-mails, batendo forte no erro do ING faltante.' },
      onelook_word: 'forward',
      anki_card: { front: 'Conserte a frase que mata o RH: I look forward to work with you.', back: 'I look forward to WORKING with you. (Sempre com ING).' },
      speaking_prompt: "Faça seu discurso de final de ano na empresa: 'I'm proud of what we did. I'm looking forward to...'"
    }
  }
]

export const BATCH_57_63_SUMMARY = {
  range: '57-63',
  theme: 'Módulo 6: Expressões Idiomáticas (Chunks do Dia a Dia B2)',
  levels: ['B2'],
  structures: [
    'I was wondering — O pedido diplomático supremo mascarado de dúvida',
    "I'm afraid — A entrega polida de más notícias corporativas",
    'It turns out — Revelação e reviravoltas de roteiro',
    'I ended up — Desfechos não planejados (exige ING)',
    "I couldn't help — Confissões e impulsos incontroláveis (exige ING)",
    "I can't afford to — Gestão de riscos absolutos (não ter margem para)",
    "I'm looking forward to — A despedida clássica dos e-mails (exige ING)"
  ],
  grammar_arcs: [
    'O Desapego da Gramática Dura. O aluno aprende a não traduzir mais as coisas literalmente (happens that -> it turns out, couldn\'t avoid -> couldn\'t help, anxious to -> looking forward to).',
    'A Guerra do ING (Gerúndio Preposicional). Ao contrário do Módulo 4 e 5 onde o foco era estruturação, aqui a armadilha está em colocar o ING no final da expressão. O aluno percebeu que "ended up", "couldn\'t help" e "looking forward to" destroem frases se não tiverem verbos terminando em ING na sequência.'
  ],
  key_contrasts_established: [
    'Can you help me? (Direto e possivelmente rude) vs I was wondering if you could (Educação B2)',
    'It happens that (Tradução literal) vs It turns out (Idiom nativo)',
    'I finished up working (Tradução literal) vs I ended up working (Idiom nativo)',
    'I look forward to work (Erro C1 fatal) vs I look forward to working (Fluência plena)'
  ],
  vocabulary_themes: [
    'reuniões e pedidos informais: take a look, reschedule, meeting',
    'confissões de falhas e reviravoltas: tight, errors, laugh, risk'
  ],
  connects_to_next: "Batch 10 (dias 64-70): [I'd rather not, I'm used to, I'm about to, I keep + ing, I tend to, I'm willing to, I'm supposed to] — [A segunda metade do Módulo 6 fecha a caixa de ferramentas idiomáticas do dia a dia, consolidando recusas com classe, mapeamento de hábitos, e a infame expressão das expectativas vs realidade (supposed to)]."
}
