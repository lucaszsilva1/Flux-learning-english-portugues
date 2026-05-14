import type { Lesson } from '../types'

export const lessons: Lesson[] = [
  {
    id: 36,
    level: 'B1',
    module: 4,
    moduleTitle: 'Conditionals e Hipótese',
    structure: "Let's make a backup in case the server crashes again.",
    translation: 'Vamos fazer um backup pro caso do servidor cair de novo.',
    explanation: '"In case" expressa precaução. É diferente de "If" (se). Se você diz "Let\'s make a backup IF the server crashes", você só faz o backup no exato momento da queda (tarde demais). Com "in case", a ação (fazer o backup) acontece AGORA como seguro contra o futuro.',
    why_it_matters: 'Evita um erro crasso de lógica no trabalho. No ambiente corporativo, agir preventivamente ("just in case") é diferente de agir reativamente ("if"). É a base do gerenciamento de riscos corporativo.',
    pronunciation: '/ɪn keɪs/',
    stress_tip: 'O tom cai em "case" e a frase flui para o verbo que descreve o risco.',
    pattern: '[Ação preventiva presente] + in case + [risco futuro no Simple Present]',
    breakdown: [
      { piece: "Let's make a backup", role: 'Ação preventiva tomada agora' },
      { piece: 'in case', role: 'Conector de precaução (pro caso de / vai que)' },
      { piece: 'the server crashes again', role: 'O risco futuro (escrito no presente)' }
    ],
    core_vocabulary: [
      { word: 'in case', translation: 'pro caso de / no caso de', example: 'Take an umbrella in case it rains.' },
      { word: 'just in case', translation: 'só por precaução / vai que', example: 'I brought extra cash, just in case.' },
      { word: 'backup', translation: 'cópia de segurança / plano B', example: 'Do we have a backup plan?' },
      { word: 'crash', translation: 'cair/travar', example: 'The system crashed.' }
    ],
    examples: {
      work: { en: "I'll send you the file in case you need it for the meeting.", pt: 'Vou te enviar o arquivo pro caso de você precisar para a reunião.' },
      travel: { en: "Keep your passport in your pocket in case they ask for it.", pt: 'Mantenha seu passaporte no bolso no caso de eles pedirem.' },
      study: { en: "Write this down in case you forget.", pt: 'Anote isso pro caso de você esquecer.' }
    },
    variations: [
      { form: "In case of", note: 'Usado APENAS antes de substantivos (In case of emergency, in case of fire).' },
      { form: "Just in case", note: 'Pode ser usado sozinho no fim da frase para "só por precaução".' }
    ],
    combinations: [
      { phrase: "we should + do X + in case", meaning: 'Conselho focado em prevenção' },
      { phrase: "I brought it just in case", meaning: 'Aviso de preparação ("eu trouxe, vai que...")' }
    ],
    collocations: ["in case you", "in case of", "just in case", "in case it"],
    common_mistakes: [
      { wrong: 'I will call you in case I will need help.', right: 'I will call you in case I need help.', tip: 'A regra implacável do inglês: nunca use "will" na cláusula que descreve a condição temporal ou de risco (após in case, if, when, unless).' },
      { wrong: 'In case of the system crashes...', right: 'In case the system crashes... (ou In case of a crash)', tip: '"In case of" só aceita um substantivo direto. Se houver um verbo (crashes), tire o "of".' }
    ],
    retrieval_context: 'A equipe acha que o deploy vai ser tranquilo, mas você, experiente, prefere alertar para criarem um plano de reversão (rollback) agora mesmo.',
    retrieval_prompt: 'Dê um conselho (should) para criar um plano de rollback pro caso das coisas darem errado (go wrong).',
    retrieval_reference: "Exemplo: 'We should create a rollback plan in case things go wrong.'",
    drills: [
      { instruction: 'Forme a precaução.', input: 'Leve seu notebook pro caso de precisarmos.', answer: 'Take your laptop in case we need it.' },
      { instruction: 'Use a versão solitária (vai que).', input: 'Eu vou salvar isso, só por precaução.', answer: "I'll save this, just in case." },
      { instruction: 'Revisão (Dia 22): Combine com o conselho.', input: 'Nós deveríamos testar de novo pro caso de ter um bug.', answer: 'We should test it again in case there is a bug.' },
      { instruction: 'Contraste (If vs In Case).', input: 'Me ligue SE cair. Faça o backup PRO CASO de cair.', answer: 'Call me if it crashes. Make the backup in case it crashes.' },
      { instruction: 'Revisão (Dia 23): Adicione o risco incerto.', input: 'Eu farei o backup pro caso da gente talvez perder os dados.', answer: "I will make the backup in case we might lose the data." },
      { instruction: 'SÍNTESE: Una "in case" com Dúvida (Dia 27).', input: 'Não tenho certeza se vai chover, mas leve um guarda-chuva por precaução.', answer: "I'm not sure if it will rain, but take an umbrella just in case." }
    ],
    connects_to: [22, 23, 27],
    review_of: "Contrasta com a lógica de 'should' (dia 22). O aluno entende que 'in case' foca no risco (might, dia 23) enquanto o 'should' foca na ação preventiva antes do risco ocorrer.",
    daily_resources: {
      ted: { title: 'Risk and how to use it', url: 'https://www.ted.com/talks/allison_schrager_risk_and_how_to_use_it', tip: 'Perceba o linguajar sobre mitigar incertezas.' },
      podcast: { title: 'ESL Podcast - Making Preparations', url: 'https://www.eslpod.com', tip: 'Escute como "just in case" fecha as frases sonoramente.' },
      onelook_word: 'case',
      anki_card: { front: 'Traduza: Vou levar a chave de casa, só por precaução (vai que).', back: 'I will take the house key, just in case.' },
      speaking_prompt: "Olhe para os objetos na sua mesa ou bolsa. Diga 3 coisas que você tem 'just in case': 'I have a pen in case I need to... I have my charger in case...'"
    }
  },
  {
    id: 37,
    level: 'B2',
    module: 4,
    moduleTitle: 'Conditionals e Hipótese',
    structure: "Supposing we lose the client, what would we do?",
    translation: 'Supondo que nós percamos o cliente, o que faríamos?',
    explanation: '"Supposing" ou "Suppose" é uma alternativa altamente visual ao "If". Ele convida o ouvinte para um experimento mental ou para visualizar um cenário de crise extremo antes que ele aconteça. O registro pode ser um brainstorming amigável, mas carrega muita gravidade.',
    why_it_matters: 'Durante reuniões de arquitetura de software ou estratégias de venda, as lideranças adoram o jogo do "e se" extremo. "Suppose the database is deleted..." é a faísca que inicia a engenharia de resiliência.',
    pronunciation: '/səˈpoʊzɪŋ/',
    stress_tip: 'O foco vai para "PO", o som alongado cria a tensão e o suspense para a hipótese que vai seguir.',
    pattern: 'Supposing (that) + [Cenário Imaginado], [O que fazemos / O que aconteceria]?',
    breakdown: [
      { piece: 'Supposing', role: 'Invocação do experimento mental (Supondo que)' },
      { piece: 'we lose the client', role: 'A hipótese (frequentemente no presente ou passado)' },
      { piece: 'what would we do?', role: 'A consequência condicional' }
    ],
    core_vocabulary: [
      { word: 'supposing', translation: 'supondo que / imagine que', example: 'Supposing it rains, where will we go?' },
      { word: 'suppose', translation: 'suponha / imagine', example: 'Suppose you are the CEO.' },
      { word: 'lose', translation: 'perder', example: "We can't lose this client." },
      { word: 'scenario', translation: 'cenário', example: "Let's imagine the worst-case scenario." }
    ],
    examples: {
      work: { en: "Suppose the server goes down on Black Friday, how do we react?", pt: 'Suponha que o servidor caia na Black Friday, como a gente reage?' },
      travel: { en: "Supposing we miss the train, is there another one today?", pt: 'Supondo que percamos o trem, tem outro hoje?' },
      study: { en: "Suppose you had unlimited time, what would you research?", pt: 'Suponha que você tivesse tempo ilimitado, o que pesquisaria?' }
    },
    variations: [
      { form: "Suppose", note: 'Versão idêntica e até mais agressiva para forçar a pessoa a imaginar ("Suppose we fail").' },
      { form: "Imagine if", note: 'Mesmo uso, mas mais sonhador e menos corporativo/lógico.' }
    ],
    combinations: [
      { phrase: "Supposing we + past tense", meaning: 'Imaginar o irreal agora (Supposing we had money)' },
      { phrase: "Suppose for a minute", meaning: 'Abertura de discurso/brainstorming' }
    ],
    collocations: ["supposing we", "suppose you", "just suppose"],
    common_mistakes: [
      { wrong: 'Suppose that happens, what we will do?', right: 'Suppose that happens, what would we do?', tip: 'A consequência de uma suposição distante costuma pedir o uso do condicional (would/could), não o futuro certo (will).' },
      { wrong: 'If supposing...', right: 'Supposing...', tip: '"Supposing" já carrega o sentido de "If". Não misture os dois.' }
    ],
    retrieval_context: 'Em uma reunião tensa de planejamento, você quer forçar a equipe a pensar no "Pior Cenário" (worst-case scenario): e se o banco de dados for invadido?',
    retrieval_prompt: 'Use "Suppose" para criar a imagem do banco de dados hackeado e pergunte qual seria o plano de vocês.',
    retrieval_reference: "Exemplo: 'Suppose the database gets hacked, what would our plan be?'",
    drills: [
      { instruction: 'Forme a suposição.', input: 'Supondo que ele diga não, o que nós faremos?', answer: 'Supposing he says no, what will we do?' },
      { instruction: 'Crie o cenário extremo.', input: 'Suponha que nós percamos tudo.', answer: 'Suppose we lose everything.' },
      { instruction: 'Revisão (Dia 32): Una "Suppose" à falta de recursos.', input: 'Supondo que nós tivéssemos mais tempo, eu gostaria de refatorar isso.', answer: "Supposing we had more time, I'd like to refactor this." },
      { instruction: 'Revisão (Dia 31): Contraste com "If I were".', input: 'Suponha que você fosse o gerente, o que você faria?', answer: 'Suppose you were the manager, what would you do?' },
      { instruction: 'Contraste (Registro Formal vs Brainstorming).', input: 'Formal: Desde que (provided that) você pague. Informal: Suponha que você não pague.', answer: 'Provided that you pay. Suppose you don\'t pay.' },
      { instruction: 'SÍNTESE: (Dia 24 + 37).', input: 'Deve ser um bug (must be). Suponha que nós não o encontremos, o que nós poderíamos fazer?', answer: 'It must be a bug. Suppose we don\'t find it, what could we do?' }
    ],
    connects_to: [24, 31, 32, 35],
    review_of: "Exige o uso da gramática do irreal B2 (were, had, would) e faz um contraste direto de intenção corporativa com o 'provided that' (dia 35). Um estabelece regras inquebráveis, o outro instiga o caos para planejar soluções.",
    daily_resources: {
      ted: { title: 'What if we could rewrite the human genome?', url: 'https://www.ted.com/talks/jennifer_doudna_we_can_now_edit_our_dna_but_let_s_do_it_wisely', tip: 'Note como as hipóteses científicas são ancoradas por "suppose" e "what if".' },
      podcast: { title: 'ESL Podcast - Considering Alternatives', url: 'https://www.eslpod.com', tip: 'Preste atenção ao tom reflexivo que acompanha o "supposing".' },
      onelook_word: 'suppose',
      anki_card: { front: 'Traduza o brainstorm: Suponha que nós não tenhamos orçamento. O que faríamos?', back: 'Suppose we have no budget. What would we do?' },
      speaking_prompt: "Faça o exercício do pior cenário. Pense no seu emprego atual e fale: 'Suppose the company goes bankrupt tomorrow. I would... I could...'"
    }
  },
  {
    id: 38,
    level: 'B2',
    module: 4,
    moduleTitle: 'Conditionals e Hipótese',
    structure: "We won't meet the deadline even if we work all night.",
    translation: 'Nós não bateremos o prazo mesmo se trabalharmos a noite toda.',
    explanation: '"Even if" é o condicional de FUTILIDADE extrema. Ele destrói a condição. Significa "Não importa se X acontecer, o resultado final não vai mudar".',
    why_it_matters: 'Para anular falsas esperanças em cronogramas irreais. É o contraponto direto ao "Unless" (Dia 34). O Unless diz "Faça isso, senão o projeto cai". O Even If diz "Pode fazer isso o quanto quiser, o projeto já caiu". É a expressão máxima do desenvolvedor realista.',
    pronunciation: '/ˈivɪn ɪf/',
    stress_tip: 'O "E" recebe um soco de intensidade. A frase soa resignada e pesada.',
    pattern: '[Resultado Inevitável] + even if + [Esforço inútil ou condição extrema]',
    breakdown: [
      { piece: "We won't meet the deadline", role: 'Resultado declarado como inevitável' },
      { piece: 'even if', role: 'Conector de futilidade / irrelevância (mesmo se)' },
      { piece: 'we work all night', role: 'A ação heróica que não fará diferença' }
    ],
    core_vocabulary: [
      { word: 'even if', translation: 'mesmo se / ainda que', example: 'Even if I try, I will fail.' },
      { word: 'all night', translation: 'a noite toda', example: 'They stayed up all night.' },
      { word: 'meet the deadline', translation: 'cumprir o prazo', example: "We can't meet the deadline." },
      { word: 'matter', translation: 'importar / fazer diferença', example: "It doesn't matter even if we win." }
    ],
    examples: {
      work: { en: "Even if we hire more people, onboarding them will take months.", pt: 'Mesmo se contratarmos mais pessoas, treiná-las vai levar meses.' },
      travel: { en: "Even if we take a taxi, we will miss the flight.", pt: 'Mesmo se pegarmos um táxi, perderemos o voo.' },
      study: { en: "Even if you read the whole book, the test is mostly practical.", pt: 'Mesmo se você ler o livro todo, a prova é quase toda prática.' }
    },
    variations: [
      { form: "Even though", note: 'CUIDADO: Even IF (hipótese futura: mesmo se chover amanhã). Even THOUGH (fato ocorrido: mesmo que ESTEJA chovendo agora / apesar do fato de).' },
      { form: "Not even if", note: 'Negação dramática ("Eu não vou nem se você me pagar" - I won\'t go, not even if you pay me).' }
    ],
    combinations: [
      { phrase: "It won't work even if", meaning: 'Declaração de falha garantida' },
      { phrase: "Even if it takes time", meaning: 'Resiliência (Não importa o obstáculo)' }
    ],
    collocations: ["even if we", "even if it", "not even if"],
    common_mistakes: [
      { wrong: 'I won\'t go even though it rains tomorrow.', right: 'I won\'t go even if it rains tomorrow.', tip: 'Use "even if" para o mundo irreal/futuro (condição). Use "even though" para realidades inegáveis de hoje (ex: Even though it is raining today, I will go).' },
      { wrong: 'Even if I will go...', right: 'Even if I go...', tip: 'A maldição do WILL de novo. Após "even if", a oração temporal exige o verbo no presente.' }
    ],
    retrieval_context: 'Um cliente está pedindo um desconto absurdo e prometendo dobrar o projeto ano que vem. Seu diretor manda negar a proposta, alegando que o esforço não compensa.',
    retrieval_prompt: 'Declare o resultado inevitável de que vocês não aceitarão a oferta, "mesmo se" ele prometer mais dinheiro.',
    retrieval_reference: "Exemplo: 'We won't accept the offer even if he promises more money.'",
    drills: [
      { instruction: 'Traduza o condicional de futilidade.', input: 'Isso não vai funcionar mesmo se nós tentarmos.', answer: "It won't work even if we try." },
      { instruction: 'Forme a resiliência positiva.', input: 'Nós finalizaremos isso, mesmo se levar anos.', answer: 'We will finish this, even if it takes years.' },
      { instruction: 'Contraste Lógico (Dia 34 - Unless vs Even if).', input: 'Não vamos lançar A MENOS QUE testemos (salvação). Não vamos lançar MESMO SE testarmos (futilidade).', answer: "We won't launch unless we test it. We won't launch even if we test it." },
      { instruction: 'Revisão (Dia 33): Aplique futilidade ao passado absoluto.', input: 'O sistema teria caído mesmo se nós tivéssemos testado.', answer: 'The system would have crashed even if we had tested it.' },
      { instruction: 'Revisão (Dia 31): Futilidade e Subjuntivo.', input: 'Eu não aceitaria o trabalho mesmo se eu fosse você.', answer: "I wouldn't accept the job even if I were you." },
      { instruction: 'SÍNTESE: Junte Possibilidade (Dia 23) com Futilidade.', input: 'Talvez não funcione, mesmo se tivermos um backup.', answer: "It might not work, even if we have a backup." }
    ],
    connects_to: [23, 31, 33, 34],
    review_of: "Exige o contraste analítico extremo com 'unless' (dia 34), forçando o aluno a diferenciar entre 'condição de salvação' e 'condição inútil'. Integra-se ao 'would have' para anular esperanças do passado.",
    daily_resources: {
      ted: { title: 'The power of vulnerability', url: 'https://www.ted.com/talks/brene_brown_the_power_of_vulnerability', tip: 'Observe como a resiliência humana é descrita usando "even if".' },
      podcast: { title: 'ESL Podcast - Obstacles and Persistence', url: 'https://www.eslpod.com', tip: 'Treine os ouvidos para o contraste imediato entre unless e even if nas frases.' },
      onelook_word: 'even',
      anki_card: { front: 'Traduza: Não funcionaria mesmo se tivéssemos orçamento.', back: "It wouldn't work even if we had the budget." },
      speaking_prompt: "Faça uma declaração épica de obstinação e uma de derrota usando Even If: 'I won't give up even if... / The project is dead even if...'"
    }
  },
  {
    id: 39,
    level: 'B2',
    module: 4,
    moduleTitle: 'Conditionals e Hipótese',
    structure: "We are deploying tomorrow, whether or not the feature is ready.",
    translation: 'Nós faremos o deploy amanhã, independentemente se a funcionalidade estiver pronta ou não.',
    explanation: '"Whether or not" tira o peso de uma decisão condicionada e declara a INEVITABILIDADE da ação principal. Apresenta duas possibilidades alternativas (estar pronto vs não estar pronto) que resultam no exato mesmo desfecho.',
    why_it_matters: 'Para "mandar no jogo" quando você é o gestor do tempo. "As long as" dizia "Eu só faço se você fizer". "Whether or not" diz "O trem vai partir, com você ou sem você". É uma estrutura poderosa de imposição de agenda.',
    pronunciation: '/ˈwɛðər ɔr nɑt/',
    stress_tip: 'A fluidez entre "whether" e "or" é contínua. Soa como uma palavra só: "whether-r-not".',
    pattern: '[Ação Inevitável] + whether or not + [condição flutuante]',
    breakdown: [
      { piece: 'We are deploying tomorrow', role: 'Ação afirmativa inevitável (com Present Continuous)' },
      { piece: 'whether or not', role: 'Conector de inevitabilidade (quer sim, quer não / independentemente se)' },
      { piece: 'the feature is ready', role: 'A condição que perdeu seu peso na decisão' }
    ],
    core_vocabulary: [
      { word: 'whether', translation: 'se (no sentido de alternativa)', example: 'I don\'t know whether to stay or go.' },
      { word: 'whether or not', translation: 'se ... ou não / independentemente de', example: 'We will go whether or not it rains.' },
      { word: 'ready', translation: 'pronto', example: 'Are you ready?' },
      { word: 'decide', translation: 'decidir', example: 'We have to decide whether to buy it.' }
    ],
    examples: {
      work: { en: "The meeting will start at 9, whether or not everyone has arrived.", pt: 'A reunião começará às 9, quer todos tenham chegado ou não.' },
      travel: { en: "We have to pay for the hotel whether or not we stay there.", pt: 'Temos que pagar o hotel, independentemente se ficarmos lá ou não.' },
      study: { en: "You will be tested on this, whether or not we cover it in class.", pt: 'Isso cairá na prova, independentemente de cobrirmos em sala ou não.' }
    },
    variations: [
      { form: "Whether [X] or not", note: 'O "or not" pode ser movido para o final da frase (Ex: Whether the feature is ready or not).' },
      { form: "Regardless of whether", note: 'Ainda mais burocrático e alongado para a mesma finalidade.' }
    ],
    combinations: [
      { phrase: "I don't care whether or not", meaning: 'Eu não ligo se... ou não' },
      { phrase: "we must decide whether", meaning: 'A necessidade de optar entre duas vias' }
    ],
    collocations: ["whether or not", "decide whether", "whether to"],
    common_mistakes: [
      { wrong: 'If or not the feature is ready...', right: 'Whether or not the feature is ready...', tip: 'Você não pode agrupar "If" com "or not" colados. Para impor dicotomia (uma coisa ou a oposta), o inglês exige a palavra "Whether".' },
      { wrong: 'Depend if...', right: 'Depends on whether...', tip: 'O verbo depend on, quando escolhe entre 2 opções, obriga o whether. "Depends on whether we have budget or not".' }
    ],
    retrieval_context: 'A diretoria impôs um congelamento de código para amanhã. Alguns devs querem mais 3 dias. Você corta o assunto avisando que o congelamento acontece amanhã de qualquer forma.',
    retrieval_prompt: 'Alerte que o "congelamento de código" (code freeze) acontece amanhã, independentemente de se os devs estão prontos ou não.',
    retrieval_reference: "Exemplo: 'The code freeze happens tomorrow, whether or not the devs are ready.'",
    drills: [
      { instruction: 'Forme a dicotomia inescapável.', input: 'Eles vão lançar, quer nós gostemos ou não.', answer: 'They will launch, whether or not we like it.' },
      { instruction: 'Dúvida entre duas opções (verbo to be).', input: 'Eu não sei se (whether) isso é um bug ou uma funcionalidade.', answer: "I don't know whether this is a bug or a feature." },
      { instruction: 'Revisão (Dia 28): Junte dependência e dicotomia.', input: 'Depende de (depends on whether) se nós temos o orçamento ou não.', answer: 'It depends on whether we have the budget or not.' },
      { instruction: 'Contraste (Dia 30 - As long as vs Whether or not).', input: 'Eu farei desde que eles paguem. Eu farei quer eles paguem ou não.', answer: 'I will do it as long as they pay. I will do it whether or not they pay.' },
      { instruction: 'Revisão (Dia 24): Dedução baseada em dois caminhos.', input: 'Deve ser seguro, independentemente de se nós usamos HTTPS ou não.', answer: 'It must be safe, whether or not we use HTTPS.' },
      { instruction: 'SÍNTESE: Junte Dúvida Polida (Dia 27).', input: 'Não tenho certeza se eu deveria esperar ou agir agora.', answer: "I'm not sure whether I should wait or act now." }
    ],
    connects_to: [24, 27, 28, 30],
    review_of: "Exige o distanciamento da condicional restritiva 'as long as' (dia 30) para a inevitabilidade imposta por 'whether'. Também se mistura com o 'depends on' (dia 28) em decisões difíceis.",
    daily_resources: {
      ted: { title: 'How to make hard choices', url: 'https://www.ted.com/talks/ruth_chang_how_to_make_hard_choices', tip: 'Observe como a palavra whether permeia o ato da escolha dicotômica.' },
      podcast: { title: 'ESL Podcast - Taking Decisive Action', url: 'https://www.eslpod.com', tip: 'Note que after "whether" we almost always have a choice between two opposite things.' },
      onelook_word: 'whether',
      anki_card: { front: 'Traduza o aviso implacável: Eu vou fazer isso, quer você goste ou não.', back: 'I will do it, whether or not you like it.' },
      speaking_prompt: "Avise a si mesmo de uma obrigação dura de amanhã usando a inevitabilidade: 'I have to wake up early tomorrow, whether or not I feel rested.'"
    }
  },
  {
    id: 40,
    level: 'B1',
    module: 4,
    moduleTitle: 'Conditionals e Hipótese',
    structure: "What if we just launch the MVP first?",
    translation: 'E se a gente simplesmente lançasse o MVP primeiro?',
    explanation: '"What if" é o motor da ideação, do brainstorming amigável e do alerta a medos. É uma forma encurtada de perguntar "O que aconteceria se...". Por ter natureza especulativa, aceita tanto verbos no presente (para propostas reais) quanto no passado (hipóteses malucas).',
    why_it_matters: 'Para destrancar reuniões travadas sem precisar usar um longo "I\'d like to propose that we...". "What if we just [X]?" lança a ideia na mesa e convida os outros a avaliarem, tirando o peso dos seus ombros.',
    pronunciation: '/wʌt ɪf/',
    stress_tip: 'O "if" atua como um trampolim sonoro que joga o verbo sugerido para cima ("What if we LAUNCH...").',
    pattern: 'What if + [Sujeito] + [Verbo/Ação Sugerida]?',
    breakdown: [
      { piece: 'What if', role: 'Início da provocação/sugestão (E se... / O que aconteceria se...)' },
      { piece: 'we just launch', role: 'A sugestão em si (com "just" para soar fácil/rápido)' },
      { piece: 'the MVP first', role: 'O objeto da sugestão' }
    ],
    core_vocabulary: [
      { word: 'what if', translation: 'e se', example: 'What if he says no?' },
      { word: 'launch', translation: 'lançar (produto/versão)', example: "Let's launch tomorrow." },
      { word: 'just', translation: 'simplesmente / só', example: "Let's just do it." },
      { word: 'MVP', translation: 'Produto Mínimo Viável', example: 'Build the MVP first.' }
    ],
    examples: {
      work: { en: "What if we change the layout completely?", pt: 'E se a gente mudar o layout completamente?' },
      travel: { en: "What if they lose our luggage?", pt: 'E se eles perderem nossa bagagem?' },
      study: { en: "What if I fail the exam?", pt: 'E se eu reprovar na prova?' }
    },
    variations: [
      { form: "What if + [Passado]?", note: 'Para ideias muito ousadas ou temores irreais (What if the building caught fire?).' },
      { form: "So what?", note: 'Expressão de desdém ("E daí?"). Não é condicional, mas é útil conhecer.' }
    ],
    combinations: [
      { phrase: "What if we just", meaning: 'Sugestão minimalista ("E se a gente só...")' },
      { phrase: "What if I told you", meaning: 'Gatilho para revelação de informação bombástica' }
    ],
    collocations: ["what if we", "what if it", "what if I told you"],
    common_mistakes: [
      { wrong: 'And if we launch?', right: 'What if we launch?', tip: 'A tradução mental de "E se..." para "And if" revela na hora que você é brasileiro. A expressão correta em inglês é sempre "What if...".' },
      { wrong: 'What happens if we will launch?', right: 'What if we launch?', tip: 'Apesar de "What happens if" existir, o "What if" puro é 100x mais comum e fluente para dar ideias.' }
    ],
    retrieval_context: 'A equipe não sabe como resolver o problema complexo do banco de dados antigo. Você quer sugerir a opção mais preguiçosa, porém eficaz: ignorá-lo e criar um banco novo do zero.',
    retrieval_prompt: 'Proponha essa ideia usando "what if" e o verbo criar (create).',
    retrieval_reference: "Exemplo: 'What if we just create a new database?'",
    drills: [
      { instruction: 'Forme a sugestão provocativa.', input: 'E se nós usarmos React?', answer: 'What if we use React?' },
      { instruction: 'Traduza o medo de risco.', input: 'E se o servidor cair?', answer: 'What if the server crashes?' },
      { instruction: 'Contraste Registro de Reunião (What if vs I\'d rather - Dia 26).', input: 'E se nós esperássemos? (Sugestão informal). Eu preferiria esperar (Preferência polida).', answer: "What if we wait? I'd rather wait." },
      { instruction: 'Revisão (Dia 31 e 32): Jogue a hipótese para o passado irreal (se fosse/se tivesse).', input: 'E se você fosse o chefe? E se nós tivéssemos o código?', answer: 'What if you were the boss? What if we had the code?' },
      { instruction: 'Adicione "just" para amenizar a ação.', input: 'E se a gente só deletar o arquivo?', answer: 'What if we just delete the file?' },
      { instruction: 'SÍNTESE: Junte Suposição formal (Dia 37) com Provocação informal.', input: 'Suponha que não funcione. E se nós tentarmos outra coisa?', answer: 'Suppose it doesn\'t work. What if we try something else?' }
    ],
    connects_to: [26, 31, 32, 37],
    review_of: "Exige o distanciamento da tensão das Condicionais Formais (supposing/provided that), trazendo o aluno para um brainstorming rápido. Faz uso extensivo de 'were' (dia 31) para perguntas irreais.",
    daily_resources: {
      ted: { title: 'What if we replaced politicians with randomly selected people?', url: 'https://www.ted.com/talks/brett_hennig_what_if_we_replaced_politicians_with_randomly_selected_people', tip: 'Observe como um cenário inteiro é construído com base em um grande "What if".' },
      podcast: { title: 'ESL Podcast - Suggesting Solutions', url: 'https://www.eslpod.com', tip: 'Escute a entonação subindo e descendo na sugestão de propostas casuais.' },
      onelook_word: 'what',
      anki_card: { front: 'Nunca diga "And if...". Qual a tradução correta para "E se..."?', back: 'What if...' },
      speaking_prompt: "Aja como o advogado do diabo no seu projeto de vida. Jogue 3 alertas de medo no ar: 'What if I fail? What if they don't like it? What if...'"
    }
  },
  {
    id: 41,
    level: 'B2',
    module: 4,
    moduleTitle: 'Conditionals e Hipótese',
    structure: "We will sign the contract only if you lower the price.",
    translation: 'Nós assinaremos o contrato somente se você abaixar o preço.',
    explanation: '"Only if" é a imposição de limite com foco máximo na exclusividade. Não é apenas uma condição qualquer: é a ÚNICA condição sob a qual algo se tornará realidade. No mundo dos negócios, soa muito mais forte e cortante que "as long as".',
    why_it_matters: 'Enquanto "provided that" é a exigência fria e burocrática dos advogados e "unless" é a ameaça negativa ("se não fizer, morre"), "only if" é a barganha dura de vendas. É a fronteira final da negociação corporativa.',
    pronunciation: '/ˈoʊnli ɪf/',
    stress_tip: 'O peso cai quase todo no "ON", fazendo o locutor soar intransigente e seguro.',
    pattern: '[Ação prometida] + only if + [Condição exclusiva e obrigatória]',
    breakdown: [
      { piece: 'We will sign the contract', role: 'A promessa (o que a outra parte quer)' },
      { piece: 'only if', role: 'O conector de barganha restritiva (somente se)' },
      { piece: 'you lower the price', role: 'A obrigação/concessão que o outro precisa fazer' }
    ],
    core_vocabulary: [
      { word: 'only if', translation: 'somente se / apenas se', example: 'I will go only if you go.' },
      { word: 'lower', translation: 'abaixar/diminuir', example: 'Can you lower the price?' },
      { word: 'sign', translation: 'assinar', example: 'Where do I sign?' },
      { word: 'guarantee', translation: 'garantir', example: 'Only if you guarantee it.' }
    ],
    examples: {
      work: { en: "I'll accept the job only if I can work remotely.", pt: 'Aceitarei o emprego somente se eu puder trabalhar remotamente.' },
      travel: { en: "We will take the trip only if the weather improves.", pt: 'Faremos a viagem apenas se o tempo melhorar.' },
      study: { en: "You can leave early only if you finish the test.", pt: 'Você pode sair cedo somente se terminar a prova.' }
    },
    variations: [
      { form: "If and only if", note: 'Termo matemático ou lógico para equivalência absoluta. Excessivo no dia a dia corporativo.' }
    ],
    combinations: [
      { phrase: "Only if you want to", meaning: 'Falso tom de escolha (faça... só se você quiser)' },
      { phrase: "I will agree only if", meaning: 'Imposição de contra-proposta' }
    ],
    collocations: ["only if you", "only if we can", "only if it's"],
    common_mistakes: [
      { wrong: 'Just if you lower the price.', right: 'Only if you lower the price.', tip: '"Just if" soa extremamente literal e frágil em inglês. A expressão correta para barganha exclusiva é "Only if".' },
      { wrong: 'Only if you will lower...', right: 'Only if you lower...', tip: 'A mesma regra de sempre: depois da palavra "if" em orações condicionais de futuro, o verbo NÃO pode levar will.' }
    ],
    retrieval_context: 'Um investidor quer entrar no seu projeto pedindo 50% das ações por pouco dinheiro. Você diz que aceita conversar, mas somente se a avaliação da empresa subir.',
    retrieval_prompt: 'Crie o limite inegociável de venda usando "only if" exigindo que ele aumente (increase) a oferta (offer).',
    retrieval_reference: "Exemplo: 'We will talk only if you increase the offer.'",
    drills: [
      { instruction: 'Forme a barganha estrita.', input: 'Eu farei isso somente se você me ajudar.', answer: 'I will do it only if you help me.' },
      { instruction: 'Aplique a recusa passiva agressiva.', input: 'Você pode ir, só se você quiser.', answer: 'You can go, only if you want to.' },
      { instruction: 'Contraste (Condições Afirmativas).', input: 'Eu irei desde que (as long as) você pague. Eu irei SOMENTE SE você pagar.', answer: 'I will go as long as you pay. I will go only if you pay.' },
      { instruction: 'Contraste (Ameaça vs Limite).', input: 'Eu não irei a menos que (unless) você pague. Eu irei SOMENTE SE você pagar.', answer: "I won't go unless you pay. I will go only if you pay." },
      { instruction: 'Revisão (Dia 32): Faca a restrição no passado irreal.', input: 'Eu teria ido somente se eu tivesse tempo.', answer: 'I would have gone only if I had time.' },
      { instruction: 'SÍNTESE: Una Precaução (Dia 36) e Limite Estrito.', input: 'Faça um backup por precaução. Mas eu deletarei a pasta somente se você pedir.', answer: 'Make a backup in case. But I will delete the folder only if you ask.' }
    ],
    connects_to: [30, 32, 34, 36],
    review_of: "Exige que o aluno contraste milimetricamente a tríade final de imposição de condições: as long as (acordo limite, dia 30), unless (ameaça negativa, dia 34) e only if (barganha restrita definitiva).",
    daily_resources: {
      ted: { title: 'The hidden power of smiling', url: 'https://www.ted.com/talks/ron_gutman_the_hidden_power_of_smiling', tip: 'Atente-se a microexpressões e como palestrantes fazem concessões com "only if".' },
      podcast: { title: 'ESL Podcast - Setting Strict Rules', url: 'https://www.eslpod.com', tip: 'Treine a entonação rígida e obstinada de um chefe ou vendedor focado no seu preço.' },
      onelook_word: 'only',
      anki_card: { front: 'O que o cliente escuta se você diz "I will buy it just if you lower the price"? E o que você deveria dizer?', back: 'Ele escuta um erro frágil. Você deve dizer: I will buy it ONLY IF you lower the price.' },
      speaking_prompt: "Simule a demissão do seu emprego atual ditando regras duras: 'I will stay only if you double my salary. I will work today only if...'"
    }
  },
  {
    id: 42,
    level: 'B2',
    module: 4,
    moduleTitle: 'Conditionals e Hipótese',
    structure: "We need to fix this bug; otherwise, the system will crash.",
    translation: 'Precisamos consertar este bug; do contrário (senão), o sistema vai cair.',
    explanation: '"Otherwise" é o conector condicional de Consequência Alternativa. Ele atua como uma ameaça velada ou alerta claro de perigo. Você instrui uma ação e declara: faça isso, senão/caso contrário as coisas vão piorar.',
    why_it_matters: 'Fecha a jornada de Condicionais B2 fundindo a instrução ("devemos fazer X") com a condição de escape embutida no "otherwise". Soa extremamente maduro e técnico em documentações, PRs e e-mails que narram os riscos arquiteturais de não seguir o fluxo.',
    pronunciation: '/ˈʌðərˌwaɪz/',
    stress_tip: 'A palavra é dividida quase como se fosse duas: "OTHER-wise". A forte ênfase inicial sinaliza perigo/alerta.',
    pattern: '[Instrução / Obrigação] ; otherwise, + [Consequência do não-cumprimento]',
    breakdown: [
      { piece: 'We need to fix this bug', role: 'A instrução, obrigação ou fato declarado' },
      { piece: 'otherwise,', role: 'Conector transicional (senão / do contrário / caso contrário)' },
      { piece: 'the system will crash', role: 'O desastre / resultado alternativo garantido' }
    ],
    core_vocabulary: [
      { word: 'otherwise', translation: 'caso contrário / senão / do contrário', example: 'Hurry up, otherwise you will be late.' },
      { word: 'fix', translation: 'consertar', example: 'Can you fix the bug?' },
      { word: 'crash', translation: 'cair/travar (software)', example: 'It crashed again.' },
      { word: 'leave', translation: 'partir/sair', example: 'Leave now, otherwise you miss the train.' }
    ],
    examples: {
      work: { en: "Please approve the PR today, otherwise we can't deploy tomorrow.", pt: 'Por favor aprove o PR hoje, do contrário não conseguiremos lançar amanhã.' },
      travel: { en: "We should leave early; otherwise, the traffic will be terrible.", pt: 'Deveríamos sair cedo; do contrário, o trânsito estará horrível.' },
      study: { en: "You must review your notes; otherwise, you'll forget everything.", pt: 'Você deve revisar suas anotações; senão, você esquecerá tudo.' }
    },
    variations: [
      { form: "Or else", note: 'Versão mais ameaçadora e emocional/infantil ("Faça isso, ou senão..."). Use otherwise no trabalho.' },
      { form: "If not", note: 'Muito comum, mas atua mais como resposta curta do que como conector narrativo de alerta técnico.' }
    ],
    combinations: [
      { phrase: "we must act; otherwise", meaning: 'Ultimato moral ou técnico' },
      { phrase: "unless you say otherwise", meaning: 'Deixando a porta aberta para discordância ("A menos que você diga o contrário")' }
    ],
    collocations: ["we need to... otherwise", "should leave... otherwise", "unless you say otherwise"],
    common_mistakes: [
      { wrong: 'Fix this, if not the system crash.', right: 'Fix this; otherwise, the system will crash.', tip: 'Apesar do "if not" fazer sentido literal, o "otherwise" é o padrão sintático para criar essa ponte elegante e firme entre a obrigação e o resultado.' },
      { wrong: 'Otherwise we go now, we lose.', right: 'We have to go now, otherwise we will lose.', tip: '"Otherwise" conecta a primeira ideia à consequência, ele raramente inicia a frase do nada. Você precisa primeiro de uma ação (We have to go) e DEPOIS da ameaça do otherwise.' }
    ],
    retrieval_context: 'Um cliente está atrasando o pagamento de um provedor de servidores que hospeda a aplicação dele. Você avisa que eles PRECISAM pagar a conta até sexta, e joga a consequência nefasta de não fazê-lo.',
    retrieval_prompt: 'Combine a instrução (You need to pay) com a ameaça "do contrário" eles perderão todos os dados.',
    retrieval_reference: "Exemplo: 'You need to pay; otherwise, you will lose all data.'",
    drills: [
      { instruction: 'Forme a estrutura de alerta.', input: 'Nós devemos testar, senão pode falhar.', answer: 'We must test it, otherwise it might fail.' },
      { instruction: 'Aja sobre o prazo.', input: 'Apresse-se (Hurry up), caso contrário, você se atrasará.', answer: 'Hurry up, otherwise you will be late.' },
      { instruction: 'Revisão (Dia 29): Contraste a Consequência (Causal vs Alternativa).', input: 'Ele falhou; é por isso que (that\'s why) ele foi demitido. Ele deve trabalhar; senão (otherwise) ele será demitido.', answer: "He failed; that's why he was fired. He must work; otherwise he will be fired." },
      { instruction: 'Traduza a abertura elegante de exceção.', input: 'A menos que você diga o contrário.', answer: 'Unless you say otherwise.' },
      { instruction: 'Revisão (Dia 24 e 38): Futilidade após o desastre.', input: 'Conserte, caso contrário ele cairá. E mesmo se cair (even if), nós devemos deduzir (must be) o erro.', answer: 'Fix it, otherwise it will crash. And even if it crashes, there must be an error.' },
      { instruction: 'SÍNTESE MÓDULO 4: Amarre If, Unless, e Otherwise.', input: 'Se estiver pronto, nós lançamos. Não lance a menos que passe nos testes, caso contrário o cliente reclamará.', answer: 'If it is ready, we launch. Don\'t launch unless it passes tests, otherwise the client will complain.' }
    ],
    connects_to: [24, 29, 34, 38],
    review_of: "O ápice do Módulo 4: exige do aluno o emparelhamento narrativo longo, onde Modals, Causalidade (That's why), Bloqueio (Unless) e Futilidade (Even if) são coroados por consequências técnicas usando 'Otherwise'.",
    daily_resources: {
      ted: { title: 'How we can make the world a better place by 2030', url: 'https://www.ted.com/talks/michael_green_how_we_can_make_the_world_a_better_place_by_2030', tip: 'Note como os apelos climáticos globais se apoiam na estrutura do "faça X hoje; do contrário, haverá Y amanhã".' },
      podcast: { title: 'ESL Podcast - Giving Warnings', url: 'https://www.eslpod.com', tip: 'Assimile o uso duro e implacável que gestores empregam com a palavra "otherwise".' },
      onelook_word: 'otherwise',
      anki_card: { front: 'Como dizer "A menos que você diga o contrário"?', back: 'Unless you say otherwise.' },
      speaking_prompt: "Seja um gerente de crise por um minuto. Olhe pela janela e anuncie calamidades: 'We need to fix the roof; otherwise... You must stop now; otherwise...'"
    }
  }
]

export const BATCH_36_42_SUMMARY = {
  range: '36-42',
  theme: 'Registro e Exceções Extremos das Condicionais',
  levels: ['B1', 'B2'],
  structures: [
    'in case — Prevenção e antecipação de riscos (dia 36, B1)',
    'supposing — Experimentos mentais criativos no B2 (dia 37, B2)',
    'even if — Futilidade e resiliência (condição nula) (dia 38, B2)',
    'whether or not — Dicotomia inevitável e tomada de decisão (dia 39, B2)',
    'what if — Sugestão provocativa com suspensão de descrença (dia 40, B1-B2)',
    'only if — Barganha de exclusão absoluta e agressiva (dia 41, B2)',
    'otherwise — Consequência alternativa, alerta técnico e ultimato (dia 42, B2)'
  ],
  grammar_arcs: [
    'Dias 36-37: O domínio da antecipação (In Case vs Supposing). O aluno aprende a diferença entre tomar uma atitude preventiva concreta no mundo real (in case) versus especular uma catástrofe ou cenário hipotético para desenhar soluções criativas (supposing).',
    'Dias 38-42: O fechamento retumbante do Módulo 4 (Condicionais B2). O aluno entende que não basta dominar "IF". A língua corporativa lida com coisas que não importam (even if), que são inevitáveis de qualquer lado (whether or not), sugestões casuais (what if) e ameaças cruas e inegociáveis de fluxo lógico (only if / otherwise).'
  ],
  key_contrasts_established: [
    'If (reação temporal direta) vs In case (prevenção imediata)',
    'As long as (acordo condicional pacífico) vs Whether or not (inevitabilidade tratoradora)',
    'Provided that (exigência formal contratual) vs Only if (exigência restritiva extrema em fala)',
    'Unless (faça isso se quiser prosseguir) vs Even if (mesmo que faça isso, não adiantará)'
  ],
  vocabulary_themes: [
    'riscos e suposições: backup, crash, scenario, suppose',
    'futilidade e limites: all night, matter, whether, decide',
    'barganhas e ultimatos: MVP, lower, sign, fix, otherwise'
  ],
  connects_to_next: "Batch 7 (dias 43-49): [however, although, despite, on the other hand, in addition, as a result, therefore] — [Abertura do Módulo 5 (Discourse Markers B2). Agora que o aluno sabe impor condições e projetar consequências de alto nível, ele precisa organizar seu pensamento e escrita técnica em parágrafos coerentes, unindo contraste, soma e resolução de argumentos de forma sofisticada]."
}
