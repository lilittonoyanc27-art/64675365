import React, { useState } from 'react';
import {
  BookOpen,
  Brain,
  CheckCircle2,
  HelpCircle,
  PenTool,
  RotateCcw,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Volume2,
  Award,
} from 'lucide-react';
import { Topic, TopicId, UserStats, Question } from './types.ts';
import { TOPICS_DATA } from './dataTopics.ts';
import { TranslatableText } from './TranslatableText.tsx';
import { getQuestionsByTopic } from './dataQuestionsBank.ts';
import { randomizeQuestions } from './shuffleUtils.ts';
import { speakSpanish, isSpeechSupported } from './audioUtils.ts';
import { FLASHCARDS_DATA } from './dataFlashcards.ts';

interface TheoryViewProps {
  stats: UserStats;
  initialTopicId?: TopicId;
  onRecordQuestion: (questionId: string, topicId: TopicId, isCorrect: boolean) => void;
  onNavigateToPractice: (topicId: TopicId) => void;
}

type Stage = 'aprende' | 'recuerda' | 'reconoce' | 'practica' | 'explica' | 'comprueba';

export const TheoryView: React.FC<TheoryViewProps> = ({
  stats,
  initialTopicId,
  onRecordQuestion,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<TopicId>(
    initialTopicId || 'funciones-lenguaje'
  );
  const [activeStage, setActiveStage] = useState<Stage>('aprende');

  // Topic object
  const currentTopic =
    TOPICS_DATA.find((t) => t.id === selectedTopicId) || TOPICS_DATA[0];

  // Stage 1 (Aprende): carousel of theory items
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const currentSection = currentTopic.sections[0];
  const totalItems = currentSection.items.length;
  const currentItem = currentSection.items[currentSectionIndex] || currentSection.items[0];

  // Stage 2 (Recuerda): Flashcard memory items
  const topicFlashcards = FLASHCARDS_DATA.filter((fc) => fc.topicId === selectedTopicId);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [isReverseCard, setIsReverseCard] = useState(false);

  // Stage 3 (Reconoce): quick recognition quiz items
  const topicQuestions = getQuestionsByTopic(selectedTopicId);
  const [reconQuestions, setReconQuestions] = useState<Question[]>(() =>
    randomizeQuestions(topicQuestions.slice(0, 5))
  );
  const [reconIndex, setReconIndex] = useState(0);
  const [reconSelectedOpt, setReconSelectedOpt] = useState<string | null>(null);
  const [reconShowFeedback, setReconShowFeedback] = useState(false);

  // Stage 5 (Explica): Student writing challenge
  const [studentWrittenAnswer, setStudentWrittenAnswer] = useState('');
  const [hasSubmittedExplanation, setHasSubmittedExplanation] = useState(false);

  // Stage 6 (Comprueba): Mini-exam (10-15 questions)
  const [quizQuestions, setQuizQuestions] = useState<Question[]>(() =>
    randomizeQuestions(topicQuestions.slice(0, 15))
  );
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizSelected, setQuizSelected] = useState<Record<string, string>>({});
  const [quizFinished, setQuizFinished] = useState(false);

  // Switch topic handler
  const handleSelectTopic = (topicId: TopicId) => {
    setSelectedTopicId(topicId);
    setCurrentSectionIndex(0);
    setActiveStage('aprende');
    setFlashcardIndex(0);
    setIsCardFlipped(false);
    const newQuestions = getQuestionsByTopic(topicId);
    setReconQuestions(randomizeQuestions(newQuestions.slice(0, 5)));
    setReconIndex(0);
    setReconSelectedOpt(null);
    setReconShowFeedback(false);
    setStudentWrittenAnswer('');
    setHasSubmittedExplanation(false);
    setQuizQuestions(randomizeQuestions(newQuestions.slice(0, 15)));
    setQuizIndex(0);
    setQuizSelected({});
    setQuizFinished(false);
  };

  const stages: Array<{ id: Stage; label: string; icon: React.ReactNode }> = [
    { id: 'aprende', label: '1. Aprende', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'recuerda', label: '2. Recuerda', icon: <Brain className="w-4 h-4" /> },
    { id: 'reconoce', label: '3. Reconoce', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'practica', label: '4. Practica', icon: <PenTool className="w-4 h-4" /> },
    { id: 'explica', label: '5. Explica', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'comprueba', label: '6. Comprueba', icon: <Award className="w-4 h-4" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Topics Selector Pill Bar */}
      <div className="overflow-x-auto scrollbar-none pb-2">
        <div className="flex items-center gap-2 min-w-max">
          {TOPICS_DATA.map((t) => {
            const isSelected = t.id === selectedTopicId;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => handleSelectTopic(t.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all border ${
                  isSelected
                    ? 'bg-teal-700 text-white border-teal-700 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-teal-300 hover:bg-slate-50'
                }`}
              >
                <span className="w-5 h-5 rounded-md bg-black/10 flex items-center justify-center font-mono text-[11px]">
                  {t.number}
                </span>
                <span className="whitespace-nowrap">{t.title.es}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Topic Title Header */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
            <span>Tema {currentTopic.number} de 10</span>
            <span className="text-slate-300">·</span>
            <span className="font-armenian text-slate-500 font-normal">1.º de ESO</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {currentTopic.title.es}
          </h1>
          <p className="text-xs sm:text-sm font-armenian text-amber-900/80 mt-0.5">
            {currentTopic.title.hy}
          </p>
        </div>

        {/* 6 Pedagogical Stages Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl overflow-x-auto scrollbar-none">
          {stages.map((st) => {
            const isActive = activeStage === st.id;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setActiveStage(st.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-teal-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {st.icon}
                <span>{st.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* STAGE 1: APRENDE */}
      {activeStage === 'aprende' && (
        <div className="space-y-6">
          {/* Progress within lesson */}
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              Concepto <span className="font-bold text-slate-900">{currentSectionIndex + 1}</span> de{' '}
              <span className="font-bold text-slate-900">{totalItems}</span>
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                disabled={currentSectionIndex === 0}
                onClick={() => setCurrentSectionIndex((prev) => Math.max(0, prev - 1))}
                className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 transition-colors"
                title="Concepto anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                disabled={currentSectionIndex === totalItems - 1}
                onClick={() => setCurrentSectionIndex((prev) => Math.min(totalItems - 1, prev + 1))}
                className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 transition-colors"
                title="Concepto siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Current Bite-sized Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
            {/* Title & Definition */}
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <TranslatableText
                  text={currentItem.name}
                  spanishClassName="text-xl sm:text-2xl font-bold text-slate-900"
                  armenianClassName="text-base text-amber-900 font-armenian"
                  showAudio
                  speechRate={stats.speechRate}
                  block
                />
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800 block">
                  Definición exacta para el examen
                </span>
                <TranslatableText
                  text={currentItem.definition}
                  spanishClassName="text-base sm:text-lg text-slate-900 leading-relaxed font-semibold"
                  armenianClassName="text-sm sm:text-base font-armenian text-amber-950 font-normal"
                  showAudio
                  speechRate={stats.speechRate}
                  block
                  initiallyOpen={false}
                />
              </div>
            </div>

            {/* Structure / Formula if present */}
            {currentItem.formulaOrStructure && (
              <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200/70 text-sm font-mono text-teal-950">
                <span className="font-sans font-bold uppercase tracking-wider text-xs text-teal-800 block mb-1">
                  Estructura esquemática
                </span>
                {currentItem.formulaOrStructure}
              </div>
            )}

            {/* How to identify */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 block">
                Cómo reconocerlo en una frase o verso
              </span>
              <TranslatableText
                text={currentItem.howToIdentify}
                spanishClassName="text-base sm:text-lg text-slate-800 leading-relaxed"
                armenianClassName="text-sm sm:text-base font-armenian text-amber-900"
                block
                initiallyOpen={false}
              />
            </div>

            {/* Examples (5+ distinct examples) */}
            <div className="space-y-3 pt-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 block">
                Ejemplos comentados (toca el texto en español para ver la traducción al armenio)
              </span>

              <div className="space-y-3">
                {currentItem.examples.map((ex, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-teal-300 transition-colors"
                  >
                    <TranslatableText
                      text={ex}
                      spanishClassName="text-base sm:text-lg font-semibold text-slate-900"
                      armenianClassName="text-sm sm:text-base font-armenian text-amber-950 font-normal"
                      showAudio
                      speechRate={stats.speechRate}
                      block
                      initiallyOpen={false}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Distinction & Exam tip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
              {currentItem.distinctionFromOthers && (
                <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-100 space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-900 block">
                    Distinción clave
                  </span>
                  <TranslatableText
                    text={currentItem.distinctionFromOthers}
                    spanishClassName="text-xs text-indigo-950"
                    armenianClassName="text-xs font-armenian text-indigo-900"
                    block
                  />
                </div>
              )}

              {currentItem.examTip && (
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block">
                    Consejo para el examen de 1.º ESO
                  </span>
                  <TranslatableText
                    text={currentItem.examTip}
                    spanishClassName="text-xs text-amber-950 font-medium"
                    armenianClassName="text-xs font-armenian text-amber-900"
                    block
                  />
                </div>
              )}
            </div>

            {/* Lesson navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                disabled={currentSectionIndex === 0}
                onClick={() => setCurrentSectionIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition-colors"
              >
                ← Anterior concepto
              </button>

              {currentSectionIndex < totalItems - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentSectionIndex((prev) => prev + 1)}
                  className="px-5 py-2 text-xs font-bold rounded-lg bg-teal-700 text-white hover:bg-teal-800 transition-colors"
                >
                  Siguiente concepto →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveStage('recuerda')}
                  className="px-5 py-2 text-xs font-bold rounded-lg bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors shadow-sm"
                >
                  ¡Completado! Pasar a 2. Recuerda →
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* STAGE 2: RECUERDA (Flashcards) */}
      {activeStage === 'recuerda' && (
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Tarjetas de memoria (Flashcards)
              </h2>
              <p className="text-xs text-slate-500">
                Pon a prueba si recuerdas la definición antes de girar la tarjeta.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsReverseCard(!isReverseCard);
                  setIsCardFlipped(false);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                  isReverseCard
                    ? 'bg-indigo-100 text-indigo-900 border-indigo-300'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {isReverseCard ? 'Modo: Definición → Término' : 'Modo: Término → Definición'}
              </button>
            </div>
          </div>

          {topicFlashcards.length > 0 ? (
            <div className="space-y-4">
              {/* Flashcard Box */}
              <div
                onClick={() => setIsCardFlipped(!isCardFlipped)}
                className={`min-h-[260px] rounded-2xl p-8 flex flex-col justify-between cursor-pointer transition-all border-2 shadow-sm ${
                  isCardFlipped
                    ? 'bg-amber-50/90 border-amber-300 text-slate-900'
                    : 'bg-white border-teal-500/60 hover:border-teal-600'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>
                    Tarjeta {flashcardIndex + 1} de {topicFlashcards.length}
                  </span>
                  <span className="text-teal-700 font-semibold text-[11px]">
                    {isCardFlipped ? 'Haz clic para ver el anverso' : 'Haz clic para girar'}
                  </span>
                </div>

                <div className="my-6 text-center space-y-3">
                  {!isCardFlipped ? (
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
                        {!isReverseCard ? 'Término a definir' : 'Definición para recordar el término'}
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900">
                        {!isReverseCard
                          ? topicFlashcards[flashcardIndex].term.es
                          : topicFlashcards[flashcardIndex].definition.es}
                      </h3>
                      <p className="text-sm font-armenian text-amber-900 mt-2">
                        {!isReverseCard
                          ? topicFlashcards[flashcardIndex].term.hy
                          : topicFlashcards[flashcardIndex].definition.hy}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3 text-left max-w-xl mx-auto">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
                        {!isReverseCard ? 'Definición correcta y ejemplo' : 'Término exacto'}
                      </span>
                      <p className="text-base font-medium text-slate-900">
                        {!isReverseCard
                          ? topicFlashcards[flashcardIndex].definition.es
                          : topicFlashcards[flashcardIndex].term.es}
                      </p>
                      <p className="text-xs font-armenian text-amber-950 font-normal">
                        {!isReverseCard
                          ? topicFlashcards[flashcardIndex].definition.hy
                          : topicFlashcards[flashcardIndex].term.hy}
                      </p>

                      <div className="pt-2 border-t border-amber-200/60 text-xs text-slate-700">
                        <span className="font-bold text-slate-900">Ejemplo: </span>
                        <span>{topicFlashcards[flashcardIndex].example.es}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-[11px] text-slate-400">
                    Gira la tarjeta para comprobar si lo sabías
                  </span>
                </div>
              </div>

              {/* Navigation controls */}
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  disabled={flashcardIndex === 0}
                  onClick={() => {
                    setFlashcardIndex((prev) => Math.max(0, prev - 1));
                    setIsCardFlipped(false);
                  }}
                  className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 transition-colors"
                >
                  ← Tarjeta anterior
                </button>

                {flashcardIndex < topicFlashcards.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => {
                      setFlashcardIndex((prev) => prev + 1);
                      setIsCardFlipped(false);
                    }}
                    className="px-4 py-2 text-xs font-bold rounded-lg bg-teal-700 text-white hover:bg-teal-800 transition-colors"
                  >
                    Siguiente tarjeta →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveStage('reconoce')}
                    className="px-5 py-2 text-xs font-bold rounded-lg bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors"
                  >
                    Pasar a 3. Reconoce →
                  </button>
                )}
              </div>
            </div>
          ) : (
            <p className="text-sm text-slate-500">No hay tarjetas disponibles para este tema.</p>
          )}
        </div>
      )}

      {/* STAGE 3: RECONOCE */}
      {activeStage === 'reconoce' && (
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
            <h2 className="text-base font-bold text-slate-900">
              Etapa 3: Reconoce el concepto en el texto
            </h2>
            <p className="text-xs text-slate-500">
              Analiza las frases y selecciona la opción correcta. Puedes ver la traducción al armenio con el botón HY.
            </p>
          </div>

          {reconQuestions.length > 0 && reconQuestions[reconIndex] && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>
                  Pregunta <span className="font-bold text-slate-900">{reconIndex + 1}</span> de{' '}
                  <span className="font-bold text-slate-900">{reconQuestions.length}</span>
                </span>
                <span className="text-[11px] font-semibold text-teal-800">
                  Dificultad: {reconQuestions[reconIndex].level}
                </span>
              </div>

              {/* Prompt */}
              <div className="space-y-3">
                <TranslatableText
                  text={reconQuestions[reconIndex].prompt}
                  spanishClassName="text-lg sm:text-xl font-bold text-slate-900 leading-snug"
                  armenianClassName="text-base font-armenian text-amber-950"
                  showAudio
                  speechRate={stats.speechRate}
                  block
                  initiallyOpen={false}
                />
              </div>

              {/* Hint banner */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 bg-slate-50/80 px-3.5 py-2 rounded-xl border border-slate-200/80">
                <span className="font-bold text-teal-700">💡 Consejo:</span>
                <span>Toca el texto en español para abrir la traducción al armenio. Toca la letra o la opción para responder.</span>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {reconQuestions[reconIndex].options.map((opt, idx) => {
                  const letter = String.fromCharCode(65 + idx);
                  const isSelected = reconSelectedOpt === opt.id;
                  const isCorrect = opt.id === reconQuestions[reconIndex].correctOptionId;

                  let optStyles = 'border-slate-200 bg-white hover:border-teal-300';
                  if (reconShowFeedback) {
                    if (isCorrect) {
                      optStyles = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold';
                    } else if (isSelected) {
                      optStyles = 'border-rose-400 bg-rose-50/80 text-rose-950';
                    } else {
                      optStyles = 'opacity-50 border-slate-200 bg-slate-50';
                    }
                  } else if (isSelected) {
                    optStyles = 'border-teal-600 bg-teal-50/60 shadow-xs ring-1 ring-teal-500';
                  }

                  return (
                    <div
                      key={opt.id}
                      onClick={() => {
                        if (!reconShowFeedback) {
                          setReconSelectedOpt(opt.id);
                        }
                      }}
                      className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3.5 transition-all cursor-pointer ${optStyles}`}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          if (!reconShowFeedback) {
                            setReconSelectedOpt(opt.id);
                          }
                        }}
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
                          spanishClassName="text-base sm:text-lg font-medium text-slate-800"
                          armenianClassName="text-sm sm:text-base font-armenian"
                          isQuizOption
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Verify or Next buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                {!reconShowFeedback ? (
                  <button
                    type="button"
                    disabled={!reconSelectedOpt}
                    onClick={() => {
                      setReconShowFeedback(true);
                      const isCorrect =
                        reconSelectedOpt === reconQuestions[reconIndex].correctOptionId;
                      onRecordQuestion(
                        reconQuestions[reconIndex].id,
                        reconQuestions[reconIndex].topicId,
                        isCorrect
                      );
                    }}
                    className="px-6 py-2.5 rounded-xl bg-teal-700 text-white font-bold text-sm hover:bg-teal-800 disabled:opacity-40 transition-colors shadow-xs"
                  >
                    Comprobar respuesta
                  </button>
                ) : (
                  <div className="w-full space-y-4">
                    {/* Explanation */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-sm">
                      <span className="font-bold text-slate-900 block text-base">Explicación razonada:</span>
                      <TranslatableText
                        text={reconQuestions[reconIndex].explanation}
                        spanishClassName="text-sm sm:text-base text-slate-800"
                        armenianClassName="text-sm sm:text-base text-amber-950 font-normal"
                        block
                        initiallyOpen={false}
                      />
                    </div>

                    <div className="flex justify-end">
                      {reconIndex < reconQuestions.length - 1 ? (
                        <button
                          type="button"
                          onClick={() => {
                            setReconIndex((prev) => prev + 1);
                            setReconSelectedOpt(null);
                            setReconShowFeedback(false);
                          }}
                          className="px-5 py-2.5 rounded-xl bg-teal-700 text-white font-bold text-xs hover:bg-teal-800 transition-colors"
                        >
                          Siguiente pregunta →
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setActiveStage('explica')}
                          className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors"
                        >
                          ¡Excelente! Pasar a 5. Explica →
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* STAGE 4: PRACTICA */}
      {activeStage === 'practica' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 text-center">
          <PenTool className="w-10 h-10 text-teal-600 mx-auto" />
          <h2 className="text-xl font-bold text-slate-900">
            Práctica completa por temas
          </h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Hemos preparado decenas de preguntas en el modo de práctica con barajado aleatorio Fisher-Yates para asegurar que domines el tema.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => setActiveStage('explica')}
              className="px-5 py-2.5 rounded-xl bg-teal-700 text-white font-bold text-xs hover:bg-teal-800 transition-colors"
            >
              Continuar a 5. Explica con tus palabras →
            </button>
          </div>
        </div>
      )}

      {/* STAGE 5: EXPLICA (Self-explanation in Spanish) */}
      {activeStage === 'explica' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Etapa 5: Entrenamiento de expresión escrita en español</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              Explica el concepto con tus propias palabras
            </h2>
            <p className="text-xs text-slate-500">
              Los exámenes escolares en España exigen explicar conceptos por escrito sin copiar de memoria.
            </p>
          </div>

          {/* Prompt */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block">
              Instrucción del examen:
            </span>
            <TranslatableText
              text={currentTopic.selfExplanationPrompt}
              spanishClassName="text-sm sm:text-base font-semibold text-amber-950"
              armenianClassName="text-xs font-armenian text-amber-900"
              block
              initiallyOpen={true}
            />
          </div>

          {/* Textarea */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700 block">
              Escribe tu respuesta en español (recuerda poner un ejemplo):
            </label>
            <textarea
              rows={4}
              value={studentWrittenAnswer}
              onChange={(e) => setStudentWrittenAnswer(e.target.value)}
              placeholder="Escribe aquí tu explicación en español..."
              className="w-full p-3.5 rounded-xl border border-slate-300 text-sm focus:border-teal-500 focus:outline-none resize-none"
            />
          </div>

          {!hasSubmittedExplanation ? (
            <button
              type="button"
              disabled={studentWrittenAnswer.trim().length < 10}
              onClick={() => setHasSubmittedExplanation(true)}
              className="px-5 py-2.5 rounded-xl bg-teal-700 text-white font-bold text-xs hover:bg-teal-800 disabled:opacity-40 transition-colors"
            >
              Comprobar mi respuesta con el modelo del profesor
            </button>
          ) : (
            <div className="space-y-5 pt-3 border-t border-slate-100">
              {/* Teacher Model Answer */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                  Respuesta modelo del profesor de Lengua:
                </span>
                <TranslatableText
                  text={currentTopic.modelExplanation}
                  spanishClassName="text-sm text-emerald-950 leading-relaxed font-medium"
                  armenianClassName="text-xs font-armenian text-emerald-900"
                  block
                  initiallyOpen={true}
                />
              </div>

              {/* Evaluation criteria */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                  Criterios de corrección (comprueba si mencionaste esto):
                </span>
                <ul className="space-y-2">
                  {currentTopic.evaluationCriteria.map((crit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <TranslatableText text={crit} spanishClassName="text-xs" block />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setActiveStage('comprueba')}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors shadow-sm"
                >
                  Pasar a 6. Comprueba (Examen del tema) →
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* STAGE 6: COMPRUEBA (Topic test of 10-15 questions) */}
      {activeStage === 'comprueba' && (
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Examen final del Tema {currentTopic.number} ({quizQuestions.length} preguntas)
              </h2>
              <p className="text-xs text-slate-500">
                Demuestra lo aprendido. Tras responder todas las preguntas verás tu nota sobre 10 y recomendaciones.
              </p>
            </div>
            {quizFinished && (
              <button
                type="button"
                onClick={() => {
                  setQuizQuestions(randomizeQuestions(topicQuestions.slice(0, 15)));
                  setQuizIndex(0);
                  setQuizSelected({});
                  setQuizFinished(false);
                }}
                className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold hover:bg-slate-50 flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reintentar con nuevas preguntas</span>
              </button>
            )}
          </div>

          {!quizFinished ? (
            quizQuestions[quizIndex] && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>
                    Pregunta <span className="font-bold text-slate-900">{quizIndex + 1}</span> de{' '}
                    <span className="font-bold text-slate-900">{quizQuestions.length}</span>
                  </span>
                  <span className="font-semibold text-teal-800">
                    Respondidas: {Object.keys(quizSelected).length} / {quizQuestions.length}
                  </span>
                </div>

                {/* Prompt */}
                <TranslatableText
                  text={quizQuestions[quizIndex].prompt}
                  spanishClassName="text-lg sm:text-xl font-bold text-slate-900 leading-snug"
                  armenianClassName="text-base font-armenian text-amber-950"
                  showAudio
                  speechRate={stats.speechRate}
                  block
                  initiallyOpen={false}
                />

                {/* Hint banner */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 bg-slate-50/80 px-3.5 py-2 rounded-xl border border-slate-200/80">
                  <span className="font-bold text-teal-700">💡 Consejo:</span>
                  <span>Toca el texto en español para abrir la traducción al armenio. Toca la letra o la opción para responder.</span>
                </div>

                {/* Shuffled Options */}
                <div className="space-y-3">
                  {quizQuestions[quizIndex].options.map((opt, idx) => {
                    const letter = String.fromCharCode(65 + idx);
                    const isSelected = quizSelected[quizQuestions[quizIndex].id] === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() =>
                          setQuizSelected((prev) => ({
                            ...prev,
                            [quizQuestions[quizIndex].id]: opt.id,
                          }))
                        }
                        className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3.5 transition-all cursor-pointer ${
                          isSelected
                            ? 'border-teal-700 bg-teal-50/70 shadow-xs ring-1 ring-teal-600 font-semibold'
                            : 'border-slate-200 bg-white hover:border-teal-300'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setQuizSelected((prev) => ({
                              ...prev,
                              [quizQuestions[quizIndex].id]: opt.id,
                            }))
                          }
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
                            spanishClassName="text-base sm:text-lg font-medium text-slate-800"
                            armenianClassName="text-sm sm:text-base font-armenian"
                            isQuizOption
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Prev / Next / Finish Navigation */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    disabled={quizIndex === 0}
                    onClick={() => setQuizIndex((prev) => Math.max(0, prev - 1))}
                    className="px-4 py-2 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40"
                  >
                    ← Anterior
                  </button>

                  {quizIndex < quizQuestions.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => setQuizIndex((prev) => prev + 1)}
                      className="px-5 py-2 text-xs font-bold rounded-lg bg-teal-700 text-white hover:bg-teal-800"
                    >
                      Siguiente pregunta →
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={Object.keys(quizSelected).length < quizQuestions.length}
                      onClick={() => {
                        // Grade quiz
                        let correctCount = 0;
                        quizQuestions.forEach((q) => {
                          const isCorrect = quizSelected[q.id] === q.correctOptionId;
                          if (isCorrect) correctCount++;
                          onRecordQuestion(q.id, q.topicId, isCorrect);
                        });
                        setQuizFinished(true);
                      }}
                      className="px-6 py-2.5 text-xs font-bold rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 disabled:opacity-40 shadow-sm"
                    >
                      Finalizar y ver calificación
                    </button>
                  )}
                </div>
              </div>
            )
          ) : (
            // Results screen
            (() => {
              const total = quizQuestions.length;
              let correct = 0;
              quizQuestions.forEach((q) => {
                if (quizSelected[q.id] === q.correctOptionId) {
                  correct++;
                }
              });
              const scoreOutOf10 = (correct / total) * 10;
              const percent = Math.round((correct / total) * 100);

              let gradeLabel = 'Insuficiente';
              let gradeColor = 'text-rose-600';
              if (scoreOutOf10 >= 9) {
                gradeLabel = 'Sobresaliente';
                gradeColor = 'text-emerald-700';
              } else if (scoreOutOf10 >= 7) {
                gradeLabel = 'Notable';
                gradeColor = 'text-teal-700';
              } else if (scoreOutOf10 >= 6) {
                gradeLabel = 'Bien';
                gradeColor = 'text-blue-700';
              } else if (scoreOutOf10 >= 5) {
                gradeLabel = 'Suficiente';
                gradeColor = 'text-amber-700';
              }

              return (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
                  <div className="text-center space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Resultado del Examen del Tema {currentTopic.number}
                    </span>
                    <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tabular-nums">
                      {scoreOutOf10.toFixed(1)}{' '}
                      <span className="text-xl text-slate-400 font-normal">/ 10</span>
                    </div>
                    <div className={`text-base font-bold ${gradeColor}`}>
                      {gradeLabel} ({percent}% de aciertos)
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto text-center text-xs">
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                      <span className="font-bold text-emerald-800 text-lg tabular-nums">
                        {correct}
                      </span>
                      <span className="text-emerald-700 block mt-0.5">Aciertos</span>
                    </div>
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-100">
                      <span className="font-bold text-rose-800 text-lg tabular-nums">
                        {total - correct}
                      </span>
                      <span className="text-rose-700 block mt-0.5">Errores</span>
                    </div>
                  </div>

                  {/* Review of all questions */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h3 className="font-bold text-sm text-slate-900">
                      Revisión de respuestas y explicaciones
                    </h3>

                    <div className="space-y-3">
                      {quizQuestions.map((q, idx) => {
                        const userChoice = quizSelected[q.id];
                        const isCorrect = userChoice === q.correctOptionId;

                        return (
                          <div
                            key={q.id}
                            className={`p-4 rounded-xl border space-y-2 ${
                              isCorrect
                                ? 'border-emerald-200 bg-emerald-50/40'
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
                                {isCorrect ? 'Correcto' : 'Fallo'}
                              </span>
                            </div>

                            <div className="text-xs text-slate-600 space-y-1">
                              <TranslatableText
                                text={q.explanation}
                                spanishClassName="text-slate-800 font-medium"
                                armenianClassName="text-amber-950"
                                block
                                initiallyOpen={false}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })()
          )}
        </div>
      )}
    </div>
  );
};
