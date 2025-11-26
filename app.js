const { useState, useEffect } = React;
const { BookOpen, CheckCircle, XCircle, Star, User, Map, Trophy, Heart, Lock } = lucide;

// Importa os dados do arquivo questions.js (que foi carregado na janela global)
const LESSONS_DATA = window.LESSONS_DATA || [];

const Button = ({ children, onClick, variant = "primary", className = "", disabled = false }) => {
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white shadow-[0_4px_0_rgb(59,130,246)] active:shadow-none active:translate-y-[4px]",
    secondary: "bg-slate-200 hover:bg-slate-300 text-slate-700 shadow-[0_4px_0_rgb(203,213,225)] active:shadow-none active:translate-y-[4px]",
    success: "bg-green-500 hover:bg-green-600 text-white shadow-[0_4px_0_rgb(34,197,94)] active:shadow-none active:translate-y-[4px]",
    danger: "bg-red-500 hover:bg-red-600 text-white shadow-[0_4px_0_rgb(239,68,68)] active:shadow-none active:translate-y-[4px]",
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`py-3 px-6 rounded-xl font-bold transition-all uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const LoginScreen = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && number) onLogin({ name, number });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-900 text-white">
      <div className="w-full max-w-md bg-slate-800 p-8 rounded-2xl shadow-2xl border-b-4 border-slate-950">
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-400 p-4 rounded-full">
            <Trophy size={48} className="text-yellow-900" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center mb-2 text-yellow-400">Crisma Quest</h1>
        <p className="text-center text-slate-400 mb-8">Sua jornada de fé começa aqui!</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2 uppercase text-slate-400">Seu Nome</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-4 rounded-xl bg-slate-700 border-2 border-slate-600 text-white focus:border-yellow-400 focus:outline-none" placeholder="Ex: João Silva" required />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 uppercase text-slate-400">Seu Número</label>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} className="w-full p-4 rounded-xl bg-slate-700 border-2 border-slate-600 text-white focus:border-yellow-400 focus:outline-none" placeholder="Ex: 12" required />
          </div>
          <Button variant="success" className="w-full mt-4" onClick={() => {}}>Começar Jornada</Button>
        </form>
      </div>
    </div>
  );
};

const LessonRunner = ({ lesson, onComplete, onExit }) => {
  const [step, setStep] = useState('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [lives, setLives] = useState(3);

  useEffect(() => { if (lives === 0) setStep('failed'); }, [lives]);

  const handleCheck = () => {
    if (selectedOption === null) return;
    const correctIndex = lesson.questions[currentQuestion].correct;
    const correct = selectedOption === correctIndex;
    setIsCorrect(correct);
    setIsChecked(true);
    if (correct) setScore(score + 10);
    else setLives(lives - 1);
  };

  const handleNext = () => {
    setIsChecked(false);
    setSelectedOption(null);
    if (currentQuestion < lesson.questions.length - 1) setCurrentQuestion(currentQuestion + 1);
    else setStep('completed');
  };

  if (step === 'intro') {
    return (
      <div className="flex flex-col h-screen bg-white">
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
          <div className="text-6xl animate-bounce">{lesson.icon}</div>
          <h2 className="text-3xl font-bold text-slate-800">{lesson.title}</h2>
          <p className="text-xl text-slate-500">{lesson.subtitle}</p>
          <div className="bg-blue-100 p-4 rounded-xl text-blue-800 font-medium">{lesson.questions.length} Perguntas • +{lesson.questions.length * 10} XP</div>
        </div>
        <div className="p-4 border-t"><Button className="w-full" onClick={() => setStep('content')}>INICIAR AULA</Button></div>
      </div>
    );
  }

  if (step === 'content') {
    return (
      <div className="flex flex-col h-screen bg-white">
        <div className="p-4 border-b flex items-center justify-between">
          <button onClick={onExit}><XCircle className="text-slate-400" /></button>
          <span className="font-bold text-slate-600">Material de Estudo</span>
          <div className="w-6"></div>
        </div>
        <div className="flex-1 p-8 overflow-y-auto">
          <h3 className="text-2xl font-bold mb-4 text-blue-600">Vamos aprender!</h3>
          <p className="text-lg leading-relaxed text-slate-700 bg-slate-50 p-6 rounded-2xl border-2 border-slate-100">{lesson.content}</p>
        </div>
        <div className="p-4 border-t"><Button className="w-full" onClick={() => setStep('quiz')}>IR PARA O QUIZ</Button></div>
      </div>
    );
  }

  if (step === 'quiz') {
    const progress = ((currentQuestion) / lesson.questions.length) * 100;
    const question = lesson.questions[currentQuestion];
    return (
      <div className="flex flex-col h-screen max-w-2xl mx-auto bg-white shadow-2xl overflow-hidden">
        <div className="p-6 flex items-center gap-4">
          <button onClick={onExit}><XCircle className="text-slate-300 hover:text-slate-500" /></button>
          <div className="flex-1 h-4 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 transition-all duration-500" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="flex items-center gap-1 text-red-500 font-bold"><Heart fill="currentColor" /> {lives}</div>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <h2 className="text-2xl font-bold text-slate-700 mb-8">{question.q}</h2>
          <div className="space-y-4">
            {question.options.map((opt, idx) => (
              <button key={idx} onClick={() => !isChecked && setSelectedOption(idx)} disabled={isChecked}
                className={`w-full p-4 text-left border-2 rounded-xl text-lg font-medium transition-all ${selectedOption === idx ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-200 hover:bg-slate-50 text-slate-700'} ${isChecked && idx === question.correct ? 'border-green-500 bg-green-100 text-green-700' : ''} ${isChecked && selectedOption === idx && idx !== question.correct ? 'border-red-500 bg-red-100 text-red-700' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center text-sm font-bold ${selectedOption === idx ? 'border-blue-500 text-blue-500' : 'border-slate-200 text-slate-300'}`}>{idx + 1}</div>
                  {opt}
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className={`p-6 border-t ${isChecked ? (isCorrect ? 'bg-green-100' : 'bg-red-100') : 'bg-white'}`}>
          <div className="flex justify-between items-center">
            {isChecked && (
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${isCorrect ? 'bg-green-500' : 'bg-red-500'} text-white`}>{isCorrect ? <CheckCircle size={24} /> : <XCircle size={24} />}</div>
                <div className={`font-bold text-xl ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>{isCorrect ? 'Correto!' : 'Incorreto'}</div>
              </div>
            )}
            <div className={`${!isChecked ? 'w-full' : ''} ml-auto`}>
              {!isChecked ? <Button className="w-full" disabled={selectedOption === null} onClick={handleCheck} variant="success">VERIFICAR</Button> 
                          : <Button onClick={handleNext} variant={isCorrect ? "success" : "danger"}>CONTINUAR</Button>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'completed') {
    return (
      <div className="flex flex-col h-screen items-center justify-center bg-yellow-400 p-8 text-center space-y-6">
        <Trophy size={80} className="text-yellow-800 animate-bounce" />
        <h2 className="text-4xl font-extrabold text-yellow-900">Aula Concluída!</h2>
        <div className="bg-white/30 p-6 rounded-2xl w-full max-w-sm backdrop-blur-sm">
          <div className="flex justify-between items-center mb-4"><span className="font-bold text-yellow-900">XP Ganho</span><span className="font-bold text-2xl text-yellow-900">+{score}</span></div>
          <div className="flex justify-between items-center"><span className="font-bold text-yellow-900">Acertos</span><span className="font-bold text-2xl text-yellow-900">{Math.round((score / 10) / lesson.questions.length * 100)}%</span></div>
        </div>
        <Button onClick={() => onComplete(score)} className="w-full max-w-sm shadow-xl">CONTINUAR JORNADA</Button>
      </div>
    );
  }

  if (step === 'failed') {
    return (
      <div className="flex flex-col h-screen items-center justify-center bg-red-500 p-8 text-center space-y-6">
        <Heart size={80} className="text-red-900 opacity-50" />
        <h2 className="text-4xl font-extrabold text-white">Sem vidas!</h2>
        <p className="text-white/80 text-xl">Você precisa revisar o conteúdo e tentar novamente.</p>
        <Button onClick={onExit} variant="secondary" className="w-full max-w-sm shadow-xl">TENTAR DEPOIS</Button>
      </div>
    );
  }
};

const Dashboard = ({ user, progress, onSelectLesson, onLogout }) => {
  return (
    <div className="min-h-screen bg-slate-100 pb-20 max-w-md mx-auto shadow-2xl border-x border-slate-200">
      <div className="sticky top-0 bg-white/90 backdrop-blur-md z-10 border-b p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">{user.number}</div>
            <span className="font-bold text-slate-700 truncate max-w-[120px]">{user.name}</span>
        </div>
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-yellow-500 font-bold"><Star fill="currentColor" /> {progress.xp}</div>
             <button onClick={onLogout} className="text-slate-400 hover:text-red-500"><XCircle size={24} /></button>
        </div>
      </div>
      <div className="p-8 flex flex-col items-center space-y-8 mt-4 relative">
        {LESSONS_DATA.map((lesson, index) => {
          const isCompleted = progress.completedLessons.includes(lesson.id);
          const isLocked = !isCompleted && !progress.completedLessons.includes(lesson.id - 1) && lesson.id !== 1;
          const isCurrent = !isLocked && !isCompleted;
          const offset = index % 2 === 0 ? 'mr-12' : 'ml-12';
          
          return (
            <div key={lesson.id} className={`relative z-10 ${offset}`}>
               <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                   {isCurrent && (
                       <div className="bg-white px-3 py-1 rounded-lg shadow-md text-blue-600 font-bold text-sm animate-bounce">
                           COMEÇAR
                           <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                       </div>
                   )}
               </div>
              <button disabled={isLocked} onClick={() => !isLocked && onSelectLesson(lesson)}
                className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl shadow-[0_8px_0_rgba(0,0,0,0.2)] transition-all transform active:translate-y-[8px] active:shadow-none ${isCompleted ? 'bg-yellow-400 ring-4 ring-yellow-200' : ''} ${isCurrent ? 'bg-blue-500 text-white ring-4 ring-blue-200' : ''} ${isLocked ? 'bg-slate-300 text-slate-400 grayscale cursor-not-allowed' : ''}`}>
                {isCompleted ? <CheckCircle size={40} className="text-yellow-700" /> : (isLocked ? <Lock size={32} /> : lesson.icon)}
              </button>
              <div className="mt-3 text-center"><h3 className={`font-bold text-sm ${isLocked ? 'text-slate-400' : 'text-slate-700'}`}>{lesson.title}</h3></div>
            </div>
          );
        })}
      </div>
      <div className="fixed bottom-0 w-full max-w-md bg-white border-t p-4 flex justify-around text-slate-400">
        <button className="text-blue-500 flex flex-col items-center"><Map /><span className="text-xs font-bold mt-1">Aulas</span></button>
        <button className="hover:text-blue-500 flex flex-col items-center" onClick={() => alert("Em breve: Ranking da turma!")}><Trophy /><span className="text-xs font-bold mt-1">Ranking</span></button>
        <button className="hover:text-blue-500 flex flex-col items-center" onClick={() => alert("Em breve: Seu perfil completo!")}><User /><span className="text-xs font-bold mt-1">Perfil</span></button>
      </div>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [progress, setProgress] = useState({ xp: 0, completedLessons: [] });

  useEffect(() => {
    const savedUser = localStorage.getItem('crisma_user');
    const savedProgress = localStorage.getItem('crisma_progress');
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedProgress) setProgress(JSON.parse(savedProgress));
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('crisma_user', JSON.stringify(userData));
    if (!localStorage.getItem('crisma_progress')) {
        const initialProgress = { xp: 0, completedLessons: [] };
        setProgress(initialProgress);
        localStorage.setItem('crisma_progress', JSON.stringify(initialProgress));
    }
  };

  const handleLogout = () => {
      if(confirm("Deseja sair? Seu progresso neste dispositivo está salvo.")) {
        setUser(null);
        setActiveLesson(null);
      }
  };

  const handleLessonComplete = (xpEarned) => {
    const newProgress = { xp: progress.xp + xpEarned, completedLessons: [...new Set([...progress.completedLessons, activeLesson.id])] };
    setProgress(newProgress);
    localStorage.setItem('crisma_progress', JSON.stringify(newProgress));
    setActiveLesson(null);
  };

  if (!user) return <LoginScreen onLogin={handleLogin} />;
  if (activeLesson) return <LessonRunner lesson={activeLesson} onComplete={handleLessonComplete} onExit={() => setActiveLesson(null)} />;
  return <Dashboard user={user} progress={progress} onSelectLesson={setActiveLesson} onLogout={handleLogout} />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
