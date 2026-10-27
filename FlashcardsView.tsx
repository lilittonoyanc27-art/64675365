import React, { useState } from 'react';
import {
  RotateCcw,
  Volume2,
  Check,
  X,
  Sparkles,
  Shuffle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Flashcard, TopicId, UserStats } from './types.ts';
import { FLASHCARDS_DATA } from './dataFlashcards.ts';
import { TOPICS_DATA } from './dataTopics.ts';
import { TranslatableText } from './TranslatableText.tsx';
import { speakSpanish } from './audioUtils.ts';
import { shuffleArray } from './shuffleUtils.ts';

interface FlashcardsViewProps {
  stats: UserStats;
  onUpdateFlashcardMastery: (cardId: string, isKnown: boolean) => void;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  stats,
  onUpdateFlashcardMastery,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [isReverseMode, setIsReverseMode] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // Filter cards
  const filteredCards =
    selectedTopic === 'all'
      ? FLASHCARDS_DATA
      : FLASHCARDS_DATA.filter((fc) => fc.topicId === selectedTopic);

  const [cardsList, setCardsList] = useState<Flashcard[]>(() => [...filteredCards]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update card list when filter changes
  const handleFilterChange = (topic: string) => {
    setSelectedTopic(topic);
    const newCards =
      topic === 'all'
        ? FLASHCARDS_DATA
        : FLASHCARDS_DATA.filter((fc) => fc.topicId === topic);
    setCardsList(newCards);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleShuffleCards = () => {
    setCardsList(shuffleArray(cardsList));
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const currentCard = cardsList[currentIndex] || cardsList[0];

  const handleKnown = (known: boolean) => {
    if (!currentCard) return;
    onUpdateFlashcardMastery(currentCard.id, known);
    if (currentIndex < cardsList.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Top Controls */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900">
            Memoriza: Tarjetas de Estudio
          </h1>
          <p className="text-xs text-slate-500">
            Repasa términos y definiciones para fijar la teoría de Lengua y Literatura.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Mode switch */}
          <button
            type="button"
            onClick={() => {
              setIsReverseMode(!isReverseMode);
              setIsFlipped(false);
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
              isReverseMode
                ? 'bg-indigo-100 text-indigo-900 border-indigo-300'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {isReverseMode ? 'Modo inverso (Definición → Término)' : 'Modo normal (Término → Definición)'}
          </button>

          {/* Shuffle button */}
          <button
            type="button"
            onClick={handleShuffleCards}
            className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors"
            title="Mezclar tarjetas aleatoriamente"
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Topic Filter */}
      <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
        <button
          type="button"
          onClick={() => handleFilterChange('all')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            selectedTopic === 'all'
              ? 'bg-teal-700 text-white shadow-xs'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          Todos los temas ({FLASHCARDS_DATA.length})
        </button>
        {TOPICS_DATA.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => handleFilterChange(t.id)}
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

      {/* Main Flashcard */}
      {currentCard ? (
        <div className="space-y-4">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`min-h-[320px] rounded-2xl p-6 sm:p-10 flex flex-col justify-between cursor-pointer border-2 shadow-sm transition-all select-none ${
              isFlipped
                ? 'bg-amber-50/90 border-amber-300'
                : 'bg-white border-teal-500/50 hover:border-teal-600 hover:shadow-md'
            }`}
          >
            {/* Header of Card */}
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-medium text-slate-500">
                Tarjeta {currentIndex + 1} de {cardsList.length}
              </span>
              <span className="text-teal-700 font-semibold text-[11px] underline">
                {isFlipped ? 'Girar al anverso' : 'Toca para descubrir la solución'}
              </span>
            </div>

            {/* Content Front/Back */}
            <div className="my-auto py-4 text-center space-y-4">
              {!isFlipped ? (
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block">
                    {!isReverseMode ? '¿Recuerdas la definición?' : '¿A qué concepto corresponde?'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                    {!isReverseMode ? currentCard.term.es : currentCard.definition.es}
                  </h2>
                  <p className="text-sm sm:text-base font-armenian text-amber-900 mt-2">
                    {!isReverseMode ? currentCard.term.hy : currentCard.definition.hy}
                  </p>
                </div>
              ) : (
                <div className="text-left max-w-xl mx-auto space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
                    {!isReverseMode ? 'Definición exacta y ejemplo' : 'Término correcto'}
                  </span>
                  <div className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
                    {!isReverseMode ? currentCard.definition.es : currentCard.term.es}
                  </div>
                  <div className="text-xs sm:text-sm font-armenian text-amber-950 font-normal">
                    {!isReverseMode ? currentCard.definition.hy : currentCard.term.hy}
                  </div>

                  <div className="p-4 rounded-xl bg-white/90 border border-amber-200 space-y-1.5 shadow-xs">
                    <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider text-teal-800">
                      Ejemplo para el examen:
                    </span>
                    <TranslatableText
                      text={currentCard.example}
                      spanishClassName="text-base sm:text-lg font-semibold text-slate-900"
                      armenianClassName="text-sm sm:text-base font-armenian text-amber-950 font-normal"
                      block
                      initiallyOpen={false}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Pronounce & Hint footer */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  speakSpanish(!isFlipped ? currentCard.term.es : currentCard.definition.es, stats.speechRate);
                }}
                className="flex items-center gap-1.5 text-slate-500 hover:text-teal-700 transition-colors"
                title="Escuchar en español"
              >
                <Volume2 className="w-4 h-4 text-teal-600" />
                <span>Escuchar pronunciación</span>
              </button>

              {currentCard.clue && (
                <span className="text-[11px] text-slate-400 italic">
                  Pista: {currentCard.clue.es}
                </span>
              )}
            </div>
          </div>

          {/* Action buttons: Easy / Hard / Next */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                disabled={currentIndex === 0}
                onClick={() => {
                  setCurrentIndex((prev) => Math.max(0, prev - 1));
                  setIsFlipped(false);
                }}
                className="px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                disabled={currentIndex === cardsList.length - 1}
                onClick={() => {
                  setCurrentIndex((prev) => Math.min(cardsList.length - 1, prev + 1));
                  setIsFlipped(false);
                }}
                className="px-3 py-2 text-xs font-semibold rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Repetition feedback */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={() => handleKnown(false)}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 transition-colors"
              >
                <X className="w-4 h-4" />
                <span>Necesito repasar</span>
              </button>

              <button
                type="button"
                onClick={() => handleKnown(true)}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-xs"
              >
                <Check className="w-4 h-4" />
                <span>¡Me lo sé!</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-sm text-slate-500">No hay tarjetas disponibles en este filtro.</p>
      )}
    </div>
  );
};
