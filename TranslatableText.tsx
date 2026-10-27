import React, { useState } from 'react';
import { Volume2, Languages, ChevronDown, ChevronUp, X } from 'lucide-react';
import { BilingualText } from './types.ts';
import { speakSpanish, isSpeechSupported } from './audioUtils.ts';

interface TranslatableTextProps {
  text: BilingualText;
  block?: boolean;
  showAudio?: boolean;
  speechRate?: number;
  className?: string;
  spanishClassName?: string;
  armenianClassName?: string;
  isQuizOption?: boolean;
  initiallyOpen?: boolean;
  onTranslateToggle?: (isOpen: boolean) => void;
  highlightWords?: string[];
}

export const TranslatableText: React.FC<TranslatableTextProps> = ({
  text,
  block = false,
  showAudio = false,
  speechRate = 1.0,
  className = '',
  spanishClassName = '',
  armenianClassName = '',
  isQuizOption = false,
  initiallyOpen = false,
  onTranslateToggle,
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioAvailable = isSpeechSupported();

  const handleToggleTranslation = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (onTranslateToggle) {
      onTranslateToggle(nextState);
    }
  };

  const handlePlayAudio = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPlaying(true);
    speakSpanish(text.es, speechRate, () => {
      setIsPlaying(false);
    });
  };

  // QUIZ OPTION MODE
  if (isQuizOption) {
    return (
      <div className={`flex flex-col w-full text-left ${className}`}>
        <div className="flex items-start justify-between gap-3">
          {/* Clicking on the Spanish text itself opens the translation independently */}
          <div
            onClick={handleToggleTranslation}
            className={`flex-1 cursor-pointer transition-colors hover:text-teal-900 group/opt ${spanishClassName}`}
            title="Toca para traducir al armenio (Սեղմեք հայերեն թարգմանության համար)"
          >
            <span className="border-b border-dotted border-slate-300 group-hover/opt:border-teal-600 transition-colors">
              {text.es}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 pt-0.5" onClick={(e) => e.stopPropagation()}>
            {showAudio && audioAvailable && (
              <button
                type="button"
                onClick={handlePlayAudio}
                className="p-1 rounded-md text-slate-400 hover:text-teal-600 hover:bg-slate-100 transition-colors"
                title="Escuchar pronunciación (es-ES)"
                aria-label="Escuchar pronunciación"
              >
                <Volume2 className={`w-4 h-4 ${isPlaying ? 'text-teal-600 animate-pulse' : ''}`} />
              </button>
            )}
            <button
              type="button"
              onClick={handleToggleTranslation}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg border transition-all ${
                isOpen
                  ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-xs'
                  : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-amber-50 hover:text-amber-800 hover:border-amber-200'
              }`}
              title={isOpen ? 'Ocultar traducción armenia' : 'Ver traducción armenia (Հայերեն թարգմանություն)'}
            >
              HY
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="mt-2.5 p-3 rounded-xl bg-amber-50 border border-amber-200/90 text-amber-950 shadow-xs animate-in fade-in duration-150"
          >
            <div className="flex items-center justify-between mb-1 pb-1 border-b border-amber-200/60">
              <span className="text-[11px] uppercase font-bold tracking-wider text-amber-800">
                Հայերեն թարգմանություն
              </span>
              <button
                type="button"
                onClick={handleToggleTranslation}
                className="p-0.5 rounded text-amber-600 hover:text-amber-900 transition-colors"
                title="Փակել թարգմանությունը"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className={`font-armenian text-sm sm:text-base leading-relaxed font-normal text-amber-950 ${armenianClassName}`}>
              {text.hy}
            </p>
          </div>
        )}
      </div>
    );
  }

  // BLOCK MODE
  if (block) {
    return (
      <div className={`relative ${className}`}>
        <div className="flex items-start justify-between gap-3">
          {/* Clicking on the Spanish text itself toggles the Armenian translation */}
          <div
            onClick={handleToggleTranslation}
            className={`flex-1 cursor-pointer transition-colors hover:text-teal-900 group/blk ${spanishClassName}`}
            title="Toca para ver u ocultar la traducción en armenio (Սեղմեք հայերենի համար)"
          >
            <span className="border-b border-dotted border-slate-300 group-hover/blk:border-teal-600 transition-colors">
              {text.es}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 pt-0.5" onClick={(e) => e.stopPropagation()}>
            {showAudio && audioAvailable && (
              <button
                type="button"
                onClick={handlePlayAudio}
                className="p-1.5 rounded-lg text-slate-400 hover:text-teal-600 hover:bg-slate-100 transition-colors"
                title="Escuchar en español (España)"
              >
                <Volume2 className={`w-4 h-4 ${isPlaying ? 'text-teal-600 animate-pulse' : ''}`} />
              </button>
            )}
            <button
              type="button"
              onClick={handleToggleTranslation}
              className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-lg border transition-all ${
                isOpen
                  ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-xs'
                  : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-amber-50 hover:text-amber-800 hover:border-amber-200'
              }`}
              title="Traducción al armenio (Հայերեն թարգմանություն)"
            >
              <Languages className="w-3.5 h-3.5 text-amber-600" />
              <span>HY</span>
              {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="mt-2.5 p-3 sm:p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 font-armenian leading-relaxed shadow-xs animate-in fade-in duration-150"
          >
            <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-amber-200/60">
              <span className="text-[11px] uppercase font-bold tracking-wider text-amber-800">
                Հայերեն թարգմանություն
              </span>
              <button
                type="button"
                onClick={handleToggleTranslation}
                className="p-0.5 rounded text-amber-600 hover:text-amber-900 transition-colors"
                title="Փակել թարգմանությունը"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className={`text-sm sm:text-base font-normal ${armenianClassName}`}>{text.hy}</p>
          </div>
        )}
      </div>
    );
  }

  // INLINE MODE
  return (
    <span className={`inline relative ${className}`}>
      <span
        onClick={handleToggleTranslation}
        className={`cursor-pointer border-b border-dotted border-slate-300 hover:border-teal-500 hover:text-teal-900 transition-colors ${spanishClassName}`}
        title="Toca para traducir al armenio (Սեղմեք հայերենի համար)"
      >
        {text.es}
      </span>
      <button
        type="button"
        onClick={handleToggleTranslation}
        className={`inline-flex items-center align-middle mx-1 px-1.5 py-0.5 text-xs font-bold rounded border transition-colors ${
          isOpen
            ? 'bg-amber-100 text-amber-900 border-amber-300'
            : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-amber-50 hover:text-amber-800'
        }`}
        title="Traducción al armenio"
      >
        HY
      </button>
      {showAudio && audioAvailable && (
        <button
          type="button"
          onClick={handlePlayAudio}
          className="inline-flex items-center align-middle text-slate-400 hover:text-teal-600 mr-1 p-0.5"
          title="Escuchar pronunciación"
        >
          <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'text-teal-600 animate-pulse' : ''}`} />
        </button>
      )}

      {isOpen && (
        <span
          onClick={(e) => e.stopPropagation()}
          className={`block mt-2 p-2.5 sm:p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 font-armenian text-sm sm:text-base leading-relaxed ${armenianClassName}`}
        >
          <span className="text-[10px] uppercase font-bold tracking-wider text-amber-800 block mb-0.5">
            Հայերեն թարգմանություն
          </span>
          {text.hy}
        </span>
      )}
    </span>
  );
};
