import React, { useState } from 'react';
import { FileText, CheckCircle2, XCircle, ArrowRight, Volume2, Sparkles } from 'lucide-react';
import { TEXT_ANALYSIS_DATA } from './dataTexts.ts';
import { TextAnalysisItem, TextQuestion, UserStats } from './types.ts';
import { TranslatableText } from './TranslatableText.tsx';
import { speakSpanish } from './audioUtils.ts';

interface TextAnalysisViewProps {
  stats: UserStats;
}

export const TextAnalysisView: React.FC<TextAnalysisViewProps> = ({ stats }) => {
  const [selectedTextIndex, setSelectedTextIndex] = useState(0);
  const currentText: TextAnalysisItem =
    TEXT_ANALYSIS_DATA[selectedTextIndex] || TEXT_ANALYSIS_DATA[0];

  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [checkedQuestions, setCheckedQuestions] = useState<Record<string, boolean>>({});

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (!checkedQuestions[questionId]) {
      setUserAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    }
  };

  const handleCheckQuestion = (questionId: string) => {
    setCheckedQuestions((prev) => ({ ...prev, [questionId]: true }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Top Banner */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900">
            Comentario y Análisis de Textos Escolares
          </h1>
          <p className="text-xs text-slate-500">
            Lee fragmentos literarios y comunicativos, escucha su lectura y responde a las preguntas del examen.
          </p>
        </div>
      </div>

      {/* Select Text Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
        {TEXT_ANALYSIS_DATA.map((t, idx) => (
          <button
            key={t.id}
            type="button"
            onClick={() => {
              setSelectedTextIndex(idx);
              setUserAnswers({});
              setCheckedQuestions({});
            }}
            className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors border whitespace-nowrap ${
              selectedTextIndex === idx
                ? 'bg-teal-700 text-white border-teal-700 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            Texto {idx + 1}: {t.title.es.split('(')[0]}
          </button>
        ))}
      </div>

      {/* Text Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
        {/* Header of the text */}
        <div className="space-y-1 pb-4 border-b border-slate-100">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold text-teal-800 uppercase tracking-wider text-[11px]">
              {currentText.genre.es}
            </span>
            <span className="text-slate-400">{currentText.authorOrSource}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            {currentText.title.es}
          </h2>
          <p className="text-xs font-armenian text-amber-900">
            {currentText.title.hy}
          </p>
        </div>

        {/* Text Paragraphs with Audio & Armenian Toggle */}
        <div className="space-y-4 bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80">
          {currentText.textParagraphs.map((para, idx) => (
            <div key={idx} className="space-y-1">
              <TranslatableText
                text={para}
                spanishClassName="text-base sm:text-lg font-serif text-slate-900 leading-relaxed"
                armenianClassName="text-sm sm:text-base font-armenian text-amber-950 font-normal"
                showAudio
                speechRate={stats.speechRate}
                block
                initiallyOpen={false}
              />
            </div>
          ))}
        </div>

        {/* Exam Questions for this Text */}
        <div className="space-y-6 pt-6 border-t border-slate-100">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span>Preguntas de análisis de examen</span>
          </h3>

          <div className="space-y-6">
            {currentText.questions.map((q, qIdx) => {
              const userChoice = userAnswers[q.id];
              const isChecked = checkedQuestions[q.id];
              const isCorrect = userChoice === q.correctOptionId;

              return (
                <div
                  key={q.id}
                  className="p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4 bg-white shadow-xs"
                >
                  <div className="text-base sm:text-lg font-bold text-slate-900 flex items-start gap-2">
                    <span className="text-teal-700 font-bold shrink-0">{qIdx + 1}.</span>
                    <div className="flex-1">
                      <TranslatableText
                        text={q.prompt}
                        spanishClassName="text-base sm:text-lg font-bold text-slate-900"
                        armenianClassName="text-sm sm:text-base font-armenian text-amber-950 font-normal"
                        block
                        initiallyOpen={false}
                      />
                    </div>
                  </div>

                  {/* Hint banner */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 bg-slate-50/80 px-3.5 py-1.5 rounded-xl border border-slate-200/80">
                    <span className="font-bold text-teal-700">💡 Consejo:</span>
                    <span>Toca el texto en español para abrir la traducción al armenio. Toca la letra o la opción para responder.</span>
                  </div>

                  {/* Options */}
                  <div className="space-y-3">
                    {q.options.map((opt, idx) => {
                      const letter = String.fromCharCode(65 + idx);
                      const isSelected = userChoice === opt.id;
                      let optStyle = 'border-slate-200 bg-white hover:border-teal-300';
                      if (isChecked) {
                        if (opt.id === q.correctOptionId) {
                          optStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold';
                        } else if (isSelected) {
                          optStyle = 'border-rose-300 bg-rose-50/80 text-rose-950';
                        } else {
                          optStyle = 'opacity-40 border-slate-200 bg-slate-50';
                        }
                      } else if (isSelected) {
                        optStyle = 'border-teal-600 bg-teal-50/70 ring-1 ring-teal-500 shadow-xs';
                      }

                      return (
                        <div
                          key={opt.id}
                          onClick={() => handleSelectOption(q.id, opt.id)}
                          className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3.5 cursor-pointer transition-all ${optStyle}`}
                        >
                          <button
                            type="button"
                            onClick={() => handleSelectOption(q.id, opt.id)}
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

                  {/* Check button / Explanation */}
                  {!isChecked ? (
                    <div className="flex justify-end pt-2">
                      <button
                        type="button"
                        disabled={!userChoice}
                        onClick={() => handleCheckQuestion(q.id)}
                        className="px-6 py-2.5 rounded-xl bg-teal-700 text-white text-sm font-bold hover:bg-teal-800 disabled:opacity-40 transition-colors shadow-xs"
                      >
                        Comprobar respuesta
                      </button>
                    </div>
                  ) : (
                    <div
                      className={`p-4 sm:p-5 rounded-2xl border text-sm space-y-2 ${
                        isCorrect
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                          : 'bg-rose-50 border-rose-200 text-rose-950'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold text-base">
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            <span>¡Correcto!</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-5 h-5 text-rose-600" />
                            <span>Incorrecto.</span>
                          </>
                        )}
                      </div>
                      <TranslatableText
                        text={q.explanation}
                        spanishClassName="text-sm sm:text-base text-slate-800 font-medium"
                        armenianClassName="text-sm sm:text-base font-armenian text-amber-950 font-normal"
                        block
                        initiallyOpen={false}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
