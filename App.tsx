import React, { useState, useEffect, useRef } from 'react';
import { SYLLABUS, INITIAL_USER_STATE } from './constants';
import { UserState, LessonContent, SyllabusItem, LessonStatus } from './types';
import { generateLessonData } from './services/geminiService';
import { 
  BookOpen, 
  Check, 
  X, 
  Star, 
  Home, 
  User, 
  Trophy, 
  Zap, 
  Heart,
  Lock,
  Play,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

// --- COMPONENTS ---

// 1. Bottom Navigation
const BottomNav = ({ activeTab, setTab }: { activeTab: string, setTab: (t: string) => void }) => (
  <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around py-3 z-50 pb-safe">
    <button onClick={() => setTab('learn')} className={`flex flex-col items-center ${activeTab === 'learn' ? 'text-crisma-blue' : 'text-gray-400'}`}>
      <Home size={24} strokeWidth={2.5} />
      <span className="text-xs font-bold mt-1">Aulas</span>
    </button>
    <button onClick={() => setTab('leaderboard')} className={`flex flex-col items-center ${activeTab === 'leaderboard' ? 'text-crisma-yellow' : 'text-gray-400'}`}>
      <Trophy size={24} strokeWidth={2.5} />
      <span className="text-xs font-bold mt-1">Ranking</span>
    </button>
    <button onClick={() => setTab('profile')} className={`flex flex-col items-center ${activeTab === 'profile' ? 'text-purple-500' : 'text-gray-400'}`}>
      <User size={24} strokeWidth={2.5} />
      <span className="text-xs font-bold mt-1">Perfil</span>
    </button>
  </div>
);

// 2. Top Bar (Stats)
const TopBar = ({ user }: { user: UserState }) => (
  <div className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur z-40 px-4 py-2 flex justify-between items-center border-b border-gray-200">
    <div className="flex space-x-4">
      <div className="flex items-center text-red-500 font-bold">
        <Heart fill="currentColor" size={20} className="mr-1" />
        {user.hearts}
      </div>
      <div className="flex items-center text-crisma-yellow font-bold">
        <Zap fill="currentColor" size={20} className="mr-1" />
        {user.streak}
      </div>
    </div>
    <div className="flex items-center text-crisma-blue font-bold">
        <Star fill="currentColor" size={20} className="mr-1" />
        {user.xp} XP
    </div>
  </div>
);

// 3. Lesson Map Node
const LessonNode: React.FC<{ item: SyllabusItem, status: LessonStatus, onClick: () => void }> = ({ item, status, onClick }) => {
  let bgColor = "bg-gray-200";
  let iconColor = "text-gray-400";
  let yOffset = 0;

  // Simple zig-zag pattern
  const index = SYLLABUS.findIndex(s => s.id === item.id);
  if (index % 4 === 1) yOffset = 40;
  if (index % 4 === 3) yOffset = -40;

  if (status === LessonStatus.COMPLETED) {
    bgColor = "bg-crisma-green"; // Gold for completed? Or Green.
    iconColor = "text-white";
  } else if (status === LessonStatus.ACTIVE) {
    bgColor = "bg-crisma-blue";
    iconColor = "text-white";
  }

  const isSpecial = item.isReview || item.isExam || item.isEvent;

  return (
    <div 
      className={`relative flex flex-col items-center justify-center mb-8 cursor-pointer transform transition-transform hover:scale-105 active:scale-95`}
      style={{ marginLeft: `${yOffset}px` }}
      onClick={status !== LessonStatus.LOCKED ? onClick : undefined}
    >
      <div className={`w-20 h-20 rounded-full ${bgColor} border-b-4 border-black/20 flex items-center justify-center shadow-lg relative`}>
        {status === LessonStatus.LOCKED ? (
          <Lock className="text-gray-400/50" size={32} />
        ) : (
          isSpecial ? <Trophy className={iconColor} size={32} fill="currentColor" /> : <BookOpen className={iconColor} size={32} />
        )}
        
        {status === LessonStatus.ACTIVE && (
          <div className="absolute -top-2 -right-2 bg-crisma-red text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
            START
          </div>
        )}
      </div>
      <span className="mt-2 font-bold text-gray-700 text-sm bg-white/80 px-2 py-1 rounded-lg backdrop-blur text-center max-w-[150px]">
        {item.title}
      </span>
    </div>
  );
};

// 4. Active Lesson Interface
const LessonRunner = ({ 
  lesson, 
  onComplete, 
  onExit 
}: { 
  lesson: SyllabusItem, 
  onComplete: (score: number) => void, 
  onExit: () => void 
}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<LessonContent | null>(null);
  const [step, setStep] = useState<'intro' | 'theory' | 'quiz' | 'result'>('intro');
  const [theoryIndex, setTheoryIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const content = await generateLessonData(lesson);
      setData(content);
      setLoading(false);
    };
    load();
  }, [lesson]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-8 text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-crisma-green border-r-transparent mb-4"></div>
        <h2 className="text-xl font-bold text-gray-700">Preparando sua aula...</h2>
        <p className="text-gray-500 mt-2">Consultando o Catecismo e a Bíblia.</p>
        <p className="text-xs text-gray-400 mt-8">Tema: {lesson.title}</p>
      </div>
    );
  }

  if (!data) return <div onClick={onExit}>Error loading. Click to exit.</div>;

  // --- Theory Phase ---
  if (step === 'theory' || step === 'intro') {
    const isIntro = step === 'intro';
    const content = isIntro ? data.intro : data.theory[theoryIndex];

    const handleNextTheory = () => {
      if (isIntro) {
        setStep('theory');
      } else {
        if (theoryIndex < data.theory.length - 1) {
          setTheoryIndex(theoryIndex + 1);
        } else {
          setStep('quiz');
        }
      }
    };

    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col">
        <div className="p-4 flex justify-between items-center border-b">
          <button onClick={onExit}><X className="text-gray-400" /></button>
          <div className="w-full bg-gray-200 h-3 rounded-full mx-4">
             <div 
               className="bg-crisma-green h-3 rounded-full transition-all duration-300" 
               style={{ width: isIntro ? '10%' : `${((theoryIndex + 1) / data.theory.length) * 50}%` }} 
             />
          </div>
        </div>
        
        <div className="flex-1 p-6 flex flex-col justify-center items-center text-center">
          <h1 className="text-2xl font-extrabold text-gray-700 mb-6">{isIntro ? "Introdução" : "Vamos aprender"}</h1>
          <div className="text-lg text-gray-600 leading-relaxed max-w-lg bg-gray-50 p-6 rounded-2xl border-2 border-gray-100">
            {content}
          </div>
          {!isIntro && <div className="mt-4 text-sm text-gray-400">Card {theoryIndex + 1} de {data.theory.length}</div>}
        </div>

        <div className="p-4 border-t pb-8">
          <button 
            onClick={handleNextTheory}
            className="w-full bg-crisma-green hover:bg-crisma-greenDark text-white font-bold py-4 rounded-2xl shadow-lg border-b-4 border-crisma-greenDark active:border-b-0 active:translate-y-1 transition-all uppercase tracking-wider"
          >
            Continuar
          </button>
        </div>
      </div>
    );
  }

  // --- Quiz Phase ---
  if (step === 'quiz') {
    const currentQuestion = data.questions[quizIndex];
    const progress = 50 + ((quizIndex / data.questions.length) * 50);

    const handleCheck = () => {
      if (selectedOption === null) return;
      const correct = selectedOption === currentQuestion.correctIndex;
      setIsCorrect(correct);
      setIsChecked(true);
      if (correct) setScore(s => s + 10);
    };

    const handleNextQuestion = () => {
      setIsChecked(false);
      setSelectedOption(null);
      if (quizIndex < data.questions.length - 1) {
        setQuizIndex(quizIndex + 1);
      } else {
        setStep('result');
      }
    };

    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col">
         {/* Header */}
        <div className="p-4 flex items-center">
           <button onClick={onExit}><X className="text-gray-400" /></button>
           <div className="w-full bg-gray-200 h-3 rounded-full mx-4">
             <div className="bg-crisma-green h-3 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
           </div>
        </div>

        {/* Question Area */}
        <div className="flex-1 overflow-y-auto p-4 pb-40">
          <h2 className="text-xl font-bold text-gray-700 mb-8">{currentQuestion.question}</h2>
          
          <div className="space-y-4">
            {currentQuestion.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              let style = "bg-white border-2 border-gray-200 text-gray-700"; // Default
              
              if (isSelected && !isChecked) {
                style = "bg-blue-50 border-2 border-crisma-blue text-crisma-blue";
              } else if (isChecked) {
                 if (idx === currentQuestion.correctIndex) {
                   style = "bg-green-100 border-2 border-crisma-green text-crisma-greenDark";
                 } else if (isSelected && !isCorrect) {
                   style = "bg-red-100 border-2 border-crisma-red text-crisma-red";
                 }
              }

              return (
                <button
                  key={idx}
                  disabled={isChecked}
                  onClick={() => setSelectedOption(idx)}
                  className={`w-full text-left p-4 rounded-xl font-semibold transition-all ${style} ${!isChecked && 'hover:bg-gray-50'}`}
                >
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center mr-4 text-sm ${isSelected ? 'border-current' : 'border-gray-200 text-gray-400'}`}>
                      {String.fromCharCode(65 + idx)}
                    </div>
                    {opt}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Action Area */}
        <div className={`fixed bottom-0 w-full p-4 border-t pb-8 transition-colors duration-300 ${isChecked ? (isCorrect ? 'bg-green-100 border-green-200' : 'bg-red-100 border-red-200') : 'bg-white'}`}>
           {isChecked && (
             <div className="mb-4">
               <div className={`font-bold text-xl mb-1 ${isCorrect ? 'text-crisma-greenDark' : 'text-crisma-red'}`}>
                 {isCorrect ? 'Correto!' : 'Incorreto'}
               </div>
               <div className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                 {currentQuestion.explanation}
               </div>
             </div>
           )}
           <button 
             onClick={isChecked ? handleNextQuestion : handleCheck}
             disabled={!isChecked && selectedOption === null}
             className={`w-full font-bold py-4 rounded-2xl shadow-lg border-b-4 transition-all uppercase tracking-wider
               ${isChecked 
                 ? (isCorrect ? 'bg-crisma-green border-crisma-greenDark text-white' : 'bg-crisma-red border-red-600 text-white')
                 : (selectedOption !== null ? 'bg-crisma-green border-crisma-greenDark text-white' : 'bg-gray-200 border-gray-300 text-gray-400')
               }
             `}
           >
             {isChecked ? 'Continuar' : 'Verificar'}
           </button>
        </div>
      </div>
    );
  }

  // --- Result Phase ---
  if (step === 'result') {
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-8 text-center">
        <div className="mb-8 relative">
           <div className="absolute inset-0 bg-yellow-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
           <Trophy size={100} className="text-crisma-yellow relative z-10" fill="currentColor" />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Aula Concluída!</h2>
        <p className="text-lg text-gray-500 mb-8">Você fortaleceu sua fé.</p>
        
        <div className="flex gap-4 mb-8 w-full max-w-xs">
          <div className="flex-1 bg-blue-50 border-2 border-blue-100 rounded-xl p-4 flex flex-col items-center">
            <span className="text-gray-400 text-xs font-bold uppercase">Pontuação</span>
            <span className="text-crisma-blue font-extrabold text-xl">{score}</span>
          </div>
          <div className="flex-1 bg-yellow-50 border-2 border-yellow-100 rounded-xl p-4 flex flex-col items-center">
             <span className="text-gray-400 text-xs font-bold uppercase">XP Ganho</span>
             <span className="text-crisma-yellow font-extrabold text-xl">+{Math.ceil(score / 2)}</span>
          </div>
        </div>

        <button 
          onClick={() => onComplete(score)}
          className="w-full max-w-xs bg-crisma-green hover:bg-crisma-greenDark text-white font-bold py-4 rounded-2xl shadow-lg border-b-4 border-crisma-greenDark active:border-b-0 active:translate-y-1 transition-all"
        >
          CONTINUAR
        </button>
      </div>
    );
  }

  return null;
};

// --- MAIN APP COMPONENT ---

export default function App() {
  const [activeTab, setActiveTab] = useState('learn');
  const [user, setUser] = useState<UserState>(() => {
    const saved = localStorage.getItem('crisma_user');
    return saved ? JSON.parse(saved) : INITIAL_USER_STATE;
  });
  const [activeLesson, setActiveLesson] = useState<SyllabusItem | null>(null);

  useEffect(() => {
    localStorage.setItem('crisma_user', JSON.stringify(user));
  }, [user]);

  const handleStartLesson = (lesson: SyllabusItem) => {
    setActiveLesson(lesson);
  };

  const handleCompleteLesson = (score: number) => {
    if (!activeLesson) return;
    
    const xpGained = Math.ceil(score / 2);
    
    setUser(prev => {
      const isNew = !prev.completedLessonIds.includes(activeLesson.id);
      const nextId = activeLesson.id + 1;
      
      return {
        ...prev,
        completedLessonIds: isNew ? [...prev.completedLessonIds, activeLesson.id] : prev.completedLessonIds,
        xp: prev.xp + xpGained,
        currentLessonId: isNew && nextId <= SYLLABUS.length ? nextId : prev.currentLessonId,
        streak: prev.streak + (isNew ? 1 : 0) // Simplified streak logic
      };
    });
    
    setActiveLesson(null);
  };

  return (
    <div className="min-h-screen pb-20 font-sans text-gray-700 bg-gray-50">
      
      {/* Screens */}
      {activeLesson ? (
        <LessonRunner 
          lesson={activeLesson} 
          onComplete={handleCompleteLesson}
          onExit={() => setActiveLesson(null)} 
        />
      ) : (
        <>
          <TopBar user={user} />
          
          <main className="pt-20 px-4 max-w-md mx-auto min-h-screen">
            {activeTab === 'learn' && (
              <div className="flex flex-col items-center pt-4 pb-20">
                {SYLLABUS.map((item) => {
                  let status = LessonStatus.LOCKED;
                  if (user.completedLessonIds.includes(item.id)) {
                    status = LessonStatus.COMPLETED;
                  } else if (item.id === user.currentLessonId) {
                    status = LessonStatus.ACTIVE;
                  }

                  return (
                    <LessonNode 
                      key={item.id} 
                      item={item} 
                      status={status}
                      onClick={() => handleStartLesson(item)}
                    />
                  );
                })}
                 <div className="text-center text-gray-400 mt-8 mb-12">
                   <p>Você chegou ao fim do conteúdo disponível!</p>
                   <p className="text-xs mt-2">Crisma 2026</p>
                 </div>
              </div>
            )}

            {activeTab === 'leaderboard' && (
              <div className="p-4">
                <h1 className="text-2xl font-bold mb-6 text-center text-crisma-yellow">Ranking da Turma</h1>
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                   {[
                     { name: "Maria Silva", xp: 1250, img: "https://picsum.photos/50/50?random=1" },
                     { name: "Você", xp: user.xp, img: "https://picsum.photos/50/50?random=2", active: true },
                     { name: "João Paulo", xp: 890, img: "https://picsum.photos/50/50?random=3" },
                     { name: "Ana Clara", xp: 750, img: "https://picsum.photos/50/50?random=4" },
                   ].sort((a,b) => b.xp - a.xp).map((u, i) => (
                     <div key={i} className={`flex items-center p-4 border-b last:border-0 ${u.active ? 'bg-blue-50' : ''}`}>
                        <div className="font-bold w-8 text-gray-400">{i+1}</div>
                        <img src={u.img} className="w-10 h-10 rounded-full mr-4" alt="Avatar" />
                        <div className="flex-1 font-bold text-gray-700">{u.name}</div>
                        <div className="font-bold text-gray-500">{u.xp} XP</div>
                     </div>
                   ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="p-4 flex flex-col items-center">
                 <div className="w-24 h-24 rounded-full bg-blue-100 border-4 border-crisma-blue mb-4 overflow-hidden">
                    <img src="https://picsum.photos/100/100?random=2" alt="Profile" />
                 </div>
                 <h2 className="text-2xl font-bold mb-1">Catequizando</h2>
                 <p className="text-gray-400 mb-8">Entrou em 2026</p>

                 <div className="w-full grid grid-cols-2 gap-4">
                   <div className="bg-white p-4 rounded-2xl border-2 border-gray-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                         <Zap className="text-crisma-yellow" fill="currentColor" />
                         <span className="font-bold text-lg">Ofensiva</span>
                      </div>
                      <div className="text-2xl font-extrabold text-gray-700">{user.streak} dias</div>
                   </div>
                   <div className="bg-white p-4 rounded-2xl border-2 border-gray-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                         <Trophy className="text-crisma-yellow" fill="currentColor" />
                         <span className="font-bold text-lg">Total XP</span>
                      </div>
                      <div className="text-2xl font-extrabold text-gray-700">{user.xp}</div>
                   </div>
                 </div>
                 
                 <div className="mt-8 w-full">
                    <h3 className="font-bold text-lg mb-4">Estatísticas</h3>
                    <div className="bg-white rounded-2xl border-2 border-gray-100 p-4">
                       <div className="flex justify-between py-2 border-b">
                         <span>Aulas completas</span>
                         <span className="font-bold">{user.completedLessonIds.length}</span>
                       </div>
                       <div className="flex justify-between py-2">
                         <span>Próxima aula</span>
                         <span className="font-bold text-crisma-blue">Aula {user.currentLessonId}</span>
                       </div>
                    </div>
                 </div>
              </div>
            )}
          </main>
          
          <BottomNav activeTab={activeTab} setTab={setActiveTab} />
        </>
      )}
    </div>
  );
}
