export interface BilingualText {
  es: string;
  hy: string;
}

export type TopicId =
  | 'funciones-lenguaje'
  | 'modalidades-oracionales'
  | 'comunicacion-elementos'
  | 'categorias-gramaticales'
  | 'literatura-popular-culta'
  | 'generos-formas-popular'
  | 'lenguaje-prosa-verso'
  | 'figuras-fonicas'
  | 'figuras-morfosintacticas'
  | 'figuras-semanticas';

export interface TheoryItem {
  name: BilingualText;
  definition: BilingualText;
  usage?: BilingualText;
  howToIdentify: BilingualText;
  examples: BilingualText[];
  distinctionFromOthers?: BilingualText;
  examTip?: BilingualText;
  formulaOrStructure?: string;
}

export interface TheorySection {
  title: BilingualText;
  description: BilingualText;
  items: TheoryItem[];
  summaryTable?: {
    headers: BilingualText[];
    rows: Array<BilingualText[]>;
  };
}

export interface Topic {
  id: TopicId;
  number: number;
  title: BilingualText;
  subtitle: BilingualText;
  iconName: string;
  accentColor: string;
  sections: TheorySection[];
  selfExplanationPrompt: BilingualText;
  modelExplanation: BilingualText;
  evaluationCriteria: BilingualText[];
}

export type QuestionType =
  | 'multiple-choice'
  | 'true-false'
  | 'fill-gap'
  | 'classify'
  | 'identify-figure'
  | 'open-explanation';

export type QuestionLevel = 'facil' | 'medio' | 'dificil';

export interface QuestionOption {
  id: string;
  text: BilingualText;
}

export interface Question {
  id: string;
  topicId: TopicId;
  level: QuestionLevel;
  type: QuestionType;
  prompt: BilingualText;
  contextFragment?: BilingualText;
  options: QuestionOption[]; // 4 options for multiple-choice
  correctOptionId: string;
  explanation: BilingualText;
  tags?: string[];
}

export interface Flashcard {
  id: string;
  topicId: TopicId;
  term: BilingualText;
  definition: BilingualText;
  example: BilingualText;
  clue?: BilingualText;
}

export interface ErrorItem {
  id: string;
  topicId: TopicId;
  statement: BilingualText;
  hasError: boolean;
  correctionIfError: BilingualText;
  explanation: BilingualText;
}

export interface TextQuestion {
  id: string;
  prompt: BilingualText;
  options: QuestionOption[];
  correctOptionId: string;
  explanation: BilingualText;
}

export interface TextAnalysisItem {
  id: string;
  title: BilingualText;
  authorOrSource: string;
  genre: BilingualText;
  textParagraphs: BilingualText[];
  questions: TextQuestion[];
}

export interface SentenceWord {
  word: string;
  category: string; // e.g. Sustantivo, Verbo, Adjetivo, Adverbio, Determinante, etc.
  genderNumber?: string;
  explanation: BilingualText;
}

export interface SentenceAnalysisItem {
  id: string;
  sentence: string;
  translation: string;
  difficulty: QuestionLevel;
  words: SentenceWord[];
}

export interface ExamAttempt {
  id: string;
  date: string;
  level: 'facil' | 'medio' | 'dificil' | 'final';
  levelName: string;
  totalQuestions: number;
  correctAnswers: number;
  scoreOutOf10: number;
  percentage: number;
  weakTopics: TopicId[];
  strongTopics: TopicId[];
  hintsUsedCount: number;
  timeSpentSeconds: number;
}

export interface UserStats {
  points: number;
  streakDays: number;
  lastActiveDate: string;
  speechRate: number;
  topicMastery: Record<TopicId, {
    theoryRead: boolean;
    flashcardsStudied: number;
    practiceCorrect: number;
    practiceTotal: number;
  }>;
  mistakeIds: string[]; // question ids that the user got wrong
  savedExams: ExamAttempt[];
  flashcardLevels: Record<string, number>; // cardId -> level 1..4 (spaced repetition)
}
