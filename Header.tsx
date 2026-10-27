import React from 'react';
import { Sparkles, Volume2, RotateCcw } from 'lucide-react';
import { UserStats } from './types.ts';

interface HeaderProps {
  stats: UserStats;
  onUpdateSpeechRate: (rate: number) => void;
  onResetProgress: () => void;
  onGoHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  stats,
  onUpdateSpeechRate,
  onResetProgress,
  onGoHome,
}) => {
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark */}
        <button
          type="button"
          onClick={onGoHome}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-teal-600 text-white font-bold flex items-center justify-center text-sm shadow-sm group-hover:bg-teal-700 transition-colors">
              1º
            </span>
            <div>
              <span className="font-bold text-slate-900 tracking-tight text-base sm:text-lg block leading-tight">
                ¡PREPARADO PARA EL EXAMEN!
              </span>
              <span className="text-[11px] text-teal-700 font-medium tracking-wide block">
                Lengua Castellana y Literatura · 1.º de ESO
              </span>
            </div>
          </div>
        </button>

        {/* Zone 2: Stats (Unboxed zero-pill metadata) */}
        <div className="hidden md:flex items-center gap-4 text-xs font-medium text-slate-600">
          <div className="flex items-center gap-1.5 text-amber-700">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="tabular-nums font-semibold">{stats.points}</span>
            <span className="text-slate-400">puntos</span>
          </div>
          <span className="text-slate-300">·</span>
          <div>
            <span className="tabular-nums font-semibold text-teal-800">{stats.streakDays}</span>
            <span className="text-slate-500 ml-1">días de racha</span>
          </div>
          <span className="text-slate-300">·</span>
          <div>
            <span className="tabular-nums font-semibold text-rose-700">{stats.mistakeIds.length}</span>
            <span className="text-slate-500 ml-1">fallos para repasar</span>
          </div>
        </div>

        {/* Zone 3: Controls & Audio Speed */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Audio rate selector */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
            <Volume2 className="w-3.5 h-3.5 text-slate-500 ml-1" />
            <span className="text-[11px] font-medium text-slate-600 hidden sm:inline">Voz:</span>
            {[0.8, 1.0, 1.2].map((rate) => (
              <button
                key={rate}
                type="button"
                onClick={() => onUpdateSpeechRate(rate)}
                className={`px-1.5 py-0.5 text-[11px] font-medium rounded transition-colors ${
                  stats.speechRate === rate
                    ? 'bg-white text-teal-800 shadow-xs font-semibold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title={`Velocidad de pronunciación: ${rate}x`}
              >
                {rate}x
              </button>
            ))}
          </div>

          {/* Reset progress button */}
          <button
            type="button"
            onClick={onResetProgress}
            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
            title="Reiniciar progreso guardado"
            aria-label="Reiniciar progreso"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
