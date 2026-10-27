import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Clock,
  Sparkles,
  AlertTriangle,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { Question, TopicId, ExamAttempt, UserStats } from './types.ts';
import { ALL_QUESTIONS } from './dataQuestionsBank.ts';
import { TOPICS_DATA } from './dataTopics.ts';
import { randomizeQuestions } from './shuffleUtils.ts';
import { TranslatableText } from './TranslatableText.tsx';

type ExamLevel = 'facil' | 'medio' | 'dificil' | 'final';

interface ExamSimulacroViewProps {
  stats: UserStats;
  onSaveExamAttempt: (exam: ExamAttempt) => void;
  onRecordQuestion: (questionId: string, topicId: TopicId, isCorrect: boolean) => void;
}

export const ExamSimulacroView: React.FC<ExamSimulacroViewProps> = ({
  stats,
  onSaveExamAttempt,
  onRecordQuestion,
}) => {
  const [examLevel, setExamLevel] = useState<ExamLevel | null>(null);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [hintsUsedCount, setHintsUsedCount] = useState(0);
  const [isExamCompleted, setIsExamCompleted] = useState(false);
  const [examResult, setExamResult] = useState<ExamAttempt | null>(null);

  const startExam = (level: ExamLevel) => {
    let count = 20;
    if (level === 'medio') count = 30;
    else if (level === 'dificil') count = 40;
    else if (level === 'final') count = 35;

    let pool = ALL_QUESTIONS;
    if (level === 'facil') {
      pool = ALL_QUESTIONS.filter((q) => q.level === 'facil' || q.level === 'medio');
    } else if (level === 'medio') {
      pool = ALL_QUESTIONS.filter((q) => q.level === 'medio' || q.level === 'dificil');
    } else if (level === 'dificil') {
      pool = ALL_QUESTIONS.filter((q) => q.level === 'dificil');
    }

    const randomized = randomizeQuestions(pool, count);
    setExamLevel(level);
    setExamQuestions(randomized);
    setCurrentIndex(0);
    setUserAnswers({});
    setHintsUsedCount(0);
    setIsExamCompleted(false);
    setExamResult(null);
  };

  const currentQ = examQuestions[currentIndex];

  const handleSelectOption = (optId: string) => {
    if (!isExamCompleted && currentQ) {
      setUserAnswers((prev) => ({ ...prev, [currentQ.id]: optId }));
    }
  };

  const handleFinishExam = () => {
    let correctCount = 0;
    const topicStats: Record<string, { correct: number; total: number }> = {};

    examQuestions.forEach((q) => {
      if (!topicStats[q.topicId]) {
        topicStats[q.topicId] = { correct: 0, total: 0 };
      }
      topicStats[q.topicId].total += 1;

      const isCorrect = userAnswers[q.id] === q.correctOptionId;
      if (isCorrect) {
        correctCount++;
        topicStats[q.topicId].correct += 1;
      }
      onRecordQuestion(q.id, q.topicId, isCorrect);
    });

    const totalQuestions = examQuestions.length;
    const scoreOutOf10 = (correctCount / totalQuestions) * 10;
    const percentage = Math.round((correctCount / totalQuestions) * 100);

    const weakTopics: TopicId[] = [];
    const strongTopics: TopicId[] = [];

    Object.entries(topicStats).forEach(([topicId, st]) => {
      const topicRatio = st.correct / st.total;
      if (topicRatio < 0.6) {
        weakTopics.push(topicId as TopicId);
      } else if (topicRatio >= 0.8) {
        strongTopics.push(topicId as TopicId);
      }
    });

    const levelNames: Record<ExamLevel, string> = {
      facil: 'Nivel 1 — Fácil (20 preg.)',
      medio: 'Nivel 2 — Intermedio (30 preg.)',
      dificil: 'Nivel 3 — Difícil (40 preg.)',
      final: 'Nivel 4 — Examen Final Completo',
    };

    const attempt: ExamAttempt = {
      id: 'exam-' + Date.now(),
      date: new Date().toLocaleDateString('es-ES'),
      level: examLevel || 'facil',
      levelName: levelNames[examLevel || 'facil'],
      totalQuestions,
      correctAnswers: correctCount,
      scoreOutOf10,
      percentage,
      weakTopics,
      strongTopics,
      hintsUsedCount,
      timeSpentSeconds: 0,
    };

    setIsExamCompleted(true);
    setExamResult(attempt);
    onSaveExamAttempt(attempt);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Level Selection screen when no exam active */}
      {!examLevel && (
        <div className="space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Simulacros Oficiales de Examen · 1.º de ESO</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Elige el nivel del simulacro
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
              En el modo examen no se muestran las soluciones tras cada pregunta para simular una prueba real del instituto. Recibirás tu calificación oficial sobre 10 puntos, con desglose por temas e informe personalizado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Nivel 1 · Iniciación
                </span>
                <h3 className="text-lg font-bold text-slate-900">Examen Fácil (20 preguntas)</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Preguntas claras sobre definiciones clave de las funciones, modalidades, partes de la oración y figuras elementales.
                </p>
              </div>
              <button
                type="button"
                onClick={() => startExam('facil')}
                className="w-full py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs transition-colors"
              >
                Comenzar Nivel 1 (20 preg.)
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Nivel 2 · Estándar ESO
                </span>
                <h3 className="text-lg font-bold text-slate-900">Examen Intermedio (30 preguntas)</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Equivalente a un examen trimestral de instituto español con análisis de frases y distinción de conceptos similares.
                </p>
              </div>
              <button
                type="button"
                onClick={() => startExam('medio')}
                className="w-full py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs transition-colors"
              >
                Comenzar Nivel 2 (30 preg.)
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  Nivel 3 · Avanzado
                </span>
                <h3 className="text-lg font-bold text-slate-900">Examen Difícil (40 preguntas)</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Preguntas con trampas, identificación de figuras en versos de Bécquer y Machado, y análisis gramatical exhaustivo.
                </p>
              </div>
              <button
                type="button"
                onClick={() => startExam('dificil')}
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
              >
                Comenzar Nivel 3 (40 preg.)
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 hover:border-rose-400 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
                  Nivel 4 · Completo
                </span>
                <h3 className="text-lg font-bold text-slate-900">Examen Final Global (35 preguntas)</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Prueba global que equilibra equitativamente los 10 temas del cuaderno para otorgar la nota final del curso.
                </p>
              </div>
              <button
                type="button"
                onClick={() => startExam('final')}
                className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition-colors"
              >
                Comenzar Examen Final
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Active Exam in Progress */}
      {examLevel && !isExamCompleted && currentQ && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
            <div>
              <span className="font-semibold text-slate-900 uppercase tracking-wide">
                Modo Examen Estricto
              </span>
              <span className="text-slate-400 ml-2">
                Pregunta {currentIndex + 1} de {examQuestions.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="tabular-nums font-semibold text-teal-800">
                Respondidas: {Object.keys(userAnswers).length} / {examQuestions.length}
              </span>
            </div>
          </div>

          {/* Prompt */}
          <div className="space-y-3">
            <TranslatableText
              text={currentQ.prompt}
              spanishClassName="text-lg sm:text-xl font-bold text-slate-900 leading-snug"
              armenianClassName="text-base font-armenian text-amber-950 font-normal"
              showAudio
              speechRate={stats.speechRate}
              onTranslateToggle={(open) => {
                if (open) setHintsUsedCount((prev) => prev + 1);
              }}
              block
              initiallyOpen={false}
            />
          </div>

          {/* Hint banner */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 bg-slate-50/80 px-3.5 py-2 rounded-xl border border-slate-200/80">
            <span className="font-bold text-teal-700">💡 Nota de examen:</span>
            <span>Toca el texto en español para abrir la traducción al armenio si necesitas ayuda. Toca la letra o la opción para marcar tu respuesta.</span>
          </div>

          {/* Shuffled Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = userAnswers[currentQ.id] === opt.id;

              return (
                <div
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3.5 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-teal-700 bg-teal-50/70 shadow-xs ring-1 ring-teal-600 font-semibold text-slate-900'
                      : 'border-slate-200 bg-white hover:border-teal-400 text-slate-800'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleSelectOption(opt.id)}
                    className={`w-8 h-8 rounded-xl font-mono text-sm font-bold flex items-center justify-center shrink-0 transition-transform active:scale-95 ${
                      isSelected ? 'bg-teal-700 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                    title={`Seleccionar opción ${letter}`}
                  >
                    {letter}
                  </button>
                  <div className="flex-1 min-w-0">
                    <TranslatableText
                      text={opt.text}
                      spanishClassName="text-base sm:text-lg font-medium"
                      armenianClassName="text-sm sm:text-base"
                      onTranslateToggle={(open) => {
                        if (open) setHintsUsedCount((prev) => prev + 1);
                      }}
                      isQuizOption
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40"
            >
              ← Anterior
            </button>

            {currentIndex < examQuestions.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => prev + 1)}
                className="px-5 py-2 text-xs font-bold rounded-lg bg-teal-700 text-white hover:bg-teal-800"
              >
                Siguiente →
              </button>
            ) : (
              <button
                type="button"
                disabled={Object.keys(userAnswers).length < examQuestions.length}
                onClick={handleFinishExam}
                className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 disabled:opacity-40 shadow-sm"
              >
                Entregar y Calificar Examen
              </button>
            )}
          </div>
        </div>
      )}

      {/* RESULTADO DEL EXAMEN SCREEN */}
      {isExamCompleted && examResult && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-8 shadow-sm">
          {/* Header Nota */}
          <div className="text-center space-y-2 pb-6 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block">
              RESULTADO DEL EXAMEN · {examResult.levelName}
            </span>
            <div className="text-5xl sm:text-6xl font-black text-slate-900 tabular-nums">
              {examResult.scoreOutOf10.toFixed(1)}{' '}
              <span className="text-2xl text-slate-400 font-normal">/ 10</span>
            </div>

            {/* Official Spanish grade badge */}
            {(() => {
              let label = 'Insuficiente';
              let badgeColor = 'bg-rose-50 text-rose-700 border-rose-200';
              if (examResult.scoreOutOf10 >= 9) {
                label = 'Sobresaliente';
                badgeColor = 'bg-emerald-50 text-emerald-800 border-emerald-300';
              } else if (examResult.scoreOutOf10 >= 7) {
                label = 'Notable';
                badgeColor = 'bg-teal-50 text-teal-800 border-teal-300';
              } else if (examResult.scoreOutOf10 >= 6) {
                label = 'Bien';
                badgeColor = 'bg-blue-50 text-blue-800 border-blue-200';
              } else if (examResult.scoreOutOf10 >= 5) {
                label = 'Suficiente';
                badgeColor = 'bg-amber-50 text-amber-800 border-amber-300';
              }

              return (
                <div className="inline-block mt-2">
                  <span
                    className={`px-4 py-1 rounded-full border text-xs font-bold tracking-wide uppercase ${badgeColor}`}
                  >
                    Calificación oficial: {label} ({examResult.percentage}%)
                  </span>
                </div>
              );
            })()}
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 text-center text-xs">
            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200">
              <span className="text-xl sm:text-2xl font-bold text-emerald-800 tabular-nums block">
                {examResult.correctAnswers}
              </span>
              <span className="text-emerald-700">Respuestas correctas</span>
            </div>

            <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200">
              <span className="text-xl sm:text-2xl font-bold text-rose-800 tabular-nums block">
                {examResult.totalQuestions - examResult.correctAnswers}
              </span>
              <span className="text-rose-700">Respuestas incorrectas</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xl sm:text-2xl font-bold text-slate-800 tabular-nums block">
                {examResult.hintsUsedCount}
              </span>
              <span className="text-slate-500">Traducciones consultadas</span>
            </div>
          </div>

          {/* Strong & Weak Topics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Temas dominados</span>
              </span>
              {examResult.strongTopics.length > 0 ? (
                <ul className="text-xs text-slate-700 space-y-1">
                  {examResult.strongTopics.map((t) => (
                    <li key={t}>• {t.replace('-', ' ')}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-slate-500">Continúa practicando para consolidar temas con $\ge 80\%$.</p>
              )}
            </div>

            <div className="p-5 rounded-xl bg-amber-50/50 border border-amber-200 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Temas que necesitan repaso</span>
              </span>
              {examResult.weakTopics.length > 0 ? (
                <ul className="text-xs text-slate-700 space-y-1">
                  {examResult.weakTopics.map((t) => (
                    <li key={t}>• {t.replace('-', ' ')}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-emerald-700 font-medium">
                  ¡Excelente! No hay temas críticos por debajo del 60%.
                </p>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setExamLevel(null)}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold"
            >
              ← Elegir otro nivel
            </button>

            <button
              type="button"
              onClick={() => startExam(examResult.level)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-teal-700 text-white text-xs font-bold hover:bg-teal-800 transition-colors shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Repetir examen con nuevas preguntas</span>
            </button>
          </div>

          {/* Full review of questions and mistakes */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <h3 className="font-bold text-sm text-slate-900">
              Desglose detallado de las {examQuestions.length} preguntas
            </h3>

            <div className="space-y-3">
              {examQuestions.map((q, idx) => {
                const userChoice = userAnswers[q.id];
                const isCorrect = userChoice === q.correctOptionId;

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border space-y-2 ${
                      isCorrect
                        ? 'border-emerald-200 bg-emerald-50/30'
                        : 'border-rose-200 bg-rose-50/40'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 text-xs">
                      <span className="font-semibold text-slate-800">
                        {idx + 1}. {q.prompt.es}
                      </span>
                      <span
                        className={`font-bold px-2 py-0.5 rounded text-[11px] shrink-0 ${
                          isCorrect
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {isCorrect ? 'Correcto' : 'Incorrecto'}
                      </span>
                    </div>

                    <div className="text-xs text-slate-600">
                      <TranslatableText
                        text={q.explanation}
                        spanishClassName="text-slate-800"
                        armenianClassName="text-amber-950"
                        block
                        initiallyOpen={true}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
