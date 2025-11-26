const data = {
  lessons: [
    {
      id: 'l1',
      title: 'Oração – Nossa fé nos reuniu',
      ref: 'Hebreus 11,6-12',
      goal: 'Entender a oração como resposta confiante a Deus e início do caminho da fé.',
      reading: '“Sem fé é impossível agradar a Deus...” (Hb 11,6-12).',
      content: [
        'A oração é diálogo: Deus fala, nós respondemos com fé. Não é fórmula mágica, é relação.',
        'Hebreus recorda patriarcas que creram sem ver; a oração nasce dessa confiança.',
        'A fé reúne e sustenta a comunidade; ninguém caminha sozinho.',
        'Prática: orar diariamente com simplicidade, agradecendo e pedindo luz para o dia.'
      ],
      glossary: [
        { term: 'Fé', def: 'Confiança em Deus que se apoia em sua promessa.' },
        { term: 'Oração', def: 'Diálogo com Deus que envolve escuta e resposta.' },
        { term: 'Promessa', def: 'Aquilo que Deus garante realizar no tempo oportuno.' }
      ],
      quiz: [
        { q: 'O que é oração segundo o curso?', options: ['Fórmula mágica', 'Diálogo com Deus', 'Lista de pedidos', 'Rito obrigatório'], answer: 1 },
        { q: 'Hebreus 11 destaca que sem ______ é impossível agradar a Deus.', options: ['Obras', 'Fé', 'Conhecimento', 'Rituais'], answer: 1 },
        { q: 'A fé nos reúne por quê?', options: ['Uniformiza opiniões', 'Sustenta a comunhão', 'Dispensa a comunidade', 'Evita conflitos'], answer: 1 },
        { q: 'A oração nasce de:', options: ['Medo', 'Culpa', 'Confiança', 'Pressão social'], answer: 2 },
        { q: 'Prática diária sugerida:', options: ['Jejum rigoroso', 'Oração simples e constante', 'Silêncio absoluto', 'Leitura técnica'], answer: 1 },
        { q: 'Diálogo com Deus implica:', options: ['Monólogo', 'Escuta e resposta', 'Intermediários apenas', 'Silêncio forçado'], answer: 1 },
        { q: 'Patriarcas em Hb 11 creram:', options: ['Somente após sinais', 'Sem ver plenamente', 'Por tradição', 'Por conveniência'], answer: 1 },
        { q: 'Oração não é:', options: ['Relação', 'Fórmula mágica', 'Escuta', 'Agradecimento'], answer: 1 },
        { q: 'Comunidade de fé:', options: ['Isola pessoas', 'Forma corpo unido', 'Dispensa ajuda', 'Promove competição'], answer: 1 },
        { q: 'Promessa de Deus é:', options: ['Incertos desejos humanos', 'Garantia no tempo oportuno', 'Superstição', 'Voto político'], answer: 1 },
        { q: 'A fé agrada a Deus porque:', options: ['Controla resultados', 'Confia em sua palavra', 'Evita esforço', 'Impõe ritos'], answer: 1 },
        { q: 'Oração constante gera:', options: ['Cansaço espiritual', 'Intimidade com Deus', 'Racionalismo', 'Indiferença'], answer: 1 },
        { q: 'Rezar em comunidade:', options: ['É opcional irrelevante', 'Enriquece a fé', 'Invalida a oração pessoal', 'Exige uniformidade'], answer: 1 },
        { q: 'A escuta na oração pede:', options: ['Silenciar para ouvir', 'Falar sem parar', 'Música alta', 'Discussão'], answer: 0 },
        { q: 'A fé sem obras é:', options: ['Viva por si', 'Estéril', 'Dispensa conversão', 'Superior à caridade'], answer: 1, tip: 'Conexão com Tg 2,17 (para reflexão pessoal).' },
        { q: 'A gratidão na oração:', options: ['É supérflua', 'Abre o coração', 'Substitui pedido', 'Impede humildade'], answer: 1 },
        { q: 'Intercessão comunitária é:', options: ['Sem valor', 'Sustentação mútua', 'Controle dos outros', 'Rito teatral'], answer: 1 },
        { q: 'Tempo de Deus é:', options: ['Idêntico ao nosso', 'Sempre imediato', 'Oportuno e fiel', 'Imprevisível e cruel'], answer: 2 },
        { q: 'Orar sem ver o resultado é:', options: ['Hipocrisia', 'Fé adulta', 'Ingenuidade', 'Proibido'], answer: 1 },
        { q: 'Rezar apenas ao precisar:', options: ['Completo', 'Reduz relação', 'Ideal', 'Indiferente'], answer: 1 }
      ]
    },
    {
      id: 'l2',
      title: 'Quem é Deus – Santíssima Trindade',
      ref: '1 João 4,12-16',
      goal: 'Introduzir o mistério do Deus único em três Pessoas: Pai, Filho e Espírito Santo.',
      reading: '“Deus é amor...” (1Jo 4,12-16).',
      content: [
        'Deus é amor: não apenas ama, mas é a própria comunhão de amor.',
        'Trindade: um só Deus em três Pessoas — unidade na essência, distinção nas relações.',
        'Somos introduzidos nessa comunhão pelo Espírito, em Cristo, ao Pai.',
        'A caridade é sinal de que permanecemos em Deus.'
      ],
      glossary: [
        { term: 'Trindade', def: 'Deus único em três Pessoas divinas.' },
        { term: 'Pessoa divina', def: 'Pai, Filho e Espírito Santo — relações distintas na mesma natureza.' },
        { term: 'Caridade', def: 'Amor divino vivido concretamente.' }
      ],
      quiz: [
        { q: 'Segundo 1Jo, Deus é:', options: ['Justiça apenas', 'Amor', 'Poder impessoal', 'Destino'], answer: 1 },
        { q: 'Trindade significa:', options: ['Três deuses', 'Um Deus em três Pessoas', 'Um Deus em três modos', 'Um Deus mudando de forma'], answer: 1 },
        { q: 'Distinção na Trindade é de:', options: ['Naturezas diferentes', 'Relações', 'Funções humanas', 'Tempo'], answer: 1 },
        { q: 'Entramos na comunhão trinitária por:', options: ['Moralismo', 'Espírito em Cristo', 'Política', 'Ritos vazios'], answer: 1 },
        { q: 'Caridade indica:', options: ['Medo', 'Permanecer em Deus', 'Orgulho', 'Controle'], answer: 1 },
        { q: 'Pai, Filho e Espírito Santo são:', options: ['Três deuses', 'Uma só natureza divina', 'Criaturas elevadas', 'Anjos'], answer: 1 },
        { q: 'Modalismo seria:', options: ['Doutrina correta', 'Erro: um Deus com “modos”', 'Três naturezas', 'Três vontades humanas'], answer: 1 },
        { q: 'A Trindade é mistério porque:', options: ['É inacessível', 'Supera a razão sem contrariá-la', 'É incoerente', 'É segredo oculto'], answer: 1 },
        { q: 'O Filho é:', options: ['Criatura do Pai', 'Gerado eternamente', 'Mais jovem', 'Inferior'], answer: 1 },
        { q: 'O Espírito Santo procede:', options: ['Do nada', 'Do Pai e do Filho', 'Da criação', 'Da vontade humana'], answer: 1 },
        { q: 'Permanecer em Deus pede:', options: ['Ódio', 'Caridade', 'Controle', 'Vício'], answer: 1 },
        { q: 'A unidade divina é:', options: ['Apenas matemática', 'Comunhão perfeita', 'Competição', 'Soma de vontades'], answer: 1 },
        { q: 'A oração cristã é dirigida ao:', options: ['Pai, por Cristo, no Espírito', 'Apenas ao Filho', 'Apenas ao Espírito', 'A qualquer força'], answer: 0 },
        { q: 'Trindade nega:', options: ['Monoteísmo', 'Politeísmo', 'Revelação', 'Amor'], answer: 1 },
        { q: 'Amor divino vivido é:', options: ['Sentimentalismo', 'Caridade', 'Apego', 'Vício'], answer: 1 },
        { q: 'Filho encarnado é:', options: ['Aparência humana', 'Verdadeiro Deus e homem', 'Anjo especial', 'Mito'], answer: 1 },
        { q: 'Espírito Santo é:', options: ['Energia criada', 'Pessoa divina', 'Metáfora poética', 'Lei moral'], answer: 1 },
        { q: 'Trindade na missão:', options: ['Age separadamente', 'Opera inseparavelmente', 'Compete', 'Alterna poderes'], answer: 1 },
        { q: 'Viver na Trindade implica:', options: ['Isolamento', 'Comunhão e caridade', 'Autossuficiência', 'Neutralidade'], answer: 1 },
        { q: '“Deus é amor” significa:', options: ['Um atributo entre outros', 'Essência divina', 'Força cega', 'Vontade humana'], answer: 1 }
      ]
    },
    {
      id: 'test1',
      title: 'Teste 1 – Após lições 1–2',
      goal: 'Consolidar oração e Trindade.',
      reading: '—',
      content: ['Responda às questões objetivas para avançar.'],
      glossary: [],
      quiz: [
        { q: 'A oração cristã é principalmente:', options: ['Lista de pedidos', 'Diálogo e escuta', 'Rito automático', 'Meditação vazia'], answer: 1 },
        { q: 'Sem fé é impossível:', options: ['Orar', 'Agradar a Deus', 'Participar da missa', 'Ler a Bíblia'], answer: 1 },
        { q: 'A Trindade é:', options: ['Três deuses', 'Um Deus em três Pessoas', 'Um Deus em três fases', 'Metáfora'], answer: 1 },
        { q: 'Caridade é sinal de:', options: ['Força', 'Permanecer em Deus', 'Sucesso', 'Inteligência'], answer: 1 },
        { q: 'O Filho é:', options: ['Criatura do Pai', 'Gerado eternamente', 'Anjo chefe', 'Mito'], answer: 1 },
        { q: 'Oração constante gera:', options: ['Indiferença', 'Intimidade com Deus', 'Culpa', 'Cansaço'], answer: 1 },
        { q: 'Espírito Santo é:', options: ['Lei', 'Pessoa divina', 'Energia criada', 'Força impessoal'], answer: 1 },
        { q: 'Comunidade de fé:', options: ['Dispensável', 'Corpo reunido', 'Competitiva', 'Hierárquica apenas'], answer: 1 },
        { q: 'Modalismo é:', options: ['Ortodoxo', 'Erro teológico', 'Dogma', 'Mandamento'], answer: 1 },
        { q: '“Deus é amor” significa:', options: ['Sentimento humano', 'Essência divina', 'Hábito social', 'Poema'], answer: 1 }
      ]
    },
    {
      id: 'l3',
      title: 'Jesus – Quem é o Filho de Deus?',
      ref: 'João 14,8-11',
      goal: 'Contemplar Jesus como revelação do Pai: quem vê o Filho vê o Pai.',
      reading: '“Quem me viu, viu o Pai...” (Jo 14,8-11).',
      content: [
        'Jesus é o Filho eterno, encarnado por amor para nos revelar o Pai.',
        'Os sinais e palavras de Jesus manifestam o coração de Deus.',
        'Crer em Jesus é acolher sua pessoa, não só seus ensinamentos.',
        'A vida cristã busca conformar-se ao Filho, imagem do Pai.'
      ],
      glossary: [
        { term: 'Encarnação', def: 'O Verbo se fez carne e habitou entre nós.' },
        { term: 'Revelação', def: 'Deus se dá a conhecer por palavras e obras.' },
        { term: 'Cristologia', def: 'Estudo sobre a pessoa e obra de Cristo.' }
      ],
      quiz: [
        { q: '“Quem me viu, viu o Pai” indica:', options: ['Identidade de missão', 'Semelhança moral apenas', 'Metáfora fraca', 'Contradição'], answer: 0 },
        { q: 'Jesus é:', options: ['Anjo superior', 'Filho eterno encarnado', 'Mito', 'Profeta apenas'], answer: 1 },
        { q: 'Crer em Jesus é:', options: ['Adotar técnicas', 'Acolher sua pessoa', 'Imitar costumes', 'Evitar sofrimento'], answer: 1 },
        { q: 'Sinais de Jesus revelam:', options: ['Poder humano', 'Coração do Pai', 'Política', 'Tradição'], answer: 1 },
        { q: 'Encarnação significa:', options: ['Aparência de homem', 'Verbo fez-se carne', 'Possessão espiritual', 'Fábula'], answer: 1 },
        { q: 'Revelação divina ocorre por:', options: ['Palavras e obras', 'Intuição humana', 'Ciência', 'Azar'], answer: 0 },
        { q: 'Imagem do Pai é:', options: ['Pedro', 'Cristo', 'Anjos', 'Profetas',], answer: 1 },
        { q: 'Cristologia estuda:', options: ['Maria', 'A Igreja', 'Cristo', 'Espírito Santo'], answer: 2 },
        { q: 'Acolher Jesus implica:', options: ['Conversão de vida', 'Apenas leitura', 'Debates', 'Neutralidade'], answer: 0 },
        { q: 'Ver o Pai no Filho é:', options: ['Ilusão', 'Confissão de fé', 'Heresia', 'Poética'], answer: 1 },
        { q: 'Obras de Jesus são feitas:', options: ['Separadas do Pai', 'No Pai', 'Contra o Pai', 'Sem sentido'], answer: 1 },
        { q: 'Conhecer Jesus pede:', options: ['Rito sem relação', 'Intimidade e discipulado', 'Apenas estudos', 'Ativismo'], answer: 1 },
        { q: 'O Pai e o Filho:', options: ['Competem', 'São um', 'Discordam', 'Alternam poder'], answer: 1 },
        { q: 'Confessar Jesus como Senhor:', options: ['É político', 'É ato de fé', 'É cultural', 'É opcional'], answer: 1 },
        { q: 'A vida cristã busca:', options: ['Facilidade', 'Conformar-se ao Filho', 'Neutralidade', 'Autossuficiência'], answer: 1 },
        { q: 'Milagres de Jesus são:', options: ['Show', 'Sinais de quem Ele é', 'Votação', 'Magia'], answer: 1 },
        { q: '“Crer pelas obras” (Jo 14) indica:', options: ['Prova racional total', 'Sinais que apontam para a fé', 'Ceticismo', 'Tradição apenas'], answer: 1 },
        { q: 'Jesus revela o Pai porque:', options: ['É enviado do Pai', 'Imita o Pai apenas', 'É rival do Pai', 'É independente'], answer: 0 },
        { q: 'Discípulo de Jesus:', options: ['Segue à distância', 'Segue de perto com obediência', 'Segue ocasionalmente', 'Segue sem cruz'], answer: 1 },
        { q: 'Ver o Pai no Filho combate:', options: ['Politeísmo', 'Indiferença', 'Materialismo', 'Todas as anteriores'], answer: 3 }
      ]
    },
    {
      id: 'l4',
      title: 'Por que Jesus foi crucificado – Pecados',
      ref: 'Lucas 23,33-47',
      goal: 'Reconhecer que Cristo se oferece por nossos pecados, revelando misericórdia e verdade.',
      reading: '“Pai, perdoa-lhes...” (Lc 23,33-47).',
      content: [
        'A cruz é entrega total de Jesus por nós: amor que perdoa e salva.',
        'O pecado fere a relação com Deus e com o próximo; Cristo o carrega e cura.',
        'A misericórdia é maior que nossa culpa; a verdade chama à conversão.',
        'Olhar a cruz transforma: aprende-se a amar até o fim.'
      ],
      glossary: [
        { term: 'Pecado', def: 'Ato que nos separa de Deus e rompe a caridade.' },
        { term: 'Misericórdia', def: 'Amor que perdoa e reergue.' },
        { term: 'Redenção', def: 'Obra de Cristo que nos liberta do pecado.' }
      ],
      quiz: [
        { q: 'A cruz revela:', options: ['Fracasso', 'Amor que salva', 'Política', 'Indiferença'], answer: 1 },
        { q: '“Pai, perdoa-lhes” indica:', options: ['Vingança', 'Misericórdia', 'Desistência', 'Cansaço'], answer: 1 },
        { q: 'Pecado é:', options: ['Erro técnico', 'Separação de Deus', 'Apenas culpa psicológica', 'Lei civil'], answer: 1 },
        { q: 'Cristo carrega nossos pecados para:', options: ['Humilhar-nos', 'Curar-nos', 'Exibir-se', 'Dividir'], answer: 1 },
        { q: 'A verdade chama à:', options: ['Fuga', 'Conversão', 'Orgulho', 'Indiferença'], answer: 1 },
        { q: 'A misericórdia é maior que:', options: ['Nossa culpa', 'Nossos méritos', 'Nossa razão', 'Nossa vontade'], answer: 0 },
        { q: 'Redenção é:', options: ['Autoajuda', 'Libertação por Cristo', 'Esforço humano apenas', 'Lei'], answer: 1 },
        { q: 'Olhar a cruz ensina:', options: ['Ressentimento', 'Amor até o fim', 'Neutralidade', 'Vingança'], answer: 1 },
        { q: 'O bom ladrão reconhece:', options: ['Inocência de Jesus', 'Culpa de todos', 'Poder de Roma', 'Falha do sistema'], answer: 0 },
        { q: 'Confessar pecados é:', options: ['Humilhação vazia', 'Ato de verdade e cura', 'Formalidade', 'Dispensável'], answer: 1 },
        { q: 'O centurião declara:', options: ['O ódio', 'A justiça do inocente', 'A lei', 'A vitória de César'], answer: 1 },
        { q: 'Perdão cristão é:', options: ['Esquecer sem curar', 'Cura com memória reconciliada', 'Negação da dor', 'Vingança controlada'], answer: 1 },
        { q: 'A cruz é centro da fé porque:', options: ['É símbolo antigo', 'É onde Cristo nos salva', 'É tradição cultural', 'É estética'], answer: 1 },
        { q: 'Misericórdia não é:', options: ['Permissão ao mal', 'Amor que reergue', 'Graça', 'Dom'], answer: 0 },
        { q: 'Conversão pede:', options: ['Mudança de vida', 'Apenas remorso', 'Discussões', 'Punição'], answer: 0 },
        { q: 'Cristo inocente sofre por:', options: ['Si mesmo', 'Nós', 'O império', 'Erro'], answer: 1 },
        { q: 'A cruz vence:', options: ['O pecado e a morte', 'A política', 'A cultura', 'A ignorância',], answer: 0 },
        { q: 'Redenção se recebe por:', options: ['Compra', 'Graça mediante fé', 'Voto', 'Esforço isolado'], answer: 1 },
        { q: 'A misericórdia move à:', options: ['Inércia', 'Gratidão e mudança', 'Orgulho', 'Revolta'], answer: 1 },
        { q: 'Amar como Cristo é:', options: ['Impossível sempre', 'Chamado e graça', 'Opcional', 'Romantismo'], answer: 1 }
      ]
    }
  ]
};
const data = {
  lessons: [
    // Lição 1
    { id: 'l1', title: 'Oração – Nossa fé nos reuniu', ref: 'Hebreus 11,6-12', goal: '...', reading: '...', content: [...], glossary: [...], quiz: [...] },

    // Lição 2
    { id: 'l2', title: 'Quem é Deus – Santíssima Trindade', ref: '1 João 4,12-16', goal: '...', reading: '...', content: [...], glossary: [...], quiz: [...] },

    // Teste 1
    { id: 'test1', title: 'Teste 1 – Após lições 1–2', goal: '...', quiz: [...] },

    // Lição 3
    { id: 'l3', title: 'Jesus – Quem é o Filho de Deus?', ref: 'João 14,8-11', ... },

    // Lição 4
    { id: 'l4', title: 'Por que Jesus foi crucificado – Pecados', ref: 'Lucas 23,33-47', ... },

    // Teste 2
    { id: 'test2', title: 'Teste 2 – Após lições 3–4', ... },

    // ... segue até l28 e test14
  ]
};
const data = {
  lessons: [
    {
      id: 'l1',
      title: 'Oração – Nossa fé nos reuniu',
      ref: 'Hebreus 11,6-12',
      goal: 'Entender a oração como resposta confiante a Deus e início do caminho da fé.',
      reading: '“Sem fé é impossível agradar a Deus...” (Hb 11,6-12).',
      content: [
        'A oração é diálogo: Deus fala, nós respondemos com fé.',
        'Hebreus recorda patriarcas que creram sem ver; a oração nasce dessa confiança.',
        'A fé reúne e sustenta a comunidade; ninguém caminha sozinho.',
        'Prática: orar diariamente com simplicidade, agradecendo e pedindo luz para o dia.'
      ],
      glossary: [
        { term: 'Fé', def: 'Confiança em Deus que se apoia em sua promessa.' },
        { term: 'Oração', def: 'Diálogo com Deus que envolve escuta e resposta.' },
        { term: 'Promessa', def: 'Aquilo que Deus garante realizar no tempo oportuno.' }
      ],
      quiz: [
        { q: 'O que é oração segundo o curso?', options: ['Fórmula mágica', 'Diálogo com Deus', 'Lista de pedidos', 'Rito obrigatório'], answer: 1 },
        { q: 'Hebreus 11 destaca que sem ______ é impossível agradar a Deus.', options: ['Obras', 'Fé', 'Conhecimento', 'Rituais'], answer: 1 },
        // ... continue até 20 perguntas (já fornecidas acima)
      ]
    },
    {
      id: 'l2',
      title: 'Quem é Deus – Santíssima Trindade',
      ref: '1 João 4,12-16',
      goal: 'Introduzir o mistério do Deus único em três Pessoas: Pai, Filho e Espírito Santo.',
      reading: '“Deus é amor...” (1Jo 4,12-16).',
      content: [
        'Deus é amor: não apenas ama, mas é a própria comunhão de amor.',
        'Trindade: um só Deus em três Pessoas — unidade na essência, distinção nas relações.',
        'Somos introduzidos nessa comunhão pelo Espírito, em Cristo, ao Pai.',
        'A caridade é sinal de que permanecemos em Deus.'
      ],
      glossary: [
        { term: 'Trindade', def: 'Deus único em três Pessoas divinas.' },
        { term: 'Pessoa divina', def: 'Pai, Filho e Espírito Santo — relações distintas na mesma natureza.' },
        { term: 'Caridade', def: 'Amor divino vivido concretamente.' }
      ],
      quiz: [
        { q: 'Segundo 1Jo, Deus é:', options: ['Justiça apenas', 'Amor', 'Poder impessoal', 'Destino'], answer: 1 },
        { q: 'Trindade significa:', options: ['Três deuses', 'Um Deus em três Pessoas', 'Um Deus em três modos', 'Um Deus mudando de forma'], answer: 1 },
        // ... continue até 20 perguntas
      ]
    },
    {
      id: 'test1',
      title: 'Teste 1 – Após lições 1–2',
      goal: 'Consolidar oração e Trindade.',
      reading: '—',
      content: ['Responda às questões objetivas para avançar.'],
      glossary: [],
      quiz: [
        { q: 'A oração cristã é principalmente:', options: ['Lista de pedidos', 'Diálogo e escuta', 'Rito automático', 'Meditação vazia'], answer: 1 },
        { q: 'Sem fé é impossível:', options: ['Orar', 'Agradar a Deus', 'Participar da missa', 'Ler a Bíblia'], answer: 1 },
        // ... até 10 perguntas
      ]
    },
    {
      id: 'l3',
      title: 'Jesus – Quem é o Filho de Deus?',
      ref: 'João 14,8-11',
      goal: 'Contemplar Jesus como revelação do Pai: quem vê o Filho vê o Pai.',
      reading: '“Quem me viu, viu o Pai...” (Jo 14,8-11).',
      content: [
        'Jesus é o Filho eterno, encarnado por amor para nos revelar o Pai.',
        'Os sinais e palavras de Jesus manifestam o coração de Deus.',
        'Crer em Jesus é acolher sua pessoa, não só seus ensinamentos.',
        'A vida cristã busca conformar-se ao Filho, imagem do Pai.'
      ],
      glossary: [
        { term: 'Encarnação', def: 'O Verbo se fez carne e habitou entre nós.' },
        { term: 'Revelação', def: 'Deus se dá a conhecer por palavras e obras.' },
        { term: 'Cristologia', def: 'Estudo sobre a pessoa e obra de Cristo.' }
      ],
      quiz: [
        { q: '“Quem me viu, viu o Pai” indica:', options: ['Identidade de missão', 'Semelhança moral apenas', 'Metáfora fraca', 'Contradição'], answer: 0 },
        { q: 'Jesus é:', options: ['Anjo superior', 'Filho eterno encarnado', 'Mito', 'Profeta apenas'], answer: 1 },
        // ... até 20 perguntas
      ]
    },
    {
      id: 'l4',
      title: 'Por que Jesus foi crucificado – Pecados',
      ref: 'Lucas 23,33-47',
      goal: 'Reconhecer que Cristo se oferece por nossos pecados, revelando misericórdia e verdade.',
      reading: '“Pai, perdoa-lhes...” (Lc 23,33-47).',
      content: [
        'A cruz é entrega total de Jesus por nós: amor que perdoa e salva.',
        'O pecado fere a relação com Deus e com o próximo; Cristo o carrega e cura.',
        'A misericórdia é maior que nossa culpa; a verdade chama à conversão.',
        'Olhar a cruz transforma: aprende-se a amar até o fim.'
      ],
      glossary: [
        { term: 'Pecado', def: 'Ato que nos separa de Deus e rompe a caridade.' },
        { term: 'Misericórdia', def: 'Amor que perdoa e reergue.' },
        { term: 'Redenção', def: 'Obra de Cristo que nos liberta do pecado.' }
      ],
      quiz: [
        { q: 'A cruz revela:', options: ['Fracasso', 'Amor que salva', 'Política', 'Indiferença'], answer: 1 },
        { q: '“Pai, perdoa-lhes” indica:', options: ['Vingança', 'Misericórdia', 'Desistência', 'Cansaço'], answer: 1 },
        // ... até 20 perguntas
      ]
    },
    {
      id: 'test2',
      title: 'Teste 2 – Após lições 3–4',
      goal: 'Consolidar Cristo Filho e Cruz.',
      reading: '—',
      content: ['Responda às questões objetivas para avançar.'],
      glossary: [],
      quiz: [
        { q: 'Jesus é:', options: ['Filho eterno encarnado', 'Anjo superior', 'Mito', 'Profeta apenas'], answer: 0 },
        { q: 'A cruz é:', options: ['Fracasso', 'Entrega de amor', 'Política', 'Indiferença'], answer: 1 },
        // ... até 10 perguntas
      ]
    }
  ]
};
// Continuação do objeto data
data.lessons.push(
  {
    id: 'l5',
    title: 'Ressurreição de Jesus – Cristo ressuscitou dos mortos?',
    ref: 'João 20,1-10',
    goal: 'Compreender a ressurreição como fundamento da fé cristã.',
    reading: '“Ele não está aqui, ressuscitou...” (Jo 20,1-10).',
    content: [
      'A ressurreição é vitória sobre a morte e confirmação da divindade de Cristo.',
      'Maria Madalena e os discípulos testemunham o túmulo vazio.',
      'A fé pascal nasce do encontro com o Ressuscitado.',
      'Sem ressurreição, a fé seria vã (cf. 1Cor 15,14).'
    ],
    glossary: [
      { term: 'Ressurreição', def: 'Volta à vida gloriosa, não apenas reanimação.' },
      { term: 'Páscoa', def: 'Passagem da morte para a vida em Cristo.' },
      { term: 'Testemunho', def: 'Anúncio da experiência vivida com o Ressuscitado.' }
    ],
    quiz: [
      { q: 'A ressurreição é:', options: ['Reanimação física', 'Vitória sobre a morte', 'Mito', 'Ilusão'], answer: 1 },
      { q: 'Maria Madalena encontra:', options: ['Jesus morto', 'Túmulo vazio', 'Pedro', 'Anjo'], answer: 1 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'l6',
    title: 'Segunda Vinda de Jesus – Jesus voltará? Quando?',
    ref: 'Mateus 24,35-39',
    goal: 'Refletir sobre a promessa da volta de Cristo e a vigilância cristã.',
    reading: '“O céu e a terra passarão, mas minhas palavras não passarão...” (Mt 24,35-39).',
    content: [
      'Jesus promete voltar, mas o dia e a hora ninguém sabe.',
      'A atitude cristã é de vigilância e esperança.',
      'A segunda vinda é chamada de Parusia.',
      'Não é motivo de medo, mas de esperança ativa.'
    ],
    glossary: [
      { term: 'Parusia', def: 'Segunda vinda gloriosa de Cristo.' },
      { term: 'Vigilância', def: 'Estar atento e preparado espiritualmente.' },
      { term: 'Esperança', def: 'Confiança nas promessas de Deus.' }
    ],
    quiz: [
      { q: 'A segunda vinda é chamada:', options: ['Êxodo', 'Parusia', 'Pentecostes', 'Apocalipse'], answer: 1 },
      { q: 'O dia da volta de Cristo:', options: ['É conhecido', 'Ninguém sabe', 'Foi revelado', 'É previsível'], answer: 1 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'test3',
    title: 'Teste 3 – Após lições 5–6',
    goal: 'Consolidar Ressurreição e Segunda Vinda.',
    quiz: [
      { q: 'A ressurreição confirma:', options: ['Divindade de Cristo', 'Mito', 'Política', 'Tradição'], answer: 0 },
      { q: 'Parusia significa:', options: ['Primeira vinda', 'Segunda vinda', 'Pentecostes', 'Êxodo'], answer: 1 },
      // ... até 10 perguntas
    ]
  },
  {
    id: 'l7',
    title: 'Maria, Mãe de Deus',
    ref: 'João 19,25-27',
    goal: 'Reconhecer Maria como mãe de Jesus e mãe espiritual da Igreja.',
    reading: '“Eis aí tua mãe...” (Jo 19,25-27).',
    content: [
      'Maria é chamada Mãe de Deus porque gerou Jesus, verdadeiro Deus e homem.',
      'Na cruz, Jesus entrega Maria como mãe ao discípulo amado.',
      'Maria é modelo de fé e obediência.',
      'A devoção mariana conduz sempre a Cristo.'
    ],
    glossary: [
      { term: 'Theotokos', def: 'Título grego: Mãe de Deus.' },
      { term: 'Discípulo amado', def: 'Figura que representa todos os discípulos.' },
      { term: 'Devoção mariana', def: 'Amor e confiança em Maria que leva a Cristo.' }
    ],
    quiz: [
      { q: 'Maria é chamada Mãe de Deus porque:', options: ['Gerou Jesus verdadeiro Deus e homem', 'É deusa', 'É mito', 'É símbolo'], answer: 0 },
      { q: 'Na cruz, Jesus entrega Maria a:', options: ['Pedro', 'Discípulo amado', 'João Batista', 'Anjo'], answer: 1 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'l8',
    title: 'Igreja Católica – História',
    ref: 'Atos 2,42-47',
    goal: 'Entender a origem da Igreja e sua missão.',
    reading: '“Perseveravam na doutrina dos apóstolos...” (At 2,42-47).',
    content: [
      'A Igreja nasce de Pentecostes, animada pelo Espírito Santo.',
      'Os primeiros cristãos viviam em comunhão, oração e partilha.',
      'A missão da Igreja é anunciar o Evangelho e servir.',
      'A Igreja é corpo de Cristo no mundo.'
    ],
    glossary: [
      { term: 'Pentecostes', def: 'Descida do Espírito Santo sobre os apóstolos.' },
      { term: 'Comunhão', def: 'Vida partilhada na fé e nos bens.' },
      { term: 'Missão', def: 'Anúncio e serviço em nome de Cristo.' }
    ],
    quiz: [
      { q: 'A Igreja nasce em:', options: ['Natal', 'Pentecostes', 'Páscoa', 'Tradição'], answer: 1 },
      { q: 'Os primeiros cristãos viviam em:', options: ['Isolamento', 'Comunhão e oração', 'Política', 'Comércio'], answer: 1 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'test4',
    title: 'Teste 4 – Após lições 7–8',
    goal: 'Consolidar Maria e Igreja.',
    quiz: [
      { q: 'Maria é Mãe de Deus porque:', options: ['Gerou Jesus verdadeiro Deus e homem', 'É mito', 'É símbolo', 'É deusa'], answer: 0 },
      { q: 'A Igreja nasce em:', options: ['Pentecostes', 'Natal', 'Páscoa', 'Tradição'], answer: 0 },
      // ... até 10 perguntas
    ]
  }
);
// Continuação do objeto data
data.lessons.push(
  {
    id: 'l9',
    title: 'Somos Igreja',
    ref: 'Mateus 16,13-19',
    goal: 'Entender que a Igreja é comunidade fundada por Cristo.',
    reading: '“Tu és Pedro, e sobre esta pedra edificarei a minha Igreja...” (Mt 16,13-19).',
    content: [
      'Jesus confia a Pedro a missão de liderar a Igreja.',
      'A Igreja é formada por todos os batizados, unidos em Cristo.',
      'Somos pedras vivas que edificam o corpo de Cristo.',
      'A missão é anunciar o Evangelho e viver a comunhão.'
    ],
    glossary: [
      { term: 'Pedro', def: 'Apóstolo escolhido como fundamento visível da Igreja.' },
      { term: 'Comunidade', def: 'Conjunto dos fiéis unidos em Cristo.' },
      { term: 'Missão', def: 'Anúncio e testemunho da fé.' }
    ],
    quiz: [
      { q: 'Jesus confia a missão a:', options: ['João', 'Pedro', 'Tiago', 'Paulo'], answer: 1 },
      { q: 'A Igreja é formada por:', options: ['Clero apenas', 'Todos os batizados', 'Governos', 'Anjos'], answer: 1 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'l9b',
    title: 'Cerco de Jericó – Participar',
    ref: 'Josué 6 (contexto)',
    goal: 'Vivenciar a oração comunitária intensa como experiência de fé.',
    reading: 'O povo de Israel rodeou Jericó em oração e confiança.',
    content: [
      'O Cerco de Jericó é prática de oração perseverante.',
      'Participar significa unir-se em louvor e súplica.',
      'É experiência de fé comunitária que fortalece a Igreja.',
      'Recorda que Deus derruba muralhas espirituais.'
    ],
    glossary: [
      { term: 'Cerco de Jericó', def: 'Sete dias de oração intensa e perseverante.' },
      { term: 'Louvor', def: 'Exaltação a Deus pela sua grandeza.' },
      { term: 'Súplica', def: 'Pedido humilde diante de Deus.' }
    ],
    quiz: [
      { q: 'O Cerco de Jericó recorda:', options: ['Vitória militar', 'Oração perseverante', 'Tradição cultural', 'Política'], answer: 1 },
      { q: 'Participar significa:', options: ['Isolar-se', 'Unir-se em oração', 'Debater', 'Fugir'], answer: 1 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'l10',
    title: 'Quem é o Espírito Santo?',
    ref: 'João 14,15-21',
    goal: 'Reconhecer o Espírito Santo como consolador e guia da Igreja.',
    reading: '“Eu rogarei ao Pai, e ele vos dará outro Consolador...” (Jo 14,15-21).',
    content: [
      'O Espírito Santo é a terceira Pessoa da Trindade.',
      'Ele consola, guia e fortalece os fiéis.',
      'É presença permanente de Deus na Igreja.',
      'Nos conduz à verdade plena.'
    ],
    glossary: [
      { term: 'Consolador', def: 'Título dado ao Espírito Santo.' },
      { term: 'Guia', def: 'Aquele que conduz à verdade.' },
      { term: 'Pentecostes', def: 'Manifestação do Espírito sobre os apóstolos.' }
    ],
    quiz: [
      { q: 'O Espírito Santo é:', options: ['Energia', 'Pessoa divina', 'Anjo', 'Símbolo'], answer: 1 },
      { q: 'Ele é chamado de:', options: ['Consolador', 'Juiz', 'Servo', 'Profeta'], answer: 0 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'test5',
    title: 'Teste 5 – Após lições 9–10',
    goal: 'Consolidar Igreja e Espírito Santo.',
    quiz: [
      { q: 'A Igreja é formada por:', options: ['Todos os batizados', 'Clero apenas', 'Governos', 'Anjos'], answer: 0 },
      { q: 'O Espírito Santo é:', options: ['Pessoa divina', 'Energia', 'Símbolo', 'Anjo'], answer: 0 },
      // ... até 10 perguntas
    ]
  },
  {
    id: 'l11',
    title: 'Eucaristia e Milagres Eucarísticos',
    ref: 'Lucas 22,14-20',
    goal: 'Compreender a Eucaristia como presença real de Cristo.',
    reading: '“Isto é o meu corpo... este é o cálice da nova aliança...” (Lc 22,14-20).',
    content: [
      'Na última ceia, Jesus institui a Eucaristia.',
      'É memorial da paixão, morte e ressurreição.',
      'Milagres eucarísticos confirmam a fé na presença real.',
      'Participar da missa é viver este mistério.'
    ],
    glossary: [
      { term: 'Eucaristia', def: 'Sacramento do corpo e sangue de Cristo.' },
      { term: 'Presença real', def: 'Cristo está verdadeiramente presente no pão e vinho.' },
      { term: 'Milagres eucarísticos', def: 'Sinais extraordinários que confirmam a fé.' }
    ],
    quiz: [
      { q: 'Jesus institui a Eucaristia na:', options: ['Última Ceia', 'Pentecostes', 'Batismo', 'Multiplicação dos pães'], answer: 0 },
      { q: 'A Eucaristia é:', options: ['Memorial da paixão e ressurreição', 'Símbolo vazio', 'Tradição cultural', 'Apenas refeição'], answer: 0 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'l12',
    title: 'Missa parte a parte',
    ref: 'Atos 2,42',
    goal: 'Conhecer a estrutura da missa e seu significado.',
    reading: '“Perseveravam na fração do pão...” (At 2,42).',
    content: [
      'A missa tem duas partes principais: Liturgia da Palavra e Liturgia Eucarística.',
      'Cada gesto e oração tem sentido profundo.',
      'Participar ativamente é essencial.',
      'A missa é centro da vida cristã.'
    ],
    glossary: [
      { term: 'Liturgia da Palavra', def: 'Parte da missa com leituras e homilia.' },
      { term: 'Liturgia Eucarística', def: 'Parte da missa com consagração e comunhão.' },
      { term: 'Participação ativa', def: 'Responder, cantar e rezar junto.' }
    ],
    quiz: [
      { q: 'A missa tem duas partes principais:', options: ['Liturgia da Palavra e Eucarística', 'Louvor e oração', 'Canto e silêncio', 'Jejum e festa'], answer: 0 },
      { q: 'Participar da missa é:', options: ['Opcional', 'Essencial', 'Dispensável', 'Formalidade'], answer: 1 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'test6',
    title: 'Teste 6 – Após lições 11–12',
    goal: 'Consolidar Eucaristia e Missa.',
    quiz: [
      { q: 'A Eucaristia foi instituída na:', options: ['Última Ceia', 'Pentecostes', 'Batismo', 'Multiplicação dos pães'], answer: 0 },
      { q: 'A missa tem duas partes principais:', options: ['Liturgia da Palavra e Eucarística', 'Louvor e oração', 'Canto e silêncio', 'Jejum e festa'], answer: 0 },
      // ... até 10 perguntas
    ]
  }
);
// Continuação do objeto data
data.lessons.push(
  {
    id: 'l13',
    title: 'Missa – atividade da tarde',
    ref: '—',
    goal: 'Vivenciar a missa com dinâmica e objetos litúrgicos.',
    reading: 'A missa é celebração da comunidade reunida em Cristo.',
    content: [
      'A missa é encontro com Cristo vivo.',
      'Objetos litúrgicos (cálice, patena, altar) têm significado profundo.',
      'Dinâmicas ajudam a compreender cada parte da celebração.',
      'Participar é viver a fé de forma concreta.'
    ],
    glossary: [
      { term: 'Cálice', def: 'Recipiente para o vinho consagrado.' },
      { term: 'Patena', def: 'Prato para o pão consagrado.' },
      { term: 'Altar', def: 'Mesa da celebração eucarística.' }
    ],
    quiz: [
      { q: 'A missa é:', options: ['Encontro com Cristo vivo', 'Apenas tradição', 'Evento social', 'Formalidade'], answer: 0 },
      { q: 'O cálice serve para:', options: ['Água', 'Vinho consagrado', 'Óleo', 'Incenso'], answer: 1 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'rev1',
    title: 'Revisão e jogos',
    ref: 'João 15,15',
    goal: 'Revisar conteúdos com atividades lúdicas.',
    reading: '“Já não vos chamo servos, mas amigos...” (Jo 15,15).',
    content: [
      'Jogos de perguntas e respostas reforçam o aprendizado.',
      'Dinâmicas de grupo fortalecem a comunhão.',
      'Revisão prepara para a prova.'
    ],
    glossary: [
      { term: 'Revisão', def: 'Retomar conteúdos já estudados.' },
      { term: 'Dinâmica', def: 'Atividade prática e participativa.' },
      { term: 'Comunhão', def: 'Unidade entre os fiéis.' }
    ],
    quiz: [
      { q: 'Revisão ajuda a:', options: ['Esquecer', 'Fixar conteúdos', 'Evitar estudo', 'Dispersar'], answer: 1 },
      { q: 'Jogos de perguntas servem para:', options: ['Competição', 'Reforço do aprendizado', 'Entretenimento vazio', 'Nada'], answer: 1 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'exam1',
    title: 'Prova 1',
    ref: 'João 15,13',
    goal: 'Avaliar conteúdos das lições 1–13.',
    reading: '“Ninguém tem maior amor do que dar a vida...” (Jo 15,13).',
    content: [
      'Prova objetiva com 20–30 questões.',
      'Abrange oração, Trindade, Cristo, cruz, ressurreição, Igreja, Espírito Santo, Eucaristia e Missa.'
    ],
    glossary: [],
    quiz: [
      { q: 'Jesus é:', options: ['Filho eterno encarnado', 'Anjo', 'Mito', 'Profeta apenas'], answer: 0 },
      { q: 'A Igreja nasce em:', options: ['Pentecostes', 'Natal', 'Páscoa', 'Tradição'], answer: 0 },
      // ... até 30 perguntas
    ]
  },
  {
    id: 'l14',
    title: 'Sacramentos da Iniciação',
    ref: 'Mt 28,19; At 8,12-17; Mt 26,27-28',
    goal: 'Conhecer batismo, crisma e eucaristia como sacramentos de iniciação.',
    reading: '“Ide e fazei discípulos, batizando-os...” (Mt 28,19).',
    content: [
      'Batismo: porta da fé.',
      'Crisma: confirmação no Espírito Santo.',
      'Eucaristia: alimento espiritual.',
      'São fundamentos da vida cristã.'
    ],
    glossary: [
      { term: 'Batismo', def: 'Sacramento que nos torna filhos de Deus.' },
      { term: 'Crisma', def: 'Sacramento da confirmação no Espírito Santo.' },
      { term: 'Eucaristia', def: 'Sacramento do corpo e sangue de Cristo.' }
    ],
    quiz: [
      { q: 'Sacramentos da iniciação são:', options: ['Batismo, Crisma, Eucaristia', 'Batismo, Ordem, Matrimônio', 'Crisma, Penitência, Unção', 'Eucaristia, Ordem, Matrimônio'], answer: 0 },
      { q: 'Batismo nos torna:', options: ['Filhos de Deus', 'Servos', 'Anjos', 'Profetas'], answer: 0 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'l15',
    title: 'Sacramentos da Cura',
    ref: 'João 20,21-23; Tiago 5,14-15',
    goal: 'Conhecer penitência e unção dos enfermos como sacramentos de cura.',
    reading: '“Recebei o Espírito Santo. A quem perdoardes os pecados...” (Jo 20,21-23).',
    content: [
      'Penitência: reconciliação com Deus e a Igreja.',
      'Unção dos enfermos: conforto e cura espiritual.',
      'São sinais da misericórdia de Deus.',
      'Fortalecem na fraqueza e no sofrimento.'
    ],
    glossary: [
      { term: 'Penitência', def: 'Sacramento do perdão dos pecados.' },
      { term: 'Unção dos enfermos', def: 'Sacramento de conforto espiritual e físico.' },
      { term: 'Reconciliação', def: 'Restabelecimento da amizade com Deus.' }
    ],
    quiz: [
      { q: 'Sacramentos da cura são:', options: ['Penitência e Unção dos enfermos', 'Batismo e Crisma', 'Ordem e Matrimônio', 'Eucaristia e Batismo'], answer: 0 },
      { q: 'Penitência concede:', options: ['Perdão dos pecados', 'Riqueza', 'Saúde física apenas', 'Conhecimento'], answer: 0 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'test7',
    title: 'Teste 7 – Após lições 14–15',
    goal: 'Consolidar sacramentos da iniciação e da cura.',
    quiz: [
      { q: 'Sacramentos da iniciação são:', options: ['Batismo, Crisma, Eucaristia', 'Batismo, Ordem, Matrimônio', 'Crisma, Penitência, Unção', 'Eucaristia, Ordem, Matrimônio'], answer: 0 },
      { q: 'Sacramentos da cura são:', options: ['Penitência e Unção dos enfermos', 'Batismo e Crisma', 'Ordem e Matrimônio', 'Eucaristia e Batismo'], answer: 0 },
      // ... até 10 perguntas
    ]
  }
);
// Continuação do objeto data
data.lessons.push(
  {
    id: 'l16',
    title: 'Sacramentos do Serviço',
    ref: '2Tm 1,6; At 14,22; Mt 19,6',
    goal: 'Conhecer ordem e matrimônio como sacramentos de serviço.',
    reading: '“Reaviva o dom de Deus que está em ti...” (2Tm 1,6).',
    content: [
      'Ordem: sacramento que confere ministério aos bispos, padres e diáconos.',
      'Matrimônio: união sacramental entre homem e mulher.',
      'Ambos são serviço à comunidade e à vida.',
      'São sinais da entrega e do amor de Deus.'
    ],
    glossary: [
      { term: 'Ordem', def: 'Sacramento que confere ministério e missão na Igreja.' },
      { term: 'Matrimônio', def: 'Sacramento da união entre homem e mulher.' },
      { term: 'Serviço', def: 'Entrega em favor da comunidade.' }
    ],
    quiz: [
      { q: 'Sacramentos do serviço são:', options: ['Ordem e Matrimônio', 'Batismo e Crisma', 'Penitência e Unção', 'Eucaristia e Batismo'], answer: 0 },
      { q: 'Ordem confere:', options: ['Ministério aos bispos, padres e diáconos', 'Riqueza', 'Saúde', 'Conhecimento'], answer: 0 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'l17',
    title: 'Bíblia – Antigo Testamento',
    ref: 'Salmos 119,105',
    goal: 'Conhecer a importância do Antigo Testamento.',
    reading: '“Tua palavra é lâmpada para os meus pés...” (Sl 119,105).',
    content: [
      'O Antigo Testamento contém a história da salvação antes de Cristo.',
      'Inclui a Lei, os Profetas e os Escritos.',
      'Mostra a preparação para a vinda do Messias.',
      'É palavra de Deus inspirada.'
    ],
    glossary: [
      { term: 'Lei', def: 'Torá, primeiros cinco livros da Bíblia.' },
      { term: 'Profetas', def: 'Livros que anunciam a vontade de Deus.' },
      { term: 'Escritos', def: 'Salmos, Provérbios e outros textos.' }
    ],
    quiz: [
      { q: 'O Antigo Testamento contém:', options: ['História da salvação antes de Cristo', 'Somente o Novo Testamento', 'Cartas de Paulo', 'Evangelhos'], answer: 0 },
      { q: 'A Torá é:', options: ['Primeiros cinco livros da Bíblia', 'Salmos', 'Profetas', 'Cartas'], answer: 0 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'l18',
    title: 'Bíblia – Novo Testamento',
    ref: '2 Pedro 1,20-21',
    goal: 'Conhecer a importância do Novo Testamento.',
    reading: '“Nenhuma profecia é de interpretação particular...” (2Pd 1,20-21).',
    content: [
      'O Novo Testamento contém os Evangelhos, Atos, Cartas e Apocalipse.',
      'Revela a vida, morte e ressurreição de Jesus.',
      'Mostra a missão da Igreja nascente.',
      'É palavra inspirada pelo Espírito Santo.'
    ],
    glossary: [
      { term: 'Evangelhos', def: 'Narrativas da vida e ensinamentos de Jesus.' },
      { term: 'Atos dos Apóstolos', def: 'História da Igreja primitiva.' },
      { term: 'Cartas', def: 'Escritos dos apóstolos às comunidades.' }
    ],
    quiz: [
      { q: 'O Novo Testamento contém:', options: ['Evangelhos, Atos, Cartas, Apocalipse', 'Somente o Antigo Testamento', 'Salmos', 'Provérbios'], answer: 0 },
      { q: 'Os Evangelhos narram:', options: ['Vida e ensinamentos de Jesus', 'História de Moisés', 'Profetas', 'Salmos'], answer: 0 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'test8',
    title: 'Teste 8 – Após lições 17–18',
    goal: 'Consolidar Antigo e Novo Testamento.',
    quiz: [
      { q: 'O Antigo Testamento contém:', options: ['História da salvação antes de Cristo', 'Somente o Novo Testamento', 'Cartas de Paulo', 'Evangelhos'], answer: 0 },
      { q: 'O Novo Testamento contém:', options: ['Evangelhos, Atos, Cartas, Apocalipse', 'Somente o Antigo Testamento', 'Salmos', 'Provérbios'], answer: 0 },
      // ... até 10 perguntas
    ]
  }
);
// Continuação do objeto data
data.lessons.push(
  {
    id: 'l19',
    title: 'Os 10 Mandamentos – 1º, 2º, 3º',
    ref: 'Êxodo 34,27-29',
    goal: 'Compreender os três primeiros mandamentos como relação direta com Deus.',
    reading: '“Escreve estas palavras, pois é com elas que faço aliança contigo...” (Ex 34,27-29).',
    content: [
      '1º Mandamento: Amar a Deus sobre todas as coisas.',
      '2º Mandamento: Não tomar seu santo nome em vão.',
      '3º Mandamento: Guardar domingos e festas.',
      'São mandamentos que regulam nossa relação com Deus.'
    ],
    glossary: [
      { term: 'Mandamento', def: 'Lei dada por Deus a Moisés.' },
      { term: 'Culto', def: 'Adoração e respeito a Deus.' },
      { term: 'Profanação', def: 'Uso indevido do nome de Deus.' }
    ],
    quiz: [
      { q: 'O 1º mandamento é:', options: ['Amar a Deus sobre todas as coisas', 'Não matar', 'Não roubar', 'Honrar pai e mãe'], answer: 0 },
      { q: 'O 2º mandamento proíbe:', options: ['Tomar o nome de Deus em vão', 'Roubar', 'Matar', 'Mentir'], answer: 0 },
      { q: 'O 3º mandamento manda:', options: ['Guardar domingos e festas', 'Honrar pai e mãe', 'Não cobiçar', 'Não adulterar'], answer: 0 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'l20',
    title: 'Os 10 Mandamentos – 4º e 5º; Dogmas Marianos, Nossa Senhora e São José',
    ref: 'Êxodo 20,12; Salmos 139,13-16; Lucas 1,26-28',
    goal: 'Compreender o valor da vida e da família, e refletir sobre Maria e José.',
    reading: '“Honra teu pai e tua mãe...” (Ex 20,12).',
    content: [
      '4º Mandamento: Honrar pai e mãe.',
      '5º Mandamento: Não matar – valor da vida.',
      'Maria é Mãe de Deus, José é guardião da Sagrada Família.',
      'Dogmas marianos confirmam a fé na maternidade divina.'
    ],
    glossary: [
      { term: 'Dogma', def: 'Verdade de fé proclamada pela Igreja.' },
      { term: 'Honra', def: 'Respeito e amor aos pais.' },
      { term: 'Vida', def: 'Dom sagrado de Deus.' }
    ],
    quiz: [
      { q: 'O 4º mandamento é:', options: ['Honrar pai e mãe', 'Não matar', 'Não roubar', 'Não mentir'], answer: 0 },
      { q: 'O 5º mandamento é:', options: ['Não matar', 'Não roubar', 'Não cobiçar', 'Não adulterar'], answer: 0 },
      { q: 'Maria é chamada:', options: ['Mãe de Deus', 'Deusa', 'Símbolo', 'Profeta'], answer: 0 },
      { q: 'José é:', options: ['Guardião da Sagrada Família', 'Profeta', 'Apóstolo', 'Rei'], answer: 0 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'l21',
    title: 'Os 10 Mandamentos – 6º e 9º',
    ref: 'Mateus 5,27-28',
    goal: 'Refletir sobre a pureza e fidelidade nos relacionamentos.',
    reading: '“Quem olhar para uma mulher com desejo já cometeu adultério...” (Mt 5,27-28).',
    content: [
      '6º Mandamento: Não cometer adultério.',
      '9º Mandamento: Não cobiçar a mulher do próximo.',
      'Chamado à pureza e fidelidade.',
      'A sexualidade é dom de Deus para o amor verdadeiro.'
    ],
    glossary: [
      { term: 'Adultério', def: 'Infidelidade conjugal.' },
      { term: 'Cobiça', def: 'Desejo desordenado pelo que pertence ao outro.' },
      { term: 'Pureza', def: 'Vivência da sexualidade segundo o plano de Deus.' }
    ],
    quiz: [
      { q: 'O 6º mandamento é:', options: ['Não cometer adultério', 'Não roubar', 'Não matar', 'Não mentir'], answer: 0 },
      { q: 'O 9º mandamento é:', options: ['Não cobiçar a mulher do próximo', 'Não roubar', 'Não matar', 'Não adulterar'], answer: 0 },
      { q: 'A sexualidade é:', options: ['Dom de Deus', 'Erro humano', 'Tabu', 'Indiferença'], answer: 0 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'test9',
    title: 'Teste 9 – Após lições 19–21',
    goal: 'Consolidar os mandamentos 1º–3º, 4º–5º e 6º–9º.',
    quiz: [
      { q: 'O 1º mandamento é:', options: ['Amar a Deus sobre todas as coisas', 'Não matar', 'Não roubar', 'Honrar pai e mãe'], answer: 0 },
      { q: 'O 4º mandamento é:', options: ['Honrar pai e mãe', 'Não matar', 'Não roubar', 'Não mentir'], answer: 0 },
      { q: 'O 6º mandamento é:', options: ['Não cometer adultério', 'Não roubar', 'Não matar', 'Não mentir'], answer: 0 },
      // ... até 10 perguntas
    ]
  }
);
// Continuação do objeto data
data.lessons.push(
  {
    id: 'l22',
    title: 'Os 10 Mandamentos – 7º, 8º, 10º',
    ref: 'Romanos 13,9',
    goal: 'Compreender os mandamentos que regulam nossa relação com o próximo.',
    reading: '“Não cometerás adultério, não matarás, não roubarás...” (Rm 13,9).',
    content: [
      '7º Mandamento: Não roubar.',
      '8º Mandamento: Não levantar falso testemunho.',
      '10º Mandamento: Não cobiçar as coisas alheias.',
      'São mandamentos que protegem a justiça e a caridade entre os homens.'
    ],
    glossary: [
      { term: 'Roubo', def: 'Apropriação indevida do que pertence ao outro.' },
      { term: 'Falso testemunho', def: 'Mentira que prejudica o próximo.' },
      { term: 'Cobiça', def: 'Desejo desordenado pelos bens dos outros.' }
    ],
    quiz: [
      { q: 'O 7º mandamento é:', options: ['Não roubar', 'Não matar', 'Não adulterar', 'Não mentir'], answer: 0 },
      { q: 'O 8º mandamento é:', options: ['Não levantar falso testemunho', 'Não roubar', 'Não matar', 'Não cobiçar'], answer: 0 },
      { q: 'O 10º mandamento é:', options: ['Não cobiçar as coisas alheias', 'Não roubar', 'Não matar', 'Não adulterar'], answer: 0 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'l23',
    title: 'Intercessão – Os Santos rezam por nós?',
    ref: 'Atos 7,52-60',
    goal: 'Refletir sobre a intercessão dos santos como parte da comunhão da Igreja.',
    reading: '“Senhor Jesus, recebe o meu espírito...” (At 7,59).',
    content: [
      'Os santos são nossos irmãos que já vivem junto de Deus.',
      'A Igreja crê na comunhão dos santos: união entre vivos e mortos em Cristo.',
      'A intercessão é pedir que eles rezem por nós diante de Deus.',
      'Não substitui a oração direta a Deus, mas fortalece a comunhão.'
    ],
    glossary: [
      { term: 'Intercessão', def: 'Pedido feito em favor de alguém.' },
      { term: 'Comunhão dos santos', def: 'Unidade espiritual entre todos os fiéis.' },
      { term: 'Mártir', def: 'Testemunha que dá a vida por Cristo.' }
    ],
    quiz: [
      { q: 'Os santos são:', options: ['Deuses', 'Irmãos que vivem junto de Deus', 'Anjos', 'Símbolos'], answer: 1 },
      { q: 'Comunhão dos santos significa:', options: ['Isolamento', 'Unidade espiritual entre fiéis', 'Tradição cultural', 'Hierarquia'], answer: 1 },
      { q: 'Intercessão é:', options: ['Pedido em favor de alguém', 'Mandamento', 'Dogma mariano', 'Profecia'], answer: 0 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'test10',
    title: 'Teste 10 – Após lições 22–23',
    goal: 'Consolidar mandamentos 7º–10º e intercessão dos santos.',
    quiz: [
      { q: 'O 7º mandamento é:', options: ['Não roubar', 'Não matar', 'Não adulterar', 'Não mentir'], answer: 0 },
      { q: 'O 8º mandamento é:', options: ['Não levantar falso testemunho', 'Não roubar', 'Não matar', 'Não cobiçar'], answer: 0 },
      { q: 'Os santos são:', options: ['Irmãos que vivem junto de Deus', 'Deuses', 'Símbolos', 'Anjos'], answer: 0 },
      // ... até 10 perguntas
    ]
  }
);
// Continuação do objeto data
data.lessons.push(
  {
    id: 'l24',
    title: 'Santos – Heróis da fé',
    ref: 'Atos 7,51-60',
    goal: 'Conhecer os santos como testemunhas vivas da fé.',
    reading: '“Eis que vejo os céus abertos...” (At 7,56).',
    content: [
      'Os santos são homens e mulheres que viveram a fé de forma exemplar.',
      'Estêvão é o primeiro mártir, testemunhando até a morte.',
      'A santidade é chamada universal: todos são convidados a viver em Cristo.',
      'Os santos inspiram e intercedem por nós.'
    ],
    glossary: [
      { term: 'Mártir', def: 'Aquele que dá a vida por Cristo.' },
      { term: 'Santidade', def: 'Chamado de viver em união com Deus.' },
      { term: 'Testemunho', def: 'Vida que anuncia Cristo com palavras e obras.' }
    ],
    quiz: [
      { q: 'Estêvão é conhecido como:', options: ['Primeiro mártir', 'Apóstolo', 'Profeta', 'Rei'], answer: 0 },
      { q: 'Santidade é:', options: ['Chamado universal', 'Privilégio de poucos', 'Mito', 'Tradição'], answer: 0 },
      { q: 'Os santos são:', options: ['Testemunhas vivas da fé', 'Deuses', 'Símbolos', 'Anjos'], answer: 0 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'l25',
    title: 'Os Anjos',
    ref: 'Apocalipse 12,7-9',
    goal: 'Compreender o papel dos anjos como mensageiros e servidores de Deus.',
    reading: '“Houve então uma batalha no céu...” (Ap 12,7).',
    content: [
      'Anjos são criaturas espirituais criadas por Deus.',
      'São mensageiros e servidores da vontade divina.',
      'Miguel é apresentado como defensor do povo de Deus.',
      'Os anjos nos acompanham e protegem.'
    ],
    glossary: [
      { term: 'Anjo', def: 'Mensageiro espiritual de Deus.' },
      { term: 'Arcanjo Miguel', def: 'Defensor do povo de Deus.' },
      { term: 'Proteção', def: 'Cuidado espiritual dos anjos sobre os fiéis.' }
    ],
    quiz: [
      { q: 'Anjos são:', options: ['Criaturas espirituais', 'Deuses', 'Símbolos', 'Humanos'], answer: 0 },
      { q: 'Miguel é:', options: ['Arcanjo defensor', 'Profeta', 'Apóstolo', 'Rei'], answer: 0 },
      { q: 'Função dos anjos é:', options: ['Mensageiros e servidores de Deus', 'Governar', 'Julgar', 'Criar'], answer: 0 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'test11',
    title: 'Teste 11 – Após lições 24–25',
    goal: 'Consolidar santos e anjos.',
    quiz: [
      { q: 'Estêvão é:', options: ['Primeiro mártir', 'Apóstolo', 'Profeta', 'Rei'], answer: 0 },
      { q: 'Anjos são:', options: ['Criaturas espirituais', 'Deuses', 'Símbolos', 'Humanos'], answer: 0 },
      { q: 'Miguel é:', options: ['Arcanjo defensor', 'Profeta', 'Apóstolo', 'Rei'], answer: 0 },
      // ... até 10 perguntas
    ]
  }
);
// Continuação do objeto data
data.lessons.push(
  {
    id: 'l26',
    title: 'O Espírito Santo – O Dom de Deus',
    ref: 'Atos 2,1-11',
    goal: 'Reconhecer o Espírito Santo como dom que fortalece e guia a Igreja.',
    reading: '“Todos ficaram cheios do Espírito Santo...” (At 2,4).',
    content: [
      'No Pentecostes, o Espírito Santo desceu sobre os apóstolos.',
      'Ele concede dons e carismas para a missão da Igreja.',
      'É presença viva de Deus que anima e fortalece.',
      'O Espírito Santo é dom gratuito que nos santifica.'
    ],
    glossary: [
      { term: 'Pentecostes', def: 'Descida do Espírito Santo sobre os apóstolos.' },
      { term: 'Dom', def: 'Graça gratuita concedida por Deus.' },
      { term: 'Carisma', def: 'Dons especiais para o serviço da comunidade.' }
    ],
    quiz: [
      { q: 'No Pentecostes, os apóstolos ficaram:', options: ['Cheios do Espírito Santo', 'Tristes', 'Confusos', 'Indiferentes'], answer: 0 },
      { q: 'O Espírito Santo concede:', options: ['Dons e carismas', 'Riqueza', 'Poder político', 'Saúde física'], answer: 0 },
      { q: 'O Espírito Santo é:', options: ['Dom gratuito de Deus', 'Energia criada', 'Símbolo', 'Anjo'], answer: 0 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'l27',
    title: 'Tempo litúrgico e o Natal',
    ref: 'Lucas 1,30-33',
    goal: 'Compreender o tempo litúrgico e o mistério do Natal.',
    reading: '“Conceberás e darás à luz um filho...” (Lc 1,31).',
    content: [
      'O tempo litúrgico organiza a vida da Igreja ao longo do ano.',
      'O Natal celebra a encarnação do Filho de Deus.',
      'É tempo de alegria e esperança.',
      'Cada tempo litúrgico tem cor, símbolos e espiritualidade própria.'
    ],
    glossary: [
      { term: 'Tempo litúrgico', def: 'Ciclo anual de celebrações da Igreja.' },
      { term: 'Natal', def: 'Festa da encarnação de Jesus.' },
      { term: 'Advento', def: 'Tempo de preparação para o Natal.' }
    ],
    quiz: [
      { q: 'O Natal celebra:', options: ['Encarnação de Jesus', 'Pentecostes', 'Ressurreição', 'Batismo'], answer: 0 },
      { q: 'O tempo litúrgico organiza:', options: ['A vida da Igreja', 'Política', 'Economia', 'Escola'], answer: 0 },
      { q: 'O Advento é:', options: ['Preparação para o Natal', 'Tempo de Páscoa', 'Tempo comum', 'Pentecostes'], answer: 0 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'test12',
    title: 'Teste 12 – Após lições 26–27',
    goal: 'Consolidar Espírito Santo e Natal.',
    quiz: [
      { q: 'No Pentecostes, os apóstolos ficaram:', options: ['Cheios do Espírito Santo', 'Tristes', 'Confusos', 'Indiferentes'], answer: 0 },
      { q: 'O Natal celebra:', options: ['Encarnação de Jesus', 'Pentecostes', 'Ressurreição', 'Batismo'], answer: 0 },
      { q: 'O Advento é:', options: ['Preparação para o Natal', 'Tempo de Páscoa', 'Tempo comum', 'Pentecostes'], answer: 0 },
      // ... até 10 perguntas
    ]
  }
);
// Continuação do objeto data
data.lessons.push(
  {
    id: 'l28',
    title: 'Encontro com padrinhos e madrinhas',
    ref: 'Eclesiástico 6,5-17',
    goal: 'Valorizar o papel dos padrinhos e madrinhas na vida cristã.',
    reading: '“Um amigo fiel é uma poderosa proteção...” (Eclo 6,14).',
    content: [
      'Padrinhos e madrinhas são testemunhas da fé e apoio espiritual.',
      'Ajudam o crismando a crescer na vida cristã.',
      'São chamados a acompanhar e orientar com amor.',
      'O encontro fortalece laços de amizade e fé.'
    ],
    glossary: [
      { term: 'Padrinho', def: 'Aquele que acompanha o afilhado na vida cristã.' },
      { term: 'Madrinha', def: 'Aquela que acompanha o afilhado na vida cristã.' },
      { term: 'Testemunha da fé', def: 'Pessoa que vive e transmite a fé cristã.' }
    ],
    quiz: [
      { q: 'Padrinhos e madrinhas são:', options: ['Testemunhas da fé', 'Pais biológicos', 'Catequistas', 'Sacerdotes'], answer: 0 },
      { q: 'Função dos padrinhos é:', options: ['Acompanhar na vida cristã', 'Dar presentes', 'Ensinar matemática', 'Organizar festas'], answer: 0 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'rev2',
    title: 'Revisão e confraternização',
    ref: 'Efésios 6,1-2',
    goal: 'Revisar conteúdos e celebrar a caminhada de fé.',
    reading: '“Filhos, obedecei a vossos pais...” (Ef 6,1).',
    content: [
      'Revisão geral dos principais temas do curso.',
      'Jogos e dinâmicas para fixar o aprendizado.',
      'Confraternização para celebrar a fé e a amizade.',
      'Preparação para a prova final.'
    ],
    glossary: [
      { term: 'Revisão', def: 'Retomar conteúdos estudados.' },
      { term: 'Confraternização', def: 'Celebração comunitária da fé.' },
      { term: 'Dinâmica', def: 'Atividade prática e participativa.' }
    ],
    quiz: [
      { q: 'Revisão serve para:', options: ['Fixar conteúdos', 'Esquecer', 'Dispersar', 'Evitar estudo'], answer: 0 },
      { q: 'Confraternização é:', options: ['Celebração comunitária', 'Estudo individual', 'Debate político', 'Tradição cultural'], answer: 0 },
      // ... até 20 perguntas
    ]
  },
  {
    id: 'exam2',
    title: 'Prova 2 – Final',
    ref: 'Efésios 4,32',
    goal: 'Avaliar todo o conteúdo do curso de Crisma.',
    reading: '“Sede bondosos uns para com os outros...” (Ef 4,32).',
    content: [
      'Prova objetiva com 20–30 questões.',
      'Abrange todos os temas: oração, Trindade, Cristo, Igreja, sacramentos, Bíblia, mandamentos, santos, anjos, Espírito Santo, liturgia e Natal.'
    ],
    glossary: [],
    quiz: [
      { q: 'O Espírito Santo é:', options: ['Pessoa divina', 'Energia criada', 'Símbolo', 'Anjo'], answer: 0 },
      { q: 'O Natal celebra:', options: ['Encarnação de Jesus', 'Pentecostes', 'Ressurreição', 'Batismo'], answer: 0 },
      { q: 'Sacramentos da iniciação são:', options: ['Batismo, Crisma, Eucaristia', 'Batismo, Ordem, Matrimônio', 'Crisma, Penitência, Unção', 'Eucaristia, Ordem, Matrimônio'], answer: 0 },
      { q: 'O 1º mandamento é:', options: ['Amar a Deus sobre todas as coisas', 'Não matar', 'Não roubar', 'Honrar pai e mãe'], answer: 0 },
      { q: 'Estêvão é:', options: ['Primeiro mártir', 'Apóstolo', 'Profeta', 'Rei'], answer: 0 },
      { q: 'Miguel é:', options: ['Arcanjo defensor', 'Profeta', 'Apóstolo', 'Rei'], answer: 0 },
      // ... até 30 perguntas
    ]
  }
);
