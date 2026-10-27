import React, { useState } from 'react';
import { Search, CheckCircle2, XCircle, ArrowRight, RotateCcw, AlertTriangle } from 'lucide-react';
import { ERROR_ITEMS_DATA } from './dataErrorItems.ts';
import { TranslatableText } from './TranslatableText.tsx';
import { UserStats } from './types.ts';

interface FindErrorViewProps {
  stats: UserStats;
}

export const FindErrorView: React.FC<FindErrorViewProps> = ({ stats }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userChoice, setUserChoice] = useState<boolean | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const currentItem = ERROR_ITEMS_DATA[currentIndex];

  const handleChoose = (hasError: boolean) => {
    if (isChecked) return;
    setUserChoice(hasError);
    setIsChecked(true);
    if (hasError === currentItem.hasError) {
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < ERROR_ITEMS_DATA.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setUserChoice(null);
      setIsChecked(false);
    } else {
      setCurrentIndex(0);
      setUserChoice(null);
      setIsChecked(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Top Banner */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900">
            Encuentra el error (Cazador de fallos de examen)
          </h1>
          <p className="text-xs text-slate-500">
            Los profesores ponen afirmaciones con trampas frecuentes. Aprende a detectarlas.
          </p>
        </div>

        <div className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200">
          Aciertos: {correctCount} / {ERROR_ITEMS_DATA.length}
        </div>
      </div>

      {/* Main Statement Box */}
      {currentItem && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              Caso <span className="font-bold text-slate-900">{currentIndex + 1}</span> de{' '}
              <span className="font-bold text-slate-900">{ERROR_ITEMS_DATA.length}</span>
            </span>
            <span className="text-[11px] font-semibold text-amber-700 flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Análisis crítico</span>
            </span>
          </div>

          {/* Statement */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              Afirmación propuesta para examen:
            </span>
            <TranslatableText
              text={currentItem.statement}
              spanishClassName="text-base sm:text-lg font-bold text-slate-900 leading-snug"
              armenianClassName="text-sm font-armenian text-amber-950 font-normal"
              showAudio
              speechRate={stats.speechRate}
              block
              initiallyOpen={false}
            />
          </div>

          {/* Prompt */}
          <div className="space-y-3">
            <span className="text-sm font-semibold text-slate-700 block text-center">
              ¿Contiene algún error esta definición o análisis?
            </span>

            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
              <button
                type="button"
                disabled={isChecked}
                onClick={() => handleChoose(true)}
                className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all ${
                  isChecked && userChoice === true
                    ? currentItem.hasError
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                      : 'bg-rose-600 text-white border-rose-600'
                    : 'bg-white text-slate-800 border-slate-300 hover:border-teal-500 hover:bg-slate-50'
                }`}
              >
                ⚠️ Sí, contiene un error
              </button>

              <button
                type="button"
                disabled={isChecked}
                onClick={() => handleChoose(false)}
                className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all ${
                  isChecked && userChoice === false
                    ? !currentItem.hasError
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                      : 'bg-rose-600 text-white border-rose-600'
                    : 'bg-white text-slate-800 border-slate-300 hover:border-teal-500 hover:bg-slate-50'
                }`}
              >
                ✓ No, es totalmente correcta
              </button>
            </div>
          </div>

          {/* Feedback & Correction once answered */}
          {isChecked && (
            <div className="pt-4 border-t border-slate-100 space-y-4">
              <div
                className={`p-4 rounded-xl border space-y-2 text-xs ${
                  userChoice === currentItem.hasError
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                    : 'bg-rose-50/80 border-rose-200 text-rose-950'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm">
                  {userChoice === currentItem.hasError ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>¡Bien visto! Detectaste el error correctamente.</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      <span>¡Cuidado! Esta afirmación sí contenía una trampa.</span>
                    </>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-200/60 space-y-3">
                  <span className="font-bold text-slate-900 block text-xs sm:text-sm uppercase tracking-wider text-teal-800">
                    Corrección y regla oficial del examen (toca el texto en español para abrir la traducción al armenio):
                  </span>
                  <TranslatableText
                    text={currentItem.correctionIfError}
                    spanishClassName="text-sm sm:text-base text-slate-900 font-semibold"
                    armenianClassName="text-sm sm:text-base font-armenian text-amber-950 font-normal"
                    block
                    initiallyOpen={false}
                  />

                  <TranslatableText
                    text={currentItem.explanation}
                    spanishClassName="text-sm sm:text-base text-slate-800"
                    armenianClassName="text-sm sm:text-base font-armenian text-amber-950 font-normal"
                    block
                    initiallyOpen={false}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 text-white font-bold text-xs hover:bg-teal-800 transition-colors"
                >
                  <span>Siguiente caso</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
