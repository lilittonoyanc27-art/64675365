import React, { useState } from 'react';
import { Layers, CheckCircle2, XCircle, RotateCcw, Volume2, Sparkles } from 'lucide-react';
import { SENTENCE_ANALYSIS_DATA } from './dataSentenceAnalysis.ts';
import { SentenceAnalysisItem, SentenceWord, UserStats } from './types.ts';
import { TranslatableText } from './TranslatableText.tsx';
import { speakSpanish } from './audioUtils.ts';

const CATEGORIES = [
  'Sustantivo',
  'Pronombre',
  'Adjetivo',
  'Verbo',
  'Adverbio',
  'Determinante',
  'Artículo',
  'Preposición',
  'Conjunción',
  'Interjección',
];

interface SentenceParserViewProps {
  stats: UserStats;
}

export const SentenceParserView: React.FC<SentenceParserViewProps> = ({ stats }) => {
  const [selectedSentenceIndex, setSelectedSentenceIndex] = useState(0);
  const currentSentenceItem: SentenceAnalysisItem =
    SENTENCE_ANALYSIS_DATA[selectedSentenceIndex] || SENTENCE_ANALYSIS_DATA[0];

  const [activeWordIndex, setActiveWordIndex] = useState<number | null>(0);
  const [userGuesses, setUserGuesses] = useState<Record<number, string>>({});
  const [isWordAnswerChecked, setIsWordAnswerChecked] = useState<Record<number, boolean>>({});

  const handleSelectWord = (idx: number) => {
    setActiveWordIndex(idx);
  };

  const handlePickCategory = (category: string) => {
    if (activeWordIndex === null) return;
    setUserGuesses((prev) => ({
      ...prev,
      [activeWordIndex]: category,
    }));
    setIsWordAnswerChecked((prev) => ({
      ...prev,
      [activeWordIndex]: true,
    }));
  };

  const activeWord: SentenceWord | null =
    activeWordIndex !== null ? currentSentenceItem.words[activeWordIndex] : null;

  const totalWords = currentSentenceItem.words.length;
  let correctWordsCount = 0;
  currentSentenceItem.words.forEach((w, idx) => {
    if (userGuesses[idx] === w.category) {
      correctWordsCount++;
    }
  });

  const handleResetCurrentSentence = () => {
    setUserGuesses({});
    setIsWordAnswerChecked({});
    setActiveWordIndex(0);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Title */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900">
            Analizador Gramatical Palabra por Palabra
          </h1>
          <p className="text-xs text-slate-500">
            Toca cada palabra de la frase y selecciona su categoría gramatical correcta.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleResetCurrentSentence}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold hover:bg-slate-50 text-slate-700"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reiniciar análisis</span>
          </button>
        </div>
      </div>

      {/* Select Sentence */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
        {SENTENCE_ANALYSIS_DATA.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setSelectedSentenceIndex(idx);
              setUserGuesses({});
              setIsWordAnswerChecked({});
              setActiveWordIndex(0);
            }}
            className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors border whitespace-nowrap ${
              selectedSentenceIndex === idx
                ? 'bg-teal-700 text-white border-teal-700 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            Oración {idx + 1} ({item.difficulty})
          </button>
        ))}
      </div>

      {/* Interactive Sentence Board */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
        {/* Full sentence audio & Armenian translation */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="font-bold uppercase tracking-wider text-teal-800">
              Oración completa a analizar (toca el texto en español para abrir la traducción al armenio)
            </span>
          </div>

          <TranslatableText
            text={{ es: currentSentenceItem.sentence, hy: currentSentenceItem.translation }}
            spanishClassName="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug"
            armenianClassName="text-base font-armenian text-amber-950 font-normal"
            showAudio
            speechRate={stats.speechRate}
            block
            initiallyOpen={false}
          />
        </div>

        {/* Word Chips Row */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
            Paso 1: Haz clic en una palabra para analizarla
          </span>

          <div className="flex flex-wrap gap-2.5">
            {currentSentenceItem.words.map((w, idx) => {
              const isSelected = activeWordIndex === idx;
              const hasGuessed = isWordAnswerChecked[idx];
              const isCorrect = userGuesses[idx] === w.category;

              let chipStyle =
                'bg-white border-slate-200 text-slate-800 hover:border-teal-400';
              if (hasGuessed) {
                if (isCorrect) {
                  chipStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold';
                } else {
                  chipStyle = 'bg-rose-50 border-rose-300 text-rose-950 font-bold';
                }
              }

              if (isSelected) {
                chipStyle += ' ring-2 ring-teal-600 shadow-xs';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectWord(idx)}
                  className={`px-3.5 py-2 rounded-xl text-sm border font-medium transition-all text-left flex flex-col items-center min-w-[70px] ${chipStyle}`}
                >
                  <span className="text-base font-bold">{w.word}</span>
                  {hasGuessed && (
                    <span className="text-[10px] font-semibold tracking-wide uppercase mt-1 opacity-80">
                      {userGuesses[idx]}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Picker & Explanation for Active Word */}
        {activeWord && activeWordIndex !== null && (
          <div className="pt-4 border-t border-slate-100 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                Paso 2: ¿Qué categoría gramatical es "{activeWord.word}"?
              </span>
              <button
                type="button"
                onClick={() => speakSpanish(activeWord.word, stats.speechRate)}
                className="text-xs text-slate-400 hover:text-teal-700 flex items-center gap-1"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Pronunciar</span>
              </button>
            </div>

            {/* 10 Category Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {CATEGORIES.map((cat) => {
                const isSelected = userGuesses[activeWordIndex] === cat;
                const isChecked = isWordAnswerChecked[activeWordIndex];
                const isCorrect = cat === activeWord.category;

                let btnStyles = 'bg-slate-50 border-slate-200 hover:bg-teal-50 hover:border-teal-300 text-slate-700';
                if (isChecked) {
                  if (isCorrect) {
                    btnStyles = 'bg-emerald-600 border-emerald-600 text-white font-bold';
                  } else if (isSelected) {
                    btnStyles = 'bg-rose-600 border-rose-600 text-white font-bold';
                  } else {
                    btnStyles = 'opacity-40 bg-slate-50 border-slate-200 text-slate-400';
                  }
                } else if (isSelected) {
                  btnStyles = 'bg-teal-700 border-teal-700 text-white font-bold';
                }

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handlePickCategory(cat)}
                    className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all ${btnStyles}`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Explanation card once selected */}
            {isWordAnswerChecked[activeWordIndex] && (
              <div
                className={`p-4 rounded-xl border space-y-2 text-xs ${
                  userGuesses[activeWordIndex] === activeWord.category
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                    : 'bg-rose-50/80 border-rose-200 text-rose-950'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm">
                  {userGuesses[activeWordIndex] === activeWord.category ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>¡Correcto! Es un {activeWord.category}.</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      <span>Incorrecto. Es un {activeWord.category}.</span>
                    </>
                  )}
                </div>

                {activeWord.genderNumber && (
                  <p className="font-mono text-[11px] opacity-90">
                    Rasgos morfológicos: {activeWord.genderNumber}
                  </p>
                )}

                <TranslatableText
                  text={activeWord.explanation}
                  spanishClassName="font-medium text-sm sm:text-base leading-relaxed text-slate-800"
                  armenianClassName="text-sm sm:text-base font-armenian font-normal"
                  block
                  initiallyOpen={false}
                />
              </div>
            )}
          </div>
        )}

        {/* Global Score of sentence */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
          <span className="font-semibold text-slate-600">
            Progreso de esta oración: {correctWordsCount} / {totalWords} palabras correctas
          </span>

          {correctWordsCount === totalWords && (
            <span className="font-bold text-emerald-700 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>¡Oración completamente analizada con éxito!</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
