export enum LessonStatus {
  LOCKED = 'LOCKED',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}

export interface SyllabusItem {
  id: number;
  title: string;
  scripture: string;
  description: string;
  isReview?: boolean;
  isExam?: boolean;
  isEvent?: boolean; // For events like "Cerco de Jericó"
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonContent {
  intro: string; // A short hook
  theory: string[]; // Slides of content
  questions: QuizQuestion[];
}

export interface UserState {
  completedLessonIds: number[];
  xp: number;
  hearts: number;
  streak: number;
  lastLessonDate: string | null;
  currentLessonId: number;
}
