import type { Lesson } from '../types'

export const lessons: Lesson[] = [
  {
    id: 71,
    level: 'C1',
    module: 7,
    moduleTitle: 'Registro Formal e Profissional',
    structure: "I'd like to propose a new strategy for the upcoming quarter.",
    translation: 'Gostaria de propor uma nova estratégia para o próximo trimestre.',
    explanation: 'Abre o Módulo 7 (Registro Corporativo C1). No mundo empresarial de alto nível, ideias não são apenas faladas ("I want to do X"), elas são "propostas". "I\'d like to propose" demonstra liderança e exige respeito na mesa de reunião.',
    why_it_matters: 'Para fazer pitchings, apresentar projetos a diretores ou conselhos. É a evolução absoluta do "I think we should".',
    pronunciation: '/aɪd laɪk tə prəˈpoʊz/',
    stress_tip: 'O verbo PROPOSE recebe ênfase dramática, alongando o O.',
    pattern: "I'd like to propose + [Substantivo/Ação]",
    breakdown: [
      { piece: "I'd like to", role: 'Condicional polida (Eu gostaria de)' },
      { piece: 'propose', role: 'Verbo executivo (propor)' },
      { piece: 'a new strategy', role: 'O objeto da proposta' },
      { piece: 'for the upcoming quarter', role: 'Contexto temporal corporativo (Q1/Q2/Q3/Q4)' }
    ],
    core_vocabulary: [
      { word: 'propose', translation: 'propor', example: 'I propose a toast.' },
      { word: 'upcoming', translation: 'próximo / que está por vir', example: 'The upcoming event.' },
      { word: 'quarter', translation: 'trimestre (usado no mundo de negócios)', example: 'Profits rose this quarter.' }
    ],
    examples: {
      work: { en: "I'd like to propose an alternative solution.", pt: 'Gostaria de propor uma solução alternativa.' },
      travel: { en: "I propose we leave early to avoid traffic.", pt: 'Proponho que saiamos cedo para evitar o trânsito.' },
      study: { en: "I'd like to propose a new research method.", pt: 'Gostaria de propor um novo método de pesquisa.' }
    },
    variations: [
      { form: "I propose that we", note: 'Seguido por "that" permite montar uma frase inteira depois ("Proponho que nós...").' }
    ],
    combinations: [
      { phrase: "I'd like to propose a toast", meaning: 'Propor um brinde (muito comum em jantares da empresa)' }
    ],
    collocations: ["propose a strategy", "upcoming quarter", "propose an alternative"],
    common_mistakes: [
      { wrong: 'I want to propose...', right: 'I would like to propose...', tip: 'O verbo "want" é muito infantil para acompanhar a grandiosidade de "propose". Use "I would like (I\'d like)".' }
    ],
    retrieval_context: 'Sua equipe está patinando e você desenhou uma arquitetura nova. Na reunião com o CTO, você toma a palavra.',
    retrieval_prompt: 'Tome a liderança polida: "Eu gostaria de propor uma nova arquitetura (a new architecture)."',
    retrieval_reference: "Exemplo: 'I'd like to propose a new architecture.'",
    drills: [
      { instruction: 'Forme a proposta padrão.', input: 'Eu gostaria de propor uma mudança.', answer: "I'd like to propose a change." },
      { instruction: 'Use a variante estruturada.', input: 'Eu proponho que nós esperemos.', answer: "I propose that we wait." },
      { instruction: 'Proponha um brinde.', input: 'Eu gostaria de propor um brinde (toast).', answer: "I'd like to propose a toast." },
      { instruction: 'Revisão (Dia 25): Substitua o I want.', input: 'Eu quero propor uma ideia.', answer: "I'd like to propose an idea." },
      { instruction: 'Revisão (Dia 43 e 62): Contraste o Risco e a Proposta.', input: 'Nós não podemos nos dar ao luxo (afford) de perder; no entanto (however), eu gostaria de propor um teste.', answer: "We can't afford to lose; however, I'd like to propose a test." },
      { instruction: 'Revisão (Dia 53): Concessão C1.', input: 'O orçamento está apertado. Dito isso (Having said that), eu gostaria de propor esta ferramenta.', answer: "The budget is tight. Having said that, I'd like to propose this tool." },
      { instruction: 'Traduza o vocabulário corporativo.', input: 'Para o próximo trimestre (upcoming quarter).', answer: "For the upcoming quarter." }
    ],
    connects_to: [25, 43, 53, 62],
    review_of: "Início do refinamento C1. Exige que o aluno consolide a polidez do 'I would like' atrelando-a ao verbo executivo 'propose', ligando com contrastes de risco dos dias passados.",
    daily_resources: {
      ted: { title: 'How to pitch to a VC', url: 'https://www.ted.com/talks/david_s_rose_how_to_pitch_to_a_vc', tip: 'Observe como empreendedores abrem suas ideias formalmente para investidores.' },
      podcast: { title: 'ESL Podcast - Business Proposals', url: 'https://www.eslpod.com', tip: 'Treine a voz grave de autoridade ao falar "pro-POZE".' },
      onelook_word: 'propose',
      anki_card: { front: 'Traduza no jargão executivo: "Gostaria de propor um plano para o próximo trimestre".', back: "I'd like to propose a plan for the upcoming quarter." },
      speaking_prompt: "Proponha três mudanças drásticas para a sua própria vida amorosa/financeira na frente do espelho."
    }
  },
  {
    id: 72,
    level: 'C1',
    module: 7,
    moduleTitle: 'Registro Formal e Profissional',
    structure: "I would suggest delaying the launch until next week.",
    translation: 'Eu sugeriria atrasar o lançamento até a próxima semana.',
    explanation: 'A forma consultiva executiva. O verbo "suggest", assim como "end up" e "look forward to", ODEIA A PREPOSIÇÃO TO e prefere empurrar o verbo seguinte para o GERÚNDIO (ING). É uma forma indireta e extremamente respeitosa de dar uma ordem para alguém de escalão superior.',
    why_it_matters: 'Para evitar soar como um general ("Delay the launch" ou "You should delay"). Dizer "I would suggest delaying" foca na AÇÃO, não na pessoa. É a melhor forma de intervir quando o seu chefe está prestes a cometer um erro grave.',
    pronunciation: '/aɪ wʊd səˈʤɛst/',
    stress_tip: 'O "-GEST" ganha força. O "delaying" desliza logo em seguida.',
    pattern: 'I would suggest + Verbo-ING',
    breakdown: [
      { piece: 'I would suggest', role: 'Abordagem consultiva (Eu sugeriria)' },
      { piece: 'delaying', role: 'Ação sugerida OBRIGATORIAMENTE no gerúndio' },
      { piece: 'the launch', role: 'O objeto da ação' },
      { piece: 'until next week', role: 'Contexto temporal' }
    ],
    core_vocabulary: [
      { word: 'suggest', translation: 'sugerir', example: 'What do you suggest?' },
      { word: 'delay', translation: 'atrasar/adiar', example: 'The flight was delayed.' },
      { word: 'launch', translation: 'lançamento (de produto/projeto)', example: 'The launch is tomorrow.' }
    ],
    examples: {
      work: { en: "I would suggest testing it one more time.", pt: 'Eu sugeriria testar isso mais uma vez.' },
      travel: { en: "I would suggest leaving for the airport now.", pt: 'Eu sugeriria sair para o aeroporto agora.' },
      study: { en: "I would suggest reviewing chapter three.", pt: 'Eu sugeriria revisar o capítulo três.' }
    },
    variations: [
      { form: "I suggest we + verbo normal", note: 'Se você introduzir o sujeito "WE", aí o ING some ("I suggest we delay"). Mas sem o sujeito, ING sempre.' },
      { form: "May I suggest...", note: 'O nível máximo da polidez diplomática ("Posso sugerir...?").' }
    ],
    combinations: [
      { phrase: "I would strongly suggest", meaning: 'Eu sugeriria fortemente (Um alerta velado de perigo)' }
    ],
    collocations: ["suggest delaying", "strongly suggest", "may I suggest"],
    common_mistakes: [
      { wrong: 'I suggest to delay.', right: 'I suggest DELAYING.', tip: 'O verbo suggest é inimigo mortal do infinitivo com "to" (I suggest to do). Nunca use. Troque para -ING.' },
      { wrong: 'I suggest you to do it.', right: 'I suggest that you do it.', tip: 'Outra armadilha clássica. Nunca diga "suggest you to". É sempre "suggest THAT you".' }
    ],
    retrieval_context: 'O servidor não está aguentando os testes, e seu gerente quer abrir o site para o público amanhã.',
    retrieval_prompt: 'Intervenha com educação: "Eu sugeriria fortemente (strongly) esperar (waiting)."',
    retrieval_reference: "Exemplo: 'I would strongly suggest waiting.'",
    drills: [
      { instruction: 'Forme a sugestão consultiva com ING.', input: 'Eu sugeriria atualizar (update) o sistema.', answer: "I would suggest updating the system." },
      { instruction: 'Use o aviso velado (strongly).', input: 'Eu sugeriria fortemente cancelar (cancel) a reunião.', answer: "I would strongly suggest canceling the meeting." },
      { instruction: 'Use a variante com sujeito (sem ING).', input: 'Eu sugiro que nós foquemos (focus) nisso.', answer: "I suggest we focus on this." },
      { instruction: 'Revisão (Dia 60 e 67): A Guerra do ING.', input: 'Nós acabamos (ended up) falhando e nós não paramos (keep) de errar; portanto, eu sugiro parar (stopping).', answer: "We ended up failing and we keep making mistakes; therefore, I suggest stopping." },
      { instruction: 'Revisão (Dia 59 e 51): Contraste a Descoberta.', input: 'Acontece que (It turns out) é perigoso. Em contraste, o outro é seguro. Eu sugeriria usar (using) o outro.', answer: "It turns out it is dangerous. In contrast, the other one is secure. I would suggest using the other one." },
      { instruction: 'Traduza a polidez britânica.', input: 'Posso (May I) sugerir uma alternativa?', answer: "May I suggest an alternative?" },
      { instruction: 'Corrija o erro de nativos brasileiros.', input: 'I suggest to go.', answer: "I suggest going." }
    ],
    connects_to: [51, 59, 60, 67],
    review_of: "Exige uma aderência brutal à regra do ING pós-suggest, alinhando a função consultiva do C1 com o fatalismo dos Idioms B2 revisados.",
    daily_resources: {
      ted: { title: 'How to speak up for yourself', url: 'https://www.ted.com/talks/adam_galinsky_how_to_speak_up_for_yourself', tip: 'Observe como o palestrante sugere mudanças de comportamento de forma passiva-agressiva porém polida.' },
      podcast: { title: 'ESL Podcast - Giving Advice at Work', url: 'https://www.eslpod.com', tip: 'Treine tirar o TO da mente. Fale rápido: I-suggest-calling.' },
      onelook_word: 'suggest',
      anki_card: { front: 'Como se livrar do erro feio "I suggest to cancel"?', back: 'I suggest CANCELING.' },
      speaking_prompt: "Você é consultor de uma empresa falida. Sugira demissões, vendas e cortes: 'I would suggest firing... I would suggest selling...'"
    }
  },
  {
    id: 73,
    level: 'C1',
    module: 7,
    moduleTitle: 'Registro Formal e Profissional',
    structure: "It is worth noting that our traffic doubled this month.",
    translation: 'Vale a pena notar / É importante ressaltar que nosso tráfego dobrou neste mês.',
    explanation: 'A expressão formal que substitui "Look at this" ou "By the way". O "It is worth noting" age como um marca-texto fluorescente no seu e-mail ou apresentação. Ele diz para a diretoria: "Parem tudo e olhem para este dado específico".',
    why_it_matters: 'Num documento de 10 páginas, as pessoas pulam informações. Usar "It is worth noting that..." força o leitor a prestar atenção em um fato mitigante ou numa vitória que você quer destacar discretamente.',
    pronunciation: '/ɪt ɪz wɜrθ ˈnoʊtɪŋ ðæt/',
    stress_tip: 'O grupo "WORTH NOTING" recebe ênfase total, marcando a sua importância na frase.',
    pattern: 'It is worth noting that + [Fato de Alto Impacto]',
    breakdown: [
      { piece: 'It is worth noting', role: 'Marcador de destaque analítico (Vale a pena notar)' },
      { piece: 'that', role: 'Conexão (que)' },
      { piece: 'our traffic doubled', role: 'O dado importante a ser destacado' },
      { piece: 'this month', role: 'Contexto de tempo' }
    ],
    core_vocabulary: [
      { word: 'worth', translation: 'valer a pena / ter valor', example: 'It is worth the price.' },
      { word: 'noting', translation: 'notar / observar', example: 'Please note this.' },
      { word: 'double', translation: 'dobrar', example: 'The price doubled.' }
    ],
    examples: {
      work: { en: "It is worth noting that the budget has already been approved.", pt: 'Vale ressaltar que o orçamento já foi aprovado.' },
      travel: { en: "It is worth noting that the hotel requires a deposit.", pt: 'Vale a pena notar que o hotel exige um depósito.' },
      study: { en: "It is worth noting that this author won a Nobel Prize.", pt: 'É importante ressaltar que este autor ganhou um Prêmio Nobel.' }
    },
    variations: [
      { form: "It is important to highlight", note: 'Sinônimo perfeito, um pouco mais professoral ("É importante destacar...").' },
      { form: "It's worth mentioning", note: 'Sinônimo com verbo mencionar, um pouco mais leve na escrita ("Vale mencionar que...").' }
    ],
    combinations: [
      { phrase: "Also worth noting is", note: 'Inversão estilística muito chique usada em jornalismo ("Também digno de nota é...").' }
    ],
    collocations: ["worth noting", "worth mentioning", "important to highlight"],
    common_mistakes: [
      { wrong: 'It values to note...', right: 'It is worth noting...', tip: 'Tradução literal terrível do "Vale a pena". O inglês usa sempre "WORTH" para representar mérito e valor de ação.' },
      { wrong: 'It is worth to note.', right: 'It is worth noting.', tip: 'A expressão "It is worth" EXIGE um gerúndio (-ING) na sequência ("worth reading", "worth buying", "worth noting").' }
    ],
    retrieval_context: 'A reunião está sendo dura porque o custo do projeto subiu 20%. Mas você quer destacar que, em compensação, o lucro subiu 50%.',
    retrieval_prompt: 'Jogue o marca-texto corporativo na mesa: "Vale a pena notar que os lucros dobraram (the profits doubled)."',
    retrieval_reference: "Exemplo: 'It is worth noting that the profits doubled.'",
    drills: [
      { instruction: 'Destaque o dado.', input: 'Vale a pena notar que nós vencemos.', answer: "It is worth noting that we won." },
      { instruction: 'Forme o sinônimo da menção.', input: 'Vale mencionar que ele ajudou.', answer: "It's worth mentioning that he helped." },
      { instruction: 'Corrija o "vale a pena" brasileiro.', input: 'It pays to note that...', answer: "It is worth noting that..." },
      { instruction: 'Revisão (Dia 50 e 54): Exemplo e Sumário.', input: 'Por exemplo, (For instance) as vendas caíram. Resumindo (To sum up), vale a pena notar que a economia está mal.', answer: "For instance, sales dropped. To sum up, it is worth noting that the economy is bad." },
      { instruction: 'SÍNTESE: Una "Having said that" (Dia 53) e Destaque.', input: 'Nós falhamos o prazo. Dito isso, vale ressaltar que o código está perfeito.', answer: "We missed the deadline. Having said that, it is worth noting that the code is perfect." },
      { instruction: 'Revisão da Tendência (Dia 68).', input: 'Vale a pena notar que o sistema costuma (tends to) falhar no inverno.', answer: "It is worth noting that the system tends to fail in the winter." },
      { instruction: 'SÍNTESE EXTREMA (Dia 55): Inversão C1.', input: 'Não só (Not only is it) é rápido, mas vale ressaltar que é de graça.', answer: "Not only is it fast, but it is worth noting that it is free." }
    ],
    connects_to: [50, 53, 54, 55, 68],
    review_of: "Exige uma fusão da oratória argumentativa (however/having said that) com a injeção técnica do highlight 'worth noting', solidificando a escrita analítica do aluno.",
    daily_resources: {
      ted: { title: 'The beauty of data visualization', url: 'https://www.ted.com/talks/david_mccandless_the_beauty_of_data_visualization', tip: 'Observe como o palestrante chama a atenção para anomalias no gráfico com "worth noting".' },
      podcast: { title: 'ESL Podcast - Presenting Data', url: 'https://www.eslpod.com', tip: 'Treine a entonação afirmativa de "worth noting that".' },
      onelook_word: 'worth',
      anki_card: { front: 'Traduza para linguagem de e-mail C1: "Olha só, as vendas subiram" (Vale a pena notar).', back: 'It is worth noting that the sales went up.' },
      speaking_prompt: "Faça o currículo da sua vida: 'I failed math. Having said that, it is worth noting that I am great at English.'"
    }
  },
  {
    id: 74,
    level: 'C1',
    module: 7,
    moduleTitle: 'Registro Formal e Profissional',
    structure: "I'd like to draw your attention to the second paragraph.",
    translation: 'Gostaria de chamar sua atenção para o segundo parágrafo.',
    explanation: 'A diretriz suprema de foco. Enquanto "It is worth noting" ilumina uma ideia e um dado, "draw your attention to" aponta o laser físico ou literal para um documento, um slide ou uma cláusula contratual. É o domínio do controle da sala de reunião.',
    why_it_matters: 'Para conduzir reuniões com eficiência. Quando as pessoas estão dispersas no PDF de 40 páginas, você centraliza a autoridade: "Please, draw your attention to page 4".',
    pronunciation: '/aɪd laɪk tə drɔ jʊər əˈtɛnʃən tu/',
    stress_tip: 'DRAW e ATTENTION marcam o ritmo de autoridade na fala.',
    pattern: "I'd like to draw your attention to + [Objeto/Referência]",
    breakdown: [
      { piece: "I'd like to", role: 'Polidez (Gostaria de)' },
      { piece: 'draw your attention', role: 'Verbo de ação condutora (puxar/chamar sua atenção)' },
      { piece: 'to', role: 'Preposição de direção (para)' },
      { piece: 'the second paragraph', role: 'Alvo da atenção' }
    ],
    core_vocabulary: [
      { word: 'draw', translation: 'puxar/sacar/desenhar', example: 'Draw the curtains.' },
      { word: 'attention', translation: 'atenção', example: 'Pay attention to this.' },
      { word: 'paragraph', translation: 'parágrafo', example: 'Read the first paragraph.' }
    ],
    examples: {
      work: { en: "If I could draw your attention to the chart on the screen...", pt: 'Se eu puder chamar a atenção de vocês para o gráfico na tela...' },
      travel: { en: "I'd like to draw your attention to the safety procedures.", pt: 'Gostaria de chamar a atenção dos senhores para os procedimentos de segurança.' },
      study: { en: "The professor drew our attention to a critical error.", pt: 'O professor chamou nossa atenção para um erro crítico.' }
    },
    variations: [
      { form: "Point out", note: 'Um sinônimo mais simples ("Eu gostaria de apontar... / I\'d like to point out").' },
      { form: "Bring to your attention", note: 'Variante com "Trazer" (I\'d like to bring this to your attention).' }
    ],
    combinations: [
      { phrase: "It was brought to my attention that", meaning: 'Me avisaram que / Chegou ao meu conhecimento que (Clássica frase de chefe bronqueando a equipe)' }
    ],
    collocations: ["draw your attention to", "bring to my attention", "point out"],
    common_mistakes: [
      { wrong: 'I want to call your attention...', right: 'I want to DRAW your attention...', tip: 'Embora "call attention" exista, a forma imponente de conduzir o olhar alheio para um documento/fato em inglês é "DRAW attention".' },
      { wrong: 'Pay my attention on...', right: 'Draw my attention to...', tip: '"Pay attention" é o que quem ouve faz. Quem fala, "Draws" a atenção.' }
    ],
    retrieval_context: 'Você está num call com o setor financeiro e quer que eles olhem para a linha 42 da planilha de excel (spreadsheet) onde está o rombo financeiro.',
    retrieval_prompt: 'Tome o controle da tela: "Eu gostaria de chamar a sua atenção para a linha 42 (line 42)."',
    retrieval_reference: "Exemplo: 'I'd like to draw your attention to line 42.'",
    drills: [
      { instruction: 'Forme a condução formal.', input: 'Gostaria de chamar sua atenção para a tela (the screen).', answer: "I'd like to draw your attention to the screen." },
      { instruction: 'Forme o alerta clássico do chefe (bring).', input: 'Chegou ao meu conhecimento (It was brought) que vocês estão atrasados.', answer: "It was brought to my attention that you are late." },
      { instruction: 'Traduza o sinônimo rápido.', input: 'Eu gostaria de apontar (point out) um erro.', answer: "I'd like to point out an error." },
      { instruction: 'Revisão (Dia 71): Proposta e Atenção.', input: 'Gostaria de propor uma ideia, mas primeiro, gostaria de chamar sua atenção para os custos.', answer: "I'd like to propose an idea, but first, I'd like to draw your attention to the costs." },
      { instruction: 'SÍNTESE (Dia 69): Disposição e Atenção.', input: 'Eu estou disposto (willing) a assinar, mas eu gostaria de chamar sua atenção para esta cláusula (clause).', answer: "I am willing to sign, but I'd like to draw your attention to this clause." },
      { instruction: 'Revisão (Dia 58 e 73): A Má Notícia.', input: 'Temo que falhou. Vale ressaltar que (worth noting) o servidor quebrou, e eu gostaria de chamar sua atenção para os logs.', answer: "I'm afraid it failed. It is worth noting that the server broke, and I'd like to draw your attention to the logs." },
      { instruction: 'Destaque no meio do e-mail.', input: 'Eu gostaria de chamar sua atenção para a página 5.', answer: "I'd like to draw your attention to page 5." }
    ],
    connects_to: [58, 69, 71, 73],
    review_of: "Exige o trânsito entre 'propose', 'worth noting' e 'draw attention', formando o kit essencial do palestrante e líder de reuniões executivas.",
    daily_resources: {
      ted: { title: 'How to save the world (or at least yourself) from bad meetings', url: 'https://www.ted.com/talks/david_grady_how_to_save_the_world_or_at_least_yourself_from_bad_meetings', tip: 'Observe líderes tentando focar a sala.' },
      podcast: { title: 'ESL Podcast - Leading a Meeting', url: 'https://www.eslpod.com', tip: 'Treine a fluência em: aid-laik-ta-draw-yor-attention.' },
      onelook_word: 'attention',
      anki_card: { front: 'Substitua "Look at this page": Gostaria de chamar sua atenção para esta página.', back: "I'd like to draw your attention to this page." },
      speaking_prompt: "Faça o tour guiado da bagunça do seu quarto/escritório: 'I'd like to draw your attention to the clothes on the floor...'"
    }
  },
  {
    id: 75,
    level: 'C1',
    module: 7,
    moduleTitle: 'Registro Formal e Profissional',
    structure: "I'm pleased to inform you that your application was successful.",
    translation: 'Tenho o prazer de informá-lo de que a sua candidatura foi bem-sucedida.',
    explanation: 'A abertura padrão-ouro para boas notícias corporativas. O reverso do "I\'m afraid". Quando uma empresa aprova crédito, aceita um candidato ou fecha um contrato, eles raramente dizem "You passed!". Eles cravam a formalidade do "I\'m pleased to inform you".',
    why_it_matters: 'Dominar o "Pleased to inform" coloca você no banco do motorista como um emissor de boas notícias oficial. Soa incrivelmente polido e institucional (você falando em nome de uma entidade maior).',
    pronunciation: '/aɪm plizd tə ɪnˈfɔrm ju/',
    stress_tip: 'O "PLEASED" carrega a alegria controlada e o sorriso verbal da frase.',
    pattern: "I'm pleased to inform you that + [A Boa Notícia Oficial]",
    breakdown: [
      { piece: "I'm pleased to inform you", role: 'Marcador oficial de boas notícias (Tenho o prazer de informá-lo)' },
      { piece: 'that', role: 'Conexão (que)' },
      { piece: 'your application', role: 'O objeto de submissão do cliente/usuário' },
      { piece: 'was successful', role: 'O status final positivo' }
    ],
    core_vocabulary: [
      { word: 'pleased', translation: 'satisfeito / com prazer', example: 'Pleased to meet you.' },
      { word: 'inform', translation: 'informar / avisar formalmente', example: 'Keep me informed.' },
      { word: 'application', translation: 'candidatura / pedido (de vaga, visto, crédito)', example: 'Submit your application.' },
      { word: 'successful', translation: 'bem-sucedido', example: 'A successful test.' }
    ],
    examples: {
      work: { en: "I'm pleased to inform you that we got the funding.", pt: 'Tenho o prazer de informar que nós conseguimos o financiamento.' },
      travel: { en: "I am pleased to inform you that your visa has been approved.", pt: 'Tenho o prazer de informá-lo que seu visto foi aprovado.' },
      study: { en: "I'm pleased to inform you that you passed the exam.", pt: 'Tenho o prazer de informar que você passou na prova.' }
    },
    variations: [
      { form: "We are happy to announce", note: 'Versão mais animada de marketing ("Temos a alegria de anunciar").' },
      { form: "It is my pleasure to inform", note: 'Nível Rei Charles de polidez institucional ("É meu prazer informar").' }
    ],
    combinations: [
      { phrase: "I regret to inform you", note: 'O oposto trágico ("Lamento informar"). Muitas vezes é a carta de rejeição de vagas (Rejection Letter).' }
    ],
    collocations: ["pleased to inform you", "regret to inform you", "application was successful"],
    common_mistakes: [
      { wrong: 'I have the pleasure to say...', right: 'I am pleased to inform...', tip: 'Tradução do nosso "Tenho o prazer". Em inglês você não "tem" o prazer de falar, você "está" comprazido em informar (I am pleased).' },
      { wrong: 'Inform to you...', right: 'Inform you...', tip: 'Informar não precisa de "to". É direto ao objeto.' }
    ],
    retrieval_context: 'Você revisou o pull request do dev júnior que sofreu a semana inteira. Você quer dar a ele a boa notícia oficial no chat que o código está pronto para ir ao ar.',
    retrieval_prompt: 'Aja como o juiz benevolente: "Tenho o prazer de informar que o código foi aprovado (approved)."',
    retrieval_reference: "Exemplo: 'I'm pleased to inform you that the code was approved.'",
    drills: [
      { instruction: 'Forme a aprovação.', input: 'Tenho o prazer de informar que o projeto é seu.', answer: "I'm pleased to inform you that the project is yours." },
      { instruction: 'Forme a tragédia (regret).', input: 'Lamento informar que você falhou.', answer: "I regret to inform you that you failed." },
      { instruction: 'Corrija o "Tenho o prazer".', input: 'I have pleasure to inform you...', answer: "I am pleased to inform you..." },
      { instruction: 'Revisão (Dia 63 e 69): Emoções após a notícia.', input: 'Tenho o prazer de informar que nós vencemos. Estou ansioso (looking forward to) para trabalhar com vocês e disposto (willing) a ajudar.', answer: "I'm pleased to inform you that we won. I'm looking forward to working with you and willing to help." },
      { instruction: 'SÍNTESE: Una "As a Result" (Dia 48).', input: 'Você trabalhou duro e, como resultado, tenho o prazer de informar que você foi promovido (promoted).', answer: "You worked hard, and as a result, I'm pleased to inform you that you were promoted." },
      { instruction: 'Revisão (Dia 72): Sugestão amigável.', input: 'Tenho o prazer de informar que nós terminamos. Eu sugeriria (suggest) celebrar (celebrating).', answer: "I'm pleased to inform you that we finished. I would suggest celebrating." },
      { instruction: 'Traduza o sinônimo pomposo.', input: 'Temos a alegria de anunciar (happy to announce) a nova versão.', answer: "We are happy to announce the new version." }
    ],
    connects_to: [48, 63, 69, 72],
    review_of: "Exige o pareamento do tom celebrativo institucional com conectores causais de resultado e gerúndios pós-sugestão (suggest + ing).",
    daily_resources: {
      ted: { title: 'A new way to fund scientific discovery', url: 'https://www.ted.com/talks/cindy_whitehead_a_new_way_to_fund_scientific_discovery', tip: 'Preste atenção nos anúncios formais de financiamento e sucesso.' },
      podcast: { title: 'ESL Podcast - Making Official Announcements', url: 'https://www.eslpod.com', tip: 'Treine o ritmo lento e claro que uma boa notícia de alto nível exige.' },
      onelook_word: 'pleased',
      anki_card: { front: 'Como é a abertura padrão da Carta de Aceitação em vagas/vistos gringos?', back: "I'm pleased to inform you that..." },
      speaking_prompt: "Faça o discurso do CEO premiando os funcionários do mês na frente do espelho."
    }
  },
  {
    id: 76,
    level: 'C1',
    module: 7,
    moduleTitle: 'Registro Formal e Profissional',
    structure: "With regard to your email, we have decided to approve the budget.",
    translation: 'Com relação ao / A respeito do seu e-mail, nós decidimos aprovar o orçamento.',
    explanation: 'A abertura técnica inquebrável para responder e-mails ou retomar tópicos perdidos. Substitui o preguiçoso "About your email...". Coloca o assunto principal na mesa de forma cirúrgica e limpa.',
    why_it_matters: 'Profissionais de alto nível lidam com 5 tópicos num único e-mail. Para responder ponto a ponto sem bagunça, o "With regard to [X]..." atua como um separador de parágrafos imbatível.',
    pronunciation: '/wɪð rɪˈgɑrd tu/',
    stress_tip: 'O "GARD" detém a força. Soa como "with-re-GARD-tu".',
    pattern: 'With regard to + [Assunto/Referência], + [Sua Resposta/Ação]',
    breakdown: [
      { piece: 'With regard to', role: 'Marcador de referência formal (A respeito de / Com relação a)' },
      { piece: 'your email,', role: 'O objeto referenciado' },
      { piece: 'we have decided', role: 'A resposta executiva (Present Perfect de ação recém-tomada)' },
      { piece: 'to approve the budget', role: 'A resolução' }
    ],
    core_vocabulary: [
      { word: 'with regard to', translation: 'a respeito de / com relação a', example: 'With regard to the project, it is done.' },
      { word: 'regarding', translation: 'sobre / em relação a (sinônimo de uma palavra)', example: 'Regarding your question...' },
      { word: 'decide', translation: 'decidir', example: 'We decided to go.' }
    ],
    examples: {
      work: { en: "Regarding the server issue, the team is working on it.", pt: 'A respeito do problema no servidor, a equipe está trabalhando nisso.' },
      travel: { en: "With regard to your flight, there has been a delay.", pt: 'Com relação ao seu voo, houve um atraso.' },
      study: { en: "With regard to the essay, please submit it tomorrow.", pt: 'A respeito da redação, por favor, envie amanhã.' }
    },
    variations: [
      { form: "Regarding", note: 'A versão mais amada e usada no meio do mundo corporativo moderno por ser rápida e ter o mesmo nível de formalidade.' },
      { form: "In reference to", note: 'Um pouco mais datado/jurídico.' }
    ],
    combinations: [
      { phrase: "With regard to this matter", meaning: 'A respeito deste assunto (jargão clássico)' }
    ],
    collocations: ["with regard to", "regarding your email", "in reference to"],
    common_mistakes: [
      { wrong: 'With regards to...', right: 'With regard to...', tip: 'Sem "S" no final. "Regards" (no plural) é usado para mandar lembranças no fim do e-mail ("Best regards"). Na expressão "Com relação a", o regard é singular.' },
      { wrong: 'About to your email...', right: 'Regarding your email...', tip: 'Nunca coloque o "to" depois do "About" ou depois do "Regarding".' }
    ],
    retrieval_context: 'O cliente mandou um e-mail com 3 perguntas soltas. A terceira era sobre a fatura (invoice). Você começa a responder essa especificamente.',
    retrieval_prompt: 'Use o cortador formal: "Com relação à fatura, ela está paga (it is paid)."',
    retrieval_reference: "Exemplo: 'With regard to the invoice, it is paid.'",
    drills: [
      { instruction: 'Forme a referência de e-mail.', input: 'Com relação ao contrato (contract), nós assinaremos.', answer: "With regard to the contract, we will sign it." },
      { instruction: 'Use a variante de uma palavra.', input: 'A respeito do bug, está consertado.', answer: "Regarding the bug, it is fixed." },
      { instruction: 'Corrija o "S" infiltrado.', input: 'With regards to the budget...', answer: "With regard to the budget..." },
      { instruction: 'Revisão (Dia 74 e 75): O pacote da reunião.', input: 'A respeito do lucro, tenho o prazer de informar que (pleased to inform) nós vencemos. Gostaria de chamar sua atenção para (draw your attention) a tela.', answer: "With regard to the profit, I'm pleased to inform you that we won. I'd like to draw your attention to the screen." },
      { instruction: 'SÍNTESE: Junte o Idiom C1 de Oposição (Dia 51) e Reference.', input: 'A respeito do velho, ele é lento. Em contraste (In contrast), o novo é rápido.', answer: "With regard to the old one, it is slow. In contrast, the new one is fast." },
      { instruction: 'Revisão (Dia 64): A Fuga Diplomática.', input: 'Com relação a esse problema (this issue), eu preferiria não (rather not) falar sobre ele.', answer: "With regard to this issue, I'd rather not talk about it." },
      { instruction: 'Use "matter" (assunto).', input: 'A respeito desse assunto (matter), acabou que (it turns out - Dia 59) eles mentiram.', answer: "With regard to this matter, it turns out they lied." }
    ],
    connects_to: [51, 59, 64, 74, 75],
    review_of: "Exige que o aluno consiga organizar a resposta de múltiplos tópicos no e-mail usando aberturas referenciais (regarding) atreladas à comunicação de notícias boas (pleased) ou fugas (rather not).",
    daily_resources: {
      ted: { title: 'How to write a great cold email', url: 'https://www.youtube.com/watch?v=1', tip: 'Emails técnicos são impulsionados por estruturas divisórias de assuntos ("Regarding X... Regarding Y...").' },
      podcast: { title: 'ESL Podcast - Answering Enquiries', url: 'https://www.eslpod.com', tip: 'Treine escrever 3 parágrafos abrindo sempre com "Regarding [Assunto]".' },
      onelook_word: 'regard',
      anki_card: { front: 'Conserte a introdução informal de e-mail: About your email...', back: 'With regard to your email... (Ou: Regarding your email...)' },
      speaking_prompt: "Faça um debreifing do seu dia de ontem: 'Regarding my health, I did fine. Regarding my work...'"
    }
  },
  {
    id: 77,
    level: 'C1',
    module: 7,
    moduleTitle: 'Registro Formal e Profissional',
    structure: "As discussed in our meeting, we will move forward with the plan.",
    translation: 'Conforme discutido em nossa reunião, nós seguiremos em frente com o plano.',
    explanation: 'O feitiço de vinculação e registro. No mundo corporativo, se não está escrito, não existe. "As discussed" é a forma que os executivos usam para documentar no e-mail um acordo que foi feito verbalmente.',
    why_it_matters: 'Para "Cobrir as suas costas" (Cover your back / CYA). Enviar um e-mail começando com "As discussed on the phone..." força a outra pessoa a concordar que vocês fizeram um acordo, criando um rastro de auditoria educado.',
    pronunciation: '/æz dɪˈskʌst/',
    stress_tip: 'O "-CUSSED" explode com som de T no final (dis-câst).',
    pattern: 'As discussed + [onde/com quem], + [Ação Acordada]',
    breakdown: [
      { piece: 'As discussed', role: 'Marcador de referência histórica (Conforme discutido / Como falado)' },
      { piece: 'in our meeting,', role: 'Referência do local/evento do acordo verbal' },
      { piece: 'we will move forward', role: 'A ação de prosseguimento ratificada' },
      { piece: 'with the plan', role: 'Objeto' }
    ],
    core_vocabulary: [
      { word: 'as discussed', translation: 'conforme discutido', example: 'As discussed, here is the file.' },
      { word: 'move forward', translation: 'seguir em frente / avançar', example: 'Let\'s move forward.' },
      { word: 'plan', translation: 'plano', example: 'Stick to the plan.' }
    ],
    examples: {
      work: { en: "As discussed on the phone, I'm sending the new contract.", pt: 'Conforme falado ao telefone, estou enviando o novo contrato.' },
      travel: { en: "As agreed, we will pick you up at 8 AM.", pt: 'Conforme acordado, nós o buscaremos às 8 da manhã.' },
      study: { en: "As requested, here is the final essay.", pt: 'Conforme solicitado, aqui está a redação final.' }
    },
    variations: [
      { form: "As agreed", note: 'Ainda mais forte e legal (Conforme "acordado").' },
      { form: "As requested", note: 'Usado quando você está enviando um favor/trabalho que a outra pessoa pediu (Conforme solicitado).' }
    ],
    combinations: [
      { phrase: "As mentioned earlier", meaning: 'Como mencionado antes (Puxão de orelha educado quando a pessoa não leu seu último email)' }
    ],
    collocations: ["as discussed", "as agreed", "as requested", "move forward"],
    common_mistakes: [
      { wrong: 'Like we talked...', right: 'As we discussed... / As discussed...', tip: '"Like" para "Como" é muito informal (Like I said). O inglês executivo pede o "AS" (As discussed, as requested).' },
      { wrong: 'As discussed about...', right: 'As discussed, ...', tip: 'Discuss já contém o "sobre" nele. Nunca use discuss about.' }
    ],
    retrieval_context: 'Seu chefe concordou verbalmente em te dar férias em maio. Para garantir, você manda a requisição por e-mail ratificando o acordo verbal.',
    retrieval_prompt: 'Jogue a âncora histórica: "Conforme discutido (As discussed), eu tirarei (take) férias em maio".',
    retrieval_reference: "Exemplo: 'As discussed, I will take a vacation in May.'",
    drills: [
      { instruction: 'Forme a âncora de e-mail.', input: 'Conforme discutido, nós lançaremos hoje.', answer: "As discussed, we will launch today." },
      { instruction: 'Substitua pela variante de concordância.', input: 'Conforme acordado (agreed), eu pagarei a fatura.', answer: "As agreed, I will pay the invoice." },
      { instruction: 'Substitua pelo pedido (envio de arquivo).', input: 'Conforme solicitado (requested), aqui está o código.', answer: "As requested, here is the code." },
      { instruction: 'SÍNTESE DA COBRANÇA (Dia 76, 54): O E-mail do Chefe.', input: 'Com relação ao (With regard to) projeto, conforme discutido, nós estamos atrasados. Resumindo (To sum up), precisamos de ajuda.', answer: "With regard to the project, as discussed, we are late. To sum up, we need help." },
      { instruction: 'Revisão (Dia 72): Acordo e Sugestão.', input: 'Conforme discutido, eu sugeriria focar (suggest focusing) na UI.', answer: "As discussed, I would suggest focusing on the UI." },
      { instruction: 'Revisão (Dia 70): A Quebra do Acordo.', input: 'Conforme acordado, o sistema era pra ser (was supposed to be) seguro.', answer: "As agreed, the system was supposed to be secure." },
      { instruction: 'O Puxão de Orelha Educado.', input: 'Como mencionado antes (As mentioned earlier), nós não podemos nos dar ao luxo de perder (can\'t afford to lose).', answer: "As mentioned earlier, we can't afford to lose." }
    ],
    connects_to: [54, 70, 72, 76],
    review_of: "O fechamento perfeito para a trindade do 'E-mail Corporativo'. Exige amarração do 'With regard to' e o 'As discussed', conectando ao 'was supposed to' e gerúndios passados.",
    daily_resources: {
      ted: { title: '10 ways to have a better conversation', url: 'https://www.ted.com/talks/celeste_headlee_10_ways_to_have_a_better_conversation', tip: 'Observe que referências a papos anteriores mantêm a engrenagem girando.' },
      podcast: { title: 'ESL Podcast - Following Up', url: 'https://www.eslpod.com', tip: 'Treine falar "as-diss-CUST" com peso jurídico.' },
      onelook_word: 'discussed',
      anki_card: { front: 'Traduza o clássico CYA (Cover Your Ass): Conforme discutido ao telefone...', back: 'As discussed on the phone...' },
      speaking_prompt: "Faça o debrief de uma briga/DR de relacionamento como se fosse um gerente enviando um e-mail de fechamento: 'As discussed, you will wash the dishes...'"
    }
  }
]

export const BATCH_71_77_SUMMARY = {
  range: '71-77',
  theme: 'Registro Formal e C1 — Controlando a Sala de Reunião e a Caixa de E-mails',
  levels: ['C1'],
  structures: [
    "I'd like to propose — A assunção de liderança executiva (dia 71, C1)",
    'I would suggest + ING — A ordem consultiva disfarçada de conselho polido (dia 72, C1)',
    'It is worth noting — O marca-texto de dados na mesa de reunião (dia 73, C1)',
    "I'd like to draw your attention to — O controle físico/visual da atenção dos presentes (dia 74, C1)",
    "I'm pleased to inform — O papel oficial de emissor de boas notícias (dia 75, C1)",
    'With regard to / Regarding — A segmentação limpa de tópicos num e-mail complexo (dia 76, C1)',
    'As discussed / As agreed — O feitiço de CYA (Cover Your Ass) ratificando acordos verbais (dia 77, C1)'
  ],
  grammar_arcs: [
    'O Fim do Infantil. As sentenças baseadas no ego (I want, I think, Look at this) são oficialmente substituídas pelo tom institucional. O aluno se afasta do inglês de "turista" e adentra a escrita redacional do inglês C1, focando em referências, recuos táticos (suggest + ing) e direções macro (propose, draw attention).',
    'O Esqueleto do E-mail Perfeito. Agora o aluno consegue abrir (With regard to), referenciar histórico (As discussed), propor (I propose), chamar o olhar do leitor para o anexo (Draw attention) e sugerir o próximo passo (Suggesting).'
  ],
  key_contrasts_established: [
    'I want to (Direto e leigo) vs I would like to propose (Formato board de diretores)',
    'I suggest to go (Erro clássico) vs I suggest going (Regra absoluta do gerúndio C1)',
    'Pay attention here (Agressivo e comum) vs Draw your attention to (Controle de líder)',
    'About your email (Preguiçoso) vs Regarding your email (Executivo)'
  ],
  vocabulary_themes: [
    'gestão de e-mails: regarding, as discussed, agreed, requested',
    'métricas e direção: upcoming quarter, traffic doubled, draw attention, propose',
    'notícias e conselhos: suggest delaying, pleased to inform, successful application'
  ],
  connects_to_next: "Batch 12 (dias 78-84): [I would appreciate it if, Please find attached, Following up on, To clarify, I look forward to, Please let me know, On behalf of] — [O fechamento do Módulo 7 (Registro Profissional). Após dominar a abertura e condução de e-mails/reuniões, o aluno aprenderá a cobrar respostas (following up), forçar esclarecimentos amigáveis (clarify), fazer o temido 'favor exigido' (appreciate if) e encerrar o discurso corporativo atuando em nome do seu time (on behalf of)]."
}
