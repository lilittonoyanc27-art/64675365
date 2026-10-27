import React, { useState } from 'react';
import {
  RotateCcw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { ALL_QUESTIONS } from './dataQuestionsBank.ts';
import { Question, UserStats, TopicId } from './types.ts';
import { TranslatableText } from './TranslatableText.tsx';

interface ErrorReviewViewProps {
  stats: UserStats;
  onRecordQuestion: (questionId: string, topicId: TopicId, isCorrect: boolean) => void;
  onClearAllErrors: () => void;
}

export const ErrorReviewView: React.FC<ErrorReviewViewProps> = ({
  stats,
  onRecordQuestion,
  onClearAllErrors,
}) => {
  const mistakeQuestions: Question[] = stats.mistakeIds
    .map((id) => ALL_QUESTIONS.find((q) => q.id === id))
    .filter((q): q is Question => q !== undefined);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  const currentQ = mistakeQuestions[currentIndex];

  const handleSelect = (optId: string) => {
    if (!isChecked) setSelectedOpt(optId);
  };

  const handleCheck = () => {
    if (!currentQ || !selectedOpt || isChecked) return;
    const isCorrect = selectedOpt === currentQ.correctOptionId;
    setIsChecked(true);
    onRecordQuestion(currentQ.id, currentQ.topicId, isCorrect);
  };

  const handleNext = () => {
    setSelectedOpt(null);
    setIsChecked(false);
    if (currentIndex >= mistakeQuestions.length - 1) {
      setCurrentIndex(0);
    }
  };

  // Comparative matrices for concepts frequently confused in 1.º ESO
  const confusionPairs = [
    {
      title: 'Metáfora vs Comparación (Símil)',
      conceptA: {
        name: 'Metáfora',
        rule: 'Identificación directa entre término real (A) e imaginario (B) SIN nexos comparativos.',
        example: '"Tus ojos son luceros" / "Las perlas de tu boca".',
      },
      conceptB: {
        name: 'Comparación (Símil)',
        rule: 'Unión de dos elementos mediante un nexo comparativo explícito ("como", "parece", "igual que").',
        example: '"Tus ojos son como luceros" / "Corría veloz como el viento".',
      },
    },
    {
      title: 'Anáfora vs Epanadiplosis',
      conceptA: {
        name: 'Anáfora',
        rule: 'Repetición de una palabra al COMIENZO de varios versos o frases seguidos.',
        example: '"Temprano levantó la muerte... / temprano madrugó..."',
      },
      conceptB: {
        name: 'Epanadiplosis',
        rule: 'Repetición de la misma palabra al PRINCIPIO Y AL FINAL del MISMO verso.',
        example: '"Verde que te quiero verde" / "Silencio, solo pido silencio".',
      },
    },
    {
      title: 'Asíndeton vs Polisíndeton',
      conceptA: {
        name: 'Asíndeton (A = sin)',
        rule: 'Supresión intencionada de conjunciones ("y", "e", "ni") para dar rapidez y dinamismo.',
        example: '"Llegué, vi, vencí" / "Corre, salta, vuela".',
      },
      conceptB: {
        name: 'Polisíndeton (Poli = muchos)',
        rule: 'Repetición continuada de conjunciones coordinantes para dar lentitud, solemnidad o peso.',
        example: '"Y ríe y canta y sueña y llora".',
      },
    },
    {
      title: 'Mito vs Leyenda',
      conceptA: {
        name: 'Mito',
        rule: 'Relato sagrado de dioses y héroes que explica el origen del universo o de fenómenos naturales en un tiempo remoto.',
        example: 'El mito de Prometeo y el fuego / El mito de Ícaro.',
      },
      conceptB: {
        name: 'Leyenda',
        rule: 'Relato tradicional situado en un lugar geográfico y momento histórico reales, al que se suman elementos fantásticos.',
        example: 'La leyenda del Monte de las Ánimas (en Soria) / Los amantes de Teruel.',
      },
    },
    {
      title: 'Determinante vs Pronombre',
      conceptA: {
        name: 'Determinante',
        rule: 'Acompaña SIEMPRE a un sustantivo para delimitarlo.',
        example: '"Este libro es interesante" / "Mi amigo".',
      },
      conceptB: {
        name: 'Pronombre',
        rule: 'Aparece SOLO al lado del verbo y SUSTITUYE al sustantivo.',
        example: '"Este es el mío" / "Él vino ayer".',
      },
    },
    {
      title: 'Adjetivo vs Adverbio',
      conceptA: {
        name: 'Adjetivo',
        rule: 'Palabra VARIABLE que concuerda en género y número con el sustantivo al que describe.',
        example: '"Un coche rápido" / "Unas corredoras rápidas".',
      },
      conceptB: {
        name: 'Adverbio',
        rule: 'Palabra INVARIABLE (no cambia a plural ni femenino) que complementa a un verbo, adjetivo u otro adverbio.',
        example: '"Ellas corren muy rápido" (invariable).',
      },
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
      {/* Top Banner */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700 mb-1">
            <AlertTriangle className="w-4 h-4" />
            <span>Clínica de Errores e Intervalos</span>
          </div>
          <h1 className="text-xl font-bold text-slate-900">
            Repasa tus errores y conceptos confusos
          </h1>
          <p className="text-xs text-slate-500">
            Reentrena las preguntas que fallaste hasta que desaparezcan de tu lista de fallos.
          </p>
        </div>

        {mistakeQuestions.length > 0 && (
          <button
            type="button"
            onClick={onClearAllErrors}
            className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:text-rose-700 hover:bg-rose-50 transition-colors"
          >
            Limpiar historial de fallos
          </button>
        )}
      </div>

      {/* Re-testing Box */}
      {mistakeQuestions.length > 0 && currentQ ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              Fallo <span className="font-bold text-slate-900">{currentIndex + 1}</span> de{' '}
              <span className="font-bold text-rose-600">{mistakeQuestions.length}</span>
            </span>
            <span className="font-semibold text-slate-700">
              Tema: {currentQ.topicId.replace('-', ' ')}
            </span>
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
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 bg-slate-50/80 px-3.5 py-1.5 rounded-xl border border-slate-200/80">
            <span className="font-bold text-teal-700">💡 Consejo:</span>
            <span>Toca el texto en español para abrir la traducción al armenio. Toca la letra o la opción para responder.</span>
          </div>

          {/* Options */}
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
                      armenianClassName="text-sm sm:text-base font-armenian"
                      isQuizOption
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Check / Next */}
          <div className="pt-4 border-t border-slate-100">
            {!isChecked ? (
              <div className="flex justify-end">
                <button
                  type="button"
                  disabled={!selectedOpt}
                  onClick={handleCheck}
                  className="px-6 py-2.5 rounded-xl bg-teal-700 text-white font-bold text-sm hover:bg-teal-800 disabled:opacity-40 transition-colors shadow-xs"
                >
                  Comprobar corrección
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div
                  className={`p-4 sm:p-5 rounded-2xl border text-sm space-y-2 ${
                    selectedOpt === currentQ.correctOptionId
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                      : 'bg-rose-50 border-rose-200 text-rose-950'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-bold text-base">
                    {selectedOpt === currentQ.correctOptionId ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>¡Genial! Has superado este fallo. Se elimina de la lista.</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-rose-600" />
                        <span>Todavía persiste la duda. Lee atentamente la regla:</span>
                      </>
                    )}
                  </div>
                  <TranslatableText
                    text={currentQ.explanation}
                    spanishClassName="text-sm sm:text-base text-slate-800 font-medium"
                    armenianClassName="text-sm sm:text-base font-armenian text-amber-950"
                    block
                    initiallyOpen={false}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-teal-700 text-white font-bold text-sm hover:bg-teal-800 transition-colors shadow-xs"
                  >
                    <span>Siguiente fallo de la lista</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="p-8 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-center space-y-2">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
          <h2 className="text-lg font-bold text-emerald-900">
            ¡Tu bandeja de fallos está completamente limpia!
          </h2>
          <p className="text-xs text-emerald-800 max-w-md mx-auto">
            No tienes preguntas erróneas pendientes de repasar. Si cometes fallos en las prácticas o en los simulacros, aparecerán automáticamente aquí.
          </p>
        </div>
      )}

      {/* Side-by-side Comparative Tables for Difficult Pairs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span>Guía de Distinciones Críticas para el Examen</span>
          </h2>
          <span className="text-xs text-slate-500">Pares que los alumnos suelen confundir</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {confusionPairs.map((pair, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3.5 shadow-xs"
            >
              <h3 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-2">
                {pair.title}
              </h3>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-xl bg-teal-50/60 border border-teal-100">
                  <span className="font-bold text-teal-900 block mb-1">{pair.conceptA.name}</span>
                  <p className="text-slate-700 leading-relaxed">{pair.conceptA.rule}</p>
                  <p className="text-teal-950 font-semibold mt-1">Ej.: {pair.conceptA.example}</p>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/70">
                  <span className="font-bold text-amber-900 block mb-1">{pair.conceptB.name}</span>
                  <p className="text-slate-700 leading-relaxed">{pair.conceptB.rule}</p>
                  <p className="text-amber-950 font-semibold mt-1">Ej.: {pair.conceptB.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
