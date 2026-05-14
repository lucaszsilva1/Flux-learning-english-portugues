import type { Lesson } from '../types'

export const lessons: Lesson[] = [
  {
    id: 50,
    level: 'B2',
    module: 5,
    moduleTitle: 'Discourse Markers',
    structure: "We face several risks; for instance, the server might crash under load.",
    translation: 'Nós enfrentamos diversos riscos; por exemplo, o servidor pode cair sob carga.',
    explanation: '"For instance" é o irmão maduro de "For example". Embora signifiquem a exata mesma coisa, usar "for instance" em apresentações, artigos ou reuniões eleva automaticamente a sua proficiência percebida. Ele sinaliza que você vai retirar uma amostra de um universo maior de possibilidades.',
    why_it_matters: 'Para não repetir "for example" cinco vezes num e-mail explicativo. "For instance" soa polido, educado e é perfeito para quando você quer sugerir uma possibilidade de risco ou solução.',
    pronunciation: '/fɔr ˈɪnstəns/',
    stress_tip: 'A força recai no "IN". É pronunciado fluidamente como uma palavra só: "f\'rinstance".',
    pattern: '[Declaração Ampla] ; for instance, + [Exemplo Específico]',
    breakdown: [
      { piece: 'We face several risks;', role: 'Premissa ampla' },
      { piece: 'for instance,', role: 'Marcador de exemplificação' },
      { piece: 'the server might crash', role: 'Amostra específica usando modal de possibilidade' },
      { piece: 'under load', role: 'Contexto do exemplo' }
    ],
    core_vocabulary: [
      { word: 'for instance', translation: 'por exemplo / a título de exemplo', example: 'We can use other tools; for instance, Docker.' },
      { word: 'face', translation: 'enfrentar (problemas/riscos)', example: 'We face a huge problem.' },
      { word: 'several', translation: 'vários/diversos', example: 'There are several ways to do this.' },
      { word: 'load', translation: 'carga (de trabalho/acesso)', example: 'The system crashed under heavy load.' }
    ],
    examples: {
      work: { en: "There are many solutions. For instance, we could rewrite the API.", pt: 'Existem muitas soluções. Por exemplo, nós poderíamos reescrever a API.' },
      travel: { en: "Bring warm clothes; for instance, a heavy jacket.", pt: 'Traga roupas quentes; por exemplo, uma jaqueta grossa.' },
      study: { en: "Some languages are very hard; for instance, Mandarin.", pt: 'Algumas línguas são muito difíceis; mandarim, por exemplo.' }
    },
    variations: [
      { form: "Such as", note: 'Usado para introduzir listas rápidas ("Languages such as Python, Go and Rust"). Não use "for instance" ou "for example" se a sua intenção é listar vários substantivos em seguida.' },
      { form: "Namely", note: 'Ainda mais acadêmico: "Sendo eles... / Ou seja...".' }
    ],
    combinations: [
      { phrase: "; for instance, we could", meaning: 'Dar um exemplo de sugestão ativa' },
      { phrase: "; for instance, if we had", meaning: 'Dar um exemplo atrelado a uma condição irreal' }
    ],
    collocations: ["; for instance,", "face risks", "under heavy load"],
    common_mistakes: [
      { wrong: 'Like for instance...', right: 'For instance...', tip: 'Não junte as duas coisas. Ou você usa "Like" (informal) ou usa "For instance" (formal).' },
      { wrong: 'I have many skills, for instance, coding, testing, managing.', right: 'I have many skills, such as coding, testing, and managing.', tip: 'Se você vai despejar uma lista rápida de palavras, use "such as". Deixe "for instance" para abrir frases de exemplo.' }
    ],
    retrieval_context: 'A diretoria acha que o sistema está perfeito. Você quer listar que há vazamentos de memória e outras falhas esporádicas. Você lança a premissa ampla e ilustra.',
    retrieval_prompt: 'Afirme que "existem vários problemas" (there are several issues) e dê o exemplo: "por exemplo, a memória vaza" (the memory leaks).',
    retrieval_reference: "Exemplo: 'There are several issues; for instance, the memory leaks.'",
    drills: [
      { instruction: 'Forme o exemplo formal.', input: 'Nós temos opções; por exemplo, nós podemos esperar.', answer: 'We have options; for instance, we can wait.' },
      { instruction: 'Traduza usando o verbo enfrentar.', input: 'Nós enfrentamos vários riscos; por exemplo, nós não temos tempo.', answer: "We face several risks; for instance, we don't have time." },
      { instruction: 'Revisão (Dia 23 e 32): Dê exemplo com Hipótese.', input: 'Se nós tivéssemos dinheiro, nós poderíamos comprar coisas; por exemplo, um servidor novo.', answer: 'If we had money, we could buy things; for instance, a new server.' },
      { instruction: 'Revisão (Dia 49): Conclua o exemplo.', input: 'Isso é arriscado. Por exemplo, nós poderíamos perder clientes; portanto (therefore), nós não deveríamos lançar.', answer: "It is risky. For instance, we could lose clients; therefore, we shouldn't launch." },
      { instruction: 'Contraste Lista vs Oração.', input: 'Ferramentas COMO o Docker (lista). Opções; POR EXEMPLO, nós poderíamos usar o Docker.', answer: 'Tools such as Docker. Options; for instance, we could use Docker.' },
      { instruction: 'SÍNTESE: Una Precaução (Dia 36) ao Exemplo.', input: 'Eu farei um plano B pro caso do sistema falhar; por exemplo, se a AWS cair.', answer: 'I will make a backup plan in case the system fails; for instance, if AWS goes down.' },
      { instruction: 'SÍNTESE 2: O Contraponto (Dia 46).', input: 'Por exemplo, é rápido. Por outro lado, é caro.', answer: 'For instance, it is fast. On the other hand, it is expensive.' }
    ],
    connects_to: [23, 32, 36, 46, 49],
    review_of: "Exige o trânsito entre 'such as' e 'for instance' além da integração imediata com condicionais de risco (might/in case) para montar cenários de exemplificação convincentes.",
    daily_resources: {
      ted: { title: '10 ways to have a better conversation', url: 'https://www.ted.com/talks/celeste_headlee_10_ways_to_have_a_better_conversation', tip: 'Observe a cadência e o tom amigável usado com "for instance".' },
      podcast: { title: 'ESL Podcast - Explaining Details', url: 'https://www.eslpod.com', tip: 'Perceba o som quase suprimido do "for" antes do instance.' },
      onelook_word: 'instance',
      anki_card: { front: 'Nunca junte "Like for example". Como soa a versão profissional?', back: 'For instance,...' },
      speaking_prompt: "Faça um monólogo justificando seus medos para o futuro da sua carreira. 'There are several things I worry about. For instance, what if... Furthermore (in addition)... Therefore...'"
    }
  },
  {
    id: 51,
    level: 'B2',
    module: 5,
    moduleTitle: 'Discourse Markers',
    structure: "The old system is slow. In contrast, the new one is extremely fast.",
    translation: 'O sistema antigo é lento. Em contraste, o novo é extremamente rápido.',
    explanation: '"In contrast" eleva a comparação para um nível acadêmico ou de relatório gerencial. É um choque de mundos direto. Diferente de "however" (que apenas introduz um "mas"), "in contrast" compara sistematicamente o Elemento A contra o Elemento B.',
    why_it_matters: 'Para criar slides, tabelas de benchmark e comparativos de fornecedores. Quando você quer mostrar o quão superior a sua solução é comparada à antiga, "in contrast" é a moldura perfeita.',
    pronunciation: '/ɪn ˈkɑntræst/',
    stress_tip: 'O foco vai para o "CON". A pausa depois do marcador é essencial.',
    pattern: '[Fato sobre Elemento A] . In contrast, + [Fato Oposto sobre Elemento B]',
    breakdown: [
      { piece: 'The old system is slow.', role: 'Avaliação do primeiro elemento' },
      { piece: 'In contrast,', role: 'Marcador de oposição comparativa estrita' },
      { piece: 'the new one', role: 'O segundo elemento ("one" substitui "system")' },
      { piece: 'is extremely fast', role: 'O atributo oposto em evidência' }
    ],
    core_vocabulary: [
      { word: 'in contrast', translation: 'em contraste / em contrapartida', example: 'It is hot here. In contrast, it is cold there.' },
      { word: 'old', translation: 'velho/antigo', example: 'The old version.' },
      { word: 'new one', translation: 'o novo', example: 'I bought a new one.' },
      { word: 'extremely', translation: 'extremamente', example: 'It is extremely difficult.' }
    ],
    examples: {
      work: { en: "Our competitors lost money. In contrast, our profits doubled.", pt: 'Nossos concorrentes perderentraram dinheiro. Em contraste, nossos lucros dobraram.' },
      travel: { en: "London is huge. In contrast, this village is very small.", pt: 'Londres é enorme. Em contraste, esta vila é muito pequena.' },
      study: { en: "Physics is math-heavy. In contrast, history is reading-heavy.", pt: 'Física é carregada de matemática. Em contrapartida, história é carregada de leitura.' }
    },
    variations: [
      { form: "By contrast", note: 'Versão sinônima, um pouco mais usada em jornais e textos formais.' },
      { form: "Conversely", note: 'O nível C1 do contraste ("Inversamente"). Muito usado quando uma lógica matemática é aplicada ao reverso.' }
    ],
    combinations: [
      { phrase: "In contrast to [noun]", meaning: 'Em contraste a/com (Ex: In contrast to the old one...)' }
    ],
    collocations: ["in contrast,", "by contrast,", "in contrast to"],
    common_mistakes: [
      { wrong: 'In contrast with the old system...', right: 'In contrast TO the old system...', tip: 'A preposição atrelada ao "in contrast" é TO, não "with". (Ex: In contrast to expectations...)' },
      { wrong: 'On contrast...', right: 'In contrast...', tip: 'Não confunda a preposição de "on the other hand" com a de "in contrast".' }
    ],
    retrieval_context: 'Você está apresentando o desempenho do seu código comparado ao de um concorrente. O código dele trava muito.',
    retrieval_prompt: 'Descreva que o código dele trava (crashes). E logo após o choque ("Em contraste"), afirme que o seu é estável (stable).',
    retrieval_reference: "Exemplo: 'Their code crashes. In contrast, ours is stable.'",
    drills: [
      { instruction: 'Forme o choque corporativo.', input: 'Eles falharam. Em contraste, nós fomos bem-sucedidos.', answer: 'They failed. In contrast, we succeeded.' },
      { instruction: 'Use o substituto "one".', input: 'O carro antigo quebrou. Em contrapartida, o novo é confiável.', answer: 'The old car broke. In contrast, the new one is reliable.' },
      { instruction: 'Preposição correta.', input: 'Em contraste com (to) ontem, hoje está fácil.', answer: 'In contrast to yesterday, today is easy.' },
      { instruction: 'Revisão (Dia 43 e 46): Diferencie conectivos.', input: 'É caro; contudo (however), é bom. Em contraste, o outro é barato mas ruim.', answer: 'It is expensive; however, it is good. In contrast, the other one is cheap but bad.' },
      { instruction: 'Revisão (Dia 48): Sume com resultado.', input: 'A versão antiga era lenta e, como resultado, perdemos usuários. Em contraste, a nova atrai (attracts) clientes.', answer: 'The old version was slow, and as a result, we lost users. In contrast, the new one attracts clients.' },
      { instruction: 'SÍNTESE: Junte Hipótese Irreal (Dia 31).', input: 'Se nós usássemos Java, seria pesado. Em contraste, usando Go é leve.', answer: 'If we used Java, it would be heavy. In contrast, using Go is light.' },
      { instruction: 'Contraste com Obrigação Exclusiva (Dia 41).', input: 'Eles só comprarão se o preço cair. Em contraste, nós compraremos independentemente se (whether or not) o preço cair.', answer: 'They will buy only if the price lowers. In contrast, we will buy whether or not the price lowers.' }
    ],
    connects_to: [31, 39, 41, 43, 46, 48],
    review_of: "Exige o domínio simultâneo de 3 modos de quebra: Although (embutido na frase), However (pausa e quebra a mesma ideia) e In Contrast (choque de mundos e comparações opostas absolutas).",
    daily_resources: {
      ted: { title: 'The differences between introverts and extroverts', url: 'https://www.ted.com/talks/susan_cain_the_power_of_introverts', tip: 'Observe como todo o discurso se baseia no "In contrast" entre dois perfis.' },
      podcast: { title: 'ESL Podcast - Comparing Alternatives', url: 'https://www.eslpod.com', tip: 'Treine a respiração longa na vírgula de "In contrast,".' },
      onelook_word: 'contrast',
      anki_card: { front: 'Nunca traduza "Em contraste COM" como "In contrast WITH". Qual o correto?', back: 'In contrast TO.' },
      speaking_prompt: "Monólogo de vendas: compare você mesmo a um programador júnior hipotético. 'A junior dev lacks experience. In contrast, I can... Furthermore (in addition)...'"
    }
  },
  {
    id: 52,
    level: 'B2',
    module: 5,
    moduleTitle: 'Discourse Markers',
    structure: "The candidate is highly skilled; what's more, he is fluent in English.",
    translation: 'O candidato é altamente habilidoso; além do mais, ele é fluente em inglês.',
    explanation: '"What\'s more" é a versão super-fluente, falada e cativante de "In addition". Transmite a sensação de que o falante está genuinamente entusiasmado com a lista de pontos positivos (ou revoltado com a lista de problemas). É o "e ainda por cima" do inglês.',
    why_it_matters: 'Numa reunião, "in addition" ou "moreover" soam robóticos quando falados em voz alta. "What\'s more" cria conexão emocional com os colegas e atrai a atenção: "Eu te dei um motivo forte, MAS ESPERA AÍ, TEM ALGO AINDA MELHOR".',
    pronunciation: '/wʌts mɔr/',
    stress_tip: 'A palavra "more" recebe muita força, sublinhando que o argumento bônus é fantástico.',
    pattern: '[Ponto positivo/negativo] ; what\'s more, + [Ponto Bônus avassalador]',
    breakdown: [
      { piece: 'The candidate is highly skilled;', role: 'Vantagem inicial' },
      { piece: "what's more,", role: 'Marcador entusiástico de soma (Além do mais / E ainda por cima)' },
      { piece: 'he is fluent', role: 'Vantagem complementar forte' },
      { piece: 'in English', role: 'Contexto' }
    ],
    core_vocabulary: [
      { word: "what's more", translation: 'além do mais / e ainda por cima', example: 'It is cheap; what\'s more, it works perfectly.' },
      { word: 'highly', translation: 'altamente', example: 'A highly requested feature.' },
      { word: 'skilled', translation: 'habilidoso / capacitado', example: 'We need skilled workers.' },
      { word: 'fluent', translation: 'fluente', example: 'Are you fluent in English?' }
    ],
    examples: {
      work: { en: "The software is open-source; what's more, it has a huge community.", pt: 'O software é open-source; além do mais, tem uma comunidade enorme.' },
      travel: { en: "The hotel is downtown; what's more, breakfast is included.", pt: 'O hotel é no centro; e ainda por cima, o café da manhã está incluso.' },
      study: { en: "The book is easy to read; what's more, it's free.", pt: 'O livro é fácil de ler; além do mais, é de graça.' }
    },
    variations: [
      { form: "On top of that", note: 'Sinônimo coloquial exato. O literal "por cima disso" ("They lost the data, and on top of that, they lied").' },
      { form: "Not to mention", note: 'Outra forma clássica de empilhar vantagens ("Sem mencionar que...").' }
    ],
    combinations: [
      { phrase: "; what's more, we", meaning: 'Introduzir a "cereja do bolo" no argumento' },
      { phrase: "and what's more", meaning: 'Fusão causal falada sem pausa do ponto-e-vírgula' }
    ],
    collocations: ["what's more,", "highly skilled", "fluent in", "on top of that"],
    common_mistakes: [
      { wrong: 'The candidate is skilled. More than this, he is fluent.', right: 'The candidate is skilled. What\'s more, he is fluent.', tip: 'Não traduza "além disso" ou "mais que isso" literalmente. O idiomático para somar vantagens incríveis é "What\'s more".' },
      { wrong: 'Fluent on English.', right: 'Fluent in English.', tip: 'Fluência sempre leva a preposição "IN".' }
    ],
    retrieval_context: 'Você quer convencer a equipe a adotar uma nova biblioteca. Você diz que ela é leve (lightweight) e joga a cartada final: além do mais, a documentação é fantástica.',
    retrieval_prompt: 'Use o animado "além do mais" para apresentar o ponto da documentação ser fantástica (fantastic).',
    retrieval_reference: "Exemplo: 'It is lightweight; what's more, the documentation is fantastic.'",
    drills: [
      { instruction: 'Dê a vantagem final com entusiasmo.', input: 'É fácil de usar; e ainda por cima, é grátis.', answer: "It is easy to use; what's more, it's free." },
      { instruction: 'Forme o sinônimo da pilha.', input: 'É barato, e além disso (on top of that), é rápido.', answer: 'It is cheap, and on top of that, it is fast.' },
      { instruction: 'Corrija a fluência.', input: 'Fluente em (in) tecnologia.', answer: 'Fluent in technology.' },
      { instruction: 'Revisão (Dia 47): Contraste a fala x relatório.', input: 'Fala: É ruim; e ainda por cima (what\'s more), é caro. Escrita formal: O sistema é instável. Além disso (in addition), os custos são altos.', answer: "It is bad; what's more, it is expensive. The system is unstable. In addition, the costs are high." },
      { instruction: 'Revisão (Dia 28): Adicione dependência condicional.', input: 'E além do mais (what\'s more), isso depende deles agora.', answer: "And what's more, it depends on them now." },
      { instruction: 'SÍNTESE: Junte 3ª Condicional e Conclusão.', input: 'Se eles tivessem nos ouvido, não teria quebrado. Além do mais, nós avisamos. Portanto, não é nossa culpa.', answer: "If they had listened to us, it wouldn't have broken. What's more, we warned them. Therefore, it is not our fault." },
      { instruction: 'Revisão (Dia 34): Adicione bloqueio.', input: 'É perigoso; além do mais, eu não o farei a menos que eles paguem.', answer: "It is dangerous; what's more, I won't do it unless they pay." }
    ],
    connects_to: [28, 34, 47],
    review_of: "Exige o distanciamento da soma formal ('In addition', dia 47) e o mergulho numa oratória persuasiva viva, integrando arrependimentos passados e exigências presentes.",
    daily_resources: {
      ted: { title: 'How to sound smart in your TEDx Talk', url: 'https://www.ted.com/talks/will_stephen_how_to_sound_smart_in_your_tedx_talk', tip: 'O humor ajuda a perceber as ênfases teatrais de conectores falados.' },
      podcast: { title: 'ESL Podcast - Persuading Others', url: 'https://www.eslpod.com', tip: 'Treine a empolgação no WHAT.' },
      onelook_word: 'more',
      anki_card: { front: 'Como se diz "E ainda por cima / Além do mais" numa reunião de forma nativa?', back: "What's more, ..." },
      speaking_prompt: "Faça o pitch (venda) do seu prato de comida favorito em 1 minuto. 'It's delicious. What's more, it's easy to make. For instance...'"
    }
  },
  {
    id: 53,
    level: 'B2',
    module: 5,
    moduleTitle: 'Discourse Markers',
    structure: "The budget is extremely tight. Having said that, we will try to hire him.",
    translation: 'O orçamento está extremamente apertado. Dito isso, nós tentaremos contratá-lo.',
    explanation: '"Having said that" é o escudo diplomático perfeito. Primeiro, você faz uma reclamação ou um apontamento forte. Aí você respira, diz "Dito isso..." e faz a concessão. Mostra que você ouviu e entendeu o problema, mas a sua decisão passa por cima dele.',
    why_it_matters: 'No B2/C1, o objetivo é gerenciar pessoas. Se você só fala o que não dá pra fazer, vira o cara do "Não". Se você expõe o risco e depois diz "Having said that, let\'s do it", você vira um líder focado em resolução sob pressão.',
    pronunciation: '/ˈhævɪŋ sɛd ðæt/',
    stress_tip: 'A pronúncia flui rapidamente, quase como "Havinsedat", com leve pausa depois.',
    pattern: '[Problema / Fato Desafiador] . Having said that, + [Decisão que ignora o obstáculo]',
    breakdown: [
      { piece: 'The budget is extremely tight.', role: 'O obstáculo / queixa forte' },
      { piece: 'Having said that,', role: 'Marcador de concessão (Dito isso / Posto isto)' },
      { piece: 'we will try to hire him', role: 'A decisão tomada APESAR do obstáculo' }
    ],
    core_vocabulary: [
      { word: 'having said that', translation: 'dito isso / posto isto', example: 'It is risky. Having said that, let\'s proceed.' },
      { word: 'that being said', translation: 'dito isso (sinônimo absoluto)', example: 'That being said, we must act.' },
      { word: 'try', translation: 'tentar', example: 'We will try.' },
      { word: 'hire', translation: 'contratar', example: 'Did we hire him?' }
    ],
    examples: {
      work: { en: "The code is a mess. Having said that, it works perfectly.", pt: 'O código é uma bagunça. Dito isso, funciona perfeitamente.' },
      travel: { en: "The flight was delayed. Having said that, we had a good time at the lounge.", pt: 'O voo atrasou. Dito isso, nos divertimos no saguão.' },
      study: { en: "This grammar is complex. That being said, you will learn it fast.", pt: 'Esta gramática é complexa. Dito isso, você a aprenderá rápido.' }
    },
    variations: [
      { form: "That being said", note: 'Idêntico em significado. Um tiquinho mais formal.' },
      { form: "With that said", note: 'Idêntico, mais curto.' }
    ],
    combinations: [
      { phrase: "Having said that, I think", meaning: 'Dando a opinião corajosa após o risco' },
      { phrase: "Having said that, we must", meaning: 'Impondo a obrigação apesar de tudo' }
    ],
    collocations: ["having said that,", "that being said,", "with that said,"],
    common_mistakes: [
      { wrong: 'Saying that, we go.', right: 'Having said that, we will go.', tip: 'A expressão fixa usa o Present Perfect Participle ("Tendo dito isso").' },
      { wrong: 'I have said that we will go.', right: 'Having said that, we will go.', tip: '"I have said that" significa literalmente "Eu disse aquilo". "Having said that" é um conector solto no início da frase.' }
    ],
    retrieval_context: 'Um fornecedor entregou um módulo péssimo, e você o criticou duramente. Mas para não queimar pontes, você ameniza no fim: admite que a tecnologia subjacente deles é promissora.',
    retrieval_prompt: 'Jogue o balde de água quente: use "Dito isso" para afirmar que a tecnologia deles é promissora (promising).',
    retrieval_reference: "Exemplo: 'Having said that, their technology is promising.'",
    drills: [
      { instruction: 'Forme a concessão madura.', input: 'É perigoso. Dito isso, nós tentaremos.', answer: 'It is dangerous. Having said that, we will try.' },
      { instruction: 'Substitua pela variante "That".', input: 'Ele falhou. Dito isso (That being said), ele é inteligente.', answer: 'He failed. That being said, he is smart.' },
      { instruction: 'Revisão (Dia 44): Contraste com Although.', input: 'Embora o orçamento seja apertado (oração inteira), nós tentaremos. O orçamento é apertado. Dito isso, nós tentaremos (quebra de frase).', answer: 'Although the budget is tight, we will try. The budget is tight. Having said that, we will try.' },
      { instruction: 'Revisão (Dia 40): Una Sugestão Criativa.', input: 'É caro. Dito isso, e se nós alugarmos?', answer: 'It is expensive. Having said that, what if we rent it?' },
      { instruction: 'SÍNTESE: Una "As a result" e "Having said that".', input: 'Houve um erro, e como resultado, a tela travou. Dito isso, a API ainda está segura.', answer: 'There was an error, and as a result, the screen crashed. Having said that, the API is still secure.' },
      { instruction: 'SÍNTESE 2: O Contraponto Supremo.', input: 'Por um lado, é lento. Por outro lado (on the other hand), é barato. Dito isso, eu preferiria não comprar.', answer: "On the one hand, it is slow. On the other hand, it is cheap. Having said that, I'd rather not buy it." },
      { instruction: 'Revisão (Dia 28): Condicione a decisão.', input: 'Dito isso, isso depende deles.', answer: 'Having said that, it depends on them.' }
    ],
    connects_to: [28, 40, 44, 46, 48],
    review_of: "Exige que o aluno empilhe camadas de argumentação: um obstáculo inicial, os trade-offs de 'on the other hand' (dia 46) e o grande salto diplomático do 'having said that'.",
    daily_resources: {
      ted: { title: 'How to manage for collective creativity', url: 'https://www.ted.com/talks/linda_hill_how_to_manage_for_collective_creativity', tip: 'Líderes falam a todo instante "Temos que lucrar. Tendo dito isso, nosso foco é a equipe".' },
      podcast: { title: 'ESL Podcast - Making Concessions', url: 'https://www.eslpod.com', tip: 'Treine a vírgula respiratória em "Having said that, [PAUSA]...".' },
      onelook_word: 'said',
      anki_card: { front: 'Como dizer "Dito isso / Tendo dito isso" para quebrar o peso de uma frase dura?', back: 'Having said that,...' },
      speaking_prompt: "Faça um review crítico de 1 minuto sobre sua cidade: 'The traffic is awful. The violence is a problem. Having said that, I love...'"
    }
  },
  {
    id: 54,
    level: 'B2',
    module: 5,
    moduleTitle: 'Discourse Markers',
    structure: "To sum up, we need more time and a larger budget.",
    translation: 'Para resumir, nós precisamos de mais tempo e um orçamento maior.',
    explanation: 'Ao final de um monólogo corporativo de 3 minutos ou de um longo e-mail, as pessoas se perdem. "To sum up" (ou "In short") age como a salvação do leitor/ouvinte. Ele limpa todo o ruído (the noise) e entrega apenas a bala de prata (o TL;DR da sua ideia).',
    why_it_matters: 'O "Bottom Line" (a moral da história). Ninguém gosta de quem fala sem parar e não chega a lugar nenhum. Sinalizar com "To sum up" reconquista a atenção do público de forma imediata.',
    pronunciation: '/tə sʌm ʌp/',
    stress_tip: 'O grupo "SUM UP" é pronunciado forte e unificado (sa-MAP).',
    pattern: 'To sum up, + [A moral da história/O pedido claro e direto]',
    breakdown: [
      { piece: 'To sum up,', role: 'Marcador de sumarização (Para resumir)' },
      { piece: 'we need more time', role: 'A primeira exigência nuclear' },
      { piece: 'and a larger budget', role: 'A segunda exigência' }
    ],
    core_vocabulary: [
      { word: 'to sum up', translation: 'para resumir / em resumo', example: 'To sum up, it was a failure.' },
      { word: 'in short', translation: 'em suma / resumindo (sinônimo)', example: 'In short, we agree.' },
      { word: 'larger', translation: 'maior (em escala/tamanho)', example: 'We need a larger team.' },
      { word: 'budget', translation: 'orçamento', example: 'Increase the budget.' }
    ],
    examples: {
      work: { en: "To sum up, if we don't fix this bug, we can't launch.", pt: 'Para resumir, se nós não consertarmos este bug, não podemos lançar.' },
      travel: { en: "In short, the trip was a disaster.", pt: 'Em suma, a viagem foi um desastre.' },
      study: { en: "To sum up, you have to read chapters 1 to 5.", pt: 'Resumindo, vocês têm que ler os capítulos 1 a 5.' }
    },
    variations: [
      { form: "In brief", note: 'Forma mais acadêmica ("Em breve análise").' },
      { form: "Basically", note: 'Muito comum na fala ("Basicamente..."). Usado em excesso pelos nativos informais.' }
    ],
    combinations: [
      { phrase: "To sum up, we must", meaning: 'Ação imperativa resumida' },
      { phrase: "In short, the problem is", meaning: 'Isolamento de causa' }
    ],
    collocations: ["to sum up,", "in short,", "larger budget"],
    common_mistakes: [
      { wrong: 'To resume...', right: 'To sum up... (ou To summarize...)', tip: 'FALSO COGNATO FATAL: "To resume" significa "retomar/voltar a fazer algo" (como dar o play no vídeo). Resumir um texto é "to summarize" ou "to sum up".' },
      { wrong: 'In resume...', right: 'In short...', tip: 'Novamente, "resume" (currículo ou verbo retomar) não é usado para resumos verbais.' }
    ],
    retrieval_context: 'No fim de uma apresentação massiva de dados, a diretoria parece confusa sobre qual o veredito do próximo semestre.',
    retrieval_prompt: 'Corte a fumaça e entregue a bala final: use "Para resumir" e avise que o sistema atual não vai aguentar a escala.',
    retrieval_reference: "Exemplo: 'To sum up, the current system won't handle the scale.'",
    drills: [
      { instruction: 'Traduza o resumo base.', input: 'Para resumir, o projeto é viável.', answer: 'To sum up, the project is viable.' },
      { instruction: 'Substitua pela versão curta.', input: 'Em suma (In short), nós precisamos de ajuda.', answer: 'In short, we need help.' },
      { instruction: 'Corrija o falso cognato.', input: 'To resume, it is good.', answer: 'To sum up, it is good.' },
      { instruction: 'Revisão (Dia 49): Conclusão vs Resumo.', input: 'Falhou; portanto (therefore), não subiremos. Resumindo (to sum up), precisamos refatorar.', answer: 'It failed; therefore, we will not deploy. To sum up, we need to refactor.' },
      { instruction: 'SÍNTESE: Junte Ultimato (Dia 34) e Resumo.', input: 'Para resumir, nós falharemos a não ser que nós consigamos um orçamento maior.', answer: 'To sum up, we will fail unless we get a larger budget.' },
      { instruction: 'SÍNTESE: Contraste de Condição Irreal (Dia 33).', input: 'Em suma, se tivéssemos consertado antes, isso não teria quebrado.', answer: "In short, if we had fixed it earlier, it wouldn't have broken." },
      { instruction: 'Use o casual.', input: 'Basicamente, eles não sabem.', answer: "Basically, they don't know." }
    ],
    connects_to: [33, 34, 49],
    review_of: "Exige o descarte final do cognato falso ('resume') e faz o contraponto com o fechamento do 'therefore' (dia 49), consolidando a oratória executiva com condicionais limitantes.",
    daily_resources: {
      ted: { title: 'How to speak so that people want to listen', url: 'https://www.ted.com/talks/julian_treasure_how_to_speak_so_that_people_want_to_listen', tip: 'Observe a síntese final na apresentação (o bottom line).' },
      podcast: { title: 'ESL Podcast - Summarizing Information', url: 'https://www.eslpod.com', tip: 'Treine os ouvidos para os falsos cognatos de summary/resume.' },
      onelook_word: 'sum',
      anki_card: { front: 'Cuidado! Como dizer "Resumindo" de forma correta e nativa (2 palavras)?', back: 'In short,... (ou To sum up).' },
      speaking_prompt: "Faça um monólogo de 1 minuto enrolando sobre o universo e termine drasticamente: 'Blá blá blá. To sum up, we know nothing.'"
    }
  },
  {
    id: 55,
    level: 'B2',
    module: 5,
    moduleTitle: 'Discourse Markers',
    structure: "Not only is he fast, but he is also very accurate.",
    translation: 'Não apenas ele é rápido, mas ele também é muito preciso.',
    explanation: 'A Correlativa Exponencial B2. Quando "what\'s more" ou "in addition" não são fortes o bastante para mostrar a sua admiração/surpresa, usamos o "Not only... but also". ATENÇÃO GRAMATICAL C1: Quando a frase COMEÇA com "Not only", a gramática inverte o sujeito e o verbo como se fosse uma pergunta ("Not only IS HE...").',
    why_it_matters: 'É a estrutura preferida dos profissionais de marketing para vender produtos e dos executivos para exaltar membros de equipe. O uso correto da inversão ("Not only DID WE...") separa imediatamente os nativos/C1 do resto do mundo.',
    pronunciation: '/nɑt ˈoʊnli ɪz hi... bʌt hi ɪz ˈɔlsoʊ/',
    stress_tip: 'O balanço é musical. Força no ONLY, sobe a voz. Força no ALSO, desce a voz para cravar o argumento bônus.',
    pattern: 'Not only + [Verbo Invertido] + [Sujeito] + [Adjetivo/Fato 1], but + [Sujeito] + [Verbo normal] + also + [Adjetivo/Fato 2]',
    breakdown: [
      { piece: 'Not only is he fast,', role: 'Primeiro fato com Inversão Gramatical obrigatória (Not only is he...)' },
      { piece: 'but he is also', role: 'Correlativo somador (mas ele também é)' },
      { piece: 'very accurate', role: 'A característica premium / Fato 2' }
    ],
    core_vocabulary: [
      { word: 'not only... but also', translation: 'não apenas... mas também', example: 'Not only is it cheap, but it is also good.' },
      { word: 'fast', translation: 'rápido', example: 'He works fast.' },
      { word: 'accurate', translation: 'preciso (sem erros)', example: 'The data must be accurate.' },
      { word: 'efficient', translation: 'eficiente', example: 'It is highly efficient.' }
    ],
    examples: {
      work: { en: "Not only did we finish on time, but we also saved money.", pt: 'Não só terminamos no prazo, como também economizamos dinheiro.' },
      travel: { en: "Not only is the city beautiful, but it is also very safe.", pt: 'A cidade não é apenas bonita, mas também é muito segura.' },
      study: { en: "Not only does she speak English, but she also speaks French.", pt: 'Ela não só fala inglês, mas também fala francês.' }
    },
    variations: [
      { form: "He is not only fast, but also accurate", note: 'Versão SEM inversão gramatical. O "Not only" vai no MEIO da frase. É mais fácil de falar, mas menos imponente no começo do texto.' }
    ],
    combinations: [
      { phrase: "Not only do we", meaning: 'Afirmação presente invertida' },
      { phrase: "Not only did we", meaning: 'Afirmação passada invertida' }
    ],
    collocations: ["not only is he", "not only did we", "but also"],
    common_mistakes: [
      { wrong: 'Not only he is fast...', right: 'Not only IS HE fast...', tip: 'REGRA C1: Inícios com palavras negativas/restritivas (Not only, Never, Seldom) EXIGEM a estrutura de pergunta invertida logo em seguida.' },
      { wrong: 'Not only we finished...', right: 'Not only DID WE finish...', tip: 'Se for passado, o auxiliar "DID" tem que aparecer invertendo.' },
      { wrong: 'Not only... also...', right: 'Not only... BUT also...', tip: 'Nunca se esqueça do BUT na segunda parte da frase correlativa.' }
    ],
    retrieval_context: 'Seu chefe não confia num certo banco de dados aberto, dizendo que é inseguro e lento. Você o defende com unhas e dentes listando as duas qualidades supremas dele.',
    retrieval_prompt: 'Fale com autoridade invertendo o verbo no início: "Não apenas ele é rápido, mas ele também é de graça" (free).',
    retrieval_reference: "Exemplo: 'Not only is it fast, but it is also free.'",
    drills: [
      { instruction: 'Faça a inversão com verbo To Be.', input: 'Não só ele é inteligente, mas ele também é bom.', answer: 'Not only is he smart, but he is also good.' },
      { instruction: 'Faça a inversão no passado (DID).', input: 'Não só nós consertamos o bug, mas nós também o otimizamos.', answer: 'Not only did we fix the bug, but we also optimized it.' },
      { instruction: 'Faça a inversão no presente (DOES).', input: 'Não só ele trabalha muito, mas ele também ajuda outros.', answer: 'Not only does he work hard, but he also helps others.' },
      { instruction: 'Use a versão sem inversão (no meio da frase).', input: 'Ele não é apenas rápido, mas também preciso.', answer: 'He is not only fast, but also accurate.' },
      { instruction: 'Revisão (Dia 47): O mesmo significado usando soma.', input: 'Ele é rápido. Além disso (In addition), ele é preciso.', answer: 'He is fast. In addition, he is accurate.' },
      { instruction: 'SÍNTESE: Junte com Conclusão Lógica (Dia 49) e Exceção (Dia 34).', input: 'Não só ele falhou (did he fail), mas ele também mentiu; portanto, nós o demitiremos a não ser que (unless) ele explique.', answer: 'Not only did he fail, but he also lied; therefore, we will fire him unless he explains.' },
      { instruction: 'Inversão no Present Perfect (Dia 11/14 - Have).', input: 'Não apenas eles entregaram, como também testaram.', answer: 'Not only have they delivered, but they have also tested.' }
    ],
    connects_to: [11, 14, 34, 47, 49],
    review_of: "Eleva o nível de soma do 'in addition' para o patamar C1, obrigando a inversão de todos os auxiliares (did/does/is/have) passados até hoje. Associa-se com ameaças estruturais ('therefore' e 'unless').",
    daily_resources: {
      ted: { title: 'How great leaders inspire action', url: 'https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action', tip: 'Observe como o locutor elenca as virtudes supremas da Apple usando "Not only...".' },
      podcast: { title: 'ESL Podcast - Marketing Pitches', url: 'https://www.eslpod.com', tip: 'Escute a entonação quase que de comercial de TV ao inverter o verbo ("Not only DO THEY...").' },
      onelook_word: 'also',
      anki_card: { front: 'Nunca diga "Not only he is...". Qual a regra do início negativo?', back: 'Você deve inverter! "Not only IS HE... / Not only DID WE..."' },
      speaking_prompt: "Faça o marketing do seu próprio projeto/trabalho em voz alta: 'Not only is it efficient, but it is also... Not only do we work hard, but we also...'"
    }
  },
  {
    id: 56,
    level: 'B2',
    module: 5,
    moduleTitle: 'Discourse Markers',
    structure: "Needless to say, we will provide full support during the transition.",
    translation: 'Nem precisa dizer, nós forneceremos suporte completo durante a transição.',
    explanation: 'Terminamos o Módulo de Discourse Markers com a confirmação do óbvio. "Needless to say" é a etiqueta máxima de garantia do inglês corporativo. Você assegura ao ouvinte que a regra principal/bom senso será seguida de forma inquestionável.',
    why_it_matters: 'Durante reuniões de onboarding ou rescisão, o cliente fica apavorado achando que será abandonado. Dizer "Of course we will help" soa automático. Dizer "Needless to say, we are here for you" soa calmo, maduro e definitivo.',
    pronunciation: '/ˈnidləs tə seɪ/',
    stress_tip: 'O peso fica em NEED. "needless" = sem necessidade (de falar).',
    pattern: 'Needless to say, + [A Garantia ou Fato Óbvio Absoluto]',
    breakdown: [
      { piece: 'Needless to say,', role: 'Marcador de obviedade garantida (Nem precisa dizer)' },
      { piece: 'we will provide full support', role: 'A promessa garantida' },
      { piece: 'during the transition', role: 'Contexto de tempo' }
    ],
    core_vocabulary: [
      { word: 'needless to say', translation: 'nem precisa dizer / obviamente', example: 'Needless to say, we won.' },
      { word: 'provide', translation: 'fornecer / prover', example: 'We will provide the tools.' },
      { word: 'support', translation: 'suporte/apoio', example: 'Full support is guaranteed.' },
      { word: 'transition', translation: 'transição', example: 'The transition phase is hard.' }
    ],
    examples: {
      work: { en: "Needless to say, this information is strictly confidential.", pt: 'Nem precisa dizer que esta informação é estritamente confidencial.' },
      travel: { en: "Needless to say, it rained the whole time we were there.", pt: 'Nem precisa dizer que choveu o tempo todo em que estivemos lá.' },
      study: { en: "Needless to say, anyone caught cheating will be expelled.", pt: 'Obviamente, quem for pego colando será expulso.' }
    },
    variations: [
      { form: "It goes without saying", note: 'Sinônimo poético-corporativo B2 ("A coisa vai por si só / Nem preciso dizer").' },
      { form: "Obviously", note: 'Pode soar um pouco arrogante ("Obviamente..."), prefira "needless to say".' }
    ],
    combinations: [
      { phrase: "Needless to say, we must", meaning: 'A obviedade atrelada a uma obrigação moral/técnica' }
    ],
    collocations: ["needless to say,", "it goes without saying,", "provide support"],
    common_mistakes: [
      { wrong: 'No need to say...', right: 'Needless to say...', tip: 'Embora a lógica esteja certa, a expressão idiomática fixa que os nativos usam 100% das vezes é "Needless to say".' },
      { wrong: 'Is not necessary to speak...', right: 'Needless to say...', tip: 'Tradução literal e robótica.' }
    ],
    retrieval_context: 'Um cliente VIP sofreu um downtime gravíssimo (queda do sistema). Você vai repor o dinheiro dele, mas quer que ele saiba que isso é o mínimo e óbvio a ser feito.',
    retrieval_prompt: 'Use o conector do "fato óbvio" e garanta que ele não vai pagar (won\'t pay) por este mês (for this month).',
    retrieval_reference: "Exemplo: 'Needless to say, you won't pay for this month.'",
    drills: [
      { instruction: 'Forme a garantia padrão.', input: 'Nem precisa dizer, o projeto é secreto.', answer: 'Needless to say, the project is secret.' },
      { instruction: 'Substitua pelo sinônimo de obviedade elegante.', input: 'A coisa vai sem ser dita (It goes without saying) que nós ajudaremos.', answer: 'It goes without saying that we will help.' },
      { instruction: 'Revisão (Dia 43 e 51): Contraste a obviedade com uma desvantagem.', input: 'Obviamente, a qualidade é incrível. No entanto (however), o preço é alto.', answer: 'Needless to say, the quality is amazing. However, the price is high.' },
      { instruction: 'SÍNTESE FINAL (Dia 48 + 49): Relatório conclusivo.', input: 'Obviamente o banco falhou, e como resultado (as a result), dados foram perdidos; portanto (therefore), a segurança mudará.', answer: 'Needless to say, the database failed, and as a result, data was lost; therefore, the security will change.' },
      { instruction: 'SÍNTESE EXTREMA (Módulo 4 + Módulo 5): Inversão + Condição + Obviedade.', input: 'Não só (Not only did he) ele mentiu, mas nós o pegamos; portanto, ele sairá. Nem precisa dizer.', answer: 'Not only did he lie, but we caught him; therefore, he will leave. Needless to say.' },
      { instruction: 'Destaque o verbo prover.', input: 'Nem precisa dizer, nós proveremos a API.', answer: 'Needless to say, we will provide the API.' }
    ],
    connects_to: [43, 48, 49, 51, 55],
    review_of: "Exige o apinhamento das estruturas lógicas finais de soma (not only did...), causalidade (as a result, therefore) e resumos definitivos, fechando o Módulo 5 com maestria fluente corporativa.",
    daily_resources: {
      ted: { title: 'The secret to giving great feedback', url: 'https://www.ted.com/talks/leeann_renniger_the_secret_to_giving_great_feedback', tip: 'Observe que a obviedade é frequentemente citada antes de entregar más notícias macias.' },
      podcast: { title: 'ESL Podcast - Guarantees and Assurances', url: 'https://www.eslpod.com', tip: 'Preste atenção à pronúncia engolida do "to" no meio de "needless-ta-say".' },
      onelook_word: 'needless',
      anki_card: { front: 'Nunca traduza como "No need to say". Qual a expressão idiomática fixa do inglês?', back: 'Needless to say,...' },
      speaking_prompt: "Faça um Monólogo de Fechamento de Venda: 'To sum up, our tool is fast. Needless to say, we provide full support. What's more, it's cheap.'"
    }
  }
]

export const BATCH_50_56_SUMMARY = {
  range: '50-56',
  theme: 'A Elegância Final dos Discourse Markers (B2 / C1)',
  levels: ['B2'],
  structures: [
    'for instance — A exemplificação inteligente como amostra (dia 50, B2)',
    'in contrast — Oposição direta rigorosa e formal (dia 51, B2)',
    "what's more — A soma de fatos com entusiasmo conversacional (dia 52, B2)",
    'having said that — A concessão de líder, assumindo riscos de forma diplomática (dia 53, B2)',
    'to sum up — O corte de ruído (TL;DR) no discurso executivo (dia 54, B2)',
    'not only... but also — A soma exponencial C1 com inversão gramatical (dia 55, B2-C1)',
    'needless to say — A garantia e demarcação da obviedade inquestionável (dia 56, B2)'
  ],
  grammar_arcs: [
    'Dias 50-54: Refinando o Discurso. O aluno aprende a dar os contrapontos da vida real com "having said that" para não parecer agressivo e a "sumarizar" argumentos depois de usar toda aquela sintaxe densa que ele aprendeu.',
    'Dias 55-56: Fluência Nativa C1 e Fechamento. O uso da inversão gramatical após "Not only" quebra o bloqueio de B2 do brasileiro, obrigando o uso do "did/do/is/have" antes do sujeito, criando o formato retórico supremo do inglês nativo (E o "needless to say" garante a autoridade final).'
  ],
  key_contrasts_established: [
    'for instance (exemplo de uma ideia) vs such as (lista direta de substantivos)',
    "in addition (soma neutra em papel) vs what's more (soma emocionada na fala)",
    'although (mesma frase e fluxo constante) vs having said that (pausa longa e quebra de fluxo lógico)',
    'Not only he is (erro coloquial) vs Not only IS HE (norma culta nativa e imponente)'
  ],
  vocabulary_themes: [
    'desempenho e falhas: load, crash, fast, slow, fluent, skilled',
    'gestão e sumarização: tight budget, sum up, try, hire',
    'contratos ocultos: provide, support, transition, needless'
  ],
  connects_to_next: "Batch 9 (dias 57-63): [I was wondering, I'm afraid, it turns out, I ended up, I couldn't help, I can't afford to, I'm looking forward to] — [Abertura do Módulo 6: Alta Frequência. Agora que o aluno já domina Condicionais e Conectores Textuais maduros, ele sai do campo gramatical pesado e entra nos Chunks Idiomáticos do dia a dia nativo; as expressões que encurtam frases e destravam a fala de rua e de escritório]."
}
