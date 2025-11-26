import { scoring } from './scoring.js';

const app = document.getElementById('app');
const darkBtn = document.getElementById('darkBtn');
darkBtn.onclick = () => document.body.classList.toggle('dark');

const state = { view: 'home', currentLesson: null };

function renderHome() {
  scoring.pingStreak();
  app.innerHTML = `
    <section class="grid">
      ${data.lessons.map((l, i) => `
        <div class="card">
          <h2>${i+1}. ${l.title}</h2>
          <p><strong>Referência:</strong> ${l.ref ?? '—'}</p>
          <div class="progress"><div style="width:${progress(l.id)}%"></div></div>
          <button class="btn" onclick="startLesson('${l.id}')">Abrir lição</button>
        </div>`).join('')}
    </section>
    <section class="card" style="margin-top:16px">
      <h3>Seu perfil</h3>
      <p><span class="badge">XP: ${scoring.xp()}</span><span class="badge">Streak: ${scoring.streak().count} dias</span></p>
      <p><strong>Conquistas:</strong> ${scoring.badges().join(', ') || 'Nenhuma ainda'}</p>
    </section>
  `;
}

function progress(id) {
  const p = JSON.parse(localStorage.getItem('progress') || '{}');
  return p[id] || 0;
}

window.startLesson = (id) => {
  const l = data.lessons.find(x => x.id === id);
  state.view = 'lesson'; state.currentLesson = l;
  renderLesson(l);
};

function renderLesson(l) {
  app.innerHTML = `
    <article class="card">
      <h2>${l.title}</h2>
      <p><strong>Objetivo:</strong> ${l.goal}</p>
      <blockquote>${l.reading}</blockquote>
      <h3>Resumo</h3>
      ${l.content.map(p => `<p>${p}</p>`).join('')}
      <h3>Glossário</h3>
      <ul>${l.glossary.map(g => `<li><strong>${g.term}:</strong> ${g.def}</li>`).join('')}</ul>
      <div class="quiz">
        <h3>Quiz (20 perguntas)</h3>
        <div id="quizWrap"></div>
        <button class="btn" onclick="startQuiz()">Iniciar</button>
      </div>
    </article>
    <button class="btn secondary" onclick="renderHome()">Voltar</button>
  `;
  window.startQuiz = () => renderQuiz(l);
}

function renderQuiz(l) {
  let idx = 0, score = 0;
  const wrap = document.getElementById('quizWrap');
  next();
  function next() {
    const q = l.quiz[idx];
    if (!q) return finish();
    wrap.innerHTML = `
      <div class="card">
        <h4>${idx+1}. ${q.q}</h4>
        ${q.options.map((opt, i) => `<div class="option" data-i="${i}">${opt}</div>`).join('')}
        <p style="color:#6b7280"><em>${q.tip || ''}</em></p>
      </div>`;
    wrap.querySelectorAll('.option').forEach(el => el.onclick = () => {
      const correct = q.answer === Number(el.dataset.i);
      if (correct) { el.classList.add('correct'); score++; } else { el.classList.add('incorrect'); }
      setTimeout(() => { idx++; next(); }, 600);
    });
  }
  function finish() {
    const pct = Math.round((score / l.quiz.length) * 100);
    const xpGain = pct >= 90 ? 70 : (pct >= 70 ? 50 : 10);
    scoring.addXP(xpGain);
    const p = JSON.parse(localStorage.getItem('progress') || '{}'); p[l.id] = pct; localStorage.setItem('progress', JSON.stringify(p));
    if (pct >= 90) scoring.grantBadge('Fiel no pouco');
    app.innerHTML = `
      <section class="card">
        <h2>Resultado</h2>
        <p><strong>Acertos:</strong> ${score}/${l.quiz.length} (${pct}%)</p>
        <p><strong>XP ganho:</strong> ${xpGain}</p>
        <button class="btn" onclick="renderHome()">Concluir</button>
      </section>`;
  }
}

renderHome();
