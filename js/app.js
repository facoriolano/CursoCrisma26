// Conecta os botões e inicializa a tela
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  document.getElementById("homeBtn").onclick = () => renderHome();
  document.getElementById("profileBtn").onclick = () => renderProfile();
  document.getElementById("darkBtn").onclick = () => {
    document.body.classList.toggle("dark");
  };

  renderHome(); // Mostra a tela inicial ao carregar
});


const app = document.getElementById("app");

// Botões de navegação
document.getElementById("homeBtn").onclick = () => renderHome();
document.getElementById("profileBtn").onclick = () => renderProfile();
document.getElementById("darkBtn").onclick = () => {
  document.body.classList.toggle("dark");
};

// Renderiza a tela inicial com as lições
function renderHome() {
  app.innerHTML = `
    <section class="grid">
      ${data.lessons.map((l, i) => `
        <div class="card">
          <h2>${i + 1}. ${l.title}</h2>
          <p><strong>Referência:</strong> ${l.ref ?? '—'}</p>
          <div class="progress"><div style="width:${progress(l.id)}%"></div></div>
          <button class="btn" onclick="startLesson('${l.id}')">Abrir lição</button>
        </div>
      `).join('')}
    </section>
  `;
}

// Renderiza o perfil do usuário
function renderProfile() {
  app.innerHTML = `
    <section class="card">
      <h2>Seu perfil</h2>
      <p><span class="badge">XP: ${scoring.xp()}</span></p>
      <p><span class="badge">Streak: ${scoring.streak().count} dias</span></p>
      <p><strong>Conquistas:</strong> ${scoring.badges().join(', ') || 'Nenhuma ainda'}</p>
    </section>
  `;
}

// Inicia uma lição específica
function startLesson(id) {
  const lesson = data.lessons.find(l => l.id === id);
  if (!lesson) return;

  app.innerHTML = `
    <section class="card">
      <h2>${lesson.title}</h2>
      <p><strong>Objetivo:</strong> ${lesson.goal}</p>
      <p><strong>Leitura:</strong> ${lesson.reading}</p>
      <ul>
        ${lesson.content.map(c => `<li>${c}</li>`).join('')}
      </ul>
      <h3>Glossário</h3>
      <ul>
        ${lesson.glossary.map(g => `<li><strong>${g.term}:</strong> ${g.def}</li>`).join('')}
      </ul>
      <button class="btn secondary" onclick="startQuiz('${id}')">Fazer quiz</button>
    </section>
  `;
}

// Inicia o quiz da lição
function startQuiz(id) {
  const lesson = data.lessons.find(l => l.id === id);
  if (!lesson || !lesson.quiz) return;

  let current = 0;
  let score = 0;

  function renderQuestion() {
    const q = lesson.quiz[current];
    app.innerHTML = `
      <section class="card quiz">
        <h3>${q.q}</h3>
        ${q.options.map((opt, i) => `
          <div class="option" onclick="selectOption(${i})">${opt}</div>
        `).join('')}
        <p><em>Pergunta ${current + 1} de ${lesson.quiz.length}</em></p>
      </section>
    `;
  }

  window.selectOption = function(i) {
    const correct = lesson.quiz[current].answer;
    const options = document.querySelectorAll(".option");
    options.forEach((opt, idx) => {
      opt.classList.add(idx === correct ? "correct" : idx === i ? "incorrect" : "");
      opt.onclick = null;
    });

    if (i === correct) score++;

    setTimeout(() => {
      current++;
      if (current < lesson.quiz.length) {
        renderQuestion();
      } else {
        scoring.addXP(score * 5);
        scoring.updateStreak();
        app.innerHTML = `
          <section class="card">
            <h2>Quiz concluído!</h2>
            <p>Você acertou ${score} de ${lesson.quiz.length} perguntas.</p>
            <button class="btn" onclick="renderHome()">Voltar ao início</button>
          </section>
        `;
      }
    }, 1000);
  };

  renderQuestion();
}

// Calcula progresso (exemplo simples)
function progress(id) {
  return scoring.progress(id) || 0;
}
document.addEventListener("DOMContentLoaded", () => {
  renderHome();
});
document.addEventListener("DOMContentLoaded", () => {
  // Conecta os botões
  document.getElementById("homeBtn").onclick = () => renderHome();
  document.getElementById("profileBtn").onclick = () => renderProfile();
  document.getElementById("darkBtn").onclick = () => {
    document.body.classList.toggle("dark");
  };

  // Renderiza a tela inicial
  renderHome();
});
