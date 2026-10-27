import { UserStats, TopicId, ExamAttempt } from './types.ts';

const STORAGE_KEY = 'preparado_examen_lengua_v1';

const defaultStats: UserStats = {
  points: 120,
  streakDays: 1,
  lastActiveDate: new Date().toISOString().slice(0, 10),
  speechRate: 1.0,
  topicMastery: {
    'funciones-lenguaje': { theoryRead: false, flashcardsStudied: 0, practiceCorrect: 0, practiceTotal: 0 },
    'modalidades-oracionales': { theoryRead: false, flashcardsStudied: 0, practiceCorrect: 0, practiceTotal: 0 },
    'comunicacion-elementos': { theoryRead: false, flashcardsStudied: 0, practiceCorrect: 0, practiceTotal: 0 },
    'categorias-gramaticales': { theoryRead: false, flashcardsStudied: 0, practiceCorrect: 0, practiceTotal: 0 },
    'literatura-popular-culta': { theoryRead: false, flashcardsStudied: 0, practiceCorrect: 0, practiceTotal: 0 },
    'generos-formas-popular': { theoryRead: false, flashcardsStudied: 0, practiceCorrect: 0, practiceTotal: 0 },
    'lenguaje-prosa-verso': { theoryRead: false, flashcardsStudied: 0, practiceCorrect: 0, practiceTotal: 0 },
    'figuras-fonicas': { theoryRead: false, flashcardsStudied: 0, practiceCorrect: 0, practiceTotal: 0 },
    'figuras-morfosintacticas': { theoryRead: false, flashcardsStudied: 0, practiceCorrect: 0, practiceTotal: 0 },
    'figuras-semanticas': { theoryRead: false, flashcardsStudied: 0, practiceCorrect: 0, practiceTotal: 0 },
  },
  mistakeIds: [],
  savedExams: [],
  flashcardLevels: {},
};

export function loadUserStats(): UserStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultStats;
    const parsed = JSON.parse(raw);
    return {
      ...defaultStats,
      ...parsed,
      topicMastery: {
        ...defaultStats.topicMastery,
        ...(parsed.topicMastery || {}),
      },
    };
  } catch {
    return defaultStats;
  }
}

export function saveUserStats(stats: UserStats): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch {
    // quota exceeded or disabled
  }
}

export function recordQuestionResult(
  stats: UserStats,
  questionId: string,
  topicId: TopicId,
  isCorrect: boolean
): UserStats {
  const currentTopic = stats.topicMastery[topicId] || {
    theoryRead: false,
    flashcardsStudied: 0,
    practiceCorrect: 0,
    practiceTotal: 0,
  };

  const updatedMistakes = isCorrect
    ? stats.mistakeIds.filter((id) => id !== questionId)
    : Array.from(new Set([...stats.mistakeIds, questionId]));

  const updatedStats: UserStats = {
    ...stats,
    points: stats.points + (isCorrect ? 15 : 2),
    mistakeIds: updatedMistakes,
    topicMastery: {
      ...stats.topicMastery,
      [topicId]: {
        ...currentTopic,
        practiceCorrect: currentTopic.practiceCorrect + (isCorrect ? 1 : 0),
        practiceTotal: currentTopic.practiceTotal + 1,
      },
    },
  };

  saveUserStats(updatedStats);
  return updatedStats;
}

export function recordExamAttempt(stats: UserStats, exam: ExamAttempt): UserStats {
  const updatedStats: UserStats = {
    ...stats,
    points: stats.points + Math.round(exam.scoreOutOf10 * 10),
    savedExams: [exam, ...stats.savedExams.slice(0, 19)], // keep last 20 exams
  };
  saveUserStats(updatedStats);
  return updatedStats;
}

export function resetAllProgress(): UserStats {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore
  }
  return defaultStats;
}
