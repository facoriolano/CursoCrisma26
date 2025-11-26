// ==========================================
// BANCO DE DADOS - CRISMA QUEST 2025
// ==========================================

// Instruções:
// 1. O campo "correct" indica o índice da resposta certa:
//    0 = Primeira opção
//    1 = Segunda opção
//    2 = Terceira opção
//    3 = Quarta opção

window.LESSONS_DATA = [
  {
    id: 1,
    title: "Oração e Fé",
    subtitle: "Nossa fé nos reuniu (Hebreus 11,6-12)",
    icon: "🙏",
    content: "A fé é o fundamento da esperança. Sem fé é impossível agradar a Deus. A oração é o nosso canal direto de comunicação com o Pai. Neste encontro, aprendemos que a fé nos move e nos reúne como comunidade.",
    questions: [
      { q: "O que é necessário para agradar a Deus segundo Hebreus 11?", options: ["Fé", "Dinheiro", "Fama", "Sorte"], correct: 0 },
      { q: "A oração é considerada:", options: ["Uma obrigação chata", "Um diálogo com Deus", "Um monólogo", "Uma perda de tempo"], correct: 1 },
      { q: "Quem é o autor da carta aos Hebreus fala sobre a fé de quem?", options: ["Abraão", "Judas", "Pilatos", "César"], correct: 0 },
      { q: "A fé é a certeza daquilo que:", options: ["Vemos", "Esperamos", "Compramos", "Perdemos"], correct: 1 },
      { q: "Onde podemos encontrar a oração do Pai Nosso?", options: ["No Facebook", "Na Bíblia (Mateus)", "Num jornal", "Na TV"], correct: 1 },
      { q: "Qual a atitude correta na oração?", options: ["Gritar", "Humildade e confiança", "Exigir coisas", "Dormir"], correct: 1 },
      { q: "A fé sem obras é:", options: ["Morta", "Viva", "Rápida", "Lenta"], correct: 0 },
      { q: "Jesus nos ensinou a chamar Deus de:", options: ["Chefe", "Pai", "Juiz", "Líder"], correct: 1 },
      { q: "Onde dois ou três estiverem reunidos em meu nome...", options: ["Eu estarei lá", "Farei mágica", "Nada acontece", "Choverá"], correct: 0 },
      { q: "Qual o símbolo do Cristão?", options: ["A Cruz", "O Peixe", "A Pomba", "Todas as anteriores"], correct: 3 },
      // ... Copie a linha acima e cole aqui para adicionar a pergunta 11 ...
    ]
  },
  {
    id: 2,
    title: "Quem é Deus?",
    subtitle: "Santíssima Trindade (1 João 4,12-16)",
    icon: "🕊️",
    content: "Deus é Amor. A Santíssima Trindade é o mistério de um só Deus em três pessoas: Pai, Filho e Espírito Santo. Não são três deuses, mas um só Deus.",
    questions: [
      { q: "Quantas pessoas formam a Santíssima Trindade?", options: ["Uma", "Duas", "Três", "Quatro"], correct: 2 },
      { q: "Quem são as pessoas da Trindade?", options: ["Jesus, Maria, José", "Pai, Filho, Espírito Santo", "Pedro, Paulo, Tiago", "Gabriel, Miguel, Rafael"], correct: 1 },
      { q: "Deus é:", options: ["Amor", "Ódio", "Indiferença", "Vingança"], correct: 0 },
      { q: "Jesus é:", options: ["Apenas um profeta", "O Filho de Deus", "Um anjo", "Um mito"], correct: 1 },
      { q: "O Espírito Santo é representado por:", options: ["Fogo e Pomba", "Água e Vinho", "Pão e Peixe", "Pedra e Areia"], correct: 0 },
    ]
  },
  {
    id: 3,
    title: "Jesus Cristo",
    subtitle: "Quem é o Filho de Deus? (João 14,8-11)",
    icon: "✝️",
    content: "Jesus é o caminho, a verdade e a vida. Quem vê Jesus, vê o Pai. Ele se fez homem para nos salvar.",
    questions: [
      { q: "Jesus disse: Eu sou o Caminho, a Verdade e a...", options: ["Luz", "Vida", "Esperança", "Glória"], correct: 1 },
      { q: "Onde Jesus nasceu?", options: ["Nazaré", "Belém", "Jerusalém", "Roma"], correct: 1 },
      { q: "Quem batizou Jesus?", options: ["Pedro", "João Batista", "Paulo", "Judas"], correct: 1 },
      { q: "Qual o primeiro milagre de Jesus?", options: ["Cura do cego", "Bodas de Caná", "Ressurreição de Lázaro", "Multiplicação dos pães"], correct: 1 },
    ]
  },
  {
    id: 4,
    title: "A Crucificação",
    subtitle: "Pecados e Redenção (Lucas 23)",
    icon: "⛪",
    content: "Jesus morreu na cruz para perdoar os nossos pecados. Foi o sacrifício perfeito de amor.",
    questions: [
        { q: "Jesus morreu para:", options: ["Nos salvar", "Ser famoso", "Virar Rei de Roma", "Desistir"], correct: 0 },
        { q: "O que Jesus disse na cruz?", options: ["Pai, perdoa-lhes", "Eu voltarei", "Fujam todos", "Estou com fome"], correct: 0 },
    ]
  },
  {
    id: 20,
    title: "Mandamentos 4º e 5º",
    subtitle: "Honrar Pai/Mãe e Valor da Vida",
    icon: "📜",
    content: "Honrar pai e mãe é o primeiro mandamento com promessa. Não matarás defende o valor sagrado da vida desde a concepção.",
    questions: [
      { q: "Qual é o 4º Mandamento?", options: ["Não Matar", "Honrar Pai e Mãe", "Não Roubar", "Não Mentir"], correct: 1 },
      { q: "O 5º Mandamento (Não Matar) proíbe:", options: ["Apenas guerras", "Homicídio, aborto, eutanásia", "Comer carne", "Caçar"], correct: 1 },
    ]
  },
  {
    id: 21,
    title: "Mandamentos 6º e 9º",
    subtitle: "Pureza e Castidade",
    icon: "💍",
    content: "Deus nos chama a viver a pureza de coração e corpo. O corpo é templo do Espírito Santo.",
    questions: [
      { q: "O que o 6º mandamento protege?", options: ["A propriedade", "A verdade", "A castidade e o matrimônio", "O domingo"], correct: 2 },
    ]
  },
  {
    id: 23,
    title: "Intercessão",
    subtitle: "Os Santos rezam por nós?",
    icon: "🙏",
    content: "Acreditamos na comunhão dos santos. Eles intercedem por nós junto a Deus, como amigos que pedem uns pelos outros.",
    questions: [
      { q: "O que é intercessão?", options: ["Adorar um santo", "Pedir que alguém reze por nós", "Fazer mágica", "Esquecer de Deus"], correct: 1 },
    ]
  }
];
