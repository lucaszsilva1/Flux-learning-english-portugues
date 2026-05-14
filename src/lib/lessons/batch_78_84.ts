import type { Lesson } from '../types'

export const lessons: Lesson[] = [
  {
    id: 78,
    level: 'C1',
    module: 7,
    moduleTitle: 'Registro Formal e Profissional',
    structure: "I would appreciate it if you could send the files by Friday.",
    translation: 'Eu agradeceria se você pudesse enviar os arquivos até sexta-feira.',
    explanation: 'A Exigência de Veludo. "I would appreciate it if" é uma forma hiper-diplomática de dar uma ordem para alguém (seja do mesmo nível ou superior). Você finge que é um grande favor pessoal, embora a outra pessoa saiba que é uma obrigação do cargo dela. ATENÇÃO: a palavra "it" no meio é a âncora absoluta da fluência.',
    why_it_matters: 'Evita a grosseria de frases como "Send me the file by Friday" ou "I need the file now". No meio corporativo norte-americano e britânico, ordens diretas geram resistência. O tom "apreciativo" destrava as portas do ego alheio.',
    pronunciation: '/aɪ wʊd əˈpriʃiˌeɪt ɪt ɪf/',
    stress_tip: 'A pronúncia flui rapidamente engolindo o it-if (a-pre-shee-AIT-it-if). A ênfase é em PRE.',
    pattern: "I would appreciate it if + [Sujeito] + could + [Ação]",
    breakdown: [
      { piece: 'I would appreciate it', role: 'A confissão de gratidão antecipada (Eu agradeceria muito [isso])' },
      { piece: 'if you could send', role: 'Condicional polida minimizando o esforço (se você pudesse enviar)' },
      { piece: 'the files by Friday', role: 'A ordem real com prazo e limite temporal' }
    ],
    core_vocabulary: [
      { word: 'appreciate', translation: 'apreciar / agradecer por (algo)', example: 'I appreciate your help.' },
      { word: 'it', translation: 'pronome fantasma obrigatório da expressão', example: 'Appreciate it if...' },
      { word: 'by Friday', translation: 'até sexta-feira (prazo/limite)', example: 'Finish it by tomorrow.' }
    ],
    examples: {
      work: { en: "I'd appreciate it if everyone kept their mics muted.", pt: 'Agradeceria se todos mantivessem os microfones no mudo.' },
      travel: { en: "I would appreciate it if you could bring me a blanket.", pt: 'Agradeceria se a senhora pudesse me trazer um cobertor.' },
      study: { en: "I'd appreciate it if you reviewed my thesis.", pt: 'Agradeceria se você revisasse minha tese.' }
    },
    variations: [
      { form: "We would appreciate your cooperation", note: 'Versão super impessoal e pesada (Avisos de RH e Direção).' },
      { form: "I'd appreciate it", note: 'Contração do would, soa perfeito e ligeiramente menos professoral.' }
    ],
    combinations: [
      { phrase: "I would appreciate it if you didn't", meaning: 'A forma mais educada do planeta para dizer "Pare de fazer isso agora"' }
    ],
    collocations: ["would appreciate it if", "appreciate your help", "by Friday"],
    common_mistakes: [
      { wrong: 'I would appreciate if...', right: 'I would appreciate IT if...', tip: 'O brasileiro come a palavra "IT". O verbo appreciate exige um objeto direto ("I appreciate the help", "I appreciate IT"). Não o arranque da frase.' },
      { wrong: 'I appreciate you.', right: 'I appreciate YOUR HELP.', tip: 'No inglês de negócios, nós não apreciamos "você", nós apreciamos o "tempo/esforço/ajuda" da pessoa.' }
    ],
    retrieval_context: 'Um fornecedor está enrolando para mandar a documentação (the docs). Você precisa dar um "chega pra lá" educado e impor o prazo final (until today).',
    retrieval_prompt: 'Faça a exigência de veludo: "Agradeceria se você pudesse me mandar a documentação até hoje (by today)."',
    retrieval_reference: "Exemplo: 'I would appreciate it if you could send me the docs by today.'",
    drills: [
      { instruction: 'Forme a exigência com o IT obrigatório.', input: 'Eu agradeceria se você respondesse (reply).', answer: "I would appreciate it if you could reply." },
      { instruction: 'Faça o pedido de interrupção (não faça).', input: 'Eu agradeceria se você não atrasasse (delay).', answer: "I would appreciate it if you didn't delay." },
      { instruction: 'Corrija o erro do objeto (IT).', input: "I'd appreciate if you help.", answer: "I'd appreciate it if you could help." },
      { instruction: 'Revisão (Dia 57): Fusão da Dúvida e Apreciação.', input: 'Eu estava me perguntando se (wondering if) você poderia fazer isso. Eu agradeceria (would appreciate it).', answer: "I was wondering if you could do it. I would appreciate it." },
      { instruction: 'SÍNTESE: Junte a Referência (Dia 76) e a Cobrança.', input: 'A respeito do (Regarding) contrato, eu agradeceria se você o assinasse (sign it).', answer: "Regarding the contract, I would appreciate it if you signed it." },
      { instruction: 'Revisão do Puxão de Orelha (Dia 74 e 77).', input: 'Conforme discutido (As discussed), eu gostaria de chamar sua atenção para (draw your attention) a tela.', answer: "As discussed, I'd like to draw your attention to the screen." },
      { instruction: 'Substitua pela cobrança pesada impessoal.', input: 'Nós agradeceríamos a sua cooperação.', answer: "We would appreciate your cooperation." }
    ],
    connects_to: [57, 74, 76, 77],
    review_of: "Exige o mapeamento fonético do 'it if' (superando a quebra comum do falante estrangeiro) e acopla a cobrança educada às estruturas macro do e-mail (as discussed, regarding).",
    daily_resources: {
      ted: { title: 'How to disagree productively', url: 'https://www.ted.com/talks/julia_dhar_how_to_disagree_productively_and_find_common_ground', tip: 'Perceba o uso do verbo "appreciate" para validar o argumento alheio antes de retrucar.' },
      podcast: { title: 'ESL Podcast - Requesting Action', url: 'https://www.eslpod.com', tip: 'Treine a fluidez: AID-apreshi-ate-IT-IF.' },
      onelook_word: 'appreciate',
      anki_card: { front: 'Conserte a falha fatal: I would appreciate if you help.', back: 'I would appreciate IT if you could help.' },
      speaking_prompt: "Brinque de lorde inglês dando ordens ao seu gato/cachorro: 'I would appreciate it if you didn't bite me. I would appreciate it if you ate...'"
    }
  },
  {
    id: 79,
    level: 'C1',
    module: 7,
    moduleTitle: 'Registro Formal e Profissional',
    structure: "Please find attached the report for this quarter.",
    translation: 'Por favor, encontre em anexo o relatório deste trimestre.',
    explanation: 'A Trindade do E-mail. Todo mundo que entra no mercado global precisa enviar arquivos. O inglês institucional congelou essa expressão desde a era das máquinas de escrever. Ela soa estranha gramaticalmente ("Please find attached the file"), mas é uma fórmula sagrada inviolável do corporativismo.',
    why_it_matters: 'Dizer "I am sending the file here" ou "The file is attached" funciona, mas carece do brilho da correspondência C1. Usar a expressão imutável "Please find attached" demonstra que você domina os ritos do comércio e não apenas a gramática da rua.',
    pronunciation: '/pliz faɪnd əˈtæʧt/',
    stress_tip: 'ATTACHED recebe o soco final com o som de "T" estalado no final (a-tách-t).',
    pattern: 'Please find attached + [O Nome do Arquivo ou Objeto Anexado]',
    breakdown: [
      { piece: 'Please find attached', role: 'Clichê corporativo de anexação formal (Por favor, encontre em anexo)' },
      { piece: 'the report', role: 'O objeto em si' },
      { piece: 'for this quarter', role: 'Contexto limitador' }
    ],
    core_vocabulary: [
      { word: 'attached', translation: 'anexado / em anexo', example: 'The file is attached.' },
      { word: 'find', translation: 'encontrar / achar', example: 'Did you find it?' },
      { word: 'report', translation: 'relatório', example: 'Submit the report.' }
    ],
    examples: {
      work: { en: "Please find attached the invoice for our services.", pt: 'Por favor, encontre em anexo a fatura dos nossos serviços.' },
      travel: { en: "Please find attached your flight tickets.", pt: 'Encontre em anexo suas passagens de voo.' },
      study: { en: "Please find attached the syllabus for the course.", pt: 'Por favor, encontre em anexo a ementa do curso.' }
    },
    variations: [
      { form: "Attached is the file", note: 'A versão invertida e mais leve. Perfeita para trocas de e-mail muito rápidas ("Attached is the log").' },
      { form: "I have attached the document", note: 'Ação ativa padrão. É excelente, mas perde a pompa do "Please find".' }
    ],
    combinations: [
      { phrase: "Please find attached a copy of", meaning: 'Por favor, encontre em anexo uma cópia de (Abertura dupla da burocracia)' }
    ],
    collocations: ["find attached", "attached is", "the attached file"],
    common_mistakes: [
      { wrong: 'Please find the attached file.', right: 'Please find attached the file.', tip: 'Na verdade as duas estão certas! Mas a estrutura corporativa mais cravada puxa o substantivo para o final. Apenas NUNCA escreva "I attach the file here".' },
      { wrong: 'See attached.', right: 'Please find attached...', tip: '"See attached" é extremamente seco, beirando a grosseria ou o cansaço. Use com cautela e só com amigos de trabalho próximos.' }
    ],
    retrieval_context: 'Você enviou a fatura para o cliente pagar, mas ele alega que não recebeu. Você responde encaminhando o e-mail novamente com o arquivo.',
    retrieval_prompt: 'Cumpra o rito de anexação: "Conforme discutido (As discussed), por favor, encontre em anexo a fatura (the invoice)."',
    retrieval_reference: "Exemplo: 'As discussed, please find attached the invoice.'",
    drills: [
      { instruction: 'Escreva a fórmula de envio.', input: 'Por favor, encontre em anexo o documento.', answer: "Please find attached the document." },
      { instruction: 'Forme a variante curta.', input: 'Em anexo (Attached is) está o log.', answer: "Attached is the log." },
      { instruction: 'O reverso (Ação ativa).', input: 'Eu anexei (I have attached) o arquivo.', answer: "I have attached the file." },
      { instruction: 'Revisão (Dia 76 e 78): Montando a máquina.', input: 'Com relação ao (Regarding) bug, por favor encontre em anexo as fotos. Eu agradeceria se (I would appreciate it if) você olhasse.', answer: "Regarding the bug, please find attached the photos. I would appreciate it if you took a look." },
      { instruction: 'SÍNTESE: Una "As requested" (Dia 77).', input: 'Conforme solicitado, por favor, encontre em anexo o código.', answer: "As requested, please find attached the code." },
      { instruction: 'SÍNTESE 2: Destaque de arquivo (Dia 73 e 74).', input: 'Vale a pena notar que (It is worth noting) eu anexei (I have attached) o relatório. Gostaria de chamar sua atenção para a página 2.', answer: "It is worth noting that I have attached the report. I'd like to draw your attention to page 2." }
    ],
    connects_to: [73, 74, 76, 77, 78],
    review_of: "Exige o encadeamento ritualístico do e-mail. A abertura de tópicos e referências passadas conectam-se diretamente com o jargão intocável da entrega de arquivos em papel ou digital.",
    daily_resources: {
      ted: { title: 'How to write a great email', url: 'https://www.youtube.com/watch?v=1', tip: 'Observe que as fórmulas de e-mail em inglês são quase litúrgicas; elas não se reinventam.' },
      podcast: { title: 'ESL Podcast - Sending Attachments', url: 'https://www.eslpod.com', tip: 'O som "attacht" deve ser claro para o destinatário.' },
      onelook_word: 'attached',
      anki_card: { front: 'Como é o clichê oficial corporativo para "Segue em anexo o arquivo"?', back: 'Please find attached the file.' },
      speaking_prompt: "Faça mímica digitando um e-mail longo para o seu maior inimigo cobrando a dívida e mandando a fatura anexa: 'Regarding your debt... As discussed... Please find attached...'"
    }
  },
  {
    id: 80,
    level: 'C1',
    module: 7,
    moduleTitle: 'Registro Formal e Profissional',
    structure: "Following up on my previous email, do we have an update?",
    translation: 'Acompanhando / Dando seguimento ao meu e-mail anterior, nós temos alguma atualização?',
    explanation: 'A Cobrança Amigável. Quando alguém te ignora num e-mail, você não responde com "Why didn\'t you reply?". Você puxa a carta do "Follow up". Significa que você está apenas retomando o fio da meada, "checando como estão as coisas", sem culpar ninguém diretamente pelo vácuo.',
    why_it_matters: 'O ato de "Following up" (ou pingar a pessoa) é a base das vendas e do gerenciamento B2B. Ele carrega a presunção benigna de que a pessoa estava apenas "ocupada", e não te ignorando ativamente.',
    pronunciation: '/ˈfɑloʊɪŋ ʌp ɑn/',
    stress_tip: 'A conexão sonora é FÓ-louin-GUÁ-pan (Following up on).',
    pattern: 'Following up on + [Referência do passado (email/call/meeting)]',
    breakdown: [
      { piece: 'Following up on', role: 'Ato de acompanhamento/cobrança leve (Dando seguimento a)' },
      { piece: 'my previous email,', role: 'A prova do vácuo (a referência passada ignorada)' },
      { piece: 'do we have an update?', role: 'O pedido de status atual' }
    ],
    core_vocabulary: [
      { word: 'follow up', translation: 'acompanhar (uma tarefa) / retornar o contato', example: 'I will follow up next week.' },
      { word: 'previous', translation: 'anterior / prévio', example: 'My previous job.' },
      { word: 'update', translation: 'atualização', example: 'We need an update.' }
    ],
    examples: {
      work: { en: "Following up on our conversation yesterday, here is the proposal.", pt: 'Acompanhando a nossa conversa de ontem, aqui está a proposta.' },
      travel: { en: "Just following up on my refund request.", pt: 'Apenas acompanhando/checando a minha requisição de reembolso.' },
      study: { en: "Following up on my application for the scholarship.", pt: 'Dando seguimento à minha candidatura para a bolsa de estudos.' }
    },
    variations: [
      { form: "Just checking in", note: 'Versão extremamente coloquial e fofa ("Só dando uma checada"). Ótima para Slack.' },
      { form: "Circling back", note: 'Clichê corporativo detestado por uns e amado por outros ("Dando uma volta de volta nisso").' }
    ],
    combinations: [
      { phrase: "I wanted to follow up on", meaning: 'Eu queria retornar ao assunto (menos diretivo)' }
    ],
    collocations: ["following up on", "just checking in", "circling back"],
    common_mistakes: [
      { wrong: 'Following my email...', right: 'Following UP ON my email...', tip: 'Seguir de andar atrás de alguém é "following". Fazer a cobrança corporativa é "Following up on" (sempre com o UP e o ON presentes).' },
      { wrong: 'I follow up you.', right: 'I will follow up WITH you.', tip: 'Se você usar a pessoa como alvo da cobrança (e não o e-mail), use "with" (follow up with John).' }
    ],
    retrieval_context: 'Você mandou um orçamento semana passada. O cliente visualizou e sumiu. Você escreve hoje de manhã para destrancar a venda.',
    retrieval_prompt: 'Quebre o gelo executivo: "Apenas checando (Just checking in). Dando seguimento à (Following up on) minha proposta." (the proposal).',
    retrieval_reference: "Exemplo: 'Just checking in. Following up on my proposal.'",
    drills: [
      { instruction: 'Forme a cobrança clássica do vácuo.', input: 'Dando seguimento ao meu e-mail anterior (previous email).', answer: "Following up on my previous email." },
      { instruction: 'Traduza o ping de Slack.', input: 'Apenas dando uma checada (checking in).', answer: "Just checking in." },
      { instruction: 'Faça o loop corporativo infame.', input: 'Voltando ao assunto (Circling back) para checar o status.', answer: "Circling back to check the status." },
      { instruction: 'Revisão (Dia 76 e 77): O Combo do Vácuo.', input: 'Dando seguimento ao meu e-mail... A respeito do (With regard to) orçamento, conforme discutido (as discussed), nós precisamos da grana.', answer: "Following up on my email... With regard to the budget, as discussed, we need the money." },
      { instruction: 'SÍNTESE: Junte Expectativa Quebrada (Dia 70) com Cobrança.', input: 'Dando seguimento... O sistema era pra ser (was supposed to be) seguro. Temo que (I\'m afraid) ele não seja.', answer: "Following up... The system was supposed to be secure. I'm afraid it is not." },
      { instruction: 'SÍNTESE 2: A Exigência Formal (Dia 78).', input: 'Eu queria retornar (follow up on) ao assunto. Eu agradeceria se (would appreciate it if) você pudesse responder (reply).', answer: "I wanted to follow up on the matter. I would appreciate it if you could reply." },
      { instruction: 'Forme a cobrança atrelada a uma pessoa.', input: 'Eu retornarei (will follow up) com ele amanhã.', answer: "I will follow up with him tomorrow." }
    ],
    connects_to: [70, 76, 77, 78],
    review_of: "Exige o distanciamento da raiva no caso de não-respostas, emparelhando a 'cobrança fantasma' do Follow Up com demandas indiretas de 'I would appreciate it'.",
    daily_resources: {
      ted: { title: 'What it takes to be a great leader', url: 'https://www.ted.com/talks/roselinde_torres_what_it_takes_to_be_a_great_leader', tip: 'Follow up é a fundação da confiança e cobrança em vendas e liderança.' },
      podcast: { title: 'ESL Podcast - Sales Follow-up', url: 'https://www.eslpod.com', tip: 'Treine a transição macia de "up-on" sem parecer que você está atirando pedras.' },
      onelook_word: 'following',
      anki_card: { front: 'Conserte a tragédia: Following my email, why didn\'t you reply?', back: 'Following UP ON my email, do we have an update? (Ou: Just checking in...)' },
      speaking_prompt: "Faça um tour cobrando mentalmente todo mundo que te deve algo: 'Hey John, following up on that 50 bucks...'"
    }
  },
  {
    id: 81,
    level: 'C1',
    module: 7,
    moduleTitle: 'Registro Formal e Profissional',
    structure: "To clarify, are you saying the feature won't be ready?",
    translation: 'Para esclarecer / Deixe-me ver se entendi, você está dizendo que a feature não estará pronta?',
    explanation: 'A faca que corta mal-entendidos. Em calls com 10 pessoas, a culpa evapora ou o escopo vira um monstro. Dizer "To clarify" para a sala inteira e fazer uma pergunta sim/não obriga a pessoa que está enrolando a se comprometer ("Yes" ou "No").',
    why_it_matters: 'Para não aceitar respostas confusas. Quando o gerente dá uma volta de 10 minutos sem responder se tem verba ou não, o bom sênior interrompe polidamente: "To clarify, do we have the budget?". Ele puxa a verdade para a luz.',
    pronunciation: '/tə ˈklɛrəˌfaɪ/',
    stress_tip: 'O grupo fonético bate no CLÉ (tâ-cléra-fai), impondo a parada total do ruído da reunião.',
    pattern: 'To clarify, + [Pergunta Direta de Sim ou Não]',
    breakdown: [
      { piece: 'To clarify,', role: 'Marcador de elucidação (Para esclarecer / Só para confirmar)' },
      { piece: 'are you saying', role: 'Retomada focada no discurso do enrolador' },
      { piece: "the feature won't be ready?", role: 'A facada final crua' }
    ],
    core_vocabulary: [
      { word: 'clarify', translation: 'esclarecer / deixar claro', example: 'Can you clarify this?' },
      { word: 'ready', translation: 'pronto', example: 'Is it ready?' },
      { word: 'feature', translation: 'funcionalidade (tecnologia)', example: 'It is a new feature.' }
    ],
    examples: {
      work: { en: "Just to clarify, my team is not responsible for the server.", pt: 'Só para esclarecer, minha equipe não é responsável pelo servidor.' },
      travel: { en: "To clarify, does this ticket include luggage?", pt: 'Para esclarecer, este bilhete inclui bagagem?' },
      study: { en: "Could you clarify the second point of your presentation?", pt: 'Você poderia esclarecer o segundo ponto da sua apresentação?' }
    },
    variations: [
      { form: "Just to clarify", note: 'Adicionando o "just" amolece um pouco o choque, fazendo soar mais como uma dúvida genuína do que como um interrogatório policial.' },
      { form: "To be clear", note: 'O irmão mais incisivo. "To be clear, we won\'t do it" (Sendo bem claro/Direto ao ponto, nós não faremos).' }
    ],
    combinations: [
      { phrase: "Let me clarify", meaning: 'Deixe-me esclarecer (quando VOCÊ foi o confuso da história e quer se defender)' }
    ],
    collocations: ["to clarify", "just to clarify", "let me clarify", "to be clear"],
    common_mistakes: [
      { wrong: 'To clear this...', right: 'To clarify this...', tip: 'Embora "clear" seja claro (adjetivo), o verbo formal usado para reuniões é sempre "clarify".' },
      { wrong: 'For clarify...', right: 'To clarify...', tip: 'Propósito em inglês ("Para fazer algo") exige o "TO + Infinitivo", não "FOR".' }
    ],
    retrieval_context: 'O CTO gringo mandou um texto vago sugerindo que talvez a equipe de vocês assuma o plantão do fim de semana, mas sem ordem expressa. Você responde fuzilando a ambiguidade.',
    retrieval_prompt: 'Corte a fumaça corporativa: "Só para esclarecer (Just to clarify), nós temos (do we have to) que trabalhar no fim de semana?"',
    retrieval_reference: "Exemplo: 'Just to clarify, do we have to work on the weekend?'",
    drills: [
      { instruction: 'Forme o puxão de responsabilidade.', input: 'Para esclarecer, você é o chefe?', answer: "To clarify, are you the boss?" },
      { instruction: 'Use o irmão autoritário (To be clear).', input: 'Sendo bem claro, nós estamos quebrados (broke).', answer: "To be clear, we are broke." },
      { instruction: 'Peça para a pessoa explicar de novo.', input: 'Você poderia esclarecer (clarify) este problema?', answer: "Could you clarify this issue?" },
      { instruction: 'Revisão (Dia 74): A Condução Dupla.', input: 'Só para confirmar, eu não sou o dev. Gostaria de chamar sua atenção para (draw your attention) o John.', answer: "Just to clarify, I am not the dev. I'd like to draw your attention to John." },
      { instruction: 'Revisão (Dia 68 e 72): Tendências e Sugestões.', input: 'Pessoas costumam (tend to) mentir. Para esclarecer, eu sugeriria focar (suggest focusing) nos dados.', answer: "People tend to lie. To clarify, I would suggest focusing on the data." },
      { instruction: 'SÍNTESE: Junte A Descoberta (Dia 59) e A Confirmação.', input: 'Acontece que (It turns out) o banco apagou. Para esclarecer, nós perdemos os arquivos?', answer: "It turns out the database wiped. To clarify, did we lose the files?" },
      { instruction: 'Defenda-se e mude seu rumo.', input: 'Deixe-me esclarecer (Let me clarify).', answer: "Let me clarify." }
    ],
    connects_to: [59, 68, 72, 74],
    review_of: "Exige o foco em forçar resoluções binárias ('Are you saying X?') desmascarando a evasiva dos discursos. Atrela o esclarecimento com marcadores C1 já sedimentados.",
    daily_resources: {
      ted: { title: 'The beauty of conflict', url: 'https://www.ted.com/talks/margaret_heffernan_the_beauty_of_conflict', tip: 'Observe que a clarificação de pontos obscuros gera conflito positivo, não briga.' },
      podcast: { title: 'ESL Podcast - Asking for Clarification', url: 'https://www.eslpod.com', tip: 'Treine a voz caindo no tom final, mantendo o controle calmo mas assertivo.' },
      onelook_word: 'clarify',
      anki_card: { front: 'Conserte a frase defensiva do BR: To clear this, I didn\'t do it.', back: 'To CLARIFY, I didn\'t do it.' },
      speaking_prompt: "Faça um interrogatório passivo-agressivo consigo mesmo: 'You said you would study. To clarify, why are you watching YouTube?'"
    }
  },
  {
    id: 82,
    level: 'C1',
    module: 7,
    moduleTitle: 'Registro Formal e Profissional',
    structure: "I look forward to hearing from you soon.",
    translation: 'Fico no aguardo de notícias suas em breve. / Aguardo seu retorno.',
    explanation: 'Nós aprendemos "I\'m looking forward to" no dia 63 como a expressão animada, quente e falada para o fim de e-mails de rotina e Slack. "I look forward to" (no Present Simple Absoluto) é a versão fria, institucional e hierárquica. É como assinar "Atenciosamente" vs "Abraços". O -ING que o segue, no entanto, é o mesmo.',
    why_it_matters: 'Para Cartas de Apresentação (Cover Letters), candidaturas de imigração ou encerramento de contratos com diretores. Você não quer soar eufórico e sorridente ("I\'m looking..."); você quer soar presente, profissional e estático ("I look...").',
    pronunciation: '/aɪ lʊk ˈfɔrwərd tu/',
    stress_tip: 'Tudo é falado de forma linear e pausada. Sem contrações. "I. Look. Forward. To."',
    pattern: 'I look forward to + Verbo-ING',
    breakdown: [
      { piece: 'I look forward to', role: 'Fechamento institucional frio (Fico no aguardo / Aguardo)' },
      { piece: 'hearing from you', role: 'Ação esperada, obrigatória em -ING (literal: "de ouvir de você")' },
      { piece: 'soon', role: 'Condição final' }
    ],
    core_vocabulary: [
      { word: 'I look forward to', translation: 'aguardo / fico no aguardo de (formal escrito)', example: 'I look forward to your reply.' },
      { word: 'hearing from you', translation: 'receber notícias suas / ter um retorno seu', example: 'Thanks for hearing from me.' },
      { word: 'soon', translation: 'em breve', example: 'See you soon.' }
    ],
    examples: {
      work: { en: "I look forward to discussing this matter further.", pt: 'Aguardo a oportunidade de discutir este assunto mais a fundo.' },
      travel: { en: "We look forward to welcoming you to our hotel.", pt: 'Aguardamos ansiosamente para recebê-lo em nosso hotel.' },
      study: { en: "I look forward to your feedback on my dissertation.", pt: 'Fico no aguardo do seu feedback sobre minha dissertação.' }
    },
    variations: [
      { form: "We look forward to", note: 'Mudando para "Nós", a empresa inteira assume a postura receptiva ("We look forward to serving you").' }
    ],
    combinations: [
      { phrase: "I look forward to the opportunity", meaning: 'Eu aguardo pela oportunidade (muito comum em cover letters)' }
    ],
    collocations: ["look forward to hearing", "look forward to welcoming", "discussing further"],
    common_mistakes: [
      { wrong: 'I look forward to hear...', right: 'I look forward to HEARING...', tip: 'Não importa se é Present Simple (I look) ou Present Continuous (I\'m looking), o "to" ainda é preposição idiomática e EXIGE -ING no verbo que vem depois.' },
      { wrong: 'I wait your reply.', right: 'I look forward to your reply.', tip: 'Nunca use "I wait" para fechamento de e-mails em inglês corporativo. É rude e robótico.' }
    ],
    retrieval_context: 'Última linha de um e-mail muito formal aplicando para uma vaga de emprego na Europa.',
    retrieval_prompt: 'Crave a formalidade suprema: diga que "Fica no aguardo (look forward to) da resposta (reply) deles".',
    retrieval_reference: "Exemplo: 'I look forward to your reply.'",
    drills: [
      { instruction: 'Forme a despedida da entrevista (com verbo).', input: 'Eu fico no aguardo de ouvir de você (hearing from you).', answer: "I look forward to hearing from you." },
      { instruction: 'Use a instituição.', input: 'Nós aguardamos receber (receiving) os fundos.', answer: "We look forward to receiving the funds." },
      { instruction: 'SÍNTESE (Dia 63 e 82): O Contraste.', input: 'Forma falada animada: Estou animado para ir (going). Forma escrita fria: Aguardo ir.', answer: "I'm looking forward to going. I look forward to going." },
      { instruction: 'Revisão do Jargão (Dia 76 e 77).', input: 'A respeito (Regarding) da vaga, conforme discutido (as discussed), eu sou o cara certo. Fico no aguardo de ouvir de você.', answer: "Regarding the position, as discussed, I am the right guy. I look forward to hearing from you." },
      { instruction: 'Revisão (Dia 80): O Ping Frio.', input: 'Dando seguimento (Following up on) à minha proposta, eu fico no aguardo da sua resposta (reply).', answer: "Following up on my proposal, I look forward to your reply." },
      { instruction: 'SÍNTESE EXTREMA: A Trindade de Despedida C1 (Dia 75, 79, 82).', input: 'Tenho o prazer de informar que (pleased to inform) vencemos. Por favor, encontre em anexo (find attached) a fatura. Fico no aguardo do seu pagamento (payment).', answer: "I'm pleased to inform you that we won. Please find attached the invoice. I look forward to your payment." },
      { instruction: 'Corrija a "espera" agressiva.', input: 'I wait your call.', answer: "I look forward to your call." }
    ],
    connects_to: [63, 75, 76, 77, 79, 80],
    review_of: "Exige o contraponto sutil entre a versão com ING ('I'm looking') e a versão estática ('I look'), empilhando a despedida formal com fechamentos em 'find attached' e retomadas 'following up'.",
    daily_resources: {
      ted: { title: 'Your body language may shape who you are', url: 'https://www.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are', tip: 'Observe como pequenas poses de poder (como a remoção do "am" das frases) mudam a percepção de hierarquia.' },
      podcast: { title: 'ESL Podcast - Cover Letters', url: 'https://www.eslpod.com', tip: 'Nunca termine um cover letter com "I am looking". Sempre termine com o imponente "I look forward to".' },
      onelook_word: 'look',
      anki_card: { front: 'Conserte a agressividade rude: "I am waiting for your reply." (No fechamento formal).', back: 'I look forward to your reply.' },
      speaking_prompt: "Redija mentalmente o e-mail de demissão (I quit) terminando da forma mais seca e formal possível: 'I look forward to my check...'"
    }
  },
  {
    id: 83,
    level: 'C1',
    module: 7,
    moduleTitle: 'Registro Formal e Profissional',
    structure: "If you require any further information, please let me know.",
    translation: 'Se você precisar de qualquer informação adicional, por favor, me avise.',
    explanation: 'A Cláusula de Porta Aberta. Ao fechar um documento, um e-mail ou um discurso, "Please let me know" é a ponte que deixa a conversa viva e receptiva. Acoplado com o "require any further" cria um bloco sonoro impenetrável de cortesia corporativa que os advogados, diretores e assistentes gringos usam no "Control C + Control V".',
    why_it_matters: 'Para não terminar mensagens com silêncio frio. Fornece a rota de saída elegante para que o cliente faça perguntas que ele porventura não entendeu.',
    pronunciation: '/pliz lɛt mi noʊ/',
    stress_tip: 'O bloco "lét-mi-nô" é a respiração de alívio no fim da frase.',
    pattern: '[Condição de dúvida ou necessidade], + please let me know',
    breakdown: [
      { piece: 'If you require', role: 'Se você necessitar (Formal para "If you need")' },
      { piece: 'any further information,', role: 'Qualquer informação adicional/posterior' },
      { piece: 'please let me know', role: 'Marcador de disponibilidade total (por favor, me avise)' }
    ],
    core_vocabulary: [
      { word: 'let me know', translation: 'me avise / me dê um toque', example: 'Let me know if you come.' },
      { word: 'require', translation: 'requerer / necessitar (formal para need)', example: 'It requires patience.' },
      { word: 'further', translation: 'adicional / posterior / além', example: 'Further details are attached.' },
      { word: 'information', translation: 'informação (incontável, NUNCA tem "s")', example: 'Give me some information.' }
    ],
    examples: {
      work: { en: "Should you have any questions, please let me know.", pt: 'Caso você tenha alguma dúvida, por favor, me avise.' },
      travel: { en: "If you need an early check-in, just let us know.", pt: 'Se precisar de um check-in antecipado, é só nos avisar.' },
      study: { en: "Please let me know if my formatting is correct.", pt: 'Por favor, me avise se minha formatação está correta.' }
    },
    variations: [
      { form: "Do not hesitate to contact me", note: 'A versão "Corretor Imobiliário / Atendimento C1" ("Não hesite em me contatar"). Extremamente pomposo.' },
      { form: "Should you need", note: 'Inversão poético-corporativa de "If you need" ("Caso você necessite...").' }
    ],
    combinations: [
      { phrase: "Let me know when you are available", meaning: 'Me avise quando estiver disponível' },
      { phrase: "Keep me posted", meaning: 'Mantenha-me atualizado (O primo coloquial de let me know)' }
    ],
    collocations: ["let me know", "further information", "should you need", "do not hesitate"],
    common_mistakes: [
      { wrong: 'Please advice me.', right: 'Please let me know.', tip: 'Aviso de "passar a informação/chamar a pessoa" é sempre let know. "Advise" é dar conselho terapêutico ou consultoria.' },
      { wrong: 'I need further informations.', right: 'I need further information.', tip: 'Information é uma palavra de massa. NUNCA coloque S nela. NUNCA!' }
    ],
    retrieval_context: 'Você entregou o projeto para o cliente, que é cricri, e ele provavelmente terá dúvidas. Você abre a porta pro feedback na última linha.',
    retrieval_prompt: 'Jogue o tapete vermelho: "Se você tiver quaisquer perguntas (any questions), por favor me avise."',
    retrieval_reference: "Exemplo: 'If you have any questions, please let me know.'",
    drills: [
      { instruction: 'Forme a clássica porta aberta.', input: 'Por favor, me avise se você precisar de ajuda.', answer: "Please let me know if you need help." },
      { instruction: 'Substitua o Need pelo jargão C1.', input: 'Se você requerer informações adicionais (further information).', answer: "If you require further information." },
      { instruction: 'Corrija o S infernal.', input: 'If you need any informations.', answer: "If you need any information." },
      { instruction: 'Inversão pomposa ("Caso você precise").', input: 'Caso você precise (Should you need) de dados, me avise.', answer: "Should you need data, please let me know." },
      { instruction: 'SÍNTESE DO FINAL DE E-MAIL (Dia 82, 79).', input: 'Por favor, encontre em anexo o arquivo. Se precisar de algo, me avise. Fico no aguardo da sua resposta (I look forward).', answer: "Please find attached the file. If you need anything, please let me know. I look forward to your reply." },
      { instruction: 'Use o aviso do corretor/atendente.', input: 'Não hesite em me contatar (Do not hesitate to contact me).', answer: "Do not hesitate to contact me." },
      { instruction: 'Revisão de Pedido Oculto (Dia 57).', input: 'Eu estava me perguntando se (wondering if) nós vencemos. Por favor, me avise.', answer: "I was wondering if we won. Please let me know." }
    ],
    connects_to: [57, 79, 82],
    review_of: "Exige que o aluno empilhe todos os marcadores de finalização de e-mail sem errar as propriedades fonéticas e gramaticais incontáveis, como a palavra information.",
    daily_resources: {
      ted: { title: 'The secret to giving great feedback', url: 'https://www.ted.com/talks/leeann_renniger_the_secret_to_giving_great_feedback', tip: 'Observe como o let me know tira o peso de uma imposição agressiva.' },
      podcast: { title: 'ESL Podcast - Ending a Conversation', url: 'https://www.eslpod.com', tip: 'Treine falar a expressão com um leve sorriso na voz.' },
      onelook_word: 'know',
      anki_card: { front: 'Como se despede abrindo porta para dúvidas em inglês corporativo? (Se tiver qualquer..., por favor, me avise).', back: 'If you have any questions, please let me know.' },
      speaking_prompt: "Brinque de secretária eletrônica arrogante: 'I am busy. Should you need anything... don't call me. Just let me know via email.'"
    }
  },
  {
    id: 84,
    level: 'C1',
    module: 7,
    moduleTitle: 'Registro Formal e Profissional',
    structure: "On behalf of the entire team, I would like to thank you for your support.",
    translation: 'Em nome de toda a equipe, eu gostaria de agradecer pelo seu apoio.',
    explanation: 'A Coroa de Liderança. Encerramos o Módulo de Registro C1 com a expressão usada apenas por embaixadores, porta-vozes e grandes líderes. "On behalf of" transfere a responsabilidade e a gratidão da pessoa física para a corporação, criando uma voz coletiva majestosa.',
    why_it_matters: 'Para discursos de agradecimento, recusas difíceis da corporação ou saudações de boas-vindas na empresa. Representar a entidade confere poder incomensurável às suas palavras.',
    pronunciation: '/ɑn bɪˈhæf ʌv/',
    stress_tip: 'O "HALF" rima com "LAUGH". A pronúncia é fluida: on-bi-RÁF-of.',
    pattern: 'On behalf of + [Entidade Maior/Equipe/Pessoa], + [Eu/Nós...] + [Ação Formal]',
    breakdown: [
      { piece: 'On behalf of', role: 'Marcador de representação (Em nome de / Por parte de)' },
      { piece: 'the entire team,', role: 'A entidade sendo representada' },
      { piece: 'I would like to thank you', role: 'A ação oficial realizada' },
      { piece: 'for your support', role: 'O motivo' }
    ],
    core_vocabulary: [
      { word: 'on behalf of', translation: 'em nome de', example: 'I speak on behalf of the team.' },
      { word: 'entire', translation: 'inteiro / todo', example: 'The entire company.' },
      { word: 'support', translation: 'apoio / suporte', example: 'Thank you for the support.' }
    ],
    examples: {
      work: { en: "On behalf of management, I'd like to propose a toast.", pt: 'Em nome da direção, gostaria de propor um brinde.' },
      travel: { en: "On behalf of the captain and crew, welcome aboard.", pt: 'Em nome do capitão e tripulação, bem-vindos a bordo.' },
      study: { en: "I am accepting this award on behalf of my professor.", pt: 'Estou aceitando este prêmio em nome do meu professor.' }
    },
    variations: [
      { form: "Speaking for", note: 'A versão coloquial de boteco ("Falando por todos nós...").' },
      { form: "In the name of", note: 'Usado quase exclusivamente para motivações poéticas, cruzadas ou em nome da lei. NO MUNDO DOS NEGÓCIOS, use sempre "on behalf of".' }
    ],
    combinations: [
      { phrase: "Sign on behalf of", meaning: 'Assinar por procuração ou representação' }
    ],
    collocations: ["on behalf of", "the entire team", "on behalf of management"],
    common_mistakes: [
      { wrong: 'In name of the team...', right: 'On behalf of the team...', tip: 'Nunca traduza o nosso "Em nome do time" literalmente. "In the name of" soa como se você estivesse conjurando um encantamento sagrado. A delegação de negócios é "on behalf of".' }
    ],
    retrieval_context: 'Um cliente gigante fecha contrato com sua startup. Como Founder, você sobe ao palco para discursar e agradecer.',
    retrieval_prompt: 'Seja o rosto da empresa: "Em nome de todos nós (all of us), obrigado (thank you)."',
    retrieval_reference: "Exemplo: 'On behalf of all of us, thank you.'",
    drills: [
      { instruction: 'Forme a representação básica.', input: 'Em nome do CEO, nós concordamos.', answer: "On behalf of the CEO, we agree." },
      { instruction: 'Forme a saudação de bordo.', input: 'Em nome da tripulação (crew), seja bem-vindo (welcome).', answer: "On behalf of the crew, welcome." },
      { instruction: 'Corrija a cruzada mágica.', input: 'In the name of the team, I speak.', answer: "On behalf of the team, I speak." },
      { instruction: 'SÍNTESE: Junte com Proposta C1 (Dia 71).', input: 'Em nome da diretoria, eu gostaria de propor (would like to propose) uma mudança.', answer: "On behalf of the board, I'd like to propose a change." },
      { instruction: 'SÍNTESE: Junte com a Má Notícia C1 (Dia 75, 58).', input: 'Em nome do banco, lamento informar que (regret to inform) nós recusamos seu cartão.', answer: "On behalf of the bank, I regret to inform you that we declined your card." },
      { instruction: 'SÍNTESE SUPREMA DE REUNIÃO (Dia 73 e 74).', input: 'Em nome do time, eu gostaria de chamar sua atenção para (draw your attention to) o lucro. Vale ressaltar que (It is worth noting) ele dobrou.', answer: "On behalf of the team, I'd like to draw your attention to the profit. It is worth noting that it doubled." },
      { instruction: 'O Fechamento Total do E-mail e do Módulo (Dia 82, 83).', input: 'Se você precisar de (require) dados, me avise (let me know). Aguardo (I look forward to) sua resposta. Em nome do grupo, adeus.', answer: "If you require data, please let me know. I look forward to your reply. On behalf of the group, goodbye." }
    ],
    connects_to: [58, 71, 73, 74, 75, 82, 83],
    review_of: "O Exame Final de C1 Empresarial. O aluno consegue fundir propostas de liderança, destaques analíticos, clareza cirúrgica e portas abertas em e-mails atuando como a própria corporação.",
    daily_resources: {
      ted: { title: 'How to build trust in leadership', url: 'https://www.ted.com/talks/frances_frei_how_to_build_and_rebuild_trust', tip: 'Observe que líderes representam algo maior que si próprios nas falas de desculpas.' },
      podcast: { title: 'ESL Podcast - Making Formal Speeches', url: 'https://www.eslpod.com', tip: 'Pratique ser o mestre de cerimônias. Fale a expressão lentamente para dar peso de gravidade.' },
      onelook_word: 'behalf',
      anki_card: { front: 'Conserte a frase épica que virou de religião gótica (In name of the team...): "Em nome do meu time..."', back: 'On behalf of my team...' },
      speaking_prompt: "Faça o discurso aceitando o seu Oscar invisível: 'On behalf of my family... On behalf of my dog...'"
    }
  }
]

export const BATCH_78_84_SUMMARY = {
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
    'O Fim da Flexibilidade. O aluno compreendeu que, no mais alto escalão de negociação anglo-saxônica, a linguagem não inova. "Please find attached" e "I look forward to" são blocos invioláveis, cujo uso correto atesta senioridade e pertença ao grupo, enquanto inovações gramaticais soam amadoras.',
    'Cobranças e Puxões. O aluno aprendeu a gerenciar atritos em calls remotas, substituindo as farpas tupiniquins (Why didn\'t you send?) pelo pacote aveludado C1 (Following up... I would appreciate it if... To clarify...). O discurso passivo-agressivo produtivo é dominado.'
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
  connects_to_next: "Batch 13 (dias 85-91): [I can't help but think, It occurs to me that, I'm inclined to, It stands to reason, I take it that, I gather that, I dare say] — [Abertura do Módulo 8: Nuance e Pragmática. Após polir a armadura do executivo de parede de vidro, entraremos na mente do pensador nativo: como eles criam deduções e compartilham opiniões complexas usando a intuição verbal com expressões como 'Eu não posso deixar de pensar que' e 'Me ocorre que', adentrando o C1 especulativo avançado]."
}
