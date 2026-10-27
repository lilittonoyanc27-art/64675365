import React, { useState } from 'react';
import { Swords, Flame, RotateCcw, ArrowRight, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { ALL_QUESTIONS } from './dataQuestionsBank.ts';
import { Question, TopicId, UserStats } from './types.ts';
import { randomizeQuestions } from './shuffleUtils.ts';
import { TranslatableText } from './TranslatableText.tsx';

interface MixedChallengeViewProps {
  stats: UserStats;
  onRecordQuestion: (questionId: string, topicId: TopicId, isCorrect: boolean) => void;
}

export const MixedChallengeView: React.FC<MixedChallengeViewProps> = ({
  stats,
  onRecordQuestion,
}) => {
  const [challengeQuestions, setChallengeQuestions] = useState<Question[]>(() =>
    randomizeQuestions(ALL_QUESTIONS, 20)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [score, setScore] = useState(0);

  const currentQ = challengeQuestions[currentIndex];

  const handleSelect = (optId: string) => {
    if (!isChecked) {
      setSelectedOpt(optId);
    }
  };

  const handleCheck = () => {
    if (!currentQ || !selectedOpt || isChecked) return;
    const isCorrect = selectedOpt === currentQ.correctOptionId;
    setIsChecked(true);

    if (isCorrect) {
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      if (nextStreak > bestStreak) setBestStreak(nextStreak);
      setScore((prev) => prev + 10 * nextStreak);
    } else {
      setStreak(0);
    }

    onRecordQuestion(currentQ.id, currentQ.topicId, isCorrect);
  };

  const handleNext = () => {
    if (currentIndex < challengeQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOpt(null);
      setIsChecked(false);
    } else {
      // New round
      setChallengeQuestions(randomizeQuestions(ALL_QUESTIONS, 20));
      setCurrentIndex(0);
      setSelectedOpt(null);
      setIsChecked(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-teal-950 p-6 rounded-2xl text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-teal-800/40">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-teal-300 text-xs font-bold uppercase tracking-wider">
            <Swords className="w-4 h-4 text-amber-400" />
            <span>Desafío Mixto Multitema</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white">
            Ponte a prueba sin saber el tema
          </h1>
          <p className="text-xs text-teal-200/80">
            Preguntas aleatorias de las 10 materias para entrenar reflejos de examen real.
          </p>
        </div>

        {/* Live Streaks */}
        <div className="flex items-center gap-4 bg-white/10 p-2.5 rounded-xl border border-white/10 text-xs">
          <div className="flex items-center gap-1.5 text-amber-300 font-bold">
            <Flame className="w-5 h-5 text-amber-400 animate-pulse" />
            <span className="tabular-nums text-base">{streak}</span>
            <span className="text-[10px] text-white/70 block">Racha</span>
          </div>
          <div className="border-l border-white/20 pl-3">
            <span className="text-[10px] text-white/70 block">Mejor racha</span>
            <span className="font-bold tabular-nums text-teal-200">{bestStreak}</span>
          </div>
          <div className="border-l border-white/20 pl-3">
            <span className="text-[10px] text-white/70 block">Puntuación</span>
            <span className="font-bold tabular-nums text-amber-200">{score}</span>
          </div>
        </div>
      </div>

      {/* Question Card */}
      {currentQ && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              Pregunta <span className="font-bold text-slate-900">{currentIndex + 1}</span> de{' '}
              <span className="font-bold text-slate-900">{challengeQuestions.length}</span>
            </span>
            {isChecked && (
              <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 text-[11px] font-semibold border border-teal-200">
                Tema: {currentQ.topicId.replace('-', ' ')}
              </span>
            )}
          </div>

          {/* Prompt */}
          <div className="space-y-3">
            <TranslatableText
              text={currentQ.prompt}
              spanishClassName="text-lg sm:text-xl font-bold text-slate-900 leading-snug"
              armenianClassName="text-base font-armenian text-amber-950 font-normal"
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

          {/* Shuffled Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = selectedOpt === opt.id;
              const isCorrect = opt.id === currentQ.correctOptionId;

              let optStyles = 'border-slate-200 bg-white hover:border-teal-400';
              if (isChecked) {
                if (isCorrect) {
                  optStyles = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-bold';
                } else if (isSelected) {
                  optStyles = 'border-rose-400 bg-rose-50/80 text-rose-950 font-medium';
                } else {
                  optStyles = 'opacity-40 border-slate-200 bg-slate-50';
                }
              } else if (isSelected) {
                optStyles = 'border-teal-600 bg-teal-50/70 ring-1 ring-teal-500 shadow-xs';
              }

              return (
                <div
                  key={opt.id}
                  onClick={() => handleSelect(opt.id)}
                  className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3.5 transition-all cursor-pointer ${optStyles}`}
                >
                  <button
                    type="button"
                    onClick={() => handleSelect(opt.id)}
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
            {!isChecked ? (
              <div className="flex justify-end">
                <button
                  type="button"
                  disabled={!selectedOpt}
                  onClick={handleCheck}
                  className="px-6 py-2.5 rounded-xl bg-teal-700 text-white font-bold text-xs hover:bg-teal-800 disabled:opacity-40 transition-colors shadow-xs"
                >
                  Comprobar
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div
                  className={`p-4 rounded-xl border flex items-start gap-3 text-xs ${
                    selectedOpt === currentQ.correctOptionId
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                      : 'bg-rose-50 border-rose-200 text-rose-950'
                  }`}
                >
                  {selectedOpt === currentQ.correctOptionId ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <span className="font-bold text-sm block">
                      {selectedOpt === currentQ.correctOptionId
                        ? `¡Excelente racha! +${10 * streak} puntos`
                        : '¡Has fallado la racha! Repasa el concepto:'}
                    </span>
                    <TranslatableText
                      text={currentQ.explanation}
                      spanishClassName="text-xs text-slate-800"
                      armenianClassName="text-xs font-armenian text-amber-950 font-normal"
                      block
                      initiallyOpen={true}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-teal-700 text-white font-bold text-xs hover:bg-teal-800 transition-colors"
                  >
                    <span>Siguiente pregunta</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
