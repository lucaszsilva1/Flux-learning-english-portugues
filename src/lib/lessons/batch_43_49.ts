import type { Lesson } from '../types'

export const lessons: Lesson[] = [
  {
    id: 43,
    level: 'B2',
    module: 5,
    moduleTitle: 'Discourse Markers',
    structure: "The deadline is tight; however, we might still deliver the core features.",
    translation: 'O prazo está apertado; no entanto, nós talvez ainda entreguemos as funcionalidades principais.',
    explanation: 'Abre o Módulo 5 (Discourse Markers). Aqui subimos de frases curtas para parágrafos completos. "However" é a forma adulta de dizer "but". Ele quebra uma frase no meio, faz você respirar, e então introduz um contraste ponderado, quase sempre precedido por ponto-e-vírgula e seguido de vírgula.',
    why_it_matters: 'Para escrever e-mails gerenciais. Um e-mail cheio de "but... but... but" parece escrito por uma criança se justificando. Usar "however" dá tom de relatório, mostrando que você pesou os dois lados antes de escrever.',
    pronunciation: '/haʊˈɛvər/',
    stress_tip: 'O EV recebe a força maior. A pausa após o "however" (a vírgula) é mandatória na fala e na escrita.',
    pattern: '[Declaração 1] ; however, + [Declaração Contraste]',
    breakdown: [
      { piece: 'The deadline is tight;', role: 'Fato base (O prazo está apertado)' },
      { piece: 'however,', role: 'Marcador de contraste com pausa longa (no entanto/entretanto)' },
      { piece: 'we might still deliver', role: 'Ação contrastante usando modal de possibilidade (might)' },
      { piece: 'the core features', role: 'O objeto da entrega' }
    ],
    core_vocabulary: [
      { word: 'however', translation: 'no entanto / entretanto', example: 'It is raining; however, we will go.' },
      { word: 'tight', translation: 'apertado (prazo/orçamento)', example: 'The budget is tight.' },
      { word: 'deliver', translation: 'entregar (resultados/produto)', example: 'We must deliver by Friday.' },
      { word: 'core', translation: 'principal/essencial', example: 'Focus on the core features.' }
    ],
    examples: {
      work: { en: "The system is slow; however, it is very secure.", pt: 'O sistema é lento; no entanto, é muito seguro.' },
      travel: { en: "The hotel was expensive; however, the service was excellent.", pt: 'O hotel era caro; no entanto, o serviço era excelente.' },
      study: { en: "I studied all night; however, I failed the exam.", pt: 'Eu estudei a noite toda; no entanto, reprovei na prova.' }
    },
    variations: [
      { form: "But", note: 'Versão mais casual (The system is slow, but it is secure).' },
      { form: "Nevertheless", note: 'Ainda mais denso e formal que "however" (Não obstante).' }
    ],
    combinations: [
      { phrase: "; however, we should", meaning: 'Apresentar um problema e sugerir a ação em seguida' },
      { phrase: "; however, I'd rather", meaning: 'Apresentar uma opção e declarar a preferência contrária' }
    ],
    collocations: ["; however,", "tight deadline", "core features", "deliver results"],
    common_mistakes: [
      { wrong: 'It is slow, however is secure.', right: 'It is slow; however, it is secure.', tip: 'Ao contrário do "but", o "however" exige que você repita o sujeito na segunda frase (it is secure). Não o use solto sem sujeito.' },
      { wrong: 'I want to go however I can\'t.', right: 'I want to go; however, I can\'t.', tip: 'Pontuação: SEMPRE coloque um ponto ou ponto-e-vírgula ANTES do "however", e uma vírgula DEPOIS.' }
    ],
    retrieval_context: 'Você precisa avisar o cliente que o projeto estourou o prazo. Você quer amenizar a notícia, dizendo que, "no entanto", a qualidade está muito melhor que o esperado.',
    retrieval_prompt: 'Declare que o prazo (deadline) estourou (is delayed), use o marcador formal "no entanto", e diga que a qualidade (quality) está alta (is high).',
    retrieval_reference: "Exemplo: 'The project is delayed; however, the quality is very high.'",
    drills: [
      { instruction: 'Forme o contraste formal.', input: 'É caro; no entanto, nós precisamos disso.', answer: 'It is expensive; however, we need it.' },
      { instruction: 'Traduza o prazo apertado.', input: 'O prazo está apertado; entretanto, nós entregaremos.', answer: 'The deadline is tight; however, we will deliver.' },
      { instruction: 'Revisão (Dia 23): Adicione modal de incerteza.', input: 'A solução é boa; no entanto, ela pode (might) falhar.', answer: 'The solution is good; however, it might fail.' },
      { instruction: 'Revisão (Dia 32 e 33): Contraste uma condicional passada.', input: 'O erro ocorreu; no entanto, se nós tivéssemos testado, não teria acontecido.', answer: "The error occurred; however, if we had tested it, it wouldn't have happened." },
      { instruction: 'Mude de "but" para "however" prestando atenção à pontuação.', input: 'Nós lançamos, mas nós não estávamos prontos.', answer: "We launched; however, we weren't ready." },
      { instruction: 'SÍNTESE: Junte Dúvida (Dia 27), Hipótese (Dia 31) e Contraste.', input: 'Não tenho certeza (not sure). No entanto, se eu fosse você, eu não faria isso.', answer: "I'm not sure. However, if I were you, I wouldn't do it." }
    ],
    connects_to: [23, 27, 31, 32, 33],
    review_of: "Exige que o aluno consolide sentenças inteiras das aulas passadas (Modals, Conditionals) nas duas pontas de um 'However', organizando uma argumentação madura.",
    daily_resources: {
      ted: { title: 'The beauty of data visualization', url: 'https://www.ted.com/talks/david_mccandless_the_beauty_of_data_visualization', tip: 'Observe como dados contrastantes são frequentemente conectados por "however" ao longo da palestra.' },
      podcast: { title: 'ESL Podcast - Making Contrasting Statements', url: 'https://www.eslpod.com', tip: 'Preste extrema atenção na micropausa (a vírgula invisível) após a palavra "however".' },
      onelook_word: 'however',
      anki_card: { front: 'Traduza e pontue corretamente: Está chovendo (ponto e vírgula) no entanto (vírgula) nós iremos.', back: 'It is raining; however, we will go.' },
      speaking_prompt: "Faça o papel de relações públicas (PR). Crie 3 defesas com 'However': 'We made a mistake; however, we are fixing it.' (Use 'should' e 'might')."
    }
  },
  {
    id: 44,
    level: 'B2',
    module: 5,
    moduleTitle: 'Discourse Markers',
    structure: "Although we had a small budget, the campaign was a success.",
    translation: 'Embora a gente tivesse um orçamento pequeno, a campanha foi um sucesso.',
    explanation: '"Although" inicia uma cláusula de concessão. Ele avisa antecipadamente ao ouvinte: "Estou te dando um fato negativo aqui, mas a frase principal será surpreendente". É a elegância de não precisar usar "but".',
    why_it_matters: 'Enquanto "however" separa frases já concretizadas, "although" te permite encapsular a falha logo no início da frase, mostrando que você superou o obstáculo. "Although there were bugs, we deployed on time" soa heroico e planejado.',
    pronunciation: '/ɔlˈðoʊ/',
    stress_tip: 'A sílaba "THOUGH" carrega o ar alongado. Cuidado para não ler com som de "F". É o som vibrado "TH".',
    pattern: 'Although + [Fato de Concessão (Sujeito+Verbo)], [Ação Principal Surpreendente]',
    breakdown: [
      { piece: 'Although', role: 'Conector de concessão (Embora / Apesar de que)' },
      { piece: 'we had a small budget', role: 'O obstáculo / fato aceito' },
      { piece: 'the campaign was a success', role: 'O resultado que supera o obstáculo' }
    ],
    core_vocabulary: [
      { word: 'although', translation: 'embora / apesar de que', example: 'Although it was raining, we walked.' },
      { word: 'even though', translation: 'mesmo que / apesar de (ênfase factual)', example: 'Even though I am tired, I will work.' },
      { word: 'budget', translation: 'orçamento', example: 'We have no budget.' },
      { word: 'success', translation: 'sucesso', example: 'It was a huge success.' }
    ],
    examples: {
      work: { en: "Although he is young, he is a great leader.", pt: 'Embora ele seja jovem, é um ótimo líder.' },
      travel: { en: "Although we left late, we caught the train.", pt: 'Embora tenhamos saído tarde, pegamos o trem.' },
      study: { en: "Although the test was hard, most students passed.", pt: 'Embora a prova estivesse difícil, a maioria dos alunos passou.' }
    },
    variations: [
      { form: "Though", note: 'Versão ligeiramente mais informal, muito usada no final da frase ("It was a success, though").' },
      { form: "Even though", note: 'Dá um tom mais dramático ao obstáculo (Mesmo que o orçamento fosse minúsculo...).' }
    ],
    combinations: [
      { phrase: "Although I agree, I think", meaning: 'Concordar parcialmente antes de contra-argumentar' },
      { phrase: "Although it might seem", meaning: 'Quebrar uma falsa percepção ("Embora possa parecer...")' }
    ],
    collocations: ["although I", "although we had", "even though"],
    common_mistakes: [
      { wrong: 'Although it rained, but we went.', right: 'Although it rained, we went.', tip: 'ERRO CLÁSSICO B1: Usar "although" no início e "but" no meio. Se você usa "although", a vírgula já faz o trabalho de transição. Jamais coloque o "but".' },
      { wrong: 'Although of the budget...', right: 'Although we had a small budget...', tip: '"Although" EXIGE sujeito e verbo logo em seguida. Para usar apenas um substantivo, você precisa de "Despite" (lição de amanhã).' }
    ],
    retrieval_context: 'O código estava confuso, mas sua equipe conseguiu terminar no prazo. Seu chefe diz que foi um caos, e você corrige a percepção argumentando a superação.',
    retrieval_prompt: 'Declare o sucesso: diga que "embora" o código fosse confuso (messy), vocês cumpriram o prazo (met the deadline).',
    retrieval_reference: "Exemplo: 'Although the code was messy, we met the deadline.'",
    drills: [
      { instruction: 'Traduza o conector inicial.', input: 'Embora nós fôssemos lentos, nós vencemos.', answer: 'Although we were slow, we won.' },
      { instruction: 'Forme com a variante dramática.', input: 'Mesmo que (even though) ele estivesse doente, ele trabalhou.', answer: 'Even though he was sick, he worked.' },
      { instruction: 'Corrija o erro do "but".', input: 'Embora eu concorde, mas eu preferiria não.', answer: "Although I agree, I'd rather not." },
      { instruction: 'Revisão (Dia 38): Contraste Even If (Condição Irreal) vs Even Though (Fato Real).', input: 'Mesmo se (Even if) estivesse chovendo, eu iria. Mesmo que (Even though) ESTEJA chovendo (agora), eu irei.', answer: 'Even if it were raining, I would go. Even though it is raining, I will go.' },
      { instruction: 'SÍNTESE: Junte Embora com Modal de Polidez (Dia 25).', input: 'Embora seja caro, eu gostaria de comprá-lo.', answer: "Although it is expensive, I'd like to buy it." },
      { instruction: 'Revisão (Dia 28): Adicione dependência.', input: 'Embora dependa do chefe, eu acho que nós deveríamos (should).', answer: 'Although it depends on the boss, I think we should.' }
    ],
    connects_to: [25, 28, 38],
    review_of: "Exige o desapego absoluto do 'but', além do contraste conceitual fino com 'even if' (irrealidade) x 'even though/although' (realidade).",
    daily_resources: {
      ted: { title: 'The surprising habits of original thinkers', url: 'https://www.ted.com/talks/adam_grant_the_surprising_habits_of_original_thinkers', tip: 'Observe quantas vezes "although" puxa concessões sobre grandes ideias antes do "plot twist" final.' },
      podcast: { title: 'ESL Podcast - Arguing a Point', url: 'https://www.eslpod.com', tip: 'Escute a entonação de subida na oração do Although, e a descida na oração principal.' },
      onelook_word: 'although',
      anki_card: { front: 'Traduza o erro clássico corrigindo-o: Although I studied, but I failed.', back: 'Although I studied, I failed.' },
      speaking_prompt: "Faça o advogado de defesa do seu dia de hoje: 'Although I woke up late, I... Although the task was hard, we...'"
    }
  },
  {
    id: 45,
    level: 'B2',
    module: 5,
    moduleTitle: 'Discourse Markers',
    structure: "Despite the bad weather, we deployed the system without issues.",
    translation: 'Apesar do mau tempo, nós lançamos o sistema sem problemas.',
    explanation: 'Irmão do "Although", mas com sintaxe totalmente diferente. "Despite" (Apesar de) não aceita uma frase completa (Sujeito + Verbo) logo após ele. Ele só aceita um SUBSTANTIVO ou um verbo em -ING. Transforma sentenças inteiras em blocos sintéticos.',
    why_it_matters: 'Para escrever resumos executivos curtos. "Although the budget was small..." vira "Despite the small budget...". Essa economia de palavras é a marca de um escritor corporativo avançado.',
    pronunciation: '/dɪˈspaɪt/',
    stress_tip: 'A ênfase é na segunda sílaba "-SPITE".',
    pattern: 'Despite + [Substantivo ou Verbo-ING], [Ação Principal]',
    breakdown: [
      { piece: 'Despite', role: 'Conector (Apesar de)' },
      { piece: 'the bad weather', role: 'O substantivo que atua como obstáculo' },
      { piece: 'we deployed the system', role: 'Ação principal superando o obstáculo' },
      { piece: 'without issues', role: 'Advérbio de modo' }
    ],
    core_vocabulary: [
      { word: 'despite', translation: 'apesar de', example: 'Despite the cost, we bought it.' },
      { word: 'in spite of', translation: 'apesar de (sinônimo exato)', example: 'In spite of the rain, we played.' },
      { word: 'issue', translation: 'problema/dificuldade', example: 'We had some issues.' },
      { word: 'weather', translation: 'tempo (clima)', example: 'The weather is terrible.' }
    ],
    examples: {
      work: { en: "Despite being tired, she finished the report.", pt: 'Apesar de estar cansada, ela terminou o relatório.' },
      travel: { en: "Despite the traffic, we arrived on time.", pt: 'Apesar do trânsito, chegamos na hora.' },
      study: { en: "Despite the difficulty, the course is great.", pt: 'Apesar da dificuldade, o curso é ótimo.' }
    },
    variations: [
      { form: "In spite of", note: 'Faz a exata mesma coisa que Despite. Mas são três palavras. Apenas não misture os dois (não diga "Despite of").' },
      { form: "Despite the fact that...", note: 'Um truque. Se você colocar "the fact that", pode usar Sujeito+Verbo (Despite the fact that it was raining).' }
    ],
    combinations: [
      { phrase: "Despite having", meaning: 'Apesar de ter' },
      { phrase: "Despite being", meaning: 'Apesar de ser/estar' },
      { phrase: "Despite the lack of", meaning: 'Apesar da falta de (muito comum em gestão)' }
    ],
    collocations: ["despite the fact that", "in spite of", "despite being"],
    common_mistakes: [
      { wrong: 'Despite of the rain...', right: 'Despite the rain... (ou In spite of the rain)', tip: 'O erro mais comum de todos: o verbo "Despite" engole a preposição. NUNCA use "of" depois dele.' },
      { wrong: 'Despite it was raining...', right: 'Despite the rain... (ou Although it was raining)', tip: 'Não coloque oração inteira (sujeito+verbo) pós despite. Converta para substantivo.' },
      { wrong: 'Despite to have money...', right: 'Despite having money...', tip: 'Se for colocar um verbo após despite, ele PRECISA obrigatoriamente estar no gerúndio (-ING).' }
    ],
    retrieval_context: 'O servidor sofreu ataques a noite inteira, mas a segurança aguentou. O CTO pede um resumo do status de estabilidade.',
    retrieval_prompt: 'Formule o resumo usando "Apesar dos ataques" seguido por um "must" (Dia 24) para deduzir que a segurança é boa.',
    retrieval_reference: "Exemplo: 'Despite the attacks, the security must be good.'",
    drills: [
      { instruction: 'Forme com substantivo.', input: 'Apesar do atraso, nós lançamos.', answer: 'Despite the delay, we launched.' },
      { instruction: 'Forme com verbo (-ING).', input: 'Apesar de saber (knowing) a verdade, ele mentiu.', answer: 'Despite knowing the truth, he lied.' },
      { instruction: 'Corrija a mistureba de preposições.', input: 'Despite of the bugs...', answer: 'Despite the bugs...' },
      { instruction: 'SÍNTESE: Junte Despite com "As long as" (Dia 30).', input: 'Apesar do risco, nós podemos prosseguir contanto que testemos.', answer: 'Despite the risk, we can proceed as long as we test it.' },
      { instruction: 'Revisão (Dia 26 e Dia 44): Contraste Although e Despite e I\'d rather.', input: 'Embora (Although) seja mais barato, eu preferiria usar o outro. Apesar (Despite) do preço, eu preferiria usar o outro.', answer: "Although it is cheaper, I'd rather use the other one. Despite the price, I'd rather use the other one." },
      { instruction: 'Traduza usando In Spite Of.', input: 'Apesar da falta de dados (lack of data).', answer: 'In spite of the lack of data.' }
    ],
    connects_to: [24, 26, 30, 44],
    review_of: "Análise profunda da gramática B2: o aluno deve transitar fluidamente entre a sintaxe complexa de 'Although + sentence' e a síntese imediata do 'Despite + noun', ancorando no terreno dos Modals.",
    daily_resources: {
      ted: { title: 'Grit: The power of passion and perseverance', url: 'https://www.ted.com/talks/angela_lee_duckworth_grit_the_power_of_passion_and_perseverance', tip: 'Perceba que "despite" marca o ponto exato da resiliência antes da vitória.' },
      podcast: { title: 'ESL Podcast - Reporting Difficulties', url: 'https://www.eslpod.com', tip: 'Treine a audição do -ING obrigatório que sucede o Despite com verbos.' },
      onelook_word: 'despite',
      anki_card: { front: 'Conserte a frase: Despite of it was hard, we did it.', back: 'Despite the difficulty, we did it. (Ou: Although it was hard, we did it).' },
      speaking_prompt: "Conte a história de uma superação usando verbos em ING. 'Despite having no money, I... Despite being afraid, I...'"
    }
  },
  {
    id: 46,
    level: 'B2',
    module: 5,
    moduleTitle: 'Discourse Markers',
    structure: "React is fast; on the other hand, it has a steep learning curve.",
    translation: 'React é rápido; por outro lado, ele tem uma curva de aprendizado íngreme.',
    explanation: '"On the other hand" é o marcador visual e equilibrador. Diferente do "however" (que apenas contraria), ele exige que a discussão tenha duas faces claras (os "dois lados da moeda"). Ele não anula o argumento anterior, apenas mostra o custo ou contraponto.',
    why_it_matters: 'Para arquitetura de soluções e análises de custo/benefício (Trade-offs). Líderes raramente lidam com escolhas certas ou erradas absolutas. Saber pesar prós e contras usando "on the one hand... on the other hand" mostra visão holística.',
    pronunciation: '/ɑn ði ˈʌðər hænd/',
    stress_tip: 'A ênfase é no "OTHER". É muito comum o locutor gesticular e pesar a mão contrária ao falar isso.',
    pattern: '[Ponto Positivo/Negativo] ; on the other hand, + [Contraponto oposto]',
    breakdown: [
      { piece: 'React is fast;', role: 'Vantagem, a primeira face da moeda' },
      { piece: 'on the other hand,', role: 'Transição equilibradora (por outro lado)' },
      { piece: 'it has a steep learning curve', role: 'Desvantagem, a segunda face da moeda' }
    ],
    core_vocabulary: [
      { word: 'on the other hand', translation: 'por outro lado', example: 'It is cheap; on the other hand, it is fragile.' },
      { word: 'steep', translation: 'íngreme / muito alto', example: 'The price is too steep.' },
      { word: 'learning curve', translation: 'curva de aprendizado', example: 'It has a steep learning curve.' },
      { word: 'fast', translation: 'rápido', example: 'This framework is extremely fast.' }
    ],
    examples: {
      work: { en: "Working remote is great; on the other hand, communication is harder.", pt: 'Trabalhar remoto é ótimo; por outro lado, a comunicação é mais difícil.' },
      travel: { en: "The flight is cheap; on the other hand, it departs at 3 AM.", pt: 'O voo é barato; por outro lado, ele parte às 3 da manhã.' },
      study: { en: "The course is short; on the other hand, it lacks depth.", pt: 'O curso é curto; por outro lado, falta profundidade.' }
    },
    variations: [
      { form: "On the one hand... on the other hand", note: 'A estrutura completa ("Por um lado X... por outro lado Y").' },
      { form: "Alternatively", note: 'Mais formal, quando o outro lado é uma escolha diferente de caminho ("Alternativamente...").' }
    ],
    combinations: [
      { phrase: "on the other hand, we might", meaning: 'Pesar um risco' },
      { phrase: "on the other hand, I'd rather", meaning: 'Expor a preferência após o benefício inicial' }
    ],
    collocations: ["on the one hand", "on the other hand"],
    common_mistakes: [
      { wrong: 'In the other hand...', right: 'On the other hand...', tip: 'A preposição correta de mãos (como em mesas e moedas) em inglês é "on", nunca "in".' },
      { wrong: 'React is fast on the other side...', right: 'React is fast; on the other hand...', tip: 'Não traduza "lado" para "side" nesta expressão idiomática fixa.' }
    ],
    retrieval_context: 'Um cliente está animado porque achou um servidor super barato, mas o suporte deles é horrível. Você precisa jogar o balde de água fria do balanço (Trade-off).',
    retrieval_prompt: 'Diga que é barato, mas "por outro lado" não há suporte.',
    retrieval_reference: "Exemplo: 'It is cheap; on the other hand, there is no support.'",
    drills: [
      { instruction: 'Forme a transição de prós e contras.', input: 'É bom; por outro lado, é caro.', answer: 'It is good; on the other hand, it is expensive.' },
      { instruction: 'Corrija a preposição de tradução.', input: 'In the other hand, it works.', answer: 'On the other hand, it works.' },
      { instruction: 'Revisão (Dia 26): Misture o contraponto com preferência.', input: 'É mais rápido; por outro lado, eu preferiria não arriscar.', answer: "It is faster; on the other hand, I'd rather not risk it." },
      { instruction: 'SÍNTESE: Una "That\'s why" (Dia 29) e "On the other hand".', input: 'Faltam funcionalidades, e é por isso que é barato. Por outro lado, o sistema é estável.', answer: "It lacks features, and that's why it is cheap. On the other hand, the system is stable." },
      { instruction: 'Monte a balança completa.', input: 'Por um lado (on the one hand) é fácil. Por outro lado, é lento.', answer: 'On the one hand, it is easy. On the other hand, it is slow.' },
      { instruction: 'Revisão (Dia 42): Contraste uma ameaça técnica (otherwise).', input: 'Ele nos ajuda agora; por outro lado, nós devemos documentar tudo, senão nós esqueceremos.', answer: 'It helps us now; on the other hand, we must document everything, otherwise we will forget.' }
    ],
    connects_to: [26, 29, 42],
    review_of: "Exige o emparelhamento com Modais avançados, transformando uma frase simples de contraponto numa esteira de trade-off complexa unindo 'That's why' (causa) e 'otherwise' (fuga).",
    daily_resources: {
      ted: { title: 'The paradox of choice', url: 'https://www.ted.com/talks/barry_schwartz_the_paradox_of_choice', tip: 'Observe como o locutor balanceia opções impossíveis constantemente.' },
      podcast: { title: 'ESL Podcast - Making Comparisons', url: 'https://www.eslpod.com', tip: 'Sinta o balanço rítmico entre as duas mãos ("on the one hand...").' },
      onelook_word: 'hand',
      anki_card: { front: 'Nunca diga "In the other side". Qual a forma correta?', back: 'On the other hand.' },
      speaking_prompt: "Faça uma avaliação sincera do seu próprio inglês hoje: 'On the one hand, I understand a lot. On the other hand, I still struggle with...'"
    }
  },
  {
    id: 47,
    level: 'B2',
    module: 5,
    moduleTitle: 'Discourse Markers',
    structure: "The software is slow. In addition, it lacks essential features.",
    translation: 'O software é lento. Além disso, faltam a ele funcionalidades essenciais.',
    explanation: '"In addition" marca a transição de soma e de escalada de argumentos. Ele pega o seu primeiro ponto e joga uma pá de cal em cima do outro lado da negociação, somando fatores negativos ou vantagens exponenciais. É o "and" de terno e gravata.',
    why_it_matters: 'Para montar listas de justificativas em defesas de projeto ou avaliações de fornecedores. "It is bad, AND it is expensive" soa como fala solta. "The system is unstable. In addition, the licensing costs are too high" soa como um dossiê corporativo inquestionável.',
    pronunciation: '/ɪn əˈdɪʃən/',
    stress_tip: 'O foco vai para "-DI-".',
    pattern: '[Argumento 1] . In addition, + [Argumento 2 da mesma natureza]',
    breakdown: [
      { piece: 'The software is slow.', role: 'O fato inicial' },
      { piece: 'In addition,', role: 'Marcador de soma corporativa (Além disso)' },
      { piece: 'it lacks', role: 'O segundo fato ativando o verbo da ausência' },
      { piece: 'essential features', role: 'Complemento do fato negativo somado' }
    ],
    core_vocabulary: [
      { word: 'in addition', translation: 'além disso', example: 'We have no money. In addition, we have no time.' },
      { word: 'lack', translation: 'faltar (ser desprovido de algo)', example: 'The team lacks experience.' },
      { word: 'essential', translation: 'essencial', example: 'These are essential steps.' },
      { word: 'moreover', translation: 'além do mais (sinônimo avançado)', example: 'It is cheap; moreover, it is good.' }
    ],
    examples: {
      work: { en: "He is a great coder. In addition, he communicates very well.", pt: 'Ele é um ótimo programador. Além disso, ele se comunica muito bem.' },
      travel: { en: "The museum is closed. In addition, it is raining heavily.", pt: 'O museu está fechado. Além disso, está chovendo forte.' },
      study: { en: "The course is expensive. In addition, it is too theoretical.", pt: 'O curso é caro. Além disso, é muito teórico.' }
    },
    variations: [
      { form: "Moreover", note: 'Ainda mais formal. Sinaliza um argumento bônus ("Além do mais...").' },
      { form: "Furthermore", note: 'Exclusivamente focado na escrita burocrática, não o use na fala comum.' },
      { form: "What's more", note: 'Versão mais falada/conversacional ("E tem mais...").' }
    ],
    combinations: [
      { phrase: "In addition to [noun]", meaning: 'Além de [algo] (Ex: In addition to the budget, we need time)' }
    ],
    collocations: ["in addition,", "in addition to", "lack experience", "lack features"],
    common_mistakes: [
      { wrong: 'Beside of this...', right: 'Besides this... / In addition...', tip: 'Tradução do português "ao lado disso". A expressão correta para somar argumentos é "Besides" (sem o of) ou "In addition".' },
      { wrong: 'It lacks of features.', right: 'It lacks features.', tip: 'O verbo "lack" não aceita preposição em inglês. É direto (lack money, lack time).' }
    ],
    retrieval_context: 'Você está recomendando não contratar um candidato específico porque ele não passou no teste técnico. E você lembra que ele também se atrasou para a entrevista.',
    retrieval_prompt: 'Junte os motivos: fale que ele falhou (failed) no teste. Depois adicione o "além disso" e fale que ele chegou atrasado.',
    retrieval_reference: "Exemplo: 'He failed the test. In addition, he arrived late.'",
    drills: [
      { instruction: 'Some duas forças.', input: 'É seguro. Além disso, é rápido.', answer: 'It is secure. In addition, it is fast.' },
      { instruction: 'Traduza o verbo "faltar".', input: 'Falta memória ao sistema.', answer: 'The system lacks memory.' },
      { instruction: 'Revisão (Dia 24): Dedução baseada em múltiplas causas.', input: 'O site está fora do ar. Além disso, nós perdemos dados. Deve haver (must be) um hacker.', answer: 'The site is down. In addition, we lost data. There must be a hacker.' },
      { instruction: 'Revisão (Dia 34): Adicione bloqueio logístico.', input: 'A API quebrou. Além disso, nós não podemos consertar a menos que (unless) eles respondam.', answer: "The API broke. In addition, we can't fix it unless they reply." },
      { instruction: 'SÍNTESE: Contraste (Dia 43) e Soma.', input: 'O prazo é curto; no entanto, nós testaremos. Além disso, nós documentaremos.', answer: 'The deadline is short; however, we will test it. In addition, we will document it.' },
      { instruction: 'Use a variante conversacional (E tem mais...).', input: 'Ele é brilhante, e tem mais, ele é barato.', answer: "He is brilliant, and what's more, he is cheap." }
    ],
    connects_to: [24, 34, 43],
    review_of: "Exige que o aluno consiga não só contrastar (however, dia 43), mas empilhar fatos para formar uma massa crítica que gera deduções inegáveis (must be, dia 24).",
    daily_resources: {
      ted: { title: 'The case for a 4-day work week', url: 'https://www.ted.com/talks/juliet_schor_the_case_for_a_4_day_work_week', tip: 'Observe a escalada de argumentos benéficos com marcadores de soma.' },
      podcast: { title: 'ESL Podcast - Adding Information', url: 'https://www.eslpod.com', tip: 'Note as pausas marcadas e o peso do "moreover" na oratória.' },
      onelook_word: 'addition',
      anki_card: { front: 'Conserte a preposição: The project lacks of budget.', back: 'The project lacks budget. (Direto, sem of).' },
      speaking_prompt: "Faça uma reclamação dupla ao SAC (suporte). 'The product is broken. In addition, ... What's more, ...'"
    }
  },
  {
    id: 48,
    level: 'B2',
    module: 5,
    moduleTitle: 'Discourse Markers',
    structure: "The server crashed, and as a result, we lost the data.",
    translation: 'O servidor caiu e, como resultado, nós perdemos os dados.',
    explanation: 'Substituto B2/C1 para o onipresente "so" ou "that\'s why". "As a result" foca diretamente no efeito de um processo que muitas vezes envolve causa encadeada ou impessoalidade. Dá um tom investigativo e fatual (usado fortemente em incidentes e tickets técnicos).',
    why_it_matters: 'Para os famosos Relatórios de Incidentes (RCA). O corporativo não gosta de dedos apontando culpas, mas de processos causais claros. "The system failed, so we lost money" soa leigo. "The system failed, and as a result, data was lost" soa como engenharia pericial.',
    pronunciation: '/æz ə rɪˈzʌlt/',
    stress_tip: 'O grupo "as-a" é dito muito rápido, a força recai integralmente na sílaba "ZULT".',
    pattern: '[Causa] + (,) and as a result, + [Efeito Fatal/Consequência]',
    breakdown: [
      { piece: 'The server crashed,', role: 'O evento iniciador' },
      { piece: 'and as a result,', role: 'Marcador de transição causal encadeada' },
      { piece: 'we lost the data', role: 'A consequência inevitável resultante' }
    ],
    core_vocabulary: [
      { word: 'as a result', translation: 'como resultado / consequentemente', example: 'It rained, and as a result, we stayed.' },
      { word: 'consequently', translation: 'consequentemente', example: 'The budget was cut; consequently, we paused.' },
      { word: 'result in', translation: 'resultar em (algo)', example: 'This will result in an error.' },
      { word: 'due to', translation: 'devido a (algo)', example: 'We failed due to bad planning.' }
    ],
    examples: {
      work: { en: "He missed the flight, and as a result, he missed the conference.", pt: 'Ele perdeu o voo e, como resultado, perdeu a conferência.' },
      travel: { en: "The weather was terrible, and as a result, all tours were canceled.", pt: 'O tempo estava péssimo e, como resultado, todos os passeios foram cancelados.' },
      study: { en: "She practiced every day, and as a result, her English improved drastically.", pt: 'Ela praticou todos os dias e, como resultado, seu inglês melhorou drasticamente.' }
    },
    variations: [
      { form: "As a consequence", note: 'Carrega um tom um pouco mais pesado/negativo (Como consequência disso...).' },
      { form: "Consequently", note: 'Versão de uma única palavra, comum no início de sentenças em e-mails formais.' }
    ],
    combinations: [
      { phrase: "As a result of", note: 'Usado quando acompanhado por um substantivo final (As a result of the bug...)' },
      { phrase: "This will result in", note: 'Projeção futura de um problema.' }
    ],
    collocations: ["as a result,", "and as a result,", "as a result of"],
    common_mistakes: [
      { wrong: 'The server crashed, as result we lost.', right: 'The server crashed, and as a result, we lost.', tip: 'Não esqueça os conectivos e o artigo: "AND as A result" é o pacote completo, ou inicie uma nova frase: ". As a result, we..."' },
      { wrong: 'Resulted in lose the data.', right: 'Resulted in losing the data.', tip: 'Após preposições como "in", qualquer verbo PRECISA terminar em -ING em inglês.' }
    ],
    retrieval_context: 'Um membro novo da equipe configurou o banco de errado (wrong configuration). Como resultado, o site está lento (slow). O CEO pergunta o motivo da lentidão.',
    retrieval_prompt: 'Explique que houve uma configuração errada, e como resultado, o site está lento.',
    retrieval_reference: "Exemplo: 'There was a wrong configuration, and as a result, the site is slow.'",
    drills: [
      { instruction: 'Forme o processo causal.', input: 'Ele não estudou e, como resultado, ele falhou.', answer: 'He did not study, and as a result, he failed.' },
      { instruction: 'Substitua pela versão de uma palavra.', input: 'Nós lançamos cedo; consequentemente, teve bugs.', answer: 'We launched early; consequently, there were bugs.' },
      { instruction: 'Revisão (Dia 33): Una 3ª Condicional e RCA.', input: 'Ele não testou, e como resultado, o app caiu. Se ele tivesse testado, o app não teria caído.', answer: "He didn't test it, and as a result, the app crashed. If he had tested it, the app wouldn't have crashed." },
      { instruction: 'Revisão (Dia 29): Contraste Result e Reason.', input: 'Nós perdemos dados, e é por isso que (that\'s why) eu estou furioso.', answer: "We lost data, and that's why I am furious." },
      { instruction: 'SÍNTESE: Junte In addition (Dia 47) e As a result.', input: 'Nós estamos atrasados. Além disso, falta dinheiro. Como resultado, o projeto vai ser cancelado.', answer: 'We are late. In addition, we lack money. As a result, the project will be canceled.' },
      { instruction: 'Traduza o "Result in" seguido de ING.', input: 'Atrasos resultarão em perder clientes.', answer: 'Delays will result in losing clients.' }
    ],
    connects_to: [29, 33, 47],
    review_of: "Exige uma diferenciação estrita: 'That's why' liga fatos casuais, 'As a result' liga laudos sistêmicos, e o uso irreal (would have, dia 33) joga o fato para a imaginação post-mortem.",
    daily_resources: {
      ted: { title: 'How algorithms shape our world', url: 'https://www.ted.com/talks/kevin_slavin_how_algorithms_shape_our_world', tip: 'Identifique os encadeamentos causais de processos lógicos invisíveis.' },
      podcast: { title: 'ESL Podcast - Reporting Cause and Effect', url: 'https://www.eslpod.com', tip: 'Treine a fluência sem solavancos do bloco fonético "and-as-a-result".' },
      onelook_word: 'result',
      anki_card: { front: 'Traduza: O erro resultará em perder o cliente.', back: 'The error will result in losing the client. (in + ING).' },
      speaking_prompt: "Faça o relatório de causas de algo chato no seu dia: 'I woke up late, and as a result... The traffic was bad, consequently...'"
    }
  },
  {
    id: 49,
    level: 'B2',
    module: 5,
    moduleTitle: 'Discourse Markers',
    structure: "The tests failed; therefore, we cannot deploy the code.",
    translation: 'Os testes falharam; portanto, nós não podemos fazer o deploy do código.',
    explanation: 'É a Conclusão Lógica Suprema. "Therefore" (portanto/logo) marca o momento final de uma avaliação corporativa, dedução matemática ou argumentação madura. Apresenta-se o fato irrevogável e, na sequência de "therefore", a decisão final irrecorrível.',
    why_it_matters: 'Numa thread de Slack caótica ou e-mail confuso, "therefore" age como uma âncora. Quando os diretores veem essa palavra, eles sabem que a equipe esgotou os testes (If/Unless/As long as) e agora chegou a um veredito.',
    pronunciation: '/ˈðɛrˌfɔr/',
    stress_tip: 'O stress no "-THERE-" dita um tom professoral/jurídico.',
    pattern: '[Evidência ou Fato Acumulado] ; therefore, + [Veredito Final ou Regra Imposta]',
    breakdown: [
      { piece: 'The tests failed;', role: 'A premissa/evidência final inegável' },
      { piece: 'therefore,', role: 'Marcador lógico de conclusão de raciocínio (portanto)' },
      { piece: 'we cannot deploy the code', role: 'O veredito técnico / consequência lógica bloqueadora' }
    ],
    core_vocabulary: [
      { word: 'therefore', translation: 'portanto / logo', example: 'I think, therefore I am.' },
      { word: 'thus', translation: 'assim sendo / desse modo (muito formal)', example: 'He resigned; thus, we need a replacement.' },
      { word: 'fail', translation: 'falhar/reprovar', example: 'The tests failed.' },
      { word: 'cannot (can\'t)', translation: 'não pode (impossibilidade absoluta)', example: 'We cannot allow this.' }
    ],
    examples: {
      work: { en: "We exceeded the budget; therefore, all new hires are frozen.", pt: 'Excedemos o orçamento; portanto, todas as novas contratações estão congeladas.' },
      travel: { en: "The storm is getting worse; therefore, all flights are grounded.", pt: 'A tempestade está piorando; portanto, todos os voos estão retidos.' },
      study: { en: "You missed three assignments; therefore, your grade is low.", pt: 'Você perdeu três trabalhos; portanto, sua nota está baixa.' }
    },
    variations: [
      { form: "Hence", note: 'Ainda mais acadêmico ou focado no "daí" a origem do problema ("O código é velho; hence the bugs").' },
      { form: "For this reason", note: 'Expande o "therefore" em uma explicação ("Por esta razão...").' }
    ],
    combinations: [
      { phrase: "; therefore, we must", meaning: 'Dedução gerando obrigação (Portanto, nós devemos)' },
      { phrase: "; therefore, it depends on", meaning: 'Conclusão repassando a bola para uma condicional' }
    ],
    collocations: ["; therefore,", "for this reason", "fail the test"],
    common_mistakes: [
      { wrong: 'The tests failed, therefore we cannot...', right: 'The tests failed; therefore, we cannot...', tip: 'Na escrita formal corporativa, "therefore" sempre encabeça o segundo pensamento. Precisa de um ponto e vírgula antes e vírgula depois.' },
      { wrong: 'Because of therefore...', right: 'Therefore...', tip: 'Não misture causa com conclusão ("Because of" é para a causa originária, "Therefore" marca o desfecho lógico isolado).' }
    ],
    retrieval_context: 'A auditoria encontrou uma falha de segurança gravíssima (critical flaw). Com base nisso, você declara para a diretoria que não é possível aprovar a versão (approve the release).',
    retrieval_prompt: 'Junte o fato com o "portanto" lógico para proferir o bloqueio.',
    retrieval_reference: "Exemplo: 'There is a critical flaw; therefore, we cannot approve the release.'",
    drills: [
      { instruction: 'Dê o veredito lógico.', input: 'É arriscado; portanto, nós devemos esperar.', answer: 'It is risky; therefore, we must wait.' },
      { instruction: 'Revisão (Dia 34): Conclua com a exceção final.', input: 'O sistema caiu; portanto, nós não podemos fazer o deploy a menos que (unless) nós o consertemos.', answer: "The system crashed; therefore, we can't deploy unless we fix it." },
      { instruction: 'Revisão (Dia 35): Conclua com um contrato formal.', input: 'O risco é alto; portanto, nós prosseguiremos desde que (provided that) vocês assinem.', answer: 'The risk is high; therefore, we will proceed provided that you sign.' },
      { instruction: 'SÍNTESE DO MÓDULO 5: Contrastar, Somar e Concluir (Dias 43, 47, 49).', input: 'O código é velho. No entanto (However), funciona. Além disso (In addition), é barato; portanto, nós o manteremos.', answer: 'The code is old. However, it works. In addition, it is cheap; therefore, we will keep it.' },
      { instruction: 'SÍNTESE DOS MÓDULOS 4 E 5: Hipótese Inútil (Dia 38) vs Conclusão (Dia 49).', input: 'Mesmo se nós tentarmos, nós falharemos; portanto, eu preferiria não fazer isso (I\'d rather).', answer: "Even if we try, we will fail; therefore, I'd rather not do it." },
      { instruction: 'Use a variante Thus.', input: 'Nós perdemos dinheiro; assim sendo, o projeto acabou.', answer: 'We lost money; thus, the project is over.' }
    ],
    connects_to: [34, 35, 38, 43, 47],
    review_of: "Neste último drill, o aluno constrói seu primeiro parágrafo complexo completo: avaliando uma premissa real, contrastando (however), somando bônus (in addition) e emitindo um veredito limitante lógico (therefore + I'd rather). Isso crava o domínio de ponta a ponta do B2 escrito.",
    daily_resources: {
      ted: { title: 'Math is the hidden secret to understanding the world', url: 'https://www.ted.com/talks/roger_antonsen_math_is_the_hidden_secret_to_understanding_the_world', tip: 'Note como dedutores matemáticos constroem a premissa de um TED cravando sentenças com "therefore".' },
      podcast: { title: 'ESL Podcast - Making Logical Conclusions', url: 'https://www.eslpod.com', tip: 'Treine a respiração correta na pontuação: Fato [PAUSA], therefore, [CONSEQUÊNCIA].' },
      onelook_word: 'therefore',
      anki_card: { front: 'Traduza o veredito corporativo: Eu penso, logo (portanto) existo.', back: 'I think; therefore, I am.' },
      speaking_prompt: "Faça o juiz da sua própria vida e dê três vereditos com Therefore: 'I am tired; therefore, I will... I need money; therefore, I must...'"
    }
  }
]

export const BATCH_43_49_SUMMARY = {
  range: '43-49',
  theme: 'Discourse Markers — Da Argumentação à Conclusão (B2)',
  levels: ['B2'],
  structures: [
    'however — O contraste ponderado corporativo (dia 43, B2)',
    'although — Concessão fluida e superação de falhas (dia 44, B2)',
    'despite — Concessão enxuta via substantivo/gerúndio (dia 45, B2)',
    'on the other hand — Equilíbrio diplomático de trade-offs (dia 46, B2)',
    'in addition — Escalada de argumentação por soma (dia 47, B2)',
    'as a result — Relatórios causais e impessoalidade (dia 48, B2)',
    'therefore — O veredito técnico irrevogável (dia 49, B2)'
  ],
  grammar_arcs: [
    'Dias 43-46: Os Quatro Cavaleiros do Contraste. O aluno abandonou os simples "but". Aprendeu a quebrar frases ao meio (However), antecipar problemas heroicamente (Although), focar no substantivo (Despite) e pesar pros e contras mantendo empatia (On the other hand).',
    'Dias 47-49: O Dossiê da Execução. Passa do contraste para a soma de agravantes (In addition), rastreia a culpa sistêmica (As a result) e profere a sentença de bloqueio final usando a lógica matemática (Therefore). A produção deixa de ser "uma frase" e passa a ser "a construção de um parágrafo complexo".'
  ],
  key_contrasts_established: [
    'but (casual) vs however (formal e pontuado)',
    'although (exige oração Sujeito+Verbo) vs despite (exige apenas Noun/-ING)',
    'even if (condição de futilidade futura) vs although (obstáculo real no presente)',
    "that's why (motivo de algo ocorrer) vs as a result (laudo de processo desencadeado)",
    "otherwise (ameaça técnica) vs therefore (veredito lógico e jurídico)"
  ],
  vocabulary_themes: [
    'reuniões de crise e prazos: tight deadline, deliver, core, delay',
    'argumentos de sucesso x falha: success, issue, lack, essential',
    'trade-offs técnicos: steep learning curve, fast, slow'
  ],
  connects_to_next: "Batch 8 (dias 50-56): [for instance, in contrast, what's more, having said that, to sum up, not only... but also, needless to say] — [Fechamento absoluto do Módulo 5 e consolidação do B2. Após aprender as transições pesadas de causa/consequência e contraste, o aluno polirá o discurso com conectores de nuance fina, exemplos elegantes, resumos executivos e estruturas correlativas extremas (Not only X, but also Y)]."
}
