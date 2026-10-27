import React, { useState, useEffect } from 'react';
import {
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Filter,
  Check,
} from 'lucide-react';
import { Question, TopicId, UserStats } from './types.ts';
import { TOPICS_DATA } from './dataTopics.ts';
import { ALL_QUESTIONS } from './dataQuestionsBank.ts';
import { TranslatableText } from './TranslatableText.tsx';
import { randomizeQuestions } from './shuffleUtils.ts';

interface PracticeViewProps {
  stats: UserStats;
  initialTopicId?: TopicId;
  onRecordQuestion: (questionId: string, topicId: TopicId, isCorrect: boolean) => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({
  stats,
  initialTopicId,
  onRecordQuestion,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>(initialTopicId || 'all');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [sessionCorrectCount, setSessionCorrectCount] = useState(0);
  const [sessionTotalAnswered, setSessionTotalAnswered] = useState(0);

  // Initialize randomized questions on filter change
  useEffect(() => {
    const rawQuestions =
      selectedTopic === 'all'
        ? ALL_QUESTIONS
        : ALL_QUESTIONS.filter((q) => q.topicId === selectedTopic);

    setQuestions(randomizeQuestions(rawQuestions));
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsAnswerChecked(false);
  }, [selectedTopic]);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (optId: string) => {
    if (!isAnswerChecked) {
      setSelectedOptionId(optId);
    }
  };

  const handleCheckAnswer = () => {
    if (!currentQ || !selectedOptionId || isAnswerChecked) return;
    const isCorrect = selectedOptionId === currentQ.correctOptionId;
    setIsAnswerChecked(true);
    setSessionTotalAnswered((prev) => prev + 1);
    if (isCorrect) {
      setSessionCorrectCount((prev) => prev + 1);
    }
    onRecordQuestion(currentQ.id, currentQ.topicId, isCorrect);
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerChecked(false);
    } else {
      // Re-shuffle for infinite practice
      const rawQuestions =
        selectedTopic === 'all'
          ? ALL_QUESTIONS
          : ALL_QUESTIONS.filter((q) => q.topicId === selectedTopic);
      setQuestions(randomizeQuestions(rawQuestions));
      setCurrentIndex(0);
      setSelectedOptionId(null);
      setIsAnswerChecked(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Top Bar with Topic selector */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900">
            Practica por temas (Entrenamiento interactivo)
          </h1>
          <p className="text-xs text-slate-500">
            Opciones desordenadas al azar mediante Fisher-Yates para evitar sesgos de posición.
          </p>
        </div>

        {/* Session Score */}
        <div className="flex items-center gap-3 text-xs font-semibold">
          <div className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
            Aciertos: {sessionCorrectCount} / {sessionTotalAnswered}
          </div>
          <button
            type="button"
            onClick={() => {
              const rawQuestions =
                selectedTopic === 'all'
                  ? ALL_QUESTIONS
                  : ALL_QUESTIONS.filter((q) => q.topicId === selectedTopic);
              setQuestions(randomizeQuestions(rawQuestions));
              setCurrentIndex(0);
              setSelectedOptionId(null);
              setIsAnswerChecked(false);
            }}
            className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
            title="Volver a barajar las preguntas"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter by Topic Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
        <button
          type="button"
          onClick={() => setSelectedTopic('all')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            selectedTopic === 'all'
              ? 'bg-teal-700 text-white shadow-xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Todos los temas ({ALL_QUESTIONS.length})
        </button>
        {TOPICS_DATA.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setSelectedTopic(t.id)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              selectedTopic === t.id
                ? 'bg-teal-700 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Tema {t.number}: {t.title.es}
          </button>
        ))}
      </div>

      {/* Main Question Card */}
      {currentQ ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
          {/* Card meta */}
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              Pregunta <span className="font-bold text-slate-900">{currentIndex + 1}</span> de{' '}
              <span className="font-bold text-slate-900">{questions.length}</span>
            </span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold uppercase text-[10px]">
                Nivel {currentQ.level}
              </span>
            </div>
          </div>

          {/* Prompt */}
          <div className="space-y-3">
            <TranslatableText
              text={currentQ.prompt}
              spanishClassName="text-lg sm:text-xl font-bold text-slate-900 leading-snug"
              armenianClassName="text-base font-armenian text-amber-950"
              showAudio
              speechRate={stats.speechRate}
              block
              initiallyOpen={false}
            />
          </div>

          {/* Hint banner for ESO student */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 bg-slate-50/80 px-3.5 py-2 rounded-xl border border-slate-200/80">
            <span className="font-bold text-teal-700">💡 Consejo:</span>
            <span>Toca cualquier texto en español para abrir su traducción al armenio. Toca la letra o la opción para responder.</span>
          </div>

          {/* Shuffled Options (Fisher-Yates) */}
          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => {
              const letter = String.fromCharCode(65 + idx); // A, B, C, D
              const isSelected = selectedOptionId === opt.id;
              const isCorrect = opt.id === currentQ.correctOptionId;

              let cardStyles = 'border-slate-200 bg-white hover:border-teal-400';
              if (isAnswerChecked) {
                if (isCorrect) {
                  cardStyles = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold';
                } else if (isSelected) {
                  cardStyles = 'border-rose-400 bg-rose-50/80 text-rose-950';
                } else {
                  cardStyles = 'opacity-40 border-slate-200 bg-slate-50';
                }
              } else if (isSelected) {
                cardStyles = 'border-teal-600 bg-teal-50/70 shadow-xs ring-1 ring-teal-500';
              }

              return (
                <div
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3.5 transition-all cursor-pointer ${cardStyles}`}
                >
                  <button
                    type="button"
                    onClick={() => handleSelectOption(opt.id)}
                    className={`w-8 h-8 rounded-xl font-mono text-sm font-bold flex items-center justify-center shrink-0 transition-transform active:scale-95 ${
                      isSelected
                        ? 'bg-teal-700 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                    title={`Seleccionar opción ${letter}`}
                  >
                    {letter}
                  </button>

                  <div className="flex-1 min-w-0">
                    <TranslatableText
                      text={opt.text}
                      spanishClassName="text-base sm:text-lg font-medium text-slate-800"
                      armenianClassName="text-sm sm:text-base"
                      isQuizOption
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action & Feedback Footer */}
          <div className="pt-4 border-t border-slate-100 space-y-4">
            {!isAnswerChecked ? (
              <div className="flex justify-end">
                <button
                  type="button"
                  disabled={!selectedOptionId}
                  onClick={handleCheckAnswer}
                  className="px-7 py-3 rounded-xl bg-teal-700 text-white font-bold text-sm hover:bg-teal-800 disabled:opacity-40 transition-colors shadow-xs"
                >
                  Comprobar respuesta
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Result Message */}
                <div
                  className={`p-5 rounded-2xl border flex items-start gap-3.5 text-sm ${
                    selectedOptionId === currentQ.correctOptionId
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-rose-50 border-rose-200 text-rose-900'
                  }`}
                >
                  {selectedOptionId === currentQ.correctOptionId ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-2 flex-1">
                    <span className="font-bold text-base block">
                      {selectedOptionId === currentQ.correctOptionId
                        ? '¡Respuesta correcta! (+15 pts)'
                        : 'Respuesta incorrecta. Repasa la explicación.'}
                    </span>
                    <TranslatableText
                      text={currentQ.explanation}
                      spanishClassName="text-sm sm:text-base text-slate-800"
                      armenianClassName="text-sm sm:text-base font-armenian text-amber-950 font-normal"
                      block
                      initiallyOpen={false}
                    />
                  </div>
                </div>

                {/* Next button */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="flex items-center gap-2 px-7 py-3 rounded-xl bg-teal-700 text-white font-bold text-sm hover:bg-teal-800 transition-colors shadow-xs"
                  >
                    <span>Siguiente pregunta</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p className="text-sm text-slate-500">No hay preguntas disponibles en este momento.</p>
      )}
    </div>
  );
};
