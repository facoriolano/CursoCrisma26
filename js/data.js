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
